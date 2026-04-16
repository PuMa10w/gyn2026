import React from 'react';
import { motion } from 'framer-motion';
import { gynIcons, obsIcons } from './Icons';

const DiseaseCard = ({ item, onClick, index, isFavorite, onToggleFavorite }) => {
  const IconComponent = item.subtitle === 'Гинекология' ? gynIcons[item.icon] : obsIcons[item.icon];

  const gradients = [
    'linear-gradient(135deg, #e05a78, #b82845)',
    'linear-gradient(135deg, #9b59b6, #7d3c98)',
    'linear-gradient(135deg, #d4a017, #b8860b)',
    'linear-gradient(135deg, #e05a78, #9b59b6)',
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.06,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    })
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onToggleFavorite(item.id);
  };

  return (
    <motion.div
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
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onClick={() => onClick(item)}
      style={{ perspective: '1000px' }}
      role="button"
      tabIndex={0}
      aria-label={`${item.name}, код ${item.icd}. Нажмите для подробностей`}
      onKeyDown={(e) => e.key === 'Enter' && onClick(item)}
    >
      <motion.button
        className="favorite-btn"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleFavoriteClick}
        aria-label={isFavorite ? `Удалить ${item.name} из избранного` : `Добавить ${item.name} в избранное`}
        title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
      >
        {isFavorite ? '❤️' : '🤍'}
      </motion.button>

      <div className="card-shimmer" />

      <div className="card-glow" />

      <div className="card-icon">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          {IconComponent}
        </motion.div>
      </div>
      <div className="card-subtitle">{item.subtitle}</div>
      <h3 className="card-title">{item.name}</h3>
      <div className="card-icd-badge">{item.icd}</div>
      <p className="card-desc">{item.description}</p>

      <div className="card-corner-accent" style={{ background: gradients[index % gradients.length] }} />
    </motion.div>
  );
};

export default DiseaseCard;
