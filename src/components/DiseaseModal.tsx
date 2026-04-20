import React, { useEffect, useId, useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion';
import { gynIcons, obsIcons } from './Icons';
import type { Disease } from '../types';

interface DiseaseModalProps {
  item: Disease;
  onClose: () => void;
}

const guidelineMeta = [
  { key: 'eau', title: 'Европа', org: 'EAU / ESHRE / ESGE', badgeClass: 'badge-eau' },
  { key: 'acog', title: 'США', org: 'ACOG', badgeClass: 'badge-acog' },
  {
    key: 'ranzcog',
    title: 'Австралия и Новая Зеландия',
    org: 'RANZCOG',
    badgeClass: 'badge-ranzcog',
  },
  { key: 'ru', title: 'Россия', org: 'Минздрав РФ', badgeClass: 'badge-ru' },
] as const;

const treatmentBadgePattern = /<span class='badge ([^']+)'>([^<]+)<\/span>/gi;
const allowedInlineBadgeClasses = new Set(['badge-eau', 'badge-acog', 'badge-ranzcog', 'badge-ru', 'badge-cdc']);

const tabs = [
  { id: 'overview', label: 'Обзор' },
  { id: 'diagnostics', label: 'Диагностика' },
  { id: 'ultrasound', label: 'УЗИ' },
  { id: 'treatment', label: 'Лечение' },
  { id: 'management', label: 'Ведение' },
  { id: 'guidelines', label: 'Клин рекомендации' },
] as const;

type ModalTab = (typeof tabs)[number]['id'];

function renderSafeTreatmentEntry(entry: string) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  treatmentBadgePattern.lastIndex = 0;
  match = treatmentBadgePattern.exec(entry);

  while (match) {
    const [fullMatch, classListRaw, badgeText] = match;

    if (match.index > lastIndex) {
      nodes.push(entry.slice(lastIndex, match.index));
    }

    const safeBadgeClass =
      classListRaw
        .split(/\s+/)
        .map((token) => token.trim())
        .find((token) => allowedInlineBadgeClasses.has(token)) ?? 'badge-ru';

    nodes.push(
      <span className={`inline-guideline-badge ${safeBadgeClass}`} key={`badge-${match.index}`}>
        {badgeText}
      </span>,
    );

    lastIndex = match.index + fullMatch.length;
    match = treatmentBadgePattern.exec(entry);
  }

  if (lastIndex < entry.length) {
    nodes.push(entry.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : entry;
}

const DiseaseModal = ({ item, onClose }: DiseaseModalProps) => {
  const [activeTab, setActiveTab] = useState<ModalTab>('overview');
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<{ y: number; time: number } | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);
  const sheetY = useMotionValue(0);
  const sheetOpacity = useTransform(sheetY, [0, 300], [1, 0]);
  
  const IconComponent = item.subtitle === 'Гинекология' ? gynIcons[item.icon] : obsIcons[item.icon];
  const icdLabel = item.icdDetail ?? item.icd;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateViewportMode = () => setIsMobile(mediaQuery.matches);

    updateViewportMode();
    mediaQuery.addEventListener('change', updateViewportMode);

    return () => mediaQuery.removeEventListener('change', updateViewportMode);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ y: touch.clientY, time: Date.now() });
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart || !isMobile) return;
    
    const touch = e.changedTouches[0];
    const deltaY = touch.clientY - touchStart.y;
    const deltaTime = Date.now() - touchStart.time;
    
    if (deltaY > 100 && deltaTime < 300) {
      onClose();
    }
    setTouchStart(null);
  }, [touchStart, isMobile, onClose]);

  useEffect(() => {
    previousFocusedElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    return () => {
      previousFocusedElementRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPosition = body.style.position;
    const previousWidth = body.style.width;
    const previousTop = body.style.top;
    const scrollY = window.scrollY;

    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.width = '100%';
    body.style.top = `-${scrollY}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.position = previousPosition;
      body.style.width = previousWidth;
      body.style.top = previousTop;
      window.scrollTo(0, scrollY);
    };
  }, []);

  const handleModalKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
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

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content modal-grid" id={descriptionId}>
            <section className="content-card content-card-wide">
              <h3>Определение</h3>
              <p>{item.definition}</p>
            </section>

            <section className="content-card">
              <h3>Эпидемиология</h3>
              <p>{item.epidemiology}</p>
            </section>

            <section className="content-card">
              <h3>Клиническая картина</h3>
              <ul>
                {item.symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </section>

            <section className="content-card content-card-wide">
              <h3>Этиология</h3>
              <ul>
                {item.etiology.map((entry, index) => (
                  <li key={index}>{entry}</li>
                ))}
              </ul>
            </section>

            {item.classification && (
              <section className="content-card content-card-wide">
                <h3>{item.classification.title}</h3>
                <ul>
                  {item.classification.stages.map((stage, index) => (
                    <li key={index}>{stage}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        );
      case 'diagnostics':
        return (
          <div className="tab-content modal-grid" id={descriptionId}>
            <section className="content-card content-card-wide diagnostics-hero">
              <h3>Точная диагностика</h3>
              <p>
                Это не просто список исследований, а рабочий алгоритм: на что ориентироваться в
                осмотре, какие тесты подтверждают диагноз и какие маркеры помогают уточнить картину.
              </p>
            </section>

            <section className="content-card content-card-wide">
              <h3>Алгоритм диагностики</h3>
              <ol className="diagnostics-list">
                {item.diagnostics.steps.map((step, index) => (
                  <li key={index}>
                    <span className="diagnostics-step-index">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="content-card">
              <h3>Маркеры и лаборатория</h3>
              <p>{item.diagnostics.markers}</p>
            </section>

            <section className="content-card">
              <h3>Клинический комментарий</h3>
              <p>
                Оценивайте диагноз по совокупности симптомов, данных осмотра, визуализации и
                лабораторных маркеров. При атипичном течении нужен пересмотр дифференциального
                диагноза и повторная оценка тактики.
              </p>
            </section>

            {item.diagnostics.imaging && item.diagnostics.imaging.length > 0 && (
              <section className="content-card">
                <h3>Визуализация</h3>
                <ul>
                  {item.diagnostics.imaging.map((entry, index) => (
                    <li key={index}>{entry}</li>
                  ))}
                </ul>
              </section>
            )}

            {item.diagnostics.differential && item.diagnostics.differential.length > 0 && (
              <section className="content-card">
                <h3>Дифференциальный диагноз</h3>
                <ul>
                  {item.diagnostics.differential.map((entry, index) => (
                    <li key={index}>{entry}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        );
      case 'ultrasound':
        return (
          <div className="tab-content modal-grid" id={descriptionId}>
            {item.ultrasound?.protocols && item.ultrasound.protocols.length > 0 && (
              <section className="content-card content-card-wide">
                <h3>Протоколы исследования</h3>
                <div className="structured-list">
                  {item.ultrasound.protocols.map((protocol, index) => (
                    <article className="structured-item" key={index}>
                      <div className="structured-item-title">{protocol.method}</div>
                      <ul>
                        {protocol.indications.map((indication, indicationIndex) => (
                          <li key={indicationIndex}>{indication}</li>
                        ))}
                      </ul>
                      {protocol.preparation && <p className="structured-item-note">Подготовка: {protocol.preparation}</p>}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {item.ultrasound?.findings && item.ultrasound.findings.length > 0 && (
              <section className="content-card content-card-wide">
                <h3>Ультразвуковые признаки</h3>
                <div className="structured-list">
                  {item.ultrasound.findings.map((finding, index) => (
                    <article className="structured-item" key={index}>
                      <div className="structured-item-title">{finding.location}</div>
                      <p>{finding.description}</p>
                      {finding.measurements && (
                        <dl className="metric-list">
                          {Object.entries(finding.measurements).map(([key, value]) => (
                            <div className="metric-item" key={key}>
                              <dt>{key}</dt>
                              <dd>{value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      {finding.normal && <p><strong>Норма:</strong> {finding.normal}</p>}
                      {finding.pathology && <p><strong>Патология:</strong> {finding.pathology}</p>}
                      {finding.clinicalSignificance && <p><strong>Клиническое значение:</strong> {finding.clinicalSignificance}</p>}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {item.ultrasound?.echogenicity && (
              <section className="content-card">
                <h3>Эхоструктура</h3>
                <p>{item.ultrasound.echogenicity}</p>
              </section>
            )}

            {item.ultrasound?.vascularization && (
              <section className="content-card">
                <h3>Васкуляризация</h3>
                <p>{item.ultrasound.vascularization}</p>
              </section>
            )}

            {item.ultrasound?.dopplerFindings && (
              <section className="content-card">
                <h3>Допплер</h3>
                <p>{item.ultrasound.dopplerFindings}</p>
              </section>
            )}

            {item.ultrasound?.normalValues && (
              <section className="content-card">
                <h3>Нормальные значения</h3>
                <dl className="metric-list">
                  {Object.entries(item.ultrasound.normalValues).map(([key, value]) => (
                    <div className="metric-item" key={key}>
                      <dt>{key}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {item.ultrasound?.imagingTips && item.ultrasound.imagingTips.length > 0 && (
              <section className="content-card">
                <h3>Практические советы</h3>
                <ul>
                  {item.ultrasound.imagingTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        );
      case 'treatment':
        return (
          <div className="tab-content modal-grid" id={descriptionId}>
            {item.treatment.conservative && (
              <section className="content-card content-card-wide">
                <h3>Консервативная терапия</h3>
                <ul>
                  {item.treatment.conservative.map((entry, index) => (
                    <li key={index}>{renderSafeTreatmentEntry(entry)}</li>
                  ))}
                </ul>
              </section>
            )}

            {item.treatment.surgical && (
              <section className="content-card content-card-wide">
                <h3>Хирургическая тактика</h3>
                <ul>
                  {item.treatment.surgical.map((entry, index) => (
                    <li key={index}>{renderSafeTreatmentEntry(entry)}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        );
      case 'management':
        return (
          <div className="tab-content modal-grid" id={descriptionId}>
            {item.recommendations && item.recommendations.length > 0 && (
              <section className="content-card content-card-wide">
                <h3>Рекомендации</h3>
                <ul>
                  {item.recommendations.map((entry, index) => (
                    <li key={index}>{entry}</li>
                  ))}
                </ul>
              </section>
            )}

            {item.prognosis && (
              <section className="content-card">
                <h3>Прогноз</h3>
                {item.prognosis.general && <p>{item.prognosis.general}</p>}
                {item.prognosis.factors && item.prognosis.factors.length > 0 && (
                  <ul>
                    {item.prognosis.factors.map((factor, index) => (
                      <li key={index}>{factor}</li>
                    ))}
                  </ul>
                )}
                {item.prognosis.survival && <p><strong>Исходы:</strong> {item.prognosis.survival}</p>}
              </section>
            )}

            {item.followUp && (
              <section className="content-card">
                <h3>Наблюдение</h3>
                {item.followUp.frequency && <p><strong>Частота:</strong> {item.followUp.frequency}</p>}
                {item.followUp.duration && <p><strong>Длительность:</strong> {item.followUp.duration}</p>}
                {item.followUp.tests && item.followUp.tests.length > 0 && (
                  <ul>
                    {item.followUp.tests.map((test, index) => (
                      <li key={index}>{test}</li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {item.clinicalCases && item.clinicalCases.length > 0 && (
              <section className="content-card content-card-wide">
                <h3>Клинические случаи</h3>
                <div className="structured-list">
                  {item.clinicalCases.map((clinicalCase, index) => (
                    <article className="structured-item" key={index}>
                      <div className="structured-item-title">Случай {index + 1}</div>
                      <p><strong>Жалобы:</strong> {clinicalCase.presentation}</p>
                      <p><strong>Данные:</strong> {clinicalCase.findings}</p>
                      <p><strong>Диагноз:</strong> {clinicalCase.diagnosis}</p>
                      <p><strong>Лечение:</strong> {clinicalCase.treatment}</p>
                      <p><strong>Исход:</strong> {clinicalCase.outcome}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>
        );
      case 'guidelines':
        return (
          <div className="tab-content modal-grid" id={descriptionId}>
            {guidelineMeta.map((guideline) => (
              <section className="content-card guideline-card" key={guideline.key}>
                <div className="guideline-card-header">
                  <span className={`guideline-badge ${guideline.badgeClass}`}>{guideline.org}</span>
                  <span className="guideline-region">{guideline.title}</span>
                </div>
                <p>{item.treatment.guidelines[guideline.key]}</p>
              </section>
            ))}
          </div>
        );
      default:
        return null;
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
          ref={modalRef}
          className={`modal-content ${isMobile ? 'mobile-sheet' : ''}`}
          initial={isMobile ? { y: '100%' } : { scale: 0.9, y: 50 }}
          animate={isMobile ? { y: 0 } : { scale: 1, y: 0 }}
          exit={isMobile ? { y: '100%' } : { scale: 0.9, y: 50 }}
          transition={isMobile ? { type: 'spring', damping: 25, stiffness: 300 } : { duration: 0.3 }}
          onClick={(event) => event.stopPropagation()}
          onKeyDown={handleModalKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
        >
          {isMobile && <div className="modal-drag-indicator" aria-hidden="true" />}

          <div className="modal-header">
            <div className="modal-title-group">
              <div className="modal-icon-wrapper" aria-hidden="true">
                {IconComponent}
              </div>
              <div>
                <h2 className="modal-title" id={titleId}>
                  {item.name}
                </h2>
                <div className="modal-icd">
                  {icdLabel} • {item.subtitle}
                </div>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              className="modal-close"
              onClick={onClose}
              aria-label="Закрыть карточку"
            >
              ✕
            </button>
          </div>

          <div className="modal-tabs" role="tablist" aria-label="Разделы карточки">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="modal-body">{renderContent()}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DiseaseModal;
