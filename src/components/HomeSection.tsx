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
  recentItems,
  onRecentOpen,
  onFavoritesOpen,
  onHistoryOpen,
  favoriteCount,
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
      <section className="home-hero" aria-label="Стартовая панель">
        <span className="home-eyebrow">Premium Clinical Reference</span>
        <h2 className="home-hero-title">Быстрый доступ к нозологиям, схемам и недавним клиническим материалам.</h2>
        <p className="home-hero-description">
          Стартовый экран собран как мобильный clinical launchpad: минимум шума, крупные точки входа и мгновенное возвращение к последним просмотрам.
        </p>
      </section>

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

      <section className="home-secondary-grid" aria-label="Быстрые сценарии">
        <motion.section className="home-panel" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          <div className="home-panel-header">
            <div>
              <span className="home-panel-eyebrow">Продолжить</span>
              <h2 className="home-panel-title">Недавно открытые материалы</h2>
            </div>
            <button type="button" className="home-link-btn" onClick={onHistoryOpen}>
              Вся история
            </button>
          </div>

          {recentItems.length > 0 ? (
            <div className="home-recent-list">
              {recentItems.map((item) => (
                <button key={`${item.id}-${item.timestamp}`} type="button" className="home-recent-item" onClick={() => onRecentOpen(item)}>
                  <span className="home-recent-name">{item.name}</span>
                  <span className="home-recent-meta">{item.icd}{item.subtitle ? ` • ${item.subtitle}` : ''}</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="home-panel-empty">После просмотра карточек здесь появятся последние открытые материалы.</p>
          )}
        </motion.section>

        <motion.section className="home-panel" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}>
          <div className="home-panel-header">
            <div>
              <span className="home-panel-eyebrow">Коллекции</span>
              <h2 className="home-panel-title">Личные быстрые режимы</h2>
            </div>
          </div>

          <div className="home-quick-actions">
            <button type="button" className="home-quick-card" onClick={onFavoritesOpen}>
              <span className="home-quick-badge">Избранное</span>
              <strong>{favoriteCount > 0 ? `${favoriteCount} сохранено` : 'Подберите рабочий набор'}</strong>
              <span>Сохраняйте ключевые нозологии для ежедневной практики и открывайте их в один тап.</span>
            </button>
            <button type="button" className="home-quick-card" onClick={onHistoryOpen}>
              <span className="home-quick-badge">История</span>
              <strong>{recentItems.length > 0 ? 'Вернуться к недавним просмотрам' : 'История пока пуста'}</strong>
              <span>Продолжайте чтение с того места, где остановились, без лишнего поиска по каталогу.</span>
            </button>
          </div>
        </motion.section>
      </section>
    </motion.section>
  );
});

export default HomeSection;
