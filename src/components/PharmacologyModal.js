import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { commonRegimens, medications } from '../data/pharmacology';

const PharmacologyModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('medications');
  const [selectedMed, setSelectedMed] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMeds = medications.filter((med) =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
        >
          <button className="modal-close" onClick={onClose} aria-label="Закрыть фармакологию">
            ✕
          </button>

          <div className="modal-header">
            <div>
              <h2 className="modal-title">Фармакология</h2>
              <div className="modal-icd">Препараты, взаимодействия и готовые схемы</div>
            </div>
          </div>

          <div className="pharma-tabs">
            <button
              className={`pharma-tab ${activeTab === 'medications' ? 'active' : ''}`}
              onClick={() => setActiveTab('medications')}
            >
              Препараты
            </button>
            <button
              className={`pharma-tab ${activeTab === 'interactions' ? 'active' : ''}`}
              onClick={() => setActiveTab('interactions')}
            >
              Взаимодействия
            </button>
            <button
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
                  <motion.div
                    key={med.id}
                    className="medication-card"
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setSelectedMed(selectedMed?.id === med.id ? null : med)}
                  >
                    <div className="med-name">{med.name}</div>
                    <div className="med-category">{med.category}</div>

                    {selectedMed?.id === med.id && (
                      <motion.div
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
                  </motion.div>
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
