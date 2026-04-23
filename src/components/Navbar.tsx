import React from 'react';
import { motion } from 'framer-motion';
import type { ThemeMode } from '../hooks/useTheme';
import type { TabType } from '../types';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onQuestionnaires: () => void;
  onPharmacology: () => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  showFavorites: boolean;
  onFavoritesToggle: () => void;
  showHistory: boolean;
  onHistoryToggle: () => void;
}

const Navbar = React.memo(function Navbar({
  activeTab,
  onTabChange,
  onQuestionnaires,
  onPharmacology,
  theme,
  toggleTheme,
  showFavorites,
  onFavoritesToggle,
  showHistory,
  onHistoryToggle,
}: NavbarProps) {
  return (
    <motion.nav className="navbar" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} aria-label="Основная навигация">
      <div className="navbar-inner">
        <div className="nav-row nav-row-primary" aria-label="Основные разделы">
          <div className="nav-scroll">
            <button
              type="button"
              className={`nav-item nav-primary-item ${activeTab === 'home' ? 'is-active' : ''}`}
              onClick={() => onTabChange('home')}
              aria-current={activeTab === 'home' ? 'page' : undefined}
            >
              Главная
            </button>
            <button
              type="button"
              className={`nav-item nav-primary-item ${activeTab === 'gynecology' ? 'is-active' : ''}`}
              onClick={() => onTabChange('gynecology')}
              aria-current={activeTab === 'gynecology' ? 'page' : undefined}
            >
              Гинекология
            </button>
            <button
              type="button"
              className={`nav-item nav-primary-item ${activeTab === 'obstetrics' ? 'is-active' : ''}`}
              onClick={() => onTabChange('obstetrics')}
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
              onClick={onFavoritesToggle}
              aria-pressed={showFavorites}
            >
              Избранное
            </button>
            <button
              type="button"
              className={`nav-item nav-utility-item ${showHistory ? 'is-active' : ''}`}
              onClick={onHistoryToggle}
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
