import { useEffect, useState } from 'react';

type HistorySubtitle = 'Гинекология' | 'Акушерство';

interface HistoryDisease {
  id: string;
  name: string;
  icd: string;
  subtitle?: HistorySubtitle;
}

export interface HistoryItem extends HistoryDisease {
  timestamp: number;
}

const getLegacyId = (diseaseId: string) => diseaseId.split('__')[0];

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
      const legacyId = getLegacyId(disease.id);
      const filtered = prev.filter((item) => item.id !== disease.id && item.id !== legacyId);
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
