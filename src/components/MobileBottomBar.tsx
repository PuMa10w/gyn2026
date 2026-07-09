import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  path: string;
  label: string;
}

interface MobileBottomBarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Главная' },
  { path: '/gynecology', label: 'Гинекология' },
  { path: '/obstetrics', label: 'Акушерство' },
  { path: '/bookmarks', label: 'Закладки' },
];

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ currentPath, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollThreshold = 16;
  const showThreshold = 100;
  
  useEffect(() => {
    const updateVisibility = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      
      // Hide when scrolling down past threshold, show when scrolling up
      if (delta > scrollThreshold && currentY > showThreshold) {
        setIsVisible(false);
      } else if (delta < -scrollThreshold) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 18, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="mobile-bottom-bar"
      aria-label="Нижняя навигация"
    >
      <div className="mobile-bottom-items">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <motion.button
              key={item.path}
              type="button"
              onClick={() => onNavigate(item.path)}
              className={`mobile-bottom-item ${isActive ? 'is-active' : ''}`}
              whileTap={{ scale: 0.97 }}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="mobile-bottom-label">{item.label}</span>
              {isActive && (
                <motion.span 
                  className="mobile-bottom-active-dot" 
                  layoutId="bottomActiveLine"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};