import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const out = 'C:\\Users\\rousl\\Desktop\\projects\\gyn\\artifacts\\shots';
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();

async function shot(name, fn, width, height) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  if (fn) await fn(page);
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${out}\\${name}.png`, fullPage: false });
  await ctx.close();
  console.log('shot', name);
}

// Disease modal (open gyn, click first card)
await shot('modal-disease-light', async (page) => {
  await page.evaluate(() => { const b=[...document.querySelectorAll('.nav-tab')].find(x=>x.textContent.trim()==='Гинекология'); b&&b.click(); });
  await page.waitForTimeout(1000);
  await page.evaluate(() => { const c=document.querySelector('.disease-card'); c&&c.click(); });
  await page.waitForTimeout(1000);
}, 1280, 900);

// Pharmacology modal
await shot('modal-pharma-light', async (page) => {
  await page.evaluate(() => { const b=[...document.querySelectorAll('button')].find(x=>x.textContent.trim()==='Фарма' || x.getAttribute('aria-label')==='Открыть фармакологию'); b&&b.click(); });
  await page.waitForTimeout(1500);
}, 1280, 900);

// Questionnaire modal
await shot('modal-questionnaire-light', async (page) => {
  await page.evaluate(() => { const b=[...document.querySelectorAll('button')].find(x=>x.textContent.trim()==='Шкалы' || x.getAttribute('aria-label')==='Открыть опросники'); b&&b.click(); });
  await page.waitForTimeout(1500);
}, 1280, 900);

// Mobile gyn with horizontal scroll - check chips scrollWidth > clientWidth
await shot('gyn-mobile-chips', async (page) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => { const b=[...document.querySelectorAll('.nav-tab')].find(x=>x.textContent.trim()==='Гинекология'); b&&b.click(); });
  await page.waitForTimeout(1200);
  const data = await page.evaluate(() => {
    const c=document.querySelector('.category-chips');
    return c? {scrollW:c.scrollWidth, clientW:c.clientWidth, overflow:getComputedStyle(c).overflowX}:null;
  });
  console.log('CHIPS', JSON.stringify(data));
}, 390, 844);

// Favorites empty state
await shot('favorites-light', async (page) => {
  await page.evaluate(() => { const b=[...document.querySelectorAll('button')].find(x=>x.getAttribute('aria-label')==='Избранное'); b&&b.click(); });
  await page.waitForTimeout(1000);
}, 1280, 900);

await browser.close();
console.log('DONE');
