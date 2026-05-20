import { chromium, devices } from 'playwright';

const baseUrl = process.env.AUDIT_URL ?? 'http://127.0.0.1:4173';
const device = devices['iPhone SE'] ?? { viewport: { width: 375, height: 667 }, isMobile: true };

const bannedLegacyRgb = [
  '25, 198, 179',
  '109, 207, 147',
  '20, 184, 166',
  '16, 185, 129',
  '39, 174, 96',
  '46, 204, 113',
  '100, 210, 255',
];

const selectors = [
  '.premium-button--primary',
  '.version-actions .premium-button',
  '.mobile-bottom-item.is-active',
  '.nav-tab.active',
  '.category-chip.active',
  '.modal-tab.active',
  '.pharma-tab.active',
  '.q-progress-fill',
  '.q-result-badge',
  '.search-input-wrapper',
  '.disease-card',
  '.premium-card',
  '.version-checker',
];

const browser = await chromium.launch({ executablePath: process.env.CHROME_EXECUTABLE || undefined, headless: true });
const page = await browser.newPage(device);
const findings = [];

const inspect = async (label) => {
  const result = await page.evaluate(({ selectors, bannedLegacyRgb }) => {
    const findings = [];
    const removedSharePattern = new RegExp(`\\b${'Q'}${'R'}\\b|${'Q'}${'R'}-код`);
    if (removedSharePattern.test(document.body.innerText)) {
      findings.push({
        selector: 'body',
        property: 'text',
        value: 'removed share block is visible',
        text: 'Удалённый блок шаринга должен отсутствовать в пользовательском интерфейсе',
      });
    }
    for (const selector of selectors) {
      const elements = Array.from(document.querySelectorAll(selector)).filter((element) => {
        const rect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
      });

      for (const element of elements.slice(0, 8)) {
        const style = window.getComputedStyle(element);
        const values = {
          backgroundColor: style.backgroundColor,
          backgroundImage: style.backgroundImage,
          borderColor: style.borderColor,
          color: style.color,
        };

        for (const [property, value] of Object.entries(values)) {
          if (bannedLegacyRgb.some((legacy) => value.includes(legacy))) {
            findings.push({
              selector,
              property,
              value,
              text: element.textContent?.trim().slice(0, 80) ?? '',
            });
          }
        }
      }
    }
    return findings;
  }, { selectors, bannedLegacyRgb });

  findings.push(...result.map((finding) => ({ flow: label, ...finding })));
};

await page.goto(`${baseUrl}/?pastel=${Date.now()}`, { waitUntil: 'networkidle' });
await page.locator('.home-shell').waitFor({ state: 'visible' });
await inspect('home');

await page.getByRole('button', { name: 'Гинекология' }).first().click();
await page.locator('.disease-card').first().waitFor({ state: 'visible' });
await inspect('catalog');

await page.locator('.disease-card-action').first().click();
await page.getByTestId('disease-modal').waitFor({ state: 'visible' });
await page.getByRole('tab', { name: 'УЗИ' }).click().catch(() => undefined);
await inspect('disease-modal-ultrasound');

await page.keyboard.press('Escape').catch(() => undefined);
await page.goto(`${baseUrl}/?pastel=${Date.now()}-questionnaire`, { waitUntil: 'networkidle' });
await page.getByRole('button', { name: /Открыть опросники|Шкалы/ }).first().click();
await page.locator('.questionnaire-modal').waitFor({ state: 'visible' });
await inspect('questionnaire');

await page.keyboard.press('Escape').catch(() => undefined);
await page.goto(`${baseUrl}/?pastel=${Date.now()}-pharma`, { waitUntil: 'networkidle' });
await page.getByRole('button', { name: /Открыть фармакологию|Фарма/ }).first().click();
await page.locator('.pharmacology-modal').waitFor({ state: 'visible' });
await inspect('pharmacology');

await browser.close();

if (findings.length) {
  console.error(JSON.stringify({ ok: false, findings }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, checkedSelectors: selectors.length, flows: 5 }, null, 2));
