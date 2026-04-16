import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', label: 'Все', icon: '📋' },
  { id: 'oncology', label: 'Онкология', icon: '🎗️' },
  { id: 'infection', label: 'Инфекции', icon: '🦠' },
  { id: 'hormonal', label: 'Гормональные', icon: '💉' },
  { id: 'inflammatory', label: 'Воспалительные', icon: '🔥' },
  { id: 'pregnancy', label: 'Беременность', icon: '🤰' },
];

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <motion.div 
      className="category-filter"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="category-chips">
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            className={`category-chip ${activeCategory === cat.id ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat.id)}
            aria-pressed={activeCategory === cat.id}
          >
            <span className="chip-icon">{cat.icon}</span>
            <span className="chip-label">{cat.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export { categories };
export default CategoryFilter;
