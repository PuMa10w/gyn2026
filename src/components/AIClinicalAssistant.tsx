import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PremiumButton } from './PremiumButton';

interface AIClinicalAssistantProps {
  diseaseName: string;
  symptoms: string[];
  treatment: Array<{ step: string; detail: string }>;
  onGenerate?: (text: string) => void;
}

export const AIClinicalAssistant: React.FC<AIClinicalAssistantProps> = ({
  diseaseName,
  symptoms,
  treatment,
  onGenerate,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const [activeTemplate, setActiveTemplate] = useState<string>('');

  const templates = {
    'clinical-pearls': `Клинические акценты по ${diseaseName}:
1. Всегда оценивайте ${symptoms.slice(0, 2).join(' и ')} как приоритетные симптомы
2. При выявлении показаний немедленно переходите к ${treatment[0]?.step || 'лечению'}
3. Важно дифференцировать с похожими состояниями`,

    'patient-instructions': `Памятка пациенту при ${diseaseName}:
• При появлении ${symptoms[0]} обратитесь к врачу
• Соблюдайте предписанную схему: ${treatment[0]?.detail || 'лечение'}
• Не прекращайте прием препаратов без консультации
• Плановый осмотр через 2-4 недели`,

    'discharge-summary': `Выписной эпикриз по ${diseaseName}:
Диагноз: ${diseaseName}
Жалобы: ${symptoms.join(', ')}
Проведенное лечение: ${treatment.map(t => t.step).join(', ')}
Рекомендации: Наблюдение у гинеколога, контроль эффективности терапии`,

    'quick-consult': `Краткая консультация по ${diseaseName}:
Ключевые симптомы: ${symptoms.slice(0, 3).join(', ')}
Первая линия: ${treatment[0]?.step || 'диагностика и лечение'}
Важно: При отсутствии эффекта в течение 48-72 часов - эскалация тактики`,
  };

  const handleGenerate = (templateKey: string) => {
    setIsGenerating(true);
    setActiveTemplate(templateKey);
    
    // Симуляция "AI" генерации с задержкой
    setTimeout(() => {
      const text = templates[templateKey as keyof typeof templates] || 'Выберите шаблон для генерации';
      setGeneratedText(text);
      setIsGenerating(false);
      if (onGenerate) {
        onGenerate(text);
      }
    }, 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
  };

  return (
    <motion.div
      className="ai-assistant glass"
      style={{
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        padding: '20px',
        borderRadius: '16px',
        marginTop: '20px',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h3 className="text-gradient" style={{ marginBottom: '16px' }}>🤖 AI Clinical Assistant</h3>
      
      <div className="ai-templates" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
        {Object.keys(templates).map((key) => (
          <PremiumButton
            key={key}
            onClick={() => handleGenerate(key)}
            variant={activeTemplate === key ? 'primary' : 'secondary'}
            size="sm"
            shimmer={activeTemplate === key}
            disabled={isGenerating}
          >
            {key === 'clinical-pearls' && '💡 Клинические акценты'}
            {key === 'patient-instructions' && '📋 Памятка пациенту'}
            {key === 'discharge-summary' && '📄 Выписной эпикриз'}
            {key === 'quick-consult' && '⚡ Краткая консультация'}
          </PremiumButton>
        ))}
      </div>

      {isGenerating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: 'center', padding: '20px' }}
        >
          <div className="loading-spinner" style={{ margin: '0 auto 12px' }} />
          <p>AI генерирует текст...</p>
        </motion.div>
      )}

      {generatedText && !isGenerating && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            background: 'rgba(255,255,255,0.05)',
            padding: '16px',
            borderRadius: '12px',
            marginTop: '12px',
            whiteSpace: 'pre-wrap',
          }}
        >
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>{generatedText}</pre>
          <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
            <PremiumButton
              onClick={handleCopy}
              variant="ghost"
              size="sm"
              shimmer={false}
            >
              📋 Копировать
            </PremiumButton>
          </div>
        </motion.div>
      )}

      <p style={{ fontSize: '12px', opacity: 0.6, marginTop: '12px' }}>
        * Генерация на основе шаблонов клинических данных. Для полноценной AI-генерации требуется подключение к LLM API.
      </p>
    </motion.div>
  );
};