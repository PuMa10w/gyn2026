import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PremiumButton } from './PremiumButton';

interface Paper {
  title: string;
  authors: string;
  journal: string;
  year: string;
  pmid: string;
  abstract?: string;
}

interface PubMedFeedProps {
  diseaseName: string;
  className?: string;
}

// Моковые данные (в реальности тут будет fetch к PubMed API)
const MOCK_PAPERS: Record<string, Paper[]> = {
  'Миома матки': [
    {
      title: 'Uterine Fibroids: Pathogenesis and Current Management Trends',
      authors: 'Stewart EA, et al.',
      journal: 'Obstet Gynecol',
      year: '2023',
      pmid: '37245631',
    },
    {
      title: 'Minimally invasive approaches to uterine fibroid treatment',
      authors: 'Gupta JK, et al.',
      journal: 'Lancet',
      year: '2022',
      pmid: '35483421',
    },
  ],
  'Эндометриоз': [
    {
      title: 'Endometriosis: A Review of Pathophysiology and Treatment',
      authors: 'Zondervan KT, et al.',
      journal: 'N Engl J Med',
      year: '2024',
      pmid: '38151005',
    },
    {
      title: 'Novel biomarkers for early detection of endometriosis',
      authors: 'Vigano P, et al.',
      journal: 'Hum Reprod Update',
      year: '2023',
      pmid: '36734821',
    },
  ],
  'Воспалительные заболевания органов малого таза': [
    {
      title: 'PID: Updated Guidelines for Diagnosis and Treatment',
      authors: 'Ross J, et al.',
      journal: 'CDC MMWR',
      year: '2024',
      pmid: '38903321',
    },
  ],
};

export const PubMedFeed: React.FC<PubMedFeedProps> = ({
  diseaseName,
  className = '',
}) => {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAbstract, setShowAbstract] = useState<string | null>(null);

  const searchPapers = () => {
    setIsLoading(true);
    
    // Симуляция запроса к PubMed API
    // Р еальный запрос: fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${diseaseName}&retmode=json`)
    setTimeout(() => {
      const results = MOCK_PAPERS[diseaseName] || [
        {
          title: `Recent advances in ${diseaseName} management`,
          authors: 'Various Authors',
          journal: 'Medical Journal',
          year: '2024',
          pmid: '00000000',
        },
      ];
      setPapers(results);
      setIsLoading(false);
    }, 1500);
  };

  const openPaper = (pmid: string) => {
    window.open(`https://pubmed.ncbi.nlm.nih.gov/${pmid}/`, '_blank');
  };

  return (
    <motion.div
      className={`pubmed-feed glass ${className}`}
      style={{
        padding: '20px',
        borderRadius: '16px',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h4 style={{ margin: 0, color: '#B97886' }}>рџ“Ў Свежие публикации</h4>
        <PremiumButton
          onClick={searchPapers}
          variant="primary"
          size="sm"
          shimmer={true}
          disabled={isLoading}
        >
          {isLoading ? '⏳ Поиск...' : 'рџ”Ќ Найти статьи'}
        </PremiumButton>
      </div>

      <p style={{ fontSize: '13px', opacity: 0.7, marginBottom: '16px' }}>
        Поиск актуальных исследований по теме: <strong>{diseaseName}</strong>
      </p>

      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: 'center', padding: '20px' }}
        >
          <div className="loading-spinner" style={{ margin: '0 auto 12px' }} />
          <p>Ищем в PubMed...</p>
        </motion.div>
      )}

      {!isLoading && papers.length === 0 && (
        <div style={{ textAlign: 'center', padding: '20px', opacity: 0.5, fontSize: '14px' }}>
          Нажмите "Найти статьи", чтобы увидеть свежие публикации
        </div>
      )}

      {!isLoading && papers.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
        >
          {papers.map((paper, index) => (
            <motion.div
              key={paper.pmid}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)',
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.01, background: 'rgba(255,255,255,0.05)' }}
              onClick={() => openPaper(paper.pmid)}
            >
              <h5 style={{ margin: '0 0 8px 0', fontSize: '14px', lineHeight: 1.4 }}>
                {paper.title}
              </h5>
              <div style={{ fontSize: '12px', opacity: 0.6, marginBottom: '4px' }}>
                {paper.authors} • {paper.journal} • {paper.year}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', opacity: 0.5 }}>PMID: {paper.pmid}</span>
                <PremiumButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAbstract(showAbstract === paper.pmid ? null : paper.pmid);
                  }}
                  variant="ghost"
                  size="sm"
                >
                  {showAbstract === paper.pmid ? 'Скрыть' : 'Аннотация'}
                </PremiumButton>
              </div>
              
              {showAbstract === paper.pmid && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  style={{ marginTop: '8px', fontSize: '13px', opacity: 0.8, lineHeight: 1.5 }}
                >
                  <p style={{ margin: 0 }}>
                    {paper.abstract || 'Аннотация недоступна. Перейдите по ссылке для просмотра полного текста.'}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
          
          <p style={{ fontSize: '11px', opacity: 0.4, textAlign: 'center', marginTop: '8px' }}>
            рџ“– Данные предоставлены PubMed (NCBI). Нажмите на статью для перехода.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};