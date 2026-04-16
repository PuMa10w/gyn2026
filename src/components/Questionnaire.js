import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { questionnaires } from '../data/questionnaires';

const Questionnaire = ({ onClose }) => {
  const [selectedQ, setSelectedQ] = useState(null);
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('questionnaire-history') || '[]');
    } catch { return []; }
  });

  const startQuestionnaire = (q) => {
    setSelectedQ(q);
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
  };

  const setAnswer = (qIndex, value) => {
    setAnswers(prev => ({ ...prev, [qIndex]: value }));
  };

  const calculateResult = () => {
    const answerArray = Object.keys(answers).map(k => answers[k]);
    const scoringResult = selectedQ.scoring(answerArray);
    setResult(scoringResult);

    const historyEntry = {
      id: selectedQ.id,
      name: selectedQ.name,
      fullName: selectedQ.fullName,
      date: new Date().toLocaleDateString('ru-RU'),
      score: answerArray.reduce((a, b) => a + b, 0),
      level: scoringResult.level,
      severity: scoringResult.severity,
      color: scoringResult.color
    };

    const updatedHistory = [historyEntry, ...history].slice(0, 20);
    setHistory(updatedHistory);
    localStorage.setItem('questionnaire-history', JSON.stringify(updatedHistory));
  };

  const goBack = () => {
    if (result) { setResult(null); return; }
    if (currentStep > 0) { setCurrentStep(prev => prev - 1); return; }
    setSelectedQ(null);
  };

  const goNext = () => {
    if (currentStep < selectedQ.questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  // History view
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
          className="modal-content questionnaire-modal"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-header">
            <div>
              <h2 className="modal-title">📋 Тест-опросники</h2>
              <div className="modal-icd">Международные скрининговые шкалы</div>
            </div>
            <button className="modal-close" onClick={onClose}>×</button>
          </div>

          <div className="q-grid">
            {questionnaires.map((q, idx) => (
              <motion.div
                key={q.id}
                className="q-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, boxShadow: '0 12px 35px rgba(224,90,120,0.15)' }}
                onClick={() => startQuestionnaire(q)}
              >
                <div className="q-icon">{q.icon}</div>
                <div className="q-name">{q.name}</div>
                <div className="q-full">{q.fullName}</div>
                <div className="q-cat">{q.category}</div>
                <div className="q-desc">{q.description}</div>
                <div className="q-count">{q.questions.length} вопросов</div>
              </motion.div>
            ))}
          </div>

          {history.length > 0 && (
            <div className="q-history">
              <h3>📊 История прохождений</h3>
              <div className="q-history-list">
                {history.map((h, i) => (
                  <div key={i} className="q-history-item" style={{ borderLeftColor: h.color }}>
                    <div className="q-h-name">{h.name} — {h.level}</div>
                    <div className="q-h-date">{h.date}</div>
                    <div className="q-h-score">Балл: {h.score}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    );
  }

  // Question view
  if (!result) {
    const progress = ((Object.keys(answers).length) / selectedQ.questions.length) * 100;
    return (
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content questionnaire-modal"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-header">
            <div>
              <h2 className="modal-title">{selectedQ.icon} {selectedQ.name}</h2>
              <div className="modal-icd">{selectedQ.fullName}</div>
            </div>
            <button className="modal-close" onClick={goBack}>×</button>
          </div>

          <div className="q-progress-bar">
            <div className="q-progress-fill" style={{ width: `${progress}%`, background: 'var(--gradient-rose)' }} />
          </div>

          <div className="q-steps">
            {selectedQ.questions.map((q, i) => (
              <div key={i} className={`q-step ${i === currentStep ? 'active' : ''} ${answers[i] !== undefined ? 'done' : ''}`}>
                {i + 1}
              </div>
            ))}
          </div>

          <div className="q-question">
            <h3>Вопрос {currentStep + 1} из {selectedQ.questions.length}</h3>
            <p>{selectedQ.questions[currentStep]}</p>
          </div>

          <div className="q-options">
            {selectedQ.options.map((opt, i) => (
              <motion.button
                key={i}
                className={`q-option ${answers[currentStep] === i ? 'selected' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setAnswer(currentStep, i)}
              >
                {opt}
              </motion.button>
            ))}
          </div>

          <div className="q-nav">
            <button className="q-btn q-btn-secondary" onClick={goBack} disabled={currentStep === 0}>
              ← Назад
            </button>
            <button
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

  // Result view
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content questionnaire-modal"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <h2 className="modal-title">📊 Результат</h2>
            <div className="modal-icd">{selectedQ.name} — {selectedQ.fullName}</div>
          </div>
          <button className="modal-close" onClick={() => { setSelectedQ(null); }}>×</button>
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
            <button className="q-btn q-btn-secondary" onClick={() => startQuestionnaire(selectedQ)}>
              🔄 Пройти заново
            </button>
            <button className="q-btn q-btn-primary" onClick={() => { setSelectedQ(null); }}>
              ← К списку тестов
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Questionnaire;
