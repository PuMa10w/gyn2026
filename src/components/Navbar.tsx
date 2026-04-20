import React from 'react';
import { motion } from 'framer-motion';
import type { ThemeMode } from '../hooks/useTheme';
import type { TabType } from '../types';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onQuestionnaires: () => void;
  onPharmacology: () => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  showFavorites: boolean;
  setShowFavorites: (value: boolean) => void;
  showHistory: boolean;
  setShowHistory: (value: boolean) => void;
  favoritesCount: number;
  historyCount: number;
}

const Navbar = React.memo(function Navbar({
  activeTab,
  setActiveTab,
  onQuestionnaires,
  onPharmacology,
  theme,
  toggleTheme,
  showFavorites,
  setShowFavorites,
  showHistory,
  setShowHistory,
  favoritesCount,
  historyCount,
}: NavbarProps) {
  const handleFavoritesToggle = () => {
    const next = !showFavorites;
    setShowFavorites(next);
    if (next) {
      setShowHistory(false);
    }
  };

  const handleHistoryToggle = () => {
    const next = !showHistory;
    setShowHistory(next);
    if (next) {
      setShowFavorites(false);
    }
  };

  return (
    <motion.header className="navbar" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }}>
      <div className="nav-brand">
        <button type="button" className="home-btn" onClick={() => setActiveTab('home')}>
          <span className="nav-logo">GYN</span>
          <span className="nav-subtitle">Clinical Reference</span>
        </button>
      </div>

      <div className="nav-primary" role="tablist" aria-label="Основные разделы">
        <button
          type="button"
          className={`nav-item nav-primary-item ${activeTab === 'home' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('home')}
          aria-selected={activeTab === 'home'}
          role="tab"
        >
          Главная
        </button>
        <button
          type="button"
          className={`nav-item nav-primary-item ${activeTab === 'gynecology' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('gynecology')}
          aria-selected={activeTab === 'gynecology'}
          role="tab"
        >
          Гинекология
        </button>
        <button
          type="button"
          className={`nav-item nav-primary-item ${activeTab === 'obstetrics' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('obstetrics')}
          aria-selected={activeTab === 'obstetrics'}
          role="tab"
        >
          Акушерство
        </button>
      </div>

      <div className="nav-utility">
        <button type="button" className="nav-item nav-utility-item" onClick={onQuestionnaires}>
          Опросники
        </button>

        <button type="button" className="nav-item nav-utility-item" onClick={onPharmacology}>
          Фармакология
        </button>

        <button
          type="button"
          className={`nav-item nav-utility-item ${showFavorites ? 'is-active' : ''}`}
          onClick={handleFavoritesToggle}
          aria-pressed={showFavorites}
        >
          Избранное
          <span className="nav-pill">{favoritesCount}</span>
        </button>

        <button
          type="button"
          className={`nav-item nav-utility-item ${showHistory ? 'is-active' : ''}`}
          onClick={handleHistoryToggle}
          aria-pressed={showHistory}
        >
          История
          <span className="nav-pill">{historyCount}</span>
        </button>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
          title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
        >
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </motion.header>
  );
});

export default Navbar;
