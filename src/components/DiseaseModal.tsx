import React, { useEffect, useId, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { gynIcons, obsIcons } from './Icons';
import { useModalBehavior } from '../hooks/useModalBehavior';
import type { Disease } from '../types';
import { AIClinicalAssistant } from './AIClinicalAssistant';
import { Organ3DViewer } from './Organ3DViewer';
import { SymptomChecker } from './SymptomChecker';
import { PatientMemo } from './PatientMemo';
import { QRShareButton } from './QRShareButton';
import { PubMedFeed } from './PubMedFeed';
import { isObstetricsLabel, repairText } from '../utils/textRepair';

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
  { id: 'quick', label: 'Кратко' },
  { id: 'overview', label: 'Обзор' },
  { id: 'diagnostics', label: 'Диагностика' },
  { id: 'ultrasound', label: 'УЗИ' },
  { id: 'treatment', label: 'Лечение' },
  { id: 'management', label: 'Ведение' },
  { id: 'guidelines', label: 'Рекомендации' },
  { id: 'ai-assistant', label: 'AI помощник' },
  { id: '3d-atlas', label: '3D атлас' },
  { id: 'symptom-checker', label: 'AI-диагност' },
  { id: 'patient-memo', label: 'Памятка' },
  { id: 'pubmed', label: 'PubMed' },
] as const;

type ModalTab = (typeof tabs)[number]['id'];

function normalizeText(value: string) {
  return repairText(value).replace(/\s+/g, ' ').trim();
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

function buildTreatmentSteps(treatment: Disease['treatment']) {
  return [
    ...(treatment.firstLine ?? treatment.conservative ?? []).map((detail) => ({ step: 'Первая линия', detail })),
    ...(treatment.secondLine ?? []).map((detail) => ({ step: '�’С‚орая линия', detail })),
    ...(treatment.proceduralOrSurgical ?? treatment.surgical ?? []).map((detail) => ({ step: 'Про�†едур�‹/С…ирургия', detail })),
    ...(treatment.inpatientManagement ?? []).map((detail) => ({ step: 'С�‚Р°С†ионар', detail })),
  ];
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
  const [activeTab, setActiveTab] = useState<ModalTab>('quick');
  const [isMobile, setIsMobile] = useState(false);
  const [isQuickStripExpanded, setIsQuickStripExpanded] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; time: number } | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const panelId = `${titleId}-${activeTab}-panel`;
  const { modalRef, closeButtonRef, handleModalKeyDown } = useModalBehavior(onClose);
  
  const IconComponent = isObstetricsLabel(item.subtitle)
    ? (obsIcons as Record<string, React.ReactNode>)[item.icon]
    : (gynIcons as Record<string, React.ReactNode>)[item.icon];
  const displayName = repairText(item.name);
  const displaySubtitle = item.icd?.startsWith('O') ? 'Акушерство' : repairText(item.subtitle);
  const icdLabel = repairText(item.icdDetail ?? item.icd);

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
    setTouchStart({ x: touch.clientX, y: touch.clientY, time: Date.now() });
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStart) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    // Prevent vertical scroll if horizontal swipe is dominant
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      e.preventDefault();
    }
  }, [touchStart]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart || !isMobile) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    const deltaTime = Date.now() - touchStart.time;

    // Check for horizontal swipe first (tab switch)
    if (Math.abs(deltaX) > 50) {
      const currentTabIndex = tabs.findIndex(tab => tab.id === activeTab);
      if (currentTabIndex === -1) {
        setTouchStart(null);
        return;
      }
      if (deltaX > 50) {
        // Swipe right: previous tab
        const prevIndex = (currentTabIndex - 1 + tabs.length) % tabs.length;
        setActiveTab(tabs[prevIndex].id);
      } else if (deltaX < -50) {
        // Swipe left: next tab
        const nextIndex = (currentTabIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex].id);
      }
      setTouchStart(null);
      return;
    }

    // Check for vertical swipe (close modal)
    if (deltaY > 100 && deltaTime < 300) {
      onClose();
    }
    setTouchStart(null);
  }, [touchStart, isMobile, onClose, activeTab]);

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
                <span className="quick-summary-eyebrow">Клини�‡еский �„окус</span>
                {item.overview.quickTake ? <p>{normalizeText(item.overview.quickTake)}</p> : null}
                <div className="overview-summary-grid">
                  {item.overview.prevalence ? (
                    <article className="structured-item overview-summary-item">
                      <div className="structured-item-title">Распрос�‚раненнос�‚ь</div>
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
                      <div className="structured-item-title">Прак�‚и�‡еский ак�†ен�‚</div>
                      <p>{normalizeText(item.overview.practiceFocus)}</p>
                    </article>
                  ) : null}
                </div>
              </section>
            ) : null}

            {hasAnyValues([item.treatment.conservative, item.treatment.surgical, item.treatment.firstLine]) && (item.icd?.includes('N70') || item.icd?.includes('N92')) && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  marginBottom: '16px',
                  fontSize: '13px',
                }}
              >
                ⚠️ Про�‚окол ле�‡ения може�‚ Р±С‹С‚ь ус�‚арев�€им. Рекомендуе�‚ся свери�‚ься с ак�‚уальн�‹ми клини�‡ескими рекоменда�†иями.
              </motion.div>
            )}

            <section className="content-card content-card-wide">
              <h3>Определение</h3>
              <p>{normalizeText(item.definition)}</p>
            </section>

            <section className="content-card">
              <h3>Эпидемиология</h3>
              <p>{normalizeText(item.epidemiology)}</p>
            </section>

            <section className="content-card">
              <h3>Клини�‡еская кар�‚ина</h3>
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
                <h3>Па�‚С‚ерн�‹ симп�‚омов</h3>
                <div className="structured-list">
                  {item.symptomGroups.typical?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Типи�‡н�‹е проявления</div>
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
                      <div className="structured-item-title">Тревожн�‹е симп�‚ом�‹</div>
                      {renderList(item.symptomGroups.alarm)}
                    </article>
                  ) : null}
                  {item.symptomGroups.atypical?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">А�‚ипи�‡н�‹е вариан�‚С‹</div>
                      {renderList(item.symptomGroups.atypical)}
                    </article>
                  ) : null}
                </div>
              </section>
            ) : null}

            <section className="content-card content-card-wide">
              <h3>Р­С‚иология</h3>
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
                <h3>{item.severityStratification.title ?? 'С�‚ра�‚и�„ика�†ия �‚яжес�‚и'}</h3>
                <div className="structured-list">
                  {item.severityStratification.tiers.map((tier, index) => (
                    <article className="structured-item" key={index}>
                      <div className="structured-item-title">{tier.name}</div>
                      {renderList(tier.criteria)}
                      {tier.clinicalMeaning ? <p><strong>Клини�‡еское зна�‡ение:</strong> {normalizeText(tier.clinicalMeaning)}</p> : null}
                      {tier.managementImpact ? <p><strong>�’лияние на �‚ак�‚ику:</strong> {normalizeText(tier.managementImpact)}</p> : null}
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
                <p>{normalizeText(item.clinicalSummary.quickSummary)}</p>
              </section>
            )}

            {item.clinicalSummary?.redFlags?.length ? (
              <section className="content-card quick-card quick-card-alert">
                <h3>Красные флаги</h3>
                <ul>
                  {item.clinicalSummary.redFlags.map((entry, index) => (
                    <li key={index}>{normalizeText(entry)}</li>
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
                    <li key={index}>{normalizeText(entry)}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {item.clinicalSummary?.whenToEscalate?.length ? (
              <section className="content-card quick-card">
                <h3>Когда эскалировать</h3>
                <ul>
                  {item.clinicalSummary.whenToEscalate.map((entry, index) => (
                    <li key={index}>{normalizeText(entry)}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {item.clinicalSummary?.clinicalPearls?.length ? (
              <section className="content-card content-card-wide quick-card quick-card-pearl">
                <h3>Клинические акценты</h3>
                <ul>
                  {item.clinicalSummary.clinicalPearls.map((entry, index) => (
                    <li key={index}>{normalizeText(entry)}</li>
                  ))}
                </ul>
              </section>
            ) : null}
            {item.patientExplanation ? (
              <section className="content-card content-card-wide patient-explanation-card">
                <span className="quick-summary-eyebrow">Для пациентки</span>
                {item.patientExplanation.plainLanguageSummary ? <p>{normalizeText(item.patientExplanation.plainLanguageSummary)}</p> : null}
                {item.patientExplanation.whenToSeekCare?.length ? (
                  <>
                    <h3>Когда обратиться за помощью</h3>
                    {renderList(item.patientExplanation.whenToSeekCare)}
                  </>
                ) : null}
              </section>
            ) : null}
          </div>

        );
      case 'diagnostics':
        return (
          <div className="tab-content modal-grid" id={descriptionId}>
            <section className="content-card content-card-wide diagnostics-hero">
              <h3>То�‡ная диагнос�‚ика</h3>
              <p>
                Э�‚о не прос�‚о список исследований, а рабо�‡ий алгори�‚м: на �‡С‚о ориен�‚ирова�‚ься в
                осмо�‚ре, какие �‚ес�‚С‹ под�‚верждаю�‚ диагноз и какие маркер�‹ помогаю�‚ у�‚о�‡ни�‚ь кар�‚ину.
              </p>
            </section>

            <section className="content-card content-card-wide">
              <h3>Алгори�‚м диагнос�‚ики</h3>
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
              <h3>Маркер�‹ и лабора�‚ория</h3>
              <p>{normalizeText(item.diagnostics.markers)}</p>
            </section>

            <section className="content-card">
              <h3>Клини�‡еский коммен�‚арий</h3>
              <p>
                О�†енивай�‚е диагноз по совокупнос�‚и симп�‚омов, данн�‹С… осмо�‚ра, визуализа�†ии и
                лабора�‚орн�‹С… маркеров. При а�‚ипи�‡ном �‚РµС‡ении нужен пересмо�‚р ди�„С„ерен�†иального
                диагноза и пов�‚орная о�†енка �‚ак�‚ики.
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
                <h3>Кри�‚ерии диагноза</h3>
                <div className="structured-list">
                  {item.diagnosticCriteria.clinical?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Клини�‡еские кри�‚ерии</div>
                      {renderList(item.diagnosticCriteria.clinical)}
                    </article>
                  ) : null}
                  {item.diagnosticCriteria.laboratory?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">�›абора�‚орн�‹е кри�‚РµСЂРёРё</div>
                      {renderList(item.diagnosticCriteria.laboratory)}
                    </article>
                  ) : null}
                  {item.diagnosticCriteria.imaging?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">РРЅСЃС‚румен�‚альн�‹е кри�‚ерии</div>
                      {renderList(item.diagnosticCriteria.imaging)}
                    </article>
                  ) : null}
                  {item.diagnosticCriteria.diagnosisConfirmedWhen?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">�”иагноз под�‚вержден, если</div>
                      {renderList(item.diagnosticCriteria.diagnosisConfirmedWhen)}
                    </article>
                  ) : null}
                  {item.diagnosticCriteria.diagnosisExcludedWhen?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">�”иагноз маловероя�‚ен, если</div>
                      {renderList(item.diagnosticCriteria.diagnosisExcludedWhen)}
                    </article>
                  ) : null}
                </div>
              </section>
            ) : null}

            {item.diagnostics.imaging && item.diagnostics.imaging.length > 0 && (
              <section className="content-card">
                <h3>Р’изуализа�†ия</h3>
                <ul>
                  {item.diagnostics.imaging.map((entry, index) => (
                    <li key={index}>{entry}</li>
                  ))}
                </ul>
              </section>
            )}

            {item.diagnostics.differential && item.diagnostics.differential.length > 0 && (
              <section className="content-card">
                <h3>Р”и�„С„ерен�†иальн�‹й диагноз</h3>
                <ul>
                  {item.diagnostics.differential.map((entry, index) => (
                    <li key={index}>{entry}</li>
                  ))}
                </ul>
              </section>
            )}

            {item.differentialDiagnosis && item.differentialDiagnosis.length > 0 && (
              <section className="content-card content-card-wide">
                <h3>С�‚рук�‚урн�‹й ди�„С„ерен�†иальн�‹й диагноз</h3>
                <div className="structured-list">
                  {item.differentialDiagnosis.map((entry, index) => (
                    <article className="structured-item" key={index}>
                      <div className="structured-item-title">{entry.condition}</div>
                      {entry.whyConfused && <p><strong>По�‡ему по�…ож:</strong> {entry.whyConfused}</p>}
                      {entry.howToDistinguish && <p><strong>Как о�‚ли�‡и�‚ь:</strong> {entry.howToDistinguish}</p>}
                      {entry.testsIfNeeded?.length ? (
                        <>
                          <p><strong>Ч�‚о у�‚о�‡ни�‚ь:</strong></p>
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
                <h3>Про�‚окол�‹ исследования</h3>
                <div className="structured-list">
                  {item.ultrasound.protocols.map((protocol, index) => (
                    <article className="structured-item" key={index}>
                      <div className="structured-item-title">{protocol.method}</div>
                      <ul>
                        {protocol.indications.map((indication, indicationIndex) => (
                          <li key={indicationIndex}>{indication}</li>
                        ))}
                      </ul>
                      {protocol.preparation && <p className="structured-item-note">Подго�‚овка: {protocol.preparation}</p>}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {item.ultrasound?.findings && item.ultrasound.findings.length > 0 && (
              <section className="content-card content-card-wide">
                <h3>Уль�‚развуков�‹е признаки</h3>
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
                      {finding.pathology && <p><strong>Па�‚ология:</strong> {finding.pathology}</p>}
                      {finding.clinicalSignificance && <p><strong>Клини�‡еское зна�‡ение:</strong> {finding.clinicalSignificance}</p>}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {item.ultrasound?.echogenicity && (
              <section className="content-card">
                <h3>Р­С…ос�‚рук�‚ура</h3>
                <p>{item.ultrasound.echogenicity}</p>
              </section>
            )}

            {item.ultrasound?.vascularization && (
              <section className="content-card">
                <h3>Р’аскуляриза�†ия</h3>
                <p>{item.ultrasound.vascularization}</p>
              </section>
            )}

            {item.ultrasound?.dopplerFindings && (
              <section className="content-card">
                <h3>Р”опплер</h3>
                <p>{item.ultrasound.dopplerFindings}</p>
              </section>
            )}

            {item.ultrasound?.normalValues && (
              <section className="content-card">
                <h3>Нормальн�‹е зна�‡ения</h3>
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
                <h3>Прак�‚и�‡еские сове�‚С‹</h3>
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
                <h3>Консерва�‚ивная �‚ерапия</h3>
                <ul>
                  {item.treatment.conservative.map((entry, index) => (
                    <li key={index}>{renderSafeTreatmentEntry(entry)}</li>
                  ))}
                </ul>
              </section>
            )}

            {item.treatment.surgical && (
              <section className="content-card content-card-wide">
                <h3>Хирурги�‡еская �‚ак�‚ика</h3>
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
                <h3>Рекоменда�†ии</h3>
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
                <h3>Алгори�‚м ведения</h3>
                <div className="structured-list">
                  {item.managementAlgorithm.initialAssessment?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Перви�‡ная о�†енка</div>
                      {renderList(item.managementAlgorithm.initialAssessment)}
                    </article>
                  ) : null}
                  {item.managementAlgorithm.confirmDiagnosis?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Под�‚верждение диагноза</div>
                      {renderList(item.managementAlgorithm.confirmDiagnosis)}
                    </article>
                  ) : null}
                  {item.managementAlgorithm.startTreatment?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">С�‚ар�‚ Р»РµС‡ения</div>
                      {renderList(item.managementAlgorithm.startTreatment)}
                    </article>
                  ) : null}
                  {item.managementAlgorithm.reassess?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Перео�†енка</div>
                      {renderList(item.managementAlgorithm.reassess)}
                    </article>
                  ) : null}
                  {item.managementAlgorithm.escalateWhen?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Когда эскалирова�‚ь</div>
                      {renderList(item.managementAlgorithm.escalateWhen)}
                    </article>
                  ) : null}
                  {item.managementAlgorithm.referWhen?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Когда направля�‚ь</div>
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
                {item.prognosis.survival && <p><strong>РСЃС…од�‹:</strong> {item.prognosis.survival}</p>}
              </section>
            )}

            {item.followUp && (
              <section className="content-card">
                <h3>Наблюдение</h3>
                {item.followUp.frequency && <p><strong>Час�‚о�‚Р°:</strong> {item.followUp.frequency}</p>}
                {item.followUp.duration && <p><strong>Р”ли�‚ельнос�‚ь:</strong> {item.followUp.duration}</p>}
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
                <h3>Триггер�‹ пересмо�‚ра</h3>
                {item.followUpTriggers.routineReview?.length ? (
                  <>
                    <p><strong>Планов�‹й кон�‚роль:</strong></p>
                    {renderList(item.followUpTriggers.routineReview)}
                  </>
                ) : null}
                {item.followUpTriggers.earlierReviewIf?.length ? (
                  <>
                    <p><strong>Рань�€е срока, если:</strong></p>
                    {renderList(item.followUpTriggers.earlierReviewIf)}
                  </>
                ) : null}
                {item.followUpTriggers.switchTreatmentIf?.length ? (
                  <>
                    <p><strong>Меня�‚ь �‚ак�‚ику, если:</strong></p>
                    {renderList(item.followUpTriggers.switchTreatmentIf)}
                  </>
                ) : null}
                {item.followUpTriggers.urgentReassessmentIf?.length ? (
                  <>
                    <p><strong>Сро�‡но перео�†ени�‚ь, если:</strong></p>
                    {renderList(item.followUpTriggers.urgentReassessmentIf)}
                  </>
                ) : null}
              </section>
            ) : null}

            {(item.fertilityImpact?.length || item.recurrenceRisk?.length || item.malignancyRisk || item.screeningAndPrevention?.length || item.whenBiopsyNeeded?.length) ? (
              <section className="content-card content-card-wide">
                <h3>�”ополни�‚ельн�‹е клини�‡еские ак�†ен�‚С‹</h3>
                <div className="structured-list">
                  {item.fertilityImpact?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Р’лияние на �„ер�‚ильнос�‚ь</div>
                      {renderList(item.fertilityImpact)}
                    </article>
                  ) : null}
                  {item.recurrenceRisk?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Риск ре�†идива</div>
                      {renderList(item.recurrenceRisk)}
                    </article>
                  ) : null}
                  {item.malignancyRisk?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Онкологи�‡еские риски</div>
                      {renderList(item.malignancyRisk)}
                    </article>
                  ) : null}
                  {item.screeningAndPrevention?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Скрининг и про�„илак�‚ика</div>
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
                <h3>Чего избега�‚ь</h3>
                {renderList(item.contraindicatedOrAvoid)}
              </section>
            )}

            {item.patientCounseling && item.patientCounseling.length > 0 && (
              <section className="content-card">
                <h3>Р§С‚о объясни�‚ь па�†иен�‚ке</h3>
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
                <h3>Особ�‹е клини�‡еские групп�‹</h3>
                <div className="structured-list">
                  {item.specialPopulations.adolescents?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Подрос�‚ки</div>
                      {renderList(item.specialPopulations.adolescents)}
                    </article>
                  ) : null}
                  {item.specialPopulations.pregnancy?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">�‘еременнос�‚ь</div>
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
                      <div className="structured-item-title">Пос�‚менопауза</div>
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
                      <div className="structured-item-title">Планирование беременнос�‚и</div>
                      {renderList(item.specialPopulations.fertilityPlanning)}
                    </article>
                  ) : null}
                </div>
              </section>
            ) : null}

            {(item.timingOfDelivery || item.maternalMonitoring || item.fetalMonitoring || item.inpatientVsOutpatient || item.deliveryIndications?.length || item.postpartumManagement?.length) ? (
              <section className="content-card content-card-wide">
                <h3>Аку�€ерская �‚ак�‚ика</h3>
                <div className="structured-list">
                  {item.timingOfDelivery && hasAnyValues([
                    item.timingOfDelivery.expectantManagementUntil,
                    item.timingOfDelivery.deliverNowWhen,
                    item.timingOfDelivery.gestationalAgeModifiers,
                    item.timingOfDelivery.modeOfDeliveryNotes,
                  ]) ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Срок и способ родоразре�€ения</div>
                      {item.timingOfDelivery.expectantManagementUntil?.length ? (<><p><strong>Ожида�‚ельная �‚ак�‚ика до:</strong></p>{renderList(item.timingOfDelivery.expectantManagementUntil)}</>) : null}
                      {item.timingOfDelivery.deliverNowWhen?.length ? (<><p><strong>Родоразре�€Р°С‚ь немедленно, если:</strong></p>{renderList(item.timingOfDelivery.deliverNowWhen)}</>) : null}
                      {item.timingOfDelivery.gestationalAgeModifiers?.length ? (<><p><strong>Поправки на срок:</strong></p>{renderList(item.timingOfDelivery.gestationalAgeModifiers)}</>) : null}
                      {item.timingOfDelivery.modeOfDeliveryNotes?.length ? (<><p><strong>Заме�‡ания по способу родоразре�€ения:</strong></p>{renderList(item.timingOfDelivery.modeOfDeliveryNotes)}</>) : null}
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
                      <div className="structured-item-title">Мони�‚оринг ма�‚ери</div>
                      {item.maternalMonitoring.vitalSigns?.length ? (<><p><strong>�’и�‚альн�‹е параме�‚р�‹:</strong></p>{renderList(item.maternalMonitoring.vitalSigns)}</>) : null}
                      {item.maternalMonitoring.labs?.length ? (<><p><strong>Р›абора�‚ория:</strong></p>{renderList(item.maternalMonitoring.labs)}</>) : null}
                      {item.maternalMonitoring.warningSymptoms?.length ? (<><p><strong>Тревожн�‹е симп�‚ом�‹:</strong></p>{renderList(item.maternalMonitoring.warningSymptoms)}</>) : null}
                      {item.maternalMonitoring.reassessmentInterval?.length ? (<><p><strong>Час�‚о�‚а пересмо�‚ра:</strong></p>{renderList(item.maternalMonitoring.reassessmentInterval)}</>) : null}
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
                      <div className="structured-item-title">Мони�‚РѕСЂРёРЅРі РїР»РѕРґР°</div>
                      {item.fetalMonitoring.imaging?.length ? (<><p><strong>РРЅСЃС‚румен�‚С‹:</strong></p>{renderList(item.fetalMonitoring.imaging)}</>) : null}
                      {item.fetalMonitoring.warningSymptoms?.length ? (<><p><strong>Признаки у�…уд�€ения:</strong></p>{renderList(item.fetalMonitoring.warningSymptoms)}</>) : null}
                      {item.fetalMonitoring.reassessmentInterval?.length ? (<><p><strong>Час�‚о�‚а о�†енки:</strong></p>{renderList(item.fetalMonitoring.reassessmentInterval)}</>) : null}
                    </article>
                  ) : null}
                  {item.inpatientVsOutpatient && hasAnyValues([
                    item.inpatientVsOutpatient.outpatientWhen,
                    item.inpatientVsOutpatient.inpatientWhen,
                  ]) ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Амбула�‚орно или с�‚Р°С†ионарно</div>
                      {item.inpatientVsOutpatient.outpatientWhen?.length ? (<><p><strong>Амбула�‚орно, если:</strong></p>{renderList(item.inpatientVsOutpatient.outpatientWhen)}</>) : null}
                      {item.inpatientVsOutpatient.inpatientWhen?.length ? (<><p><strong>С�‚Р°С†ионар, если:</strong></p>{renderList(item.inpatientVsOutpatient.inpatientWhen)}</>) : null}
                    </article>
                  ) : null}
                  {item.deliveryIndications?.length ? (
                    <article className="structured-item">
                      <div className="structured-item-title">Показания к родоразре�€ению</div>
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
                <h3>Клини�‡еские слу�‡аи</h3>
                <div className="structured-list">
                  {item.clinicalCases.map((clinicalCase, index) => (
                    <article className="structured-item" key={index}>
                      <div className="structured-item-title">Слу�‡ай {index + 1}</div>
                      <p><strong>Жалоб�‹:</strong> {clinicalCase.presentation}</p>
                      {clinicalCase.history && <p><strong>Анамнез:</strong> {clinicalCase.history}</p>}
                      <p><strong>�”анн�‹е:</strong> {clinicalCase.findings}</p>
                      {clinicalCase.decisionPoints?.length ? (
                        <>
                          <p><strong>Клю�‡ев�‹Рµ С‚о�‡ки ре�€ения:</strong></p>
                          {renderList(clinicalCase.decisionPoints)}
                        </>
                      ) : null}
                      <p><strong>�”иагноз:</strong> {clinicalCase.diagnosis}</p>
                      <p><strong>�›РµС‡ение:</strong> {clinicalCase.treatment}</p>
                      {clinicalCase.whyThisPlan && <p><strong>По�‡ему �‚Р°Рє:</strong> {clinicalCase.whyThisPlan}</p>}
                      <p><strong>РСЃС…од:</strong> {clinicalCase.outcome}</p>
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
                <span className="quick-summary-eyebrow">Ак�‚уальнос�‚ь данн�‹С…</span>
                <div className="overview-summary-grid">
                  {item.guidelineStatus ? (
                    <article className="structured-item overview-summary-item">
                      <div className="structured-item-title">С�‚Р°С‚ус guideline-баз�‹</div>
                      <p>{normalizeText(item.guidelineStatus)}</p>
                    </article>
                  ) : null}
                  {item.lastReviewed ? (
                    <article className="structured-item overview-summary-item">
                      <div className="structured-item-title">Последний пересмо�‚р</div>
                      <p>{normalizeText(item.lastReviewed)}</p>
                    </article>
                  ) : null}
                </div>
              </section>
            )}

            {item.guidelineBasis && item.guidelineBasis.length > 0 && (
              <section className="content-card content-card-wide">
                <h3>РСЃС‚о�‡ник клини�‡еской логики</h3>
                <div className="structured-list">
                  {item.guidelineBasis.map((guideline, index) => (
                    <article className="structured-item" key={index}>
                      <div className="structured-item-title">{guideline.organization}</div>
                      {guideline.year && <p><strong>Р“од:</strong> {guideline.year}</p>}
                      {guideline.title && <p><strong>Р”окумен�‚:</strong> {guideline.title}</p>}
                      {guideline.documentType && <p><strong>Тип:</strong> {guideline.documentType}</p>}
                      {guideline.status && <p><strong>С�‚Р°С‚ус:</strong> {guideline.status}</p>}
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
      case 'ai-assistant':
        return (
          <motion.div className="tab-content modal-grid" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
            <AIClinicalAssistant diseaseName={item.name} symptoms={item.symptoms} treatment={buildTreatmentSteps(item.treatment)} />
          </motion.div>
        );
      case '3d-atlas':
        return (
          <motion.div className="tab-content modal-grid" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
            <Organ3DViewer organType="uterus" />
          </motion.div>
        );
      case 'symptom-checker':
        return (
          <motion.div className="tab-content modal-grid" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
            <SymptomChecker />
          </motion.div>
        );
      case 'patient-memo':
        return (
          <motion.div className="tab-content modal-grid" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
            <PatientMemo disease={item} />
          </motion.div>
        );
      case 'pubmed':
        return (
          <motion.div className="tab-content modal-grid" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
            <PubMedFeed diseaseName={item.name} />
          </motion.div>
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
          data-testid="disease-modal"
          initial={isMobile ? { y: '100%' } : { scale: 0.9, y: 50 }}
          animate={isMobile ? { y: 0 } : { scale: 1, y: 0 }}
          exit={isMobile ? { y: '100%' } : { scale: 0.9, y: 50 }}
          transition={isMobile ? { type: 'spring', damping: 25, stiffness: 300 } : { duration: 0.3 }}
          onClick={(event) => event.stopPropagation()}
          onKeyDown={handleModalKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
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
                  {displayName}
                </h2>
                <div className="modal-icd">
                  {icdLabel} • {displaySubtitle}
                </div>
              </div>
            </div>
            <QRShareButton diseaseName={displayName} icdCode={icdLabel} />
            <button
              ref={closeButtonRef}
              type="button"
              className="modal-close"
              onClick={onClose}
              aria-label="Закрыть карточку"
            >
              ×
            </button>
          </div>

          <div
            className={`modal-quick-strip ${isMobile && !isQuickStripExpanded ? 'is-collapsed' : ''}`}
            aria-expanded={!isMobile || isQuickStripExpanded}
          >
            <div className="modal-quick-strip-header">
              <div className="modal-quick-meta">
                <span className="modal-quick-chip">{displaySubtitle}</span>
                <span className="modal-quick-chip">МКБ {icdLabel}</span>
                {item.clinicalSummary?.diagnosticMinimum?.[0] && (
                  <span className="modal-quick-chip is-muted modal-quick-chip-detail">
                    Диагностика: {normalizeText(item.clinicalSummary.diagnosticMinimum[0])}
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
            {item.clinicalSummary?.quickSummary && <p className="modal-quick-summary">{normalizeText(item.clinicalSummary.quickSummary)}</p>}
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
