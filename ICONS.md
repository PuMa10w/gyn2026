# GYN Premium App Icons

## Overview

Премиальные иконки для GYN Clinical PWA, оптимизированные для iPhone.

## Created Assets

### SVG Icons
- `src/assets/app-icon.svg` — 1024x1024 премиальная иконка с градиентом
- `public/favicon.svg` — 64x64 favicon с медицинским силуэтом

### PNG Icons
- `public/logo192.png` — 192x192 PWA иконка (maskable)
- `public/logo512.png` — 512x512 PWA иконка (maskable)
- `public/apple-touch-icon.png` — 180x180 iPhone иконка
- `public/favicon.ico` — многоразмерный ICO файл

### Splash Screens
- `public/splash-1125x2436.png` — iPhone 14 Pro Max/XR
- `public/splash-750x1334.png` — iPhone 8 Plus
- `public/splash-1242x2208.png` — iPhone 6 Plus

## Color Palette

```css
--color-primary: #6B5C9C;    /* Deep Amethyst */
--color-secondary: #D4A76A;   /* Amber Gold */
--color-accent: #E8847D;     /* Coral */
```

## Usage

### React Component
```tsx
import PremiumIcon from './components/PremiumIcon';

<PremiumIcon variant="gyn" size={24} aria-label="Гинекология" />
<PremiumIcon variant="ob" size={24} aria-label="Акушерство" />
<PremiumIcon variant="oncology" size={24} aria-label="Онкология" />
```

### CSS Classes
```css
.premium-icon { /* Animated icon container */ }
.medical-badge { /* Status badge */ }
.status-indicator { /* Pulse indicator */ }
```

## Design Features

- **Gradient**: Deep Amethyst → Amber Gold → Coral
- **Glow Effect**: Subtle outer glow for depth
- **Stylized Silhouette**: Uterus + ovary abstract symbol
- **iPhone Optimized**: Safe area insets, touch targets 44px+
- **Dark Mode**: Automatic theme switching
- **Reduced Motion**: Respects `prefers-reduced-motion`

## Technical Specs

- **Format**: SVG (primary), PNG (fallback)
- **Sizes**: 16, 24, 32, 48, 64, 128, 192, 256, 512, 1024 px
- **Color Space**: sRGB
- **Compression**: Optimized for web delivery

## iPhone PWA Support

- `apple-mobile-web-app-capable`: yes
- `apple-mobile-web-app-status-bar-style`: black-translucent
- `apple-mobile-web-app-title`: GYN
- `display`: standalone
- `orientation`: portrait-primary