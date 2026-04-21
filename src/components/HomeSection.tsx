import React, { useId } from 'react';
import { motion } from 'framer-motion';
import type { TabType } from '../types';

export type HomeAction = {
  title: string;
  description: string;
  badge: string;
  onClick: (setActiveTab: (tab: TabType) => void, openQuestionnaire: () => void, openPharmacology: () => void) => void;
};

interface HomeSectionProps {
  actions: readonly HomeAction[];
  setActiveTab: (tab: TabType) => void;
  openQuestionnaire: () => void;
  openPharmacology: () => void;
}

const HomeSection = React.memo(function HomeSection({
  actions,
  setActiveTab,
  openQuestionnaire,
  openPharmacology,
}: HomeSectionProps) {
  const titleId = useId();

  return (
    <motion.section
      className="home-shell"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      aria-labelledby={titleId}
    >
      <h1 className="visually-hidden" id={titleId}>Главная страница</h1>
      <section className="home-grid" aria-label="Основные разделы">
        {actions.map((item, index) => (
          <motion.button
            key={item.title}
            type="button"
            className="home-card"
            onClick={() => item.onClick(setActiveTab, openQuestionnaire, openPharmacology)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * index, duration: 0.4 }}
          >
            <span className="home-card-badge">{item.badge}</span>
            <h2 className="home-card-title">{item.title}</h2>
            <p className="home-card-description">{item.description}</p>
          </motion.button>
        ))}
      </section>
    </motion.section>
  );
});

export default HomeSection;
