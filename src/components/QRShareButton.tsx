import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PremiumButton } from './PremiumButton';

interface QRShareButtonProps {
  diseaseName: string;
  icdCode: string;
  className?: string;
}

export const QRShareButton: React.FC<QRShareButtonProps> = ({
  diseaseName,
  icdCode,
  className = '',
}) => {
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  // Генерируем URL для шаринга (можно использовать локальный URL или внешний сервис)
  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/?disease=${encodeURIComponent(icdCode)}`
    : '';

  // Используем бесплатный API для генерации QR-кода
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareUrl)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`qr-share ${className}`}>
      <PremiumButton
        onClick={() => setShowQR(!showQR)}
        variant="ghost"
        size="sm"
        shimmer={false}
      >
        {showQR ? 'Скрыть QR' : 'QR-код'}
      </PremiumButton>

      {showQR && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            marginTop: '12px',
            padding: '16px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <h4 style={{ marginTop: 0, marginBottom: '12px', color: '#B97886' }}>
            Поделиться: {diseaseName}
          </h4>
          
          <div style={{ 
            display: 'inline-block',
            padding: '12px',
            background: 'white',
            borderRadius: '8px',
            marginBottom: '12px',
          }}>
            <img 
              src={qrCodeUrl} 
              alt={`QR код для ${diseaseName}`}
              style={{ width: '150px', height: '150px' }}
            />
          </div>

          <p style={{ fontSize: '12px', opacity: 0.7, marginBottom: '12px' }}>
            Отсканируйте код, чтобы открыть карточку на другом устройстве
          </p>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <PremiumButton
              onClick={handleCopyLink}
              variant="secondary"
              size="sm"
            >
              {copied ? 'Скопировано' : 'Копировать ссылку'}
            </PremiumButton>

            <PremiumButton
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: `МКБ-10: ${diseaseName}`,
                    text: `Посмотри карточку заболевания ${diseaseName} (${icdCode})`,
                    url: shareUrl,
                  });
                } else {
                  handleCopyLink();
                }
              }}
              variant="primary"
              size="sm"
            >
              Поделиться
            </PremiumButton>
          </div>

          <p style={{ fontSize: '11px', opacity: 0.5, marginTop: '12px', marginBottom: 0 }}>
            URL: {shareUrl}
          </p>
        </motion.div>
      )}
    </div>
  );
};
