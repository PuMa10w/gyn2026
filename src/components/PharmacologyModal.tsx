import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { commonRegimens, medications } from '../data/pharmacology';
import type { Medication, RegimenData } from '../types';

interface PharmacologyModalProps {
  onClose: () => void;
}

const PharmacologyModal: React.FC<PharmacologyModalProps> = ({ onClose }) => {
  const titleId = useId();
  const searchId = useId();
  const subtitleId = useId();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);
  const [activeTab, setActiveTab] = useState<'medications' | 'interactions' | 'regimens'>('medications');
  const [selectedMed, setSelectedMed] = useState<Medication | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMeds: Medication[] = medications.filter((med) =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleCardKeyDown = (event: React.KeyboardEvent, onActivate: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate();
    }
  };

  useEffect(() => {
    previousFocusedElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();

    return () => {
      previousFocusedElementRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleModalKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key !== 'Tab' || !modalRef.current) {
      return;
    }

    const focusableSelector =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = Array.from(modalRef.current.querySelectorAll<HTMLElement>(focusableSelector)).filter(
      (element) => !element.hasAttribute('disabled') && element.getAttribute('aria-hidden') !== 'true',
    );

    if (focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement as HTMLElement | null;
    const isFocusInsideModal = activeElement ? modalRef.current.contains(activeElement) : false;

    if (event.shiftKey) {
      if (!isFocusInsideModal || activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
      return;
    }

    if (!isFocusInsideModal || activeElement === lastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
  };

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
          ref={modalRef}
          onClick={(event) => event.stopPropagation()}
          onKeyDown={handleModalKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={subtitleId}
        >
          <button ref={closeButtonRef} type="button" className="modal-close" onClick={onClose} aria-label="Закрыть фармакологию">
            ✕
          </button>

          <div className="modal-header">
            <div>
              <h2 className="modal-title" id={titleId}>Фармакология</h2>
              <div className="modal-icd" id={subtitleId}>Препараты, взаимодействия и готовые схемы</div>
            </div>
          </div>

          <div className="pharma-tabs" role="tablist" aria-label="Разделы фармакологии">
            <button
              type="button"
              className={`pharma-tab ${activeTab === 'medications' ? 'active' : ''}`}
              onClick={() => setActiveTab('medications')}
              role="tab"
              id={`${titleId}-medications-tab`}
              aria-selected={activeTab === 'medications'}
              aria-controls={`${titleId}-medications-panel`}
              tabIndex={activeTab === 'medications' ? 0 : -1}
            >
              Препараты
            </button>
            <button
              type="button"
              className={`pharma-tab ${activeTab === 'interactions' ? 'active' : ''}`}
              onClick={() => setActiveTab('interactions')}
              role="tab"
              id={`${titleId}-interactions-tab`}
              aria-selected={activeTab === 'interactions'}
              aria-controls={`${titleId}-interactions-panel`}
              tabIndex={activeTab === 'interactions' ? 0 : -1}
            >
              Взаимодействия
            </button>
            <button
              type="button"
              className={`pharma-tab ${activeTab === 'regimens' ? 'active' : ''}`}
              onClick={() => setActiveTab('regimens')}
              role="tab"
              id={`${titleId}-regimens-tab`}
              aria-selected={activeTab === 'regimens'}
              aria-controls={`${titleId}-regimens-panel`}
              tabIndex={activeTab === 'regimens' ? 0 : -1}
            >
              Схемы
            </button>
          </div>

          {activeTab === 'medications' && (
            <div className="pharma-content" id={`${titleId}-medications-panel`} role="tabpanel" aria-labelledby={`${titleId}-medications-tab`}>
              <label className="visually-hidden" htmlFor={searchId}>Поиск препарата</label>
              <input
                id={searchId}
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
                    aria-controls={`med-details-${med.id}`}
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

                {filteredMeds.length === 0 && (
                  <motion.div className="catalog-status pharmacology-empty" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="catalog-status-eyebrow">Поиск</span>
                    <h2>Ничего не найдено</h2>
                    <p>Попробуйте изменить запрос по названию препарата, английскому имени или категории.</p>
                  </motion.div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'interactions' && (
            <div className="pharma-content" id={`${titleId}-interactions-panel`} role="tabpanel" aria-labelledby={`${titleId}-interactions-tab`}>
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
            <div className="pharma-content" id={`${titleId}-regimens-panel`} role="tabpanel" aria-labelledby={`${titleId}-regimens-tab`}>
              <div className="regimens-list">
                {commonRegimens.map((regimen: RegimenData) => (
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
