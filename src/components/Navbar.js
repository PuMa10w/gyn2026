import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ 
  activeTab, setActiveTab, 
  onQuestionnaires, onPharmacology,
  theme, toggleTheme, 
  showFavorites, setShowFavorites,
  showHistory, setShowHistory,
  favoritesCount, historyCount 
}) => {
  const isGynActive = activeTab === 'gynecology' && !showFavorites && !showHistory;
  const isObsActive = activeTab === 'obstetrics' && !showFavorites && !showHistory;

  return (
    <nav className="navbar" role="navigation" aria-label="Главная навигация">
      <div className="nav-logo">Gyn & Obs</div>
      <motion.div
        className="nav-item"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { setActiveTab('gynecology'); setShowFavorites(false); setShowHistory(false); }}
        style={isGynActive ? { color: 'white', background: 'var(--gradient-rose)', boxShadow: '0 4px 15px rgba(224, 90, 120, 0.35)' } : {}}
        role="tab"
        aria-selected={isGynActive}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setActiveTab('gynecology')}
      >
        🌸 Гинекология
      </motion.div>
      <motion.div
        className="nav-item"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { setActiveTab('obstetrics'); setShowFavorites(false); setShowHistory(false); }}
        style={isObsActive ? { color: 'white', background: 'var(--gradient-lilac)', boxShadow: '0 4px 15px rgba(155, 89, 182, 0.35)' } : {}}
        role="tab"
        aria-selected={isObsActive}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setActiveTab('obstetrics')}
      >
        🤰 Акушерство
      </motion.div>
      <motion.div
        className="nav-item nav-history"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { setShowHistory(!showHistory); setShowFavorites(false); }}
        style={showHistory ? { color: 'white', background: 'var(--gradient-gold)', boxShadow: '0 4px 15px rgba(212, 160, 23, 0.35)' } : { color: 'var(--gold-accent)', border: '1.5px solid var(--gold-accent)', background: 'var(--gold-light)' }}
        role="tab"
        aria-selected={showHistory}
        aria-label={`История, ${historyCount} элементов`}
      >
        🕐 История {historyCount > 0 && `(${historyCount})`}
      </motion.div>
      <motion.div
        className="nav-item nav-favorites"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { setShowFavorites(!showFavorites); setShowHistory(false); }}
        style={showFavorites ? { color: 'white', background: 'var(--gradient-gold)', boxShadow: '0 4px 15px rgba(212, 160, 23, 0.35)' } : { color: 'var(--gold-accent)', border: '1.5px solid var(--gold-accent)', background: 'var(--gold-light)' }}
        role="tab"
        aria-selected={showFavorites}
        aria-label={`Избранное, ${favoritesCount} элементов`}
      >
        ⭐ Избранное {favoritesCount > 0 && `(${favoritesCount})`}
      </motion.div>
      <motion.div
        className="nav-item nav-questionnaires"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onQuestionnaires}
        style={{ color: 'var(--gold-accent)', border: '1.5px solid var(--gold-accent)', background: 'var(--gold-light)' }}
      >
        📋 Опросники
      </motion.div>
      <motion.div
        className="nav-item nav-pharmacology"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPharmacology}
        style={{ color: 'var(--rose-primary)', border: '1.5px solid var(--rose-primary)', background: 'var(--rose-light)' }}
      >
        💊 Препараты
      </motion.div>
      <motion.button
        className="theme-toggle"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
        title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </motion.button>
    </nav>
  );
};

export default Navbar;
