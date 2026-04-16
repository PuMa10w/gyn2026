import { useEffect, useState } from 'react';

type FavoriteId = string;

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
    if (!favorites.includes(diseaseId)) {
      setFavorites((prev) => [...prev, diseaseId]);
    }
  };

  const removeFavorite = (diseaseId: FavoriteId) => {
    setFavorites((prev) => prev.filter((id) => id !== diseaseId));
  };

  const toggleFavorite = (diseaseId: FavoriteId) => {
    if (favorites.includes(diseaseId)) {
      removeFavorite(diseaseId);
    } else {
      addFavorite(diseaseId);
    }
  };

  const isFavorite = (diseaseId: FavoriteId) => favorites.includes(diseaseId);

  return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
}
