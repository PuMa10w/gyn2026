import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const out = 'C:\\Users\\rousl\\Desktop\\projects\\gyn\\artifacts\\shots';
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();

async function shot(name, tab, theme, width, height) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  if (tab) {
    await page.evaluate((t) => {
      const btns = [...document.querySelectorAll('.nav-tab')];
      const b = btns.find(x => x.textContent.trim() === t);
      if (b) b.click();
    }, tab);
    await page.waitForTimeout(1200);
  }
  if (theme === 'dark') {
    const before = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    if (before !== 'dark') {
      await page.click('button[aria-label="Переключить тему"]');
      await page.waitForTimeout(700);
    }
  } else {
    const before = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    if (before !== 'light') {
      await page.click('button[aria-label="Переключить тему"]');
      await page.waitForTimeout(700);
    }
  }
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${out}\\${name}.png`, fullPage: false });
  await ctx.close();
  console.log('shot', name);
}

await shot('home-light', null, 'light', 1280, 900);
await shot('home-dark', null, 'dark', 1280, 900);
await shot('gyn-light', 'Гинекология', 'light', 1280, 900);
await shot('gyn-dark', 'Гинекология', 'dark', 1280, 900);
await shot('gyn-mobile-light', 'Гинекология', 'light', 390, 844);
await shot('gyn-mobile-dark', 'Гинекология', 'dark', 390, 844);
await shot('obst-dark', 'Акушерство', 'dark', 1280, 900);

await browser.close();
console.log('DONE');
