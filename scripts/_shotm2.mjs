import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
const out = 'C:\\Users\\rousl\\Desktop\\projects\\gyn\\artifacts\\shots-prod';
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();

async function shot(name, fn) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  await page.goto('https://gyn-clinical.pages.dev/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  if (fn) await fn(page);
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${out}\\${name}.png`, fullPage: false });
  await ctx.close();
  console.log('shot', name);
}

// home mobile
await shot('m-home');
// gyn catalog mobile
await shot('m-gyn', async (page) => {
  await page.evaluate(() => { const b=[...document.querySelectorAll('.nav-tab')].find(x=>x.textContent.trim()==='Гинекология'); b&&b.click(); });
  await page.waitForTimeout(2500);
});
// gyn modal mobile
await shot('m-gyn-modal', async (page) => {
  await page.evaluate(() => { const b=[...document.querySelectorAll('.nav-tab')].find(x=>x.textContent.trim()==='Гинекология'); b&&b.click(); });
  await page.waitForTimeout(2500);
  await page.evaluate(() => { const c=document.querySelector('.disease-card'); c&&c.click(); });
  await page.waitForTimeout(1200);
});
// home dark mobile
await shot('m-home-dark', async (page) => {
  await page.evaluate(() => { const b=document.querySelector('button[aria-label="Переключить тему"]'); b&&b.click(); });
  await page.waitForTimeout(700);
});
await browser.close();
console.log('DONE');
