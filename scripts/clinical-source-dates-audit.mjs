import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { medications } from '../src/data/pharmacology.js';
import { questionnaires } from '../src/data/questionnaires.js';
import { applyClinicalSourceOverlay } from '../src/utils/clinicalSourceOverlay.ts';
import { repairText } from '../src/utils/textRepair.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const currentYear = new Date().getFullYear();

const importChunks = async (dirName) => {
  const dir = path.join(root, 'src', 'data', dirName);
  const files = (await fs.readdir(dir))
    .filter((file) => file.endsWith('.js'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const chunks = await Promise.all(files.map((file) => import(pathToFileURL(path.join(dir, file)).href)));
  return chunks.flatMap((chunk) => chunk.default ?? []);
};

const parseYear = (value) => {
  const match = String(value ?? '').match(/\b(20\d{2})\b/);
  return match ? Number(match[1]) : null;
};

const auditItems = (items, label) => {
  const stale = [];
  const missing = [];

  for (const item of items) {
    const year = parseYear(item.lastReviewed);
    if (!year) {
      missing.push({ id: item.id, name: repairText(item.name), lastReviewed: item.lastReviewed ?? null });
      continue;
    }
    if (currentYear - year > 3) {
      stale.push({ id: item.id, name: repairText(item.name), lastReviewed: item.lastReviewed });
    }
  }

  return {
    label,
    total: items.length,
    withLastReviewed: items.length - missing.length,
    missing: missing.slice(0, 80),
    stale: stale.slice(0, 80),
    missingCount: missing.length,
    staleCount: stale.length,
  };
};

const [gyn, obs] = await Promise.all([importChunks('gynChunks'), importChunks('obsChunks')]);
const diseaseItems = [...gyn, ...obs].filter((item) => item?.name);
const sourceAwareDiseaseItems = diseaseItems.map((item) => applyClinicalSourceOverlay(item));
const report = {
  ok: medications.every((item) => parseYear(item.lastReviewed)) && questionnaires.every((item) => parseYear(item.lastReviewed)),
  generatedAt: new Date().toISOString(),
  currentYear,
  diseases: auditItems(diseaseItems, 'diseases'),
  sourceAwareDiseases: auditItems(sourceAwareDiseaseItems, 'source-aware diseases'),
  medications: auditItems(medications, 'medications'),
  questionnaires: auditItems(questionnaires, 'questionnaires'),
};

await fs.mkdir(path.join(root, 'artifacts'), { recursive: true });
await fs.writeFile(path.join(root, 'artifacts', 'clinical-source-dates-audit.json'), `${JSON.stringify(report, null, 2)}\n`);

console.log(JSON.stringify({
  ok: report.ok,
  diseases: {
    total: report.diseases.total,
    withLastReviewed: report.diseases.withLastReviewed,
    missingCount: report.diseases.missingCount,
    staleCount: report.diseases.staleCount,
  },
  sourceAwareDiseases: {
    total: report.sourceAwareDiseases.total,
    withLastReviewed: report.sourceAwareDiseases.withLastReviewed,
    missingCount: report.sourceAwareDiseases.missingCount,
    staleCount: report.sourceAwareDiseases.staleCount,
  },
  medications: {
    total: report.medications.total,
    missingCount: report.medications.missingCount,
    staleCount: report.medications.staleCount,
  },
  questionnaires: {
    total: report.questionnaires.total,
    missingCount: report.questionnaires.missingCount,
    staleCount: report.questionnaires.staleCount,
  },
  artifact: 'artifacts/clinical-source-dates-audit.json',
}, null, 2));

if (!report.ok) process.exit(1);
