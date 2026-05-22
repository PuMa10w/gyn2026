import React, { Suspense, lazy, useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import './styles/design-tokens.css';
import './index.css';
import './App.css';
import './premium-unified.css';
import './styles/ultra-premium-v9.css';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import CatalogSection from './components/CatalogSection';
import BackgroundEffects from './components/BackgroundEffects';
import ErrorBoundary from './components/ErrorBoundary';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { VersionChecker } from './components/VersionChecker';
import { useDebounce } from './hooks/useDebounce';
import { useCatalogData } from './hooks/useCatalogData';
import { useTheme } from './hooks/useTheme';
import { useFavorites } from './hooks/useFavorites';
import { useHistory } from './hooks/useHistory';
import { useToast } from './components/ToastSystem';
import { emptyStateContent, homeActions, sectionMeta } from './config/appContent';
import { isObstetricsLabel, repairText } from './utils/textRepair';
import type { CategoryId, Disease, TabType } from './types';

// Lazy-loaded components
const DiseaseModal = lazy(() => import('./components/DiseaseModal'));
const Questionnaire = lazy(() => import('./components/Questionnaire'));
const PharmacologyLoadFallback = ({ onClose }: { onClose: () => void }) => (
  <div className="modal-overlay" role="presentation">
    <div className="modal-content pharmacology-modal mobile-sheet pharma-error-shell" role="dialog" aria-modal="true" aria-labelledby="pharma-load-error-title">
      <button type="button" className="modal-close" onClick={onClose} aria-label="Закрыть фармакологию">×</button>
      <section className="pharma-empty-state pharma-error-state">
        <span className="catalog-status-eyebrow">Фармакология</span>
        <h2 id="pharma-load-error-title">Нужна перезагрузка модуля</h2>
        <p>Похоже, iPhone держит старый PWA-кэш. Обновите страницу, чтобы загрузить актуальную фармакологию.</p>
        <button type="button" className="premium-button premium-button--primary" onClick={() => window.location.reload()}>
          Обновить страницу
        </button>
      </section>
    </div>
  </div>
);
const PharmacologyModal = lazy(() =>
  import('./components/PharmacologyModal').catch((error) => {
    console.error('Failed to load PharmacologyModal:', error);
    return { default: PharmacologyLoadFallback };
  }),
);
const MobileBottomBar = lazy(() => import('./components/MobileBottomBar').then(m => ({ default: m.MobileBottomBar })));
const Particle3DBackground = lazy(() => import('./components/Particle3DBackground').then(m => ({ default: m.Particle3DBackground })));
const ToastContainer = lazy(() => import('./components/ToastSystem').then(m => ({ default: m.ToastContainer })));

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

const resetViewportScroll = () => {
  window.scrollTo({ top: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const settleViewportScroll = () => {
  resetViewportScroll();
  window.requestAnimationFrame(resetViewportScroll);
  window.setTimeout(resetViewportScroll, 0);
  window.setTimeout(resetViewportScroll, 80);
  window.setTimeout(resetViewportScroll, 220);
};

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<Disease | null>(null);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showPharmacology, setShowPharmacology] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOnline, setIsOnline] = useState(() => (typeof navigator === 'undefined' ? true : navigator.onLine));
  const [isMobileViewport, setIsMobileViewport] = useState(() => (typeof window === 'undefined' ? false : window.innerWidth <= 768));
  const prefersReducedMotion = useReducedMotion();

  const { theme, toggleTheme } = useTheme();
  const { toggleFavorite, isFavorite, favorites } = useFavorites();
  const { history, addToHistory } = useHistory();
  const { toasts, addToast, removeToast } = useToast();
  const debouncedSearch = useDebounce(searchTerm, 300);

  const normalizedSearch = debouncedSearch.trim().toLowerCase();
  const favoriteIds = useMemo(() => new Set(favorites.flatMap(getIdVariants)), [favorites]);
  const historyIds = useMemo(() => new Set(history.flatMap((item) => getIdVariants(item.id))), [history]);
  const resetActiveCategory = useCallback(() => setActiveCategory('all'), []);

  const { isDataLoading, visibleCategories, categoryCounts, filteredData, error, retry } = useCatalogData({
    activeTab,
    activeCategory,
    favoriteIds,
    historyIds,
    normalizedSearch,
    showFavorites,
    showHistory,
    onInvalidCategory: resetActiveCategory,
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
      if (frameId !== 0) return;
      frameId = window.requestAnimationFrame(updateScrollTopVisibility);
    };

    updateScrollTopVisibility();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const updateOnlineState = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', updateOnlineState);
    window.addEventListener('offline', updateOnlineState);
    updateOnlineState();

    return () => {
      window.removeEventListener('online', updateOnlineState);
      window.removeEventListener('offline', updateOnlineState);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateViewport = () => setIsMobileViewport(mediaQuery.matches);
    updateViewport();
    mediaQuery.addEventListener('change', updateViewport);

    return () => mediaQuery.removeEventListener('change', updateViewport);
  }, []);

  useLayoutEffect(() => {
    settleViewportScroll();
  }, [activeTab, showFavorites, showHistory]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  const resetCatalogState = () => {
    setSearchTerm('');
    setActiveCategory('all');
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setShowFavorites(false);
    setShowHistory(false);
    resetCatalogState();
    settleViewportScroll();
  };

  const handleFavoritesToggle = () => {
    const nextValue = !showFavorites;
    if (activeTab === 'home') setActiveTab('gynecology');
    setShowFavorites(nextValue);
    setShowHistory(false);
    resetCatalogState();
    settleViewportScroll();
  };

  const handleHistoryToggle = () => {
    const nextValue = !showHistory;
    if (activeTab === 'home') setActiveTab('gynecology');
    setShowHistory(nextValue);
    setShowFavorites(false);
    resetCatalogState();
    settleViewportScroll();
  };

  const handleItemClick = (item: Disease) => {
    setSelectedItem(item);
    addToHistory(item);
    addToast({
      message: `Открыта карточка: ${repairText(item.name)}`,
      type: 'success',
      duration: 3000,
    });
  };

  const handleRecentOpen = (item: (typeof history)[number]) => {
    const targetTab = isObstetricsLabel(item.subtitle) ? 'obstetrics' : 'gynecology';
    setActiveTab(targetTab);
    setShowFavorites(false);
    setShowHistory(false);
    setSearchTerm(repairText(item.name));
    settleViewportScroll();
  };

  return (
    <ErrorBoundary>
      <Helmet>
        <title>GYN — премиальный клинический PWA по гинекологии и акушерству</title>
        <meta
          name="description"
          content="GYN: премиальный клинический справочник по гинекологии и акушерству с нозологиями, алгоритмами диагностики, лечением, фармакологией, шкалами и iPhone-first PWA интерфейсом."
        />
        <meta
          name="keywords"
          content="гинекология, акушерство, клинический справочник, нозологии, диагностика, лечение, фармакология, шкалы, PWA"
        />
        <meta property="og:title" content="GYN — премиальный клинический PWA" />
        <meta
          property="og:description"
          content="Гинекология, акушерство, фармакология и клинические шкалы в едином мобильном справочнике."
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#100d10" />
      </Helmet>

      <div className="App page-transition">
        <a className="skip-link" href="#main-content">
          Перейти к основному содержанию
        </a>

        {/* 3D Particle Background (Wow-effect) */}
        {!isMobileViewport ? (
          <Suspense fallback={null}>
            <Particle3DBackground particleCount={prefersReducedMotion ? 0 : 80} color="#D89AA7" />
          </Suspense>
        ) : null}

        <BackgroundEffects />

        <Navbar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onQuestionnaires={() => setShowQuestionnaire(true)}
          onPharmacology={() => setShowPharmacology(true)}
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
                openQuestionnaire={() => setShowQuestionnaire(true)}
                openPharmacology={() => setShowPharmacology(true)}
                recentItems={history.slice(0, 4)}
                onRecentOpen={handleRecentOpen}
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

          <VersionChecker currentVersion="1.0.0" />

          {!isOnline && (
            <section className="premium-offline-state" role="status" aria-live="polite">
              <strong>Офлайн-режим</strong>
              <span>Справочник остаётся доступным из PWA-кэша; новые обновления загрузятся после восстановления сети.</span>
            </section>
          )}

          <motion.section
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }}
          >
            <AnalyticsDashboard />
          </motion.section>

          <footer className="site-footer">
            <p>© Puma10w • Премиальный медицинский справочник</p>
          </footer>
        </main>

        <Suspense fallback={<LoadingSpinner prefersReducedMotion={prefersReducedMotion} />}>
          {selectedItem && <DiseaseModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
          {showQuestionnaire && <Questionnaire onClose={() => setShowQuestionnaire(false)} />}
          {showPharmacology && <PharmacologyModal onClose={() => setShowPharmacology(false)} />}
        </Suspense>

        {/* Mobile Bottom Bar */}
        <Suspense fallback={null}>
          <MobileBottomBar
            currentPath={showFavorites ? '/bookmarks' : `/${activeTab === 'home' ? '' : activeTab}`}
            onNavigate={(path) => {
              if (path === '/bookmarks') {
                handleFavoritesToggle();
                return;
              }

              const tab = path === '/' ? 'home' : path.replace('/', '') as TabType;
              handleTabChange(tab);
            }}
          />
        </Suspense>

        {/* Toast Container */}
        <Suspense fallback={null}>
          <ToastContainer toasts={toasts} onRemove={removeToast} />
        </Suspense>

        {showScrollTop && !showHome && (
          <motion.button
            className="scroll-top-btn glass glow-turquoise"
            onClick={scrollToTop}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
            whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
            aria-label="Наверх"
            title="Наверх"
          >
            ↑
          </motion.button>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
