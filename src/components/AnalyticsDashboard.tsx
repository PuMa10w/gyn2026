import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from '../hooks/useHistory';
import { useFavorites } from '../hooks/useFavorites';

interface AnalyticsDashboardProps {
  className?: string;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  className = '',
}) => {
  const { history } = useHistory();
  const { favorites } = useFavorites();

  // Топ-5 просматриваемых болезней
  const topViewed = useMemo(() => {
    const counts: Record<string, { name: string; count: number; icd: string }> = {};
    
    history.forEach(item => {
      const key = item.id;
      if (!counts[key]) {
        counts[key] = { name: item.name, count: 0, icd: item.subtitle || '' };
      }
      counts[key].count++;
    });

    return Object.values(counts)
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [history]);

  // Статистика по категориям (гинекология vs акушерство)
  const categoryStats = useMemo(() => {
    const gynCount = history.filter(item => item.id.startsWith('N')).length;
    const obsCount = history.filter(item => item.id.startsWith('O')).length;
    const total = gynCount + obsCount || 1; // избегаем деления на 0

    return [
      { name: 'Гинекология (N)', count: gynCount, percentage: Math.round((gynCount / total) * 100) },
      { name: 'Акушерство (O)', count: obsCount, percentage: Math.round((obsCount / total) * 100) },
    ];
  }, [history]);

  // Статистика по сохраненным (избранное)
  const favoritesCount = favorites.length;
  const totalViews = history.length;

  return (
    <motion.div
      className={`analytics-dashboard ${className}`}
      style={{ width: '100%' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-gradient" style={{ marginTop: 0, marginBottom: '20px' }}>
        📊 Аналитика и статистика
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        {/* Карточка: Всего просмотров */}
        <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#14b8a6' }}>{totalViews}</div>
          <div style={{ fontSize: '14px', opacity: 0.7 }}>Всего просмотров</div>
        </div>

        {/* Карточка: Избранное */}
        <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b' }}>{favoritesCount}</div>
          <div style={{ fontSize: '14px', opacity: 0.7 }}>В избранном</div>
        </div>

        {/* Карточка: Уникальных кодов */}
        <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>
            {new Set(history.map(h => h.id)).size}
          </div>
          <div style={{ fontSize: '14px', opacity: 0.7 }}>Уникальных кодов</div>
        </div>
      </div>

      {/* Топ-5 просматриваемых */}
      {topViewed.length > 0 && (
        <div className="glass" style={{ padding: '20px', borderRadius: '16px', marginBottom: '24px' }}>
          <h4 style={{ marginTop: 0, marginBottom: '16px', color: '#64d2ff' }}>🏆 Топ-5 просматриваемых</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {topViewed.map((item, index) => (
              <motion.div
                key={item.icd}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 16px',
                  background: index === 0 ? 'rgba(100, 210, 255, 0.1)' : 'rgba(255,255,255,0.03)',
                  borderRadius: '8px',
                  border: index === 0 ? '1px solid rgba(100, 210, 255, 0.3)' : '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ 
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%', 
                    background: index === 0 ? '#14b8a6' : 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}>
                    {index + 1}
                  </span>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.name}</div>
                    <div style={{ fontSize: '12px', opacity: 0.6 }}>{item.icd}</div>
                  </div>
                </div>
                <div style={{ 
                  background: 'rgba(100, 210, 255, 0.2)', 
                  padding: '4px 12px', 
                  borderRadius: '12px',
                  fontSize: '12px',
                  color: '#64d2ff',
                }}>
                  {item.count} {item.count === 1 ? 'раз' : 'раз'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* График: Гинекология vs Акушерство (SVG Bar Chart) */}
      <div className="glass" style={{ padding: '20px', borderRadius: '16px' }}>
        <h4 style={{ marginTop: 0, marginBottom: '16px', color: '#64d2ff' }}>📈 Распределение по разделам</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {categoryStats.map((stat, index) => {
            const barColor = index === 0 ? '#14b8a6' : '#f59e0b';
            const bgColor = index === 0 ? 'rgba(20, 184, 166, 0.1)' : 'rgba(245, 158, 11, 0.1)';
            
            return (
              <div key={stat.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '14px' }}>{stat.name}</span>
                  <span style={{ fontSize: '14px', fontWeight: 'bold', color: barColor }}>
                    {stat.count} ({stat.percentage}%)
                  </span>
                </div>
                <div style={{ 
                  width: '100%', 
                  height: '12px', 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '6px',
                  overflow: 'hidden',
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${barColor}, ${barColor}88)`,
                      borderRadius: '6px',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {totalViews === 0 && (
          <p style={{ textAlign: 'center', opacity: 0.5, fontSize: '14px', marginTop: '12px' }}>
            Пока нет данных. Начните просматривать карточки болезней!
          </p>
        )}
      </div>
    </motion.div>
  );
};
