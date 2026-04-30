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

const sectionNotes = {
  gynecology: ['МКБ-10', 'Диагностика', 'Лечение'],
  obstetrics: ['Протоколы', 'Маршруты', 'Осложнения'],
} as const;

const sampleDiseases = [
  { name: 'Миома матки', icd: 'D25' },
  { name: 'Воспаление придатков', icd: 'N70' },
  { name: 'Гестационный диабет', icd: 'O24' },
];

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
  const primaryActions = actions.slice(0, 2);
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
      <h1 className="visually-hidden" id={titleId}>
        Главная страница
      </h1>

      {/* ===== HERO BLOCK ===== */}
      <section className="home-hero-grid" aria-label="Обзор">
        <motion.div
          className="home-hero home-hero-main"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <span className="home-eyebrow">Клинический справочник</span>
          <h2 className="home-hero-title">
            Гинекология{' '}
            <span className="hero-title-accent">&amp;</span>{' '}
            Акушерство
          </h2>
          <p className="home-hero-description">
            Нозологии, диагностика, протоколы и фармакология — в едином спокойном,
            быстром и адаптированном под iPhone интерфейсе для повседневной клинической практики.
          </p>

          <div className="home-hero-metrics">
            <div className="home-metric-card">
              <span className="home-metric-value">48</span>
              <span className="home-metric-label">Нозологий в базе</span>
            </div>
            <div className="home-metric-card">
              <span className="home-metric-value">2</span>
              <span className="home-metric-label">Клинических раздела</span>
            </div>
            <div className="home-metric-card">
              <span className="home-metric-value">PWA</span>
              <span className="home-metric-label">Офлайн-доступ</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="home-hero-rail"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
        >
          <button
            type="button"
            className="hero-rail-card hero-rail-gynecology"
            onClick={() => setActiveTab('gynecology')}
          >
            <span className="hero-panel-label">Основной раздел</span>
            <strong>Гинекология</strong>
            <p>Нозологии, диагностика и алгоритмы лечения в одном клиническом контуре.</p>
          </button>

          <button
            type="button"
            className="hero-rail-card hero-rail-obstetrics"
            onClick={() => setActiveTab('obstetrics')}
          >
            <span className="hero-panel-label">Раздел</span>
            <strong>Акушерство</strong>
            <p>Беременность, осложнения, наблюдение и маршруты ведения.</p>
          </button>

          <button
            type="button"
            className="hero-rail-card hero-rail-favorites"
            onClick={onFavoritesOpen}
          >
            <span className="hero-panel-label">
              Быстрый доступ{favoriteCount > 0 ? ` • ${favoriteCount}` : ''}
            </span>
            <strong>{favoriteCount > 0 ? 'Избранное' : 'Добавьте в избранное'}</strong>
            <p>
              {favoriteCount > 0
                ? `${favoriteCount} ${favoriteCount === 1 ? 'материал' : favoriteCount < 5 ? 'материала' : 'материалов'} под рукой`
                : 'Сохраняйте важные нозологии для быстрого возврата.'}
            </p>
          </button>
        </motion.div>
      </section>

      {/* ===== DESTINATION CARDS ===== */}
      <section className="home-destination-grid" aria-label="Основные разделы">
        {primaryActions.map((item, index) => {
          const isGynecology = index === 0;
          const tags = isGynecology ? sectionNotes.gynecology : sectionNotes.obstetrics;

          return (
            <motion.button
              key={item.title}
              type="button"
              className={`home-destination-card ${isGynecology ? 'is-gynecology' : 'is-obstetrics'}`}
              onClick={() => item.onClick(setActiveTab, openQuestionnaire, openPharmacology)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.4, ease: 'easeOut' }}
            >
              <div className="destination-head">
                <span className="destination-kicker">
                  {isGynecology ? 'Основной раздел' : 'Беременность и наблюдение'}
                </span>
                <span className="destination-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="destination-main">
                <h2 className="home-destination-title">{item.title}</h2>
                <p className="home-destination-description">{item.description}</p>
              </div>

              <div className="destination-preview">
                {tags.map((tag) => (
                  <span key={tag} className="destination-preview-item">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="destination-footer">
                <div className="destination-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="destination-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="destination-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </motion.button>
          );
        })}
      </section>

      {/* ===== SUPPORT PANELS ===== */}
      <section className="home-support-grid" aria-label="Продолжение работы">
        <motion.section
          className="home-panel home-panel-large"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.04 }}
        >
          <div className="home-panel-header">
            <div>
              <span className="home-panel-eyebrow">Продолжить</span>
              <h2 className="home-panel-title">Недавние материалы</h2>
            </div>
            {recentItems.length > 0 && (
              <button type="button" className="home-link-btn" onClick={onHistoryOpen}>
                Вся история
              </button>
            )}
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
                  <span className="home-recent-meta">
                    {item.icd}
                    {item.subtitle ? ` • ${item.subtitle}` : ''}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="home-panel-samples">
              <p className="home-panel-subtitle">
                Откройте каталог — здесь появятся последние просмотренные материалы.
              </p>
              <div className="home-sample-grid">
                {sampleDiseases.map((d) => (
                  <div key={d.icd} className="home-sample-card">
                    <span className="home-sample-name">{d.name}</span>
                    <span className="home-sample-icd">{d.icd}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.section>

        <motion.section
          className="home-panel"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          <div className="home-panel-header">
            <div>
              <span className="home-panel-eyebrow">Личный контур</span>
              <h2 className="home-panel-title">Быстрый доступ</h2>
            </div>
          </div>

          <div className="home-quick-actions">
            <button type="button" className="home-quick-card" onClick={onFavoritesOpen}>
              <span className="home-quick-badge">
                {favoriteCount > 0 ? `♥ ${favoriteCount}` : '♡'}
              </span>
              <strong>
                {favoriteCount > 0
                  ? `${favoriteCount} ${favoriteCount === 1 ? 'материал' : favoriteCount < 5 ? 'материала' : 'материалов'}`
                  : 'Избранное'}
              </strong>
              <span>
                {favoriteCount > 0
                  ? 'Важные клинические карточки всегда под рукой.'
                  : 'Сохраняйте ключевые сценарии для быстрого доступа.'}
              </span>
            </button>

            <button type="button" className="home-quick-card" onClick={openPharmacology}>
              <span className="home-quick-badge">⚕</span>
              <strong>Фармакология</strong>
              <span>Препараты, режимы и клинические ориентиры.</span>
            </button>

            <button type="button" className="home-quick-card" onClick={openQuestionnaire}>
              <span className="home-quick-badge">📋</span>
              <strong>Шкалы и опросники</strong>
              <span>Клинические анкеты и шкалы в одном месте.</span>
            </button>

            <button type="button" className="home-quick-card" onClick={onHistoryOpen}>
              <span className="home-quick-badge">🕐</span>
              <strong>{recentItems.length > 0 ? 'История' : 'Начать работу'}</strong>
              <span>
                {recentItems.length > 0
                  ? 'Продолжайте с того места, где остановились.'
                  : 'Откройте первый материал — и история начнёт наполняться.'}
              </span>
            </button>
          </div>
        </motion.section>
      </section>
    </motion.section>
  );
});

export default HomeSection;