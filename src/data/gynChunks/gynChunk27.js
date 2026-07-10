const chunk = [
  {
    "id": "stub-n81-0",
    "name": "Аденомиоз и другие маточные поражения",
    "icd": "N81.0",
    "subtitle": "Гинекология",
    "icon": "prolapse",
    "definition": "Аденомиоз и другие маточные поражения (N81.0) — опущение/выпадение женских половых органов вследствие слабости тазового дна.",
    "overview": {
      "quickTake": "Аденомиоз и другие маточные поражения: пролапс тазовых органов; ведение от консервативного (ЛФК, пессарий) до хирургии.",
      "prevalence": "Растёт с возрастом и после родов.",
      "riskLevel": "low",
      "practiceFocus": "Оценка стадии (POP-Q), выбор консервативного или хирургического лечения."
    },
    "epidemiology": "Часто у женщин старше 50 лет, после родов.",
    "etiology": [
      "Травма тазового дна при родах",
      "Возрастная атрофия",
      "Хроническое повышение внутрибрюшного давления"
    ],
    "symptoms": [
      "Ощущение инородного тела во влагалище",
      "Дискомфорт при ходьбе",
      "Нарушение мочеиспускания/дефекации"
    ],
    "symptomGroups": {
      "typical": [
        "Выбухание, дискомфорт.",
        "Симптомы со стороны смежных органов."
      ],
      "alarm": [
        "Ущемление пролапса, острая задержка мочи."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Аденомиоз и другие маточные поражения: оцените по POP-Q; консервативно (ЛФК/пессарий) при лёгких, хирургия при тяжёлых/симптомных.",
      "redFlags": [
        "Ущемление, острая задержка мочи."
      ],
      "firstLineActions": [
        "Осмотр в зеркалах (POP-Q), УЗИ/МРТ по показаниям."
      ],
      "diagnosticMinimum": [
        "Гинекологический осмотр, POP-Q."
      ],
      "whenToEscalate": [
        "Ущемление, тяжёлый пролапс."
      ],
      "clinicalPearls": [
        "Консервативная терапия эффективна при лёгких стадиях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "AUGS/IUGA",
        "title": "Pelvic organ prolapse guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение пролапса.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Визуализация пролапса при натуживании (POP-Q)."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Осмотр + POP-Q."
      ],
      "diagnosisExcludedWhen": [
        "Другая масса влагалища."
      ]
    },
    "severityStratification": {
      "title": "POP-Q",
      "tiers": [
        {
          "name": "I-II",
          "criteria": [
            "Лёгкое опущение."
          ],
          "clinicalMeaning": "Консервативно.",
          "managementImpact": "ЛФК, пессарий."
        },
        {
          "name": "III-IV",
          "criteria": [
            "Выраженное выпадение."
          ],
          "clinicalMeaning": "Хирургия.",
          "managementImpact": "Реконструктивная операция."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Киста/опухоль влагалища",
        "whyConfused": "Образование во влагалище.",
        "howToDistinguish": "Осмотр/УЗИ.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "POP-Q, анамнез, сопутствующие симптомы."
      ],
      "confirmDiagnosis": [
        "Осмотр."
      ],
      "startTreatment": [
        "ЛФК (Кегель), пессарий при лёгких; хирургия при тяжёлых."
      ],
      "reassess": [
        "Динамика пролапса."
      ],
      "escalateWhen": [
        "Ущемление, тяжёлый пролапс."
      ],
      "referWhen": [
        "К урогинекологу."
      ]
    },
    "treatment": {
      "conservative": [
        "ЛФК тазового дна, пессарий, эстрогены местно."
      ],
      "surgical": [
        "Реконструктивные операции (кольпорафия, сакропексия)."
      ],
      "guidelines": {
        "eau": "Хирургия при симптомном тяжёлом пролапсе.",
        "ru": "Выбор объёма операции индивидуально."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное/промежностное",
          "indications": [
            "Оценка пролапса"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "тазовое дно",
          "description": "Опущение стенок влагалища/матки.",
          "normal": "Норма.",
          "pathology": "Пролапс по POP-Q.",
          "clinicalSignificance": "Стадия пролапса."
        }
      ],
      "imagingTips": [
        "Промежностное УЗИ для оценки слинтов/сеток."
      ]
    },
    "recommendations": [
      "ЛФК тазового дна, контроль веса, лечение кашля/запоров."
    ],
    "prognosis": {
      "general": "Хороший при адекватном лечении.",
      "factors": [
        "Стадия",
        "Сопутствующие заболевания"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Ежегодно при консервативном",
      "duration": "Длительно",
      "tests": [
        "Осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль стадии."
      ],
      "earlierReviewIf": [
        "Прогрессирование/симптомы."
      ],
      "switchTreatmentIf": [
        "Неэффективность консервативного."
      ],
      "urgentReassessmentIf": [
        "Ущемление/задержка мочи."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать ущемление пролапса."
    ],
    "patientCounseling": [
      "ЛФК эффективна при лёгких стадиях.",
      "Обсудить хирургию при тяжёлых."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Родоразрешение обсуждается при тяжёлом пролапсе."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n81-3",
    "name": "Аденомиоз и другие маточные поражения",
    "icd": "N81.3",
    "subtitle": "Гинекология",
    "icon": "prolapse",
    "definition": "Аденомиоз и другие маточные поражения (N81.3) — опущение/выпадение женских половых органов вследствие слабости тазового дна.",
    "overview": {
      "quickTake": "Аденомиоз и другие маточные поражения: пролапс тазовых органов; ведение от консервативного (ЛФК, пессарий) до хирургии.",
      "prevalence": "Растёт с возрастом и после родов.",
      "riskLevel": "low",
      "practiceFocus": "Оценка стадии (POP-Q), выбор консервативного или хирургического лечения."
    },
    "epidemiology": "Часто у женщин старше 50 лет, после родов.",
    "etiology": [
      "Травма тазового дна при родах",
      "Возрастная атрофия",
      "Хроническое повышение внутрибрюшного давления"
    ],
    "symptoms": [
      "Ощущение инородного тела во влагалище",
      "Дискомфорт при ходьбе",
      "Нарушение мочеиспускания/дефекации"
    ],
    "symptomGroups": {
      "typical": [
        "Выбухание, дискомфорт.",
        "Симптомы со стороны смежных органов."
      ],
      "alarm": [
        "Ущемление пролапса, острая задержка мочи."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Аденомиоз и другие маточные поражения: оцените по POP-Q; консервативно (ЛФК/пессарий) при лёгких, хирургия при тяжёлых/симптомных.",
      "redFlags": [
        "Ущемление, острая задержка мочи."
      ],
      "firstLineActions": [
        "Осмотр в зеркалах (POP-Q), УЗИ/МРТ по показаниям."
      ],
      "diagnosticMinimum": [
        "Гинекологический осмотр, POP-Q."
      ],
      "whenToEscalate": [
        "Ущемление, тяжёлый пролапс."
      ],
      "clinicalPearls": [
        "Консервативная терапия эффективна при лёгких стадиях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "AUGS/IUGA",
        "title": "Pelvic organ prolapse guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение пролапса.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Визуализация пролапса при натуживании (POP-Q)."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Осмотр + POP-Q."
      ],
      "diagnosisExcludedWhen": [
        "Другая масса влагалища."
      ]
    },
    "severityStratification": {
      "title": "POP-Q",
      "tiers": [
        {
          "name": "I-II",
          "criteria": [
            "Лёгкое опущение."
          ],
          "clinicalMeaning": "Консервативно.",
          "managementImpact": "ЛФК, пессарий."
        },
        {
          "name": "III-IV",
          "criteria": [
            "Выраженное выпадение."
          ],
          "clinicalMeaning": "Хирургия.",
          "managementImpact": "Реконструктивная операция."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Киста/опухоль влагалища",
        "whyConfused": "Образование во влагалище.",
        "howToDistinguish": "Осмотр/УЗИ.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "POP-Q, анамнез, сопутствующие симптомы."
      ],
      "confirmDiagnosis": [
        "Осмотр."
      ],
      "startTreatment": [
        "ЛФК (Кегель), пессарий при лёгких; хирургия при тяжёлых."
      ],
      "reassess": [
        "Динамика пролапса."
      ],
      "escalateWhen": [
        "Ущемление, тяжёлый пролапс."
      ],
      "referWhen": [
        "К урогинекологу."
      ]
    },
    "treatment": {
      "conservative": [
        "ЛФК тазового дна, пессарий, эстрогены местно."
      ],
      "surgical": [
        "Реконструктивные операции (кольпорафия, сакропексия)."
      ],
      "guidelines": {
        "eau": "Хирургия при симптомном тяжёлом пролапсе.",
        "ru": "Выбор объёма операции индивидуально."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное/промежностное",
          "indications": [
            "Оценка пролапса"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "тазовое дно",
          "description": "Опущение стенок влагалища/матки.",
          "normal": "Норма.",
          "pathology": "Пролапс по POP-Q.",
          "clinicalSignificance": "Стадия пролапса."
        }
      ],
      "imagingTips": [
        "Промежностное УЗИ для оценки слинтов/сеток."
      ]
    },
    "recommendations": [
      "ЛФК тазового дна, контроль веса, лечение кашля/запоров."
    ],
    "prognosis": {
      "general": "Хороший при адекватном лечении.",
      "factors": [
        "Стадия",
        "Сопутствующие заболевания"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Ежегодно при консервативном",
      "duration": "Длительно",
      "tests": [
        "Осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль стадии."
      ],
      "earlierReviewIf": [
        "Прогрессирование/симптомы."
      ],
      "switchTreatmentIf": [
        "Неэффективность консервативного."
      ],
      "urgentReassessmentIf": [
        "Ущемление/задержка мочи."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать ущемление пролапса."
    ],
    "patientCounseling": [
      "ЛФК эффективна при лёгких стадиях.",
      "Обсудить хирургию при тяжёлых."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Родоразрешение обсуждается при тяжёлом пролапсе."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n81-4",
    "name": "Аденомиоз и другие маточные поражения",
    "icd": "N81.4",
    "subtitle": "Гинекология",
    "icon": "prolapse",
    "definition": "Аденомиоз и другие маточные поражения (N81.4) — опущение/выпадение женских половых органов вследствие слабости тазового дна.",
    "overview": {
      "quickTake": "Аденомиоз и другие маточные поражения: пролапс тазовых органов; ведение от консервативного (ЛФК, пессарий) до хирургии.",
      "prevalence": "Растёт с возрастом и после родов.",
      "riskLevel": "low",
      "practiceFocus": "Оценка стадии (POP-Q), выбор консервативного или хирургического лечения."
    },
    "epidemiology": "Часто у женщин старше 50 лет, после родов.",
    "etiology": [
      "Травма тазового дна при родах",
      "Возрастная атрофия",
      "Хроническое повышение внутрибрюшного давления"
    ],
    "symptoms": [
      "Ощущение инородного тела во влагалище",
      "Дискомфорт при ходьбе",
      "Нарушение мочеиспускания/дефекации"
    ],
    "symptomGroups": {
      "typical": [
        "Выбухание, дискомфорт.",
        "Симптомы со стороны смежных органов."
      ],
      "alarm": [
        "Ущемление пролапса, острая задержка мочи."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Аденомиоз и другие маточные поражения: оцените по POP-Q; консервативно (ЛФК/пессарий) при лёгких, хирургия при тяжёлых/симптомных.",
      "redFlags": [
        "Ущемление, острая задержка мочи."
      ],
      "firstLineActions": [
        "Осмотр в зеркалах (POP-Q), УЗИ/МРТ по показаниям."
      ],
      "diagnosticMinimum": [
        "Гинекологический осмотр, POP-Q."
      ],
      "whenToEscalate": [
        "Ущемление, тяжёлый пролапс."
      ],
      "clinicalPearls": [
        "Консервативная терапия эффективна при лёгких стадиях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "AUGS/IUGA",
        "title": "Pelvic organ prolapse guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение пролапса.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Визуализация пролапса при натуживании (POP-Q)."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Осмотр + POP-Q."
      ],
      "diagnosisExcludedWhen": [
        "Другая масса влагалища."
      ]
    },
    "severityStratification": {
      "title": "POP-Q",
      "tiers": [
        {
          "name": "I-II",
          "criteria": [
            "Лёгкое опущение."
          ],
          "clinicalMeaning": "Консервативно.",
          "managementImpact": "ЛФК, пессарий."
        },
        {
          "name": "III-IV",
          "criteria": [
            "Выраженное выпадение."
          ],
          "clinicalMeaning": "Хирургия.",
          "managementImpact": "Реконструктивная операция."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Киста/опухоль влагалища",
        "whyConfused": "Образование во влагалище.",
        "howToDistinguish": "Осмотр/УЗИ.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "POP-Q, анамнез, сопутствующие симптомы."
      ],
      "confirmDiagnosis": [
        "Осмотр."
      ],
      "startTreatment": [
        "ЛФК (Кегель), пессарий при лёгких; хирургия при тяжёлых."
      ],
      "reassess": [
        "Динамика пролапса."
      ],
      "escalateWhen": [
        "Ущемление, тяжёлый пролапс."
      ],
      "referWhen": [
        "К урогинекологу."
      ]
    },
    "treatment": {
      "conservative": [
        "ЛФК тазового дна, пессарий, эстрогены местно."
      ],
      "surgical": [
        "Реконструктивные операции (кольпорафия, сакропексия)."
      ],
      "guidelines": {
        "eau": "Хирургия при симптомном тяжёлом пролапсе.",
        "ru": "Выбор объёма операции индивидуально."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное/промежностное",
          "indications": [
            "Оценка пролапса"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "тазовое дно",
          "description": "Опущение стенок влагалища/матки.",
          "normal": "Норма.",
          "pathology": "Пролапс по POP-Q.",
          "clinicalSignificance": "Стадия пролапса."
        }
      ],
      "imagingTips": [
        "Промежностное УЗИ для оценки слинтов/сеток."
      ]
    },
    "recommendations": [
      "ЛФК тазового дна, контроль веса, лечение кашля/запоров."
    ],
    "prognosis": {
      "general": "Хороший при адекватном лечении.",
      "factors": [
        "Стадия",
        "Сопутствующие заболевания"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Ежегодно при консервативном",
      "duration": "Длительно",
      "tests": [
        "Осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль стадии."
      ],
      "earlierReviewIf": [
        "Прогрессирование/симптомы."
      ],
      "switchTreatmentIf": [
        "Неэффективность консервативного."
      ],
      "urgentReassessmentIf": [
        "Ущемление/задержка мочи."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать ущемление пролапса."
    ],
    "patientCounseling": [
      "ЛФК эффективна при лёгких стадиях.",
      "Обсудить хирургию при тяжёлых."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Родоразрешение обсуждается при тяжёлом пролапсе."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n81-5",
    "name": "Аденомиоз и другие маточные поражения",
    "icd": "N81.5",
    "subtitle": "Гинекология",
    "icon": "prolapse",
    "definition": "Аденомиоз и другие маточные поражения (N81.5) — опущение/выпадение женских половых органов вследствие слабости тазового дна.",
    "overview": {
      "quickTake": "Аденомиоз и другие маточные поражения: пролапс тазовых органов; ведение от консервативного (ЛФК, пессарий) до хирургии.",
      "prevalence": "Растёт с возрастом и после родов.",
      "riskLevel": "low",
      "practiceFocus": "Оценка стадии (POP-Q), выбор консервативного или хирургического лечения."
    },
    "epidemiology": "Часто у женщин старше 50 лет, после родов.",
    "etiology": [
      "Травма тазового дна при родах",
      "Возрастная атрофия",
      "Хроническое повышение внутрибрюшного давления"
    ],
    "symptoms": [
      "Ощущение инородного тела во влагалище",
      "Дискомфорт при ходьбе",
      "Нарушение мочеиспускания/дефекации"
    ],
    "symptomGroups": {
      "typical": [
        "Выбухание, дискомфорт.",
        "Симптомы со стороны смежных органов."
      ],
      "alarm": [
        "Ущемление пролапса, острая задержка мочи."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Аденомиоз и другие маточные поражения: оцените по POP-Q; консервативно (ЛФК/пессарий) при лёгких, хирургия при тяжёлых/симптомных.",
      "redFlags": [
        "Ущемление, острая задержка мочи."
      ],
      "firstLineActions": [
        "Осмотр в зеркалах (POP-Q), УЗИ/МРТ по показаниям."
      ],
      "diagnosticMinimum": [
        "Гинекологический осмотр, POP-Q."
      ],
      "whenToEscalate": [
        "Ущемление, тяжёлый пролапс."
      ],
      "clinicalPearls": [
        "Консервативная терапия эффективна при лёгких стадиях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "AUGS/IUGA",
        "title": "Pelvic organ prolapse guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение пролапса.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Визуализация пролапса при натуживании (POP-Q)."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Осмотр + POP-Q."
      ],
      "diagnosisExcludedWhen": [
        "Другая масса влагалища."
      ]
    },
    "severityStratification": {
      "title": "POP-Q",
      "tiers": [
        {
          "name": "I-II",
          "criteria": [
            "Лёгкое опущение."
          ],
          "clinicalMeaning": "Консервативно.",
          "managementImpact": "ЛФК, пессарий."
        },
        {
          "name": "III-IV",
          "criteria": [
            "Выраженное выпадение."
          ],
          "clinicalMeaning": "Хирургия.",
          "managementImpact": "Реконструктивная операция."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Киста/опухоль влагалища",
        "whyConfused": "Образование во влагалище.",
        "howToDistinguish": "Осмотр/УЗИ.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "POP-Q, анамнез, сопутствующие симптомы."
      ],
      "confirmDiagnosis": [
        "Осмотр."
      ],
      "startTreatment": [
        "ЛФК (Кегель), пессарий при лёгких; хирургия при тяжёлых."
      ],
      "reassess": [
        "Динамика пролапса."
      ],
      "escalateWhen": [
        "Ущемление, тяжёлый пролапс."
      ],
      "referWhen": [
        "К урогинекологу."
      ]
    },
    "treatment": {
      "conservative": [
        "ЛФК тазового дна, пессарий, эстрогены местно."
      ],
      "surgical": [
        "Реконструктивные операции (кольпорафия, сакропексия)."
      ],
      "guidelines": {
        "eau": "Хирургия при симптомном тяжёлом пролапсе.",
        "ru": "Выбор объёма операции индивидуально."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное/промежностное",
          "indications": [
            "Оценка пролапса"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "тазовое дно",
          "description": "Опущение стенок влагалища/матки.",
          "normal": "Норма.",
          "pathology": "Пролапс по POP-Q.",
          "clinicalSignificance": "Стадия пролапса."
        }
      ],
      "imagingTips": [
        "Промежностное УЗИ для оценки слинтов/сеток."
      ]
    },
    "recommendations": [
      "ЛФК тазового дна, контроль веса, лечение кашля/запоров."
    ],
    "prognosis": {
      "general": "Хороший при адекватном лечении.",
      "factors": [
        "Стадия",
        "Сопутствующие заболевания"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Ежегодно при консервативном",
      "duration": "Длительно",
      "tests": [
        "Осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль стадии."
      ],
      "earlierReviewIf": [
        "Прогрессирование/симптомы."
      ],
      "switchTreatmentIf": [
        "Неэффективность консервативного."
      ],
      "urgentReassessmentIf": [
        "Ущемление/задержка мочи."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать ущемление пролапса."
    ],
    "patientCounseling": [
      "ЛФК эффективна при лёгких стадиях.",
      "Обсудить хирургию при тяжёлых."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Родоразрешение обсуждается при тяжёлом пролапсе."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n81-7",
    "name": "Аденомиоз и другие маточные поражения",
    "icd": "N81.7",
    "subtitle": "Гинекология",
    "icon": "prolapse",
    "definition": "Аденомиоз и другие маточные поражения (N81.7) — опущение/выпадение женских половых органов вследствие слабости тазового дна.",
    "overview": {
      "quickTake": "Аденомиоз и другие маточные поражения: пролапс тазовых органов; ведение от консервативного (ЛФК, пессарий) до хирургии.",
      "prevalence": "Растёт с возрастом и после родов.",
      "riskLevel": "low",
      "practiceFocus": "Оценка стадии (POP-Q), выбор консервативного или хирургического лечения."
    },
    "epidemiology": "Часто у женщин старше 50 лет, после родов.",
    "etiology": [
      "Травма тазового дна при родах",
      "Возрастная атрофия",
      "Хроническое повышение внутрибрюшного давления"
    ],
    "symptoms": [
      "Ощущение инородного тела во влагалище",
      "Дискомфорт при ходьбе",
      "Нарушение мочеиспускания/дефекации"
    ],
    "symptomGroups": {
      "typical": [
        "Выбухание, дискомфорт.",
        "Симптомы со стороны смежных органов."
      ],
      "alarm": [
        "Ущемление пролапса, острая задержка мочи."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Аденомиоз и другие маточные поражения: оцените по POP-Q; консервативно (ЛФК/пессарий) при лёгких, хирургия при тяжёлых/симптомных.",
      "redFlags": [
        "Ущемление, острая задержка мочи."
      ],
      "firstLineActions": [
        "Осмотр в зеркалах (POP-Q), УЗИ/МРТ по показаниям."
      ],
      "diagnosticMinimum": [
        "Гинекологический осмотр, POP-Q."
      ],
      "whenToEscalate": [
        "Ущемление, тяжёлый пролапс."
      ],
      "clinicalPearls": [
        "Консервативная терапия эффективна при лёгких стадиях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "AUGS/IUGA",
        "title": "Pelvic organ prolapse guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение пролапса.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Визуализация пролапса при натуживании (POP-Q)."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Осмотр + POP-Q."
      ],
      "diagnosisExcludedWhen": [
        "Другая масса влагалища."
      ]
    },
    "severityStratification": {
      "title": "POP-Q",
      "tiers": [
        {
          "name": "I-II",
          "criteria": [
            "Лёгкое опущение."
          ],
          "clinicalMeaning": "Консервативно.",
          "managementImpact": "ЛФК, пессарий."
        },
        {
          "name": "III-IV",
          "criteria": [
            "Выраженное выпадение."
          ],
          "clinicalMeaning": "Хирургия.",
          "managementImpact": "Реконструктивная операция."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Киста/опухоль влагалища",
        "whyConfused": "Образование во влагалище.",
        "howToDistinguish": "Осмотр/УЗИ.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "POP-Q, анамнез, сопутствующие симптомы."
      ],
      "confirmDiagnosis": [
        "Осмотр."
      ],
      "startTreatment": [
        "ЛФК (Кегель), пессарий при лёгких; хирургия при тяжёлых."
      ],
      "reassess": [
        "Динамика пролапса."
      ],
      "escalateWhen": [
        "Ущемление, тяжёлый пролапс."
      ],
      "referWhen": [
        "К урогинекологу."
      ]
    },
    "treatment": {
      "conservative": [
        "ЛФК тазового дна, пессарий, эстрогены местно."
      ],
      "surgical": [
        "Реконструктивные операции (кольпорафия, сакропексия)."
      ],
      "guidelines": {
        "eau": "Хирургия при симптомном тяжёлом пролапсе.",
        "ru": "Выбор объёма операции индивидуально."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное/промежностное",
          "indications": [
            "Оценка пролапса"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "тазовое дно",
          "description": "Опущение стенок влагалища/матки.",
          "normal": "Норма.",
          "pathology": "Пролапс по POP-Q.",
          "clinicalSignificance": "Стадия пролапса."
        }
      ],
      "imagingTips": [
        "Промежностное УЗИ для оценки слинтов/сеток."
      ]
    },
    "recommendations": [
      "ЛФК тазового дна, контроль веса, лечение кашля/запоров."
    ],
    "prognosis": {
      "general": "Хороший при адекватном лечении.",
      "factors": [
        "Стадия",
        "Сопутствующие заболевания"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Ежегодно при консервативном",
      "duration": "Длительно",
      "tests": [
        "Осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль стадии."
      ],
      "earlierReviewIf": [
        "Прогрессирование/симптомы."
      ],
      "switchTreatmentIf": [
        "Неэффективность консервативного."
      ],
      "urgentReassessmentIf": [
        "Ущемление/задержка мочи."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать ущемление пролапса."
    ],
    "patientCounseling": [
      "ЛФК эффективна при лёгких стадиях.",
      "Обсудить хирургию при тяжёлых."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Родоразрешение обсуждается при тяжёлом пролапсе."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n81-8",
    "name": "Аденомиоз и другие маточные поражения",
    "icd": "N81.8",
    "subtitle": "Гинекология",
    "icon": "prolapse",
    "definition": "Аденомиоз и другие маточные поражения (N81.8) — опущение/выпадение женских половых органов вследствие слабости тазового дна.",
    "overview": {
      "quickTake": "Аденомиоз и другие маточные поражения: пролапс тазовых органов; ведение от консервативного (ЛФК, пессарий) до хирургии.",
      "prevalence": "Растёт с возрастом и после родов.",
      "riskLevel": "low",
      "practiceFocus": "Оценка стадии (POP-Q), выбор консервативного или хирургического лечения."
    },
    "epidemiology": "Часто у женщин старше 50 лет, после родов.",
    "etiology": [
      "Травма тазового дна при родах",
      "Возрастная атрофия",
      "Хроническое повышение внутрибрюшного давления"
    ],
    "symptoms": [
      "Ощущение инородного тела во влагалище",
      "Дискомфорт при ходьбе",
      "Нарушение мочеиспускания/дефекации"
    ],
    "symptomGroups": {
      "typical": [
        "Выбухание, дискомфорт.",
        "Симптомы со стороны смежных органов."
      ],
      "alarm": [
        "Ущемление пролапса, острая задержка мочи."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Аденомиоз и другие маточные поражения: оцените по POP-Q; консервативно (ЛФК/пессарий) при лёгких, хирургия при тяжёлых/симптомных.",
      "redFlags": [
        "Ущемление, острая задержка мочи."
      ],
      "firstLineActions": [
        "Осмотр в зеркалах (POP-Q), УЗИ/МРТ по показаниям."
      ],
      "diagnosticMinimum": [
        "Гинекологический осмотр, POP-Q."
      ],
      "whenToEscalate": [
        "Ущемление, тяжёлый пролапс."
      ],
      "clinicalPearls": [
        "Консервативная терапия эффективна при лёгких стадиях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "AUGS/IUGA",
        "title": "Pelvic organ prolapse guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение пролапса.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Визуализация пролапса при натуживании (POP-Q)."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Осмотр + POP-Q."
      ],
      "diagnosisExcludedWhen": [
        "Другая масса влагалища."
      ]
    },
    "severityStratification": {
      "title": "POP-Q",
      "tiers": [
        {
          "name": "I-II",
          "criteria": [
            "Лёгкое опущение."
          ],
          "clinicalMeaning": "Консервативно.",
          "managementImpact": "ЛФК, пессарий."
        },
        {
          "name": "III-IV",
          "criteria": [
            "Выраженное выпадение."
          ],
          "clinicalMeaning": "Хирургия.",
          "managementImpact": "Реконструктивная операция."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Киста/опухоль влагалища",
        "whyConfused": "Образование во влагалище.",
        "howToDistinguish": "Осмотр/УЗИ.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "POP-Q, анамнез, сопутствующие симптомы."
      ],
      "confirmDiagnosis": [
        "Осмотр."
      ],
      "startTreatment": [
        "ЛФК (Кегель), пессарий при лёгких; хирургия при тяжёлых."
      ],
      "reassess": [
        "Динамика пролапса."
      ],
      "escalateWhen": [
        "Ущемление, тяжёлый пролапс."
      ],
      "referWhen": [
        "К урогинекологу."
      ]
    },
    "treatment": {
      "conservative": [
        "ЛФК тазового дна, пессарий, эстрогены местно."
      ],
      "surgical": [
        "Реконструктивные операции (кольпорафия, сакропексия)."
      ],
      "guidelines": {
        "eau": "Хирургия при симптомном тяжёлом пролапсе.",
        "ru": "Выбор объёма операции индивидуально."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное/промежностное",
          "indications": [
            "Оценка пролапса"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "тазовое дно",
          "description": "Опущение стенок влагалища/матки.",
          "normal": "Норма.",
          "pathology": "Пролапс по POP-Q.",
          "clinicalSignificance": "Стадия пролапса."
        }
      ],
      "imagingTips": [
        "Промежностное УЗИ для оценки слинтов/сеток."
      ]
    },
    "recommendations": [
      "ЛФК тазового дна, контроль веса, лечение кашля/запоров."
    ],
    "prognosis": {
      "general": "Хороший при адекватном лечении.",
      "factors": [
        "Стадия",
        "Сопутствующие заболевания"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Ежегодно при консервативном",
      "duration": "Длительно",
      "tests": [
        "Осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль стадии."
      ],
      "earlierReviewIf": [
        "Прогрессирование/симптомы."
      ],
      "switchTreatmentIf": [
        "Неэффективность консервативного."
      ],
      "urgentReassessmentIf": [
        "Ущемление/задержка мочи."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать ущемление пролапса."
    ],
    "patientCounseling": [
      "ЛФК эффективна при лёгких стадиях.",
      "Обсудить хирургию при тяжёлых."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Родоразрешение обсуждается при тяжёлом пролапсе."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n81-9",
    "name": "Аденомиоз и другие маточные поражения",
    "icd": "N81.9",
    "subtitle": "Гинекология",
    "icon": "prolapse",
    "definition": "Аденомиоз и другие маточные поражения (N81.9) — опущение/выпадение женских половых органов вследствие слабости тазового дна.",
    "overview": {
      "quickTake": "Аденомиоз и другие маточные поражения: пролапс тазовых органов; ведение от консервативного (ЛФК, пессарий) до хирургии.",
      "prevalence": "Растёт с возрастом и после родов.",
      "riskLevel": "low",
      "practiceFocus": "Оценка стадии (POP-Q), выбор консервативного или хирургического лечения."
    },
    "epidemiology": "Часто у женщин старше 50 лет, после родов.",
    "etiology": [
      "Травма тазового дна при родах",
      "Возрастная атрофия",
      "Хроническое повышение внутрибрюшного давления"
    ],
    "symptoms": [
      "Ощущение инородного тела во влагалище",
      "Дискомфорт при ходьбе",
      "Нарушение мочеиспускания/дефекации"
    ],
    "symptomGroups": {
      "typical": [
        "Выбухание, дискомфорт.",
        "Симптомы со стороны смежных органов."
      ],
      "alarm": [
        "Ущемление пролапса, острая задержка мочи."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Аденомиоз и другие маточные поражения: оцените по POP-Q; консервативно (ЛФК/пессарий) при лёгких, хирургия при тяжёлых/симптомных.",
      "redFlags": [
        "Ущемление, острая задержка мочи."
      ],
      "firstLineActions": [
        "Осмотр в зеркалах (POP-Q), УЗИ/МРТ по показаниям."
      ],
      "diagnosticMinimum": [
        "Гинекологический осмотр, POP-Q."
      ],
      "whenToEscalate": [
        "Ущемление, тяжёлый пролапс."
      ],
      "clinicalPearls": [
        "Консервативная терапия эффективна при лёгких стадиях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "AUGS/IUGA",
        "title": "Pelvic organ prolapse guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение пролапса.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Визуализация пролапса при натуживании (POP-Q)."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Осмотр + POP-Q."
      ],
      "diagnosisExcludedWhen": [
        "Другая масса влагалища."
      ]
    },
    "severityStratification": {
      "title": "POP-Q",
      "tiers": [
        {
          "name": "I-II",
          "criteria": [
            "Лёгкое опущение."
          ],
          "clinicalMeaning": "Консервативно.",
          "managementImpact": "ЛФК, пессарий."
        },
        {
          "name": "III-IV",
          "criteria": [
            "Выраженное выпадение."
          ],
          "clinicalMeaning": "Хирургия.",
          "managementImpact": "Реконструктивная операция."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Киста/опухоль влагалища",
        "whyConfused": "Образование во влагалище.",
        "howToDistinguish": "Осмотр/УЗИ.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "POP-Q, анамнез, сопутствующие симптомы."
      ],
      "confirmDiagnosis": [
        "Осмотр."
      ],
      "startTreatment": [
        "ЛФК (Кегель), пессарий при лёгких; хирургия при тяжёлых."
      ],
      "reassess": [
        "Динамика пролапса."
      ],
      "escalateWhen": [
        "Ущемление, тяжёлый пролапс."
      ],
      "referWhen": [
        "К урогинекологу."
      ]
    },
    "treatment": {
      "conservative": [
        "ЛФК тазового дна, пессарий, эстрогены местно."
      ],
      "surgical": [
        "Реконструктивные операции (кольпорафия, сакропексия)."
      ],
      "guidelines": {
        "eau": "Хирургия при симптомном тяжёлом пролапсе.",
        "ru": "Выбор объёма операции индивидуально."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное/промежностное",
          "indications": [
            "Оценка пролапса"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "тазовое дно",
          "description": "Опущение стенок влагалища/матки.",
          "normal": "Норма.",
          "pathology": "Пролапс по POP-Q.",
          "clinicalSignificance": "Стадия пролапса."
        }
      ],
      "imagingTips": [
        "Промежностное УЗИ для оценки слинтов/сеток."
      ]
    },
    "recommendations": [
      "ЛФК тазового дна, контроль веса, лечение кашля/запоров."
    ],
    "prognosis": {
      "general": "Хороший при адекватном лечении.",
      "factors": [
        "Стадия",
        "Сопутствующие заболевания"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Ежегодно при консервативном",
      "duration": "Длительно",
      "tests": [
        "Осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль стадии."
      ],
      "earlierReviewIf": [
        "Прогрессирование/симптомы."
      ],
      "switchTreatmentIf": [
        "Неэффективность консервативного."
      ],
      "urgentReassessmentIf": [
        "Ущемление/задержка мочи."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать ущемление пролапса."
    ],
    "patientCounseling": [
      "ЛФК эффективна при лёгких стадиях.",
      "Обсудить хирургию при тяжёлых."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Родоразрешение обсуждается при тяжёлом пролапсе."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n82-0",
    "name": "Свищи женских половых органов",
    "icd": "N82.0",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Свищи женских половых органов (N82.0) — Гинекологическое/акушерское состояние.",
    "overview": {
      "quickTake": "Свищи женских половых органов (N82.0): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Свищи женских половых органов: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n82-1",
    "name": "Свищи женских половых органов",
    "icd": "N82.1",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Свищи женских половых органов (N82.1) — Гинекологическое/акушерское состояние.",
    "overview": {
      "quickTake": "Свищи женских половых органов (N82.1): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Свищи женских половых органов: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n82-2",
    "name": "Свищи женских половых органов",
    "icd": "N82.2",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Свищи женских половых органов (N82.2) — Гинекологическое/акушерское состояние.",
    "overview": {
      "quickTake": "Свищи женских половых органов (N82.2): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Свищи женских половых органов: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n82-3",
    "name": "Свищи женских половых органов",
    "icd": "N82.3",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Свищи женских половых органов (N82.3) — Гинекологическое/акушерское состояние.",
    "overview": {
      "quickTake": "Свищи женских половых органов (N82.3): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Свищи женских половых органов: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n82-4",
    "name": "Свищи женских половых органов",
    "icd": "N82.4",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Свищи женских половых органов (N82.4) — Гинекологическое/акушерское состояние.",
    "overview": {
      "quickTake": "Свищи женских половых органов (N82.4): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Свищи женских половых органов: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n82-5",
    "name": "Свищи женских половых органов",
    "icd": "N82.5",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Свищи женских половых органов (N82.5) — Гинекологическое/акушерское состояние.",
    "overview": {
      "quickTake": "Свищи женских половых органов (N82.5): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Свищи женских половых органов: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n82-6",
    "name": "Свищи женских половых органов",
    "icd": "N82.6",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Свищи женских половых органов (N82.6) — Гинекологическое/акушерское состояние.",
    "overview": {
      "quickTake": "Свищи женских половых органов (N82.6): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Свищи женских половых органов: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n82-7",
    "name": "Свищи женских половых органов",
    "icd": "N82.7",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Свищи женских половых органов (N82.7) — Гинекологическое/акушерское состояние.",
    "overview": {
      "quickTake": "Свищи женских половых органов (N82.7): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Свищи женских половых органов: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n82-8",
    "name": "Свищи женских половых органов",
    "icd": "N82.8",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Свищи женских половых органов (N82.8) — Гинекологическое/акушерское состояние.",
    "overview": {
      "quickTake": "Свищи женских половых органов (N82.8): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Свищи женских половых органов: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n82-9",
    "name": "Свищи женских половых органов",
    "icd": "N82.9",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Свищи женских половых органов (N82.9) — Гинекологическое/акушерское состояние.",
    "overview": {
      "quickTake": "Свищи женских половых органов (N82.9): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Свищи женских половых органов: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n83-4",
    "name": "Кисты и другие поражения яичника",
    "icd": "N83.4",
    "subtitle": "Гинекология",
    "icon": "ovary",
    "definition": "Кисты и другие поражения яичника (N83.4) — кистозное образование яичника доброкачественного или функционального характера.",
    "overview": {
      "quickTake": "Кисты и другие поражения яичника: чаще доброкачественно; исключите злокачественность (УЗИ O-RADS, онкомаркеры), решите наблюдение vs операция.",
      "prevalence": "Очень часто; многие функциональные кисты регрессируют сами.",
      "riskLevel": "low",
      "practiceFocus": "Исключение злокачественности, органосохранение у молодых."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Функциональные (фолликулярные, жёлтого тела)",
      "Истинные доброкачественные опухоли",
      "Эндометриоидные (зрелые тератомы, цистаденомы)"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Тазовая боль/тяжесть",
      "Острый перекрут/разрыв"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно или тяжесть."
      ],
      "alarm": [
        "Острый перекрут/разрыв — боль, шок.",
        "Быстрый рост (исключить рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Кисты и другие поражения яичника: подозревайте при тазовом образовании; исключите злокачественность и решите вопрос наблюдения/операции.",
      "redFlags": [
        "Перекрут/разрыв, признаки злокачественности."
      ],
      "firstLineActions": [
        "УЗИ (O-RADS), CA-125/HE4, оценка риска."
      ],
      "diagnosticMinimum": [
        "УЗИ, онкомаркеры."
      ],
      "whenToEscalate": [
        "Перекрут/разрыв, подозрение на рак."
      ],
      "clinicalPearls": [
        "Функциональные кисты регрессируют за 1-3 цикла — наблюдение."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACR",
        "title": "O-RADS ovarian adnexal mass guideline",
        "documentType": "Guideline",
        "scope": "Стратификация риска злокачественности.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      },
      {
        "organization": "ESGO",
        "title": "Ovarian tumor guideline",
        "documentType": "Guideline",
        "scope": "Ведение опухолей яичника.",
        "status": "latest available active guideline",
        "usedFor": [
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Тазовое образование без признаков злокачественности."
      ],
      "laboratory": [
        "CA-125/HE4; функциональные кисты — норма."
      ],
      "imaging": [
        "УЗИ O-RADS, МРТ при сложных кистах."
      ],
      "diagnosisConfirmedWhen": [
        "Доброкачественная картина + гистология при операции."
      ],
      "diagnosisExcludedWhen": [
        "Признаки злокачественности — рак яичника (C56)."
      ]
    },
    "severityStratification": {
      "title": "Риск злокачественности",
      "tiers": [
        {
          "name": "Низкий (O-RADS 1-2)",
          "criteria": [
            "Типичная доброкачественная киста."
          ],
          "clinicalMeaning": "Наблюдение или органосохраняющая операция.",
          "managementImpact": "Наблюдение/цистэктомия."
        },
        {
          "name": "Высокий (O-RADS 4-5)",
          "criteria": [
            "Солидный компонент, асцит, рост маркеров."
          ],
          "clinicalMeaning": "Исключить рак.",
          "managementImpact": "Онкогинекологическая операция."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Рак яичника (C56)",
        "whyConfused": "Тазовая масса.",
        "howToDistinguish": "O-RADS, онкомаркеры, МРТ.",
        "testsIfNeeded": [
          "МРТ",
          "CA-125/HE4"
        ]
      },
      {
        "condition": "Внематочная беременность",
        "whyConfused": "Образование придатков + боль.",
        "howToDistinguish": "ХГЧ, УЗИ.",
        "testsIfNeeded": [
          "ХГЧ",
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ O-RADS, онкомаркеры."
      ],
      "confirmDiagnosis": [
        "Доброкачественная визуализация; гистология при операции."
      ],
      "startTreatment": [
        "Наблюдение при функциональных кистах; цистэктомия при крупных/симптомных."
      ],
      "reassess": [
        "УЗИ в динамике."
      ],
      "escalateWhen": [
        "Перекрут/разрыв, высокий риск злокачественности."
      ],
      "referWhen": [
        "К онкогинекологу при O-RADS 4-5."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение функциональных кист (регрессия)."
      ],
      "surgical": [
        "Цистэктомия/аднексэктомия (органосохраняющая)."
      ],
      "guidelines": {
        "eau": "Органосохранение у молодых.",
        "ru": "Исключение злокачественности обязательно до операции."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное + трансабдоминальное",
          "indications": [
            "Оценка кисты"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "яичник",
          "description": "Анэхогенная киста с перегородками/включениями; перегородки/сосуды → выше риск.",
          "normal": "Норма.",
          "pathology": "Киста с перегородками/папиллярными разрастаниями.",
          "clinicalSignificance": "O-RADS стратификация."
        }
      ],
      "imagingTips": [
        "O-RADS; МРТ при сложных кистах."
      ]
    },
    "recommendations": [
      "Исключение злокачественности перед операцией.",
      "Органосохранение у молодых."
    ],
    "prognosis": {
      "general": "Отличный для доброкачественных.",
      "factors": [
        "Тип кисты",
        "Исключение злокачественности"
      ],
      "survival": "Доброкачественная — 100%."
    },
    "followUp": {
      "frequency": "УЗИ в динамике при наблюдении",
      "duration": "По ситуации",
      "tests": [
        "УЗИ",
        "онкомаркеры"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль размеров."
      ],
      "earlierReviewIf": [
        "Рост, боль, перекрут."
      ],
      "switchTreatmentIf": [
        "Рост/подозрение на злокачественность."
      ],
      "urgentReassessmentIf": [
        "Острый перекрут/разрыв."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не оперировать каждую кисту у молодых без динамики.",
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Доброкачественный характер (чаще).",
      "Обсудить наблюдение vs операцию."
    ],
    "specialPopulations": {
      "adolescents": [
        "Часто функциональные кисты; наблюдение."
      ],
      "fertilityPlanning": [
        "Органосохраняющая операция приоритетна."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n83-6",
    "name": "Кисты и другие поражения яичника",
    "icd": "N83.6",
    "subtitle": "Гинекология",
    "icon": "ovary",
    "definition": "Кисты и другие поражения яичника (N83.6) — кистозное образование яичника доброкачественного или функционального характера.",
    "overview": {
      "quickTake": "Кисты и другие поражения яичника: чаще доброкачественно; исключите злокачественность (УЗИ O-RADS, онкомаркеры), решите наблюдение vs операция.",
      "prevalence": "Очень часто; многие функциональные кисты регрессируют сами.",
      "riskLevel": "low",
      "practiceFocus": "Исключение злокачественности, органосохранение у молодых."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Функциональные (фолликулярные, жёлтого тела)",
      "Истинные доброкачественные опухоли",
      "Эндометриоидные (зрелые тератомы, цистаденомы)"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Тазовая боль/тяжесть",
      "Острый перекрут/разрыв"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно или тяжесть."
      ],
      "alarm": [
        "Острый перекрут/разрыв — боль, шок.",
        "Быстрый рост (исключить рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Кисты и другие поражения яичника: подозревайте при тазовом образовании; исключите злокачественность и решите вопрос наблюдения/операции.",
      "redFlags": [
        "Перекрут/разрыв, признаки злокачественности."
      ],
      "firstLineActions": [
        "УЗИ (O-RADS), CA-125/HE4, оценка риска."
      ],
      "diagnosticMinimum": [
        "УЗИ, онкомаркеры."
      ],
      "whenToEscalate": [
        "Перекрут/разрыв, подозрение на рак."
      ],
      "clinicalPearls": [
        "Функциональные кисты регрессируют за 1-3 цикла — наблюдение."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACR",
        "title": "O-RADS ovarian adnexal mass guideline",
        "documentType": "Guideline",
        "scope": "Стратификация риска злокачественности.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      },
      {
        "organization": "ESGO",
        "title": "Ovarian tumor guideline",
        "documentType": "Guideline",
        "scope": "Ведение опухолей яичника.",
        "status": "latest available active guideline",
        "usedFor": [
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Тазовое образование без признаков злокачественности."
      ],
      "laboratory": [
        "CA-125/HE4; функциональные кисты — норма."
      ],
      "imaging": [
        "УЗИ O-RADS, МРТ при сложных кистах."
      ],
      "diagnosisConfirmedWhen": [
        "Доброкачественная картина + гистология при операции."
      ],
      "diagnosisExcludedWhen": [
        "Признаки злокачественности — рак яичника (C56)."
      ]
    },
    "severityStratification": {
      "title": "Риск злокачественности",
      "tiers": [
        {
          "name": "Низкий (O-RADS 1-2)",
          "criteria": [
            "Типичная доброкачественная киста."
          ],
          "clinicalMeaning": "Наблюдение или органосохраняющая операция.",
          "managementImpact": "Наблюдение/цистэктомия."
        },
        {
          "name": "Высокий (O-RADS 4-5)",
          "criteria": [
            "Солидный компонент, асцит, рост маркеров."
          ],
          "clinicalMeaning": "Исключить рак.",
          "managementImpact": "Онкогинекологическая операция."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Рак яичника (C56)",
        "whyConfused": "Тазовая масса.",
        "howToDistinguish": "O-RADS, онкомаркеры, МРТ.",
        "testsIfNeeded": [
          "МРТ",
          "CA-125/HE4"
        ]
      },
      {
        "condition": "Внематочная беременность",
        "whyConfused": "Образование придатков + боль.",
        "howToDistinguish": "ХГЧ, УЗИ.",
        "testsIfNeeded": [
          "ХГЧ",
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ O-RADS, онкомаркеры."
      ],
      "confirmDiagnosis": [
        "Доброкачественная визуализация; гистология при операции."
      ],
      "startTreatment": [
        "Наблюдение при функциональных кистах; цистэктомия при крупных/симптомных."
      ],
      "reassess": [
        "УЗИ в динамике."
      ],
      "escalateWhen": [
        "Перекрут/разрыв, высокий риск злокачественности."
      ],
      "referWhen": [
        "К онкогинекологу при O-RADS 4-5."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение функциональных кист (регрессия)."
      ],
      "surgical": [
        "Цистэктомия/аднексэктомия (органосохраняющая)."
      ],
      "guidelines": {
        "eau": "Органосохранение у молодых.",
        "ru": "Исключение злокачественности обязательно до операции."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное + трансабдоминальное",
          "indications": [
            "Оценка кисты"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "яичник",
          "description": "Анэхогенная киста с перегородками/включениями; перегородки/сосуды → выше риск.",
          "normal": "Норма.",
          "pathology": "Киста с перегородками/папиллярными разрастаниями.",
          "clinicalSignificance": "O-RADS стратификация."
        }
      ],
      "imagingTips": [
        "O-RADS; МРТ при сложных кистах."
      ]
    },
    "recommendations": [
      "Исключение злокачественности перед операцией.",
      "Органосохранение у молодых."
    ],
    "prognosis": {
      "general": "Отличный для доброкачественных.",
      "factors": [
        "Тип кисты",
        "Исключение злокачественности"
      ],
      "survival": "Доброкачественная — 100%."
    },
    "followUp": {
      "frequency": "УЗИ в динамике при наблюдении",
      "duration": "По ситуации",
      "tests": [
        "УЗИ",
        "онкомаркеры"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль размеров."
      ],
      "earlierReviewIf": [
        "Рост, боль, перекрут."
      ],
      "switchTreatmentIf": [
        "Рост/подозрение на злокачественность."
      ],
      "urgentReassessmentIf": [
        "Острый перекрут/разрыв."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не оперировать каждую кисту у молодых без динамики.",
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Доброкачественный характер (чаще).",
      "Обсудить наблюдение vs операцию."
    ],
    "specialPopulations": {
      "adolescents": [
        "Часто функциональные кисты; наблюдение."
      ],
      "fertilityPlanning": [
        "Органосохраняющая операция приоритетна."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n83-7",
    "name": "Кисты и другие поражения яичника",
    "icd": "N83.7",
    "subtitle": "Гинекология",
    "icon": "ovary",
    "definition": "Кисты и другие поражения яичника (N83.7) — кистозное образование яичника доброкачественного или функционального характера.",
    "overview": {
      "quickTake": "Кисты и другие поражения яичника: чаще доброкачественно; исключите злокачественность (УЗИ O-RADS, онкомаркеры), решите наблюдение vs операция.",
      "prevalence": "Очень часто; многие функциональные кисты регрессируют сами.",
      "riskLevel": "low",
      "practiceFocus": "Исключение злокачественности, органосохранение у молодых."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Функциональные (фолликулярные, жёлтого тела)",
      "Истинные доброкачественные опухоли",
      "Эндометриоидные (зрелые тератомы, цистаденомы)"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Тазовая боль/тяжесть",
      "Острый перекрут/разрыв"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно или тяжесть."
      ],
      "alarm": [
        "Острый перекрут/разрыв — боль, шок.",
        "Быстрый рост (исключить рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Кисты и другие поражения яичника: подозревайте при тазовом образовании; исключите злокачественность и решите вопрос наблюдения/операции.",
      "redFlags": [
        "Перекрут/разрыв, признаки злокачественности."
      ],
      "firstLineActions": [
        "УЗИ (O-RADS), CA-125/HE4, оценка риска."
      ],
      "diagnosticMinimum": [
        "УЗИ, онкомаркеры."
      ],
      "whenToEscalate": [
        "Перекрут/разрыв, подозрение на рак."
      ],
      "clinicalPearls": [
        "Функциональные кисты регрессируют за 1-3 цикла — наблюдение."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACR",
        "title": "O-RADS ovarian adnexal mass guideline",
        "documentType": "Guideline",
        "scope": "Стратификация риска злокачественности.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      },
      {
        "organization": "ESGO",
        "title": "Ovarian tumor guideline",
        "documentType": "Guideline",
        "scope": "Ведение опухолей яичника.",
        "status": "latest available active guideline",
        "usedFor": [
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Тазовое образование без признаков злокачественности."
      ],
      "laboratory": [
        "CA-125/HE4; функциональные кисты — норма."
      ],
      "imaging": [
        "УЗИ O-RADS, МРТ при сложных кистах."
      ],
      "diagnosisConfirmedWhen": [
        "Доброкачественная картина + гистология при операции."
      ],
      "diagnosisExcludedWhen": [
        "Признаки злокачественности — рак яичника (C56)."
      ]
    },
    "severityStratification": {
      "title": "Риск злокачественности",
      "tiers": [
        {
          "name": "Низкий (O-RADS 1-2)",
          "criteria": [
            "Типичная доброкачественная киста."
          ],
          "clinicalMeaning": "Наблюдение или органосохраняющая операция.",
          "managementImpact": "Наблюдение/цистэктомия."
        },
        {
          "name": "Высокий (O-RADS 4-5)",
          "criteria": [
            "Солидный компонент, асцит, рост маркеров."
          ],
          "clinicalMeaning": "Исключить рак.",
          "managementImpact": "Онкогинекологическая операция."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Рак яичника (C56)",
        "whyConfused": "Тазовая масса.",
        "howToDistinguish": "O-RADS, онкомаркеры, МРТ.",
        "testsIfNeeded": [
          "МРТ",
          "CA-125/HE4"
        ]
      },
      {
        "condition": "Внематочная беременность",
        "whyConfused": "Образование придатков + боль.",
        "howToDistinguish": "ХГЧ, УЗИ.",
        "testsIfNeeded": [
          "ХГЧ",
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ O-RADS, онкомаркеры."
      ],
      "confirmDiagnosis": [
        "Доброкачественная визуализация; гистология при операции."
      ],
      "startTreatment": [
        "Наблюдение при функциональных кистах; цистэктомия при крупных/симптомных."
      ],
      "reassess": [
        "УЗИ в динамике."
      ],
      "escalateWhen": [
        "Перекрут/разрыв, высокий риск злокачественности."
      ],
      "referWhen": [
        "К онкогинекологу при O-RADS 4-5."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение функциональных кист (регрессия)."
      ],
      "surgical": [
        "Цистэктомия/аднексэктомия (органосохраняющая)."
      ],
      "guidelines": {
        "eau": "Органосохранение у молодых.",
        "ru": "Исключение злокачественности обязательно до операции."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное + трансабдоминальное",
          "indications": [
            "Оценка кисты"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "яичник",
          "description": "Анэхогенная киста с перегородками/включениями; перегородки/сосуды → выше риск.",
          "normal": "Норма.",
          "pathology": "Киста с перегородками/папиллярными разрастаниями.",
          "clinicalSignificance": "O-RADS стратификация."
        }
      ],
      "imagingTips": [
        "O-RADS; МРТ при сложных кистах."
      ]
    },
    "recommendations": [
      "Исключение злокачественности перед операцией.",
      "Органосохранение у молодых."
    ],
    "prognosis": {
      "general": "Отличный для доброкачественных.",
      "factors": [
        "Тип кисты",
        "Исключение злокачественности"
      ],
      "survival": "Доброкачественная — 100%."
    },
    "followUp": {
      "frequency": "УЗИ в динамике при наблюдении",
      "duration": "По ситуации",
      "tests": [
        "УЗИ",
        "онкомаркеры"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль размеров."
      ],
      "earlierReviewIf": [
        "Рост, боль, перекрут."
      ],
      "switchTreatmentIf": [
        "Рост/подозрение на злокачественность."
      ],
      "urgentReassessmentIf": [
        "Острый перекрут/разрыв."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не оперировать каждую кисту у молодых без динамики.",
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Доброкачественный характер (чаще).",
      "Обсудить наблюдение vs операцию."
    ],
    "specialPopulations": {
      "adolescents": [
        "Часто функциональные кисты; наблюдение."
      ],
      "fertilityPlanning": [
        "Органосохраняющая операция приоритетна."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n83-8",
    "name": "Кисты и другие поражения яичника",
    "icd": "N83.8",
    "subtitle": "Гинекология",
    "icon": "ovary",
    "definition": "Кисты и другие поражения яичника (N83.8) — кистозное образование яичника доброкачественного или функционального характера.",
    "overview": {
      "quickTake": "Кисты и другие поражения яичника: чаще доброкачественно; исключите злокачественность (УЗИ O-RADS, онкомаркеры), решите наблюдение vs операция.",
      "prevalence": "Очень часто; многие функциональные кисты регрессируют сами.",
      "riskLevel": "low",
      "practiceFocus": "Исключение злокачественности, органосохранение у молодых."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Функциональные (фолликулярные, жёлтого тела)",
      "Истинные доброкачественные опухоли",
      "Эндометриоидные (зрелые тератомы, цистаденомы)"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Тазовая боль/тяжесть",
      "Острый перекрут/разрыв"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно или тяжесть."
      ],
      "alarm": [
        "Острый перекрут/разрыв — боль, шок.",
        "Быстрый рост (исключить рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Кисты и другие поражения яичника: подозревайте при тазовом образовании; исключите злокачественность и решите вопрос наблюдения/операции.",
      "redFlags": [
        "Перекрут/разрыв, признаки злокачественности."
      ],
      "firstLineActions": [
        "УЗИ (O-RADS), CA-125/HE4, оценка риска."
      ],
      "diagnosticMinimum": [
        "УЗИ, онкомаркеры."
      ],
      "whenToEscalate": [
        "Перекрут/разрыв, подозрение на рак."
      ],
      "clinicalPearls": [
        "Функциональные кисты регрессируют за 1-3 цикла — наблюдение."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACR",
        "title": "O-RADS ovarian adnexal mass guideline",
        "documentType": "Guideline",
        "scope": "Стратификация риска злокачественности.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      },
      {
        "organization": "ESGO",
        "title": "Ovarian tumor guideline",
        "documentType": "Guideline",
        "scope": "Ведение опухолей яичника.",
        "status": "latest available active guideline",
        "usedFor": [
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Тазовое образование без признаков злокачественности."
      ],
      "laboratory": [
        "CA-125/HE4; функциональные кисты — норма."
      ],
      "imaging": [
        "УЗИ O-RADS, МРТ при сложных кистах."
      ],
      "diagnosisConfirmedWhen": [
        "Доброкачественная картина + гистология при операции."
      ],
      "diagnosisExcludedWhen": [
        "Признаки злокачественности — рак яичника (C56)."
      ]
    },
    "severityStratification": {
      "title": "Риск злокачественности",
      "tiers": [
        {
          "name": "Низкий (O-RADS 1-2)",
          "criteria": [
            "Типичная доброкачественная киста."
          ],
          "clinicalMeaning": "Наблюдение или органосохраняющая операция.",
          "managementImpact": "Наблюдение/цистэктомия."
        },
        {
          "name": "Высокий (O-RADS 4-5)",
          "criteria": [
            "Солидный компонент, асцит, рост маркеров."
          ],
          "clinicalMeaning": "Исключить рак.",
          "managementImpact": "Онкогинекологическая операция."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Рак яичника (C56)",
        "whyConfused": "Тазовая масса.",
        "howToDistinguish": "O-RADS, онкомаркеры, МРТ.",
        "testsIfNeeded": [
          "МРТ",
          "CA-125/HE4"
        ]
      },
      {
        "condition": "Внематочная беременность",
        "whyConfused": "Образование придатков + боль.",
        "howToDistinguish": "ХГЧ, УЗИ.",
        "testsIfNeeded": [
          "ХГЧ",
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ O-RADS, онкомаркеры."
      ],
      "confirmDiagnosis": [
        "Доброкачественная визуализация; гистология при операции."
      ],
      "startTreatment": [
        "Наблюдение при функциональных кистах; цистэктомия при крупных/симптомных."
      ],
      "reassess": [
        "УЗИ в динамике."
      ],
      "escalateWhen": [
        "Перекрут/разрыв, высокий риск злокачественности."
      ],
      "referWhen": [
        "К онкогинекологу при O-RADS 4-5."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение функциональных кист (регрессия)."
      ],
      "surgical": [
        "Цистэктомия/аднексэктомия (органосохраняющая)."
      ],
      "guidelines": {
        "eau": "Органосохранение у молодых.",
        "ru": "Исключение злокачественности обязательно до операции."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное + трансабдоминальное",
          "indications": [
            "Оценка кисты"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "яичник",
          "description": "Анэхогенная киста с перегородками/включениями; перегородки/сосуды → выше риск.",
          "normal": "Норма.",
          "pathology": "Киста с перегородками/папиллярными разрастаниями.",
          "clinicalSignificance": "O-RADS стратификация."
        }
      ],
      "imagingTips": [
        "O-RADS; МРТ при сложных кистах."
      ]
    },
    "recommendations": [
      "Исключение злокачественности перед операцией.",
      "Органосохранение у молодых."
    ],
    "prognosis": {
      "general": "Отличный для доброкачественных.",
      "factors": [
        "Тип кисты",
        "Исключение злокачественности"
      ],
      "survival": "Доброкачественная — 100%."
    },
    "followUp": {
      "frequency": "УЗИ в динамике при наблюдении",
      "duration": "По ситуации",
      "tests": [
        "УЗИ",
        "онкомаркеры"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль размеров."
      ],
      "earlierReviewIf": [
        "Рост, боль, перекрут."
      ],
      "switchTreatmentIf": [
        "Рост/подозрение на злокачественность."
      ],
      "urgentReassessmentIf": [
        "Острый перекрут/разрыв."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не оперировать каждую кисту у молодых без динамики.",
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Доброкачественный характер (чаще).",
      "Обсудить наблюдение vs операцию."
    ],
    "specialPopulations": {
      "adolescents": [
        "Часто функциональные кисты; наблюдение."
      ],
      "fertilityPlanning": [
        "Органосохраняющая операция приоритетна."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n83-9",
    "name": "Кисты и другие поражения яичника",
    "icd": "N83.9",
    "subtitle": "Гинекология",
    "icon": "ovary",
    "definition": "Кисты и другие поражения яичника (N83.9) — кистозное образование яичника доброкачественного или функционального характера.",
    "overview": {
      "quickTake": "Кисты и другие поражения яичника: чаще доброкачественно; исключите злокачественность (УЗИ O-RADS, онкомаркеры), решите наблюдение vs операция.",
      "prevalence": "Очень часто; многие функциональные кисты регрессируют сами.",
      "riskLevel": "low",
      "practiceFocus": "Исключение злокачественности, органосохранение у молодых."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Функциональные (фолликулярные, жёлтого тела)",
      "Истинные доброкачественные опухоли",
      "Эндометриоидные (зрелые тератомы, цистаденомы)"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Тазовая боль/тяжесть",
      "Острый перекрут/разрыв"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно или тяжесть."
      ],
      "alarm": [
        "Острый перекрут/разрыв — боль, шок.",
        "Быстрый рост (исключить рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Кисты и другие поражения яичника: подозревайте при тазовом образовании; исключите злокачественность и решите вопрос наблюдения/операции.",
      "redFlags": [
        "Перекрут/разрыв, признаки злокачественности."
      ],
      "firstLineActions": [
        "УЗИ (O-RADS), CA-125/HE4, оценка риска."
      ],
      "diagnosticMinimum": [
        "УЗИ, онкомаркеры."
      ],
      "whenToEscalate": [
        "Перекрут/разрыв, подозрение на рак."
      ],
      "clinicalPearls": [
        "Функциональные кисты регрессируют за 1-3 цикла — наблюдение."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACR",
        "title": "O-RADS ovarian adnexal mass guideline",
        "documentType": "Guideline",
        "scope": "Стратификация риска злокачественности.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      },
      {
        "organization": "ESGO",
        "title": "Ovarian tumor guideline",
        "documentType": "Guideline",
        "scope": "Ведение опухолей яичника.",
        "status": "latest available active guideline",
        "usedFor": [
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Тазовое образование без признаков злокачественности."
      ],
      "laboratory": [
        "CA-125/HE4; функциональные кисты — норма."
      ],
      "imaging": [
        "УЗИ O-RADS, МРТ при сложных кистах."
      ],
      "diagnosisConfirmedWhen": [
        "Доброкачественная картина + гистология при операции."
      ],
      "diagnosisExcludedWhen": [
        "Признаки злокачественности — рак яичника (C56)."
      ]
    },
    "severityStratification": {
      "title": "Риск злокачественности",
      "tiers": [
        {
          "name": "Низкий (O-RADS 1-2)",
          "criteria": [
            "Типичная доброкачественная киста."
          ],
          "clinicalMeaning": "Наблюдение или органосохраняющая операция.",
          "managementImpact": "Наблюдение/цистэктомия."
        },
        {
          "name": "Высокий (O-RADS 4-5)",
          "criteria": [
            "Солидный компонент, асцит, рост маркеров."
          ],
          "clinicalMeaning": "Исключить рак.",
          "managementImpact": "Онкогинекологическая операция."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Рак яичника (C56)",
        "whyConfused": "Тазовая масса.",
        "howToDistinguish": "O-RADS, онкомаркеры, МРТ.",
        "testsIfNeeded": [
          "МРТ",
          "CA-125/HE4"
        ]
      },
      {
        "condition": "Внематочная беременность",
        "whyConfused": "Образование придатков + боль.",
        "howToDistinguish": "ХГЧ, УЗИ.",
        "testsIfNeeded": [
          "ХГЧ",
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ O-RADS, онкомаркеры."
      ],
      "confirmDiagnosis": [
        "Доброкачественная визуализация; гистология при операции."
      ],
      "startTreatment": [
        "Наблюдение при функциональных кистах; цистэктомия при крупных/симптомных."
      ],
      "reassess": [
        "УЗИ в динамике."
      ],
      "escalateWhen": [
        "Перекрут/разрыв, высокий риск злокачественности."
      ],
      "referWhen": [
        "К онкогинекологу при O-RADS 4-5."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение функциональных кист (регрессия)."
      ],
      "surgical": [
        "Цистэктомия/аднексэктомия (органосохраняющая)."
      ],
      "guidelines": {
        "eau": "Органосохранение у молодых.",
        "ru": "Исключение злокачественности обязательно до операции."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное + трансабдоминальное",
          "indications": [
            "Оценка кисты"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "яичник",
          "description": "Анэхогенная киста с перегородками/включениями; перегородки/сосуды → выше риск.",
          "normal": "Норма.",
          "pathology": "Киста с перегородками/папиллярными разрастаниями.",
          "clinicalSignificance": "O-RADS стратификация."
        }
      ],
      "imagingTips": [
        "O-RADS; МРТ при сложных кистах."
      ]
    },
    "recommendations": [
      "Исключение злокачественности перед операцией.",
      "Органосохранение у молодых."
    ],
    "prognosis": {
      "general": "Отличный для доброкачественных.",
      "factors": [
        "Тип кисты",
        "Исключение злокачественности"
      ],
      "survival": "Доброкачественная — 100%."
    },
    "followUp": {
      "frequency": "УЗИ в динамике при наблюдении",
      "duration": "По ситуации",
      "tests": [
        "УЗИ",
        "онкомаркеры"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль размеров."
      ],
      "earlierReviewIf": [
        "Рост, боль, перекрут."
      ],
      "switchTreatmentIf": [
        "Рост/подозрение на злокачественность."
      ],
      "urgentReassessmentIf": [
        "Острый перекрут/разрыв."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не оперировать каждую кисту у молодых без динамики.",
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Доброкачественный характер (чаще).",
      "Обсудить наблюдение vs операцию."
    ],
    "specialPopulations": {
      "adolescents": [
        "Часто функциональные кисты; наблюдение."
      ],
      "fertilityPlanning": [
        "Органосохраняющая операция приоритетна."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n84-3",
    "name": "Полипы матки и шейки",
    "icd": "N84.3",
    "subtitle": "Гинекология",
    "icon": "ovary",
    "definition": "Полипы матки и шейки (N84.3) — доброкачественное полиповидное образование эндометрия/цервикального канала.",
    "overview": {
      "quickTake": "Полипы матки и шейки: доброкачественное образование полости матки/шейки; гистероскопия с биопсией/удалением.",
      "prevalence": "Часто у женщин 40-60 лет.",
      "riskLevel": "low",
      "practiceFocus": "Исключение гиперплазии/рака эндометрия (особенно при АМК)."
    },
    "epidemiology": "Часто в перименопаузе.",
    "etiology": [
      "Гормональный дисбаланс (эстрогеновая стимуляция)",
      "Хроническое воспаление"
    ],
    "symptoms": [
      "Аномальные маточные кровотечения",
      "Меноррагия",
      "Бесплодие (редко)"
    ],
    "symptomGroups": {
      "typical": [
        "АМК, меноррагия."
      ],
      "alarm": [
        "Обильное АМК в постменопаузе (исключить рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Полипы матки и шейки: при АМК — гистероскопия + биопсия; исключите гиперплазию/рак эндометрия.",
      "redFlags": [
        "АМК в постменопаузе."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, гистероскопия с биопсией."
      ],
      "diagnosticMinimum": [
        "УЗИ, гистероскопия, биопсия."
      ],
      "whenToEscalate": [
        "АМК в постменопаузе, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "Полипы редко малигнизируются, но АМК требует исключения рака."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Ведение АМК, полипы эндометрия.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "АМК, полип по УЗИ/гистероскопии."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "УЗИ (гиперэхогенное включение в полости), гистероскопия/МРТ."
      ],
      "diagnosisConfirmedWhen": [
        "Гистероскопия + гистология."
      ],
      "diagnosisExcludedWhen": [
        "Подозрение на рак эндометрия — отдельное ведение."
      ]
    },
    "severityStratification": {
      "title": "Риск малигнизации",
      "tiers": [
        {
          "name": "Доброкачественный",
          "criteria": [
            "Типичный полип, АМК у пременопаузы."
          ],
          "clinicalMeaning": "Удаление при симптомах.",
          "managementImpact": "Гистероскопия + полипэктомия."
        },
        {
          "name": "Постменопауза/АМК",
          "criteria": [
            "АМК в постменопаузе."
          ],
          "clinicalMeaning": "Исключить злокачественность.",
          "managementImpact": "Гистероскопия + биопсия + полипэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Гиперплазия/рак эндометрия",
        "whyConfused": "АМК.",
        "howToDistinguish": "Биопсия эндометрия.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      },
      {
        "condition": "Подслизистая миома",
        "whyConfused": "Образование в полости.",
        "howToDistinguish": "УЗИ/гистероскопия.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ эндометрия, АМК анамнез."
      ],
      "confirmDiagnosis": [
        "Гистероскопия + биопсия."
      ],
      "startTreatment": [
        "Полипэктомия (гистероскопия)."
      ],
      "reassess": [
        "По гистологии."
      ],
      "escalateWhen": [
        "АМК в постменопаузе, атипия."
      ],
      "referWhen": [
        "К гинекологу-онкологу при атипии."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при бессимптомных мелких полипах (пременопауза)."
      ],
      "surgical": [
        "Гистероскопическая полипэктомия."
      ],
      "guidelines": {
        "eau": "Удаление симптомных полипов.",
        "ru": "Биопсия обязательна при постменопаузальном АМК."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Полип эндометрия"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "полость матки",
          "description": "Гиперэхогенное включение с сосудом (питающий сосуд).",
          "normal": "Эндометрий однородный.",
          "pathology": "Полип эндометрия.",
          "clinicalSignificance": "Показание к гистероскопии."
        }
      ],
      "imagingTips": [
        "Сосудистый пучок — типичный признак полипа."
      ]
    },
    "recommendations": [
      "Гистероскопия при АМК.",
      "Биопсия при постменопаузе."
    ],
    "prognosis": {
      "general": "Отличный; рецидивы возможны.",
      "factors": [
        "Возраст",
        "Гистология"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "УЗИ через 3-6 мес после удаления",
      "duration": "По ситуации",
      "tests": [
        "УЗИ",
        "биопсия при АМК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль АМК."
      ],
      "earlierReviewIf": [
        "Рецидив/АМК."
      ],
      "switchTreatmentIf": [
        "Атипия при гистологии."
      ],
      "urgentReassessmentIf": [
        "Обильное АМК в постменопаузе."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак)."
    ],
    "patientCounseling": [
      "Доброкачественный характер.",
      "Важность биопсии при АМК."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Полипэктомия не снижает фертильность."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n84-4",
    "name": "Полипы матки и шейки",
    "icd": "N84.4",
    "subtitle": "Гинекология",
    "icon": "ovary",
    "definition": "Полипы матки и шейки (N84.4) — доброкачественное полиповидное образование эндометрия/цервикального канала.",
    "overview": {
      "quickTake": "Полипы матки и шейки: доброкачественное образование полости матки/шейки; гистероскопия с биопсией/удалением.",
      "prevalence": "Часто у женщин 40-60 лет.",
      "riskLevel": "low",
      "practiceFocus": "Исключение гиперплазии/рака эндометрия (особенно при АМК)."
    },
    "epidemiology": "Часто в перименопаузе.",
    "etiology": [
      "Гормональный дисбаланс (эстрогеновая стимуляция)",
      "Хроническое воспаление"
    ],
    "symptoms": [
      "Аномальные маточные кровотечения",
      "Меноррагия",
      "Бесплодие (редко)"
    ],
    "symptomGroups": {
      "typical": [
        "АМК, меноррагия."
      ],
      "alarm": [
        "Обильное АМК в постменопаузе (исключить рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Полипы матки и шейки: при АМК — гистероскопия + биопсия; исключите гиперплазию/рак эндометрия.",
      "redFlags": [
        "АМК в постменопаузе."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, гистероскопия с биопсией."
      ],
      "diagnosticMinimum": [
        "УЗИ, гистероскопия, биопсия."
      ],
      "whenToEscalate": [
        "АМК в постменопаузе, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "Полипы редко малигнизируются, но АМК требует исключения рака."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Ведение АМК, полипы эндометрия.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "АМК, полип по УЗИ/гистероскопии."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "УЗИ (гиперэхогенное включение в полости), гистероскопия/МРТ."
      ],
      "diagnosisConfirmedWhen": [
        "Гистероскопия + гистология."
      ],
      "diagnosisExcludedWhen": [
        "Подозрение на рак эндометрия — отдельное ведение."
      ]
    },
    "severityStratification": {
      "title": "Риск малигнизации",
      "tiers": [
        {
          "name": "Доброкачественный",
          "criteria": [
            "Типичный полип, АМК у пременопаузы."
          ],
          "clinicalMeaning": "Удаление при симптомах.",
          "managementImpact": "Гистероскопия + полипэктомия."
        },
        {
          "name": "Постменопауза/АМК",
          "criteria": [
            "АМК в постменопаузе."
          ],
          "clinicalMeaning": "Исключить злокачественность.",
          "managementImpact": "Гистероскопия + биопсия + полипэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Гиперплазия/рак эндометрия",
        "whyConfused": "АМК.",
        "howToDistinguish": "Биопсия эндометрия.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      },
      {
        "condition": "Подслизистая миома",
        "whyConfused": "Образование в полости.",
        "howToDistinguish": "УЗИ/гистероскопия.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ эндометрия, АМК анамнез."
      ],
      "confirmDiagnosis": [
        "Гистероскопия + биопсия."
      ],
      "startTreatment": [
        "Полипэктомия (гистероскопия)."
      ],
      "reassess": [
        "По гистологии."
      ],
      "escalateWhen": [
        "АМК в постменопаузе, атипия."
      ],
      "referWhen": [
        "К гинекологу-онкологу при атипии."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при бессимптомных мелких полипах (пременопауза)."
      ],
      "surgical": [
        "Гистероскопическая полипэктомия."
      ],
      "guidelines": {
        "eau": "Удаление симптомных полипов.",
        "ru": "Биопсия обязательна при постменопаузальном АМК."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Полип эндометрия"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "полость матки",
          "description": "Гиперэхогенное включение с сосудом (питающий сосуд).",
          "normal": "Эндометрий однородный.",
          "pathology": "Полип эндометрия.",
          "clinicalSignificance": "Показание к гистероскопии."
        }
      ],
      "imagingTips": [
        "Сосудистый пучок — типичный признак полипа."
      ]
    },
    "recommendations": [
      "Гистероскопия при АМК.",
      "Биопсия при постменопаузе."
    ],
    "prognosis": {
      "general": "Отличный; рецидивы возможны.",
      "factors": [
        "Возраст",
        "Гистология"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "УЗИ через 3-6 мес после удаления",
      "duration": "По ситуации",
      "tests": [
        "УЗИ",
        "биопсия при АМК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль АМК."
      ],
      "earlierReviewIf": [
        "Рецидив/АМК."
      ],
      "switchTreatmentIf": [
        "Атипия при гистологии."
      ],
      "urgentReassessmentIf": [
        "Обильное АМК в постменопаузе."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак)."
    ],
    "patientCounseling": [
      "Доброкачественный характер.",
      "Важность биопсии при АМК."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Полипэктомия не снижает фертильность."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n84-5",
    "name": "Полипы матки и шейки",
    "icd": "N84.5",
    "subtitle": "Гинекология",
    "icon": "ovary",
    "definition": "Полипы матки и шейки (N84.5) — доброкачественное полиповидное образование эндометрия/цервикального канала.",
    "overview": {
      "quickTake": "Полипы матки и шейки: доброкачественное образование полости матки/шейки; гистероскопия с биопсией/удалением.",
      "prevalence": "Часто у женщин 40-60 лет.",
      "riskLevel": "low",
      "practiceFocus": "Исключение гиперплазии/рака эндометрия (особенно при АМК)."
    },
    "epidemiology": "Часто в перименопаузе.",
    "etiology": [
      "Гормональный дисбаланс (эстрогеновая стимуляция)",
      "Хроническое воспаление"
    ],
    "symptoms": [
      "Аномальные маточные кровотечения",
      "Меноррагия",
      "Бесплодие (редко)"
    ],
    "symptomGroups": {
      "typical": [
        "АМК, меноррагия."
      ],
      "alarm": [
        "Обильное АМК в постменопаузе (исключить рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Полипы матки и шейки: при АМК — гистероскопия + биопсия; исключите гиперплазию/рак эндометрия.",
      "redFlags": [
        "АМК в постменопаузе."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, гистероскопия с биопсией."
      ],
      "diagnosticMinimum": [
        "УЗИ, гистероскопия, биопсия."
      ],
      "whenToEscalate": [
        "АМК в постменопаузе, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "Полипы редко малигнизируются, но АМК требует исключения рака."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Ведение АМК, полипы эндометрия.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "АМК, полип по УЗИ/гистероскопии."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "УЗИ (гиперэхогенное включение в полости), гистероскопия/МРТ."
      ],
      "diagnosisConfirmedWhen": [
        "Гистероскопия + гистология."
      ],
      "diagnosisExcludedWhen": [
        "Подозрение на рак эндометрия — отдельное ведение."
      ]
    },
    "severityStratification": {
      "title": "Риск малигнизации",
      "tiers": [
        {
          "name": "Доброкачественный",
          "criteria": [
            "Типичный полип, АМК у пременопаузы."
          ],
          "clinicalMeaning": "Удаление при симптомах.",
          "managementImpact": "Гистероскопия + полипэктомия."
        },
        {
          "name": "Постменопауза/АМК",
          "criteria": [
            "АМК в постменопаузе."
          ],
          "clinicalMeaning": "Исключить злокачественность.",
          "managementImpact": "Гистероскопия + биопсия + полипэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Гиперплазия/рак эндометрия",
        "whyConfused": "АМК.",
        "howToDistinguish": "Биопсия эндометрия.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      },
      {
        "condition": "Подслизистая миома",
        "whyConfused": "Образование в полости.",
        "howToDistinguish": "УЗИ/гистероскопия.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ эндометрия, АМК анамнез."
      ],
      "confirmDiagnosis": [
        "Гистероскопия + биопсия."
      ],
      "startTreatment": [
        "Полипэктомия (гистероскопия)."
      ],
      "reassess": [
        "По гистологии."
      ],
      "escalateWhen": [
        "АМК в постменопаузе, атипия."
      ],
      "referWhen": [
        "К гинекологу-онкологу при атипии."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при бессимптомных мелких полипах (пременопауза)."
      ],
      "surgical": [
        "Гистероскопическая полипэктомия."
      ],
      "guidelines": {
        "eau": "Удаление симптомных полипов.",
        "ru": "Биопсия обязательна при постменопаузальном АМК."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Полип эндометрия"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "полость матки",
          "description": "Гиперэхогенное включение с сосудом (питающий сосуд).",
          "normal": "Эндометрий однородный.",
          "pathology": "Полип эндометрия.",
          "clinicalSignificance": "Показание к гистероскопии."
        }
      ],
      "imagingTips": [
        "Сосудистый пучок — типичный признак полипа."
      ]
    },
    "recommendations": [
      "Гистероскопия при АМК.",
      "Биопсия при постменопаузе."
    ],
    "prognosis": {
      "general": "Отличный; рецидивы возможны.",
      "factors": [
        "Возраст",
        "Гистология"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "УЗИ через 3-6 мес после удаления",
      "duration": "По ситуации",
      "tests": [
        "УЗИ",
        "биопсия при АМК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль АМК."
      ],
      "earlierReviewIf": [
        "Рецидив/АМК."
      ],
      "switchTreatmentIf": [
        "Атипия при гистологии."
      ],
      "urgentReassessmentIf": [
        "Обильное АМК в постменопаузе."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак)."
    ],
    "patientCounseling": [
      "Доброкачественный характер.",
      "Важность биопсии при АМК."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Полипэктомия не снижает фертильность."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n84-6",
    "name": "Полипы матки и шейки",
    "icd": "N84.6",
    "subtitle": "Гинекология",
    "icon": "ovary",
    "definition": "Полипы матки и шейки (N84.6) — доброкачественное полиповидное образование эндометрия/цервикального канала.",
    "overview": {
      "quickTake": "Полипы матки и шейки: доброкачественное образование полости матки/шейки; гистероскопия с биопсией/удалением.",
      "prevalence": "Часто у женщин 40-60 лет.",
      "riskLevel": "low",
      "practiceFocus": "Исключение гиперплазии/рака эндометрия (особенно при АМК)."
    },
    "epidemiology": "Часто в перименопаузе.",
    "etiology": [
      "Гормональный дисбаланс (эстрогеновая стимуляция)",
      "Хроническое воспаление"
    ],
    "symptoms": [
      "Аномальные маточные кровотечения",
      "Меноррагия",
      "Бесплодие (редко)"
    ],
    "symptomGroups": {
      "typical": [
        "АМК, меноррагия."
      ],
      "alarm": [
        "Обильное АМК в постменопаузе (исключить рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Полипы матки и шейки: при АМК — гистероскопия + биопсия; исключите гиперплазию/рак эндометрия.",
      "redFlags": [
        "АМК в постменопаузе."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, гистероскопия с биопсией."
      ],
      "diagnosticMinimum": [
        "УЗИ, гистероскопия, биопсия."
      ],
      "whenToEscalate": [
        "АМК в постменопаузе, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "Полипы редко малигнизируются, но АМК требует исключения рака."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Ведение АМК, полипы эндометрия.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "АМК, полип по УЗИ/гистероскопии."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "УЗИ (гиперэхогенное включение в полости), гистероскопия/МРТ."
      ],
      "diagnosisConfirmedWhen": [
        "Гистероскопия + гистология."
      ],
      "diagnosisExcludedWhen": [
        "Подозрение на рак эндометрия — отдельное ведение."
      ]
    },
    "severityStratification": {
      "title": "Риск малигнизации",
      "tiers": [
        {
          "name": "Доброкачественный",
          "criteria": [
            "Типичный полип, АМК у пременопаузы."
          ],
          "clinicalMeaning": "Удаление при симптомах.",
          "managementImpact": "Гистероскопия + полипэктомия."
        },
        {
          "name": "Постменопауза/АМК",
          "criteria": [
            "АМК в постменопаузе."
          ],
          "clinicalMeaning": "Исключить злокачественность.",
          "managementImpact": "Гистероскопия + биопсия + полипэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Гиперплазия/рак эндометрия",
        "whyConfused": "АМК.",
        "howToDistinguish": "Биопсия эндометрия.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      },
      {
        "condition": "Подслизистая миома",
        "whyConfused": "Образование в полости.",
        "howToDistinguish": "УЗИ/гистероскопия.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ эндометрия, АМК анамнез."
      ],
      "confirmDiagnosis": [
        "Гистероскопия + биопсия."
      ],
      "startTreatment": [
        "Полипэктомия (гистероскопия)."
      ],
      "reassess": [
        "По гистологии."
      ],
      "escalateWhen": [
        "АМК в постменопаузе, атипия."
      ],
      "referWhen": [
        "К гинекологу-онкологу при атипии."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при бессимптомных мелких полипах (пременопауза)."
      ],
      "surgical": [
        "Гистероскопическая полипэктомия."
      ],
      "guidelines": {
        "eau": "Удаление симптомных полипов.",
        "ru": "Биопсия обязательна при постменопаузальном АМК."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Полип эндометрия"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "полость матки",
          "description": "Гиперэхогенное включение с сосудом (питающий сосуд).",
          "normal": "Эндометрий однородный.",
          "pathology": "Полип эндометрия.",
          "clinicalSignificance": "Показание к гистероскопии."
        }
      ],
      "imagingTips": [
        "Сосудистый пучок — типичный признак полипа."
      ]
    },
    "recommendations": [
      "Гистероскопия при АМК.",
      "Биопсия при постменопаузе."
    ],
    "prognosis": {
      "general": "Отличный; рецидивы возможны.",
      "factors": [
        "Возраст",
        "Гистология"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "УЗИ через 3-6 мес после удаления",
      "duration": "По ситуации",
      "tests": [
        "УЗИ",
        "биопсия при АМК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль АМК."
      ],
      "earlierReviewIf": [
        "Рецидив/АМК."
      ],
      "switchTreatmentIf": [
        "Атипия при гистологии."
      ],
      "urgentReassessmentIf": [
        "Обильное АМК в постменопаузе."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак)."
    ],
    "patientCounseling": [
      "Доброкачественный характер.",
      "Важность биопсии при АМК."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Полипэктомия не снижает фертильность."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n84-7",
    "name": "Полипы матки и шейки",
    "icd": "N84.7",
    "subtitle": "Гинекология",
    "icon": "ovary",
    "definition": "Полипы матки и шейки (N84.7) — доброкачественное полиповидное образование эндометрия/цервикального канала.",
    "overview": {
      "quickTake": "Полипы матки и шейки: доброкачественное образование полости матки/шейки; гистероскопия с биопсией/удалением.",
      "prevalence": "Часто у женщин 40-60 лет.",
      "riskLevel": "low",
      "practiceFocus": "Исключение гиперплазии/рака эндометрия (особенно при АМК)."
    },
    "epidemiology": "Часто в перименопаузе.",
    "etiology": [
      "Гормональный дисбаланс (эстрогеновая стимуляция)",
      "Хроническое воспаление"
    ],
    "symptoms": [
      "Аномальные маточные кровотечения",
      "Меноррагия",
      "Бесплодие (редко)"
    ],
    "symptomGroups": {
      "typical": [
        "АМК, меноррагия."
      ],
      "alarm": [
        "Обильное АМК в постменопаузе (исключить рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Полипы матки и шейки: при АМК — гистероскопия + биопсия; исключите гиперплазию/рак эндометрия.",
      "redFlags": [
        "АМК в постменопаузе."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, гистероскопия с биопсией."
      ],
      "diagnosticMinimum": [
        "УЗИ, гистероскопия, биопсия."
      ],
      "whenToEscalate": [
        "АМК в постменопаузе, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "Полипы редко малигнизируются, но АМК требует исключения рака."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Ведение АМК, полипы эндометрия.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "АМК, полип по УЗИ/гистероскопии."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "УЗИ (гиперэхогенное включение в полости), гистероскопия/МРТ."
      ],
      "diagnosisConfirmedWhen": [
        "Гистероскопия + гистология."
      ],
      "diagnosisExcludedWhen": [
        "Подозрение на рак эндометрия — отдельное ведение."
      ]
    },
    "severityStratification": {
      "title": "Риск малигнизации",
      "tiers": [
        {
          "name": "Доброкачественный",
          "criteria": [
            "Типичный полип, АМК у пременопаузы."
          ],
          "clinicalMeaning": "Удаление при симптомах.",
          "managementImpact": "Гистероскопия + полипэктомия."
        },
        {
          "name": "Постменопауза/АМК",
          "criteria": [
            "АМК в постменопаузе."
          ],
          "clinicalMeaning": "Исключить злокачественность.",
          "managementImpact": "Гистероскопия + биопсия + полипэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Гиперплазия/рак эндометрия",
        "whyConfused": "АМК.",
        "howToDistinguish": "Биопсия эндометрия.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      },
      {
        "condition": "Подслизистая миома",
        "whyConfused": "Образование в полости.",
        "howToDistinguish": "УЗИ/гистероскопия.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ эндометрия, АМК анамнез."
      ],
      "confirmDiagnosis": [
        "Гистероскопия + биопсия."
      ],
      "startTreatment": [
        "Полипэктомия (гистероскопия)."
      ],
      "reassess": [
        "По гистологии."
      ],
      "escalateWhen": [
        "АМК в постменопаузе, атипия."
      ],
      "referWhen": [
        "К гинекологу-онкологу при атипии."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при бессимптомных мелких полипах (пременопауза)."
      ],
      "surgical": [
        "Гистероскопическая полипэктомия."
      ],
      "guidelines": {
        "eau": "Удаление симптомных полипов.",
        "ru": "Биопсия обязательна при постменопаузальном АМК."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Полип эндометрия"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "полость матки",
          "description": "Гиперэхогенное включение с сосудом (питающий сосуд).",
          "normal": "Эндометрий однородный.",
          "pathology": "Полип эндометрия.",
          "clinicalSignificance": "Показание к гистероскопии."
        }
      ],
      "imagingTips": [
        "Сосудистый пучок — типичный признак полипа."
      ]
    },
    "recommendations": [
      "Гистероскопия при АМК.",
      "Биопсия при постменопаузе."
    ],
    "prognosis": {
      "general": "Отличный; рецидивы возможны.",
      "factors": [
        "Возраст",
        "Гистология"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "УЗИ через 3-6 мес после удаления",
      "duration": "По ситуации",
      "tests": [
        "УЗИ",
        "биопсия при АМК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль АМК."
      ],
      "earlierReviewIf": [
        "Рецидив/АМК."
      ],
      "switchTreatmentIf": [
        "Атипия при гистологии."
      ],
      "urgentReassessmentIf": [
        "Обильное АМК в постменопаузе."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак)."
    ],
    "patientCounseling": [
      "Доброкачественный характер.",
      "Важность биопсии при АМК."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Полипэктомия не снижает фертильность."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n84-8",
    "name": "Полипы матки и шейки",
    "icd": "N84.8",
    "subtitle": "Гинекология",
    "icon": "ovary",
    "definition": "Полипы матки и шейки (N84.8) — доброкачественное полиповидное образование эндометрия/цервикального канала.",
    "overview": {
      "quickTake": "Полипы матки и шейки: доброкачественное образование полости матки/шейки; гистероскопия с биопсией/удалением.",
      "prevalence": "Часто у женщин 40-60 лет.",
      "riskLevel": "low",
      "practiceFocus": "Исключение гиперплазии/рака эндометрия (особенно при АМК)."
    },
    "epidemiology": "Часто в перименопаузе.",
    "etiology": [
      "Гормональный дисбаланс (эстрогеновая стимуляция)",
      "Хроническое воспаление"
    ],
    "symptoms": [
      "Аномальные маточные кровотечения",
      "Меноррагия",
      "Бесплодие (редко)"
    ],
    "symptomGroups": {
      "typical": [
        "АМК, меноррагия."
      ],
      "alarm": [
        "Обильное АМК в постменопаузе (исключить рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Полипы матки и шейки: при АМК — гистероскопия + биопсия; исключите гиперплазию/рак эндометрия.",
      "redFlags": [
        "АМК в постменопаузе."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, гистероскопия с биопсией."
      ],
      "diagnosticMinimum": [
        "УЗИ, гистероскопия, биопсия."
      ],
      "whenToEscalate": [
        "АМК в постменопаузе, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "Полипы редко малигнизируются, но АМК требует исключения рака."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Ведение АМК, полипы эндометрия.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "АМК, полип по УЗИ/гистероскопии."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "УЗИ (гиперэхогенное включение в полости), гистероскопия/МРТ."
      ],
      "diagnosisConfirmedWhen": [
        "Гистероскопия + гистология."
      ],
      "diagnosisExcludedWhen": [
        "Подозрение на рак эндометрия — отдельное ведение."
      ]
    },
    "severityStratification": {
      "title": "Риск малигнизации",
      "tiers": [
        {
          "name": "Доброкачественный",
          "criteria": [
            "Типичный полип, АМК у пременопаузы."
          ],
          "clinicalMeaning": "Удаление при симптомах.",
          "managementImpact": "Гистероскопия + полипэктомия."
        },
        {
          "name": "Постменопауза/АМК",
          "criteria": [
            "АМК в постменопаузе."
          ],
          "clinicalMeaning": "Исключить злокачественность.",
          "managementImpact": "Гистероскопия + биопсия + полипэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Гиперплазия/рак эндометрия",
        "whyConfused": "АМК.",
        "howToDistinguish": "Биопсия эндометрия.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      },
      {
        "condition": "Подслизистая миома",
        "whyConfused": "Образование в полости.",
        "howToDistinguish": "УЗИ/гистероскопия.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ эндометрия, АМК анамнез."
      ],
      "confirmDiagnosis": [
        "Гистероскопия + биопсия."
      ],
      "startTreatment": [
        "Полипэктомия (гистероскопия)."
      ],
      "reassess": [
        "По гистологии."
      ],
      "escalateWhen": [
        "АМК в постменопаузе, атипия."
      ],
      "referWhen": [
        "К гинекологу-онкологу при атипии."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при бессимптомных мелких полипах (пременопауза)."
      ],
      "surgical": [
        "Гистероскопическая полипэктомия."
      ],
      "guidelines": {
        "eau": "Удаление симптомных полипов.",
        "ru": "Биопсия обязательна при постменопаузальном АМК."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Полип эндометрия"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "полость матки",
          "description": "Гиперэхогенное включение с сосудом (питающий сосуд).",
          "normal": "Эндометрий однородный.",
          "pathology": "Полип эндометрия.",
          "clinicalSignificance": "Показание к гистероскопии."
        }
      ],
      "imagingTips": [
        "Сосудистый пучок — типичный признак полипа."
      ]
    },
    "recommendations": [
      "Гистероскопия при АМК.",
      "Биопсия при постменопаузе."
    ],
    "prognosis": {
      "general": "Отличный; рецидивы возможны.",
      "factors": [
        "Возраст",
        "Гистология"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "УЗИ через 3-6 мес после удаления",
      "duration": "По ситуации",
      "tests": [
        "УЗИ",
        "биопсия при АМК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль АМК."
      ],
      "earlierReviewIf": [
        "Рецидив/АМК."
      ],
      "switchTreatmentIf": [
        "Атипия при гистологии."
      ],
      "urgentReassessmentIf": [
        "Обильное АМК в постменопаузе."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак)."
    ],
    "patientCounseling": [
      "Доброкачественный характер.",
      "Важность биопсии при АМК."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Полипэктомия не снижает фертильность."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n84-9",
    "name": "Полипы матки и шейки",
    "icd": "N84.9",
    "subtitle": "Гинекология",
    "icon": "ovary",
    "definition": "Полипы матки и шейки (N84.9) — доброкачественное полиповидное образование эндометрия/цервикального канала.",
    "overview": {
      "quickTake": "Полипы матки и шейки: доброкачественное образование полости матки/шейки; гистероскопия с биопсией/удалением.",
      "prevalence": "Часто у женщин 40-60 лет.",
      "riskLevel": "low",
      "practiceFocus": "Исключение гиперплазии/рака эндометрия (особенно при АМК)."
    },
    "epidemiology": "Часто в перименопаузе.",
    "etiology": [
      "Гормональный дисбаланс (эстрогеновая стимуляция)",
      "Хроническое воспаление"
    ],
    "symptoms": [
      "Аномальные маточные кровотечения",
      "Меноррагия",
      "Бесплодие (редко)"
    ],
    "symptomGroups": {
      "typical": [
        "АМК, меноррагия."
      ],
      "alarm": [
        "Обильное АМК в постменопаузе (исключить рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Полипы матки и шейки: при АМК — гистероскопия + биопсия; исключите гиперплазию/рак эндометрия.",
      "redFlags": [
        "АМК в постменопаузе."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, гистероскопия с биопсией."
      ],
      "diagnosticMinimum": [
        "УЗИ, гистероскопия, биопсия."
      ],
      "whenToEscalate": [
        "АМК в постменопаузе, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "Полипы редко малигнизируются, но АМК требует исключения рака."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Ведение АМК, полипы эндометрия.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "АМК, полип по УЗИ/гистероскопии."
      ],
      "laboratory": [
        "Не требуется рутинно."
      ],
      "imaging": [
        "УЗИ (гиперэхогенное включение в полости), гистероскопия/МРТ."
      ],
      "diagnosisConfirmedWhen": [
        "Гистероскопия + гистология."
      ],
      "diagnosisExcludedWhen": [
        "Подозрение на рак эндометрия — отдельное ведение."
      ]
    },
    "severityStratification": {
      "title": "Риск малигнизации",
      "tiers": [
        {
          "name": "Доброкачественный",
          "criteria": [
            "Типичный полип, АМК у пременопаузы."
          ],
          "clinicalMeaning": "Удаление при симптомах.",
          "managementImpact": "Гистероскопия + полипэктомия."
        },
        {
          "name": "Постменопауза/АМК",
          "criteria": [
            "АМК в постменопаузе."
          ],
          "clinicalMeaning": "Исключить злокачественность.",
          "managementImpact": "Гистероскопия + биопсия + полипэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Гиперплазия/рак эндометрия",
        "whyConfused": "АМК.",
        "howToDistinguish": "Биопсия эндометрия.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      },
      {
        "condition": "Подслизистая миома",
        "whyConfused": "Образование в полости.",
        "howToDistinguish": "УЗИ/гистероскопия.",
        "testsIfNeeded": [
          "УЗИ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ эндометрия, АМК анамнез."
      ],
      "confirmDiagnosis": [
        "Гистероскопия + биопсия."
      ],
      "startTreatment": [
        "Полипэктомия (гистероскопия)."
      ],
      "reassess": [
        "По гистологии."
      ],
      "escalateWhen": [
        "АМК в постменопаузе, атипия."
      ],
      "referWhen": [
        "К гинекологу-онкологу при атипии."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при бессимптомных мелких полипах (пременопауза)."
      ],
      "surgical": [
        "Гистероскопическая полипэктомия."
      ],
      "guidelines": {
        "eau": "Удаление симптомных полипов.",
        "ru": "Биопсия обязательна при постменопаузальном АМК."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Полип эндометрия"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "полость матки",
          "description": "Гиперэхогенное включение с сосудом (питающий сосуд).",
          "normal": "Эндометрий однородный.",
          "pathology": "Полип эндометрия.",
          "clinicalSignificance": "Показание к гистероскопии."
        }
      ],
      "imagingTips": [
        "Сосудистый пучок — типичный признак полипа."
      ]
    },
    "recommendations": [
      "Гистероскопия при АМК.",
      "Биопсия при постменопаузе."
    ],
    "prognosis": {
      "general": "Отличный; рецидивы возможны.",
      "factors": [
        "Возраст",
        "Гистология"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "УЗИ через 3-6 мес после удаления",
      "duration": "По ситуации",
      "tests": [
        "УЗИ",
        "биопсия при АМК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль АМК."
      ],
      "earlierReviewIf": [
        "Рецидив/АМК."
      ],
      "switchTreatmentIf": [
        "Атипия при гистологии."
      ],
      "urgentReassessmentIf": [
        "Обильное АМК в постменопаузе."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак)."
    ],
    "patientCounseling": [
      "Доброкачественный характер.",
      "Важность биопсии при АМК."
    ],
    "specialPopulations": {
      "adolescents": [
        "Редко."
      ],
      "fertilityPlanning": [
        "Полипэктомия не снижает фертильность."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n85",
    "name": "Гиперплазия эндометрия",
    "icd": "N85",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Гиперплазия эндометрия (N85) — Состояние матки, требующее гинекологической оценки.",
    "overview": {
      "quickTake": "Гиперплазия эндометрия (N85): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Гиперплазия эндометрия: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n85-2",
    "name": "Гиперплазия эндометрия",
    "icd": "N85.2",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Гиперплазия эндометрия (N85.2) — Состояние матки, требующее гинекологической оценки.",
    "overview": {
      "quickTake": "Гиперплазия эндометрия (N85.2): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Гиперплазия эндометрия: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n85-4",
    "name": "Гиперплазия эндометрия",
    "icd": "N85.4",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Гиперплазия эндометрия (N85.4) — Состояние матки, требующее гинекологической оценки.",
    "overview": {
      "quickTake": "Гиперплазия эндометрия (N85.4): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Гиперплазия эндометрия: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n85-5",
    "name": "Гиперплазия эндометрия",
    "icd": "N85.5",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Гиперплазия эндометрия (N85.5) — Состояние матки, требующее гинекологической оценки.",
    "overview": {
      "quickTake": "Гиперплазия эндометрия (N85.5): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Гиперплазия эндометрия: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n85-7",
    "name": "Гиперплазия эндометрия",
    "icd": "N85.7",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Гиперплазия эндометрия (N85.7) — Состояние матки, требующее гинекологической оценки.",
    "overview": {
      "quickTake": "Гиперплазия эндометрия (N85.7): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Гиперплазия эндометрия: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n85-9",
    "name": "Гиперплазия эндометрия",
    "icd": "N85.9",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Гиперплазия эндометрия (N85.9) — Состояние матки, требующее гинекологической оценки.",
    "overview": {
      "quickTake": "Гиперплазия эндометрия (N85.9): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
      "prevalence": "Уточняется по литературе.",
      "riskLevel": "moderate",
      "practiceFocus": "Осмотр, визуализация и исключение злокачественности/острых состояний."
    },
    "epidemiology": "См. профильная литература по данному состоянию.",
    "etiology": [
      "Уточняется",
      "Связано с анатомо-физиологическими особенностями"
    ],
    "symptoms": [
      "Зависит от состояния",
      "Боль/дискомфорт при симптомном течении"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы зависят от локализации."
      ],
      "alarm": [
        "Острое ухудшение, признаки злокачественности."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Гиперплазия эндометрия: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
      "redFlags": [
        "Быстрое ухудшение, признаки малигнизации."
      ],
      "firstLineActions": [
        "Осмотр, УЗИ, базовые анализы.",
        "Исключение злокачественности/острого процесса."
      ],
      "diagnosticMinimum": [
        "Осмотр, УЗИ, при показаниях — биопсия/МРТ."
      ],
      "whenToEscalate": [
        "При подозрении на злокачественность/острое состояние."
      ],
      "clinicalPearls": [
        "Дифференциальная диагностика — основа."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "FIGO",
        "title": "Guideline set (general gynecology)",
        "documentType": "Guideline",
        "scope": "Общегинекологическое ведение.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие клинике состояния."
      ],
      "laboratory": [
        "По показаниям."
      ],
      "imaging": [
        "УЗИ — первый шаг; МРТ при сложных случаях."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + визуализация/гистология."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Лёгкая",
          "criteria": [
            "Бессимптомно/минимальные симптомы."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Контроль."
        },
        {
          "name": "Выраженная",
          "criteria": [
            "Симптомы/подозрение на злокачественность."
          ],
          "clinicalMeaning": "Активное лечение.",
          "managementImpact": "По причине."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Злокачественное новообразование",
        "whyConfused": "Перекрывающиеся симптомы/образование.",
        "howToDistinguish": "Биопсия/МРТ, онкомаркеры.",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Осмотр, УЗИ."
      ],
      "confirmDiagnosis": [
        "Клиника + визуализация."
      ],
      "startTreatment": [
        "По причине и тяжести."
      ],
      "reassess": [
        "Динамика."
      ],
      "escalateWhen": [
        "Подозрение на злокачественность/острое."
      ],
      "referWhen": [
        "К профильному специалисту."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение/медикаментозно при лёгких."
      ],
      "surgical": [
        "По показаниям."
      ],
      "guidelines": {
        "ru": "Тактика индивидуальна."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Оценка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "органы малого таза",
          "description": "По состоянию.",
          "normal": "Норма.",
          "pathology": "Выявленное состояние.",
          "clinicalSignificance": "Уточняет диагноз."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг."
      ]
    },
    "recommendations": [
      "Осмотр гинеколога при симптомах."
    ],
    "prognosis": {
      "general": "Зависит от состояния.",
      "factors": [
        "Своевременность",
        "Тяжесть"
      ],
      "survival": "См. по состоянию."
    },
    "followUp": {
      "frequency": "По показаниям",
      "duration": "Индивидуально",
      "tests": [
        "УЗИ",
        "осмотр"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль."
      ],
      "earlierReviewIf": [
        "Ухудшение."
      ],
      "switchTreatmentIf": [
        "Нет эффекта."
      ],
      "urgentReassessmentIf": [
        "Острое состояние."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать признаки злокачественности."
    ],
    "patientCounseling": [
      "Объяснить план обследования."
    ],
    "specialPopulations": {
      "adolescents": [
        "Учитывать возрастные особенности."
      ],
      "fertilityPlanning": [
        "Учитывать репродуктивные планы."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n86-0",
    "name": "Дисплазия шейки матки",
    "icd": "N86.0",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Дисплазия шейки матки (N86.0) — дефект/изменение эпителия шейки матки.",
    "overview": {
      "quickTake": "Дисплазия шейки матки: доброкачественное состояние шейки; кольпоскопия при аномальном скрининге.",
      "prevalence": "Очень часто.",
      "riskLevel": "low",
      "practiceFocus": "Исключение CIN/рака (кольпоскопия при аномальном цитологическом/ВПЧ-тесте)."
    },
    "epidemiology": "Часто у репродуктивных женщин.",
    "etiology": [
      "Гормональные (эктопия у молодых)",
      "Послеродовые разрывы",
      "Воспаление"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Контактные выделения"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно."
      ],
      "alarm": [
        "Контактные кровотечения (исключить CIN/рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Дисплазия шейки матки: при аномальном скрининге — кольпоскопия; не лечить «для профилактики» без показаний.",
      "redFlags": [
        "Контактные кровотечения, аномальный цитологический/ВПЧ-тест."
      ],
      "firstLineActions": [
        "Цитология + ВПЧ, кольпоскопия при аномалиях."
      ],
      "diagnosticMinimum": [
        "Кольпоскопия, биопсия при показаниях."
      ],
      "whenToEscalate": [
        "При CIN/подозрении на рак."
      ],
      "clinicalPearls": [
        "Эктопия у молодых — вариант нормы, не требует лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening guideline",
        "documentType": "Guideline",
        "scope": "Скрининг и кольпоскопия.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Изменение эпителия при осмотре/кольпоскопии."
      ],
      "laboratory": [
        "Цитология + ВПЧ."
      ],
      "imaging": [
        "Кольпоскопия — основа."
      ],
      "diagnosisConfirmedWhen": [
        "Кольпоскопия + биопсия при аномалиях."
      ],
      "diagnosisExcludedWhen": [
        "Нормальная кольпоскопия/скрининг."
      ]
    },
    "severityStratification": {
      "title": "По скринингу",
      "tiers": [
        {
          "name": "Норма/эктопия",
          "criteria": [
            "Нормальный скрининг."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Не лечить."
        },
        {
          "name": "Аномалия",
          "criteria": [
            "Аномальный цитологический/ВПЧ-тест."
          ],
          "clinicalMeaning": "Кольпоскопия.",
          "managementImpact": "Биопсия/лечение по результату."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "CIN/рак шейки (C53/D06)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Кольпоскопия + биопсия.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг цитология+ВПЧ, кольпоскопия."
      ],
      "confirmDiagnosis": [
        "Биопсия при аномалиях."
      ],
      "startTreatment": [
        "Не лечить при норме; эксцизия при CIN."
      ],
      "reassess": [
        "По результатам."
      ],
      "escalateWhen": [
        "CIN/рак."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при нормальном скрининге."
      ],
      "surgical": [
        "Коагуляция/конизация при CIN."
      ],
      "guidelines": {
        "acog": "Лечение только при доказанном предраке.",
        "ru": "Скрининг ВПЧ+цитология — основа."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна на УЗИ; оценивается кольпоскопией.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "УЗИ не информативно для шейки (кроме объёмных процессов)."
      ]
    },
    "recommendations": [
      "Скрининг ВПЧ+цитология.",
      "Не лечить эктопию у молодых без показаний."
    ],
    "prognosis": {
      "general": "Отличный.",
      "factors": [
        "Результат скрининга"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "По скринингу",
      "duration": "До 65 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Скрининг."
      ],
      "earlierReviewIf": [
        "Аномальный скрининг/кровотечения."
      ],
      "switchTreatmentIf": [
        "CIN."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не прижигать эктопию «для профилактики» без показаний."
    ],
    "patientCounseling": [
      "Объяснить, что эктопия у молодых — вариант нормы.",
      "Важность скрининга."
    ],
    "specialPopulations": {
      "adolescents": [
        "Эктопия часто физиологична."
      ],
      "fertilityPlanning": [
        "Не влияет."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n86-1",
    "name": "Дисплазия шейки матки",
    "icd": "N86.1",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Дисплазия шейки матки (N86.1) — дефект/изменение эпителия шейки матки.",
    "overview": {
      "quickTake": "Дисплазия шейки матки: доброкачественное состояние шейки; кольпоскопия при аномальном скрининге.",
      "prevalence": "Очень часто.",
      "riskLevel": "low",
      "practiceFocus": "Исключение CIN/рака (кольпоскопия при аномальном цитологическом/ВПЧ-тесте)."
    },
    "epidemiology": "Часто у репродуктивных женщин.",
    "etiology": [
      "Гормональные (эктопия у молодых)",
      "Послеродовые разрывы",
      "Воспаление"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Контактные выделения"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно."
      ],
      "alarm": [
        "Контактные кровотечения (исключить CIN/рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Дисплазия шейки матки: при аномальном скрининге — кольпоскопия; не лечить «для профилактики» без показаний.",
      "redFlags": [
        "Контактные кровотечения, аномальный цитологический/ВПЧ-тест."
      ],
      "firstLineActions": [
        "Цитология + ВПЧ, кольпоскопия при аномалиях."
      ],
      "diagnosticMinimum": [
        "Кольпоскопия, биопсия при показаниях."
      ],
      "whenToEscalate": [
        "При CIN/подозрении на рак."
      ],
      "clinicalPearls": [
        "Эктопия у молодых — вариант нормы, не требует лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening guideline",
        "documentType": "Guideline",
        "scope": "Скрининг и кольпоскопия.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Изменение эпителия при осмотре/кольпоскопии."
      ],
      "laboratory": [
        "Цитология + ВПЧ."
      ],
      "imaging": [
        "Кольпоскопия — основа."
      ],
      "diagnosisConfirmedWhen": [
        "Кольпоскопия + биопсия при аномалиях."
      ],
      "diagnosisExcludedWhen": [
        "Нормальная кольпоскопия/скрининг."
      ]
    },
    "severityStratification": {
      "title": "По скринингу",
      "tiers": [
        {
          "name": "Норма/эктопия",
          "criteria": [
            "Нормальный скрининг."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Не лечить."
        },
        {
          "name": "Аномалия",
          "criteria": [
            "Аномальный цитологический/ВПЧ-тест."
          ],
          "clinicalMeaning": "Кольпоскопия.",
          "managementImpact": "Биопсия/лечение по результату."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "CIN/рак шейки (C53/D06)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Кольпоскопия + биопсия.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг цитология+ВПЧ, кольпоскопия."
      ],
      "confirmDiagnosis": [
        "Биопсия при аномалиях."
      ],
      "startTreatment": [
        "Не лечить при норме; эксцизия при CIN."
      ],
      "reassess": [
        "По результатам."
      ],
      "escalateWhen": [
        "CIN/рак."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при нормальном скрининге."
      ],
      "surgical": [
        "Коагуляция/конизация при CIN."
      ],
      "guidelines": {
        "acog": "Лечение только при доказанном предраке.",
        "ru": "Скрининг ВПЧ+цитология — основа."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна на УЗИ; оценивается кольпоскопией.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "УЗИ не информативно для шейки (кроме объёмных процессов)."
      ]
    },
    "recommendations": [
      "Скрининг ВПЧ+цитология.",
      "Не лечить эктопию у молодых без показаний."
    ],
    "prognosis": {
      "general": "Отличный.",
      "factors": [
        "Результат скрининга"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "По скринингу",
      "duration": "До 65 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Скрининг."
      ],
      "earlierReviewIf": [
        "Аномальный скрининг/кровотечения."
      ],
      "switchTreatmentIf": [
        "CIN."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не прижигать эктопию «для профилактики» без показаний."
    ],
    "patientCounseling": [
      "Объяснить, что эктопия у молодых — вариант нормы.",
      "Важность скрининга."
    ],
    "specialPopulations": {
      "adolescents": [
        "Эктопия часто физиологична."
      ],
      "fertilityPlanning": [
        "Не влияет."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n86-2",
    "name": "Дисплазия шейки матки",
    "icd": "N86.2",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Дисплазия шейки матки (N86.2) — дефект/изменение эпителия шейки матки.",
    "overview": {
      "quickTake": "Дисплазия шейки матки: доброкачественное состояние шейки; кольпоскопия при аномальном скрининге.",
      "prevalence": "Очень часто.",
      "riskLevel": "low",
      "practiceFocus": "Исключение CIN/рака (кольпоскопия при аномальном цитологическом/ВПЧ-тесте)."
    },
    "epidemiology": "Часто у репродуктивных женщин.",
    "etiology": [
      "Гормональные (эктопия у молодых)",
      "Послеродовые разрывы",
      "Воспаление"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Контактные выделения"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно."
      ],
      "alarm": [
        "Контактные кровотечения (исключить CIN/рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Дисплазия шейки матки: при аномальном скрининге — кольпоскопия; не лечить «для профилактики» без показаний.",
      "redFlags": [
        "Контактные кровотечения, аномальный цитологический/ВПЧ-тест."
      ],
      "firstLineActions": [
        "Цитология + ВПЧ, кольпоскопия при аномалиях."
      ],
      "diagnosticMinimum": [
        "Кольпоскопия, биопсия при показаниях."
      ],
      "whenToEscalate": [
        "При CIN/подозрении на рак."
      ],
      "clinicalPearls": [
        "Эктопия у молодых — вариант нормы, не требует лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening guideline",
        "documentType": "Guideline",
        "scope": "Скрининг и кольпоскопия.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Изменение эпителия при осмотре/кольпоскопии."
      ],
      "laboratory": [
        "Цитология + ВПЧ."
      ],
      "imaging": [
        "Кольпоскопия — основа."
      ],
      "diagnosisConfirmedWhen": [
        "Кольпоскопия + биопсия при аномалиях."
      ],
      "diagnosisExcludedWhen": [
        "Нормальная кольпоскопия/скрининг."
      ]
    },
    "severityStratification": {
      "title": "По скринингу",
      "tiers": [
        {
          "name": "Норма/эктопия",
          "criteria": [
            "Нормальный скрининг."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Не лечить."
        },
        {
          "name": "Аномалия",
          "criteria": [
            "Аномальный цитологический/ВПЧ-тест."
          ],
          "clinicalMeaning": "Кольпоскопия.",
          "managementImpact": "Биопсия/лечение по результату."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "CIN/рак шейки (C53/D06)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Кольпоскопия + биопсия.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг цитология+ВПЧ, кольпоскопия."
      ],
      "confirmDiagnosis": [
        "Биопсия при аномалиях."
      ],
      "startTreatment": [
        "Не лечить при норме; эксцизия при CIN."
      ],
      "reassess": [
        "По результатам."
      ],
      "escalateWhen": [
        "CIN/рак."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при нормальном скрининге."
      ],
      "surgical": [
        "Коагуляция/конизация при CIN."
      ],
      "guidelines": {
        "acog": "Лечение только при доказанном предраке.",
        "ru": "Скрининг ВПЧ+цитология — основа."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна на УЗИ; оценивается кольпоскопией.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "УЗИ не информативно для шейки (кроме объёмных процессов)."
      ]
    },
    "recommendations": [
      "Скрининг ВПЧ+цитология.",
      "Не лечить эктопию у молодых без показаний."
    ],
    "prognosis": {
      "general": "Отличный.",
      "factors": [
        "Результат скрининга"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "По скринингу",
      "duration": "До 65 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Скрининг."
      ],
      "earlierReviewIf": [
        "Аномальный скрининг/кровотечения."
      ],
      "switchTreatmentIf": [
        "CIN."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не прижигать эктопию «для профилактики» без показаний."
    ],
    "patientCounseling": [
      "Объяснить, что эктопия у молодых — вариант нормы.",
      "Важность скрининга."
    ],
    "specialPopulations": {
      "adolescents": [
        "Эктопия часто физиологична."
      ],
      "fertilityPlanning": [
        "Не влияет."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n86-3",
    "name": "Дисплазия шейки матки",
    "icd": "N86.3",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Дисплазия шейки матки (N86.3) — дефект/изменение эпителия шейки матки.",
    "overview": {
      "quickTake": "Дисплазия шейки матки: доброкачественное состояние шейки; кольпоскопия при аномальном скрининге.",
      "prevalence": "Очень часто.",
      "riskLevel": "low",
      "practiceFocus": "Исключение CIN/рака (кольпоскопия при аномальном цитологическом/ВПЧ-тесте)."
    },
    "epidemiology": "Часто у репродуктивных женщин.",
    "etiology": [
      "Гормональные (эктопия у молодых)",
      "Послеродовые разрывы",
      "Воспаление"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Контактные выделения"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно."
      ],
      "alarm": [
        "Контактные кровотечения (исключить CIN/рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Дисплазия шейки матки: при аномальном скрининге — кольпоскопия; не лечить «для профилактики» без показаний.",
      "redFlags": [
        "Контактные кровотечения, аномальный цитологический/ВПЧ-тест."
      ],
      "firstLineActions": [
        "Цитология + ВПЧ, кольпоскопия при аномалиях."
      ],
      "diagnosticMinimum": [
        "Кольпоскопия, биопсия при показаниях."
      ],
      "whenToEscalate": [
        "При CIN/подозрении на рак."
      ],
      "clinicalPearls": [
        "Эктопия у молодых — вариант нормы, не требует лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening guideline",
        "documentType": "Guideline",
        "scope": "Скрининг и кольпоскопия.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Изменение эпителия при осмотре/кольпоскопии."
      ],
      "laboratory": [
        "Цитология + ВПЧ."
      ],
      "imaging": [
        "Кольпоскопия — основа."
      ],
      "diagnosisConfirmedWhen": [
        "Кольпоскопия + биопсия при аномалиях."
      ],
      "diagnosisExcludedWhen": [
        "Нормальная кольпоскопия/скрининг."
      ]
    },
    "severityStratification": {
      "title": "По скринингу",
      "tiers": [
        {
          "name": "Норма/эктопия",
          "criteria": [
            "Нормальный скрининг."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Не лечить."
        },
        {
          "name": "Аномалия",
          "criteria": [
            "Аномальный цитологический/ВПЧ-тест."
          ],
          "clinicalMeaning": "Кольпоскопия.",
          "managementImpact": "Биопсия/лечение по результату."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "CIN/рак шейки (C53/D06)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Кольпоскопия + биопсия.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг цитология+ВПЧ, кольпоскопия."
      ],
      "confirmDiagnosis": [
        "Биопсия при аномалиях."
      ],
      "startTreatment": [
        "Не лечить при норме; эксцизия при CIN."
      ],
      "reassess": [
        "По результатам."
      ],
      "escalateWhen": [
        "CIN/рак."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при нормальном скрининге."
      ],
      "surgical": [
        "Коагуляция/конизация при CIN."
      ],
      "guidelines": {
        "acog": "Лечение только при доказанном предраке.",
        "ru": "Скрининг ВПЧ+цитология — основа."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна на УЗИ; оценивается кольпоскопией.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "УЗИ не информативно для шейки (кроме объёмных процессов)."
      ]
    },
    "recommendations": [
      "Скрининг ВПЧ+цитология.",
      "Не лечить эктопию у молодых без показаний."
    ],
    "prognosis": {
      "general": "Отличный.",
      "factors": [
        "Результат скрининга"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "По скринингу",
      "duration": "До 65 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Скрининг."
      ],
      "earlierReviewIf": [
        "Аномальный скрининг/кровотечения."
      ],
      "switchTreatmentIf": [
        "CIN."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не прижигать эктопию «для профилактики» без показаний."
    ],
    "patientCounseling": [
      "Объяснить, что эктопия у молодых — вариант нормы.",
      "Важность скрининга."
    ],
    "specialPopulations": {
      "adolescents": [
        "Эктопия часто физиологична."
      ],
      "fertilityPlanning": [
        "Не влияет."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n86-4",
    "name": "Дисплазия шейки матки",
    "icd": "N86.4",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Дисплазия шейки матки (N86.4) — дефект/изменение эпителия шейки матки.",
    "overview": {
      "quickTake": "Дисплазия шейки матки: доброкачественное состояние шейки; кольпоскопия при аномальном скрининге.",
      "prevalence": "Очень часто.",
      "riskLevel": "low",
      "practiceFocus": "Исключение CIN/рака (кольпоскопия при аномальном цитологическом/ВПЧ-тесте)."
    },
    "epidemiology": "Часто у репродуктивных женщин.",
    "etiology": [
      "Гормональные (эктопия у молодых)",
      "Послеродовые разрывы",
      "Воспаление"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Контактные выделения"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно."
      ],
      "alarm": [
        "Контактные кровотечения (исключить CIN/рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Дисплазия шейки матки: при аномальном скрининге — кольпоскопия; не лечить «для профилактики» без показаний.",
      "redFlags": [
        "Контактные кровотечения, аномальный цитологический/ВПЧ-тест."
      ],
      "firstLineActions": [
        "Цитология + ВПЧ, кольпоскопия при аномалиях."
      ],
      "diagnosticMinimum": [
        "Кольпоскопия, биопсия при показаниях."
      ],
      "whenToEscalate": [
        "При CIN/подозрении на рак."
      ],
      "clinicalPearls": [
        "Эктопия у молодых — вариант нормы, не требует лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening guideline",
        "documentType": "Guideline",
        "scope": "Скрининг и кольпоскопия.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Изменение эпителия при осмотре/кольпоскопии."
      ],
      "laboratory": [
        "Цитология + ВПЧ."
      ],
      "imaging": [
        "Кольпоскопия — основа."
      ],
      "diagnosisConfirmedWhen": [
        "Кольпоскопия + биопсия при аномалиях."
      ],
      "diagnosisExcludedWhen": [
        "Нормальная кольпоскопия/скрининг."
      ]
    },
    "severityStratification": {
      "title": "По скринингу",
      "tiers": [
        {
          "name": "Норма/эктопия",
          "criteria": [
            "Нормальный скрининг."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Не лечить."
        },
        {
          "name": "Аномалия",
          "criteria": [
            "Аномальный цитологический/ВПЧ-тест."
          ],
          "clinicalMeaning": "Кольпоскопия.",
          "managementImpact": "Биопсия/лечение по результату."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "CIN/рак шейки (C53/D06)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Кольпоскопия + биопсия.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг цитология+ВПЧ, кольпоскопия."
      ],
      "confirmDiagnosis": [
        "Биопсия при аномалиях."
      ],
      "startTreatment": [
        "Не лечить при норме; эксцизия при CIN."
      ],
      "reassess": [
        "По результатам."
      ],
      "escalateWhen": [
        "CIN/рак."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при нормальном скрининге."
      ],
      "surgical": [
        "Коагуляция/конизация при CIN."
      ],
      "guidelines": {
        "acog": "Лечение только при доказанном предраке.",
        "ru": "Скрининг ВПЧ+цитология — основа."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна на УЗИ; оценивается кольпоскопией.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "УЗИ не информативно для шейки (кроме объёмных процессов)."
      ]
    },
    "recommendations": [
      "Скрининг ВПЧ+цитология.",
      "Не лечить эктопию у молодых без показаний."
    ],
    "prognosis": {
      "general": "Отличный.",
      "factors": [
        "Результат скрининга"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "По скринингу",
      "duration": "До 65 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Скрининг."
      ],
      "earlierReviewIf": [
        "Аномальный скрининг/кровотечения."
      ],
      "switchTreatmentIf": [
        "CIN."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не прижигать эктопию «для профилактики» без показаний."
    ],
    "patientCounseling": [
      "Объяснить, что эктопия у молодых — вариант нормы.",
      "Важность скрининга."
    ],
    "specialPopulations": {
      "adolescents": [
        "Эктопия часто физиологична."
      ],
      "fertilityPlanning": [
        "Не влияет."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n86-5",
    "name": "Дисплазия шейки матки",
    "icd": "N86.5",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Дисплазия шейки матки (N86.5) — дефект/изменение эпителия шейки матки.",
    "overview": {
      "quickTake": "Дисплазия шейки матки: доброкачественное состояние шейки; кольпоскопия при аномальном скрининге.",
      "prevalence": "Очень часто.",
      "riskLevel": "low",
      "practiceFocus": "Исключение CIN/рака (кольпоскопия при аномальном цитологическом/ВПЧ-тесте)."
    },
    "epidemiology": "Часто у репродуктивных женщин.",
    "etiology": [
      "Гормональные (эктопия у молодых)",
      "Послеродовые разрывы",
      "Воспаление"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Контактные выделения"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно."
      ],
      "alarm": [
        "Контактные кровотечения (исключить CIN/рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Дисплазия шейки матки: при аномальном скрининге — кольпоскопия; не лечить «для профилактики» без показаний.",
      "redFlags": [
        "Контактные кровотечения, аномальный цитологический/ВПЧ-тест."
      ],
      "firstLineActions": [
        "Цитология + ВПЧ, кольпоскопия при аномалиях."
      ],
      "diagnosticMinimum": [
        "Кольпоскопия, биопсия при показаниях."
      ],
      "whenToEscalate": [
        "При CIN/подозрении на рак."
      ],
      "clinicalPearls": [
        "Эктопия у молодых — вариант нормы, не требует лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening guideline",
        "documentType": "Guideline",
        "scope": "Скрининг и кольпоскопия.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Изменение эпителия при осмотре/кольпоскопии."
      ],
      "laboratory": [
        "Цитология + ВПЧ."
      ],
      "imaging": [
        "Кольпоскопия — основа."
      ],
      "diagnosisConfirmedWhen": [
        "Кольпоскопия + биопсия при аномалиях."
      ],
      "diagnosisExcludedWhen": [
        "Нормальная кольпоскопия/скрининг."
      ]
    },
    "severityStratification": {
      "title": "По скринингу",
      "tiers": [
        {
          "name": "Норма/эктопия",
          "criteria": [
            "Нормальный скрининг."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Не лечить."
        },
        {
          "name": "Аномалия",
          "criteria": [
            "Аномальный цитологический/ВПЧ-тест."
          ],
          "clinicalMeaning": "Кольпоскопия.",
          "managementImpact": "Биопсия/лечение по результату."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "CIN/рак шейки (C53/D06)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Кольпоскопия + биопсия.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг цитология+ВПЧ, кольпоскопия."
      ],
      "confirmDiagnosis": [
        "Биопсия при аномалиях."
      ],
      "startTreatment": [
        "Не лечить при норме; эксцизия при CIN."
      ],
      "reassess": [
        "По результатам."
      ],
      "escalateWhen": [
        "CIN/рак."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при нормальном скрининге."
      ],
      "surgical": [
        "Коагуляция/конизация при CIN."
      ],
      "guidelines": {
        "acog": "Лечение только при доказанном предраке.",
        "ru": "Скрининг ВПЧ+цитология — основа."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна на УЗИ; оценивается кольпоскопией.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "УЗИ не информативно для шейки (кроме объёмных процессов)."
      ]
    },
    "recommendations": [
      "Скрининг ВПЧ+цитология.",
      "Не лечить эктопию у молодых без показаний."
    ],
    "prognosis": {
      "general": "Отличный.",
      "factors": [
        "Результат скрининга"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "По скринингу",
      "duration": "До 65 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Скрининг."
      ],
      "earlierReviewIf": [
        "Аномальный скрининг/кровотечения."
      ],
      "switchTreatmentIf": [
        "CIN."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не прижигать эктопию «для профилактики» без показаний."
    ],
    "patientCounseling": [
      "Объяснить, что эктопия у молодых — вариант нормы.",
      "Важность скрининга."
    ],
    "specialPopulations": {
      "adolescents": [
        "Эктопия часто физиологична."
      ],
      "fertilityPlanning": [
        "Не влияет."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n86-6",
    "name": "Дисплазия шейки матки",
    "icd": "N86.6",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Дисплазия шейки матки (N86.6) — дефект/изменение эпителия шейки матки.",
    "overview": {
      "quickTake": "Дисплазия шейки матки: доброкачественное состояние шейки; кольпоскопия при аномальном скрининге.",
      "prevalence": "Очень часто.",
      "riskLevel": "low",
      "practiceFocus": "Исключение CIN/рака (кольпоскопия при аномальном цитологическом/ВПЧ-тесте)."
    },
    "epidemiology": "Часто у репродуктивных женщин.",
    "etiology": [
      "Гормональные (эктопия у молодых)",
      "Послеродовые разрывы",
      "Воспаление"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Контактные выделения"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно."
      ],
      "alarm": [
        "Контактные кровотечения (исключить CIN/рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Дисплазия шейки матки: при аномальном скрининге — кольпоскопия; не лечить «для профилактики» без показаний.",
      "redFlags": [
        "Контактные кровотечения, аномальный цитологический/ВПЧ-тест."
      ],
      "firstLineActions": [
        "Цитология + ВПЧ, кольпоскопия при аномалиях."
      ],
      "diagnosticMinimum": [
        "Кольпоскопия, биопсия при показаниях."
      ],
      "whenToEscalate": [
        "При CIN/подозрении на рак."
      ],
      "clinicalPearls": [
        "Эктопия у молодых — вариант нормы, не требует лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening guideline",
        "documentType": "Guideline",
        "scope": "Скрининг и кольпоскопия.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Изменение эпителия при осмотре/кольпоскопии."
      ],
      "laboratory": [
        "Цитология + ВПЧ."
      ],
      "imaging": [
        "Кольпоскопия — основа."
      ],
      "diagnosisConfirmedWhen": [
        "Кольпоскопия + биопсия при аномалиях."
      ],
      "diagnosisExcludedWhen": [
        "Нормальная кольпоскопия/скрининг."
      ]
    },
    "severityStratification": {
      "title": "По скринингу",
      "tiers": [
        {
          "name": "Норма/эктопия",
          "criteria": [
            "Нормальный скрининг."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Не лечить."
        },
        {
          "name": "Аномалия",
          "criteria": [
            "Аномальный цитологический/ВПЧ-тест."
          ],
          "clinicalMeaning": "Кольпоскопия.",
          "managementImpact": "Биопсия/лечение по результату."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "CIN/рак шейки (C53/D06)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Кольпоскопия + биопсия.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг цитология+ВПЧ, кольпоскопия."
      ],
      "confirmDiagnosis": [
        "Биопсия при аномалиях."
      ],
      "startTreatment": [
        "Не лечить при норме; эксцизия при CIN."
      ],
      "reassess": [
        "По результатам."
      ],
      "escalateWhen": [
        "CIN/рак."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при нормальном скрининге."
      ],
      "surgical": [
        "Коагуляция/конизация при CIN."
      ],
      "guidelines": {
        "acog": "Лечение только при доказанном предраке.",
        "ru": "Скрининг ВПЧ+цитология — основа."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна на УЗИ; оценивается кольпоскопией.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "УЗИ не информативно для шейки (кроме объёмных процессов)."
      ]
    },
    "recommendations": [
      "Скрининг ВПЧ+цитология.",
      "Не лечить эктопию у молодых без показаний."
    ],
    "prognosis": {
      "general": "Отличный.",
      "factors": [
        "Результат скрининга"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "По скринингу",
      "duration": "До 65 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Скрининг."
      ],
      "earlierReviewIf": [
        "Аномальный скрининг/кровотечения."
      ],
      "switchTreatmentIf": [
        "CIN."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не прижигать эктопию «для профилактики» без показаний."
    ],
    "patientCounseling": [
      "Объяснить, что эктопия у молодых — вариант нормы.",
      "Важность скрининга."
    ],
    "specialPopulations": {
      "adolescents": [
        "Эктопия часто физиологична."
      ],
      "fertilityPlanning": [
        "Не влияет."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n86-7",
    "name": "Дисплазия шейки матки",
    "icd": "N86.7",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Дисплазия шейки матки (N86.7) — дефект/изменение эпителия шейки матки.",
    "overview": {
      "quickTake": "Дисплазия шейки матки: доброкачественное состояние шейки; кольпоскопия при аномальном скрининге.",
      "prevalence": "Очень часто.",
      "riskLevel": "low",
      "practiceFocus": "Исключение CIN/рака (кольпоскопия при аномальном цитологическом/ВПЧ-тесте)."
    },
    "epidemiology": "Часто у репродуктивных женщин.",
    "etiology": [
      "Гормональные (эктопия у молодых)",
      "Послеродовые разрывы",
      "Воспаление"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Контактные выделения"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно."
      ],
      "alarm": [
        "Контактные кровотечения (исключить CIN/рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Дисплазия шейки матки: при аномальном скрининге — кольпоскопия; не лечить «для профилактики» без показаний.",
      "redFlags": [
        "Контактные кровотечения, аномальный цитологический/ВПЧ-тест."
      ],
      "firstLineActions": [
        "Цитология + ВПЧ, кольпоскопия при аномалиях."
      ],
      "diagnosticMinimum": [
        "Кольпоскопия, биопсия при показаниях."
      ],
      "whenToEscalate": [
        "При CIN/подозрении на рак."
      ],
      "clinicalPearls": [
        "Эктопия у молодых — вариант нормы, не требует лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening guideline",
        "documentType": "Guideline",
        "scope": "Скрининг и кольпоскопия.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Изменение эпителия при осмотре/кольпоскопии."
      ],
      "laboratory": [
        "Цитология + ВПЧ."
      ],
      "imaging": [
        "Кольпоскопия — основа."
      ],
      "diagnosisConfirmedWhen": [
        "Кольпоскопия + биопсия при аномалиях."
      ],
      "diagnosisExcludedWhen": [
        "Нормальная кольпоскопия/скрининг."
      ]
    },
    "severityStratification": {
      "title": "По скринингу",
      "tiers": [
        {
          "name": "Норма/эктопия",
          "criteria": [
            "Нормальный скрининг."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Не лечить."
        },
        {
          "name": "Аномалия",
          "criteria": [
            "Аномальный цитологический/ВПЧ-тест."
          ],
          "clinicalMeaning": "Кольпоскопия.",
          "managementImpact": "Биопсия/лечение по результату."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "CIN/рак шейки (C53/D06)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Кольпоскопия + биопсия.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг цитология+ВПЧ, кольпоскопия."
      ],
      "confirmDiagnosis": [
        "Биопсия при аномалиях."
      ],
      "startTreatment": [
        "Не лечить при норме; эксцизия при CIN."
      ],
      "reassess": [
        "По результатам."
      ],
      "escalateWhen": [
        "CIN/рак."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при нормальном скрининге."
      ],
      "surgical": [
        "Коагуляция/конизация при CIN."
      ],
      "guidelines": {
        "acog": "Лечение только при доказанном предраке.",
        "ru": "Скрининг ВПЧ+цитология — основа."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна на УЗИ; оценивается кольпоскопией.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "УЗИ не информативно для шейки (кроме объёмных процессов)."
      ]
    },
    "recommendations": [
      "Скрининг ВПЧ+цитология.",
      "Не лечить эктопию у молодых без показаний."
    ],
    "prognosis": {
      "general": "Отличный.",
      "factors": [
        "Результат скрининга"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "По скринингу",
      "duration": "До 65 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Скрининг."
      ],
      "earlierReviewIf": [
        "Аномальный скрининг/кровотечения."
      ],
      "switchTreatmentIf": [
        "CIN."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не прижигать эктопию «для профилактики» без показаний."
    ],
    "patientCounseling": [
      "Объяснить, что эктопия у молодых — вариант нормы.",
      "Важность скрининга."
    ],
    "specialPopulations": {
      "adolescents": [
        "Эктопия часто физиологична."
      ],
      "fertilityPlanning": [
        "Не влияет."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n86-8",
    "name": "Дисплазия шейки матки",
    "icd": "N86.8",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Дисплазия шейки матки (N86.8) — дефект/изменение эпителия шейки матки.",
    "overview": {
      "quickTake": "Дисплазия шейки матки: доброкачественное состояние шейки; кольпоскопия при аномальном скрининге.",
      "prevalence": "Очень часто.",
      "riskLevel": "low",
      "practiceFocus": "Исключение CIN/рака (кольпоскопия при аномальном цитологическом/ВПЧ-тесте)."
    },
    "epidemiology": "Часто у репродуктивных женщин.",
    "etiology": [
      "Гормональные (эктопия у молодых)",
      "Послеродовые разрывы",
      "Воспаление"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Контактные выделения"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно."
      ],
      "alarm": [
        "Контактные кровотечения (исключить CIN/рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Дисплазия шейки матки: при аномальном скрининге — кольпоскопия; не лечить «для профилактики» без показаний.",
      "redFlags": [
        "Контактные кровотечения, аномальный цитологический/ВПЧ-тест."
      ],
      "firstLineActions": [
        "Цитология + ВПЧ, кольпоскопия при аномалиях."
      ],
      "diagnosticMinimum": [
        "Кольпоскопия, биопсия при показаниях."
      ],
      "whenToEscalate": [
        "При CIN/подозрении на рак."
      ],
      "clinicalPearls": [
        "Эктопия у молодых — вариант нормы, не требует лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening guideline",
        "documentType": "Guideline",
        "scope": "Скрининг и кольпоскопия.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Изменение эпителия при осмотре/кольпоскопии."
      ],
      "laboratory": [
        "Цитология + ВПЧ."
      ],
      "imaging": [
        "Кольпоскопия — основа."
      ],
      "diagnosisConfirmedWhen": [
        "Кольпоскопия + биопсия при аномалиях."
      ],
      "diagnosisExcludedWhen": [
        "Нормальная кольпоскопия/скрининг."
      ]
    },
    "severityStratification": {
      "title": "По скринингу",
      "tiers": [
        {
          "name": "Норма/эктопия",
          "criteria": [
            "Нормальный скрининг."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Не лечить."
        },
        {
          "name": "Аномалия",
          "criteria": [
            "Аномальный цитологический/ВПЧ-тест."
          ],
          "clinicalMeaning": "Кольпоскопия.",
          "managementImpact": "Биопсия/лечение по результату."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "CIN/рак шейки (C53/D06)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Кольпоскопия + биопсия.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг цитология+ВПЧ, кольпоскопия."
      ],
      "confirmDiagnosis": [
        "Биопсия при аномалиях."
      ],
      "startTreatment": [
        "Не лечить при норме; эксцизия при CIN."
      ],
      "reassess": [
        "По результатам."
      ],
      "escalateWhen": [
        "CIN/рак."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при нормальном скрининге."
      ],
      "surgical": [
        "Коагуляция/конизация при CIN."
      ],
      "guidelines": {
        "acog": "Лечение только при доказанном предраке.",
        "ru": "Скрининг ВПЧ+цитология — основа."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна на УЗИ; оценивается кольпоскопией.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "УЗИ не информативно для шейки (кроме объёмных процессов)."
      ]
    },
    "recommendations": [
      "Скрининг ВПЧ+цитология.",
      "Не лечить эктопию у молодых без показаний."
    ],
    "prognosis": {
      "general": "Отличный.",
      "factors": [
        "Результат скрининга"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "По скринингу",
      "duration": "До 65 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Скрининг."
      ],
      "earlierReviewIf": [
        "Аномальный скрининг/кровотечения."
      ],
      "switchTreatmentIf": [
        "CIN."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не прижигать эктопию «для профилактики» без показаний."
    ],
    "patientCounseling": [
      "Объяснить, что эктопия у молодых — вариант нормы.",
      "Важность скрининга."
    ],
    "specialPopulations": {
      "adolescents": [
        "Эктопия часто физиологична."
      ],
      "fertilityPlanning": [
        "Не влияет."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n86-9",
    "name": "Дисплазия шейки матки",
    "icd": "N86.9",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Дисплазия шейки матки (N86.9) — дефект/изменение эпителия шейки матки.",
    "overview": {
      "quickTake": "Дисплазия шейки матки: доброкачественное состояние шейки; кольпоскопия при аномальном скрининге.",
      "prevalence": "Очень часто.",
      "riskLevel": "low",
      "practiceFocus": "Исключение CIN/рака (кольпоскопия при аномальном цитологическом/ВПЧ-тесте)."
    },
    "epidemiology": "Часто у репродуктивных женщин.",
    "etiology": [
      "Гормональные (эктопия у молодых)",
      "Послеродовые разрывы",
      "Воспаление"
    ],
    "symptoms": [
      "Часто бессимптомно",
      "Контактные выделения"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно."
      ],
      "alarm": [
        "Контактные кровотечения (исключить CIN/рак)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Дисплазия шейки матки: при аномальном скрининге — кольпоскопия; не лечить «для профилактики» без показаний.",
      "redFlags": [
        "Контактные кровотечения, аномальный цитологический/ВПЧ-тест."
      ],
      "firstLineActions": [
        "Цитология + ВПЧ, кольпоскопия при аномалиях."
      ],
      "diagnosticMinimum": [
        "Кольпоскопия, биопсия при показаниях."
      ],
      "whenToEscalate": [
        "При CIN/подозрении на рак."
      ],
      "clinicalPearls": [
        "Эктопия у молодых — вариант нормы, не требует лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening guideline",
        "documentType": "Guideline",
        "scope": "Скрининг и кольпоскопия.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Изменение эпителия при осмотре/кольпоскопии."
      ],
      "laboratory": [
        "Цитология + ВПЧ."
      ],
      "imaging": [
        "Кольпоскопия — основа."
      ],
      "diagnosisConfirmedWhen": [
        "Кольпоскопия + биопсия при аномалиях."
      ],
      "diagnosisExcludedWhen": [
        "Нормальная кольпоскопия/скрининг."
      ]
    },
    "severityStratification": {
      "title": "По скринингу",
      "tiers": [
        {
          "name": "Норма/эктопия",
          "criteria": [
            "Нормальный скрининг."
          ],
          "clinicalMeaning": "Наблюдение.",
          "managementImpact": "Не лечить."
        },
        {
          "name": "Аномалия",
          "criteria": [
            "Аномальный цитологический/ВПЧ-тест."
          ],
          "clinicalMeaning": "Кольпоскопия.",
          "managementImpact": "Биопсия/лечение по результату."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "CIN/рак шейки (C53/D06)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Кольпоскопия + биопсия.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг цитология+ВПЧ, кольпоскопия."
      ],
      "confirmDiagnosis": [
        "Биопсия при аномалиях."
      ],
      "startTreatment": [
        "Не лечить при норме; эксцизия при CIN."
      ],
      "reassess": [
        "По результатам."
      ],
      "escalateWhen": [
        "CIN/рак."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при нормальном скрининге."
      ],
      "surgical": [
        "Коагуляция/конизация при CIN."
      ],
      "guidelines": {
        "acog": "Лечение только при доказанном предраке.",
        "ru": "Скрининг ВПЧ+цитология — основа."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна на УЗИ; оценивается кольпоскопией.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "УЗИ не информативно для шейки (кроме объёмных процессов)."
      ]
    },
    "recommendations": [
      "Скрининг ВПЧ+цитология.",
      "Не лечить эктопию у молодых без показаний."
    ],
    "prognosis": {
      "general": "Отличный.",
      "factors": [
        "Результат скрининга"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "По скринингу",
      "duration": "До 65 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Скрининг."
      ],
      "earlierReviewIf": [
        "Аномальный скрининг/кровотечения."
      ],
      "switchTreatmentIf": [
        "CIN."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не прижигать эктопию «для профилактики» без показаний."
    ],
    "patientCounseling": [
      "Объяснить, что эктопия у молодых — вариант нормы.",
      "Важность скрининга."
    ],
    "specialPopulations": {
      "adolescents": [
        "Эктопия часто физиологична."
      ],
      "fertilityPlanning": [
        "Не влияет."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n87-0",
    "name": "Другие дисплазии",
    "icd": "N87.0",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие дисплазии (N87.0) — плоскоклеточное интраэпителиальное поражение шейки матки (дисплазия лёгкой/умеренной/тяжёлой степени).",
    "overview": {
      "quickTake": "Другие дисплазии: предрак шейки; ведение по ASCCP — наблюдение (CIN I) или эксцизия (CIN II/III).",
      "prevalence": "Зависит от охвата скринингом ВПЧ.",
      "riskLevel": "moderate",
      "practiceFocus": "Кольпоскопия + биопсия; исключение инвазивного рака."
    },
    "epidemiology": "Связан с ВПЧ высокого риска.",
    "etiology": [
      "Персистенция ВПЧ ВР (16, 18, 31, 33, 45)",
      "Иммуносупрессия",
      "Курение"
    ],
    "symptoms": [
      "Бессимптомно"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно, находка при скрининге."
      ],
      "alarm": [
        "Контактные кровотечения (исключить инвазию)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Другие дисплазии: подтверждение — кольпоскопия + биопсия; тактика по степени CIN (наблюдение или эксцизия).",
      "redFlags": [
        "Контактные кровотечения, подозрение на инвазию."
      ],
      "firstLineActions": [
        "Кольпоскопия с биопсией.",
        "При CIN II/III — эксцизия (КМЭ/LEEP)."
      ],
      "diagnosticMinimum": [
        "Цитология+ВПЧ, кольпоскопия, биопсия."
      ],
      "whenToEscalate": [
        "При CIN II/III, подозрении на инвазию."
      ],
      "clinicalPearls": [
        "CIN I часто регрессирует; CIN II/III требуют лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening & management",
        "documentType": "Guideline",
        "scope": "Ведение CIN.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Аномальный скрининг + кольпоскопические находки."
      ],
      "laboratory": [
        "Биопсия: CIN I/II/III."
      ],
      "imaging": [
        "Кольпоскопия; МРТ при подозрении на инвазию."
      ],
      "diagnosisConfirmedWhen": [
        "Гистология подтверждает CIN без инвазии."
      ],
      "diagnosisExcludedWhen": [
        "Инвазия стромы (C53)."
      ]
    },
    "severityStratification": {
      "title": "CIN",
      "tiers": [
        {
          "name": "CIN I",
          "criteria": [
            "Поражение нижней 1/3 эпителия."
          ],
          "clinicalMeaning": "Часто регрессирует.",
          "managementImpact": "Наблюдение (молодые)."
        },
        {
          "name": "CIN II/III",
          "criteria": [
            "Поражение ≥ 2/3 толщины."
          ],
          "clinicalMeaning": "Высокий риск прогрессии.",
          "managementImpact": "Эксцизия (КМЭ/LEEP)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Инвазивный рак (C53)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Биопсия (инвазия).",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      },
      {
        "condition": "CIN I vs II",
        "whyConfused": "Степень поражения.",
        "howToDistinguish": "Гистология.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг, кольпоскопия, биопсия."
      ],
      "confirmDiagnosis": [
        "Гистология CIN."
      ],
      "startTreatment": [
        "Наблюдение (CIN I) или эксцизия (CIN II/III)."
      ],
      "reassess": [
        "По краям резекции."
      ],
      "escalateWhen": [
        "Положительные края, инвазия."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при CIN I (молодые)."
      ],
      "surgical": [
        "Конизация (КМЭ/LEEP)."
      ],
      "guidelines": {
        "acog": "Эксцизия при CIN II/III.",
        "ru": "Исключение инвазии обязательно."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна; кольпоскопия.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "Кольпоскопия — основа."
      ]
    },
    "recommendations": [
      "ВПЧ-вакцинация, скрининг.",
      "Контроль после лечения."
    ],
    "prognosis": {
      "general": "Очень хороший при лечении CIN II/III.",
      "factors": [
        "Степень CIN",
        "Края резекции"
      ],
      "survival": "Предрак; излечим."
    },
    "followUp": {
      "frequency": "Кольпоскопия/скрининг 6-12 мес",
      "duration": "≥ 25 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль после эксцизии."
      ],
      "earlierReviewIf": [
        "Положительные края, кровотечения."
      ],
      "switchTreatmentIf": [
        "Обнаружена инвазия."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не оставлять CIN II/III без лечения."
    ],
    "patientCounseling": [
      "Предрак излечим.",
      "Важность контроля и ВПЧ-вакцинации."
    ],
    "specialPopulations": {
      "adolescents": [
        "CIN I — консервативно."
      ],
      "fertilityPlanning": [
        "Эксцизия предпочтительна перед гистерэктомией."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n87-1",
    "name": "Другие дисплазии",
    "icd": "N87.1",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие дисплазии (N87.1) — плоскоклеточное интраэпителиальное поражение шейки матки (дисплазия лёгкой/умеренной/тяжёлой степени).",
    "overview": {
      "quickTake": "Другие дисплазии: предрак шейки; ведение по ASCCP — наблюдение (CIN I) или эксцизия (CIN II/III).",
      "prevalence": "Зависит от охвата скринингом ВПЧ.",
      "riskLevel": "moderate",
      "practiceFocus": "Кольпоскопия + биопсия; исключение инвазивного рака."
    },
    "epidemiology": "Связан с ВПЧ высокого риска.",
    "etiology": [
      "Персистенция ВПЧ ВР (16, 18, 31, 33, 45)",
      "Иммуносупрессия",
      "Курение"
    ],
    "symptoms": [
      "Бессимптомно"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно, находка при скрининге."
      ],
      "alarm": [
        "Контактные кровотечения (исключить инвазию)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Другие дисплазии: подтверждение — кольпоскопия + биопсия; тактика по степени CIN (наблюдение или эксцизия).",
      "redFlags": [
        "Контактные кровотечения, подозрение на инвазию."
      ],
      "firstLineActions": [
        "Кольпоскопия с биопсией.",
        "При CIN II/III — эксцизия (КМЭ/LEEP)."
      ],
      "diagnosticMinimum": [
        "Цитология+ВПЧ, кольпоскопия, биопсия."
      ],
      "whenToEscalate": [
        "При CIN II/III, подозрении на инвазию."
      ],
      "clinicalPearls": [
        "CIN I часто регрессирует; CIN II/III требуют лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening & management",
        "documentType": "Guideline",
        "scope": "Ведение CIN.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Аномальный скрининг + кольпоскопические находки."
      ],
      "laboratory": [
        "Биопсия: CIN I/II/III."
      ],
      "imaging": [
        "Кольпоскопия; МРТ при подозрении на инвазию."
      ],
      "diagnosisConfirmedWhen": [
        "Гистология подтверждает CIN без инвазии."
      ],
      "diagnosisExcludedWhen": [
        "Инвазия стромы (C53)."
      ]
    },
    "severityStratification": {
      "title": "CIN",
      "tiers": [
        {
          "name": "CIN I",
          "criteria": [
            "Поражение нижней 1/3 эпителия."
          ],
          "clinicalMeaning": "Часто регрессирует.",
          "managementImpact": "Наблюдение (молодые)."
        },
        {
          "name": "CIN II/III",
          "criteria": [
            "Поражение ≥ 2/3 толщины."
          ],
          "clinicalMeaning": "Высокий риск прогрессии.",
          "managementImpact": "Эксцизия (КМЭ/LEEP)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Инвазивный рак (C53)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Биопсия (инвазия).",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      },
      {
        "condition": "CIN I vs II",
        "whyConfused": "Степень поражения.",
        "howToDistinguish": "Гистология.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг, кольпоскопия, биопсия."
      ],
      "confirmDiagnosis": [
        "Гистология CIN."
      ],
      "startTreatment": [
        "Наблюдение (CIN I) или эксцизия (CIN II/III)."
      ],
      "reassess": [
        "По краям резекции."
      ],
      "escalateWhen": [
        "Положительные края, инвазия."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при CIN I (молодые)."
      ],
      "surgical": [
        "Конизация (КМЭ/LEEP)."
      ],
      "guidelines": {
        "acog": "Эксцизия при CIN II/III.",
        "ru": "Исключение инвазии обязательно."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна; кольпоскопия.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "Кольпоскопия — основа."
      ]
    },
    "recommendations": [
      "ВПЧ-вакцинация, скрининг.",
      "Контроль после лечения."
    ],
    "prognosis": {
      "general": "Очень хороший при лечении CIN II/III.",
      "factors": [
        "Степень CIN",
        "Края резекции"
      ],
      "survival": "Предрак; излечим."
    },
    "followUp": {
      "frequency": "Кольпоскопия/скрининг 6-12 мес",
      "duration": "≥ 25 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль после эксцизии."
      ],
      "earlierReviewIf": [
        "Положительные края, кровотечения."
      ],
      "switchTreatmentIf": [
        "Обнаружена инвазия."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не оставлять CIN II/III без лечения."
    ],
    "patientCounseling": [
      "Предрак излечим.",
      "Важность контроля и ВПЧ-вакцинации."
    ],
    "specialPopulations": {
      "adolescents": [
        "CIN I — консервативно."
      ],
      "fertilityPlanning": [
        "Эксцизия предпочтительна перед гистерэктомией."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n87-2",
    "name": "Другие дисплазии",
    "icd": "N87.2",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие дисплазии (N87.2) — плоскоклеточное интраэпителиальное поражение шейки матки (дисплазия лёгкой/умеренной/тяжёлой степени).",
    "overview": {
      "quickTake": "Другие дисплазии: предрак шейки; ведение по ASCCP — наблюдение (CIN I) или эксцизия (CIN II/III).",
      "prevalence": "Зависит от охвата скринингом ВПЧ.",
      "riskLevel": "moderate",
      "practiceFocus": "Кольпоскопия + биопсия; исключение инвазивного рака."
    },
    "epidemiology": "Связан с ВПЧ высокого риска.",
    "etiology": [
      "Персистенция ВПЧ ВР (16, 18, 31, 33, 45)",
      "Иммуносупрессия",
      "Курение"
    ],
    "symptoms": [
      "Бессимптомно"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно, находка при скрининге."
      ],
      "alarm": [
        "Контактные кровотечения (исключить инвазию)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Другие дисплазии: подтверждение — кольпоскопия + биопсия; тактика по степени CIN (наблюдение или эксцизия).",
      "redFlags": [
        "Контактные кровотечения, подозрение на инвазию."
      ],
      "firstLineActions": [
        "Кольпоскопия с биопсией.",
        "При CIN II/III — эксцизия (КМЭ/LEEP)."
      ],
      "diagnosticMinimum": [
        "Цитология+ВПЧ, кольпоскопия, биопсия."
      ],
      "whenToEscalate": [
        "При CIN II/III, подозрении на инвазию."
      ],
      "clinicalPearls": [
        "CIN I часто регрессирует; CIN II/III требуют лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening & management",
        "documentType": "Guideline",
        "scope": "Ведение CIN.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Аномальный скрининг + кольпоскопические находки."
      ],
      "laboratory": [
        "Биопсия: CIN I/II/III."
      ],
      "imaging": [
        "Кольпоскопия; МРТ при подозрении на инвазию."
      ],
      "diagnosisConfirmedWhen": [
        "Гистология подтверждает CIN без инвазии."
      ],
      "diagnosisExcludedWhen": [
        "Инвазия стромы (C53)."
      ]
    },
    "severityStratification": {
      "title": "CIN",
      "tiers": [
        {
          "name": "CIN I",
          "criteria": [
            "Поражение нижней 1/3 эпителия."
          ],
          "clinicalMeaning": "Часто регрессирует.",
          "managementImpact": "Наблюдение (молодые)."
        },
        {
          "name": "CIN II/III",
          "criteria": [
            "Поражение ≥ 2/3 толщины."
          ],
          "clinicalMeaning": "Высокий риск прогрессии.",
          "managementImpact": "Эксцизия (КМЭ/LEEP)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Инвазивный рак (C53)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Биопсия (инвазия).",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      },
      {
        "condition": "CIN I vs II",
        "whyConfused": "Степень поражения.",
        "howToDistinguish": "Гистология.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг, кольпоскопия, биопсия."
      ],
      "confirmDiagnosis": [
        "Гистология CIN."
      ],
      "startTreatment": [
        "Наблюдение (CIN I) или эксцизия (CIN II/III)."
      ],
      "reassess": [
        "По краям резекции."
      ],
      "escalateWhen": [
        "Положительные края, инвазия."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при CIN I (молодые)."
      ],
      "surgical": [
        "Конизация (КМЭ/LEEP)."
      ],
      "guidelines": {
        "acog": "Эксцизия при CIN II/III.",
        "ru": "Исключение инвазии обязательно."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна; кольпоскопия.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "Кольпоскопия — основа."
      ]
    },
    "recommendations": [
      "ВПЧ-вакцинация, скрининг.",
      "Контроль после лечения."
    ],
    "prognosis": {
      "general": "Очень хороший при лечении CIN II/III.",
      "factors": [
        "Степень CIN",
        "Края резекции"
      ],
      "survival": "Предрак; излечим."
    },
    "followUp": {
      "frequency": "Кольпоскопия/скрининг 6-12 мес",
      "duration": "≥ 25 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль после эксцизии."
      ],
      "earlierReviewIf": [
        "Положительные края, кровотечения."
      ],
      "switchTreatmentIf": [
        "Обнаружена инвазия."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не оставлять CIN II/III без лечения."
    ],
    "patientCounseling": [
      "Предрак излечим.",
      "Важность контроля и ВПЧ-вакцинации."
    ],
    "specialPopulations": {
      "adolescents": [
        "CIN I — консервативно."
      ],
      "fertilityPlanning": [
        "Эксцизия предпочтительна перед гистерэктомией."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n87-3",
    "name": "Другие дисплазии",
    "icd": "N87.3",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие дисплазии (N87.3) — плоскоклеточное интраэпителиальное поражение шейки матки (дисплазия лёгкой/умеренной/тяжёлой степени).",
    "overview": {
      "quickTake": "Другие дисплазии: предрак шейки; ведение по ASCCP — наблюдение (CIN I) или эксцизия (CIN II/III).",
      "prevalence": "Зависит от охвата скринингом ВПЧ.",
      "riskLevel": "moderate",
      "practiceFocus": "Кольпоскопия + биопсия; исключение инвазивного рака."
    },
    "epidemiology": "Связан с ВПЧ высокого риска.",
    "etiology": [
      "Персистенция ВПЧ ВР (16, 18, 31, 33, 45)",
      "Иммуносупрессия",
      "Курение"
    ],
    "symptoms": [
      "Бессимптомно"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно, находка при скрининге."
      ],
      "alarm": [
        "Контактные кровотечения (исключить инвазию)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Другие дисплазии: подтверждение — кольпоскопия + биопсия; тактика по степени CIN (наблюдение или эксцизия).",
      "redFlags": [
        "Контактные кровотечения, подозрение на инвазию."
      ],
      "firstLineActions": [
        "Кольпоскопия с биопсией.",
        "При CIN II/III — эксцизия (КМЭ/LEEP)."
      ],
      "diagnosticMinimum": [
        "Цитология+ВПЧ, кольпоскопия, биопсия."
      ],
      "whenToEscalate": [
        "При CIN II/III, подозрении на инвазию."
      ],
      "clinicalPearls": [
        "CIN I часто регрессирует; CIN II/III требуют лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening & management",
        "documentType": "Guideline",
        "scope": "Ведение CIN.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Аномальный скрининг + кольпоскопические находки."
      ],
      "laboratory": [
        "Биопсия: CIN I/II/III."
      ],
      "imaging": [
        "Кольпоскопия; МРТ при подозрении на инвазию."
      ],
      "diagnosisConfirmedWhen": [
        "Гистология подтверждает CIN без инвазии."
      ],
      "diagnosisExcludedWhen": [
        "Инвазия стромы (C53)."
      ]
    },
    "severityStratification": {
      "title": "CIN",
      "tiers": [
        {
          "name": "CIN I",
          "criteria": [
            "Поражение нижней 1/3 эпителия."
          ],
          "clinicalMeaning": "Часто регрессирует.",
          "managementImpact": "Наблюдение (молодые)."
        },
        {
          "name": "CIN II/III",
          "criteria": [
            "Поражение ≥ 2/3 толщины."
          ],
          "clinicalMeaning": "Высокий риск прогрессии.",
          "managementImpact": "Эксцизия (КМЭ/LEEP)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Инвазивный рак (C53)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Биопсия (инвазия).",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      },
      {
        "condition": "CIN I vs II",
        "whyConfused": "Степень поражения.",
        "howToDistinguish": "Гистология.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг, кольпоскопия, биопсия."
      ],
      "confirmDiagnosis": [
        "Гистология CIN."
      ],
      "startTreatment": [
        "Наблюдение (CIN I) или эксцизия (CIN II/III)."
      ],
      "reassess": [
        "По краям резекции."
      ],
      "escalateWhen": [
        "Положительные края, инвазия."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при CIN I (молодые)."
      ],
      "surgical": [
        "Конизация (КМЭ/LEEP)."
      ],
      "guidelines": {
        "acog": "Эксцизия при CIN II/III.",
        "ru": "Исключение инвазии обязательно."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна; кольпоскопия.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "Кольпоскопия — основа."
      ]
    },
    "recommendations": [
      "ВПЧ-вакцинация, скрининг.",
      "Контроль после лечения."
    ],
    "prognosis": {
      "general": "Очень хороший при лечении CIN II/III.",
      "factors": [
        "Степень CIN",
        "Края резекции"
      ],
      "survival": "Предрак; излечим."
    },
    "followUp": {
      "frequency": "Кольпоскопия/скрининг 6-12 мес",
      "duration": "≥ 25 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль после эксцизии."
      ],
      "earlierReviewIf": [
        "Положительные края, кровотечения."
      ],
      "switchTreatmentIf": [
        "Обнаружена инвазия."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не оставлять CIN II/III без лечения."
    ],
    "patientCounseling": [
      "Предрак излечим.",
      "Важность контроля и ВПЧ-вакцинации."
    ],
    "specialPopulations": {
      "adolescents": [
        "CIN I — консервативно."
      ],
      "fertilityPlanning": [
        "Эксцизия предпочтительна перед гистерэктомией."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  },
  {
    "id": "stub-n87-4",
    "name": "Другие дисплазии",
    "icd": "N87.4",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие дисплазии (N87.4) — плоскоклеточное интраэпителиальное поражение шейки матки (дисплазия лёгкой/умеренной/тяжёлой степени).",
    "overview": {
      "quickTake": "Другие дисплазии: предрак шейки; ведение по ASCCP — наблюдение (CIN I) или эксцизия (CIN II/III).",
      "prevalence": "Зависит от охвата скринингом ВПЧ.",
      "riskLevel": "moderate",
      "practiceFocus": "Кольпоскопия + биопсия; исключение инвазивного рака."
    },
    "epidemiology": "Связан с ВПЧ высокого риска.",
    "etiology": [
      "Персистенция ВПЧ ВР (16, 18, 31, 33, 45)",
      "Иммуносупрессия",
      "Курение"
    ],
    "symptoms": [
      "Бессимптомно"
    ],
    "symptomGroups": {
      "typical": [
        "Бессимптомно, находка при скрининге."
      ],
      "alarm": [
        "Контактные кровотечения (исключить инвазию)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Другие дисплазии: подтверждение — кольпоскопия + биопсия; тактика по степени CIN (наблюдение или эксцизия).",
      "redFlags": [
        "Контактные кровотечения, подозрение на инвазию."
      ],
      "firstLineActions": [
        "Кольпоскопия с биопсией.",
        "При CIN II/III — эксцизия (КМЭ/LEEP)."
      ],
      "diagnosticMinimum": [
        "Цитология+ВПЧ, кольпоскопия, биопсия."
      ],
      "whenToEscalate": [
        "При CIN II/III, подозрении на инвазию."
      ],
      "clinicalPearls": [
        "CIN I часто регрессирует; CIN II/III требуют лечения."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ASCCP",
        "title": "Cervical screening & management",
        "documentType": "Guideline",
        "scope": "Ведение CIN.",
        "status": "latest available active guideline",
        "usedFor": [
          "screening",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Аномальный скрининг + кольпоскопические находки."
      ],
      "laboratory": [
        "Биопсия: CIN I/II/III."
      ],
      "imaging": [
        "Кольпоскопия; МРТ при подозрении на инвазию."
      ],
      "diagnosisConfirmedWhen": [
        "Гистология подтверждает CIN без инвазии."
      ],
      "diagnosisExcludedWhen": [
        "Инвазия стромы (C53)."
      ]
    },
    "severityStratification": {
      "title": "CIN",
      "tiers": [
        {
          "name": "CIN I",
          "criteria": [
            "Поражение нижней 1/3 эпителия."
          ],
          "clinicalMeaning": "Часто регрессирует.",
          "managementImpact": "Наблюдение (молодые)."
        },
        {
          "name": "CIN II/III",
          "criteria": [
            "Поражение ≥ 2/3 толщины."
          ],
          "clinicalMeaning": "Высокий риск прогрессии.",
          "managementImpact": "Эксцизия (КМЭ/LEEP)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Инвазивный рак (C53)",
        "whyConfused": "Очаг на шейке.",
        "howToDistinguish": "Биопсия (инвазия).",
        "testsIfNeeded": [
          "биопсия",
          "МРТ"
        ]
      },
      {
        "condition": "CIN I vs II",
        "whyConfused": "Степень поражения.",
        "howToDistinguish": "Гистология.",
        "testsIfNeeded": [
          "биопсия"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Скрининг, кольпоскопия, биопсия."
      ],
      "confirmDiagnosis": [
        "Гистология CIN."
      ],
      "startTreatment": [
        "Наблюдение (CIN I) или эксцизия (CIN II/III)."
      ],
      "reassess": [
        "По краям резекции."
      ],
      "escalateWhen": [
        "Положительные края, инвазия."
      ],
      "referWhen": [
        "К гинекологу-онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение при CIN I (молодые)."
      ],
      "surgical": [
        "Конизация (КМЭ/LEEP)."
      ],
      "guidelines": {
        "acog": "Эксцизия при CIN II/III.",
        "ru": "Исключение инвазии обязательно."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "—",
          "indications": [
            "Не информативно"
          ],
          "preparation": "—"
        }
      ],
      "findings": [
        {
          "location": "шейка",
          "description": "Не видна; кольпоскопия.",
          "normal": "Норма.",
          "pathology": "Не визуализируется.",
          "clinicalSignificance": "Кольпоскопия, а не УЗИ."
        }
      ],
      "imagingTips": [
        "Кольпоскопия — основа."
      ]
    },
    "recommendations": [
      "ВПЧ-вакцинация, скрининг.",
      "Контроль после лечения."
    ],
    "prognosis": {
      "general": "Очень хороший при лечении CIN II/III.",
      "factors": [
        "Степень CIN",
        "Края резекции"
      ],
      "survival": "Предрак; излечим."
    },
    "followUp": {
      "frequency": "Кольпоскопия/скрининг 6-12 мес",
      "duration": "≥ 25 лет",
      "tests": [
        "Цитология+ВПЧ",
        "кольпоскопия"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль после эксцизии."
      ],
      "earlierReviewIf": [
        "Положительные края, кровотечения."
      ],
      "switchTreatmentIf": [
        "Обнаружена инвазия."
      ],
      "urgentReassessmentIf": [
        "Контактные кровотечения."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не оставлять CIN II/III без лечения."
    ],
    "patientCounseling": [
      "Предрак излечим.",
      "Важность контроля и ВПЧ-вакцинации."
    ],
    "specialPopulations": {
      "adolescents": [
        "CIN I — консервативно."
      ],
      "fertilityPlanning": [
        "Эксцизия предпочтительна перед гистерэктомией."
      ]
    },
    "editorialStatus": "needs-source-review",
    "sourceAware": {
      "reviewedBy": null,
      "reviewDate": null,
      "needsReview": true,
      "autoGenerated": true
    }
  }
];

export default chunk;
