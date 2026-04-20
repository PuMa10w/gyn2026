import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
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
import {
  categorizeDiseases,
  filterDiseases,
  getCategoryCounts,
  getVisibleCategories,
} from './utils/diseaseCatalog';
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

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('gynecology');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<Disease | null>(null);
  const [gynecologyData, setGynecologyData] = useState<Disease[] | null>(null);
  const [obstetricsData, setObstetricsData] = useState<Disease[] | null>(null);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [showPharmacology, setShowPharmacology] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { toggleFavorite, isFavorite, favorites } = useFavorites();
  const { history, addToHistory } = useHistory();
  const debouncedSearch = useDebounce(searchTerm, 300);

  const currentData = activeTab === 'gynecology' ? gynecologyData ?? [] : obstetricsData ?? [];
  const isDataLoading = activeTab === 'gynecology' ? gynecologyData === null : obstetricsData === null;
  const visibleCategories = getVisibleCategories(activeTab);
  const normalizedSearch = debouncedSearch.trim().toLowerCase();
  const favoriteIds = useMemo(() => new Set(favorites), [favorites]);
  const historyIds = useMemo(() => new Set(history.map((item) => item.id)), [history]);

  const categorizedData = useMemo(() => categorizeDiseases(currentData), [currentData]);
  const categoryCounts = useMemo(() => getCategoryCounts(categorizedData), [categorizedData]);

  const filteredData = useMemo(
    () =>
      filterDiseases({
        activeCategory,
        categorizedData,
        historyIds,
        favoriteIds,
        normalizedSearch,
        showFavorites,
        showHistory,
      }),
    [activeCategory, categorizedData, favoriteIds, historyIds, normalizedSearch, showFavorites, showHistory],
  );

  const emptyState = showFavorites
    ? emptyStateContent.favorites
    : showHistory
      ? emptyStateContent.history
      : emptyStateContent.search;

  useEffect(() => {
    if (!visibleCategories.includes(activeCategory)) {
      setActiveCategory('all');
    }
  }, [activeCategory, visibleCategories]);

  useEffect(() => {
    let isCancelled = false;

    const loadData = async () => {
      if (activeTab === 'gynecology') {
        if (gynecologyData !== null) {
          return;
        }

        const module = await import('./data/gynData');
        if (!isCancelled) {
          setGynecologyData(module.gynData as Disease[]);
        }
        return;
      }

      if (obstetricsData !== null) {
        return;
      }

      const module = await import('./data/obsData');
      if (!isCancelled) {
        setObstetricsData(module.obsData as Disease[]);
      }
    };

    void loadData();

    return () => {
      isCancelled = true;
    };
  }, [activeTab, gynecologyData, obstetricsData]);

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
          resultCount={isDataLoading ? undefined : filteredData.length}
        />
        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categoryCounts={categoryCounts}
          visibleCategories={visibleCategories}
        />

        <section aria-live="polite" className="cards-grid">
          {isDataLoading && (
            <motion.div className="empty-state" initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}>
              <div className="empty-icon" aria-hidden="true">
                ⏳
              </div>
              <h3>Загружаем раздел</h3>
              <p>Подготавливаем карточки и фильтры.</p>
            </motion.div>
          )}

          {!isDataLoading &&
            filteredData.map((item, index) => (
              <DiseaseCard
                key={item.id}
                item={item}
                onClick={handleItemClick}
                index={index}
                isFavorite={isFavorite(item.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}

          {!isDataLoading && filteredData.length === 0 && (
            <motion.div className="empty-state" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
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
