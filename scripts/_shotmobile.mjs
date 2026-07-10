import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
const out = 'C:\\Users\\rousl\\Desktop\\projects\\gyn\\artifacts\\shots-prod';
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
await page.goto('https://gyn-clinical.pages.dev/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
// go to gynecology
await page.evaluate(() => { const b=[...document.querySelectorAll('.nav-tab')].find(x=>x.textContent.trim()==='Гинекология'); if(b)b.click(); });
await page.waitForTimeout(2500);
const data = await page.evaluate(() => ({
  cards: document.querySelectorAll('.disease-card').length,
  loading: !!document.querySelector('.loading-spinner, .catalog-status'),
  empty: !!document.querySelector('.empty-state'),
  emptyText: document.querySelector('.empty-state') ? document.querySelector('.empty-state').textContent.slice(0,120) : null,
  categoryChips: document.querySelectorAll('.category-chip').length,
  title: document.querySelector('.catalog-title') ? document.querySelector('.catalog-title').textContent : null,
}));
console.log('GYNECOLOGY MOBILE PROD:', JSON.stringify(data));
await page.screenshot({ path: `${out}\\prod-gyn-mobile.png` });
// also check obstetrics
await page.evaluate(() => { const b=[...document.querySelectorAll('.nav-tab')].find(x=>x.textContent.trim()==='Акушерство'); if(b)b.click(); });
await page.waitForTimeout(2500);
const obs = await page.evaluate(() => ({
  cards: document.querySelectorAll('.disease-card').length,
  empty: !!document.querySelector('.empty-state'),
}));
console.log('OBSTETRICS MOBILE PROD:', JSON.stringify(obs));
await ctx.close();
await browser.close();
console.log('DONE');
