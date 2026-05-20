import React from 'react';
import { motion } from 'framer-motion';
import { PremiumButton } from './PremiumButton';
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

const navTransition = { duration: 0.28, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

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
    <motion.nav
      className="navbar glass"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={navTransition}
      aria-label="Главная навигация"
      style={{ backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)' }}
    >
      <div className="navbar-inner">
        <div className="navbar-topline">
          <button
            type="button"
            className="navbar-brand group"
            onClick={() => onTabChange('home')}
            aria-label="Перейти на главную"
          >
            <span className="navbar-brand-mark text-gradient-animated">GYN</span>
            <span className="navbar-brand-copy">
              <strong>Клинический справочник</strong>
              <span>гинекология и акушерство</span>
            </span>
          </button>

          <PremiumButton onClick={toggleTheme} variant="ghost" size="sm" className="navbar-theme-toggle" shimmer={false}>
            {theme === 'dark' ? 'Светлая' : 'Тёмная'}
          </PremiumButton>

          <div className="navbar-actions" role="toolbar" aria-label="Быстрые действия">
            <PremiumButton onClick={onQuestionnaires} variant="secondary" size="sm" shimmer={false} aria-label="Открыть опросники">
              Шкалы
            </PremiumButton>
            <PremiumButton onClick={onPharmacology} variant="secondary" size="sm" shimmer={false} aria-label="Открыть фармакологию">
              Фарма
            </PremiumButton>
            <PremiumButton onClick={onFavoritesToggle} variant={showFavorites ? 'primary' : 'ghost'} size="sm" shimmer={false} aria-label="Избранное">
              {showFavorites ? 'Скрыть избранное' : 'Избранное'}
            </PremiumButton>
            <PremiumButton onClick={onHistoryToggle} variant={showHistory ? 'primary' : 'ghost'} size="sm" shimmer={false} aria-label="История">
              {showHistory ? 'Скрыть историю' : 'История'}
            </PremiumButton>
          </div>
        </div>

        <div className="nav-row nav-row-primary" aria-label="Основные разделы">
          <div className="nav-scroll flex gap-2 p-2">
            <PremiumButton onClick={() => onTabChange('home')} variant={activeTab === 'home' ? 'primary' : 'ghost'} shimmer={false}>
              Главная
            </PremiumButton>
            <PremiumButton onClick={() => onTabChange('gynecology')} variant={activeTab === 'gynecology' ? 'primary' : 'ghost'} shimmer={false}>
              Гинекология
            </PremiumButton>
            <PremiumButton onClick={() => onTabChange('obstetrics')} variant={activeTab === 'obstetrics' ? 'primary' : 'ghost'} shimmer={false}>
              Акушерство
            </PremiumButton>
          </div>
        </div>
      </div>
    </motion.nav>
  );
});

export default Navbar;