import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const stubMarkers = [
  'Требуется уточнение',
  'Данные отсутствуют',
  'Клиническое описание для',
  'Стандарты лечения требуют',
  'Рекомендации требуют',
  'Требуется проверки',
  'Требуется уточнения',
];

async function loadAll(dir) {
  const files = fs.readdirSync(dir).filter((f) => /chunk\d+\.js$/i.test(f)).sort();
  const all = [];
  for (const f of files) {
    const mod = await import(pathToFileURL(path.join(dir, f)).href);
    const arr = mod.default;
    if (Array.isArray(arr)) all.push(...arr.map((d) => ({ ...d, __chunk: f })));
  }
  return { files, all };
}

function isStub(d) {
  const blob = JSON.stringify(d);
  const hits = stubMarkers.filter((m) => blob.includes(m));
  return hits.length > 0 ? hits : null;
}

function analyze(name, dir) {
  return loadAll(dir).then(({ files, all }) => {
    const stubs = [];
    const byKey = new Map();
    let premiumRich = 0;
    const premiumFields = ['diagnosticCriteria', 'differentialDiagnosis', 'managementAlgorithm', 'followUpTriggers', 'guidelineBasis', 'severityStratification'];

    for (const d of all) {
      const stub = isStub(d);
      if (stub) stubs.push({ id: d.id, icd: d.icd, name: d.name, chunk: d.__chunk, markers: stub });
      const key = `${d.icd}__${d.subtitle}__${d.name}`.toLowerCase();
      if (!byKey.has(key)) byKey.set(key, []);
      byKey.get(key).push(d.id);
      const rich = premiumFields.filter((f) => d[f] && (Array.isArray(d[f]) ? d[f].length : Object.keys(d[f]).length)).length;
      if (rich >= 3) premiumRich++;
    }

    const dupKeys = [...byKey.entries()].filter(([, ids]) => ids.length > 1);
    const dupByIcd = new Map();
    for (const d of all) {
      const k = `${d.icd}__${d.subtitle}`.toLowerCase();
      if (!dupByIcd.has(k)) dupByIcd.set(k, new Set());
      dupByIcd.get(k).add(d.name);
    }
    const multiNameIcd = [...dupByIcd.entries()].filter(([, names]) => names.size > 1);

    const stubChunks = {};
    for (const s of stubs) stubChunks[s.chunk] = (stubChunks[s.chunk] || 0) + 1;

    console.log(`\n=== ${name} ===`);
    console.log(`Файлов чанков: ${files.length}`);
    console.log(`Всего карточек: ${all.length}`);
    console.log(`STUB-карточек (пустой контент): ${stubs.length} (${((stubs.length / all.length) * 100).toFixed(1)}%)`);
    console.log(`  по чанкам:`, stubChunks);
    console.log(`Карточек с >=3 premium-полями: ${premiumRich} (${((premiumRich / all.length) * 100).toFixed(1)}%)`);
    console.log(`Точные дубликаты (id+icd+name): ${dupKeys.length}`);
    console.log(`Кодов с несколькими именами (возможные дубли): ${multiNameIcd.length}`);
    return { name, total: all.length, stubs: stubs.length, stubChunks, premiumRich, dupKeys: dupKeys.length, multiNameIcd: multiNameIcd.length };
  });
}

const gyn = await analyze('ГИНЕКОЛОГИЯ', path.join(root, 'src', 'data', 'gynChunks'));
const obs = await analyze('АКУШЕРСТВО', path.join(root, 'src', 'data', 'obsChunks'));

console.log('\n=== ИТОГО ===');
console.log(`Всего карточек: ${gyn.total + obs.total}`);
console.log(`Всего STUB: ${gyn.stubs + obs.stubs}`);
console.log(`Всего premium-насыщенных (>=3 поля): ${gyn.premiumRich + obs.premiumRich}`);
