import { chromium, devices } from 'playwright';

const baseUrl = process.env.AUDIT_URL ?? 'http://127.0.0.1:4173';
const deviceNames = ['iPhone SE', 'iPhone 13', 'iPhone 15 Pro Max'].filter((name) => devices[name]);
const browser = await chromium.launch({
  executablePath: process.env.CHROME_EXECUTABLE || undefined,
  headless: true,
});

const allMessages = [];
const screenshots = [];

const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const assertNoHorizontalOverflow = async (page, label) => {
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    const offenders = [...document.querySelectorAll('body *')]
      .map((el) => {
        const rect = el.getBoundingClientRect();
        return {
          tag: el.tagName,
          className: String(el.className || ''),
          text: (el.textContent || '').trim().slice(0, 80),
          right: Math.round(rect.right),
          left: Math.round(rect.left),
          width: Math.round(rect.width),
        };
      })
      .filter((entry) => entry.width > 0 && (entry.right > doc.clientWidth + 2 || entry.left < -2))
      .filter((entry) => !entry.className.includes('premium-button-shimmer'))
      .slice(0, 8);

    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      bodyScrollWidth: document.body.scrollWidth,
      offenders,
    };
  });

  if (overflow.scrollWidth > overflow.clientWidth + 2 || overflow.bodyScrollWidth > overflow.clientWidth + 2) {
    throw new Error(`${label}: horizontal overflow ${JSON.stringify(overflow)}`);
  }
};

const capture = async (page, deviceName, label, options = { fullPage: false }) => {
  const path = `artifacts/iphone-${slug(deviceName)}-${label}.png`;
  await page.screenshot({ path, ...options });
  screenshots.push(path);
};

for (const deviceName of deviceNames) {
  const page = await browser.newPage(devices[deviceName]);
  const messages = [];
  allMessages.push({ device: deviceName, messages });

  page.on('console', (message) => {
    if (['error', 'warning'].includes(message.type())) {
      messages.push({ type: message.type(), text: message.text() });
    }
  });
  page.on('pageerror', (error) => messages.push({ type: 'pageerror', text: error.message }));

  await page.goto(`${baseUrl}/?iphoneAudit=${Date.now()}-${slug(deviceName)}`, { waitUntil: 'networkidle' });
  await capture(page, deviceName, 'home', { fullPage: true });
  await assertNoHorizontalOverflow(page, `${deviceName} home`);

  await page.locator('.home-destination-card').first().click();
  await page.locator('.disease-card').first().waitFor({ state: 'visible' });
  await capture(page, deviceName, 'catalog');
  await assertNoHorizontalOverflow(page, `${deviceName} catalog`);

  await page.locator('.disease-card-action').first().click();
  await page.getByTestId('disease-modal').waitFor({ state: 'visible' });
  await capture(page, deviceName, 'disease-modal');
  await assertNoHorizontalOverflow(page, `${deviceName} disease modal`);
  await page.locator('[data-testid="disease-modal"] .modal-close').first().click();

  await page.locator('.navbar-actions button').nth(0).click();
  await page.locator('.questionnaire-modal').waitFor({ state: 'visible' });
  await page.locator('.q-card').first().click();
  await page.locator('.q-question').waitFor({ state: 'visible' });
  await capture(page, deviceName, 'questionnaire');
  await assertNoHorizontalOverflow(page, `${deviceName} questionnaire`);
  await page.locator('.questionnaire-modal .modal-close').first().click();

  await page.locator('.navbar-actions button').nth(1).click();
  await page.locator('.pharmacology-modal').waitFor({ state: 'visible' });
  await page.locator('.medication-card').first().click();
  await page.locator('.med-details').first().waitFor({ state: 'visible' });
  await capture(page, deviceName, 'pharmacology');
  await assertNoHorizontalOverflow(page, `${deviceName} pharmacology`);
  await page.locator('.pharmacology-modal .modal-close').first().click();

  await page.close();
}

await browser.close();

const browserErrors = allMessages.flatMap(({ device, messages }) =>
  messages
    .filter((message) => message.type === 'error' || message.type === 'pageerror')
    .map((message) => ({ device, ...message })),
);

if (browserErrors.length > 0) {
  throw new Error(`Browser errors: ${JSON.stringify(browserErrors, null, 2)}`);
}

console.log(JSON.stringify({ ok: true, devices: deviceNames, messages: allMessages, screenshots }, null, 2));

