import React from 'react';

interface PremiumIconProps {
  variant?: 'gyn' | 'ob' | 'oncology' | 'general';
  size?: number;
  className?: string;
  'aria-label'?: string;
}

const PremiumIcon: React.FC<PremiumIconProps> = ({
  variant = 'general',
  size = 24,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const colors = {
    gyn: '#6B5C9C',
    ob: '#D4A76A',
    oncology: '#E07065',
    general: '#6B5C9C',
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={`premium-icon ${className}`}
      aria-label={ariaLabel}
      role="img"
    >
      <defs>
        <linearGradient id={`grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors[variant]} />
          <stop offset="100%" stopColor="#D4A76A" />
        </linearGradient>
        <filter id="glow-premium">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Background circle */}
      <circle cx="30" cy="30" r="24" fill={`url(#grad-${variant})`} />
      
      {/* Stylized uterus/organ silhouette */}
      <g filter="url(#glow-premium)" opacity="0.9">
        <path
          d="M30,18 
             C22,18 18,26 18,34 
             C18,42 22,50 30,50 
             C38,50 42,42 42,34 
             C42,26 38,18 30,18 Z"
          fill="rgba(255,255,255,0.25)"
        />
        <circle cx="24" cy="34" r="5" fill="rgba(255,255,255,0.4)" />
        <circle cx="36" cy="34" r="5" fill="rgba(255,255,255,0.4)" />
        <path d="M30,24 L30,38" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      
      {/* Glowing highlight */}
      <circle cx="30" cy="30" r="26" fill="rgba(255,255,255,0.08)" />
    </svg>
  );
};

export default PremiumIcon;