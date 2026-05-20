import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

interface MobileBottomBarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const navItems: NavItem[] = [
  {
    path: '/',
    label: 'Главная',
    icon: (
      <svg className="mobile-bottom-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
      </svg>
    ),
  },
  {
    path: '/gynecology',
    label: 'Гинекология',
    icon: (
      <svg className="mobile-bottom-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.75 15.75M10 11.25a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zm4.5 2.25a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" />
      </svg>
    ),
  },
  {
    path: '/obstetrics',
    label: 'Акушерство',
    icon: (
      <svg className="mobile-bottom-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    path: '/bookmarks',
    label: 'Закладки',
    icon: (
      <svg className="mobile-bottom-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0114.186 0z" />
      </svg>
    ),
  },
];

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ currentPath, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="mobile-bottom-bar"
          style={{
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            background: 'rgba(28, 28, 30, 0.7)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: 'var(--safe-bottom)',
          }}
        >
          <div className="mobile-bottom-items">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <motion.button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className={`mobile-bottom-item ${isActive ? 'is-active' : ''}`}
                  whileTap={{ scale: 0.96 }}
                  animate={isActive ? { scale: [1, 1.03, 1], transition: { duration: 0.24 } } : {}}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <motion.div className={`mobile-bottom-icon-wrap ${isActive ? 'glow-turquoise' : ''}`}>
                    {item.icon}
                  </motion.div>
                  <span className="mobile-bottom-label">{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="mobile-bottom-active-dot"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};