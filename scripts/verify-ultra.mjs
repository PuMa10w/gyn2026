import { chromium } from 'playwright';
const BASE = 'http://localhost:3001';

const check = async (viewport, label) => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(900);

  const m = await page.evaluate(() => {
    const measure = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { w: Math.round(r.width), h: Math.round(r.height) };
    };
    const rail = document.querySelector('.gyn-scroll-progress');
    const grain = getComputedStyle(document.querySelector('.App'), '::after');
    return {
      navbarAction: measure('.navbar-action-button'),
      sortChip: measure('.catalog-sort-chip'),
      brand: measure('.navbar-brand'),
      bottomItem: measure('.mobile-bottom-item') || 'n/a',
      progressRail: rail ? getComputedStyle(rail).backgroundImage.slice(0, 40) : 'MISSING',
      grainBg: grain.backgroundImage.includes('svg') ? 'present' : 'none',
    };
  });
  console.log(label, JSON.stringify(m, null, 0));

  // scroll to verify progress rail scaleX responds
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await page.waitForTimeout(400);
  const scaleX = await page.evaluate(() => {
    const el = document.querySelector('.gyn-scroll-progress');
    return el ? getComputedStyle(el).transform : 'none';
  });
  console.log(label, 'progress rail transform @50% scroll:', scaleX);

  await ctx.close();
  await browser.close();
};

const run = async () => {
  await check({ width: 1440, height: 900 }, 'desktop');
  await check({ width: 390, height: 844 }, 'mobile');
};
run().catch((e) => { console.error(e); process.exit(1); });
