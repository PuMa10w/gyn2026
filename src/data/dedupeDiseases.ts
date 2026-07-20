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

// Дедупликация в три этапа (каждый оставляет карточку с бóльшим объёмом
// реального контента — верифицированная побеждает стаб/авто-ген):
// 1) по id (источник уникален) — защита от битых повторов внутри чанка;
// 2) по (icd + subtitle + норм. имя) — клинические дубли с одним icd;
// 3) по (subtitle + норм. имя) — схлопывает иерархию ICD-10 (родительский код
//    N80 + подкоды N80.x показывались как одинаковые карточки «Эндометриоз»).
export function dedupeByContent(diseases: Disease[]): Disease[] {
  // Этап 1: по id
  const byId = new Map<string, Disease>();
  for (const disease of diseases) {
    const id = String(disease.id);
    const existing = byId.get(id);
    if (!existing || contentWeight(disease) > contentWeight(existing)) {
      byId.set(id, disease);
    }
  }

  // Этап 2: по клиническому ключу (icd + subtitle + имя)
  const byClinical = new Map<string, Disease>();
  for (const disease of byId.values()) {
    const key = `${String(disease.icd).toUpperCase()}__${disease.subtitle}__${String(disease.name).toLowerCase().trim()}`;
    const existing = byClinical.get(key);
    if (!existing || contentWeight(disease) > contentWeight(existing)) {
      byClinical.set(key, disease);
    }
  }

  // Этап 3: по (subtitle + имя) — убирает дубли-подкоды одной нозологии
  const byName = new Map<string, Disease>();
  for (const disease of byClinical.values()) {
    const key = `${disease.subtitle}__${String(disease.name).toLowerCase().trim()}`;
    const existing = byName.get(key);
    if (!existing || contentWeight(disease) > contentWeight(existing)) {
      byName.set(key, disease);
    }
  }
  return [...byName.values()];
}
