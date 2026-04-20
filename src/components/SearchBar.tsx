import React, { useId } from 'react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  resultCount?: number;
}

const SearchBar = React.memo(function SearchBar({ searchTerm, setSearchTerm, resultCount }: SearchBarProps) {
  const inputId = useId();

  return (
    <motion.form
      className="search-container"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      role="search"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="visually-hidden" htmlFor={inputId}>
        Поиск по нозологиям, симптомам и кодам МКБ
      </label>
      <div className="search-input-wrapper">
        <input
          id={inputId}
          type="search"
          className="search-input"
          placeholder="Нозология, симптом, код МКБ..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          autoComplete="off"
        />
        {searchTerm && (
          <motion.button
            type="button"
            className="search-clear-btn"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setSearchTerm('')}
            aria-label="Очистить поиск"
            title="Очистить поиск"
          >
            ×
          </motion.button>
        )}
        {typeof resultCount === 'number' && (
          <motion.span
            className="search-result-count"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            aria-label={`Найдено результатов: ${resultCount}`}
          >
            {resultCount}
          </motion.span>
        )}
      </div>
    </motion.form>
  );
});

export default SearchBar;
