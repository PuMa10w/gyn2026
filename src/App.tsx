import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import CatalogSection from './components/CatalogSection';
import BackgroundEffects from './components/BackgroundEffects';
import ErrorBoundary from './components/ErrorBoundary';
import { useDebounce } from './hooks/useDebounce';
import { useCatalogData } from './hooks/useCatalogData';
import { useTheme } from './hooks/useTheme';
import { useFavorites } from './hooks/useFavorites';
import { useHistory } from './hooks/useHistory';
import { emptyStateContent, homeActions, sectionMeta } from './config/appContent';
import type { CategoryId, Disease, TabType } from './types';
import type { HistoryItem } from './hooks/useHistory';

const DiseaseModal = lazy(() => import('./components/DiseaseModal'));
const Questionnaire = lazy(() => import('./components/Questionnaire'));
const PharmacologyModal = lazy(() => import('./components/PharmacologyModal'));

const getIdVariants = (id: string) => {
  const trimmedId = id.trim();
  const legacyId = trimmedId.split('__')[0];

  return trimmedId === legacyId ? [trimmedId] : [trimmedId, legacyId];
};

const LoadingSpinner = ({ prefersReducedMotion }: { prefersReducedMotion: boolean }) => (
  <motion.div className="loading-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <motion.div
      className="loading-spinner"
      animate={prefersReducedMotion ? undefined : { rotate: 360 }}
      transition={prefersReducedMotion ? undefined : { repeat: Infinity, duration: 1.2, ease: 'linear' }}
      aria-label="Загрузка"
      role="status"
    >
      <span className="spinner-core" />
    </motion.div>
  </motion.div>
);

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<Disease | null>(null);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [showPharmacology, setShowPharmacology] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const { theme, toggleTheme } = useTheme();
  const { toggleFavorite, isFavorite, favorites } = useFavorites();
  const { history, addToHistory } = useHistory();
  const debouncedSearch = useDebounce(searchTerm, 300);

  const normalizedSearch = debouncedSearch.trim().toLowerCase();
  const favoriteIds = useMemo(() => new Set(favorites.flatMap(getIdVariants)), [favorites]);
  const historyIds = useMemo(() => new Set(history.flatMap((item) => getIdVariants(item.id))), [history]);

  const { isDataLoading, visibleCategories, categoryCounts, filteredData, error, retry } = useCatalogData({
    activeTab,
    activeCategory,
    favoriteIds,
    historyIds,
    normalizedSearch,
    showFavorites,
    showHistory,
    onInvalidCategory: () => setActiveCategory('all'),
  });

  const showHome = activeTab === 'home';
  const activeSectionMeta = showHome ? null : sectionMeta[activeTab];
  const emptyState = showFavorites
    ? emptyStateContent.favorites
    : showHistory
      ? emptyStateContent.history
      : emptyStateContent.search;

  useEffect(() => {
    let frameId = 0;

    const updateScrollTopVisibility = () => {
      const shouldShow = window.scrollY > 320;
      setShowScrollTop((current) => (current === shouldShow ? current : shouldShow));
      frameId = 0;
    };

    const handleScroll = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrollTopVisibility);
    };

    updateScrollTopVisibility();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  const recentItems = useMemo(() => history.slice(0, 4), [history]);

  const resetCatalogState = () => {
    setSearchTerm('');
    setActiveCategory('all');
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setShowFavorites(false);
    setShowHistory(false);
    resetCatalogState();
  };

  const handleFavoritesToggle = () => {
    const nextValue = !showFavorites;

    if (activeTab === 'home') {
      setActiveTab('gynecology');
    }

    setShowFavorites(nextValue);
    setShowHistory(false);
    resetCatalogState();
  };

  const handleHistoryToggle = () => {
    const nextValue = !showHistory;

    if (activeTab === 'home') {
      setActiveTab('gynecology');
    }

    setShowHistory(nextValue);
    setShowFavorites(false);
    resetCatalogState();
  };

  const handleRecentItemOpen = (item: HistoryItem) => {
    const nextTab = item.subtitle === 'Акушерство' ? 'obstetrics' : 'gynecology';

    handleTabChange(nextTab);
    setSearchTerm(item.name);
  };

  const handleItemClick = (item: Disease) => {
    setSelectedItem(item);
    addToHistory(item);
  };

  const openQuestionnaire = () => setShowQuestionnaire(true);
  const openPharmacology = () => setShowPharmacology(true);

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
        <a className="skip-link" href="#main-content">
          Перейти к основному содержанию
        </a>
        <BackgroundEffects />
        <Navbar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onQuestionnaires={openQuestionnaire}
          onPharmacology={openPharmacology}
          theme={theme}
          toggleTheme={toggleTheme}
          showFavorites={showFavorites}
          onFavoritesToggle={handleFavoritesToggle}
          showHistory={showHistory}
          onHistoryToggle={handleHistoryToggle}
        />

        <main className="page-content" id="main-content" tabIndex={-1}>
          <AnimatePresence mode="wait" initial={false}>
            {showHome ? (
              <HomeSection
                key="home"
                actions={homeActions}
                setActiveTab={handleTabChange}
                openQuestionnaire={openQuestionnaire}
                openPharmacology={openPharmacology}
                recentItems={recentItems}
                onRecentOpen={handleRecentItemOpen}
                onFavoritesOpen={handleFavoritesToggle}
                onHistoryOpen={handleHistoryToggle}
                favoriteCount={favorites.length}
              />
            ) : (
              <CatalogSection
                key={activeTab}
                activeSectionMeta={activeSectionMeta!}
                isDataLoading={isDataLoading}
                error={error}
                onRetry={retry}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filteredData={filteredData}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                categoryCounts={categoryCounts}
                visibleCategories={visibleCategories}
                onItemClick={handleItemClick}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
                emptyState={emptyState}
              />
            )}
          </AnimatePresence>

          <footer className="site-footer">
            <p>© PuMa10w with ❤️</p>
          </footer>
        </main>

        <Suspense fallback={<LoadingSpinner prefersReducedMotion={prefersReducedMotion} />}>
          {selectedItem && <DiseaseModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
          {showQuestionnaire && <Questionnaire onClose={() => setShowQuestionnaire(false)} />}
          {showPharmacology && <PharmacologyModal onClose={() => setShowPharmacology(false)} />}
        </Suspense>

        {showScrollTop && !showHome && (
          <motion.button
            className="scroll-top-btn"
            onClick={scrollToTop}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
            whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
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
