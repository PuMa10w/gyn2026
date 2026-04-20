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

const Navbar = ({
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
}: NavbarProps) => {
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
    <motion.header className="navbar" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
      <div className="nav-topbar">
        <div className="nav-logo-block">
          <strong className="nav-logo">Gyn & Obs</strong>
          <span className="nav-subtitle">Клинический справочник</span>
        </div>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
          title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="nav-primary" role="tablist" aria-label="Разделы">
        <button
          type="button"
          className={`nav-item nav-primary-item ${activeTab === 'gynecology' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('gynecology')}
          aria-selected={activeTab === 'gynecology'}
          role="tab"
        >
          <span className="nav-item-icon" aria-hidden="true">
            🌸
          </span>
          Гинекология
        </button>
        <button
          type="button"
          className={`nav-item nav-primary-item ${activeTab === 'obstetrics' ? 'is-active is-gold' : ''}`}
          onClick={() => setActiveTab('obstetrics')}
          aria-selected={activeTab === 'obstetrics'}
          role="tab"
        >
          <span className="nav-item-icon" aria-hidden="true">
            🤰
          </span>
          Акушерство
        </button>
      </div>

      <div className="nav-utility">
        <button type="button" className="nav-item nav-utility-item nav-utility-accent" onClick={onQuestionnaires}>
          <span className="nav-item-icon" aria-hidden="true">
            📋
          </span>
          Опросники
        </button>

        <button type="button" className="nav-item nav-utility-item nav-utility-accent" onClick={onPharmacology}>
          <span className="nav-item-icon" aria-hidden="true">
            💊
          </span>
          Фармакология
        </button>

        <button
          type="button"
          className={`nav-item nav-utility-item ${showFavorites ? 'is-active' : ''}`}
          onClick={handleFavoritesToggle}
          aria-pressed={showFavorites}
        >
          <span className="nav-item-icon" aria-hidden="true">
            ⭐
          </span>
          Избранное
          <span className="nav-pill">{favoritesCount}</span>
        </button>

        <button
          type="button"
          className={`nav-item nav-utility-item ${showHistory ? 'is-active' : ''}`}
          onClick={handleHistoryToggle}
          aria-pressed={showHistory}
        >
          <span className="nav-item-icon" aria-hidden="true">
            🕘
          </span>
          История
          <span className="nav-pill">{historyCount}</span>
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
