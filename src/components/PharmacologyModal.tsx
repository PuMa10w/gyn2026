import React, { useEffect, useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { commonRegimens, drugInteractions, medications } from '../data/pharmacology';
import { useModalBehavior } from '../hooks/useModalBehavior';
import type { Medication, MedicationInteraction, Regimen } from '../types';

interface PharmacologyModalProps {
  onClose: () => void;
}

const PharmacologyModal: React.FC<PharmacologyModalProps> = ({ onClose }) => {
  const titleId = useId();
  const searchId = useId();
  const interactionSearchId = useId();
  const firstDrugId = useId();
  const secondDrugId = useId();
  const subtitleId = useId();
  const { modalRef, closeButtonRef, handleModalKeyDown } = useModalBehavior(onClose);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<'medications' | 'interactions' | 'regimens'>('medications');
  const [selectedMed, setSelectedMed] = useState<Medication | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [interactionSearchTerm, setInteractionSearchTerm] = useState('');
  const [firstDrug, setFirstDrug] = useState('');
  const [secondDrug, setSecondDrug] = useState('');

  const medicationEntries = medications as Medication[];
  const regimenEntries = commonRegimens as Regimen[];

  const interactionEntries = medicationEntries.flatMap((medication) =>
    (medication.interactions ?? []).map((interaction, index) => ({
      id: `${medication.id}-${interaction.drug}-${index}`,
      medicationName: medication.name,
      medicationId: medication.id,
      interaction,
    })),
  );

  const normalizedMedicationSearch = searchTerm.trim().toLowerCase();
  const normalizedInteractionSearch = interactionSearchTerm.trim().toLowerCase();

  const filteredMeds: Medication[] = medicationEntries.filter((med) =>
    med.name.toLowerCase().includes(normalizedMedicationSearch) ||
    med.nameEn.toLowerCase().includes(normalizedMedicationSearch) ||
    med.category.toLowerCase().includes(normalizedMedicationSearch),
  );

  const filteredInteractions = interactionEntries.filter(({ medicationName, interaction }) => {
    if (!normalizedInteractionSearch) {
      return true;
    }

    const haystack = [medicationName, interaction.drug, interaction.effect, interaction.level].join(' ').toLowerCase();
    return haystack.includes(normalizedInteractionSearch);
  });

  const checkedInteraction = firstDrug && secondDrug ? drugInteractions.check(firstDrug, secondDrug) : null;
  const checkedFirstMedication = medicationEntries.find((med) => med.id === firstDrug) ?? null;
  const checkedSecondMedication = medicationEntries.find((med) => med.id === secondDrug) ?? null;

  const interactionCategoryMeta = (level: MedicationInteraction['level']) =>
    drugInteractions.categories[level as 'low' | 'medium' | 'high'] ?? drugInteractions.categories.medium;

  const handleCardKeyDown = (event: React.KeyboardEvent, onActivate: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate();
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateViewportMode = () => setIsMobile(mediaQuery.matches);

    updateViewportMode();
    mediaQuery.addEventListener('change', updateViewportMode);

    return () => mediaQuery.removeEventListener('change', updateViewportMode);
  }, []);

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
          className={`modal-content pharmacology-modal ${isMobile ? 'mobile-sheet' : ''}`}
          initial={isMobile ? { y: '100%' } : { scale: 0.96, opacity: 0 }}
          animate={isMobile ? { y: 0 } : { scale: 1, opacity: 1 }}
          exit={isMobile ? { y: '100%' } : { scale: 0.96, opacity: 0 }}
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
              onClick={() => {
                setActiveTab('interactions');
                setSelectedMed(null);
              }}
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
              onClick={() => {
                setActiveTab('regimens');
                setSelectedMed(null);
              }}
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

              <div className="interaction-checker">
                <div className="interaction-checker-grid">
                  <div>
                    <label className="visually-hidden" htmlFor={firstDrugId}>Первый препарат</label>
                    <select id={firstDrugId} className="search-input interaction-select" value={firstDrug} onChange={(event) => setFirstDrug(event.target.value)}>
                      <option value="">Выберите первый препарат</option>
                      {medicationEntries.map((medication) => (
                        <option key={medication.id} value={medication.id}>
                          {medication.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="visually-hidden" htmlFor={secondDrugId}>Второй препарат</label>
                    <select id={secondDrugId} className="search-input interaction-select" value={secondDrug} onChange={(event) => setSecondDrug(event.target.value)}>
                      <option value="">Выберите второй препарат</option>
                      {medicationEntries.map((medication) => (
                        <option key={medication.id} value={medication.id}>
                          {medication.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {(checkedFirstMedication || checkedSecondMedication) && (
                  <div className={`interaction-result ${checkedInteraction ? `is-${checkedInteraction.level}` : 'is-none'}`}>
                    <h3>Проверка сочетания</h3>
                    <p>
                      {checkedFirstMedication?.name ?? 'Препарат 1'} + {checkedSecondMedication?.name ?? 'Препарат 2'}
                    </p>
                    {checkedInteraction ? (
                      <>
                        <span className={`legend-item ${checkedInteraction.level}`}>{interactionCategoryMeta(checkedInteraction.level).label}</span>
                        <p>{checkedInteraction.effect}</p>
                      </>
                    ) : (
                      <p>Явное взаимодействие в справочнике не найдено. Это не заменяет клиническую проверку сочетаний.</p>
                    )}
                  </div>
                )}
              </div>

              <label className="visually-hidden" htmlFor={interactionSearchId}>Поиск взаимодействий</label>
              <input
                id={interactionSearchId}
                type="text"
                className="search-input"
                placeholder="Поиск взаимодействий..."
                value={interactionSearchTerm}
                onChange={(event) => setInteractionSearchTerm(event.target.value)}
              />

              <div className="interactions-list">
                {filteredInteractions.map(({ id, medicationName, interaction }) => {
                  const meta = interactionCategoryMeta(interaction.level);

                  return (
                    <article key={id} className="interaction-card">
                      <div className="interaction-card-header">
                        <div>
                          <h3>{medicationName}</h3>
                          <p>{interaction.drug}</p>
                        </div>
                        <span className={`legend-item ${interaction.level}`}>{meta.label}</span>
                      </div>
                      <p className="interaction-effect">{interaction.effect}</p>
                      <p className="interaction-meta">{meta.description}</p>
                    </article>
                  );
                })}

                {filteredInteractions.length === 0 && (
                  <motion.div className="catalog-status pharmacology-empty" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="catalog-status-eyebrow">Взаимодействия</span>
                    <h2>Совпадений не найдено</h2>
                    <p>Попробуйте изменить запрос по препарату, риску или клиническому эффекту.</p>
                  </motion.div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'regimens' && (
            <div className="pharma-content" id={`${titleId}-regimens-panel`} role="tabpanel" aria-labelledby={`${titleId}-regimens-tab`}>
              <div className="regimens-list">
                {regimenEntries.map((regimen) => (
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
