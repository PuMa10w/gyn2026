import React, { Suspense, lazy, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import DiseaseCard from './components/DiseaseCard';
import CategoryFilter from './components/CategoryFilter';
import BackgroundEffects from './components/BackgroundEffects';
import ErrorBoundary from './components/ErrorBoundary';
import { useDebounce } from './hooks/useDebounce';
import { useTheme } from './hooks/useTheme';
import { useFavorites } from './hooks/useFavorites';
import { useHistory } from './hooks/useHistory';
import { gynData } from './data/gynData';
import { obsData } from './data/obsData';
import type { CategoryId, Disease, TabType } from './types';

const DiseaseModal = lazy(() => import('./components/DiseaseModal'));
const Questionnaire = lazy(() => import('./components/Questionnaire'));
const PharmacologyModal = lazy(() => import('./components/PharmacologyModal'));

const LoadingSpinner = () => (
  <motion.div className="loading-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <motion.div
      className="loading-spinner"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      aria-label="Загрузка"
      role="status"
    >
      🌸
    </motion.div>
  </motion.div>
);

const categoryKeywords: Record<Exclude<CategoryId, 'all'>, string[]> = {
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

const categoryPriority: Exclude<CategoryId, 'all'>[] = [
  'pregnancy',
  'oncology',
  'infection',
  'hormonal',
  'inflammatory',
];

const emptyStateContent = {
  favorites: {
    icon: '⭐',
    title: 'Нет избранного',
    description: 'Добавьте заболевания в избранное, чтобы быстро к ним возвращаться.',
  },
  history: {
    icon: '🕘',
    title: 'История пуста',
    description: 'Откройте несколько карточек, и они появятся в истории просмотров.',
  },
  search: {
    icon: '🔍',
    title: 'Ничего не найдено',
    description: 'Попробуйте изменить запрос или снять часть фильтров.',
  },
} as const;

function buildSearchableText(item: Disease) {
  return [
    item.name,
    item.icd,
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

function getCategoryScore(text: string, category: Exclude<CategoryId, 'all'>) {
  return categoryKeywords[category].reduce((score, keyword) => {
    if (!text.includes(keyword)) {
      return score;
    }

    return score + (keyword.length >= 8 || ['спкя', 'впч', 'вич', 'cin'].includes(keyword) ? 2 : 1);
  }, 0);
}

function resolveDiseaseCategory(item: Disease): Exclude<CategoryId, 'all'> {
  const searchableText = buildSearchableText(item);
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

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('gynecology');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<Disease | null>(null);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [showPharmacology, setShowPharmacology] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { toggleFavorite, isFavorite, favorites } = useFavorites();
  const { history, addToHistory } = useHistory();
  const debouncedSearch = useDebounce(searchTerm, 300);

  const currentData = (activeTab === 'gynecology' ? gynData : obsData) as Disease[];
  const normalizedSearch = debouncedSearch.trim().toLowerCase();
  const favoriteIds = useMemo(() => new Set(favorites), [favorites]);
  const historyIds = useMemo(() => new Set(history.map((item) => item.id)), [history]);

  const categorizedData = useMemo(
    () => currentData.map((item) => ({ item, category: resolveDiseaseCategory(item) })),
    [currentData],
  );

  const categoryCounts = useMemo(
    () =>
      categoryPriority.reduce(
        (result, category) => ({
          ...result,
          [category]: categorizedData.filter((entry) => entry.category === category).length,
        }),
        {} as Record<Exclude<CategoryId, 'all'>, number>,
      ),
    [categorizedData],
  );

  const filteredData = useMemo(() => {
    let data = categorizedData.filter(({ item }) => {
      if (!normalizedSearch) {
        return true;
      }

      return (
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.description.toLowerCase().includes(normalizedSearch) ||
        item.icd.toLowerCase().includes(normalizedSearch)
      );
    });

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
  }, [activeCategory, categorizedData, favoriteIds, historyIds, normalizedSearch, showFavorites, showHistory]);

  const emptyState = showFavorites
    ? emptyStateContent.favorites
    : showHistory
      ? emptyStateContent.history
      : emptyStateContent.search;

  const handleItemClick = (item: Disease) => {
    setSelectedItem(item);
    addToHistory(item);
  };

  return (
    <ErrorBoundary>
      <div className="App">
        <BackgroundEffects />
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onQuestionnaires={() => setShowQuestionnaire(true)}
          onPharmacology={() => setShowPharmacology(true)}
          theme={theme}
          toggleTheme={toggleTheme}
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
          showHistory={showHistory}
          setShowHistory={setShowHistory}
          favoritesCount={favorites.length}
          historyCount={history.length}
        />
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          resultCount={filteredData.length}
        />
        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categoryCounts={categoryCounts}
        />

        <section aria-live="polite" className="cards-grid">
          {filteredData.map((item, index) => (
            <DiseaseCard
              key={item.id}
              item={item}
              onClick={handleItemClick}
              index={index}
              isFavorite={isFavorite(item.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}

          {filteredData.length === 0 && (
            <motion.div
              className="empty-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="empty-icon" aria-hidden="true">
                {emptyState.icon}
              </div>
              <h3>{emptyState.title}</h3>
              <p>{emptyState.description}</p>
            </motion.div>
          )}
        </section>

        <Suspense fallback={<LoadingSpinner />}>
          {selectedItem && <DiseaseModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
          {showQuestionnaire && <Questionnaire onClose={() => setShowQuestionnaire(false)} />}
          {showPharmacology && <PharmacologyModal onClose={() => setShowPharmacology(false)} />}
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
