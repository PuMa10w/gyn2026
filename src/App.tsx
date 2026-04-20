import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
import { enrichDiseases } from './utils/enrichDiseases';
import type { CategoryId, Disease, TabType } from './types';

const DiseaseModal = lazy(() => import('./components/DiseaseModal'));
const Questionnaire = lazy(() => import('./components/Questionnaire'));
const PharmacologyModal = lazy(() => import('./components/PharmacologyModal'));

const LoadingSpinner = () => (
  <motion.div className="loading-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <motion.div
      className="loading-spinner"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
      aria-label="Загрузка"
      role="status"
    >
      <span className="spinner-core" />
    </motion.div>
  </motion.div>
);

const emptyStateContent = {
  favorites: {
    eyebrow: 'Избранное',
    title: 'Список избранного пока пуст',
    description: 'Сохраняйте нозологии, чтобы быстро возвращаться к нужным протоколам и клиническим сценариям.',
  },
  history: {
    eyebrow: 'История',
    title: 'Вы еще не открывали материалы',
    description: 'После просмотра карточек здесь появится история переходов по нозологиям и разделам.',
  },
  search: {
    eyebrow: 'Поиск',
    title: 'Ничего не найдено',
    description: 'Попробуйте изменить поисковый запрос или снять часть фильтров, чтобы расширить выдачу.',
  },
} as const;

const homeColumns = [
  {
    title: 'Гинекология',
    kicker: 'Основной клинический раздел',
    description: 'Нозологии, маршруты диагностики, терапевтические ориентиры и быстрый переход к нужной карточке.',
    stats: [
      { value: 'МКБ-10', label: 'структурированный каталог' },
      { value: 'Поиск', label: 'быстрый вход в сценарий' },
      { value: 'Избранное', label: 'повторный доступ без потерь' },
    ],
    onClick: (setActiveTab: (tab: TabType) => void) => setActiveTab('gynecology'),
  },
  {
    title: 'Акушерство',
    kicker: 'Беременность и наблюдение',
    description: 'Осложнения беременности, маршруты ведения, клинические ориентиры и доступ к ключевым материалам.',
    stats: [
      { value: 'Протоколы', label: 'структура без визуального шума' },
      { value: 'История', label: 'возврат к просмотрам' },
      { value: 'Практика', label: 'быстрый доступ к данным' },
    ],
    onClick: (setActiveTab: (tab: TabType) => void) => setActiveTab('obstetrics'),
  },
] as const;

const homeEditorialCards = [
  {
    title: 'Клинический справочник',
    text: 'Нозологии, поиск, избранное и история собраны в спокойном рабочем интерфейсе.',
    className: 'editorial-card editorial-card-wide',
  },
  {
    title: 'Гинекология',
    text: 'Структурированный каталог с быстрым переходом к диагностике, лечению и клиническим блокам.',
    value: '01',
    className: 'editorial-card editorial-card-tall',
  },
  {
    title: 'Акушерство',
    text: 'Материалы по беременности, осложнениям и наблюдению в единой системе чтения.',
    value: '02',
    className: 'editorial-card',
  },
  {
    title: 'База GYN',
    text: 'Единая профессиональная среда для быстрого доступа к ключевым разделам и карточкам.',
    value: '2026',
    className: 'editorial-card editorial-card-accent',
  },
] as const;

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<Disease | null>(null);
  const [gynecologyData, setGynecologyData] = useState<Disease[] | null>(null);
  const [obstetricsData, setObstetricsData] = useState<Disease[] | null>(null);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [showPharmacology, setShowPharmacology] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { toggleFavorite, isFavorite, favorites } = useFavorites();
  const { history, addToHistory } = useHistory();
  const debouncedSearch = useDebounce(searchTerm, 300);

  const currentData =
    activeTab === 'home'
      ? [...(gynecologyData ?? []), ...(obstetricsData ?? [])]
      : activeTab === 'gynecology'
        ? gynecologyData ?? []
        : obstetricsData ?? [];
  const isDataLoading = activeTab === 'home'
    ? gynecologyData === null || obstetricsData === null
    : activeTab === 'gynecology'
      ? gynecologyData === null
      : obstetricsData === null;
  const visibleCategories = getVisibleCategories(activeTab as 'gynecology' | 'obstetrics');
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

  const gynecologyCount = gynecologyData?.length ?? 0;
  const obstetricsCount = obstetricsData?.length ?? 0;
  const totalCount = gynecologyCount + obstetricsCount;
  const showHome = activeTab === 'home';
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
      const active = activeTab === 'home' ? 'gynecology' : activeTab;

      if (active === 'gynecology') {
        if (gynecologyData !== null) {
          return;
        }

        const module = await import('./data/gynData');
        if (!isCancelled) {
          setGynecologyData(enrichDiseases(module.gynData as Disease[]));
        }
        return;
      }

      if (obstetricsData !== null) {
        return;
      }

      const module = await import('./data/obsData');
      if (!isCancelled) {
        setObstetricsData(enrichDiseases(module.obsData as Disease[]));
      }
    };

    void loadData();

    return () => {
      isCancelled = true;
    };
  }, [activeTab, gynecologyData, obstetricsData]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemClick = (item: Disease) => {
    setSelectedItem(item);
    addToHistory(item);
  };

  return (
    <ErrorBoundary>
      <Helmet>
        <title>GYN — премиальный клинический справочник по гинекологии и акушерству</title>
        <meta
          name="description"
          content="Премиальный клинический справочник по гинекологии и акушерству: нозологии, диагностика, лечение, фармакология и опросники."
        />
        <meta
          name="keywords"
          content="гинекология, акушерство, клинический справочник, нозологии, диагностика, лечение, фармакология"
        />
        <meta property="og:title" content="GYN — премиальный клинический справочник" />
        <meta
          property="og:description"
          content="Гинекология и акушерство в едином спокойном и читабельном профессиональном интерфейсе."
        />
        <meta property="og:type" content="website" />
      </Helmet>
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

        {showHome && (
          <section className="home-shell">
            <section className="home-landing-grid">
              {homeColumns.map((item, index) => (
                <motion.button
                  key={item.title}
                  type="button"
                  className={`home-column-card ${index === 0 ? 'home-column-primary' : 'home-column-secondary'}`}
                  onClick={() => item.onClick(setActiveTab)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.45 }}
                >
                  <div className="home-column-topline">
                    <span className="section-kicker">{item.kicker}</span>
                    <span className="home-column-marker">{index === 0 ? '01' : '02'}</span>
                  </div>
                  <div className="home-column-body">
                    <h1 className="home-column-title">{item.title}</h1>
                    <p className="home-column-description">{item.description}</p>
                  </div>

                  <div className="home-column-stats">
                    {item.stats.map((stat) => (
                      <div key={stat.value} className="home-column-stat">
                        <span className="home-column-stat-value">{stat.value}</span>
                        <span className="home-column-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.button>
              ))}
            </section>

            <section className="home-editorial-grid">
              {homeEditorialCards.map((card) => (
                <motion.article
                  key={card.title}
                  className={card.className}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <span className="hero-panel-label">{card.title}</span>
                  {card.value && <span className="editorial-card-value">{card.value}</span>}
                  <p>{card.text}</p>
                </motion.article>
              ))}
              <motion.article
                className="editorial-card editorial-card-metric"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.06 }}
              >
                <span className="hero-panel-label">Каталог</span>
                <div className="editorial-metric-stack">
                  <div>
                    <span className="editorial-metric-value">{gynecologyCount || '...'}</span>
                    <p>материалов по гинекологии</p>
                  </div>
                  <div>
                    <span className="editorial-metric-value">{obstetricsCount || '...'}</span>
                    <p>материалов по акушерству</p>
                  </div>
                  <div>
                    <span className="editorial-metric-value">{totalCount || '...'}</span>
                    <p>карточек в общей структуре</p>
                  </div>
                </div>
              </motion.article>
            </section>

            <footer className="home-footer">
              <p>© Puma10w</p>
            </footer>
          </section>
        )}

        {!showHome && (
          <>
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
          </>
        )}

        {!showHome && (
          <section aria-live="polite" className="cards-grid">
            {isDataLoading && (
              <div className="skeleton-grid">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="skeleton-card" />
                ))}
              </div>
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
              <motion.div className="empty-state" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
                <span className="empty-eyebrow">{emptyState.eyebrow}</span>
                <h3>{emptyState.title}</h3>
                <p>{emptyState.description}</p>
              </motion.div>
            )}
          </section>
        )}

        <Suspense fallback={<LoadingSpinner />}>
          {selectedItem && <DiseaseModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
          {showQuestionnaire && <Questionnaire onClose={() => setShowQuestionnaire(false)} />}
          {showPharmacology && <PharmacologyModal onClose={() => setShowPharmacology(false)} />}
        </Suspense>

        {showScrollTop && !showHome && (
          <motion.button
            className="scroll-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Наверх"
            title="Наверх"
          >
            Вверх
          </motion.button>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
