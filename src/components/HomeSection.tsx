import React, { useId } from 'react';
import { motion } from 'framer-motion';
import type { HistoryItem } from '../hooks/useHistory';
import type { TabType } from '../types';
import { useParallax } from '../hooks/useParallax';

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
  const parallaxOffset = useParallax(0.05);
  const primaryActions = actions.slice(0, 2);
  const toolActions = actions.slice(2);
  const recentPreview = recentItems.slice(0, 3);

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

      <section className="home-hero-grid" aria-label="Стартовая панель">
        <section
          className="home-hero home-hero-main"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <span className="home-eyebrow">Premium Clinical Desk</span>
          <h2 className="home-hero-title">Гинекология и акушерство</h2>
          <p className="home-hero-description">
            Спокойный клинический интерфейс с быстрым доступом к нозологиям, маршрутам ведения, фармакологии,
            шкалам и личным подборкам без визуального шума.
          </p>

          <div className="home-hero-metrics" aria-label="Преимущества платформы">
            <div className="home-metric-card">
              <span className="home-metric-value">2</span>
              <span className="home-metric-label">основных клинических контура</span>
            </div>
            <div className="home-metric-card">
              <span className="home-metric-value">4</span>
              <span className="home-metric-label">быстрых сценария доступа</span>
            </div>
            <div className="home-metric-card">
              <span className="home-metric-value">24/7</span>
              <span className="home-metric-label">рабочий клинический стол</span>
            </div>
          </div>
        </section>

        <motion.aside
          className="home-hero-rail"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.08, duration: 0.35 }}
          aria-label="Быстрый доступ"
        >
          <button type="button" className="hero-rail-card" onClick={onFavoritesOpen}>
            <span className="hero-panel-label">Избранное</span>
            <strong>{favoriteCount > 0 ? `${favoriteCount} сохранено` : 'Соберите свой рабочий набор'}</strong>
            <p>Держите под рукой ключевые нозологии, схемы и карточки для ежедневной практики.</p>
          </button>

          <button type="button" className="hero-rail-card" onClick={onHistoryOpen}>
            <span className="hero-panel-label">История</span>
            <strong>{recentItems.length > 0 ? 'Продолжить чтение без поиска' : 'Последние открытия появятся здесь'}</strong>
            <p>Возвращайтесь к недавним материалам в один тап и не теряйте рабочий контекст.</p>
          </button>

          {toolActions.map((item) => (
            <button
              key={item.title}
              type="button"
              className="hero-rail-card hero-rail-card-compact"
              onClick={() => item.onClick(setActiveTab, openQuestionnaire, openPharmacology)}
              aria-label={item.title}
            >
              <span className="hero-panel-label">{item.badge}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </button>
          ))}
        </motion.aside>
      </section>

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

      <section className="home-support-grid" aria-label="Продолжение работы">
        <motion.section className="home-panel home-panel-large" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          <div className="home-panel-header">
            <div>
              <span className="home-panel-eyebrow">Продолжить</span>
              <h2 className="home-panel-title">Недавно открытые материалы</h2>
            </div>
            <button type="button" className="home-link-btn" onClick={onHistoryOpen}>
              Вся история
            </button>
          </div>

          {recentPreview.length > 0 ? (
            <div className="home-recent-list">
              {recentPreview.map((item) => (
                <button
                  key={`${item.id}-${item.timestamp}`}
                  type="button"
                  className="home-recent-item"
                  onClick={() => onRecentOpen(item)}
                >
                  <span className="home-recent-name">{item.name}</span>
                  <span className="home-recent-meta">{item.icd}{item.subtitle ? ` • ${item.subtitle}` : ''}</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="home-panel-empty">После просмотра карточек здесь появятся последние открытые материалы.</p>
          )}
        </motion.section>

        <motion.section className="home-panel home-panel-stack" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}>
          <div className="home-panel-header">
            <div>
              <span className="home-panel-eyebrow">Личные режимы</span>
              <h2 className="home-panel-title">Быстрые рабочие подборки</h2>
            </div>
          </div>

          <div className="home-quick-actions">
            <button type="button" className="home-quick-card" onClick={onFavoritesOpen}>
              <span className="home-quick-badge">Избранное</span>
              <strong>{favoriteCount > 0 ? `${favoriteCount} материалов под рукой` : 'Сохраните ключевые сценарии'}</strong>
              <span>Соберите собственный набор клинических карточек и открывайте его без лишней навигации.</span>
            </button>

            <button type="button" className="home-quick-card" onClick={onHistoryOpen}>
              <span className="home-quick-badge">История</span>
              <strong>{recentItems.length > 0 ? 'Вернуться к последним просмотрам' : 'История пока пуста'}</strong>
              <span>Продолжайте чтение с того места, где остановились, и быстро возвращайтесь к рабочим маршрутам.</span>
            </button>
          </div>
        </motion.section>
      </section>
    </motion.section>
  );
});

export default HomeSection;
