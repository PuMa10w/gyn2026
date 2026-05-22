import { chromium, devices } from 'playwright';

const baseUrl = process.env.AUDIT_URL ?? process.env.AUDIT_BASE_URL ?? 'http://127.0.0.1:4173';
const device = devices['iPhone 13'] ?? { viewport: { width: 390, height: 844 }, isMobile: true };

async function ensureServer(url) {
  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (response.ok) return;
  } catch {
    // handled below
  }

  console.error('Audit server is not available. Run npm.cmd run verify:premium or start preview first.');
  process.exit(1);
}

async function clickVisible(page, pattern, label) {
  const buttons = page.getByRole('button', { name: pattern });
  const count = await buttons.count();
  for (let index = 0; index < count; index += 1) {
    const button = buttons.nth(index);
    if (await button.isVisible().catch(() => false)) {
      await button.click({ timeout: 8000 });
      return;
    }
  }

  const clicked = await page.evaluate((source) => {
    const re = new RegExp(source, 'i');
    const candidates = Array.from(document.querySelectorAll('button, [role="button"], a'));
    const target = candidates.find((element) => {
      const rect = element.getBoundingClientRect();
      const text = `${element.textContent || ''} ${element.getAttribute('aria-label') || ''}`;
      return rect.width > 0 && rect.height > 0 && re.test(text);
    });
    target?.click();
    return Boolean(target);
  }, pattern.source);

  if (!clicked) throw new Error(`${label}: action not found`);
}

async function assertNoOverflow(page, label) {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  if (overflow > 3) throw new Error(`${label}: horizontal overflow ${overflow}px`);
}

async function assertNoMojibake(page, label) {
  const findings = await page.evaluate(() => {
    const text = document.body.innerText;
    const patterns = [/\uFFFD/g, /[РСГв][\u0080-\u00ff\u0402-\u040f\u0452-\u045f\u201a-\u201e\u2020-\u2022\u2013\u2014\u2030\u2039\u203a\u20ac\u2122]/g, /В[©®]/g, /\\u0432\\u2122[\\u0490\\u040e]/g];
    return patterns.flatMap((pattern) => [...text.matchAll(pattern)].map((match) => match[0])).slice(0, 10);
  });
  if (findings.length) throw new Error(`${label}: visible mojibake ${findings.join(', ')}`);
}

async function openQuickAction(page, pattern, label) {
  if (!(await page.locator('.navbar-menu, .quick-actions-menu').isVisible().catch(() => false))) {
    await clickVisible(page, /Открыть быстрые действия|быстрые действия|\.\.\./i, 'quick actions');
    await page.waitForTimeout(120);
  }
  await clickVisible(page, pattern, label);
}

await ensureServer(baseUrl);
const browser = await chromium.launch({ executablePath: process.env.CHROME_EXECUTABLE || undefined, headless: true });
const page = await browser.newPage(device);
const messages = [];
page.on('console', (message) => {
  const text = message.text();
  const expectedNetworkNoise = /ERR_(NETWORK_ACCESS_DENIED|FAILED|BLOCKED_BY_CLIENT)/i.test(text);
  if (message.type() === 'error' && !expectedNetworkNoise) messages.push({ type: 'console', text });
});
page.on('pageerror', (error) => messages.push({ type: 'pageerror', text: error.message }));

await page.goto(`${baseUrl}/?workflowAudit=${Date.now()}`, { waitUntil: 'domcontentloaded' });
await page.waitForSelector('#root, main, #main-content', { timeout: 30000 });
await assertNoOverflow(page, 'home');
await assertNoMojibake(page, 'home');

await clickVisible(page, /Гинекология/i, 'gynecology');
await page.locator('.disease-card').first().waitFor({ state: 'visible', timeout: 30000 });
await page.locator('.search-input').first().fill('эндометриоз');
await page.locator('.disease-card').first().waitFor({ state: 'visible', timeout: 10000 });
await page.locator('.category-filter').first().evaluate((el) => { el.scrollLeft = el.scrollWidth; });
await clickVisible(page, /Все разделы/i, 'all categories');
await page.locator('.disease-card').first().click();
await page.locator('.modal-content, [role="dialog"]').first().waitFor({ state: 'visible', timeout: 12000 });

for (const tabName of ['Диагностика', 'AI помощник', '3D атлас', 'AI-диагност', 'PubMed']) {
  const tab = page.getByRole('tab', { name: tabName }).first();
  await tab.scrollIntoViewIfNeeded();
  await tab.click({ timeout: 8000 });
  await page.waitForTimeout(260);
  await assertNoOverflow(page, `disease tab ${tabName}`);
  await assertNoMojibake(page, `disease tab ${tabName}`);
}

await page.locator('.modal-close').first().click();
await page.locator('.modal-content, [role="dialog"]').first().waitFor({ state: 'hidden', timeout: 8000 }).catch(() => undefined);
await clickVisible(page, /Акушерство/i, 'obstetrics');
await page.locator('.disease-card').first().waitFor({ state: 'visible', timeout: 12000 });
await assertNoOverflow(page, 'obstetrics');

await openQuickAction(page, /Фарма|фарм/i, 'pharmacology');
await page.locator('.pharmacology-modal').waitFor({ state: 'visible', timeout: 12000 });
await page.locator('.medication-card').first().waitFor({ state: 'visible', timeout: 12000 });
await page.locator('.pharma-search-input, .pharmacology-modal .search-input').first().fill('прогестерон');
await page.waitForTimeout(220);
if ((await page.locator('.medication-card').count()) < 1) throw new Error('pharmacology search returned no medications');
await page.locator('.modal-close').first().click();
await page.locator('.pharmacology-modal').waitFor({ state: 'hidden', timeout: 8000 }).catch(() => undefined);

await openQuickAction(page, /Шкалы|Опросники/i, 'questionnaires');
await page.locator('.questionnaire-modal .q-card').first().waitFor({ state: 'visible', timeout: 12000 });
await page.locator('.questionnaire-modal .q-card').first().click();
await page.locator('.q-question, .q-result').first().waitFor({ state: 'visible', timeout: 8000 });
for (let guard = 0; guard < 80; guard += 1) {
  if (await page.locator('.q-result').isVisible().catch(() => false)) break;
  const options = page.locator('.q-option');
  const optionCount = await options.count();
  await options.nth(Math.min(1, Math.max(0, optionCount - 1))).click();
  await clickVisible(page, /Далее|Получить результат/i, 'questionnaire next');
  await page.waitForTimeout(80);
}
await page.locator('.q-result').waitFor({ state: 'visible', timeout: 12000 });
const resultText = await page.locator('.q-result').innerText();
if (!/Рекомендация|Следующие шаги|Профессиональное заключение/i.test(resultText)) {
  throw new Error('questionnaire result is missing professional summary sections');
}
await assertNoOverflow(page, 'questionnaire result');
await assertNoMojibake(page, 'questionnaire result');

if (messages.length) throw new Error(`Console/page errors: ${messages.map((entry) => entry.text).join(' | ')}`);

await browser.close();
console.log(JSON.stringify({ ok: true, flow: 'home-catalog-card-tools-pharma-questionnaire', messages }, null, 2));


