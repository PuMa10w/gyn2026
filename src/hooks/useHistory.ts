import { useEffect, useState } from 'react';

interface HistoryDisease {
  id: string;
  name: string;
  icd: string;
  subtitle?: 'Гинекология' | 'Акушерство';
}

export interface HistoryItem extends HistoryDisease {
  timestamp: number;
}

export function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('disease-history') || '[]') as HistoryItem[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('disease-history', JSON.stringify(history));
  }, [history]);

  const addToHistory = (disease: HistoryDisease) => {
    setHistory((prev) => {
      const filtered = prev.filter((item) => item.id !== disease.id);
      const updated = [
        { id: disease.id, name: disease.name, icd: disease.icd, subtitle: disease.subtitle, timestamp: Date.now() },
        ...filtered,
      ].slice(0, 10);
      return updated;
    });
  };

  const clearHistory = () => setHistory([]);

  return { history, addToHistory, clearHistory };
}
