export const medications = [
  {
    id: "progesterone",
    name: "Прогестерон",
    nameEn: "Progesterone",
    category: "Гормональная терапия",
    forms: ["Капсулы", "Гель", "Инъекции"],
    dosage: {
      capsules: "200-400 мг/день",
      gel: "1-2 аппликатора/день",
      injection: "100-200 мг/день"
    },
    indications: ["Эндометриоз", "Синдром поликистозных яичников", "Угроза выкидыша", "Лютеиновая недостаточность"],
    contraindications: ["Тромбоз", "Опухоли молочной железы", "Тяжелые заболевания печени", "Вагинальные кровотечения"],
    sideEffects: ["Тошнота", "Головная боль", "Перепады настроения", "Усталость", "Набор веса"],
    interactions: [
      { drug: "Эстрогены", effect: "Усиление эффекта", level: "medium" },
      { drug: "Барбитураты", effect: "Снижение эффекта", level: "medium" }
    ]
  },
  {
    id: "clomiphene",
    name: "Кломифен",
    nameEn: "Clomiphene citrate",
    category: "Стимуляция овуляции",
    forms: ["Таблетки"],
    dosage: {
      standard: "50-150 мг/день, 5 дней"
    },
    indications: ["Ановуляция", "Синдром поликистозных яичников", "Эндокринное бесплодие"],
    contraindications: ["Беременность", "Кисты яичников", "Опухоли гипофиза", "Тромбоэмболия"],
    sideEffects: ["Приливы", "Тошнота", "Головная боль", "Нарушения зрения", "Киста яичника"],
    interactions: [
      { drug: "Тамоксифен", effect: "Антагонизм", level: "low" }
    ]
  },
  {
    id: "letrozole",
    name: "Летрозол",
    nameEn: "Letrozole",
    category: "Ингибиторы ароматазы",
    forms: ["Таблетки"],
    dosage: {
      standard: "2.5-5 мг/день"
    },
    indications: ["Бесплодие", "Эндометриоз", "Рак молочной железы"],
    contraindications: ["Беременность", "Печеночная недостаточность"],
    sideEffects: ["Приливы", "Артралгия", "Усталость", "Остеопороз"],
    interactions: [
      { drug: "Эстрогены", effect: "Снижение эффекта", level: "medium" },
      { drug: "Тамоксифен", effect: "Снижение концентрации", level: "medium" }
    ]
  },
  {
    id: "drospirenone",
    name: "Дроспиренон",
    nameEn: "Drospirenone",
    category: "Гормональная контрацепция",
    forms: ["Таблетки"],
    dosage: {
      standard: "3 мг/день"
    },
    indications: ["Контрацепция", "Эндометриоз", "ПМС"],
    contraindications: ["Тромбоз", "Почечная недостаточность", "Опухоли печени"],
    sideEffects: ["Тошнота", "Головная боль", "Перепады настроения", "Снижение либидо"],
    interactions: [
      { drug: "Антибиотики", effect: "Снижение эффективности контрацепции", level: "medium" },
      { drug: "Противосудорожные", effect: "Снижение эффективности", level: "high" }
    ]
  },
  {
    id: "metformin",
    name: "Метформин",
    nameEn: "Metformin",
    category: "Сахароснижающие",
    forms: ["Таблетки"],
    dosage: {
      standard: "500-2000 мг/день"
    },
    indications: ["Синдром поликистозных яичников", "Сахарный диабет 2 типа"],
    contraindications: ["Почечная недостаточность", "Печеночная недостаточность", "Беременность", "Алкоголизм"],
    sideEffects: ["Тошнота", "Диарея", "Металлический привкус", "Дефицит B12"],
    interactions: [
      { drug: "Алкоголь", effect: "Риск лактатацидоза", level: "high" },
      { drug: "Йодсодержащие контрасты", effect: "Почечная недостаточность", level: "high" }
    ]
  },
  {
    id: "mefenamic-acid",
    name: "Мефенамовая кислота",
    nameEn: "Mefenamic acid",
    category: "НПВС",
    forms: ["Капсулы", "Таблетки"],
    dosage: {
      standard: "500 мг 3 раза/день"
    },
    indications: ["Дисменорея", "Обильные менструации", "Воспалительные заболевания"],
    contraindications: ["Язвенная болезнь", "Бронхиальная астма", "Гемофилия", "Беременность"],
    sideEffects: ["Тошнота", "Диарея", "Головная боль", "Сонливость"],
    interactions: [
      { drug: "Антикоагулянты", effect: "Усиление кровотечения", level: "high" },
      { drug: "Другие НПВС", effect: "Усиление побочных эффектов", level: "medium" }
    ]
  },
  {
    id: "tranexamic-acid",
    name: "Транексамовая кислота",
    nameEn: "Tranexamic acid",
    category: "Антифибринолитики",
    forms: ["Таблетки", "Инъекции"],
    dosage: {
      tablets: "1000-1500 мг 3-4 раза/день",
      injection: "500-1000 мг в/в"
    },
    indications: ["Обильные менструации", "Послеродовое кровотечение", "Травмы"],
    contraindications: ["Тромбоз", "Почечная недостаточность", "Судороги"],
    sideEffects: ["Тошнота", "Диарея", "Головная боль", "Тромбоз"],
    interactions: [
      { drug: "Эстрогены", effect: "Риск тромбоза", level: "high" },
      { drug: "Антикоагулянты", effect: "Усиление эффекта", level: "high" }
    ]
  },
  {
    id: "azithromycin",
    name: "Азитромицин",
    nameEn: "Azithromycin",
    category: "Антибиотики",
    forms: ["Капсулы", "Суспензия"],
    dosage: {
      standard: "500 мг 1 раз/день, 3 дня"
    },
    indications: ["Хламидиоз", "Микоплазмоз", "Бактериальный вагиноз", "Воспалительные заболевания"],
    contraindications: ["Печеночная недостаточность", "Аритмии"],
    sideEffects: ["Тошнота", "Диарея", "Боли в животе", "Головная боль"],
    interactions: [
      { drug: "Антациды", effect: "Снижение всасывания", level: "low" },
      { drug: "Варфарин", effect: "Усиление антикоагуляции", level: "medium" },
      { drug: "Дигоксин", effect: "Усиление токсичности", level: "high" }
    ]
  },
  {
    id: "doxycycline",
    name: "Доксициклин",
    nameEn: "Doxycycline",
    category: "Антибиотики",
    forms: ["Капсулы"],
    dosage: {
      standard: "100 мг 2 раза/день"
    },
    indications: ["Хламидиоз", "Микоплазмоз", "Уреаплазмоз", "Акне"],
    contraindications: ["Беременность", "Дети до 8 лет", "Печеночная недостаточность"],
    sideEffects: ["Тошнота", "Фотосенсибилизация", "Эзофагит", "Кандидоз"],
    interactions: [
      { drug: "Антациды", effect: "Снижение всасывания", level: "medium" },
      { drug: "Ретиноиды", effect: "Повышение внутричерепного давления", level: "high" }
    ]
  },
  {
    id: "cabergoline",
    name: "Каберголин",
    nameEn: "Cabergoline",
    category: "Дофаминомиметики",
    forms: ["Таблетки"],
    dosage: {
      standard: "0.5-1 мг 2 раза/неделю"
    },
    indications: ["Гиперпролактинемия", "Пролактинома"],
    contraindications: ["Тяжелая почечная недостаточность", "Пороки сердца"],
    sideEffects: ["Тошнота", "Головная боль", "Головокружение", "Ортостатическая гипотензия"],
    interactions: [
      { drug: "Антипсихотики", effect: "Снижение эффективности", level: "medium" },
      { drug: "Эстрогены", effect: "Усиление эффекта", level: "low" }
    ]
  }
];

export const drugInteractions = {
  categories: {
    high: {
      label: "Высокий риск",
      color: "#e74c3c",
      description: "Комбинация требует особого внимания или противопоказана"
    },
    medium: {
      label: "Средний риск",
      color: "#f39c12",
      description: "Требуется коррекция дозы или мониторинг"
    },
    low: {
      label: "Низкий риск",
      color: "#27ae60",
      description: "Взаимодействие возможно, но клинически значимо редко"
    }
  },
  check: (drug1Id, drug2Id) => {
    const drug1 = medications.find(m => m.id === drug1Id);
    const drug2 = medications.find(m => m.id === drug2Id);
    
    if (!drug1 || !drug2) return null;
    
    const interaction = drug1.interactions?.find(i => 
      i.drug.toLowerCase().includes(drug2.name.toLowerCase()) ||
      i.drug.toLowerCase().includes(drug2.nameEn.toLowerCase())
    );
    
    if (interaction) return interaction;
    
    return null;
  }
};

export const commonRegimens = [
  {
    id: "pcos-ovulation",
    name: "Стимуляция овуляции при СПКЯ",
    steps: [
      { day: "1-5", drug: "Кломифен", dose: "50-100 мг" },
      { day: "12-14", drug: "УЗИ мониторинг", note: "Контроль фолликулов" },
      { day: "14-16", drug: "ХГЧ", dose: "5000-10000 ЕД", note: "Триггер овуляции" }
    ]
  },
  {
    id: "endometriosis-therapy",
    name: "Лечение эндометриоза",
    steps: [
      { day: "1-28", drug: "Гестагены", note: "Диеногест 2 мг/день или аналоги" },
      { day: "1-28", drug: "Кок", note: "При необходимости контрацепции" }
    ]
  },
  {
    id: "recurrent-miscarriage",
    name: "Привычное невынашивание",
    steps: [
      { day: "1", drug: "Фолиевая кислота", dose: "400-800 мкг" },
      { day: "1-12", drug: "Прогестерон", note: "Лютеиновая поддержка" },
      { day: "1-28", drug: "Аспирин", dose: "75-100 мг", note: "При АФС" }
    ]
  }
];
