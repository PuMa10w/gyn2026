import { chromium } from 'playwright';

const BASE = 'http://localhost:3001';

// WCAG contrast
function lum(rgb) {
  const [r, g, b] = rgb.map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function parseRgb(s) {
  const m = s.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const p = m[1].split(',').map((x) => parseFloat(x));
  return [p[0], p[1], p[2]];
}
function contrast(fg, bg) {
  const L1 = lum(fg), L2 = lum(bg);
  const a = Math.max(L1, L2), b = Math.min(L1, L2);
  return (a + 0.05) / (b + 0.05);
}

const audit = async (page, label) => {
  const report = { label, issues: [], info: {} };

  // horizontal overflow
  const overflow = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    clientW: document.documentElement.clientWidth,
    bodyScrollW: document.body.scrollWidth,
  }));
  report.info.overflow = overflow;
  if (overflow.scrollW > overflow.clientW + 1) {
    report.issues.push({ sev: 'high', type: 'overflow', msg: `Horizontal overflow ${overflow.scrollW} > ${overflow.clientW}` });
    // find culprits
    const culprits = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const bad = [];
      document.querySelectorAll('*').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.right > vw + 1 && r.width > 0 && r.width < vw) {
          bad.push((el.className && el.className.toString().slice(0, 40)) || el.tagName);
        }
      });
      return [...new Set(bad)].slice(0, 8);
    });
    report.info.overflowCulprits = culprits;
  }

  // fonts actually loaded
  const fonts = await page.evaluate(async () => {
    await document.fonts.ready;
    const list = [...document.fonts].map((f) => `${f.family} ${f.weight} ${f.status}`);
    return { inter: document.fonts.check('16px Inter'), space: document.fonts.check('700 16px "Space Grotesk"'), list: [...new Set(list)] };
  });
  report.info.fonts = fonts;
  if (!fonts.inter) report.issues.push({ sev: 'med', type: 'font', msg: 'Inter variable font NOT loaded' });
  if (!fonts.space) report.issues.push({ sev: 'low', type: 'font', msg: 'Space Grotesk NOT loaded' });

  // contrast of key text vs background
  const contrastPairs = await page.evaluate(() => {
    const getBg = (el) => {
      let node = el;
      while (node) {
        const bg = getComputedStyle(node).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
        node = node.parentElement;
      }
      return getComputedStyle(document.body).backgroundColor;
    };
    const sel = ['h1', 'h2', 'h3', '.card-title', '.hero-title', '.nav-tab', '.navbar-brand-copy strong', 'p', '.card-desc', '.catalog-description', '.premium-command-metric strong'];
    const out = [];
    sel.forEach((s) => {
      const el = document.querySelector(s);
      if (!el) return;
      const fg = getComputedStyle(el).color;
      const bg = getBg(el);
      out.push({ sel: s, fg, bg });
    });
    return out;
  });
  report.info.contrast = contrastPairs.map((c) => {
    const fg = parseRgb(c.fg), bg = parseRgb(c.bg);
    const ratio = fg && bg ? contrast(fg, bg).toFixed(2) : 'n/a';
    return { sel: c.sel, ratio };
  });

  // touch targets (mobile check)
  const touch = await page.evaluate(() => {
    const interactive = [...document.querySelectorAll('button, a, [role="button"]')].filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && r.top < window.innerHeight;
    });
    const small = interactive.filter((el) => {
      const r = el.getBoundingClientRect();
      return Math.min(r.width, r.height) < 36;
    }).map((el) => ({ cls: (el.className && el.className.toString().slice(0, 30)) || el.tagName, w: Math.round(el.getBoundingClientRect().width), h: Math.round(el.getBoundingClientRect().height) }));
    return { total: interactive.length, small: small.slice(0, 12) };
  });
  report.info.touch = touch;
  if (touch.small.length) report.issues.push({ sev: 'med', type: 'touch', msg: `${touch.small.length} interactive elements < 36px`, detail: touch.small });

  // z-index conflicts / fixed overlap with content
  const nav = await page.evaluate(() => {
    const n = document.querySelector('.navbar');
    if (!n) return null;
    const r = n.getBoundingClientRect();
    return { h: Math.round(r.height), bottom: Math.round(r.bottom) };
  });
  report.info.navbar = nav;

  // theme
  const theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme') || (getComputedStyle(document.body).backgroundColor));
  report.info.theme = theme;

  return report;
};

const run = async () => {
  const browser = await chromium.launch();
  const results = [];

  const visit = async (viewport, label) => {
    const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    const consoleErrors = [];
    page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
    page.on('pageerror', (e) => consoleErrors.push('PAGEERROR: ' + e.message));
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const r1 = await audit(page, `${label}/home`);
    r1.consoleErrors = consoleErrors.slice(0, 6);
    results.push(r1);

    // gyn
    await page.locator('.nav-tab', { hasText: 'Гинекология' }).click();
    await page.waitForTimeout(900);
    const r2 = await audit(page, `${label}/gynecology`);
    results.push(r2);

    // open a card
    const card = page.locator('.disease-card').first();
    if (await card.count()) {
      await card.evaluate((el) => el.click());
      await page.waitForTimeout(1200);
      const r3 = await audit(page, `${label}/disease-modal`);
      results.push(r3);
    }

    // obs
    const closeBtn = page.getByRole('button', { name: /Закрыть/i });
    if (await closeBtn.count()) { await closeBtn.first().evaluate((el) => el.click()); await page.waitForTimeout(500); }
    await page.locator('.nav-tab', { hasText: 'Акушерство' }).click();
    await page.waitForTimeout(900);
    const r4 = await audit(page, `${label}/obstetrics`);
    results.push(r4);

    await ctx.close();
  };

  await visit({ width: 1440, height: 900 }, 'desktop');
  await visit({ width: 390, height: 844 }, 'mobile');

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
};

run().catch((e) => { console.error(e); process.exit(1); });
