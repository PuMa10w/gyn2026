import React from 'react';
import { navIcons } from './Icons';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onQuestionnaires: () => void;
  onPharmacology: () => void;
  theme: string;
  toggleTheme: () => void;
  showFavorites: boolean;
  onFavoritesToggle: () => void;
  showHistory: boolean;
  onHistoryToggle: () => void;
}

function Navbar({
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
    <nav className="navbar" aria-label="Основная навигация">
      <div className="navbar-inner">
        <div className="nav-row nav-row-primary" aria-label="Основные разделы">
          <div className="nav-scroll">
            <button
              type="button"
              className={`nav-item nav-primary-item ${activeTab === 'home' ? 'is-active' : ''}`}
              onClick={() => onTabChange('home')}
              aria-current={activeTab === 'home' ? 'page' : undefined}
            >
              <span className="nav-icon">{navIcons.home}</span>
              <span>Главная</span>
            </button>
            <button
              type="button"
              className={`nav-item nav-primary-item ${activeTab === 'gynecology' ? 'is-active' : ''}`}
              onClick={() => onTabChange('gynecology')}
              aria-current={activeTab === 'gynecology' ? 'page' : undefined}
            >
              <span className="nav-icon">{navIcons.gynecology}</span>
              <span>Гинекология</span>
            </button>
            <button
              type="button"
              className={`nav-item nav-primary-item ${activeTab === 'obstetrics' ? 'is-active' : ''}`}
              onClick={() => onTabChange('obstetrics')}
              aria-current={activeTab === 'obstetrics' ? 'page' : undefined}
            >
              <span className="nav-icon">{navIcons.obstetrics}</span>
              <span>Акушерство</span>
            </button>
          </div>
        </div>

        <div className="nav-row nav-row-utility" aria-label="Дополнительные действия" role="toolbar">
          <div className="nav-scroll">
            <button type="button" className="nav-item nav-utility-item" onClick={onQuestionnaires}>
              <span className="nav-icon nav-icon-sm">{navIcons.questionnaires}</span>
              <span>Опросники</span>
            </button>
            <button type="button" className="nav-item nav-utility-item" onClick={onPharmacology}>
              <span className="nav-icon nav-icon-sm">{navIcons.pharmacology}</span>
              <span>Фармакология</span>
            </button>
            <button
              type="button"
              className={`nav-item nav-utility-item ${showFavorites ? 'is-active' : ''}`}
              onClick={onFavoritesToggle}
              aria-pressed={showFavorites}
            >
              <span className="nav-icon nav-icon-sm">{showFavorites ? navIcons.heart : navIcons.favorites}</span>
              <span>Избранное</span>
            </button>
            <button
              type="button"
              className={`nav-item nav-utility-item ${showHistory ? 'is-active' : ''}`}
              onClick={onHistoryToggle}
              aria-pressed={showHistory}
            >
              <span className="nav-icon nav-icon-sm">{showHistory ? navIcons.clock : navIcons.history}</span>
              <span>История</span>
            </button>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
            >
              {theme === 'dark' ? 'Светлая' : 'Тёмная'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
