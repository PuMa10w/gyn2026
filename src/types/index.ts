export interface UltrasoundProtocol {
  method: string;
  indications: string[];
  preparation?: string;
}

export interface UltrasoundFinding {
  location: string;
  description: string;
  measurements?: Record<string, string>;
  normal?: string;
  pathology?: string;
  clinicalSignificance?: string;
}

export interface Disease {
  id: string;
  name: string;
  icd: string;
  icdDetail?: string;
  subtitle: 'Гинекология' | 'Акушерство';
  description: string;
  icon: string;
  definition: string;
  epidemiology: string;
  etiology: string[];
  symptoms: string[];
  classification?: {
    title: string;
    stages: string[];
  };
  diagnostics: {
    steps: string[];
    markers: string;
    differential?: string[];
    imaging?: string[];
  };
  ultrasound?: {
    protocols: UltrasoundProtocol[];
    findings: UltrasoundFinding[];
    echogenicity?: string;
    vascularization?: string;
    dopplerFindings?: string;
    imagingTips?: string[];
    normalValues?: Record<string, string>;
  };
  treatment: {
    conservative?: string[];
    surgical?: string[];
    guidelines: {
      eau: string;
      acog: string;
      ranzcog: string;
      ru: string;
    };
  };
  recommendations?: string[];
  prognosis?: {
    general?: string;
    factors?: string[];
    survival?: string;
  };
  followUp?: {
    frequency?: string;
    duration?: string;
    tests?: string[];
  };
  clinicalCases?: Array<{
    presentation: string;
    findings: string;
    diagnosis: string;
    treatment: string;
    outcome: string;
  }>;
}

export interface Questionnaire {
  id: string;
  name: string;
  fullName: string;
  category: string;
  description: string;
  icon: string;
  questions: string[];
  options: string[];
  scoring: (answers: number[]) => ScoringResult;
}

export interface QuestionnaireData {
  id: string;
  name: string;
  fullName: string;
  category: string;
  description: string;
  icon: string;
  questions: string[];
  options: string[];
  scoring: (answers: number[]) => {
    level: string;
    severity: string;
    color: string;
    recommendation: string;
  };
}

export interface ScoringResult {
  level: string;
  severity: 'normal' | 'mild' | 'moderate' | 'severe' | 'critical' | string;
  color: string;
  recommendation: string;
}

export interface QuestionnaireHistory {
  id: string;
  name: string;
  fullName: string;
  date: string;
  score: number;
  level: string;
  severity: string;
  color: string;
}

export type CategoryId = 'all' | 'oncology' | 'infection' | 'hormonal' | 'inflammatory' | 'pregnancy';
export type TabType = 'home' | 'gynecology' | 'obstetrics';

export interface MedicationInteraction {
  drug: string;
  effect: string;
  level: 'low' | 'medium' | 'high' | string;
}

export interface Medication {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  forms: string[];
  dosage: Record<string, string>;
  indications: string[];
  contraindications: string[];
  sideEffects: string[];
  interactions?: MedicationInteraction[];
}

export interface RegimenStep {
  day: string;
  drug: string;
  dose?: string;
  note?: string;
}

export interface Regimen {
  id: string;
  name: string;
  steps: RegimenStep[];
}

export interface RegimenData {
  id: string;
  name: string;
  steps?: RegimenStep[];
}

export type PharmaItem = Medication | Regimen | RegimenData;
