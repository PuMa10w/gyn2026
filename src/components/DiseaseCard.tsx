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
      delay: index * 0.05,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const DiseaseCard = React.memo(function DiseaseCard({ item, onClick, index, isFavorite, onToggleFavorite }: DiseaseCardProps) {
  const IconComponent = (gynIcons as Record<string, React.ReactNode>)[item.icon] ?? (obsIcons as Record<string, React.ReactNode>)[item.icon];
  const icdLabel = item.icdDetail ?? item.icd;

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onToggleFavorite(item.id);
  };

  return (
    <motion.article
      className="disease-card"
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ y: -4 }}
      onClick={() => onClick(item)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick(item);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${item.name}, код ${icdLabel}. Открыть подробности.`}
    >
      <div className="card-header">
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
      </div>

      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <span className="card-icd-badge">{icdLabel}</span>
        
        <div className="card-icon-wrap">
          <span className="card-icon" aria-hidden="true">
            {IconComponent && <span className="card-icon-art">{IconComponent}</span>}
          </span>
        </div>
        
        <p className="card-desc">{item.description}</p>
      </div>
    </motion.article>
  );
});

export default DiseaseCard;
