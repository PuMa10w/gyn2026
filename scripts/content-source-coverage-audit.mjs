import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { applyClinicalSourceOverlay } from '../src/utils/clinicalSourceOverlay.ts';
import { repairText } from '../src/utils/textRepair.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const sourceFields = [
  'clinicalSummary',
  'diagnosticCriteria',
  'differentialDiagnosis',
  'managementAlgorithm',
  'treatment',
  'ultrasound',
  'followUpTriggers',
  'patientCounseling',
  'guidelineBasis',
  'lastReviewed',
];

const essentialFields = ['clinicalSummary', 'diagnostics', 'treatment', 'definition', 'symptoms'];

const hasValue = (value) => {
  if (Array.isArray(value)) return value.length > 0;
  if (value && typeof value === 'object') return Object.keys(value).length > 0;
  return typeof value === 'string' ? value.trim().length > 0 : Boolean(value);
};

const importChunks = async (dirName) => {
  const dir = path.join(root, 'src', 'data', dirName);
  const files = (await fs.readdir(dir))
    .filter((file) => file.endsWith('.js'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const chunks = await Promise.all(files.map((file) => import(pathToFileURL(path.join(dir, file)).href)));
  return chunks.flatMap((chunk) => chunk.default ?? []);
};

const count = (items, fields) => ({
  total: items.length,
  fields: Object.fromEntries(
    fields.map((field) => [
      field,
      {
        present: items.filter((item) => hasValue(item[field])).length,
        percent: items.length ? Math.round((items.filter((item) => hasValue(item[field])).length / items.length) * 100) : 0,
      },
    ]),
  ),
  complete: items.filter((item) => fields.every((field) => hasValue(item[field]))).length,
});

const priorityScore = (item) => {
  const text = repairText(`${item.name} ${item.icd} ${item.description}`).toLowerCase();
  let score = 0;
  if (/рак|онко|c5|c6|d0/.test(text)) score += 4;
  if (/кровотеч|беремен|преэкламп|экламп|сепсис|перекрут|внематоч/.test(text)) score += 4;
  if (/эндометриоз|миома|спкя|бесплод|инфекц|взомт/.test(text)) score += 3;
  if (item.guidelineBasis?.length) score += 2;
  if (item.clinicalSummary) score += 1;
  return score;
};

const [gyn, obs] = await Promise.all([importChunks('gynChunks'), importChunks('obsChunks')]);
const all = [...gyn, ...obs].filter((item) => item?.name);
const top150 = [...all].sort((a, b) => priorityScore(b) - priorityScore(a)).slice(0, 150);
const sourceAwareAll = all.map((item) => applyClinicalSourceOverlay(item));
const sourceAwareTop150 = top150.map((item) => applyClinicalSourceOverlay(item));
const essentialCoverage = count(all, essentialFields);
const premiumCoverage = count(all, sourceFields);
const topCoverage = count(top150, sourceFields);
const sourceAwareCoverage = count(sourceAwareAll, sourceFields);
const sourceAwareTopCoverage = count(sourceAwareTop150, sourceFields);
const missingTop = top150
  .map((item) => ({
    id: item.id,
    name: repairText(item.name),
    icd: repairText(item.icd),
    missing: sourceFields.filter((field) => !hasValue(item[field])),
  }))
  .filter((entry) => entry.missing.length > 0);

const essentialThreshold = 80;
const criticalFailures = [
  ...Object.entries(essentialCoverage.fields)
    .filter(([, value]) => value.percent < essentialThreshold)
    .map(([field, value]) => `${field}: ${value.percent}% < ${essentialThreshold}%`),
];

const report = {
  ok: criticalFailures.length === 0,
  generatedAt: new Date().toISOString(),
  note: 'This report separates raw chunk coverage from conservative source-aware editorial overlay coverage. Runtime enrichment remains a safety net, not a substitute for verified clinical source review.',
  essentialThreshold,
  totals: {
    allDiseases: all.length,
    prioritySample: top150.length,
  },
  essentialCoverage,
  premiumCoverage,
  sourceAwareCoverage,
  priorityTop150: {
    ...topCoverage,
    missing: missingTop.slice(0, 80),
  },
  sourceAwarePriorityTop150: {
    ...sourceAwareTopCoverage,
    editorialStatus: 'needs-source-review unless the raw card already declares a stronger status',
  },
  criticalFailures,
};

await fs.mkdir(path.join(root, 'artifacts'), { recursive: true });
await fs.writeFile(path.join(root, 'artifacts', 'content-source-coverage-audit.json'), `${JSON.stringify(report, null, 2)}\n`);

console.log(JSON.stringify({
  ok: report.ok,
  totals: report.totals,
  essentialComplete: essentialCoverage.complete,
  premiumComplete: premiumCoverage.complete,
  rawTop150Complete: topCoverage.complete,
  sourceAwareTop150Complete: sourceAwareTopCoverage.complete,
  artifact: 'artifacts/content-source-coverage-audit.json',
}, null, 2));

if (!report.ok) process.exit(1);
