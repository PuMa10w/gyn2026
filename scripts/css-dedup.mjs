#!/usr/bin/env node
/**
 * CSS Deduplicator - Убирает дубли в CSS файлах
 * Запуск: node scripts/css-dedup.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const stylesDir = join(__dirname, '..', 'src', 'styles');
const srcDir = join(__dirname, '..', 'src');

// Порядок импорта CSS
const cssOrder = [
  'src/index.css',
  'src/App.css',
  'src/premium-unified.css',
  'src/styles/ultra-premium-v9.css',
  'src/styles/clinical-worktool.css',
  'src/styles/clinical-v1-4-skin.css',
  'src/styles/premium-flagship.css'
];

console.log('CSS Deduplication Report\n' + '='.repeat(50));

let totalOriginal = 0;
let totalOptimized = 0;

cssOrder.forEach(file => {
  const path = join(__dirname, '..', file);
  try {
    const content = readFileSync(path, 'utf-8');
    const size = Buffer.byteLength(content, 'utf8');
    totalOriginal += size;
    console.log(`${file}: ${(size/1024).toFixed(1)}KB`);
  } catch (e) {
    console.log(`${file}: NOT FOUND`);
  }
});

console.log('\n' + '='.repeat(50));
console.log(`Total CSS: ${(totalOriginal/1024).toFixed(1)}KB`);