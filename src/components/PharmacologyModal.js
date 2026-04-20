import React, { useEffect, useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { commonRegimens, medications } from '../data/pharmacology';

const PharmacologyModal = ({ onClose }) => {
  const titleId = useId();
  const [activeTab, setActiveTab] = useState('medications');
  const [selectedMed, setSelectedMed] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMeds = medications.filter((med) =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleCardKeyDown = (event, onActivate) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate();
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content pharmacology-modal"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button type="button" className="modal-close" onClick={onClose} aria-label="Закрыть фармакологию">
            ✕
          </button>

          <div className="modal-header">
            <div>
              <h2 className="modal-title" id={titleId}>Фармакология</h2>
              <div className="modal-icd">Препараты, взаимодействия и готовые схемы</div>
            </div>
          </div>

          <div className="pharma-tabs">
            <button
              type="button"
              className={`pharma-tab ${activeTab === 'medications' ? 'active' : ''}`}
              onClick={() => setActiveTab('medications')}
            >
              Препараты
            </button>
            <button
              type="button"
              className={`pharma-tab ${activeTab === 'interactions' ? 'active' : ''}`}
              onClick={() => setActiveTab('interactions')}
            >
              Взаимодействия
            </button>
            <button
              type="button"
              className={`pharma-tab ${activeTab === 'regimens' ? 'active' : ''}`}
              onClick={() => setActiveTab('regimens')}
            >
              Схемы
            </button>
          </div>

          {activeTab === 'medications' && (
            <div className="pharma-content">
              <input
                type="text"
                className="search-input"
                placeholder="Поиск препарата..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />

              <div className="medications-grid">
                {filteredMeds.map((med) => (
                  <motion.article
                    key={med.id}
                    className="medication-card"
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setSelectedMed(selectedMed?.id === med.id ? null : med)}
                    onKeyDown={(event) =>
                      handleCardKeyDown(event, () => setSelectedMed(selectedMed?.id === med.id ? null : med))
                    }
                    role="button"
                    tabIndex={0}
                    aria-expanded={selectedMed?.id === med.id}
                    aria-label={`Открыть детали препарата: ${med.name}`}
                  >
                    <div className="med-name">{med.name}</div>
                    <div className="med-category">{med.category}</div>

                    {selectedMed?.id === med.id && (
                      <motion.div
                        id={`med-details-${med.id}`}
                        className="med-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                      >
                        <p>
                          <strong>ENG:</strong> {med.nameEn}
                        </p>
                        <p>
                          <strong>Формы:</strong> {med.forms.join(', ')}
                        </p>
                        <p>
                          <strong>Дозировки:</strong>
                        </p>
                        <ul>
                          {Object.entries(med.dosage).map(([key, value]) => (
                            <li key={key}>
                              {key}: {value}
                            </li>
                          ))}
                        </ul>
                        <p>
                          <strong>Показания:</strong>
                        </p>
                        <ul>
                          {med.indications.map((indication, index) => (
                            <li key={index}>{indication}</li>
                          ))}
                        </ul>
                        <p className="contraindications">
                          <strong>Противопоказания:</strong>
                        </p>
                        <ul>
                          {med.contraindications.map((entry, index) => (
                            <li key={index}>{entry}</li>
                          ))}
                        </ul>
                        <p className="side-effects">
                          <strong>Побочные эффекты:</strong>
                        </p>
                        <ul>
                          {med.sideEffects.map((entry, index) => (
                            <li key={index}>{entry}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'interactions' && (
            <div className="pharma-content">
              <div className="interactions-legend">
                <span className="legend-item high">● Высокий риск</span>
                <span className="legend-item medium">● Средний риск</span>
                <span className="legend-item low">● Низкий риск</span>
              </div>
              <p className="interactions-note">
                Блок взаимодействий пока показан как справочный раздел. При необходимости я могу
                следующим проходом сделать полноценную проверку сочетаний прямо в интерфейсе.
              </p>
            </div>
          )}

          {activeTab === 'regimens' && (
            <div className="pharma-content">
              <div className="regimens-list">
                {commonRegimens.map((regimen) => (
                  <motion.div key={regimen.id} className="regimen-card" whileHover={{ scale: 1.01 }}>
                    <div className="regimen-card-header">
                      <h3 className="regimen-title">{regimen.name}</h3>
                      <div className="regimen-steps-count">{regimen.steps.length} шага</div>
                    </div>

                    <table className="regimen-table">
                      <thead>
                        <tr>
                          <th>День</th>
                          <th>Препарат</th>
                          <th>Доза / заметки</th>
                        </tr>
                      </thead>
                      <tbody>
                        {regimen.steps.map((step, index) => (
                          <tr key={index}>
                            <td data-label="День">{step.day}</td>
                            <td data-label="Препарат">{step.drug}</td>
                            <td data-label="Доза / заметки">{step.dose || step.note || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PharmacologyModal;
