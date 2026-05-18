import React from 'react';

type PremiumCardProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'section' | 'div';
  tone?: 'default' | 'accent' | 'warning' | 'danger' | 'success';
};

export const PremiumCard = React.forwardRef<HTMLElement, PremiumCardProps>(
  ({ as: Element = 'section', tone = 'default', className = '', children, ...props }, ref) => (
    <Element ref={ref as never} className={`premium-card premium-card--${tone} ${className}`.trim()} {...props}>
      {children}
    </Element>
  ),
);

PremiumCard.displayName = 'PremiumCard';

type PremiumBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: 'neutral' | 'accent' | 'gold' | 'rose' | 'danger' | 'success';
};

export const PremiumBadge = ({ tone = 'neutral', className = '', children, ...props }: PremiumBadgeProps) => (
  <span className={`premium-badge premium-badge--${tone} ${className}`.trim()} {...props}>
    {children}
  </span>
);

type ClinicalPanelProps = React.HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  title: string;
  tone?: 'default' | 'accent' | 'warning' | 'danger' | 'success';
};

export const ClinicalPanel = ({ eyebrow, title, tone = 'default', className = '', children, ...props }: ClinicalPanelProps) => (
  <section className={`clinical-panel clinical-panel--${tone} ${className}`.trim()} {...props}>
    {eyebrow ? <span className="clinical-panel-eyebrow">{eyebrow}</span> : null}
    <h3>{title}</h3>
    {children}
  </section>
);

type SourceBadgeProps = {
  label?: string;
  level?: string;
  note?: string;
};

export const SourceBadge = ({ label = 'Source review', level = 'needs-source-review', note }: SourceBadgeProps) => (
  <span className={`source-badge source-badge--${String(level).replace(/[^a-z0-9-]/gi, '-').toLowerCase()}`} title={note}>
    {label}
  </span>
);

type RiskFlagProps = {
  children: React.ReactNode;
  tone?: 'warning' | 'danger';
};

export const RiskFlag = ({ children, tone = 'warning' }: RiskFlagProps) => (
  <span className={`risk-flag risk-flag--${tone}`}>
    {children}
  </span>
);
