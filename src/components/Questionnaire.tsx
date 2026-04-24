import React, { useEffect, useId, useState } from 'react';
import { motion } from 'framer-motion';
import { questionnaires } from '../data/questionnaires';
import { useModalBehavior } from '../hooks/useModalBehavior';
import type { QuestionnaireData, ScoringResult, QuestionnaireHistory } from '../types';

const QUESTIONNAIRE_HISTORY_KEY = 'questionnaire-history';

interface QuestionnaireProps {
  onClose: () => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ onClose }) => {
  const titleId = useId();
  const subtitleId = useId();
  const questionId = useId();
  const optionsId = useId();
  const { modalRef, closeButtonRef, handleModalKeyDown } = useModalBehavior(onClose);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedQ, setSelectedQ] = useState<QuestionnaireData | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<ScoringResult | null>(null);
  const [history, setHistory] = useState<QuestionnaireHistory[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(QUESTIONNAIRE_HISTORY_KEY) || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateViewportMode = () => setIsMobile(mediaQuery.matches);

    updateViewportMode();
    mediaQuery.addEventListener('change', updateViewportMode);

    return () => mediaQuery.removeEventListener('change', updateViewportMode);
  }, []);

  const startQuestionnaire = (q: QuestionnaireData): void => {
    setSelectedQ(q);
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
  };

  const setAnswer = (qIndex: number, value: number): void => {
    setAnswers((prev) => ({ ...prev, [qIndex]: value }));
  };

  const calculateResult = (): void => {
    if (!selectedQ) return;

    const answerArray = selectedQ.questions.map((_, index) => answers[index] ?? 0);
    const scoringResult: ScoringResult = selectedQ.scoring(answerArray);
    setResult(scoringResult);

    const historyEntry: QuestionnaireHistory = {
      id: selectedQ.id,
      name: selectedQ.name,
      fullName: selectedQ.fullName,
      date: new Date().toLocaleDateString('ru-RU'),
      score: answerArray.reduce((a, b) => a + b, 0),
      level: scoringResult.level,
      severity: scoringResult.severity,
      color: scoringResult.color,
    };

    const updatedHistory = [historyEntry, ...history].slice(0, 20);
    setHistory(updatedHistory);
    localStorage.setItem(QUESTIONNAIRE_HISTORY_KEY, JSON.stringify(updatedHistory));
  };

  const clearHistory = (): void => {
    setHistory([]);
    localStorage.removeItem(QUESTIONNAIRE_HISTORY_KEY);
  };

  const closeResults = (): void => {
    setResult(null);
    setSelectedQ(null);
    setAnswers({});
    setCurrentStep(0);
  };

  const goBack = (): void => {
    if (result) {
      setResult(null);
      return;
    }
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      return;
    }
    setSelectedQ(null);
  };

  const goNext = (): void => {
    if (!selectedQ) return;
    if (currentStep < selectedQ.questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateResult();
    }
  };

  const handleCardKeyDown = (event: React.KeyboardEvent, onActivate: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate();
    }
  };

  if (!selectedQ) {
    return (
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`modal-content questionnaire-modal ${isMobile ? 'mobile-sheet' : ''}`}
          initial={isMobile ? { y: '100%' } : { scale: 0.9, y: 50 }}
          animate={isMobile ? { y: 0 } : { scale: 1, y: 0 }}
          exit={isMobile ? { y: '100%' } : { scale: 0.9, y: 50 }}
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={handleModalKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={subtitleId}
        >
          <div className="modal-header">
            <div>
              <h2 className="modal-title" id={titleId}>📋 Тест-опросники</h2>
              <div className="modal-icd" id={subtitleId}>Международные скрининговые шкалы</div>
            </div>
            <button ref={closeButtonRef} type="button" className="modal-close" onClick={onClose} aria-label="Закрыть опросники">×</button>
          </div>

          <div className="q-grid">
            {questionnaires.map((q, idx) => (
              <motion.article
                key={q.id}
                className="q-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, boxShadow: '0 12px 35px rgba(224,90,120,0.15)' }}
                onClick={() => startQuestionnaire(q)}
                onKeyDown={(event) => handleCardKeyDown(event, () => startQuestionnaire(q))}
                role="button"
                tabIndex={0}
                aria-label={`Открыть опросник: ${q.name}`}
              >
                <div className="q-icon">{q.icon}</div>
                <div className="q-name">{q.name}</div>
                <div className="q-full">{q.fullName}</div>
                <div className="q-cat">{q.category}</div>
                <div className="q-desc">{q.description}</div>
                <div className="q-count">{q.questions.length} вопросов</div>
              </motion.article>
            ))}
          </div>

          <div className="q-history">
            <div className="q-history-header">
              <h3>📊 История прохождений</h3>
              {history.length > 0 && (
                <button type="button" className="q-btn q-btn-secondary" onClick={clearHistory}>
                  Очистить историю
                </button>
              )}
            </div>

            {history.length > 0 ? (
              <div className="q-history-list">
                {history.map((h, i) => (
                  <div key={i} className="q-history-item" style={{ borderLeftColor: h.color }}>
                    <div className="q-h-name">{h.name} — {h.level}</div>
                    <div className="q-h-date">{h.date}</div>
                    <div className="q-h-score">Балл: {h.score}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="q-history-empty">История пока пуста. После первого прохождения результаты появятся здесь.</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (!result) {
    const progress = (Object.keys(answers).length / selectedQ.questions.length) * 100;
    return (
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`modal-content questionnaire-modal ${isMobile ? 'mobile-sheet' : ''}`}
          initial={isMobile ? { y: '100%' } : { scale: 0.9, y: 50 }}
          animate={isMobile ? { y: 0 } : { scale: 1, y: 0 }}
          exit={isMobile ? { y: '100%' } : { scale: 0.9, y: 50 }}
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={handleModalKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={subtitleId}
        >
          <div className="modal-header">
            <div>
              <h2 className="modal-title" id={titleId}>{selectedQ.icon} {selectedQ.name}</h2>
              <div className="modal-icd" id={subtitleId}>{selectedQ.fullName}</div>
            </div>
            <button ref={closeButtonRef} type="button" className="modal-close" onClick={goBack} aria-label="Закрыть опросник">×</button>
          </div>

          <div className="q-progress-bar">
            <div
              className="q-progress-fill"
              style={{ width: `${progress}%`, background: 'var(--gradient-rose)' }}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
              aria-label="Прогресс прохождения опросника"
            />
          </div>

          <div className="q-steps" aria-label="Шаги опросника">
            {selectedQ.questions.map((_, i) => (
              <div
                key={i}
                className={`q-step ${i === currentStep ? 'active' : ''} ${answers[i] !== undefined ? 'done' : ''}`}
                aria-current={i === currentStep ? 'step' : undefined}
                aria-label={`Шаг ${i + 1}${answers[i] !== undefined ? ', заполнен' : ''}`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <div className="q-question">
            <h3 id={questionId}>Вопрос {currentStep + 1} из {selectedQ.questions.length}</h3>
            <p>{selectedQ.questions[currentStep]}</p>
          </div>

          <div className="q-options" id={optionsId} role="radiogroup" aria-labelledby={questionId}>
            {selectedQ.options.map((opt, i) => (
              <motion.button
                key={i}
                type="button"
                className={`q-option ${answers[currentStep] === i ? 'selected' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setAnswer(currentStep, i)}
                role="radio"
                aria-checked={answers[currentStep] === i}
              >
                {opt}
              </motion.button>
            ))}
          </div>

          <div className="q-nav">
            <button type="button" className="q-btn q-btn-secondary" onClick={goBack} disabled={currentStep === 0}>
              ← Назад
            </button>
            <button
              type="button"
              className="q-btn q-btn-primary"
              onClick={goNext}
              disabled={answers[currentStep] === undefined}
            >
              {currentStep === selectedQ.questions.length - 1 ? 'Получить результат →' : 'Далее →'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
        <motion.div
          className={`modal-content questionnaire-modal ${isMobile ? 'mobile-sheet' : ''}`}
          initial={isMobile ? { y: '100%' } : { scale: 0.9, y: 50 }}
          animate={isMobile ? { y: 0 } : { scale: 1, y: 0 }}
          exit={isMobile ? { y: '100%' } : { scale: 0.9, y: 50 }}
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={handleModalKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={subtitleId}
        >
          <div className="modal-header">
            <div>
              <h2 className="modal-title" id={titleId}>📊 Результат</h2>
              <div className="modal-icd" id={subtitleId}>{selectedQ.name} — {selectedQ.fullName}</div>
            </div>
            <button ref={closeButtonRef} type="button" className="modal-close" onClick={closeResults} aria-label="Закрыть результат">×</button>
          </div>

          <div className="q-result">
            <div className="q-result-badge" style={{ background: result.color }}>
              <div className="q-result-level">{result.level}</div>
              <div className="q-result-score">
                Балл: {Object.values(answers).reduce((a, b) => a + b, 0)} из {selectedQ.questions.length * (selectedQ.options.length - 1)}
              </div>
            </div>

            <div className="q-severity-bar">
              {['normal', 'mild', 'moderate', 'severe', 'critical'].map((sev, i) => {
                const labels = ['Норма', 'Лёгкая', 'Умеренная', 'Тяжёлая', 'Критическая'];
                const colors = ['#27ae60', '#f39c12', '#e67e22', '#e74c3c', '#c0392b'];
                return (
                  <div
                    key={sev}
                    className={`q-seg ${result.severity === sev ? 'active' : ''}`}
                    style={{ background: result.severity === sev ? colors[i] : '#eee' }}
                  >
                    {labels[i]}
                  </div>
                );
              })}
            </div>

            <div className="q-recommendation">
              <h4>💡 Рекомендация</h4>
              <p>{result.recommendation}</p>
            </div>

            <div className="q-answers-summary">
              <h4>Ваши ответы</h4>
              {selectedQ.questions.map((q, i) => (
                <div key={i} className="q-answer-row">
                  <span className="q-a-idx">{i + 1}</span>
                  <span className="q-a-text">{q}</span>
                  <span className="q-a-val" style={{ color: result.color }}>{selectedQ.options[answers[i]]}</span>
                </div>
              ))}
            </div>

            <div className="q-nav">
              <button type="button" className="q-btn q-btn-secondary" onClick={() => startQuestionnaire(selectedQ)}>
                🔄 Пройти заново
              </button>
              <button type="button" className="q-btn q-btn-primary" onClick={closeResults}>
                ← К списку тестов
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
  );
};

export default Questionnaire;
