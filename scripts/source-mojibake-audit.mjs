import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { repairText } from '../src/utils/textRepair.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const scanRoots = ['src', 'public', 'scripts'];
const rootFiles = ['index.html', 'package.json', 'vite.config.js'];
const allowedFiles = new Set([
  path.join(root, 'src', 'utils', 'textRepair.ts'),
  path.join(root, 'scripts', 'source-mojibake-audit.mjs'),
]);
const textExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css', '.md', '.cjs', '.mjs']);
const legacyEnglishPattern = /Premium Clinical|Clinical command|TRUST LAYER|GYNA/g;
const obviousBrokenPattern = /вЂ|В[©®]|пїЅ|�/g;
const encodedLatinPattern = /[ÐÑÂâ][\u0080-\u00ff\u201a-\u201e\u2020-\u2022\u2013\u2014\u2030\u2039\u203a\u20ac\u2122]/g;

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
    const repaired = repairText(line);
    const hasEncodedLatin = encodedLatinPattern.test(line);
    encodedLatinPattern.lastIndex = 0;
    const repairChangedLine = hasEncodedLatin && repaired.trim() !== line.trim() && !line.includes('repairText') && !line.includes('mojibake');
    const matches = [
      ...line.matchAll(legacyEnglishPattern),
      ...line.matchAll(obviousBrokenPattern),
      ...(repairChangedLine ? [{ 0: 'repairable mojibake' }] : []),
    ];

    for (const match of matches) {
      findings.push({
        file: path.relative(root, file),
        line: index + 1,
        match: match[0],
        snippet: line.trim().slice(0, 180),
        repairedSnippet: repairChangedLine ? repaired.trim().slice(0, 180) : undefined,
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
