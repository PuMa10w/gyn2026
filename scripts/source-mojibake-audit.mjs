import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const scanRoots = ['src', 'public', 'scripts'];
const rootFiles = ['index.html', 'package.json', 'vite.config.js'];
const allowedFiles = new Set([
  path.join(root, 'src', 'utils', 'textRepair.ts'),
  path.join(root, 'scripts', 'source-mojibake-audit.mjs'),
]);
const textExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css', '.md', '.cjs', '.mjs']);
const mojibakeChars = '\u0080-\u00a0\u0402\u0403\u201a\u0453\u201e\u2026\u2020\u2021\u20ac\u2030\u0409\u2039\u040a\u040c\u040b\u040f\u0452\u2018\u2019\u201c\u201d\u2022\u2013\u2014\u2122\u0459\u203a\u045a\u045c\u045b\u045f';
const mojibakePattern = new RegExp(`[РСГв][${mojibakeChars}]|В[©®]|пїЅ|�|Premium Clinical|Clinical command|TRUST LAYER|GYNA`, 'g');

async function walk(dir, files = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', 'dist', '.git', 'artifacts'].includes(entry.name)) continue;
      await walk(fullPath, files);
      continue;
    }

    if (entry.isFile() && textExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = [
  ...(await Promise.all(scanRoots.map((entry) => walk(path.join(root, entry))))).flat(),
  ...rootFiles.map((entry) => path.join(root, entry)),
];
const findings = [];

for (const file of files) {
  if (allowedFiles.has(file)) continue;
  const content = await fs.readFile(file, 'utf8');
  const lines = content.split(/\r?\n/);

  lines.forEach((line, index) => {
    const matches = [...line.matchAll(mojibakePattern)];
    for (const match of matches) {
      findings.push({
        file: path.relative(root, file),
        line: index + 1,
        match: match[0],
        snippet: line.trim().slice(0, 180),
      });
    }
  });
}

const report = {
  ok: findings.length === 0,
  scannedFiles: files.length,
  findings,
};

await fs.mkdir(path.join(root, 'artifacts'), { recursive: true });
await fs.writeFile(path.join(root, 'artifacts', 'source-mojibake-audit.json'), `${JSON.stringify(report, null, 2)}\n`);

if (findings.length > 0) {
  console.error(JSON.stringify(report, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(report, null, 2));
