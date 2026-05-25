import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { medications } from '../src/data/pharmacology.js';
import { questionnaires } from '../src/data/questionnaires.js';
import { repairText } from '../src/utils/textRepair.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const normalize = (value) =>
  repairText(value)
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[^a-zа-я0-9.]+/gi, ' ')
    .trim();

const importChunks = async (dirName) => {
  const dir = path.join(root, 'src', 'data', dirName);
  const files = (await fs.readdir(dir))
    .filter((file) => file.endsWith('.js'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const chunks = await Promise.all(files.map((file) => import(pathToFileURL(path.join(dir, file)).href)));
  return chunks.flatMap((chunk) => chunk.default ?? []);
};

const collectStrings = (value, result = []) => {
  if (!value) return result;
  if (typeof value === 'string' || typeof value === 'number') {
    result.push(String(value));
    return result;
  }
  if (Array.isArray(value)) {
    value.forEach((entry) => collectStrings(entry, result));
    return result;
  }
  if (typeof value === 'object') {
    Object.values(value).forEach((entry) => collectStrings(entry, result));
  }
  return result;
};

const [gyn, obs] = await Promise.all([importChunks('gynChunks'), importChunks('obsChunks')]);
const diseaseDocs = [...gyn, ...obs].map((item) => ({
  type: 'disease',
  id: item.id,
  title: repairText(item.name),
  text: normalize(collectStrings(item).join(' ')),
}));
const medicationDocs = medications.map((item) => ({
  type: 'medication',
  id: item.id,
  title: repairText(item.name),
  text: normalize(collectStrings(item).join(' ')),
}));
const questionnaireDocs = questionnaires.map((item) => ({
  type: 'questionnaire',
  id: item.id,
  title: repairText(item.name),
  text: normalize(collectStrings(item).join(' ')),
}));

const docs = [...diseaseDocs, ...medicationDocs, ...questionnaireDocs];
const aliases = {
  hpv: ['впч', 'папилломавирус'],
  hiv: ['вич'],
  ivf: ['эко', 'экстракорпоральное'],
  pcos: ['спкя', 'e28.2'],
  pid: ['взомт', 'n70'],
};

const search = (query) => {
  const terms = normalize(query)
    .split(/\s+/)
    .filter(Boolean)
    .flatMap((term) => [term, ...(aliases[term] ?? [])]);
  return docs
    .map((doc) => ({
      doc,
      score: terms.reduce((score, term) => score + (doc.text.includes(normalize(term)) ? 1 : 0), 0),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((entry) => ({ type: entry.doc.type, id: entry.doc.id, title: entry.doc.title, score: entry.score }));
};

const requiredQueries = [
  'эндометриоз n80',
  'миома d25',
  'рак шейки c53',
  'спкя e28.2',
  'преэклампсия o14',
  'кровотечение o46',
  'прогестерон',
  'контрацепция',
  'депрессия шкала',
  'беременность гипертензия',
];

const queries = requiredQueries.map((query) => ({ query, results: search(query) }));
const failures = queries.filter((entry) => entry.results.length === 0);

const report = {
  ok: failures.length === 0,
  generatedAt: new Date().toISOString(),
  totals: {
    diseases: diseaseDocs.length,
    medications: medicationDocs.length,
    questionnaires: questionnaireDocs.length,
    all: docs.length,
  },
  queries,
  failures,
};

await fs.mkdir(path.join(root, 'artifacts'), { recursive: true });
await fs.writeFile(path.join(root, 'artifacts', 'search-index-audit.json'), `${JSON.stringify(report, null, 2)}\n`);

console.log(JSON.stringify(report, null, 2));
if (!report.ok) process.exit(1);
