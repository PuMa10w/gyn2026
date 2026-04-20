import React from 'react';
import { motion } from 'framer-motion';
import type { CategoryId } from '../types';

const categories: Array<{ id: CategoryId; label: string; icon: string }> = [
  { id: 'all', label: 'Все', icon: '📋' },
  { id: 'oncology', label: 'Онкология', icon: '🎗️' },
  { id: 'infection', label: 'Инфекции', icon: '🦠' },
  { id: 'hormonal', label: 'Гормональные', icon: '💉' },
  { id: 'inflammatory', label: 'Воспалительные', icon: '🔥' },
  { id: 'pregnancy', label: 'Беременность', icon: '🤰' },
];

interface CategoryFilterProps {
  activeCategory: CategoryId;
  setActiveCategory: (value: CategoryId) => void;
  categoryCounts: Record<Exclude<CategoryId, 'all'>, number>;
}

const CategoryFilter = ({ activeCategory, setActiveCategory, categoryCounts }: CategoryFilterProps) => (
  <motion.div
    className="category-filter"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <div className="category-chips" role="tablist" aria-label="Фильтр по категориям">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          type="button"
          className={`category-chip ${activeCategory === category.id ? 'active' : ''}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory(category.id)}
          aria-pressed={activeCategory === category.id}
        >
          <span className="chip-icon" aria-hidden="true">
            {category.icon}
          </span>
          <span className="chip-label">{category.label}</span>
          {category.id !== 'all' && <span className="chip-count">{categoryCounts[category.id]}</span>}
        </motion.button>
      ))}
    </div>
  </motion.div>
);

export { categories };
export default CategoryFilter;
