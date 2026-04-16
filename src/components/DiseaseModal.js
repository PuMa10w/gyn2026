import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gynIcons, obsIcons } from './Icons';

const DiseaseModal = ({ item, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobile, setIsMobile] = useState(false);
  const IconComponent = item.subtitle === 'Гинекология' ? gynIcons[item.icon] : obsIcons[item.icon];

  const tabs = [
    { id: 'overview', label: '📋 Обзор' },
    { id: 'diagnostics', label: '🔬 Диагностика' },
    { id: 'treatment', label: '💊 Лечение' },
    { id: 'guidelines', label: '📖 Рекомендации' }
  ];

  // Detect mobile on mount
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <h3>Определение</h3>
            <p>{item.definition}</p>
            <h3>Эпидемиология</h3>
            <p>{item.epidemiology}</p>
            <h3>Этиология</h3>
            <ul>
              {item.etiology.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
            <h3>Клиническая картина</h3>
            <ul>
              {item.symptoms.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
            {item.classification && (
              <>
                <h3>{item.classification.title}</h3>
                <ul>
                  {item.classification.stages.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </>
            )}
          </div>
        );
      case 'diagnostics':
        return (
          <div className="tab-content">
            <h3>Алгоритм диагностики</h3>
            <ul>
              {item.diagnostics.steps.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
            <h3>Маркеры / Лаборатория</h3>
            <p>{item.diagnostics.markers}</p>
          </div>
        );
      case 'treatment':
        return (
          <div className="tab-content">
            {item.treatment.conservative && (
              <>
                <h3>Консервативная терапия</h3>
                <ul>
                  {item.treatment.conservative.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </>
            )}
            {item.treatment.surgical && (
              <>
                <h3>Хирургическое лечение</h3>
                <ul>
                  {item.treatment.surgical.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </>
            )}
          </div>
        );
      case 'guidelines':
        return (
          <div className="tab-content">
            <h3>Международные рекомендации</h3>
            <table className="guidelines-table">
              <tbody>
                <tr>
                  <td><span className="guideline-badge badge-eau">EAU / ESGE</span></td>
                  <td>{item.treatment.guidelines.eau}</td>
                </tr>
                <tr>
                  <td><span className="guideline-badge badge-acog">ACOG</span></td>
                  <td>{item.treatment.guidelines.acog}</td>
                </tr>
                <tr>
                  <td><span className="guideline-badge badge-ranzcog">RANZCOG</span></td>
                  <td>{item.treatment.guidelines.ranzcog}</td>
                </tr>
                <tr>
                  <td><span className="guideline-badge badge-ru">МЗ РФ</span></td>
                  <td>{item.treatment.guidelines.ru}</td>
                </tr>
              </tbody>
            </table>
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
          onClick={e => e.stopPropagation()}
        >
          {/* Drag indicator for mobile */}
          {isMobile && <div className="modal-drag-indicator" />}

          <div className="modal-header">
            <div className="modal-title-group">
              <div className="modal-icon-wrapper">
                {IconComponent}
              </div>
              <div>
                <h2 className="modal-title">{item.name}</h2>
                <div className="modal-icd">{item.icd} • {item.subtitle}</div>
              </div>
            </div>
            <button className="modal-close" onClick={onClose}>×</button>
          </div>

          <div className="modal-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="modal-body">
            {renderContent()}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DiseaseModal;
