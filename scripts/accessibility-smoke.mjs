import { chromium, devices } from 'playwright';

const baseUrl = process.env.AUDIT_URL ?? 'http://127.0.0.1:4173';
const browser = await chromium.launch({
  executablePath: process.env.CHROME_EXECUTABLE || undefined,
  headless: true,
});

const checks = [];

const runPageChecks = async (page, label) => {
  const result = await page.evaluate(() => {
    const touchTargets = [...document.querySelectorAll('button, a, [role="button"], input, select')]
      .map((element) => {
        const rect = element.getBoundingClientRect();
        const text = element.getAttribute('aria-label') || element.textContent || element.getAttribute('title') || element.tagName;
        return {
          text: text.trim().slice(0, 80),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          visible: rect.width > 0 && rect.height > 0,
        };
      })
      .filter((target) => target.visible && (target.width < 34 || target.height < 34))
      .slice(0, 12);

    const unlabeledControls = [...document.querySelectorAll('button, a, [role="button"], input, select')]
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        const accessibleName = element.getAttribute('aria-label') || element.textContent || element.getAttribute('title');
        return rect.width > 0 && rect.height > 0 && !String(accessibleName || '').trim();
      })
      .map((element) => element.outerHTML.slice(0, 120))
      .slice(0, 12);

    const dialogs = [...document.querySelectorAll('[role="dialog"]')].map((dialog) => ({
      labelled: Boolean(dialog.getAttribute('aria-labelledby')),
      modal: dialog.getAttribute('aria-modal') === 'true',
    }));

    return {
      title: document.title,
      lang: document.documentElement.lang,
      touchTargets,
      unlabeledControls,
      dialogs,
    };
  });

  checks.push({ label, ...result });

  if (!result.title) throw new Error(`${label}: missing document title`);
  if (result.unlabeledControls.length > 0) throw new Error(`${label}: unlabeled controls ${JSON.stringify(result.unlabeledControls)}`);
  if (result.dialogs.some((dialog) => !dialog.labelled || !dialog.modal)) {
    throw new Error(`${label}: dialog aria contract failed ${JSON.stringify(result.dialogs)}`);
  }
};

const page = await browser.newPage(devices['iPhone 13'] ?? { viewport: { width: 390, height: 844 } });
await page.goto(`${baseUrl}/?a11ySmoke=${Date.now()}`, { waitUntil: 'networkidle' });
await runPageChecks(page, 'home');

await page.locator('.home-destination-card').first().click();
await page.locator('.disease-card').first().waitFor({ state: 'visible' });
await runPageChecks(page, 'catalog');

await page.locator('.disease-card-action').first().click();
await page.getByTestId('disease-modal').waitFor({ state: 'visible' });
await runPageChecks(page, 'disease-modal');
await page.locator('[data-testid="disease-modal"] .modal-close').first().click();

await page.locator('.navbar-actions button').nth(0).click();
await page.locator('.questionnaire-modal').waitFor({ state: 'visible' });
await runPageChecks(page, 'questionnaire-modal');
await page.locator('.questionnaire-modal .modal-close').first().click();

await page.locator('.navbar-actions button').nth(1).click();
await page.locator('.pharmacology-modal').waitFor({ state: 'visible' });
await runPageChecks(page, 'pharmacology-modal');

await browser.close();
console.log(JSON.stringify({ ok: true, checks }, null, 2));
