import { chromium, devices } from 'playwright';

const baseUrl = process.env.AUDIT_URL || process.env.AUDIT_BASE_URL || 'http://127.0.0.1:4173';
const device = devices['iPhone SE'] ?? { viewport: { width: 375, height: 667 }, isMobile: true };
const selectors = [
  ['.catalog-title, .catalog-description', 3.2],
  ['.search-input, input[type="search"]', 3.2],
  ['.category-chip, .tab-btn, .nav-tab', 3.0],
  ['.card-title, .card-desc, .disease-card', 3.4],
  ['.mobile-bottom-label', 3.0],
  ['.content-card, .structured-item, .guideline-card', 3.2],
  ['.anatomy-atlas-shell, .clinical-template-assistant', 3.2],
  ['.version-checker, .pubmed-feed, .symptom-checker, .premium-error-container', 3.2],
];

const browser = await chromium.launch({ executablePath: process.env.CHROME_EXECUTABLE || undefined, headless: true });
const page = await browser.newPage(device);
const findings = [];

const parseRgb = (value) => {
  const match = value.match(/rgba?\(([^)]+)\)/);
  if (!match) return null;
  const parts = match[1].split(',').map((part) => Number.parseFloat(part));
  return [parts[0], parts[1], parts[2], parts.length > 3 ? parts[3] : 1];
};

await page.goto(`${baseUrl}/?readability=${Date.now()}`, { waitUntil: 'domcontentloaded' });
await page.waitForSelector('#root, main, #main-content', { timeout: 30000 });
await page.getByRole('button', { name: /Гинекология/i }).first().click().catch(() => undefined);
await page.locator('.disease-card').first().waitFor({ state: 'visible', timeout: 30000 }).catch(() => undefined);

const result = await page.evaluate((selectors) => {
  const parseRgb = (value) => {
    const match = value.match(/rgba?\(([^)]+)\)/);
    if (!match) return null;
    const parts = match[1].split(',').map((part) => Number.parseFloat(part));
    return [parts[0], parts[1], parts[2], parts.length > 3 ? parts[3] : 1];
  };
  const luminance = ([r, g, b]) => {
    const c = [r, g, b].map((v) => {
      const n = v / 255;
      return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
    });
    return c[0] * 0.2126 + c[1] * 0.7152 + c[2] * 0.0722;
  };
  const contrast = (fg, bg) => {
    const l1 = luminance(fg);
    const l2 = luminance(bg);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  };
  const backgroundFor = (el) => {
    let current = el;
    while (current && current !== document.documentElement) {
      const parsed = parseRgb(getComputedStyle(current).backgroundColor);
      if (parsed && parsed[3] > 0.35) return parsed;
      current = current.parentElement;
    }
    return parseRgb(getComputedStyle(document.body).backgroundColor) || [255, 244, 236, 1];
  };
  const visible = (el) => {
    const rect = el.getBoundingClientRect();
    const style = getComputedStyle(el);
    return rect.width > 4 && rect.height > 4 && style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) > 0.2;
  };

  return selectors.flatMap(([selector, minContrast]) =>
    Array.from(document.querySelectorAll(selector))
      .filter(visible)
      .slice(0, 10)
      .map((el) => {
        const color = parseRgb(getComputedStyle(el).color);
        const bg = backgroundFor(el);
        if (!color || !bg) return null;
        const ratio = contrast(color, bg);
        return ratio < minContrast ? {
          selector,
          ratio: Number(ratio.toFixed(2)),
          text: (el.textContent || '').trim().slice(0, 80),
          color: getComputedStyle(el).color,
          background: getComputedStyle(el).backgroundColor,
        } : null;
      })
      .filter(Boolean)
  );
}, selectors);

findings.push(...result);
await browser.close();

if (findings.length) {
  console.error(JSON.stringify({ ok: false, findings }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, checkedSelectorGroups: selectors.length }, null, 2));

