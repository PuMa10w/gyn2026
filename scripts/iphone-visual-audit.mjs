import fs from 'fs/promises';
import path from 'path';
import { chromium, devices } from 'playwright';
let canvasTools = null;
try {
  canvasTools = await import('canvas');
} catch (error) {
  console.warn(`[visual-audit] Pixel comparison disabled: ${error.message}`);
}

const baseUrl = process.env.AUDIT_URL ?? 'http://127.0.0.1:4173';
const update = process.argv.includes('--update');
const deviceNames = ['iPhone SE', 'iPhone 13', 'iPhone 15 Pro Max'].filter((name) => devices[name]);
const outDir = path.join('artifacts', 'iphone-visual-current');
const goldenDir = path.join('artifacts', 'iphone-visual-golden');

const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const clickVisibleButton = async (page, pattern, label) => {
  const candidates = await page.getByRole('button', { name: pattern }).all();
  for (const locator of candidates) {
    if (await locator.isVisible().catch(() => false)) {
      await locator.click({ timeout: 5000 });
      return;
    }
  }

  const clicked = await page.evaluate((source) => {
    const pattern = new RegExp(source, 'i');
    const candidates = Array.from(document.querySelectorAll('button, [role="button"], a'));
    const visible = candidates.filter((element) => {
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);
      return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
    });
    const target = visible.find((element) => {
      const text = `${element.textContent ?? ''} ${element.getAttribute('aria-label') ?? ''}`;
      return pattern.test(text);
    });
    target?.click();
    return Boolean(target);
  }, pattern.source);

  if (!clicked) throw new Error(`${label}: visible button not found`);
};

const openOverflowAction = async (page, actionPattern, label) => {
  await clickVisibleButton(page, /Открыть быстрые действия|⋯/i, `${label}-overflow`);
  await page.waitForTimeout(120);
  await clickVisibleButton(page, actionPattern, label);
};

const flows = [
  { name: 'home', threshold: 0.08, run: async (page) => page.locator('.home-shell').waitFor({ state: 'visible' }) },
  {
    name: 'catalog',
    threshold: 0.07,
    run: async (page) => {
      await clickVisibleButton(page, /Гинекология/i, 'catalog-navigation');
      await page.locator('.disease-card').first().waitFor({ state: 'visible' });
    },
  },
  {
    name: 'disease-modal',
    threshold: 0.045,
    run: async (page) => {
      await page.locator('.disease-card-action, .disease-card').first().click();
      await page.getByTestId('disease-modal').waitFor({ state: 'visible' });
      await page.getByRole('tab', { name: 'Диагностика' }).click();
    },
  },
  {
    name: 'questionnaire',
    threshold: 0.055,
    reset: async (page) => {
      await page.keyboard.press('Escape').catch(() => undefined);
      await page.goto(`${baseUrl}/?visual=${Date.now()}-questionnaire`, { waitUntil: 'domcontentloaded' });
    },
    run: async (page) => {
      await openOverflowAction(page, /Шкалы|Опросники/i, 'questionnaire-navigation');
      await page.locator('.questionnaire-modal').waitFor({ state: 'visible' });
    },
  },
  {
    name: 'pharmacology',
    threshold: 0.055,
    reset: async (page) => {
      await page.keyboard.press('Escape').catch(() => undefined);
      await page.goto(`${baseUrl}/?visual=${Date.now()}-pharma`, { waitUntil: 'domcontentloaded' });
    },
    run: async (page) => {
      await openOverflowAction(page, /Фарма|Фармакология/i, 'pharmacology-navigation');
      await page.locator('.pharmacology-modal').waitFor({ state: 'visible' });
    },
  },
];

const compareImages = async (currentPath, goldenPath) => {
  if (!canvasTools) return 0;
  const { createCanvas, loadImage } = canvasTools;
  const [current, golden] = await Promise.all([loadImage(currentPath), loadImage(goldenPath)]);
  if (current.width !== golden.width || current.height !== golden.height) return 1;

  const canvas = createCanvas(current.width, current.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(current, 0, 0);
  const currentData = ctx.getImageData(0, 0, current.width, current.height).data;
  ctx.clearRect(0, 0, current.width, current.height);
  ctx.drawImage(golden, 0, 0);
  const goldenData = ctx.getImageData(0, 0, golden.width, golden.height).data;

  let changed = 0;
  const pixels = current.width * current.height;
  for (let index = 0; index < currentData.length; index += 4) {
    const delta = Math.abs(currentData[index] - goldenData[index])
      + Math.abs(currentData[index + 1] - goldenData[index + 1])
      + Math.abs(currentData[index + 2] - goldenData[index + 2])
      + Math.abs(currentData[index + 3] - goldenData[index + 3]);
    if (delta > 42) changed += 1;
  }

  return changed / pixels;
};

await fs.mkdir(outDir, { recursive: true });
await fs.mkdir(goldenDir, { recursive: true });

const browser = await chromium.launch({ executablePath: process.env.CHROME_EXECUTABLE || undefined, headless: true });
const results = [];

for (const deviceName of deviceNames) {
  const page = await browser.newPage(devices[deviceName]);
  await page.goto(`${baseUrl}/?visual=${Date.now()}-${slug(deviceName)}`, { waitUntil: 'domcontentloaded' });

  for (const flow of flows) {
    if (flow.reset) await flow.reset(page);
    await flow.run(page);
    await sleep(240);

    const fileName = `${slug(deviceName)}-${flow.name}.png`;
    const currentPath = path.join(outDir, fileName);
    const goldenPath = path.join(goldenDir, fileName);
    await page.screenshot({ path: currentPath, fullPage: false });

    let status = 'created';
    let diff = 0;
    try {
      await fs.access(goldenPath);
      if (update) {
        await fs.copyFile(currentPath, goldenPath);
        status = 'updated';
      } else {
        diff = await compareImages(currentPath, goldenPath);
        status = diff <= flow.threshold ? 'ok' : 'failed';
      }
    } catch {
      await fs.copyFile(currentPath, goldenPath);
      status = 'created';
    }

    results.push({ device: deviceName, flow: flow.name, status, diff: Number(diff.toFixed(4)), threshold: flow.threshold, currentPath, goldenPath });
  }

  await page.close();
}

await browser.close();

const failed = results.filter((result) => result.status === 'failed');
if (failed.length) {
  console.error(JSON.stringify({ ok: false, failed, results }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, update, results }, null, 2));

