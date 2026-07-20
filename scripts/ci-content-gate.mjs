// CI-гейт качества контента: падает, если в каталоге есть синтетические
// стаб-карточки (шаблон «Заболевание Oxx.x» / «Болезнь ...») или пустой контент.
// Запуск: node scripts/ci-content-gate.mjs
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const TMPL = /^(Заболевание|Болезнь|Болезни)/;
const STUB_MARKERS = [
  'Требуется уточнение',
  'Данные отсутствуют',
  'Клиническое описание для',
  'Требуется проверки',
  'Требуется уточнения',
];

function isStub(d) {
  if (!d || typeof d !== 'object') return false;
  if (TMPL.test(d.name || '')) return true;
  const s = JSON.stringify(d);
  return STUB_MARKERS.some((m) => s.includes(m));
}

const dirs = ['src/data/gynChunks', 'src/data/obsChunks'];
let total = 0;
let stubs = 0;
const offenders = [];

for (const dir of dirs) {
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.js'))) {
    const arr = (await import(pathToFileURL(path.resolve(dir, f)).href)).default;
    if (!Array.isArray(arr)) continue;
    for (const d of arr) {
      total++;
      if (isStub(d)) {
        stubs++;
        offenders.push(`${f}: ${d.name}`);
      }
    }
  }
}

console.log(`Content gate: ${total} cards, ${stubs} stub(s).`);
if (stubs > 0) {
  console.error('FAIL: synthetic stub cards detected:');
  offenders.slice(0, 20).forEach((o) => console.error('  - ' + o));
  process.exit(1);
}
console.log('PASS: no synthetic stub cards.');
