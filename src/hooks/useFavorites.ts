import { useEffect, useState } from 'react';

type FavoriteId = string;

const getLegacyId = (diseaseId: string) => diseaseId.split('__')[0];

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteId[]>(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem('disease-favorites') || '[]');
      return Array.isArray(parsed) ? parsed.filter((id): id is FavoriteId => typeof id === 'string') : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('disease-favorites', JSON.stringify(favorites));
    } catch {
      // Storage may be blocked in private or restricted browsing modes.
    }
  }, [favorites]);

  const addFavorite = (diseaseId: FavoriteId) => {
    if (!favorites.includes(diseaseId) && !favorites.includes(getLegacyId(diseaseId))) {
      setFavorites((prev) => [...prev, diseaseId]);
    }
  };

  const removeFavorite = (diseaseId: FavoriteId) => {
    const legacyId = getLegacyId(diseaseId);
    setFavorites((prev) => prev.filter((id) => id !== diseaseId && id !== legacyId));
  };

  const toggleFavorite = (diseaseId: FavoriteId) => {
    if (isFavorite(diseaseId)) {
      removeFavorite(diseaseId);
    } else {
      addFavorite(diseaseId);
    }
  };

  const isFavorite = (diseaseId: FavoriteId) => favorites.includes(diseaseId) || favorites.includes(getLegacyId(diseaseId));

  return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
}
