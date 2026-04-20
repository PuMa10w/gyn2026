import React from 'react';
import { motion } from 'framer-motion';
import type { TabType } from '../types';
import type { ThemeMode } from '../hooks/useTheme';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (value: TabType) => void;
  onQuestionnaires: () => void;
  onPharmacology: () => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  showFavorites: boolean;
  setShowFavorites: React.Dispatch<React.SetStateAction<boolean>>;
  showHistory: boolean;
  setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
  favoritesCount: number;
  historyCount: number;
}

const interactiveMotion = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
};

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
  const isGynActive = activeTab === 'gynecology' && !showFavorites && !showHistory;
  const isObsActive = activeTab === 'obstetrics' && !showFavorites && !showHistory;

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setShowFavorites(false);
    setShowHistory(false);
  };

  return (
    <nav className="navbar" aria-label="Главная навигация">
      <div className="nav-topbar">
        <div className="nav-logo-block">
          <div className="nav-logo">Gyn &amp; Obs</div>
          <div className="nav-subtitle">Карманный справочник</div>
        </div>

        <motion.button
          type="button"
          className="theme-toggle"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
          title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </motion.button>
      </div>

      <div className="nav-primary" role="tablist" aria-label="Основные разделы">
        <motion.button
          {...interactiveMotion}
          type="button"
          className={`nav-item nav-primary-item ${isGynActive ? 'is-active' : ''}`}
          onClick={() => handleTabChange('gynecology')}
          role="tab"
          aria-selected={isGynActive}
        >
          <span className="nav-item-icon" aria-hidden="true">
            🌸
          </span>
          <span>Гинекология</span>
        </motion.button>

        <motion.button
          {...interactiveMotion}
          type="button"
          className={`nav-item nav-primary-item ${isObsActive ? 'is-active' : ''}`}
          onClick={() => handleTabChange('obstetrics')}
          role="tab"
          aria-selected={isObsActive}
        >
          <span className="nav-item-icon" aria-hidden="true">
            🤰
          </span>
          <span>Акушерство</span>
        </motion.button>
      </div>

      <div className="nav-utility" aria-label="Дополнительные разделы">
        <motion.button
          {...interactiveMotion}
          type="button"
          className={`nav-item nav-utility-item ${showHistory ? 'is-active is-gold' : ''}`}
          onClick={() => {
            setShowHistory((current) => !current);
            setShowFavorites(false);
          }}
          aria-pressed={showHistory}
          aria-label={`История, элементов: ${historyCount}`}
        >
          <span className="nav-item-icon" aria-hidden="true">
            🕘
          </span>
          <span>История</span>
          {historyCount > 0 && <span className="nav-pill">{historyCount}</span>}
        </motion.button>

        <motion.button
          {...interactiveMotion}
          type="button"
          className={`nav-item nav-utility-item ${showFavorites ? 'is-active is-gold' : ''}`}
          onClick={() => {
            setShowFavorites((current) => !current);
            setShowHistory(false);
          }}
          aria-pressed={showFavorites}
          aria-label={`Избранное, элементов: ${favoritesCount}`}
        >
          <span className="nav-item-icon" aria-hidden="true">
            ⭐
          </span>
          <span>Избранное</span>
          {favoritesCount > 0 && <span className="nav-pill">{favoritesCount}</span>}
        </motion.button>

        <motion.button
          {...interactiveMotion}
          type="button"
          className="nav-item nav-utility-item nav-utility-accent"
          onClick={onQuestionnaires}
        >
          <span className="nav-item-icon" aria-hidden="true">
            📋
          </span>
          <span>Опросники</span>
        </motion.button>

        <motion.button
          {...interactiveMotion}
          type="button"
          className="nav-item nav-utility-item nav-utility-accent"
          onClick={onPharmacology}
        >
          <span className="nav-item-icon" aria-hidden="true">
            💊
          </span>
          <span>Препараты</span>
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
