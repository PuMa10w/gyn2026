import React from 'react';
import { motion } from 'framer-motion';

const SearchBar = ({ searchTerm, setSearchTerm, resultCount }) => {
  return (
    <motion.div
      className="search-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Поиск нозологии, симптома, кода МКБ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <motion.button
            className="search-clear-btn"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setSearchTerm('')}
          >
            ✕
          </motion.button>
        )}
        {resultCount !== undefined && (
          <motion.span
            className="search-result-count"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {resultCount}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};

export default SearchBar;
