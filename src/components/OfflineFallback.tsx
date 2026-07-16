import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { emitToast } from './ToastSystem';

interface OfflineFallbackProps {
  onRetry?: () => void;
}

export const OfflineFallback: React.FC<OfflineFallbackProps> = ({ onRetry }) => {
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      emitToast('Соединение восстановлено', 'success', 2000);
    };
    const handleOffline = () => {
      setIsOnline(false);
      emitToast('Работа в оффлайн режиме', 'info', 3000);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <m.div
      className="offline-fallback"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="offline-content">
        <span className="offline-icon" role="img" aria-label="Велосипед">🚲</span>
        <div className="offline-text">
          <strong>Оффлайн режим</strong>
          <p>Данные из кэша. Последнее обновление: {new Date().toLocaleDateString('ru')}</p>
        </div>
        <button
          type="button"
          className="offline-retry-btn shimmer"
          onClick={onRetry}
          aria-label="Повторить попытку подключения"
        >
          Обновить
        </button>
      </div>
    </m.div>
  );
};

// Hook to check if app is running in standalone PWA mode
export const usePWAMode = () => {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    const isInPWA = window.matchMedia('(display-mode: standalone)').matches;
    setIsPWA(isInPWA);
  }, []);

  return isPWA;
};

// Hook to check cache status
export const useCacheStatus = () => {
  const [cacheInfo, setCacheInfo] = useState<{ count: number; size: string } | null>(null);

  useEffect(() => {
    if ('caches' in window) {
      caches.keys().then((keys) => {
        let count = 0;
        const promises: Promise<string | null>[] = [];
        keys.forEach((key) => {
          promises.push(
            caches.open(key).then((cache) => 
              cache.keys().then((reqs) => {
                count += reqs.length;
                return null;
              })
            )
          );
        });
        return Promise.all(promises).then(() => count);
      }).then((total) => {
        setCacheInfo({ count: total || 0, size: 'Cached' });
      }).catch(() => {
        setCacheInfo({ count: 0, size: 'Unavailable' });
      });
    }
  }, []);

  return cacheInfo;
};