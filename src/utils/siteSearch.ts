/**
 * siteSearch — универсальный поиск по всему сайту GYN
 *
 * Ищет по:
 * - Болезням (гинекология + акушерство): name, icd, icdDetail, симптомы, описание
 * - Препаратам: name, nameEn, category, indications
 * - Шкалам/опросникам: name, fullName, category, description
 *
 * Возвращает группированные результаты с релевантностью.
 */

import type { CategoryId, Disease, Medication, Questionnaire, TabType } from '../types';
import { repairText } from './textRepair';

// ───── Types ─────

export type SearchResultType = 'disease' | 'medication' | 'questionnaire';

export interface SearchResult {
  type: SearchResultType;
  id: string;
  label: string;
  description: string;
  badge: string;
  route: TabType | 'pharmacology' | 'questionnaires';
  category?: CategoryId;
  icd?: string;
  subtitle?: string;
  query?: string;
  /** Score 0-100 for ranking */
  score: number;
}

export interface GroupedResults {
  diseases: SearchResult[];
  medications: SearchResult[];
  questionnaires: SearchResult[];
  total: number;
}

// ───── Normalization ─────

const normalize = (value: string): string =>
  repairText(value)
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[^a-zа-я0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

// ───── Synonyms / fuzzy map ─────

const SYNONYMS: Record<string, string[]> = {
  миома: ['лейомиома', 'фиброма', 'd25'],
  эрозия: ['эктопия', 'цервицит'],
  эндометриоз: ['n80', 'аденомиоз'],
  впч: ['папилломавирус', 'hpv', 'cin', 'c53'],
  вич: ['вирус иммунодефицита', 'hiv'],
  спкя: ['pcos', 'e28.2', 'ановуляция', 'гиперандрогения'],
  кок: ['оральные контрацептивы', 'комбинированные'],
  эко: ['экстракорпоральное', 'ivf'],
  икси: ['icsi'],
  пгд: ['предимплантационная'],
  преэклампсия: ['o14', 'гипертензия', 'белок', 'давление'],
  кровотечение: ['n92', 'o46', 'меноррагия', 'гемостаз', 'амк'],
  инфекция: ['хламид', 'гоноре', 'трихомон', 'воспал'],
  амк: ['кровотечение', 'меноррагия', 'n92'],
  узи: ['эхография', 'допплер', 'сонография'],
  мрт: ['магнитно-резонансная', 'mri'],
  кт: ['компьютерная томография'],
  диабет: ['гсд', 'o24'],
  герпес: ['herpes', 'hsv'],
  бесплодие: ['инфертильность', 'infertility'],
  эндометрит: ['воспаление эндометрия'],
  гонорея: ['gonorrhea', 'gonorrhoea'],
  хламидиоз: ['chlamydia', 'chlamydiosis'],
};

// ───── Scoring ─────

function scoreSearch(terms: string[], haystack: string): number {
  let score = 0;
  const normalHaystack = normalize(haystack);

  for (const term of terms) {
    if (normalHaystack.includes(term)) {
      // Exact phrase match
      score += 10;
      // Boost for short terms that match early (likely ICD code or exact name)
      if (term.length <= 5 && normalHaystack.startsWith(term)) score += 5;
    } else {
      // Check synonyms
      for (const [key, values] of Object.entries(SYNONYMS)) {
        if (key.includes(term) || term.includes(key)) {
          if (values.some((v) => normalHaystack.includes(normalize(v)))) {
            score += 5;
            break;
          }
        }
      }
    }
  }

  return score;
}

// ───── Index data ─────

/** Build a searchable text blob from a Disease */
function buildDiseaseText(item: Disease): string {
  return [
    item.name,
    item.icd,
    item.icdDetail ?? '',
    item.subtitle,
    item.description,
    item.definition,
    ...(item.symptoms ?? []),
    ...(item.etiology ?? []),
    item.diagnostics?.markers ?? '',
    ...(item.treatment?.conservative ?? []),
    ...(item.treatment?.surgical ?? []),
    item.overview?.quickTake ?? '',
    item.overview?.prevalence ?? '',
  ]
    .map((s) => repairText(s ?? ''))
    .join(' ');
}

/** Build a searchable text blob from a Medication */
function buildMedicationText(med: Medication): string {
  return [
    med.name,
    med.nameEn,
    med.category,
    ...(med.indications ?? []),
    ...(med.majorPracticePoints ?? []),
    ...(med.clinicalUseCases ?? []).map((u) => u.scenario),
  ]
    .map((s) => repairText(s ?? ''))
    .join(' ');
}

/** Build a searchable text blob from a Questionnaire */
function buildQuestionnaireText(q: Questionnaire): string {
  return [
    q.name,
    q.fullName,
    q.category,
    q.description,
  ]
    .map((s) => repairText(s ?? ''))
    .join(' ');
}

// ───── Search engine ─────

export class SiteSearch {
  private diseases: Disease[] = [];
  private medications: Medication[] = [];
  private questionnaires: Questionnaire[] = [];
  private loaded = false;
  private loading: Promise<void> | null = null;

  /** Lazily load all data on first search */
  private async ensureLoaded(): Promise<void> {
    if (this.loaded) return;
    if (this.loading) return this.loading;

    this.loading = (async () => {
      try {
        const [gynData, obsData, pharmData, qData] = await Promise.all([
          import('../data/loadGynData').then((m) => m.loadGynData()),
          import('../data/loadObsData').then((m) => m.loadObsData()),
          import('../data/pharmacology').then((m) => m.medications as Medication[]),
          import('../data/questionnaires').then((m) => m.questionnaires as Questionnaire[]),
        ]);

        this.diseases = [...gynData, ...obsData].filter((d): d is Disease => !!d.id && !!d.name);
        this.medications = Array.isArray(pharmData) ? pharmData : [];
        this.questionnaires = Array.isArray(qData) ? qData : [];
        this.loaded = true;
      } finally {
        this.loading = null;
      }
    })();

    return this.loading;
  }

  get isLoading(): boolean {
    return this.loading !== null && !this.loaded;
  }

  get isLoaded(): boolean {
    return this.loaded;
  }

  /** Main search entry point */
  async search(query: string): Promise<GroupedResults> {
    const trimmed = query.trim();
    const empty: GroupedResults = {
      diseases: [],
      medications: [],
      questionnaires: [],
      total: 0,
    };

    if (trimmed.length < 1) return empty;

    await this.ensureLoaded();
    const terms = normalize(trimmed)
      .split(/\s+/)
      .filter(Boolean);

    if (terms.length === 0) return empty;

    // Search diseases
    const diseaseResults = this.diseases
      .map((d) => ({
        type: 'disease' as SearchResultType,
        id: d.id,
        label: repairText(d.name),
        description: repairText(d.description || d.definition || ''),
        badge: d.icd || 'Нозология',
        route: d.subtitle?.toLowerCase().includes('акушер') ? 'obstetrics' as TabType : 'gynecology' as TabType,
        category: undefined,
        icd: d.icd,
        subtitle: d.subtitle,
        query: repairText(d.name),
        score: scoreSearch(terms, buildDiseaseText(d)),
      }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    // Search medications
    const medicationResults = this.medications
      .map((m) => ({
        type: 'medication' as SearchResultType,
        id: m.id,
        label: repairText(m.name),
        description: `${repairText(m.category)}${m.nameEn ? ` — ${m.nameEn}` : ''}`,
        badge: 'Препарат',
        route: 'pharmacology' as const,
        query: repairText(m.name),
        score: scoreSearch(terms, buildMedicationText(m)),
      }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);

    // Search questionnaires
    const questionnaireResults = this.questionnaires
      .map((q) => ({
        type: 'questionnaire' as SearchResultType,
        id: q.id,
        label: repairText(q.name),
        description: repairText(q.description || q.fullName || ''),
        badge: 'Шкала',
        route: 'questionnaires' as const,
        query: repairText(q.name),
        score: scoreSearch(terms, buildQuestionnaireText(q)),
      }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);

    const all = [...diseaseResults, ...medicationResults, ...questionnaireResults];

    return {
      diseases: diseaseResults,
      medications: medicationResults,
      questionnaires: questionnaireResults,
      total: all.length,
    };
  }

  /** Get all disease data for direct access */
  getDiseases(): Disease[] {
    return this.diseases;
  }

  /** Find a disease by ID */
  findDiseaseById(id: string): Disease | undefined {
    return this.diseases.find(
      (d) => d.id === id || d.id.startsWith(id + '__') || d.id.startsWith(id + '-'),
    );
  }
}

/** Singleton instance */
export const siteSearch = new SiteSearch();