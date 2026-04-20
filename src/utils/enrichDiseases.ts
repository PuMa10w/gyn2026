import type { Disease, UltrasoundFinding, UltrasoundProtocol } from '../types';

const cleanText = (value: string) => value.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const getPrimaryTreatment = (disease: Disease) => {
  const entry = disease.treatment.conservative?.[0] ?? disease.treatment.surgical?.[0] ?? 'персонифицированная терапия';
  return cleanText(entry);
};

const getPrimarySymptom = (disease: Disease) => disease.symptoms[0] ?? 'клинические симптомы';

const getPrimaryDiagnosticStep = (disease: Disease) => disease.diagnostics.steps[0] ?? 'клиническая оценка';

const buildImaging = (disease: Disease) => {
  const derived = disease.diagnostics.steps.filter((step) => /УЗИ|МРТ|КТ|допплер|КТГ|биометр/i.test(step));

  if (derived.length > 0) {
    return derived;
  }

  return disease.subtitle === 'Акушерство'
    ? [
        'УЗИ плода и плаценты по акушерским показаниям',
        'Допплерометрия при подозрении на нарушение маточно-плацентарного или фетоплацентарного кровотока',
      ]
    : [
        'Трансвагинальное УЗИ органов малого таза как базовый метод визуализации',
        'Трансабдоминальное УЗИ при крупных образованиях или ограниченной визуализации',
      ];
};

const buildDifferential = (disease: Disease) => {
  if (disease.subtitle === 'Акушерство') {
    return [
      'Физиологические изменения беременности, имитирующие патологию',
      'Экстрагенитальная патология матери со сходной симптоматикой',
      'Другие акушерские осложнения со сходными клиническими и ультразвуковыми признаками',
    ];
  }

  return [
    'Функциональные и органические заболевания органов малого таза со сходной симптоматикой',
    'Воспалительные заболевания органов малого таза и их осложнения',
    'Доброкачественные и злокачественные образования, требующие исключения по клинике и визуализации',
  ];
};

const buildProtocols = (disease: Disease): UltrasoundProtocol[] => {
  if (disease.subtitle === 'Акушерство') {
    return [
      {
        method: 'трансабдоминальное',
        indications: ['Первичная оценка состояния матери и плода', 'Динамическое наблюдение', 'Контроль осложнений'],
        preparation: 'Специальная подготовка обычно не требуется',
      },
      {
        method: 'допплерометрия',
        indications: ['Оценка плацентарного и плодового кровотока', 'Стратификация перинатального риска'],
        preparation: 'Выполняется во время стандартного ультразвукового исследования',
      },
    ];
  }

  return [
    {
      method: 'трансвагинальное',
      indications: ['Первичная диагностика', 'Уточнение локализации процесса', 'Контроль лечения'],
      preparation: 'Опорожнить мочевой пузырь; оптимально выполнять с учетом фазы цикла',
    },
    {
      method: 'трансабдоминальное',
      indications: ['Оценка распространенности процесса', 'Большие образования', 'Технические ограничения ТВУЗИ'],
      preparation: 'Умеренно наполненный мочевой пузырь',
    },
  ];
};

const buildFindings = (disease: Disease): UltrasoundFinding[] => {
  if (disease.subtitle === 'Акушерство') {
    return [
      {
        location: 'плод и плацента',
        description: `Ультразвуковая картина при ${disease.name.toLowerCase()} оценивается в динамике: размеры плода, состояние плаценты, количество околоплодных вод и наличие признаков осложнений беременности.`,
        measurements: {
          биометрия: 'сопоставить со сроком гестации',
          плацента: 'оценить толщину, структуру и степень зрелости',
          околоплодные_воды: 'оценить AFI или максимальный вертикальный карман',
        },
        normal: 'Параметры соответствуют сроку гестации, без признаков дистресса и плацентарной дисфункции.',
        pathology: 'Отставание биометрии, изменение объема вод, структурные изменения плаценты или маркеры ухудшения состояния плода.',
        clinicalSignificance: 'Определяет частоту наблюдения, потребность в госпитализации и сроки родоразрешения.',
      },
      {
        location: 'допплерометрия',
        description: 'При наличии риска оценивают маточные артерии, артерию пуповины, среднюю мозговую артерию и венозный проток по стандартным индексам сопротивления.',
        normal: 'Кровоток соответствует сроку беременности, конечный диастолический компонент сохранен.',
        pathology: 'Повышение сосудистого сопротивления, отсутствие или реверс диастолического кровотока, признаки централизации кровообращения.',
        clinicalSignificance: 'Позволяет вовремя выявить плацентарную недостаточность и скорректировать акушерскую тактику.',
      },
    ];
  }

  return [
    {
      location: 'орган-мишень',
      description: `При ${disease.name.toLowerCase()} оценивают локализацию процесса, размеры очага, контуры, эхоструктуру и связь с соседними структурами.`,
      measurements: {
        размер: 'измерить минимум в двух-трех плоскостях',
        структура: 'описать эхогенность, однородность и наличие включений',
        кровоток: 'оценить по цветному и энергетическому допплеру при наличии показаний',
      },
      normal: 'Орган без очаговых изменений, с типичной эхоструктурой и сохраненной анатомией.',
      pathology: 'Очаговые или диффузные изменения, соответствующие клинической картине заболевания.',
      clinicalSignificance: 'Помогает подтвердить диагноз, оценить распространенность и выбрать консервативную или хирургическую тактику.',
    },
    {
      location: 'малый таз',
      description: 'Дополнительно оценивают матку, придатки, свободную жидкость, признаки воспаления, спаечного процесса и сопутствующие образования.',
      normal: 'Свободная анатомия малого таза, без дополнительных образований и патологической жидкости.',
      pathology: 'Сопутствующие изменения, влияющие на симптомы, репродуктивную функцию и объем лечения.',
      clinicalSignificance: 'Позволяет не пропустить комбинированную патологию и осложнения.',
    },
  ];
};

const buildNormalValues = (disease: Disease) => {
  if (disease.subtitle === 'Акушерство') {
    return {
      биометрия: 'соответствует сроку гестации по используемым таблицам',
      плацента: 'структура без патологических включений, зрелость соответствует сроку',
      кровоток: 'индексы сопротивления в нормативном диапазоне для срока беременности',
    };
  }

  return {
    матка: 'размеры и форма соответствуют возрасту и репродуктивному статусу',
    эндометрий: 'толщина оценивается с учетом дня менструального цикла',
    яичники: 'объем и фолликулярный аппарат соответствуют возрасту и фазе цикла',
  };
};

const buildImagingTips = (disease: Disease) => {
  if (disease.subtitle === 'Акушерство') {
    return [
      'Сравнивайте биометрию и допплерометрию в динамике, а не по одному исследованию.',
      'Фиксируйте признаки декомпенсации плода и состояние плаценты в одном протоколе.',
      'При пограничных изменениях сопоставляйте данные УЗИ, КТГ и клиническую картину.',
    ];
  }

  return [
    'Документируйте локализацию очага, его размеры и отношения с соседними структурами в одном протоколе.',
    'Сопоставляйте эхографическую картину с фазой цикла, жалобами и данными осмотра.',
    'При сомнительной картине планируйте контрольное УЗИ или уточняющую визуализацию.',
  ];
};

const buildRecommendations = (disease: Disease) => [
  `Оценивать ${disease.name.toLowerCase()} по совокупности жалоб, осмотра, лабораторных и инструментальных данных.`,
  `Использовать ${getPrimaryDiagnosticStep(disease).toLowerCase()} как часть поэтапной верификации диагноза.`,
  `Тактику лечения соотносить с тяжестью процесса, репродуктивными планами и риском осложнений.`,
  `Контроль эффективности проводить на фоне терапии: ${getPrimaryTreatment(disease).toLowerCase()}.`,
];

const buildPrognosis = (disease: Disease) => ({
  general: `Прогноз при ${disease.name.toLowerCase()} определяется своевременностью диагностики, выраженностью процесса и ответом на лечение.`,
  factors: [
    'Стадия или тяжесть заболевания на момент обращения',
    'Наличие осложнений и сопутствующей патологии',
    'Своевременность начала терапии и приверженность наблюдению',
  ],
  survival:
    disease.subtitle === 'Акушерство'
      ? 'Материнский и перинатальный прогноз зависит от раннего выявления осложнений и своевременной коррекции акушерской тактики.'
      : 'Для большинства доброкачественных гинекологических состояний прогноз благоприятный при полноценном наблюдении и контроле рецидива.',
});

const buildFollowUp = (disease: Disease) => ({
  frequency: disease.subtitle === 'Акушерство' ? 'По акушерскому риску, обычно каждые 1-4 недели' : 'Через 1-3 месяца после начала лечения, далее каждые 6-12 месяцев',
  duration: disease.subtitle === 'Акушерство' ? 'До родоразрешения и в раннем послеродовом периоде' : 'До клинической стабилизации, затем в плановом порядке',
  tests: [
    getPrimaryDiagnosticStep(disease),
    'Контроль клинических симптомов и объективного статуса',
    ...buildImaging(disease).slice(0, 2),
  ],
});

const buildClinicalCases = (disease: Disease) => [
  {
    presentation: `Пациентка обратилась с жалобами на ${getPrimarySymptom(disease).toLowerCase()} и типичную для ${disease.name.toLowerCase()} клиническую симптоматику.`,
    findings: `${getPrimaryDiagnosticStep(disease)}. Дополнительная визуализация подтвердила признаки заболевания без альтернативной причины симптомов.`,
    diagnosis: disease.name,
    treatment: `Начата терапия: ${getPrimaryTreatment(disease)}. Тактика уточнена с учетом клинической динамики.`,
    outcome: disease.subtitle === 'Акушерство' ? 'На фоне наблюдения состояние стабилизировано, акушерская тактика выполнена своевременно.' : 'На фоне лечения достигнуто клиническое улучшение, рекомендовано плановое наблюдение для контроля рецидива.',
  },
];

const buildUltrasound = (disease: Disease) => ({
  protocols: buildProtocols(disease),
  findings: buildFindings(disease),
  echogenicity:
    disease.subtitle === 'Гинекология'
      ? 'Описывается с указанием однородности, контуров и связи с предполагаемым очагом.'
      : undefined,
  vascularization:
    disease.subtitle === 'Гинекология'
      ? 'Оценивается при ЦДК для уточнения активности процесса и дифференциальной диагностики.'
      : undefined,
  dopplerFindings:
    disease.subtitle === 'Акушерство'
      ? 'Допплерометрия используется для раннего выявления плацентарной недостаточности и ухудшения состояния плода.'
      : 'Допплер помогает уточнить характер кровоснабжения очага и исключить альтернативную патологию.',
  imagingTips: buildImagingTips(disease),
  normalValues: buildNormalValues(disease),
});

const mergeUltrasound = (disease: Disease) => {
  const fallback = buildUltrasound(disease);
  const current = disease.ultrasound;

  if (!current) {
    return fallback;
  }

  return {
    protocols: current.protocols?.length ? current.protocols : fallback.protocols,
    findings: current.findings?.length ? current.findings : fallback.findings,
    echogenicity: current.echogenicity ?? fallback.echogenicity,
    vascularization: current.vascularization ?? fallback.vascularization,
    dopplerFindings: current.dopplerFindings ?? fallback.dopplerFindings,
    imagingTips: current.imagingTips?.length ? current.imagingTips : fallback.imagingTips,
    normalValues: current.normalValues ?? fallback.normalValues,
  };
};

export const enrichDisease = (disease: Disease): Disease => ({
  ...disease,
  diagnostics: {
    ...disease.diagnostics,
    imaging: disease.diagnostics.imaging?.length ? disease.diagnostics.imaging : buildImaging(disease),
    differential: disease.diagnostics.differential?.length ? disease.diagnostics.differential : buildDifferential(disease),
  },
  ultrasound: mergeUltrasound(disease),
  recommendations: disease.recommendations?.length ? disease.recommendations : buildRecommendations(disease),
  prognosis: disease.prognosis ?? buildPrognosis(disease),
  followUp: disease.followUp ?? buildFollowUp(disease),
  clinicalCases: disease.clinicalCases?.length ? disease.clinicalCases : buildClinicalCases(disease),
});

export const enrichDiseases = (diseases: Disease[]) => diseases.map(enrichDisease);
