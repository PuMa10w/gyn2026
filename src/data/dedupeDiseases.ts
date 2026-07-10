import type { Disease } from '../types';

// Поле считается «заполненным», если оно непустое и не содержит маркеров стаба.
const STUB_MARKERS = [
  'Требуется уточнение',
  'Данные отсутствуют',
  'Клиническое описание для',
  'Требуется проверки',
  'Требуется уточнения',
];

function isStubField(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  return STUB_MARKERS.some((m) => value.includes(m));
}

function contentWeight(disease: Disease): number {
  const fields: (keyof Disease)[] = [
    'definition', 'epidemiology', 'etiology', 'symptoms', 'clinicalSummary',
    'diagnosticCriteria', 'severityStratification', 'differentialDiagnosis',
    'managementAlgorithm', 'treatment', 'ultrasound', 'followUpTriggers',
    'patientCounseling', 'guidelineBasis', 'recommendations', 'prognosis', 'followUp',
  ];
  let weight = 0;
  for (const f of fields) {
    const v = disease[f];
    if (v == null) continue;
    if (Array.isArray(v)) {
      if (v.length > 0 && !v.some((item) => typeof item === 'string' && isStubField(item))) weight += 1;
    } else if (typeof v === 'object') {
      if (Object.keys(v).length > 0) weight += 1;
    } else if (typeof v === 'string' && v.trim().length > 0 && !isStubField(v)) {
      weight += 1;
    }
  }
  return weight;
}

// Дедупликация по (icd + subtitle + нормализованное имя): оставляем карточку
// с бóльшим объёмом реального контента (верифицированная побеждает стаб).
export function dedupeByContent(diseases: Disease[]): Disease[] {
  const best = new Map<string, Disease>();
  for (const disease of diseases) {
    const key = `${String(disease.icd).toUpperCase()}__${disease.subtitle}__${String(disease.name).toLowerCase().trim()}`;
    const existing = best.get(key);
    if (!existing || contentWeight(disease) > contentWeight(existing)) {
      best.set(key, disease);
    }
  }
  return [...best.values()];
}
