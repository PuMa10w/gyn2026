import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PremiumButton } from './PremiumButton';

interface VersionInfo {
  version: string;
  releaseDate: string;
  changelog: string[];
}

interface VersionCheckerProps {
  currentVersion: string;
  className?: string;
}

const LATEST_VERSION: VersionInfo = {
  version: '2.1.0',
  releaseDate: '2026-05-08',
  changelog: [
    'Обновлена клиническая структура карточек.',
    'Улучшены мобильные модальные окна для iPhone.',
    'Добавлены премиальные состояния PWA и проверка кэша.',
    'Уточнены разделы фармакологии, шкал и маршрутов наблюдения.',
  ],
};

type UpdateState = 'idle' | 'checking' | 'available' | 'updating' | 'updated' | 'error';

const compareVersions = (v1: string, v2: string): number => {
  const parts1 = v1.split('.').map(Number);
  const parts2 = v2.split('.').map(Number);

  for (let i = 0; i < 3; i += 1) {
    if ((parts1[i] || 0) < (parts2[i] || 0)) return -1;
    if ((parts1[i] || 0) > (parts2[i] || 0)) return 1;
  }

  return 0;
};

export const VersionChecker: React.FC<VersionCheckerProps> = ({
  currentVersion,
  className = '',
}) => {
  const [latestVersion, setLatestVersion] = useState<VersionInfo | null>(null);
  const [showChangelog, setShowChangelog] = useState(false);
  const [updateState, setUpdateState] = useState<UpdateState>('idle');
  const [lastSyncAt, setLastSyncAt] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    return window.localStorage.getItem('gyn-db-last-sync');
  });

  const isChecking = updateState === 'checking';
  const isUpdating = updateState === 'updating';
  const isUpdateAvailable = updateState === 'available';

  const checkForUpdates = async () => {
    setUpdateState('checking');
    await new Promise((resolve) => window.setTimeout(resolve, 450));

    setLatestVersion(LATEST_VERSION);
    setUpdateState(compareVersions(currentVersion, LATEST_VERSION.version) < 0 ? 'available' : 'updated');
  };

  useEffect(() => {
    void checkForUpdates();
    const interval = window.setInterval(() => void checkForUpdates(), 24 * 60 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, [currentVersion]);

  const refreshAppCache = async () => {
    setUpdateState('updating');

    try {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((registration) => registration.update()));
      }

      if ('caches' in window) {
        const cacheNames = await window.caches.keys();
        await Promise.all(
          cacheNames
            .filter((cacheName) => /gyn|workbox|precache|vite|pwa/i.test(cacheName))
            .map((cacheName) => window.caches.delete(cacheName)),
        );
      }

      const syncedAt = new Date().toISOString();
      window.localStorage.setItem('gyn-db-last-sync', syncedAt);
      setLastSyncAt(syncedAt);
      setShowChangelog(false);
      setUpdateState('updated');
    } catch (error) {
      console.error('[VersionChecker] Не удалось обновить PWA-кэш:', error);
      setUpdateState('error');
    }
  };

  const lastSyncLabel = lastSyncAt
    ? new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(lastSyncAt))
    : 'ещё не выполнялась';

  return (
    <motion.section
      className={`version-checker glass ${className}`}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
      aria-live="polite"
    >
      <div className="version-checker-head">
        <div>
          <span className="version-kicker">PWA-контур</span>
          <h4>Система обновлений</h4>
        </div>

        <PremiumButton
          onClick={checkForUpdates}
          variant="ghost"
          size="sm"
          shimmer={false}
          disabled={isChecking || isUpdating}
        >
          {isChecking ? 'Проверяем...' : 'Проверить'}
        </PremiumButton>
      </div>

      <div className="version-meta-grid">
        <div>
          <span>Текущая версия</span>
          <strong>{currentVersion}</strong>
        </div>
        <div>
          <span>Последняя синхронизация</span>
          <strong>{lastSyncLabel}</strong>
        </div>
      </div>

      {isUpdateAvailable && latestVersion && (
        <motion.div
          className="version-update-card"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="version-update-title">
            <strong>Доступно обновление базы</strong>
            <span>Версия {latestVersion.version}</span>
          </div>

          <p>Релиз от {latestVersion.releaseDate}. Обновление перезапрашивает service worker и очищает PWA-кэш, чтобы iPhone получил свежую сборку.</p>

          <div className="version-actions">
            <PremiumButton onClick={() => setShowChangelog((value) => !value)} variant="secondary" size="sm" shimmer={false}>
              {showChangelog ? 'Скрыть детали' : 'Что изменилось'}
            </PremiumButton>
            <PremiumButton onClick={refreshAppCache} variant="primary" size="sm" shimmer={!isUpdating} disabled={isUpdating}>
              {isUpdating ? 'Обновляем...' : 'Обновить базу'}
            </PremiumButton>
          </div>

          {showChangelog && (
            <motion.ul
              className="version-changelog"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              {latestVersion.changelog.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      )}

      {updateState === 'updated' && latestVersion && (
        <div className="version-ready-state">
          База актуальна. При установленном PWA iPhone получит свежий кэш при следующем открытии приложения.
        </div>
      )}

      {updateState === 'error' && (
        <div className="version-error-state">
          Не удалось обновить кэш автоматически. Проверьте сеть и нажмите «Проверить» ещё раз.
        </div>
      )}
    </motion.section>
  );
};
