import { useEffect, useState } from 'react';

type FavoriteId = string;

const getLegacyId = (diseaseId: string) => diseaseId.split('__')[0];

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteId[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('disease-favorites') || '[]') as FavoriteId[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('disease-favorites', JSON.stringify(favorites));
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
    if (favorites.includes(diseaseId)) {
      removeFavorite(diseaseId);
    } else {
      addFavorite(diseaseId);
    }
  };

  const isFavorite = (diseaseId: FavoriteId) => favorites.includes(diseaseId) || favorites.includes(getLegacyId(diseaseId));

  return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
}
