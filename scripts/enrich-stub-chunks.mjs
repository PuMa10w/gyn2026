/**
 * enrich-stub-chunks.mjs
 *
 * Для всех СТАБ-карточек в авто-сгенерированных чанках (gynChunk25-30, obsChunk7-27)
 * подставляет РЕАЛЬНЫЙ клинический контент на основе шаблонов по ICD-группе.
 *
 * ВАЖНО: сгенерированный контент помечается editorialStatus: 'needs-source-review'
 * (согласно content-blueprint.md) — это НЕ верифицированный врачом контент,
 * но он информативен и заменяет пустые стабы «Требуется уточнение».
 *
 * Запуск: node scripts/enrich-stub-chunks.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const STUB_MARKERS = ['Требуется уточнение', 'Данные отсутствуют', 'Клиническое описание для', 'Требуется проверки', 'Требуется уточнения'];
function isStub(text) {
  if (typeof text !== 'string') return false;
  return STUB_MARKERS.some((m) => text.includes(m));
}

// ─── Шаблоны по ICD-префиксам (клинические паттерны) ───────────────────────
// Каждый шаблон: функция (name, icd) => частичный объект Disease с реальным контентом.
function tpl(name, icd) {
  const code = String(icd).toUpperCase();
  const n = name.toLowerCase();
  // Групповые правила
  if (code.startsWith('N70') || code.startsWith('N71') || code.startsWith('N72') || code.startsWith('N73') || code.startsWith('N74') || code.startsWith('N75') || code.startsWith('N76') || code.startsWith('N77')) {
    return inflammatory(name, icd);
  }
  if (n.includes('эндометриоз') || code.startsWith('N80')) return endometriosisTpl(name, icd);
  if (n.includes('миом') || code.startsWith('N95.') ) return genericTpl(name, icd, 'benign');
  if (code.startsWith('N81')) return prolapse(name, icd);
  if (code.startsWith('N83')) return ovarianCyst(name, icd);
  if (code.startsWith('N84')) return polyp(name, icd);
  if (code.startsWith('N85')) return uterineOther(name, icd);
  if (code.startsWith('N86')) return erosion(name, icd);
  if (code.startsWith('N87')) return dysplasia(name, icd);
  if (code.startsWith('N88')) return cervicalOther(name, icd);
  if (code.startsWith('N89')) return vaginalOther(name, icd);
  if (code.startsWith('N90')) return vulvarOther(name, icd);
  if (code.startsWith('N91')) return menstrualAbsent(name, icd);
  if (code.startsWith('N92')) return menorrhagia(name, icd);
  if (code.startsWith('N93')) return menstrualOther(name, icd);
  if (code.startsWith('N94')) return menstrualPain(name, icd);
  if (code.startsWith('N95')) return menopausal(name, icd);
  if (code.startsWith('N96')) return recurrentMiscarriage(name, icd);
  if (code.startsWith('N97')) return infertility(name, icd);
  if (code.startsWith('N98') || code.startsWith('N99')) return postproc(name, icd);
  // Акушерство
  if (code.startsWith('O')) return obstetric(name, icd);
  return genericTpl(name, icd, 'general');
}

// ─── Конкретные шаблоны ─────────────────────────────────────────────────────
function inflammatory(name, icd) {
  return {
    definition: `${name} — воспалительное заболевание женских половых органов, требующее противовоспалительной и/или антибактериальной терапии.`,
    overview: {
      quickTake: `${name} (${icd}): воспалительный процесс органов малого таза; ключ — своевременная антибактериальная терапия для профилактики бесплодия.`,
      prevalence: 'Распространённое состояние; точная частота зависит от локализации.',
      riskLevel: 'moderate',
      practiceFocus: 'Исключить ВЗОМТ, назначить эмпирическую антибактериальную терапию при подозрении, направить к гинекологу.',
    },
    epidemiology: 'Воспалительные заболевания женских половых органов — частая причина обращений к гинекологу.',
    etiology: ['Инфекционные агенты (ИППП, условно-патогенная флора)', 'Восходящая инфекция из влагалища', 'Послеинструментальные вмешательства', 'Снижение местного иммунитета'],
    symptoms: ['Боль внизу живота/тазу', 'Патологические выделения', 'Повышение температуры (при остром процессе)', 'Болезненность при половом акте'],
    symptomGroups: {
      typical: ['Тазовая боль, выделения, дискомфорт.'],
      alarm: ['Высокая лихорадка, сильная боль, подозрение на тубоовариальный абсцесс/разлитой перитонит.'],
    },
    clinicalSummary: {
      quickSummary: `${name}: воспалительный процесс, требующий антибактериальной терапии; не лечите «на глаз» — исключите ВЗОМТ.`,
      redFlags: ['Высокая температура, сильная боль, абсцесс, сепсис.'],
      firstLineActions: ['Осмотр + мазки/ПЦР на ИППП, ОАК/CRP.', 'Эмпирическая антибактериальная терапия по протоколу ВЗОМТ при показаниях.'],
      diagnosticMinimum: ['Осмотр, мазки/ПЦР, ОАК/CRP, УЗИ органов малого таза.'],
      whenToEscalate: ['При абсцессе, сепсисе, отсутствии эффекта терапии.'],
      clinicalPearls: ['Недолеченное воспаление → риск трубного бесплодия и хронической тазовой боли.'],
    },
    guidelineBasis: [{ organization: 'CDC', title: 'STD Treatment Guidelines', documentType: 'Guideline', scope: 'Антибактериальная терапия воспалительных заболеваний.', status: 'latest available active guideline', usedFor: ['treatment', 'diagnosis'] }],
    diagnosticCriteria: { clinical: ['Боль в тазу + воспалительные изменения по данным осмотра/УЗИ.'], laboratory: ['Лейкоцитоз, повышение CRP, положительные тесты на ИППП.'], imaging: ['УЗИ: утолщение стенок, свободная жидкость, абсцесс.'], diagnosisConfirmedWhen: ['Клиника + воспалительные маркеры/визуализация.'], diagnosisExcludedWhen: ['Другая причина боли (хирургическая, гинекологическая невоспалительная).'] },
    severityStratification: { title: 'Тяжесть', tiers: [{ name: 'Острое', criteria: ['Лихорадка, выраженная боль, лейкоцитоз.'], clinicalMeaning: 'Госпитализация при тяжёлом течении.', managementImpact: 'В/в антибиотики.' }, { name: 'Хроническое/вялотекущее', criteria: ['Стёртая симптоматика, рецидивы.'], clinicalMeaning: 'Амбулаторное ведение.', managementImpact: 'Пероральные антибиотики, санация.' }] },
    differentialDiagnosis: [{ condition: 'Острый живот (аппендицит, перекрут)', whyConfused: 'Острая боль в тазу.', howToDistinguish: 'УЗИ, осмотр хирурга.', testsIfNeeded: ['УЗИ', 'осмотр хирурга'] }, { condition: 'ВЗОМТ (PID)', whyConfused: 'Перекрывается по патогенезу.', howToDistinguish: 'Клиника ВЗОМТ + мазки.', testsIfNeeded: ['мазки/ПЦР'] }],
    managementAlgorithm: { initialAssessment: ['Осмотр, мазки, ОАК/CRP, УЗИ.'], confirmDiagnosis: ['Клиника + маркеры воспаления.'], startTreatment: ['Антибактериальная терапия (по протоколу ВЗОМТ при показаниях).'], reassess: ['Контроль через 48-72 ч.'], escalateWhen: ['Абсцесс, сепсис, нет эффекта.'], referWhen: ['К гинекологу/хирургу при осложнениях.'] },
    treatment: { conservative: ['Антибактериальная терапия, НПВС, местное лечение.'], surgical: ['Дренирование абсцесса, лапароскопия при осложнениях.'], guidelines: { acog: 'Эмпирическая терапия ВЗОМТ при клиническом подозрении.', ru: 'Антибиотики по чувствительности/эмпирически; санация очага.' } },
    ultrasound: { protocols: [{ method: 'трансвагинальное', indications: ['Оценка воспаления'], preparation: 'Мочевой пузырь опорожнить' }], findings: [{ location: 'органы малого таза', description: 'Утолщение стенок, свободная жидкость, абсцесс при осложнении.', normal: 'Норма.', pathology: 'Воспалительный инфильтрат, жидкость, абсцесс.', clinicalSignificance: 'Подтверждает воспаление/осложнение.' }], imagingTips: ['УЗИ — основа для исключения абсцесса.'] },
    recommendations: ['Завершить курс антибиотиков.', 'Половой партнёр — обследование/лечение при ИППП.', 'Контроль излеченности.'],
    prognosis: { general: 'Благоприятный при адекватном лечении.', factors: ['Своевременность терапии', 'Наличие осложнений'], survival: 'Доброкачественное течение при лечении.' },
    followUp: { frequency: 'Через 1-2 недели, далее по показаниям', duration: 'До излечения', tests: ['Осмотр', 'мазки', 'УЗИ'] },
    followUpTriggers: { routineReview: ['Контроль излеченности.'], earlierReviewIf: ['Рецидив/ухудшение.'], switchTreatmentIf: ['Нет эффекта.'], urgentReassessmentIf: ['Абсцесс/сепсис.'] },
    contraindicatedOrAvoid: ['Не затягивать с терапией (риск бесплодия).', 'Не игнорировать ИППП у партнёра.'],
    patientCounseling: ['Объяснить важность полного курса антибиотиков.', 'Обсудить барьерную контрацепцию на период лечения.'],
    specialPopulations: { adolescents: ['Часто ИППП; обследование обязательно.'], fertilityPlanning: ['Контроль проходимости труб после воспаления.'] },
  };
}

function endometriosisTpl(name, icd) {
  return {
    definition: `${name} (${icd}) — доброкачественный процесс с расположением ткани, подобной эндометрию, вне полости матки.`,
    overview: { quickTake: `${name}: хронический болевой и/или бесплодный синдром; ведение по критериям rASRM.`, prevalence: '6-10% женщин репродуктивного возраста.', riskLevel: 'moderate', practiceFocus: 'Контроль боли, сохранение фертильности.' },
    epidemiology: 'Частая причина хронической тазовой боли и бесплодия.',
    etiology: ['Ретроградная менструация', 'Иммунологические факторы', 'Генетическая предрасположенность'],
    symptoms: ['Дисменорея', 'Хроническая тазовая боль', 'Диспареуния', 'Бесплодие', 'Боль при дефекации/мочеиспускании'],
    symptomGroups: { typical: ['Боль, связанная с циклом.', 'Бесплодие.'], alarm: ['Острая боль (перекрут/разрыв эндометриомы), кишечная/мочевая симптоматика.'] },
    clinicalSummary: { quickSummary: `${name}: подозревайте при циклической боли/бесплодии; лечение — гормональная супрессия или хирургия.`, redFlags: ['Острая боль, симптомы поражения смежных органов.'], firstLineActions: ['УЗИ/МРТ малого таза, оценка боли.', 'Гормональная терапия (КОК/прогестины) при отсутствии срочности.'], diagnosticMinimum: ['УЗИ/МРТ, при необходимости — лапароскопия.'], whenToEscalate: ['Глубокий инфильтративный процесс, бесплодие, рецидивы.'], clinicalPearls: ['Диагноз часто задерживается на годы.'] },
    guidelineBasis: [{ organization: 'ESHRE', title: 'Endometriosis guideline', documentType: 'Guideline', scope: 'Диагностика и ведение эндометриоза.', status: 'latest available active guideline', usedFor: ['diagnosis', 'treatment'] }],
    diagnosticCriteria: { clinical: ['Циклическая тазовая боль и/или бесплодие.'], laboratory: ['CA-125 может быть повышен (не специфичен).'], imaging: ['УЗИ/МРТ: эндометриомы, спайки, инфильтрация.'], diagnosisConfirmedWhen: ['Визуализация или гистология.', ], diagnosisExcludedWhen: ['Другая причина боли.'] },
    severityStratification: { title: 'rASRM stage', tiers: [{ name: 'I-II (лёгкая/умеренная)', criteria: ['Единичные поверхностные очаги.'], clinicalMeaning: 'Медикаментозное ведение.', managementImpact: 'Гормональная терапия.' }, { name: 'III-IV (тяжёлая)', criteria: ['Эндометриомы > 3-4 см, глубокая инфильтрация, спайки.'], clinicalMeaning: 'Хирургия + супрессия.', managementImpact: 'Лапароскопия + прогестины/аГнРГ.' }] },
    differentialDiagnosis: [{ condition: 'Аденомиоз', whyConfused: 'Сходная боль/меноррагия.', howToDistinguish: 'МРТ матки (junctional zone).', testsIfNeeded: ['МРТ'] }, { condition: 'ВЗОМТ', whyConfused: 'Боль/спайки.', howToDistinguish: 'Инфекционный анамнез, маркеры воспаления.', testsIfNeeded: ['мазки', 'ОАК/CRP'] }],
    managementAlgorithm: { initialAssessment: ['Анамнез боли/фертильности, УЗИ/МРТ.'], confirmDiagnosis: ['Визуализация/лапароскопия.'], startTreatment: ['КОК/прогестины при отсутствии срочности; хирургия при бесплодии/тяжёлых формах.'], reassess: ['Контроль боли и фертильности.'], escalateWhen: ['Глубокий инфильтративный процесс, рецидивы.'], referWhen: ['В центр эндометриоза.'] },
    treatment: { conservative: ['КОК, прогестины (диеногест), аГнРГ + add-back.'], surgical: ['Лапароскопическая эксцизия/абляция, цистэктомия.'], guidelines: { eshre: 'Эмпирическая терапия допустима без лапароскопии.', ru: 'Долгосрочная супрессия для профилактики рецидивов.' } },
    ultrasound: { protocols: [{ method: 'трансвагинальное', indications: ['Эндометриомы'], preparation: 'Мочевой пузырь опорожнить' }], findings: [{ location: 'яичники/позадиматочное', description: 'Эндометриома «матовое стекло», спайки, инфильтрация.', normal: 'Норма.', pathology: 'Эндометриома, глубокий эндометриоз.', clinicalSignificance: 'Подтверждает диагноз.' }], imagingTips: ['МРТ при глубоком инфильтративном процессе.'] },
    recommendations: ['Мультидисциплинарный подход при тяжёлых формах.', 'Долгосрочное ведение.'],
    prognosis: { general: 'Хроническое, но контролируемое.', factors: ['Стадия', 'Фертильность'], survival: 'Доброкачественное.' },
    followUp: { frequency: 'Каждые 6-12 мес', duration: 'Пожизненно', tests: ['УЗИ', 'CA-125 по показаниям'] },
    followUpTriggers: { routineReview: ['Контроль боли.'], earlierReviewIf: ['Ухудшение/рецидив.'], switchTreatmentIf: ['Нет эффекта.'], urgentReassessmentIf: ['Острая боль (перекрут/разрыв).'] },
    contraindicatedOrAvoid: ['Не повторять операции без цели.', 'Не оставлять без супрессии после хирургии.'],
    patientCounseling: ['Хронический характер, план лечения.', 'Фертильность — отдельная тема.'],
    specialPopulations: { adolescents: ['Часто маскируется под дисменорею.'], fertilityPlanning: ['Оценка овариального резерва перед операциями.'] },
  };
}

function prolapse(name, icd) {
  return {
    definition: `${name} (${icd}) — опущение/выпадение женских половых органов вследствие слабости тазового дна.`,
    overview: { quickTake: `${name}: пролапс тазовых органов; ведение от консервативного (ЛФК, пессарий) до хирургии.`, prevalence: 'Растёт с возрастом и после родов.', riskLevel: 'low', practiceFocus: 'Оценка стадии (POP-Q), выбор консервативного или хирургического лечения.' },
    epidemiology: 'Часто у женщин старше 50 лет, после родов.',
    etiology: ['Травма тазового дна при родах', 'Возрастная атрофия', 'Хроническое повышение внутрибрюшного давления'],
    symptoms: ['Ощущение инородного тела во влагалище', 'Дискомфорт при ходьбе', 'Нарушение мочеиспускания/дефекации'],
    symptomGroups: { typical: ['Выбухание, дискомфорт.', 'Симптомы со стороны смежных органов.'], alarm: ['Ущемление пролапса, острая задержка мочи.'] },
    clinicalSummary: { quickSummary: `${name}: оцените по POP-Q; консервативно (ЛФК/пессарий) при лёгких, хирургия при тяжёлых/симптомных.`, redFlags: ['Ущемление, острая задержка мочи.'], firstLineActions: ['Осмотр в зеркалах (POP-Q), УЗИ/МРТ по показаниям.'], diagnosticMinimum: ['Гинекологический осмотр, POP-Q.'], whenToEscalate: ['Ущемление, тяжёлый пролапс.'], clinicalPearls: ['Консервативная терапия эффективна при лёгких стадиях.'] },
    guidelineBasis: [{ organization: 'AUGS/IUGA', title: 'Pelvic organ prolapse guideline', documentType: 'Guideline', scope: 'Классификация и ведение пролапса.', status: 'latest available active guideline', usedFor: ['diagnosis', 'treatment'] }],
    diagnosticCriteria: { clinical: ['Визуализация пролапса при натуживании (POP-Q).'], laboratory: ['Не требуется рутинно.'], imaging: ['МРТ при сложных случаях.'], diagnosisConfirmedWhen: ['Осмотр + POP-Q.'], diagnosisExcludedWhen: ['Другая масса влагалища.'] },
    severityStratification: { title: 'POP-Q', tiers: [{ name: 'I-II', criteria: ['Лёгкое опущение.'], clinicalMeaning: 'Консервативно.', managementImpact: 'ЛФК, пессарий.' }, { name: 'III-IV', criteria: ['Выраженное выпадение.'], clinicalMeaning: 'Хирургия.', managementImpact: 'Реконструктивная операция.' }] },
    differentialDiagnosis: [{ condition: 'Киста/опухоль влагалища', whyConfused: 'Образование во влагалище.', howToDistinguish: 'Осмотр/УЗИ.', testsIfNeeded: ['УЗИ'] }],
    managementAlgorithm: { initialAssessment: ['POP-Q, анамнез, сопутствующие симптомы.'], confirmDiagnosis: ['Осмотр.'], startTreatment: ['ЛФК (Кегель), пессарий при лёгких; хирургия при тяжёлых.'], reassess: ['Динамика пролапса.'], escalateWhen: ['Ущемление, тяжёлый пролапс.'], referWhen: ['К урогинекологу.'] },
    treatment: { conservative: ['ЛФК тазового дна, пессарий, эстрогены местно.'], surgical: ['Реконструктивные операции (кольпорафия, сакропексия).'], guidelines: { eau: 'Хирургия при симптомном тяжёлом пролапсе.', ru: 'Выбор объёма операции индивидуально.' } },
    ultrasound: { protocols: [{ method: 'трансвагинальное/промежностное', indications: ['Оценка пролапса'], preparation: '—' }], findings: [{ location: 'тазовое дно', description: 'Опущение стенок влагалища/матки.', normal: 'Норма.', pathology: 'Пролапс по POP-Q.', clinicalSignificance: 'Стадия пролапса.' }], imagingTips: ['Промежностное УЗИ для оценки слинтов/сеток.'] },
    recommendations: ['ЛФК тазового дна, контроль веса, лечение кашля/запоров.'],
    prognosis: { general: 'Хороший при адекватном лечении.', factors: ['Стадия', 'Сопутствующие заболевания'], survival: 'Доброкачественное.' },
    followUp: { frequency: 'Ежегодно при консервативном', duration: 'Длительно', tests: ['Осмотр'] },
    followUpTriggers: { routineReview: ['Контроль стадии.'], earlierReviewIf: ['Прогрессирование/симптомы.'], switchTreatmentIf: ['Неэффективность консервативного.'], urgentReassessmentIf: ['Ущемление/задержка мочи.'] },
    contraindicatedOrAvoid: ['Не игнорировать ущемление пролапса.'],
    patientCounseling: ['ЛФК эффективна при лёгких стадиях.', 'Обсудить хирургию при тяжёлых.'],
    specialPopulations: { adolescents: ['Редко.'], fertilityPlanning: ['Родоразрешение обсуждается при тяжёлом пролапсе.'] },
  };
}

function ovarianCyst(name, icd) {
  return {
    definition: `${name} (${icd}) — кистозное образование яичника доброкачественного или функционального характера.`,
    overview: { quickTake: `${name}: чаще доброкачественно; исключите злокачественность (УЗИ O-RADS, онкомаркеры), решите наблюдение vs операция.`, prevalence: 'Очень часто; многие функциональные кисты регрессируют сами.', riskLevel: 'low', practiceFocus: 'Исключение злокачественности, органосохранение у молодых.' },
    epidemiology: 'Любой репродуктивный возраст.',
    etiology: ['Функциональные (фолликулярные, жёлтого тела)', 'Истинные доброкачественные опухоли', 'Эндометриоидные (зрелые тератомы, цистаденомы)'],
    symptoms: ['Часто бессимптомно', 'Тазовая боль/тяжесть', 'Острый перекрут/разрыв'],
    symptomGroups: { typical: ['Бессимптомно или тяжесть.'], alarm: ['Острый перекрут/разрыв — боль, шок.', 'Быстрый рост (исключить рак).'] },
    clinicalSummary: { quickSummary: `${name}: подозревайте при тазовом образовании; исключите злокачественность и решите вопрос наблюдения/операции.`, redFlags: ['Перекрут/разрыв, признаки злокачественности.'], firstLineActions: ['УЗИ (O-RADS), CA-125/HE4, оценка риска.'], diagnosticMinimum: ['УЗИ, онкомаркеры.'], whenToEscalate: ['Перекрут/разрыв, подозрение на рак.'], clinicalPearls: ['Функциональные кисты регрессируют за 1-3 цикла — наблюдение.'] },
    guidelineBasis: [{ organization: 'ACR', title: 'O-RADS ovarian adnexal mass guideline', documentType: 'Guideline', scope: 'Стратификация риска злокачественности.', status: 'latest available active guideline', usedFor: ['diagnosis'] }, { organization: 'ESGO', title: 'Ovarian tumor guideline', documentType: 'Guideline', scope: 'Ведение опухолей яичника.', status: 'latest available active guideline', usedFor: ['treatment'] }],
    diagnosticCriteria: { clinical: ['Тазовое образование без признаков злокачественности.'], laboratory: ['CA-125/HE4; функциональные кисты — норма.'], imaging: ['УЗИ O-RADS, МРТ при сложных кистах.'], diagnosisConfirmedWhen: ['Доброкачественная картина + гистология при операции.'], diagnosisExcludedWhen: ['Признаки злокачественности — рак яичника (C56).'] },
    severityStratification: { title: 'Риск злокачественности', tiers: [{ name: 'Низкий (O-RADS 1-2)', criteria: ['Типичная доброкачественная киста.'], clinicalMeaning: 'Наблюдение или органосохраняющая операция.', managementImpact: 'Наблюдение/цистэктомия.' }, { name: 'Высокий (O-RADS 4-5)', criteria: ['Солидный компонент, асцит, рост маркеров.'], clinicalMeaning: 'Исключить рак.', managementImpact: 'Онкогинекологическая операция.' }] },
    differentialDiagnosis: [{ condition: 'Рак яичника (C56)', whyConfused: 'Тазовая масса.', howToDistinguish: 'O-RADS, онкомаркеры, МРТ.', testsIfNeeded: ['МРТ', 'CA-125/HE4'] }, { condition: 'Внематочная беременность', whyConfused: 'Образование придатков + боль.', howToDistinguish: 'ХГЧ, УЗИ.', testsIfNeeded: ['ХГЧ', 'УЗИ'] }],
    managementAlgorithm: { initialAssessment: ['УЗИ O-RADS, онкомаркеры.'], confirmDiagnosis: ['Доброкачественная визуализация; гистология при операции.'], startTreatment: ['Наблюдение при функциональных кистах; цистэктомия при крупных/симптомных.'], reassess: ['УЗИ в динамике.'], escalateWhen: ['Перекрут/разрыв, высокий риск злокачественности.'], referWhen: ['К онкогинекологу при O-RADS 4-5.'] },
    treatment: { conservative: ['Наблюдение функциональных кист (регрессия).'], surgical: ['Цистэктомия/аднексэктомия (органосохраняющая).'], guidelines: { eau: 'Органосохранение у молодых.', ru: 'Исключение злокачественности обязательно до операции.' } },
    ultrasound: { protocols: [{ method: 'трансвагинальное + трансабдоминальное', indications: ['Оценка кисты'], preparation: 'по ситуации' }], findings: [{ location: 'яичник', description: 'Анэхогенная киста с перегородками/включениями; перегородки/сосуды → выше риск.', normal: 'Норма.', pathology: 'Киста с перегородками/папиллярными разрастаниями.', clinicalSignificance: 'O-RADS стратификация.' }], imagingTips: ['O-RADS; МРТ при сложных кистах.'] },
    recommendations: ['Исключение злокачественности перед операцией.', 'Органосохранение у молодых.'],
    prognosis: { general: 'Отличный для доброкачественных.', factors: ['Тип кисты', 'Исключение злокачественности'], survival: 'Доброкачественная — 100%.' },
    followUp: { frequency: 'УЗИ в динамике при наблюдении', duration: 'По ситуации', tests: ['УЗИ', 'онкомаркеры'] },
    followUpTriggers: { routineReview: ['Контроль размеров.'], earlierReviewIf: ['Рост, боль, перекрут.'], switchTreatmentIf: ['Рост/подозрение на злокачественность.'], urgentReassessmentIf: ['Острый перекрут/разрыв.'] },
    contraindicatedOrAvoid: ['Не оперировать каждую кисту у молодых без динамики.', 'Не игнорировать признаки злокачественности.'],
    patientCounseling: ['Доброкачественный характер (чаще).', 'Обсудить наблюдение vs операцию.'],
    specialPopulations: { adolescents: ['Часто функциональные кисты; наблюдение.'], fertilityPlanning: ['Органосохраняющая операция приоритетна.'] },
  };
}

function polyp(name, icd) {
  return {
    definition: `${name} (${icd}) — доброкачественное полиповидное образование эндометрия/цервикального канала.`,
    overview: { quickTake: `${name}: доброкачественное образование полости матки/шейки; гистероскопия с биопсией/удалением.`, prevalence: 'Часто у женщин 40-60 лет.', riskLevel: 'low', practiceFocus: 'Исключение гиперплазии/рака эндометрия (особенно при АМК).' },
    epidemiology: 'Часто в перименопаузе.',
    etiology: ['Гормональный дисбаланс (эстрогеновая стимуляция)', 'Хроническое воспаление'],
    symptoms: ['Аномальные маточные кровотечения', 'Меноррагия', 'Бесплодие (редко)'],
    symptomGroups: { typical: ['АМК, меноррагия.'], alarm: ['Обильное АМК в постменопаузе (исключить рак).'] },
    clinicalSummary: { quickSummary: `${name}: при АМК — гистероскопия + биопсия; исключите гиперплазию/рак эндометрия.`, redFlags: ['АМК в постменопаузе.'], firstLineActions: ['УЗИ эндометрия, гистероскопия с биопсией.'], diagnosticMinimum: ['УЗИ, гистероскопия, биопсия.'], whenToEscalate: ['АМК в постменопаузе, подозрение на злокачественность.'], clinicalPearls: ['Полипы редко малигнизируются, но АМК требует исключения рака.'] },
    guidelineBasis: [{ organization: 'ESGE', title: 'Abnormal uterine bleeding guideline', documentType: 'Guideline', scope: 'Ведение АМК, полипы эндометрия.', status: 'latest available active guideline', usedFor: ['diagnosis', 'treatment'] }],
    diagnosticCriteria: { clinical: ['АМК, полип по УЗИ/гистероскопии.'], laboratory: ['Не требуется рутинно.'], imaging: ['УЗИ (гиперэхогенное включение в полости), гистероскопия/МРТ.'], diagnosisConfirmedWhen: ['Гистероскопия + гистология.'], diagnosisExcludedWhen: ['Подозрение на рак эндометрия — отдельное ведение.'] },
    severityStratification: { title: 'Риск малигнизации', tiers: [{ name: 'Доброкачественный', criteria: ['Типичный полип, АМК у пременопаузы.'], clinicalMeaning: 'Удаление при симптомах.', managementImpact: 'Гистероскопия + полипэктомия.' }, { name: 'Постменопауза/АМК', criteria: ['АМК в постменопаузе.'], clinicalMeaning: 'Исключить злокачественность.', managementImpact: 'Гистероскопия + биопсия + полипэктомия.' }] },
    differentialDiagnosis: [{ condition: 'Гиперплазия/рак эндометрия', whyConfused: 'АМК.', howToDistinguish: 'Биопсия эндометрия.', testsIfNeeded: ['биопсия', 'МРТ'] }, { condition: 'Подслизистая миома', whyConfused: 'Образование в полости.', howToDistinguish: 'УЗИ/гистероскопия.', testsIfNeeded: ['УЗИ'] }],
    managementAlgorithm: { initialAssessment: ['УЗИ эндометрия, АМК анамнез.'], confirmDiagnosis: ['Гистероскопия + биопсия.'], startTreatment: ['Полипэктомия (гистероскопия).'], reassess: ['По гистологии.'], escalateWhen: ['АМК в постменопаузе, атипия.'], referWhen: ['К гинекологу-онкологу при атипии.'] },
    treatment: { conservative: ['Наблюдение при бессимптомных мелких полипах (пременопауза).'], surgical: ['Гистероскопическая полипэктомия.'], guidelines: { eau: 'Удаление симптомных полипов.', ru: 'Биопсия обязательна при постменопаузальном АМК.' } },
    ultrasound: { protocols: [{ method: 'трансвагинальное', indications: ['Полип эндометрия'], preparation: 'Мочевой пузырь опорожнить' }], findings: [{ location: 'полость матки', description: 'Гиперэхогенное включение с сосудом (питающий сосуд).', normal: 'Эндометрий однородный.', pathology: 'Полип эндометрия.', clinicalSignificance: 'Показание к гистероскопии.' }], imagingTips: ['Сосудистый пучок — типичный признак полипа.'] },
    recommendations: ['Гистероскопия при АМК.', 'Биопсия при постменопаузе.'],
    prognosis: { general: 'Отличный; рецидивы возможны.', factors: ['Возраст', 'Гистология'], survival: 'Доброкачественное.' },
    followUp: { frequency: 'УЗИ через 3-6 мес после удаления', duration: 'По ситуации', tests: ['УЗИ', 'биопсия при АМК'] },
    followUpTriggers: { routineReview: ['Контроль АМК.'], earlierReviewIf: ['Рецидив/АМК.'], switchTreatmentIf: ['Атипия при гистологии.'], urgentReassessmentIf: ['Обильное АМК в постменопаузе.'] },
    contraindicatedOrAvoid: ['Не игнорировать АМК в постменопаузе (исключить рак).'],
    patientCounseling: ['Доброкачественный характер.', 'Важность биопсии при АМК.'],
    specialPopulations: { adolescents: ['Редко.'], fertilityPlanning: ['Полипэктомия не снижает фертильность.'] },
  };
}

function uterineOther(name, icd) { return genericTpl(name, icd, 'uterus'); }
function erosion(name, icd) {
  return {
    definition: `${name} (${icd}) — дефект/изменение эпителия шейки матки.`,
    overview: { quickTake: `${name}: доброкачественное состояние шейки; кольпоскопия при аномальном скрининге.`, prevalence: 'Очень часто.', riskLevel: 'low', practiceFocus: 'Исключение CIN/рака (кольпоскопия при аномальном цитологическом/ВПЧ-тесте).' },
    epidemiology: 'Часто у репродуктивных женщин.',
    etiology: ['Гормональные (эктопия у молодых)', 'Послеродовые разрывы', 'Воспаление'],
    symptoms: ['Часто бессимптомно', 'Контактные выделения'],
    symptomGroups: { typical: ['Бессимптомно.'], alarm: ['Контактные кровотечения (исключить CIN/рак).'] },
    clinicalSummary: { quickSummary: `${name}: при аномальном скрининге — кольпоскопия; не лечить «для профилактики» без показаний.`, redFlags: ['Контактные кровотечения, аномальный цитологический/ВПЧ-тест.'], firstLineActions: ['Цитология + ВПЧ, кольпоскопия при аномалиях.'], diagnosticMinimum: ['Кольпоскопия, биопсия при показаниях.'], whenToEscalate: ['При CIN/подозрении на рак.'], clinicalPearls: ['Эктопия у молодых — вариант нормы, не требует лечения.'] },
    guidelineBasis: [{ organization: 'ASCCP', title: 'Cervical screening guideline', documentType: 'Guideline', scope: 'Скрининг и кольпоскопия.', status: 'latest available active guideline', usedFor: ['screening', 'diagnosis'] }],
    diagnosticCriteria: { clinical: ['Изменение эпителия при осмотре/кольпоскопии.'], laboratory: ['Цитология + ВПЧ.'], imaging: ['Кольпоскопия — основа.'], diagnosisConfirmedWhen: ['Кольпоскопия + биопсия при аномалиях.'], diagnosisExcludedWhen: ['Нормальная кольпоскопия/скрининг.'] },
    severityStratification: { title: 'По скринингу', tiers: [{ name: 'Норма/эктопия', criteria: ['Нормальный скрининг.'], clinicalMeaning: 'Наблюдение.', managementImpact: 'Не лечить.' }, { name: 'Аномалия', criteria: ['Аномальный цитологический/ВПЧ-тест.'], clinicalMeaning: 'Кольпоскопия.', managementImpact: 'Биопсия/лечение по результату.' }] },
    differentialDiagnosis: [{ condition: 'CIN/рак шейки (C53/D06)', whyConfused: 'Очаг на шейке.', howToDistinguish: 'Кольпоскопия + биопсия.', testsIfNeeded: ['биопсия'] }],
    managementAlgorithm: { initialAssessment: ['Скрининг цитология+ВПЧ, кольпоскопия.'], confirmDiagnosis: ['Биопсия при аномалиях.'], startTreatment: ['Не лечить при норме; эксцизия при CIN.'], reassess: ['По результатам.'], escalateWhen: ['CIN/рак.'], referWhen: ['К гинекологу-онкологу.'] },
    treatment: { conservative: ['Наблюдение при нормальном скрининге.'], surgical: ['Коагуляция/конизация при CIN.'], guidelines: { acog: 'Лечение только при доказанном предраке.', ru: 'Скрининг ВПЧ+цитология — основа.' } },
    ultrasound: { protocols: [{ method: '—', indications: ['Не информативно'], preparation: '—' }], findings: [{ location: 'шейка', description: 'Не видна на УЗИ; оценивается кольпоскопией.', normal: 'Норма.', pathology: 'Не визуализируется.', clinicalSignificance: 'Кольпоскопия, а не УЗИ.' }], imagingTips: ['УЗИ не информативно для шейки (кроме объёмных процессов).'] },
    recommendations: ['Скрининг ВПЧ+цитология.', 'Не лечить эктопию у молодых без показаний.'],
    prognosis: { general: 'Отличный.', factors: ['Результат скрининга'], survival: 'Доброкачественное.' },
    followUp: { frequency: 'По скринингу', duration: 'До 65 лет', tests: ['Цитология+ВПЧ', 'кольпоскопия'] },
    followUpTriggers: { routineReview: ['Скрининг.'], earlierReviewIf: ['Аномальный скрининг/кровотечения.'], switchTreatmentIf: ['CIN.'], urgentReassessmentIf: ['Контактные кровотечения.'] },
    contraindicatedOrAvoid: ['Не прижигать эктопию «для профилактики» без показаний.'],
    patientCounseling: ['Объяснить, что эктопия у молодых — вариант нормы.', 'Важность скрининга.'],
    specialPopulations: { adolescents: ['Эктопия часто физиологична.'], fertilityPlanning: ['Не влияет.'] },
  };
}

function dysplasia(name, icd) {
  return {
    definition: `${name} (${icd}) — плоскоклеточное интраэпителиальное поражение шейки матки (дисплазия лёгкой/умеренной/тяжёлой степени).`,
    overview: { quickTake: `${name}: предрак шейки; ведение по ASCCP — наблюдение (CIN I) или эксцизия (CIN II/III).`, prevalence: 'Зависит от охвата скринингом ВПЧ.', riskLevel: 'moderate', practiceFocus: 'Кольпоскопия + биопсия; исключение инвазивного рака.' },
    epidemiology: 'Связан с ВПЧ высокого риска.',
    etiology: ['Персистенция ВПЧ ВР (16, 18, 31, 33, 45)', 'Иммуносупрессия', 'Курение'],
    symptoms: ['Бессимптомно'],
    symptomGroups: { typical: ['Бессимптомно, находка при скрининге.'], alarm: ['Контактные кровотечения (исключить инвазию).'] },
    clinicalSummary: { quickSummary: `${name}: подтверждение — кольпоскопия + биопсия; тактика по степени CIN (наблюдение или эксцизия).`, redFlags: ['Контактные кровотечения, подозрение на инвазию.'], firstLineActions: ['Кольпоскопия с биопсией.', 'При CIN II/III — эксцизия (КМЭ/LEEP).'], diagnosticMinimum: ['Цитология+ВПЧ, кольпоскопия, биопсия.'], whenToEscalate: ['При CIN II/III, подозрении на инвазию.'], clinicalPearls: ['CIN I часто регрессирует; CIN II/III требуют лечения.'] },
    guidelineBasis: [{ organization: 'ASCCP', title: 'Cervical screening & management', documentType: 'Guideline', scope: 'Ведение CIN.', status: 'latest available active guideline', usedFor: ['screening', 'treatment'] }],
    diagnosticCriteria: { clinical: ['Аномальный скрининг + кольпоскопические находки.'], laboratory: ['Биопсия: CIN I/II/III.'], imaging: ['Кольпоскопия; МРТ при подозрении на инвазию.'], diagnosisConfirmedWhen: ['Гистология подтверждает CIN без инвазии.'], diagnosisExcludedWhen: ['Инвазия стромы (C53).'] },
    severityStratification: { title: 'CIN', tiers: [{ name: 'CIN I', criteria: ['Поражение нижней 1/3 эпителия.'], clinicalMeaning: 'Часто регрессирует.', managementImpact: 'Наблюдение (молодые).' }, { name: 'CIN II/III', criteria: ['Поражение ≥ 2/3 толщины.'], clinicalMeaning: 'Высокий риск прогрессии.', managementImpact: 'Эксцизия (КМЭ/LEEP).' }] },
    differentialDiagnosis: [{ condition: 'Инвазивный рак (C53)', whyConfused: 'Очаг на шейке.', howToDistinguish: 'Биопсия (инвазия).', testsIfNeeded: ['биопсия', 'МРТ'] }, { condition: 'CIN I vs II', whyConfused: 'Степень поражения.', howToDistinguish: 'Гистология.', testsIfNeeded: ['биопсия'] }],
    managementAlgorithm: { initialAssessment: ['Скрининг, кольпоскопия, биопсия.'], confirmDiagnosis: ['Гистология CIN.'], startTreatment: ['Наблюдение (CIN I) или эксцизия (CIN II/III).'], reassess: ['По краям резекции.'], escalateWhen: ['Положительные края, инвазия.'], referWhen: ['К гинекологу-онкологу.'] },
    treatment: { conservative: ['Наблюдение при CIN I (молодые).'], surgical: ['Конизация (КМЭ/LEEP).'], guidelines: { acog: 'Эксцизия при CIN II/III.', ru: 'Исключение инвазии обязательно.' } },
    ultrasound: { protocols: [{ method: '—', indications: ['Не информативно'], preparation: '—' }], findings: [{ location: 'шейка', description: 'Не видна; кольпоскопия.', normal: 'Норма.', pathology: 'Не визуализируется.', clinicalSignificance: 'Кольпоскопия, а не УЗИ.' }], imagingTips: ['Кольпоскопия — основа.'] },
    recommendations: ['ВПЧ-вакцинация, скрининг.', 'Контроль после лечения.'],
    prognosis: { general: 'Очень хороший при лечении CIN II/III.', factors: ['Степень CIN', 'Края резекции'], survival: 'Предрак; излечим.' },
    followUp: { frequency: 'Кольпоскопия/скрининг 6-12 мес', duration: '≥ 25 лет', tests: ['Цитология+ВПЧ', 'кольпоскопия'] },
    followUpTriggers: { routineReview: ['Контроль после эксцизии.'], earlierReviewIf: ['Положительные края, кровотечения.'], switchTreatmentIf: ['Обнаружена инвазия.'], urgentReassessmentIf: ['Контактные кровотечения.'] },
    contraindicatedOrAvoid: ['Не оставлять CIN II/III без лечения.'],
    patientCounseling: ['Предрак излечим.', 'Важность контроля и ВПЧ-вакцинации.'],
    specialPopulations: { adolescents: ['CIN I — консервативно.'], fertilityPlanning: ['Эксцизия предпочтительна перед гистерэктомией.'] },
  };
}

function cervicalOther(name, icd) { return genericTpl(name, icd, 'cervix'); }
function vaginalOther(name, icd) { return genericTpl(name, icd, 'vagina'); }
function vulvarOther(name, icd) { return genericTpl(name, icd, 'vulva'); }
function menstrualAbsent(name, icd) {
  return {
    definition: `${name} (${icd}) — нарушение менструального цикла (аменорея/олигоменорея/гипоменорея).`,
    overview: { quickTake: `${name}: нарушение цикла; исключите беременность, гипоталамическую/гипофизарную/яичниковую патологию.`, prevalence: 'Часто.', riskLevel: 'low', practiceFocus: 'Алгоритм: беременность → пролактин/ТТГ → гипофиз → яичники → анатомия.' },
    epidemiology: 'Любой репродуктивный возраст.',
    etiology: ['Беременность', 'Гипоталамическая (стресс, вес, спорт)', 'Гиперпролактинемия', 'Синдром истощения яичников', 'Анатомические (синехии, заращение)'],
    symptoms: ['Отсутствие/редкие менструации', 'Бесплодие', 'Приливы (при недостатке эстрогенов)'],
    symptomGroups: { typical: ['Нарушение ритма менструаций.'], alarm: ['Приливы, остеопороз при гипоэстрогении; головная боль (пролактинома).'] },
    clinicalSummary: { quickSummary: `${name}: исключите беременность и органическую патологию; алгоритм по уровню поражения оси гипоталамус-гипофиз-яичники.`, redFlags: ['Приливы/остеопороз, головная боль, галакторея.'], firstLineActions: ['ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, УЗИ яичников.', 'Исключение анатомии (гипоплазия/синехии).'], diagnosticMinimum: ['ХГЧ, гормональный профиль, УЗИ.'], whenToEscalate: ['При органической патологии (опухоль гипофиза, синехии).'], clinicalPearls: ['Сначала исключите беременность — самая частая причина аменореи.'] },
    guidelineBasis: [{ organization: 'ESHRE', title: 'Female infertility / menstrual disorders', documentType: 'Guideline', scope: 'Диагностика нарушений цикла.', status: 'latest available active guideline', usedFor: ['diagnosis'] }],
    diagnosticCriteria: { clinical: ['Отсутствие/редкие менструации при исключённой беременности.'], laboratory: ['ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, эстрадиол, AMH.'], imaging: ['УЗИ яичников/матки, МРТ гипофиза при пролактиноме.'], diagnosisConfirmedWhen: ['Алгоритм исключил беременность и выявил уровень поражения.'], diagnosisExcludedWhen: ['Беременность или нормальный цикл при другой причине.' ] },
    severityStratification: { title: 'По уровню', tiers: [{ name: 'Гипоталамическая/функциональная', criteria: ['Нормальные гормоны, провоцирующий фактор.'], clinicalMeaning: 'Коррекция образа жизни.', managementImpact: 'Устранение причины, КОК при необходимости.' }, { name: 'Органическая', criteria: ['Опухоль гипофиза, синехии, недостаточность яичников.'], clinicalMeaning: 'Специфическое лечение.', managementImpact: 'По причине (хирургия/ЗГТ).' }] },
    differentialDiagnosis: [{ condition: 'Беременность', whyConfused: 'Аменорея.', howToDistinguish: 'ХГЧ.', testsIfNeeded: ['ХГЧ'] }, { condition: 'Синдром поликистозных яичников', whyConfused: 'Олигоменорея.', howToDistinguish: 'УЗИ/гормоны (критерии Роттердама).', testsIfNeeded: ['УЗИ', 'гормоны'] }],
    managementAlgorithm: { initialAssessment: ['ХГЧ, гормоны, УЗИ.'], confirmDiagnosis: ['Алгоритм по уровню поражения.'], startTreatment: ['Устранение причины; циклическая терапия при необходимости.'], reassess: ['Восстановление цикла.'], escalateWhen: ['Опухоль/синехии/недостаточность яичников.'], referWhen: ['К эндокринологу/репродуктологу.'] },
    treatment: { conservative: ['Коррекция веса/стресса, циклические КОК.'], surgical: ['Резекция синехий, удаление пролактиномы.'], guidelines: { eshre: 'Исключение беременности — первый шаг.', ru: 'Поиск уровня поражения оси.' } },
    ultrasound: { protocols: [{ method: 'трансвагинальное', indications: ['Яичники/матка'], preparation: 'Мочевой пузырь опорожнить' }], findings: [{ location: 'яичники/матка', description: 'Мультифолликулярные яичники, гипоплазия эндометрия, синехии.', normal: 'Норма.', pathology: 'Поликистозные яичники, истончённый эндометрий.', clinicalSignificance: 'Уточняет причину.' }], imagingTips: ['УЗИ — для оценки яичников и эндометрия.'] },
    recommendations: ['Исключение беременности в первую очередь.', 'Коррекция образа жизни.'],
    prognosis: { general: 'Зависит от причины; функциональные — хорошо.', factors: ['Причина', 'Возраст'], survival: 'Доброкачественное.' },
    followUp: { frequency: 'При восстановлении цикла', duration: 'По ситуации', tests: ['Гормоны', 'УЗИ'] },
    followUpTriggers: { routineReview: ['Контроль цикла.'], earlierReviewIf: ['Нет восстановления, симптомы гипоэстрогении.'], switchTreatmentIf: ['Органическая причина.'], urgentReassessmentIf: ['Головная боль/галакторея (пролактинома).'] },
    contraindicatedOrAvoid: ['Не начинать ЗГТ до исключения противопоказаний.', 'Не игнорировать беременность как причину.'],
    patientCounseling: ['Объяснить алгоритм обследования.', 'Важность исключения беременности.'],
    specialPopulations: { adolescents: ['Первичная аменорея → исключить анатомию/генетику.'], fertilityPlanning: ['Нарушение цикла часто = ановуляция/бесплодие.'] },
  };
}

function menorrhagia(name, icd) {
  return {
    definition: `${name} (${icd}) — обильные и/или длительные менструальные кровотечения.`,
    overview: { quickTake: `${name}: АМК; исключите органическую патологию (миома, полип, гиперплазия/рак) и коагулопатию; далее — гормональная/хирургическая терапия.`, prevalence: 'До 30% женщин репродуктивного возраста.', riskLevel: 'moderate', practiceFocus: 'PALM-COEIN классификация АМК.' },
    epidemiology: 'Часто в перименопаузе и при миоме.',
    etiology: ['PALM: полип, аденомиоз, лейомиома, гиперплазия/злокачественность', 'COEIN: коагулопатия, овуляторная дисфункция, эндометриальная, ятрогения, невыясненная'],
    symptoms: ['Обильные менструации', 'Сгустки', 'Анемия'],
    symptomGroups: { typical: ['Обильные/длительные менструации.', 'Слабость при анемии.'], alarm: ['Обильное кровотечение с гемодинамической нестабильностью.'] },
    clinicalSummary: { quickSummary: `${name}: исключите органику (УЗИ/биопсия) и коагулопатию; ведение по PALM-COEIN — от НПВС/гормонов до хирургии.`, redFlags: ['Гемодинамическая нестабильность, анемия тяжёлая.', 'АМК в постменопаузе (исключить рак).'], firstLineActions: ['УЗИ эндометрия, ОАК, коагулограмма, биопсия при показаниях.', 'НПВС/транексамовая кислота, гормональная терапия.'], diagnosticMinimum: ['УЗИ, ОАК, коагулограмма, биопсия эндометрия при риске.'], whenToEscalate: ['Тяжёлая анемия, нестабильность, подозрение на злокачественность.'], clinicalPearls: ['PALM-COEIN — системный подход к АМК.'] },
    guidelineBasis: [{ organization: 'ESGE', title: 'Abnormal uterine bleeding guideline', documentType: 'Guideline', scope: 'Классификация и ведение АМК.', status: 'latest available active guideline', usedFor: ['diagnosis', 'treatment'] }],
    diagnosticCriteria: { clinical: ['Обильные/длительные менструации при исключённой беременности.'], laboratory: ['ОАК (анемия), коагулограмма, гормоны.', 'Биопсия эндометрия при риске злокачественности.'], imaging: ['УЗИ эндометрия; гистероскопия/МРТ при показаниях.'], diagnosisConfirmedWhen: ['По PALM-COEIN после исключения органики/коагулопатии.'], diagnosisExcludedWhen: ['Беременность (другое ведение).'] },
    severityStratification: { title: 'PALM-COEIN', tiers: [{ name: 'Функциональная/легкая', criteria: ['Без органики, лёгкая анемия.'], clinicalMeaning: 'Медикаментозно.', managementImpact: 'НПВС, транексамовая кислота, КОК/ЛНГ-ВМК.' }, { name: 'Органическая/тяжёлая', criteria: ['Миома/полип/гиперплазия, тяжёлая анемия.'], clinicalMeaning: 'Хирургия/биопсия.', managementImpact: 'Гистероскопия, ВМК, аблация, гистерэктомия.' }] },
    differentialDiagnosis: [{ condition: 'Миома/полип/гиперплазия', whyConfused: 'АМК.', howToDistinguish: 'УЗИ/биопсия.', testsIfNeeded: ['УЗИ', 'биопсия'] }, { condition: 'Беременность/осложнения', whyConfused: 'Кровотечение из половых путей.', howToDistinguish: 'ХГЧ.', testsIfNeeded: ['ХГЧ'] }],
    managementAlgorithm: { initialAssessment: ['УЗИ, ОАК, коагулограмма, исключение беременности.'], confirmDiagnosis: ['PALM-COEIN классификация.'], startTreatment: ['НПВС/транексамовая кислота; КОК/ЛНГ-ВМК; при органике — хирургия.'], reassess: ['Контроль кровопотери и анемии.'], escalateWhen: ['Тяжёлая анемия, нестабильность, подозрение на злокачественность.'], referWhen: ['К гинекологу-хирургу/онкологу.'] },
    treatment: { conservative: ['НПВС, транексамовая кислота, КОК, ЛНГ-ВМК.'], surgical: ['Гистероскопия (полип/субмукозная миома), аблация, гистерэктомия.'], guidelines: { esge: 'ЛНГ-ВМК — первая линия при АМК.', ru: 'Биопсия эндометрия при риске злокачественности.' } },
    ultrasound: { protocols: [{ method: 'трансвагинальное', indications: ['Эндометрий/миометрий'], preparation: 'Мочевой пузырь опорожнить' }], findings: [{ location: 'матка', description: 'Утолщение эндометрия, миоматозные узлы, полип.', normal: 'Эндометрий ≤ 4 мм в менопаузе.', pathology: 'АМК-ассоциированная патология.', clinicalSignificance: 'Уточняет PALM-компонент.' }], imagingTips: ['УЗИ — первый шаг при АМК.'] },
    recommendations: ['Исключение беременности, анемии, коагулопатии.', 'ЛНГ-ВМК — эффективная терапия.'],
    prognosis: { general: 'Хороший при корректном ведении.', factors: ['Причина', 'Анемия'], survival: 'Доброкачественное.' },
    followUp: { frequency: 'Через 3 мес, далее по показаниям', duration: 'До стабилизации', tests: ['ОАК', 'УЗИ'] },
    followUpTriggers: { routineReview: ['Контроль кровопотери.'], earlierReviewIf: ['Нарастание кровотечения, анемия.'], switchTreatmentIf: ['Нет эффекта медикаментов.'], urgentReassessmentIf: ['Гемодинамическая нестабильность.'] },
    contraindicatedOrAvoid: ['Не игнорировать АМК в постменопаузе (исключить рак).', 'Не откладывать биопсию при толстом эндометрии.'],
    patientCounseling: ['Объяснить PALM-COEIN.', 'Важность контроля анемии.'],
    specialPopulations: { adolescents: ['Часто овуляторная дисфункция; исключить коагулопатию.'], fertilityPlanning: ['ЛНГ-ВМК и гормоны совместимы с планированием.'] },
  };
}

function menstrualOther(name, icd) { return genericTpl(name, icd, 'menstrual'); }
function menstrualPain(name, icd) {
  return {
    definition: `${name} (${icd}) — болезненные менструации (дисменорея) или связанные с циклом тазовые/промежностные боли.`,
    overview: { quickTake: `${name}: дисменорея — первичная (функциональная) или вторичная (эндометриоз, аденомиоз, ВМК); НПВС + КОК эффективны.`, prevalence: 'До 50-90% женщин репродуктивного возраста.', riskLevel: 'low', practiceFocus: 'Исключить вторичную дисменорею (эндометриоз/аденомиоз).' },
    epidemiology: 'Очень часто.',
    etiology: ['Первичная: простагландины', 'Вторичная: эндометриоз, аденомиоз, ВМК, миома, ВЗОМТ'],
    symptoms: ['Схваткообразная боль внизу живота', 'Боль в пояснице', 'Тошнота, слабость'],
    symptomGroups: { typical: ['Боль в первые дни менструации.'], alarm: ['Боль вне менструации, диспареуния (вторичная дисменорея).'] },
    clinicalSummary: { quickSummary: `${name}: НПВС + КОК при первичной; при вторичной — исключить эндометриоз/аденомиоз/ВМК.`, redFlags: ['Боль вне цикла, диспареуния, бесплодие (вторичная).'], firstLineActions: ['Анамнез, осмотр, УЗИ для исключения вторичной.', 'НПВС, КОК/прогестины.'], diagnosticMinimum: ['Осмотр, УЗИ; МРТ/лапароскопия при подозрении на эндометриоз.'], whenToEscalate: ['Подозрение на вторичную дисменорею.'], clinicalPearls: ['Вторичная дисменорея требует поиска причины, а не только анальгезии.'] },
    guidelineBasis: [{ organization: 'ESHRE', title: 'Dysmenorrhea / endometriosis', documentType: 'Guideline', scope: 'Ведение болезненных менструаций.', status: 'latest available active guideline', usedFor: ['diagnosis', 'treatment'] }],
    diagnosticCriteria: { clinical: ['Циклическая боль при исключении беременности/воспаления.'], laboratory: ['Не требуется рутинно.'], imaging: ['УЗИ для исключения миомы/аденомиоза/эндометриоза.'], diagnosisConfirmedWhen: ['Типичная картина + исключение вторичной причины.'], diagnosisExcludedWhen: ['Воспаление/беременность/органическая патология.'] },
    severityStratification: { title: 'Первичная vs вторичная', tiers: [{ name: 'Первичная', criteria: ['Боль только в менструацию, норма УЗИ.'], clinicalMeaning: 'Симптоматическая терапия.', managementImpact: 'НПВС + КОК.' }, { name: 'Вторичная', criteria: ['Боль вне цикла, патология по УЗИ.'], clinicalMeaning: 'Лечение причины.', managementImpact: 'По причине (гормоны/хирургия).' }] },
    differentialDiagnosis: [{ condition: 'Эндометриоз/аденомиоз', whyConfused: 'Вторичная дисменорея.', howToDistinguish: 'УЗИ/МРТ.', testsIfNeeded: ['УЗИ', 'МРТ'] }, { condition: 'Острый живот', whyConfused: 'Острая боль.', howToDistinguish: 'Осмотр/УЗИ.', testsIfNeeded: ['УЗИ'] }],
    managementAlgorithm: { initialAssessment: ['Анамнез боли, УЗИ.', 'Исключение беременности/воспаления.'], confirmDiagnosis: ['Клиника + исключение вторичной.'], startTreatment: ['НПВС, КОК/прогестины; при вторичной — лечение причины.'], reassess: ['Контроль боли.'], escalateWhen: ['Подозрение на эндометриоз/аденомиоз.'], referWhen: ['К гинекологу при вторичной дисменорее.'] },
    treatment: { conservative: ['НПВС, КОК/прогестины, ЛНГ-ВМК.'], surgical: ['При вторичной — по причине (лапароскопия, аблация).'], guidelines: { eshre: 'Гормональная супрессия эффективна.', ru: 'Исключение вторичной дисменореи обязательно.' } },
    ultrasound: { protocols: [{ method: 'трансвагинальное', indications: ['Аденомиоз/эндометриоз/миома'], preparation: 'Мочевой пузырь опорожнить' }], findings: [{ location: 'матка/яичники', description: 'Признаки аденомиоза/эндометриоза/миомы при вторичной.', normal: 'Норма.', pathology: 'Аденомиоз, эндометриома, миома.', clinicalSignificance: 'Указывает на вторичную дисменорею.' }], imagingTips: ['УЗИ — для исключения вторичной причины.'] },
    recommendations: ['НПВС за 1-2 дня до менструации.', 'КОК для контроля цикла.'],
    prognosis: { general: 'Хороший при первичной; зависит от причины при вторичной.', factors: ['Первичная/вторичная'], survival: 'Доброкачественное.' },
    followUp: { frequency: 'При неэффективности', duration: 'По ситуации', tests: ['УЗИ'] },
    followUpTriggers: { routineReview: ['Контроль боли.'], earlierReviewIf: ['Ухудшение/боль вне цикла.'], switchTreatmentIf: ['Нет эффекта НПВС/КОК.'], urgentReassessmentIf: ['Острая боль (исключить перекрут/аппендицит).'] },
    contraindicatedOrAvoid: ['Не ограничиваться анальгезией при вторичной дисменорее.'],
    patientCounseling: ['НПВС эффективны при первичной.', 'Важно исключить вторичную причину.'],
    specialPopulations: { adolescents: ['Часто первичная; вторичную не исключать.'], fertilityPlanning: ['Не влияет напрямую.'] },
  };
}

function menopausal(name, icd) {
  return {
    definition: `${name} (${icd}) — состояние, связанное с менопаузой и климактерическим переходом.`,
    overview: { quickTake: `${name}: климактерический синдром/атрофия; ЗГТ эффективна при вазомоторных симптомах и профилактике остеопороза (с учётом противопоказаний).`, prevalence: 'Все женщины в период менопаузы.', riskLevel: 'low', practiceFocus: 'Оценка симптомов (менопаузальные шкалы), исключение противопоказаний к ЗГТ.' },
    epidemiology: 'Средний возраст менопаузы 51 год.',
    etiology: ['Снижение фолликулярного резерва', 'Дефицит эстрогенов', 'Возрастные изменения'],
    symptoms: ['Приливы', 'Нарушение сна', 'Сухость влагалища', 'Перепады настроения', 'Снижение либидо'],
    symptomGroups: { typical: ['Вазомоторные симптомы, атрофия.', 'Нарушение сна/настроения.'], alarm: ['Кровянистые выделения в постменопаузе (исключить рак эндометрия).'] },
    clinicalSummary: { quickSummary: `${name}: ЗГТ — золотой стандарт при вазомоторных симптомах; исключите противопоказания и АМК в постменопаузе.`, redFlags: ['Кровянистые выделения в постменопаузе (исключить рак).', 'Тромбоэмболия/рак молочной железы в анамнезе (осторожно с ЗГТ).'], firstLineActions: ['Сбор анамнеза, шкалы симптомов, УЗИ эндометрия.', 'Обсудить ЗГТ/негормональные опции.'], diagnosticMinimum: ['Анамнез, УЗИ эндометрия, при показаниях — гормоны.'], whenToEscalate: ['Кровянистые выделения, противопоказания к ЗГТ.'], clinicalPearls: ['ЗГТ наиболее эффективна в первые годы менопаузы («окно возможностей»).'] },
    guidelineBasis: [{ organization: 'NAMS', title: 'Menopause position statement', documentType: 'Position Statement', scope: 'ЗГТ и ведение менопаузы.', status: 'latest available active guideline', usedFor: ['treatment', 'counseling'] }, { organization: 'ESHRE', title: 'Menopause guideline', documentType: 'Guideline', scope: 'Ведение климактерического синдрома.', status: 'latest available active guideline', usedFor: ['treatment'] }],
    diagnosticCriteria: { clinical: ['12 мес аменореи + симптомы дефицита эстрогенов (при исключённой беременности).'], laboratory: ['ФСГ повышен, эстрадиол снижен (не обязательно).'], imaging: ['УЗИ эндометрия при АМК/кровянистых выделениях.'], diagnosisConfirmedWhen: ['Аменорея ≥ 12 мес + симптомы.', 'После 45 лет — клинически без рутинных гормонов.'], diagnosisExcludedWhen: ['Патологическое АМК (исключить рак).'] },
    severityStratification: { title: 'Тяжесть', tiers: [{ name: 'Лёгкая', criteria: ['Редкие приливы, терпимые симптомы.'], clinicalMeaning: 'Негормональные меры/наблюдение.', managementImpact: 'Образ жизни, фитоэстрогены, локальные эстрогены.' }, { name: 'Умеренная/тяжёлая', criteria: ['Частые приливы, нарушение сна/качества жизни.'], clinicalMeaning: 'ЗГТ при отсутствии противопоказаний.', managementImpact: 'Системная ЗГТ.' }] },
    differentialDiagnosis: [{ condition: 'Гипертиреоз/депрессия', whyConfused: 'Приливы/перепады настроения.', howToDistinguish: 'ТТГ, анамнез.', testsIfNeeded: ['ТТГ', 'осмотр'] }, { condition: 'Рак эндометрия', whyConfused: 'АМК в постменопаузе.', howToDistinguish: 'УЗИ + биопсия.', testsIfNeeded: ['УЗИ', 'биопсия'] }],
    managementAlgorithm: { initialAssessment: ['Анамнез, симптомы, УЗИ эндометрия.', 'Исключение противопоказаний к ЗГТ.'], confirmDiagnosis: ['Клинически (аменорея + симптомы).'], startTreatment: ['ЗГТ (системная/локальная) при отсутствии противопоказаний; негормональные опции.'], reassess: ['Контроль симптомов, АД, молочных желёз.'], escalateWhen: ['Кровянистые выделения, противопоказания к ЗГТ.'], referWhen: ['К гинекологу-эндокринологу при сложных случаях.'] },
    treatment: { conservative: ['Образ жизни, негормональные (СЭРМ, габапентин), локальные эстрогены при атрофии.'], surgical: ['Не применяется рутинно.'], guidelines: { nams: 'ЗГТ — наиболее эффективна при вазомоторных симптомах.', ru: 'Оценка риск/польза индивидуально; скрининг молочных желёз.' } },
    ultrasound: { protocols: [{ method: 'трансвагинальное', indications: ['Эндометрий при АМК'], preparation: 'Мочевой пузырь опорожнить' }], findings: [{ location: 'эндометрий', description: 'Истончён при атрофии; утолщение при АМК требует биопсии.', normal: '≤ 4 мм в постменопаузе.', pathology: 'Утолщение эндометрия при кровянистых выделениях.', clinicalSignificance: 'Показание к биопсии.' }], imagingTips: ['УЗИ эндометрия — при любых кровянистых выделениях в постменопаузе.'] },
    recommendations: ['Скрининг молочных желёз/остеопороза при ЗГТ.', 'Локальные эстрогены при атрофическом вагините.'],
    prognosis: { general: 'Симптомы купируются ЗГТ; качество жизни улучшается.', factors: ['Тяжесть симптомов', 'Противопоказания'], survival: 'Доброкачественное течение.' },
    followUp: { frequency: 'Каждые 6-12 мес на ЗГТ', duration: 'Индивидуально', tests: ['Осмотр', 'УЗИ эндометрия при АМК', 'маммография'] },
    followUpTriggers: { routineReview: ['Контроль симптомов и переносимости ЗГТ.'], earlierReviewIf: ['Кровянистые выделения, побочные эффекты.'], switchTreatmentIf: ['Противопоказания к ЗГТ.'], urgentReassessmentIf: ['Кровянистые выделения в постменопаузе.'] },
    contraindicatedOrAvoid: ['Не назначать системную ЗГТ при раке молочной железы/тромбоэмболии в анамнезе без консилиума.', 'Не игнорировать АМК в постменопаузе.'],
    patientCounseling: ['Обсудить риск/пользу ЗГТ.', 'Локальные эстрогены безопасны при атрофии.'],
    specialPopulations: { adolescents: ['Не применимо.'], fertilityPlanning: ['Постменопауза — фертильность не планируется.'] },
  };
}

function recurrentMiscarriage(name, icd) {
  return {
    definition: `${name} (${icd}) — повторные выкидыши (обычно ≥ 2-3 подряд) в первом триместре.`,
    overview: { quickTake: `${name}: обследование пары (генетика, анатомия, аутоиммунность, тромбофилия); ведение при последующей беременности.`, prevalence: '~1% пар.', riskLevel: 'high', practiceFocus: 'Полное обследование после 2-3 выкидышей; привычное невынашивание.' },
    epidemiology: '1-2% пар после 2 выкидышей, ~0.5-1% после 3.',
    etiology: ['Генетические (родительские транслокации)', 'Анатомические (перегородка, миома, истмико-цервикальная недостаточность)', 'Аутоиммунные (АФС)', 'Тромбофилия', 'Эндокринные (гипотиреоз, диабет)'],
    symptoms: ['Повторные самопроизвольные аборты', 'Кровянистые выделения в I триместре'],
    symptomGroups: { typical: ['Повторные ранние потери.', ], alarm: ['Кровотечение, боли — угроза прерывания.'] },
    clinicalSummary: { quickSummary: `${name}: после 2-3 выкидышей — полное обследование пары; при АФС — аспирин+гепарин, при ИЦН — серкляж.`, redFlags: ['Кровотечение/боль при наступившей беременности.'], firstLineActions: ['Кариотип пары, УЗИ матки, АФС-панель, тромбофилия, гормоны.', 'Ведение при последующей беременности.'], diagnosticMinimum: ['Кариотип, УЗИ/МРТ матки, АФС, тромбофилия.'], whenToEscalate: ['При наступившей беременности — раннее наблюдение.'], clinicalPearls: ['После 3 выкидышей риск рецидива выше; обследование себя оправдывает.'] },
    guidelineBasis: [{ organization: 'ESHRE', title: 'Recurrent pregnancy loss guideline', documentType: 'Guideline', scope: 'Обследование и ведение привычного невынашивания.', status: 'latest available active guideline', usedFor: ['diagnosis', 'treatment'] }],
    diagnosticCriteria: { clinical: ['≥ 2-3 последовательных выкидыша до 20 нед.'], laboratory: ['Кариотип пары, АФС (волчаночный антикоагулянт, анти-β2-ГП, антикардиолипин), тромбофилия, гормоны.'], imaging: ['УЗИ/МРТ матки (анатомия).'], diagnosisConfirmedWhen: ['Повторные потери + найденный фактор риска.', 'Идиопатическое — если причина не найдена.'], diagnosisExcludedWhen: ['Единичный выкидыш (вариант нормы до 1).'] },
    severityStratification: { title: 'По найденной причине', tiers: [{ name: 'Анатомическая', criteria: ['Перегородка, ИЦН, миома.'], clinicalMeaning: 'Хирургия/серкляж.', managementImpact: 'Коррекция анатомии.' }, { name: 'Аутоиммунная/тромбофилия', criteria: ['АФС, мутации свёртывания.'], clinicalMeaning: 'Антитромботическая профилактика.', managementImpact: 'Аспирин ± гепарин.' }] },
    differentialDiagnosis: [{ condition: 'Эктопическая беременность', whyConfused: 'Кровотечение I триместра.', howToDistinguish: 'ХГЧ, УЗИ.', testsIfNeeded: ['ХГЧ', 'УЗИ'] }, { condition: 'Анатомическая патология матки', whyConfused: 'Причина потери.', howToDistinguish: 'МРТ/УЗИ матки.', testsIfNeeded: ['МРТ'] }],
    managementAlgorithm: { initialAssessment: ['Кариотип, анатомия, АФС, тромбофилия, гормоны.'], confirmDiagnosis: ['Найден фактор риска или идиопатическое.'], startTreatment: ['По причине: серкляж/хирургия, аспирин±гепарин, тироксин при гипотиреозе.'], reassess: ['Ведение при последующей беременности.'], escalateWhen: ['Кровотечение/боль при беременности.'], referWhen: ['К репродуктологу/акушеру-иммунологу.'] },
    treatment: { conservative: ['Аспирин при АФС, фолаты, витамин D.'], surgical: ['Серкляж при ИЦН, коррекция перегородки/миомы.'], guidelines: { eshre: 'Антитромботическая профилактика при АФС.', ru: 'Обследование пары после 2-3 потерь.' } },
    ultrasound: { protocols: [{ method: 'трансвагинальное', indications: ['Анатомия матки, беременность'], preparation: 'Мочевой пузырь опорожнить' }], findings: [{ location: 'матка/плодное яйцо', description: 'Перегородка, ИЦН, миома; при беременности — жизнеспособность.', normal: 'Норма.', pathology: 'Анатомический фактор, угроза прерывания.', clinicalSignificance: 'Уточняет причину/ведение.' }], imagingTips: ['МРТ матки — золото для анатомии.'] },
    recommendations: ['Обследование пары после 2-3 потерь.', 'Фолаты до зачатия.'],
    prognosis: { general: 'При найденной и устранённой причине — высокая вероятность донашивания.', factors: ['Причина', 'Возраст'], survival: 'Доброкачественное для матери.' },
    followUp: { frequency: 'Раннее наблюдение при наступившей беременности', duration: 'До родов', tests: ['ХГЧ', 'УЗИ'] },
    followUpTriggers: { routineReview: ['Ведение беременности.'], earlierReviewIf: ['Кровотечение/боль.'], switchTreatmentIf: ['Найдена новая причина.'], urgentReassessmentIf: ['Угроза прерывания.'] },
    contraindicatedOrAvoid: ['Не назначать гепарин без показаний.', 'Не игнорировать АФС (риск потерь/тромбозов).'],
    patientCounseling: ['Объяснить обследование пары.', 'Поддержка при утрате.'],
    specialPopulations: { adolescents: ['Не применимо.'], fertilityPlanning: ['Основная цель — донашивание.'] },
  };
}

function infertility(name, icd) {
  return {
    definition: `${name} (${icd}) — отсутствие наступления беременности при регулярной половой жизни без контрацепции в течение 12 мес (или 6 мес при факторах риска).`,
    overview: { quickTake: `${name}: обследование пары (спермограмма, овуляция, проходимость труб, овариальный резерв); ведение от стимуляции до ВРТ.`, prevalence: '~15% пар репродуктивного возраста.', riskLevel: 'moderate', practiceFocus: 'Обследование ОБОИХ партнёров; алгоритм по факторам.' },
    epidemiology: '~1 из 6 пар.',
    etiology: ['Овуляторные нарушения (СПКЯ, гипоталамические)', 'Трубный фактор (после воспаления/операций)', 'Мужской фактор (сперма)', 'Эндометриоз', 'Необъяснимое'],
    symptoms: ['Отсутствие беременности', 'Нарушения цикла (при овуляторных нарушениях)'],
    symptomGroups: { typical: ['Нет беременности при регулярной жизни без контрацепции.'], alarm: ['Возраст > 35 лет — обследование раньше (через 6 мес).'] },
    clinicalSummary: { quickSummary: `${name}: начните со спермограммы и оценки овуляции/труб; ЭКО — при тяжёлых факторах.`, redFlags: ['Возраст > 35-37 лет — ускоренное обследование.', 'Трубный фактор/тяжёлый мужской фактор.'], firstLineActions: ['Спермограмма мужа, овуляция (УЗИ/прогестерон), овариальный резерв (АМН), проходимость (ГСГ/лапароскопия).'], diagnosticMinimum: ['Спермограмма, УЗИ/овуляция, АМН, ГСГ.'], whenToEscalate: ['Возраст, тяжёлые факторы — к репродуктологу.'], clinicalPearls: ['Обследуйте ПАРУ, а не только женщину.'] },
    guidelineBasis: [{ organization: 'ESHRE', title: 'Infertility guideline', documentType: 'Guideline', scope: 'Обследование и лечение бесплодия.', status: 'latest available active guideline', usedFor: ['diagnosis', 'treatment'] }],
    diagnosticCriteria: { clinical: ['Нет беременности ≥ 12 мес (≥ 6 при факторах риска).'], laboratory: ['Спермограмма, овуляция, АМН, гормоны.'], imaging: ['УЗИ, ГСГ/лапароскопия (трубы), МРТ при эндометриозе.'], diagnosisConfirmedWhen: ['Выявлен фактор бесплодия или необъяснимое.', 'Исключена внематочная/беременность как причина отсутствия.'], diagnosisExcludedWhen: ['Беременность наступила — не бесплодие.'] },
    severityStratification: { title: 'По фактору', tiers: [{ name: 'Лёгкий/умеренный', criteria: ['Овуляторные нарушения, лёгкий мужской фактор.'], clinicalMeaning: 'Стимуляция/ВМИ.', managementImpact: 'Кломифен/гонадотропины, ВМИ.' }, { name: 'Тяжёлый', criteria: ['Трубный, тяжёлый мужской, возраст > 38.'], clinicalMeaning: 'ЭКО.', managementImpact: 'ЭКО/ИКСИ.' }] },
    differentialDiagnosis: [{ condition: 'Внематочная беременность', whyConfused: 'Отсутствие маточной беременности.', howToDistinguish: 'ХГЧ, УЗИ.', testsIfNeeded: ['ХГЧ', 'УЗИ'] }, { condition: 'Ановуляция (СПКЯ)', whyConfused: 'Нет беременности.', howToDistinguish: 'УЗИ/гормоны (Роттердам).', testsIfNeeded: ['УЗИ', 'гормоны'] }],
    managementAlgorithm: { initialAssessment: ['Спермограмма, овуляция, резерв, трубы.'], confirmDiagnosis: ['Фактор бесплодия определён.'], startTreatment: ['Стимуляция/ВМИ при лёгких; ЭКО при тяжёлых.', 'Коррекция образа жизни.'], reassess: ['Через 3-6 циклов терапии.'], escalateWhen: ['Возраст > 37, тяжёлые факторы.'], referWhen: ['К репродуктологу для ВРТ.'] },
    treatment: { conservative: ['Коррекция веса, отказ от курения, фолаты, тайминг.'], surgical: ['Восстановление проходимости труб, удаление эндометриомы.'], guidelines: { eshre: 'ЭКО при трубном/тяжёлом мужском факторе.', ru: 'Обследование пары — первый шаг.' } },
    ultrasound: { protocols: [{ method: 'трансвагинальное', indications: ['Овуляция, резерв, эндометриоз'], preparation: 'Мочевой пузырь опорожнить' }], findings: [{ location: 'яичники/матка/трубы', description: 'Поликистозные яичники, сниженный резерв, эндометриоз, гидросальпинкс.', normal: 'Норма.', pathology: 'Фактор бесплодия.', clinicalSignificance: 'Уточняет тактику.' }], imagingTips: ['АМН + УЗИ — оценка резерва; ГСГ — трубы.'] },
    recommendations: ['Обследование ОБОИХ партнёров.', 'Фолаты до зачатия.'],
    prognosis: { general: 'Зависит от возраста и фактора; ЭКО даёт беременность у большинства.', factors: ['Возраст женщины', 'Фактор', 'Длительность'], survival: 'Доброкачественное.' },
    followUp: { frequency: 'Каждые 3-6 циклов терапии', duration: 'До беременности', tests: ['УЗИ', 'ХГЧ'] },
    followUpTriggers: { routineReview: ['Контроль циклов/терапии.'], earlierReviewIf: ['Беременность/неудача.'], switchTreatmentIf: ['Нет эффекта — эскалация к ЭКО.'], urgentReassessmentIf: ['Подозрение на внематочную.'] },
    contraindicatedOrAvoid: ['Не обследовать только женщину.', 'Не затягивать при возрасте > 35.'],
    patientCounseling: ['Объяснить алгоритм.', 'Поддержка пары.'],
    specialPopulations: { adolescents: ['Не применимо.'], fertilityPlanning: ['Это и есть цель.'] },
  };
}

function postproc(name, icd) { return genericTpl(name, icd, 'postprocedural'); }

function obstetric(name, icd) {
  return {
    definition: `${name} (${icd}) — акушерское состояние/осложнение беременности, родов или послеродового периода.`,
    overview: { quickTake: `${name} (${icd}): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.`, prevalence: 'Зависит от состояния.', riskLevel: 'high', practiceFocus: 'Мониторинг матери и плода, готовность к экстренному родоразрешению.' },
    epidemiology: 'Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.',
    etiology: ['Физиологические изменения беременности', 'Патология беременности/плацентации', 'Инфекция, травма родов'],
    symptoms: ['Зависят от состояния', 'Боль, кровотечение, нарушение самочувствия'],
    symptomGroups: { typical: ['Симптомы по конкретному состоянию.'], alarm: ['Кровотечение, гипертензия, судороги, гипоксия плода.'] },
    clinicalSummary: { quickSummary: `${name}: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.`, redFlags: ['Кровотечение, АД ≥ 160/110, судороги, страдание плода.'], firstLineActions: ['Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.', 'Маршрутизация в перинатальный центр при осложнениях.'], diagnosticMinimum: ['ОАК, коагулограмма, КТГ, УЗИ/допплер плода.'], whenToEscalate: ['Любое угрожающее состояние — немедленно.'], clinicalPearls: ['Родоразрешение — финальная терапия при многих осложнениях.'] },
    guidelineBasis: [{ organization: 'ACOG', title: 'Obstetric care guidelines', documentType: 'Guideline', scope: 'Ведение беременности и осложнений.', status: 'latest available active guideline', usedFor: ['diagnosis', 'treatment', 'delivery timing'] }, { organization: 'WHO', title: 'Intrapartum care', documentType: 'Guideline', scope: 'Ведение родов и послеродового периода.', status: 'latest available active guideline', usedFor: ['care'] }],
    diagnosticCriteria: { clinical: ['Соответствие состоянию по акушерским критериям.'], laboratory: ['ОАК, коагулограмма, группа крови, биохимия по показаниям.'], imaging: ['УЗИ/допплер плода, КТГ.'], diagnosisConfirmedWhen: ['Клиника + данные матери/плода.'], diagnosisExcludedWhen: ['Другое состояние.' ] },
    severityStratification: { title: 'Тяжесть', tiers: [{ name: 'Без осложнений', criteria: ['Стабильная мать и плод.'], clinicalMeaning: 'Ведение в ЖК.', managementImpact: 'Наблюдение.' }, { name: 'С осложнениями', criteria: ['Угрожающие симптомы матери/плода.'], clinicalMeaning: 'Перинатальный центр.', managementImpact: 'Госпитализация, родоразрешение по показаниям.' }] },
    differentialDiagnosis: [{ condition: 'Другое акушерское осложнение', whyConfused: 'Перекрывающиеся симптомы.', howToDistinguish: 'Клиника + УЗИ/лабораторные данные.', testsIfNeeded: ['УЗИ', 'ОАК'] }],
    managementAlgorithm: { initialAssessment: ['Мать + плод (АД, КТГ, УЗИ).'], confirmDiagnosis: ['Клиника + данные.'], startTreatment: ['По состоянию; при осложнениях — госпитализация и родоразрешение.'], reassess: ['Динамика матери/плода.'], escalateWhen: ['Угрожающие симптомы.'], referWhen: ['В перинатальный центр.'] },
    treatment: { conservative: ['Наблюдение, медикаментозная коррекция по показаниям.'], surgical: ['Родоразрешение (вагинальное/кесарево) по показаниям.'], guidelines: { acog: 'Своевременная эскалация при осложнениях.', ru: 'Маршрутизация в перинатальный центр при угрозе.' } },
    ultrasound: { protocols: [{ method: 'трансабдоминальное + трансвагинальное', indications: ['Оценка плода/плацентации'], preparation: 'по ситуации' }], findings: [{ location: 'плод/плацента', description: 'По конкретному состоянию.', normal: 'Норма беременности.', pathology: 'Акушерская патология.', clinicalSignificance: 'Направляет тактику.' }], imagingTips: ['КТГ + УЗИ/допплер — оценка плода.'] },
    recommendations: ['Своевременная явка в ЖК, маршрутизация при осложнениях.'],
    prognosis: { general: 'Зависит от состояния и своевременности помощи.', factors: ['Тяжесть', 'Срок гестации'], survival: 'Материнская — обычно благоприятная при помощи.' },
    followUp: { frequency: 'По акушерскому плану', duration: 'Беременность/послеродовье', tests: ['УЗИ', 'КТГ', 'ОАК'] },
    followUpTriggers: { routineReview: ['Контроль по плану.'], earlierReviewIf: ['Симптомы/отклонения.'], switchTreatmentIf: ['Ухудшение.'], urgentReassessmentIf: ['Угрожающие симптомы матери/плода.'] },
    contraindicatedOrAvoid: ['Не задерживать родоразрешение при показаниях.'],
    patientCounseling: ['Объяснить план ведения.', 'Когда обращаться экстренно.'],
    specialPopulations: { adolescents: ['Беременность в юном возрасте — группа риска.'], fertilityPlanning: ['Послеродовая контрацепция обсуждается.'] },
  };
}

function genericTpl(name, icd, kind) {
  const descriptions = {
    benign: 'Доброкачественное образование/состояние женских половых органов.',
    uterus: 'Состояние матки, требующее гинекологической оценки.',
    cervix: 'Состояние шейки матки.',
    vagina: 'Состояние влагалища.',
    vulva: 'Состояние вульвы/наружных половых органов.',
    menstrual: 'Нарушение менструального цикла.',
    postprocedural: 'Состояние после гинекологического вмешательства/процедуры.',
    general: 'Гинекологическое/акушерское состояние.',
  };
  return {
    definition: `${name} (${icd}) — ${descriptions[kind] || descriptions.general}`,
    overview: { quickTake: `${name} (${icd}): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.`, prevalence: 'Уточняется по литературе.', riskLevel: 'moderate', practiceFocus: 'Осмотр, визуализация и исключение злокачественности/острых состояний.' },
    epidemiology: 'См. профильная литература по данному состоянию.',
    etiology: ['Уточняется', 'Связано с анатомо-физиологическими особенностями'],
    symptoms: ['Зависит от состояния', 'Боль/дискомфорт при симптомном течении'],
    symptomGroups: { typical: ['Симптомы зависят от локализации.'], alarm: ['Острое ухудшение, признаки злокачественности.'] },
    clinicalSummary: { quickSummary: `${name}: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.`, redFlags: ['Быстрое ухудшение, признаки малигнизации.'], firstLineActions: ['Осмотр, УЗИ, базовые анализы.', 'Исключение злокачественности/острого процесса.'], diagnosticMinimum: ['Осмотр, УЗИ, при показаниях — биопсия/МРТ.'], whenToEscalate: ['При подозрении на злокачественность/острое состояние.'], clinicalPearls: ['Дифференциальная диагностика — основа.'] },
    guidelineBasis: [{ organization: 'FIGO', title: 'Guideline set (general gynecology)', documentType: 'Guideline', scope: 'Общегинекологическое ведение.', status: 'latest available active guideline', usedFor: ['diagnosis', 'treatment'] }],
    diagnosticCriteria: { clinical: ['Соответствие клинике состояния.'], laboratory: ['По показаниям.'], imaging: ['УЗИ — первый шаг; МРТ при сложных случаях.'], diagnosisConfirmedWhen: ['Клиника + визуализация/гистология.'], diagnosisExcludedWhen: ['Другое состояние.'] },
    severityStratification: { title: 'Тяжесть', tiers: [{ name: 'Лёгкая', criteria: ['Бессимптомно/минимальные симптомы.'], clinicalMeaning: 'Наблюдение.', managementImpact: 'Контроль.' }, { name: 'Выраженная', criteria: ['Симптомы/подозрение на злокачественность.'], clinicalMeaning: 'Активное лечение.', managementImpact: 'По причине.' }] },
    differentialDiagnosis: [{ condition: 'Злокачественное новообразование', whyConfused: 'Перекрывающиеся симптомы/образование.', howToDistinguish: 'Биопсия/МРТ, онкомаркеры.', testsIfNeeded: ['биопсия', 'МРТ'] }],
    managementAlgorithm: { initialAssessment: ['Осмотр, УЗИ.'], confirmDiagnosis: ['Клиника + визуализация.'], startTreatment: ['По причине и тяжести.'], reassess: ['Динамика.'], escalateWhen: ['Подозрение на злокачественность/острое.'], referWhen: ['К профильному специалисту.'] },
    treatment: { conservative: ['Наблюдение/медикаментозно при лёгких.'], surgical: ['По показаниям.'], guidelines: { ru: 'Тактика индивидуальна.' } },
    ultrasound: { protocols: [{ method: 'трансвагинальное', indications: ['Оценка'], preparation: 'Мочевой пузырь опорожнить' }], findings: [{ location: 'органы малого таза', description: 'По состоянию.', normal: 'Норма.', pathology: 'Выявленное состояние.', clinicalSignificance: 'Уточняет диагноз.' }], imagingTips: ['УЗИ — первый шаг.'] },
    recommendations: ['Осмотр гинеколога при симптомах.'],
    prognosis: { general: 'Зависит от состояния.', factors: ['Своевременность', 'Тяжесть'], survival: 'См. по состоянию.' },
    followUp: { frequency: 'По показаниям', duration: 'Индивидуально', tests: ['УЗИ', 'осмотр'] },
    followUpTriggers: { routineReview: ['Контроль.'], earlierReviewIf: ['Ухудшение.'], switchTreatmentIf: ['Нет эффекта.'], urgentReassessmentIf: ['Острое состояние.'] },
    contraindicatedOrAvoid: ['Не игнорировать признаки злокачественности.'],
    patientCounseling: ['Объяснить план обследования.'],
    specialPopulations: { adolescents: ['Учитывать возрастные особенности.'], fertilityPlanning: ['Учитывать репродуктивные планы.'] },
  };
}

// ─── Обогащение одной карточки ───────────────────────────────────────────────
function enrichCard(card) {
  const isCardStub = isStub(card.description) || isStub(card.definition) || isStub(JSON.stringify(card));
  if (!isCardStub) return card; // уже заполнена реальным контентом — не трогаем

  const tmpl = tpl(card.name, card.icd);
  // Стаб-карточка: полностью заменяем клинические поля шаблонными (старые стаб-поля
  // вроде management/guidelines/clinicalSummary со стабами — удаляем, чтобы не маскировали пустоту).
  const merged = {
    id: card.id,
    name: card.name,
    icd: card.icd,
    subtitle: card.subtitle,
    icon: card.icon || deriveIcon(card.icd, card.subtitle),
    ...tmpl,
  };
  merged.editorialStatus = 'needs-source-review';
  merged.sourceAware = { reviewedBy: null, reviewDate: null, needsReview: true, autoGenerated: true };
  return merged;
}

function deriveIcon(icd, subtitle) {
  const c = String(icd).toUpperCase();
  if (c.startsWith('O')) return 'pregnancy';
  if (/N7[0-7]|N7[0-7]/.test(c) || c.startsWith('N70') || c.startsWith('N72') || c.startsWith('N73') || c.startsWith('N74')) return 'infection';
  if (c.startsWith('N80')) return 'endometriosis';
  if (c.startsWith('N81')) return 'prolapse';
  if (c.startsWith('N83') || c.startsWith('N84')) return 'ovary';
  if (c.startsWith('N85') || c.startsWith('N86') || c.startsWith('N87') || c.startsWith('N88')) return 'uterus';
  if (c.startsWith('N89') || c.startsWith('N90')) return 'vulva';
  if (c.startsWith('N91') || c.startsWith('N92') || c.startsWith('N93') || c.startsWith('N94')) return 'menstrual';
  if (c.startsWith('N95')) return 'menopause';
  if (c.startsWith('C') || c.startsWith('D')) return 'oncology';
  return 'card';
}

// ─── Чанки для обработки ─────────────────────────────────────────────────────
const TARGETS = [
  { dir: path.join(root, 'src/data/gynChunks'), files: ['gynChunk25.js', 'gynChunk26.js', 'gynChunk27.js', 'gynChunk28.js', 'gynChunk29.js', 'gynChunk30.js'] },
  { dir: path.join(root, 'src/data/obsChunks'), files: ['obsChunk7.js','obsChunk8.js','obsChunk9.js','obsChunk10.js','obsChunk11.js','obsChunk12.js','obsChunk13.js','obsChunk14.js','obsChunk15.js','obsChunk16.js','obsChunk17.js','obsChunk18.js','obsChunk19.js','obsChunk20.js','obsChunk21.js','obsChunk22.js','obsChunk23.js','obsChunk24.js','obsChunk25.js','obsChunk26.js','obsChunk27.js','obsChunk28.js'] },
];

let total = 0, enriched = 0;
for (const { dir, files } of TARGETS) {
  for (const f of files) {
    const fp = path.join(dir, f);
    if (!fs.existsSync(fp)) continue;
    const text = fs.readFileSync(fp, 'utf8');
    const before = (text.match(/Требуется уточнение|Данные отсутствуют/g) || []).length;
    // Парсим как ES module экспорт default массива — через eval в песочнице небезопасно,
    // поэтому используем динамический import.
    const mod = await import(pathToFileURL(fp).href);
    const arr = mod.default;
    const newArr = arr.map(enrichCard);
    const enrichedCount = newArr.filter((c) => c.editorialStatus === 'needs-source-review').length;
    // Сериализуем обратно в формат чанка (const chunk = [ ... ]; export default chunk;)
    const out = `const chunk = ${JSON.stringify(newArr, null, 2)};\n\nexport default chunk;\n`;
    fs.writeFileSync(fp, out);
    const after = (out.match(/Требуется уточнение|Данные отсутствуют/g) || []).length;
    total += arr.length; enriched += enrichedCount;
    console.log(`${f}: ${arr.length} карточек, обогащено ${enrichedCount}, стабов до ${before} / после ${after}`);
  }
}
console.log(`\nИТОГО: ${total} карточек, обогащено ${enriched}`);
