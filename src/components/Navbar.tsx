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
}: NavbarProps) {
  const handleSectionChange = (tab: TabType) => {
    setActiveTab(tab);
    setShowFavorites(false);
    setShowHistory(false);
  };

  const handleFavoritesToggle = () => {
    const next = !showFavorites;
    if (activeTab === 'home') {
      setActiveTab('gynecology');
    }
    setShowFavorites(next);
    if (next) {
      setShowHistory(false);
    }
  };

  const handleHistoryToggle = () => {
    const next = !showHistory;
    if (activeTab === 'home') {
      setActiveTab('gynecology');
    }
    setShowHistory(next);
    if (next) {
      setShowFavorites(false);
    }
  };

  return (
    <motion.nav className="navbar" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} aria-label="Основная навигация">
      <div className="navbar-inner">
        <div className="nav-row nav-row-primary" aria-label="Основные разделы">
          <div className="nav-scroll">
            <button
              type="button"
              className={`nav-item nav-primary-item ${activeTab === 'home' ? 'is-active' : ''}`}
              onClick={() => handleSectionChange('home')}
              aria-current={activeTab === 'home' ? 'page' : undefined}
            >
              Главная
            </button>
            <button
              type="button"
              className={`nav-item nav-primary-item ${activeTab === 'gynecology' ? 'is-active' : ''}`}
              onClick={() => handleSectionChange('gynecology')}
              aria-current={activeTab === 'gynecology' ? 'page' : undefined}
            >
              Гинекология
            </button>
            <button
              type="button"
              className={`nav-item nav-primary-item ${activeTab === 'obstetrics' ? 'is-active' : ''}`}
              onClick={() => handleSectionChange('obstetrics')}
              aria-current={activeTab === 'obstetrics' ? 'page' : undefined}
            >
              Акушерство
            </button>
          </div>
        </div>

        <div className="nav-row nav-row-utility" aria-label="Дополнительные действия" role="toolbar">
          <div className="nav-scroll">
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
            </button>
            <button
              type="button"
              className={`nav-item nav-utility-item ${showHistory ? 'is-active' : ''}`}
              onClick={handleHistoryToggle}
              aria-pressed={showHistory}
            >
              История
            </button>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
              title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
            >
              {theme === 'dark' ? 'Светлая' : 'Тёмная'}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
});

export default Navbar;
