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

const gradients = [
  'linear-gradient(135deg, #e05a78, #b82845)',
  'linear-gradient(135deg, #9b59b6, #7d3c98)',
  'linear-gradient(135deg, #d4a017, #b8860b)',
  'linear-gradient(135deg, #e05a78, #9b59b6)',
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.06,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const DiseaseCard = ({ item, onClick, index, isFavorite, onToggleFavorite }: DiseaseCardProps) => {
  const IconComponent = item.subtitle === 'Гинекология' ? gynIcons[item.icon] : obsIcons[item.icon];

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
      whileHover={{
        y: -12,
        scale: 1.03,
        rotateX: 2,
        rotateY: -2,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      onClick={() => onClick(item)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick(item);
        }
      }}
      style={{ perspective: '1000px' }}
      role="button"
      tabIndex={0}
      aria-label={`${item.name}, код ${item.icd}. Открыть подробности.`}
    >
      <motion.button
        type="button"
        className="favorite-btn"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleFavoriteClick}
        aria-label={
          isFavorite ? `Удалить ${item.name} из избранного` : `Добавить ${item.name} в избранное`
        }
        title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
      >
        {isFavorite ? '❤️' : '🤍'}
      </motion.button>

      <span className="card-shimmer" aria-hidden="true" />
      <span className="card-glow" aria-hidden="true" />

      <span className="card-icon" aria-hidden="true">
        <motion.span whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
          {IconComponent}
        </motion.span>
      </span>
      <div className="card-subtitle">{item.subtitle}</div>
      <h3 className="card-title">{item.name}</h3>
      <div className="card-icd-badge">{item.icd}</div>
      <p className="card-desc">{item.description}</p>

      <span
        className="card-corner-accent"
        style={{ background: gradients[index % gradients.length] }}
        aria-hidden="true"
      />
    </motion.article>
  );
};

export default DiseaseCard;
