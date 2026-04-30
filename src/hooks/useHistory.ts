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

const getLegacyId = (diseaseId: string) => diseaseId.split('__')[0];

function isHistoryItem(value: unknown): value is HistoryItem {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const item = value as Partial<HistoryItem>;
  return typeof item.id === 'string' && typeof item.name === 'string' && typeof item.icd === 'string' && typeof item.timestamp === 'number';
}

export function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem('disease-history') || '[]');
      return Array.isArray(parsed) ? parsed.filter(isHistoryItem).slice(0, 10) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('disease-history', JSON.stringify(history));
    } catch {
      // Storage may be blocked in private or restricted browsing modes.
    }
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
