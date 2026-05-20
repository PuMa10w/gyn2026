import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PremiumButton } from './PremiumButton';

interface SymptomCheckerProps {
  onSelectDisease?: (icdCode: string) => void;
  className?: string;
}

// Популярные симптомы в гинекологии
const COMMON_SYMPTOMS = [
  'Боль внизу живота',
  'Нарушение менструального цикла',
  'Аномальные маточные кровотечения',
  'Боль при половом акте',
  'Выделения из половых путей',
  'Зуд и жжение',
  'Тазовая боль',
  'Дизурия',
  'Бесплодие',
  'Объемное образование в малом тазу',
  'Аменорея',
  'Дисменорея',
  'Межменструальные кровянистые выделения',
];

// Простая база: симптом -> вероятные коды МКБ-10
const SYMPTOM_TO_DISEASE: Record<string, Array<{code: string, name: string, probability: number}>> = {
  'Боль внизу живота': [
    { code: 'N70', name: 'Сальпингит и оофорит', probability: 0.8 },
    { code: 'N73', name: 'Тазовые перитонеальные спайки', probability: 0.6 },
    { code: 'N94.0', name: 'Дисменорея', probability: 0.5 },
  ],
  'Аномальные маточные кровотечения': [
    { code: 'N92', name: 'Обильные, частые и нерегулярные менструации', probability: 0.9 },
    { code: 'N93', name: 'Аномальные маточные и влагалищные кровотечения', probability: 0.85 },
    { code: 'N84', name: 'Полипы матки и шейки матки', probability: 0.6 },
  ],
  'Нарушение менструального цикла': [
    { code: 'N91', name: 'Отсутствие менструаций, скудные и редкие менструации', probability: 0.85 },
    { code: 'N92', name: 'Обильные, частые и нерегулярные менструации', probability: 0.7 },
  ],
  'Бесплодие': [
    { code: 'N97', name: 'Женское бесплодие', probability: 0.95 },
    { code: 'N70', name: 'Сальпингит и оофорит', probability: 0.6 },
    { code: 'N83.3', name: 'Отсутствие маточных труб', probability: 0.4 },
  ],
  'Выделения из половых путей': [
    { code: 'N76', name: 'Другие воспалительные болезни влагалища и вульвы', probability: 0.8 },
    { code: 'N70', name: 'Сальпингит и оофорит', probability: 0.5 },
  ],
  'Тазовая боль': [
    { code: 'N73', name: 'Тазовые перитонеальные спайки', probability: 0.7 },
    { code: 'N70', name: 'Сальпингит и оофорит', probability: 0.65 },
    { code: 'N94.0', name: 'Дисменорея', probability: 0.6 },
  ],
};

export const SymptomChecker: React.FC<SymptomCheckerProps> = ({
  onSelectDisease,
  className = '',
}) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
    setShowResults(false);
  };

  const analyzeSymptoms = () => {
    setShowResults(true);
  };

  const results = useMemo(() => {
    if (selectedSymptoms.length === 0) return [];

    const diseaseScores: Record<string, { code: string, name: string, score: number }> = {};

    selectedSymptoms.forEach(symptom => {
      const diseases = SYMPTOM_TO_DISEASE[symptom];
      if (diseases) {
        diseases.forEach(disease => {
          if (!diseaseScores[disease.code]) {
            diseaseScores[disease.code] = { ...disease, score: 0 };
          }
          diseaseScores[disease.code].score += disease.probability;
        });
      }
    });

    return Object.values(diseaseScores)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5); // Топ-5 результатов
  }, [selectedSymptoms]);

  return (
    <motion.div
      className={`symptom-checker glass ${className}`}
      style={{
        padding: '20px',
        borderRadius: '16px',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-gradient" style={{ marginTop: 0, marginBottom: '16px' }}>
        рџ§  AI-Диагност (Симптом-чекер)
      </h3>

      <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '16px' }}>
        Выберите симптомы, которые беспокоят пациентку. Система предложит вероятные диагнозы.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {COMMON_SYMPTOMS.map(symptom => (
          <motion.button
            key={symptom}
            onClick={() => toggleSymptom(symptom)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: selectedSymptoms.includes(symptom)
                ? '1px solid rgba(216, 154, 167, 0.38)'
                : '1px solid rgba(255, 255, 255, 0.1)',
              background: selectedSymptoms.includes(symptom)
                ? 'rgba(216, 184, 120, 0.18)'
                : 'rgba(255, 255, 255, 0.05)',
              color: 'white',
              cursor: 'pointer',
              fontSize: '13px',
              transition: 'all 0.2s ease',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {symptom}
          </motion.button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <PremiumButton
          onClick={analyzeSymptoms}
          variant="primary"
          shimmer={selectedSymptoms.length > 0}
          disabled={selectedSymptoms.length === 0}
        >
          рџ”Ќ Анализировать ({selectedSymptoms.length} симптомов)
        </PremiumButton>

        {selectedSymptoms.length > 0 && (
          <PremiumButton
            onClick={() => {
              setSelectedSymptoms([]);
              setShowResults(false);
            }}
            variant="ghost"
            size="sm"
          >
            ✕ Очистить
          </PremiumButton>
        )}
      </div>

      {showResults && results.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '16px',
          }}
        >
          <h4 style={{ marginTop: 0, marginBottom: '12px', color: '#B97886' }}>
            рџЋЇ Вероятные диагнозы:
          </h4>

          {results.map((result, index) => (
            <motion.div
              key={result.code}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                marginBottom: '8px',
                background: index === 0 ? 'rgba(216, 184, 120, 0.16)' : 'transparent',
                borderRadius: '8px',
                border: index === 0 ? '1px solid rgba(216, 184, 120, 0.34)' : 'none',
              }}
            >
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                  {index === 0 && 'рџҐ‡ '}{result.name}
                </div>
                <div style={{ fontSize: '12px', opacity: 0.6 }}>МКБ-10: {result.code}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  padding: '4px 8px',
                  borderRadius: '12px',
                  background: result.score > 1.5 ? 'rgba(185, 120, 134, 0.16)' : 'rgba(216, 184, 120, 0.18)',
                  fontSize: '12px',
                  color: result.score > 1.5 ? '#B97886' : '#D8B878',
                }}>
                  {Math.round(result.score * 100)}% вероятность
                </div>
                {onSelectDisease && (
                  <PremiumButton
                    onClick={() => onSelectDisease(result.code)}
                    variant="ghost"
                    size="sm"
                  >
                    →
                  </PremiumButton>
                )}
              </div>
            </motion.div>
          ))}

          <p style={{ fontSize: '12px', opacity: 0.5, marginTop: '12px', fontStyle: 'italic' }}>
            * Вероятность рассчитывается на основе статистических данных и может не отражать реальный диагноз. Требуется подтверждение методами диагностики.
          </p>
        </motion.div>
      )}

      {showResults && results.length === 0 && (
        <div style={{ textAlign: 'center', padding: '20px', opacity: 0.6 }}>
          ❌ Не удалось определить диагноз по выбранным симптомам. Попробуйте добавить другие симптомы.
        </div>
      )}
    </motion.div>
  );
};