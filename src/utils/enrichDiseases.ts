import type {
  DifferentialDiagnosisItem,
  Disease,
  DiseaseClinicalSummary,
  DiseaseDiagnosticCriteria,
  DiseaseFollowUpTriggers,
  DiseaseManagementAlgorithm,
  DiseaseOverview,
  DiseaseSeverityStratification,
  DiseaseSpecialPopulations,
  GuidelineReference,
  InpatientOutpatientPlan,
  MonitoringPlan,
  PatientExplanation,
  SourceQuality,
  TimingOfDelivery,
  UltrasoundFinding,
  UltrasoundProtocol,
} from '../types';
import { repairText } from './textRepair';

type DiseaseInput = Disease & {
  diagnostics?: Disease['diagnostics'] | string[];
  treatment?: Partial<Disease['treatment']> & {
    guidelines?: Partial<Disease['treatment']['guidelines']>;
  };
};

type GynecologyCluster =
  | 'endometriosis'
  | 'uterine'
  | 'adnexal'
  | 'infection'
  | 'urogyne'
  | 'fertility'
  | 'endocrine'
  | 'oncology'
  | 'breast'
  | 'menopause'
  | 'vulvar'
  | 'general';

type ObstetricsCluster =
  | 'hypertension'
  | 'diabetes'
  | 'placenta'
  | 'preterm'
  | 'pregnancy-loss'
  | 'fetal'
  | 'infection'
  | 'postpartum'
  | 'thrombosis'
  | 'medical'
  | 'labor'
  | 'general';

const cleanText = (value: string) => repairText(value).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const asStringArray = (value: unknown) =>
  Array.isArray(value) ? value.filter((entry): entry is string => typeof entry === 'string').map(cleanText) : [];

const withFallback = (value: string[] | undefined, fallback: string[]) => (value && value.length > 0 ? value : fallback);
const CURRENT_CONTENT_REVIEW_DATE = '2026-05-08';

const normalizeDiagnostics = (disease: DiseaseInput): Disease['diagnostics'] => {
  if (Array.isArray(disease.diagnostics)) {
    return {
      steps: asStringArray(disease.diagnostics),
      markers: 'РљР»РёРЅРёС‡РµСЃРєР°СЏ Рё РёРЅСЃС‚СЂСѓРјРµРЅС‚Р°Р»СЊРЅР°СЏ РѕС†РµРЅРєР° РІ РґРёРЅР°РјРёРєРµ.',
    };
  }

  const diagnostics = disease.diagnostics ?? { steps: [], markers: '' };

  return {
    steps: asStringArray(diagnostics.steps),
    markers:
      typeof diagnostics.markers === 'string' && diagnostics.markers.trim().length > 0
        ? cleanText(diagnostics.markers)
        : 'РљР»РёРЅРёС‡РµСЃРєР°СЏ Рё РёРЅСЃС‚СЂСѓРјРµРЅС‚Р°Р»СЊРЅР°СЏ РѕС†РµРЅРєР° РІ РґРёРЅР°РјРёРєРµ.',
    imaging: asStringArray(diagnostics.imaging),
    differential: asStringArray(diagnostics.differential),
  };
};

const normalizeTreatment = (disease: DiseaseInput): Disease['treatment'] => {
  const treatment = disease.treatment ?? { guidelines: { eau: '', acog: '', ranzcog: '', ru: '' } };
  const guidelines = (treatment.guidelines ?? {}) as Partial<Disease['treatment']['guidelines']>;

  return {
    conservative: asStringArray(treatment.conservative),
    surgical: asStringArray(treatment.surgical),
    firstLine: asStringArray(treatment.firstLine),
    secondLine: asStringArray(treatment.secondLine),
    proceduralOrSurgical: asStringArray(treatment.proceduralOrSurgical),
    inpatientManagement: asStringArray(treatment.inpatientManagement),
    whatNotToDo: asStringArray(treatment.whatNotToDo),
    guidelines: {
      eau: typeof guidelines.eau === 'string' ? cleanText(guidelines.eau) : '',
      acog: typeof guidelines.acog === 'string' ? cleanText(guidelines.acog) : '',
      ranzcog: typeof guidelines.ranzcog === 'string' ? cleanText(guidelines.ranzcog) : '',
      ru: typeof guidelines.ru === 'string' ? cleanText(guidelines.ru) : '',
    },
  };
};

const buildOverview = (disease: Disease): DiseaseOverview => ({
  quickTake: disease.clinicalSummary?.quickSummary ?? `${disease.name} С‚СЂРµР±СѓРµС‚ СЃС‚СЂСѓРєС‚СѓСЂРёСЂРѕРІР°РЅРЅРѕР№ РѕС†РµРЅРєРё РїРѕ СЃРёРјРїС‚РѕРјР°Рј, РєСЂРёС‚РµСЂРёСЏРј РґРёР°РіРЅРѕР·Р° Рё С‚Р°РєС‚РёРєРµ РІРµРґРµРЅРёСЏ.`,
  prevalence: disease.epidemiology,
  riskLevel: disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ' ? 'high' : 'moderate',
  practiceFocus:
    disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ'
      ? 'Р‘С‹СЃС‚СЂРѕ РѕС†РµРЅРёС‚СЊ СЂРёСЃРєРё РґР»СЏ РјР°С‚РµСЂРё Рё РїР»РѕРґР°, РїРѕРґС‚РІРµСЂРґРёС‚СЊ РґРёР°РіРЅРѕР· Рё РѕРїСЂРµРґРµР»РёС‚СЊ СЃСЂРѕРєРё СЌСЃРєР°Р»Р°С†РёРё РёР»Рё СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ.'
      : 'РџРѕРґС‚РІРµСЂРґРёС‚СЊ РґРёР°РіРЅРѕР·, РёСЃРєР»СЋС‡РёС‚СЊ РѕСЃРЅРѕРІРЅС‹Рµ Р°Р»СЊС‚РµСЂРЅР°С‚РёРІС‹ Рё РІС‹Р±СЂР°С‚СЊ С‚Р°РєС‚РёРєСѓ СЃ СѓС‡РµС‚РѕРј СЃРёРјРїС‚РѕРјРѕРІ, С„РµСЂС‚РёР»СЊРЅРѕСЃС‚Рё Рё РѕРЅРєРѕСЂРёСЃРєРѕРІ.',
});

const buildGuidelineBasis = (
  disease: Disease,
  guidelines: Disease['treatment']['guidelines'] = disease.treatment.guidelines,
): GuidelineReference[] => {
  const guidelineMap: Array<{ organization: string; summary?: string; usedFor: string[] }> = [
    { organization: disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ' ? 'WHO / SMFM / RCOG' : 'ESHRE / ESGO / European guidance', summary: guidelines.eau, usedFor: ['diagnosis', 'treatment'] },
    { organization: 'ACOG', summary: guidelines.acog, usedFor: ['diagnosis', 'treatment'] },
    { organization: disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ' ? 'RCOG / NICE / national obstetric guidance' : 'RANZCOG / Australian guidance', summary: guidelines.ranzcog, usedFor: ['diagnosis', 'treatment'] },
    { organization: 'РљР»РёРЅРёС‡РµСЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё Р Р¤ / Р»РѕРєР°Р»СЊРЅР°СЏ РјР°СЂС€СЂСѓС‚РёР·Р°С†РёСЏ', summary: guidelines.ru, usedFor: ['diagnosis', 'treatment'] },
  ];

  return guidelineMap
    .filter(({ summary }) => typeof summary === 'string' && summary.trim().length > 0)
    .map(({ organization, summary, usedFor }) => ({
      organization,
      year: '2023-2026',
      scope: cleanText(summary ?? ''),
      status: 'current',
      usedFor,
    }));
};

const buildDiagnosticCriteria = (disease: Disease): DiseaseDiagnosticCriteria => ({
  clinical: withFallback(
    disease.symptomGroups?.typical,
    [`РљР»РёРЅРёС‡РµСЃРєР°СЏ РєР°СЂС‚РёРЅР° РґРѕР»Р¶РЅР° СЃРѕРѕС‚РІРµС‚СЃС‚РІРѕРІР°С‚СЊ С‚РёРїРёС‡РЅС‹Рј Р¶Р°Р»РѕР±Р°Рј Рё РїСЂРёР·РЅР°РєР°Рј ${disease.name.toLowerCase()}.`],
  ),
  laboratory: [cleanText(disease.diagnostics.markers)],
  imaging: withFallback(disease.diagnostics.imaging, [cleanText(getPrimaryDiagnosticStep(disease))]),
  diagnosisConfirmedWhen: [
    `РљР»РёРЅРёС‡РµСЃРєРёРµ РґР°РЅРЅС‹Рµ СЃРѕРіР»Р°СЃСѓСЋС‚СЃСЏ СЃ РґРёР°РіРЅРѕР·РѕРј ${disease.name.toLowerCase()}.`,
    `РџРѕРґС‚РІРµСЂР¶РґР°СЋС‰РёРµ РёСЃСЃР»РµРґРѕРІР°РЅРёСЏ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‚ РѕР¶РёРґР°РµРјРѕР№ РєР°СЂС‚РёРЅРµ РїРѕ guideline-first РјРѕРґРµР»Рё.`,
  ],
  diagnosisExcludedWhen: [
    `РћР±СЉРµРєС‚РёРІРЅС‹Рµ РґР°РЅРЅС‹Рµ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°СЋС‚ РґРёР°РіРЅРѕР· ${disease.name.toLowerCase()}.`,
    'Р’С‹СЏРІР»РµРЅРѕ Р°Р»СЊС‚РµСЂРЅР°С‚РёРІРЅРѕРµ СЃРѕСЃС‚РѕСЏРЅРёРµ, Р»СѓС‡С€Рµ РѕР±СЉСЏСЃРЅСЏСЋС‰РµРµ СЃРёРјРїС‚РѕРјС‹ Рё СЂРµР·СѓР»СЊС‚Р°С‚С‹ РѕР±СЃР»РµРґРѕРІР°РЅРёСЏ.',
  ],
  notes: ['РљСЂРёС‚РµСЂРёРё РґРёР°РіРЅРѕР·Р° С‚СЂРµР±СѓСЋС‚ РїСЂРёРІСЏР·РєРё Рє Р°РєС‚СѓР°Р»СЊРЅРѕРјСѓ guideline РїСЂРё СЂРµРґР°РєС†РёРѕРЅРЅРѕРј РѕР±РЅРѕРІР»РµРЅРёРё РєР°СЂС‚РѕС‡РєРё.'],
});

const buildSeverityStratification = (disease: Disease): DiseaseSeverityStratification => ({
  title: disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ' ? 'РЎС‚СЂР°С‚РёС„РёРєР°С†РёСЏ С‚СЏР¶РµСЃС‚Рё Рё Р°РєСѓС€РµСЂСЃРєРѕРіРѕ СЂРёСЃРєР°' : 'РЎС‚СЂР°С‚РёС„РёРєР°С†РёСЏ С‚СЏР¶РµСЃС‚Рё Рё РєР»РёРЅРёС‡РµСЃРєРѕРіРѕ СЂРёСЃРєР°',
  tiers: [
    {
      name: 'РљР»РёРЅРёС‡РµСЃРєРё СЃС‚Р°Р±РёР»СЊРЅРѕРµ С‚РµС‡РµРЅРёРµ',
      criteria: ['РќРµС‚ РїСЂРёР·РЅР°РєРѕРІ Р±С‹СЃС‚СЂРѕР№ РґРµРєРѕРјРїРµРЅСЃР°С†РёРё.', 'Р’РѕР·РјРѕР¶РЅР° РїР»Р°РЅРѕРІР°СЏ РґРёР°РіРЅРѕСЃС‚РёРєР° Рё СЃС‚Р°СЂС‚РѕРІР°СЏ С‚РµСЂР°РїРёСЏ РїРµСЂРІРѕР№ Р»РёРЅРёРё.'],
      clinicalMeaning: 'Р”РѕРїСѓСЃС‚РёРјРѕ СЃС‚Р°РЅРґР°СЂС‚РЅРѕРµ РѕР±СЃР»РµРґРѕРІР°РЅРёРµ Рё РїРѕСЌС‚Р°РїРЅРѕРµ РІРµРґРµРЅРёРµ.',
      managementImpact: 'РќР°Р±Р»СЋРґРµРЅРёРµ РїРѕ РїР»Р°РЅСѓ СЃ СЂР°РЅРЅРёРј РєРѕРЅС‚СЂРѕР»РµРј СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚Рё Р»РµС‡РµРЅРёСЏ.',
    },
    {
      name: 'РўРµС‡РµРЅРёРµ СЃ РїРѕРІС‹С€РµРЅРЅС‹Рј СЂРёСЃРєРѕРј',
      criteria: ['Р•СЃС‚СЊ РєСЂР°СЃРЅС‹Рµ С„Р»Р°РіРё, Р°С‚РёРїРёС‡РЅРѕРµ С‚РµС‡РµРЅРёРµ РёР»Рё РѕС‚СЃСѓС‚СЃС‚РІРёРµ РѕС‚РІРµС‚Р° РЅР° СЃС‚Р°СЂС‚РѕРІСѓСЋ С‚Р°РєС‚РёРєСѓ.'],
      clinicalMeaning: 'РўСЂРµР±СѓРµС‚СЃСЏ СѓСЃРєРѕСЂРµРЅРЅРѕРµ СѓС‚РѕС‡РЅРµРЅРёРµ РґРёР°РіРЅРѕР·Р° Рё РїРµСЂРµСЃРјРѕС‚СЂ РјР°СЂС€СЂСѓС‚Р°.',
      managementImpact: 'РќСѓР¶РЅР° СЌСЃРєР°Р»Р°С†РёСЏ РґРёР°РіРЅРѕСЃС‚РёРєРё, РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ РїСЂРѕС„РёР»СЊРЅРѕРіРѕ СЃРїРµС†РёР°Р»РёСЃС‚Р° РёР»Рё РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёСЏ РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј.',
    },
  ],
});

const buildStructuredDifferential = (disease: Disease): DifferentialDiagnosisItem[] =>
  withFallback(disease.diagnostics.differential, buildDifferential(disease)).map((entry) => ({
    condition: cleanText(entry),
    whyConfused: `РњРѕР¶РµС‚ РёРјРёС‚РёСЂРѕРІР°С‚СЊ ${disease.name.toLowerCase()} РїРѕ Р¶Р°Р»РѕР±Р°Рј, РґР°РЅРЅС‹Рј РѕСЃРјРѕС‚СЂР° РёР»Рё РІРёР·СѓР°Р»РёР·Р°С†РёРё.`,
    howToDistinguish: 'РўСЂРµР±СѓРµС‚ СЃРѕРїРѕСЃС‚Р°РІР»РµРЅРёСЏ РєР»РёРЅРёРєРё, РїРѕРґС‚РІРµСЂР¶РґР°СЋС‰РёС… С‚РµСЃС‚РѕРІ Рё РґРёРЅР°РјРёРєРё СЃРѕСЃС‚РѕСЏРЅРёСЏ.',
    testsIfNeeded: [cleanText(getPrimaryDiagnosticStep(disease))],
  }));

const buildManagementAlgorithm = (disease: Disease): DiseaseManagementAlgorithm => ({
  initialAssessment: [
    `РћС†РµРЅРёС‚СЊ Р¶Р°Р»РѕР±С‹, Р°РЅР°РјРЅРµР· Рё РєР»РёРЅРёС‡РµСЃРєРёРµ СЂРёСЃРєРё РїСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° ${disease.name.toLowerCase()}.`,
    cleanText(getPrimaryDiagnosticStep(disease)),
  ],
  confirmDiagnosis: [
    'РџРѕРґС‚РІРµСЂРґРёС‚СЊ РґРёР°РіРЅРѕР· РїРѕ СЃРѕРІРѕРєСѓРїРЅРѕСЃС‚Рё РєР»РёРЅРёРєРё, Р»Р°Р±РѕСЂР°С‚РѕСЂРЅС‹С… РґР°РЅРЅС‹С… Рё РІРёР·СѓР°Р»РёР·Р°С†РёРё.',
    cleanText(disease.diagnostics.markers),
  ],
  startTreatment: withFallback(disease.treatment.firstLine, withFallback(disease.treatment.conservative, [cleanText(getPrimaryTreatment(disease))])),
  reassess: ['РћС†РµРЅРёС‚СЊ РєР»РёРЅРёС‡РµСЃРєРёР№ РѕС‚РІРµС‚, РїРµСЂРµРЅРѕСЃРёРјРѕСЃС‚СЊ Р»РµС‡РµРЅРёСЏ Рё СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРµ РёСЃС…РѕРґРЅРѕР№ РіРёРїРѕС‚РµР·С‹.'],
  escalateWhen: withFallback(disease.clinicalSummary?.whenToEscalate, ['Р­СЃРєР°Р»РёСЂРѕРІР°С‚СЊ РїСЂРё РєСЂР°СЃРЅС‹С… С„Р»Р°РіР°С…, СѓС…СѓРґС€РµРЅРёРё СЃРѕСЃС‚РѕСЏРЅРёСЏ РёР»Рё РѕС‚СЃСѓС‚СЃС‚РІРёРё СЌС„С„РµРєС‚Р° РѕС‚ РїРµСЂРІРѕР№ Р»РёРЅРёРё.']),
  referWhen: [
    disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ'
      ? 'РќР°РїСЂР°РІРёС‚СЊ РІ СЃС‚Р°С†РёРѕРЅР°СЂ РёР»Рё РїРµСЂРёРЅР°С‚Р°Р»СЊРЅС‹Р№ С†РµРЅС‚СЂ РїСЂРё РјР°С‚РµСЂРёРЅСЃРєРѕ-РїР»РѕРґРѕРІРѕРј СЂРёСЃРєРµ.'
      : 'РќР°РїСЂР°РІРёС‚СЊ Рє РїСЂРѕС„РёР»СЊРЅРѕРјСѓ СЃРїРµС†РёР°Р»РёСЃС‚Сѓ РїСЂРё СЃР»РѕР¶РЅРѕРј С‚РµС‡РµРЅРёРё, РЅРµСЏСЃРЅРѕРј РґРёР°РіРЅРѕР·Рµ РёР»Рё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё РїСЂРѕС†РµРґСѓСЂС‹/РѕРїРµСЂР°С†РёРё.',
  ],
});

const buildFollowUpTriggers = (disease: Disease): DiseaseFollowUpTriggers => ({
  routineReview: [disease.followUp?.frequency ?? 'РљРѕРЅС‚СЂРѕР»СЊ РїРѕ СЃС‚Р°РЅРґР°СЂС‚РЅРѕРјСѓ РїР»Р°РЅСѓ РЅР°Р±Р»СЋРґРµРЅРёСЏ РїРѕСЃР»Рµ СЃС‚Р°СЂС‚Р° С‚РµСЂР°РїРёРё.'],
  earlierReviewIf: ['РЎРёРјРїС‚РѕРјС‹ РЅР°СЂР°СЃС‚Р°СЋС‚, РїРѕСЏРІР»СЏСЋС‚СЃСЏ РєСЂР°СЃРЅС‹Рµ С„Р»Р°РіРё РёР»Рё СѓС…СѓРґС€Р°РµС‚СЃСЏ РїРµСЂРµРЅРѕСЃРёРјРѕСЃС‚СЊ Р»РµС‡РµРЅРёСЏ.'],
  switchTreatmentIf: ['РќРµС‚ РєР»РёРЅРёС‡РµСЃРєРѕРіРѕ РѕС‚РІРµС‚Р° РЅР° С‚РµСЂР°РїРёСЋ РїРµСЂРІРѕР№ Р»РёРЅРёРё РёР»Рё РјРµРЅСЏРµС‚СЃСЏ РїСЂРѕС„РёР»СЊ СЂРёСЃРєР°/С†РµР»СЊ Р»РµС‡РµРЅРёСЏ.'],
  urgentReassessmentIf: withFallback(disease.clinicalSummary?.redFlags, ['РџРѕСЏРІР»СЏСЋС‚СЃСЏ РїСЂРёР·РЅР°РєРё РѕСЃР»РѕР¶РЅРµРЅРЅРѕРіРѕ РёР»Рё Р¶РёР·РЅРµСѓРіСЂРѕР¶Р°СЋС‰РµРіРѕ С‚РµС‡РµРЅРёСЏ.']),
});

const buildPatientCounseling = (disease: Disease) =>
  withFallback(disease.recommendations, [
    `РћР±СЉСЏСЃРЅРёС‚СЊ РїР°С†РёРµРЅС‚РєРµ РѕР¶РёРґР°РµРјРѕРµ С‚РµС‡РµРЅРёРµ ${disease.name.toLowerCase()} Рё С†РµР»СЊ РєР°Р¶РґРѕРіРѕ СЌС‚Р°РїР° Р»РµС‡РµРЅРёСЏ.`,
    'РЎРѕРіР»Р°СЃРѕРІР°С‚СЊ РїСЂРёР·РЅР°РєРё, РїСЂРё РєРѕС‚РѕСЂС‹С… РЅСѓР¶РЅРѕ СЃСЂРѕС‡РЅРѕ РѕР±СЂР°С‚РёС‚СЊСЃСЏ РїРѕРІС‚РѕСЂРЅРѕ.',
  ]);

const buildSourceQuality = (disease: Disease): SourceQuality => {
  const hasSpecificGuidelines = Array.isArray(disease.guidelineBasis) && disease.guidelineBasis.length > 0;
  const hasStructuredClinicalFields = Boolean(
    disease.diagnosticCriteria &&
      disease.managementAlgorithm &&
      disease.followUpTriggers &&
      disease.clinicalSummary,
  );

  if (hasSpecificGuidelines && hasStructuredClinicalFields) {
    return {
      level: 'reviewed',
      label: 'Guideline-backed clinical card',
      note: 'Core clinical structure is present and supported by card-level guideline references.',
    };
  }

  return {
    level: 'needs-source-review',
    label: 'Requires source-specific review',
    note: 'Runtime enrichment provides a safe structured baseline; exact source-specific claims should be reviewed before being treated as final guidance.',
  };
};

const buildPatientExplanation = (disease: Disease): PatientExplanation => ({
  plainLanguageSummary:
    disease.patientExplanation?.plainLanguageSummary ??
    `${disease.name}: краткое объяснение для пациентки должно помогать понять цель обследования, лечения и наблюдения без замены очной консультации.`,
  whatToWatch: withFallback(disease.patientExplanation?.whatToWatch, disease.clinicalSummary?.redFlags ?? [
    'Усиление боли, кровотечения, лихорадки, слабости или появление новых тревожных симптомов.',
  ]),
  selfCareBoundaries: withFallback(disease.patientExplanation?.selfCareBoundaries, [
    'Самонаблюдение допустимо только при стабильном состоянии и понятном плане follow-up.',
    'Не начинать рецептурное лечение и не откладывать очную оценку при красных флагах.',
  ]),
  whenToSeekCare: withFallback(disease.patientExplanation?.whenToSeekCare, disease.clinicalSummary?.whenToEscalate ?? [
    'Обратиться за медицинской помощью при ухудшении состояния, беременности, выраженной боли, кровотечении или признаках инфекции.',
  ]),
});
const buildSpecialPopulations = (disease: Disease): DiseaseSpecialPopulations => {
  if (disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return {
      pregnancy: ['РўР°РєС‚РёРєР° РѕРїСЂРµРґРµР»СЏРµС‚СЃСЏ Р±Р°Р»Р°РЅСЃРѕРј РїРѕР»СЊР·С‹ Рё СЂРёСЃРєР° РґР»СЏ РјР°С‚РµСЂРё Рё РїР»РѕРґР°.'],
      postpartum: ['РџРѕСЃР»Рµ СЂРѕРґРѕРІ С‚СЂРµР±СѓРµС‚СЃСЏ РѕС‚РґРµР»СЊРЅР°СЏ РїРµСЂРµРѕС†РµРЅРєР° СЂРёСЃРєРѕРІ, СЃРёРјРїС‚РѕРјРѕРІ Рё РїРѕРєР°Р·Р°РЅРёР№ Рє РїСЂРѕРґРѕР»Р¶РµРЅРёСЋ С‚РµСЂР°РїРёРё.'],
    };
  }

  return {
    adolescents: ['РЈ РїРѕРґСЂРѕСЃС‚РєРѕРІ РІР°Р¶РЅРѕ СѓС‡РёС‚С‹РІР°С‚СЊ РІР»РёСЏРЅРёРµ РЅР° С†РёРєР», СЂР°Р·РІРёС‚РёРµ Рё РґРѕР»РіРѕСЃСЂРѕС‡РЅСѓСЋ СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅСѓСЋ С„СѓРЅРєС†РёСЋ.'],
    fertilityPlanning: ['РџСЂРё РїР»Р°РЅРёСЂРѕРІР°РЅРёРё Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё С‚Р°РєС‚РёРєР° РґРѕР»Р¶РЅР° СѓС‡РёС‚С‹РІР°С‚СЊ РІР»РёСЏРЅРёРµ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ Рё Р»РµС‡РµРЅРёСЏ РЅР° С„РµСЂС‚РёР»СЊРЅРѕСЃС‚СЊ.'],
    perimenopause: ['Р’ РїРµСЂРёРјРµРЅРѕРїР°СѓР·Рµ С‚СЂРµР±СѓРµС‚СЃСЏ СѓС‡РёС‚С‹РІР°С‚СЊ РёР·РјРµРЅРµРЅРёРµ РѕРЅРєРѕСЂРёСЃРєРѕРІ Рё РїСЂРѕС„РёР»СЊ Р°РЅРѕРјР°Р»СЊРЅС‹С… РєСЂРѕРІРѕС‚РµС‡РµРЅРёР№.'],
  };
};

const buildTimingOfDelivery = (disease: Disease): TimingOfDelivery | undefined => {
  if (disease.subtitle !== 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return undefined;
  }

  return {
    expectantManagementUntil: ['Р‘РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ РїСЂРѕР»РѕРЅРіРёСЂСѓСЋС‚ С‚РѕР»СЊРєРѕ РїРѕРєР° СЌС‚Рѕ Р±РµР·РѕРїР°СЃРЅРѕ РґР»СЏ РјР°С‚РµСЂРё Рё РїР»РѕРґР°.'],
    deliverNowWhen: ['Р РѕРґРѕСЂР°Р·СЂРµС€РµРЅРёРµ РїРѕРєР°Р·Р°РЅРѕ РїСЂРё РґРµРєРѕРјРїРµРЅСЃР°С†РёРё РјР°С‚РµСЂРёРЅСЃРєРѕРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ, СѓС…СѓРґС€РµРЅРёРё СЃРѕСЃС‚РѕСЏРЅРёСЏ РїР»РѕРґР° РёР»Рё РёСЃС‡РµСЂРїР°РЅРёРё Р±РµР·РѕРїР°СЃРЅРѕРіРѕ РѕРєРЅР° РѕР¶РёРґР°РЅРёСЏ.'],
    gestationalAgeModifiers: ['РЎСЂРѕРє РіРµСЃС‚Р°С†РёРё РІР»РёСЏРµС‚ РЅР° Р±Р°Р»Р°РЅСЃ РјРµР¶РґСѓ РѕР¶РёРґР°РЅРёРµРј, РєРѕСЂС‚РёРєРѕСЃС‚РµСЂРѕРёРґР°РјРё, РїРµСЂРµРІРѕРґРѕРј Рё СЃСЂРѕС‡РЅС‹Рј СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёРµРј.'],
    modeOfDeliveryNotes: ['РЎРїРѕСЃРѕР± СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ РѕРїСЂРµРґРµР»СЏРµС‚СЃСЏ Р°РєСѓС€РµСЂСЃРєРѕР№ СЃРёС‚СѓР°С†РёРµР№ Рё СЃСЂРѕС‡РЅРѕСЃС‚СЊСЋ РІРјРµС€Р°С‚РµР»СЊСЃС‚РІР°.'],
  };
};

const buildMaternalMonitoring = (disease: Disease): MonitoringPlan | undefined => {
  if (disease.subtitle !== 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return undefined;
  }

  return {
    vitalSigns: ['РљРѕРЅС‚СЂРѕР»СЊ Р°СЂС‚РµСЂРёР°Р»СЊРЅРѕРіРѕ РґР°РІР»РµРЅРёСЏ, РїСѓР»СЊСЃР°, С‚РµРјРїРµСЂР°С‚СѓСЂС‹ Рё РѕР±С‰РµРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ РїРѕ РєР»РёРЅРёС‡РµСЃРєРёРј РїРѕРєР°Р·Р°РЅРёСЏРј.'],
    labs: [cleanText(disease.diagnostics.markers)],
    warningSymptoms: withFallback(disease.clinicalSummary?.redFlags, ['РќР°СЂР°СЃС‚Р°РЅРёРµ СЃРёРјРїС‚РѕРјРѕРІ, РїСЂРёР·РЅР°РєРё РѕСЂРіР°РЅРЅРѕР№ РґРёСЃС„СѓРЅРєС†РёРё РёР»Рё РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЏ.']),
    reassessmentInterval: ['Р§Р°СЃС‚РѕС‚Р° РїРµСЂРµРѕС†РµРЅРєРё Р·Р°РІРёСЃРёС‚ РѕС‚ С‚СЏР¶РµСЃС‚Рё СЃРѕСЃС‚РѕСЏРЅРёСЏ Рё СѓСЃР»РѕРІРёР№ РІРµРґРµРЅРёСЏ.'],
  };
};

const buildFetalMonitoring = (disease: Disease): MonitoringPlan | undefined => {
  if (disease.subtitle !== 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return undefined;
  }

  return {
    imaging: withFallback(disease.diagnostics.imaging, buildImaging(disease)),
    warningSymptoms: ['РџСЂРёР·РЅР°РєРё РґРёСЃС‚СЂРµСЃСЃР° РїР»РѕРґР°, РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРёР№ РґРѕРїРїР»РµСЂ, РѕС‚РєР»РѕРЅРµРЅРёСЏ РљРўР“ РёР»Рё РЅР°СЂСѓС€РµРЅРёРµ СЂРѕСЃС‚Р°.'],
    reassessmentInterval: ['РљСЂР°С‚РЅРѕСЃС‚СЊ РјРѕРЅРёС‚РѕСЂРёРЅРіР° РѕРїСЂРµРґРµР»СЏРµС‚СЃСЏ СЂРёСЃРєРѕРј Рё СЃСЂРѕРєРѕРј Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё.'],
  };
};

const buildInpatientVsOutpatient = (disease: Disease): InpatientOutpatientPlan | undefined => {
  if (disease.subtitle !== 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return undefined;
  }

  return {
    outpatientWhen: ['РђРјР±СѓР»Р°С‚РѕСЂРЅРѕРµ РІРµРґРµРЅРёРµ РґРѕРїСѓСЃС‚РёРјРѕ С‚РѕР»СЊРєРѕ РїСЂРё СЃС‚Р°Р±РёР»СЊРЅРѕРј С‚РµС‡РµРЅРёРё Рё РѕС‚СЃСѓС‚СЃС‚РІРёРё РїРѕРєР°Р·Р°РЅРёР№ Рє РєСЂСѓРіР»РѕСЃСѓС‚РѕС‡РЅРѕРјСѓ РјРѕРЅРёС‚РѕСЂРёРЅРіСѓ.'],
    inpatientWhen: ['Р“РѕСЃРїРёС‚Р°Р»РёР·Р°С†РёСЏ РЅСѓР¶РЅР° РїСЂРё С‚СЏР¶РµР»РѕРј С‚РµС‡РµРЅРёРё, РЅРµСЃС‚Р°Р±РёР»СЊРЅРѕСЃС‚Рё, СЂРёСЃРєРµ СЃСЂРѕС‡РЅРѕРіРѕ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ РёР»Рё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё РёРЅС‚РµРЅСЃРёРІРЅРѕРіРѕ РЅР°Р±Р»СЋРґРµРЅРёСЏ.'],
  };
};

const buildDeliveryIndications = (disease: Disease) =>
  disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ'
    ? ['РџРѕРєР°Р·Р°РЅРёСЏ Рє СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЋ РѕРїСЂРµРґРµР»СЏСЋС‚СЃСЏ С‚СЏР¶РµСЃС‚СЊСЋ СЃРѕСЃС‚РѕСЏРЅРёСЏ РјР°С‚РµСЂРё, СЃС‚Р°С‚СѓСЃРѕРј РїР»РѕРґР° Рё СЃСЂРѕРєРѕРј Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё.']
    : undefined;

const buildPostpartumManagement = (disease: Disease) =>
  disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ'
    ? ['РџРѕСЃР»Рµ СЂРѕРґРѕРІ С‚СЂРµР±СѓРµС‚СЃСЏ РїРµСЂРµСЃРјРѕС‚СЂ РґРёР°РіРЅРѕР·Р°, РѕСЃС‚Р°С‚РѕС‡РЅС‹С… СЂРёСЃРєРѕРІ Рё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё РїСЂРѕРґРѕР»Р¶РµРЅРёСЏ РјРѕРЅРёС‚РѕСЂРёРЅРіР° РёР»Рё С‚РµСЂР°РїРёРё.']
    : undefined;

const buildFertilityImpact = (disease: Disease) =>
  disease.subtitle === 'Р“РёРЅРµРєРѕР»РѕРіРёСЏ'
    ? ['РћС†РµРЅРёС‚СЊ РІР»РёСЏРЅРёРµ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ Рё Р»РµС‡РµРЅРёСЏ РЅР° РѕРІСѓР»СЏС†РёСЋ, РёРјРїР»Р°РЅС‚Р°С†РёСЋ, РїСЂРѕС…РѕРґРёРјРѕСЃС‚СЊ С‚СЂСѓР± Рё СЃСЂРѕРєРё РїР»Р°РЅРёСЂРѕРІР°РЅРёСЏ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё.']
    : undefined;

const buildMalignancyRisk = (disease: Disease) =>
  disease.subtitle === 'Р“РёРЅРµРєРѕР»РѕРіРёСЏ'
    ? ['РћРЅРєРѕСЂРёСЃРє РѕС†РµРЅРёРІР°РµС‚СЃСЏ РїРѕ РІРѕР·СЂР°СЃС‚Сѓ, СЃРёРјРїС‚РѕРјР°Рј, РІРёР·СѓР°Р»РёР·Р°С†РёРё, РіРёСЃС‚РѕР»РѕРіРёРё Рё РЅР°Р»РёС‡РёСЋ РїСЂРµРґСЂР°РєРѕРІС‹С… СЃРѕСЃС‚РѕСЏРЅРёР№.']
    : undefined;

const buildRecurrenceRisk = (disease: Disease) =>
  disease.subtitle === 'Р“РёРЅРµРєРѕР»РѕРіРёСЏ'
    ? ['Р РёСЃРє СЂРµС†РёРґРёРІР° Р·Р°РІРёСЃРёС‚ РѕС‚ Р±РёРѕР»РѕРіРёРё Р·Р°Р±РѕР»РµРІР°РЅРёСЏ, РїРѕР»РЅРѕС‚С‹ Р»РµС‡РµРЅРёСЏ Рё РґР»РёС‚РµР»СЊРЅРѕСЃС‚Рё РїРѕРґРґРµСЂР¶РёРІР°СЋС‰РµР№ С‚РµСЂР°РїРёРё.']
    : undefined;

const buildScreeningAndPrevention = (disease: Disease) =>
  disease.subtitle === 'Р“РёРЅРµРєРѕР»РѕРіРёСЏ'
    ? ['РџСЂРѕС„РёР»Р°РєС‚РёРєР° Рё СЃРєСЂРёРЅРёРЅРі РґРѕР»Р¶РЅС‹ СѓС‡РёС‚С‹РІР°С‚СЊ РІРѕР·СЂР°СЃС‚, СЃРёРјРїС‚РѕРјС‹, Р’РџР§-СЃС‚Р°С‚СѓСЃ, СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅС‹Рµ РїР»Р°РЅС‹ Рё РѕРЅРєРѕР°РЅР°РјРЅРµР·.']
    : undefined;

const buildWhenBiopsyNeeded = (disease: Disease) =>
  disease.subtitle === 'Р“РёРЅРµРєРѕР»РѕРіРёСЏ'
    ? ['Р‘РёРѕРїСЃРёСЏ РЅСѓР¶РЅР° РїСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РЅРµРѕРїР»Р°Р·РёСЋ, РїСЂРµРґСЂР°Рє, Р°С‚РёРїРёС‡РЅС‹Рµ РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЏ РёР»Рё РЅРµСЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё РєР»РёРЅРёРєРё Рё РІРёР·СѓР°Р»РёР·Р°С†РёРё.']
    : undefined;

const normalizeDisease = (disease: DiseaseInput): Disease => {
  const name = typeof disease.name === 'string' && disease.name.trim().length > 0 ? cleanText(disease.name) : 'РљР»РёРЅРёС‡РµСЃРєРѕРµ СЃРѕСЃС‚РѕСЏРЅРёРµ';
  const subtitle = disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ' || disease.subtitle === 'Р“РёРЅРµРєРѕР»РѕРіРёСЏ' ? disease.subtitle : 'Р“РёРЅРµРєРѕР»РѕРіРёСЏ';

  return {
    ...disease,
    id: typeof disease.id === 'string' && disease.id.trim().length > 0 ? disease.id : slugifyIdPart(name),
    name,
    icd: typeof disease.icd === 'string' && disease.icd.trim().length > 0 ? cleanText(disease.icd) : 'РњРљР‘-10',
    subtitle,
    description:
      typeof disease.description === 'string' && disease.description.trim().length > 0
        ? cleanText(disease.description)
        : `${name}: РєР»РёРЅРёС‡РµСЃРєР°СЏ РєР°СЂС‚РѕС‡РєР° РґР»СЏ Р±С‹СЃС‚СЂРѕР№ РѕС†РµРЅРєРё, РґРёР°РіРЅРѕСЃС‚РёРєРё Рё РІС‹Р±РѕСЂР° С‚Р°РєС‚РёРєРё РІРµРґРµРЅРёСЏ.`,
    icon: typeof disease.icon === 'string' && disease.icon.trim().length > 0 ? disease.icon : 'рџ“‹',
    definition:
      typeof disease.definition === 'string' && disease.definition.trim().length > 0
        ? cleanText(disease.definition)
        : `${name} С‚СЂРµР±СѓРµС‚ СЃРѕРїРѕСЃС‚Р°РІР»РµРЅРёСЏ Р¶Р°Р»РѕР±, Р°РЅР°РјРЅРµР·Р°, РѕР±СЉРµРєС‚РёРІРЅС‹С… РґР°РЅРЅС‹С… Рё РїСЂРѕС„РёР»СЊРЅС‹С… РёСЃСЃР»РµРґРѕРІР°РЅРёР№.`,
    epidemiology:
      typeof disease.epidemiology === 'string' && disease.epidemiology.trim().length > 0
        ? cleanText(disease.epidemiology)
        : 'Р§Р°СЃС‚РѕС‚Р° Рё РєР»РёРЅРёС‡РµСЃРєР°СЏ Р·РЅР°С‡РёРјРѕСЃС‚СЊ Р·Р°РІРёСЃСЏС‚ РѕС‚ РІРѕР·СЂР°СЃС‚Р°, СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅРѕРіРѕ СЃС‚Р°С‚СѓСЃР°, С„Р°РєС‚РѕСЂРѕРІ СЂРёСЃРєР° Рё РјР°СЂС€СЂСѓС‚Р° РІС‹СЏРІР»РµРЅРёСЏ.',
    etiology: withFallback(asStringArray(disease.etiology), ['РњСѓР»СЊС‚РёС„Р°РєС‚РѕСЂРЅС‹Рµ РїСЂРёС‡РёРЅС‹, СѓС‚РѕС‡РЅСЏРµРјС‹Рµ РїРѕ РєР»РёРЅРёС‡РµСЃРєРѕРјСѓ РєРѕРЅС‚РµРєСЃС‚Сѓ Рё РґР°РЅРЅС‹Рј РѕР±СЃР»РµРґРѕРІР°РЅРёСЏ.']),
    symptoms: withFallback(asStringArray(disease.symptoms), ['Р–Р°Р»РѕР±С‹ Рё РїСЂРёР·РЅР°РєРё СѓС‚РѕС‡РЅСЏСЋС‚СЃСЏ РїСЂРё РѕС‡РЅРѕР№ РєР»РёРЅРёС‡РµСЃРєРѕР№ РѕС†РµРЅРєРµ.']),
    diagnostics: normalizeDiagnostics(disease),
    treatment: normalizeTreatment(disease),
  };
};

const getPrimaryTreatment = (disease: Disease) => {
  const entry = disease.treatment.conservative?.[0] ?? disease.treatment.surgical?.[0] ?? 'РїРµСЂСЃРѕРЅРёС„РёС†РёСЂРѕРІР°РЅРЅР°СЏ С‚РµСЂР°РїРёСЏ';
  return cleanText(entry);
};

const getPrimarySymptom = (disease: Disease) => disease.symptoms[0] ?? 'РєР»РёРЅРёС‡РµСЃРєРёРµ СЃРёРјРїС‚РѕРјС‹';

const getPrimaryDiagnosticStep = (disease: Disease) => disease.diagnostics.steps[0] ?? 'РєР»РёРЅРёС‡РµСЃРєР°СЏ РѕС†РµРЅРєР°';

const getDifferentialSignal = (disease: Disease) => disease.diagnostics.differential?.[0] ?? 'Р°С‚РёРїРёС‡РЅРѕРµ С‚РµС‡РµРЅРёРµ РёР»Рё РѕС‚СЃСѓС‚СЃС‚РІРёРµ РѕС‚РІРµС‚Р° РЅР° СЃС‚Р°СЂС‚РѕРІСѓСЋ С‚Р°РєС‚РёРєСѓ';

const buildClinicalSummary = (disease: Disease): DiseaseClinicalSummary => {
  const primarySymptom = cleanText(getPrimarySymptom(disease));
  const primaryDiagnosticStep = cleanText(getPrimaryDiagnosticStep(disease));
  const primaryTreatment = cleanText(getPrimaryTreatment(disease));
  const primaryDifferentialSignal = cleanText(getDifferentialSignal(disease));
  const conservativeAction = disease.treatment.conservative?.[0];
  const surgicalAction = disease.treatment.surgical?.[0];

  return {
    quickSummary:
      disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ'
        ? `${disease.name} С‚СЂРµР±СѓРµС‚ Р±С‹СЃС‚СЂРѕР№ Р°РєСѓС€РµСЂСЃРєРѕР№ РѕС†РµРЅРєРё, РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ С‡РµСЂРµР· ${primaryDiagnosticStep} Рё СЂР°РЅРЅРµРіРѕ РІС‹Р±РѕСЂР° С‚Р°РєС‚РёРєРё РІРµРґРµРЅРёСЏ.`
        : `${disease.name} СЃР»РµРґСѓРµС‚ Р·Р°РїРѕРґРѕР·СЂРёС‚СЊ РїСЂРё Р¶Р°Р»РѕР±Р°С… РЅР° ${primarySymptom}; Р±Р°Р·РѕРІС‹Р№ С€Р°Рі РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ - ${primaryDiagnosticStep}.`,
    redFlags: [
      `Р‘С‹СЃС‚СЂРѕРµ СѓС…СѓРґС€РµРЅРёРµ СЃРёРјРїС‚РѕРјРѕРІ РёР»Рё РЅРµС‚РёРїРёС‡РЅРѕРµ С‚РµС‡РµРЅРёРµ РїСЂРё ${disease.name.toLowerCase()}.`,
      `РџСЂРёР·РЅР°РєРё С‚СЏР¶РµР»РѕРіРѕ РѕСЃР»РѕР¶РЅРµРЅРёСЏ, С‚СЂРµР±СѓСЋС‰РёРµ РЅРµРјРµРґР»РµРЅРЅРѕР№ РѕС‡РЅРѕР№ РѕС†РµРЅРєРё Рё РїРµСЂРµСЃРјРѕС‚СЂР° С‚Р°РєС‚РёРєРё.`,
    ],
    firstLineActions: [
      `РџСЂРѕРІРµСЃС‚Рё СЃС‚Р°СЂС‚РѕРІСѓСЋ РєР»РёРЅРёС‡РµСЃРєСѓСЋ РѕС†РµРЅРєСѓ Рё РїРѕРґС‚РІРµСЂРґРёС‚СЊ РґРёР°РіРЅРѕР· С‡РµСЂРµР· ${primaryDiagnosticStep}.`,
      conservativeAction ? cleanText(conservativeAction) : `Р Р°СЃСЃРјРѕС‚СЂРµС‚СЊ СЃС‚Р°СЂС‚РѕРІСѓСЋ С‚Р°РєС‚РёРєСѓ: ${primaryTreatment}.`,
    ],
    diagnosticMinimum: [
      primaryDiagnosticStep,
      cleanText(disease.diagnostics.markers),
    ],
    whenToEscalate: [
      surgicalAction ? `Р•СЃР»Рё СЃС‚Р°СЂС‚РѕРІР°СЏ С‚Р°РєС‚РёРєР° РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅР°, СЂР°СЃСЃРјРѕС‚СЂРµС‚СЊ СЌСЃРєР°Р»Р°С†РёСЋ: ${cleanText(surgicalAction)}.` : 'РџСЂРё РѕС‚СЃСѓС‚СЃС‚РІРёРё СЌС„С„РµРєС‚Р° РѕС‚ С‚РµСЂР°РїРёРё РїРµСЂРІРѕР№ Р»РёРЅРёРё С‚СЂРµР±СѓРµС‚СЃСЏ РїРµСЂРµСЃРјРѕС‚СЂ РґРёР°РіРЅРѕР·Р° Рё СЌСЃРєР°Р»Р°С†РёСЏ РІРµРґРµРЅРёСЏ.',
      `Р­СЃРєР°Р»РёСЂРѕРІР°С‚СЊ С‚Р°РєС‚РёРєСѓ РїСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° ${primaryDifferentialSignal}.`,
    ],
    clinicalPearls: [
      `РћС†РµРЅРёРІР°Р№С‚Рµ ${disease.name.toLowerCase()} РїРѕ СЃРѕРІРѕРєСѓРїРЅРѕСЃС‚Рё Р¶Р°Р»РѕР±, РєР»РёРЅРёРєРё Рё РїРѕРґС‚РІРµСЂР¶РґР°СЋС‰РёС… РёСЃСЃР»РµРґРѕРІР°РЅРёР№.`,
      `Р РµС€РµРЅРёСЏ РїРѕ Р»РµС‡РµРЅРёСЋ РґРѕР»Р¶РЅС‹ СѓС‡РёС‚С‹РІР°С‚СЊ СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅС‹Рµ РїР»Р°РЅС‹, РІРѕР·СЂР°СЃС‚ Рё РєР»РёРЅРёС‡РµСЃРєРёРµ СЂРёСЃРєРё РїР°С†РёРµРЅС‚Р°.`,
    ],
  };
};

const getGynecologyCluster = (disease: Disease): GynecologyCluster => {
  const target = `${disease.id} ${disease.name} ${disease.icon}`.toLowerCase();

  if (
    /(cancer|sarcoma|vin|vain|dysplasia|СЂР°Рє|РЅРµРѕРїР»Р°Р·|carcinoma|onc)/.test(target) &&
    !/(breast-cancer|РјРѕР»РѕС‡РЅРѕР№ Р¶РµР»РµР·С‹)/.test(target)
  ) {
    return 'oncology';
  }

  if (/(breast|mast|fibroadenoma|ductal-ectasia|РјР°СЃС‚|РјРѕР»РѕС‡РЅРѕР№ Р¶РµР»РµР·С‹)/.test(target)) {
    return 'breast';
  }

  if (/(endometri|adenomy|СЌРЅРґРѕРјРµС‚СЂРё|Р°РґРµРЅРѕРјРё)/.test(target)) {
    return 'endometriosis';
  }

  if (/(pid|cervic|vaginit|barth|syphilis|gonorrhea|herpes|warts|chlam|trich|candid|bv|tuberculosis|endometritis|salping|toa|pelvioperiton)/.test(target)) {
    return 'infection';
  }

  if (/(prolapse|cystocele|rectocele|incontinence|bladder|cystitis|fistula|physio|congestion)/.test(target)) {
    return 'urogyne';
  }

  if (/(infert|ivf|iui|icsi|pgd|donor|hydrosalpinx|ectopic|muller|asherman|anomaly|tubal-factor|pregnancy-loss|miscarriage)/.test(target)) {
    return 'fertility';
  }

  if (/(pcos|amenorr|oligomen|hyperprol|hypogonad|ovarian-resistance|anovulation|diminished-ovarian|premature-ovarian|poi|pof|pms|pmdr|dysmenorr|menorrh|hypermen|hypomen|metrorrh)/.test(target)) {
    return 'endocrine';
  }

  if (/(menopause|postmenop|hrt|osteoporosis|genitourinary|atrophy)/.test(target)) {
    return 'menopause';
  }

  if (/(vulvodynia|lichen|dystrophy|circumcision|vulvar)/.test(target)) {
    return 'vulvar';
  }

  if (/(fibroid|myoma|polyp|hyperplasia|aub|uterine|cervical|С€РµР№Рє|СЌРЅРґРѕРјРµС‚СЂРё|РјР°С‚Рє)/.test(target)) {
    return 'uterine';
  }

  if (/(cyst|torsion|apoplexy|ovarian|adnex)/.test(target)) {
    return 'adnexal';
  }

  return 'general';
};

const getObstetricsCluster = (disease: Disease): ObstetricsCluster => {
  const target = `${disease.id} ${disease.name} ${disease.icon}`.toLowerCase();

  if (/(preeclampsia|eclampsia|hellp|hypertension|РѕС‚РµРєРё|edema)/.test(target)) {
    return 'hypertension';
  }

  if (/(gestational-diabetes|type1-diabetes|type2-diabetes|diabetes|РіСЃРґ)/.test(target)) {
    return 'diabetes';
  }

  if (/(placenta|abruption|accreta|previa|СЃС‚Р°СЂРµРЅРёРµ РїР»Р°С†РµРЅС‚С‹|placental)/.test(target)) {
    return 'placenta';
  }

  if (/(preterm|pprom|premature|СѓРіСЂРѕР·Р° РїСЂРµР¶РґРµРІСЂРµРјРµРЅРЅС‹С…|РїСЂРµР¶РґРµРІСЂРµРјРµРЅРЅС‹Рµ СЂРѕРґС‹)/.test(target)) {
    return 'preterm';
  }

  if (/(miscarriage|abortion|ectopic-pregnancy|mole|РїСѓР·С‹СЂРЅС‹Р№ Р·Р°РЅРѕСЃ|РЅРµРІС‹РЅР°С€|РІС‹РєРёРґС‹С€|РІРЅРµРјР°С‚РѕС‡РЅР°СЏ)/.test(target)) {
    return 'pregnancy-loss';
  }

  if (/(fgr|ttts|breech|macrosomia|fetal|rh|hemolytic|РѕР»РёРіРѕРіРёРґСЂР°Рј|polyhydramnios|oligohydramnios|twin|РґРІРѕР№РЅ|РіРёРїРѕРєСЃРёСЏ РїР»РѕРґР°|Р°РЅС‚РµРЅР°С‚Р°Р»СЊРЅР°СЏ РіРёР±РµР»СЊ)/.test(target)) {
    return 'fetal';
  }

  if (/(uti|pyelonephritis|chorioamnionitis|torch|hepatitis|hiv|gbs|listeriosis|infection)/.test(target)) {
    return 'infection';
  }

  if (/(postpartum|subinvolution|mastitis|depression|Р»Р°РєС‚РѕСЃС‚Р°Р·|СЃСѓР±РёРЅРІРѕР»СЋС†РёСЏ)/.test(target)) {
    return 'postpartum';
  }

  if (/(dvt|embolism|thrombosis|С‚СЂРѕРјР±)/.test(target)) {
    return 'thrombosis';
  }

  if (/(thyroid|anemia|asthma|epilepsy|lupus|antiphospholipid|cardiac|obesity|medical)/.test(target)) {
    return 'medical';
  }

  if (/(labor|cesarean|shoulder|uterine-rupture|СЂРѕРґРѕРІРѕР№|РєРµСЃР°СЂ|РґРёСЃС‚РѕС†Рё|РїРѕС‚СѓРіРё)/.test(target)) {
    return 'labor';
  }

  return 'general';
};

const buildObstetricsImaging = (cluster: ObstetricsCluster) => {
  switch (cluster) {
    case 'hypertension':
      return [
        'РЈР—Р РїР»РѕРґР° СЃ Р±РёРѕРјРµС‚СЂРёРµР№, РѕС†РµРЅРєРѕР№ РѕРєРѕР»РѕРїР»РѕРґРЅС‹С… РІРѕРґ Рё Р·СЂРµР»РѕСЃС‚Рё РїР»Р°С†РµРЅС‚С‹ РІ РґРёРЅР°РјРёРєРµ.',
        'Р”РѕРїРїР»РµСЂРѕРјРµС‚СЂРёСЏ РјР°С‚РѕС‡РЅС‹С… Р°СЂС‚РµСЂРёР№, Р°СЂС‚РµСЂРёРё РїСѓРїРѕРІРёРЅС‹ Рё СЃСЂРµРґРЅРµР№ РјРѕР·РіРѕРІРѕР№ Р°СЂС‚РµСЂРёРё.',
        'РљРўР“ Рё Р±РёРѕС„РёР·РёС‡РµСЃРєРёР№ РїСЂРѕС„РёР»СЊ РїР»РѕРґР° РєР°Рє РґРѕРїРѕР»РЅРµРЅРёРµ Рє СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕРјСѓ РјРѕРЅРёС‚РѕСЂРёРЅРіСѓ.',
      ];
    case 'diabetes':
      return [
        'РЎРµСЂРёР№РЅР°СЏ С„РµС‚РѕРјРµС‚СЂРёСЏ РґР»СЏ РѕС†РµРЅРєРё РјР°РєСЂРѕСЃРѕРјРёРё РёР»Рё РґРёСЃРїСЂРѕРїРѕСЂС†РёРѕРЅР°Р»СЊРЅРѕРіРѕ СЂРѕСЃС‚Р°.',
        'РћС†РµРЅРєР° РєРѕР»РёС‡РµСЃС‚РІР° РѕРєРѕР»РѕРїР»РѕРґРЅС‹С… РІРѕРґ Рё РїСЂРёР·РЅР°РєРѕРІ РґРёР°Р±РµС‚РёС‡РµСЃРєРѕР№ С„РµС‚РѕРїР°С‚РёРё.',
        'Р”РѕРїРїР»РµСЂРѕРјРµС‚СЂРёСЏ Рё РљРўР“ РїРѕ Р°РєСѓС€РµСЂСЃРєРёРј РїРѕРєР°Р·Р°РЅРёСЏРј РїСЂРё РґРµРєРѕРјРїРµРЅСЃР°С†РёРё.',
      ];
    case 'placenta':
      return [
        'РўСЂР°РЅСЃР°Р±РґРѕРјРёРЅР°Р»СЊРЅРѕРµ Рё С‚СЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅРѕРµ РЈР—Р РґР»СЏ РѕС†РµРЅРєРё Р»РѕРєР°Р»РёР·Р°С†РёРё РїР»Р°С†РµРЅС‚С‹ Рё РѕС‚РЅРѕС€РµРЅРёСЏ Рє РІРЅСѓС‚СЂРµРЅРЅРµРјСѓ Р·РµРІСѓ.',
        'Р¦РІРµС‚РѕРІРѕР№ РґРѕРїРїР»РµСЂ РґР»СЏ РїРѕРёСЃРєР° Р»Р°РєСѓРЅ, Р°РЅРѕРјР°Р»СЊРЅРѕР№ РІР°СЃРєСѓР»СЏСЂРёР·Р°С†РёРё Рё РїСЂРёР·РЅР°РєРѕРІ РІСЂР°СЃС‚Р°РЅРёСЏ.',
        'РњР Рў РїСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° placenta accreta spectrum РёР»Рё РЅРµСЏСЃРЅРѕР№ РіР»СѓР±РёРЅРµ РёРЅРІР°Р·РёРё.',
      ];
    case 'preterm':
      return [
        'РўСЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅР°СЏ С†РµСЂРІРёРєРѕРјРµС‚СЂРёСЏ РґР»СЏ РѕС†РµРЅРєРё РґР»РёРЅС‹ С€РµР№РєРё РјР°С‚РєРё.',
        'РЈР—Р РїР»РѕРґР° Рё РѕРєРѕР»РѕРїР»РѕРґРЅС‹С… РІРѕРґ РїСЂРё СѓРіСЂРѕР·Рµ РїСЂРµР¶РґРµРІСЂРµРјРµРЅРЅС‹С… СЂРѕРґРѕРІ РёР»Рё РџР РџРћ.',
        'Р”РѕРїРїР»РµСЂРѕРјРµС‚СЂРёСЏ Рё РљРўР“ РїСЂРё СѓС…СѓРґС€РµРЅРёРё СЃРѕСЃС‚РѕСЏРЅРёСЏ РїР»РѕРґР°.',
      ];
    case 'pregnancy-loss':
      return [
        'РўСЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅРѕРµ РЈР—Р РєР°Рє РѕСЃРЅРѕРІРЅРѕР№ РјРµС‚РѕРґ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ Р»РѕРєР°Р»РёР·Р°С†РёРё Рё Р¶РёР·РЅРµСЃРїРѕСЃРѕР±РЅРѕСЃС‚Рё Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё.',
        'Р”РёРЅР°РјРёС‡РµСЃРєРѕРµ РЈР—Р РІ СЃРѕС‡РµС‚Р°РЅРёРё СЃ РҐР“Р§ РїСЂРё Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё РЅРµРёР·РІРµСЃС‚РЅРѕР№ Р»РѕРєР°Р»РёР·Р°С†РёРё.',
        'РћС†РµРЅРєР° РїРѕР»РѕСЃС‚Рё РјР°С‚РєРё Рё РїСЂРёРґР°С‚РєРѕРІ РїРѕСЃР»Рµ Р·Р°РІРµСЂС€РµРЅРёСЏ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё РёР»Рё РїСЂРё РѕСЃР»РѕР¶РЅРµРЅРёСЏС….',
      ];
    case 'fetal':
      return [
        'Р¤РµС‚РѕРјРµС‚СЂРёСЏ, Р°РЅР°С‚РѕРјРёС‡РµСЃРєР°СЏ РѕС†РµРЅРєР° РїР»РѕРґР° Рё РѕРїСЂРµРґРµР»РµРЅРёРµ РѕР±СЉРµРјР° РѕРєРѕР»РѕРїР»РѕРґРЅС‹С… РІРѕРґ.',
        'Р”РѕРїРїР»РµСЂРѕРјРµС‚СЂРёСЏ С„РµС‚РѕРїР»Р°С†РµРЅС‚Р°СЂРЅРѕРіРѕ РєРѕРјРїР»РµРєСЃР° РІ РґРёРЅР°РјРёРєРµ.',
        'Р¦РµР»РµРІРѕРµ СЌРєСЃРїРµСЂС‚РЅРѕРµ РЈР—Р РїСЂРё РјРЅРѕРіРѕРїР»РѕРґРёРё, Р—Р Рџ, Р°РЅРѕРјР°Р»РёСЏС… РїРѕР»РѕР¶РµРЅРёСЏ Рё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РґРёСЃС‚СЂРµСЃСЃ.',
      ];
    case 'infection':
      return [
        'РЈР—Р РїР»РѕРґР°, РїР»Р°С†РµРЅС‚С‹ Рё РѕРєРѕР»РѕРїР»РѕРґРЅС‹С… РІРѕРґ РїСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РІРЅСѓС‚СЂРёСѓС‚СЂРѕР±РЅСѓСЋ РёРЅС„РµРєС†РёСЋ.',
        'РћС†РµРЅРєР° СЃРѕСЃС‚РѕСЏРЅРёСЏ РїРѕС‡РµРє Рё РјРѕС‡РµРІС‹С… РїСѓС‚РµР№ РјР°С‚РµСЂРё РїСЂРё СѓСЂРѕР»РѕРіРёС‡РµСЃРєРѕР№ РёРЅС„РµРєС†РёРё.',
        'Р”РёРЅР°РјРёС‡РµСЃРєРёР№ РєРѕРЅС‚СЂРѕР»СЊ РїР»РѕРґР° РїРѕСЃР»Рµ РЅР°С‡Р°Р»Р° Р°РЅС‚РёР±Р°РєС‚РµСЂРёР°Р»СЊРЅРѕР№ РёР»Рё РїСЂРѕС‚РёРІРѕРІРёСЂСѓСЃРЅРѕР№ С‚РµСЂР°РїРёРё.',
      ];
    case 'postpartum':
      return [
        'РЈР—Р РјР°С‚РєРё РІ РїРѕСЃР»РµСЂРѕРґРѕРІРѕРј РїРµСЂРёРѕРґРµ РґР»СЏ РѕС†РµРЅРєРё РїРѕР»РѕСЃС‚Рё, СЂР°Р·РјРµСЂРѕРІ Рё РѕСЃС‚Р°С‚РѕС‡РЅС‹С… С‚РєР°РЅРµР№.',
        'РЈР—Р РјРѕР»РѕС‡РЅС‹С… Р¶РµР»РµР· РїСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° Р»Р°РєС‚РѕСЃС‚Р°Р·, РјР°СЃС‚РёС‚ РёР»Рё Р°Р±СЃС†РµСЃСЃ.',
        'Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅР°СЏ РІРёР·СѓР°Р»РёР·Р°С†РёСЏ С‚Р°Р·Р° РїСЂРё СЃРѕС…СЂР°РЅСЏСЋС‰РµР№СЃСЏ Р±РѕР»Рё, Р»РёС…РѕСЂР°РґРєРµ РёР»Рё РєСЂРѕРІРѕС‚РµС‡РµРЅРёРё.',
      ];
    case 'thrombosis':
      return [
        'РљРѕРјРїСЂРµСЃСЃРёРѕРЅРЅРѕРµ РґСѓРїР»РµРєСЃРЅРѕРµ РЈР—Р РІРµРЅ РЅРёР¶РЅРёС… РєРѕРЅРµС‡РЅРѕСЃС‚РµР№ РєР°Рє РјРµС‚РѕРґ РїРµСЂРІРѕР№ Р»РёРЅРёРё.',
        'Р­С…РѕРєР°СЂРґРёРѕРіСЂР°С„РёСЏ Рё Р»СѓС‡РµРІР°СЏ РґРёР°РіРЅРѕСЃС‚РёРєР° РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј РїСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РўР­Р›Рђ.',
        'РЈР—Р РїР»РѕРґР° РїРѕ СЃС‚Р°РЅРґР°СЂС‚РЅРѕРјСѓ Р°РєСѓС€РµСЂСЃРєРѕРјСѓ РїСЂРѕС‚РѕРєРѕР»Сѓ РЅР° С„РѕРЅРµ Р°РЅС‚РёРєРѕР°РіСѓР»СЏС†РёРё.',
      ];
    case 'medical':
      return [
        'РЎС‚Р°РЅРґР°СЂС‚РЅРѕРµ РЈР—Р РїР»РѕРґР° СЃ РѕС†РµРЅРєРѕР№ СЂРѕСЃС‚Р° Рё РїР»Р°С†РµРЅС‚С‹ РІ СЃСЂРѕРєРё, РѕРїСЂРµРґРµР»СЏРµРјС‹Рµ РјР°С‚РµСЂРёРЅСЃРєРѕР№ РїР°С‚РѕР»РѕРіРёРµР№.',
        'Р¦РµР»РµРІРѕР№ РјРѕРЅРёС‚РѕСЂРёРЅРі РїР»РѕРґР° РїСЂРё РґРµРєРѕРјРїРµРЅСЃР°С†РёРё РјР°С‚РµСЂРёРЅСЃРєРѕРіРѕ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ.',
        'Р”РѕРїРїР»РµСЂРѕРјРµС‚СЂРёСЏ Рё РљРўР“ РїСЂРё РїРѕРІС‹С€РµРЅРёРё РїРµСЂРёРЅР°С‚Р°Р»СЊРЅРѕРіРѕ СЂРёСЃРєР°.',
      ];
    case 'labor':
      return [
        'РРЅС‚СЂР°РЅР°С‚Р°Р»СЊРЅРѕРµ РЈР—Р РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј РґР»СЏ РѕС†РµРЅРєРё РїРѕР»РѕР¶РµРЅРёСЏ, РІСЃС‚Р°РІР»РµРЅРёСЏ РіРѕР»РѕРІРєРё Рё РїСЂРµРґРїРѕР»Р°РіР°РµРјРѕР№ РјР°СЃСЃС‹ РїР»РѕРґР°.',
        'РЈР—Р РїР»Р°С†РµРЅС‚С‹ Рё РїРѕР»РѕСЃС‚Рё РјР°С‚РєРё РїСЂРё РїРѕСЃР»РµСЂРѕРґРѕРІРѕРј РєСЂРѕРІРѕС‚РµС‡РµРЅРёРё РёР»Рё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РѕСЃС‚Р°С‚РєРё.',
        'Р¤СѓРЅРєС†РёРѕРЅР°Р»СЊРЅС‹Р№ РјРѕРЅРёС‚РѕСЂРёРЅРі РїР»РѕРґР° РѕР±СЏР·Р°С‚РµР»РµРЅ РІРјРµСЃС‚Рµ СЃ РєР»РёРЅРёС‡РµСЃРєРѕР№ РѕС†РµРЅРєРѕР№ СЂРѕРґРѕРІ.',
      ];
    default:
      return [
        'РЈР—Р РїР»РѕРґР° Рё РїР»Р°С†РµРЅС‚С‹ РїРѕ Р°РєСѓС€РµСЂСЃРєРёРј РїРѕРєР°Р·Р°РЅРёСЏРј.',
        'Р”РѕРїРїР»РµСЂРѕРјРµС‚СЂРёСЏ РїСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РЅР°СЂСѓС€РµРЅРёРµ РјР°С‚РѕС‡РЅРѕ-РїР»Р°С†РµРЅС‚Р°СЂРЅРѕРіРѕ РёР»Рё С„РµС‚РѕРїР»Р°С†РµРЅС‚Р°СЂРЅРѕРіРѕ РєСЂРѕРІРѕС‚РѕРєР°.',
      ];
  }
};

const buildObstetricsDifferential = (cluster: ObstetricsCluster) => {
  switch (cluster) {
    case 'hypertension':
      return ['РҐСЂРѕРЅРёС‡РµСЃРєР°СЏ Р°СЂС‚РµСЂРёР°Р»СЊРЅР°СЏ РіРёРїРµСЂС‚РµРЅР·РёСЏ Р±РµР· РїСЂРµСЌРєР»Р°РјРїСЃРёРё.', 'РџРѕС‡РµС‡РЅР°СЏ РїР°С‚РѕР»РѕРіРёСЏ, Р°СѓС‚РѕРёРјРјСѓРЅРЅС‹Рµ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ Рё РІС‚РѕСЂРёС‡РЅС‹Рµ РіРёРїРµСЂС‚РµРЅР·РёРё.', 'Р”СЂСѓРіРёРµ РїСЂРёС‡РёРЅС‹ С‚СЂРѕРјР±РѕС†РёС‚РѕРїРµРЅРёРё, С†РёС‚РѕР»РёР·Р° Рё РЅРµРІСЂРѕР»РѕРіРёС‡РµСЃРєРѕР№ СЃРёРјРїС‚РѕРјР°С‚РёРєРё РїСЂРё Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё.'];
    case 'diabetes':
      return ['РџСЂРµРіРµСЃС‚Р°С†РёРѕРЅРЅС‹Р№ РґРёР°Р±РµС‚ 1 РёР»Рё 2 С‚РёРїР°.', 'РўСЂР°РЅР·РёС‚РѕСЂРЅР°СЏ РіРёРїРµСЂРіР»РёРєРµРјРёСЏ Рё Р»Р°Р±РѕСЂР°С‚РѕСЂРЅС‹Рµ РїРѕРіСЂР°РЅРёС‡РЅС‹Рµ РЅР°СЂСѓС€РµРЅРёСЏ.', 'Р”СЂСѓРіРёРµ РїСЂРёС‡РёРЅС‹ РјР°РєСЂРѕСЃРѕРјРёРё Рё РјРЅРѕРіРѕРІРѕРґРёСЏ.'];
    case 'placenta':
      return ['РџР»Р°С†РµРЅС‚Р°СЂРЅР°СЏ РґРёСЃС„СѓРЅРєС†РёСЏ РґСЂСѓРіРѕР№ СЌС‚РёРѕР»РѕРіРёРё, РєСЂР°РµРІРѕРµ СЂР°СЃРїРѕР»РѕР¶РµРЅРёРµ РїР»Р°С†РµРЅС‚С‹.', 'РџСЂРµР¶РґРµРІСЂРµРјРµРЅРЅР°СЏ РѕС‚СЃР»РѕР№РєР° РїР»Р°С†РµРЅС‚С‹.', 'РџРѕСЃР»РµСЂРѕРґРѕРІРѕРµ РєСЂРѕРІРѕС‚РµС‡РµРЅРёРµ РёРЅРѕР№ РїСЂРёС‡РёРЅС‹.'];
    case 'preterm':
      return ['Р›РѕР¶РЅС‹Рµ СЃС…РІР°С‚РєРё Рё С‚СЂРµРЅРёСЂРѕРІРѕС‡РЅР°СЏ РјР°С‚РѕС‡РЅР°СЏ Р°РєС‚РёРІРЅРѕСЃС‚СЊ.', 'РСЃС‚РјРёРєРѕ-С†РµСЂРІРёРєР°Р»СЊРЅР°СЏ РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕСЃС‚СЊ Р±РµР· Р°РєС‚РёРІРЅС‹С… СЂРѕРґРѕРІ.', 'РҐРѕСЂРёРѕР°РјРЅРёРѕРЅРёС‚, РџР РџРћ Рё РґСЂСѓРіРёРµ РїСЂРёС‡РёРЅС‹ Р±РѕР»РµРІРѕРіРѕ СЃРёРЅРґСЂРѕРјР°.'];
    case 'pregnancy-loss':
      return ['Р–РёР·РЅРµСЃРїРѕСЃРѕР±РЅР°СЏ СЂР°РЅРЅСЏСЏ РјР°С‚РѕС‡РЅР°СЏ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ СЃ РЅРµРѕРїСЂРµРґРµР»РµРЅРЅРѕР№ РґР°С‚РёСЂРѕРІРєРѕР№.', 'Р‘РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ РЅРµРёР·РІРµСЃС‚РЅРѕР№ Р»РѕРєР°Р»РёР·Р°С†РёРё.', 'РўСЂРѕС„РѕР±Р»Р°СЃС‚РёС‡РµСЃРєР°СЏ Р±РѕР»РµР·РЅСЊ, РІРЅРµРјР°С‚РѕС‡РЅР°СЏ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ Рё РЅРµРїРѕР»РЅС‹Р№ Р°Р±РѕСЂС‚.'];
    case 'fetal':
      return ['РљРѕРЅСЃС‚РёС‚СѓС†РёРѕРЅР°Р»СЊРЅРѕ РјР°Р»С‹Р№ РїР»РѕРґ РїСЂРѕС‚РёРІ РёСЃС‚РёРЅРЅРѕР№ Р—Р Рџ.', 'РџР»Р°С†РµРЅС‚Р°СЂРЅР°СЏ РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕСЃС‚СЊ, РІСЂРѕР¶РґРµРЅРЅС‹Рµ Р°РЅРѕРјР°Р»РёРё Рё РёРЅС„РµРєС†РёРё РїР»РѕРґР°.', 'РћС€РёР±РєРё РґР°С‚РёСЂРѕРІРєРё Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё РёР»Рё РѕСЃРѕР±РµРЅРЅРѕСЃС‚Рё РјРЅРѕРіРѕРїР»РѕРґРёСЏ.'];
    case 'infection':
      return ['РќРµСЃРїРµС†РёС„РёС‡РµСЃРєР°СЏ Р»РёС…РѕСЂР°РґРєР° Рё СЌРєСЃС‚СЂР°РіРµРЅРёС‚Р°Р»СЊРЅС‹Рµ РёРЅС„РµРєС†РёРё.', 'РђРєСѓС€РµСЂСЃРєРёРµ РѕСЃР»РѕР¶РЅРµРЅРёСЏ Р±РµР· РёРЅС„РµРєС†РёРѕРЅРЅРѕР№ РїСЂРёСЂРѕРґС‹.', 'РљРѕР»РѕРЅРёР·Р°С†РёСЏ Р±РµР· РёРЅРІР°Р·РёРІРЅРѕРіРѕ РїСЂРѕС†РµСЃСЃР° Рё РёСЃС‚РёРЅРЅР°СЏ РєР»РёРЅРёС‡РµСЃРєРё Р·РЅР°С‡РёРјР°СЏ РёРЅС„РµРєС†РёСЏ.'];
    case 'postpartum':
      return ['Р¤РёР·РёРѕР»РѕРіРёС‡РµСЃРєРёРµ РїРѕСЃР»РµСЂРѕРґРѕРІС‹Рµ РёР·РјРµРЅРµРЅРёСЏ РїСЂРѕС‚РёРІ РїР°С‚РѕР»РѕРіРёРё.', 'Р—Р°РґРµСЂР¶РєР° РѕСЃС‚Р°С‚РєРѕРІ РїР»Р°С†РµРЅС‚С‹, СЌРЅРґРѕРјРµС‚СЂРёС‚, СЃСѓР±РёРЅРІРѕР»СЋС†РёСЏ.', 'РўСЂРѕРјР±РѕС‚РёС‡РµСЃРєРёРµ, С…РёСЂСѓСЂРіРёС‡РµСЃРєРёРµ Рё Р»Р°РєС‚Р°С†РёРѕРЅРЅС‹Рµ РѕСЃР»РѕР¶РЅРµРЅРёСЏ.'];
    case 'thrombosis':
      return ['Р¤РёР·РёРѕР»РѕРіРёС‡РµСЃРєРёРµ РѕС‚С‘РєРё Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё.', 'РњС‹С€РµС‡РЅРѕ-СЃРєРµР»РµС‚РЅР°СЏ Р±РѕР»СЊ Рё РїРѕРІРµСЂС…РЅРѕСЃС‚РЅС‹Р№ С‚СЂРѕРјР±РѕС„Р»РµР±РёС‚.', 'РўР­Р›Рђ, СЃРµСЂРґРµС‡РЅРѕ-Р»РµРіРѕС‡РЅР°СЏ РїР°С‚РѕР»РѕРіРёСЏ Рё РёРЅС„РµРєС†РёРѕРЅРЅС‹Рµ РїСЂРёС‡РёРЅС‹ РѕРґС‹С€РєРё.'];
    case 'medical':
      return ['Р¤РёР·РёРѕР»РѕРіРёС‡РµСЃРєРёРµ РёР·РјРµРЅРµРЅРёСЏ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё, РјР°СЃРєРёСЂСѓСЋС‰РёРµ СЃРѕРјР°С‚РёС‡РµСЃРєСѓСЋ РїР°С‚РѕР»РѕРіРёСЋ.', 'РћР±РѕСЃС‚СЂРµРЅРёРµ С…СЂРѕРЅРёС‡РµСЃРєРѕРіРѕ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ РїСЂРѕС‚РёРІ РІРїРµСЂРІС‹Рµ РІРѕР·РЅРёРєС€РµР№ РїР°С‚РѕР»РѕРіРёРё.', 'РђРєСѓС€РµСЂСЃРєРёРµ РѕСЃР»РѕР¶РЅРµРЅРёСЏ, РІС‚РѕСЂРёС‡РЅРѕ РІР»РёСЏСЋС‰РёРµ РЅР° СЃРѕРјР°С‚РёС‡РµСЃРєРёР№ СЃС‚Р°С‚СѓСЃ.'];
    case 'labor':
      return ['РќРѕСЂРјР°Р»СЊРЅС‹Р№ РІР°СЂРёР°РЅС‚ С‚РµС‡РµРЅРёСЏ СЂРѕРґРѕРІ РїСЂРѕС‚РёРІ РёСЃС‚РёРЅРЅРѕР№ РґРёСЃС‚РѕС†РёРё.', 'РќРµСЃРѕРѕС‚РІРµС‚СЃС‚РІРёРµ СЂР°Р·РјРµСЂРѕРІ С‚Р°Р·Р° Рё РїР»РѕРґР°.', 'РћСЃС‚СЂС‹Рµ Р°РєСѓС€РµСЂСЃРєРёРµ РѕСЃР»РѕР¶РЅРµРЅРёСЏ, С‚СЂРµР±СѓСЋС‰РёРµ РЅРµРјРµРґР»РµРЅРЅРѕРіРѕ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ.'];
    default:
      return ['Р¤РёР·РёРѕР»РѕРіРёС‡РµСЃРєРёРµ РёР·РјРµРЅРµРЅРёСЏ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё, РёРјРёС‚РёСЂСѓСЋС‰РёРµ РїР°С‚РѕР»РѕРіРёСЋ', 'Р­РєСЃС‚СЂР°РіРµРЅРёС‚Р°Р»СЊРЅР°СЏ РїР°С‚РѕР»РѕРіРёСЏ РјР°С‚РµСЂРё СЃРѕ СЃС…РѕРґРЅРѕР№ СЃРёРјРїС‚РѕРјР°С‚РёРєРѕР№', 'Р”СЂСѓРіРёРµ Р°РєСѓС€РµСЂСЃРєРёРµ РѕСЃР»РѕР¶РЅРµРЅРёСЏ СЃРѕ СЃС…РѕРґРЅС‹РјРё РєР»РёРЅРёС‡РµСЃРєРёРјРё Рё СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІС‹РјРё РїСЂРёР·РЅР°РєР°РјРё'];
  }
};

const buildObstetricsProtocols = (cluster: ObstetricsCluster): UltrasoundProtocol[] => {
  switch (cluster) {
    case 'preterm':
      return [
        { method: 'С‚СЂР°РЅСЃР°Р±РґРѕРјРёРЅР°Р»СЊРЅРѕРµ', indications: ['РћС†РµРЅРєР° СЃРѕСЃС‚РѕСЏРЅРёСЏ РїР»РѕРґР°', 'РљРѕРЅС‚СЂРѕР»СЊ РѕРєРѕР»РѕРїР»РѕРґРЅС‹С… РІРѕРґ', 'РњРѕРЅРёС‚РѕСЂРёРЅРі РѕСЃР»РѕР¶РЅРµРЅРёР№'], preparation: 'РЎРїРµС†РёР°Р»СЊРЅР°СЏ РїРѕРґРіРѕС‚РѕРІРєР° РѕР±С‹С‡РЅРѕ РЅРµ С‚СЂРµР±СѓРµС‚СЃСЏ' },
        { method: 'С‚СЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅРѕРµ', indications: ['Р¦РµСЂРІРёРєРѕРјРµС‚СЂРёСЏ', 'РћС†РµРЅРєР° РґР»РёРЅС‹ С€РµР№РєРё РјР°С‚РєРё', 'РЎС‚СЂР°С‚РёС„РёРєР°С†РёСЏ СЂРёСЃРєР° РїСЂРµР¶РґРµРІСЂРµРјРµРЅРЅС‹С… СЂРѕРґРѕРІ'], preparation: 'Р’С‹РїРѕР»РЅСЏРµС‚СЃСЏ РїСЂРё РїСѓСЃС‚РѕРј РјРѕС‡РµРІРѕРј РїСѓР·С‹СЂРµ' },
      ];
    case 'placenta':
      return [
        { method: 'С‚СЂР°РЅСЃР°Р±РґРѕРјРёРЅР°Р»СЊРЅРѕРµ', indications: ['Р›РѕРєР°Р»РёР·Р°С†РёСЏ РїР»Р°С†РµРЅС‚С‹', 'РћС†РµРЅРєР° РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЏ', 'РљРѕРЅС‚СЂРѕР»СЊ РїРѕР»РѕР¶РµРЅРёСЏ РїР»РѕРґР°'], preparation: 'РџРѕ СЃС‚Р°РЅРґР°СЂС‚РЅРѕРјСѓ Р°РєСѓС€РµСЂСЃРєРѕРјСѓ РїСЂРѕС‚РѕРєРѕР»Сѓ' },
        { method: 'С‚СЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅРѕРµ', indications: ['РўРѕС‡РЅР°СЏ РѕС†РµРЅРєР° СЂР°СЃСЃС‚РѕСЏРЅРёСЏ РґРѕ РІРЅСѓС‚СЂРµРЅРЅРµРіРѕ Р·РµРІР°', 'РџРѕРґРѕР·СЂРµРЅРёРµ РЅР° РїСЂРµРґР»РµР¶Р°РЅРёРµ РїР»Р°С†РµРЅС‚С‹'], preparation: 'Р‘РµР·РѕРїР°СЃРЅРѕ РїСЂРё СЃРѕР±Р»СЋРґРµРЅРёРё С‚РµС…РЅРёРєРё, РјРѕС‡РµРІРѕР№ РїСѓР·С‹СЂСЊ РѕРїРѕСЂРѕР¶РЅРµРЅ' },
        { method: 'РґРѕРїРїР»РµСЂРѕРјРµС‚СЂРёСЏ', indications: ['РџРѕРґРѕР·СЂРµРЅРёРµ РЅР° РІСЂР°СЃС‚Р°РЅРёРµ РїР»Р°С†РµРЅС‚С‹', 'РћС†РµРЅРєР° РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРѕР№ РІР°СЃРєСѓР»СЏСЂРёР·Р°С†РёРё'], preparation: 'Р’ СЃРѕСЃС‚Р°РІРµ СЌРєСЃРїРµСЂС‚РЅРѕРіРѕ РЈР—Р' },
      ];
    case 'thrombosis':
      return [
        { method: 'РґСѓРїР»РµРєСЃРЅРѕРµ СЃРєР°РЅРёСЂРѕРІР°РЅРёРµ РІРµРЅ', indications: ['РџРѕРґРѕР·СЂРµРЅРёРµ РЅР° РўР“Р’', 'РљРѕРЅС‚СЂРѕР»СЊ С‚СЂРѕРјР±РѕР·Р°', 'РћС†РµРЅРєР° РІРµРЅРѕР·РЅРѕРіРѕ РєСЂРѕРІРѕС‚РѕРєР°'], preparation: 'РЎРїРµС†РёР°Р»СЊРЅР°СЏ РїРѕРґРіРѕС‚РѕРІРєР° РЅРµ С‚СЂРµР±СѓРµС‚СЃСЏ' },
      ];
    default:
      return [
        { method: 'С‚СЂР°РЅСЃР°Р±РґРѕРјРёРЅР°Р»СЊРЅРѕРµ', indications: ['РџРµСЂРІРёС‡РЅР°СЏ РѕС†РµРЅРєР° СЃРѕСЃС‚РѕСЏРЅРёСЏ РјР°С‚РµСЂРё Рё РїР»РѕРґР°', 'Р”РёРЅР°РјРёС‡РµСЃРєРѕРµ РЅР°Р±Р»СЋРґРµРЅРёРµ', 'РљРѕРЅС‚СЂРѕР»СЊ РѕСЃР»РѕР¶РЅРµРЅРёР№'], preparation: 'РЎРїРµС†РёР°Р»СЊРЅР°СЏ РїРѕРґРіРѕС‚РѕРІРєР° РѕР±С‹С‡РЅРѕ РЅРµ С‚СЂРµР±СѓРµС‚СЃСЏ' },
        { method: 'РґРѕРїРїР»РµСЂРѕРјРµС‚СЂРёСЏ', indications: ['РћС†РµРЅРєР° РїР»Р°С†РµРЅС‚Р°СЂРЅРѕРіРѕ Рё РїР»РѕРґРѕРІРѕРіРѕ РєСЂРѕРІРѕС‚РѕРєР°', 'РЎС‚СЂР°С‚РёС„РёРєР°С†РёСЏ РїРµСЂРёРЅР°С‚Р°Р»СЊРЅРѕРіРѕ СЂРёСЃРєР°'], preparation: 'Р’С‹РїРѕР»РЅСЏРµС‚СЃСЏ РІРѕ РІСЂРµРјСЏ СЃС‚Р°РЅРґР°СЂС‚РЅРѕРіРѕ СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕРіРѕ РёСЃСЃР»РµРґРѕРІР°РЅРёСЏ' },
      ];
  }
};

const buildObstetricsFindings = (cluster: ObstetricsCluster, disease: Disease): UltrasoundFinding[] => {
  const name = disease.name.toLowerCase();

  switch (cluster) {
    case 'hypertension':
      return [
        { location: 'РїР»РѕРґ', description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ С‚РµРјРїС‹ СЂРѕСЃС‚Р° РїР»РѕРґР°, РєРѕР»РёС‡РµСЃС‚РІРѕ РѕРєРѕР»РѕРїР»РѕРґРЅС‹С… РІРѕРґ, Р±РёРѕС„РёР·РёС‡РµСЃРєРёР№ РїСЂРѕС„РёР»СЊ Рё РїСЂРёР·РЅР°РєРё РїР»Р°С†РµРЅС‚Р°СЂРЅРѕР№ РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕСЃС‚Рё.`, measurements: { 'Р±РёРѕРјРµС‚СЂРёСЏ': 'СЃРѕРїРѕСЃС‚Р°РІРёС‚СЊ СЃ РіРµСЃС‚Р°С†РёРѕРЅРЅС‹Рј РІРѕР·СЂР°СЃС‚РѕРј', 'РІРѕРґС‹': 'AFI РёР»Рё РјР°РєСЃРёРјР°Р»СЊРЅС‹Р№ РІРµСЂС‚РёРєР°Р»СЊРЅС‹Р№ РєР°СЂРјР°РЅ' }, normal: 'Р РѕСЃС‚ РїР»РѕРґР° СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ СЃСЂРѕРєСѓ, РІРѕРґС‹ РІ РїСЂРµРґРµР»Р°С… РЅРѕСЂРјС‹.', pathology: 'Р—Р Рџ, РјР°Р»РѕРІРѕРґРёРµ, СЃРЅРёР¶РµРЅРёРµ РґРІРёРіР°С‚РµР»СЊРЅРѕР№ Р°РєС‚РёРІРЅРѕСЃС‚Рё Рё РЅР°СЂСѓС€РµРЅРёСЏ Р±РёРѕС„РёР·РёС‡РµСЃРєРѕРіРѕ РїСЂРѕС„РёР»СЏ.', clinicalSignificance: 'РџРѕР·РІРѕР»СЏРµС‚ РѕРїСЂРµРґРµР»РёС‚СЊ РёРЅС‚РµРЅСЃРёРІРЅРѕСЃС‚СЊ РЅР°Р±Р»СЋРґРµРЅРёСЏ Рё СЃСЂРѕРєРё СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ.' },
        { location: 'РґРѕРїРїР»РµСЂРѕРјРµС‚СЂРёСЏ', description: 'РћС†РµРЅРёРІР°СЋС‚ РјР°С‚РѕС‡РЅС‹Рµ Р°СЂС‚РµСЂРёРё, Р°СЂС‚РµСЂРёСЋ РїСѓРїРѕРІРёРЅС‹ Рё С†РµСЂРµР±СЂР°Р»СЊРЅС‹Р№ РєСЂРѕРІРѕС‚РѕРє РїР»РѕРґР°.', measurements: { 'РїСѓРїРѕС‡РЅР°СЏ_Р°СЂС‚РµСЂРёСЏ': 'РР , PI, РЅР°Р»РёС‡РёРµ РґРёР°СЃС‚РѕР»РёС‡РµСЃРєРѕРіРѕ РєРѕРјРїРѕРЅРµРЅС‚Р°', 'РјРѕР·РіРѕРІР°СЏ_Р°СЂС‚РµСЂРёСЏ': 'PI, РїСЂРёР·РЅР°РєРё С†РµРЅС‚СЂР°Р»РёР·Р°С†РёРё' }, normal: 'РРЅРґРµРєСЃС‹ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‚ СЃСЂРѕРєСѓ, РґРёР°СЃС‚РѕР»РёС‡РµСЃРєРёР№ РєСЂРѕРІРѕС‚РѕРє СЃРѕС…СЂР°РЅРµРЅ.', pathology: 'РџРѕРІС‹С€РµРЅРёРµ СЃРѕРїСЂРѕС‚РёРІР»РµРЅРёСЏ, РѕС‚СЃСѓС‚СЃС‚РІРёРµ РёР»Рё СЂРµРІРµСЂСЃ РґРёР°СЃС‚РѕР»С‹, С†РµСЂРµР±СЂРѕРїР»Р°С†РµРЅС‚Р°СЂРЅР°СЏ РґРёСЃСЃРѕС†РёР°С†РёСЏ.', clinicalSignificance: 'РњР°СЂРєРµСЂ РґРµРєРѕРјРїРµРЅСЃР°С†РёРё РїР»Р°С†РµРЅС‚Р°СЂРЅРѕР№ С„СѓРЅРєС†РёРё Рё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё СѓСЃРєРѕСЂРёС‚СЊ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёРµ.' },
      ];
    case 'diabetes':
      return [
        { location: 'РїР»РѕРґ', description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ РґРёСЃРїСЂРѕРїРѕСЂС†РёРѕРЅР°Р»СЊРЅС‹Р№ СЂРѕСЃС‚, РѕРєСЂСѓР¶РЅРѕСЃС‚СЊ Р¶РёРІРѕС‚Р°, РїСЂРµРґРїРѕР»Р°РіР°РµРјСѓСЋ РјР°СЃСЃСѓ РїР»РѕРґР° Рё РїСЂРёР·РЅР°РєРё РґРёР°Р±РµС‚РёС‡РµСЃРєРѕР№ С„РµС‚РѕРїР°С‚РёРё.`, measurements: { efw: 'СЂР°СЃС‡РµС‚ РїСЂРµРґРїРѕР»Р°РіР°РµРјРѕР№ РјР°СЃСЃС‹ РїР»РѕРґР°', 'РѕРєСЂСѓР¶РЅРѕСЃС‚СЊ_Р¶РёРІРѕС‚Р°': 'СЃСЂР°РІРЅРёС‚СЊ СЃ РїРµСЂС†РµРЅС‚РёР»СЏРјРё' }, normal: 'Р РѕСЃС‚ РїР»РѕРґР° СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ СЃСЂРѕРєСѓ Р±РµР· РґРёСЃРїСЂРѕРїРѕСЂС†РёРё.', pathology: 'РњР°РєСЂРѕСЃРѕРјРёСЏ, СѓРІРµР»РёС‡РµРЅРЅР°СЏ РѕРєСЂСѓР¶РЅРѕСЃС‚СЊ Р¶РёРІРѕС‚Р°, РєР°СЂРґРёРѕРјРµРіР°Р»РёСЏ, РіРµРїР°С‚РѕРјРµРіР°Р»РёСЏ.', clinicalSignificance: 'РќСѓР¶РЅРѕ РґР»СЏ РѕРїСЂРµРґРµР»РµРЅРёСЏ РјР°СЂС€СЂСѓС‚Р° СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ Рё СѓСЂРѕРІРЅСЏ РіР»РёРєРµРјРёС‡РµСЃРєРѕРіРѕ РєРѕРЅС‚СЂРѕР»СЏ.' },
        { location: 'РѕРєРѕР»РѕРїР»РѕРґРЅС‹Рµ РІРѕРґС‹ Рё РїР»Р°С†РµРЅС‚Р°', description: 'РћС†РµРЅРёРІР°СЋС‚ РёРЅРґРµРєСЃ Р°РјРЅРёРѕС‚РёС‡РµСЃРєРѕР№ Р¶РёРґРєРѕСЃС‚Рё Рё РІС‚РѕСЂРёС‡РЅС‹Рµ РїСЂРёР·РЅР°РєРё РїР»Р°С†РµРЅС‚Р°СЂРЅРѕР№ РґРёСЃС„СѓРЅРєС†РёРё.', normal: 'РљРѕР»РёС‡РµСЃС‚РІРѕ РІРѕРґ Рё СЃС‚СЂСѓРєС‚СѓСЂР° РїР»Р°С†РµРЅС‚С‹ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‚ СЃСЂРѕРєСѓ.', pathology: 'РњРЅРѕРіРѕРІРѕРґРёРµ, РёР·РјРµРЅРµРЅРёСЏ РїР»Р°С†РµРЅС‚С‹, РїСЂРёР·РЅР°РєРё С…СЂРѕРЅРёС‡РµСЃРєРѕР№ РіРёРїРѕРєСЃРёРё РїСЂРё РґРµРєРѕРјРїРµРЅСЃР°С†РёРё.', clinicalSignificance: 'РџРѕР·РІРѕР»СЏРµС‚ РІРѕРІСЂРµРјСЏ СѓСЃРёР»РёС‚СЊ РјРѕРЅРёС‚РѕСЂРёРЅРі Рё СЃРєРѕСЂСЂРµРєС‚РёСЂРѕРІР°С‚СЊ С‚РµСЂР°РїРёСЋ.' },
      ];
    case 'placenta':
      return [
        { location: 'РїР»Р°С†РµРЅС‚Р° Рё РІРЅСѓС‚СЂРµРЅРЅРёР№ Р·РµРІ', description: `РџСЂРё ${name} РѕРїСЂРµРґРµР»СЏСЋС‚ Р»РѕРєР°Р»РёР·Р°С†РёСЋ РїР»Р°С†РµРЅС‚С‹, СЂР°СЃСЃС‚РѕСЏРЅРёРµ РѕС‚ РєСЂР°СЏ РґРѕ РІРЅСѓС‚СЂРµРЅРЅРµРіРѕ Р·РµРІР°, РЅР°Р»РёС‡РёРµ Р»Р°РєСѓРЅ Рё Р·РѕРЅСѓ РёРЅРІР°Р·РёРё РІ РјРёРѕРјРµС‚СЂРёР№.`, measurements: { 'РєСЂР°Р№_РїР»Р°С†РµРЅС‚С‹': 'СЂР°СЃСЃС‚РѕСЏРЅРёРµ РґРѕ РІРЅСѓС‚СЂРµРЅРЅРµРіРѕ Р·РµРІР° РІ РјРј', 'РјРёРѕРјРµС‚СЂРёР№': 'С‚РѕР»С‰РёРЅР° СЂРµС‚СЂРѕРїР»Р°С†РµРЅС‚Р°СЂРЅРѕР№ Р·РѕРЅС‹' }, normal: 'РџР»Р°С†РµРЅС‚Р° СЂР°СЃРїРѕР»РѕР¶РµРЅР° РІРЅРµ РЅРёР¶РЅРµРіРѕ СЃРµРіРјРµРЅС‚Р°, Р±РµР· РїСЂРёР·РЅР°РєРѕРІ РёРЅРІР°Р·РёРё.', pathology: 'РџСЂРµРґР»РµР¶Р°РЅРёРµ, РЅРёР·РєРѕРµ СЂР°СЃРїРѕР»РѕР¶РµРЅРёРµ, РјРЅРѕР¶РµСЃС‚РІРµРЅРЅС‹Рµ Р»Р°РєСѓРЅС‹, СѓС‚СЂР°С‚Р° СЂРµС‚СЂРѕРїР»Р°С†РµРЅС‚Р°СЂРЅРѕР№ Р·РѕРЅС‹, Р°РЅРѕРјР°Р»СЊРЅР°СЏ РІР°СЃРєСѓР»СЏСЂРёР·Р°С†РёСЏ.', clinicalSignificance: 'РљСЂРёС‚РёС‡РЅРѕ РґР»СЏ РІС‹Р±РѕСЂР° РјРµСЃС‚Р° Рё СЃРїРѕСЃРѕР±Р° СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ.' },
        { location: 'РїР»РѕРґ Рё РєСЂРѕРІРѕС‚РµС‡РµРЅРёРµ', description: 'Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ РѕС†РµРЅРёРІР°СЋС‚ РїРѕР»РѕР¶РµРЅРёРµ РїР»РѕРґР°, РѕР±СЉРµРј РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЏ, СЃРѕСЃС‚РѕСЏРЅРёРµ РѕРєРѕР»РѕРїР»РѕРґРЅС‹С… РІРѕРґ Рё РїСЂРёР·РЅР°РєРё РґРёСЃС‚СЂРµСЃСЃР°.', normal: 'РџР»РѕРґ СЃС‚Р°Р±РёР»РµРЅ, РїСЂРёР·РЅР°РєРѕРІ РѕСЃС‚СЂРѕРіРѕ СЃС‚СЂР°РґР°РЅРёСЏ РЅРµС‚.', pathology: 'РќРµРїСЂР°РІРёР»СЊРЅРѕРµ РїРѕР»РѕР¶РµРЅРёРµ, РѕСЃС‚СЂС‹Рµ РёР·РјРµРЅРµРЅРёСЏ СЃРµСЂРґРµС‡РЅРѕРіРѕ СЂРёС‚РјР°, СЂРµС‚СЂРѕРїР»Р°С†РµРЅС‚Р°СЂРЅР°СЏ РіРµРјР°С‚РѕРјР°.', clinicalSignificance: 'Р’Р»РёСЏРµС‚ РЅР° СЃСЂРѕС‡РЅРѕСЃС‚СЊ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ Рё РїРѕРґРіРѕС‚РѕРІРєСѓ Рє РјР°СЃСЃРёРІРЅРѕР№ РєСЂРѕРІРѕРїРѕС‚РµСЂРµ.' },
      ];
    case 'preterm':
      return [
        { location: 'С€РµР№РєР° РјР°С‚РєРё', description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ РґР»РёРЅСѓ С€РµР№РєРё РјР°С‚РєРё, С„РѕСЂРјСѓ РІРЅСѓС‚СЂРµРЅРЅРµРіРѕ Р·РµРІР° Рё РґРёРЅР°РјРёРєСѓ СѓРєРѕСЂРѕС‡РµРЅРёСЏ.`, measurements: { 'РґР»РёРЅР°_С€РµР№РєРё': 'РІ РјРј РїСЂРё РўР’РЈР—Р', funneling: 'РЅР°Р»РёС‡РёРµ V/U-РѕР±СЂР°Р·РЅРѕР№ РґРµС„РѕСЂРјР°С†РёРё' }, normal: 'РЁРµР№РєР° РґРѕСЃС‚Р°С‚РѕС‡РЅРѕР№ РґР»РёРЅС‹, РІРЅСѓС‚СЂРµРЅРЅРёР№ Р·РµРІ Р·Р°РєСЂС‹С‚.', pathology: 'РЈРєРѕСЂРѕС‡РµРЅРёРµ С€РµР№РєРё, funneling, РїСЂРѕР»Р°Р±РёСЂРѕРІР°РЅРёРµ РѕР±РѕР»РѕС‡РµРє.', clinicalSignificance: 'РСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ РґР»СЏ СЂРµС€РµРЅРёСЏ РІРѕРїСЂРѕСЃР° Рѕ РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёРё, С‚РѕРєРѕР»РёР·Рµ, РїСЂРѕРіРµСЃС‚РµСЂРѕРЅРµ Рё СЃРµСЂРєР»СЏР¶Рµ.' },
        { location: 'РїР»РѕРґ Рё РѕРєРѕР»РѕРїР»РѕРґРЅС‹Рµ РІРѕРґС‹', description: 'РћС†РµРЅРёРІР°СЋС‚ Р¶РёР·РЅРµСЃРїРѕСЃРѕР±РЅРѕСЃС‚СЊ РїР»РѕРґР°, РєРѕР»РёС‡РµСЃС‚РІРѕ РІРѕРґ, РїСЂРёР·РЅР°РєРё РёРЅС„РµРєС†РёРё Рё РїРѕСЃР»РµРґСЃС‚РІРёСЏ РџР РџРћ.', normal: 'РЎРѕСЃС‚РѕСЏРЅРёРµ РїР»РѕРґР° СЃС‚Р°Р±РёР»СЊРЅРѕ, РєРѕР»РёС‡РµСЃС‚РІРѕ РІРѕРґ РґРѕСЃС‚Р°С‚РѕС‡РЅРѕРµ.', pathology: 'РњР°Р»РѕРІРѕРґРёРµ, РіРёРїРѕРєСЃРёСЏ, РєРѕСЃРІРµРЅРЅС‹Рµ РїСЂРёР·РЅР°РєРё С…РѕСЂРёРѕР°РјРЅРёРѕРЅРёС‚Р° РёР»Рё СѓС…СѓРґС€РµРЅРёСЏ СЃРѕСЃС‚РѕСЏРЅРёСЏ РїР»РѕРґР°.', clinicalSignificance: 'Р’Р»РёСЏРµС‚ РЅР° Р±Р°Р»Р°РЅСЃ РјРµР¶РґСѓ РїСЂРѕР»РѕРЅРіРёСЂРѕРІР°РЅРёРµРј Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё Рё СЃРІРѕРµРІСЂРµРјРµРЅРЅС‹Рј СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёРµРј.' },
      ];
    case 'pregnancy-loss':
      return [
        { location: 'РїРѕР»РѕСЃС‚СЊ РјР°С‚РєРё/РїСЂРёРґР°С‚РєРё', description: `РџСЂРё ${name} СѓС‚РѕС‡РЅСЏСЋС‚ Р»РѕРєР°Р»РёР·Р°С†РёСЋ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё, РЅР°Р»РёС‡РёРµ СЌРјР±СЂРёРѕРЅР°, СЃРµСЂРґС†РµР±РёРµРЅРёСЏ, СЂР°Р·РјРµСЂС‹ РїР»РѕРґРЅРѕРіРѕ СЏР№С†Р° Рё СЃРѕСЃС‚РѕСЏРЅРёРµ РїСЂРёРґР°С‚РєРѕРІ.`, measurements: { 'РїР»РѕРґРЅРѕРµ_СЏР№С†Рѕ': 'СЃСЂРµРґРЅРёР№ РІРЅСѓС‚СЂРµРЅРЅРёР№ РґРёР°РјРµС‚СЂ', 'РєС‚СЂ': 'РєРѕРїС‡РёРєРѕ-С‚РµРјРµРЅРЅРѕР№ СЂР°Р·РјРµСЂ', 'С…РіС‡': 'СЃРѕРїРѕСЃС‚Р°РІРёС‚СЊ СЃ СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕР№ РєР°СЂС‚РёРЅРѕР№' }, normal: 'РњР°С‚РѕС‡РЅР°СЏ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ СЃ РѕР¶РёРґР°РµРјРѕР№ СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕР№ РґРёРЅР°РјРёРєРѕР№ РґР»СЏ СЃСЂРѕРєР°.', pathology: 'РћС‚СЃСѓС‚СЃС‚РІРёРµ СЃРµСЂРґС†РµР±РёРµРЅРёСЏ РїСЂРё РґРёР°РіРЅРѕСЃС‚РёС‡РµСЃРєРёС… РєСЂРёС‚РµСЂРёСЏС…, РїСѓСЃС‚РѕРµ РїР»РѕРґРЅРѕРµ СЏР№С†Рѕ, РІРЅРµРјР°С‚РѕС‡РЅР°СЏ Р»РѕРєР°Р»РёР·Р°С†РёСЏ, СЂРµС‚РµРЅС†РёРѕРЅРЅС‹Рµ С‚РєР°РЅРё.', clinicalSignificance: 'РџРѕР·РІРѕР»СЏРµС‚ РІС‹Р±СЂР°С‚СЊ РІС‹Р¶РёРґР°С‚РµР»СЊРЅСѓСЋ, РјРµРґРёРєР°РјРµРЅС‚РѕР·РЅСѓСЋ РёР»Рё С…РёСЂСѓСЂРіРёС‡РµСЃРєСѓСЋ С‚Р°РєС‚РёРєСѓ.' },
        { location: 'СЃРІРѕР±РѕРґРЅР°СЏ Р¶РёРґРєРѕСЃС‚СЊ Рё РіРµРјРѕРїРµСЂРёС‚РѕРЅРµСѓРј', description: 'РџСЂРё Р±РѕР»Рё Рё РЅРµСЃС‚Р°Р±РёР»СЊРЅРѕСЃС‚Рё РёС‰СѓС‚ Р¶РёРґРєРѕСЃС‚СЊ РІ Р±СЂСЋС€РЅРѕР№ РїРѕР»РѕСЃС‚Рё, РіРµРјР°С‚РѕРјСѓ Рё РїСЂРёР·РЅР°РєРё СЂР°Р·СЂС‹РІР°.', normal: 'РџР°С‚РѕР»РѕРіРёС‡РµСЃРєРѕР№ Р¶РёРґРєРѕСЃС‚Рё РЅРµС‚.', pathology: 'РЎРІРѕР±РѕРґРЅР°СЏ Р¶РёРґРєРѕСЃС‚СЊ, РєСЂРѕРІСЏРЅС‹Рµ СЃРіСѓСЃС‚РєРё, С‚СѓР±Р°СЂРЅРѕРµ РѕР±СЂР°Р·РѕРІР°РЅРёРµ, РїСЂРёР·РЅР°РєРё СЂР°Р·СЂС‹РІР°.', clinicalSignificance: 'РћРїСЂРµРґРµР»СЏРµС‚ СЃСЂРѕС‡РЅРѕСЃС‚СЊ РѕРїРµСЂР°С‚РёРІРЅРѕРіРѕ РІРјРµС€Р°С‚РµР»СЊСЃС‚РІР°.' },
      ];
    case 'fetal':
      return [
        { location: 'С„РµС‚РѕРјРµС‚СЂРёСЏ Рё Р°РЅР°С‚РѕРјРёСЏ РїР»РѕРґР°', description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ Р±РёРѕРјРµС‚СЂРёСЋ, Р°РЅР°С‚РѕРјРёС‡РµСЃРєРёРµ РѕСЃРѕР±РµРЅРЅРѕСЃС‚Рё, РїРѕР»РѕР¶РµРЅРёРµ РїР»РѕРґР° Рё СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРµ СЂРѕСЃС‚Р° СЃСЂРѕРєСѓ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё.`, measurements: { 'Р±РїСЂ': 'РїРѕ СЃСЂРѕРєСѓ', 'РѕР¶': 'РїРѕ РїРµСЂС†РµРЅС‚РёР»СЏРј', efw: 'РїСЂРµРґРїРѕР»Р°РіР°РµРјР°СЏ РјР°СЃСЃР° РїР»РѕРґР°' }, normal: 'РџР°СЂР°РјРµС‚СЂС‹ СЂРѕСЃС‚Р° Рё РїРѕР»РѕР¶РµРЅРёСЏ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‚ СЃСЂРѕРєСѓ Рё РєР»РёРЅРёС‡РµСЃРєРѕР№ СЃРёС‚СѓР°С†РёРё.', pathology: 'Р—Р Рџ, РјР°РєСЂРѕСЃРѕРјРёСЏ, РЅРµРїСЂР°РІРёР»СЊРЅРѕРµ РїРѕР»РѕР¶РµРЅРёРµ, Р°РЅР°С‚РѕРјРёС‡РµСЃРєРёРµ РѕСЃР»РѕР¶РЅРµРЅРёСЏ РјРЅРѕРіРѕРїР»РѕРґРёСЏ.', clinicalSignificance: 'РћРїСЂРµРґРµР»СЏРµС‚ РєСЂР°С‚РЅРѕСЃС‚СЊ РЅР°Р±Р»СЋРґРµРЅРёСЏ Рё СЃС‚СЂР°С‚РµРіРёСЋ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ.' },
        { location: 'РїР»Р°С†РµРЅС‚Р°, РІРѕРґС‹ Рё РґРѕРїРїР»РµСЂ', description: 'РћС†РµРЅРёРІР°СЋС‚ РїР»Р°С†РµРЅС‚Сѓ, РІРѕРґС‹ Рё РєСЂРѕРІРѕС‚РѕРє РІ С„РµС‚РѕРїР»Р°С†РµРЅС‚Р°СЂРЅРѕР№ СЃРёСЃС‚РµРјРµ.', normal: 'РџР»Р°С†РµРЅС‚Р° Рё РІРѕРґС‹ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‚ СЃСЂРѕРєСѓ, РєСЂРѕРІРѕС‚РѕРє СЃРѕС…СЂР°РЅРµРЅ.', pathology: 'РњР°Р»РѕРІРѕРґРёРµ/РјРЅРѕРіРѕРІРѕРґРёРµ, РїР»Р°С†РµРЅС‚Р°СЂРЅР°СЏ РґРёСЃС„СѓРЅРєС†РёСЏ, РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРёР№ РґРѕРїРїР»РµСЂ.', clinicalSignificance: 'РќСѓР¶РЅРѕ РґР»СЏ РїСЂРѕРіРЅРѕР·Р° РІРЅСѓС‚СЂРёСѓС‚СЂРѕР±РЅРѕРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ Рё РІСЂРµРјРµРЅРё РІРјРµС€Р°С‚РµР»СЊСЃС‚РІР°.' },
      ];
    case 'infection':
      return [
        { location: 'РјР°С‚СЊ Рё РїР»РѕРґ', description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ РїСЂРёР·РЅР°РєРё РІРЅСѓС‚СЂРёСѓС‚СЂРѕР±РЅРѕР№ РёРЅС„РµРєС†РёРё, СЃРѕСЃС‚РѕСЏРЅРёРµ РїР»Р°С†РµРЅС‚С‹, РІРѕРґС‹, РїРѕС‡РєРё РјР°С‚РµСЂРё РёР»Рё РґСЂСѓРіРёРµ РѕСЂРіР°РЅС‹-РјРёС€РµРЅРё РїРѕ РєР»РёРЅРёС‡РµСЃРєРѕР№ СЃРёС‚СѓР°С†РёРё.`, measurements: { 'РІРѕРґС‹': 'РѕР±СЉРµРј Рё СЌС…РѕРіРµРЅРЅРѕСЃС‚СЊ', 'РїР»Р°С†РµРЅС‚Р°': 'С‚РѕР»С‰РёРЅР° Рё СЃС‚СЂСѓРєС‚СѓСЂР°' }, normal: 'РџР»РѕРґ Рё РїР»Р°С†РµРЅС‚Р° Р±РµР· РєРѕСЃРІРµРЅРЅС‹С… РїСЂРёР·РЅР°РєРѕРІ РёРЅС„РµРєС†РёРѕРЅРЅРѕРіРѕ РїРѕСЂР°Р¶РµРЅРёСЏ.', pathology: 'Р­С…РѕРіРµРЅРЅС‹Рµ РІРѕРґС‹, РїР»Р°С†РµРЅС‚РѕРјРµРіР°Р»РёСЏ, РјРЅРѕРіРѕРІРѕРґРёРµ, РіРёРґСЂРѕРїСЃ, РїРёРµР»РѕСЌРєС‚Р°Р·РёСЏ, РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рµ РёР·РјРµРЅРµРЅРёСЏ Сѓ РјР°С‚РµСЂРё.', clinicalSignificance: 'РџРѕРјРѕРіР°РµС‚ РѕРїСЂРµРґРµР»РёС‚СЊ С‚СЏР¶РµСЃС‚СЊ РёРЅС„РµРєС†РёРё Рё СЂРёСЃРє РІРµСЂС‚РёРєР°Р»СЊРЅРѕР№ РїРµСЂРµРґР°С‡Рё.' },
        { location: 'РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РѕСЂРіР°РЅС‹', description: 'РџСЂРё СѓСЂРѕР»РѕРіРёС‡РµСЃРєРёС… Рё СЃРёСЃС‚РµРјРЅС‹С… РёРЅС„РµРєС†РёСЏС… РѕС†РµРЅРёРІР°СЋС‚ РїРѕС‡РєРё, РјРѕС‡РµРІС‹Рµ РїСѓС‚Рё Рё РІРѕР·РјРѕР¶РЅС‹Рµ РѕСЃР»РѕР¶РЅРµРЅРёСЏ С‚РµСЂР°РїРёРё.', normal: 'Р‘РµР· РґРёР»Р°С‚Р°С†РёРё Рё РѕР±СЃС‚СЂСѓРєС†РёРё.', pathology: 'Р“РёРґСЂРѕРЅРµС„СЂРѕР·, РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рµ РёР·РјРµРЅРµРЅРёСЏ, РєРѕСЃРІРµРЅРЅС‹Рµ РїСЂРёР·РЅР°РєРё РѕР±СЃС‚СЂСѓРєС†РёРё.', clinicalSignificance: 'Р’Р»РёСЏРµС‚ РЅР° РІС‹Р±РѕСЂ Р°РЅС‚РёР±Р°РєС‚РµСЂРёР°Р»СЊРЅРѕР№ С‚РµСЂР°РїРёРё Рё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚СЊ СѓСЂРѕР»РѕРіРёС‡РµСЃРєРѕРіРѕ РІРјРµС€Р°С‚РµР»СЊСЃС‚РІР°.' },
      ];
    case 'postpartum':
      return [
        { location: 'РјР°С‚РєР°/РїРѕР»РѕСЃС‚СЊ РјР°С‚РєРё', description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ СЂР°Р·РјРµСЂС‹ РјР°С‚РєРё, СЃРѕРґРµСЂР¶РёРјРѕРµ РїРѕР»РѕСЃС‚Рё, С‚РѕР»С‰РёРЅСѓ СЌРЅРґРѕРјРµС‚СЂРёСЏ, РЅР°Р»РёС‡РёРµ СЃРіСѓСЃС‚РєРѕРІ РёР»Рё РѕСЃС‚Р°С‚РєРѕРІ РїР»Р°С†РµРЅС‚Р°СЂРЅРѕР№ С‚РєР°РЅРё.`, measurements: { 'РїРѕР»РѕСЃС‚СЊ_РјР°С‚РєРё': 'СЌС…РѕРіРµРЅРЅРѕРµ СЃРѕРґРµСЂР¶РёРјРѕРµ, С‚РѕР»С‰РёРЅР° СЌРЅРґРѕРјРµС‚СЂРёСЏ', 'РјР°С‚РєР°': 'СЂР°Р·РјРµСЂС‹ РІ РїРѕСЃР»РµСЂРѕРґРѕРІРѕРј РїРµСЂРёРѕРґРµ' }, normal: 'РњР°С‚РєР° СЃРѕРєСЂР°С‰Р°РµС‚СЃСЏ РїРѕ СЃСЂРѕРєСѓ РїРѕСЃР»РµСЂРѕРґРѕРІРѕРіРѕ РїРµСЂРёРѕРґР°, Р±РµР· Р·РЅР°С‡РёРјРѕРіРѕ РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРѕРіРѕ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ.', pathology: 'РЎСѓР±РёРЅРІРѕР»СЋС†РёСЏ, РѕСЃС‚Р°С‚РѕС‡РЅС‹Рµ С‚РєР°РЅРё, Р¶РёРґРєРѕСЃС‚СЊ, РїСЂРёР·РЅР°РєРё СЌРЅРґРѕРјРµС‚СЂРёС‚Р°.', clinicalSignificance: 'РћРїСЂРµРґРµР»СЏРµС‚ РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚СЊ СѓС‚РµСЂРѕС‚РѕРЅРёРєРѕРІ, Р°РЅС‚РёР±РёРѕС‚РёРєРѕРІ РёР»Рё СЌРІР°РєСѓР°С†РёРё РїРѕР»РѕСЃС‚Рё РјР°С‚РєРё.' },
        { location: 'РјРѕР»РѕС‡РЅС‹Рµ Р¶РµР»РµР·С‹/С‚Р°Р·', description: 'РџРѕ РїРѕРєР°Р·Р°РЅРёСЏРј РѕС†РµРЅРёРІР°СЋС‚ Р»Р°РєС‚РѕСЃС‚Р°Р·, Р°Р±СЃС†РµСЃСЃ, С‚Р°Р·РѕРІС‹Рµ РєРѕР»Р»РµРєС†РёРё Рё РѕСЃР»РѕР¶РЅРµРЅРёСЏ РїРѕСЃР»Рµ РѕРїРµСЂР°С†РёР№.', normal: 'Р‘РµР· Р°Р±СЃС†РµСЃСЃР° Рё РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРёС… РїРѕР»РѕСЃС‚РµР№.', pathology: 'РђР±СЃС†РµСЃСЃ РјРѕР»РѕС‡РЅРѕР№ Р¶РµР»РµР·С‹, С‚Р°Р·РѕРІС‹Р№ РёРЅС„РёР»СЊС‚СЂР°С‚, РіРµРјР°С‚РѕРјР°, СЃРµСЂРѕРјР°.', clinicalSignificance: 'РќСѓР¶РЅРѕ РґР»СЏ РґСЂРµРЅРёСЂРѕРІР°РЅРёСЏ Рё РєРѕСЂСЂРµРєС†РёРё РїРѕСЃР»РµСЂРѕРґРѕРІРѕР№ С‚Р°РєС‚РёРєРё.' },
      ];
    case 'thrombosis':
      return [
        { location: 'РІРµРЅРѕР·РЅР°СЏ СЃРёСЃС‚РµРјР°', description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ СЃР¶РёРјР°РµРјРѕСЃС‚СЊ РІРµРЅ, РЅР°Р»РёС‡РёРµ С‚СЂРѕРјР±РѕС‚РёС‡РµСЃРєРёС… РјР°СЃСЃ, РїСЂРѕС‚СЏР¶РµРЅРЅРѕСЃС‚СЊ С‚СЂРѕРјР±РѕР·Р° Рё РїСЂРёР·РЅР°РєРё СЂРµРєР°РЅР°Р»РёР·Р°С†РёРё.`, measurements: { 'РІРµРЅР°': 'РґРёР°РјРµС‚СЂ, РєРѕРјРїСЂРµСЃСЃРёСЏ, РїСЂРѕС‚СЏР¶РµРЅРЅРѕСЃС‚СЊ С‚СЂРѕРјР±Р°' }, normal: 'Р’РµРЅС‹ РїРѕР»РЅРѕСЃС‚СЊСЋ РєРѕРјРїСЂРµСЃСЃРёСЂСѓСЋС‚СЃСЏ, РєСЂРѕРІРѕС‚РѕРє Р»Р°РјРёРЅР°СЂРЅС‹Р№.', pathology: 'РћС‚СЃСѓС‚СЃС‚РІРёРµ РєРѕРјРїСЂРµСЃСЃРёРё, СЌС…РѕРїР»РѕС‚РЅС‹Рµ РјР°СЃСЃС‹, РЅР°СЂСѓС€РµРЅРёРµ РєСЂРѕРІРѕС‚РѕРєР°.', clinicalSignificance: 'РћРїСЂРµРґРµР»СЏРµС‚ РґР»РёС‚РµР»СЊРЅРѕСЃС‚СЊ Р°РЅС‚РёРєРѕР°РіСѓР»СЏС†РёРё Рё СЂРёСЃРє СЌРјР±РѕР»РёС‡РµСЃРєРёС… РѕСЃР»РѕР¶РЅРµРЅРёР№.' },
      ];
    case 'labor':
      return [
        { location: 'РїР»РѕРґ Рё СЂРѕРґРѕРІС‹Рµ РїСѓС‚Рё', description: `РџСЂРё ${name} РЈР—Р РёСЃРїРѕР»СЊР·СѓСЋС‚ РґР»СЏ РѕС†РµРЅРєРё РїРѕР»РѕР¶РµРЅРёСЏ, РІСЃС‚Р°РІР»РµРЅРёСЏ РіРѕР»РѕРІРєРё, РјР°СЃСЃС‹ РїР»РѕРґР° Рё РїРѕСЃР»РµСЂРѕРґРѕРІС‹С… РѕСЃР»РѕР¶РЅРµРЅРёР№.`, measurements: { 'РіРѕР»РѕРІРєР°': 'СѓСЂРѕРІРµРЅСЊ СЃС‚РѕСЏРЅРёСЏ Рё РїРѕР·РёС†РёСЏ', efw: 'РїСЂРµРґРїРѕР»Р°РіР°РµРјР°СЏ РјР°СЃСЃР° РїР»РѕРґР°' }, normal: 'РџРѕР»РѕР¶РµРЅРёРµ РїР»РѕРґР° Рё С‚РµС‡РµРЅРёРµ СЂРѕРґРѕРІ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‚ РѕР¶РёРґР°РµРјРѕРјСѓ СЃС†РµРЅР°СЂРёСЋ.', pathology: 'Р’С‹СЃРѕРєРѕРµ СЃС‚РѕСЏРЅРёРµ РіРѕР»РѕРІРєРё, С‚Р°Р·РѕРІРѕРµ РїСЂРµРґР»РµР¶Р°РЅРёРµ, РїСЂРёР·РЅР°РєРё РґРёСЃРїСЂРѕРїРѕСЂС†РёРё, РѕСЃС‚Р°С‚РєРё РїР»Р°С†РµРЅС‚Р°СЂРЅРѕР№ С‚РєР°РЅРё.', clinicalSignificance: 'РџРѕРјРѕРіР°РµС‚ СЃРІРѕРµРІСЂРµРјРµРЅРЅРѕ СЃРјРµРЅРёС‚СЊ С‚Р°РєС‚РёРєСѓ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ.' },
      ];
    default:
      return [
        { location: 'РїР»РѕРґ Рё РїР»Р°С†РµРЅС‚Р°', description: `РЈР»СЊС‚СЂР°Р·РІСѓРєРѕРІР°СЏ РєР°СЂС‚РёРЅР° РїСЂРё ${name} РѕС†РµРЅРёРІР°РµС‚СЃСЏ РІ РґРёРЅР°РјРёРєРµ: СЂР°Р·РјРµСЂС‹ РїР»РѕРґР°, СЃРѕСЃС‚РѕСЏРЅРёРµ РїР»Р°С†РµРЅС‚С‹, РєРѕР»РёС‡РµСЃС‚РІРѕ РѕРєРѕР»РѕРїР»РѕРґРЅС‹С… РІРѕРґ Рё РЅР°Р»РёС‡РёРµ РїСЂРёР·РЅР°РєРѕРІ РѕСЃР»РѕР¶РЅРµРЅРёР№ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё.`, measurements: { 'Р±РёРѕРјРµС‚СЂРёСЏ': 'СЃРѕРїРѕСЃС‚Р°РІРёС‚СЊ СЃРѕ СЃСЂРѕРєРѕРј РіРµСЃС‚Р°С†РёРё', 'РїР»Р°С†РµРЅС‚Р°': 'РѕС†РµРЅРёС‚СЊ С‚РѕР»С‰РёРЅСѓ, СЃС‚СЂСѓРєС‚СѓСЂСѓ Рё СЃС‚РµРїРµРЅСЊ Р·СЂРµР»РѕСЃС‚Рё', 'РѕРєРѕР»РѕРїР»РѕРґРЅС‹Рµ_РІРѕРґС‹': 'РѕС†РµРЅРёС‚СЊ AFI РёР»Рё РјР°РєСЃРёРјР°Р»СЊРЅС‹Р№ РІРµСЂС‚РёРєР°Р»СЊРЅС‹Р№ РєР°СЂРјР°РЅ' }, normal: 'РџР°СЂР°РјРµС‚СЂС‹ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‚ СЃСЂРѕРєСѓ РіРµСЃС‚Р°С†РёРё, Р±РµР· РїСЂРёР·РЅР°РєРѕРІ РґРёСЃС‚СЂРµСЃСЃР° Рё РїР»Р°С†РµРЅС‚Р°СЂРЅРѕР№ РґРёСЃС„СѓРЅРєС†РёРё.', pathology: 'РћС‚СЃС‚Р°РІР°РЅРёРµ Р±РёРѕРјРµС‚СЂРёРё, РёР·РјРµРЅРµРЅРёРµ РѕР±СЉРµРјР° РІРѕРґ, СЃС‚СЂСѓРєС‚СѓСЂРЅС‹Рµ РёР·РјРµРЅРµРЅРёСЏ РїР»Р°С†РµРЅС‚С‹ РёР»Рё РјР°СЂРєРµСЂС‹ СѓС…СѓРґС€РµРЅРёСЏ СЃРѕСЃС‚РѕСЏРЅРёСЏ РїР»РѕРґР°.', clinicalSignificance: 'РћРїСЂРµРґРµР»СЏРµС‚ С‡Р°СЃС‚РѕС‚Сѓ РЅР°Р±Р»СЋРґРµРЅРёСЏ, РїРѕС‚СЂРµР±РЅРѕСЃС‚СЊ РІ РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёРё Рё СЃСЂРѕРєРё СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ.' },
        { location: 'РґРѕРїРїР»РµСЂРѕРјРµС‚СЂРёСЏ', description: 'РџСЂРё РЅР°Р»РёС‡РёРё СЂРёСЃРєР° РѕС†РµРЅРёРІР°СЋС‚ РјР°С‚РѕС‡РЅС‹Рµ Р°СЂС‚РµСЂРёРё, Р°СЂС‚РµСЂРёСЋ РїСѓРїРѕРІРёРЅС‹, СЃСЂРµРґРЅСЋСЋ РјРѕР·РіРѕРІСѓСЋ Р°СЂС‚РµСЂРёСЋ Рё РІРµРЅРѕР·РЅС‹Р№ РїСЂРѕС‚РѕРє РїРѕ СЃС‚Р°РЅРґР°СЂС‚РЅС‹Рј РёРЅРґРµРєСЃР°Рј СЃРѕРїСЂРѕС‚РёРІР»РµРЅРёСЏ.', normal: 'РљСЂРѕРІРѕС‚РѕРє СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ СЃСЂРѕРєСѓ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё, РєРѕРЅРµС‡РЅС‹Р№ РґРёР°СЃС‚РѕР»РёС‡РµСЃРєРёР№ РєРѕРјРїРѕРЅРµРЅС‚ СЃРѕС…СЂР°РЅРµРЅ.', pathology: 'РџРѕРІС‹С€РµРЅРёРµ СЃРѕСЃСѓРґРёСЃС‚РѕРіРѕ СЃРѕРїСЂРѕС‚РёРІР»РµРЅРёСЏ, РѕС‚СЃСѓС‚СЃС‚РІРёРµ РёР»Рё СЂРµРІРµСЂСЃ РґРёР°СЃС‚РѕР»РёС‡РµСЃРєРѕРіРѕ РєСЂРѕРІРѕС‚РѕРєР°, РїСЂРёР·РЅР°РєРё С†РµРЅС‚СЂР°Р»РёР·Р°С†РёРё РєСЂРѕРІРѕРѕР±СЂР°С‰РµРЅРёСЏ.', clinicalSignificance: 'РџРѕР·РІРѕР»СЏРµС‚ РІРѕРІСЂРµРјСЏ РІС‹СЏРІРёС‚СЊ РїР»Р°С†РµРЅС‚Р°СЂРЅСѓСЋ РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕСЃС‚СЊ Рё СЃРєРѕСЂСЂРµРєС‚РёСЂРѕРІР°С‚СЊ Р°РєСѓС€РµСЂСЃРєСѓСЋ С‚Р°РєС‚РёРєСѓ.' },
      ];
  }
};

const buildObstetricsNormalValues = (cluster: ObstetricsCluster) => {
  switch (cluster) {
    case 'preterm':
      return { 'РґР»РёРЅР°_С€РµР№РєРё': 'РѕР±С‹С‡РЅРѕ 25 РјРј Рё Р±РѕР»РµРµ РІРѕ РІС‚РѕСЂРѕРј-С‚СЂРµС‚СЊРµРј С‚СЂРёРјРµСЃС‚СЂРµ, РёРЅС‚РµСЂРїСЂРµС‚Р°С†РёСЏ РїРѕ СЃСЂРѕРєСѓ Рё РєР»РёРЅРёРєРµ', 'РІРѕРґС‹': 'РѕР±СЉРµРј СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ СЃСЂРѕРєСѓ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё' };
    case 'placenta':
      return { 'РїР»Р°С†РµРЅС‚Р°': 'Р±РµР· РїРµСЂРµРєСЂС‹С‚РёСЏ РІРЅСѓС‚СЂРµРЅРЅРµРіРѕ Р·РµРІР° Рё Р±РµР· РїСЂРёР·РЅР°РєРѕРІ РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРѕР№ РёРЅРІР°Р·РёРё', 'РєСЂРѕРІРѕС‚РѕРє': 'Р±РµР· С‚СѓСЂР±СѓР»РµРЅС‚РЅРѕР№ Р°РЅРѕРјР°Р»СЊРЅРѕР№ РІР°СЃРєСѓР»СЏСЂРёР·Р°С†РёРё' };
    case 'thrombosis':
      return { 'РІРµРЅС‹': 'РїРѕР»РЅРѕСЃС‚СЊСЋ РєРѕРјРїСЂРµСЃСЃРёСЂСѓСЋС‚СЃСЏ, РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРёРµ С‚СЂРѕРјР±РѕС‚РёС‡РµСЃРєРёРµ РјР°СЃСЃС‹ РЅРµ РѕРїСЂРµРґРµР»СЏСЋС‚СЃСЏ' };
    default:
      return { 'Р±РёРѕРјРµС‚СЂРёСЏ': 'СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ СЃСЂРѕРєСѓ РіРµСЃС‚Р°С†РёРё РїРѕ РёСЃРїРѕР»СЊР·СѓРµРјС‹Рј С‚Р°Р±Р»РёС†Р°Рј', 'РїР»Р°С†РµРЅС‚Р°': 'СЃС‚СЂСѓРєС‚СѓСЂР° Р±РµР· РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРёС… РІРєР»СЋС‡РµРЅРёР№, Р·СЂРµР»РѕСЃС‚СЊ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ СЃСЂРѕРєСѓ', 'РєСЂРѕРІРѕС‚РѕРє': 'РёРЅРґРµРєСЃС‹ СЃРѕРїСЂРѕС‚РёРІР»РµРЅРёСЏ РІ РЅРѕСЂРјР°С‚РёРІРЅРѕРј РґРёР°РїР°Р·РѕРЅРµ РґР»СЏ СЃСЂРѕРєР° Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё' };
  }
};

const buildObstetricsTips = (cluster: ObstetricsCluster) => {
  switch (cluster) {
    case 'hypertension':
      return ['РЎСЂР°РІРЅРёРІР°Р№С‚Рµ Р±РёРѕРјРµС‚СЂРёСЋ Рё РґРѕРїРїР»РµСЂРѕРјРµС‚СЂРёСЋ РІ РґРёРЅР°РјРёРєРµ, Р° РЅРµ РїРѕ РѕРґРЅРѕРјСѓ РёСЃСЃР»РµРґРѕРІР°РЅРёСЋ.', 'Р¤РёРєСЃРёСЂСѓР№С‚Рµ СЃРѕСЃС‚РѕСЏРЅРёРµ РїР»Р°С†РµРЅС‚С‹, РІРѕРґС‹ Рё РєСЂРѕРІРѕС‚РѕРє РІ РѕРґРЅРѕРј РїСЂРѕС‚РѕРєРѕР»Рµ.', 'РџСЂРё РїРѕРіСЂР°РЅРёС‡РЅС‹С… РёР·РјРµРЅРµРЅРёСЏС… СЃРѕРїРѕСЃС‚Р°РІР»СЏР№С‚Рµ РЈР—Р СЃ РљРўР“ Рё РєР»РёРЅРёРєРѕР№ РјР°С‚РµСЂРё.'];
    case 'placenta':
      return ['РџСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РїСЂРµРґР»РµР¶Р°РЅРёРµ РёР»Рё РІСЂР°СЃС‚Р°РЅРёРµ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ СѓРєР°Р·С‹РІР°Р№С‚Рµ СЂР°СЃСЃС‚РѕСЏРЅРёРµ РґРѕ Р·РµРІР° Рё РїСЂРёР·РЅР°РєРё Р°РЅРѕРјР°Р»СЊРЅРѕР№ РІР°СЃРєСѓР»СЏСЂРёР·Р°С†РёРё.', 'РўСЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅРѕРµ РЈР—Р Р±РµР·РѕРїР°СЃРЅРѕ Рё С‚РѕС‡РЅРµРµ РґР»СЏ РѕС†РµРЅРєРё РїР»Р°С†РµРЅС‚С‹ РІ РЅРёР¶РЅРµРј СЃРµРіРјРµРЅС‚Рµ.', 'Р›СЋР±РѕРµ РєСЂРѕРІРѕС‚РµС‡РµРЅРёРµ РёРЅС‚РµСЂРїСЂРµС‚РёСЂСѓР№С‚Рµ РІРјРµСЃС‚Рµ СЃ РіРµРјРѕРґРёРЅР°РјРёРєРѕР№ РјР°С‚РµСЂРё Рё СЃРѕСЃС‚РѕСЏРЅРёРµРј РїР»РѕРґР°.'];
    case 'preterm':
      return ['Р”Р»РёРЅСѓ С€РµР№РєРё РјР°С‚РєРё РёР·РјРµСЂСЏР№С‚Рµ С‚РѕР»СЊРєРѕ РїСЂРё РєРѕСЂСЂРµРєС‚РЅРѕР№ РўР’-С‚РµС…РЅРёРєРµ Рё РїСѓСЃС‚РѕРј РјРѕС‡РµРІРѕРј РїСѓР·С‹СЂРµ.', 'РќРµ РґРµР»Р°Р№С‚Рµ РІС‹РІРѕРґ Рѕ СЂРёСЃРєРµ РїСЂРµР¶РґРµРІСЂРµРјРµРЅРЅС‹С… СЂРѕРґРѕРІ РїРѕ РѕРґРЅРѕРјСѓ РїРѕРіСЂР°РЅРёС‡РЅРѕРјСѓ РёР·РјРµСЂРµРЅРёСЋ Р±РµР· РєР»РёРЅРёРєРё.', 'РџСЂРё РџР РџРћ РѕС‚РґРµР»СЊРЅРѕ РґРѕРєСѓРјРµРЅС‚РёСЂСѓР№С‚Рµ РѕР±СЉРµРј РІРѕРґ Рё РїСЂРёР·РЅР°РєРё РёРЅС„РµРєС†РёРё.'];
    case 'fetal':
      return ['РћС†РµРЅРєР° РїР»РѕРґР° РґРѕР»Р¶РЅР° Р±С‹С‚СЊ СЃРµСЂРёР№РЅРѕР№ Рё РѕСЃРЅРѕРІР°РЅРЅРѕР№ РЅР° С‚СЂРµРЅРґРµ СЂРѕСЃС‚Р°.', 'РџСЂРё РјРЅРѕРіРѕРїР»РѕРґРёРё Рё Р—Р Рџ РёСЃРїРѕР»СЊР·СѓР№С‚Рµ РѕРґРёРЅ Рё С‚РѕС‚ Р¶Рµ РїРѕРґС…РѕРґ Рє РёР·РјРµСЂРµРЅРёСЏРј РІ РґРёРЅР°РјРёРєРµ.', 'Р”РѕРїРїР»РµСЂ РІСЃРµРіРґР° РёРЅС‚РµСЂРїСЂРµС‚РёСЂСѓР№С‚Рµ РІРјРµСЃС‚Рµ СЃ Р±РёРѕРјРµС‚СЂРёРµР№, РІРѕРґР°РјРё Рё РљРўР“.'];
    case 'postpartum':
      return ['Р’ РїРѕСЃР»РµСЂРѕРґРѕРІРѕРј РїРµСЂРёРѕРґРµ СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІР°СЏ РєР°СЂС‚РёРЅР° РґРѕР»Р¶РЅР° РёРЅС‚РµСЂРїСЂРµС‚РёСЂРѕРІР°С‚СЊСЃСЏ СЃ СѓС‡РµС‚РѕРј РґРЅСЏ РїРѕСЃР»Рµ СЂРѕРґРѕРІ.', 'РќРµ Р»СЋР±РѕРµ СЃРѕРґРµСЂР¶РёРјРѕРµ РїРѕР»РѕСЃС‚Рё РјР°С‚РєРё РѕР·РЅР°С‡Р°РµС‚ РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚СЊ РІС‹СЃРєР°Р±Р»РёРІР°РЅРёСЏ.', 'РџСЂРё Р»РёС…РѕСЂР°РґРєРµ Рё Р±РѕР»Рё РёС‰РёС‚Рµ РЅРµ С‚РѕР»СЊРєРѕ РІРЅСѓС‚СЂРёРјР°С‚РѕС‡РЅСѓСЋ РїР°С‚РѕР»РѕРіРёСЋ, РЅРѕ Рё С‚Р°Р·РѕРІС‹Рµ РєРѕР»Р»РµРєС†РёРё.'];
    default:
      return ['РЎСЂР°РІРЅРёРІР°Р№С‚Рµ Р±РёРѕРјРµС‚СЂРёСЋ Рё РґРѕРїРїР»РµСЂРѕРјРµС‚СЂРёСЋ РІ РґРёРЅР°РјРёРєРµ, Р° РЅРµ РїРѕ РѕРґРЅРѕРјСѓ РёСЃСЃР»РµРґРѕРІР°РЅРёСЋ.', 'Р¤РёРєСЃРёСЂСѓР№С‚Рµ РїСЂРёР·РЅР°РєРё РґРµРєРѕРјРїРµРЅСЃР°С†РёРё РїР»РѕРґР° Рё СЃРѕСЃС‚РѕСЏРЅРёРµ РїР»Р°С†РµРЅС‚С‹ РІ РѕРґРЅРѕРј РїСЂРѕС‚РѕРєРѕР»Рµ.', 'РџСЂРё РїРѕРіСЂР°РЅРёС‡РЅС‹С… РёР·РјРµРЅРµРЅРёСЏС… СЃРѕРїРѕСЃС‚Р°РІР»СЏР№С‚Рµ РґР°РЅРЅС‹Рµ РЈР—Р, РљРўР“ Рё РєР»РёРЅРёС‡РµСЃРєСѓСЋ РєР°СЂС‚РёРЅСѓ.'];
  }
};

const buildObstetricsGuidelines = (cluster: ObstetricsCluster): Disease['treatment']['guidelines'] => {
  switch (cluster) {
    case 'hypertension':
      return {
        eau: 'РЎРѕРІСЂРµРјРµРЅРЅР°СЏ Р°РєСѓС€РµСЂСЃРєР°СЏ С‚Р°РєС‚РёРєР° РїСЂРё РіРёРїРµСЂС‚РµРЅР·РёРІРЅС‹С… СЂР°СЃСЃС‚СЂРѕР№СЃС‚РІР°С… СЃС‚СЂРѕРёС‚СЃСЏ РЅР° СЂР°РЅРЅРµР№ СЃС‚СЂР°С‚РёС„РёРєР°С†РёРё С‚СЏР¶РµСЃС‚Рё, Р»Р°Р±РѕСЂР°С‚РѕСЂРЅРѕРј РїРѕРёСЃРєРµ РѕСЂРіР°РЅРЅРѕР№ РґРёСЃС„СѓРЅРєС†РёРё Рё РїР°СЂР°Р»Р»РµР»СЊРЅРѕРј РјРѕРЅРёС‚РѕСЂРёРЅРіРµ РїР»РѕРґР°. РџСЂРё С‚СЏР¶РµР»С‹С… РїСЂРёР·РЅР°РєР°С… С‚СЂРµР±СѓРµС‚СЃСЏ СЃС‚Р°С†РёРѕРЅР°СЂРЅРѕРµ РІРµРґРµРЅРёРµ, РјР°РіРЅРёСЏ СЃСѓР»СЊС„Р°С‚ РґР»СЏ РїСЂРѕС„РёР»Р°РєС‚РёРєРё СЃСѓРґРѕСЂРѕРі Рё СЃРІРѕРµРІСЂРµРјРµРЅРЅРѕРµ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёРµ.',
        acog: 'ACOG РїРѕРґРґРµСЂР¶РёРІР°РµС‚ Р°РјР±СѓР»Р°С‚РѕСЂРЅРѕРµ РІРµРґРµРЅРёРµ С‚РѕР»СЊРєРѕ РґР»СЏ РіРµСЃС‚Р°С†РёРѕРЅРЅРѕР№ РіРёРїРµСЂС‚РµРЅР·РёРё/РїСЂРµСЌРєР»Р°РјРїСЃРёРё Р±РµР· С‚СЏР¶РµР»С‹С… РїСЂРёР·РЅР°РєРѕРІ РїСЂРё С‚РµСЃРЅРѕРј РЅР°Р±Р»СЋРґРµРЅРёРё; СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёРµ РѕР±С‹С‡РЅРѕ РѕР±СЃСѓР¶РґР°СЋС‚ СЃ 37 РЅРµРґРµР»СЊ, Р° РїСЂРё С‚СЏР¶РµР»С‹С… РїСЂРёР·РЅР°РєР°С… - РїРѕСЃР»Рµ СЃС‚Р°Р±РёР»РёР·Р°С†РёРё СЃ 34 РЅРµРґРµР»СЊ РёР»Рё СЂР°РЅСЊС€Рµ РїСЂРё СѓС…СѓРґС€РµРЅРёРё РјР°С‚РµСЂРё/РїР»РѕРґР°.',
        ranzcog: 'RCOG/NICE-РїРѕРґС…РѕРґ Р±Р»РёР·РѕРє: С‡Р°СЃС‚РѕС‚Р° РЅР°Р±Р»СЋРґРµРЅРёСЏ Р·Р°РІРёСЃРёС‚ РѕС‚ РђР”, СЃРёРјРїС‚РѕРјРѕРІ, Р»Р°Р±РѕСЂР°С‚РѕСЂРЅС‹С… РїРѕРєР°Р·Р°С‚РµР»РµР№ Рё СЃРѕСЃС‚РѕСЏРЅРёСЏ РїР»РѕРґР°; Р°РЅС‚РёРіРёРїРµСЂС‚РµРЅР·РёРІРЅР°СЏ С‚РµСЂР°РїРёСЏ РЅРµ Р·Р°РјРµРЅСЏРµС‚ СЂРµС€РµРЅРёРµ Рѕ СЃСЂРѕРєР°С… СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ РїСЂРё РїСЂРѕРіСЂРµСЃСЃРёСЂРѕРІР°РЅРёРё.',
        ru: 'Р РѕСЃСЃРёР№СЃРєР°СЏ РјР°СЂС€СЂСѓС‚РёР·Р°С†РёСЏ С‚Р°РєР¶Рµ С‚СЂРµР±СѓРµС‚ Р±С‹СЃС‚СЂРѕР№ РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёРё РїСЂРё С‚СЏР¶РµР»РѕР№ РїСЂРµСЌРєР»Р°РјРїСЃРёРё, HELLP, РЅРµРІСЂРѕР»РѕРіРёС‡РµСЃРєРёС… СЃРёРјРїС‚РѕРјР°С…, РѕСЂРіР°РЅРЅРѕР№ РґРёСЃС„СѓРЅРєС†РёРё РёР»Рё СѓС…СѓРґС€РµРЅРёРё СЃРѕСЃС‚РѕСЏРЅРёСЏ РїР»РѕРґР°.',
      };
    case 'diabetes':
      return {
        eau: 'РњРµР¶РґСѓРЅР°СЂРѕРґРЅС‹Рµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїРѕ РґРёР°Р±РµС‚Сѓ Р±РµСЂРµРјРµРЅРЅС‹С… РѕРїРёСЂР°СЋС‚СЃСЏ РЅР° РґРёРµС‚Сѓ, СЃР°РјРѕРєРѕРЅС‚СЂРѕР»СЊ РіР»РёРєРµРјРёРё, СЂР°РЅРЅСЋСЋ РёРЅСЃСѓР»РёРЅРѕС‚РµСЂР°РїРёСЋ РїСЂРё РЅРµРґРѕСЃС‚РёР¶РµРЅРёРё С†РµР»РµР№ Рё СЃРµСЂРёР№РЅСѓСЋ РѕС†РµРЅРєСѓ СЂРѕСЃС‚Р° РїР»РѕРґР°.',
        acog: 'ACOG РїРѕРґС‡РµСЂРєРёРІР°РµС‚ РєРѕРЅС‚СЂРѕР»СЊ РіР»РёРєРµРјРёРё, РѕС†РµРЅРєСѓ РјР°РєСЂРѕСЃРѕРјРёРё Рё РїРѕСЃР»РµСЂРѕРґРѕРІС‹Р№ СЃРєСЂРёРЅРёРЅРі РґРёР°Р±РµС‚Р° С‡РµСЂРµР· 4-12 РЅРµРґРµР»СЊ СЃ РїРѕСЃР»РµРґСѓСЋС‰РёРј С‚РµСЃС‚РёСЂРѕРІР°РЅРёРµРј РєР°Р¶РґС‹Рµ 1-3 РіРѕРґР° РїСЂРё РЅРѕСЂРјР°Р»СЊРЅРѕРј СЂРµР·СѓР»СЊС‚Р°С‚Рµ.',
        ranzcog: 'РђРІСЃС‚СЂР°Р»РёР№СЃРєРёРµ Рё NICE-РїРѕРґС…РѕРґС‹ РёСЃРїРѕР»СЊР·СѓСЋС‚ stepped-care: lifestyle, РјРµС‚С„РѕСЂРјРёРЅ/РёРЅСЃСѓР»РёРЅ РїРѕ Р»РѕРєР°Р»СЊРЅС‹Рј РїСЂРѕС‚РѕРєРѕР»Р°Рј, РїР»Р°РЅРёСЂРѕРІР°РЅРёРµ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ РїРѕ РєРѕРјРїРµРЅСЃР°С†РёРё, РјР°СЃСЃРµ РїР»РѕРґР° Рё СЃРѕРїСѓС‚СЃС‚РІСѓСЋС‰РёРј СЂРёСЃРєР°Рј.',
        ru: 'Р РѕСЃСЃРёР№СЃРєР°СЏ РїСЂР°РєС‚РёРєР° С‚СЂРµР±СѓРµС‚ СЃРѕРІРјРµСЃС‚РЅРѕРіРѕ РІРµРґРµРЅРёСЏ Р°РєСѓС€РµСЂР° Рё СЌРЅРґРѕРєСЂРёРЅРѕР»РѕРіР°, РєРѕРЅС‚СЂРѕР»СЏ С†РµР»РµРІС‹С… РїРѕРєР°Р·Р°С‚РµР»РµР№, РїСЂРѕС„РёР»Р°РєС‚РёРєРё РјР°РєСЂРѕСЃРѕРјРёРё Рё РїРѕСЃР»РµСЂРѕРґРѕРІРѕРіРѕ РјРµС‚Р°Р±РѕР»РёС‡РµСЃРєРѕРіРѕ РЅР°Р±Р»СЋРґРµРЅРёСЏ.',
      };
    case 'placenta':
      return {
        eau: 'РЎРѕРІСЂРµРјРµРЅРЅС‹Рµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїСЂРё РїСЂРµРґР»РµР¶Р°РЅРёРё, РѕС‚СЃР»РѕР№РєРµ Рё placenta accreta spectrum С‚СЂРµР±СѓСЋС‚ СЌРєСЃРїРµСЂС‚РЅРѕРіРѕ РЈР—Р СЃ РґРѕРїРїР»РµСЂРѕРј, РњР Рў РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј Рё Р·Р°СЂР°РЅРµРµ РїРѕРґРіРѕС‚РѕРІР»РµРЅРЅРѕРіРѕ РјР°СЂС€СЂСѓС‚Р° СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ РІ С†РµРЅС‚СЂРµ СЃ СЂРµСЃСѓСЂСЃР°РјРё РґР»СЏ РјР°СЃСЃРёРІРЅРѕР№ РєСЂРѕРІРѕРїРѕС‚РµСЂРё.',
        acog: 'ACOG/SMFM СЂРµРєРѕРјРµРЅРґСѓСЋС‚ РёР·Р±РµРіР°С‚СЊ РЅРµРЅСѓР¶РЅС‹С… РІР»Р°РіР°Р»РёС‰РЅС‹С… РІРјРµС€Р°С‚РµР»СЊСЃС‚РІ РїСЂРё РїСЂРµРґР»РµР¶Р°РЅРёРё, РїР»Р°РЅРёСЂРѕРІР°С‚СЊ СЂРѕРґС‹ СЃ СѓС‡РµС‚РѕРј РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЏ Рё Р·СЂРµР»РѕСЃС‚Рё РїР»РѕРґР°, Р° РїСЂРё accreta spectrum Р·Р°СЂР°РЅРµРµ РїРѕРґРєР»СЋС‡Р°С‚СЊ РјСѓР»СЊС‚РёРґРёСЃС†РёРїР»РёРЅР°СЂРЅСѓСЋ РєРѕРјР°РЅРґСѓ.',
        ranzcog: 'RCOG/NICE РґРµР»Р°СЋС‚ Р°РєС†РµРЅС‚ РЅР° Р°РЅС‚РµРЅР°С‚Р°Р»СЊРЅРѕРј РІС‹СЏРІР»РµРЅРёРё РЅРёР·РєРѕР№ РїР»Р°С†РµРЅС‚Р°С†РёРё Рё РІСЂР°СЃС‚Р°РЅРёСЏ, РїРѕРґРіРѕС‚РѕРІРєРµ РєСЂРѕРІРё/РѕРїРµСЂР°С†РёРѕРЅРЅРѕР№ РєРѕРјР°РЅРґС‹ Рё РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕРј СЃСЂРѕРєРµ РїР»Р°РЅРѕРІРѕРіРѕ РєРµСЃР°СЂРµРІР° СЃРµС‡РµРЅРёСЏ.',
        ru: 'Р РѕСЃСЃРёР№СЃРєРёРµ РїСЂРѕС‚РѕРєРѕР»С‹ С‚Р°РєР¶Рµ РѕСЂРёРµРЅС‚РёСЂРѕРІР°РЅС‹ РЅР° РіРѕСЃРїРёС‚Р°Р»СЊРЅСѓСЋ РјР°СЂС€СЂСѓС‚РёР·Р°С†РёСЋ, РѕС†РµРЅРєСѓ РєСЂРѕРІРѕРїРѕС‚РµСЂРё, РіРѕС‚РѕРІРЅРѕСЃС‚СЊ Рє С…РёСЂСѓСЂРіРёС‡РµСЃРєРѕРјСѓ РіРµРјРѕСЃС‚Р°Р·Сѓ Рё РЅРµРѕРЅР°С‚Р°Р»СЊРЅРѕР№ РїРѕРјРѕС‰Рё.',
      };
    case 'preterm':
      return {
        eau: 'РђРєС‚СѓР°Р»СЊРЅР°СЏ С‚Р°РєС‚РёРєР° РїСЂРё СѓРіСЂРѕР·Рµ РїСЂРµР¶РґРµРІСЂРµРјРµРЅРЅС‹С… СЂРѕРґРѕРІ Рё РџР РџРћ СЃРѕС‡РµС‚Р°РµС‚ РўР’-С†РµСЂРІРёРєРѕРјРµС‚СЂРёСЋ, РёСЃРєР»СЋС‡РµРЅРёРµ РёРЅС„РµРєС†РёРё, Р°РЅС‚РµРЅР°С‚Р°Р»СЊРЅС‹Рµ РєРѕСЂС‚РёРєРѕСЃС‚РµСЂРѕРёРґС‹ РїРѕ СЃСЂРѕРєСѓ, С‚РѕРєРѕР»РёР· С‚РѕР»СЊРєРѕ РґР»СЏ РІС‹РёРіСЂС‹С€Р° РІСЂРµРјРµРЅРё Рё РјР°РіРЅРёСЏ СЃСѓР»СЊС„Р°С‚ РґР»СЏ РЅРµР№СЂРѕРїСЂРѕС‚РµРєС†РёРё РґРѕ 32 РЅРµРґРµР»СЊ.',
        acog: 'ACOG/SMFM РїРѕРґРґРµСЂР¶РёРІР°СЋС‚ РєРѕСЂРѕС‚РєРѕРµ С†РµР»РµРІРѕРµ РїСЂРёРјРµРЅРµРЅРёРµ С‚РѕРєРѕР»РёР·Р°, Р°РЅС‚РёР±РёРѕС‚РёРєРё РїСЂРё РџР РџРћ РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј Рё РѕС‚РєР°Р· РѕС‚ РїСЂРѕР»РѕРЅРіРёСЂРѕРІР°РЅРёСЏ РїСЂРё С…РѕСЂРёРѕР°РјРЅРёРѕРЅРёС‚Рµ, РєСЂРѕРІРѕС‚РµС‡РµРЅРёРё, С‚СЏР¶РµР»РѕР№ РїСЂРµСЌРєР»Р°РјРїСЃРёРё РёР»Рё РґРёСЃС‚СЂРµСЃСЃРµ РїР»РѕРґР°.',
        ranzcog: 'RCOG/NICE-РїРѕРґС…РѕРґ С‚СЂРµР±СѓРµС‚ РЅРµРѕРЅР°С‚Р°Р»СЊРЅРѕРіРѕ РјР°СЂС€СЂСѓС‚Р°, РѕС†РµРЅРєРё С€РµР№РєРё РјР°С‚РєРё Рё РѕР±РѕР»РѕС‡РµРє, Р° С‚Р°РєР¶Рµ РїРѕРІС‚РѕСЂРЅРѕР№ СЃС‚СЂР°С‚РёС„РёРєР°С†РёРё РїРѕСЃР»Рµ РєСѓРїРёСЂРѕРІР°РЅРёСЏ СѓРіСЂРѕР·С‹.',
        ru: 'Р РѕСЃСЃРёР№СЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РІ С†РµР»РѕРј СЃРѕРІРїР°РґР°СЋС‚: РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёСЏ РїСЂРё РІС‹СЃРѕРєРѕРј СЂРёСЃРєРµ, РїСЂРѕС„РёР»Р°РєС‚РёРєР° Р Р”РЎ РїР»РѕРґР°, РЅРµР№СЂРѕРїСЂРѕС‚РµРєС†РёСЏ РјР°РіРЅРёРµРј Рё СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёРµ РїСЂРё РёРЅС„РµРєС†РёРѕРЅРЅС‹С… РёР»Рё РјР°С‚РµСЂРёРЅСЃРєРѕ-РїР»РѕРґРѕРІС‹С… РїРѕРєР°Р·Р°РЅРёСЏС….',
      };
    case 'pregnancy-loss':
      return {
        eau: 'NICE/RCOG-РїРѕРґС…РѕРґ Рє СЂР°РЅРЅРµР№ РїРѕС‚РµСЂРµ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё С‚СЂРµР±СѓРµС‚ РЅР°РґРµР¶РЅС‹С… СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІС‹С… РєСЂРёС‚РµСЂРёРµРІ, РґРёРЅР°РјРёРєРё РҐР“Р§ РїСЂРё Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё РЅРµРёР·РІРµСЃС‚РЅРѕР№ Р»РѕРєР°Р»РёР·Р°С†РёРё Рё СЃРѕРІРјРµСЃС‚РЅРѕРіРѕ РІС‹Р±РѕСЂР° РІС‹Р¶РёРґР°С‚РµР»СЊРЅРѕР№, РјРµРґРёРєР°РјРµРЅС‚РѕР·РЅРѕР№ РёР»Рё С…РёСЂСѓСЂРіРёС‡РµСЃРєРѕР№ С‚Р°РєС‚РёРєРё.',
        acog: 'ACOG РїРѕРґС‡РµСЂРєРёРІР°РµС‚ РЅРµРґРѕРїСѓСЃС‚РёРјРѕСЃС‚СЊ РїРѕСЃРїРµС€РЅРѕРіРѕ РґРёР°РіРЅРѕР·Р° РЅРµР¶РёР·РЅРµСЃРїРѕСЃРѕР±РЅРѕР№ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё Рё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚СЊ СѓС‡РёС‚С‹РІР°С‚СЊ РіРµРјРѕРґРёРЅР°РјРёРєСѓ, РёРЅС„РµРєС†РёРѕРЅРЅС‹Рµ РїСЂРёР·РЅР°РєРё, Р±РѕР»СЊ Рё РїСЂРµРґРїРѕС‡С‚РµРЅРёСЏ РїР°С†РёРµРЅС‚РєРё.',
        ranzcog: 'РђРІСЃС‚СЂР°Р»РёР№СЃРєРёРµ Рё Р±СЂРёС‚Р°РЅСЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїСЂРё РїРѕРІС‚РѕСЂРЅС‹С… РїРѕС‚РµСЂСЏС… РїСЂРµРґР»Р°РіР°СЋС‚ СЌС‚Р°РїРЅРѕРµ РѕР±СЃР»РµРґРѕРІР°РЅРёРµ Р±РµР· РёР·Р±С‹С‚РѕС‡РЅС‹С… С‚РµСЃС‚РѕРІ Рё СЂР°РЅРЅСЋСЋ РїРѕРґРґРµСЂР¶РєСѓ РІ СЃР»РµРґСѓСЋС‰РµР№ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё.',
        ru: 'Р РѕСЃСЃРёР№СЃРєР°СЏ РїСЂР°РєС‚РёРєР° С‚СЂРµР±СѓРµС‚ РёСЃРєР»СЋС‡РёС‚СЊ РІРЅРµРјР°С‚РѕС‡РЅСѓСЋ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ, РѕС†РµРЅРёС‚СЊ СЂРµР·СѓСЃ-СЃС‚Р°С‚СѓСЃ РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј Рё РґР°С‚СЊ РїРѕРЅСЏС‚РЅС‹Р№ РїР»Р°РЅ РЅР°Р±Р»СЋРґРµРЅРёСЏ РїРѕСЃР»Рµ Р·Р°РІРµСЂС€РµРЅРёСЏ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё.',
      };
    case 'fetal':
      return {
        eau: 'SMFM 2024 reaffirmed-РїРѕРґС…РѕРґ Рє Р—Р Рџ РѕРїСЂРµРґРµР»СЏРµС‚ FGR РєР°Рє EFW РёР»Рё AC РЅРёР¶Рµ 10-РіРѕ РїРµСЂС†РµРЅС‚РёР»СЏ, С‚СЂРµР±СѓРµС‚ СЃРµСЂРёР№РЅРѕРіРѕ СЂРѕСЃС‚Р° Рё РґРѕРїРїР»РµСЂР° РїСѓРїРѕС‡РЅРѕР№ Р°СЂС‚РµСЂРёРё, Р° РїСЂРё AEDV/REDV - СѓСЃРёР»РµРЅРЅРѕРіРѕ РЅР°Р±Р»СЋРґРµРЅРёСЏ Рё СЂР°РЅРЅРµРіРѕ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ.',
        acog: 'ACOG/SMFM СЂРµРєРѕРјРµРЅРґСѓСЋС‚ РЅРµ Р»РµС‡РёС‚СЊ Р—Р Рџ РїРѕСЃС‚РµР»СЊРЅС‹Рј СЂРµР¶РёРјРѕРј, sildenafil РёР»Рё LMWH Р±РµР· РѕС‚РґРµР»СЊРЅРѕРіРѕ РїРѕРєР°Р·Р°РЅРёСЏ; СЃСЂРѕРє СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ Р·Р°РІРёСЃРёС‚ РѕС‚ РїРµСЂС†РµРЅС‚РёР»СЏ, РґРѕРїРїР»РµСЂР°, РљРўР“ Рё РєР»РёРЅРёС‡РµСЃРєРѕР№ РєР°СЂС‚РёРЅС‹.',
        ranzcog: 'RCOG/NICE-РїРѕРґС…РѕРґ РїСЂРё РјРЅРѕРіРѕРїР»РѕРґРёРё, Р—Р Рџ, РјРЅРѕРіРѕРІРѕРґРёРё/РјР°Р»РѕРІРѕРґРёРё Рё РЅРµРїСЂР°РІРёР»СЊРЅРѕРј РїРѕР»РѕР¶РµРЅРёРё С‚СЂРµР±СѓРµС‚ СЌРєСЃРїРµСЂС‚РЅРѕРіРѕ РЈР—Р, РѕС†РµРЅРєРё РїР»Р°С†РµРЅС‚С‹ Рё РїР»Р°РЅРёСЂРѕРІР°РЅРёСЏ РјРµСЃС‚Р° СЂРѕРґРѕРІ.',
        ru: 'Р РѕСЃСЃРёР№СЃРєР°СЏ РјР°СЂС€СЂСѓС‚РёР·Р°С†РёСЏ РѕСЂРёРµРЅС‚РёСЂРѕРІР°РЅР° РЅР° РґРёРЅР°РјРёС‡РµСЃРєСѓСЋ С„РµС‚РѕРјРµС‚СЂРёСЋ, РґРѕРїРїР»РµСЂ, РљРўР“ Рё РїРµСЂРµРІРѕРґ РІ РїРµСЂРёРЅР°С‚Р°Р»СЊРЅС‹Р№ С†РµРЅС‚СЂ РїСЂРё РІС‹СЃРѕРєРѕРј РїРµСЂРёРЅР°С‚Р°Р»СЊРЅРѕРј СЂРёСЃРєРµ.',
      };
    case 'infection':
      return {
        eau: 'WHO/CDC-СЃРѕРІРјРµСЃС‚РёРјС‹Р№ РїРѕРґС…РѕРґ Рє РёРЅС„РµРєС†РёСЏРј Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё С‚СЂРµР±СѓРµС‚ СЂР°РЅРЅРµР№ СЌС‚РёРѕС‚СЂРѕРїРЅРѕР№ С‚РµСЂР°РїРёРё, РѕС†РµРЅРєРё РІРµСЂС‚РёРєР°Р»СЊРЅРѕР№ РїРµСЂРµРґР°С‡Рё Рё РІС‹Р±РѕСЂР° РїСЂРµРїР°СЂР°С‚РѕРІ СЃ РґРѕРєР°Р·Р°РЅРЅРѕР№ Р±РµР·РѕРїР°СЃРЅРѕСЃС‚СЊСЋ РґР»СЏ РїР»РѕРґР°.',
        acog: 'ACOG РїРѕРґРґРµСЂР¶РёРІР°РµС‚ Р°РєС‚РёРІРЅРѕРµ Р»РµС‡РµРЅРёРµ РїРёРµР»РѕРЅРµС„СЂРёС‚Р°, С…РѕСЂРёРѕР°РјРЅРёРѕРЅРёС‚Р° Рё Р·РЅР°С‡РёРјС‹С… РРџРџРџ Р±РµР· Р·Р°РґРµСЂР¶РєРё, СЃ СѓС‡РµС‚РѕРј СЃСЂРѕРєР° Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё Рё СЂРёСЃРєР° РїСЂРµР¶РґРµРІСЂРµРјРµРЅРЅС‹С… СЂРѕРґРѕРІ.',
        ranzcog: 'RCOG/NICE СЂРµРєРѕРјРµРЅРґСѓСЋС‚ РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёСЋ РїСЂРё СЃРёСЃС‚РµРјРЅРѕР№ РёРЅС„РµРєС†РёРё, Р»РёС…РѕСЂР°РґРєРµ СЃ Р°РєСѓС€РµСЂСЃРєРёРјРё СЃРёРјРїС‚РѕРјР°РјРё РёР»Рё СѓРіСЂРѕР·Рµ СЃРµРїСЃРёСЃР°; РєРѕРЅС‚СЂРѕР»СЊ СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚Рё РІРєР»СЋС‡Р°РµС‚ РєР»РёРЅРёРєСѓ РјР°С‚РµСЂРё Рё СЃРѕСЃС‚РѕСЏРЅРёРµ РїР»РѕРґР°.',
        ru: 'Р РѕСЃСЃРёР№СЃРєР°СЏ РїСЂР°РєС‚РёРєР° С‚СЂРµР±СѓРµС‚ Р»Р°Р±РѕСЂР°С‚РѕСЂРЅРѕР№ РІРµСЂРёС„РёРєР°С†РёРё, Р±РµР·РѕРїР°СЃРЅРѕР№ Р°РЅС‚РёР±Р°РєС‚РµСЂРёР°Р»СЊРЅРѕР№/РїСЂРѕС‚РёРІРѕРІРёСЂСѓСЃРЅРѕР№ СЃС…РµРјС‹ Рё РјР°СЂС€СЂСѓС‚РёР·Р°С†РёРё РІ СЃС‚Р°С†РёРѕРЅР°СЂ РїСЂРё СЃРёСЃС‚РµРјРЅС‹С… РїСЂРёР·РЅР°РєР°С… РёР»Рё СѓС…СѓРґС€РµРЅРёРё РїР»РѕРґР°.',
      };
    case 'postpartum':
      return {
        eau: 'WHO 2023 СЂРµРєРѕРјРµРЅРґСѓРµС‚ РѕР±СЉРµРєС‚РёРІРЅСѓСЋ РѕС†РµРЅРєСѓ РєСЂРѕРІРѕРїРѕС‚РµСЂРё Рё treatment bundle РїСЂРё РїРѕСЃР»РµСЂРѕРґРѕРІРѕРј РєСЂРѕРІРѕС‚РµС‡РµРЅРёРё; С‚СЂР°РЅРµРєСЃР°РјРѕРІСѓСЋ РєРёСЃР»РѕС‚Сѓ РёСЃРїРѕР»СЊР·СѓСЋС‚ РєР°Рє РјРѕР¶РЅРѕ СЂР°РЅСЊС€Рµ РїСЂРё PPH РІРјРµСЃС‚Рµ СЃ СѓС‚РµСЂРѕС‚РѕРЅРёРєР°РјРё, РјР°СЃСЃР°Р¶РµРј РјР°С‚РєРё, Р¶РёРґРєРѕСЃС‚СЏРјРё Рё РїРѕРёСЃРєРѕРј РїСЂРёС‡РёРЅС‹.',
        acog: 'ACOG-РїРѕРґС…РѕРґ Рє РїРѕСЃР»РµСЂРѕРґРѕРІРѕРјСѓ РїРµСЂРёРѕРґСѓ С‚СЂРµР±СѓРµС‚ Р°РєС‚РёРІРЅРѕРіРѕ РёСЃРєР»СЋС‡РµРЅРёСЏ РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЏ, РёРЅС„РµРєС†РёРё, С‚СЂРѕРјР±РѕР·Р°, РіРёРїРµСЂС‚РµРЅР·РёРІРЅС‹С… РѕСЃР»РѕР¶РЅРµРЅРёР№ Рё РїСЃРёС…РёС‡РµСЃРєРёС… СЂР°СЃСЃС‚СЂРѕР№СЃС‚РІ, Р° РЅРµ СЃРїРёСЃР°РЅРёСЏ СЃРёРјРїС‚РѕРјРѕРІ РЅР° С„РёР·РёРѕР»РѕРіРёСЋ.',
        ranzcog: 'RCOG/NICE-РїРѕРґС…РѕРґ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ СЂР°РЅРЅСЋСЋ СЌСЃРєР°Р»Р°С†РёСЋ РїСЂРё PPH, СЃРµРїСЃРёСЃРµ, РјР°СЃС‚РёС‚Рµ СЃ Р°Р±СЃС†РµСЃСЃРѕРј, Р·Р°РґРµСЂР¶РєРµ РѕСЃС‚Р°С‚РєРѕРІ Рё Р’РўР­; РіСЂСѓРґРЅРѕРµ РІСЃРєР°СЂРјР»РёРІР°РЅРёРµ СЃРѕС…СЂР°РЅСЏСЋС‚, РєРѕРіРґР° СЌС‚Рѕ РєР»РёРЅРёС‡РµСЃРєРё Р±РµР·РѕРїР°СЃРЅРѕ.',
        ru: 'Р РѕСЃСЃРёР№СЃРєРёРµ РїСЂРѕС‚РѕРєРѕР»С‹ РѕСЂРёРµРЅС‚РёСЂРѕРІР°РЅС‹ РЅР° Р±С‹СЃС‚СЂСѓСЋ РіРѕСЃРїРёС‚Р°Р»СЊРЅСѓСЋ РїРѕРјРѕС‰СЊ РїСЂРё РєСЂРѕРІРѕС‚РµС‡РµРЅРёРё, Р»РёС…РѕСЂР°РґРєРµ, Р±РѕР»Рё, СЃСѓР±РёРЅРІРѕР»СЋС†РёРё, Р»Р°РєС‚Р°С†РёРѕРЅРЅС‹С… РѕСЃР»РѕР¶РЅРµРЅРёСЏС… Рё С‚СЂРѕРјР±РѕС‚РёС‡РµСЃРєРѕРј СЂРёСЃРєРµ.',
      };
    case 'thrombosis':
      return {
        eau: 'RCOG Green-top 37a/37b РѕСЃС‚Р°РµС‚СЃСЏ Р°РєС‚РёРІРЅРѕР№ РѕСЃРЅРѕРІРѕР№ РґР»СЏ РѕС†РµРЅРєРё Р’РўР­ РІ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё Рё РїРѕСЃР»РµСЂРѕРґРѕРІРѕРј РїРµСЂРёРѕРґРµ: СЂРёСЃРє РїРµСЂРµСЃРјР°С‚СЂРёРІР°СЋС‚ Р°РЅС‚РµРЅР°С‚Р°Р»СЊРЅРѕ, РёРЅС‚СЂР°РЅР°С‚Р°Р»СЊРЅРѕ Рё РїРѕСЃР»Рµ СЂРѕРґРѕРІ, Р° РїРѕРґРѕР·СЂРµРЅРёРµ РЅР° РўР“Р’/РўР­Р›Рђ С‚СЂРµР±СѓРµС‚ РЅРµРјРµРґР»РµРЅРЅРѕР№ РґРёР°РіРЅРѕСЃС‚РёРєРё.',
        acog: 'РђРјРµСЂРёРєР°РЅСЃРєР°СЏ РїСЂР°РєС‚РёРєР° РїРѕРґРґРµСЂР¶РёРІР°РµС‚ LMWH РєР°Рє Р±Р°Р·РѕРІС‹Р№ Р°РЅС‚РёРєРѕР°РіСѓР»СЏРЅС‚ РїСЂРё РїРѕРґС‚РІРµСЂР¶РґРµРЅРЅРѕР№ Р’РўР­ РІ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё, СЃ РїР»Р°РЅРёСЂРѕРІР°РЅРёРµРј СЂРѕРґРѕРІ Рё РЅРµР№СЂРѕР°РєСЃРёР°Р»СЊРЅРѕР№ Р°РЅРµСЃС‚РµР·РёРё РІРѕРєСЂСѓРі РІСЂРµРјРµРЅРё РїРѕСЃР»РµРґРЅРµР№ РґРѕР·С‹.',
        ranzcog: 'Р‘СЂРёС‚Р°РЅСЃРєРѕ-Р°РІСЃС‚СЂР°Р»РёР№СЃРєРёР№ РїРѕРґС…РѕРґ РёСЃРїРѕР»СЊР·СѓРµС‚ РєРѕРјРїСЂРµСЃСЃРёРѕРЅРЅРѕРµ РЈР—Р РїСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РўР“Р’, РІРёР·СѓР°Р»РёР·Р°С†РёСЋ РїСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РўР­Р›Рђ Рё РїРѕСЃР»РµСЂРѕРґРѕРІСѓСЋ РїСЂРѕС„РёР»Р°РєС‚РёРєСѓ РїРѕ СЃСѓРјРјРµ С„Р°РєС‚РѕСЂРѕРІ СЂРёСЃРєР°.',
        ru: 'Р РѕСЃСЃРёР№СЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё С‚СЂРµР±СѓСЋС‚ СЂР°РЅРЅРµР№ Р°РЅС‚РёРєРѕР°РіСѓР»СЏС†РёРё РїСЂРё РїРѕРґС‚РІРµСЂР¶РґРµРЅРЅРѕРј РґРёР°РіРЅРѕР·Рµ, РѕС†РµРЅРєРё РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЏ Рё РјРµР¶РґРёСЃС†РёРїР»РёРЅР°СЂРЅРѕРіРѕ РїР»Р°РЅР° СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ.',
      };
    case 'medical':
      return {
        eau: 'РЎРѕРІСЂРµРјРµРЅРЅР°СЏ Р°РєСѓС€РµСЂСЃРєР°СЏ С‚Р°РєС‚РёРєР° РїСЂРё СЌРєСЃС‚СЂР°РіРµРЅРёС‚Р°Р»СЊРЅРѕР№ РїР°С‚РѕР»РѕРіРёРё СЃС‚СЂРѕРёС‚СЃСЏ РЅР° СЃРѕРІРјРµСЃС‚РЅРѕРј РІРµРґРµРЅРёРё СЃ РїСЂРѕС„РёР»СЊРЅС‹Рј СЃРїРµС†РёР°Р»РёСЃС‚РѕРј, РѕС†РµРЅРєРµ РєРѕРјРїРµРЅСЃР°С†РёРё Р·Р°Р±РѕР»РµРІР°РЅРёСЏ Рё Р°РґР°РїС‚Р°С†РёРё С‡Р°СЃС‚РѕС‚С‹ РјРѕРЅРёС‚РѕСЂРёРЅРіР° РїР»РѕРґР°.',
        acog: 'ACOG СЂРµРєРѕРјРµРЅРґСѓРµС‚ Р·Р°СЂР°РЅРµРµ РїР»Р°РЅРёСЂРѕРІР°С‚СЊ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ РїСЂРё С…СЂРѕРЅРёС‡РµСЃРєРёС… Р·Р°Р±РѕР»РµРІР°РЅРёСЏС…, РїРµСЂРµСЃРјР°С‚СЂРёРІР°С‚СЊ Р±РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ РїСЂРµРїР°СЂР°С‚РѕРІ Рё РЅРµ Р·Р°РґРµСЂР¶РёРІР°С‚СЊ РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёСЋ РїСЂРё РґРµРєРѕРјРїРµРЅСЃР°С†РёРё.',
        ranzcog: 'RCOG/NICE-РїРѕРґС…РѕРґ Р°РєС†РµРЅС‚РёСЂСѓРµС‚ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Р№ РїР»Р°РЅ СЂРѕРґРѕРІ, Р°РЅРµСЃС‚РµР·РёРё, С‚СЂРѕРјР±РѕРїСЂРѕС„РёР»Р°РєС‚РёРєРё Рё РїРѕСЃР»РµСЂРѕРґРѕРІРѕРіРѕ РЅР°Р±Р»СЋРґРµРЅРёСЏ РґР»СЏ СЃРѕРјР°С‚РёС‡РµСЃРєРё СЃР»РѕР¶РЅС‹С… РїР°С†РёРµРЅС‚РѕРє.',
        ru: 'Р РѕСЃСЃРёР№СЃРєР°СЏ РјР°СЂС€СЂСѓС‚РёР·Р°С†РёСЏ Р·Р°РІРёСЃРёС‚ РѕС‚ РєР»Р°СЃСЃР° СЂРёСЃРєР°, РєРѕРјРїРµРЅСЃР°С†РёРё Р·Р°Р±РѕР»РµРІР°РЅРёСЏ Рё РґРѕСЃС‚СѓРїРЅРѕСЃС‚Рё РїРµСЂРёРЅР°С‚Р°Р»СЊРЅРѕРіРѕ С†РµРЅС‚СЂР° СЃ РїСЂРѕС„РёР»СЊРЅРѕР№ РєРѕРЅСЃСѓР»СЊС‚Р°С‚РёРІРЅРѕР№ РїРѕРґРґРµСЂР¶РєРѕР№.',
      };
    case 'labor':
      return {
        eau: 'РЎРѕРІСЂРµРјРµРЅРЅС‹Рµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїРѕ РѕСЃР»РѕР¶РЅРµРЅРёСЏРј СЂРѕРґРѕРІ С‚СЂРµР±СѓСЋС‚ РЅРµРїСЂРµСЂС‹РІРЅРѕР№ РѕС†РµРЅРєРё РјР°С‚РµСЂРё Рё РїР»РѕРґР°, СЂР°РЅРЅРµРіРѕ СЂР°СЃРїРѕР·РЅР°РІР°РЅРёСЏ РґРёСЃС‚РѕС†РёРё, РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЏ, СЂР°Р·СЂС‹РІР° РјР°С‚РєРё Рё РїР»РµС‡РµРІРѕР№ РґРёСЃС‚РѕС†РёРё.',
        acog: 'ACOG РїРѕРґРґРµСЂР¶РёРІР°РµС‚ РїСЂРѕС„РёР»Р°РєС‚РёРєСѓ РїРµСЂРІРёС‡РЅРѕРіРѕ РєРµСЃР°СЂРµРІР° СЃРµС‡РµРЅРёСЏ РїСЂРё Р±РµР·РѕРїР°СЃРЅРѕРј С‚РµС‡РµРЅРёРё СЂРѕРґРѕРІ, РЅРѕ С‚СЂРµР±СѓРµС‚ Р±С‹СЃС‚СЂРѕР№ СЌСЃРєР°Р»Р°С†РёРё РїСЂРё РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРѕРј РљРўР“, РѕСЃС‚Р°РЅРѕРІРєРµ РїСЂРѕРіСЂРµСЃСЃР° РёР»Рё СѓРіСЂРѕР·Рµ Р¶РёР·РЅРё РјР°С‚РµСЂРё/РїР»РѕРґР°.',
        ranzcog: 'RCOG/NICE-РїРѕРґС…РѕРґ РёСЃРїРѕР»СЊР·СѓРµС‚ partogram/РґРёРЅР°РјРёС‡РµСЃРєСѓСЋ РѕС†РµРЅРєСѓ СЂРѕРґРѕРІ, РґРѕРєР°Р·Р°С‚РµР»СЊРЅСѓСЋ РёРЅРґСѓРєС†РёСЋ Рё С‡РµС‚РєРёРµ РєСЂРёС‚РµСЂРёРё РѕРїРµСЂР°С‚РёРІРЅРѕРіРѕ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ.',
        ru: 'Р РѕСЃСЃРёР№СЃРєР°СЏ РїСЂР°РєС‚РёРєР° РѕСЂРёРµРЅС‚РёСЂРѕРІР°РЅР° РЅР° СЃРІРѕРµРІСЂРµРјРµРЅРЅСѓСЋ РґРёР°РіРЅРѕСЃС‚РёРєСѓ РєР»РёРЅРёС‡РµСЃРєРё СѓР·РєРѕРіРѕ С‚Р°Р·Р°, СЃР»Р°Р±РѕСЃС‚Рё СЂРѕРґРѕРІРѕР№ РґРµСЏС‚РµР»СЊРЅРѕСЃС‚Рё, РіРёРїРѕРєСЃРёРё РїР»РѕРґР° Рё РіРѕС‚РѕРІРЅРѕСЃС‚СЊ Рє СЌРєСЃС‚СЂРµРЅРЅРѕРјСѓ РєРµСЃР°СЂРµРІСѓ СЃРµС‡РµРЅРёСЋ.',
      };
    default:
      return {
        eau: 'РђРєС‚СѓР°Р»СЊРЅС‹Рµ РјРµР¶РґСѓРЅР°СЂРѕРґРЅС‹Рµ Р°РєСѓС€РµСЂСЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё С‚СЂРµР±СѓСЋС‚ РѕС†РµРЅРєРё РјР°С‚РµСЂРёРЅСЃРєРѕРіРѕ СЂРёСЃРєР°, СЃРѕСЃС‚РѕСЏРЅРёСЏ РїР»РѕРґР°, СЃСЂРѕРєР° РіРµСЃС‚Р°С†РёРё Рё РґРѕСЃС‚СѓРїРЅРѕСЃС‚Рё РЅСѓР¶РЅРѕРіРѕ СѓСЂРѕРІРЅСЏ РїРѕРјРѕС‰Рё РїРµСЂРµРґ РІС‹Р±РѕСЂРѕРј С‚Р°РєС‚РёРєРё.',
        acog: 'ACOG-РїРѕРґС…РѕРґ СЃС‚СЂРѕРёС‚СЃСЏ РЅР° shared decision-making, СЃРІРѕРµРІСЂРµРјРµРЅРЅРѕР№ СЌСЃРєР°Р»Р°С†РёРё РїСЂРё СѓС…СѓРґС€РµРЅРёРё Рё РґРѕРєСѓРјРµРЅС‚РёСЂРѕРІР°РЅРЅРѕРј Р±Р°Р»Р°РЅСЃРµ РјРµР¶РґСѓ РїСЂРѕР»РѕРЅРіРёСЂРѕРІР°РЅРёРµРј Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё Рё Р±РµР·РѕРїР°СЃРЅРѕСЃС‚СЊСЋ РјР°С‚РµСЂРё/РїР»РѕРґР°.',
        ranzcog: 'RCOG/NICE/RANZCOG-РїРѕРґС…РѕРґС‹ РїРѕРґС‡РµСЂРєРёРІР°СЋС‚ РјР°СЂС€СЂСѓС‚РёР·Р°С†РёСЋ РїРѕ СѓСЂРѕРІРЅСЋ СЂРёСЃРєР°, РїРµСЂРёРЅР°С‚Р°Р»СЊРЅС‹Р№ РјРѕРЅРёС‚РѕСЂРёРЅРі Рё РїРѕРЅСЏС‚РЅС‹Рµ РєСЂРёС‚РµСЂРёРё РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёРё РёР»Рё СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ.',
        ru: 'Р РѕСЃСЃРёР№СЃРєРёРµ РєР»РёРЅРёС‡РµСЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё С‚СЂРµР±СѓСЋС‚ СѓС‡РёС‚С‹РІР°С‚СЊ Р»РѕРєР°Р»СЊРЅСѓСЋ РјР°СЂС€СЂСѓС‚РёР·Р°С†РёСЋ, СЃСЂРѕРє Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё, С‚СЏР¶РµСЃС‚СЊ СЃРѕСЃС‚РѕСЏРЅРёСЏ Рё РІРѕР·РјРѕР¶РЅРѕСЃС‚Рё СЃС‚Р°С†РёРѕРЅР°СЂР°/РїРµСЂРёРЅР°С‚Р°Р»СЊРЅРѕРіРѕ С†РµРЅС‚СЂР°.',
      };
  }
};

const buildObstetricsRecommendations = (cluster: ObstetricsCluster, disease: Disease) => {
  switch (cluster) {
    case 'hypertension':
      return ['Р Р°РЅРѕ СЃС‚СЂР°С‚РёС„РёС†РёСЂРѕРІР°С‚СЊ РјР°С‚РµСЂРёРЅСЃРєРёР№ Рё РїРµСЂРёРЅР°С‚Р°Р»СЊРЅС‹Р№ СЂРёСЃРє Рё РЅРµ Р·Р°С‚СЏРіРёРІР°С‚СЊ РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёСЋ РїСЂРё СѓС…СѓРґС€РµРЅРёРё.', 'РџР°СЂР°Р»Р»РµР»СЊРЅРѕ РєРѕРЅС‚СЂРѕР»РёСЂРѕРІР°С‚СЊ СЃРѕСЃС‚РѕСЏРЅРёРµ РјР°С‚РµСЂРё Рё РїР»РѕРґР°, Р° РЅРµ С‚РѕР»СЊРєРѕ СѓСЂРѕРІРµРЅСЊ РђР”.', 'РџРѕСЂРѕРі РґР»СЏ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ РѕРїСЂРµРґРµР»СЏС‚СЊ РїРѕ СЃСѓРјРјРµ РєР»РёРЅРёС‡РµСЃРєРёС… Рё РґРѕРїРїР»РµСЂРѕРјРµС‚СЂРёС‡РµСЃРєРёС… РїСЂРёР·РЅР°РєРѕРІ.', 'РџРѕСЃР»Рµ СЂРѕРґРѕРІ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ РїСЂРѕРґРѕР»Р¶Р°С‚СЊ РјРѕРЅРёС‚РѕСЂРёРЅРі РёР·-Р·Р° СЂРёСЃРєР° РїРѕР·РґРЅРёС… РѕСЃР»РѕР¶РЅРµРЅРёР№.'];
    case 'diabetes':
      return ['РћСЂРёРµРЅС‚РёСЂРѕРІР°С‚СЊСЃСЏ РЅР° С†РµР»РµРІС‹Рµ РїРѕРєР°Р·Р°С‚РµР»Рё РіР»РёРєРµРјРёРё Рё СЂРѕСЃС‚ РїР»РѕРґР° РІ РґРёРЅР°РјРёРєРµ.', 'РџСЂРё РїСЂРёР·РЅР°РєР°С… РјР°РєСЂРѕСЃРѕРјРёРё Р·Р°СЂР°РЅРµРµ РѕР±СЃСѓР¶РґР°С‚СЊ РїР»Р°РЅ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ.', 'РќРµ РѕС‚РєР»Р°РґС‹РІР°С‚СЊ РёРЅСЃСѓР»РёРЅРѕС‚РµСЂР°РїРёСЋ РїСЂРё РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕРј СЌС„С„РµРєС‚Рµ РґРёРµС‚С‹.', 'РџРѕСЃР»Рµ СЂРѕРґРѕРІ РѕСЂРіР°РЅРёР·РѕРІР°С‚СЊ РјРµС‚Р°Р±РѕР»РёС‡РµСЃРєРёР№ РєРѕРЅС‚СЂРѕР»СЊ Рё РїСЂРѕС„РёР»Р°РєС‚РёРєСѓ РґРёР°Р±РµС‚Р° 2 С‚РёРїР°.'];
    case 'placenta':
      return ['Р›СЋР±РѕРµ РєСЂРѕРІРѕС‚РµС‡РµРЅРёРµ РїСЂРё Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё СЂР°СЃСЃРјР°С‚СЂРёРІР°С‚СЊ РєР°Рє РїРѕС‚РµРЅС†РёР°Р»СЊРЅРѕ РѕРїР°СЃРЅРѕРµ РґРѕ РёСЃРєР»СЋС‡РµРЅРёСЏ РїР»Р°С†РµРЅС‚Р°СЂРЅРѕР№ РїСЂРёС‡РёРЅС‹.', 'РџСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° placenta accreta spectrum РјР°СЂС€СЂСѓС‚РёР·РёСЂРѕРІР°С‚СЊ РїР°С†РёРµРЅС‚РєСѓ РІ С†РµРЅС‚СЂ, РіРѕС‚РѕРІС‹Р№ Рє РјР°СЃСЃРёРІРЅРѕР№ РєСЂРѕРІРѕРїРѕС‚РµСЂРµ.', 'РўР°РєС‚РёРєСѓ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ РїР»Р°РЅРёСЂРѕРІР°С‚СЊ Р·Р°СЂР°РЅРµРµ СЃ СѓС‡РµС‚РѕРј Р»РѕРєР°Р»РёР·Р°С†РёРё РїР»Р°С†РµРЅС‚С‹ Рё Р·СЂРµР»РѕСЃС‚Рё РїР»РѕРґР°.', 'РР·Р±РµРіР°С‚СЊ РЅРµРЅСѓР¶РЅС‹С… РІР»Р°РіР°Р»РёС‰РЅС‹С… РјР°РЅРёРїСѓР»СЏС†РёР№ РїСЂРё РїСЂРµРґР»РµР¶Р°РЅРёРё РїР»Р°С†РµРЅС‚С‹.'];
    case 'preterm':
      return ['РЈРіСЂРѕР·Р° РїСЂРµР¶РґРµРІСЂРµРјРµРЅРЅС‹С… СЂРѕРґРѕРІ С‚СЂРµР±СѓРµС‚ Р±С‹СЃС‚СЂРѕР№ РѕС†РµРЅРєРё С€РµР№РєРё РјР°С‚РєРё, РѕР±РѕР»РѕС‡РµРє Рё РёРЅС„РµРєС†РёРѕРЅРЅРѕРіРѕ С‚СЂРёРіРіРµСЂР°.', 'РџСЂРѕР»РѕРЅРіРёСЂРѕРІР°РЅРёРµ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё РѕРїСЂР°РІРґР°РЅРѕ С‚РѕР»СЊРєРѕ РїСЂРё СЃС‚Р°Р±РёР»СЊРЅРѕРј СЃРѕСЃС‚РѕСЏРЅРёРё РјР°С‚РµСЂРё Рё РїР»РѕРґР°.', 'РљРѕСЂС‚РёРєРѕСЃС‚РµСЂРѕРёРґС‹, С‚РѕРєРѕР»РёР· Рё РЅРµР№СЂРѕРїСЂРѕС‚РµРєС†РёСЏ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РїРѕ СЃСЂРѕРєР°Рј Рё РїРѕРєР°Р·Р°РЅРёСЏРј.', 'РџРѕСЃР»Рµ РєСѓРїРёСЂРѕРІР°РЅРёСЏ СѓРіСЂРѕР·С‹ РїРµСЂРµСЃРјР°С‚СЂРёРІР°С‚СЊ СЂРёСЃРє РїРѕРІС‚РѕСЂРЅРѕРіРѕ СЌРїРёР·РѕРґР°.'];
    case 'pregnancy-loss':
      return ['РџРѕРґС‚РІРµСЂР¶РґР°С‚СЊ РґРёР°РіРЅРѕР· РїРѕС‚РµСЂРё Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё РїРѕ РІР°Р»РёРґРЅС‹Рј СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІС‹Рј РєСЂРёС‚РµСЂРёСЏРј Р±РµР· РїРѕСЃРїРµС€РЅС‹С… РІС‹РІРѕРґРѕРІ.', 'Р’С‹Р±РѕСЂ РјРµР¶РґСѓ РІС‹Р¶РёРґР°С‚РµР»СЊРЅРѕР№, РјРµРґРёРєР°РјРµРЅС‚РѕР·РЅРѕР№ Рё С…РёСЂСѓСЂРіРёС‡РµСЃРєРѕР№ С‚Р°РєС‚РёРєРѕР№ РґРµР»Р°С‚СЊ СЃРѕРІРјРµСЃС‚РЅРѕ СЃ РїР°С†РёРµРЅС‚РєРѕР№.', 'РџСЂРё РїРѕРІС‚РѕСЂРЅС‹С… РїРѕС‚РµСЂСЏС… РїРµСЂРµС…РѕРґРёС‚СЊ Рє СЂР°СЃС€РёСЂРµРЅРЅРѕРјСѓ РґРѕРѕР±СЃР»РµРґРѕРІР°РЅРёСЋ Р±РµР· Р·Р°С‚СЏР¶РєРё.', 'РџРѕСЃР»Рµ РѕСЃР»РѕР¶РЅРµРЅРЅРѕР№ РїРѕС‚РµСЂРё Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё РґР°РІР°С‚СЊ С‡РµС‚РєРёР№ РїР»Р°РЅ РЅР°Р±Р»СЋРґРµРЅРёСЏ Рё СЃР»РµРґСѓСЋС‰РµРіРѕ СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅРѕРіРѕ С€Р°РіР°.'];
    case 'fetal':
      return ['РћС†РµРЅРёРІР°С‚СЊ РЅРµ С‚РѕР»СЊРєРѕ СЂР°Р·РѕРІС‹Р№ РїР°СЂР°РјРµС‚СЂ, Р° С‚СЂР°РµРєС‚РѕСЂРёСЋ РІРЅСѓС‚СЂРёСѓС‚СЂРѕР±РЅРѕРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ РїР»РѕРґР°.', 'РџСЂРё РјРЅРѕРіРѕРїР»РѕРґРёРё Рё Р—Р Рџ С‡Р°С‰Рµ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ СЃРїРµС†РёР°Р»РёР·РёСЂРѕРІР°РЅРЅС‹Рµ С†РµРЅС‚СЂС‹ Рё СЌРєСЃРїРµСЂС‚РЅРѕРµ РЈР—Р.', 'РўР°РєС‚РёРєСѓ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ РѕРїСЂРµРґРµР»СЏС‚СЊ РїРѕ СЃСЂРѕРєСѓ, РґРѕРїРїР»РµСЂСѓ Рё Р±РёРѕС„РёР·РёС‡РµСЃРєРѕРјСѓ СЃС‚Р°С‚СѓСЃСѓ.', 'Р РѕРґРёС‚РµР»СЏРј Р·Р°СЂР°РЅРµРµ СЂР°Р·СЉСЏСЃРЅСЏС‚СЊ РїРµСЂРёРЅР°С‚Р°Р»СЊРЅС‹Рµ СЂРёСЃРєРё Рё РєСЂРёС‚РµСЂРёРё СѓС…СѓРґС€РµРЅРёСЏ.'];
    case 'infection':
      return ['РРЅС„РµРєС†РёРё РїСЂРё Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё Р»РµС‡РёС‚СЊ СЃ СѓС‡РµС‚РѕРј СЂРёСЃРєР° РІРµСЂС‚РёРєР°Р»СЊРЅРѕР№ РїРµСЂРµРґР°С‡Рё Рё Р±РµР·РѕРїР°СЃРЅРѕСЃС‚Рё РґР»СЏ РїР»РѕРґР°.', 'РљРѕРЅС‚СЂРѕР»СЊ СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚Рё РґРѕР»Р¶РµРЅ РІРєР»СЋС‡Р°С‚СЊ РјР°С‚РµСЂРёРЅСЃРєСѓСЋ РєР»РёРЅРёРєСѓ Рё СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕРµ СЃРѕСЃС‚РѕСЏРЅРёРµ РїР»РѕРґР°.', 'РџСЂРё Р»РёС…РѕСЂР°РґРєРµ Р±РµР· СЏРІРЅРѕРіРѕ РёСЃС‚РѕС‡РЅРёРєР° РёСЃРєР»СЋС‡Р°С‚СЊ Р°РєСѓС€РµСЂСЃРєСѓСЋ РёРЅС„РµРєС†РёСЋ Рё РІРЅСѓС‚СЂРёСѓС‚СЂРѕР±РЅРѕРµ РїРѕСЂР°Р¶РµРЅРёРµ.', 'РќРµ РѕС‚РєР»Р°РґС‹РІР°С‚СЊ РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёСЋ РїСЂРё СЃРёСЃС‚РµРјРЅРѕР№ РёРЅС„РµРєС†РёРё РёР»Рё РїСЂРёР·РЅР°РєР°С… С…РѕСЂРёРѕР°РјРЅРёРѕРЅРёС‚Р°.'];
    case 'postpartum':
      return ['РџРѕСЃР»РµСЂРѕРґРѕРІС‹Рµ Р¶Р°Р»РѕР±С‹ РѕС†РµРЅРёРІР°С‚СЊ Р°РєС‚РёРІРЅРѕ, РЅРµ СЃРїРёСЃС‹РІР°СЏ Р»РёС…РѕСЂР°РґРєСѓ, Р±РѕР»СЊ Рё РєСЂРѕРІРѕС‚РµС‡РµРЅРёРµ РЅР° С„РёР·РёРѕР»РѕРіРёСЋ.', 'РќР° СЂР°РЅРЅРµРј СЌС‚Р°РїРµ РёСЃРєР»СЋС‡Р°С‚СЊ РѕСЃС‚Р°С‚РєРё РїР»Р°С†РµРЅС‚С‹, СЌРЅРґРѕРјРµС‚СЂРёС‚, РјР°СЃС‚РёС‚ Рё С‚СЂРѕРјР±РѕС‚РёС‡РµСЃРєРёРµ РѕСЃР»РѕР¶РЅРµРЅРёСЏ.', 'РџРѕРґРґРµСЂР¶РёРІР°С‚СЊ РіСЂСѓРґРЅРѕРµ РІСЃРєР°СЂРјР»РёРІР°РЅРёРµ С‚Р°Рј, РіРґРµ СЌС‚Рѕ Р±РµР·РѕРїР°СЃРЅРѕ Рё РєР»РёРЅРёС‡РµСЃРєРё РѕРїСЂР°РІРґР°РЅРѕ.', 'РџРѕСЃР»Рµ С‚СЏР¶РµР»С‹С… РѕСЃР»РѕР¶РЅРµРЅРёР№ РїР»Р°РЅРёСЂРѕРІР°С‚СЊ СЂРµР°Р±РёР»РёС‚Р°С†РёСЋ Рё РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Р№ СЂРёСЃРє СЃР»РµРґСѓСЋС‰РµР№ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё.'];
    case 'thrombosis':
      return ['РћС†РµРЅРєСѓ СЂРёСЃРєР° Р’РўР­ РїСЂРѕРІРѕРґРёС‚СЊ РґРѕ СЂРѕРґРѕРІ Рё РїРѕРІС‚РѕСЂСЏС‚СЊ РІ РїРѕСЃР»РµСЂРѕРґРѕРІРѕРј РїРµСЂРёРѕРґРµ.', 'РџСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РўР“Р’ РёР»Рё РўР­Р›Рђ РЅРµ РѕС‚РєР»Р°РґС‹РІР°С‚СЊ РІРёР·СѓР°Р»РёР·Р°С†РёСЋ РёР·-Р·Р° Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё.', 'РђРЅС‚РёРєРѕР°РіСѓР»СЏС†РёСЋ Рё СЃСЂРѕРєРё Р»РµС‡РµРЅРёСЏ РѕРїСЂРµРґРµР»СЏС‚СЊ РїРѕ РїРѕРґС‚РІРµСЂР¶РґРµРЅРЅРѕРјСѓ РґРёР°РіРЅРѕР·Сѓ Рё С„Р°РєС‚РѕСЂР°Рј СЂРёСЃРєР°.', 'Р Р°Р·СЉСЏСЃРЅСЏС‚СЊ РїР°С†РёРµРЅС‚РєРµ РІР°Р¶РЅРѕСЃС‚СЊ СЂР°РЅРЅРµР№ РјРѕР±РёР»РёР·Р°С†РёРё Рё СЃРёРјРїС‚РѕРјРѕРІ С‚СЂРµРІРѕРіРё.'];
    case 'medical':
      return ['Р­РєСЃС‚СЂР°РіРµРЅРёС‚Р°Р»СЊРЅСѓСЋ РїР°С‚РѕР»РѕРіРёСЋ РІРµСЃС‚Рё СЃРѕРІРјРµСЃС‚РЅРѕ СЃ РїСЂРѕС„РёР»СЊРЅС‹Рј СЃРїРµС†РёР°Р»РёСЃС‚РѕРј.', 'Р§Р°СЃС‚РѕС‚Сѓ Р°РєСѓС€РµСЂСЃРєРѕРіРѕ РјРѕРЅРёС‚РѕСЂРёРЅРіР° Р°РґР°РїС‚РёСЂРѕРІР°С‚СЊ Рє СЃС‚РµРїРµРЅРё РєРѕРјРїРµРЅСЃР°С†РёРё РѕСЃРЅРѕРІРЅРѕРіРѕ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ.', 'РџСЂРё СѓС…СѓРґС€РµРЅРёРё СЃРѕРјР°С‚РёС‡РµСЃРєРѕРіРѕ СЃС‚Р°С‚СѓСЃР° РїРµСЂРµСЃРјР°С‚СЂРёРІР°С‚СЊ Р°РєСѓС€РµСЂСЃРєСѓСЋ С‚Р°РєС‚РёРєСѓ Р±РµР· РїСЂРѕРјРµРґР»РµРЅРёСЏ.', 'РџР»Р°РЅРёСЂРѕРІР°С‚СЊ РїРѕСЃР»РµСЂРѕРґРѕРІРѕР№ РєРѕРЅС‚СЂРѕР»СЊ РЅРµ РјРµРЅРµРµ С‚С‰Р°С‚РµР»СЊРЅРѕ, С‡РµРј Р°РЅС‚РµРЅР°С‚Р°Р»СЊРЅС‹Р№.'];
    case 'labor':
      return ['РџСЂРё Р·Р°С‚СЏР¶РЅРѕРј РёР»Рё РѕСЃР»РѕР¶РЅРµРЅРЅРѕРј С‚РµС‡РµРЅРёРё СЂРѕРґРѕРІ СЂРµРіСѓР»СЏСЂРЅРѕ РїРµСЂРµСЃРјР°С‚СЂРёРІР°С‚СЊ РіРёРїРѕС‚РµР·Сѓ Рѕ РјРµС…Р°РЅРёС‡РµСЃРєРѕР№ РїСЂРёС‡РёРЅРµ.', 'Р”РѕРєСѓРјРµРЅС‚РёСЂРѕРІР°С‚СЊ РїРѕРєР°Р·Р°РЅРёСЏ Рє СЃРјРµРЅРµ С‚Р°РєС‚РёРєРё РѕС‚ РєРѕРЅСЃРµСЂРІР°С‚РёРІРЅРѕРіРѕ РІРµРґРµРЅРёСЏ Рє РѕРїРµСЂР°С‚РёРІРЅРѕРјСѓ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЋ.', 'Р¤РµС‚Р°Р»СЊРЅС‹Р№ РјРѕРЅРёС‚РѕСЂРёРЅРі РґРѕР»Р¶РµРЅ РёРґС‚Рё РїР°СЂР°Р»Р»РµР»СЊРЅРѕ РѕС†РµРЅРєРµ РїСЂРѕРіСЂРµСЃСЃР° СЂРѕРґРѕРІ.', 'РџРѕСЃР»Рµ РѕСЃР»РѕР¶РЅРµРЅРЅС‹С… СЂРѕРґРѕРІ Р·Р°СЂР°РЅРµРµ РѕС†РµРЅРёРІР°С‚СЊ СЂРёСЃРє РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЏ Рё С‚СЂР°РІРјС‹ СЂРѕРґРѕРІС‹С… РїСѓС‚РµР№.'];
    default:
      return [`РћС†РµРЅРёРІР°С‚СЊ ${disease.name.toLowerCase()} РїРѕ СЃРѕРІРѕРєСѓРїРЅРѕСЃС‚Рё Р¶Р°Р»РѕР±, РѕСЃРјРѕС‚СЂР°, Р»Р°Р±РѕСЂР°С‚РѕСЂРЅС‹С… Рё РёРЅСЃС‚СЂСѓРјРµРЅС‚Р°Р»СЊРЅС‹С… РґР°РЅРЅС‹С….`, `РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ ${getPrimaryDiagnosticStep(disease).toLowerCase()} РєР°Рє С‡Р°СЃС‚СЊ РїРѕСЌС‚Р°РїРЅРѕР№ РІРµСЂРёС„РёРєР°С†РёРё РґРёР°РіРЅРѕР·Р°.`, 'РўР°РєС‚РёРєСѓ Р»РµС‡РµРЅРёСЏ СЃРѕРѕС‚РЅРѕСЃРёС‚СЊ СЃ С‚СЏР¶РµСЃС‚СЊСЋ РїСЂРѕС†РµСЃСЃР°, СЃСЂРѕРєРѕРј Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё Рё СЂРёСЃРєРѕРј РѕСЃР»РѕР¶РЅРµРЅРёР№.', `РљРѕРЅС‚СЂРѕР»СЊ СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚Рё РїСЂРѕРІРѕРґРёС‚СЊ РЅР° С„РѕРЅРµ С‚РµСЂР°РїРёРё: ${getPrimaryTreatment(disease).toLowerCase()}.`];
  }
};

const buildObstetricsPrognosis = (cluster: ObstetricsCluster, disease: Disease) => {
  switch (cluster) {
    case 'hypertension':
      return { general: `РџСЂРѕРіРЅРѕР· РїСЂРё ${disease.name.toLowerCase()} РѕРїСЂРµРґРµР»СЏРµС‚СЃСЏ СЃСЂРѕРєРѕРј РјР°РЅРёС„РµСЃС‚Р°С†РёРё, С‚СЏР¶РµСЃС‚СЊСЋ РјР°С‚РµСЂРёРЅСЃРєРѕР№ РґРёСЃС„СѓРЅРєС†РёРё Рё СЃС‚РµРїРµРЅСЊСЋ РїР»Р°С†РµРЅС‚Р°СЂРЅРѕР№ РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕСЃС‚Рё.`, factors: ['РЎСЂРѕРє Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё РЅР° РјРѕРјРµРЅС‚ РґРµР±СЋС‚Р°', 'РўСЏР¶РµСЃС‚СЊ РіРёРїРµСЂС‚РµРЅР·РёРё Рё РѕСЂРіР°РЅРЅРѕР№ РґРёСЃС„СѓРЅРєС†РёРё', 'РќР°Р»РёС‡РёРµ Р—Р Рџ Рё РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРѕРіРѕ РґРѕРїРїР»РµСЂР°', 'Р’СЂРµРјСЏ РґРѕ Р±РµР·РѕРїР°СЃРЅРѕРіРѕ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ'], survival: 'РњР°С‚РµСЂРёРЅСЃРєРёР№ Рё РїРµСЂРёРЅР°С‚Р°Р»СЊРЅС‹Р№ СЂРёСЃРє Р·РЅР°С‡РёС‚РµР»СЊРЅРѕ РІРѕР·СЂР°СЃС‚Р°РµС‚ РїСЂРё СЂР°РЅРЅРµРј РґРµР±СЋС‚Рµ Рё С‚СЏР¶РµР»РѕРј С‚РµС‡РµРЅРёРё.' };
    case 'placenta':
      return { general: `РџСЂРѕРіРЅРѕР· РїСЂРё ${disease.name.toLowerCase()} Р·Р°РІРёСЃРёС‚ РѕС‚ РѕР±СЉРµРјР° РєСЂРѕРІРѕРїРѕС‚РµСЂРё, РіР»СѓР±РёРЅС‹ РїР»Р°С†РµРЅС‚Р°СЂРЅРѕР№ РёРЅРІР°Р·РёРё Рё РґРѕСЃС‚СѓРїРЅРѕСЃС‚Рё СЃРІРѕРµРІСЂРµРјРµРЅРЅРѕРіРѕ РѕРїРµСЂР°С‚РёРІРЅРѕРіРѕ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ.`, factors: ['РњР°СЃСЃРёРІРЅРѕСЃС‚СЊ РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЏ', 'РќР°Р»РёС‡РёРµ accreta spectrum', 'РЎСЂРѕРє РіРµСЃС‚Р°С†РёРё Рё Р·СЂРµР»РѕСЃС‚СЊ РїР»РѕРґР°', 'Р“РѕС‚РѕРІРЅРѕСЃС‚СЊ СЃС‚Р°С†РёРѕРЅР°СЂР° Рє РјР°СЃСЃРёРІРЅРѕР№ РіРµРјРѕС‚СЂР°РЅСЃС„СѓР·РёРё'], survival: 'РћСЃРЅРѕРІРЅРѕР№ СЂРёСЃРє СЃРІСЏР·Р°РЅ СЃ РјР°С‚РµСЂРёРЅСЃРєРѕР№ РєСЂРѕРІРѕРїРѕС‚РµСЂРµР№ Рё РїСЂРµР¶РґРµРІСЂРµРјРµРЅРЅС‹Рј СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёРµРј.' };
    case 'fetal':
      return { general: `РџСЂРѕРіРЅРѕР· РїСЂРё ${disease.name.toLowerCase()} РѕРїСЂРµРґРµР»СЏРµС‚СЃСЏ РіРµСЃС‚Р°С†РёРѕРЅРЅС‹Рј РІРѕР·СЂР°СЃС‚РѕРј, СЃРєРѕСЂРѕСЃС‚СЊСЋ СѓС…СѓРґС€РµРЅРёСЏ СЃРѕСЃС‚РѕСЏРЅРёСЏ РїР»РѕРґР° Рё РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊСЋ Р±РµР·РѕРїР°СЃРЅРѕ РїСЂРѕР»РѕРЅРіРёСЂРѕРІР°С‚СЊ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ.`, factors: ['РЎСЂРѕРє РіРµСЃС‚Р°С†РёРё', 'РўСЂРµРЅРґ СЂРѕСЃС‚Р° РїР»РѕРґР° Рё Р±РёРѕС„РёР·РёС‡РµСЃРєРёР№ РїСЂРѕС„РёР»СЊ', 'РџРѕРєР°Р·Р°С‚РµР»Рё РґРѕРїРїР»РµСЂРѕРјРµС‚СЂРёРё', 'РЎРѕРїСѓС‚СЃС‚РІСѓСЋС‰Р°СЏ РјР°С‚РµСЂРёРЅСЃРєР°СЏ РїР°С‚РѕР»РѕРіРёСЏ'], survival: 'РџРµСЂРёРЅР°С‚Р°Р»СЊРЅС‹Р№ РїСЂРѕРіРЅРѕР· Р·Р°РІРёСЃРёС‚ РѕС‚ Р±Р°Р»Р°РЅСЃР° РјРµР¶РґСѓ СЂРёСЃРєРѕРј РЅРµРґРѕРЅРѕС€РµРЅРЅРѕСЃС‚Рё Рё РІРЅСѓС‚СЂРёСѓС‚СЂРѕР±РЅРѕР№ РґРµРєРѕРјРїРµРЅСЃР°С†РёРё.' };
    case 'postpartum':
      return { general: `РџСЂРѕРіРЅРѕР· РїСЂРё ${disease.name.toLowerCase()} РѕР±С‹С‡РЅРѕ Р±Р»Р°РіРѕРїСЂРёСЏС‚РЅС‹Р№ РїСЂРё СЂР°РЅРЅРµРј РІС‹СЏРІР»РµРЅРёРё, РЅРѕ РјРѕР¶РµС‚ Р±С‹СЃС‚СЂРѕ СѓС…СѓРґС€Р°С‚СЊСЃСЏ РїСЂРё РєСЂРѕРІРѕС‚РµС‡РµРЅРёРё, РёРЅС„РµРєС†РёРё РёР»Рё Р·Р°РґРµСЂР¶РєРµ РґРёР°РіРЅРѕСЃС‚РёРєРё.`, factors: ['РЎРєРѕСЂРѕСЃС‚СЊ СЂР°СЃРїРѕР·РЅР°РІР°РЅРёСЏ РѕСЃР»РѕР¶РЅРµРЅРёСЏ', 'РћР±СЉРµРј РєСЂРѕРІРѕРїРѕС‚РµСЂРё РёР»Рё РІС‹СЂР°Р¶РµРЅРЅРѕСЃС‚СЊ РёРЅС„РµРєС†РёРё', 'РќРµРѕР±С…РѕРґРёРјРѕСЃС‚СЊ С…РёСЂСѓСЂРіРёС‡РµСЃРєРѕРіРѕ РІРјРµС€Р°С‚РµР»СЊСЃС‚РІР°', 'Р¤РѕРЅРѕРІР°СЏ СЃРѕРјР°С‚РёС‡РµСЃРєР°СЏ РЅР°РіСЂСѓР·РєР°'], survival: 'РњР°С‚РµСЂРёРЅСЃРєРёР№ СЂРёСЃРє РІРѕР·СЂР°СЃС‚Р°РµС‚ РїСЂРё РїРѕР·РґРЅРµРј РЅР°С‡Р°Р»Рµ РёРЅС‚РµРЅСЃРёРІРЅРѕР№ С‚РµСЂР°РїРёРё Рё РјСѓР»СЊС‚РёРѕСЂРіР°РЅРЅРѕР№ РґРёСЃС„СѓРЅРєС†РёРё.' };
    default:
      return { general: `РџСЂРѕРіРЅРѕР· РїСЂРё ${disease.name.toLowerCase()} Р·Р°РІРёСЃРёС‚ РѕС‚ СЂР°РЅРЅРµРіРѕ РІС‹СЏРІР»РµРЅРёСЏ РѕСЃР»РѕР¶РЅРµРЅРёР№ Рё СЃРІРѕРµРІСЂРµРјРµРЅРЅРѕР№ РєРѕСЂСЂРµРєС†РёРё Р°РєСѓС€РµСЂСЃРєРѕР№ С‚Р°РєС‚РёРєРё.`, factors: ['РЎСЂРѕРє РіРµСЃС‚Р°С†РёРё РЅР° РјРѕРјРµРЅС‚ РјР°РЅРёС„РµСЃС‚Р°С†РёРё', 'РўСЏР¶РµСЃС‚СЊ СЃРѕСЃС‚РѕСЏРЅРёСЏ РјР°С‚РµСЂРё Рё РїР»РѕРґР°', 'РЎРІРѕРµРІСЂРµРјРµРЅРЅРѕСЃС‚СЊ РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёРё Рё Р»РµС‡РµРЅРёСЏ'], survival: 'РњР°С‚РµСЂРёРЅСЃРєРёР№ Рё РїРµСЂРёРЅР°С‚Р°Р»СЊРЅС‹Р№ РїСЂРѕРіРЅРѕР· РѕРїСЂРµРґРµР»СЏРµС‚СЃСЏ СЃРєРѕСЂРѕСЃС‚СЊСЋ РґРёР°РіРЅРѕСЃС‚РёРєРё Рё РєР°С‡РµСЃС‚РІРѕРј РјРѕРЅРёС‚РѕСЂРёРЅРіР°.' };
  }
};

const buildObstetricsFollowUp = (cluster: ObstetricsCluster, disease: Disease) => {
  switch (cluster) {
    case 'postpartum':
      return { frequency: 'РџРѕРІС‚РѕСЂРЅР°СЏ РѕС†РµРЅРєР° РІ Р±Р»РёР¶Р°Р№С€РёРµ РґРЅРё РїРѕСЃР»Рµ РЅР°С‡Р°Р»Р° Р»РµС‡РµРЅРёСЏ, Р·Р°С‚РµРј РїРѕ РєР»РёРЅРёС‡РµСЃРєРѕР№ РґРёРЅР°РјРёРєРµ Рё СЃС‚Р°РЅРґР°СЂС‚РЅС‹Рј РїРѕСЃР»РµСЂРѕРґРѕРІС‹Рј РІРёР·РёС‚Р°Рј', duration: 'Р”Рѕ РїРѕР»РЅРѕРіРѕ РєР»РёРЅРёС‡РµСЃРєРѕРіРѕ СЂР°Р·СЂРµС€РµРЅРёСЏ РѕСЃР»РѕР¶РЅРµРЅРёСЏ Рё СЃС‚Р°Р±РёР»РёР·Р°С†РёРё СЃРѕСЃС‚РѕСЏРЅРёСЏ', tests: ['РљР»РёРЅРёС‡РµСЃРєРёР№ РѕСЃРјРѕС‚СЂ Рё РІРёС‚Р°Р»СЊРЅС‹Рµ РїРѕРєР°Р·Р°С‚РµР»Рё', 'РћРђРљ, CRP РёР»Рё РєРѕР°РіСѓР»РѕРіСЂР°РјРјР° РїРѕ СЃРёС‚СѓР°С†РёРё', 'РЈР—Р РјР°С‚РєРё/РјРѕР»РѕС‡РЅС‹С… Р¶РµР»РµР·/С‚Р°Р·Р° РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј'] };
    case 'thrombosis':
      return { frequency: 'РќР° СЃС‚Р°СЂС‚Рµ Р»РµС‡РµРЅРёСЏ С‡Р°СЃС‚Рѕ, Р·Р°С‚РµРј РїРѕ РїСЂРѕС‚РѕРєРѕР»Сѓ Р°РЅС‚РёРєРѕР°РіСѓР»СЏС†РёРё', duration: 'РћР±С‹С‡РЅРѕ РЅРµ РјРµРЅРµРµ 6 РЅРµРґРµР»СЊ РїРѕСЃР»РµСЂРѕРґРѕРІРѕ Рё СЃСѓРјРјР°СЂРЅРѕ РЅРµ РјРµРЅРµРµ 3 РјРµСЃСЏС†РµРІ', tests: ['РљР»РёРЅРёС‡РµСЃРєР°СЏ РѕС†РµРЅРєР° СЃРёРјРїС‚РѕРјРѕРІ Р’РўР­', 'РљРѕРЅС‚СЂРѕР»СЊ Р°РЅС‚РёРєРѕР°РіСѓР»СЏС†РёРё РїРѕ СЃС…РµРјРµ Р»РµС‡РµРЅРёСЏ', 'РџРѕРІС‚РѕСЂРЅРѕРµ РґСѓРїР»РµРєСЃРЅРѕРµ РЈР—Р РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј'] };
    default:
      return { frequency: 'РџРѕ Р°РєСѓС€РµСЂСЃРєРѕРјСѓ СЂРёСЃРєСѓ, РѕР±С‹С‡РЅРѕ РєР°Р¶РґС‹Рµ 1-4 РЅРµРґРµР»Рё', duration: 'Р”Рѕ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ Рё РІ СЂР°РЅРЅРµРј РїРѕСЃР»РµСЂРѕРґРѕРІРѕРј РїРµСЂРёРѕРґРµ', tests: [getPrimaryDiagnosticStep(disease), 'РљРѕРЅС‚СЂРѕР»СЊ РєР»РёРЅРёС‡РµСЃРєРёС… СЃРёРјРїС‚РѕРјРѕРІ Рё РѕР±СЉРµРєС‚РёРІРЅРѕРіРѕ СЃС‚Р°С‚СѓСЃР°', ...buildObstetricsImaging(cluster).slice(0, 2)] };
  }
};

const buildObstetricsCases = (cluster: ObstetricsCluster, disease: Disease) => {
  switch (cluster) {
    case 'placenta':
      return [{ presentation: `Р‘РµСЂРµРјРµРЅРЅР°СЏ РїРѕСЃС‚СѓРїРёР»Р° СЃ Р¶Р°Р»РѕР±Р°РјРё, С‚РёРїРёС‡РЅС‹РјРё РґР»СЏ ${disease.name.toLowerCase()}, Рё СЂРёСЃРєРѕРј РјР°СЃСЃРёРІРЅРѕРіРѕ Р°РєСѓС€РµСЂСЃРєРѕРіРѕ РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЏ.`, findings: 'Р­РєСЃРїРµСЂС‚РЅРѕРµ РЈР—Р СѓС‚РѕС‡РЅРёР»Рѕ Р»РѕРєР°Р»РёР·Р°С†РёСЋ РїР»Р°С†РµРЅС‚С‹ Рё РїСЂРёР·РЅР°РєРё РІРѕР·РјРѕР¶РЅРѕР№ РёРЅРІР°Р·РёРё/РѕС‚СЃР»РѕР№РєРё, РѕС†РµРЅРµРЅРѕ СЃРѕСЃС‚РѕСЏРЅРёРµ РїР»РѕРґР°.', diagnosis: disease.name, treatment: 'РџСЂРѕРІРµРґРµРЅР° РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёСЏ, РїРѕРґРіРѕС‚РѕРІРєР° РєСЂРѕРІРё Рё РєРѕРјРїРѕРЅРµРЅС‚РѕРІ, СЃС„РѕСЂРјРёСЂРѕРІР°РЅ РїР»Р°РЅ СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЏ РјСѓР»СЊС‚РёРґРёСЃС†РёРїР»РёРЅР°СЂРЅРѕР№ РєРѕРјР°РЅРґРѕР№.', outcome: 'РњР°С‚РµСЂРёРЅСЃРєРёРµ Рё РїРµСЂРёРЅР°С‚Р°Р»СЊРЅС‹Рµ СЂРёСЃРєРё Р±С‹Р»Рё СЃРЅРёР¶РµРЅС‹ Р·Р° СЃС‡РµС‚ Р·Р°СЂР°РЅРµРµ СЃРїР»Р°РЅРёСЂРѕРІР°РЅРЅРѕР№ С‚Р°РєС‚РёРєРё Рё РіРѕС‚РѕРІРЅРѕСЃС‚Рё Рє РєСЂРѕРІРѕРїРѕС‚РµСЂРµ.' }];
    case 'preterm':
      return [{ presentation: `Р‘РµСЂРµРјРµРЅРЅР°СЏ РѕР±СЂР°С‚РёР»Р°СЃСЊ СЃ Р¶Р°Р»РѕР±Р°РјРё РЅР° ${getPrimarySymptom(disease).toLowerCase()} РґРѕ РґРѕРЅРѕС€РµРЅРЅРѕРіРѕ СЃСЂРѕРєР°.`, findings: 'Р¦РµСЂРІРёРєРѕРјРµС‚СЂРёСЏ, РѕС†РµРЅРєР° РѕР±РѕР»РѕС‡РµРє Рё СЃРѕСЃС‚РѕСЏРЅРёРµ РїР»РѕРґР° РїРѕР·РІРѕР»РёР»Рё СѓС‚РѕС‡РЅРёС‚СЊ РёСЃС‚РёРЅРЅС‹Р№ СЂРёСЃРє РїСЂРµР¶РґРµРІСЂРµРјРµРЅРЅС‹С… СЂРѕРґРѕРІ.', diagnosis: disease.name, treatment: 'РќР°Р·РЅР°С‡РµРЅС‹ РєРѕСЂС‚РёРєРѕСЃС‚РµСЂРѕРёРґС‹/С‚РѕРєРѕР»РёР·/Р°РЅС‚РёР±Р°РєС‚РµСЂРёР°Р»СЊРЅР°СЏ С‚РµСЂР°РїРёСЏ РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј Рё РѕСЂРіР°РЅРёР·РѕРІР°РЅ РґРёРЅР°РјРёС‡РµСЃРєРёР№ РєРѕРЅС‚СЂРѕР»СЊ.', outcome: 'РЈРґР°Р»РѕСЃСЊ Р»РёР±Рѕ Р±РµР·РѕРїР°СЃРЅРѕ РїСЂРѕР»РѕРЅРіРёСЂРѕРІР°С‚СЊ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ, Р»РёР±Рѕ СЃРІРѕРµРІСЂРµРјРµРЅРЅРѕ РїРµСЂРµР№С‚Рё Рє СЂРѕРґРѕСЂР°Р·СЂРµС€РµРЅРёСЋ РїСЂРё СѓС…СѓРґС€РµРЅРёРё СЃРёС‚СѓР°С†РёРё.' }];
    case 'postpartum':
      return [{ presentation: `Р’ РїРѕСЃР»РµСЂРѕРґРѕРІРѕРј РїРµСЂРёРѕРґРµ РїР°С†РёРµРЅС‚РєР° РїСЂРµРґСЉСЏРІРёР»Р° Р¶Р°Р»РѕР±С‹ РЅР° ${getPrimarySymptom(disease).toLowerCase()} Рё СѓС…СѓРґС€РµРЅРёРµ РѕР±С‰РµРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ.`, findings: 'РћСЃРјРѕС‚СЂ, Р»Р°Р±РѕСЂР°С‚РѕСЂРЅС‹Рµ РїРѕРєР°Р·Р°С‚РµР»Рё Рё С†РµР»РµРІРѕРµ РЈР—Р РїРѕР·РІРѕР»РёР»Рё Р»РѕРєР°Р»РёР·РѕРІР°С‚СЊ РёСЃС‚РѕС‡РЅРёРє РѕСЃР»РѕР¶РЅРµРЅРёСЏ.', diagnosis: disease.name, treatment: 'РџСЂРѕРІРµРґРµРЅР° РјРµРґРёРєР°РјРµРЅС‚РѕР·РЅР°СЏ РєРѕСЂСЂРµРєС†РёСЏ Рё, РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё, РёРЅРІР°Р·РёРІРЅРѕРµ РІРјРµС€Р°С‚РµР»СЊСЃС‚РІРѕ Р±РµР· Р·Р°РґРµСЂР¶РєРё.', outcome: 'РќР° С„РѕРЅРµ Р»РµС‡РµРЅРёСЏ РґРѕСЃС‚РёРіРЅСѓС‚Р° СЃС‚Р°Р±РёР»РёР·Р°С†РёСЏ СЃРѕСЃС‚РѕСЏРЅРёСЏ, СЃС„РѕСЂРјРёСЂРѕРІР°РЅ РїР»Р°РЅ СЂР°РЅРЅРµРіРѕ РїРѕСЃР»РµСЂРѕРґРѕРІРѕРіРѕ РЅР°Р±Р»СЋРґРµРЅРёСЏ.' }];
    default:
      return [{ presentation: `РџР°С†РёРµРЅС‚РєР° РѕР±СЂР°С‚РёР»Р°СЃСЊ СЃ Р¶Р°Р»РѕР±Р°РјРё РЅР° ${getPrimarySymptom(disease).toLowerCase()} Рё С‚РёРїРёС‡РЅСѓСЋ РґР»СЏ ${disease.name.toLowerCase()} РєР»РёРЅРёС‡РµСЃРєСѓСЋ СЃРёРјРїС‚РѕРјР°С‚РёРєСѓ.`, findings: `${getPrimaryDiagnosticStep(disease)}. Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅР°СЏ РІРёР·СѓР°Р»РёР·Р°С†РёСЏ РїРѕРґС‚РІРµСЂРґРёР»Р° РїСЂРёР·РЅР°РєРё Р·Р°Р±РѕР»РµРІР°РЅРёСЏ Р±РµР· Р°Р»СЊС‚РµСЂРЅР°С‚РёРІРЅРѕР№ РїСЂРёС‡РёРЅС‹ СЃРёРјРїС‚РѕРјРѕРІ.`, diagnosis: disease.name, treatment: `РќР°С‡Р°С‚Р° С‚РµСЂР°РїРёСЏ: ${getPrimaryTreatment(disease)}. РўР°РєС‚РёРєР° СѓС‚РѕС‡РЅРµРЅР° СЃ СѓС‡РµС‚РѕРј РєР»РёРЅРёС‡РµСЃРєРѕР№ РґРёРЅР°РјРёРєРё.`, outcome: 'РќР° С„РѕРЅРµ РЅР°Р±Р»СЋРґРµРЅРёСЏ СЃРѕСЃС‚РѕСЏРЅРёРµ СЃС‚Р°Р±РёР»РёР·РёСЂРѕРІР°РЅРѕ, Р°РєСѓС€РµСЂСЃРєР°СЏ С‚Р°РєС‚РёРєР° РІС‹РїРѕР»РЅРµРЅР° СЃРІРѕРµРІСЂРµРјРµРЅРЅРѕ.' }];
  }
};

const buildGynecologyImaging = (cluster: GynecologyCluster) => {
  switch (cluster) {
    case 'endometriosis':
      return [
        'РўСЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅРѕРµ РЈР—Р РѕСЂРіР°РЅРѕРІ РјР°Р»РѕРіРѕ С‚Р°Р·Р° СЃ РїСЂРёС†РµР»СЊРЅРѕР№ РѕС†РµРЅРєРѕР№ СЏРёС‡РЅРёРєРѕРІ, РјРёРѕРјРµС‚СЂРёСЏ Рё РїРѕР·Р°РґРёРјР°С‚РѕС‡РЅРѕРіРѕ РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІР°.',
        'РњР Рў РјР°Р»РѕРіРѕ С‚Р°Р·Р° РїСЂРё РіР»СѓР±РѕРєРѕРј РёРЅС„РёР»СЊС‚СЂР°С‚РёРІРЅРѕРј РїСЂРѕС†РµСЃСЃРµ, СЂРµС‚СЂРѕС†РµСЂРІРёРєР°Р»СЊРЅС‹С… РѕС‡Р°РіР°С… РёР»Рё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РІРѕРІР»РµС‡РµРЅРёРµ РєРёС€РµС‡РЅРёРєР°/РјРѕС‡РµРІРѕРіРѕ РїСѓР·С‹СЂСЏ.',
        'Р­РєСЃРїРµСЂС‚РЅРѕРµ РЈР—Р РІ РґРёРЅР°РјРёРєРµ РґР»СЏ РѕС†РµРЅРєРё РѕС‚РІРµС‚Р° РЅР° РіРѕСЂРјРѕРЅР°Р»СЊРЅСѓСЋ С‚РµСЂР°РїРёСЋ Рё СЂРёСЃРєР° СЂРµС†РёРґРёРІР°.',
      ];
    case 'uterine':
      return [
        'РўСЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅРѕРµ РЈР—Р РєР°Рє РїРµСЂРІС‹Р№ РјРµС‚РѕРґ РѕС†РµРЅРєРё СЌРЅРґРѕРјРµС‚СЂРёСЏ, РјРёРѕРјРµС‚СЂРёСЏ Рё РїРѕР»РѕСЃС‚Рё РјР°С‚РєРё.',
        'РЎРѕРЅРѕРіРёСЃС‚РµСЂРѕРіСЂР°С„РёСЏ РёР»Рё РіРёСЃС‚РµСЂРѕСЃРєРѕРїРёСЏ РїСЂРё РѕС‡Р°РіРѕРІРѕР№ РІРЅСѓС‚СЂРёРјР°С‚РѕС‡РЅРѕР№ РїР°С‚РѕР»РѕРіРёРё.',
        'РњР Рў РјР°Р»РѕРіРѕ С‚Р°Р·Р° РїСЂРё РЅРµСЏСЃРЅРѕР№ СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕР№ РєР°СЂС‚РёРЅРµ РёР»Рё РїР»Р°РЅРёСЂРѕРІР°РЅРёРё РѕСЂРіР°РЅРѕСЃРѕС…СЂР°РЅСЏСЋС‰РµРіРѕ Р»РµС‡РµРЅРёСЏ.',
      ];
    case 'adnexal':
      return [
        'РўСЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅРѕРµ РЈР—Р СЃ РѕРїРёСЃР°РЅРёРµРј РјРѕСЂС„РѕР»РѕРіРёРё РѕР±СЂР°Р·РѕРІР°РЅРёСЏ РїРѕ СЃС‚Р°РЅРґР°СЂС‚Р°Рј IOTA.',
        'Р¦РІРµС‚РѕРІРѕР№ РґРѕРїРїР»РµСЂ РґР»СЏ РѕС†РµРЅРєРё РїРµСЂС„СѓР·РёРё, РїСЂРёР·РЅР°РєРѕРІ РїРµСЂРµРєСЂСѓС‚Р° Рё СЃРѕР»РёРґРЅС‹С… РєРѕРјРїРѕРЅРµРЅС‚РѕРІ.',
        'РњР Рў РїСЂРё СЃРѕРјРЅРёС‚РµР»СЊРЅРѕР№ СЃС‚СЂСѓРєС‚СѓСЂРµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ РёР»Рё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё РґРѕРѕРїРµСЂР°С†РёРѕРЅРЅРѕРіРѕ СѓС‚РѕС‡РЅРµРЅРёСЏ.',
      ];
    case 'infection':
      return [
        'РЈР—Р РјР°Р»РѕРіРѕ С‚Р°Р·Р° РґР»СЏ РёСЃРєР»СЋС‡РµРЅРёСЏ С‚СѓР±РѕРѕРІР°СЂРёР°Р»СЊРЅРѕРіРѕ Р°Р±СЃС†РµСЃСЃР°, РіРёРґСЂРѕСЃР°Р»СЊРїРёРЅРєСЃР° Рё СЃРІРѕР±РѕРґРЅРѕР№ Р¶РёРґРєРѕСЃС‚Рё.',
        'РћСЃРјРѕС‚СЂ РІ Р·РµСЂРєР°Р»Р°С… Рё Р»Р°Р±РѕСЂР°С‚РѕСЂРЅР°СЏ РІРµСЂРёС„РёРєР°С†РёСЏ РІРѕР·Р±СѓРґРёС‚РµР»СЏ РѕР±СЏР·Р°С‚РµР»СЊРЅС‹ РґРѕ РѕС†РµРЅРєРё РѕС‚РІРµС‚Р° РЅР° Р»РµС‡РµРЅРёРµ.',
        'РџСЂРё РѕСЃР»РѕР¶РЅРµРЅРЅРѕРј С‚РµС‡РµРЅРёРё РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РїРѕРІС‚РѕСЂРЅРѕРµ РЈР—Р РґР»СЏ РєРѕРЅС‚СЂРѕР»СЏ СЂРµРіСЂРµСЃСЃР° РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹С… РёР·РјРµРЅРµРЅРёР№.',
      ];
    case 'urogyne':
      return [
        'РўСЂР°РЅСЃР»Р°Р±РёР»СЊРЅРѕРµ/С‚СЂР°РЅСЃРїРµСЂРёРЅРµР°Р»СЊРЅРѕРµ РёР»Рё С‚СЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅРѕРµ РЈР—Р С‚Р°Р·РѕРІРѕРіРѕ РґРЅР° РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј.',
        'РЈР—Р РјРѕС‡РµРІРѕРіРѕ РїСѓР·С‹СЂСЏ СЃ РѕС†РµРЅРєРѕР№ РѕСЃС‚Р°С‚РѕС‡РЅРѕР№ РјРѕС‡Рё Рё РїРѕРґРІРёР¶РЅРѕСЃС‚Рё СѓСЂРµС‚СЂС‹.',
        'РЈСЂРѕРґРёРЅР°РјРёС‡РµСЃРєР°СЏ Рё С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅР°СЏ РѕС†РµРЅРєР° РґРѕРїРѕР»РЅСЏСЋС‚ РІРёР·СѓР°Р»РёР·Р°С†РёСЋ РїСЂРё СЃРјРµС€Р°РЅРЅРѕР№ СЃРёРјРїС‚РѕРјР°С‚РёРєРµ.',
      ];
    case 'fertility':
      return [
        'Р‘Р°Р·РѕРІРѕРµ РЈР—Р РЅР° 2-5 РґРµРЅСЊ С†РёРєР»Р° РґР»СЏ РїРѕРґСЃС‡РµС‚Р° Р°РЅС‚СЂР°Р»СЊРЅС‹С… С„РѕР»Р»РёРєСѓР»РѕРІ Рё РѕС†РµРЅРєРё РїРѕР»РѕСЃС‚Рё РјР°С‚РєРё.',
        'Р¤РѕР»Р»РёРєСѓР»РѕРјРµС‚СЂРёСЏ РґР»СЏ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ РѕРІСѓР»СЏС†РёРё Рё РІС‹Р±РѕСЂР° РІСЂРµРјРµРЅРё РІРјРµС€Р°С‚РµР»СЊСЃС‚РІР°.',
        'Р“РЎР“, Р­С…Рѕ-Р“РЎР“ РёР»Рё Р»Р°РїР°СЂРѕСЃРєРѕРїРёСЏ РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј РґР»СЏ СѓС‚РѕС‡РЅРµРЅРёСЏ С‚СЂСѓР±РЅРѕРіРѕ С„Р°РєС‚РѕСЂР°.',
      ];
    case 'endocrine':
      return [
        'РЈР—Р РјР°Р»РѕРіРѕ С‚Р°Р·Р° РґР»СЏ РѕС†РµРЅРєРё РѕРІР°СЂРёР°Р»СЊРЅРѕР№ РјРѕСЂС„РѕР»РѕРіРёРё, С‚РѕР»С‰РёРЅС‹ СЌРЅРґРѕРјРµС‚СЂРёСЏ Рё РєРѕСЃРІРµРЅРЅС‹С… РїСЂРёР·РЅР°РєРѕРІ Р°РЅРѕРІСѓР»СЏС†РёРё.',
        'Р¤РѕР»Р»РёРєСѓР»РѕРјРµС‚СЂРёСЏ РїСЂРё РЅР°СЂСѓС€РµРЅРёСЏС… С†РёРєР»Р° Рё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° Р°РЅРѕРІСѓР»СЏС†РёСЋ.',
        'РњР Рў РіРёРїРѕС„РёР·Р° РёР»Рё РґСЂСѓРіРёРµ РјРµС‚РѕРґС‹ РІРёР·СѓР°Р»РёР·Р°С†РёРё РїСЂРёРјРµРЅСЏСЋС‚СЃСЏ РїРѕ СЌРЅРґРѕРєСЂРёРЅРЅС‹Рј РїРѕРєР°Р·Р°РЅРёСЏРј, Р° РЅРµ СЂСѓС‚РёРЅРЅРѕ.',
      ];
    case 'oncology':
      return [
        'Р­РєСЃРїРµСЂС‚РЅРѕРµ РЈР—Р СЃ РґРѕРїРїР»РµСЂРѕРј РґР»СЏ РѕРїРёСЃР°РЅРёСЏ СЂР°Р·РјРµСЂРѕРІ РѕРїСѓС…РѕР»Рё, РёРЅРІР°Р·РёРё Рё РїРѕРґРѕР·СЂРёС‚РµР»СЊРЅС‹С… СѓР·Р»РѕРІ.',
        'РњР Рў РјР°Р»РѕРіРѕ С‚Р°Р·Р° РґР»СЏ Р»РѕРєР°Р»СЊРЅРѕРіРѕ СЃС‚Р°РґРёСЂРѕРІР°РЅРёСЏ.',
        'РљРў/РџР­Рў-РљРў РёСЃРїРѕР»СЊР·СѓСЋС‚СЃСЏ РґР»СЏ РѕС†РµРЅРєРё СЂР°СЃРїСЂРѕСЃС‚СЂР°РЅРµРЅРЅРѕСЃС‚Рё Рё РїР»Р°РЅРёСЂРѕРІР°РЅРёСЏ РѕРЅРєРѕР»РѕРіРёС‡РµСЃРєРѕР№ С‚Р°РєС‚РёРєРё.',
      ];
    case 'breast':
      return [
        'РЈР—Р РјРѕР»РѕС‡РЅС‹С… Р¶РµР»РµР· СЃ РѕС†РµРЅРєРѕР№ С„РѕСЂРјС‹, РєРѕРЅС‚СѓСЂРѕРІ, СЌС…РѕСЃС‚СЂСѓРєС‚СѓСЂС‹ Рё РїРѕРґРјС‹С€РµС‡РЅС‹С… Р»РёРјС„РѕСѓР·Р»РѕРІ.',
        'РњР°РјРјРѕРіСЂР°С„РёСЏ РёР»Рё С‚РѕРјРѕСЃРёРЅС‚РµР· РїРѕ РІРѕР·СЂР°СЃС‚Сѓ Рё РѕРЅРєРѕСЂРёСЃРєСѓ.',
        'РњР Рў РјРѕР»РѕС‡РЅС‹С… Р¶РµР»РµР· РїСЂРё РІС‹СЃРѕРєРѕР№ РїР»РѕС‚РЅРѕСЃС‚Рё С‚РєР°РЅРё, РіРµРЅРµС‚РёС‡РµСЃРєРѕРј СЂРёСЃРєРµ РёР»Рё РЅРµСЏСЃРЅРѕР№ РєР°СЂС‚РёРЅРµ.',
      ];
    case 'menopause':
      return [
        'РўСЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅРѕРµ РЈР—Р РґР»СЏ РѕС†РµРЅРєРё С‚РѕР»С‰РёРЅС‹ СЌРЅРґРѕРјРµС‚СЂРёСЏ, СЂР°Р·РјРµСЂРѕРІ РјР°С‚РєРё Рё СЃС‚СЂСѓРєС‚СѓСЂС‹ СЏРёС‡РЅРёРєРѕРІ.',
        'РџСЂРё РєСЂРѕРІСЏРЅРёСЃС‚С‹С… РІС‹РґРµР»РµРЅРёСЏС… РѕР±СЏР·Р°С‚РµР»СЊРЅР° РїСЂРёС†РµР»СЊРЅР°СЏ РѕС†РµРЅРєР° СЌРЅРґРѕРјРµС‚СЂРёСЏ Рё РїРѕР»РѕСЃС‚Рё РјР°С‚РєРё.',
        'Р”РµРЅСЃРёС‚РѕРјРµС‚СЂРёСЏ Рё РјРµС‚Р°Р±РѕР»РёС‡РµСЃРєРёР№ СЃРєСЂРёРЅРёРЅРі РґРѕРїРѕР»РЅСЏСЋС‚ РіРёРЅРµРєРѕР»РѕРіРёС‡РµСЃРєРѕРµ РІРµРґРµРЅРёРµ, РЅРѕ РЅРµ Р·Р°РјРµРЅСЏСЋС‚ РЈР—Р.',
      ];
    case 'vulvar':
      return [
        'РћСЃРЅРѕРІРЅРѕР№ РјРµС‚РѕРґ РѕС†РµРЅРєРё вЂ” РєР»РёРЅРёС‡РµСЃРєРёР№ РѕСЃРјРѕС‚СЂ Рё РІСѓР»СЊРІРѕСЃРєРѕРїРёСЏ; РЈР—Р РјСЏРіРєРёС… С‚РєР°РЅРµР№ РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ РѕРіСЂР°РЅРёС‡РµРЅРЅРѕ.',
        'РЈР—Р РїСЂРёРјРµРЅСЏСЋС‚ РїСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РєРёСЃС‚РѕР·РЅС‹Рµ, РёРЅС„РёР»СЊС‚СЂР°С‚РёРІРЅС‹Рµ РёР»Рё Р°Р±СЃС†РµРґРёСЂСѓСЋС‰РёРµ РёР·РјРµРЅРµРЅРёСЏ РІСѓР»СЊРІС‹.',
        'Р‘РёРѕРїСЃРёСЏ РѕСЃС‚Р°РµС‚СЃСЏ РєР»СЋС‡РµРІС‹Рј РјРµС‚РѕРґРѕРј РІРµСЂРёС„РёРєР°С†РёРё РїСЂРё С…СЂРѕРЅРёС‡РµСЃРєРёС… РґРµСЂРјР°С‚РѕР·Р°С… Рё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РЅРµРѕРїР»Р°Р·РёСЋ.',
      ];
    default:
      return [
        'РўСЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅРѕРµ РЈР—Р РѕСЂРіР°РЅРѕРІ РјР°Р»РѕРіРѕ С‚Р°Р·Р° РєР°Рє Р±Р°Р·РѕРІС‹Р№ РјРµС‚РѕРґ РІРёР·СѓР°Р»РёР·Р°С†РёРё.',
        'РўСЂР°РЅСЃР°Р±РґРѕРјРёРЅР°Р»СЊРЅРѕРµ СЃРєР°РЅРёСЂРѕРІР°РЅРёРµ РґРѕРїРѕР»РЅСЏРµС‚ РѕС†РµРЅРєСѓ РїСЂРё РєСЂСѓРїРЅС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёСЏС… Рё РѕРіСЂР°РЅРёС‡РµРЅРЅРѕР№ РІРёР·СѓР°Р»РёР·Р°С†РёРё.',
      ];
  }
};

const buildGynecologyDifferential = (cluster: GynecologyCluster) => {
  switch (cluster) {
    case 'endometriosis':
      return ['РђРґРµРЅРѕРјРёРѕР·, С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅС‹Рµ РєРёСЃС‚С‹ Рё РјРёРѕРјР° РјР°С‚РєРё.', 'РҐСЂРѕРЅРёС‡РµСЃРєРёРµ РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рµ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ РјР°Р»РѕРіРѕ С‚Р°Р·Р°.', 'РЎРёРЅРґСЂРѕРј С…СЂРѕРЅРёС‡РµСЃРєРѕР№ С‚Р°Р·РѕРІРѕР№ Р±РѕР»Рё РёРЅРѕР№ СЌС‚РёРѕР»РѕРіРёРё, РІРєР»СЋС‡Р°СЏ СѓСЂРѕР»РѕРіРёС‡РµСЃРєРёРµ Рё РєРёС€РµС‡РЅС‹Рµ РїСЂРёС‡РёРЅС‹.'];
    case 'uterine':
      return ['РџРѕР»РёРїС‹, РіРёРїРµСЂРїР»Р°Р·РёСЏ Рё СЂР°Рє СЌРЅРґРѕРјРµС‚СЂРёСЏ.', 'РџРѕРґСЃР»РёР·РёСЃС‚Р°СЏ РјРёРѕРјР°, Р°РґРµРЅРѕРјРёРѕР· Рё РѕС‡Р°РіРѕРІР°СЏ РІРЅСѓС‚СЂРёРјР°С‚РѕС‡РЅР°СЏ РїР°С‚РѕР»РѕРіРёСЏ.', 'Р‘РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ Рё Р°РєСѓС€РµСЂСЃРєРёРµ РїСЂРёС‡РёРЅС‹ РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЏ Сѓ Р¶РµРЅС‰РёРЅ СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅРѕРіРѕ РІРѕР·СЂР°СЃС‚Р°.'];
    case 'adnexal':
      return ['Р¤СѓРЅРєС†РёРѕРЅР°Р»СЊРЅС‹Рµ РєРёСЃС‚С‹, СЌРЅРґРѕРјРµС‚СЂРёРѕРјР° Рё РґРѕР±СЂРѕРєР°С‡РµСЃС‚РІРµРЅРЅС‹Рµ РѕРїСѓС…РѕР»Рё СЏРёС‡РЅРёРєР°.', 'Р’РЅРµРјР°С‚РѕС‡РЅР°СЏ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ Рё РѕСЃС‚СЂС‹Рµ С…РёСЂСѓСЂРіРёС‡РµСЃРєРёРµ СЃРѕСЃС‚РѕСЏРЅРёСЏ.', 'Р—Р»РѕРєР°С‡РµСЃС‚РІРµРЅРЅС‹Рµ РѕРїСѓС…РѕР»Рё СЏРёС‡РЅРёРєР° Рё РјРµС‚Р°СЃС‚Р°С‚РёС‡РµСЃРєРёРµ РїРѕСЂР°Р¶РµРЅРёСЏ.'];
    case 'infection':
      return ['РќРµСЃРїРµС†РёС„РёС‡РµСЃРєРёР№ РІР°РіРёРЅРёС‚ Рё РРџРџРџ СЃРѕ СЃС…РѕРґРЅРѕР№ РєР»РёРЅРёРєРѕР№.', 'РћСЃС‚СЂС‹Р№ Р°РїРїРµРЅРґРёС†РёС‚, СѓСЂРѕР»РѕРіРёС‡РµСЃРєР°СЏ РёРЅС„РµРєС†РёСЏ Рё РєРёС€РµС‡РЅС‹Рµ РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рµ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ.', 'РћРїСѓС…РѕР»РµРІС‹Рµ Рё РЅРµРёРЅС„РµРєС†РёРѕРЅРЅС‹Рµ РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рµ РїСЂРѕС†РµСЃСЃС‹ РјР°Р»РѕРіРѕ С‚Р°Р·Р°.'];
    case 'urogyne':
      return ['РЎС‚СЂРµСЃСЃРѕРІРѕРµ, СѓСЂРіРµРЅС‚РЅРѕРµ Рё СЃРјРµС€Р°РЅРЅРѕРµ РЅРµРґРµСЂР¶Р°РЅРёРµ РјРѕС‡Рё.', 'РџСЂРѕР»Р°РїСЃ С‚Р°Р·РѕРІС‹С… РѕСЂРіР°РЅРѕРІ СЂР°Р·РЅРѕРіРѕ РєРѕРјРїР°СЂС‚РјРµРЅС‚Р°.', 'РРЅС‚РµСЂСЃС‚РёС†РёР°Р»СЊРЅС‹Р№ С†РёСЃС‚РёС‚, РЅРµР№СЂРѕРіРµРЅРЅС‹Рµ РЅР°СЂСѓС€РµРЅРёСЏ Рё РѕР±СЃС‚СЂСѓРєС‚РёРІРЅР°СЏ СѓСЂРѕР»РѕРіРёС‡РµСЃРєР°СЏ РїР°С‚РѕР»РѕРіРёСЏ.'];
    case 'fertility':
      return ['РўСЂСѓР±РЅС‹Р№, РѕРІСѓР»СЏС‚РѕСЂРЅС‹Р№, РјР°С‚РѕС‡РЅС‹Р№ Рё РјСѓР¶СЃРєРѕР№ С„Р°РєС‚РѕСЂ Р±РµСЃРїР»РѕРґРёСЏ.', 'РЎРЅРёР¶РµРЅРёРµ РѕРІР°СЂРёР°Р»СЊРЅРѕРіРѕ СЂРµР·РµСЂРІР° Рё СЌРЅРґРѕРєСЂРёРЅРЅР°СЏ РґРёСЃС„СѓРЅРєС†РёСЏ.', 'Р“РµРЅРµС‚РёС‡РµСЃРєРёРµ РїСЂРёС‡РёРЅС‹, Р°РЅРѕРјР°Р»РёРё РјР°С‚РєРё Рё РїСЂРёРІС‹С‡РЅРѕРµ РЅРµРІС‹РЅР°С€РёРІР°РЅРёРµ.'];
    case 'endocrine':
      return ['РЎРџРљРЇ, РіРёРїРµСЂРїСЂРѕР»Р°РєС‚РёРЅРµРјРёСЏ Рё РіРёРїРѕС‚Р°Р»Р°РјРёС‡РµСЃРєР°СЏ РґРёСЃС„СѓРЅРєС†РёСЏ.', 'РџСЂРµР¶РґРµРІСЂРµРјРµРЅРЅР°СЏ РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕСЃС‚СЊ СЏРёС‡РЅРёРєРѕРІ Рё РґСЂСѓРіРёРµ С„РѕСЂРјС‹ РіРёРїРѕРіРѕРЅР°РґРёР·РјР°.', 'РЎС‚СЂСѓРєС‚СѓСЂРЅР°СЏ РІРЅСѓС‚СЂРёРјР°С‚РѕС‡РЅР°СЏ РїР°С‚РѕР»РѕРіРёСЏ РїСЂРё РЅР°СЂСѓС€РµРЅРёСЏС… С†РёРєР»Р°.'];
    case 'oncology':
      return ['Р”РѕР±СЂРѕРєР°С‡РµСЃС‚РІРµРЅРЅС‹Рµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ, РёРјРёС‚РёСЂСѓСЋС‰РёРµ РѕРїСѓС…РѕР»СЊ.', 'РџСЂРµРґСЂР°РєРѕРІС‹Рµ РёР·РјРµРЅРµРЅРёСЏ Рё РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рµ РїСЂРѕС†РµСЃСЃС‹ СЃРѕ СЃС…РѕРґРЅРѕР№ РІРёР·СѓР°Р»РёР·Р°С†РёРµР№.', 'РњРµС‚Р°СЃС‚Р°С‚РёС‡РµСЃРєРёРµ РїРѕСЂР°Р¶РµРЅРёСЏ Рё СЃРёРЅС…СЂРѕРЅРЅС‹Рµ РѕРїСѓС…РѕР»Рё РіРµРЅРёС‚Р°Р»РёР№ РёР»Рё РјРѕР»РѕС‡РЅРѕР№ Р¶РµР»РµР·С‹.'];
    case 'breast':
      return ['Р¤РёР±СЂРѕР°РґРµРЅРѕРјР°, РєРёСЃС‚С‹, РјР°СЃС‚РѕРїР°С‚РёСЏ Рё РїРѕСЃС‚Р»Р°РєС‚Р°С†РёРѕРЅРЅС‹Рµ РёР·РјРµРЅРµРЅРёСЏ.', 'Р’РѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рµ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ РјРѕР»РѕС‡РЅРѕР№ Р¶РµР»РµР·С‹.', 'Р—Р»РѕРєР°С‡РµСЃС‚РІРµРЅРЅС‹Рµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ Рё РІРЅСѓС‚СЂРёРїСЂРѕС‚РѕРєРѕРІС‹Рµ РїСЂРѕС†РµСЃСЃС‹.'];
    case 'menopause':
      return ['Р¤РёР·РёРѕР»РѕРіРёС‡РµСЃРєР°СЏ РјРµРЅРѕРїР°СѓР·Р° Рё СЏС‚СЂРѕРіРµРЅРЅС‹Р№ РіРёРїРѕСЌСЃС‚СЂРѕРіРµРЅРёР·Рј.', 'Р“РёРїРµСЂРїР»Р°Р·РёСЏ РёР»Рё СЂР°Рє СЌРЅРґРѕРјРµС‚СЂРёСЏ РїСЂРё РєСЂРѕРІСЏРЅРёСЃС‚С‹С… РІС‹РґРµР»РµРЅРёСЏС….', 'Р­РЅРґРѕРєСЂРёРЅРЅС‹Рµ, СѓСЂРѕР»РѕРіРёС‡РµСЃРєРёРµ Рё РґРµСЂРјР°С‚РѕР»РѕРіРёС‡РµСЃРєРёРµ РїСЂРёС‡РёРЅС‹ СѓСЂРѕРіРµРЅРёС‚Р°Р»СЊРЅС‹С… СЃРёРјРїС‚РѕРјРѕРІ.'];
    case 'vulvar':
      return ['РРЅС„РµРєС†РёРё, РєРѕРЅС‚Р°РєС‚РЅС‹Р№ РґРµСЂРјР°С‚РёС‚ Рё С…СЂРѕРЅРёС‡РµСЃРєРёРµ РґРµСЂРјР°С‚РѕР·С‹.', 'VIN, СЂР°Рє РІСѓР»СЊРІС‹ Рё РґСЂСѓРіРёРµ РЅРµРѕРїР»Р°СЃС‚РёС‡РµСЃРєРёРµ РїСЂРѕС†РµСЃСЃС‹.', 'РќРµР№СЂРѕРїР°С‚РёС‡РµСЃРєР°СЏ Р±РѕР»СЊ Рё С‚Р°Р·РѕРІР°СЏ РґРёСЃС„СѓРЅРєС†РёСЏ.'];
    default:
      return ['Р¤СѓРЅРєС†РёРѕРЅР°Р»СЊРЅС‹Рµ Рё РѕСЂРіР°РЅРёС‡РµСЃРєРёРµ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ РѕСЂРіР°РЅРѕРІ РјР°Р»РѕРіРѕ С‚Р°Р·Р°.', 'Р’РѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рµ Рё РЅРµРѕРїР»Р°СЃС‚РёС‡РµСЃРєРёРµ РїСЂРѕС†РµСЃСЃС‹.', 'РљРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅР°СЏ РіРёРЅРµРєРѕР»РѕРіРёС‡РµСЃРєР°СЏ Рё СЌРєСЃС‚СЂР°РіРµРЅРёС‚Р°Р»СЊРЅР°СЏ РїР°С‚РѕР»РѕРіРёСЏ.'];
  }
};

const buildGynecologyProtocols = (cluster: GynecologyCluster): UltrasoundProtocol[] => {
  switch (cluster) {
    case 'breast':
      return [
        {
          method: 'СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕРµ РёСЃСЃР»РµРґРѕРІР°РЅРёРµ РјРѕР»РѕС‡РЅС‹С… Р¶РµР»С‘Р·',
          indications: ['РћС‡Р°РіРѕРІС‹Рµ РёР·РјРµРЅРµРЅРёСЏ', 'РњР°СЃС‚Р°Р»РіРёСЏ', 'Р”РёРЅР°РјРёС‡РµСЃРєРѕРµ РЅР°Р±Р»СЋРґРµРЅРёРµ РїРѕСЃР»Рµ Р»РµС‡РµРЅРёСЏ'],
          preparation: 'РћРїС‚РёРјР°Р»СЊРЅРѕ РІС‹РїРѕР»РЅСЏС‚СЊ РІ РїРµСЂРІСѓСЋ С„Р°Р·Сѓ С†РёРєР»Р° Сѓ РјРµРЅСЃС‚СЂСѓРёСЂСѓСЋС‰РёС… РїР°С†РёРµРЅС‚РѕРє',
        },
        {
          method: 'РґРѕРїРїР»РµСЂРѕРІСЃРєРѕРµ РєР°СЂС‚РёСЂРѕРІР°РЅРёРµ',
          indications: ['РћС†РµРЅРєР° СЃРѕР»РёРґРЅРѕРіРѕ РєРѕРјРїРѕРЅРµРЅС‚Р°', 'Р”РёС„С„РµСЂРµРЅС†РёР°Р»СЊРЅР°СЏ РґРёР°РіРЅРѕСЃС‚РёРєР° СѓР·Р»РѕРІС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёР№'],
          preparation: 'Р’С‹РїРѕР»РЅСЏРµС‚СЃСЏ РєР°Рє С‡Р°СЃС‚СЊ СЃС‚Р°РЅРґР°СЂС‚РЅРѕРіРѕ РЈР—Р РјРѕР»РѕС‡РЅС‹С… Р¶РµР»С‘Р·',
        },
      ];
    case 'urogyne':
      return [
        {
          method: 'С‚СЂР°РЅСЃР°Р±РґРѕРјРёРЅР°Р»СЊРЅРѕРµ',
          indications: ['РћС†РµРЅРєР° РјРѕС‡РµРІРѕРіРѕ РїСѓР·С‹СЂСЏ', 'РР·РјРµСЂРµРЅРёРµ РѕСЃС‚Р°С‚РѕС‡РЅРѕР№ РјРѕС‡Рё', 'РЎРєСЂРёРЅРёРЅРі СЃРѕРїСѓС‚СЃС‚РІСѓСЋС‰РµР№ РїР°С‚РѕР»РѕРіРёРё'],
          preparation: 'РЈРјРµСЂРµРЅРЅРѕ РЅР°РїРѕР»РЅРµРЅРЅС‹Р№ РјРѕС‡РµРІРѕР№ РїСѓР·С‹СЂСЊ',
        },
        {
          method: 'С‚СЂР°РЅСЃРїРµСЂРёРЅРµР°Р»СЊРЅРѕРµ',
          indications: ['РћС†РµРЅРєР° С‚Р°Р·РѕРІРѕРіРѕ РґРЅР°', 'РџРѕРґРІРёР¶РЅРѕСЃС‚СЊ СѓСЂРµС‚СЂС‹', 'РџСЂРѕР»Р°РїСЃ С‚Р°Р·РѕРІС‹С… РѕСЂРіР°РЅРѕРІ'],
          preparation: 'РСЃСЃР»РµРґРѕРІР°РЅРёРµ РІ РїРѕРєРѕРµ Рё РїСЂРё РїСЂРѕР±Рµ Р’Р°Р»СЊСЃР°Р»СЊРІС‹',
        },
      ];
    case 'vulvar':
      return [
        {
          method: 'СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕРµ РёСЃСЃР»РµРґРѕРІР°РЅРёРµ РјСЏРіРєРёС… С‚РєР°РЅРµР№',
          indications: ['РљРёСЃС‚РѕР·РЅС‹Рµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ РІСѓР»СЊРІС‹', 'РџРѕРґРѕР·СЂРµРЅРёРµ РЅР° Р°Р±СЃС†РµСЃСЃ', 'РћС†РµРЅРєР° РёРЅС„РёР»СЊС‚СЂР°С‚Р°'],
          preparation: 'РЎРїРµС†РёР°Р»СЊРЅР°СЏ РїРѕРґРіРѕС‚РѕРІРєР° РЅРµ С‚СЂРµР±СѓРµС‚СЃСЏ',
        },
      ];
    case 'fertility':
      return [
        {
          method: 'С‚СЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅРѕРµ',
          indications: ['Р‘Р°Р·РѕРІР°СЏ РѕС†РµРЅРєР° СЏРёС‡РЅРёРєРѕРІ Рё СЌРЅРґРѕРјРµС‚СЂРёСЏ', 'РџРѕРґСЃС‡С‘С‚ Р°РЅС‚СЂР°Р»СЊРЅС‹С… С„РѕР»Р»РёРєСѓР»РѕРІ', 'Р¤РѕР»Р»РёРєСѓР»РѕРјРµС‚СЂРёСЏ'],
          preparation: 'РћРїС‚РёРјР°Р»СЊРЅРѕ РЅР° 2-5 РґРµРЅСЊ С†РёРєР»Р° РёР»Рё РїРѕ РїСЂРѕС‚РѕРєРѕР»Сѓ Р’Р Рў',
        },
        {
          method: 'С‚СЂР°РЅСЃР°Р±РґРѕРјРёРЅР°Р»СЊРЅРѕРµ',
          indications: ['РљСЂСѓРїРЅС‹Рµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ РјР°Р»РѕРіРѕ С‚Р°Р·Р°', 'РћС†РµРЅРєР° С‚РѕРїРѕРіСЂР°С„РёРё РїСЂРё Р°РЅРѕРјР°Р»РёСЏС… РјР°С‚РєРё'],
          preparation: 'РЈРјРµСЂРµРЅРЅРѕ РЅР°РїРѕР»РЅРµРЅРЅС‹Р№ РјРѕС‡РµРІРѕР№ РїСѓР·С‹СЂСЊ',
        },
      ];
    default:
      return [
        {
          method: 'С‚СЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅРѕРµ',
          indications: ['РџРµСЂРІРёС‡РЅР°СЏ РґРёР°РіРЅРѕСЃС‚РёРєР°', 'РЈС‚РѕС‡РЅРµРЅРёРµ Р»РѕРєР°Р»РёР·Р°С†РёРё РїСЂРѕС†РµСЃСЃР°', 'РљРѕРЅС‚СЂРѕР»СЊ Р»РµС‡РµРЅРёСЏ'],
          preparation: 'РћРїРѕСЂРѕР¶РЅРёС‚СЊ РјРѕС‡РµРІРѕР№ РїСѓР·С‹СЂСЊ; РїРѕ РІРѕР·РјРѕР¶РЅРѕСЃС‚Рё СѓС‡РёС‚С‹РІР°С‚СЊ С„Р°Р·Сѓ РјРµРЅСЃС‚СЂСѓР°Р»СЊРЅРѕРіРѕ С†РёРєР»Р°',
        },
        {
          method: 'С‚СЂР°РЅСЃР°Р±РґРѕРјРёРЅР°Р»СЊРЅРѕРµ',
          indications: ['Р‘РѕР»СЊС€РёРµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ', 'РћС†РµРЅРєР° СЂР°СЃРїСЂРѕСЃС‚СЂР°РЅРµРЅРЅРѕСЃС‚Рё РїСЂРѕС†РµСЃСЃР°', 'РћРіСЂР°РЅРёС‡РµРЅРЅР°СЏ РІРёР·СѓР°Р»РёР·Р°С†РёСЏ РїСЂРё РўР’РЈР—Р'],
          preparation: 'РЈРјРµСЂРµРЅРЅРѕ РЅР°РїРѕР»РЅРµРЅРЅС‹Р№ РјРѕС‡РµРІРѕР№ РїСѓР·С‹СЂСЊ',
        },
      ];
  }
};

const buildGynecologyFindings = (cluster: GynecologyCluster, disease: Disease): UltrasoundFinding[] => {
  const name = disease.name.toLowerCase();

  switch (cluster) {
    case 'endometriosis':
      return [
        {
          location: 'РјР°С‚РєР° Рё РјРёРѕРјРµС‚СЂРёР№',
          description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ Р°СЃРёРјРјРµС‚СЂРёСЋ СЃС‚РµРЅРѕРє РјР°С‚РєРё, РЅРµРѕРґРЅРѕСЂРѕРґРЅРѕСЃС‚СЊ РјРёРѕРјРµС‚СЂРёСЏ, РјРµР»РєРёРµ РјРёРѕРјРµС‚СЂРёР°Р»СЊРЅС‹Рµ РєРёСЃС‚С‹, РґРµС„РѕСЂРјР°С†РёСЋ РїРµСЂРµС…РѕРґРЅРѕР№ Р·РѕРЅС‹ Рё РїСЂРёР·РЅР°РєРё СЃРѕРїСѓС‚СЃС‚РІСѓСЋС‰РµРіРѕ Р°РґРµРЅРѕРјРёРѕР·Р°.`,
          measurements: { 'РјР°С‚РєР°': 'РґР»РёРЅР°, С‚РѕР»С‰РёРЅР° СЃС‚РµРЅРѕРє, РїРµСЂРµРґРЅРµ-Р·Р°РґРЅРёР№ СЂР°Р·РјРµСЂ', junctional_zone: 'РѕС†РµРЅРёС‚СЊ С‚РѕР»С‰РёРЅСѓ Рё РЅРµРѕРґРЅРѕСЂРѕРґРЅРѕСЃС‚СЊ' },
          normal: 'РћРґРЅРѕСЂРѕРґРЅС‹Р№ РјРёРѕРјРµС‚СЂРёР№ Р±РµР· РѕС‡Р°РіРѕРІС‹С… РІРєР»СЋС‡РµРЅРёР№ Рё Р°СЃРёРјРјРµС‚СЂРёРё СЃС‚РµРЅРѕРє.',
          pathology: 'РќРµРѕРґРЅРѕСЂРѕРґРЅС‹Р№ РјРёРѕРјРµС‚СЂРёР№, РєРёСЃС‚РѕРІРёРґРЅС‹Рµ РІРєР»СЋС‡РµРЅРёСЏ, РѕС‡Р°РіРё С‚РёРїР° "РІРµРµСЂРѕРѕР±СЂР°Р·РЅС‹С…" С‚РµРЅРµР№, С„РёРєСЃРёСЂРѕРІР°РЅРЅС‹Рµ Р±РѕР»РµР·РЅРµРЅРЅС‹Рµ СЃС‚СЂСѓРєС‚СѓСЂС‹.',
          clinicalSignificance: 'РџРѕР·РІРѕР»СЏРµС‚ РѕС‚Р»РёС‡РёС‚СЊ РїРѕРІРµСЂС…РЅРѕСЃС‚РЅС‹Р№ РїСЂРѕС†РµСЃСЃ РѕС‚ РіР»СѓР±РѕРєРѕРіРѕ РёРЅС„РёР»СЊС‚СЂР°С‚РёРІРЅРѕРіРѕ Рё СЃРїР»Р°РЅРёСЂРѕРІР°С‚СЊ Р»РµС‡РµРЅРёРµ.',
        },
        {
          location: 'СЏРёС‡РЅРёРєРё Рё РїРѕР·Р°РґРёРјР°С‚РѕС‡РЅРѕРµ РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕ',
          description: 'РћС†РµРЅРёРІР°СЋС‚ СЌРЅРґРѕРјРµС‚СЂРёРѕРјС‹, СЃРїР°РµС‡РЅС‹Р№ РїСЂРѕС†РµСЃСЃ, С„РёРєСЃРёСЂРѕРІР°РЅРЅРѕСЃС‚СЊ СЏРёС‡РЅРёРєРѕРІ, СЂРµС‚СЂРѕС†РµСЂРІРёРєР°Р»СЊРЅС‹Рµ СѓР·Р»С‹ Рё РІРѕРІР»РµС‡РµРЅРёРµ СЃРІСЏР·РѕС‡РЅРѕРіРѕ Р°РїРїР°СЂР°С‚Р°.',
          measurements: { 'РєРёСЃС‚Р°': 'СЂР°Р·РјРµСЂС‹ РІ С‚СЂС‘С… РїР»РѕСЃРєРѕСЃС‚СЏС…', 'РґСѓРіР»Р°СЃРѕРІРѕ_РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕ': 'РЅР°Р»РёС‡РёРµ СЃРїР°РµРє Рё СЃРІРѕР±РѕРґРЅРѕР№ Р¶РёРґРєРѕСЃС‚Рё' },
          normal: 'РЇРёС‡РЅРёРєРё РїРѕРґРІРёР¶РЅС‹, Р±РµР· СЃС‚РѕР№РєРёС… РіРёРїРѕСЌС…РѕРіРµРЅРЅС‹С… РєРёСЃС‚ Рё СЂРµС‚СЂРѕС†РµСЂРІРёРєР°Р»СЊРЅС‹С… РёРЅС„РёР»СЊС‚СЂР°С‚РѕРІ.',
          pathology: 'Р­РЅРґРѕРјРµС‚СЂРёРѕРјС‹ СЃ СЃРѕРґРµСЂР¶РёРјС‹Рј С‚РёРїР° РјР°С‚РѕРІРѕРіРѕ СЃС‚РµРєР»Р°, С„РёРєСЃРёСЂРѕРІР°РЅРЅС‹Рµ СЏРёС‡РЅРёРєРё, СЂРµС‚СЂРѕС†РµСЂРІРёРєР°Р»СЊРЅС‹Рµ СѓР·Р»С‹, РѕС‚СЃСѓС‚СЃС‚РІРёРµ СЃРєРѕР»СЊР¶РµРЅРёСЏ РѕСЂРіР°РЅРѕРІ.',
          clinicalSignificance: 'Р’Р»РёСЏРµС‚ РЅР° РїСЂРѕРіРЅРѕР· Р±РѕР»Рё, С„РµСЂС‚РёР»СЊРЅРѕСЃС‚Рё Рё РѕР±СЉРµРј С…РёСЂСѓСЂРіРёС‡РµСЃРєРѕРіРѕ РІРјРµС€Р°С‚РµР»СЊСЃС‚РІР°.',
        },
      ];
    case 'uterine':
      return [
        {
          location: 'СЌРЅРґРѕРјРµС‚СЂРёР№ Рё РїРѕР»РѕСЃС‚СЊ РјР°С‚РєРё',
          description: `РџСЂРё ${name} РѕРїСЂРµРґРµР»СЏСЋС‚ С‚РѕР»С‰РёРЅСѓ СЌРЅРґРѕРјРµС‚СЂРёСЏ, РµРіРѕ РѕРґРЅРѕСЂРѕРґРЅРѕСЃС‚СЊ, РєРѕРЅС‚СѓСЂ РїРѕР»РѕСЃС‚Рё, РЅР°Р»РёС‡РёРµ РѕС‡Р°РіРѕРІС‹С… РІРєР»СЋС‡РµРЅРёР№ Рё РїРёС‚Р°СЋС‰РµРіРѕ СЃРѕСЃСѓРґР°.`,
          measurements: { 'СЌРЅРґРѕРјРµС‚СЂРёР№': 'С‚РѕР»С‰РёРЅР° РІ РјРј РІ СЃСЂРµРґРёРЅРЅРѕРј СЃСЂРµР·Рµ', 'РїРѕР»РѕСЃС‚СЊ': 'РґРµС„РѕСЂРјР°С†РёСЏ, СЃРёРЅРµС…РёРё, РІРЅСѓС‚СЂРёРјР°С‚РѕС‡РЅС‹Рµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ' },
          normal: 'Р­РЅРґРѕРјРµС‚СЂРёР№ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ С„Р°Р·Рµ С†РёРєР»Р°, РїРѕР»РѕСЃС‚СЊ РјР°С‚РєРё РЅРµ РґРµС„РѕСЂРјРёСЂРѕРІР°РЅР°.',
          pathology: 'РћС‡Р°РіРѕРІРѕРµ РёР»Рё РґРёС„С„СѓР·РЅРѕРµ СѓС‚РѕР»С‰РµРЅРёРµ, РїРѕР»РёРїРѕРІРёРґРЅС‹Рµ СЃС‚СЂСѓРєС‚СѓСЂС‹, РїРѕРґСЃР»РёР·РёСЃС‚С‹Р№ СѓР·РµР», РІРЅСѓС‚СЂРёРјР°С‚РѕС‡РЅС‹Рµ СЃРёРЅРµС…РёРё РёР»Рё СЂР°СЃС€РёСЂРµРЅРёРµ РїРѕР»РѕСЃС‚Рё.',
          clinicalSignificance: 'РџРѕР·РІРѕР»СЏРµС‚ РѕРїСЂРµРґРµР»РёС‚СЊ РїРѕРєР°Р·Р°РЅРёСЏ Рє РіРёСЃС‚РµСЂРѕСЃРєРѕРїРёРё, Р±РёРѕРїСЃРёРё Рё РѕСЂРіР°РЅРѕСЃРѕС…СЂР°РЅСЏСЋС‰РµРјСѓ Р»РµС‡РµРЅРёСЋ.',
        },
        {
          location: 'РјРёРѕРјРµС‚СЂРёР№ Рё С€РµР№РєР° РјР°С‚РєРё',
          description: 'РћС†РµРЅРёРІР°СЋС‚ СЂР°Р·РјРµСЂС‹ РјР°С‚РєРё, СѓР·Р»РѕРІС‹Рµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ, РґРµС„РѕСЂРјР°С†РёСЋ СЃРµСЂРѕР·РЅРѕРіРѕ Рё СЃР»РёР·РёСЃС‚РѕРіРѕ РєРѕРЅС‚СѓСЂРѕРІ, Р° С‚Р°РєР¶Рµ СЃРѕСЃС‚РѕСЏРЅРёРµ С†РµСЂРІРёРєР°Р»СЊРЅРѕРіРѕ РєР°РЅР°Р»Р°.',
          measurements: { 'СѓР·Р»С‹': 'СЂР°Р·РјРµСЂС‹ Рё FIGO-Р»РѕРєР°Р»РёР·Р°С†РёСЏ', 'С€РµР№РєР°': 'РґР»РёРЅР° Рё СЃРѕСЃС‚РѕСЏРЅРёРµ РєР°РЅР°Р»Р°' },
          normal: 'РњР°С‚РєР° РѕР±С‹С‡РЅРѕР№ С„РѕСЂРјС‹ Рё СЂР°Р·РјРµСЂРѕРІ, Р±РµР· РґРµС„РѕСЂРјР°С†РёРё РјРёРѕРјРµС‚СЂРёСЏ Рё С†РµСЂРІРёРєР°Р»СЊРЅРѕРіРѕ РєР°РЅР°Р»Р°.',
          pathology: 'РњРёРѕРјР°С‚РѕР·РЅС‹Рµ СѓР·Р»С‹, РґРёС„С„СѓР·РЅС‹Рµ РёР·РјРµРЅРµРЅРёСЏ РјРёРѕРјРµС‚СЂРёСЏ, С†РµСЂРІРёРєР°Р»СЊРЅС‹Рµ РїРѕР»РёРїС‹, СЃС‚СЂРёРєС‚СѓСЂС‹ РёР»Рё РїСЂРёР·РЅР°РєРё РѕРїСѓС…РѕР»РµРІРѕР№ РёРЅС„РёР»СЊС‚СЂР°С†РёРё.',
          clinicalSignificance: 'РћРїСЂРµРґРµР»СЏРµС‚ СЂРёСЃРє РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЏ, РЅР°СЂСѓС€РµРЅРёСЏ СЂРµРїСЂРѕРґСѓРєС†РёРё Рё РѕР±СЉРµРј РІРјРµС€Р°С‚РµР»СЊСЃС‚РІР°.',
        },
      ];
    case 'adnexal':
      return [
        {
          location: 'СЏРёС‡РЅРёРєРё Рё РїСЂРёРґР°С‚РєРё',
          description: `РџСЂРё ${name} РѕРїРёСЃС‹РІР°СЋС‚ РјРѕСЂС„РѕР»РѕРіРёСЋ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ: СЃС‚РµРЅРєСѓ, РїРµСЂРµРіРѕСЂРѕРґРєРё, РїР°РїРёР»Р»СЏСЂРЅС‹Рµ СЂР°Р·СЂР°СЃС‚Р°РЅРёСЏ, СѓСЂРѕРІРµРЅСЊ Р¶РёРґРєРѕСЃС‚Рё, Р°РєСѓСЃС‚РёС‡РµСЃРєРёРµ СЌС„С„РµРєС‚С‹ Рё РїРѕРґРІРёР¶РЅРѕСЃС‚СЊ РїСЂРёРґР°С‚РєРѕРІ.`,
          measurements: { 'РѕР±СЂР°Р·РѕРІР°РЅРёРµ': 'СЂР°Р·РјРµСЂС‹ РІ С‚СЂС‘С… РїР»РѕСЃРєРѕСЃС‚СЏС…', 'СЃРѕР»РёРґРЅС‹Р№_РєРѕРјРїРѕРЅРµРЅС‚': 'РЅР°Р»РёС‡РёРµ Рё СЂР°Р·РјРµСЂС‹', 'РєСЂРѕРІРѕС‚РѕРє': 'РѕС†РµРЅРєР° РїРѕ Р¦Р”Рљ' },
          normal: 'РЇРёС‡РЅРёРєРё РЅРѕСЂРјР°Р»СЊРЅРѕРіРѕ РѕР±СЉС‘РјР° Р±РµР· СЃС‚РѕР№РєРёС… РєРёСЃС‚РѕР·РЅС‹С… РёР»Рё СЃРѕР»РёРґРЅС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёР№.',
          pathology: 'РџРµСЂСЃРёСЃС‚РёСЂСѓСЋС‰РёРµ РєРёСЃС‚С‹, РєРѕРјРїР»РµРєСЃРЅС‹Рµ Р°РґРЅРµРєСЃР°Р»СЊРЅС‹Рµ РјР°СЃСЃС‹, РїСЂРёР·РЅР°РєРё РїРµСЂРµРєСЂСѓС‚Р°, РіРµРјРѕСЂСЂР°РіРёС‡РµСЃРєРѕРіРѕ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ РёР»Рё Р·Р»РѕРєР°С‡РµСЃС‚РІРµРЅРЅРѕРіРѕ РїРѕС‚РµРЅС†РёР°Р»Р°.',
          clinicalSignificance: 'РќСѓР¶РЅРѕ РґР»СЏ СЃС‚СЂР°С‚РёС„РёРєР°С†РёРё СЂРёСЃРєР° Рё РІС‹Р±РѕСЂР° РјРµР¶РґСѓ РЅР°Р±Р»СЋРґРµРЅРёРµРј, СЃСЂРѕС‡РЅРѕР№ РѕРїРµСЂР°С†РёРµР№ Рё РїР»Р°РЅРѕРІРѕР№ С†РёСЃС‚СЌРєС‚РѕРјРёРµР№.',
        },
        {
          location: 'Р±СЂСЋС€РёРЅР° Рё СЃРІРѕР±РѕРґРЅР°СЏ Р¶РёРґРєРѕСЃС‚СЊ',
          description: 'Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ РѕС†РµРЅРёРІР°СЋС‚ РЅР°Р»РёС‡РёРµ СЃРІРѕР±РѕРґРЅРѕР№ Р¶РёРґРєРѕСЃС‚Рё, СѓС‚РѕР»С‰РµРЅРёРµ С‚СЂСѓР±, СЂРµР°РєС†РёСЋ Р±СЂСЋС€РёРЅС‹ Рё СЃРјРµС‰РµРЅРёРµ СЃРѕСЃРµРґРЅРёС… РѕСЂРіР°РЅРѕРІ.',
          measurements: { 'Р¶РёРґРєРѕСЃС‚СЊ': 'РѕР±СЉС‘Рј Рё Р»РѕРєР°Р»РёР·Р°С†РёСЏ', 'С‚СЂСѓР±Р°': 'РґРёР°РјРµС‚СЂ Рё С‚РѕР»С‰РёРЅР° СЃС‚РµРЅРєРё' },
          normal: 'РџР°С‚РѕР»РѕРіРёС‡РµСЃРєРѕР№ Р¶РёРґРєРѕСЃС‚Рё Рё С‚СЂСѓР±РЅС‹С… РёР·РјРµРЅРµРЅРёР№ РЅРµС‚.',
          pathology: 'РЎРІРѕР±РѕРґРЅР°СЏ Р¶РёРґРєРѕСЃС‚СЊ, РґРёР»Р°С‚РёСЂРѕРІР°РЅРЅС‹Рµ С‚СЂСѓР±С‹, РїРµСЂРёР°РґРЅРµРєСЃР°Р»СЊРЅС‹Р№ РёРЅС„РёР»СЊС‚СЂР°С‚, РїСЂРёР·РЅР°РєРё РіРµРјРѕРїРµСЂРёС‚РѕРЅРµСѓРјР° РёР»Рё РІРѕСЃРїР°Р»РµРЅРёСЏ.',
          clinicalSignificance: 'РџРѕРјРѕРіР°РµС‚ РІС‹СЏРІРёС‚СЊ РѕСЃР»РѕР¶РЅРµРЅРёРµ Рё СЃСЂРѕС‡РЅРѕСЃС‚СЊ С…РёСЂСѓСЂРіРёС‡РµСЃРєРѕР№ С‚Р°РєС‚РёРєРё.',
        },
      ];
    case 'infection':
      return [
        {
          location: 'РјР°С‚РєР°, С‚СЂСѓР±С‹ Рё СЏРёС‡РЅРёРєРё',
          description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ С‚РѕР»С‰РёРЅСѓ СЌРЅРґРѕРјРµС‚СЂРёСЏ, СЂР°СЃС€РёСЂРµРЅРёРµ Рё СѓС‚РѕР»С‰РµРЅРёРµ РјР°С‚РѕС‡РЅС‹С… С‚СЂСѓР±, РЅР°Р»РёС‡РёРµ С‚СѓР±РѕРѕРІР°СЂРёР°Р»СЊРЅС‹С… РєРѕРјРїР»РµРєСЃРѕРІ Рё СЂРµР°РєС†РёСЋ РѕРєСЂСѓР¶Р°СЋС‰РёС… С‚РєР°РЅРµР№.`,
          measurements: { 'С‚СЂСѓР±Р°': 'РґРёР°РјРµС‚СЂ Рё С‚РѕР»С‰РёРЅР° СЃС‚РµРЅРєРё', 'РѕС‡Р°Рі': 'СЂР°Р·РјРµСЂ РёРЅС„РёР»СЊС‚СЂР°С‚Р° РёР»Рё Р°Р±СЃС†РµСЃСЃР°' },
          normal: 'РўСЂСѓР±С‹ РЅРµ РІРёР·СѓР°Р»РёР·РёСЂСѓСЋС‚СЃСЏ РєР°Рє СЂР°СЃС€РёСЂРµРЅРЅС‹Рµ СЃС‚СЂСѓРєС‚СѓСЂС‹, РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРёС… РєРѕРЅРіР»РѕРјРµСЂР°С‚РѕРІ РЅРµС‚.',
          pathology: 'Р“РёРґСЂРѕ- РёР»Рё РїРёРѕСЃР°Р»СЊРїРёРЅРєСЃ, РЅРµРѕРґРЅРѕСЂРѕРґРЅС‹Рµ РїСЂРёРґР°С‚РѕС‡РЅС‹Рµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ, РіРёРїРµСЂРІР°СЃРєСѓР»СЏСЂРёР·Р°С†РёСЏ Рё СЃРІРѕР±РѕРґРЅР°СЏ Р¶РёРґРєРѕСЃС‚СЊ.',
          clinicalSignificance: 'РћРїСЂРµРґРµР»СЏРµС‚ С‚СЏР¶РµСЃС‚СЊ РёРЅС„РµРєС†РёРѕРЅРЅРѕРіРѕ РїСЂРѕС†РµСЃСЃР° Рё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚СЊ РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёРё РёР»Рё РґСЂРµРЅРёСЂРѕРІР°РЅРёСЏ.',
        },
        {
          location: 'РјР°Р»С‹Р№ С‚Р°Р·',
          description: 'РћС†РµРЅРёРІР°СЋС‚ РєРѕР»РёС‡РµСЃС‚РІРѕ СЃРІРѕР±РѕРґРЅРѕР№ Р¶РёРґРєРѕСЃС‚Рё, РїСЂРёР·РЅР°РєРё РїРµР»СЊРІРёРѕРїРµСЂРёС‚РѕРЅРёС‚Р°, РІРѕРІР»РµС‡РµРЅРёРµ РїР°СЂР°РјРµС‚СЂРёСЏ Рё РѕСЃС‚Р°С‚РѕС‡РЅС‹Рµ СЏРІР»РµРЅРёСЏ РїРѕСЃР»Рµ Р»РµС‡РµРЅРёСЏ.',
          normal: 'РќРµС‚ РїСЂРёР·РЅР°РєРѕРІ РІС‹СЂР°Р¶РµРЅРЅРѕРіРѕ РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅРѕРіРѕ СЌРєСЃСЃСѓРґР°С‚Р° Рё РєРѕРЅРіР»РѕРјРµСЂР°С‚РѕРІ.',
          pathology: 'Р­РєСЃСЃСѓРґР°С‚, СЃРїР°РµС‡РЅС‹Р№ РїСЂРѕС†РµСЃСЃ, С„РёРєСЃРёСЂРѕРІР°РЅРЅС‹Рµ Р±РѕР»РµР·РЅРµРЅРЅС‹Рµ СЃС‚СЂСѓРєС‚СѓСЂС‹, РѕСЃС‚Р°С‚РѕС‡РЅС‹Р№ Р°Р±СЃС†РµСЃСЃ.',
          clinicalSignificance: 'РСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ РґР»СЏ РѕС†РµРЅРєРё СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚Рё С‚РµСЂР°РїРёРё Рё СЂР°РЅРЅРµРіРѕ РІС‹СЏРІР»РµРЅРёСЏ РѕСЃР»РѕР¶РЅРµРЅРёР№.',
        },
      ];
    case 'urogyne':
      return [
        {
          location: 'С‚Р°Р·РѕРІРѕРµ РґРЅРѕ Рё СѓСЂРµС‚СЂРѕРІРµР·РёРєР°Р»СЊРЅС‹Р№ СЃРµРіРјРµРЅС‚',
          description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ РїРѕРґРІРёР¶РЅРѕСЃС‚СЊ СѓСЂРµС‚СЂС‹, РїРѕР»РѕР¶РµРЅРёРµ С€РµР№РєРё РјРѕС‡РµРІРѕРіРѕ РїСѓР·С‹СЂСЏ, РїСЂРѕР»Р°Р±РёСЂРѕРІР°РЅРёРµ РїРµСЂРµРґРЅРµРіРѕ РёР»Рё Р·Р°РґРЅРµРіРѕ РєРѕРјРїР°СЂС‚РјРµРЅС‚Р° Рё РѕСЃС‚Р°С‚РѕС‡РЅСѓСЋ РјРѕС‡Сѓ.`,
          measurements: { 'РѕСЃС‚Р°С‚РѕС‡РЅР°СЏ_РјРѕС‡Р°': 'РѕР±СЉС‘Рј РїРѕСЃР»Рµ РјРѕС‡РµРёСЃРїСѓСЃРєР°РЅРёСЏ', 'СѓСЂРµС‚СЂР°': 'РїРѕРґРІРёР¶РЅРѕСЃС‚СЊ РїСЂРё РїСЂРѕР±Рµ Р’Р°Р»СЊСЃР°Р»СЊРІС‹' },
          normal: 'РЁРµР№РєР° РјРѕС‡РµРІРѕРіРѕ РїСѓР·С‹СЂСЏ СЃС‚Р°Р±РёР»СЊРЅР°, РѕСЃС‚Р°С‚РѕС‡РЅР°СЏ РјРѕС‡Р° РјРёРЅРёРјР°Р»СЊРЅР°, РїСЂРѕР»Р°РїСЃР° РЅРµС‚.',
          pathology: 'Р“РёРїРµСЂРјРѕР±РёР»СЊРЅРѕСЃС‚СЊ СѓСЂРµС‚СЂС‹, Р·РЅР°С‡РёРјР°СЏ РѕСЃС‚Р°С‚РѕС‡РЅР°СЏ РјРѕС‡Р°, РїСЂРѕР»Р°РїСЃ РїРµСЂРµРґРЅРµРіРѕ РёР»Рё Р·Р°РґРЅРµРіРѕ РѕС‚РґРµР»Р°, РґРµС„РµРєС‚ С‚Р°Р·РѕРІРѕРіРѕ РґРЅР°.',
          clinicalSignificance: 'РЈС‚РѕС‡РЅСЏРµС‚ РјРµС…Р°РЅРёР·Рј СЃРёРјРїС‚РѕРјРѕРІ Рё РїРѕРјРѕРіР°РµС‚ РІС‹Р±СЂР°С‚СЊ РєРѕРЅСЃРµСЂРІР°С‚РёРІРЅСѓСЋ РёР»Рё С…РёСЂСѓСЂРіРёС‡РµСЃРєСѓСЋ РєРѕСЂСЂРµРєС†РёСЋ.',
        },
        {
          location: 'РјРѕС‡РµРІРѕР№ РїСѓР·С‹СЂСЊ Рё СЃРѕСЃРµРґРЅРёРµ СЃС‚СЂСѓРєС‚СѓСЂС‹',
          description: 'Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ РёСЃРєР»СЋС‡Р°СЋС‚ РѕСЂРіР°РЅРёС‡РµСЃРєСѓСЋ РїР°С‚РѕР»РѕРіРёСЋ РјРѕС‡РµРІРѕРіРѕ РїСѓР·С‹СЂСЏ, СЃРІРёС‰Рё, РґРёРІРµСЂС‚РёРєСѓР»С‹ Рё СЃРѕРїСѓС‚СЃС‚РІСѓСЋС‰РёРµ РёР·РјРµРЅРµРЅРёСЏ РјР°Р»РѕРіРѕ С‚Р°Р·Р°.',
          normal: 'РљРѕРЅС‚СѓСЂС‹ РјРѕС‡РµРІРѕРіРѕ РїСѓР·С‹СЂСЏ СЂРѕРІРЅС‹Рµ, РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹С… СЃРѕРѕР±С‰РµРЅРёР№ Рё РѕР±СЂР°Р·РѕРІР°РЅРёР№ РЅРµС‚.',
          pathology: 'Р”РµС„РѕСЂРјР°С†РёСЏ СЃС‚РµРЅРєРё, СЃРІРёС‰РµРІРѕР№ С…РѕРґ, РїСЂРёР·РЅР°РєРё С…СЂРѕРЅРёС‡РµСЃРєРѕР№ РѕР±СЃС‚СЂСѓРєС†РёРё РёР»Рё РІРѕСЃРїР°Р»РµРЅРёСЏ.',
          clinicalSignificance: 'РџРѕР·РІРѕР»СЏРµС‚ РЅРµ РїСЂРѕРїСѓСЃС‚РёС‚СЊ РєРѕРјР±РёРЅРёСЂРѕРІР°РЅРЅСѓСЋ СѓСЂРѕРіРёРЅРµРєРѕР»РѕРіРёС‡РµСЃРєСѓСЋ РїР°С‚РѕР»РѕРіРёСЋ.',
        },
      ];
    case 'fertility':
      return [
        {
          location: 'СЏРёС‡РЅРёРєРё Рё РѕРІСѓР»СЏС‚РѕСЂРЅС‹Р№ СЂРµР·РµСЂРІ',
          description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ РѕР±СЉС‘Рј СЏРёС‡РЅРёРєРѕРІ, Р°РЅС‚СЂР°Р»СЊРЅС‹Р№ С„РѕР»Р»РёРєСѓР»СЏСЂРЅС‹Р№ СЂРµР·РµСЂРІ, РґРѕРјРёРЅР°РЅС‚РЅС‹Р№ С„РѕР»Р»РёРєСѓР» Рё РєРѕСЃРІРµРЅРЅС‹Рµ РїСЂРёР·РЅР°РєРё РѕРІСѓР»СЏС†РёРё.`,
          measurements: { afc: 'РїРѕРґСЃС‡С‘С‚ Р°РЅС‚СЂР°Р»СЊРЅС‹С… С„РѕР»Р»РёРєСѓР»РѕРІ', 'С„РѕР»Р»РёРєСѓР»': 'РґРёР°РјРµС‚СЂ РґРѕРјРёРЅР°РЅС‚РЅРѕРіРѕ С„РѕР»Р»РёРєСѓР»Р°', 'СЌРЅРґРѕРјРµС‚СЂРёР№': 'С‚РѕР»С‰РёРЅР° Рё СЃС‚СЂСѓРєС‚СѓСЂР°' },
          normal: 'РЇРёС‡РЅРёРєРё СЃ СЃРѕС…СЂР°РЅС‘РЅРЅС‹Рј СЂРµР·РµСЂРІРѕРј, Р°РґРµРєРІР°С‚РЅС‹Р№ СЂРѕСЃС‚ РґРѕРјРёРЅР°РЅС‚РЅРѕРіРѕ С„РѕР»Р»РёРєСѓР»Р°, С‚СЂРµС…СЃР»РѕР№РЅС‹Р№ СЌРЅРґРѕРјРµС‚СЂРёР№.',
          pathology: 'РќРёР·РєРёР№ AFC, РѕС‚СЃСѓС‚СЃС‚РІРёРµ РґРѕРјРёРЅР°РЅС‚РЅРѕРіРѕ С„РѕР»Р»РёРєСѓР»Р°, РЅРµСЃРѕРѕС‚РІРµС‚СЃС‚РІРёРµ СЂРѕСЃС‚Р° СЌРЅРґРѕРјРµС‚СЂРёСЏ РёР»Рё РїСЂРёР·РЅР°РєРё С‚СѓР±Рѕ-РїРµСЂРёС‚РѕРЅРµР°Р»СЊРЅРѕР№ РїР°С‚РѕР»РѕРіРёРё.',
          clinicalSignificance: 'РљСЂРёС‚РёС‡РЅРѕ РґР»СЏ РІС‹Р±РѕСЂР° РјРµР¶РґСѓ РѕР¶РёРґР°РЅРёРµРј, РёРЅРґСѓРєС†РёРµР№ РѕРІСѓР»СЏС†РёРё Рё Р’Р Рў.',
        },
        {
          location: 'РјР°С‚РєР° Рё С‚СЂСѓР±С‹',
          description: 'РћС†РµРЅРёРІР°СЋС‚ С„РѕСЂРјСѓ РїРѕР»РѕСЃС‚Рё РјР°С‚РєРё, РІРЅСѓС‚СЂРёРјР°С‚РѕС‡РЅС‹Рµ РґРµС„РµРєС‚С‹, РєРѕСЃРІРµРЅРЅС‹Рµ РїСЂРёР·РЅР°РєРё РіРёРґСЂРѕСЃР°Р»СЊРїРёРЅРєСЃР°, СЃРёРЅРµС…РёР№ Рё РІСЂРѕР¶РґС‘РЅРЅС‹С… Р°РЅРѕРјР°Р»РёР№.',
          normal: 'РџРѕР»РѕСЃС‚СЊ РјР°С‚РєРё РЅРµ РґРµС„РѕСЂРјРёСЂРѕРІР°РЅР°, С‚СЂСѓР±РЅС‹Рµ СЃС‚СЂСѓРєС‚СѓСЂС‹ Р±РµР· РґРёР»Р°С‚Р°С†РёРё.',
          pathology: 'РЎРёРЅРµС…РёРё, РїРµСЂРµРіРѕСЂРѕРґРєР°, РіРёРґСЂРѕСЃР°Р»СЊРїРёРЅРєСЃ, РґРµС„РѕСЂРјРёСЂСѓСЋС‰РёРµ РјРёРѕРјС‹ РёР»Рё РїРѕР»РёРїС‹.',
          clinicalSignificance: 'РћРїСЂРµРґРµР»СЏРµС‚ РёРјРїР»Р°РЅС‚Р°С†РёРѕРЅРЅС‹Р№ РїРѕС‚РµРЅС†РёР°Р» Рё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚СЊ С…РёСЂСѓСЂРіРёС‡РµСЃРєРѕР№ РїРѕРґРіРѕС‚РѕРІРєРё РїРµСЂРµРґ Р’Р Рў.',
        },
      ];
    case 'endocrine':
      return [
        {
          location: 'СЏРёС‡РЅРёРєРё',
          description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ РѕР±СЉС‘Рј СЏРёС‡РЅРёРєРѕРІ, РєРѕР»РёС‡РµСЃС‚РІРѕ Р°РЅС‚СЂР°Р»СЊРЅС‹С… С„РѕР»Р»РёРєСѓР»РѕРІ, РЅР°Р»РёС‡РёРµ РґРѕРјРёРЅР°РЅС‚РЅРѕРіРѕ С„РѕР»Р»РёРєСѓР»Р° Рё РїСЂРёР·РЅР°РєРё С…СЂРѕРЅРёС‡РµСЃРєРѕР№ Р°РЅРѕРІСѓР»СЏС†РёРё.`,
          measurements: { 'РѕР±СЉС‘Рј': 'РїРѕ С„РѕСЂРјСѓР»Рµ D1 Г— D2 Г— D3 Г— 0.523', 'С„РѕР»Р»РёРєСѓР»С‹': 'С‡РёСЃР»Рѕ Рё СЂР°СЃРїСЂРµРґРµР»РµРЅРёРµ' },
          normal: 'Р Р°Р·РјРµСЂС‹ Рё С„РѕР»Р»РёРєСѓР»СЏСЂРЅС‹Р№ Р°РїРїР°СЂР°С‚ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‚ РІРѕР·СЂР°СЃС‚Сѓ Рё РґРЅСЋ С†РёРєР»Р°.',
          pathology: 'РџРѕР»РёРєРёСЃС‚РѕР·РЅР°СЏ РјРѕСЂС„РѕР»РѕРіРёСЏ, РёСЃС‚РѕС‰РµРЅРёРµ СЂРµР·РµСЂРІР°, РѕС‚СЃСѓС‚СЃС‚РІРёРµ РѕРІСѓР»СЏС‚РѕСЂРЅРѕР№ РґРёРЅР°РјРёРєРё.',
          clinicalSignificance: 'РџРѕРјРѕРіР°РµС‚ СѓС‚РѕС‡РЅРёС‚СЊ СЌРЅРґРѕРєСЂРёРЅРЅС‹Р№ РјРµС…Р°РЅРёР·Рј РЅР°СЂСѓС€РµРЅРёР№ С†РёРєР»Р° Рё С„РµСЂС‚РёР»СЊРЅРѕСЃС‚Рё.',
        },
        {
          location: 'СЌРЅРґРѕРјРµС‚СЂРёР№',
          description: 'РћС†РµРЅРёРІР°СЋС‚ С‚РѕР»С‰РёРЅСѓ Рё СЃС‚СЂСѓРєС‚СѓСЂСѓ СЌРЅРґРѕРјРµС‚СЂРёСЏ РЅР° С„РѕРЅРµ РѕР»РёРіРѕРјРµРЅРѕСЂРµРё, Р°РјРµРЅРѕСЂРµРё Рё РґР»РёС‚РµР»СЊРЅРѕР№ Р°РЅРѕРІСѓР»СЏС†РёРё.',
          normal: 'РўРѕР»С‰РёРЅР° СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ С„Р°Р·Рµ С†РёРєР»Р°.',
          pathology: 'РўРѕРЅРєРёР№ СЌРЅРґРѕРјРµС‚СЂРёР№ РїСЂРё РіРёРїРѕСЌСЃС‚СЂРѕРіРµРЅРёР·РјРµ РёР»Рё СѓС‚РѕР»С‰РµРЅРёРµ РїСЂРё РґР»РёС‚РµР»СЊРЅРѕР№ Р°РЅРѕРІСѓР»СЏС†РёРё Рё РіРёРїРµСЂСЌСЃС‚СЂРѕРіРµРЅРёРё.',
          clinicalSignificance: 'Р’Р°Р¶РЅРѕ РґР»СЏ РїСЂРѕС„РёР»Р°РєС‚РёРєРё РіРёРїРµСЂРїР»Р°Р·РёРё Рё РїР»Р°РЅРёСЂРѕРІР°РЅРёСЏ РёРЅРґСѓРєС†РёРё РѕРІСѓР»СЏС†РёРё.',
        },
      ];
    case 'oncology':
      return [
        {
          location: 'РїРµСЂРІРёС‡РЅС‹Р№ РѕС‡Р°Рі',
          description: `РџСЂРё ${name} РѕРїРёСЃС‹РІР°СЋС‚ СЂР°Р·РјРµСЂ, РєРѕРЅС‚СѓСЂ, СЃРѕР»РёРґРЅРѕСЃС‚СЊ, Р·РѕРЅСѓ РёРЅРІР°Р·РёРё, СЃРІСЏР·СЊ СЃ СЃРѕСЃРµРґРЅРёРјРё СЃС‚СЂСѓРєС‚СѓСЂР°РјРё Рё С…Р°СЂР°РєС‚РµСЂРёСЃС‚РёРєРё СЃРѕСЃСѓРґРёСЃС‚РѕРіРѕ СЂРёСЃСѓРЅРєР°.`,
          measurements: { 'РѕРїСѓС…РѕР»СЊ': 'РјР°РєСЃРёРјР°Р»СЊРЅС‹Р№ СЂР°Р·РјРµСЂ РІ С‚СЂС‘С… РїР»РѕСЃРєРѕСЃС‚СЏС…', 'РёРЅРІР°Р·РёСЏ': 'РіР»СѓР±РёРЅР°/СЂР°СЃРїСЂРѕСЃС‚СЂР°РЅРµРЅРёРµ', 'СѓР·Р»С‹': 'СЂР°Р·РјРµСЂ РїРѕРґРѕР·СЂРёС‚РµР»СЊРЅС‹С… Р»РёРјС„РѕСѓР·Р»РѕРІ' },
          normal: 'РћРїСѓС…РѕР»РµРІРёРґРЅС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёР№ СЃ РёРЅС„РёР»СЊС‚СЂР°С‚РёРІРЅС‹Рј СЂРѕСЃС‚РѕРј РЅРµС‚.',
          pathology: 'РЎРѕР»РёРґРЅС‹Рµ Рё/РёР»Рё СЃРјРµС€Р°РЅРЅС‹Рµ СЃС‚СЂСѓРєС‚СѓСЂС‹, РЅРµСЂРѕРІРЅС‹Рµ РєРѕРЅС‚СѓСЂС‹, РїР°С‚РѕР»РѕРіРёС‡РµСЃРєР°СЏ РІР°СЃРєСѓР»СЏСЂРёР·Р°С†РёСЏ, РёРЅРІР°Р·РёСЏ Рё Р°СЃС†РёС‚.',
          clinicalSignificance: 'РћРїСЂРµРґРµР»СЏРµС‚ РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚СЊ СЃСЂРѕС‡РЅРѕР№ РјРѕСЂС„РѕР»РѕРіРёС‡РµСЃРєРѕР№ РІРµСЂРёС„РёРєР°С†РёРё Рё РѕР±СЉРµРј СЃС‚Р°РґРёСЂРѕРІР°РЅРёСЏ.',
        },
        {
          location: 'РјР°Р»С‹Р№ С‚Р°Р· Рё Р±СЂСЋС€РЅР°СЏ РїРѕР»РѕСЃС‚СЊ',
          description: 'РћС†РµРЅРёРІР°СЋС‚ Р°СЃС†РёС‚, РёРјРїР»Р°РЅС‚С‹ РїРѕ Р±СЂСЋС€РёРЅРµ, РІРѕРІР»РµС‡РµРЅРёРµ РїР°СЂР°РјРµС‚СЂРёСЏ, РјРёРѕРјРµС‚СЂРёСЏ, Р»РёРјС„РѕСѓР·Р»РѕРІ Рё СЃРѕСЃРµРґРЅРёС… РѕСЂРіР°РЅРѕРІ.',
          normal: 'РќРµС‚ РїСЂРёР·РЅР°РєРѕРІ Р»РѕРєРѕСЂРµРіРёРѕРЅР°СЂРЅРѕРіРѕ РёР»Рё РїРµСЂРёС‚РѕРЅРµР°Р»СЊРЅРѕРіРѕ СЂР°СЃРїСЂРѕСЃС‚СЂР°РЅРµРЅРёСЏ.',
          pathology: 'РђСЃС†РёС‚, СѓР·Р»РѕРІС‹Рµ РёРјРїР»Р°РЅС‚С‹, РїРѕРґРѕР·СЂРёС‚РµР»СЊРЅС‹Рµ Р»РёРјС„РѕСѓР·Р»С‹, РёРЅС„РёР»СЊС‚СЂР°С†РёСЏ СЃРѕСЃРµРґРЅРёС… РѕСЂРіР°РЅРѕРІ.',
          clinicalSignificance: 'Р’Р»РёСЏРµС‚ РЅР° СЃС‚Р°РґРёСЋ, СЂРµР·РµРєС‚Р°Р±РµР»СЊРЅРѕСЃС‚СЊ Рё РІС‹Р±РѕСЂ РјРµР¶РґСѓ РїРµСЂРІРёС‡РЅРѕР№ РѕРїРµСЂР°С†РёРµР№ Рё РЅРµРѕР°РґСЉСЋРІР°РЅС‚РЅРѕР№ С‚РµСЂР°РїРёРµР№.',
        },
      ];
    case 'breast':
      return [
        {
          location: 'РјРѕР»РѕС‡РЅР°СЏ Р¶РµР»РµР·Р°',
          description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ С„РѕСЂРјСѓ, РѕСЂРёРµРЅС‚Р°С†РёСЋ, РєРѕРЅС‚СѓСЂС‹, Р°РєСѓСЃС‚РёС‡РµСЃРєРёРµ С‚РµРЅРё, РІРЅСѓС‚СЂРµРЅРЅСЋСЋ СЌС…РѕСЃС‚СЂСѓРєС‚СѓСЂСѓ Рё СЃРІСЏР·СЊ РѕС‡Р°РіР° СЃ РїСЂРѕС‚РѕРєР°РјРё Рё РєРѕР¶РµР№.`,
          measurements: { 'РѕС‡Р°Рі': 'СЂР°Р·РјРµСЂС‹ РІ С‚СЂС‘С… РїР»РѕСЃРєРѕСЃС‚СЏС…', birads: 'РєР°С‚РµРіРѕСЂРёСЏ РїРѕ РґР°РЅРЅС‹Рј РєРѕРјРїР»РµРєСЃРЅРѕР№ РѕС†РµРЅРєРё' },
          normal: 'Р–РµР»РµР·РёСЃС‚Р°СЏ С‚РєР°РЅСЊ Р±РµР· РѕС‡Р°РіРѕРІС‹С… РёР·РјРµРЅРµРЅРёР№ Рё РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРѕР№ РґРёР»Р°С‚Р°С†РёРё РїСЂРѕС‚РѕРєРѕРІ.',
          pathology: 'РљРёСЃС‚С‹, С„РёР±СЂРѕР°РґРµРЅРѕРјС‹, СЃР»РѕР¶РЅС‹Рµ СЃРѕР»РёРґРЅС‹Рµ СѓР·Р»С‹, РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Рµ РёР·РјРµРЅРµРЅРёСЏ РёР»Рё РїСЂРёР·РЅР°РєРё Р·Р»РѕРєР°С‡РµСЃС‚РІРµРЅРЅРѕРіРѕ СЂРѕСЃС‚Р°.',
          clinicalSignificance: 'РћРїСЂРµРґРµР»СЏРµС‚ РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚СЊ Р±РёРѕРїСЃРёРё, РјР°РјРјРѕРіСЂР°С„РёРё, РЅР°Р±Р»СЋРґРµРЅРёСЏ РёР»Рё С…РёСЂСѓСЂРіРёС‡РµСЃРєРѕРіРѕ Р»РµС‡РµРЅРёСЏ.',
        },
        {
          location: 'СЂРµРіРёРѕРЅР°СЂРЅС‹Рµ Р»РёРјС„РѕСѓР·Р»С‹',
          description: 'РћР±СЏР·Р°С‚РµР»СЊРЅРѕ РѕС†РµРЅРёРІР°СЋС‚ РїРѕРґРјС‹С€РµС‡РЅС‹Рµ, РЅР°Рґ- Рё РїРѕРґРєР»СЋС‡РёС‡РЅС‹Рµ Р·РѕРЅС‹ РїСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РѕРїСѓС…РѕР»РµРІС‹Р№ РёР»Рё РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅС‹Р№ РїСЂРѕС†РµСЃСЃ.',
          normal: 'Р›РёРјС„РѕСѓР·Р»С‹ СЃ СЃРѕС…СЂР°РЅС‘РЅРЅС‹Рј Р¶РёСЂРѕРІС‹Рј СЃРёРЅСѓСЃРѕРј Рё С‚РѕРЅРєРѕР№ РєРѕСЂРѕР№.',
          pathology: 'РЈС‚РѕР»С‰РµРЅРёРµ РєРѕСЂС‹, РїРѕС‚РµСЂСЏ РІРѕСЂРѕС‚, РѕРєСЂСѓРіР»Р°СЏ С„РѕСЂРјР°, РїР°С‚РѕР»РѕРіРёС‡РµСЃРєР°СЏ РІР°СЃРєСѓР»СЏСЂРёР·Р°С†РёСЏ.',
          clinicalSignificance: 'Р’Р°Р¶РЅРѕ РґР»СЏ СЃС‚Р°РґРёСЂРѕРІР°РЅРёСЏ Рё РјР°СЂС€СЂСѓС‚РёР·Р°С†РёРё РїР°С†РёРµРЅС‚РєРё.',
        },
      ];
    case 'menopause':
      return [
        {
          location: 'РјР°С‚РєР° Рё СЌРЅРґРѕРјРµС‚СЂРёР№',
          description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ СЂР°Р·РјРµСЂС‹ РјР°С‚РєРё, С‚РѕР»С‰РёРЅСѓ Рё РѕРґРЅРѕСЂРѕРґРЅРѕСЃС‚СЊ СЌРЅРґРѕРјРµС‚СЂРёСЏ, РЅР°Р»РёС‡РёРµ РІРЅСѓС‚СЂРёРјР°С‚РѕС‡РЅРѕР№ Р¶РёРґРєРѕСЃС‚Рё Рё РѕС‡Р°РіРѕРІС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёР№.`,
          measurements: { 'СЌРЅРґРѕРјРµС‚СЂРёР№': 'С‚РѕР»С‰РёРЅР° РІ РјРј', 'РјР°С‚РєР°': 'РґР»РёРЅР° Рё РїРµСЂРµРґРЅРµ-Р·Р°РґРЅРёР№ СЂР°Р·РјРµСЂ' },
          normal: 'РўРѕРЅРєРёР№ РѕРґРЅРѕСЂРѕРґРЅС‹Р№ СЌРЅРґРѕРјРµС‚СЂРёР№ Р±РµР· РѕС‡Р°РіРѕРІС‹С… СЃС‚СЂСѓРєС‚СѓСЂ Рё СЂР°СЃС€РёСЂРµРЅРёСЏ РїРѕР»РѕСЃС‚Рё РјР°С‚РєРё.',
          pathology: 'РЈС‚РѕР»С‰РµРЅРёРµ СЌРЅРґРѕРјРµС‚СЂРёСЏ, РїРѕР»РёРї, СЃСѓР±РјСѓРєРѕР·РЅС‹Р№ СѓР·РµР», РІРЅСѓС‚СЂРёРјР°С‚РѕС‡РЅР°СЏ Р¶РёРґРєРѕСЃС‚СЊ РёР»Рё РѕРїСѓС…РѕР»РµРІС‹Рµ РїСЂРёР·РЅР°РєРё.',
          clinicalSignificance: 'РљР»СЋС‡РµРІРѕР№ Р±Р»РѕРє РѕС†РµРЅРєРё Сѓ РїР°С†РёРµРЅС‚РѕРє СЃ РєСЂРѕРІСЏРЅРёСЃС‚С‹РјРё РІС‹РґРµР»РµРЅРёСЏРјРё Рё РЅР° С„РѕРЅРµ Р—Р“Рў.',
        },
        {
          location: 'СЏРёС‡РЅРёРєРё',
          description: 'РћС†РµРЅРёРІР°СЋС‚ СЂР°Р·РјРµСЂС‹ Рё РЅР°Р»РёС‡РёРµ РїРµСЂСЃРёСЃС‚РёСЂСѓСЋС‰РёС… РєРёСЃС‚РѕР·РЅС‹С… РёР»Рё СЃРѕР»РёРґРЅС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёР№ РІ РїРѕСЃС‚РјРµРЅРѕРїР°СѓР·Рµ.',
          normal: 'РќРµР±РѕР»СЊС€РёРµ РїРѕСЃС‚РјРµРЅРѕРїР°СѓР·Р°Р»СЊРЅС‹Рµ СЏРёС‡РЅРёРєРё Р±РµР· РѕР±СЉРµРјРЅС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёР№.',
          pathology: 'РџРµСЂСЃРёСЃС‚РёСЂСѓСЋС‰РёРµ РєРёСЃС‚С‹, СЃРѕР»РёРґРЅС‹Рµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ, СЃР»РѕР¶РЅС‹Рµ РѕРїСѓС…РѕР»РµРІРёРґРЅС‹Рµ СЃС‚СЂСѓРєС‚СѓСЂС‹.',
          clinicalSignificance: 'РџРѕР·РІРѕР»СЏРµС‚ СЃРІРѕРµРІСЂРµРјРµРЅРЅРѕ РёСЃРєР»СЋС‡РёС‚СЊ РѕРЅРєРѕРїР°С‚РѕР»РѕРіРёСЋ Рё РѕСЃР»РѕР¶РЅРµРЅРёСЏ Р—Р“Рў.',
        },
      ];
    case 'vulvar':
      return [
        {
          location: 'РјСЏРіРєРёРµ С‚РєР°РЅРё РІСѓР»СЊРІС‹',
          description: `РџСЂРё ${name} РЈР—Р РёСЃРїРѕР»СЊР·СѓСЋС‚ РєР°Рє РІСЃРїРѕРјРѕРіР°С‚РµР»СЊРЅС‹Р№ РјРµС‚РѕРґ РґР»СЏ РѕС†РµРЅРєРё РіР»СѓР±РёРЅС‹ РёРЅС„РёР»СЊС‚СЂР°С†РёРё, РєРёСЃС‚, Р°Р±СЃС†РµСЃСЃРѕРІ Рё РєСЂСѓРїРЅС‹С… РїРѕРґРєРѕР¶РЅС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёР№.`,
          measurements: { 'РѕС‡Р°Рі': 'СЂР°Р·РјРµСЂ Рё РіР»СѓР±РёРЅР° СЂР°СЃРїСЂРѕСЃС‚СЂР°РЅРµРЅРёСЏ' },
          normal: 'РњСЏРіРєРёРµ С‚РєР°РЅРё Р±РµР· РёРЅС„РёР»СЊС‚СЂР°С†РёРё, Р¶РёРґРєРѕСЃС‚РЅС‹С… РїРѕР»РѕСЃС‚РµР№ Рё РѕР±СЉРµРјРЅС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёР№.',
          pathology: 'РџРѕРґРєРѕР¶РЅС‹Р№ РёРЅС„РёР»СЊС‚СЂР°С‚, РєРёСЃС‚РѕР·РЅРѕРµ РѕР±СЂР°Р·РѕРІР°РЅРёРµ, Р°Р±СЃС†РµСЃСЃ, РїРѕРґРѕР·СЂРµРЅРёРµ РЅР° РѕРїСѓС…РѕР»РµРІС‹Р№ СѓР·РµР».',
          clinicalSignificance: 'РџРѕРјРѕРіР°РµС‚ РІС‹Р±СЂР°С‚СЊ Р·РѕРЅСѓ Р±РёРѕРїСЃРёРё Рё РёСЃРєР»СЋС‡РёС‚СЊ РіР»СѓР±РѕРєРѕ СЂР°СЃРїРѕР»РѕР¶РµРЅРЅС‹Р№ РїСЂРѕС†РµСЃСЃ.',
        },
      ];
    default:
      return [
        {
          location: 'РѕСЂРіР°РЅ-РјРёС€РµРЅСЊ',
          description: `РџСЂРё ${name} РѕС†РµРЅРёРІР°СЋС‚ Р»РѕРєР°Р»РёР·Р°С†РёСЋ РїСЂРѕС†РµСЃСЃР°, СЂР°Р·РјРµСЂС‹ РѕС‡Р°РіР°, РєРѕРЅС‚СѓСЂС‹, СЌС…РѕСЃС‚СЂСѓРєС‚СѓСЂСѓ Рё РѕС‚РЅРѕС€РµРЅРёРµ Рє СЃРѕСЃРµРґРЅРёРј СЃС‚СЂСѓРєС‚СѓСЂР°Рј.`,
          measurements: { 'СЂР°Р·РјРµСЂ': 'РёР·РјРµСЂРёС‚СЊ РјРёРЅРёРјСѓРј РІ РґРІСѓС…-С‚СЂРµС… РїР»РѕСЃРєРѕСЃС‚СЏС…', 'РєСЂРѕРІРѕС‚РѕРє': 'РѕС†РµРЅРёС‚СЊ РїСЂРё Р¦Р”Рљ РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј' },
          normal: 'РћСЂРіР°РЅ Р±РµР· РѕС‡Р°РіРѕРІС‹С… РёР·РјРµРЅРµРЅРёР№ Рё СЃ СЃРѕС…СЂР°РЅРµРЅРЅРѕР№ Р°РЅР°С‚РѕРјРёРµР№.',
          pathology: 'РћС‡Р°РіРѕРІС‹Рµ РёР»Рё РґРёС„С„СѓР·РЅС‹Рµ РёР·РјРµРЅРµРЅРёСЏ, СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰РёРµ РєР»РёРЅРёС‡РµСЃРєРѕР№ РєР°СЂС‚РёРЅРµ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ.',
          clinicalSignificance: 'РќСѓР¶РЅРѕ РґР»СЏ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ РґРёР°РіРЅРѕР·Р° Рё РІС‹Р±РѕСЂР° С‚Р°РєС‚РёРєРё РІРµРґРµРЅРёСЏ.',
        },
      ];
  }
};

const buildGynecologyNormalValues = (cluster: GynecologyCluster) => {
  switch (cluster) {
    case 'fertility':
    case 'endocrine':
      return {
        afc: 'РѕР±С‹С‡РЅРѕ 8-15 СЃСѓРјРјР°СЂРЅРѕ Сѓ Р¶РµРЅС‰РёРЅ СЃ СЃРѕС…СЂР°РЅРµРЅРЅС‹Рј СЂРµР·РµСЂРІРѕРј, СЃ СѓС‡РµС‚РѕРј РІРѕР·СЂР°СЃС‚Р°',
        'СЌРЅРґРѕРјРµС‚СЂРёР№_РїРµСЂРµРґ_РѕРІСѓР»СЏС†РёРµР№': 'РїСЂРёРјРµСЂРЅРѕ 7-12 РјРј, С‚СЂРµС…СЃР»РѕР№РЅРѕР№ СЃС‚СЂСѓРєС‚СѓСЂС‹',
        'РѕР±СЉС‘Рј_СЏРёС‡РЅРёРєР°': 'Р·Р°РІРёСЃРёС‚ РѕС‚ РІРѕР·СЂР°СЃС‚Р° Рё С„Р°Р·С‹ С†РёРєР»Р°, РѕР±С‹С‡РЅРѕ РґРѕ 10 СЃРј3',
      };
    case 'menopause':
      return {
        'СЌРЅРґРѕРјРµС‚СЂРёР№_РІ_РїРѕСЃС‚РјРµРЅРѕРїР°СѓР·Рµ': 'РѕР±С‹С‡РЅРѕ РґРѕ 4 РјРј РїСЂРё РѕС‚СЃСѓС‚СЃС‚РІРёРё Р—Р“Рў Рё РєСЂРѕРІСЏРЅРёСЃС‚С‹С… РІС‹РґРµР»РµРЅРёР№',
        'СЏРёС‡РЅРёРєРё': 'РЅРµР±РѕР»СЊС€РѕРіРѕ РѕР±СЉРµРјР°, Р±РµР· СЃР»РѕР¶РЅС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёР№',
        'РјР°С‚РєР°': 'СѓРјРµРЅСЊС€РµРЅР° РїРѕ СЃСЂР°РІРЅРµРЅРёСЋ СЃ СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅС‹Рј РІРѕР·СЂР°СЃС‚РѕРј',
      };
    case 'breast':
      return {
        'РїСЂРѕС‚РѕРєРё': 'Р±РµР· РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРѕР№ РґРёР»Р°С‚Р°С†РёРё',
        'Р»РёРјС„РѕСѓР·Р»С‹': 'СЃ СЃРѕС…СЂР°РЅРµРЅРЅС‹Рј Р¶РёСЂРѕРІС‹Рј СЃРёРЅСѓСЃРѕРј Рё С‚РѕРЅРєРѕР№ РєРѕСЂРѕР№',
        'РѕС‡Р°РіРё': 'РѕС‚СЃСѓС‚СЃС‚РІСѓСЋС‚ РёР»Рё СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‚ РґРѕР±СЂРѕРєР°С‡РµСЃС‚РІРµРЅРЅРѕР№ РІРёР·СѓР°Р»РёР·Р°С†РёРё',
      };
    case 'urogyne':
      return {
        'РѕСЃС‚Р°С‚РѕС‡РЅР°СЏ_РјРѕС‡Р°': 'РѕР±С‹С‡РЅРѕ РјРµРЅРµРµ 50 РјР»',
        'СѓСЂРµС‚СЂР°': 'Р±РµР· РІС‹СЂР°Р¶РµРЅРЅРѕР№ РіРёРїРµСЂРјРѕР±РёР»СЊРЅРѕСЃС‚Рё Рё РґРµС„РѕСЂРјР°С†РёРё',
        'С‚Р°Р·РѕРІРѕРµ_РґРЅРѕ': 'Р±РµР· Р·РЅР°С‡РёРјРѕРіРѕ РїСЂРѕР»Р°Р±РёСЂРѕРІР°РЅРёСЏ РїСЂРё РЅР°С‚СѓР¶РёРІР°РЅРёРё',
      };
    default:
      return {
        'РјР°С‚РєР°': 'СЂР°Р·РјРµСЂС‹ Рё С„РѕСЂРјР° СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‚ РІРѕР·СЂР°СЃС‚Сѓ Рё СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅРѕРјСѓ СЃС‚Р°С‚СѓСЃСѓ',
        'СЌРЅРґРѕРјРµС‚СЂРёР№': 'С‚РѕР»С‰РёРЅР° РѕС†РµРЅРёРІР°РµС‚СЃСЏ СЃ СѓС‡РµС‚РѕРј РґРЅСЏ РјРµРЅСЃС‚СЂСѓР°Р»СЊРЅРѕРіРѕ С†РёРєР»Р°',
        'СЏРёС‡РЅРёРєРё': 'РѕР±СЉРµРј Рё С„РѕР»Р»РёРєСѓР»СЏСЂРЅС‹Р№ Р°РїРїР°СЂР°С‚ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‚ РІРѕР·СЂР°СЃС‚Сѓ Рё С„Р°Р·Рµ С†РёРєР»Р°',
      };
  }
};

const buildGynecologyTips = (cluster: GynecologyCluster) => {
  switch (cluster) {
    case 'endometriosis':
      return [
        'РћС†РµРЅРёРІР°Р№С‚Рµ СЃРёРјРїС‚РѕРј СЃРєРѕР»СЊР¶РµРЅРёСЏ Рё С„РёРєСЃРёСЂРѕРІР°РЅРЅРѕСЃС‚СЊ СЏРёС‡РЅРёРєРѕРІ РІ РѕРґРЅРѕРј РїСЂРѕС‚РѕРєРѕР»Рµ.',
        'РџСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РіР»СѓР±РѕРєРёР№ РёРЅС„РёР»СЊС‚СЂР°С‚РёРІРЅС‹Р№ РїСЂРѕС†РµСЃСЃ РѕС‚РґРµР»СЊРЅРѕ РѕРїРёСЃС‹РІР°Р№С‚Рµ СЂРµС‚СЂРѕС†РµСЂРІРёРєР°Р»СЊРЅСѓСЋ Р·РѕРЅСѓ, СЃРІСЏР·РєРё Рё РєРёС€РµС‡РЅРёРє.',
        'РЎСЂР°РІРЅРёРІР°Р№С‚Рµ РЈР—Р-РєР°СЂС‚РёРЅСѓ СЃ Р±РѕР»РµРІС‹Рј СЃРёРЅРґСЂРѕРјРѕРј Рё СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅС‹РјРё РїР»Р°РЅР°РјРё РїР°С†РёРµРЅС‚РєРё.',
      ];
    case 'uterine':
      return [
        'РўРѕР»С‰РёРЅСѓ СЌРЅРґРѕРјРµС‚СЂРёСЏ РІСЃРµРіРґР° РёРЅС‚РµСЂРїСЂРµС‚РёСЂСѓР№С‚Рµ СЃ СѓС‡РµС‚РѕРј РІРѕР·СЂР°СЃС‚Р°, С„Р°Р·С‹ С†РёРєР»Р° Рё РїСЂРёРµРјР° РіРѕСЂРјРѕРЅРѕРІ.',
        'Р”Р»СЏ РѕС‡Р°РіРѕРІРѕР№ РІРЅСѓС‚СЂРёРјР°С‚РѕС‡РЅРѕР№ РїР°С‚РѕР»РѕРіРёРё РїРѕР»РµР·РЅРѕ РѕРїРёСЃС‹РІР°С‚СЊ РїРёС‚Р°СЋС‰РёР№ СЃРѕСЃСѓРґ Рё РґРµС„РѕСЂРјР°С†РёСЋ РїРѕР»РѕСЃС‚Рё.',
        'РџСЂРё РєСЂРѕРІРѕС‚РµС‡РµРЅРёРё РІ РїРѕСЃС‚РјРµРЅРѕРїР°СѓР·Рµ Р»СЋР±РѕР№ СЃРѕРјРЅРёС‚РµР»СЊРЅС‹Р№ СѓР»СЊС‚СЂР°Р·РІСѓРєРѕРІРѕР№ РїСЂРёР·РЅР°Рє С‚СЂРµР±СѓРµС‚ РјРѕСЂС„РѕР»РѕРіРёС‡РµСЃРєРѕР№ РІРµСЂРёС„РёРєР°С†РёРё.',
      ];
    case 'adnexal':
      return [
        'РћРїРёСЃС‹РІР°Р№С‚Рµ РѕР±СЂР°Р·РѕРІР°РЅРёРµ РїРѕ РµРґРёРЅС‹Рј РјРѕСЂС„РѕР»РѕРіРёС‡РµСЃРєРёРј РїСЂРёР·РЅР°РєР°Рј: СЃС‚РµРЅРєР°, РїРµСЂРµРіРѕСЂРѕРґРєРё, СЃРѕР»РёРґРЅС‹Рµ Р·РѕРЅС‹, С‚РµРЅРё Рё РєСЂРѕРІРѕС‚РѕРє.',
        'РќРµ РёСЃРєР»СЋС‡Р°Р№С‚Рµ РїРµСЂРµРєСЂСѓС‚ С‚РѕР»СЊРєРѕ РїРѕ СЃРѕС…СЂР°РЅРµРЅРЅРѕРјСѓ РєСЂРѕРІРѕС‚РѕРєСѓ: СЃРѕРїРѕСЃС‚Р°РІР»СЏР№С‚Рµ СЃ РєР»РёРЅРёРєРѕР№.',
        'РџСЂРё С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅРѕР№ РєРёСЃС‚Рµ РєРѕРЅС‚СЂРѕР»РёСЂСѓР№С‚Рµ СЂРµРіСЂРµСЃСЃ С‡РµСЂРµР· 6-8 РЅРµРґРµР»СЊ.',
      ];
    case 'infection':
      return [
        'РџРѕРІС‚РѕСЂРЅРѕРµ РЈР—Р РѕСЃРѕР±РµРЅРЅРѕ РІР°Р¶РЅРѕ РїСЂРё СЃРѕС…СЂР°РЅРµРЅРёРё Р»РёС…РѕСЂР°РґРєРё Рё Р±РѕР»РµРІРѕРіРѕ СЃРёРЅРґСЂРѕРјР° РЅР° С„РѕРЅРµ С‚РµСЂР°РїРёРё.',
        'РС‰РёС‚Рµ РЅРµ С‚РѕР»СЊРєРѕ РѕС‡Р°Рі, РЅРѕ Рё РїСЂРёР·РЅР°РєРё РѕСЃР»РѕР¶РЅРµРЅРёР№: Р°Р±СЃС†РµСЃСЃ, РїРёРѕСЃР°Р»СЊРїРёРЅРєСЃ, СЃРІРѕР±РѕРґРЅСѓСЋ Р¶РёРґРєРѕСЃС‚СЊ.',
        'РЈР»СЊС‚СЂР°Р·РІСѓРє РґРѕРїРѕР»РЅСЏРµС‚, РЅРѕ РЅРµ Р·Р°РјРµРЅСЏРµС‚ Р»Р°Р±РѕСЂР°С‚РѕСЂРЅСѓСЋ РІРµСЂРёС„РёРєР°С†РёСЋ РІРѕР·Р±СѓРґРёС‚РµР»СЏ.',
      ];
    case 'urogyne':
      return [
        'РћС†РµРЅРєСѓ С‚Р°Р·РѕРІРѕРіРѕ РґРЅР° РІС‹РїРѕР»РЅСЏР№С‚Рµ РІ РїРѕРєРѕРµ Рё РїСЂРё РїСЂРѕР±Рµ Р’Р°Р»СЊСЃР°Р»СЊРІС‹.',
        'РћСЃС‚Р°С‚РѕС‡РЅСѓСЋ РјРѕС‡Сѓ РёР·РјРµСЂСЏР№С‚Рµ РїРѕСЃР»Рµ СЃР°РјРѕСЃС‚РѕСЏС‚РµР»СЊРЅРѕРіРѕ РјРѕС‡РµРёСЃРїСѓСЃРєР°РЅРёСЏ.',
        'Р РµР·СѓР»СЊС‚Р°С‚С‹ РІРёР·СѓР°Р»РёР·Р°С†РёРё РёРЅС‚РµСЂРїСЂРµС‚РёСЂСѓР№С‚Рµ РІРјРµСЃС‚Рµ СЃ РґРЅРµРІРЅРёРєРѕРј РјРѕС‡РµРёСЃРїСѓСЃРєР°РЅРёСЏ Рё СѓСЂРѕРґРёРЅР°РјРёРєРѕР№.',
      ];
    case 'fertility':
      return [
        'Р”Р»СЏ Р’Р Рў РёСЃРїРѕР»СЊР·СѓР№С‚Рµ СЃС‚Р°РЅРґР°СЂС‚РёР·РёСЂРѕРІР°РЅРЅС‹Р№ Р±Р°Р·РѕРІС‹Р№ РѕСЃРјРѕС‚СЂ РЅР° СЂР°РЅРЅРёРµ РґРЅРё С†РёРєР»Р°.',
        'Р¤РѕР»Р»РёРєСѓР»РѕРјРµС‚СЂРёСЋ РїСЂРѕРІРѕРґРёС‚Рµ СЃРµСЂРёР№РЅРѕ, Р° РЅРµ РїРѕ РѕРґРЅРѕРјСѓ РёР·РјРµСЂРµРЅРёСЋ.',
        'Р›СЋР±РѕР№ РіРёРґСЂРѕСЃР°Р»СЊРїРёРЅРєСЃ РёР»Рё РґРµС„РѕСЂРјР°С†РёСЏ РїРѕР»РѕСЃС‚Рё РјР°С‚РєРё РѕРїРёСЃС‹РІР°Р№С‚Рµ РєР°Рє С„Р°РєС‚РѕСЂ СЃРЅРёР¶РµРЅРёСЏ РёРјРїР»Р°РЅС‚Р°С†РёРѕРЅРЅРѕРіРѕ РїРѕС‚РµРЅС†РёР°Р»Р°.',
      ];
    case 'oncology':
      return [
        'Р’СЃРµРіРґР° РґРѕРєСѓРјРµРЅС‚РёСЂСѓР№С‚Рµ СЃРѕР»РёРґРЅС‹Р№ РєРѕРјРїРѕРЅРµРЅС‚, РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРёР№ РєСЂРѕРІРѕС‚РѕРє, Р°СЃС†РёС‚ Рё Р»РёРјС„РѕСѓР·Р»С‹.',
        'РџСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° Р·Р»РѕРєР°С‡РµСЃС‚РІРµРЅРЅРѕСЃС‚СЊ РѕСЂРёРµРЅС‚РёСЂСѓР№С‚РµСЃСЊ РЅР° СЌРєСЃРїРµСЂС‚РЅРѕРµ РѕРїРёСЃР°РЅРёРµ, Р° РЅРµ С‚РѕР»СЊРєРѕ РЅР° РѕРґРёРЅ РјР°СЂРєС‘СЂ.',
        'РЈР—Р РґРѕР»Р¶РЅРѕ РїРѕРјРѕРіР°С‚СЊ СЃС‚Р°РґРёСЂРѕРІР°РЅРёСЋ Рё РјР°СЂС€СЂСѓС‚РёР·Р°С†РёРё Рє РѕРЅРєРѕРіРёРЅРµРєРѕР»РѕРіСѓ, Р° РЅРµ С‚РѕР»СЊРєРѕ РїРѕРґС‚РІРµСЂР¶РґР°С‚СЊ РЅР°Р»РёС‡РёРµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ.',
      ];
    case 'breast':
      return [
        'РЎСЂР°РІРЅРёРІР°Р№С‚Рµ РґР°РЅРЅС‹Рµ РЈР—Р СЃ РєР»РёРЅРёРєРѕР№, РјР°РјРјРѕРіСЂР°С„РёРµР№ Рё BI-RADS-РєР°С‚РµРіРѕСЂРёРµР№.',
        'РћС†РµРЅРёРІР°Р№С‚Рµ РїРѕРґРјС‹С€РµС‡РЅС‹Рµ Р»РёРјС„РѕСѓР·Р»С‹ РїСЂРё Р»СЋР±РѕРј РїРѕРґРѕР·СЂРёС‚РµР»СЊРЅРѕРј СЃРѕР»РёРґРЅРѕРј РѕС‡Р°РіРµ.',
        'РЈ РјРѕР»РѕРґС‹С… РїР°С†РёРµРЅС‚РѕРє РЈР—Р С‡Р°СЃС‚Рѕ СЏРІР»СЏРµС‚СЃСЏ РїРµСЂРІС‹Рј РјРµС‚РѕРґРѕРј, РЅРѕ РЅРµ Р·Р°РјРµРЅСЏРµС‚ Р±РёРѕРїСЃРёСЋ РїСЂРё СЃРѕРјРЅРёС‚РµР»СЊРЅРѕР№ РЅР°С…РѕРґРєРµ.',
      ];
    default:
      return [
        'Р”РѕРєСѓРјРµРЅС‚РёСЂСѓР№С‚Рµ Р»РѕРєР°Р»РёР·Р°С†РёСЋ РѕС‡Р°РіР°, РµРіРѕ СЂР°Р·РјРµСЂС‹ Рё РѕС‚РЅРѕС€РµРЅРёСЏ СЃ СЃРѕСЃРµРґРЅРёРјРё СЃС‚СЂСѓРєС‚СѓСЂР°РјРё РІ РѕРґРЅРѕРј РїСЂРѕС‚РѕРєРѕР»Рµ.',
        'РЎРѕРїРѕСЃС‚Р°РІР»СЏР№С‚Рµ СЌС…РѕРіСЂР°С„РёС‡РµСЃРєСѓСЋ РєР°СЂС‚РёРЅСѓ СЃ Р¶Р°Р»РѕР±Р°РјРё, С„Р°Р·РѕР№ С†РёРєР»Р° Рё РґР°РЅРЅС‹РјРё РѕСЃРјРѕС‚СЂР°.',
        'РџСЂРё СЃРѕРјРЅРёС‚РµР»СЊРЅРѕР№ РєР°СЂС‚РёРЅРµ РїР»Р°РЅРёСЂСѓР№С‚Рµ РєРѕРЅС‚СЂРѕР»СЊРЅРѕРµ РЈР—Р РёР»Рё СѓС‚РѕС‡РЅСЏСЋС‰СѓСЋ РІРёР·СѓР°Р»РёР·Р°С†РёСЋ.',
      ];
  }
};

const buildGynecologyGuidelines = (cluster: GynecologyCluster): Disease['treatment']['guidelines'] => {
  switch (cluster) {
    case 'endometriosis':
      return {
        eau: 'Р•РІСЂРѕРїРµР№СЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё ESHRE РїРѕРґРґРµСЂР¶РёРІР°СЋС‚ РєР»РёРЅРёС‡РµСЃРєРё РѕСЂРёРµРЅС‚РёСЂРѕРІР°РЅРЅС‹Р№ РґРёР°РіРЅРѕР· СЃ РѕРїРѕСЂРѕР№ РЅР° РўР’РЈР—Р/РњР Рў; Р»Р°РїР°СЂРѕСЃРєРѕРїРёСЏ РЅРµ СЏРІР»СЏРµС‚СЃСЏ РѕР±СЏР·Р°С‚РµР»СЊРЅС‹Рј РїРµСЂРІС‹Рј С€Р°РіРѕРј. РџРµСЂРІР°СЏ Р»РёРЅРёСЏ РґР»СЏ Р±РѕР»Рё: РљРћРљ, РїСЂРѕРіРµСЃС‚РёРЅС‹ РёР»Рё LNG-IUS; Р°РіРѕРЅРёСЃС‚С‹/Р°РЅС‚Р°РіРѕРЅРёСЃС‚С‹ Р“РЅР Р“ РѕР±С‹С‡РЅРѕ РІС‚РѕСЂР°СЏ Р»РёРЅРёСЏ СЃ add-back С‚РµСЂР°РїРёРµР№.',
        acog: 'ACOG РґРѕРїСѓСЃРєР°РµС‚ СЌРјРїРёСЂРёС‡РµСЃРєРѕРµ Р»РµС‡РµРЅРёРµ РїСЂРё С‚РёРїРёС‡РЅРѕР№ СЃРёРјРїС‚РѕРјР°С‚РёРєРµ Р±РµР· РЅРµРјРµРґР»РµРЅРЅРѕР№ Р»Р°РїР°СЂРѕСЃРєРѕРїРёРё. Р“РѕСЂРјРѕРЅР°Р»СЊРЅР°СЏ СЃСѓРїСЂРµСЃСЃРёСЏ РѕСЃС‚Р°РµС‚СЃСЏ Р±Р°Р·РѕРІРѕР№ С‚Р°РєС‚РёРєРѕР№; С…РёСЂСѓСЂРіРёСЏ РїРѕРєР°Р·Р°РЅР° РїСЂРё СЂРµС„СЂР°РєС‚РµСЂРЅРѕР№ Р±РѕР»Рё, РѕСЂРіР°РЅРЅРѕРј РІРѕРІР»РµС‡РµРЅРёРё, РєСЂСѓРїРЅС‹С… СЌРЅРґРѕРјРµС‚СЂРёРѕРјР°С… РёР»Рё РёР·РјРµРЅРµРЅРёРё СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅРѕР№ СЃС‚СЂР°С‚РµРіРёРё.',
        ranzcog: 'RANZCOG РІ living-guideline С„РѕСЂРјР°С‚Рµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ imaging-first РїРѕРґС…РѕРґ Рё РґР»РёС‚РµР»СЊРЅРѕРµ СЃРѕРІРјРµСЃС‚РЅРѕРµ РїСЂРёРЅСЏС‚РёРµ СЂРµС€РµРЅРёР№. РџРѕСЃР»Рµ РѕРїРµСЂР°С†РёРё СЂРµРєРѕРјРµРЅРґСѓРµС‚СЃСЏ РїРѕРґР°РІР»РµРЅРёРµ СЂРµС†РёРґРёРІР°, РµСЃР»Рё Р±РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ РЅРµ РїР»Р°РЅРёСЂСѓРµС‚СЃСЏ РЅРµРјРµРґР»РµРЅРЅРѕ.',
        ru: 'Р РѕСЃСЃРёР№СЃРєР°СЏ РєР»РёРЅРёС‡РµСЃРєР°СЏ РїСЂР°РєС‚РёРєР° РІ С†РµР»РѕРј СЃРѕРІРїР°РґР°РµС‚: СЌРєСЃРїРµСЂС‚РЅРѕРµ РЈР—Р Рё/РёР»Рё РњР Рў РґРѕ РёРЅРІР°Р·РёРІРЅРѕР№ РґРёР°РіРЅРѕСЃС‚РёРєРё, РґР»РёС‚РµР»СЊРЅР°СЏ РіРѕСЂРјРѕРЅР°Р»СЊРЅР°СЏ СЃСѓРїСЂРµСЃСЃРёСЏ РґР»СЏ РєРѕРЅС‚СЂРѕР»СЏ Р±РѕР»Рё Рё РїСЂРѕС„РёР»Р°РєС‚РёРєРё СЂРµС†РёРґРёРІР°, С…РёСЂСѓСЂРіРёСЏ РїРѕ СЃС‚СЂРѕРіРёРј РїРѕРєР°Р·Р°РЅРёСЏРј.',
      };
    case 'uterine':
      return {
        eau: 'Р•РІСЂРѕРїРµР№СЃРєРёРµ РіР°Р№РґР»Р°Р№РЅС‹ РїРѕ AUB, РіРёРїРµСЂРїР»Р°Р·РёРё Рё РІРЅСѓС‚СЂРёРјР°С‚РѕС‡РЅРѕР№ РїР°С‚РѕР»РѕРіРёРё РѕРїРёСЂР°СЋС‚СЃСЏ РЅР° PALM-COEIN, РўР’РЈР—Р РєР°Рє РїРµСЂРІС‹Р№ СЌС‚Р°Рї Рё РіРёСЃС‚РµСЂРѕСЃРєРѕРїРёСЋ РїСЂРё РѕС‡Р°РіРѕРІРѕРј РїСЂРѕС†РµСЃСЃРµ. LNG-IUS СЂР°СЃСЃРјР°С‚СЂРёРІР°РµС‚СЃСЏ РєР°Рє РЅР°РёР±РѕР»РµРµ СЌС„С„РµРєС‚РёРІРЅР°СЏ РјРµРґРёРєР°РјРµРЅС‚РѕР·РЅР°СЏ РѕРїС†РёСЏ РїСЂРё С…СЂРѕРЅРёС‡РµСЃРєРѕРј С‚СЏР¶РµР»РѕРј РєСЂРѕРІРѕС‚РµС‡РµРЅРёРё Рё РіРёРїРµСЂРїР»Р°Р·РёРё Р±РµР· Р°С‚РёРїРёРё.',
        acog: 'ACOG СЂРµРєРѕРјРµРЅРґСѓРµС‚ РєР»Р°СЃСЃРёС„РёС†РёСЂРѕРІР°С‚СЊ AUB РїРѕ PALM-COEIN, РІС‹РїРѕР»РЅСЏС‚СЊ Р±РёРѕРїСЃРёСЋ СЌРЅРґРѕРјРµС‚СЂРёСЏ Сѓ РїР°С†РёРµРЅС‚РѕРє 45+ РёР»Рё РјРѕР»РѕР¶Рµ РїСЂРё С„Р°РєС‚РѕСЂР°С… СЂРёСЃРєР°, Рё РЅР°С‡РёРЅР°С‚СЊ Р»РµС‡РµРЅРёРµ СЃ РјРµРґРёРєР°РјРµРЅС‚РѕР·РЅРѕР№ СЃС‚Р°Р±РёР»РёР·Р°С†РёРё, РµСЃР»Рё РїР°С†РёРµРЅС‚РєР° РіРµРјРѕРґРёРЅР°РјРёС‡РµСЃРєРё СЃС‚Р°Р±РёР»СЊРЅР°. РџСЂРё EIN/AEH СЃС‚Р°РЅРґР°СЂС‚РѕРј РѕСЃС‚Р°РµС‚СЃСЏ РіРёСЃС‚РµСЂСЌРєС‚РѕРјРёСЏ, Р° РїСЂРё СЃРѕС…СЂР°РЅРµРЅРёРё С„РµСЂС‚РёР»СЊРЅРѕСЃС‚Рё С‚СЂРµР±СѓРµС‚СЃСЏ СЃС‚СЂРѕРіРёР№ РїСЂРѕРіРµСЃС‚РёРЅРѕРІС‹Р№ РїСЂРѕС‚РѕРєРѕР» Рё РїРѕРІС‚РѕСЂРЅР°СЏ РјРѕСЂС„РѕР»РѕРіРёСЏ.',
        ranzcog: 'РђРІСЃС‚СЂР°Р»РёР№СЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїРѕРґРґРµСЂР¶РёРІР°СЋС‚ TVUS-first РїРѕРґС…РѕРґ, СЂР°РЅРЅРµРµ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ РѕС„РёСЃРЅРѕР№ РіРёСЃС‚РµСЂРѕСЃРєРѕРїРёРё РїСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РѕС‡Р°РіРѕРІСѓСЋ РїР°С‚РѕР»РѕРіРёСЋ Рё РїСЂРёРѕСЂРёС‚РµС‚ РѕСЂРіР°РЅРѕСЃРѕС…СЂР°РЅСЏСЋС‰РµР№ С‚Р°РєС‚РёРєРё, РµСЃР»Рё СЌС‚Рѕ Р±РµР·РѕРїР°СЃРЅРѕ. Р­РЅРґРѕРјРµС‚СЂРёР°Р»СЊРЅР°СЏ Р°Р±Р»СЏС†РёСЏ РґРѕРїСѓСЃС‚РёРјР° С‚РѕР»СЊРєРѕ РїРѕСЃР»Рµ РёСЃРєР»СЋС‡РµРЅРёСЏ РЅРµРѕРїР»Р°Р·РёРё Рё РїСЂРё РѕС‚СЃСѓС‚СЃС‚РІРёРё СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅС‹С… РїР»Р°РЅРѕРІ.',
        ru: 'Р РѕСЃСЃРёР№СЃРєРёРµ РєР»РёРЅСЂРµРє РѕСЂРёРµРЅС‚РёСЂСѓСЋС‚СЃСЏ РЅР° РЈР—Р, РјРѕСЂС„РѕР»РѕРіРёС‡РµСЃРєСѓСЋ РІРµСЂРёС„РёРєР°С†РёСЋ РіРёРїРµСЂРїР»Р°Р·РёРё Рё РіРёСЃС‚РµСЂРѕСЃРєРѕРїРёС‡РµСЃРєРѕРµ СѓРґР°Р»РµРЅРёРµ РѕС‡Р°РіРѕРІРѕР№ РїР°С‚РѕР»РѕРіРёРё. РџСЂРё Р°С‚РёРїРёС‡РµСЃРєРѕР№ РіРёРїРµСЂРїР»Р°Р·РёРё Рё РІС‹СЃРѕРєРѕРј РѕРЅРєРѕСЂРёСЃРєРµ РїСЂРµРґРїРѕС‡С‚РёС‚РµР»СЊРЅРѕ СЂР°РґРёРєР°Р»СЊРЅРѕРµ Р»РµС‡РµРЅРёРµ.',
      };
    case 'adnexal':
      return {
        eau: 'Р•РІСЂРѕРїРµР№СЃРєРёР№ РїРѕРґС…РѕРґ РѕРїРёСЂР°РµС‚СЃСЏ РЅР° СЌРєСЃРїРµСЂС‚РЅРѕРµ РўР’РЈР—Р Рё РјРѕСЂС„РѕР»РѕРіРёС‡РµСЃРєРёРµ РјРѕРґРµР»Рё СЂРёСЃРєР°, РІРєР»СЋС‡Р°СЏ IOTA, СЃ РњР Рў РґР»СЏ РёРЅРґРµС‚РµСЂРјРёРЅР°РЅС‚РЅС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёР№. РўР°РєС‚РёРєР° Р·Р°РІРёСЃРёС‚ РѕС‚ СЃС‚СЂСѓРєС‚СѓСЂС‹ Рё РѕРЅРєРѕСЂРёСЃРєР°: С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅС‹Рµ РєРёСЃС‚С‹ РЅР°Р±Р»СЋРґР°СЋС‚, РїРѕРґРѕР·СЂРёС‚РµР»СЊРЅС‹Рµ РјР°СЃСЃС‹ РЅР°РїСЂР°РІР»СЏСЋС‚ Рє РѕРЅРєРѕРіРёРЅРµРєРѕР»РѕРіСѓ.',
        acog: 'ACOG СЂРµРєРѕРјРµРЅРґСѓРµС‚ РўР’РЈР—Р РєР°Рє РїРµСЂРІС‹Р№ РјРµС‚РѕРґ РѕС†РµРЅРєРё Р°РґРЅРµРєСЃР°Р»СЊРЅС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёР№, Р° РїРѕРєР°Р·Р°РЅРёСЏ Рє РѕРїРµСЂР°С†РёРё РѕРїСЂРµРґРµР»СЏС‚СЊ РїРѕ СЃРёРјРїС‚РѕРјР°Рј, РїРµСЂСЃРёСЃС‚РµРЅС†РёРё, СЂР°Р·РјРµСЂР°Рј Рё РїРѕРґРѕР·СЂРµРЅРёСЋ РЅР° Р·Р»РѕРєР°С‡РµСЃС‚РІРµРЅРЅРѕСЃС‚СЊ. РџСЂРё РїРµСЂРµРєСЂСѓС‚Рµ РїСЂРёРѕСЂРёС‚РµС‚РѕРј РѕСЃС‚Р°РµС‚СЃСЏ СЃСЂРѕС‡РЅР°СЏ РѕСЂРіР°РЅРѕСЃРѕС…СЂР°РЅСЏСЋС‰Р°СЏ РґРµС‚РѕСЂСЃРёСЏ, РµСЃР»Рё СЌС‚Рѕ РІРѕР·РјРѕР¶РЅРѕ.',
        ranzcog: 'РђРІСЃС‚СЂР°Р»РёР№СЃРєР°СЏ РїСЂР°РєС‚РёРєР° РїРѕРґРґРµСЂР¶РёРІР°РµС‚ РјРёРЅРёРјР°Р»СЊРЅРѕ РёРЅРІР°Р·РёРІРЅСѓСЋ С…РёСЂСѓСЂРіРёСЋ РґР»СЏ РґРѕР±СЂРѕРєР°С‡РµСЃС‚РІРµРЅРЅС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёР№ Рё СЂР°РЅРЅРµРµ РІС‹РґРµР»РµРЅРёРµ РїР°С†РёРµРЅС‚РѕРє СЃ РІС‹СЃРѕРєРёРј СЂРёСЃРєРѕРј СЂР°РєР°. РќР°Р±Р»СЋРґРµРЅРёРµ РїСЂРµРґРїРѕС‡С‚РёС‚РµР»СЊРЅРѕ РїСЂРё С‚РёРїРёС‡РЅС‹С… С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅС‹С… РєРёСЃС‚Р°С… Р±РµР· РЅР°СЃС‚РѕСЂР°Р¶РёРІР°СЋС‰РёС… РїСЂРёР·РЅР°РєРѕРІ.',
        ru: 'Р’ СЂРѕСЃСЃРёР№СЃРєРёС… СЂРµРєРѕРјРµРЅРґР°С†РёСЏС… С‚Р°РєР¶Рµ СЃРѕС…СЂР°РЅСЏРµС‚СЃСЏ СЂР°Р·РґРµР»РµРЅРёРµ РЅР° РЅР°Р±Р»СЋРґРµРЅРёРµ С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅС‹С… РєРёСЃС‚ Рё РѕРїРµСЂР°С‚РёРІРЅРѕРµ Р»РµС‡РµРЅРёРµ РїРµСЂСЃРёСЃС‚РёСЂСѓСЋС‰РёС…, СЃРёРјРїС‚РѕРјРЅС‹С… РёР»Рё РїРѕРґРѕР·СЂРёС‚РµР»СЊРЅС‹С… РѕР±СЂР°Р·РѕРІР°РЅРёР№. Р”Р»СЏ РѕСЃС‚СЂС‹С… РѕСЃР»РѕР¶РЅРµРЅРёР№ РїРѕРєР°Р·Р°РЅР° СЌРєСЃС‚СЂРµРЅРЅР°СЏ Р»Р°РїР°СЂРѕСЃРєРѕРїРёС‡РµСЃРєР°СЏ С‚Р°РєС‚РёРєР°.',
      };
    case 'infection':
      return {
        eau: 'Р•РІСЂРѕРїРµР№СЃРєРёРµ Рё CDC-СЃРѕРІРјРµСЃС‚РёРјС‹Рµ РїРѕРґС…РѕРґС‹ С‚СЂРµР±СѓСЋС‚ РЅРёР·РєРѕРіРѕ РїРѕСЂРѕРіР° РґР»СЏ СЌРјРїРёСЂРёС‡РµСЃРєРѕРіРѕ Р»РµС‡РµРЅРёСЏ PID, NAAT-РІРµСЂРёС„РёРєР°С†РёРё GC/CT Рё РїРµСЂРµСЃРјРѕС‚СЂР° С‡РµСЂРµР· 48-72 С‡Р°СЃР°. TOA СЂР°СЃСЃРјР°С‚СЂРёРІР°РµС‚СЃСЏ РєР°Рє С‚СЏР¶РµР»Р°СЏ С„РѕСЂРјР° СЃ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕР№ РіРѕСЃРїРёС‚Р°Р»РёР·Р°С†РёРµР№ Рё РІРѕР·РјРѕР¶РЅС‹Рј РґСЂРµРЅРёСЂРѕРІР°РЅРёРµРј.',
        acog: 'ACOG Рё CDC РїРѕРґС‡РµСЂРєРёРІР°СЋС‚ СЃРёРЅРґСЂРѕРјРЅС‹Р№ Рё СЂР°РЅРЅРёР№ РїРѕРґС…РѕРґ: С†РµС„С‚СЂРёР°РєСЃРѕРЅ + РґРѕРєСЃРёС†РёРєР»РёРЅ + РјРµС‚СЂРѕРЅРёРґР°Р·РѕР» РґР»СЏ Р°РјР±СѓР»Р°С‚РѕСЂРЅРѕР№ PID, РїР°СЂС‚РЅС‘СЂ-РјРµРЅРµРґР¶РјРµРЅС‚ РїСЂРё РРџРџРџ Рё РѕС‚РєР°Р· РѕС‚ РѕР¶РёРґР°РЅРёСЏ Р»Р°Р±РѕСЂР°С‚РѕСЂРЅРѕРіРѕ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ РїСЂРё С‚РёРїРёС‡РЅРѕР№ РєР»РёРЅРёРєРµ. Р РµС†РёРґРёРІРёСЂСѓСЋС‰РёР№ BV Рё РєР°РЅРґРёРґРѕР· С‚СЂРµР±СѓСЋС‚ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ РґРёР°РіРЅРѕР·Р° Рё РґР»РёС‚РµР»СЊРЅС‹С… suppressive СЃС…РµРј Сѓ РѕС‚РѕР±СЂР°РЅРЅС‹С… РїР°С†РёРµРЅС‚РѕРє.',
        ranzcog: 'РђРІСЃС‚СЂР°Р»РёР№СЃРєРёРµ STI-guidelines Р±Р»РёР·РєРё Рє Р°РјРµСЂРёРєР°РЅСЃРєРёРј, РЅРѕ РІ РЅРµРєРѕС‚РѕСЂС‹С… СЂР°Р·РґРµР»Р°С… Р±РѕР»РµРµ Р°РєС‚РёРІРЅРѕ РѕР±СЃСѓР¶РґР°СЋС‚ Р»РµС‡РµРЅРёРµ РїРѕСЃС‚РѕСЏРЅРЅРѕРіРѕ РїР°СЂС‚РЅРµСЂР°, РѕСЃРѕР±РµРЅРЅРѕ РїСЂРё СЂРµС†РёРґРёРІРёСЂСѓСЋС‰РµРј BV, Рё РѕРїРёСЂР°СЋС‚СЃСЏ РЅР° Р»РѕРєР°Р»СЊРЅС‹Р№ AMR-РєРѕРЅС‚РµРєСЃС‚. РџРѕРґС‡РµСЂРєРёРІР°РµС‚СЃСЏ РѕР±СЏР·Р°С‚РµР»СЊРЅС‹Р№ РїРѕРІС‚РѕСЂРЅС‹Р№ РєРѕРЅС‚СЂРѕР»СЊ СЃРёРјРїС‚РѕРјРѕРІ Рё РїСЂРѕС„РёР»Р°РєС‚РёРєР° СЂРµРёРЅС„РµРєС†РёРё.',
        ru: 'Р РѕСЃСЃРёР№СЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РѕР±С‹С‡РЅРѕ Р±РѕР»РµРµ РіРѕСЃРїРёС‚Р°Р»СЊРЅРѕ РѕСЂРёРµРЅС‚РёСЂРѕРІР°РЅС‹ РїСЂРё РІРѕСЃС…РѕРґСЏС‰РµР№ РёРЅС„РµРєС†РёРё Рё РѕСЃР»РѕР¶РЅРµРЅРЅРѕРј С‚РµС‡РµРЅРёРё, РЅРѕ РІ С†РµР»РѕРј СЃРѕРІРїР°РґР°СЋС‚ РїРѕ РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё СЂР°РЅРЅРµР№ Р°РЅС‚РёР±Р°РєС‚РµСЂРёР°Р»СЊРЅРѕР№ С‚РµСЂР°РїРёРё, Р»Р°Р±РѕСЂР°С‚РѕСЂРЅРѕР№ РІРµСЂРёС„РёРєР°С†РёРё РІРѕР·Р±СѓРґРёС‚РµР»СЏ Рё Р»РµС‡РµРЅРёСЋ РїРѕР»РѕРІРѕРіРѕ РїР°СЂС‚РЅС‘СЂР° РїСЂРё РїРѕРґС‚РІРµСЂР¶РґРµРЅРЅРѕР№ РРџРџРџ.',
      };
    case 'urogyne':
      return {
        eau: 'EAU Рё РµРІСЂРѕРїРµР№СЃРєР°СЏ СѓСЂРѕРіРёРЅРµРєРѕР»РѕРіРёСЏ СЂРµРєРѕРјРµРЅРґСѓСЋС‚ РєР»РёРЅРёС‡РµСЃРєСѓСЋ РґРёР°РіРЅРѕСЃС‚РёРєСѓ РїСЂРѕР»Р°РїСЃР° Рё РЅРµРґРµСЂР¶Р°РЅРёСЏ СЃ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµРј POP-Q, РґРЅРµРІРЅРёРєРѕРІ РјРѕС‡РµРёСЃРїСѓСЃРєР°РЅРёСЏ Рё СЃРµР»РµРєС‚РёРІРЅРѕР№ СѓСЂРѕРґРёРЅР°РјРёРєРё. РџРµСЂРІР°СЏ Р»РёРЅРёСЏ: supervised pelvic floor muscle training, pessary Рё РєРѕСЂСЂРµРєС†РёСЏ С„Р°РєС‚РѕСЂРѕРІ СЂРёСЃРєР°.',
        acog: 'ACOG С‚Р°РєР¶Рµ СЃС‚Р°РІРёС‚ РєРѕРЅСЃРµСЂРІР°С‚РёРІРЅРѕРµ Р»РµС‡РµРЅРёРµ РЅР° РїРµСЂРІРѕРµ РјРµСЃС‚Рѕ Рё РЅРµ С‚СЂРµР±СѓРµС‚ СЂСѓС‚РёРЅРЅРѕР№ СѓСЂРѕРґРёРЅР°РјРёРєРё РїРµСЂРµРґ РЅРµРѕСЃР»РѕР¶РЅРµРЅРЅРѕР№ РїРµСЂРІРёС‡РЅРѕР№ РѕРїРµСЂР°С†РёРµР№ РїСЂРё СЃС‚СЂРµСЃСЃРѕРІРѕРј РЅРµРґРµСЂР¶Р°РЅРёРё. Midurethral sling СЃРѕС…СЂР°РЅСЏРµС‚ СЂРѕР»СЊ СЌС„С„РµРєС‚РёРІРЅРѕР№ С…РёСЂСѓСЂРіРёРё Сѓ РѕС‚РѕР±СЂР°РЅРЅС‹С… РїР°С†РёРµРЅС‚РѕРє.',
        ranzcog: 'RANZCOG РїРѕРґРґРµСЂР¶РёРІР°РµС‚ РїРµСЂСЃРѕРЅР°Р»РёР·РёСЂРѕРІР°РЅРЅСѓСЋ РєРѕСЂСЂРµРєС†РёСЋ РїСЂРѕР»Р°РїСЃР° Рё РЅРµРґРµСЂР¶Р°РЅРёСЏ СЃ РѕСЃС‚РѕСЂРѕР¶РЅС‹Рј РѕС‚РЅРѕС€РµРЅРёРµРј Рє С‚СЂР°РЅСЃРІР°РіРёРЅР°Р»СЊРЅС‹Рј СЃРµС‚РєР°Рј. Р”Р»СЏ OAB Рё mixed UI СЂРµРєРѕРјРµРЅРґСѓРµС‚СЃСЏ РїРѕС€Р°РіРѕРІР°СЏ СЌСЃРєР°Р»Р°С†РёСЏ РѕС‚ РїРѕРІРµРґРµРЅС‡РµСЃРєРѕР№ С‚РµСЂР°РїРёРё Рє РјРµРґРёРєР°РјРµРЅС‚Р°Рј Рё Р·Р°С‚РµРј Рє РёРЅРІР°Р·РёРІРЅС‹Рј РјРµС‚РѕРґР°Рј.',
        ru: 'Р РѕСЃСЃРёР№СЃРєРёРµ РєР»РёРЅСЂРµРє С‚Р°РєР¶Рµ Р°РєС†РµРЅС‚РёСЂСѓСЋС‚ СѓРїСЂР°Р¶РЅРµРЅРёСЏ С‚Р°Р·РѕРІРѕРіРѕ РґРЅР°, РїРµСЃСЃР°СЂРёРё Рё staged-РїРѕРґС…РѕРґ Рє С…РёСЂСѓСЂРіРёРё. РџСЂРё СЃРІРёС‰Р°С… Рё СЂРµС†РёРґРёРІРЅРѕРј РїСЂРѕР»Р°РїСЃРµ РїСЂРµРґРїРѕС‡С‚РёС‚РµР»СЊРЅРѕ РІРµРґРµРЅРёРµ РІ СЃРїРµС†РёР°Р»РёР·РёСЂРѕРІР°РЅРЅС‹С… СЂРµРєРѕРЅСЃС‚СЂСѓРєС‚РёРІРЅС‹С… С†РµРЅС‚СЂР°С….',
      };
    case 'fertility':
      return {
        eau: 'ESHRE/ASRM-РєРѕРЅСЃРµРЅСЃСѓСЃ С‚СЂРµР±СѓРµС‚ СЃС‚СЂСѓРєС‚СѓСЂРёСЂРѕРІР°РЅРЅРѕРіРѕ, РЅРѕ РЅРµ РїРµСЂРµРіСЂСѓР¶РµРЅРЅРѕРіРѕ РѕР±СЃР»РµРґРѕРІР°РЅРёСЏ РїР°СЂС‹: РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ РѕРІСѓР»СЏС†РёРё, РѕС†РµРЅРєР° РјР°С‚РєРё Рё С‚СЂСѓР±, СЃРїРµСЂРјРѕРіСЂР°РјРјР°, РѕРіСЂР°РЅРёС‡РµРЅРёРµ РјР°Р»РѕРёРЅС„РѕСЂРјР°С‚РёРІРЅС‹С… add-on С‚РµСЃС‚РѕРІ. РџСЂРё РЅРµРѕР±СЉСЏСЃРЅРёРјРѕРј Р±РµСЃРїР»РѕРґРёРё Р•РІСЂРѕРїР° С‡Р°С‰Рµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ IUI СЃ РєРѕРЅС‚СЂРѕР»РёСЂСѓРµРјРѕР№ СЃС‚РёРјСѓР»СЏС†РёРµР№ РєР°Рє РїРµСЂРІС‹Р№ Р°РєС‚РёРІРЅС‹Р№ С€Р°Рі.',
        acog: 'ACOG Рё ASRM СЂРµРєРѕРјРµРЅРґСѓСЋС‚ РЅР°С‡РёРЅР°С‚СЊ РѕР±СЃР»РµРґРѕРІР°РЅРёРµ С‡РµСЂРµР· 12 РјРµСЃСЏС†РµРІ, Р° РїРѕСЃР»Рµ 35 Р»РµС‚ С‡РµСЂРµР· 6 РјРµСЃСЏС†РµРІ РёР»Рё СЂР°РЅСЊС€Рµ РїСЂРё С„Р°РєС‚РѕСЂР°С… СЂРёСЃРєР°. ICSI РЅРµ РґРѕР»Р¶РЅРѕ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊСЃСЏ СЂСѓС‚РёРЅРЅРѕ РІРЅРµ РјСѓР¶СЃРєРѕРіРѕ С„Р°РєС‚РѕСЂР°, Р° PGT-A РЅРµ СЃС‡РёС‚Р°РµС‚СЃСЏ СѓРЅРёРІРµСЂСЃР°Р»СЊРЅРѕ РїРѕР»РµР·РЅС‹Рј РґР»СЏ РІСЃРµС… С†РёРєР»РѕРІ IVF.',
        ranzcog: 'РђРІСЃС‚СЂР°Р»РёР№СЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё 2024 РїРѕ РЅРµРѕР±СЉСЏСЃРЅРёРјРѕРјСѓ Р±РµСЃРїР»РѕРґРёСЋ Р±Р»РёР·РєРѕ Р°РґР°РїС‚РёСЂСѓСЋС‚ ESHRE: staged-РїРµСЂРµС…РѕРґ РѕС‚ IUI Рє IVF, emphasis РЅР° cumulative live birth Рё РїСЂРѕС„РёР»Р°РєС‚РёРєСѓ OHSS. Р”РѕРЅРѕСЂСЃРєРёРµ РїСЂРѕРіСЂР°РјРјС‹ Рё PGT С‚СЂРµР±СѓСЋС‚ РѕС‚РґРµР»СЊРЅРѕРіРѕ РіРµРЅРµС‚РёС‡РµСЃРєРѕРіРѕ Рё СЋСЂРёРґРёС‡РµСЃРєРѕРіРѕ РєРѕРЅСЃСѓР»СЊС‚РёСЂРѕРІР°РЅРёСЏ.',
        ru: 'Р РѕСЃСЃРёР№СЃРєР°СЏ РїСЂР°РєС‚РёРєР° РІ С†РµР»РѕРј СЃРѕРІРїР°РґР°РµС‚ РїРѕ РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕСЃС‚Рё: Р±Р°Р·РѕРІРѕРµ РѕР±СЃР»РµРґРѕРІР°РЅРёРµ РїР°СЂС‹, РєРѕСЂСЂРµРєС†РёСЏ РІС‹СЏРІР»РµРЅРЅРѕРіРѕ С„Р°РєС‚РѕСЂР° Рё РїРµСЂРµС…РѕРґ Рє Р’Р Рў Р±РµР· Р·Р°С‚СЏР¶РєРё РїСЂРё РІРѕР·СЂР°СЃС‚РЅРѕРј РёР»Рё С‚СЂСѓР±РЅРѕРј С„Р°РєС‚РѕСЂРµ. Р”РѕРЅРѕСЂСЃРєРёРµ РїСЂРѕРіСЂР°РјРјС‹ Рё Р­РљРћ РёСЃРїРѕР»СЊР·СѓСЋС‚СЃСЏ РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј СЃ СѓС‡РµС‚РѕРј РЅРѕСЂРјР°С‚РёРІРЅС‹С… РѕРіСЂР°РЅРёС‡РµРЅРёР№ Рё РјР°СЂС€СЂСѓС‚РёР·Р°С†РёРё РІ РїСЂРѕС„РёР»СЊРЅС‹Р№ С†РµРЅС‚СЂ.',
      };
    case 'endocrine':
      return {
        eau: 'Р•РІСЂРѕРїРµР№СЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё 2023-2024 РїРѕ PCOS Рё POI РѕР±РЅРѕРІРёР»Рё РїРѕРґС…РѕРґ: РІ РґРёР°РіРЅРѕСЃС‚РёРєРµ PCOS Сѓ РІР·СЂРѕСЃР»С‹С… РјРѕР¶РµС‚ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊСЃСЏ AMH РІРјРµСЃС‚Рѕ РЈР—Р, Р° РґРёР°РіРЅРѕР· POI РґРѕРїСѓСЃС‚РёРј СѓР¶Рµ РїСЂРё РєР»РёРЅРёС‡РµСЃРєРѕР№ РєР°СЂС‚РёРЅРµ Рё РѕРґРЅРѕРј FSH >25 IU/L. Р”Р»СЏ РЎРџРљРЇ РїРµСЂРІРѕР№ Р»РёРЅРёРµР№ РїСЂРё Р±РµСЃРїР»РѕРґРёРё РѕСЃС‚Р°РµС‚СЃСЏ Р»РµС‚СЂРѕР·РѕР», Р° lifestyle Рё РјРµС‚Р°Р±РѕР»РёС‡РµСЃРєРёР№ СЃРєСЂРёРЅРёРЅРі РѕР±СЏР·Р°С‚РµР»СЊРЅС‹ РґР»СЏ РІСЃРµС… С„РµРЅРѕС‚РёРїРѕРІ.',
        acog: 'ACOG/ASRM РїРѕРґРґРµСЂР¶РёРІР°СЋС‚ СЌС‚Р°РїРЅС‹Р№ РіРѕСЂРјРѕРЅР°Р»СЊРЅС‹Р№ Р°Р»РіРѕСЂРёС‚Рј РїСЂРё Р°РјРµРЅРѕСЂРµРµ Рё С…СЂРѕРЅРёС‡РµСЃРєРѕР№ Р°РЅРѕРІСѓР»СЏС†РёРё: РёСЃРєР»СЋС‡РёС‚СЊ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ, РўРўР“, РїСЂРѕР»Р°РєС‚РёРЅ, РіРёРїРѕСЌСЃС‚СЂРѕРіРµРЅРёР·Рј Рё РіРёРїРµСЂР°РЅРґСЂРѕРіРµРЅРёСЋ. РџСЂРё РіРёРїРµСЂРїСЂРѕР»Р°РєС‚РёРЅРµРјРёРё РїСЂРµРїР°СЂР°С‚РѕРј РїРµСЂРІРѕР№ Р»РёРЅРёРё РѕСЃС‚Р°РµС‚СЃСЏ РєР°Р±РµСЂРіРѕР»РёРЅ; РїСЂРё С…СЂРѕРЅРёС‡РµСЃРєРѕР№ Р°РЅРѕРІСѓР»СЏС†РёРё РІР°Р¶РЅР° Р·Р°С‰РёС‚Р° СЌРЅРґРѕРјРµС‚СЂРёСЏ С†РёРєР»РёС‡РµСЃРєРёРјРё РїСЂРѕРіРµСЃС‚РёРЅР°РјРё РёР»Рё РљРћРљ.',
        ranzcog: 'РђРІСЃС‚СЂР°Р»РёР№СЃРєРёР№ РїРѕРґС…РѕРґ СЃРѕРІРїР°РґР°РµС‚ СЃ РјРµР¶РґСѓРЅР°СЂРѕРґРЅС‹Рј РєРѕРЅСЃРµРЅСЃСѓСЃРѕРј: РѕСЃС‚РѕСЂРѕР¶РЅРµРµ РґРёР°РіРЅРѕСЃС‚РёСЂРѕРІР°С‚СЊ PCOS Сѓ РїРѕРґСЂРѕСЃС‚РєРѕРІ, РЅРµ РѕРїРёСЂР°С‚СЊСЃСЏ РЅР° РЈР—Р РІ СЌС‚РѕР№ РіСЂСѓРїРїРµ Рё СЂР°СЃСЃРјР°С‚СЂРёРІР°С‚СЊ РјРµРЅРѕРїР°СѓР·Р°Р»СЊРЅСѓСЋ РіРѕСЂРјРѕРЅР°Р»СЊРЅСѓСЋ С‚РµСЂР°РїРёСЋ РєР°Рє СЃС‚Р°РЅРґР°СЂС‚ РґР»СЏ POI Рё СЃРёРјРїС‚РѕРјРЅРѕР№ РјРµРЅРѕРїР°СѓР·С‹ РїСЂРё РѕС‚СЃСѓС‚СЃС‚РІРёРё РїСЂРѕС‚РёРІРѕРїРѕРєР°Р·Р°РЅРёР№.',
        ru: 'Р РѕСЃСЃРёР№СЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїРѕ Р°РјРµРЅРѕСЂРµРµ/РѕР»РёРіРѕРјРµРЅРѕСЂРµРµ Рё РјРµРЅРѕРїР°СѓР·Рµ РІ С†РµР»РѕРј СЃРѕРіР»Р°СЃСѓСЋС‚СЃСЏ СЃ РјРµР¶РґСѓРЅР°СЂРѕРґРЅС‹РјРё Р°Р»РіРѕСЂРёС‚РјР°РјРё: РѕР±СЏР·Р°С‚РµР»СЊРЅР° СЌС‚РёРѕР»РѕРіРёС‡РµСЃРєР°СЏ РґРёР°РіРЅРѕСЃС‚РёРєР°, РїСЂРѕС„РёР»Р°РєС‚РёРєР° РіРёРїРµСЂРїР»Р°Р·РёРё СЌРЅРґРѕРјРµС‚СЂРёСЏ РїСЂРё Р°РЅРѕРІСѓР»СЏС†РёРё Рё Р—Р“Рў/РњР“Рў РїСЂРё РџРќРЇ Рё РІС‹СЂР°Р¶РµРЅРЅРѕРј РіРёРїРѕСЌСЃС‚СЂРѕРіРµРЅРёР·РјРµ СЃ РєРѕРЅС‚СЂРѕР»РµРј СЂРёСЃРєРѕРІ.',
      };
    case 'oncology':
      return {
        eau: 'Р•РІСЂРѕРїРµР№СЃРєРёРµ ESGO/ESMO-РіР°Р№РґР»Р°Р№РЅС‹ С‚СЂРµР±СѓСЋС‚ РјРѕСЂС„РѕР»РѕРіРёС‡РµСЃРєРѕР№ РІРµСЂРёС„РёРєР°С†РёРё, СЃС‚Р°РґРёСЂРѕРІР°РЅРёСЏ РїРѕ СЃРѕРІСЂРµРјРµРЅРЅС‹Рј FIGO-РєСЂРёС‚РµСЂРёСЏРј Рё Р»РµС‡РµРЅРёСЏ РІ С†РµРЅС‚СЂР°С… СЃ onco-surgical quality control. Р”Р»СЏ СЌРЅРґРѕРјРµС‚СЂРёСЏ Рё СЏРёС‡РЅРёРєРѕРІ РІСЃС‘ Р±РѕР»СЊС€РµРµ Р·РЅР°С‡РµРЅРёРµ РёРјРµРµС‚ РјРѕР»РµРєСѓР»СЏСЂРЅР°СЏ СЃС‚СЂР°С‚РёС„РёРєР°С†РёСЏ Рё РѕР±СЏР·Р°С‚РµР»СЊРЅРѕРµ РіРµРЅРµС‚РёС‡РµСЃРєРѕРµ С‚РµСЃС‚РёСЂРѕРІР°РЅРёРµ BRCA/MMR РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј.',
        acog: 'РђРјРµСЂРёРєР°РЅСЃРєРёР№ РїРѕРґС…РѕРґ Р±Р»РёР·РѕРє РїРѕ СЃСѓС‚Рё: Р±РёРѕРїСЃРёСЏ РґРѕ РѕРєРѕРЅС‡Р°С‚РµР»СЊРЅРѕР№ С‚Р°РєС‚РёРєРё, СЃС‚Р°РґРёСЂСѓСЋС‰Р°СЏ С…РёСЂСѓСЂРіРёСЏ РёР»Рё chemoradiation РїРѕ СЃС‚Р°РґРёРё, sentinel mapping РІ СЂР°РЅРЅРёС… СЃС‚Р°РґРёСЏС… С‚Р°Рј, РіРґРµ СЌС‚Рѕ РІР°Р»РёРґРёСЂРѕРІР°РЅРѕ, Рё biomarker-driven СЃРёСЃС‚РµРјРЅР°СЏ С‚РµСЂР°РїРёСЏ РїСЂРё СЂРµС†РёРґРёРІРµ/РјРµС‚Р°СЃС‚Р°Р·Р°С…. РџСЂРё CIN РґРѕРїСѓСЃРєР°РµС‚СЃСЏ risk-based triage Рё РІ РѕС‚РґРµР»СЊРЅС‹С… СЃС†РµРЅР°СЂРёСЏС… expedited treatment.',
        ranzcog: 'РђРІСЃС‚СЂР°Р»РёР№СЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїРѕРґРґРµСЂР¶РёРІР°СЋС‚ Р»РµС‡РµРЅРёРµ РІ СЃРїРµС†РёР°Р»РёР·РёСЂРѕРІР°РЅРЅС‹С… РѕРЅРєРѕС†РµРЅС‚СЂР°С…, MRI/PET-CT РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј Рё РѕСЂРіР°РЅРѕСЃРѕС…СЂР°РЅСЏСЋС‰РёРµ РѕРїС†РёРё С‚РѕР»СЊРєРѕ Сѓ СЃС‚СЂРѕРіРѕ РѕС‚РѕР±СЂР°РЅРЅС‹С… РїР°С†РёРµРЅС‚РѕРє. Р”Р»СЏ VIN/vulvar cancer Рё rare tumors Р°РєС†РµРЅС‚ СЃРґРµР»Р°РЅ РЅР° РґР»РёС‚РµР»СЊРЅРѕРј РєР»РёРЅРёС‡РµСЃРєРѕРј РЅР°Р±Р»СЋРґРµРЅРёРё Рё СЂР°РЅРЅРµРј РІС‹СЏРІР»РµРЅРёРё СЂРµС†РёРґРёРІР°.',
        ru: 'Р РѕСЃСЃРёР№СЃРєРёРµ РєР»РёРЅСЂРµРє РІ С†РµР»РѕРј СЃР»РµРґСѓСЋС‚ С‚РµРј Р¶Рµ РїСЂРёРЅС†РёРїР°Рј: РѕР±СЏР·Р°С‚РµР»СЊРЅР°СЏ РјРѕСЂС„РѕР»РѕРіРёСЏ, FIGO-СЃС‚Р°РґРёСЂРѕРІР°РЅРёРµ, С…РёСЂСѓСЂРіРёСЏ РїСЂРё СЂРµР·РµРєС‚Р°Р±РµР»СЊРЅС‹С… СЂР°РЅРЅРёС… СЃС‚Р°РґРёСЏС… Рё Р»СѓС‡РµРІР°СЏ/С…РёРјРёРѕР»СѓС‡РµРІР°СЏ РёР»Рё СЃРёСЃС‚РµРјРЅР°СЏ С‚РµСЂР°РїРёСЏ РїСЂРё СЂР°СЃРїСЂРѕСЃС‚СЂР°РЅРµРЅРЅРѕРј РїСЂРѕС†РµСЃСЃРµ. Р”РѕСЃС‚СѓРї Рє РјРѕР»РµРєСѓР»СЏСЂРЅС‹Рј С‚РµСЃС‚Р°Рј Рё РЅРѕРІС‹Рј С‚Р°СЂРіРµС‚РЅС‹Рј СЃС…РµРјР°Рј РјРѕР¶РµС‚ Р·Р°РІРёСЃРµС‚СЊ РѕС‚ С†РµРЅС‚СЂР°.',
      };
    case 'breast':
      return {
        eau: 'Р•РІСЂРѕРїРµР№СЃРєР°СЏ Рё РјРµР¶РґСѓРЅР°СЂРѕРґРЅР°СЏ breast-oncology РїСЂР°РєС‚РёРєР° РѕРїРёСЂР°РµС‚СЃСЏ РЅР° triple assessment: РєР»РёРЅРёС‡РµСЃРєРёР№ РѕСЃРјРѕС‚СЂ, РІРёР·СѓР°Р»РёР·Р°С†РёСЏ Рё core-biopsy. Р”Р»СЏ РґРѕР±СЂРѕРєР°С‡РµСЃС‚РІРµРЅРЅС‹С… СЃРѕСЃС‚РѕСЏРЅРёР№ РїСЂРµРґРїРѕС‡С‚РёС‚РµР»СЊРЅРѕ РёР·Р±РµРіР°С‚СЊ РЅРµРЅСѓР¶РЅС‹С… РѕРїРµСЂР°С†РёР№, РµСЃР»Рё imaging-pathology concordant; РґР»СЏ СЂР°РєР° РѕР±СЏР·Р°С‚РµР»СЊРЅС‹ receptor status, СЃС‚Р°РґРёСЂРѕРІР°РЅРёРµ РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј Рё subtype-based Р»РµС‡РµРЅРёРµ.',
        acog: 'ACOG Рё Р°РјРµСЂРёРєР°РЅСЃРєРёРµ breast guidelines РїРѕРґРґРµСЂР¶РёРІР°СЋС‚ conservative management РґР»СЏ СЃС‚Р°Р±РёР»СЊРЅС‹С… fibroadenoma Рё benign fibrocystic changes РїРѕСЃР»Рµ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ РґРѕР±СЂРѕРєР°С‡РµСЃС‚РІРµРЅРЅРѕРіРѕ С…Р°СЂР°РєС‚РµСЂР°. РџСЂРё СЂР°РєРµ РјРѕР»РѕС‡РЅРѕР№ Р¶РµР»РµР·С‹ СЃС‚Р°РЅРґР°СЂС‚РѕРј РѕСЃС‚Р°СЋС‚СЃСЏ breast-conserving surgery РёР»Рё mastectomy СЃ СѓС‡РµС‚РѕРј Р±РёРѕР»РѕРіРёРё РѕРїСѓС…РѕР»Рё, РѕР±СЏР·Р°С‚РµР»СЊРЅРѕР№ СЃРёСЃС‚РµРјРЅРѕР№ С‚РµСЂР°РїРёРё РїРѕ РїРѕРґС‚РёРїСѓ Рё Р±РµР· СЂСѓС‚РёРЅРЅРѕРіРѕ surveillance imaging Сѓ Р±РµСЃСЃРёРјРїС‚РѕРјРЅС‹С… РІС‹Р¶РёРІС€РёС….',
        ranzcog: 'РђРІСЃС‚СЂР°Р»РёР№СЃРєРёР№ РїРѕРґС…РѕРґ Р°РЅР°Р»РѕРіРёС‡РµРЅ: С„РѕРєР°Р»СЊРЅС‹Рµ РёР»Рё СЃС‚РѕР№РєРёРµ РёР·РјРµРЅРµРЅРёСЏ С‚СЂРµР±СѓСЋС‚ imaging + biopsy, Р° diffuse mastalgia Р±РµР· РїРѕРґРѕР·СЂРёС‚РµР»СЊРЅРѕР№ РЅР°С…РѕРґРєРё РІРµРґРµС‚СЃСЏ РїСЂРµРёРјСѓС‰РµСЃС‚РІРµРЅРЅРѕ РєРѕРЅСЃРµСЂРІР°С‚РёРІРЅРѕ. РџСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° Р·Р»РѕРєР°С‡РµСЃС‚РІРµРЅРЅС‹Р№ РїСЂРѕС†РµСЃСЃ РѕР±СЏР·Р°С‚РµР»СЊРЅС‹ РјР°СЂС€СЂСѓС‚РёР·Р°С†РёСЏ РІ breast unit Рё oncofertility counseling Сѓ РјРѕР»РѕРґС‹С… РїР°С†РёРµРЅС‚РѕРє.',
        ru: 'Р РѕСЃСЃРёР№СЃРєР°СЏ РїСЂР°РєС‚РёРєР° С‚Р°РєР¶Рµ РёСЃС…РѕРґРёС‚ РёР· РѕР±СЏР·Р°С‚РµР»СЊРЅРѕРіРѕ РёСЃРєР»СЋС‡РµРЅРёСЏ СЂР°РєР° РїСЂРё Р»СЋР±РѕРј РѕС‡Р°РіРѕРІРѕРј РѕР±СЂР°Р·РѕРІР°РЅРёРё, РїСЂРё СЌС‚РѕРј Р±РёРѕРїСЃРёР№РЅРѕ РїРѕРґС‚РІРµСЂР¶РґРµРЅРЅС‹Рµ РґРѕР±СЂРѕРєР°С‡РµСЃС‚РІРµРЅРЅС‹Рµ СѓР·Р»С‹ С‡Р°С‰Рµ РЅР°Р±Р»СЋРґР°СЋС‚СЃСЏ, РµСЃР»Рё РЅРµС‚ СЂРѕСЃС‚Р° РёР»Рё Р°С‚РёРїРёРё. Р›РµС‡РµРЅРёРµ СЂР°РєР° РјРѕР»РѕС‡РЅРѕР№ Р¶РµР»РµР·С‹ РІС‹СЃС‚СЂР°РёРІР°РµС‚СЃСЏ РїРѕ СЃС‚Р°РґРёРё Рё СЂРµС†РµРїС‚РѕСЂРЅРѕРјСѓ РїСЂРѕС„РёР»СЋ СЃ РµР¶РµРіРѕРґРЅРѕР№ РјР°РјРјРѕРіСЂР°С„РёРµР№ РІ follow-up.',
      };
    case 'menopause':
      return {
        eau: 'Р•РІСЂРѕРїРµР№СЃРєРёРµ Рё IMS/ESHRE-СЃРѕРіР»Р°СЃРѕРІР°РЅРЅС‹Рµ РґРѕРєСѓРјРµРЅС‚С‹ СЃС‡РёС‚Р°СЋС‚ РјРµРЅРѕРїР°СѓР·Р°Р»СЊРЅСѓСЋ РіРѕСЂРјРѕРЅР°Р»СЊРЅСѓСЋ С‚РµСЂР°РїРёСЋ РЅР°РёР±РѕР»РµРµ СЌС„С„РµРєС‚РёРІРЅС‹Рј Р»РµС‡РµРЅРёРµРј РІР°Р·РѕРјРѕС‚РѕСЂРЅС‹С… СЃРёРјРїС‚РѕРјРѕРІ Рё СЂР°РЅРЅРµР№ РїРѕС‚РµСЂРё РєРѕСЃС‚РЅРѕР№ РјР°СЃСЃС‹. РџСЂРё GSM РїРµСЂРІРѕР№ Р»РёРЅРёРµР№ РѕСЃС‚Р°СЋС‚СЃСЏ Р»РѕРєР°Р»СЊРЅС‹Рµ СЌСЃС‚СЂРѕРіРµРЅС‹, Р° СЂСѓС‚РёРЅРЅРѕРµ Р»Р°Р±РѕСЂР°С‚РѕСЂРЅРѕРµ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ РјРµРЅРѕРїР°СѓР·С‹ РїРѕСЃР»Рµ 45 Р»РµС‚ РЅРµ С‚СЂРµР±СѓРµС‚СЃСЏ.',
        acog: 'ACOG СЂРµРєРѕРјРµРЅРґСѓРµС‚ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕ РЅР°Р·РЅР°С‡Р°С‚СЊ HT/MHT Р¶РµРЅС‰РёРЅР°Рј РјРѕР»РѕР¶Рµ 60 Р»РµС‚ РёР»Рё РІ РїСЂРµРґРµР»Р°С… 10 Р»РµС‚ РѕС‚ РјРµРЅРѕРїР°СѓР·С‹ РїСЂРё Р±Р»Р°РіРѕРїСЂРёСЏС‚РЅРѕРј benefit-risk РїСЂРѕС„РёР»Рµ, СЃ РµР¶РµРіРѕРґРЅС‹Рј РїРµСЂРµСЃРјРѕС‚СЂРѕРј. Р’ РѕР±РЅРѕРІР»РµРЅРёРё 2026 РїРѕ РїРѕСЃС‚РјРµРЅРѕРїР°СѓР·Р°Р»СЊРЅРѕРјСѓ РєСЂРѕРІРѕС‚РµС‡РµРЅРёСЋ РґР»СЏ Р±РѕР»СЊС€РёРЅСЃС‚РІР° РїР°С†РёРµРЅС‚РѕРє РїСЂРµРґРїРѕС‡С‚РёС‚РµР»СЊРЅР° РЅР°С‡Р°Р»СЊРЅР°СЏ РѕС†РµРЅРєР° СЃ РўР’РЈР—Р Рё Р·Р°Р±РѕСЂРѕРј СЌРЅРґРѕРјРµС‚СЂРёР°Р»СЊРЅРѕР№ С‚РєР°РЅРё, Р±РµР· Р»РѕР¶РЅРѕРіРѕ СѓСЃРїРѕРєРѕРµРЅРёСЏ С‚РѕР»СЊРєРѕ РїРѕ С‚РѕРЅРєРѕРјСѓ СЌРЅРґРѕРјРµС‚СЂРёСЋ.',
        ranzcog: 'RANZCOG РїРѕРґС‡РµСЂРєРёРІР°РµС‚ РІС‹Р±РѕСЂ С‚СЂР°РЅСЃРґРµСЂРјР°Р»СЊРЅРѕРіРѕ РїСѓС‚Рё РїСЂРё РїРѕРІС‹С€РµРЅРЅРѕРј СЂРёСЃРєРµ Р’РўР­/РјРµС‚Р°Р±РѕР»РёС‡РµСЃРєРёС… РѕСЃР»РѕР¶РЅРµРЅРёР№ Рё РґРѕРїСѓСЃРєР°РµС‚ РїСЂРѕРґРѕР»Р¶РµРЅРёРµ С‚РµСЂР°РїРёРё РґРѕР»СЊС€Рµ СЃС‚Р°РЅРґР°СЂС‚РЅС‹С… СЃСЂРѕРєРѕРІ РїСЂРё СЃРѕС…СЂР°РЅСЏСЋС‰РµР№СЃСЏ РєР»РёРЅРёС‡РµСЃРєРѕР№ РїРѕР»СЊР·Рµ. Р”Р»СЏ POI РіРѕСЂРјРѕРЅР°Р»СЊРЅР°СЏ С‚РµСЂР°РїРёСЏ РїРѕРєР°Р·Р°РЅР° РґРѕ РІРѕР·СЂР°СЃС‚Р° РµСЃС‚РµСЃС‚РІРµРЅРЅРѕР№ РјРµРЅРѕРїР°СѓР·С‹.',
        ru: 'Р РѕСЃСЃРёР№СЃРєРёРµ РєР»РёРЅСЂРµРє РїРѕ РјРµРЅРѕРїР°СѓР·Рµ 2025 РІ С†РµР»РѕРј СЃРѕРІРїР°РґР°СЋС‚: РњР“Рў/Р—Р“Рў РїРѕРєР°Р·Р°РЅР° РїСЂРё СЃРёРјРїС‚РѕРјРЅРѕРј СЌСЃС‚СЂРѕРіРµРЅ-РґРµС„РёС†РёС‚Рµ Рё РџРќРЇ РїСЂРё РѕС‚СЃСѓС‚СЃС‚РІРёРё РїСЂРѕС‚РёРІРѕРїРѕРєР°Р·Р°РЅРёР№, Р° GSM РІРµРґРµС‚СЃСЏ РїСЂРµРёРјСѓС‰РµСЃС‚РІРµРЅРЅРѕ Р»РѕРєР°Р»СЊРЅРѕР№ С‚РµСЂР°РїРёРµР№ Рё РґРѕР»РіРѕРІСЂРµРјРµРЅРЅС‹Рј РЅР°Р±Р»СЋРґРµРЅРёРµРј.',
      };
    case 'vulvar':
      return {
        eau: 'Р•РІСЂРѕРїРµР№СЃРєРёР№ РїРѕРґС…РѕРґ С‚СЂРµР±СѓРµС‚ Р±РёРѕРїСЃРёРё Р»СЋР±РѕР№ СЃС‚РѕР№РєРѕР№, Р°С‚РёРїРёС‡РЅРѕР№ РёР»Рё СЏР·РІРµРЅРЅРѕР№ РІСѓР»СЊРІР°СЂРЅРѕР№ Р·РѕРЅС‹ Рё СЂР°Р·Р»РёС‡РµРЅРёСЏ HPV-related HSIL/VIN РѕС‚ dVIN, РѕСЃРѕР±РµРЅРЅРѕ РЅР° С„РѕРЅРµ lichen sclerosus. Р”Р»СЏ С…СЂРѕРЅРёС‡РµСЃРєРёС… РґРµСЂРјР°С‚РѕР·РѕРІ РїРµСЂРІРѕР№ Р»РёРЅРёРµР№ РѕСЃС‚Р°СЋС‚СЃСЏ РІС‹СЃРѕРєРѕР°РєС‚РёРІРЅС‹Рµ С‚РѕРїРёС‡РµСЃРєРёРµ СЃС‚РµСЂРѕРёРґС‹ Рё РґР»РёС‚РµР»СЊРЅРѕРµ РЅР°Р±Р»СЋРґРµРЅРёРµ.',
        acog: 'ACOG РїРѕРґС‡РµСЂРєРёРІР°РµС‚, С‡С‚Рѕ РґРёР°РіРЅРѕР· РІСѓР»СЊРІРѕРґРёРЅРёРё СЃС‚Р°РІРёС‚СЃСЏ С‚РѕР»СЊРєРѕ РїРѕСЃР»Рµ РёСЃРєР»СЋС‡РµРЅРёСЏ РёРЅС„РµРєС†РёРё, РґРµСЂРјР°С‚РѕР·РѕРІ Рё РЅРµРѕРїР»Р°Р·РёРё; pain management РґРѕР»Р¶РµРЅ Р±С‹С‚СЊ РјСѓР»СЊС‚РёРјРѕРґР°Р»СЊРЅС‹Рј. Р”Р»СЏ VIN РїСЂРµРґРїРѕС‡С‚РёС‚РµР»СЊРЅС‹ excision/ablation РёР»Рё imiquimod РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј, Р° РґР»СЏ lichen sclerosus вЂ” РґР»РёС‚РµР»СЊРЅР°СЏ steroid maintenance.',
        ranzcog: 'РђРІСЃС‚СЂР°Р»РёР№СЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё СЃС…РѕРґСЏС‚СЃСЏ СЃ РµРІСЂРѕРїРµР№СЃРєРёРјРё: СЂР°РЅРЅСЏСЏ Р±РёРѕРїСЃРёСЏ, РґР»РёС‚РµР»СЊРЅРѕРµ РЅР°Р±Р»СЋРґРµРЅРёРµ Р·Р° СЂСѓР±С†СѓСЋС‰РёРјРёСЃСЏ РґРµСЂРјР°С‚РѕР·Р°РјРё Рё РѕСЃС‚РѕСЂРѕР¶РЅРѕРµ РѕС‚РЅРѕС€РµРЅРёРµ Рє РїРѕР·РґРЅРµРјСѓ СЂР°СЃРїРѕР·РЅР°РІР°РЅРёСЋ dVIN/СЂР°РєР° РІСѓР»СЊРІС‹. РџСЂРё СЃРµРєСЃСѓР°Р»СЊРЅРѕ-Р±РѕР»РµРІС‹С… РЅР°СЂСѓС€РµРЅРёСЏС… СЂРµРєРѕРјРµРЅРґРѕРІР°РЅ multidisciplinary pelvic pain РїРѕРґС…РѕРґ.',
        ru: 'Р РѕСЃСЃРёР№СЃРєР°СЏ РїСЂР°РєС‚РёРєР° С‚Р°РєР¶Рµ РѕСЂРёРµРЅС‚РёСЂРѕРІР°РЅР° РЅР° РјРѕСЂС„РѕР»РѕРіРёС‡РµСЃРєСѓСЋ РІРµСЂРёС„РёРєР°С†РёСЋ РїРѕРґРѕР·СЂРёС‚РµР»СЊРЅС‹С… РїРѕСЂР°Р¶РµРЅРёР№ РІСѓР»СЊРІС‹ Рё РґР»РёС‚РµР»СЊРЅРѕРµ Р»РµС‡РµРЅРёРµ С…СЂРѕРЅРёС‡РµСЃРєРёС… РґРµСЂРјР°С‚РѕР·РѕРІ С‚РѕРїРёС‡РµСЃРєРёРјРё СЃС‚РµСЂРѕРёРґР°РјРё. РџСЂРё РґРёСЃРїР»Р°Р·РёРё Рё СЂР°РєРµ РїРѕРєР°Р·Р°РЅРѕ РїСЂРѕС„РёР»СЊРЅРѕРµ РѕРЅРєРѕР»РѕРіРёС‡РµСЃРєРѕРµ Р»РµС‡РµРЅРёРµ, Р° РїСЂРё РІСѓР»СЊРІРѕРґРёРЅРёРё вЂ” РєРѕРјРїР»РµРєСЃРЅС‹Р№ РїРѕРґС…РѕРґ СЃ РёСЃРєР»СЋС‡РµРЅРёРµРј РѕСЂРіР°РЅРёРєРё.',
      };
    default:
      return {
        eau: 'Р•РІСЂРѕРїРµР№СЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїРѕРґРґРµСЂР¶РёРІР°СЋС‚ РїРѕСЌС‚Р°РїРЅСѓСЋ РґРёР°РіРЅРѕСЃС‚РёРєСѓ, РїСЂРёРѕСЂРёС‚РµС‚ РјРёРЅРёРјР°Р»СЊРЅРѕ РёРЅРІР°Р·РёРІРЅРѕР№ РІРёР·СѓР°Р»РёР·Р°С†РёРё Рё Р»РµС‡РµРЅРёРµ РїРѕ РґРѕРјРёРЅРёСЂСѓСЋС‰РµРјСѓ СЃРёРјРїС‚РѕРјСѓ Рё СЂРёСЃРєСѓ РѕСЃР»РѕР¶РЅРµРЅРёР№.',
        acog: 'РђРјРµСЂРёРєР°РЅСЃРєРёР№ РїРѕРґС…РѕРґ РѕСЂРёРµРЅС‚РёСЂРѕРІР°РЅ РЅР° risk-based РґРёР°РіРЅРѕСЃС‚РёРєСѓ, shared decision-making Рё СЂР°РЅРЅРµРµ РЅР°С‡Р°Р»Рѕ РґРѕРєР°Р·Р°С‚РµР»СЊРЅРѕР№ С‚РµСЂР°РїРёРё РїСЂРё РЅР°Р»РёС‡РёРё РєР»РёРЅРёС‡РµСЃРєРёС… РїРѕРєР°Р·Р°РЅРёР№.',
        ranzcog: 'РђРІСЃС‚СЂР°Р»РёР№СЃРєРёРµ РґРѕРєСѓРјРµРЅС‚С‹ РѕР±С‹С‡РЅРѕ Р±Р»РёР·РєРё Рє РµРІСЂРѕРїРµР№СЃРєРѕРјСѓ РєРѕРЅСЃРµРЅСЃСѓСЃСѓ Рё РїРѕРґС‡РµСЂРєРёРІР°СЋС‚ lived-guideline РѕР±РЅРѕРІР»РµРЅРёСЏ, РїР°С†РёРµРЅС‚-С†РµРЅС‚СЂРёС‡РЅРѕСЃС‚СЊ Рё staged escalation.',
        ru: 'Р РѕСЃСЃРёР№СЃРєРёРµ РєР»РёРЅРёС‡РµСЃРєРёРµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РІ С†РµР»РѕРј СЃР»РµРґСѓСЋС‚ С‚РµРј Р¶Рµ Р±Р°Р·РѕРІС‹Рј РїСЂРёРЅС†РёРїР°Рј, РЅРѕ СЃС‚РµРїРµРЅСЊ РґРµС‚Р°Р»РёР·Р°С†РёРё Рё РґРѕСЃС‚СѓРїРЅРѕСЃС‚СЊ СЃРѕРІСЂРµРјРµРЅРЅС‹С… РѕРїС†РёР№ РјРѕР¶РµС‚ Р·Р°РІРёСЃРµС‚СЊ РѕС‚ РєРѕРЅРєСЂРµС‚РЅРѕР№ РЅРѕР·РѕР»РѕРіРёРё Рё РјР°СЂС€СЂСѓС‚РёР·Р°С†РёРё.',
      };
  }
};

const buildGynecologyRecommendations = (cluster: GynecologyCluster, disease: Disease) => {
  switch (cluster) {
    case 'endometriosis':
      return [
        'РћС†РµРЅРёРІР°С‚СЊ РІС‹СЂР°Р¶РµРЅРЅРѕСЃС‚СЊ Р±РѕР»Рё, СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅС‹Рµ РїР»Р°РЅС‹ Рё СЂРёСЃРє СЂРµС†РёРґРёРІР° РґРѕ РІС‹Р±РѕСЂР° С‚Р°РєС‚РёРєРё.',
        'РџСЂРµРґРїРѕС‡РёС‚Р°С‚СЊ РѕСЂРіР°РЅРѕСЃРѕС…СЂР°РЅСЏСЋС‰РёР№ РїРѕРґС…РѕРґ РїСЂРё Р¶РµР»Р°РЅРёРё Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё Рё РєРѕРЅС‚СЂРѕР»Рµ СЃРёРјРїС‚РѕРјРѕРІ.',
        'РџРѕСЃР»Рµ С…РёСЂСѓСЂРіРёРё РїР»Р°РЅРёСЂРѕРІР°С‚СЊ РїСЂРѕС„РёР»Р°РєС‚РёРєСѓ СЂРµС†РёРґРёРІР° РіРѕСЂРјРѕРЅР°Р»СЊРЅРѕР№ С‚РµСЂР°РїРёРµР№ РёР»Рё СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅРѕР№ СЃС‚СЂР°С‚РµРіРёРµР№ Р±РµР· РґР»РёС‚РµР»СЊРЅРѕР№ РїР°СѓР·С‹.',
        'РџСЂРё РїРѕРґРѕР·СЂРµРЅРёРё РЅР° РіР»СѓР±РѕРєРёР№ РёРЅС„РёР»СЊС‚СЂР°С‚РёРІРЅС‹Р№ РїСЂРѕС†РµСЃСЃ РЅР°РїСЂР°РІР»СЏС‚СЊ РІ СЃРїРµС†РёР°Р»РёР·РёСЂРѕРІР°РЅРЅС‹Р№ С†РµРЅС‚СЂ.',
      ];
    case 'uterine':
      return [
        'Р›СЋР±РѕРµ Р°РЅРѕРјР°Р»СЊРЅРѕРµ РјР°С‚РѕС‡РЅРѕРµ РєСЂРѕРІРѕС‚РµС‡РµРЅРёРµ РІРµСЃС‚Рё СЃ СѓС‡РµС‚РѕРј РІРѕР·СЂР°СЃС‚Р° Рё РѕРЅРєРѕР»РѕРіРёС‡РµСЃРєРѕРіРѕ СЂРёСЃРєР°.',
        'РћС‡Р°РіРѕРІСѓСЋ РІРЅСѓС‚СЂРёРјР°С‚РѕС‡РЅСѓСЋ РїР°С‚РѕР»РѕРіРёСЋ РїРѕРґС‚РІРµСЂР¶РґР°С‚СЊ РіРёСЃС‚РѕР»РѕРіРёС‡РµСЃРєРё РїСЂРё РЅР°Р»РёС‡РёРё РїРѕРєР°Р·Р°РЅРёР№.',
        'РўР°РєС‚РёРєСѓ РІС‹Р±РёСЂР°С‚СЊ СЃ СѓС‡РµС‚РѕРј РІС‹СЂР°Р¶РµРЅРЅРѕСЃС‚Рё РєСЂРѕРІРѕРїРѕС‚РµСЂРё, Р°РЅРµРјРёРё Рё Р¶РµР»Р°РЅРёСЏ СЃРѕС…СЂР°РЅРёС‚СЊ С„РµСЂС‚РёР»СЊРЅРѕСЃС‚СЊ.',
        `РљРѕРЅС‚СЂРѕР»СЊ СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚Рё РїСЂРѕРІРѕРґРёС‚СЊ РЅР° С„РѕРЅРµ С‚РµСЂР°РїРёРё: ${getPrimaryTreatment(disease).toLowerCase()}.`,
      ];
    case 'adnexal':
      return [
        'РџРµСЂСЃРёСЃС‚РёСЂСѓСЋС‰РёРµ Р°РґРЅРµРєСЃР°Р»СЊРЅС‹Рµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ РѕРїРёСЃС‹РІР°С‚СЊ РїРѕ СЃС‚Р°РЅРґР°СЂС‚Р°Рј СЂРёСЃРєР°, Р° РЅРµ С‚РѕР»СЊРєРѕ РїРѕ СЂР°Р·РјРµСЂСѓ.',
        'РџСЂРё РѕСЃС‚СЂРѕР№ Р±РѕР»Рё РёСЃРєР»СЋС‡Р°С‚СЊ РїРµСЂРµРєСЂСѓС‚, СЂР°Р·СЂС‹РІ РєРёСЃС‚С‹ Рё РІРЅРµРјР°С‚РѕС‡РЅСѓСЋ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚СЊ РІ РїСЂРёРѕСЂРёС‚РµС‚РЅРѕРј РїРѕСЂСЏРґРєРµ.',
        'Р¤СѓРЅРєС†РёРѕРЅР°Р»СЊРЅС‹Рµ РєРёСЃС‚С‹ РЅР°Р±Р»СЋРґР°С‚СЊ РѕРіСЂР°РЅРёС‡РµРЅРЅС‹Р№ СЃСЂРѕРє СЃ РїРѕРІС‚РѕСЂРЅРѕР№ РІРёР·СѓР°Р»РёР·Р°С†РёРµР№.',
        'РџРѕРґРѕР·СЂРёС‚РµР»СЊРЅС‹Рµ РїРѕ РѕРЅРєРѕСЂРёСЃРєСѓ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ РјР°СЂС€СЂСѓС‚РёР·РёСЂРѕРІР°С‚СЊ Р±РµР· Р·Р°РґРµСЂР¶РєРё Рє РїСЂРѕС„РёР»СЊРЅРѕРјСѓ С…РёСЂСѓСЂРіСѓ.',
      ];
    case 'infection':
      return [
        'РђРЅС‚РёР±Р°РєС‚РµСЂРёР°Р»СЊРЅСѓСЋ С‚РµСЂР°РїРёСЋ РЅР°С‡РёРЅР°С‚СЊ СЃРІРѕРµРІСЂРµРјРµРЅРЅРѕ, РЅРµ РґРѕР¶РёРґР°СЏСЃСЊ РїРѕР·РґРЅРёС… РѕСЃР»РѕР¶РЅРµРЅРёР№.',
        'Р’СЃРµРіРґР° РѕС†РµРЅРёРІР°С‚СЊ Рё Р»РµС‡РёС‚СЊ РїРѕР»РѕРІРѕРіРѕ РїР°СЂС‚РЅРµСЂР° РїСЂРё РїРѕРґС‚РІРµСЂР¶РґРµРЅРЅРѕР№ РРџРџРџ.',
        'РџРѕРІС‚РѕСЂРЅРѕ РѕСЃРјР°С‚СЂРёРІР°С‚СЊ РїР°С†РёРµРЅС‚РєСѓ РїСЂРё РѕС‚СЃСѓС‚СЃС‚РІРёРё РєР»РёРЅРёС‡РµСЃРєРѕРіРѕ РѕС‚РІРµС‚Р° РІ Р±Р»РёР¶Р°Р№С€РёРµ 48-72 С‡Р°СЃР°.',
        'Р Р°Р·СЉСЏСЃРЅСЏС‚СЊ СЂРёСЃРє С‚СЂСѓР±РЅРѕРіРѕ Р±РµСЃРїР»РѕРґРёСЏ, С…СЂРѕРЅРёС‡РµСЃРєРѕР№ Р±РѕР»Рё Рё СЂРµС†РёРґРёРІР° РїСЂРё РЅРµРїРѕР»РЅРѕРј Р»РµС‡РµРЅРёРё.',
      ];
    case 'urogyne':
      return [
        'РќР°С‡РёРЅР°С‚СЊ СЃ РєРѕРЅСЃРµСЂРІР°С‚РёРІРЅРѕР№ РєРѕСЂСЂРµРєС†РёРё Рё РѕР±СЉРµРєС‚РёРІРЅРѕР№ РѕС†РµРЅРєРё РґРѕРјРёРЅРёСЂСѓСЋС‰РµРіРѕ СЃРёРјРїС‚РѕРјР°.',
        'Р”Рѕ РѕРїРµСЂР°С†РёРё РґРѕРєСѓРјРµРЅС‚РёСЂРѕРІР°С‚СЊ С‚РёРї РїСЂРѕР»Р°РїСЃР° РёР»Рё РЅРµРґРµСЂР¶Р°РЅРёСЏ Рё РѕР¶РёРґР°РЅРёСЏ РїР°С†РёРµРЅС‚РєРё РѕС‚ Р»РµС‡РµРЅРёСЏ.',
        'РЈС‡РёС‚С‹РІР°С‚СЊ СЃРµРєСЃСѓР°Р»СЊРЅСѓСЋ С„СѓРЅРєС†РёСЋ, РѕСЃС‚Р°С‚РѕС‡РЅСѓСЋ РјРѕС‡Сѓ Рё СЂРёСЃРє СЂРµС†РёРґРёРІР° РїСЂРё РІС‹Р±РѕСЂРµ РјРµС‚РѕРґР° РєРѕСЂСЂРµРєС†РёРё.',
        'РџРѕСЃР»Рµ РІРјРµС€Р°С‚РµР»СЊСЃС‚РІР° РїР»Р°РЅРёСЂРѕРІР°С‚СЊ СЂРµР°Р±РёР»РёС‚Р°С†РёСЋ С‚Р°Р·РѕРІРѕРіРѕ РґРЅР°, Р° РЅРµ С‚РѕР»СЊРєРѕ С…РёСЂСѓСЂРіРёС‡РµСЃРєРёР№ РєРѕРЅС‚СЂРѕР»СЊ.',
      ];
    case 'fertility':
      return [
        'РћР±СЃР»РµРґРѕРІР°С‚СЊ РїР°СЂСѓ РєР°Рє РµРґРёРЅСѓСЋ СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅСѓСЋ СЃРёСЃС‚РµРјСѓ, Р° РЅРµ С‚РѕР»СЊРєРѕ Р¶РµРЅС‰РёРЅСѓ.',
        'РџРµСЂРµС…РѕРґ Рє Р’Р Рў РЅРµ РѕС‚РєР»Р°РґС‹РІР°С‚СЊ РїСЂРё РІРѕР·СЂР°СЃС‚Рµ, С‚СЂСѓР±РЅРѕРј С„Р°РєС‚РѕСЂРµ РёР»Рё СЃРЅРёР¶РµРЅРёРё СЂРµР·РµСЂРІР°.',
        'РџРµСЂРµРґ Р’Р Рў СѓСЃС‚СЂР°РЅСЏС‚СЊ РіРёРґСЂРѕСЃР°Р»СЊРїРёРЅРєСЃ, РІС‹СЂР°Р¶РµРЅРЅСѓСЋ РІРЅСѓС‚СЂРёРјР°С‚РѕС‡РЅСѓСЋ РїР°С‚РѕР»РѕРіРёСЋ Рё Р°РєС‚РёРІРЅРѕРµ РІРѕСЃРїР°Р»РµРЅРёРµ.',
        'Р РµРїСЂРѕРґСѓРєС‚РёРІРЅС‹Р№ РїР»Р°РЅ РїРµСЂРµСЃРјР°С‚СЂРёРІР°С‚СЊ РїРѕСЃР»Рµ РєР°Р¶РґРѕРіРѕ Р·Р°РІРµСЂС€РµРЅРЅРѕРіРѕ СЌС‚Р°РїР° Р»РµС‡РµРЅРёСЏ.',
      ];
    case 'endocrine':
      return [
        'РЎРѕРїРѕСЃС‚Р°РІР»СЏС‚СЊ РЅР°СЂСѓС€РµРЅРёСЏ С†РёРєР»Р° СЃ РіРѕСЂРјРѕРЅР°Р»СЊРЅС‹Рј РїСЂРѕС„РёР»РµРј, РјРµС‚Р°Р±РѕР»РёС‡РµСЃРєРёРј СЃС‚Р°С‚СѓСЃРѕРј Рё РґР°РЅРЅС‹РјРё РЈР—Р.',
        'РџСЂРё РґР»РёС‚РµР»СЊРЅРѕР№ Р°РЅРѕРІСѓР»СЏС†РёРё РєРѕРЅС‚СЂРѕР»РёСЂРѕРІР°С‚СЊ СЌРЅРґРѕРјРµС‚СЂРёР№ Рё РїСЂРµРґСѓРїСЂРµР¶РґР°С‚СЊ РіРёРїРµСЂРїР»Р°СЃС‚РёС‡РµСЃРєРёРµ РѕСЃР»РѕР¶РЅРµРЅРёСЏ.',
        'РЈС‡РёС‚С‹РІР°С‚СЊ РјРµС‚Р°Р±РѕР»РёС‡РµСЃРєРёРµ Рё СЃРµСЂРґРµС‡РЅРѕ-СЃРѕСЃСѓРґРёСЃС‚С‹Рµ СЂРёСЃРєРё РїСЂРё РЎРџРљРЇ Рё РіРёРїРѕСЌСЃС‚СЂРѕРіРµРЅРЅС‹С… СЃРѕСЃС‚РѕСЏРЅРёСЏС….',
        'РџСЂРё С„РµСЂС‚РёР»СЊРЅС‹С… Р·Р°РїСЂРѕСЃР°С… РІС‹Р±РёСЂР°С‚СЊ С‚Р°РєС‚РёРєСѓ, РєРѕС‚РѕСЂР°СЏ РѕРґРЅРѕРІСЂРµРјРµРЅРЅРѕ Р»РµС‡РёС‚ РїСЂРёС‡РёРЅСѓ Рё РІРѕСЃСЃС‚Р°РЅР°РІР»РёРІР°РµС‚ РѕРІСѓР»СЏС†РёСЋ.',
      ];
    case 'oncology':
      return [
        'РќРµ РѕРіСЂР°РЅРёС‡РёРІР°С‚СЊСЃСЏ СЃРёРјРїС‚РѕРјР°С‚РёС‡РµСЃРєРёРј Р»РµС‡РµРЅРёРµРј Р±РµР· РјРѕСЂС„РѕР»РѕРіРёС‡РµСЃРєРѕР№ РІРµСЂРёС„РёРєР°С†РёРё РїРѕРґРѕР·СЂРёС‚РµР»СЊРЅРѕРіРѕ РѕС‡Р°РіР°.',
        'РЎС‚Р°РґРёСЂРѕРІР°РЅРёРµ Рё СЂРµС€РµРЅРёРµ Рѕ РїРµСЂРІРёС‡РЅРѕР№ РѕРїРµСЂР°С†РёРё РїСЂРѕРІРѕРґРёС‚СЊ РІ СЃРїРµС†РёР°Р»РёР·РёСЂРѕРІР°РЅРЅРѕРј РѕРЅРєРѕР»РѕРіРёС‡РµСЃРєРѕРј РјР°СЂС€СЂСѓС‚Рµ.',
        'РћР±СЃСѓР¶РґР°С‚СЊ РіРµРЅРµС‚РёС‡РµСЃРєРѕРµ РєРѕРЅСЃСѓР»СЊС‚РёСЂРѕРІР°РЅРёРµ РїСЂРё СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰РµРј СЃРµРјРµР№РЅРѕРј РёР»Рё РєР»РёРЅРёС‡РµСЃРєРѕРј СЂРёСЃРєРµ.',
        'РџРѕСЃР»Рµ Р»РµС‡РµРЅРёСЏ РІС‹СЃС‚СЂР°РёРІР°С‚СЊ СЂРµРіСѓР»СЏСЂРЅРѕРµ РЅР°Р±Р»СЋРґРµРЅРёРµ СЃ С„РѕРєСѓСЃРѕРј РЅР° СЂРµС†РёРґРёРІ Рё РєР°С‡РµСЃС‚РІРѕ Р¶РёР·РЅРё.',
      ];
    case 'breast':
      return [
        'Р›СЋР±РѕРµ СѓР·Р»РѕРІРѕРµ РѕР±СЂР°Р·РѕРІР°РЅРёРµ РјРѕР»РѕС‡РЅРѕР№ Р¶РµР»РµР·С‹ РѕС†РµРЅРёРІР°С‚СЊ РїРѕ РїСЂРёРЅС†РёРїСѓ triple assessment: РѕСЃРјРѕС‚СЂ, РІРёР·СѓР°Р»РёР·Р°С†РёСЏ, РјРѕСЂС„РѕР»РѕРіРёСЏ.',
        'РЈС‡РёС‚С‹РІР°С‚СЊ РІРѕР·СЂР°СЃС‚, РїР»РѕС‚РЅРѕСЃС‚СЊ С‚РєР°РЅРё Рё СЃРµРјРµР№РЅС‹Р№ Р°РЅР°РјРЅРµР· РїСЂРё РІС‹Р±РѕСЂРµ РјРµС‚РѕРґР° РІРёР·СѓР°Р»РёР·Р°С†РёРё.',
        'Р”РѕР±СЂРѕРєР°С‡РµСЃС‚РІРµРЅРЅС‹Рµ РѕР±СЂР°Р·РѕРІР°РЅРёСЏ РЅР°Р±Р»СЋРґР°С‚СЊ С‚РѕР»СЊРєРѕ РїРѕСЃР»Рµ СѓРІРµСЂРµРЅРЅРѕР№ РІРµСЂРёС„РёРєР°С†РёРё РЅРёР·РєРѕРіРѕ СЂРёСЃРєР°.',
        'РџР°С†РёРµРЅС‚РєСѓ РѕР±СѓС‡Р°С‚СЊ СЃР°РјРѕРєРѕРЅС‚СЂРѕР»СЋ СЃРёРјРїС‚РѕРјРѕРІ Рё РіСЂР°С„РёРєСѓ СЃРєСЂРёРЅРёРЅРіР°.',
      ];
    case 'menopause':
      return [
        'РЎРёРјРїС‚РѕРјС‹ РјРµРЅРѕРїР°СѓР·С‹ РІРµСЃС‚Рё РїРµСЂСЃРѕРЅРёС„РёС†РёСЂРѕРІР°РЅРЅРѕ СЃ РѕС†РµРЅРєРѕР№ СЃРµСЂРґРµС‡РЅРѕ-СЃРѕСЃСѓРґРёСЃС‚РѕРіРѕ, РѕРЅРєРѕР»РѕРіРёС‡РµСЃРєРѕРіРѕ Рё С‚СЂРѕРјР±РѕС‚РёС‡РµСЃРєРѕРіРѕ СЂРёСЃРєР°.',
        'РџСЂРё РїРѕСЃС‚РјРµРЅРѕРїР°СѓР·Р°Р»СЊРЅРѕРј РєСЂРѕРІРѕС‚РµС‡РµРЅРёРё РЅРµ РѕРіСЂР°РЅРёС‡РёРІР°С‚СЊСЃСЏ С‚РѕР»СЊРєРѕ С‚РѕР»С‰РёРЅРѕР№ СЌРЅРґРѕРјРµС‚СЂРёСЏ: Сѓ Р±РѕР»СЊС€РёРЅСЃС‚РІР° РїР°С†РёРµРЅС‚РѕРє РЅСѓР¶РЅР° РјРѕСЂС„РѕР»РѕРіРёС‡РµСЃРєР°СЏ РѕС†РµРЅРєР° РІРјРµСЃС‚Рµ СЃ РўР’РЈР—Р.',
        'Р›РѕРєР°Р»СЊРЅС‹Рµ СѓСЂРѕРіРµРЅРёС‚Р°Р»СЊРЅС‹Рµ СЃРёРјРїС‚РѕРјС‹ РЅРµ С‚СЂРµР±СѓСЋС‚ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРѕРіРѕ РЅР°Р·РЅР°С‡РµРЅРёСЏ СЃРёСЃС‚РµРјРЅРѕР№ С‚РµСЂР°РїРёРё.',
        'Р”РѕР»РіРѕСЃСЂРѕС‡РЅРѕ РєРѕРЅС‚СЂРѕР»РёСЂРѕРІР°С‚СЊ РєРѕСЃС‚Рё, РјРµС‚Р°Р±РѕР»РёС‡РµСЃРєРёР№ РїСЂРѕС„РёР»СЊ Рё РєР°С‡РµСЃС‚РІРѕ Р¶РёР·РЅРё.',
      ];
    case 'vulvar':
      return [
        'РҐСЂРѕРЅРёС‡РµСЃРєРёР№ Р·СѓРґ Рё Р±РѕР»СЊ РІСѓР»СЊРІС‹ РЅРµ РІРµСЃС‚Рё СЌРјРїРёСЂРёС‡РµСЃРєРё Р±РµР· РѕСЃРјРѕС‚СЂР° Рё, РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё, Р±РёРѕРїСЃРёРё.',
        'РР·Р±РµРіР°С‚СЊ Р°РіСЂРµСЃСЃРёРІРЅС‹С… РјРµСЃС‚РЅС‹С… СЂР°Р·РґСЂР°Р¶РёС‚РµР»РµР№ Рё РїРѕРґСЂРѕР±РЅРѕ СЂР°Р·Р±РёСЂР°С‚СЊ СѓС…РѕРґ Р·Р° РІСѓР»СЊРІРѕР№.',
        'РџСЂРё РїСЂРµРґСЂР°РєРѕРІС‹С… РёР»Рё СЂСѓР±С†СѓСЋС‰РёС…СЃСЏ РїСЂРѕС†РµСЃСЃР°С… РѕСЂРіР°РЅРёР·РѕРІС‹РІР°С‚СЊ РґР»РёС‚РµР»СЊРЅРѕРµ РЅР°Р±Р»СЋРґРµРЅРёРµ.',
        'РџРѕРґРєР»СЋС‡Р°С‚СЊ РїСЃРёС…РѕСЃРµРєСЃСѓР°Р»СЊРЅСѓСЋ Рё Р±РѕР»РµРІСѓСЋ РїРѕРґРґРµСЂР¶РєСѓ РїСЂРё СЃС‚РѕР№РєРѕРј СЃРЅРёР¶РµРЅРёРё РєР°С‡РµСЃС‚РІР° Р¶РёР·РЅРё.',
      ];
    default:
      return [
        `РћС†РµРЅРёРІР°С‚СЊ ${disease.name.toLowerCase()} РїРѕ СЃРѕРІРѕРєСѓРїРЅРѕСЃС‚Рё Р¶Р°Р»РѕР±, РѕСЃРјРѕС‚СЂР°, Р»Р°Р±РѕСЂР°С‚РѕСЂРЅС‹С… Рё РёРЅСЃС‚СЂСѓРјРµРЅС‚Р°Р»СЊРЅС‹С… РґР°РЅРЅС‹С….`,
        `РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ ${getPrimaryDiagnosticStep(disease).toLowerCase()} РєР°Рє С‡Р°СЃС‚СЊ РїРѕСЌС‚Р°РїРЅРѕР№ РІРµСЂРёС„РёРєР°С†РёРё РґРёР°РіРЅРѕР·Р°.`,
        'РўР°РєС‚РёРєСѓ Р»РµС‡РµРЅРёСЏ СЃРѕРѕС‚РЅРѕСЃРёС‚СЊ СЃ С‚СЏР¶РµСЃС‚СЊСЋ РїСЂРѕС†РµСЃСЃР°, СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅС‹РјРё РїР»Р°РЅР°РјРё Рё СЂРёСЃРєРѕРј РѕСЃР»РѕР¶РЅРµРЅРёР№.',
        `РљРѕРЅС‚СЂРѕР»СЊ СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚Рё РїСЂРѕРІРѕРґРёС‚СЊ РЅР° С„РѕРЅРµ С‚РµСЂР°РїРёРё: ${getPrimaryTreatment(disease).toLowerCase()}.`,
      ];
  }
};

const buildGynecologyPrognosis = (cluster: GynecologyCluster, disease: Disease) => {
  switch (cluster) {
    case 'oncology':
      return {
        general: `РџСЂРѕРіРЅРѕР· РїСЂРё ${disease.name.toLowerCase()} Р·Р°РІРёСЃРёС‚ РїСЂРµР¶РґРµ РІСЃРµРіРѕ РѕС‚ СЃС‚Р°РґРёРё РЅР° РјРѕРјРµРЅС‚ РґРёР°РіРЅРѕСЃС‚РёРєРё, РјРѕСЂС„РѕР»РѕРіРёС‡РµСЃРєРѕРіРѕ РІР°СЂРёР°РЅС‚Р° Рё РїРѕР»РЅРѕС‚С‹ РїРµСЂРІРёС‡РЅРѕРіРѕ Р»РµС‡РµРЅРёСЏ.`,
        factors: ['РЎС‚Р°РґРёСЏ Рё РѕР±СЉРµРј РѕРїСѓС…РѕР»Рё', 'Р‘РёРѕР»РѕРіРёС‡РµСЃРєРёР№ РїРѕРґС‚РёРї Рё РјРѕСЂС„РѕР»РѕРіРёСЏ', 'РџРѕР»РЅРѕС‚Р° С…РёСЂСѓСЂРіРёС‡РµСЃРєРѕРіРѕ СЃС‚Р°РґРёСЂРѕРІР°РЅРёСЏ РёР»Рё С†РёС‚РѕСЂРµРґСѓРєС†РёРё', 'РћС‚РІРµС‚ РЅР° СЃРёСЃС‚РµРјРЅСѓСЋ Рё/РёР»Рё Р»СѓС‡РµРІСѓСЋ С‚РµСЂР°РїРёСЋ'],
        survival: 'РћРЅРєРѕР»РѕРіРёС‡РµСЃРєРёР№ РїСЂРѕРіРЅРѕР· С‚СЂРµР±СѓРµС‚ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕР№ РѕС†РµРЅРєРё; СЂР°РЅРЅСЏСЏ РґРёР°РіРЅРѕСЃС‚РёРєР° РїСЂРёРЅС†РёРїРёР°Р»СЊРЅРѕ СѓР»СѓС‡С€Р°РµС‚ РёСЃС…РѕРґС‹.',
      };
    case 'fertility':
      return {
        general: `РџСЂРѕРіРЅРѕР· РїСЂРё ${disease.name.toLowerCase()} РѕРїСЂРµРґРµР»СЏРµС‚СЃСЏ РІРѕР·СЂР°СЃС‚РѕРј РїР°С†РёРµРЅС‚РєРё, СЂРµР·РµСЂРІРѕРј СЏРёС‡РЅРёРєРѕРІ, РґР»РёС‚РµР»СЊРЅРѕСЃС‚СЊСЋ Р±РµСЃРїР»РѕРґРёСЏ Рё РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊСЋ СѓСЃС‚СЂР°РЅРёС‚СЊ РІРµРґСѓС‰РёР№ С„Р°РєС‚РѕСЂ.`,
        factors: ['Р’РѕР·СЂР°СЃС‚ Рё РѕРІР°СЂРёР°Р»СЊРЅС‹Р№ СЂРµР·РµСЂРІ', 'РўСЂСѓР±РЅС‹Р№, РјР°С‚РѕС‡РЅС‹Р№, СЌРЅРґРѕРєСЂРёРЅРЅС‹Р№ РёР»Рё РјСѓР¶СЃРєРѕР№ С„Р°РєС‚РѕСЂ', 'Р”Р»РёС‚РµР»СЊРЅРѕСЃС‚СЊ Р±РµСЃРїР»РѕРґРёСЏ Рё С‡РёСЃР»Рѕ РїСЂРµРґС‹РґСѓС‰РёС… РїРѕРїС‹С‚РѕРє', 'РћС‚РІРµС‚ РЅР° РёРЅРґСѓРєС†РёСЋ РѕРІСѓР»СЏС†РёРё РёР»Рё Р’Р Рў'],
        survival: 'Р—Р°Р±РѕР»РµРІР°РЅРёРµ РЅРµ СЃРІСЏР·Р°РЅРѕ СЃ Р»РµС‚Р°Р»СЊРЅРѕСЃС‚СЊСЋ, РЅРѕ РёРјРµРµС‚ СЃСѓС‰РµСЃС‚РІРµРЅРЅРѕРµ РІР»РёСЏРЅРёРµ РЅР° СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅС‹Р№ РёСЃС…РѕРґ Рё РєР°С‡РµСЃС‚РІРѕ Р¶РёР·РЅРё.',
      };
    case 'urogyne':
      return {
        general: `РџСЂРѕРіРЅРѕР· РїСЂРё ${disease.name.toLowerCase()} С‡Р°С‰Рµ Р±Р»Р°РіРѕРїСЂРёСЏС‚РЅС‹Р№, РЅРѕ Р·Р°РІРёСЃРёС‚ РѕС‚ РІС‹СЂР°Р¶РµРЅРЅРѕСЃС‚Рё РґРµС„РµРєС‚Р° С‚Р°Р·РѕРІРѕРіРѕ РґРЅР° Рё СЂРёСЃРєР° СЂРµС†РёРґРёРІР°.`,
        factors: ['РЎС‚РµРїРµРЅСЊ РїСЂРѕР»Р°РїСЃР° РёР»Рё РІС‹СЂР°Р¶РµРЅРЅРѕСЃС‚СЊ РЅРµРґРµСЂР¶Р°РЅРёСЏ', 'РљР°С‡РµСЃС‚РІРѕ С‚Р°Р·РѕРІРѕРіРѕ РґРЅР° Рё РЅР°Р»РёС‡РёРµ СЂРµС†РёРґРёРІРѕРІ', 'РЎРѕРїСѓС‚СЃС‚РІСѓСЋС‰РёРµ СѓСЂРѕР»РѕРіРёС‡РµСЃРєРёРµ Рё РєРёС€РµС‡РЅС‹Рµ СЃРёРјРїС‚РѕРјС‹', 'РџСЂРёРІРµСЂР¶РµРЅРЅРѕСЃС‚СЊ СЂРµР°Р±РёР»РёС‚Р°С†РёРё'],
        survival: 'Р–РёР·РЅРµСѓРіСЂРѕР¶Р°СЋС‰РµРіРѕ СЂРёСЃРєР° РѕР±С‹С‡РЅРѕ РЅРµС‚, РЅРѕ Р±РµР· РєРѕСЂСЂРµРєС†РёРё РІС‹СЂР°Р¶РµРЅРЅРѕ СЃС‚СЂР°РґР°РµС‚ С„СѓРЅРєС†РёСЏ Рё РєР°С‡РµСЃС‚РІРѕ Р¶РёР·РЅРё.',
      };
    case 'infection':
      return {
        general: `РџСЂРѕРіРЅРѕР· РїСЂРё ${disease.name.toLowerCase()} С…РѕСЂРѕС€РёР№ РїСЂРё СЂР°РЅРЅРµРј Р»РµС‡РµРЅРёРё, РЅРѕ СѓС…СѓРґС€Р°РµС‚СЃСЏ РїСЂРё РІРѕСЃС…РѕРґСЏС‰РµР№ РёРЅС„РµРєС†РёРё Рё РїРѕР·РґРЅРµР№ РІРµСЂРёС„РёРєР°С†РёРё.`,
        factors: ['РЎРІРѕРµРІСЂРµРјРµРЅРЅРѕСЃС‚СЊ РЅР°С‡Р°Р»Р° С‚РµСЂР°РїРёРё', 'РќР°Р»РёС‡РёРµ РѕСЃР»РѕР¶РЅРµРЅРёР№: Р°Р±СЃС†РµСЃСЃ, СЃР°Р»СЊРїРёРЅРіРёС‚, РїРµР»СЊРІРёРѕРїРµСЂРёС‚РѕРЅРёС‚', 'РџРѕРІС‚РѕСЂРЅС‹Рµ СЌРїРёР·РѕРґС‹ Рё СЂРµРёРЅС„РµРєС†РёСЏ', 'РџСЂРёРІРµСЂР¶РµРЅРЅРѕСЃС‚СЊ Р»РµС‡РµРЅРёСЋ РѕР±РѕРёС… РїР°СЂС‚РЅРµСЂРѕРІ'],
        survival: 'Р›РµС‚Р°Р»СЊРЅРѕСЃС‚СЊ РЅРёР·РєР°СЏ, РѕСЃРЅРѕРІРЅРѕР№ РґРѕР»РіРѕСЃСЂРѕС‡РЅС‹Р№ СЂРёСЃРє СЃРІСЏР·Р°РЅ СЃ С…СЂРѕРЅРёС‡РµСЃРєРѕР№ Р±РѕР»СЊСЋ, С‚СЂСѓР±РЅС‹Рј Р±РµСЃРїР»РѕРґРёРµРј Рё СЂРµС†РёРґРёРІР°РјРё.',
      };
    default:
      return {
        general: `РџСЂРѕРіРЅРѕР· РїСЂРё ${disease.name.toLowerCase()} РѕРїСЂРµРґРµР»СЏРµС‚СЃСЏ СЃРІРѕРµРІСЂРµРјРµРЅРЅРѕСЃС‚СЊСЋ РґРёР°РіРЅРѕСЃС‚РёРєРё, РІС‹СЂР°Р¶РµРЅРЅРѕСЃС‚СЊСЋ РїСЂРѕС†РµСЃСЃР° Рё РѕС‚РІРµС‚РѕРј РЅР° Р»РµС‡РµРЅРёРµ.`,
        factors: ['РЎС‚Р°РґРёСЏ РёР»Рё С‚СЏР¶РµСЃС‚СЊ Р·Р°Р±РѕР»РµРІР°РЅРёСЏ РЅР° РјРѕРјРµРЅС‚ РѕР±СЂР°С‰РµРЅРёСЏ', 'РќР°Р»РёС‡РёРµ РѕСЃР»РѕР¶РЅРµРЅРёР№ Рё СЃРѕРїСѓС‚СЃС‚РІСѓСЋС‰РµР№ РїР°С‚РѕР»РѕРіРёРё', 'РЎРІРѕРµРІСЂРµРјРµРЅРЅРѕСЃС‚СЊ РЅР°С‡Р°Р»Р° С‚РµСЂР°РїРёРё Рё РїСЂРёРІРµСЂР¶РµРЅРЅРѕСЃС‚СЊ РЅР°Р±Р»СЋРґРµРЅРёСЋ'],
        survival: 'Р”Р»СЏ Р±РѕР»СЊС€РёРЅСЃС‚РІР° РґРѕР±СЂРѕРєР°С‡РµСЃС‚РІРµРЅРЅС‹С… РіРёРЅРµРєРѕР»РѕРіРёС‡РµСЃРєРёС… СЃРѕСЃС‚РѕСЏРЅРёР№ РїСЂРѕРіРЅРѕР· Р±Р»Р°РіРѕРїСЂРёСЏС‚РЅС‹Р№ РїСЂРё РїРѕР»РЅРѕС†РµРЅРЅРѕРј РЅР°Р±Р»СЋРґРµРЅРёРё Рё РєРѕРЅС‚СЂРѕР»Рµ СЂРµС†РёРґРёРІР°.',
      };
  }
};

const buildGynecologyFollowUp = (cluster: GynecologyCluster, disease: Disease) => {
  switch (cluster) {
    case 'oncology':
      return {
        frequency: 'РћР±С‹С‡РЅРѕ РєР°Р¶РґС‹Рµ 3-6 РјРµСЃСЏС†РµРІ РІ РїРµСЂРІС‹Рµ 2-3 РіРѕРґР°, Р·Р°С‚РµРј СЂРµР¶Рµ РїРѕ РѕРЅРєРѕР»РѕРіРёС‡РµСЃРєРѕРјСѓ РїСЂРѕС‚РѕРєРѕР»Сѓ',
        duration: 'РќРµ РјРµРЅРµРµ 5 Р»РµС‚, РґР°Р»РµРµ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕ',
        tests: ['РљР»РёРЅРёС‡РµСЃРєРёР№ РѕСЃРјРѕС‚СЂ Рё РѕС†РµРЅРєР° СЃРёРјРїС‚РѕРјРѕРІ', 'РРЅСЃС‚СЂСѓРјРµРЅС‚Р°Р»СЊРЅР°СЏ РІРёР·СѓР°Р»РёР·Р°С†РёСЏ РїРѕ Р»РѕРєР°Р»РёР·Р°С†РёРё Рё СЃС‚Р°РґРёРё', 'РњРѕСЂС„РѕР»РѕРіРёС‡РµСЃРєРёР№ Рё Р»Р°Р±РѕСЂР°С‚РѕСЂРЅС‹Р№ РєРѕРЅС‚СЂРѕР»СЊ РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј'],
      };
    case 'fertility':
      return {
        frequency: 'РљР°Р¶РґС‹Р№ С†РёРєР» Р»РµС‡РµРЅРёСЏ РёР»Рё РєР°Р¶РґС‹Рµ 1-3 РјРµСЃСЏС†Р° РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ СЌС‚Р°РїР° СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅРѕР№ РїСЂРѕРіСЂР°РјРјС‹',
        duration: 'Р”Рѕ РґРѕСЃС‚РёР¶РµРЅРёСЏ Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё РёР»Рё Р·Р°РІРµСЂС€РµРЅРёСЏ РІС‹Р±СЂР°РЅРЅРѕР№ СЃС‚СЂР°С‚РµРіРёРё',
        tests: ['РЈР—Р РјР°Р»РѕРіРѕ С‚Р°Р·Р°/С„РѕР»Р»РёРєСѓР»РѕРјРµС‚СЂРёСЏ', 'РљРѕРЅС‚СЂРѕР»СЊ РѕРІСѓР»СЏС†РёРё, СЌРЅРґРѕРјРµС‚СЂРёСЏ Рё РѕРІР°СЂРёР°Р»СЊРЅРѕРіРѕ СЂРµР·РµСЂРІР°', 'РџРµСЂРµСЃРјРѕС‚СЂ СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅРѕРіРѕ РїР»Р°РЅР° РїР°СЂС‹'],
      };
    case 'infection':
      return {
        frequency: 'РљРѕРЅС‚СЂРѕР»СЊ С‡РµСЂРµР· 48-72 С‡Р°СЃР° РїСЂРё С‚СЏР¶РµР»РѕРј С‚РµС‡РµРЅРёРё Рё РїРѕРІС‚РѕСЂРЅР°СЏ РѕС†РµРЅРєР° РїРѕСЃР»Рµ Р·Р°РІРµСЂС€РµРЅРёСЏ С‚РµСЂР°РїРёРё',
        duration: 'Р”Рѕ РєР»РёРЅРёС‡РµСЃРєРѕРіРѕ Рё Р»Р°Р±РѕСЂР°С‚РѕСЂРЅРѕРіРѕ СЂР°Р·СЂРµС€РµРЅРёСЏ РїСЂРѕС†РµСЃСЃР°',
        tests: ['РљР»РёРЅРёС‡РµСЃРєР°СЏ РґРёРЅР°РјРёРєР° Р±РѕР»Рё, С‚РµРјРїРµСЂР°С‚СѓСЂС‹ Рё РІС‹РґРµР»РµРЅРёР№', 'РџРѕРІС‚РѕСЂРЅР°СЏ Р»Р°Р±РѕСЂР°С‚РѕСЂРЅР°СЏ РІРµСЂРёС„РёРєР°С†РёСЏ РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј', 'РЈР—Р РјР°Р»РѕРіРѕ С‚Р°Р·Р° РїСЂРё РѕСЃР»РѕР¶РЅРµРЅРЅРѕРј С‚РµС‡РµРЅРёРё'],
      };
    case 'menopause':
      return {
        frequency: 'Р§РµСЂРµР· 3 РјРµСЃСЏС†Р° РїРѕСЃР»Рµ СЃС‚Р°СЂС‚Р° С‚РµСЂР°РїРёРё, РґР°Р»РµРµ РѕР±С‹С‡РЅРѕ РєР°Р¶РґС‹Рµ 6-12 РјРµСЃСЏС†РµРІ',
        duration: 'РќР° РїСЂРѕС‚СЏР¶РµРЅРёРё РїРµСЂРёРѕРґР° СЃРёРјРїС‚РѕРјРѕРІ Рё РїСЂРёРµРјР° С‚РµСЂР°РїРёРё',
        tests: ['РћС†РµРЅРєР° СЃРёРјРїС‚РѕРјРѕРІ Рё РїРµСЂРµРЅРѕСЃРёРјРѕСЃС‚Рё С‚РµСЂР°РїРёРё', 'РўР’РЈР—Р РїСЂРё РєСЂРѕРІСЏРЅРёСЃС‚С‹С… РІС‹РґРµР»РµРЅРёСЏС… РёР»Рё С„Р°РєС‚РѕСЂР°С… СЂРёСЃРєР°', 'РљРѕРЅС‚СЂРѕР»СЊ РјРѕР»РѕС‡РЅС‹С… Р¶РµР»РµР·, РєРѕСЃС‚РЅРѕР№ С‚РєР°РЅРё Рё РјРµС‚Р°Р±РѕР»РёС‡РµСЃРєРѕРіРѕ РїСЂРѕС„РёР»СЏ'],
      };
    default:
      return {
        frequency: 'Р§РµСЂРµР· 1-3 РјРµСЃСЏС†Р° РїРѕСЃР»Рµ РЅР°С‡Р°Р»Р° Р»РµС‡РµРЅРёСЏ, РґР°Р»РµРµ РєР°Р¶РґС‹Рµ 6-12 РјРµСЃСЏС†РµРІ',
        duration: 'Р”Рѕ РєР»РёРЅРёС‡РµСЃРєРѕР№ СЃС‚Р°Р±РёР»РёР·Р°С†РёРё, Р·Р°С‚РµРј РІ РїР»Р°РЅРѕРІРѕРј РїРѕСЂСЏРґРєРµ',
        tests: [getPrimaryDiagnosticStep(disease), 'РљРѕРЅС‚СЂРѕР»СЊ РєР»РёРЅРёС‡РµСЃРєРёС… СЃРёРјРїС‚РѕРјРѕРІ Рё РѕР±СЉРµРєС‚РёРІРЅРѕРіРѕ СЃС‚Р°С‚СѓСЃР°', ...buildGynecologyImaging(cluster).slice(0, 2)],
      };
  }
};

const buildGynecologyCases = (cluster: GynecologyCluster, disease: Disease) => {
  switch (cluster) {
    case 'oncology':
      return [
        {
          presentation: `РџР°С†РёРµРЅС‚РєР° РѕР±СЂР°С‚РёР»Р°СЃСЊ СЃ СЃРёРјРїС‚РѕРјР°РјРё, РїРѕРґРѕР·СЂРёС‚РµР»СЊРЅС‹РјРё РЅР° ${disease.name.toLowerCase()}, Рё РїСЂРѕРіСЂРµСЃСЃРёСЂСѓСЋС‰РёРј СѓС…СѓРґС€РµРЅРёРµРј СЃРѕСЃС‚РѕСЏРЅРёСЏ Р·Р° РїРѕСЃР»РµРґРЅРёРµ РјРµСЃСЏС†С‹.`,
          findings: 'РџРѕ РґР°РЅРЅС‹Рј РѕСЃРјРѕС‚СЂР°, СЌРєСЃРїРµСЂС‚РЅРѕРіРѕ РЈР—Р Рё СЃС‚Р°РґРёСЂСѓСЋС‰РµР№ РІРёР·СѓР°Р»РёР·Р°С†РёРё РІС‹СЏРІР»РµРЅ РїРѕРґРѕР·СЂРёС‚РµР»СЊРЅС‹Р№ РїРµСЂРІРёС‡РЅС‹Р№ РѕС‡Р°Рі СЃ РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚СЊСЋ РјРѕСЂС„РѕР»РѕРіРёС‡РµСЃРєРѕР№ РІРµСЂРёС„РёРєР°С†РёРё.',
          diagnosis: disease.name,
          treatment: 'РџСЂРѕРІРµРґРµРЅР° Р±РёРѕРїСЃРёСЏ/РѕРїРµСЂР°С‚РёРІРЅР°СЏ РІРµСЂРёС„РёРєР°С†РёСЏ, Р·Р°С‚РµРј РѕРЅРєРѕР»РѕРіРёС‡РµСЃРєР°СЏ С‚Р°РєС‚РёРєР° РѕРїСЂРµРґРµР»РµРЅР° РјСѓР»СЊС‚РёРґРёСЃС†РёРїР»РёРЅР°СЂРЅРѕР№ РєРѕРјР°РЅРґРѕР№.',
          outcome: 'РџР°С†РёРµРЅС‚РєР° РїРµСЂРµРІРµРґРµРЅР° РЅР° СЃРїРµС†РёР°Р»РёР·РёСЂРѕРІР°РЅРЅРѕРµ РѕРЅРєРѕР»РѕРіРёС‡РµСЃРєРѕРµ РЅР°Р±Р»СЋРґРµРЅРёРµ СЃ РєРѕРЅС‚СЂРѕР»РµРј СЂРµС†РёРґРёРІР° Рё РєР°С‡РµСЃС‚РІР° Р¶РёР·РЅРё.',
        },
      ];
    case 'fertility':
      return [
        {
          presentation: 'РџР°С†РёРµРЅС‚РєР° РѕР±СЂР°С‚РёР»Р°СЃСЊ СЃ РѕС‚СЃСѓС‚СЃС‚РІРёРµРј Р±РµСЂРµРјРµРЅРЅРѕСЃС‚Рё РІ С‚РµС‡РµРЅРёРµ РіРѕРґР° СЂРµРіСѓР»СЏСЂРЅРѕР№ РїРѕР»РѕРІРѕР№ Р¶РёР·РЅРё Р±РµР· РєРѕРЅС‚СЂР°С†РµРїС†РёРё.',
          findings: 'РЈР—Р Рё СЌС‚Р°РїРЅРѕРµ РѕР±СЃР»РµРґРѕРІР°РЅРёРµ РІС‹СЏРІРёР»Рё РІРµРґСѓС‰РёР№ СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅС‹Р№ С„Р°РєС‚РѕСЂ; РѕР±СЃР»РµРґРѕРІР°РЅРёРµ РїР°СЂС‚РЅРµСЂР° РїСЂРѕРІРµРґРµРЅРѕ РїР°СЂР°Р»Р»РµР»СЊРЅРѕ.',
          diagnosis: disease.name,
          treatment: 'РџСЂРѕРІРµРґРµРЅР° Р°РґСЂРµСЃРЅР°СЏ РєРѕСЂСЂРµРєС†РёСЏ РїСЂРёС‡РёРЅС‹ Р±РµСЃРїР»РѕРґРёСЏ СЃ РїРѕСЃР»РµРґСѓСЋС‰РёРј РїРµСЂРµС…РѕРґРѕРј Рє Р’Р Рў РїСЂРё РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕРј СЌС„С„РµРєС‚Рµ.',
          outcome: 'РџРѕСЃР»Рµ РєРѕСЂСЂРµРєС‚РёСЂРѕРІРєРё С‚Р°РєС‚РёРєРё РїРѕР»СѓС‡РµРЅ СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚ РёР»Рё СЃС„РѕСЂРјРёСЂРѕРІР°РЅ СЃР»РµРґСѓСЋС‰РёР№ С€Р°Рі Р»РµС‡РµРЅРёСЏ Р±РµР· РїРѕС‚РµСЂРё РІСЂРµРјРµРЅРё.',
        },
      ];
    case 'infection':
      return [
        {
          presentation: `РџР°С†РёРµРЅС‚РєР° РїРѕСЃС‚СѓРїРёР»Р° СЃ Р¶Р°Р»РѕР±Р°РјРё РЅР° ${getPrimarySymptom(disease).toLowerCase()} Рё РїСЂРёР·РЅР°РєРё РІРѕСЃРїР°Р»РµРЅРёСЏ РЅРёР¶РЅРёС… РёР»Рё РІРµСЂС…РЅРёС… РїРѕР»РѕРІС‹С… РїСѓС‚РµР№.`,
          findings: 'Р›Р°Р±РѕСЂР°С‚РѕСЂРЅР°СЏ РІРµСЂРёС„РёРєР°С†РёСЏ Рё РЈР—Р РїРѕР·РІРѕР»РёР»Рё РїРѕРґС‚РІРµСЂРґРёС‚СЊ РёРЅС„РµРєС†РёРѕРЅРЅС‹Р№ РїСЂРѕС†РµСЃСЃ Рё РёСЃРєР»СЋС‡РёС‚СЊ РѕСЃР»РѕР¶РЅРµРЅРёСЏ, С‚СЂРµР±СѓСЋС‰РёРµ РґСЂРµРЅРёСЂРѕРІР°РЅРёСЏ.',
          diagnosis: disease.name,
          treatment: 'РќР°Р·РЅР°С‡РµРЅР° СЌС‚РёРѕС‚СЂРѕРїРЅР°СЏ Р°РЅС‚РёР±Р°РєС‚РµСЂРёР°Р»СЊРЅР°СЏ/РїСЂРѕС‚РёРІРѕРїСЂРѕС‚РѕР·РѕР№РЅР°СЏ С‚РµСЂР°РїРёСЏ СЃ Р»РµС‡РµРЅРёРµРј РїР°СЂС‚РЅРµСЂР° Рё РєСЂР°С‚РєРёРј РєР»РёРЅРёС‡РµСЃРєРёРј РєРѕРЅС‚СЂРѕР»РµРј.',
          outcome: 'РќР° С„РѕРЅРµ Р»РµС‡РµРЅРёСЏ СЃРёРјРїС‚РѕРјС‹ СЂРµРіСЂРµСЃСЃРёСЂРѕРІР°Р»Рё, РїР°С†РёРµРЅС‚РєРµ СЂР°Р·СЉСЏСЃРЅРµРЅС‹ РјРµСЂС‹ РїСЂРѕС„РёР»Р°РєС‚РёРєРё СЂРµРёРЅС„РµРєС†РёРё Рё СЂРµРїСЂРѕРґСѓРєС‚РёРІРЅС‹С… РѕСЃР»РѕР¶РЅРµРЅРёР№.',
        },
      ];
    case 'urogyne':
      return [
        {
          presentation: `РџР°С†РёРµРЅС‚РєР° РїСЂРµРґСЉСЏРІР»СЏР»Р° Р¶Р°Р»РѕР±С‹ РЅР° ${getPrimarySymptom(disease).toLowerCase()} СЃ РѕРіСЂР°РЅРёС‡РµРЅРёРµРј РїРѕРІСЃРµРґРЅРµРІРЅРѕР№ Р°РєС‚РёРІРЅРѕСЃС‚Рё Рё СЃРЅРёР¶РµРЅРёРµРј РєР°С‡РµСЃС‚РІР° Р¶РёР·РЅРё.`,
          findings: 'Р¤СѓРЅРєС†РёРѕРЅР°Р»СЊРЅР°СЏ РѕС†РµРЅРєР°, РґРЅРµРІРЅРёРє СЃРёРјРїС‚РѕРјРѕРІ Рё РЈР—Р С‚Р°Р·РѕРІРѕРіРѕ РґРЅР° СѓС‚РѕС‡РЅРёР»Рё РІРµРґСѓС‰РёР№ РјРµС…Р°РЅРёР·Рј РЅР°СЂСѓС€РµРЅРёСЏ.',
          diagnosis: disease.name,
          treatment: 'РќР°С‡Р°С‚Р° РєРѕРЅСЃРµСЂРІР°С‚РёРІРЅР°СЏ СЂРµР°Р±РёР»РёС‚Р°С†РёСЏ; РїСЂРё РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕРј СЌС„С„РµРєС‚Рµ РѕР±СЃСѓР¶РґРµРЅР° СЌС‚Р°РїРЅР°СЏ С…РёСЂСѓСЂРіРёС‡РµСЃРєР°СЏ РєРѕСЂСЂРµРєС†РёСЏ.',
          outcome: 'РџРѕСЃР»Рµ РїРѕРґР±РѕСЂР° С‚Р°РєС‚РёРєРё РґРѕСЃС‚РёРіРЅСѓС‚Рѕ СѓРјРµРЅСЊС€РµРЅРёРµ СЃРёРјРїС‚РѕРјРѕРІ Рё СЃС„РѕСЂРјРёСЂРѕРІР°РЅ РґРѕР»РіРѕСЃСЂРѕС‡РЅС‹Р№ РїР»Р°РЅ РїСЂРѕС„РёР»Р°РєС‚РёРєРё СЂРµС†РёРґРёРІР°.',
        },
      ];
    default:
      return [
        {
          presentation: `РџР°С†РёРµРЅС‚РєР° РѕР±СЂР°С‚РёР»Р°СЃСЊ СЃ Р¶Р°Р»РѕР±Р°РјРё РЅР° ${getPrimarySymptom(disease).toLowerCase()} Рё С‚РёРїРёС‡РЅСѓСЋ РґР»СЏ ${disease.name.toLowerCase()} РєР»РёРЅРёС‡РµСЃРєСѓСЋ СЃРёРјРїС‚РѕРјР°С‚РёРєСѓ.`,
          findings: `${getPrimaryDiagnosticStep(disease)}. Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅР°СЏ РІРёР·СѓР°Р»РёР·Р°С†РёСЏ РїРѕРґС‚РІРµСЂРґРёР»Р° РїСЂРёР·РЅР°РєРё Р·Р°Р±РѕР»РµРІР°РЅРёСЏ Р±РµР· Р°Р»СЊС‚РµСЂРЅР°С‚РёРІРЅРѕР№ РїСЂРёС‡РёРЅС‹ СЃРёРјРїС‚РѕРјРѕРІ.`,
          diagnosis: disease.name,
          treatment: `РќР°С‡Р°С‚Р° С‚РµСЂР°РїРёСЏ: ${getPrimaryTreatment(disease)}. РўР°РєС‚РёРєР° СѓС‚РѕС‡РЅРµРЅР° СЃ СѓС‡РµС‚РѕРј РєР»РёРЅРёС‡РµСЃРєРѕР№ РґРёРЅР°РјРёРєРё.`,
          outcome: 'РќР° С„РѕРЅРµ Р»РµС‡РµРЅРёСЏ РґРѕСЃС‚РёРіРЅСѓС‚Рѕ РєР»РёРЅРёС‡РµСЃРєРѕРµ СѓР»СѓС‡С€РµРЅРёРµ, СЂРµРєРѕРјРµРЅРґРѕРІР°РЅРѕ РїР»Р°РЅРѕРІРѕРµ РЅР°Р±Р»СЋРґРµРЅРёРµ РґР»СЏ РєРѕРЅС‚СЂРѕР»СЏ СЂРµС†РёРґРёРІР°.',
        },
      ];
  }
};

const buildImaging = (disease: Disease) => {
  const derived = disease.diagnostics.steps.filter((step) => /РЈР—Р|РњР Рў|РљРў|РґРѕРїРїР»РµСЂ|РљРўР“|Р±РёРѕРјРµС‚СЂ/i.test(step));

  if (derived.length > 0) {
    return derived;
  }

  if (disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return buildObstetricsImaging(getObstetricsCluster(disease));
  }

  return buildGynecologyImaging(getGynecologyCluster(disease));
};

const buildDifferential = (disease: Disease) => {
  if (disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return buildObstetricsDifferential(getObstetricsCluster(disease));
  }

  return buildGynecologyDifferential(getGynecologyCluster(disease));
};

const buildProtocols = (disease: Disease): UltrasoundProtocol[] => {
  if (disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return buildObstetricsProtocols(getObstetricsCluster(disease));
  }

  return buildGynecologyProtocols(getGynecologyCluster(disease));
};

const buildFindings = (disease: Disease): UltrasoundFinding[] => {
  if (disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return buildObstetricsFindings(getObstetricsCluster(disease), disease);
  }

  return buildGynecologyFindings(getGynecologyCluster(disease), disease);
};

const buildNormalValues = (disease: Disease) => {
  if (disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return buildObstetricsNormalValues(getObstetricsCluster(disease));
  }

  return buildGynecologyNormalValues(getGynecologyCluster(disease));
};

const buildImagingTips = (disease: Disease) => {
  if (disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return buildObstetricsTips(getObstetricsCluster(disease));
  }

  return buildGynecologyTips(getGynecologyCluster(disease));
};

const buildRecommendations = (disease: Disease) => {
  if (disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return buildObstetricsRecommendations(getObstetricsCluster(disease), disease);
  }

  return buildGynecologyRecommendations(getGynecologyCluster(disease), disease);
};

const buildPrognosis = (disease: Disease) => {
  if (disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return buildObstetricsPrognosis(getObstetricsCluster(disease), disease);
  }

  return buildGynecologyPrognosis(getGynecologyCluster(disease), disease);
};

const buildFollowUp = (disease: Disease) => {
  if (disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return buildObstetricsFollowUp(getObstetricsCluster(disease), disease);
  }

  return buildGynecologyFollowUp(getGynecologyCluster(disease), disease);
};

const buildClinicalCases = (disease: Disease) => {
  if (disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ') {
    return buildObstetricsCases(getObstetricsCluster(disease), disease);
  }

  return buildGynecologyCases(getGynecologyCluster(disease), disease);
};

const buildUltrasound = (disease: Disease) => ({
  protocols: buildProtocols(disease),
  findings: buildFindings(disease),
  echogenicity:
    disease.subtitle === 'Р“РёРЅРµРєРѕР»РѕРіРёСЏ'
      ? 'РћРїРёСЃР°РЅРёРµ СЌС…РѕСЃС‚СЂСѓРєС‚СѓСЂС‹ РґРѕР»Р¶РЅРѕ РІРєР»СЋС‡Р°С‚СЊ РѕРґРЅРѕСЂРѕРґРЅРѕСЃС‚СЊ, РєРѕРЅС‚СѓСЂС‹, Р°РєСѓСЃС‚РёС‡РµСЃРєРёРµ СЌС„С„РµРєС‚С‹ Рё СЃРІСЏР·СЊ СЃ Р·РѕРЅРѕР№ РїСЂРµРґРїРѕР»Р°РіР°РµРјРѕРіРѕ РїРѕСЂР°Р¶РµРЅРёСЏ.'
      : undefined,
  vascularization:
    disease.subtitle === 'Р“РёРЅРµРєРѕР»РѕРіРёСЏ'
      ? 'Р’Р°СЃРєСѓР»СЏСЂРёР·Р°С†РёСЏ РѕС†РµРЅРёРІР°РµС‚СЃСЏ РїСЂРё Р¦Р”Рљ/СЌРЅРµСЂРіРµС‚РёС‡РµСЃРєРѕРј РґРѕРїРїР»РµСЂРµ РґР»СЏ СѓС‚РѕС‡РЅРµРЅРёСЏ Р°РєС‚РёРІРЅРѕСЃС‚Рё РїСЂРѕС†РµСЃСЃР° Рё РѕРЅРєРѕСЂРёСЃРєР°.'
      : undefined,
  dopplerFindings:
    disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ'
      ? 'Р”РѕРїРїР»РµСЂРѕРјРµС‚СЂРёСЏ РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ РґР»СЏ СЂР°РЅРЅРµРіРѕ РІС‹СЏРІР»РµРЅРёСЏ РїР»Р°С†РµРЅС‚Р°СЂРЅРѕР№ РЅРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕСЃС‚Рё Рё СѓС…СѓРґС€РµРЅРёСЏ СЃРѕСЃС‚РѕСЏРЅРёСЏ РїР»РѕРґР°.'
      : 'Р”РѕРїРїР»РµСЂ РїРѕРјРѕРіР°РµС‚ РѕС†РµРЅРёС‚СЊ С…Р°СЂР°РєС‚РµСЂ РєСЂРѕРІРѕСЃРЅР°Р±Р¶РµРЅРёСЏ РѕС‡Р°РіР°, РІС‹СЏРІРёС‚СЊ РїРµСЂРµРєСЂСѓС‚, РІРѕСЃРїР°Р»РёС‚РµР»СЊРЅСѓСЋ РіРёРїРµСЂРІР°СЃРєСѓР»СЏСЂРёР·Р°С†РёСЋ РёР»Рё РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРёР№ РѕРїСѓС…РѕР»РµРІС‹Р№ СЂРёСЃСѓРЅРѕРє.',
  imagingTips: buildImagingTips(disease),
  normalValues: buildNormalValues(disease),
  pitfalls: ['РќРµ РёРЅС‚РµСЂРїСЂРµС‚РёСЂРѕРІР°С‚СЊ РЈР—Р РёР·РѕР»РёСЂРѕРІР°РЅРЅРѕ Р±РµР· РєР»РёРЅРёС‡РµСЃРєРѕРіРѕ РєРѕРЅС‚РµРєСЃС‚Р° Рё РґР°РЅРЅС‹С… СЃРјРµР¶РЅС‹С… РёСЃСЃР»РµРґРѕРІР°РЅРёР№.', 'РџСЂРё РЅРµСѓР±РµРґРёС‚РµР»СЊРЅРѕР№ РєР°СЂС‚РёРЅРµ РЅРµ РїРѕРІС‚РѕСЂСЏС‚СЊ РѕРґРЅРѕ Рё С‚Рѕ Р¶Рµ РёСЃСЃР»РµРґРѕРІР°РЅРёРµ Р±РµСЃРєРѕРЅРµС‡РЅРѕ, Р° СЌСЃРєР°Р»РёСЂРѕРІР°С‚СЊ РІРёР·СѓР°Р»РёР·Р°С†РёСЋ РїРѕ РїРѕРєР°Р·Р°РЅРёСЏРј.'],
  whenMRIorCTNeeded: ['РќСѓР¶РЅР° РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅР°СЏ РІРёР·СѓР°Р»РёР·Р°С†РёСЏ РїСЂРё РЅРµСЏСЃРЅРѕР№ РєР°СЂС‚РёРЅРµ, РіР»СѓР±РѕРєРѕРј СЂР°СЃРїСЂРѕСЃС‚СЂР°РЅРµРЅРёРё РїСЂРѕС†РµСЃСЃР°, РѕРЅРєРѕРїРѕРґРѕР·СЂРµРЅРёРё РёР»Рё СЂР°СЃС…РѕР¶РґРµРЅРёРё РЈР—Р СЃ РєР»РёРЅРёРєРѕР№.'],
  reportingChecklist: ['Р›РѕРєР°Р»РёР·Р°С†РёСЏ Рё СЂР°Р·РјРµСЂС‹', 'РљР»СЋС‡РµРІС‹Рµ РїР°С‚РѕР»РѕРіРёС‡РµСЃРєРёРµ РїСЂРёР·РЅР°РєРё', 'РџСЂРёР·РЅР°РєРё РѕСЃР»РѕР¶РЅРµРЅРёР№', 'РљР»РёРЅРёС‡РµСЃРєРё Р·РЅР°С‡РёРјС‹Рµ РёР·РјРµСЂРµРЅРёСЏ', 'Р РµРєРѕРјРµРЅРґР°С†РёРё РїРѕ РґР°Р»СЊРЅРµР№С€РµР№ РІРёР·СѓР°Р»РёР·Р°С†РёРё РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё'],
});

const mergeUltrasound = (disease: Disease) => {
  const fallback = buildUltrasound(disease);
  const current = disease.ultrasound;

  if (!current) {
    return fallback;
  }

  return {
    protocols: current.protocols?.length ? current.protocols : fallback.protocols,
    findings: current.findings?.length ? current.findings : fallback.findings,
    echogenicity: current.echogenicity ?? fallback.echogenicity,
    vascularization: current.vascularization ?? fallback.vascularization,
    dopplerFindings: current.dopplerFindings ?? fallback.dopplerFindings,
    imagingTips: current.imagingTips?.length ? current.imagingTips : fallback.imagingTips,
    normalValues: current.normalValues ?? fallback.normalValues,
    pitfalls: current.pitfalls?.length ? current.pitfalls : fallback.pitfalls,
    whenMRIorCTNeeded: current.whenMRIorCTNeeded?.length ? current.whenMRIorCTNeeded : fallback.whenMRIorCTNeeded,
    reportingChecklist: current.reportingChecklist?.length ? current.reportingChecklist : fallback.reportingChecklist,
  };
};

const deepRepair = <T,>(value: T): T => {
  if (typeof value === 'string') {
    return cleanText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((entry) => deepRepair(entry)) as T;
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, entry]) => [cleanText(key), deepRepair(entry)]),
    ) as T;
  }

  return value;
};

export const enrichDisease = (rawDisease: DiseaseInput): Disease => {
  const disease = normalizeDisease(rawDisease);
  const finalGuidelines =
    disease.subtitle === 'Р“РёРЅРµРєРѕР»РѕРіРёСЏ'
      ? buildGynecologyGuidelines(getGynecologyCluster(disease))
      : buildObstetricsGuidelines(getObstetricsCluster(disease));

  const enriched: Disease = {
    ...disease,
    overview: disease.overview ?? buildOverview(disease),
    diagnostics: {
      ...disease.diagnostics,
      imaging: disease.diagnostics.imaging?.length ? disease.diagnostics.imaging : buildImaging(disease),
      differential: disease.diagnostics.differential?.length ? disease.diagnostics.differential : buildDifferential(disease),
      initialEvaluation: disease.diagnostics.initialEvaluation?.length ? disease.diagnostics.initialEvaluation : [cleanText(getPrimaryDiagnosticStep(disease))],
      requiredMinimum: disease.diagnostics.requiredMinimum?.length ? disease.diagnostics.requiredMinimum : withFallback(disease.clinicalSummary?.diagnosticMinimum, [cleanText(getPrimaryDiagnosticStep(disease)), cleanText(disease.diagnostics.markers)]),
      confirmatoryTests: disease.diagnostics.confirmatoryTests?.length ? disease.diagnostics.confirmatoryTests : withFallback(disease.diagnostics.imaging, [cleanText(getPrimaryDiagnosticStep(disease))]),
      testsByIndication: disease.diagnostics.testsByIndication?.length ? disease.diagnostics.testsByIndication : withFallback(disease.diagnostics.differential, ['Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ С‚РµСЃС‚С‹ РЅР°Р·РЅР°С‡Р°СЋС‚СЃСЏ РїСЂРё Р°С‚РёРїРёС‡РЅРѕРј С‚РµС‡РµРЅРёРё, РѕСЃР»РѕР¶РЅРµРЅРёСЏС… РёР»Рё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё СѓС‚РѕС‡РЅРёС‚СЊ Р°Р»СЊС‚РµСЂРЅР°С‚РёРІРЅС‹Р№ РґРёР°РіРЅРѕР·.']),
      avoidOvertesting: disease.diagnostics.avoidOvertesting?.length ? disease.diagnostics.avoidOvertesting : ['РќРµ СЂР°СЃС€РёСЂСЏС‚СЊ РѕР±СЃР»РµРґРѕРІР°РЅРёРµ Р±РµР· РєР»РёРЅРёС‡РµСЃРєРѕРіРѕ РІРѕРїСЂРѕСЃР° Рё РІР»РёСЏРЅРёСЏ СЂРµР·СѓР»СЊС‚Р°С‚Р° РЅР° С‚Р°РєС‚РёРєСѓ.'],
    },
    treatment: {
      ...disease.treatment,
      firstLine: disease.treatment.firstLine?.length ? disease.treatment.firstLine : disease.treatment.conservative,
      secondLine: disease.treatment.secondLine?.length ? disease.treatment.secondLine : disease.treatment.surgical,
      proceduralOrSurgical: disease.treatment.proceduralOrSurgical?.length ? disease.treatment.proceduralOrSurgical : disease.treatment.surgical,
      inpatientManagement: disease.treatment.inpatientManagement?.length ? disease.treatment.inpatientManagement : (disease.subtitle === 'РђРєСѓС€РµСЂСЃС‚РІРѕ' ? ['РџСЂРё РЅРµСЃС‚Р°Р±РёР»СЊРЅРѕРј С‚РµС‡РµРЅРёРё С‚СЂРµР±СѓРµС‚СЃСЏ СЃС‚Р°С†РёРѕРЅР°СЂРЅРѕРµ РІРµРґРµРЅРёРµ Рё РјРѕРЅРёС‚РѕСЂРёРЅРі.'] : []),
      whatNotToDo: disease.treatment.whatNotToDo?.length ? disease.treatment.whatNotToDo : ['РќРµ РїСЂРѕРґРѕР»Р¶Р°С‚СЊ РЅРµСЌС„С„РµРєС‚РёРІРЅСѓСЋ С‚РµСЂР°РїРёСЋ Р±РµР· РїРµСЂРµСЃРјРѕС‚СЂР° РґРёР°РіРЅРѕР·Р° Рё С†РµР»РµР№ Р»РµС‡РµРЅРёСЏ.'],
      guidelines: finalGuidelines,
    },
    guidelineBasis: disease.guidelineBasis?.length ? disease.guidelineBasis : buildGuidelineBasis(disease, finalGuidelines),
    guidelineStatus: disease.guidelineStatus ?? 'current',
    lastReviewed: disease.lastReviewed ?? CURRENT_CONTENT_REVIEW_DATE,
    sourceQuality: disease.sourceQuality ?? buildSourceQuality(disease),
    redFlags: disease.redFlags?.length ? disease.redFlags : disease.clinicalSummary?.redFlags ?? buildClinicalSummary(disease).redFlags,
    diagnosticCriteria: disease.diagnosticCriteria ?? buildDiagnosticCriteria(disease),
    severityStratification: disease.severityStratification ?? buildSeverityStratification(disease),
    differentialDiagnosis: disease.differentialDiagnosis?.length ? disease.differentialDiagnosis : buildStructuredDifferential(disease),
    managementAlgorithm: disease.managementAlgorithm ?? buildManagementAlgorithm(disease),
    contraindicatedOrAvoid: disease.contraindicatedOrAvoid?.length ? disease.contraindicatedOrAvoid : disease.treatment.whatNotToDo?.length ? disease.treatment.whatNotToDo : ['РР·Р±РµРіР°С‚СЊ Р·Р°РґРµСЂР¶РєРё СЌСЃРєР°Р»Р°С†РёРё РїСЂРё СѓС…СѓРґС€РµРЅРёРё РєР»РёРЅРёС‡РµСЃРєРѕР№ РєР°СЂС‚РёРЅС‹.'],
    ultrasound: mergeUltrasound(disease),
    recommendations: disease.recommendations?.length ? disease.recommendations : buildRecommendations(disease),
    prognosis: disease.prognosis ?? buildPrognosis(disease),
    followUp: disease.followUp ?? buildFollowUp(disease),
    followUpTriggers: disease.followUpTriggers ?? buildFollowUpTriggers(disease),
    clinicalSummary: disease.clinicalSummary ?? buildClinicalSummary(disease),
    clinicalCases: disease.clinicalCases?.length ? disease.clinicalCases : buildClinicalCases(disease),
    patientExplanation: disease.patientExplanation ?? buildPatientExplanation(disease),
    patientCounseling: disease.patientCounseling?.length ? disease.patientCounseling : buildPatientCounseling(disease),
    specialPopulations: disease.specialPopulations ?? buildSpecialPopulations(disease),
    timingOfDelivery: disease.timingOfDelivery ?? buildTimingOfDelivery(disease),
    maternalMonitoring: disease.maternalMonitoring ?? buildMaternalMonitoring(disease),
    fetalMonitoring: disease.fetalMonitoring ?? buildFetalMonitoring(disease),
    inpatientVsOutpatient: disease.inpatientVsOutpatient ?? buildInpatientVsOutpatient(disease),
    deliveryIndications: disease.deliveryIndications?.length ? disease.deliveryIndications : buildDeliveryIndications(disease),
    postpartumManagement: disease.postpartumManagement?.length ? disease.postpartumManagement : buildPostpartumManagement(disease),
    fertilityImpact: disease.fertilityImpact?.length ? disease.fertilityImpact : buildFertilityImpact(disease),
    malignancyRisk: disease.malignancyRisk?.length ? disease.malignancyRisk : buildMalignancyRisk(disease),
    recurrenceRisk: disease.recurrenceRisk?.length ? disease.recurrenceRisk : buildRecurrenceRisk(disease),
    screeningAndPrevention: disease.screeningAndPrevention?.length ? disease.screeningAndPrevention : buildScreeningAndPrevention(disease),
    whenBiopsyNeeded: disease.whenBiopsyNeeded?.length ? disease.whenBiopsyNeeded : buildWhenBiopsyNeeded(disease),
  };

  return deepRepair(enriched);
};

const slugifyIdPart = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9Р°-СЏС‘]+/gi, '-')
    .replace(/^-+|-+$/g, '');

const ensureUniqueDiseaseIds = (diseases: Disease[]) => {
  const usedIds = new Set<string>();

  return diseases.map((disease) => {
    const baseId = disease.id.trim();

    if (!usedIds.has(baseId)) {
      usedIds.add(baseId);
      return disease;
    }

    const subtitlePart = slugifyIdPart(disease.subtitle);
    const icdPart = slugifyIdPart(disease.icdDetail ?? disease.icd);
    let candidateId = `${baseId}__${subtitlePart}-${icdPart}`;
    let duplicateIndex = 2;

    while (usedIds.has(candidateId)) {
      candidateId = `${baseId}__${subtitlePart}-${icdPart}-${duplicateIndex}`;
      duplicateIndex += 1;
    }

    usedIds.add(candidateId);

    return {
      ...disease,
      id: candidateId,
    };
  });
};

export const enrichDiseases = (diseases: Disease[]) => ensureUniqueDiseaseIds(diseases.map((disease) => enrichDisease(disease as DiseaseInput)));
