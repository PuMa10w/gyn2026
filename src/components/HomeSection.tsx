import React, { useId } from 'react';
import { motion } from 'framer-motion';
import type { HistoryItem } from '../hooks/useHistory';
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
  recentItems: HistoryItem[];
  onRecentOpen: (item: HistoryItem) => void;
  onFavoritesOpen: () => void;
  onHistoryOpen: () => void;
  favoriteCount: number;
}

const HomeSection = React.memo(function HomeSection({
  actions,
  setActiveTab,
  openQuestionnaire,
  openPharmacology,
}: HomeSectionProps) {
  const titleId = useId();
  const primaryActions = actions.slice(0, 2);

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

      <section className="home-destination-grid" aria-label="Основные разделы">
        {primaryActions.map((item, index) => (
          <motion.button
            key={item.title}
            type="button"
            className={`home-destination-card ${index === 0 ? 'is-gynecology' : 'is-obstetrics'}`}
            onClick={() => item.onClick(setActiveTab, openQuestionnaire, openPharmacology)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * index, duration: 0.4 }}
          >
            <div className="destination-head">
              <span className="destination-kicker">{index === 0 ? 'Основной раздел' : 'Беременность и наблюдение'}</span>
              <span className="destination-index">{index === 0 ? '01' : '02'}</span>
            </div>
            <h2 className="home-destination-title">{item.title}</h2>
            <p className="home-destination-description">{item.description}</p>
            <div className="destination-tags">
              {(index === 0
                ? ['МКБ-10', 'Диагностика', 'Лечение']
                : ['Протоколы', 'Маршруты', 'Осложнения']
              ).map((tag) => (
                <span key={tag} className="destination-tag">{tag}</span>
              ))}
            </div>
          </motion.button>
        ))}
      </section>
    </motion.section>
  );
});

export default HomeSection;
