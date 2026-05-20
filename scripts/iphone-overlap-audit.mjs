import { chromium, devices } from 'playwright';

const baseUrl = process.env.AUDIT_URL ?? 'http://127.0.0.1:4173';
const deviceNames = ['iPhone SE', 'iPhone 13', 'iPhone 15 Pro Max'].filter((name) => devices[name]);
const browser = await chromium.launch({
  executablePath: process.env.CHROME_EXECUTABLE || undefined,
  headless: true,
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const assertNoOverlap = async (page, label) => {
  const result = await page.evaluate(() => {
    const viewportHeight = window.innerHeight;
    const activeLayer =
      document.querySelector('.modal-content, .questionnaire-modal, .pharmacology-modal') || document;
    const hasActiveLayer = activeLayer !== document;
    const controls = [
      ...activeLayer.querySelectorAll(
        'button, [role="button"], input, select, textarea, .disease-card, .content-card, .q-result, .q-question, .medication-card, .regimen-card',
      ),
    ].filter((element) => {
      const rect = element.getBoundingClientRect();
      return rect.width > 10 && rect.height > 10 && rect.bottom > 0 && rect.top < viewportHeight;
    });
    const blockers = [
      ...activeLayer.querySelectorAll('.modal-header, .modal-tabs, .modal-quick-strip, .pharma-tabs, .q-nav'),
      ...(hasActiveLayer ? [] : [...document.querySelectorAll('.mobile-bottom-bar')]),
    ].filter((element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return ['fixed', 'sticky'].includes(style.position) && rect.width > 10 && rect.height > 10;
    });
    const offenders = [];

    for (const control of controls) {
      const controlRect = control.getBoundingClientRect();
      for (const blocker of blockers) {
        if (control === blocker || blocker.contains(control) || control.contains(blocker)) continue;
        const blockerRect = blocker.getBoundingClientRect();
        const isBottomBar = blocker.classList.contains('mobile-bottom-bar');
        if (isBottomBar && control.closest('.cards-grid')) continue;
        const controlCenterY = controlRect.top + controlRect.height / 2;
        if (isBottomBar && controlCenterY >= blockerRect.top) continue;
        const overlapX = Math.max(0, Math.min(controlRect.right, blockerRect.right) - Math.max(controlRect.left, blockerRect.left));
        const overlapY = Math.max(0, Math.min(controlRect.bottom, blockerRect.bottom) - Math.max(controlRect.top, blockerRect.top));
        const overlapArea = overlapX * overlapY;
        const controlArea = controlRect.width * controlRect.height;

        if (controlArea > 0 && overlapArea / controlArea > 0.28) {
          offenders.push({
            control: `${control.tagName}.${String(control.className || '')}`.slice(0, 90),
            blocker: `${blocker.tagName}.${String(blocker.className || '')}`.slice(0, 90),
            text: (control.textContent || control.getAttribute('aria-label') || '').trim().slice(0, 90),
          });
        }
      }
    }

    return offenders.slice(0, 10);
  });

  if (result.length > 0) {
    throw new Error(`${label}: sticky/fixed overlap detected ${JSON.stringify(result)}`);
  }
};

const clickButton = async (page, name) => {
  const button = page.getByRole('button', { name, exact: false }).first();
  await button.waitFor({ state: 'visible', timeout: 8000 });
  await button.click();
};

for (const deviceName of deviceNames) {
  const page = await browser.newPage(devices[deviceName]);
  await page.goto(`${baseUrl}/?overlapAudit=${Date.now()}`, { waitUntil: 'networkidle' });
  await assertNoOverlap(page, `${deviceName} home`);

  await clickButton(page, 'Гинекология');
  await page.locator('.disease-card').first().waitFor({ state: 'visible', timeout: 8000 });
  await assertNoOverlap(page, `${deviceName} catalog`);

  await page.locator('.category-filter').first().evaluate((element) => {
    element.scrollLeft = element.scrollWidth;
  });
  await assertNoOverlap(page, `${deviceName} catalog chips`);

  await page.locator('.disease-card-action').first().click();
  await page.getByTestId('disease-modal').waitFor({ state: 'visible', timeout: 8000 });
  await sleep(500);
  await assertNoOverlap(page, `${deviceName} disease modal top`);
  await page.getByRole('tab', { name: 'УЗИ' }).click();
  await page.locator('.modal-body').evaluate((element) => {
    element.scrollTop = element.scrollHeight;
  });
  await assertNoOverlap(page, `${deviceName} disease modal bottom`);
  await page.locator('.modal-close').first().click();
  await page.locator('.modal-content').first().waitFor({ state: 'hidden', timeout: 8000 }).catch(() => undefined);

  await page.goto(`${baseUrl}/?overlapAuditQuestionnaire=${Date.now()}`, { waitUntil: 'networkidle' });
  await assertNoOverlap(page, `${deviceName} home before questionnaire`);
  await page.getByRole('button', { name: /Шкалы|опросники/i }).first().click();
  await page.locator('.questionnaire-modal').waitFor({ state: 'visible', timeout: 8000 });
  await assertNoOverlap(page, `${deviceName} questionnaire list`);
  await page.locator('.q-card').first().click();
  await page.locator('.q-question').waitFor({ state: 'visible', timeout: 8000 });
  await assertNoOverlap(page, `${deviceName} questionnaire question`);
  await page.locator('.modal-close').first().click();
  await page.locator('.questionnaire-modal').first().waitFor({ state: 'hidden', timeout: 8000 }).catch(() => undefined);

  await page.goto(`${baseUrl}/?overlapAuditPharma=${Date.now()}`, { waitUntil: 'networkidle' });
  await assertNoOverlap(page, `${deviceName} home before pharmacology`);
  await page.getByRole('button', { name: /Фарма|фармакологию|Фармакология/i }).first().click();
  await page.locator('.pharmacology-modal').waitFor({ state: 'visible', timeout: 8000 });
  await assertNoOverlap(page, `${deviceName} pharmacology`);
  await page.close();
}

await browser.close();
console.log(JSON.stringify({ ok: true, devices: deviceNames }, null, 2));