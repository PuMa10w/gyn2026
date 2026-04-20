import type { CategoryId, Disease, TabType } from '../types';

type NonAllCategory = Exclude<CategoryId, 'all'>;

type CategorizedDisease = {
  item: Disease;
  category: NonAllCategory;
  searchTarget: string;
};

const weightedKeywords = new Set(['спкя', 'впч', 'вич', 'cin']);

const categoryKeywords: Record<NonAllCategory, string[]> = {
  oncology: [
    'рак',
    'онколог',
    'опухол',
    'неоплаз',
    'карцином',
    'малигн',
    'злокаче',
    'сарком',
    'метастаз',
    'дисплаз',
    'cin',
  ],
  infection: [
    'инфек',
    'вирус',
    'бактер',
    'гриб',
    'впч',
    'вич',
    'герпес',
    'хламид',
    'гоноре',
    'трихомон',
    'микоплаз',
    'уреаплаз',
    'вагиноз',
    'кандид',
    'цервицит',
    'эндометрит',
    'сальпингит',
  ],
  hormonal: [
    'гормон',
    'эндокрин',
    'спкя',
    'ановуля',
    'анновуля',
    'гиперандроген',
    'гиперпролактин',
    'эстроген',
    'прогестерон',
    'инсулинорезист',
    'тиреоид',
    'диабет',
  ],
  inflammatory: [
    'воспал',
    'эндометриоз',
    'аднексит',
    'сальпинго',
    'вагинит',
    'вульвит',
    'цервицит',
    'тазов',
    'боль',
    'спайк',
  ],
  pregnancy: [
    'беремен',
    'гестаци',
    'род',
    'плод',
    'плацент',
    'выкидыш',
    'аборт',
    'преэкламп',
    'экламп',
    'послеродов',
    'трофобласт',
    'акушер',
  ],
};

export const categoryPriority: NonAllCategory[] = [
  'pregnancy',
  'oncology',
  'infection',
  'hormonal',
  'inflammatory',
];

export const gynecologyCategories: CategoryId[] = [
  'all',
  'oncology',
  'infection',
  'hormonal',
  'inflammatory',
  'pregnancy',
];

export const obstetricsCategories: CategoryId[] = ['all', 'infection', 'hormonal', 'inflammatory', 'pregnancy'];

export function getVisibleCategories(activeTab: TabType): CategoryId[] {
  return activeTab === 'gynecology' ? gynecologyCategories : obstetricsCategories;
}

function buildSearchableText(item: Disease) {
  return [
    item.name,
    item.icd,
    item.icdDetail ?? '',
    item.subtitle,
    item.description,
    item.definition,
    item.epidemiology,
    item.classification?.title ?? '',
    item.diagnostics.markers,
    ...item.etiology,
    ...item.symptoms,
    ...(item.classification?.stages ?? []),
    ...item.diagnostics.steps,
    ...(item.treatment.conservative ?? []),
    ...(item.treatment.surgical ?? []),
    item.treatment.guidelines.eau,
    item.treatment.guidelines.acog,
    item.treatment.guidelines.ranzcog,
    item.treatment.guidelines.ru,
  ]
    .join(' ')
    .toLowerCase();
}

function getCategoryScore(text: string, category: NonAllCategory) {
  return categoryKeywords[category].reduce((score, keyword) => {
    if (!text.includes(keyword)) {
      return score;
    }

    return score + (keyword.length >= 8 || weightedKeywords.has(keyword) ? 2 : 1);
  }, 0);
}

function resolveDiseaseCategory(item: Disease, searchableText: string): NonAllCategory {
  const scores = categoryPriority.map((category) => ({
    category,
    score: getCategoryScore(searchableText, category),
  }));
  const topScore = Math.max(...scores.map(({ score }) => score));

  if (topScore === 0) {
    return item.subtitle === 'Акушерство' ? 'pregnancy' : 'inflammatory';
  }

  return scores.find(({ score }) => score === topScore)?.category ?? 'inflammatory';
}

export function categorizeDiseases(items: Disease[]): CategorizedDisease[] {
  return items.map((item) => {
    const searchTarget = buildSearchableText(item);

    return {
      item,
      category: resolveDiseaseCategory(item, searchTarget),
      searchTarget,
    };
  });
}

export function getCategoryCounts(categorizedData: CategorizedDisease[]): Record<NonAllCategory, number> {
  return categoryPriority.reduce(
    (result, category) => {
      result[category] = categorizedData.filter((entry) => entry.category === category).length;
      return result;
    },
    {} as Record<NonAllCategory, number>,
  );
}

type FilterDiseasesParams = {
  activeCategory: CategoryId;
  categorizedData: CategorizedDisease[];
  historyIds: Set<string>;
  favoriteIds: Set<string>;
  normalizedSearch: string;
  showFavorites: boolean;
  showHistory: boolean;
};

export function filterDiseases({
  activeCategory,
  categorizedData,
  historyIds,
  favoriteIds,
  normalizedSearch,
  showFavorites,
  showHistory,
}: FilterDiseasesParams): Disease[] {
  let data = categorizedData;

  if (normalizedSearch) {
    data = data.filter(({ searchTarget }) => {
      return searchTarget.includes(normalizedSearch);
    });
  }

  if (showFavorites) {
    data = data.filter(({ item }) => favoriteIds.has(item.id));
  }

  if (showHistory) {
    data = data.filter(({ item }) => historyIds.has(item.id));
  }

  if (activeCategory !== 'all') {
    data = data.filter(({ category }) => category === activeCategory);
  }

  return data.map(({ item }) => item);
}
