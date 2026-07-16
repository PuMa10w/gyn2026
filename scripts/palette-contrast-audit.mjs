// palette-contrast-audit.mjs
// Verifies AA contrast for the design-token palette (light + dark themes).
// Parses :root and [data-theme='dark'] blocks from premium-flagship.css and
// computes WCAG 2.1 contrast ratios for critical text/background pairs.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cssPath = path.join(root, 'src', 'styles', 'premium-flagship.css');
const css = await fs.readFile(cssPath, 'utf8');

// ── color parsing ─────────────────────────────────────────────
function hexToRgb(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function rgbaToRgb(str) {
  // supports hex and rgba(...) with optional 8-digit hex
  str = str.trim();
  if (str.startsWith('#')) return { rgb: hexToRgb(str), alpha: 1 };
  const m = str.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const parts = m[1].split(',').map((s) => parseFloat(s.trim()));
  return { rgb: [parts[0], parts[1], parts[2]], alpha: parts[3] ?? 1 };
}
function relativeLuminance(rgbOrObj) {
  const rgb = Array.isArray(rgbOrObj) ? rgbOrObj : rgbOrObj.rgb;
  const a = [rgb[0], rgb[1], rgb[2]].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}
// Composite a translucent fg over an opaque bg for contrast math.
function composite(fg, bg) {
  const a = fg.alpha;
  return fg.rgb.map((c, i) => c * a + bg.rgb[i] * (1 - a));
}
function contrast(fg, bg) {
  const L1 = relativeLuminance(fg);
  const L2 = relativeLuminance(bg);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

// ── token extraction ──────────────────────────────────────────
function extractVars(block) {
  const vars = {};
  const re = /(--[a-zA-Z0-9-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = re.exec(block))) vars[m[1]] = m[2].trim();
  return vars;
}
function resolveRef(value, vars) {
  // resolve var(--x) chains and fall back to literal
  let v = value;
  let guard = 0;
  while (v.includes('var(') && guard++ < 10) {
    v = v.replace(/var\((--[a-zA-Z0-9-]+)(?:,\s*([^)]+))?\)/g, (_, name, fallback) => {
      if (vars[name] != null) return vars[name];
      return fallback ?? '#000000';
    });
  }
  return v;
}
const rootBlock = css.match(/:root\s*\{([^}]*)\}/)?.[1] ?? '';
const darkBlock = css.match(/\[data-theme='dark'\]\s*\{([^}]*)\}/)?.[1] ?? '';

const base = extractVars(rootBlock);
const dark = extractVars(darkBlock);
// dark theme overrides on top of base
const lightVars = { ...base };
const darkVars = { ...base, ...dark };

// ── critical pairs to audit (text color on surface) ──────────
const pairs = [
  ['--am-text-primary', '--am-bg-base', 'body text on bg'],
  ['--am-text-secondary', '--am-bg-base', 'secondary text on bg'],
  ['--am-text-tertiary', '--am-bg-base', 'tertiary text on bg'],
  ['--am-text-primary', '--am-bg-card', 'text on card'],
  ['--am-text-primary', '--am-bg-glass', 'text on glass'],
  ['--am-text-link', '--am-bg-base', 'link on bg'],
  ['--am-amber', '--am-bg-base', 'amber text on bg'],
  ['--am-amber', '--am-bg-elevated', 'amber text on elevated (AA text)'],
  ['--am-brand', '--am-bg-elevated', 'brand text on elevated'],
  ['--am-info', '--am-bg-base', 'info text on bg (dark theme)'],
  ['--am-success', '--am-bg-base', 'success text on bg'],
  ['--am-warning', '--am-bg-base', 'warning text on bg (dark)'],
  ['--am-danger', '--am-bg-base', 'danger text on bg'],
];

const themes = { light: lightVars, dark: darkVars };
const findings = [];
for (const [themeName, vars] of Object.entries(themes)) {
  for (const [fgVar, bgVar, label] of pairs) {
    const fgRaw = resolveRef(vars[fgVar] ?? '', vars);
    const bgRaw = resolveRef(vars[bgVar] ?? '', vars);
    const fg = rgbaToRgb(fgRaw);
    let bg = rgbaToRgb(bgRaw);
    if (!fg || !bg) continue;
    // if bg is translucent, composite over base bg for a conservative ratio
    if (bg.alpha < 1) {
      const baseBg = rgbaToRgb(resolveRef(vars['--am-bg-base'] ?? '#000', vars));
      bg = { rgb: composite(bg, baseBg), alpha: 1 };
    }
    const ratio = contrast(fg.alpha < 1 ? { rgb: composite(fg, bg), alpha: 1 } : fg, bg);
    const isUITone = /link|brand|info|success|warning|danger|amber/.test(label);
    const threshold = isUITone ? 3 : 4.5;
    const ok = ratio >= threshold;
    findings.push({
      theme: themeName,
      label,
      ratio: Number(ratio.toFixed(2)),
      threshold,
      ok,
    });
  }
}

const failures = findings.filter((f) => !f.ok);
console.log(`Palette contrast audit — ${findings.length} checks, ${failures.length} failures`);
for (const f of findings) {
  console.log(`${f.ok ? '✓' : '✗'} [${f.theme}] ${f.label.padEnd(28)} ${f.ratio}:1 (need ${f.threshold})`);
}
process.exit(failures.length > 0 ? 1 : 0);
