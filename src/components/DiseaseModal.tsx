import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

function renderTrustedHtml(text: string) {
  return { __html: text };
}

const DiseaseModal = ({ item, onClose }: DiseaseModalProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'diagnostics' | 'treatment' | 'guidelines'>(
    'overview',
  );
  const [isMobile, setIsMobile] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const IconComponent = item.subtitle === 'Гинекология' ? gynIcons[item.icon] : obsIcons[item.icon];

  const tabs = [
    { id: 'overview', label: 'Обзор' },
    { id: 'diagnostics', label: 'Диагностика' },
    { id: 'treatment', label: 'Лечение' },
    { id: 'guidelines', label: 'Клин рекомендации' },
  ] as const;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateViewportMode = () => setIsMobile(mediaQuery.matches);

    updateViewportMode();
    mediaQuery.addEventListener('change', updateViewportMode);

    return () => mediaQuery.removeEventListener('change', updateViewportMode);
  }, []);

  useEffect(() => {
    closeButtonRef.current?.focus();
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
                    <li key={index} dangerouslySetInnerHTML={renderTrustedHtml(entry)} />
                  ))}
                </ul>
              </section>
            )}

            {item.treatment.surgical && (
              <section className="content-card content-card-wide">
                <h3>Хирургическая тактика</h3>
                <ul>
                  {item.treatment.surgical.map((entry, index) => (
                    <li key={index} dangerouslySetInnerHTML={renderTrustedHtml(entry)} />
                  ))}
                </ul>
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
          className={`modal-content ${isMobile ? 'mobile-sheet' : ''}`}
          initial={isMobile ? { y: '100%' } : { scale: 0.9, y: 50 }}
          animate={isMobile ? { y: 0 } : { scale: 1, y: 0 }}
          exit={isMobile ? { y: '100%' } : { scale: 0.9, y: 50 }}
          transition={isMobile ? { type: 'spring', damping: 25, stiffness: 300 } : { duration: 0.3 }}
          onClick={(event) => event.stopPropagation()}
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
                  {item.icd} • {item.subtitle}
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
