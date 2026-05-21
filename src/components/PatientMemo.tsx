import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PremiumButton } from './PremiumButton';
import type { Disease } from '../types';

interface PatientMemoProps {
  disease: Disease | null;
  className?: string;
}

export const PatientMemo: React.FC<PatientMemoProps> = ({
  disease,
  className = '',
}) => {
  const [isGenerating, setIsGenerating] = useState(false);

  if (!disease) {
    return (
      <div className={`patient-memo glass ${className}`} style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
        <p style={{ opacity: 0.6 }}>Выберите заболевание, чтобы сформировать памятку для пациента</p>
      </div>
    );
  }

  const treatmentSteps = [
    ...(disease.treatment.firstLine ?? disease.treatment.conservative ?? []).map((detail) => ({ step: 'Первая линия', detail })),
    ...(disease.treatment.secondLine ?? []).map((detail) => ({ step: 'Вторая линия', detail })),
    ...(disease.treatment.proceduralOrSurgical ?? disease.treatment.surgical ?? []).map((detail) => ({ step: 'Процедуры/хирургия', detail })),
    ...(disease.treatment.inpatientManagement ?? []).map((detail) => ({ step: 'Стационар', detail })),
  ];

  const handlePrint = () => {
    setIsGenerating(true);
    
    // Создаем новое окно с печатной версией
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Разрешите всплывающие окна для печати');
      setIsGenerating(false);
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Памятка пациента: ${disease.name}</title>
        <meta charset="utf-8">
        <style>
          @media print {
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px;
            background: #f9f9f9;
          }
          .header { 
            background: linear-gradient(135deg, #D89AA7, #B97886); 
            color: white; 
            padding: 30px; 
            border-radius: 12px; 
            margin-bottom: 30px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          h1 { margin: 0 0 10px 0; font-size: 24px; }
          .icd { opacity: 0.9; font-size: 14px; }
          .section { 
            background: white; 
            padding: 20px; 
            border-radius: 8px; 
            margin-bottom: 20px; 
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            border-left: 4px solid #D89AA7;
          }
          h2 { color: #D89AA7; margin-top: 0; font-size: 18px; }
          .card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
          .card { 
            background: #f0f9f9; 
            padding: 15px; 
            border-radius: 8px; 
            border: 1px solid #e0f2f1;
          }
          .card h3 { margin: 0 0 8px 0; font-size: 14px; color: #0d9488; }
          ul { padding-left: 20px; }
          li { margin-bottom: 8px; }
          .warning { 
            background: #fef3c7; 
            border-left: 4px solid #D8B878; 
            padding: 15px; 
            border-radius: 8px;
            margin-top: 20px;
          }
          .footer { 
            text-align: center; 
            margin-top: 40px; 
            padding-top: 20px; 
            border-top: 1px solid #eee; 
            font-size: 12px; 
            opacity: 0.6;
          }
          @media print {
            .no-print { display: none; }
            body { background: white; }
            .section { box-shadow: none; border: 1px solid #ddd; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Памятка пациента</h1>
          <div class="icd">МКБ-10: ${disease.subtitle || 'N/A'} • ${disease.name}</div>
        </div>

        <div class="section">
          <h2>Что это такое?</h2>
          <p>${disease.definition || 'Информация отсутствует'}</p>
        </div>

        ${disease.epidemiology ? `
        <div class="section">
          <h2>Эпидемиология</h2>
          <p>${disease.epidemiology}</p>
        </div>
        ` : ''}

        <div class="section">
          <h2>Основные симптомы</h2>
          <ul>
            ${disease.symptoms.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>

        ${treatmentSteps.length > 0 ? `
        <div class="section">
          <h2>Основные методы лечения</h2>
          <div class="card-grid">
            ${treatmentSteps.slice(0, 4).map(t => `
              <div class="card">
                <h3>${t.step}</h3>
                <p>${t.detail}</p>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

        ${disease.patientCounseling && disease.patientCounseling.length > 0 ? `
        <div class="section">
          <h2>Что важно знать</h2>
          <ul>
            ${disease.patientCounseling.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        ` : ''}

        <div class="warning">
          <strong>Важно:</strong> Данная памятка носит информационный характер. 
          Не занимайтесь самолечением — строго следуйте назначениям вашего лечащего врача!
        </div>

        <div class="footer">
          Сгенерировано в медицинском справочнике gyn • ${new Date().toLocaleDateString('ru-RU')}
        </div>

        <div class="no-print" style="text-align: center; margin-top: 30px;">
          <button onclick="window.print()" style="
            background: linear-gradient(135deg, #D89AA7, #B97886);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            margin-right: 10px;
          ">Распечатать / Сохранить как PDF</button>
          <button onclick="window.close()" style="
            background: #f3f4f6;
            color: #374151;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
          ">Закрыть</button>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Автоматически открываем диалог печати через секунду
    setTimeout(() => {
      printWindow.print();
      setIsGenerating(false);
    }, 1000);
  };

  const handleCopyText = () => {
    const text = `
ПАМЯТКА ПАЦИЕНТА
${disease.name} (${disease.subtitle})

${disease.definition}

Симптомы:
${disease.symptoms.join(', ')}

Лечение:
${treatmentSteps.map(t => `${t.step}: ${t.detail}`).join('\n') || 'Нет данных'}
    `.trim();

    navigator.clipboard.writeText(text);
  };

  return (
    <motion.div
      className={`patient-memo glass ${className}`}
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
        Умный экспорт (Памятка пациента)
      </h3>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
        <PremiumButton
          onClick={handlePrint}
          variant="primary"
          shimmer={true}
          disabled={isGenerating}
        >
          {isGenerating ? '⏳ Генерирую...' : 'Печать / PDF'}
        </PremiumButton>

        <PremiumButton
          onClick={handleCopyText}
          variant="secondary"
          size="sm"
        >
          Копировать текст
        </PremiumButton>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.05)',
        padding: '16px',
        borderRadius: '12px',
        fontSize: '14px',
      }}>
        <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>Памятка включает:</p>
        <ul style={{ margin: 0, paddingLeft: '20px', opacity: 0.8 }}>
          <li>Определение заболевания</li>
          <li>Эпидемиология</li>
          <li>Список симптомов</li>
          <li>Методы лечения</li>
          <li>Рекомендации для пациента</li>
        </ul>
      </div>

      <p style={{ fontSize: '12px', opacity: 0.5, marginTop: '12px', fontStyle: 'italic' }}>
        * При нажатии "Печать" откроется новое окно с красивым оформлением. 
        Вы сможете сохранить как PDF или распечатать.
      </p>
    </motion.div>
  );
};
