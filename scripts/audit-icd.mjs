import fs from 'fs';
import path from 'path';

// Полный список кодов МКБ-10 (Гинекология + Акушерство)
// Гинекология: N70-N99 (воспалительные, N80-N98 - другие)
const GYN_RANGE = [];
for (let i = 70; i <= 99; i++) {
  GYN_RANGE.push(`N${i}`);
  // Добавляем подкатегории для основных
  if (i === 70 || i === 71 || i === 73 || i === 74 || i === 75 || i === 76 || i === 80 || i === 81 || i === 82 || i === 83 || i === 84 || i === 85 || i === 89 || i === 90 || i === 91 || i === 92 || i === 93 || i === 94 || i === 95 || i === 96 || i === 97 || i === 98 || i === 99) {
    for (let j = 0; j <= 9; j++) {
      GYN_RANGE.push(`N${i}.${j}`);
    }
  }
}

// Акушерство: O00-O99
const OBS_RANGE = [];
for (let i = 0; i <= 99; i++) {
  const code = i < 10 ? `O0${i}` : `O${i}`;
  OBS_RANGE.push(code);
  // Подкатегории для основных
  if (i === 10 || i === 11 || i === 12 || i === 13 || i === 14 || i === 15 || i === 20 || i === 21 || i === 24 || i === 30 || i === 32 || i === 33 || i === 34 || i === 35 || i === 36 || i === 40 || i === 41 || i === 42 || i === 43 || i === 44 || i === 45 || i === 47 || i === 48 || i === 60 || i === 62 || i === 64 || i === 66 || i === 68 || i === 70 || i === 72 || i === 73 || i === 74 || i === 80 || i === 82 || i === 85 || i === 86 || i === 87 || i === 88 || i === 90 || i === 91 || i === 98 || i === 99) {
    for (let j = 0; j <= 9; j++) {
      OBS_RANGE.push(`${code}.${j}`);
    }
  }
}

// Функция извлечения кодов из файлов
function extractCodesFromFiles(dir) {
  const codes = new Set();
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  
  files.forEach(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    // Ищем паттерн icd: "N..." или icd: "O..."
    const regex = /icd:\s*"([NO]\d+\.?\d*)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      codes.add(match[1]);
    }
  });
  
  return codes;
}

// Основная логика
const gynDir = path.join(process.cwd(), 'src', 'data', 'gynChunks');
const obsDir = path.join(process.cwd(), 'src', 'data', 'obsChunks');

console.log('🔍 Аудит базы данных МКБ-10...\n');

const existingGyn = extractCodesFromFiles(gynDir);
const existingObs = extractCodesFromFiles(obsDir);

console.log(`📊 Найдено кодов (Гинекология): ${existingGyn.size}`);
console.log(`📊 Найдено кодов (Акушерство): ${existingObs.size}\n`);

// Проверяем отсутствующие
const missingGyn = GYN_RANGE.filter(code => !existingGyn.has(code));
const missingObs = OBS_RANGE.filter(code => !existingObs.has(code));

console.log(`❌ Отсутствуют (Гинекология): ${missingGyn.length}`);
missingGyn.slice(0, 30).forEach(code => console.log(`   - ${code}`));
if (missingGyn.length > 30) console.log(`   ... и еще ${missingGyn.length - 30}`);

console.log(`\n❌ Отсутствуют (Акушерство): ${missingObs.length}`);
missingObs.slice(0, 30).forEach(code => console.log(`   - ${code}`));
if (missingObs.length > 30) console.log(`   ... и еще ${missingObs.length - 30}`);

// Процент покрытия
const totalGyn = new Set(GYN_RANGE).size;
const totalObs = new Set(OBS_RANGE).size;
console.log(`\n📈 Покрытие (Гинекология): ${((existingGyn.size / totalGyn) * 100).toFixed(1)}%`);
console.log(`📈 Покрытие (Акушерство): ${((existingObs.size / totalObs) * 100).toFixed(1)}%`);

// Сохраняем полный список отсутствующих
const report = {
  missingGyn,
  missingObs,
  coverage: {
    gyn: `${((existingGyn.size / totalGyn) * 100).toFixed(1)}%`,
    obs: `${((existingObs.size / totalObs) * 100).toFixed(1)}%`,
  }
};

fs.writeFileSync(
  path.join(process.cwd(), 'icd-audit-report.json'),
  JSON.stringify(report, null, 2)
);

console.log('\n✅ Отчет сохранен: icd-audit-report.json');