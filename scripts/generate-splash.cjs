const { createCanvas, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// Размеры для iPhone (как в index.html)
const splashSizes = [
  { width: 1125, height: 2436, name: 'splash-1125x2436' },   // iPhone X
  { width: 750, height: 1334, name: 'splash-750x1334' },     // iPhone 8,7,6s,6
  { width: 1242, height: 2208, name: 'splash-1242x2208' },   // iPhone 8+,7+,6s+,6+
];

// Apple Touch Icon
const iconSizes = [
  { width: 180, height: 180, name: 'apple-touch-icon' },
];

// Градиент (как в проекте: Turquoise, Emerald, Gold)
const gradientColors = ['#D89AA7', '#B97886', '#D8B878'];

// Функция для создания градиента
function createGradient(ctx, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, gradientColors[0]);
  gradient.addColorStop(0.5, gradientColors[1]);
  gradient.addColorStop(1, gradientColors[2]);
  return gradient;
}

// Генерация splash-экрана
function generateSplashImage(size) {
  const canvas = createCanvas(size.width, size.height);
  const ctx = canvas.getContext('2d');

  // Фон (градиент)
  ctx.fillStyle = createGradient(ctx, size.width, size.height);
  ctx.fillRect(0, 0, size.width, size.height);

  // Логотип / Текст "GYN"
  const fontSize = Math.min(size.width, size.height) / 8; // Адаптивный размер шрифта
  ctx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, sans-serif`;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Тень для текста (эффект премиум)
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 4;
  
  ctx.fillText('GYN', size.width / 2, size.height / 2);
  
  // Подпись (небольшая)
  const subFontSize = fontSize / 3;
  ctx.font = `${subFontSize}px -apple-system, BlinkMacSystemFont, sans-serif`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.shadowBlur = 10;
  ctx.fillText('Акушерство и Гинекология', size.width / 2, size.height / 2 + fontSize);

  // Сохраняем
  const buffer = canvas.toBuffer('image/png');
  const filePath = path.join(__dirname, '..', 'public', `${size.name}.png`);
  
  // Создаем директорию если нужно
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
    
  fs.writeFileSync(filePath, buffer);
  console.log(`✅ Создан: ${filePath}`);
}

// Генерация иконки (квадратная, упрощённая)
function generateIcon(size) {
  const canvas = createCanvas(size.width, size.height);
  const ctx = canvas.getContext('2d');

  // Фон (градиент)
  ctx.fillStyle = createGradient(ctx, size.width, size.height);
  ctx.fillRect(0, 0, size.width, size.height);

  // Текст "GYN" (меньше, по центру)
  const fontSize = size.width / 2.5;
  ctx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, sans-serif`;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 2;
  
  ctx.fillText('GYN', size.width / 2, size.height / 2);

  // Сохраняем
  const buffer = canvas.toBuffer('image/png');
  const filePath = path.join(__dirname, '..', 'public', `${size.name}.png`);
  fs.writeFileSync(filePath, buffer);
  console.log(`✅ Создана иконка: ${filePath}`);
}

// Генерируем всё
console.log('Генерация splash-экранов для iOS...');
splashSizes.forEach(size => generateSplashImage(size));
console.log('\nГенерация Apple Touch Icon...');
iconSizes.forEach(size => generateIcon(size));

console.log('\nГотово! Все изображения созданы в /public/');