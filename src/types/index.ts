export interface Disease {
  id: string;
  name: string;
  icd: string;
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

export interface ScoringResult {
  level: string;
  severity: 'normal' | 'mild' | 'moderate' | 'severe' | 'critical';
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

export type TabType = 'gynecology' | 'obstetrics';
