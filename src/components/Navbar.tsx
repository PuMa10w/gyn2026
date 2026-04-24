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
    <motion.nav className="navbar" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} aria-label="Главная навигация">
      <div className="navbar-inner">
        <div className="navbar-topline">
          <button type="button" className="navbar-brand" onClick={() => onTabChange('home')} aria-label="Перейти на главную">
            <span className="navbar-brand-mark">GYN</span>
            <span className="navbar-brand-copy">
              <strong>Clinical Desk</strong>
              <span>гинекология и акушерство</span>
            </span>
          </button>

          <button
            type="button"
            className="theme-toggle navbar-theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
            title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
          >
            Тема
          </button>

          <div className="navbar-actions" role="toolbar" aria-label="Быстрые действия">
            <button type="button" className="nav-item nav-utility-item" onClick={onQuestionnaires} aria-label="Открыть опросники">
              Шкалы
            </button>
            <button type="button" className="nav-item nav-utility-item" onClick={onPharmacology} aria-label="Фармакология">
              Фарма
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
          </div>
        </div>

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
      </div>
    </motion.nav>
  );
});

export default Navbar;
