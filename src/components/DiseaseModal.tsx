import React, { useEffect, useId, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { gynIcons, obsIcons } from './Icons';
import { useModalBehavior } from '../hooks/useModalBehavior';
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
  { id: 'quick', label: 'Быстро' },
  { id: 'overview', label: 'Обзор' },
  { id: 'diagnostics', label: 'Диагностика' },
  { id: 'ultrasound', label: 'УЗИ' },
  { id: 'treatment', label: 'Лечение' },
  { id: 'management', label: 'Ведение' },
  { id: 'guidelines', label: 'Клин рекомендации' },
] as const;

type ModalTab = (typeof tabs)[number]['id'];

function normalizeText(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function renderList(items: string[]) {
  return (
    <ul>
      {items.map((entry, index) => (
        <li key={index}>{normalizeText(entry)}</li>
      ))}
    </ul>
  );
}

function hasAnyValues(sections: Array<string[] | undefined>) {
  return sections.some((section) => Array.isArray(section) && section.length > 0);
}

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
  const [isQuickStripExpanded, setIsQuickStripExpanded] = useState(false);
  const [touchStart, setTouchStart] = useState<{ y: number; time: number } | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const panelId = `${titleId}-${activeTab}-panel`;
  const { modalRef, closeButtonRef, handleModalKeyDown } = useModalBehavior(onClose);
  
  const IconComponent = item.subtitle === 'Гинекология' 
    ? (gynIcons as Record<string, React.ReactNode>)[item.icon] 
    : (obsIcons as Record<string, React.ReactNode>)[item.icon];
  const icdLabel = item.icdDetail ?? item.icd;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateViewportMode = () => setIsMobile(mediaQuery.matches);

    updateViewportMode();
    mediaQuery.addEventListener('change', updateViewportMode);

    return () => mediaQuery.removeEventListener('change', updateViewportMode);
  }, []);

  useEffect(() => {
    setIsQuickStripExpanded(!isMobile);
  }, [isMobile, item.id]);

  useEffect(() => {
    if (isMobile) {
      setIsQuickStripExpanded(false);
    }
  }, [activeTab, isMobile]);

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

  const handleModalScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    if (!isMobile || !isQuickStripExpanded) return;

    if (event.currentTarget.scrollTop > 24) {
      setIsQuickStripExpanded(false);
    }
  }, [isMobile, isQuickStripExpanded]);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content modal-grid" id={descriptionId}>
            {item.overview && (item.overview.quickTake || item.overview.prevalence || item.overview.practiceFocus) ? (
              <section className="content-card content-card-wide overview-summary-card">
                <span className="quick-summary-eyebrow">Клинический фокус</span>
                {item.overview.quickTake ? <p>{normalizeText(item.overview.quickTake)}</p> : null}
                <div className="overview-summary-grid">
                  {item.overview.prevalence ? (
                    <article className="structured-item overview-summary-item">
                      <div className="structured-item-title">Распространенность</div>
                      <p>{normalizeText(item.overview.prevalence)}</p>
                    </article>
                  ) : null}
                  {item.overview.riskLevel ? (
                    <article className="structured-item overview-summary-item">
                      <div className="structured-item-title">Уровень риска</div>
                      <p>{normalizeText(item.overview.riskLevel)}</p>
                    </article>
                  ) : null}
                  {item.overview.practiceFocus ? (
                    <article className="structured-item overview-summary-item overview-summary-item-wide">
                      <div className="structured-item-title">Практический акцент</div>
                      <p>{normalizeText(item.overview.practiceFocus)}</p>
                    </article>
                  ) : null}
                </div>
              </section>
            ) : null}

            <section className="content-card content-card-wide">
              <h3>Определение</h3>
              <p>{normalizeText(item.definition)}</p>
            </section>

            <section className="content-card">
              <h3>Эпидемиология</h3>
              <p>{normalizeText(item.epidemiology)}</p>
            </section>

            <section className="content-card">
              <h3>Клиническая картина</h3>
              <ul>
                {item.symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </section>

            {item.symptomGroups &&
            hasAnyValues([
              item.symptomGroups.typical,
              item.symptomGroups.early,
              item.symptomGroups.late,
              item.symptomGroups.alarm,
              item.symptomGroups.atypical,
            ]) ? (
              <section className="content-card content-card-wide">
                <h3>Паттерны симптомов</h3>
                <div className="structured-list">
                  {item.symptomGroups.typical?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Типичные проявления</div>
                      {renderList(item.symptomGroups.typical)}
                    </article>
                  ) : null}
                  {item.symptomGroups.early?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Ранние признаки</div>
                      {renderList(item.symptomGroups.early)}
                    </article>
                  ) : null}
                  {item.symptomGroups.late?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Поздние признаки</div>
                      {renderList(item.symptomGroups.late)}
                    </article>
                  ) : null}
                  {item.symptomGroups.alarm?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Тревожные симптомы</div>
                      {renderList(item.symptomGroups.alarm)}
                    </article>
                  ) : null}
                  {item.symptomGroups.atypical?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Атипичные варианты</div>
                      {renderList(item.symptomGroups.atypical)}
                    </article>
                  ) : null}
                </div>
              </section>
            ) : null}

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

            {item.severityStratification?.tiers?.length ? (
              <section className="content-card content-card-wide">
                <h3>{item.severityStratification.title ?? 'Стратификация тяжести'}</h3>
                <div className="structured-list">
                  {item.severityStratification.tiers.map((tier, index) => (
                    <article className="structured-item" key={index}>
                      <div className="structured-item-title">{tier.name}</div>
                      {renderList(tier.criteria)}
                      {tier.clinicalMeaning ? <p><strong>Клиническое значение:</strong> {normalizeText(tier.clinicalMeaning)}</p> : null}
                      {tier.managementImpact ? <p><strong>Влияние на тактику:</strong> {normalizeText(tier.managementImpact)}</p> : null}
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        );
      case 'quick':
        return (
          <div className="tab-content modal-grid" id={descriptionId}>
            {item.clinicalSummary?.quickSummary && (
              <section className="content-card content-card-wide quick-summary-card">
                <span className="quick-summary-eyebrow">Коротко</span>
                <p>{item.clinicalSummary.quickSummary}</p>
              </section>
            )}

            {item.clinicalSummary?.redFlags?.length ? (
              <section className="content-card quick-card quick-card-alert">
                <h3>Красные флаги</h3>
                <ul>
                  {item.clinicalSummary.redFlags.map((entry, index) => (
                    <li key={index}>{entry}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {item.clinicalSummary?.firstLineActions?.length ? (
              <section className="content-card quick-card">
                <h3>Первая линия</h3>
                <ul>
                  {item.clinicalSummary.firstLineActions.map((entry, index) => (
                    <li key={index}>{entry}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {item.clinicalSummary?.diagnosticMinimum?.length ? (
              <section className="content-card quick-card">
                <h3>Диагностический минимум</h3>
                <ul>
                  {item.clinicalSummary.diagnosticMinimum.map((entry, index) => (
                    <li key={index}>{entry}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {item.clinicalSummary?.whenToEscalate?.length ? (
              <section className="content-card quick-card">
                <h3>Когда эскалировать</h3>
                <ul>
                  {item.clinicalSummary.whenToEscalate.map((entry, index) => (
                    <li key={index}>{entry}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {item.clinicalSummary?.clinicalPearls?.length ? (
              <section className="content-card content-card-wide quick-card quick-card-pearl">
                <h3>Клинические акценты</h3>
                <ul>
                  {item.clinicalSummary.clinicalPearls.map((entry, index) => (
                    <li key={index}>{entry}</li>
                  ))}
                </ul>
              </section>
            ) : null}
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
              <p>{normalizeText(item.diagnostics.markers)}</p>
            </section>

            <section className="content-card">
              <h3>Клинический комментарий</h3>
              <p>
                Оценивайте диагноз по совокупности симптомов, данных осмотра, визуализации и
                лабораторных маркеров. При атипичном течении нужен пересмотр дифференциального
                диагноза и повторная оценка тактики.
              </p>
            </section>

            {item.diagnosticCriteria &&
            hasAnyValues([
              item.diagnosticCriteria.clinical,
              item.diagnosticCriteria.laboratory,
              item.diagnosticCriteria.imaging,
              item.diagnosticCriteria.diagnosisConfirmedWhen,
              item.diagnosticCriteria.diagnosisExcludedWhen,
            ]) ? (
              <section className="content-card content-card-wide">
                <h3>Критерии диагноза</h3>
                <div className="structured-list">
                  {item.diagnosticCriteria.clinical?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Клинические критерии</div>
                      {renderList(item.diagnosticCriteria.clinical)}
                    </article>
                  ) : null}
                  {item.diagnosticCriteria.laboratory?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Лабораторные критерии</div>
                      {renderList(item.diagnosticCriteria.laboratory)}
                    </article>
                  ) : null}
                  {item.diagnosticCriteria.imaging?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Инструментальные критерии</div>
                      {renderList(item.diagnosticCriteria.imaging)}
                    </article>
                  ) : null}
                  {item.diagnosticCriteria.diagnosisConfirmedWhen?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Диагноз подтвержден, если</div>
                      {renderList(item.diagnosticCriteria.diagnosisConfirmedWhen)}
                    </article>
                  ) : null}
                  {item.diagnosticCriteria.diagnosisExcludedWhen?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Диагноз маловероятен, если</div>
                      {renderList(item.diagnosticCriteria.diagnosisExcludedWhen)}
                    </article>
                  ) : null}
                </div>
              </section>
            ) : null}

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

            {item.differentialDiagnosis && item.differentialDiagnosis.length > 0 && (
              <section className="content-card content-card-wide">
                <h3>Структурный дифференциальный диагноз</h3>
                <div className="structured-list">
                  {item.differentialDiagnosis.map((entry, index) => (
                    <article className="structured-item" key={index}>
                      <div className="structured-item-title">{entry.condition}</div>
                      {entry.whyConfused && <p><strong>Почему похож:</strong> {entry.whyConfused}</p>}
                      {entry.howToDistinguish && <p><strong>Как отличить:</strong> {entry.howToDistinguish}</p>}
                      {entry.testsIfNeeded?.length ? (
                        <>
                          <p><strong>Что уточнить:</strong></p>
                          {renderList(entry.testsIfNeeded)}
                        </>
                      ) : null}
                    </article>
                  ))}
                </div>
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
                {renderList(item.recommendations)}
              </section>
            )}

            {item.managementAlgorithm &&
            hasAnyValues([
              item.managementAlgorithm.initialAssessment,
              item.managementAlgorithm.confirmDiagnosis,
              item.managementAlgorithm.startTreatment,
              item.managementAlgorithm.reassess,
              item.managementAlgorithm.escalateWhen,
              item.managementAlgorithm.referWhen,
            ]) ? (
              <section className="content-card content-card-wide">
                <h3>Алгоритм ведения</h3>
                <div className="structured-list">
                  {item.managementAlgorithm.initialAssessment?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Первичная оценка</div>
                      {renderList(item.managementAlgorithm.initialAssessment)}
                    </article>
                  ) : null}
                  {item.managementAlgorithm.confirmDiagnosis?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Подтверждение диагноза</div>
                      {renderList(item.managementAlgorithm.confirmDiagnosis)}
                    </article>
                  ) : null}
                  {item.managementAlgorithm.startTreatment?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Старт лечения</div>
                      {renderList(item.managementAlgorithm.startTreatment)}
                    </article>
                  ) : null}
                  {item.managementAlgorithm.reassess?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Переоценка</div>
                      {renderList(item.managementAlgorithm.reassess)}
                    </article>
                  ) : null}
                  {item.managementAlgorithm.escalateWhen?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Когда эскалировать</div>
                      {renderList(item.managementAlgorithm.escalateWhen)}
                    </article>
                  ) : null}
                  {item.managementAlgorithm.referWhen?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Когда направлять</div>
                      {renderList(item.managementAlgorithm.referWhen)}
                    </article>
                  ) : null}
                </div>
              </section>
            ) : null}

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

            {item.followUpTriggers &&
            hasAnyValues([
              item.followUpTriggers.routineReview,
              item.followUpTriggers.earlierReviewIf,
              item.followUpTriggers.switchTreatmentIf,
              item.followUpTriggers.urgentReassessmentIf,
            ]) ? (
              <section className="content-card">
                <h3>Триггеры пересмотра</h3>
                {item.followUpTriggers.routineReview?.length ? (
                  <>
                    <p><strong>Плановый контроль:</strong></p>
                    {renderList(item.followUpTriggers.routineReview)}
                  </>
                ) : null}
                {item.followUpTriggers.earlierReviewIf?.length ? (
                  <>
                    <p><strong>Раньше срока, если:</strong></p>
                    {renderList(item.followUpTriggers.earlierReviewIf)}
                  </>
                ) : null}
                {item.followUpTriggers.switchTreatmentIf?.length ? (
                  <>
                    <p><strong>Менять тактику, если:</strong></p>
                    {renderList(item.followUpTriggers.switchTreatmentIf)}
                  </>
                ) : null}
                {item.followUpTriggers.urgentReassessmentIf?.length ? (
                  <>
                    <p><strong>Срочно переоценить, если:</strong></p>
                    {renderList(item.followUpTriggers.urgentReassessmentIf)}
                  </>
                ) : null}
              </section>
            ) : null}

            {(item.fertilityImpact?.length || item.recurrenceRisk?.length || item.malignancyRisk || item.screeningAndPrevention?.length || item.whenBiopsyNeeded?.length) ? (
              <section className="content-card content-card-wide">
                <h3>Дополнительные клинические акценты</h3>
                <div className="structured-list">
                  {item.fertilityImpact?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Влияние на фертильность</div>
                      {renderList(item.fertilityImpact)}
                    </article>
                  ) : null}
                  {item.recurrenceRisk?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Риск рецидива</div>
                      {renderList(item.recurrenceRisk)}
                    </article>
                  ) : null}
                  {item.malignancyRisk?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Онкологические риски</div>
                      {renderList(item.malignancyRisk)}
                    </article>
                  ) : null}
                  {item.screeningAndPrevention?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Скрининг и профилактика</div>
                      {renderList(item.screeningAndPrevention)}
                    </article>
                  ) : null}
                  {item.whenBiopsyNeeded?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Когда нужна биопсия</div>
                      {renderList(item.whenBiopsyNeeded)}
                    </article>
                  ) : null}
                </div>
              </section>
            ) : null}

            {item.contraindicatedOrAvoid && item.contraindicatedOrAvoid.length > 0 && (
              <section className="content-card">
                <h3>Чего избегать</h3>
                {renderList(item.contraindicatedOrAvoid)}
              </section>
            )}

            {item.patientCounseling && item.patientCounseling.length > 0 && (
              <section className="content-card">
                <h3>Что объяснить пациентке</h3>
                {renderList(item.patientCounseling)}
              </section>
            )}

            {item.specialPopulations &&
            hasAnyValues([
              item.specialPopulations.adolescents,
              item.specialPopulations.pregnancy,
              item.specialPopulations.postpartum,
              item.specialPopulations.perimenopause,
              item.specialPopulations.postmenopause,
              item.specialPopulations.obesity,
              item.specialPopulations.fertilityPlanning,
            ]) ? (
              <section className="content-card content-card-wide">
                <h3>Особые клинические группы</h3>
                <div className="structured-list">
                  {item.specialPopulations.adolescents?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Подростки</div>
                      {renderList(item.specialPopulations.adolescents)}
                    </article>
                  ) : null}
                  {item.specialPopulations.pregnancy?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Беременность</div>
                      {renderList(item.specialPopulations.pregnancy)}
                    </article>
                  ) : null}
                  {item.specialPopulations.postpartum?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Послеродовой период</div>
                      {renderList(item.specialPopulations.postpartum)}
                    </article>
                  ) : null}
                  {item.specialPopulations.perimenopause?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Перинеменопауза</div>
                      {renderList(item.specialPopulations.perimenopause)}
                    </article>
                  ) : null}
                  {item.specialPopulations.postmenopause?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Постменопауза</div>
                      {renderList(item.specialPopulations.postmenopause)}
                    </article>
                  ) : null}
                  {item.specialPopulations.obesity?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Ожирение</div>
                      {renderList(item.specialPopulations.obesity)}
                    </article>
                  ) : null}
                  {item.specialPopulations.fertilityPlanning?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Планирование беременности</div>
                      {renderList(item.specialPopulations.fertilityPlanning)}
                    </article>
                  ) : null}
                </div>
              </section>
            ) : null}

            {(item.timingOfDelivery || item.maternalMonitoring || item.fetalMonitoring || item.inpatientVsOutpatient || item.deliveryIndications?.length || item.postpartumManagement?.length) ? (
              <section className="content-card content-card-wide">
                <h3>Акушерская тактика</h3>
                <div className="structured-list">
                  {item.timingOfDelivery && hasAnyValues([
                    item.timingOfDelivery.expectantManagementUntil,
                    item.timingOfDelivery.deliverNowWhen,
                    item.timingOfDelivery.gestationalAgeModifiers,
                    item.timingOfDelivery.modeOfDeliveryNotes,
                  ]) ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Срок и способ родоразрешения</div>
                      {item.timingOfDelivery.expectantManagementUntil?.length ? (<><p><strong>Ожидательная тактика до:</strong></p>{renderList(item.timingOfDelivery.expectantManagementUntil)}</>) : null}
                      {item.timingOfDelivery.deliverNowWhen?.length ? (<><p><strong>Родоразрешать немедленно, если:</strong></p>{renderList(item.timingOfDelivery.deliverNowWhen)}</>) : null}
                      {item.timingOfDelivery.gestationalAgeModifiers?.length ? (<><p><strong>Поправки на срок:</strong></p>{renderList(item.timingOfDelivery.gestationalAgeModifiers)}</>) : null}
                      {item.timingOfDelivery.modeOfDeliveryNotes?.length ? (<><p><strong>Замечания по способу родоразрешения:</strong></p>{renderList(item.timingOfDelivery.modeOfDeliveryNotes)}</>) : null}
                    </article>
                  ) : null}
                  {item.maternalMonitoring && hasAnyValues([
                    item.maternalMonitoring.vitalSigns,
                    item.maternalMonitoring.labs,
                    item.maternalMonitoring.imaging,
                    item.maternalMonitoring.warningSymptoms,
                    item.maternalMonitoring.reassessmentInterval,
                  ]) ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Мониторинг матери</div>
                      {item.maternalMonitoring.vitalSigns?.length ? (<><p><strong>Витальные параметры:</strong></p>{renderList(item.maternalMonitoring.vitalSigns)}</>) : null}
                      {item.maternalMonitoring.labs?.length ? (<><p><strong>Лаборатория:</strong></p>{renderList(item.maternalMonitoring.labs)}</>) : null}
                      {item.maternalMonitoring.warningSymptoms?.length ? (<><p><strong>Тревожные симптомы:</strong></p>{renderList(item.maternalMonitoring.warningSymptoms)}</>) : null}
                      {item.maternalMonitoring.reassessmentInterval?.length ? (<><p><strong>Частота пересмотра:</strong></p>{renderList(item.maternalMonitoring.reassessmentInterval)}</>) : null}
                    </article>
                  ) : null}
                  {item.fetalMonitoring && hasAnyValues([
                    item.fetalMonitoring.vitalSigns,
                    item.fetalMonitoring.labs,
                    item.fetalMonitoring.imaging,
                    item.fetalMonitoring.warningSymptoms,
                    item.fetalMonitoring.reassessmentInterval,
                  ]) ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Мониторинг плода</div>
                      {item.fetalMonitoring.imaging?.length ? (<><p><strong>Инструменты:</strong></p>{renderList(item.fetalMonitoring.imaging)}</>) : null}
                      {item.fetalMonitoring.warningSymptoms?.length ? (<><p><strong>Признаки ухудшения:</strong></p>{renderList(item.fetalMonitoring.warningSymptoms)}</>) : null}
                      {item.fetalMonitoring.reassessmentInterval?.length ? (<><p><strong>Частота оценки:</strong></p>{renderList(item.fetalMonitoring.reassessmentInterval)}</>) : null}
                    </article>
                  ) : null}
                  {item.inpatientVsOutpatient && hasAnyValues([
                    item.inpatientVsOutpatient.outpatientWhen,
                    item.inpatientVsOutpatient.inpatientWhen,
                  ]) ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Амбулаторно или стационарно</div>
                      {item.inpatientVsOutpatient.outpatientWhen?.length ? (<><p><strong>Амбулаторно, если:</strong></p>{renderList(item.inpatientVsOutpatient.outpatientWhen)}</>) : null}
                      {item.inpatientVsOutpatient.inpatientWhen?.length ? (<><p><strong>Стационар, если:</strong></p>{renderList(item.inpatientVsOutpatient.inpatientWhen)}</>) : null}
                    </article>
                  ) : null}
                  {item.deliveryIndications?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Показания к родоразрешению</div>
                      {renderList(item.deliveryIndications)}
                    </article>
                  ) : null}
                  {item.postpartumManagement?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Послеродовое ведение</div>
                      {renderList(item.postpartumManagement)}
                    </article>
                  ) : null}
                </div>
              </section>
            ) : null}

            {item.clinicalCases && item.clinicalCases.length > 0 && (
              <section className="content-card content-card-wide">
                <h3>Клинические случаи</h3>
                <div className="structured-list">
                  {item.clinicalCases.map((clinicalCase, index) => (
                    <article className="structured-item" key={index}>
                      <div className="structured-item-title">Случай {index + 1}</div>
                      <p><strong>Жалобы:</strong> {clinicalCase.presentation}</p>
                      {clinicalCase.history && <p><strong>Анамнез:</strong> {clinicalCase.history}</p>}
                      <p><strong>Данные:</strong> {clinicalCase.findings}</p>
                      {clinicalCase.decisionPoints?.length ? (
                        <>
                          <p><strong>Ключевые точки решения:</strong></p>
                          {renderList(clinicalCase.decisionPoints)}
                        </>
                      ) : null}
                      <p><strong>Диагноз:</strong> {clinicalCase.diagnosis}</p>
                      <p><strong>Лечение:</strong> {clinicalCase.treatment}</p>
                      {clinicalCase.whyThisPlan && <p><strong>Почему так:</strong> {clinicalCase.whyThisPlan}</p>}
                      <p><strong>Исход:</strong> {clinicalCase.outcome}</p>
                      {clinicalCase.guidelineJustification && <p><strong>Опора на guideline:</strong> {clinicalCase.guidelineJustification}</p>}
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
            {(item.guidelineStatus || item.lastReviewed) && (
              <section className="content-card content-card-wide overview-summary-card">
                <span className="quick-summary-eyebrow">Актуальность данных</span>
                <div className="overview-summary-grid">
                  {item.guidelineStatus ? (
                    <article className="structured-item overview-summary-item">
                      <div className="structured-item-title">Статус guideline-базы</div>
                      <p>{normalizeText(item.guidelineStatus)}</p>
                    </article>
                  ) : null}
                  {item.lastReviewed ? (
                    <article className="structured-item overview-summary-item">
                      <div className="structured-item-title">Последний пересмотр</div>
                      <p>{normalizeText(item.lastReviewed)}</p>
                    </article>
                  ) : null}
                </div>
              </section>
            )}

            {item.guidelineBasis && item.guidelineBasis.length > 0 && (
              <section className="content-card content-card-wide">
                <h3>Источник клинической логики</h3>
                <div className="structured-list">
                  {item.guidelineBasis.map((guideline, index) => (
                    <article className="structured-item" key={index}>
                      <div className="structured-item-title">{guideline.organization}</div>
                      {guideline.year && <p><strong>Год:</strong> {guideline.year}</p>}
                      {guideline.title && <p><strong>Документ:</strong> {guideline.title}</p>}
                      {guideline.documentType && <p><strong>Тип:</strong> {guideline.documentType}</p>}
                      {guideline.status && <p><strong>Статус:</strong> {guideline.status}</p>}
                      {guideline.scope && <p>{guideline.scope}</p>}
                    </article>
                  ))}
                </div>
              </section>
            )}

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
          onScroll={handleModalScroll}
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

          <div
            className={`modal-quick-strip ${isMobile && !isQuickStripExpanded ? 'is-collapsed' : ''}`}
            aria-expanded={!isMobile || isQuickStripExpanded}
          >
            <div className="modal-quick-strip-header">
              <div className="modal-quick-meta">
                <span className="modal-quick-chip">{item.subtitle}</span>
                <span className="modal-quick-chip">МКБ {icdLabel}</span>
                {item.clinicalSummary?.diagnosticMinimum?.[0] && (
                  <span className="modal-quick-chip is-muted modal-quick-chip-detail">
                    Диагностика: {item.clinicalSummary.diagnosticMinimum[0]}
                  </span>
                )}
              </div>
              {isMobile ? (
                <button
                  type="button"
                  className="modal-quick-toggle"
                  onClick={() => setIsQuickStripExpanded((value) => !value)}
                  aria-expanded={isQuickStripExpanded}
                  aria-label={isQuickStripExpanded ? 'Свернуть краткую сводку' : 'Развернуть краткую сводку'}
                >
                  {isQuickStripExpanded ? 'Скрыть' : 'Показать'}
                </button>
              ) : null}
            </div>
            {item.clinicalSummary?.quickSummary && <p className="modal-quick-summary">{item.clinicalSummary.quickSummary}</p>}
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
                id={`${titleId}-${tab.id}-tab`}
                aria-controls={tab.id === activeTab ? panelId : undefined}
                tabIndex={activeTab === tab.id ? 0 : -1}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="modal-body" id={panelId} role="tabpanel" aria-labelledby={`${titleId}-${activeTab}-tab`}>
            {renderContent()}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DiseaseModal;
