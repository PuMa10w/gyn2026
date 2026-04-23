import React from 'react';
import { motion } from 'framer-motion';
import type { ThemeMode } from '../hooks/useTheme';
import type { TabType } from '../types';
import { navIcons } from './Icons';

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
            <motion.button
              type="button"
              className={`nav-item nav-primary-item ${activeTab === 'home' ? 'is-active' : ''}`}
              onClick={() => onTabChange('home')}
              aria-current={activeTab === 'home' ? 'page' : undefined}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="nav-icon">{navIcons.home}</span>
              <span>Главная</span>
            </motion.button>
            <motion.button
              type="button"
              className={`nav-item nav-primary-item ${activeTab === 'gynecology' ? 'is-active' : ''}`}
              onClick={() => onTabChange('gynecology')}
              aria-current={activeTab === 'gynecology' ? 'page' : undefined}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="nav-icon">{navIcons.gynecology}</span>
              <span>Гинекология</span>
            </motion.button>
            <motion.button
              type="button"
              className={`nav-item nav-primary-item ${activeTab === 'obstetrics' ? 'is-active' : ''}`}
              onClick={() => onTabChange('obstetrics')}
              aria-current={activeTab === 'obstetrics' ? 'page' : undefined}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="nav-icon">{navIcons.obstetrics}</span>
              <span>Акушерство</span>
            </motion.button>
          </div>
        </div>

        <div className="nav-row nav-row-utility" aria-label="Дополнительные действия" role="toolbar">
          <div className="nav-scroll">
            <motion.button
              type="button"
              className="nav-item nav-utility-item"
              onClick={onQuestionnaires}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="nav-icon nav-icon-sm">{navIcons.questionnaires}</span>
              <span>Опросники</span>
            </motion.button>
            <motion.button
              type="button"
              className="nav-item nav-utility-item"
              onClick={onPharmacology}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="nav-icon nav-icon-sm">{navIcons.pharmacology}</span>
              <span>Фармакология</span>
            </motion.button>
            <motion.button
              type="button"
              className={`nav-item nav-utility-item ${showFavorites ? 'is-active' : ''}`}
              onClick={onFavoritesToggle}
              aria-pressed={showFavorites}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="nav-icon nav-icon-sm">{showFavorites ? navIcons.heart : navIcons.favorites}</span>
              <span>Избранное</span>
            </motion.button>
            <motion.button
              type="button"
              className={`nav-item nav-utility-item ${showHistory ? 'is-active' : ''}`}
              onClick={onHistoryToggle}
              aria-pressed={showHistory}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="nav-icon nav-icon-sm">{showHistory ? navIcons.clock : navIcons.history}</span>
              <span>История</span>
            </motion.button>
            <motion.button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
              title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {theme === 'dark' ? 'Светлая' : 'Тёмная'}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
});

export default Navbar;
