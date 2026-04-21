import React, { useId } from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import DiseaseCard from './DiseaseCard';
import type { CategoryId, Disease } from '../types';

type SectionMeta = {
  eyebrow: string;
  title: string;
  description: string;
  loadingTitle: string;
};

type EmptyState = {
  eyebrow: string;
  title: string;
  description: string;
};

interface CatalogSectionProps {
  activeSectionMeta: SectionMeta;
  isDataLoading: boolean;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filteredData: Disease[];
  activeCategory: CategoryId;
  setActiveCategory: (value: CategoryId) => void;
  categoryCounts: Record<Exclude<CategoryId, 'all'>, number>;
  visibleCategories: CategoryId[];
  onItemClick: (item: Disease) => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  emptyState: EmptyState;
}

const CatalogSection = React.memo(function CatalogSection({
  activeSectionMeta,
  isDataLoading,
  searchTerm,
  setSearchTerm,
  filteredData,
  activeCategory,
  setActiveCategory,
  categoryCounts,
  visibleCategories,
  onItemClick,
  isFavorite,
  onToggleFavorite,
  emptyState,
}: CatalogSectionProps) {
  const titleId = useId();

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      aria-labelledby={titleId}
    >
      <section className="catalog-shell" aria-busy={isDataLoading}>
        <header className="catalog-header">
          <span className="catalog-eyebrow">{activeSectionMeta.eyebrow}</span>
          <h1 className="catalog-title" id={titleId}>{activeSectionMeta.title}</h1>
          <p className="catalog-description">{activeSectionMeta.description}</p>
        </header>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          resultCount={isDataLoading ? undefined : filteredData.length}
        />
        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categoryCounts={categoryCounts}
          visibleCategories={visibleCategories}
        />
      </section>

      <section aria-live="polite" className="cards-grid">
        {isDataLoading && (
          <>
            <motion.div className="catalog-status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <span className="catalog-status-eyebrow">Загрузка</span>
              <h2>{activeSectionMeta.loadingTitle}</h2>
              <p>Подготавливаем карточки и клинические блоки. Это может занять несколько секунд при первом открытии раздела.</p>
            </motion.div>
            <div className="skeleton-grid">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="skeleton-card" />
              ))}
            </div>
          </>
        )}

        {!isDataLoading &&
          filteredData.map((item, index) => (
            <DiseaseCard
              key={item.id}
              item={item}
              onClick={onItemClick}
              index={index}
              isFavorite={isFavorite(item.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}

        {!isDataLoading && filteredData.length === 0 && (
          <motion.div className="empty-state" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <span className="empty-eyebrow">{emptyState.eyebrow}</span>
            <h3>{emptyState.title}</h3>
            <p>{emptyState.description}</p>
          </motion.div>
        )}
      </section>
    </motion.section>
  );
});

export default CatalogSection;
