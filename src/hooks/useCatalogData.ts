import { useEffect, useMemo, useState } from 'react';
import { loadGynData } from '../data/loadGynData';
import { loadObsData } from '../data/loadObsData';
import {
  categorizeDiseases,
  filterDiseases,
  getCategoryCounts,
  getVisibleCategories,
} from '../utils/diseaseCatalog';
import type { CategoryId, Disease, TabType } from '../types';

interface UseCatalogDataOptions {
  activeTab: TabType;
  activeCategory: CategoryId;
  favoriteIds: Set<string>;
  historyIds: Set<string>;
  normalizedSearch: string;
  showFavorites: boolean;
  showHistory: boolean;
  onInvalidCategory: () => void;
}

function getSectionData(activeTab: TabType, gynecologyData: Disease[] | null, obstetricsData: Disease[] | null) {
  if (activeTab === 'gynecology') {
    return {
      currentData: gynecologyData ?? [],
      isDataLoading: gynecologyData === null,
    };
  }

  return {
    currentData: obstetricsData ?? [],
    isDataLoading: obstetricsData === null,
  };
}

export function useCatalogData({
  activeTab,
  activeCategory,
  favoriteIds,
  historyIds,
  normalizedSearch,
  showFavorites,
  showHistory,
  onInvalidCategory,
}: UseCatalogDataOptions) {
  const [gynecologyData, setGynecologyData] = useState<Disease[] | null>(null);
  const [obstetricsData, setObstetricsData] = useState<Disease[] | null>(null);

  const { currentData, isDataLoading } = getSectionData(activeTab, gynecologyData, obstetricsData);
  const visibleCategories = activeTab === 'home' ? (['all'] as CategoryId[]) : getVisibleCategories(activeTab);

  const categorizedData = useMemo(() => categorizeDiseases(currentData), [currentData]);
  const categoryCounts = useMemo(() => getCategoryCounts(categorizedData), [categorizedData]);

  const filteredData = useMemo(
    () =>
      filterDiseases({
        activeCategory,
        categorizedData,
        historyIds,
        favoriteIds,
        normalizedSearch,
        showFavorites,
        showHistory,
      }),
    [activeCategory, categorizedData, favoriteIds, historyIds, normalizedSearch, showFavorites, showHistory],
  );

  useEffect(() => {
    if (!visibleCategories.includes(activeCategory)) {
      onInvalidCategory();
    }
  }, [activeCategory, onInvalidCategory, visibleCategories]);

  useEffect(() => {
    let isCancelled = false;

    const loadData = async () => {
      if (activeTab === 'home') {
        return;
      }

      try {
        if (activeTab === 'gynecology') {
          if (gynecologyData !== null) {
            return;
          }

          console.log('[useCatalogData] Loading gynecology data...');
          const data = await loadGynData();
          console.log('[useCatalogData] Loaded gynecology:', data.length, 'items');
          if (!isCancelled) {
            setGynecologyData(data);
          }
          return;
        }

        if (obstetricsData !== null) {
          return;
        }

        console.log('[useCatalogData] Loading obstetrics data...');
        const data = await loadObsData();
        console.log('[useCatalogData] Loaded obstetrics:', data.length, 'items');
        if (!isCancelled) {
          setObstetricsData(data);
        }
      } catch (error) {
        console.error('[useCatalogData] Error loading data:', error);
      }
    };

    void loadData();

    return () => {
      isCancelled = true;
    };
  }, [activeTab, gynecologyData, obstetricsData]);

  return {
    isDataLoading,
    visibleCategories,
    categoryCounts,
    filteredData,
  };
}
