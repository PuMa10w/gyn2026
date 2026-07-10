import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function collect(dir) {
  return fs.readdirSync(dir).filter((f) => /chunk\d+\.js$/i.test(f)).sort();
}

const files = [...collect(path.join(root, 'src/data/gynChunks')), ...collect(path.join(root, 'src/data/obsChunks'))];
const codes = new Set();
const pat = /icd["']?\s*:\s*["']([^"']+)["']/g;
for (const f of files) {
  const t = fs.readFileSync(path.join(f.startsWith('gyn') ? path.join(root, 'src/data/gynChunks') : path.join(root, 'src/data/obsChunks'), f), 'utf8');
  let m;
  while ((m = pat.exec(t))) {
    m[1].split(/[,\s]+/).forEach((c) => {
      c = c.trim().toUpperCase();
      if (/^[A-Z]\d/.test(c)) codes.add(c);
    });
  }
}

// Онко + предрак МКБ-10 (женская сфера), которые аудит не считает
const oncoNeeded = [
  'C50', 'C51', 'C52', 'C53', 'C54', 'C55', 'C56', 'C57', 'C58',
  'C76', 'C77', 'C78', 'C79', 'C80',
  'D05', 'D06', 'D07', 'D25', 'D26', 'D27', 'D28', 'D39',
  'D06.0', 'D06.1', 'D06.9', 'D07.0', 'D07.1', 'D07.2', 'D07.3',
  'N87.0', 'N87.1', 'N87.2', 'N87.3', 'N87.9',
  'D25.0', 'D25.1', 'D25.2', 'D25.9',
];

const missing = oncoNeeded.filter((c) => {
  const base = c.split('.')[0];
  return ![...codes].some((existing) => existing === c || existing === base || existing.startsWith(c + '.') || existing.startsWith(base + '.'));
});

console.log('Уникальных кодов в базе:', codes.size);
console.log('Онко/предрак кодов, которых НЕТ в базе:', missing.length);
console.log(missing.join(', '));
