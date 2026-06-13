import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { siteSearch, type SearchResult, type GroupedResults } from '../utils/siteSearch';
import { repairText } from '../utils/textRepair';
import type { CategoryId, TabType } from '../types';

export type WorkbenchCommand = {
  id: string;
  label: string;
  description: string;
  query: string;
  route: TabType | 'pharmacology' | 'questionnaires';
  category?: CategoryId;
  badge: string;
  keywords: string[];
  /** If set, opens this specific disease directly */
  directDiseaseId?: string;
};

/** Convert a SearchResult to WorkbenchCommand */
function resultToCommand(result: SearchResult): WorkbenchCommand {
  return {
    id: result.id,
    label: result.label,
    description: result.description,
    query: result.query || result.label,
    route: result.route,
    badge: result.badge,
    keywords: [],
    directDiseaseId: result.type === 'disease' ? result.id : undefined,
  };
}

/** Preview commands for empty state */
const QUICK_COMMANDS: WorkbenchCommand[] = [
  {
    id: 'pharma',
    label: 'Фармакология',
    description: 'Сценарии, first-line, беременность, лактация, взаимодействия и схемы',
    query: 'фармакология препараты схемы',
    route: 'pharmacology',
    badge: 'Препараты',
    keywords: ['фарма', 'препарат', 'лекарство'],
  },
  {
    id: 'questionnaires',
    label: 'Опросники',
    description: 'Клинические шкалы, результат и next steps',
    query: 'опросники шкалы',
    route: 'questionnaires',
    badge: 'Шкалы',
    keywords: ['опросники', 'шкалы'],
  },
];

const normalize = (value: string) => value.toLowerCase().replace(/ё/g, 'е');

interface CommandSearchProps {
  onCommand: (command: WorkbenchCommand) => void;
}

export const CommandSearch: React.FC<CommandSearchProps> = ({ onCommand }) => {
  const inputId = useId();
  const hintId = useId();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [query, setQuery] = useState(() => {
    try {
      return sessionStorage.getItem('gyn-command-search') ?? '';
    } catch {
      return '';
    }
  });
  const [results, setResults] = useState<GroupedResults | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    try {
      const trimmed = query.trim();
      if (!trimmed) {
        sessionStorage.removeItem('gyn-command-search');
        return;
      }
      if (trimmed.length <= 80) sessionStorage.setItem('gyn-command-search', trimmed);
    } catch {
      // Ignore storage restrictions in private/PWA contexts.
    }
  }, [query]);

  // Debounced search
  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setResults(null);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    clearTimeout(debounceRef.current ?? undefined);
    debounceRef.current = setTimeout(async () => {
      const searchResults = await siteSearch.search(trimmed);
      setResults(searchResults);
      setIsSearching(false);
    }, 250);

    return () => {
      clearTimeout(debounceRef.current ?? undefined);
    };
  }, [query]);

  const trimmedQuery = query.trim();
  const hasQuery = normalize(trimmedQuery).length >= 2;
  const hasNoResults = hasQuery && results !== null && results.total === 0 && !isSearching;
  const isFreshSearch = hasQuery && isSearching;
  const isDataLoading = hasQuery && results === null && isSearching;

  // Build display items: grouped results when searching, quick commands when empty
  const displayItems = useMemo(() => {
    if (!hasQuery || !results || results.total === 0) return null;

    return results;
  }, [hasQuery, results]);

  const submit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      // Pick the best result
      const allResults: SearchResult[] = [
        ...(results?.diseases ?? []),
        ...(results?.medications ?? []),
        ...(results?.questionnaires ?? []),
      ];
      if (allResults.length > 0) {
        onCommand(resultToCommand(allResults[0]));
      } else if (trimmedQuery) {
        // Fallback: navigate to catalog with search term
        onCommand({
          id: 'free-search',
          label: trimmedQuery,
          description: 'Поиск по каталогу гинекологии',
          query: trimmedQuery,
          route: 'gynecology',
          badge: 'Поиск',
          keywords: [],
        });
      }
    },
    [results, trimmedQuery, onCommand],
  );

  return (
    <motion.section
      className="workbench-command"
      aria-labelledby={`${inputId}-title`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="workbench-command-head">
        <span className="workbench-eyebrow">Быстрый приём</span>
        <h3 id={`${inputId}-title`}>Клинический поиск</h3>
        <p id={hintId}>Один вход для нозологий, МКБ, УЗИ, препаратов и клинических шкал.</p>
      </div>

      <form className="workbench-command-form" role="search" onSubmit={submit}>
        <label className="visually-hidden" htmlFor={inputId}>
          Глобальный поиск GYN
        </label>
        <input
          id={inputId}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-describedby={hintId}
          aria-label="Глобальный поиск GYN"
          className="workbench-command-input"
          type="search"
          inputMode="search"
          enterKeyHint="search"
          placeholder="Например: O14, эндометриоз, УЗИ, фарма, EPDS..."
        />
        <button type="submit" className="workbench-command-submit">
          Найти
        </button>
      </form>

      <div className="workbench-command-results" aria-label="Быстрые клинические маршруты" aria-live="polite">
        {/* Loading state */}
        {isDataLoading && (
          <div className="workbench-command-status" role="status">
            <span>Загрузка данных поиска…</span>
          </div>
        )}

        {/* Fresh search in progress (data already loaded) */}
        {isFreshSearch && results === null && (
          <div className="workbench-command-status" role="status">
            <span>Поиск…</span>
          </div>
        )}

        {/* No results */}
        {hasNoResults && (
          <div className="workbench-command-empty" role="status">
            <span className="workbench-command-badge">Нет совпадений</span>
            <h4>Продолжить клинический поиск?</h4>
            <p>
              Попробуйте код МКБ, симптом, латинское название или перейдите сразу в фарму/шкалы.
            </p>
            <div className="workbench-command-empty-actions">
              <button type="button" onClick={() => onCommand({
                id: 'free-search',
                label: trimmedQuery,
                description: 'Поиск по каталогу гинекологии',
                query: trimmedQuery,
                route: 'gynecology',
                badge: 'Поиск',
                keywords: [],
              })}>
                Искать в каталоге
              </button>
              <button type="button" onClick={() => onCommand(QUICK_COMMANDS[0])}>
                Фарма
              </button>
              <button type="button" onClick={() => onCommand(QUICK_COMMANDS[1])}>
                Шкалы
              </button>
            </div>
          </div>
        )}

        {/* Grouped results: Diseases */}
        {displayItems && displayItems.diseases.length > 0 && (
          <div className="workbench-command-group">
            <span className="workbench-command-group-label">Нозологии ({displayItems.diseases.length})</span>
            {displayItems.diseases.map((result) => (
              <button
                key={result.id}
                type="button"
                className="workbench-command-card"
                onClick={() => onCommand(resultToCommand(result))}
              >
                <span className="workbench-command-badge">{result.badge || result.icd}</span>
                <strong>{result.label}</strong>
                <small>{result.description}</small>
              </button>
            ))}
          </div>
        )}

        {/* Grouped results: Medications */}
        {displayItems && displayItems.medications.length > 0 && (
          <div className="workbench-command-group">
            <span className="workbench-command-group-label">Препараты ({displayItems.medications.length})</span>
            {displayItems.medications.map((result) => (
              <button
                key={result.id}
                type="button"
                className="workbench-command-card"
                onClick={() => onCommand(resultToCommand(result))}
              >
                <span className="workbench-command-badge workbench-command-badge--pharma">Препарат</span>
                <strong>{result.label}</strong>
                <small>{result.description}</small>
              </button>
            ))}
          </div>
        )}

        {/* Grouped results: Questionnaires */}
        {displayItems && displayItems.questionnaires.length > 0 && (
          <div className="workbench-command-group">
            <span className="workbench-command-group-label">Шкалы ({displayItems.questionnaires.length})</span>
            {displayItems.questionnaires.map((result) => (
              <button
                key={result.id}
                type="button"
                className="workbench-command-card"
                onClick={() => onCommand(resultToCommand(result))}
              >
                <span className="workbench-command-badge workbench-command-badge--scale">Шкала</span>
                <strong>{result.label}</strong>
                <small>{result.description}</small>
              </button>
            ))}
          </div>
        )}

        {/* Quick commands shown when idle (no query) */}
        {!hasQuery && (
          <div className="workbench-command-group">
            <span className="workbench-command-group-label">Быстрый доступ</span>
            {QUICK_COMMANDS.map((command) => (
              <button
                key={command.id}
                type="button"
                className="workbench-command-card"
                onClick={() => onCommand(command)}
              >
                <span className="workbench-command-badge">{command.badge}</span>
                <strong>{command.label}</strong>
                <small>{command.description}</small>
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default CommandSearch;