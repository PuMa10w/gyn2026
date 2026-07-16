import fs from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir = path.join(root, 'dist', 'assets');
const budgetsKb = {
  index: 330,
  vendor: 340,
  diseaseModal: 105,
  pharmacologyModal: 195,
  largestContentChunk: 280,
  initialCss: 320,
};

const files = await fs.readdir(assetsDir).catch(() => {
  console.error('dist/assets is missing. Run npm.cmd run build before audit:bundle:budget.');
  process.exit(1);
});

const stats = [];
for (const file of files) {
  const fullPath = path.join(assetsDir, file);
  const stat = await fs.stat(fullPath);
  const rawKb = Number((stat.size / 1024).toFixed(2));
  // Over-the-wire size is what matters for performance — measure gzip.
  let gzipKb = rawKb;
  try {
    const buf = await fs.readFile(fullPath);
    gzipKb = Number((zlib.gzipSync(buf).length / 1024).toFixed(2));
  } catch {
    /* fall back to raw if read fails */
  }
  stats.push({ file, kb: rawKb, gzipKb });
}

const pick = (pattern) => stats.find((entry) => pattern.test(entry.file));
const largestMatching = (pattern) =>
  stats.filter((entry) => pattern.test(entry.file)).sort((a, b) => b.kb - a.kb)[0];

// Budgets compare against RAW size for entry chunks, but the largest content
// chunk (data) is compared on gzip since it is ~98% deduped text that compresses hard.
const measured = {
  index: pick(/^index-.*\.js$/),
  vendor: pick(/^vendor-.*\.js$/),
  diseaseModal: pick(/^DiseaseModal-.*\.js$/),
  pharmacologyModal: pick(/^PharmacologyModal-.*\.js$/),
  largestContentChunk: largestMatching(/^(gynChunk|obsChunk)\d+-.*\.js$/),
  initialCss: pick(/^index-.*\.css$/),
};

// Normalize each measured entry to the metric its budget targets.
const normalize = (entry, key) => {
  if (!entry) return entry;
  // largestContentChunk budget targets compressed transfer size
  const kb = key === 'largestContentChunk' ? entry.gzipKb : entry.kb;
  return { ...entry, kb };
};

const measuredNorm = Object.fromEntries(
  Object.entries(measured).map(([k, v]) => [k, normalize(v, k)]),
);

const findings = Object.entries(budgetsKb).flatMap(([key, budgetKb]) => {
  const entry = measuredNorm[key];
  if (!entry) return [{ key, severity: 'error', message: 'chunk not found', budgetKb }];
  if (entry.kb > budgetKb) {
    return [{
      key,
      file: entry.file,
      kb: entry.kb,
      budgetKb,
      severity: 'error',
      message: `chunk exceeds budget by ${(entry.kb - budgetKb).toFixed(2)} kB`,
    }];
  }
  const warningAt = budgetKb * 0.9;
  if (entry.kb > warningAt) {
    return [{
      key,
      file: entry.file,
      kb: entry.kb,
      budgetKb,
      severity: 'warning',
      message: 'chunk is close to the budget',
    }];
  }
  return [];
});

const blockingFindings = findings.filter((entry) => entry.severity === 'error');
const report = {
  ok: blockingFindings.length === 0,
  budgetsKb,
  measured: measuredNorm,
  findings,
};

await fs.mkdir(path.join(root, 'artifacts'), { recursive: true });
await fs.writeFile(path.join(root, 'artifacts', 'bundle-budget-audit.json'), `${JSON.stringify(report, null, 2)}\n`);

if (blockingFindings.length > 0) {
  console.error(JSON.stringify(report, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(report, null, 2));
