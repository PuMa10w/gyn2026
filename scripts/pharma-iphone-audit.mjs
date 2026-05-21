import { chromium, devices } from 'playwright';

const baseUrl = process.env.AUDIT_URL ?? 'http://127.0.0.1:4173';
const deviceNames = ['iPhone SE', 'iPhone 13', 'iPhone 15 Pro Max'].filter((name) => devices[name]);

async function ensureServer(url) {
  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (response.ok) return;
  } catch {
    // handled below
  }
  console.error('Audit server is not available. Run npm.cmd run verify:premium or start npm.cmd run preview -- --host 127.0.0.1 --port 4173 first.');
  process.exit(1);
}

await ensureServer(baseUrl);

const browser = await chromium.launch({ executablePath: process.env.CHROME_EXECUTABLE || undefined, headless: true });
const results = [];

for (const deviceName of deviceNames) {
  const page = await browser.newPage(devices[deviceName]);
  const messages = [];
  page.on('console', (message) => {
    if (message.type() === 'error') messages.push(message.text());
  });
  page.on('pageerror', (error) => messages.push(error.message));

  await page.goto(baseUrl + '/?pharmaAudit=' + Date.now() + '-' + deviceName.replace(/\s+/g, '-'), { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: /фарм/i }).first().click();
  await page.locator('.pharmacology-modal').waitFor({ state: 'visible', timeout: 10000 });
  await page.locator('.medication-card').first().waitFor({ state: 'visible', timeout: 10000 });

  const visibleMedicationCount = await page.locator('.medication-card').count();
  if (visibleMedicationCount < 1) throw new Error(deviceName + ': pharmacology has no visible medications');

  await page.locator('.pharma-search-input, .pharmacology-modal .search-input').first().fill('прогестерон');
  await page.waitForTimeout(350);
  const filteredCount = await page.locator('.medication-card').count();
  if (filteredCount < 1) throw new Error(deviceName + ': pharmacology search returned no cards');

  await page.locator('.medication-card').first().click();
  await page.locator('.med-details').first().waitFor({ state: 'visible', timeout: 8000 });

  await page.getByRole('tab', { name: /взаимодействия/i }).click();
  await page.waitForTimeout(250);
  await page.getByRole('tab', { name: /схемы/i }).click();
  await page.locator('.regimen-card').first().waitFor({ state: 'visible', timeout: 8000 });

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  if (overflow > 3) throw new Error(deviceName + ': horizontal overflow ' + overflow + 'px');
  if (messages.length) throw new Error(deviceName + ': console/page errors: ' + messages.join(' | '));

  results.push({ device: deviceName, visibleMedicationCount, filteredCount, ok: true });
  await page.close();
}

await browser.close();
console.log(JSON.stringify({ ok: true, results }, null, 2));
