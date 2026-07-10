import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
const out = 'C:\\Users\\rousl\\Desktop\\projects\\gyn\\artifacts\\shots-prod';
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
async function shot(name, tab, theme, width, height) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  if (tab) {
    await page.evaluate((t) => { const b=[...document.querySelectorAll('.nav-tab')].find(x=>x.textContent.trim()===t); if(b)b.click(); }, tab);
    await page.waitForTimeout(1000);
  }
  // ensure correct theme via UI toggle
  const cur = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  if ((theme==='dark' && cur!=='dark') || (theme==='light' && cur!=='light')) {
    await page.click('button[aria-label="Переключить тему"]');
    await page.waitForTimeout(600);
  }
  await page.screenshot({ path: `${out}\\${name}.png` });
  await ctx.close();
  console.log('shot', name);
}
await shot('home-light', null, 'light', 1280, 900);
await shot('home-dark', null, 'dark', 1280, 900);
await shot('gyn-light', 'Гинекология', 'light', 1280, 900);
await shot('gyn-dark', 'Гинекология', 'dark', 1280, 900);
await shot('gyn-mobile-light', 'Гинекология', 'light', 390, 844);
await browser.close();
console.log('DONE');
