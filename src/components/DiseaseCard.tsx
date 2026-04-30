import React from 'react';
import { motion } from 'framer-motion';
import { gynIcons, obsIcons } from './Icons';
import type { Disease } from '../types';

interface DiseaseCardProps {
  item: Disease;
  onClick: (item: Disease) => void;
  index: number;
  isFavorite: boolean;
  onToggleFavorite: (diseaseId: string) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: Math.min(index, 8) * 0.035,
      duration: 0.34,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const DiseaseCard = React.memo(function DiseaseCard({
  item,
  onClick,
  index,
  isFavorite,
  onToggleFavorite,
}: DiseaseCardProps) {
  const IconComponent =
    (gynIcons as Record<string, React.ReactNode>)[item.icon] ??
    (obsIcons as Record<string, React.ReactNode>)[item.icon];
  const icdLabel = item.icdDetail ?? item.icd;

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onToggleFavorite(item.id);
  };

  const handleCardActionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClick(item);
  };

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(item);
    }
  };

  return (
    <motion.article
      className="disease-card"
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={canHover ? { y: -4 } : undefined}
      onClick={() => onClick(item)}
    >
      <button
        type="button"
        className="disease-card-action"
        onClick={handleCardActionClick}
        onKeyDown={handleCardKeyDown}
        aria-label={`${item.name}, код ${icdLabel}. Открыть подробности.`}
      />

      <header className="card-header">
        <div className="card-meta-row">
          <span className="card-subtitle">{item.subtitle}</span>
          <span className="card-icd-badge">{icdLabel}</span>
        </div>
        <button
          type="button"
          className={`favorite-btn ${isFavorite ? 'is-favorite' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? `Убрать ${item.name} из избранного` : `Добавить ${item.name} в избранное`}
          title={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        >
          <span className="favorite-icon" aria-hidden="true">
            {isFavorite ? '♥' : '♡'}
          </span>
        </button>
      </header>

      <div className="card-body">
        <div className="card-icon-wrap">
          <span className="card-icon" aria-hidden="true">
            {IconComponent && <span className="card-icon-art">{IconComponent}</span>}
          </span>
        </div>
        <h3 className="card-title">{item.name}</h3>
        <p className="card-desc">{item.description}</p>
      </div>
    </motion.article>
  );
});

export default DiseaseCard;
