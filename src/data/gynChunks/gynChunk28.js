const chunk = [
  {
    "id": "stub-n87-5",
    "name": "Другие дисплазии",
    "icd": "N87.5",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие дисплазии (N87.5) — плоскоклеточное интраэпителиальное поражение шейки матки (дисплазия лёгкой/умеренной/тяжёлой степени).",
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
    "id": "stub-n87-6",
    "name": "Другие дисплазии",
    "icd": "N87.6",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие дисплазии (N87.6) — плоскоклеточное интраэпителиальное поражение шейки матки (дисплазия лёгкой/умеренной/тяжёлой степени).",
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
    "id": "stub-n87-7",
    "name": "Другие дисплазии",
    "icd": "N87.7",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие дисплазии (N87.7) — плоскоклеточное интраэпителиальное поражение шейки матки (дисплазия лёгкой/умеренной/тяжёлой степени).",
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
    "id": "stub-n87-8",
    "name": "Другие дисплазии",
    "icd": "N87.8",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие дисплазии (N87.8) — плоскоклеточное интраэпителиальное поражение шейки матки (дисплазия лёгкой/умеренной/тяжёлой степени).",
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
    "id": "stub-n87-9",
    "name": "Другие дисплазии",
    "icd": "N87.9",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие дисплазии (N87.9) — плоскоклеточное интраэпителиальное поражение шейки матки (дисплазия лёгкой/умеренной/тяжёлой степени).",
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
    "id": "stub-n88",
    "name": "Другие болезни матки",
    "icd": "N88",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие болезни матки (N88) — Состояние шейки матки.",
    "overview": {
      "quickTake": "Другие болезни матки (N88): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n88-1",
    "name": "Другие болезни матки",
    "icd": "N88.1",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие болезни матки (N88.1) — Состояние шейки матки.",
    "overview": {
      "quickTake": "Другие болезни матки (N88.1): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n88-3",
    "name": "Другие болезни матки",
    "icd": "N88.3",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие болезни матки (N88.3) — Состояние шейки матки.",
    "overview": {
      "quickTake": "Другие болезни матки (N88.3): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n88-4",
    "name": "Другие болезни матки",
    "icd": "N88.4",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие болезни матки (N88.4) — Состояние шейки матки.",
    "overview": {
      "quickTake": "Другие болезни матки (N88.4): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n88-5",
    "name": "Другие болезни матки",
    "icd": "N88.5",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие болезни матки (N88.5) — Состояние шейки матки.",
    "overview": {
      "quickTake": "Другие болезни матки (N88.5): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n88-6",
    "name": "Другие болезни матки",
    "icd": "N88.6",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие болезни матки (N88.6) — Состояние шейки матки.",
    "overview": {
      "quickTake": "Другие болезни матки (N88.6): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n88-7",
    "name": "Другие болезни матки",
    "icd": "N88.7",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие болезни матки (N88.7) — Состояние шейки матки.",
    "overview": {
      "quickTake": "Другие болезни матки (N88.7): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n88-8",
    "name": "Другие болезни матки",
    "icd": "N88.8",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие болезни матки (N88.8) — Состояние шейки матки.",
    "overview": {
      "quickTake": "Другие болезни матки (N88.8): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n88-9",
    "name": "Другие болезни матки",
    "icd": "N88.9",
    "subtitle": "Гинекология",
    "icon": "uterus",
    "definition": "Другие болезни матки (N88.9) — Состояние шейки матки.",
    "overview": {
      "quickTake": "Другие болезни матки (N88.9): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n89",
    "name": "Другие болезни матки и шейки",
    "icd": "N89",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Другие болезни матки и шейки (N89) — Состояние влагалища.",
    "overview": {
      "quickTake": "Другие болезни матки и шейки (N89): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки и шейки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n89-1",
    "name": "Другие болезни матки и шейки",
    "icd": "N89.1",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Другие болезни матки и шейки (N89.1) — Состояние влагалища.",
    "overview": {
      "quickTake": "Другие болезни матки и шейки (N89.1): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки и шейки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n89-2",
    "name": "Другие болезни матки и шейки",
    "icd": "N89.2",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Другие болезни матки и шейки (N89.2) — Состояние влагалища.",
    "overview": {
      "quickTake": "Другие болезни матки и шейки (N89.2): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки и шейки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n89-4",
    "name": "Другие болезни матки и шейки",
    "icd": "N89.4",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Другие болезни матки и шейки (N89.4) — Состояние влагалища.",
    "overview": {
      "quickTake": "Другие болезни матки и шейки (N89.4): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки и шейки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n89-5",
    "name": "Другие болезни матки и шейки",
    "icd": "N89.5",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Другие болезни матки и шейки (N89.5) — Состояние влагалища.",
    "overview": {
      "quickTake": "Другие болезни матки и шейки (N89.5): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки и шейки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n89-6",
    "name": "Другие болезни матки и шейки",
    "icd": "N89.6",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Другие болезни матки и шейки (N89.6) — Состояние влагалища.",
    "overview": {
      "quickTake": "Другие болезни матки и шейки (N89.6): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки и шейки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n89-7",
    "name": "Другие болезни матки и шейки",
    "icd": "N89.7",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Другие болезни матки и шейки (N89.7) — Состояние влагалища.",
    "overview": {
      "quickTake": "Другие болезни матки и шейки (N89.7): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки и шейки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n89-9",
    "name": "Другие болезни матки и шейки",
    "icd": "N89.9",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Другие болезни матки и шейки (N89.9) — Состояние влагалища.",
    "overview": {
      "quickTake": "Другие болезни матки и шейки (N89.9): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни матки и шейки: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n90",
    "name": "Нарушения менструации",
    "icd": "N90",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Нарушения менструации (N90) — Состояние вульвы/наружных половых органов.",
    "overview": {
      "quickTake": "Нарушения менструации (N90): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Нарушения менструации: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n90-3",
    "name": "Нарушения менструации",
    "icd": "N90.3",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Нарушения менструации (N90.3) — Состояние вульвы/наружных половых органов.",
    "overview": {
      "quickTake": "Нарушения менструации (N90.3): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Нарушения менструации: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n90-4",
    "name": "Нарушения менструации",
    "icd": "N90.4",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Нарушения менструации (N90.4) — Состояние вульвы/наружных половых органов.",
    "overview": {
      "quickTake": "Нарушения менструации (N90.4): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Нарушения менструации: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n90-5",
    "name": "Нарушения менструации",
    "icd": "N90.5",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Нарушения менструации (N90.5) — Состояние вульвы/наружных половых органов.",
    "overview": {
      "quickTake": "Нарушения менструации (N90.5): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Нарушения менструации: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n90-6",
    "name": "Нарушения менструации",
    "icd": "N90.6",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Нарушения менструации (N90.6) — Состояние вульвы/наружных половых органов.",
    "overview": {
      "quickTake": "Нарушения менструации (N90.6): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Нарушения менструации: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n90-7",
    "name": "Нарушения менструации",
    "icd": "N90.7",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Нарушения менструации (N90.7) — Состояние вульвы/наружных половых органов.",
    "overview": {
      "quickTake": "Нарушения менструации (N90.7): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Нарушения менструации: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n90-9",
    "name": "Нарушения менструации",
    "icd": "N90.9",
    "subtitle": "Гинекология",
    "icon": "vulva",
    "definition": "Нарушения менструации (N90.9) — Состояние вульвы/наружных половых органов.",
    "overview": {
      "quickTake": "Нарушения менструации (N90.9): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Нарушения менструации: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n91-0",
    "name": "Отсутствие менструаций",
    "icd": "N91.0",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Отсутствие менструаций (N91.0) — нарушение менструального цикла (аменорея/олигоменорея/гипоменорея).",
    "overview": {
      "quickTake": "Отсутствие менструаций: нарушение цикла; исключите беременность, гипоталамическую/гипофизарную/яичниковую патологию.",
      "prevalence": "Часто.",
      "riskLevel": "low",
      "practiceFocus": "Алгоритм: беременность → пролактин/ТТГ → гипофиз → яичники → анатомия."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Беременность",
      "Гипоталамическая (стресс, вес, спорт)",
      "Гиперпролактинемия",
      "Синдром истощения яичников",
      "Анатомические (синехии, заращение)"
    ],
    "symptoms": [
      "Отсутствие/редкие менструации",
      "Бесплодие",
      "Приливы (при недостатке эстрогенов)"
    ],
    "symptomGroups": {
      "typical": [
        "Нарушение ритма менструаций."
      ],
      "alarm": [
        "Приливы, остеопороз при гипоэстрогении; головная боль (пролактинома)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Отсутствие менструаций: исключите беременность и органическую патологию; алгоритм по уровню поражения оси гипоталамус-гипофиз-яичники.",
      "redFlags": [
        "Приливы/остеопороз, головная боль, галакторея."
      ],
      "firstLineActions": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, УЗИ яичников.",
        "Исключение анатомии (гипоплазия/синехии)."
      ],
      "diagnosticMinimum": [
        "ХГЧ, гормональный профиль, УЗИ."
      ],
      "whenToEscalate": [
        "При органической патологии (опухоль гипофиза, синехии)."
      ],
      "clinicalPearls": [
        "Сначала исключите беременность — самая частая причина аменореи."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESHRE",
        "title": "Female infertility / menstrual disorders",
        "documentType": "Guideline",
        "scope": "Диагностика нарушений цикла.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Отсутствие/редкие менструации при исключённой беременности."
      ],
      "laboratory": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, эстрадиол, AMH."
      ],
      "imaging": [
        "УЗИ яичников/матки, МРТ гипофиза при пролактиноме."
      ],
      "diagnosisConfirmedWhen": [
        "Алгоритм исключил беременность и выявил уровень поражения."
      ],
      "diagnosisExcludedWhen": [
        "Беременность или нормальный цикл при другой причине."
      ]
    },
    "severityStratification": {
      "title": "По уровню",
      "tiers": [
        {
          "name": "Гипоталамическая/функциональная",
          "criteria": [
            "Нормальные гормоны, провоцирующий фактор."
          ],
          "clinicalMeaning": "Коррекция образа жизни.",
          "managementImpact": "Устранение причины, КОК при необходимости."
        },
        {
          "name": "Органическая",
          "criteria": [
            "Опухоль гипофиза, синехии, недостаточность яичников."
          ],
          "clinicalMeaning": "Специфическое лечение.",
          "managementImpact": "По причине (хирургия/ЗГТ)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Беременность",
        "whyConfused": "Аменорея.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      },
      {
        "condition": "Синдром поликистозных яичников",
        "whyConfused": "Олигоменорея.",
        "howToDistinguish": "УЗИ/гормоны (критерии Роттердама).",
        "testsIfNeeded": [
          "УЗИ",
          "гормоны"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "ХГЧ, гормоны, УЗИ."
      ],
      "confirmDiagnosis": [
        "Алгоритм по уровню поражения."
      ],
      "startTreatment": [
        "Устранение причины; циклическая терапия при необходимости."
      ],
      "reassess": [
        "Восстановление цикла."
      ],
      "escalateWhen": [
        "Опухоль/синехии/недостаточность яичников."
      ],
      "referWhen": [
        "К эндокринологу/репродуктологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Коррекция веса/стресса, циклические КОК."
      ],
      "surgical": [
        "Резекция синехий, удаление пролактиномы."
      ],
      "guidelines": {
        "eshre": "Исключение беременности — первый шаг.",
        "ru": "Поиск уровня поражения оси."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Яичники/матка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "яичники/матка",
          "description": "Мультифолликулярные яичники, гипоплазия эндометрия, синехии.",
          "normal": "Норма.",
          "pathology": "Поликистозные яичники, истончённый эндометрий.",
          "clinicalSignificance": "Уточняет причину."
        }
      ],
      "imagingTips": [
        "УЗИ — для оценки яичников и эндометрия."
      ]
    },
    "recommendations": [
      "Исключение беременности в первую очередь.",
      "Коррекция образа жизни."
    ],
    "prognosis": {
      "general": "Зависит от причины; функциональные — хорошо.",
      "factors": [
        "Причина",
        "Возраст"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "При восстановлении цикла",
      "duration": "По ситуации",
      "tests": [
        "Гормоны",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль цикла."
      ],
      "earlierReviewIf": [
        "Нет восстановления, симптомы гипоэстрогении."
      ],
      "switchTreatmentIf": [
        "Органическая причина."
      ],
      "urgentReassessmentIf": [
        "Головная боль/галакторея (пролактинома)."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не начинать ЗГТ до исключения противопоказаний.",
      "Не игнорировать беременность как причину."
    ],
    "patientCounseling": [
      "Объяснить алгоритм обследования.",
      "Важность исключения беременности."
    ],
    "specialPopulations": {
      "adolescents": [
        "Первичная аменорея → исключить анатомию/генетику."
      ],
      "fertilityPlanning": [
        "Нарушение цикла часто = ановуляция/бесплодие."
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
    "id": "stub-n91-1",
    "name": "Отсутствие менструаций",
    "icd": "N91.1",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Отсутствие менструаций (N91.1) — нарушение менструального цикла (аменорея/олигоменорея/гипоменорея).",
    "overview": {
      "quickTake": "Отсутствие менструаций: нарушение цикла; исключите беременность, гипоталамическую/гипофизарную/яичниковую патологию.",
      "prevalence": "Часто.",
      "riskLevel": "low",
      "practiceFocus": "Алгоритм: беременность → пролактин/ТТГ → гипофиз → яичники → анатомия."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Беременность",
      "Гипоталамическая (стресс, вес, спорт)",
      "Гиперпролактинемия",
      "Синдром истощения яичников",
      "Анатомические (синехии, заращение)"
    ],
    "symptoms": [
      "Отсутствие/редкие менструации",
      "Бесплодие",
      "Приливы (при недостатке эстрогенов)"
    ],
    "symptomGroups": {
      "typical": [
        "Нарушение ритма менструаций."
      ],
      "alarm": [
        "Приливы, остеопороз при гипоэстрогении; головная боль (пролактинома)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Отсутствие менструаций: исключите беременность и органическую патологию; алгоритм по уровню поражения оси гипоталамус-гипофиз-яичники.",
      "redFlags": [
        "Приливы/остеопороз, головная боль, галакторея."
      ],
      "firstLineActions": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, УЗИ яичников.",
        "Исключение анатомии (гипоплазия/синехии)."
      ],
      "diagnosticMinimum": [
        "ХГЧ, гормональный профиль, УЗИ."
      ],
      "whenToEscalate": [
        "При органической патологии (опухоль гипофиза, синехии)."
      ],
      "clinicalPearls": [
        "Сначала исключите беременность — самая частая причина аменореи."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESHRE",
        "title": "Female infertility / menstrual disorders",
        "documentType": "Guideline",
        "scope": "Диагностика нарушений цикла.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Отсутствие/редкие менструации при исключённой беременности."
      ],
      "laboratory": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, эстрадиол, AMH."
      ],
      "imaging": [
        "УЗИ яичников/матки, МРТ гипофиза при пролактиноме."
      ],
      "diagnosisConfirmedWhen": [
        "Алгоритм исключил беременность и выявил уровень поражения."
      ],
      "diagnosisExcludedWhen": [
        "Беременность или нормальный цикл при другой причине."
      ]
    },
    "severityStratification": {
      "title": "По уровню",
      "tiers": [
        {
          "name": "Гипоталамическая/функциональная",
          "criteria": [
            "Нормальные гормоны, провоцирующий фактор."
          ],
          "clinicalMeaning": "Коррекция образа жизни.",
          "managementImpact": "Устранение причины, КОК при необходимости."
        },
        {
          "name": "Органическая",
          "criteria": [
            "Опухоль гипофиза, синехии, недостаточность яичников."
          ],
          "clinicalMeaning": "Специфическое лечение.",
          "managementImpact": "По причине (хирургия/ЗГТ)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Беременность",
        "whyConfused": "Аменорея.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      },
      {
        "condition": "Синдром поликистозных яичников",
        "whyConfused": "Олигоменорея.",
        "howToDistinguish": "УЗИ/гормоны (критерии Роттердама).",
        "testsIfNeeded": [
          "УЗИ",
          "гормоны"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "ХГЧ, гормоны, УЗИ."
      ],
      "confirmDiagnosis": [
        "Алгоритм по уровню поражения."
      ],
      "startTreatment": [
        "Устранение причины; циклическая терапия при необходимости."
      ],
      "reassess": [
        "Восстановление цикла."
      ],
      "escalateWhen": [
        "Опухоль/синехии/недостаточность яичников."
      ],
      "referWhen": [
        "К эндокринологу/репродуктологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Коррекция веса/стресса, циклические КОК."
      ],
      "surgical": [
        "Резекция синехий, удаление пролактиномы."
      ],
      "guidelines": {
        "eshre": "Исключение беременности — первый шаг.",
        "ru": "Поиск уровня поражения оси."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Яичники/матка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "яичники/матка",
          "description": "Мультифолликулярные яичники, гипоплазия эндометрия, синехии.",
          "normal": "Норма.",
          "pathology": "Поликистозные яичники, истончённый эндометрий.",
          "clinicalSignificance": "Уточняет причину."
        }
      ],
      "imagingTips": [
        "УЗИ — для оценки яичников и эндометрия."
      ]
    },
    "recommendations": [
      "Исключение беременности в первую очередь.",
      "Коррекция образа жизни."
    ],
    "prognosis": {
      "general": "Зависит от причины; функциональные — хорошо.",
      "factors": [
        "Причина",
        "Возраст"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "При восстановлении цикла",
      "duration": "По ситуации",
      "tests": [
        "Гормоны",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль цикла."
      ],
      "earlierReviewIf": [
        "Нет восстановления, симптомы гипоэстрогении."
      ],
      "switchTreatmentIf": [
        "Органическая причина."
      ],
      "urgentReassessmentIf": [
        "Головная боль/галакторея (пролактинома)."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не начинать ЗГТ до исключения противопоказаний.",
      "Не игнорировать беременность как причину."
    ],
    "patientCounseling": [
      "Объяснить алгоритм обследования.",
      "Важность исключения беременности."
    ],
    "specialPopulations": {
      "adolescents": [
        "Первичная аменорея → исключить анатомию/генетику."
      ],
      "fertilityPlanning": [
        "Нарушение цикла часто = ановуляция/бесплодие."
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
    "id": "stub-n91-2",
    "name": "Отсутствие менструаций",
    "icd": "N91.2",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Отсутствие менструаций (N91.2) — нарушение менструального цикла (аменорея/олигоменорея/гипоменорея).",
    "overview": {
      "quickTake": "Отсутствие менструаций: нарушение цикла; исключите беременность, гипоталамическую/гипофизарную/яичниковую патологию.",
      "prevalence": "Часто.",
      "riskLevel": "low",
      "practiceFocus": "Алгоритм: беременность → пролактин/ТТГ → гипофиз → яичники → анатомия."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Беременность",
      "Гипоталамическая (стресс, вес, спорт)",
      "Гиперпролактинемия",
      "Синдром истощения яичников",
      "Анатомические (синехии, заращение)"
    ],
    "symptoms": [
      "Отсутствие/редкие менструации",
      "Бесплодие",
      "Приливы (при недостатке эстрогенов)"
    ],
    "symptomGroups": {
      "typical": [
        "Нарушение ритма менструаций."
      ],
      "alarm": [
        "Приливы, остеопороз при гипоэстрогении; головная боль (пролактинома)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Отсутствие менструаций: исключите беременность и органическую патологию; алгоритм по уровню поражения оси гипоталамус-гипофиз-яичники.",
      "redFlags": [
        "Приливы/остеопороз, головная боль, галакторея."
      ],
      "firstLineActions": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, УЗИ яичников.",
        "Исключение анатомии (гипоплазия/синехии)."
      ],
      "diagnosticMinimum": [
        "ХГЧ, гормональный профиль, УЗИ."
      ],
      "whenToEscalate": [
        "При органической патологии (опухоль гипофиза, синехии)."
      ],
      "clinicalPearls": [
        "Сначала исключите беременность — самая частая причина аменореи."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESHRE",
        "title": "Female infertility / menstrual disorders",
        "documentType": "Guideline",
        "scope": "Диагностика нарушений цикла.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Отсутствие/редкие менструации при исключённой беременности."
      ],
      "laboratory": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, эстрадиол, AMH."
      ],
      "imaging": [
        "УЗИ яичников/матки, МРТ гипофиза при пролактиноме."
      ],
      "diagnosisConfirmedWhen": [
        "Алгоритм исключил беременность и выявил уровень поражения."
      ],
      "diagnosisExcludedWhen": [
        "Беременность или нормальный цикл при другой причине."
      ]
    },
    "severityStratification": {
      "title": "По уровню",
      "tiers": [
        {
          "name": "Гипоталамическая/функциональная",
          "criteria": [
            "Нормальные гормоны, провоцирующий фактор."
          ],
          "clinicalMeaning": "Коррекция образа жизни.",
          "managementImpact": "Устранение причины, КОК при необходимости."
        },
        {
          "name": "Органическая",
          "criteria": [
            "Опухоль гипофиза, синехии, недостаточность яичников."
          ],
          "clinicalMeaning": "Специфическое лечение.",
          "managementImpact": "По причине (хирургия/ЗГТ)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Беременность",
        "whyConfused": "Аменорея.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      },
      {
        "condition": "Синдром поликистозных яичников",
        "whyConfused": "Олигоменорея.",
        "howToDistinguish": "УЗИ/гормоны (критерии Роттердама).",
        "testsIfNeeded": [
          "УЗИ",
          "гормоны"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "ХГЧ, гормоны, УЗИ."
      ],
      "confirmDiagnosis": [
        "Алгоритм по уровню поражения."
      ],
      "startTreatment": [
        "Устранение причины; циклическая терапия при необходимости."
      ],
      "reassess": [
        "Восстановление цикла."
      ],
      "escalateWhen": [
        "Опухоль/синехии/недостаточность яичников."
      ],
      "referWhen": [
        "К эндокринологу/репродуктологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Коррекция веса/стресса, циклические КОК."
      ],
      "surgical": [
        "Резекция синехий, удаление пролактиномы."
      ],
      "guidelines": {
        "eshre": "Исключение беременности — первый шаг.",
        "ru": "Поиск уровня поражения оси."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Яичники/матка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "яичники/матка",
          "description": "Мультифолликулярные яичники, гипоплазия эндометрия, синехии.",
          "normal": "Норма.",
          "pathology": "Поликистозные яичники, истончённый эндометрий.",
          "clinicalSignificance": "Уточняет причину."
        }
      ],
      "imagingTips": [
        "УЗИ — для оценки яичников и эндометрия."
      ]
    },
    "recommendations": [
      "Исключение беременности в первую очередь.",
      "Коррекция образа жизни."
    ],
    "prognosis": {
      "general": "Зависит от причины; функциональные — хорошо.",
      "factors": [
        "Причина",
        "Возраст"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "При восстановлении цикла",
      "duration": "По ситуации",
      "tests": [
        "Гормоны",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль цикла."
      ],
      "earlierReviewIf": [
        "Нет восстановления, симптомы гипоэстрогении."
      ],
      "switchTreatmentIf": [
        "Органическая причина."
      ],
      "urgentReassessmentIf": [
        "Головная боль/галакторея (пролактинома)."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не начинать ЗГТ до исключения противопоказаний.",
      "Не игнорировать беременность как причину."
    ],
    "patientCounseling": [
      "Объяснить алгоритм обследования.",
      "Важность исключения беременности."
    ],
    "specialPopulations": {
      "adolescents": [
        "Первичная аменорея → исключить анатомию/генетику."
      ],
      "fertilityPlanning": [
        "Нарушение цикла часто = ановуляция/бесплодие."
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
    "id": "stub-n91-3",
    "name": "Отсутствие менструаций",
    "icd": "N91.3",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Отсутствие менструаций (N91.3) — нарушение менструального цикла (аменорея/олигоменорея/гипоменорея).",
    "overview": {
      "quickTake": "Отсутствие менструаций: нарушение цикла; исключите беременность, гипоталамическую/гипофизарную/яичниковую патологию.",
      "prevalence": "Часто.",
      "riskLevel": "low",
      "practiceFocus": "Алгоритм: беременность → пролактин/ТТГ → гипофиз → яичники → анатомия."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Беременность",
      "Гипоталамическая (стресс, вес, спорт)",
      "Гиперпролактинемия",
      "Синдром истощения яичников",
      "Анатомические (синехии, заращение)"
    ],
    "symptoms": [
      "Отсутствие/редкие менструации",
      "Бесплодие",
      "Приливы (при недостатке эстрогенов)"
    ],
    "symptomGroups": {
      "typical": [
        "Нарушение ритма менструаций."
      ],
      "alarm": [
        "Приливы, остеопороз при гипоэстрогении; головная боль (пролактинома)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Отсутствие менструаций: исключите беременность и органическую патологию; алгоритм по уровню поражения оси гипоталамус-гипофиз-яичники.",
      "redFlags": [
        "Приливы/остеопороз, головная боль, галакторея."
      ],
      "firstLineActions": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, УЗИ яичников.",
        "Исключение анатомии (гипоплазия/синехии)."
      ],
      "diagnosticMinimum": [
        "ХГЧ, гормональный профиль, УЗИ."
      ],
      "whenToEscalate": [
        "При органической патологии (опухоль гипофиза, синехии)."
      ],
      "clinicalPearls": [
        "Сначала исключите беременность — самая частая причина аменореи."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESHRE",
        "title": "Female infertility / menstrual disorders",
        "documentType": "Guideline",
        "scope": "Диагностика нарушений цикла.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Отсутствие/редкие менструации при исключённой беременности."
      ],
      "laboratory": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, эстрадиол, AMH."
      ],
      "imaging": [
        "УЗИ яичников/матки, МРТ гипофиза при пролактиноме."
      ],
      "diagnosisConfirmedWhen": [
        "Алгоритм исключил беременность и выявил уровень поражения."
      ],
      "diagnosisExcludedWhen": [
        "Беременность или нормальный цикл при другой причине."
      ]
    },
    "severityStratification": {
      "title": "По уровню",
      "tiers": [
        {
          "name": "Гипоталамическая/функциональная",
          "criteria": [
            "Нормальные гормоны, провоцирующий фактор."
          ],
          "clinicalMeaning": "Коррекция образа жизни.",
          "managementImpact": "Устранение причины, КОК при необходимости."
        },
        {
          "name": "Органическая",
          "criteria": [
            "Опухоль гипофиза, синехии, недостаточность яичников."
          ],
          "clinicalMeaning": "Специфическое лечение.",
          "managementImpact": "По причине (хирургия/ЗГТ)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Беременность",
        "whyConfused": "Аменорея.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      },
      {
        "condition": "Синдром поликистозных яичников",
        "whyConfused": "Олигоменорея.",
        "howToDistinguish": "УЗИ/гормоны (критерии Роттердама).",
        "testsIfNeeded": [
          "УЗИ",
          "гормоны"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "ХГЧ, гормоны, УЗИ."
      ],
      "confirmDiagnosis": [
        "Алгоритм по уровню поражения."
      ],
      "startTreatment": [
        "Устранение причины; циклическая терапия при необходимости."
      ],
      "reassess": [
        "Восстановление цикла."
      ],
      "escalateWhen": [
        "Опухоль/синехии/недостаточность яичников."
      ],
      "referWhen": [
        "К эндокринологу/репродуктологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Коррекция веса/стресса, циклические КОК."
      ],
      "surgical": [
        "Резекция синехий, удаление пролактиномы."
      ],
      "guidelines": {
        "eshre": "Исключение беременности — первый шаг.",
        "ru": "Поиск уровня поражения оси."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Яичники/матка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "яичники/матка",
          "description": "Мультифолликулярные яичники, гипоплазия эндометрия, синехии.",
          "normal": "Норма.",
          "pathology": "Поликистозные яичники, истончённый эндометрий.",
          "clinicalSignificance": "Уточняет причину."
        }
      ],
      "imagingTips": [
        "УЗИ — для оценки яичников и эндометрия."
      ]
    },
    "recommendations": [
      "Исключение беременности в первую очередь.",
      "Коррекция образа жизни."
    ],
    "prognosis": {
      "general": "Зависит от причины; функциональные — хорошо.",
      "factors": [
        "Причина",
        "Возраст"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "При восстановлении цикла",
      "duration": "По ситуации",
      "tests": [
        "Гормоны",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль цикла."
      ],
      "earlierReviewIf": [
        "Нет восстановления, симптомы гипоэстрогении."
      ],
      "switchTreatmentIf": [
        "Органическая причина."
      ],
      "urgentReassessmentIf": [
        "Головная боль/галакторея (пролактинома)."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не начинать ЗГТ до исключения противопоказаний.",
      "Не игнорировать беременность как причину."
    ],
    "patientCounseling": [
      "Объяснить алгоритм обследования.",
      "Важность исключения беременности."
    ],
    "specialPopulations": {
      "adolescents": [
        "Первичная аменорея → исключить анатомию/генетику."
      ],
      "fertilityPlanning": [
        "Нарушение цикла часто = ановуляция/бесплодие."
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
    "id": "stub-n91-4",
    "name": "Отсутствие менструаций",
    "icd": "N91.4",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Отсутствие менструаций (N91.4) — нарушение менструального цикла (аменорея/олигоменорея/гипоменорея).",
    "overview": {
      "quickTake": "Отсутствие менструаций: нарушение цикла; исключите беременность, гипоталамическую/гипофизарную/яичниковую патологию.",
      "prevalence": "Часто.",
      "riskLevel": "low",
      "practiceFocus": "Алгоритм: беременность → пролактин/ТТГ → гипофиз → яичники → анатомия."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Беременность",
      "Гипоталамическая (стресс, вес, спорт)",
      "Гиперпролактинемия",
      "Синдром истощения яичников",
      "Анатомические (синехии, заращение)"
    ],
    "symptoms": [
      "Отсутствие/редкие менструации",
      "Бесплодие",
      "Приливы (при недостатке эстрогенов)"
    ],
    "symptomGroups": {
      "typical": [
        "Нарушение ритма менструаций."
      ],
      "alarm": [
        "Приливы, остеопороз при гипоэстрогении; головная боль (пролактинома)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Отсутствие менструаций: исключите беременность и органическую патологию; алгоритм по уровню поражения оси гипоталамус-гипофиз-яичники.",
      "redFlags": [
        "Приливы/остеопороз, головная боль, галакторея."
      ],
      "firstLineActions": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, УЗИ яичников.",
        "Исключение анатомии (гипоплазия/синехии)."
      ],
      "diagnosticMinimum": [
        "ХГЧ, гормональный профиль, УЗИ."
      ],
      "whenToEscalate": [
        "При органической патологии (опухоль гипофиза, синехии)."
      ],
      "clinicalPearls": [
        "Сначала исключите беременность — самая частая причина аменореи."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESHRE",
        "title": "Female infertility / menstrual disorders",
        "documentType": "Guideline",
        "scope": "Диагностика нарушений цикла.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Отсутствие/редкие менструации при исключённой беременности."
      ],
      "laboratory": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, эстрадиол, AMH."
      ],
      "imaging": [
        "УЗИ яичников/матки, МРТ гипофиза при пролактиноме."
      ],
      "diagnosisConfirmedWhen": [
        "Алгоритм исключил беременность и выявил уровень поражения."
      ],
      "diagnosisExcludedWhen": [
        "Беременность или нормальный цикл при другой причине."
      ]
    },
    "severityStratification": {
      "title": "По уровню",
      "tiers": [
        {
          "name": "Гипоталамическая/функциональная",
          "criteria": [
            "Нормальные гормоны, провоцирующий фактор."
          ],
          "clinicalMeaning": "Коррекция образа жизни.",
          "managementImpact": "Устранение причины, КОК при необходимости."
        },
        {
          "name": "Органическая",
          "criteria": [
            "Опухоль гипофиза, синехии, недостаточность яичников."
          ],
          "clinicalMeaning": "Специфическое лечение.",
          "managementImpact": "По причине (хирургия/ЗГТ)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Беременность",
        "whyConfused": "Аменорея.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      },
      {
        "condition": "Синдром поликистозных яичников",
        "whyConfused": "Олигоменорея.",
        "howToDistinguish": "УЗИ/гормоны (критерии Роттердама).",
        "testsIfNeeded": [
          "УЗИ",
          "гормоны"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "ХГЧ, гормоны, УЗИ."
      ],
      "confirmDiagnosis": [
        "Алгоритм по уровню поражения."
      ],
      "startTreatment": [
        "Устранение причины; циклическая терапия при необходимости."
      ],
      "reassess": [
        "Восстановление цикла."
      ],
      "escalateWhen": [
        "Опухоль/синехии/недостаточность яичников."
      ],
      "referWhen": [
        "К эндокринологу/репродуктологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Коррекция веса/стресса, циклические КОК."
      ],
      "surgical": [
        "Резекция синехий, удаление пролактиномы."
      ],
      "guidelines": {
        "eshre": "Исключение беременности — первый шаг.",
        "ru": "Поиск уровня поражения оси."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Яичники/матка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "яичники/матка",
          "description": "Мультифолликулярные яичники, гипоплазия эндометрия, синехии.",
          "normal": "Норма.",
          "pathology": "Поликистозные яичники, истончённый эндометрий.",
          "clinicalSignificance": "Уточняет причину."
        }
      ],
      "imagingTips": [
        "УЗИ — для оценки яичников и эндометрия."
      ]
    },
    "recommendations": [
      "Исключение беременности в первую очередь.",
      "Коррекция образа жизни."
    ],
    "prognosis": {
      "general": "Зависит от причины; функциональные — хорошо.",
      "factors": [
        "Причина",
        "Возраст"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "При восстановлении цикла",
      "duration": "По ситуации",
      "tests": [
        "Гормоны",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль цикла."
      ],
      "earlierReviewIf": [
        "Нет восстановления, симптомы гипоэстрогении."
      ],
      "switchTreatmentIf": [
        "Органическая причина."
      ],
      "urgentReassessmentIf": [
        "Головная боль/галакторея (пролактинома)."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не начинать ЗГТ до исключения противопоказаний.",
      "Не игнорировать беременность как причину."
    ],
    "patientCounseling": [
      "Объяснить алгоритм обследования.",
      "Важность исключения беременности."
    ],
    "specialPopulations": {
      "adolescents": [
        "Первичная аменорея → исключить анатомию/генетику."
      ],
      "fertilityPlanning": [
        "Нарушение цикла часто = ановуляция/бесплодие."
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
    "id": "stub-n91-6",
    "name": "Отсутствие менструаций",
    "icd": "N91.6",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Отсутствие менструаций (N91.6) — нарушение менструального цикла (аменорея/олигоменорея/гипоменорея).",
    "overview": {
      "quickTake": "Отсутствие менструаций: нарушение цикла; исключите беременность, гипоталамическую/гипофизарную/яичниковую патологию.",
      "prevalence": "Часто.",
      "riskLevel": "low",
      "practiceFocus": "Алгоритм: беременность → пролактин/ТТГ → гипофиз → яичники → анатомия."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Беременность",
      "Гипоталамическая (стресс, вес, спорт)",
      "Гиперпролактинемия",
      "Синдром истощения яичников",
      "Анатомические (синехии, заращение)"
    ],
    "symptoms": [
      "Отсутствие/редкие менструации",
      "Бесплодие",
      "Приливы (при недостатке эстрогенов)"
    ],
    "symptomGroups": {
      "typical": [
        "Нарушение ритма менструаций."
      ],
      "alarm": [
        "Приливы, остеопороз при гипоэстрогении; головная боль (пролактинома)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Отсутствие менструаций: исключите беременность и органическую патологию; алгоритм по уровню поражения оси гипоталамус-гипофиз-яичники.",
      "redFlags": [
        "Приливы/остеопороз, головная боль, галакторея."
      ],
      "firstLineActions": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, УЗИ яичников.",
        "Исключение анатомии (гипоплазия/синехии)."
      ],
      "diagnosticMinimum": [
        "ХГЧ, гормональный профиль, УЗИ."
      ],
      "whenToEscalate": [
        "При органической патологии (опухоль гипофиза, синехии)."
      ],
      "clinicalPearls": [
        "Сначала исключите беременность — самая частая причина аменореи."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESHRE",
        "title": "Female infertility / menstrual disorders",
        "documentType": "Guideline",
        "scope": "Диагностика нарушений цикла.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Отсутствие/редкие менструации при исключённой беременности."
      ],
      "laboratory": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, эстрадиол, AMH."
      ],
      "imaging": [
        "УЗИ яичников/матки, МРТ гипофиза при пролактиноме."
      ],
      "diagnosisConfirmedWhen": [
        "Алгоритм исключил беременность и выявил уровень поражения."
      ],
      "diagnosisExcludedWhen": [
        "Беременность или нормальный цикл при другой причине."
      ]
    },
    "severityStratification": {
      "title": "По уровню",
      "tiers": [
        {
          "name": "Гипоталамическая/функциональная",
          "criteria": [
            "Нормальные гормоны, провоцирующий фактор."
          ],
          "clinicalMeaning": "Коррекция образа жизни.",
          "managementImpact": "Устранение причины, КОК при необходимости."
        },
        {
          "name": "Органическая",
          "criteria": [
            "Опухоль гипофиза, синехии, недостаточность яичников."
          ],
          "clinicalMeaning": "Специфическое лечение.",
          "managementImpact": "По причине (хирургия/ЗГТ)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Беременность",
        "whyConfused": "Аменорея.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      },
      {
        "condition": "Синдром поликистозных яичников",
        "whyConfused": "Олигоменорея.",
        "howToDistinguish": "УЗИ/гормоны (критерии Роттердама).",
        "testsIfNeeded": [
          "УЗИ",
          "гормоны"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "ХГЧ, гормоны, УЗИ."
      ],
      "confirmDiagnosis": [
        "Алгоритм по уровню поражения."
      ],
      "startTreatment": [
        "Устранение причины; циклическая терапия при необходимости."
      ],
      "reassess": [
        "Восстановление цикла."
      ],
      "escalateWhen": [
        "Опухоль/синехии/недостаточность яичников."
      ],
      "referWhen": [
        "К эндокринологу/репродуктологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Коррекция веса/стресса, циклические КОК."
      ],
      "surgical": [
        "Резекция синехий, удаление пролактиномы."
      ],
      "guidelines": {
        "eshre": "Исключение беременности — первый шаг.",
        "ru": "Поиск уровня поражения оси."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Яичники/матка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "яичники/матка",
          "description": "Мультифолликулярные яичники, гипоплазия эндометрия, синехии.",
          "normal": "Норма.",
          "pathology": "Поликистозные яичники, истончённый эндометрий.",
          "clinicalSignificance": "Уточняет причину."
        }
      ],
      "imagingTips": [
        "УЗИ — для оценки яичников и эндометрия."
      ]
    },
    "recommendations": [
      "Исключение беременности в первую очередь.",
      "Коррекция образа жизни."
    ],
    "prognosis": {
      "general": "Зависит от причины; функциональные — хорошо.",
      "factors": [
        "Причина",
        "Возраст"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "При восстановлении цикла",
      "duration": "По ситуации",
      "tests": [
        "Гормоны",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль цикла."
      ],
      "earlierReviewIf": [
        "Нет восстановления, симптомы гипоэстрогении."
      ],
      "switchTreatmentIf": [
        "Органическая причина."
      ],
      "urgentReassessmentIf": [
        "Головная боль/галакторея (пролактинома)."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не начинать ЗГТ до исключения противопоказаний.",
      "Не игнорировать беременность как причину."
    ],
    "patientCounseling": [
      "Объяснить алгоритм обследования.",
      "Важность исключения беременности."
    ],
    "specialPopulations": {
      "adolescents": [
        "Первичная аменорея → исключить анатомию/генетику."
      ],
      "fertilityPlanning": [
        "Нарушение цикла часто = ановуляция/бесплодие."
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
    "id": "stub-n91-7",
    "name": "Отсутствие менструаций",
    "icd": "N91.7",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Отсутствие менструаций (N91.7) — нарушение менструального цикла (аменорея/олигоменорея/гипоменорея).",
    "overview": {
      "quickTake": "Отсутствие менструаций: нарушение цикла; исключите беременность, гипоталамическую/гипофизарную/яичниковую патологию.",
      "prevalence": "Часто.",
      "riskLevel": "low",
      "practiceFocus": "Алгоритм: беременность → пролактин/ТТГ → гипофиз → яичники → анатомия."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Беременность",
      "Гипоталамическая (стресс, вес, спорт)",
      "Гиперпролактинемия",
      "Синдром истощения яичников",
      "Анатомические (синехии, заращение)"
    ],
    "symptoms": [
      "Отсутствие/редкие менструации",
      "Бесплодие",
      "Приливы (при недостатке эстрогенов)"
    ],
    "symptomGroups": {
      "typical": [
        "Нарушение ритма менструаций."
      ],
      "alarm": [
        "Приливы, остеопороз при гипоэстрогении; головная боль (пролактинома)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Отсутствие менструаций: исключите беременность и органическую патологию; алгоритм по уровню поражения оси гипоталамус-гипофиз-яичники.",
      "redFlags": [
        "Приливы/остеопороз, головная боль, галакторея."
      ],
      "firstLineActions": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, УЗИ яичников.",
        "Исключение анатомии (гипоплазия/синехии)."
      ],
      "diagnosticMinimum": [
        "ХГЧ, гормональный профиль, УЗИ."
      ],
      "whenToEscalate": [
        "При органической патологии (опухоль гипофиза, синехии)."
      ],
      "clinicalPearls": [
        "Сначала исключите беременность — самая частая причина аменореи."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESHRE",
        "title": "Female infertility / menstrual disorders",
        "documentType": "Guideline",
        "scope": "Диагностика нарушений цикла.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Отсутствие/редкие менструации при исключённой беременности."
      ],
      "laboratory": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, эстрадиол, AMH."
      ],
      "imaging": [
        "УЗИ яичников/матки, МРТ гипофиза при пролактиноме."
      ],
      "diagnosisConfirmedWhen": [
        "Алгоритм исключил беременность и выявил уровень поражения."
      ],
      "diagnosisExcludedWhen": [
        "Беременность или нормальный цикл при другой причине."
      ]
    },
    "severityStratification": {
      "title": "По уровню",
      "tiers": [
        {
          "name": "Гипоталамическая/функциональная",
          "criteria": [
            "Нормальные гормоны, провоцирующий фактор."
          ],
          "clinicalMeaning": "Коррекция образа жизни.",
          "managementImpact": "Устранение причины, КОК при необходимости."
        },
        {
          "name": "Органическая",
          "criteria": [
            "Опухоль гипофиза, синехии, недостаточность яичников."
          ],
          "clinicalMeaning": "Специфическое лечение.",
          "managementImpact": "По причине (хирургия/ЗГТ)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Беременность",
        "whyConfused": "Аменорея.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      },
      {
        "condition": "Синдром поликистозных яичников",
        "whyConfused": "Олигоменорея.",
        "howToDistinguish": "УЗИ/гормоны (критерии Роттердама).",
        "testsIfNeeded": [
          "УЗИ",
          "гормоны"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "ХГЧ, гормоны, УЗИ."
      ],
      "confirmDiagnosis": [
        "Алгоритм по уровню поражения."
      ],
      "startTreatment": [
        "Устранение причины; циклическая терапия при необходимости."
      ],
      "reassess": [
        "Восстановление цикла."
      ],
      "escalateWhen": [
        "Опухоль/синехии/недостаточность яичников."
      ],
      "referWhen": [
        "К эндокринологу/репродуктологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Коррекция веса/стресса, циклические КОК."
      ],
      "surgical": [
        "Резекция синехий, удаление пролактиномы."
      ],
      "guidelines": {
        "eshre": "Исключение беременности — первый шаг.",
        "ru": "Поиск уровня поражения оси."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Яичники/матка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "яичники/матка",
          "description": "Мультифолликулярные яичники, гипоплазия эндометрия, синехии.",
          "normal": "Норма.",
          "pathology": "Поликистозные яичники, истончённый эндометрий.",
          "clinicalSignificance": "Уточняет причину."
        }
      ],
      "imagingTips": [
        "УЗИ — для оценки яичников и эндометрия."
      ]
    },
    "recommendations": [
      "Исключение беременности в первую очередь.",
      "Коррекция образа жизни."
    ],
    "prognosis": {
      "general": "Зависит от причины; функциональные — хорошо.",
      "factors": [
        "Причина",
        "Возраст"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "При восстановлении цикла",
      "duration": "По ситуации",
      "tests": [
        "Гормоны",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль цикла."
      ],
      "earlierReviewIf": [
        "Нет восстановления, симптомы гипоэстрогении."
      ],
      "switchTreatmentIf": [
        "Органическая причина."
      ],
      "urgentReassessmentIf": [
        "Головная боль/галакторея (пролактинома)."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не начинать ЗГТ до исключения противопоказаний.",
      "Не игнорировать беременность как причину."
    ],
    "patientCounseling": [
      "Объяснить алгоритм обследования.",
      "Важность исключения беременности."
    ],
    "specialPopulations": {
      "adolescents": [
        "Первичная аменорея → исключить анатомию/генетику."
      ],
      "fertilityPlanning": [
        "Нарушение цикла часто = ановуляция/бесплодие."
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
    "id": "stub-n91-8",
    "name": "Отсутствие менструаций",
    "icd": "N91.8",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Отсутствие менструаций (N91.8) — нарушение менструального цикла (аменорея/олигоменорея/гипоменорея).",
    "overview": {
      "quickTake": "Отсутствие менструаций: нарушение цикла; исключите беременность, гипоталамическую/гипофизарную/яичниковую патологию.",
      "prevalence": "Часто.",
      "riskLevel": "low",
      "practiceFocus": "Алгоритм: беременность → пролактин/ТТГ → гипофиз → яичники → анатомия."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Беременность",
      "Гипоталамическая (стресс, вес, спорт)",
      "Гиперпролактинемия",
      "Синдром истощения яичников",
      "Анатомические (синехии, заращение)"
    ],
    "symptoms": [
      "Отсутствие/редкие менструации",
      "Бесплодие",
      "Приливы (при недостатке эстрогенов)"
    ],
    "symptomGroups": {
      "typical": [
        "Нарушение ритма менструаций."
      ],
      "alarm": [
        "Приливы, остеопороз при гипоэстрогении; головная боль (пролактинома)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Отсутствие менструаций: исключите беременность и органическую патологию; алгоритм по уровню поражения оси гипоталамус-гипофиз-яичники.",
      "redFlags": [
        "Приливы/остеопороз, головная боль, галакторея."
      ],
      "firstLineActions": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, УЗИ яичников.",
        "Исключение анатомии (гипоплазия/синехии)."
      ],
      "diagnosticMinimum": [
        "ХГЧ, гормональный профиль, УЗИ."
      ],
      "whenToEscalate": [
        "При органической патологии (опухоль гипофиза, синехии)."
      ],
      "clinicalPearls": [
        "Сначала исключите беременность — самая частая причина аменореи."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESHRE",
        "title": "Female infertility / menstrual disorders",
        "documentType": "Guideline",
        "scope": "Диагностика нарушений цикла.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Отсутствие/редкие менструации при исключённой беременности."
      ],
      "laboratory": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, эстрадиол, AMH."
      ],
      "imaging": [
        "УЗИ яичников/матки, МРТ гипофиза при пролактиноме."
      ],
      "diagnosisConfirmedWhen": [
        "Алгоритм исключил беременность и выявил уровень поражения."
      ],
      "diagnosisExcludedWhen": [
        "Беременность или нормальный цикл при другой причине."
      ]
    },
    "severityStratification": {
      "title": "По уровню",
      "tiers": [
        {
          "name": "Гипоталамическая/функциональная",
          "criteria": [
            "Нормальные гормоны, провоцирующий фактор."
          ],
          "clinicalMeaning": "Коррекция образа жизни.",
          "managementImpact": "Устранение причины, КОК при необходимости."
        },
        {
          "name": "Органическая",
          "criteria": [
            "Опухоль гипофиза, синехии, недостаточность яичников."
          ],
          "clinicalMeaning": "Специфическое лечение.",
          "managementImpact": "По причине (хирургия/ЗГТ)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Беременность",
        "whyConfused": "Аменорея.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      },
      {
        "condition": "Синдром поликистозных яичников",
        "whyConfused": "Олигоменорея.",
        "howToDistinguish": "УЗИ/гормоны (критерии Роттердама).",
        "testsIfNeeded": [
          "УЗИ",
          "гормоны"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "ХГЧ, гормоны, УЗИ."
      ],
      "confirmDiagnosis": [
        "Алгоритм по уровню поражения."
      ],
      "startTreatment": [
        "Устранение причины; циклическая терапия при необходимости."
      ],
      "reassess": [
        "Восстановление цикла."
      ],
      "escalateWhen": [
        "Опухоль/синехии/недостаточность яичников."
      ],
      "referWhen": [
        "К эндокринологу/репродуктологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Коррекция веса/стресса, циклические КОК."
      ],
      "surgical": [
        "Резекция синехий, удаление пролактиномы."
      ],
      "guidelines": {
        "eshre": "Исключение беременности — первый шаг.",
        "ru": "Поиск уровня поражения оси."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Яичники/матка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "яичники/матка",
          "description": "Мультифолликулярные яичники, гипоплазия эндометрия, синехии.",
          "normal": "Норма.",
          "pathology": "Поликистозные яичники, истончённый эндометрий.",
          "clinicalSignificance": "Уточняет причину."
        }
      ],
      "imagingTips": [
        "УЗИ — для оценки яичников и эндометрия."
      ]
    },
    "recommendations": [
      "Исключение беременности в первую очередь.",
      "Коррекция образа жизни."
    ],
    "prognosis": {
      "general": "Зависит от причины; функциональные — хорошо.",
      "factors": [
        "Причина",
        "Возраст"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "При восстановлении цикла",
      "duration": "По ситуации",
      "tests": [
        "Гормоны",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль цикла."
      ],
      "earlierReviewIf": [
        "Нет восстановления, симптомы гипоэстрогении."
      ],
      "switchTreatmentIf": [
        "Органическая причина."
      ],
      "urgentReassessmentIf": [
        "Головная боль/галакторея (пролактинома)."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не начинать ЗГТ до исключения противопоказаний.",
      "Не игнорировать беременность как причину."
    ],
    "patientCounseling": [
      "Объяснить алгоритм обследования.",
      "Важность исключения беременности."
    ],
    "specialPopulations": {
      "adolescents": [
        "Первичная аменорея → исключить анатомию/генетику."
      ],
      "fertilityPlanning": [
        "Нарушение цикла часто = ановуляция/бесплодие."
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
    "id": "stub-n91-9",
    "name": "Отсутствие менструаций",
    "icd": "N91.9",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Отсутствие менструаций (N91.9) — нарушение менструального цикла (аменорея/олигоменорея/гипоменорея).",
    "overview": {
      "quickTake": "Отсутствие менструаций: нарушение цикла; исключите беременность, гипоталамическую/гипофизарную/яичниковую патологию.",
      "prevalence": "Часто.",
      "riskLevel": "low",
      "practiceFocus": "Алгоритм: беременность → пролактин/ТТГ → гипофиз → яичники → анатомия."
    },
    "epidemiology": "Любой репродуктивный возраст.",
    "etiology": [
      "Беременность",
      "Гипоталамическая (стресс, вес, спорт)",
      "Гиперпролактинемия",
      "Синдром истощения яичников",
      "Анатомические (синехии, заращение)"
    ],
    "symptoms": [
      "Отсутствие/редкие менструации",
      "Бесплодие",
      "Приливы (при недостатке эстрогенов)"
    ],
    "symptomGroups": {
      "typical": [
        "Нарушение ритма менструаций."
      ],
      "alarm": [
        "Приливы, остеопороз при гипоэстрогении; головная боль (пролактинома)."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Отсутствие менструаций: исключите беременность и органическую патологию; алгоритм по уровню поражения оси гипоталамус-гипофиз-яичники.",
      "redFlags": [
        "Приливы/остеопороз, головная боль, галакторея."
      ],
      "firstLineActions": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, УЗИ яичников.",
        "Исключение анатомии (гипоплазия/синехии)."
      ],
      "diagnosticMinimum": [
        "ХГЧ, гормональный профиль, УЗИ."
      ],
      "whenToEscalate": [
        "При органической патологии (опухоль гипофиза, синехии)."
      ],
      "clinicalPearls": [
        "Сначала исключите беременность — самая частая причина аменореи."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESHRE",
        "title": "Female infertility / menstrual disorders",
        "documentType": "Guideline",
        "scope": "Диагностика нарушений цикла.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Отсутствие/редкие менструации при исключённой беременности."
      ],
      "laboratory": [
        "ХГЧ, пролактин, ТТГ, ФСГ/ЛГ, эстрадиол, AMH."
      ],
      "imaging": [
        "УЗИ яичников/матки, МРТ гипофиза при пролактиноме."
      ],
      "diagnosisConfirmedWhen": [
        "Алгоритм исключил беременность и выявил уровень поражения."
      ],
      "diagnosisExcludedWhen": [
        "Беременность или нормальный цикл при другой причине."
      ]
    },
    "severityStratification": {
      "title": "По уровню",
      "tiers": [
        {
          "name": "Гипоталамическая/функциональная",
          "criteria": [
            "Нормальные гормоны, провоцирующий фактор."
          ],
          "clinicalMeaning": "Коррекция образа жизни.",
          "managementImpact": "Устранение причины, КОК при необходимости."
        },
        {
          "name": "Органическая",
          "criteria": [
            "Опухоль гипофиза, синехии, недостаточность яичников."
          ],
          "clinicalMeaning": "Специфическое лечение.",
          "managementImpact": "По причине (хирургия/ЗГТ)."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Беременность",
        "whyConfused": "Аменорея.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      },
      {
        "condition": "Синдром поликистозных яичников",
        "whyConfused": "Олигоменорея.",
        "howToDistinguish": "УЗИ/гормоны (критерии Роттердама).",
        "testsIfNeeded": [
          "УЗИ",
          "гормоны"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "ХГЧ, гормоны, УЗИ."
      ],
      "confirmDiagnosis": [
        "Алгоритм по уровню поражения."
      ],
      "startTreatment": [
        "Устранение причины; циклическая терапия при необходимости."
      ],
      "reassess": [
        "Восстановление цикла."
      ],
      "escalateWhen": [
        "Опухоль/синехии/недостаточность яичников."
      ],
      "referWhen": [
        "К эндокринологу/репродуктологу."
      ]
    },
    "treatment": {
      "conservative": [
        "Коррекция веса/стресса, циклические КОК."
      ],
      "surgical": [
        "Резекция синехий, удаление пролактиномы."
      ],
      "guidelines": {
        "eshre": "Исключение беременности — первый шаг.",
        "ru": "Поиск уровня поражения оси."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Яичники/матка"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "яичники/матка",
          "description": "Мультифолликулярные яичники, гипоплазия эндометрия, синехии.",
          "normal": "Норма.",
          "pathology": "Поликистозные яичники, истончённый эндометрий.",
          "clinicalSignificance": "Уточняет причину."
        }
      ],
      "imagingTips": [
        "УЗИ — для оценки яичников и эндометрия."
      ]
    },
    "recommendations": [
      "Исключение беременности в первую очередь.",
      "Коррекция образа жизни."
    ],
    "prognosis": {
      "general": "Зависит от причины; функциональные — хорошо.",
      "factors": [
        "Причина",
        "Возраст"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "При восстановлении цикла",
      "duration": "По ситуации",
      "tests": [
        "Гормоны",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль цикла."
      ],
      "earlierReviewIf": [
        "Нет восстановления, симптомы гипоэстрогении."
      ],
      "switchTreatmentIf": [
        "Органическая причина."
      ],
      "urgentReassessmentIf": [
        "Головная боль/галакторея (пролактинома)."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не начинать ЗГТ до исключения противопоказаний.",
      "Не игнорировать беременность как причину."
    ],
    "patientCounseling": [
      "Объяснить алгоритм обследования.",
      "Важность исключения беременности."
    ],
    "specialPopulations": {
      "adolescents": [
        "Первичная аменорея → исключить анатомию/генетику."
      ],
      "fertilityPlanning": [
        "Нарушение цикла часто = ановуляция/бесплодие."
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
    "id": "stub-n92",
    "name": "Обильные и частые менструации",
    "icd": "N92",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Обильные и частые менструации (N92) — обильные и/или длительные менструальные кровотечения.",
    "overview": {
      "quickTake": "Обильные и частые менструации: АМК; исключите органическую патологию (миома, полип, гиперплазия/рак) и коагулопатию; далее — гормональная/хирургическая терапия.",
      "prevalence": "До 30% женщин репродуктивного возраста.",
      "riskLevel": "moderate",
      "practiceFocus": "PALM-COEIN классификация АМК."
    },
    "epidemiology": "Часто в перименопаузе и при миоме.",
    "etiology": [
      "PALM: полип, аденомиоз, лейомиома, гиперплазия/злокачественность",
      "COEIN: коагулопатия, овуляторная дисфункция, эндометриальная, ятрогения, невыясненная"
    ],
    "symptoms": [
      "Обильные менструации",
      "Сгустки",
      "Анемия"
    ],
    "symptomGroups": {
      "typical": [
        "Обильные/длительные менструации.",
        "Слабость при анемии."
      ],
      "alarm": [
        "Обильное кровотечение с гемодинамической нестабильностью."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Обильные и частые менструации: исключите органику (УЗИ/биопсия) и коагулопатию; ведение по PALM-COEIN — от НПВС/гормонов до хирургии.",
      "redFlags": [
        "Гемодинамическая нестабильность, анемия тяжёлая.",
        "АМК в постменопаузе (исключить рак)."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, ОАК, коагулограмма, биопсия при показаниях.",
        "НПВС/транексамовая кислота, гормональная терапия."
      ],
      "diagnosticMinimum": [
        "УЗИ, ОАК, коагулограмма, биопсия эндометрия при риске."
      ],
      "whenToEscalate": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "PALM-COEIN — системный подход к АМК."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение АМК.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Обильные/длительные менструации при исключённой беременности."
      ],
      "laboratory": [
        "ОАК (анемия), коагулограмма, гормоны.",
        "Биопсия эндометрия при риске злокачественности."
      ],
      "imaging": [
        "УЗИ эндометрия; гистероскопия/МРТ при показаниях."
      ],
      "diagnosisConfirmedWhen": [
        "По PALM-COEIN после исключения органики/коагулопатии."
      ],
      "diagnosisExcludedWhen": [
        "Беременность (другое ведение)."
      ]
    },
    "severityStratification": {
      "title": "PALM-COEIN",
      "tiers": [
        {
          "name": "Функциональная/легкая",
          "criteria": [
            "Без органики, лёгкая анемия."
          ],
          "clinicalMeaning": "Медикаментозно.",
          "managementImpact": "НПВС, транексамовая кислота, КОК/ЛНГ-ВМК."
        },
        {
          "name": "Органическая/тяжёлая",
          "criteria": [
            "Миома/полип/гиперплазия, тяжёлая анемия."
          ],
          "clinicalMeaning": "Хирургия/биопсия.",
          "managementImpact": "Гистероскопия, ВМК, аблация, гистерэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Миома/полип/гиперплазия",
        "whyConfused": "АМК.",
        "howToDistinguish": "УЗИ/биопсия.",
        "testsIfNeeded": [
          "УЗИ",
          "биопсия"
        ]
      },
      {
        "condition": "Беременность/осложнения",
        "whyConfused": "Кровотечение из половых путей.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ, ОАК, коагулограмма, исключение беременности."
      ],
      "confirmDiagnosis": [
        "PALM-COEIN классификация."
      ],
      "startTreatment": [
        "НПВС/транексамовая кислота; КОК/ЛНГ-ВМК; при органике — хирургия."
      ],
      "reassess": [
        "Контроль кровопотери и анемии."
      ],
      "escalateWhen": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "referWhen": [
        "К гинекологу-хирургу/онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "НПВС, транексамовая кислота, КОК, ЛНГ-ВМК."
      ],
      "surgical": [
        "Гистероскопия (полип/субмукозная миома), аблация, гистерэктомия."
      ],
      "guidelines": {
        "esge": "ЛНГ-ВМК — первая линия при АМК.",
        "ru": "Биопсия эндометрия при риске злокачественности."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Эндометрий/миометрий"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "матка",
          "description": "Утолщение эндометрия, миоматозные узлы, полип.",
          "normal": "Эндометрий ≤ 4 мм в менопаузе.",
          "pathology": "АМК-ассоциированная патология.",
          "clinicalSignificance": "Уточняет PALM-компонент."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг при АМК."
      ]
    },
    "recommendations": [
      "Исключение беременности, анемии, коагулопатии.",
      "ЛНГ-ВМК — эффективная терапия."
    ],
    "prognosis": {
      "general": "Хороший при корректном ведении.",
      "factors": [
        "Причина",
        "Анемия"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Через 3 мес, далее по показаниям",
      "duration": "До стабилизации",
      "tests": [
        "ОАК",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль кровопотери."
      ],
      "earlierReviewIf": [
        "Нарастание кровотечения, анемия."
      ],
      "switchTreatmentIf": [
        "Нет эффекта медикаментов."
      ],
      "urgentReassessmentIf": [
        "Гемодинамическая нестабильность."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак).",
      "Не откладывать биопсию при толстом эндометрии."
    ],
    "patientCounseling": [
      "Объяснить PALM-COEIN.",
      "Важность контроля анемии."
    ],
    "specialPopulations": {
      "adolescents": [
        "Часто овуляторная дисфункция; исключить коагулопатию."
      ],
      "fertilityPlanning": [
        "ЛНГ-ВМК и гормоны совместимы с планированием."
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
    "id": "stub-n92-4",
    "name": "Обильные и частые менструации",
    "icd": "N92.4",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Обильные и частые менструации (N92.4) — обильные и/или длительные менструальные кровотечения.",
    "overview": {
      "quickTake": "Обильные и частые менструации: АМК; исключите органическую патологию (миома, полип, гиперплазия/рак) и коагулопатию; далее — гормональная/хирургическая терапия.",
      "prevalence": "До 30% женщин репродуктивного возраста.",
      "riskLevel": "moderate",
      "practiceFocus": "PALM-COEIN классификация АМК."
    },
    "epidemiology": "Часто в перименопаузе и при миоме.",
    "etiology": [
      "PALM: полип, аденомиоз, лейомиома, гиперплазия/злокачественность",
      "COEIN: коагулопатия, овуляторная дисфункция, эндометриальная, ятрогения, невыясненная"
    ],
    "symptoms": [
      "Обильные менструации",
      "Сгустки",
      "Анемия"
    ],
    "symptomGroups": {
      "typical": [
        "Обильные/длительные менструации.",
        "Слабость при анемии."
      ],
      "alarm": [
        "Обильное кровотечение с гемодинамической нестабильностью."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Обильные и частые менструации: исключите органику (УЗИ/биопсия) и коагулопатию; ведение по PALM-COEIN — от НПВС/гормонов до хирургии.",
      "redFlags": [
        "Гемодинамическая нестабильность, анемия тяжёлая.",
        "АМК в постменопаузе (исключить рак)."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, ОАК, коагулограмма, биопсия при показаниях.",
        "НПВС/транексамовая кислота, гормональная терапия."
      ],
      "diagnosticMinimum": [
        "УЗИ, ОАК, коагулограмма, биопсия эндометрия при риске."
      ],
      "whenToEscalate": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "PALM-COEIN — системный подход к АМК."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение АМК.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Обильные/длительные менструации при исключённой беременности."
      ],
      "laboratory": [
        "ОАК (анемия), коагулограмма, гормоны.",
        "Биопсия эндометрия при риске злокачественности."
      ],
      "imaging": [
        "УЗИ эндометрия; гистероскопия/МРТ при показаниях."
      ],
      "diagnosisConfirmedWhen": [
        "По PALM-COEIN после исключения органики/коагулопатии."
      ],
      "diagnosisExcludedWhen": [
        "Беременность (другое ведение)."
      ]
    },
    "severityStratification": {
      "title": "PALM-COEIN",
      "tiers": [
        {
          "name": "Функциональная/легкая",
          "criteria": [
            "Без органики, лёгкая анемия."
          ],
          "clinicalMeaning": "Медикаментозно.",
          "managementImpact": "НПВС, транексамовая кислота, КОК/ЛНГ-ВМК."
        },
        {
          "name": "Органическая/тяжёлая",
          "criteria": [
            "Миома/полип/гиперплазия, тяжёлая анемия."
          ],
          "clinicalMeaning": "Хирургия/биопсия.",
          "managementImpact": "Гистероскопия, ВМК, аблация, гистерэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Миома/полип/гиперплазия",
        "whyConfused": "АМК.",
        "howToDistinguish": "УЗИ/биопсия.",
        "testsIfNeeded": [
          "УЗИ",
          "биопсия"
        ]
      },
      {
        "condition": "Беременность/осложнения",
        "whyConfused": "Кровотечение из половых путей.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ, ОАК, коагулограмма, исключение беременности."
      ],
      "confirmDiagnosis": [
        "PALM-COEIN классификация."
      ],
      "startTreatment": [
        "НПВС/транексамовая кислота; КОК/ЛНГ-ВМК; при органике — хирургия."
      ],
      "reassess": [
        "Контроль кровопотери и анемии."
      ],
      "escalateWhen": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "referWhen": [
        "К гинекологу-хирургу/онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "НПВС, транексамовая кислота, КОК, ЛНГ-ВМК."
      ],
      "surgical": [
        "Гистероскопия (полип/субмукозная миома), аблация, гистерэктомия."
      ],
      "guidelines": {
        "esge": "ЛНГ-ВМК — первая линия при АМК.",
        "ru": "Биопсия эндометрия при риске злокачественности."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Эндометрий/миометрий"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "матка",
          "description": "Утолщение эндометрия, миоматозные узлы, полип.",
          "normal": "Эндометрий ≤ 4 мм в менопаузе.",
          "pathology": "АМК-ассоциированная патология.",
          "clinicalSignificance": "Уточняет PALM-компонент."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг при АМК."
      ]
    },
    "recommendations": [
      "Исключение беременности, анемии, коагулопатии.",
      "ЛНГ-ВМК — эффективная терапия."
    ],
    "prognosis": {
      "general": "Хороший при корректном ведении.",
      "factors": [
        "Причина",
        "Анемия"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Через 3 мес, далее по показаниям",
      "duration": "До стабилизации",
      "tests": [
        "ОАК",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль кровопотери."
      ],
      "earlierReviewIf": [
        "Нарастание кровотечения, анемия."
      ],
      "switchTreatmentIf": [
        "Нет эффекта медикаментов."
      ],
      "urgentReassessmentIf": [
        "Гемодинамическая нестабильность."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак).",
      "Не откладывать биопсию при толстом эндометрии."
    ],
    "patientCounseling": [
      "Объяснить PALM-COEIN.",
      "Важность контроля анемии."
    ],
    "specialPopulations": {
      "adolescents": [
        "Часто овуляторная дисфункция; исключить коагулопатию."
      ],
      "fertilityPlanning": [
        "ЛНГ-ВМК и гормоны совместимы с планированием."
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
    "id": "stub-n92-5",
    "name": "Обильные и частые менструации",
    "icd": "N92.5",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Обильные и частые менструации (N92.5) — обильные и/или длительные менструальные кровотечения.",
    "overview": {
      "quickTake": "Обильные и частые менструации: АМК; исключите органическую патологию (миома, полип, гиперплазия/рак) и коагулопатию; далее — гормональная/хирургическая терапия.",
      "prevalence": "До 30% женщин репродуктивного возраста.",
      "riskLevel": "moderate",
      "practiceFocus": "PALM-COEIN классификация АМК."
    },
    "epidemiology": "Часто в перименопаузе и при миоме.",
    "etiology": [
      "PALM: полип, аденомиоз, лейомиома, гиперплазия/злокачественность",
      "COEIN: коагулопатия, овуляторная дисфункция, эндометриальная, ятрогения, невыясненная"
    ],
    "symptoms": [
      "Обильные менструации",
      "Сгустки",
      "Анемия"
    ],
    "symptomGroups": {
      "typical": [
        "Обильные/длительные менструации.",
        "Слабость при анемии."
      ],
      "alarm": [
        "Обильное кровотечение с гемодинамической нестабильностью."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Обильные и частые менструации: исключите органику (УЗИ/биопсия) и коагулопатию; ведение по PALM-COEIN — от НПВС/гормонов до хирургии.",
      "redFlags": [
        "Гемодинамическая нестабильность, анемия тяжёлая.",
        "АМК в постменопаузе (исключить рак)."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, ОАК, коагулограмма, биопсия при показаниях.",
        "НПВС/транексамовая кислота, гормональная терапия."
      ],
      "diagnosticMinimum": [
        "УЗИ, ОАК, коагулограмма, биопсия эндометрия при риске."
      ],
      "whenToEscalate": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "PALM-COEIN — системный подход к АМК."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение АМК.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Обильные/длительные менструации при исключённой беременности."
      ],
      "laboratory": [
        "ОАК (анемия), коагулограмма, гормоны.",
        "Биопсия эндометрия при риске злокачественности."
      ],
      "imaging": [
        "УЗИ эндометрия; гистероскопия/МРТ при показаниях."
      ],
      "diagnosisConfirmedWhen": [
        "По PALM-COEIN после исключения органики/коагулопатии."
      ],
      "diagnosisExcludedWhen": [
        "Беременность (другое ведение)."
      ]
    },
    "severityStratification": {
      "title": "PALM-COEIN",
      "tiers": [
        {
          "name": "Функциональная/легкая",
          "criteria": [
            "Без органики, лёгкая анемия."
          ],
          "clinicalMeaning": "Медикаментозно.",
          "managementImpact": "НПВС, транексамовая кислота, КОК/ЛНГ-ВМК."
        },
        {
          "name": "Органическая/тяжёлая",
          "criteria": [
            "Миома/полип/гиперплазия, тяжёлая анемия."
          ],
          "clinicalMeaning": "Хирургия/биопсия.",
          "managementImpact": "Гистероскопия, ВМК, аблация, гистерэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Миома/полип/гиперплазия",
        "whyConfused": "АМК.",
        "howToDistinguish": "УЗИ/биопсия.",
        "testsIfNeeded": [
          "УЗИ",
          "биопсия"
        ]
      },
      {
        "condition": "Беременность/осложнения",
        "whyConfused": "Кровотечение из половых путей.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ, ОАК, коагулограмма, исключение беременности."
      ],
      "confirmDiagnosis": [
        "PALM-COEIN классификация."
      ],
      "startTreatment": [
        "НПВС/транексамовая кислота; КОК/ЛНГ-ВМК; при органике — хирургия."
      ],
      "reassess": [
        "Контроль кровопотери и анемии."
      ],
      "escalateWhen": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "referWhen": [
        "К гинекологу-хирургу/онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "НПВС, транексамовая кислота, КОК, ЛНГ-ВМК."
      ],
      "surgical": [
        "Гистероскопия (полип/субмукозная миома), аблация, гистерэктомия."
      ],
      "guidelines": {
        "esge": "ЛНГ-ВМК — первая линия при АМК.",
        "ru": "Биопсия эндометрия при риске злокачественности."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Эндометрий/миометрий"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "матка",
          "description": "Утолщение эндометрия, миоматозные узлы, полип.",
          "normal": "Эндометрий ≤ 4 мм в менопаузе.",
          "pathology": "АМК-ассоциированная патология.",
          "clinicalSignificance": "Уточняет PALM-компонент."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг при АМК."
      ]
    },
    "recommendations": [
      "Исключение беременности, анемии, коагулопатии.",
      "ЛНГ-ВМК — эффективная терапия."
    ],
    "prognosis": {
      "general": "Хороший при корректном ведении.",
      "factors": [
        "Причина",
        "Анемия"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Через 3 мес, далее по показаниям",
      "duration": "До стабилизации",
      "tests": [
        "ОАК",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль кровопотери."
      ],
      "earlierReviewIf": [
        "Нарастание кровотечения, анемия."
      ],
      "switchTreatmentIf": [
        "Нет эффекта медикаментов."
      ],
      "urgentReassessmentIf": [
        "Гемодинамическая нестабильность."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак).",
      "Не откладывать биопсию при толстом эндометрии."
    ],
    "patientCounseling": [
      "Объяснить PALM-COEIN.",
      "Важность контроля анемии."
    ],
    "specialPopulations": {
      "adolescents": [
        "Часто овуляторная дисфункция; исключить коагулопатию."
      ],
      "fertilityPlanning": [
        "ЛНГ-ВМК и гормоны совместимы с планированием."
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
    "id": "stub-n92-6",
    "name": "Обильные и частые менструации",
    "icd": "N92.6",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Обильные и частые менструации (N92.6) — обильные и/или длительные менструальные кровотечения.",
    "overview": {
      "quickTake": "Обильные и частые менструации: АМК; исключите органическую патологию (миома, полип, гиперплазия/рак) и коагулопатию; далее — гормональная/хирургическая терапия.",
      "prevalence": "До 30% женщин репродуктивного возраста.",
      "riskLevel": "moderate",
      "practiceFocus": "PALM-COEIN классификация АМК."
    },
    "epidemiology": "Часто в перименопаузе и при миоме.",
    "etiology": [
      "PALM: полип, аденомиоз, лейомиома, гиперплазия/злокачественность",
      "COEIN: коагулопатия, овуляторная дисфункция, эндометриальная, ятрогения, невыясненная"
    ],
    "symptoms": [
      "Обильные менструации",
      "Сгустки",
      "Анемия"
    ],
    "symptomGroups": {
      "typical": [
        "Обильные/длительные менструации.",
        "Слабость при анемии."
      ],
      "alarm": [
        "Обильное кровотечение с гемодинамической нестабильностью."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Обильные и частые менструации: исключите органику (УЗИ/биопсия) и коагулопатию; ведение по PALM-COEIN — от НПВС/гормонов до хирургии.",
      "redFlags": [
        "Гемодинамическая нестабильность, анемия тяжёлая.",
        "АМК в постменопаузе (исключить рак)."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, ОАК, коагулограмма, биопсия при показаниях.",
        "НПВС/транексамовая кислота, гормональная терапия."
      ],
      "diagnosticMinimum": [
        "УЗИ, ОАК, коагулограмма, биопсия эндометрия при риске."
      ],
      "whenToEscalate": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "PALM-COEIN — системный подход к АМК."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение АМК.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Обильные/длительные менструации при исключённой беременности."
      ],
      "laboratory": [
        "ОАК (анемия), коагулограмма, гормоны.",
        "Биопсия эндометрия при риске злокачественности."
      ],
      "imaging": [
        "УЗИ эндометрия; гистероскопия/МРТ при показаниях."
      ],
      "diagnosisConfirmedWhen": [
        "По PALM-COEIN после исключения органики/коагулопатии."
      ],
      "diagnosisExcludedWhen": [
        "Беременность (другое ведение)."
      ]
    },
    "severityStratification": {
      "title": "PALM-COEIN",
      "tiers": [
        {
          "name": "Функциональная/легкая",
          "criteria": [
            "Без органики, лёгкая анемия."
          ],
          "clinicalMeaning": "Медикаментозно.",
          "managementImpact": "НПВС, транексамовая кислота, КОК/ЛНГ-ВМК."
        },
        {
          "name": "Органическая/тяжёлая",
          "criteria": [
            "Миома/полип/гиперплазия, тяжёлая анемия."
          ],
          "clinicalMeaning": "Хирургия/биопсия.",
          "managementImpact": "Гистероскопия, ВМК, аблация, гистерэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Миома/полип/гиперплазия",
        "whyConfused": "АМК.",
        "howToDistinguish": "УЗИ/биопсия.",
        "testsIfNeeded": [
          "УЗИ",
          "биопсия"
        ]
      },
      {
        "condition": "Беременность/осложнения",
        "whyConfused": "Кровотечение из половых путей.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ, ОАК, коагулограмма, исключение беременности."
      ],
      "confirmDiagnosis": [
        "PALM-COEIN классификация."
      ],
      "startTreatment": [
        "НПВС/транексамовая кислота; КОК/ЛНГ-ВМК; при органике — хирургия."
      ],
      "reassess": [
        "Контроль кровопотери и анемии."
      ],
      "escalateWhen": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "referWhen": [
        "К гинекологу-хирургу/онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "НПВС, транексамовая кислота, КОК, ЛНГ-ВМК."
      ],
      "surgical": [
        "Гистероскопия (полип/субмукозная миома), аблация, гистерэктомия."
      ],
      "guidelines": {
        "esge": "ЛНГ-ВМК — первая линия при АМК.",
        "ru": "Биопсия эндометрия при риске злокачественности."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Эндометрий/миометрий"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "матка",
          "description": "Утолщение эндометрия, миоматозные узлы, полип.",
          "normal": "Эндометрий ≤ 4 мм в менопаузе.",
          "pathology": "АМК-ассоциированная патология.",
          "clinicalSignificance": "Уточняет PALM-компонент."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг при АМК."
      ]
    },
    "recommendations": [
      "Исключение беременности, анемии, коагулопатии.",
      "ЛНГ-ВМК — эффективная терапия."
    ],
    "prognosis": {
      "general": "Хороший при корректном ведении.",
      "factors": [
        "Причина",
        "Анемия"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Через 3 мес, далее по показаниям",
      "duration": "До стабилизации",
      "tests": [
        "ОАК",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль кровопотери."
      ],
      "earlierReviewIf": [
        "Нарастание кровотечения, анемия."
      ],
      "switchTreatmentIf": [
        "Нет эффекта медикаментов."
      ],
      "urgentReassessmentIf": [
        "Гемодинамическая нестабильность."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак).",
      "Не откладывать биопсию при толстом эндометрии."
    ],
    "patientCounseling": [
      "Объяснить PALM-COEIN.",
      "Важность контроля анемии."
    ],
    "specialPopulations": {
      "adolescents": [
        "Часто овуляторная дисфункция; исключить коагулопатию."
      ],
      "fertilityPlanning": [
        "ЛНГ-ВМК и гормоны совместимы с планированием."
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
    "id": "stub-n92-7",
    "name": "Обильные и частые менструации",
    "icd": "N92.7",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Обильные и частые менструации (N92.7) — обильные и/или длительные менструальные кровотечения.",
    "overview": {
      "quickTake": "Обильные и частые менструации: АМК; исключите органическую патологию (миома, полип, гиперплазия/рак) и коагулопатию; далее — гормональная/хирургическая терапия.",
      "prevalence": "До 30% женщин репродуктивного возраста.",
      "riskLevel": "moderate",
      "practiceFocus": "PALM-COEIN классификация АМК."
    },
    "epidemiology": "Часто в перименопаузе и при миоме.",
    "etiology": [
      "PALM: полип, аденомиоз, лейомиома, гиперплазия/злокачественность",
      "COEIN: коагулопатия, овуляторная дисфункция, эндометриальная, ятрогения, невыясненная"
    ],
    "symptoms": [
      "Обильные менструации",
      "Сгустки",
      "Анемия"
    ],
    "symptomGroups": {
      "typical": [
        "Обильные/длительные менструации.",
        "Слабость при анемии."
      ],
      "alarm": [
        "Обильное кровотечение с гемодинамической нестабильностью."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Обильные и частые менструации: исключите органику (УЗИ/биопсия) и коагулопатию; ведение по PALM-COEIN — от НПВС/гормонов до хирургии.",
      "redFlags": [
        "Гемодинамическая нестабильность, анемия тяжёлая.",
        "АМК в постменопаузе (исключить рак)."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, ОАК, коагулограмма, биопсия при показаниях.",
        "НПВС/транексамовая кислота, гормональная терапия."
      ],
      "diagnosticMinimum": [
        "УЗИ, ОАК, коагулограмма, биопсия эндометрия при риске."
      ],
      "whenToEscalate": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "PALM-COEIN — системный подход к АМК."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение АМК.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Обильные/длительные менструации при исключённой беременности."
      ],
      "laboratory": [
        "ОАК (анемия), коагулограмма, гормоны.",
        "Биопсия эндометрия при риске злокачественности."
      ],
      "imaging": [
        "УЗИ эндометрия; гистероскопия/МРТ при показаниях."
      ],
      "diagnosisConfirmedWhen": [
        "По PALM-COEIN после исключения органики/коагулопатии."
      ],
      "diagnosisExcludedWhen": [
        "Беременность (другое ведение)."
      ]
    },
    "severityStratification": {
      "title": "PALM-COEIN",
      "tiers": [
        {
          "name": "Функциональная/легкая",
          "criteria": [
            "Без органики, лёгкая анемия."
          ],
          "clinicalMeaning": "Медикаментозно.",
          "managementImpact": "НПВС, транексамовая кислота, КОК/ЛНГ-ВМК."
        },
        {
          "name": "Органическая/тяжёлая",
          "criteria": [
            "Миома/полип/гиперплазия, тяжёлая анемия."
          ],
          "clinicalMeaning": "Хирургия/биопсия.",
          "managementImpact": "Гистероскопия, ВМК, аблация, гистерэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Миома/полип/гиперплазия",
        "whyConfused": "АМК.",
        "howToDistinguish": "УЗИ/биопсия.",
        "testsIfNeeded": [
          "УЗИ",
          "биопсия"
        ]
      },
      {
        "condition": "Беременность/осложнения",
        "whyConfused": "Кровотечение из половых путей.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ, ОАК, коагулограмма, исключение беременности."
      ],
      "confirmDiagnosis": [
        "PALM-COEIN классификация."
      ],
      "startTreatment": [
        "НПВС/транексамовая кислота; КОК/ЛНГ-ВМК; при органике — хирургия."
      ],
      "reassess": [
        "Контроль кровопотери и анемии."
      ],
      "escalateWhen": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "referWhen": [
        "К гинекологу-хирургу/онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "НПВС, транексамовая кислота, КОК, ЛНГ-ВМК."
      ],
      "surgical": [
        "Гистероскопия (полип/субмукозная миома), аблация, гистерэктомия."
      ],
      "guidelines": {
        "esge": "ЛНГ-ВМК — первая линия при АМК.",
        "ru": "Биопсия эндометрия при риске злокачественности."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Эндометрий/миометрий"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "матка",
          "description": "Утолщение эндометрия, миоматозные узлы, полип.",
          "normal": "Эндометрий ≤ 4 мм в менопаузе.",
          "pathology": "АМК-ассоциированная патология.",
          "clinicalSignificance": "Уточняет PALM-компонент."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг при АМК."
      ]
    },
    "recommendations": [
      "Исключение беременности, анемии, коагулопатии.",
      "ЛНГ-ВМК — эффективная терапия."
    ],
    "prognosis": {
      "general": "Хороший при корректном ведении.",
      "factors": [
        "Причина",
        "Анемия"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Через 3 мес, далее по показаниям",
      "duration": "До стабилизации",
      "tests": [
        "ОАК",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль кровопотери."
      ],
      "earlierReviewIf": [
        "Нарастание кровотечения, анемия."
      ],
      "switchTreatmentIf": [
        "Нет эффекта медикаментов."
      ],
      "urgentReassessmentIf": [
        "Гемодинамическая нестабильность."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак).",
      "Не откладывать биопсию при толстом эндометрии."
    ],
    "patientCounseling": [
      "Объяснить PALM-COEIN.",
      "Важность контроля анемии."
    ],
    "specialPopulations": {
      "adolescents": [
        "Часто овуляторная дисфункция; исключить коагулопатию."
      ],
      "fertilityPlanning": [
        "ЛНГ-ВМК и гормоны совместимы с планированием."
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
    "id": "stub-n92-8",
    "name": "Обильные и частые менструации",
    "icd": "N92.8",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Обильные и частые менструации (N92.8) — обильные и/или длительные менструальные кровотечения.",
    "overview": {
      "quickTake": "Обильные и частые менструации: АМК; исключите органическую патологию (миома, полип, гиперплазия/рак) и коагулопатию; далее — гормональная/хирургическая терапия.",
      "prevalence": "До 30% женщин репродуктивного возраста.",
      "riskLevel": "moderate",
      "practiceFocus": "PALM-COEIN классификация АМК."
    },
    "epidemiology": "Часто в перименопаузе и при миоме.",
    "etiology": [
      "PALM: полип, аденомиоз, лейомиома, гиперплазия/злокачественность",
      "COEIN: коагулопатия, овуляторная дисфункция, эндометриальная, ятрогения, невыясненная"
    ],
    "symptoms": [
      "Обильные менструации",
      "Сгустки",
      "Анемия"
    ],
    "symptomGroups": {
      "typical": [
        "Обильные/длительные менструации.",
        "Слабость при анемии."
      ],
      "alarm": [
        "Обильное кровотечение с гемодинамической нестабильностью."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Обильные и частые менструации: исключите органику (УЗИ/биопсия) и коагулопатию; ведение по PALM-COEIN — от НПВС/гормонов до хирургии.",
      "redFlags": [
        "Гемодинамическая нестабильность, анемия тяжёлая.",
        "АМК в постменопаузе (исключить рак)."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, ОАК, коагулограмма, биопсия при показаниях.",
        "НПВС/транексамовая кислота, гормональная терапия."
      ],
      "diagnosticMinimum": [
        "УЗИ, ОАК, коагулограмма, биопсия эндометрия при риске."
      ],
      "whenToEscalate": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "PALM-COEIN — системный подход к АМК."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение АМК.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Обильные/длительные менструации при исключённой беременности."
      ],
      "laboratory": [
        "ОАК (анемия), коагулограмма, гормоны.",
        "Биопсия эндометрия при риске злокачественности."
      ],
      "imaging": [
        "УЗИ эндометрия; гистероскопия/МРТ при показаниях."
      ],
      "diagnosisConfirmedWhen": [
        "По PALM-COEIN после исключения органики/коагулопатии."
      ],
      "diagnosisExcludedWhen": [
        "Беременность (другое ведение)."
      ]
    },
    "severityStratification": {
      "title": "PALM-COEIN",
      "tiers": [
        {
          "name": "Функциональная/легкая",
          "criteria": [
            "Без органики, лёгкая анемия."
          ],
          "clinicalMeaning": "Медикаментозно.",
          "managementImpact": "НПВС, транексамовая кислота, КОК/ЛНГ-ВМК."
        },
        {
          "name": "Органическая/тяжёлая",
          "criteria": [
            "Миома/полип/гиперплазия, тяжёлая анемия."
          ],
          "clinicalMeaning": "Хирургия/биопсия.",
          "managementImpact": "Гистероскопия, ВМК, аблация, гистерэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Миома/полип/гиперплазия",
        "whyConfused": "АМК.",
        "howToDistinguish": "УЗИ/биопсия.",
        "testsIfNeeded": [
          "УЗИ",
          "биопсия"
        ]
      },
      {
        "condition": "Беременность/осложнения",
        "whyConfused": "Кровотечение из половых путей.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ, ОАК, коагулограмма, исключение беременности."
      ],
      "confirmDiagnosis": [
        "PALM-COEIN классификация."
      ],
      "startTreatment": [
        "НПВС/транексамовая кислота; КОК/ЛНГ-ВМК; при органике — хирургия."
      ],
      "reassess": [
        "Контроль кровопотери и анемии."
      ],
      "escalateWhen": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "referWhen": [
        "К гинекологу-хирургу/онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "НПВС, транексамовая кислота, КОК, ЛНГ-ВМК."
      ],
      "surgical": [
        "Гистероскопия (полип/субмукозная миома), аблация, гистерэктомия."
      ],
      "guidelines": {
        "esge": "ЛНГ-ВМК — первая линия при АМК.",
        "ru": "Биопсия эндометрия при риске злокачественности."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Эндометрий/миометрий"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "матка",
          "description": "Утолщение эндометрия, миоматозные узлы, полип.",
          "normal": "Эндометрий ≤ 4 мм в менопаузе.",
          "pathology": "АМК-ассоциированная патология.",
          "clinicalSignificance": "Уточняет PALM-компонент."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг при АМК."
      ]
    },
    "recommendations": [
      "Исключение беременности, анемии, коагулопатии.",
      "ЛНГ-ВМК — эффективная терапия."
    ],
    "prognosis": {
      "general": "Хороший при корректном ведении.",
      "factors": [
        "Причина",
        "Анемия"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Через 3 мес, далее по показаниям",
      "duration": "До стабилизации",
      "tests": [
        "ОАК",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль кровопотери."
      ],
      "earlierReviewIf": [
        "Нарастание кровотечения, анемия."
      ],
      "switchTreatmentIf": [
        "Нет эффекта медикаментов."
      ],
      "urgentReassessmentIf": [
        "Гемодинамическая нестабильность."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак).",
      "Не откладывать биопсию при толстом эндометрии."
    ],
    "patientCounseling": [
      "Объяснить PALM-COEIN.",
      "Важность контроля анемии."
    ],
    "specialPopulations": {
      "adolescents": [
        "Часто овуляторная дисфункция; исключить коагулопатию."
      ],
      "fertilityPlanning": [
        "ЛНГ-ВМК и гормоны совместимы с планированием."
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
    "id": "stub-n92-9",
    "name": "Обильные и частые менструации",
    "icd": "N92.9",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Обильные и частые менструации (N92.9) — обильные и/или длительные менструальные кровотечения.",
    "overview": {
      "quickTake": "Обильные и частые менструации: АМК; исключите органическую патологию (миома, полип, гиперплазия/рак) и коагулопатию; далее — гормональная/хирургическая терапия.",
      "prevalence": "До 30% женщин репродуктивного возраста.",
      "riskLevel": "moderate",
      "practiceFocus": "PALM-COEIN классификация АМК."
    },
    "epidemiology": "Часто в перименопаузе и при миоме.",
    "etiology": [
      "PALM: полип, аденомиоз, лейомиома, гиперплазия/злокачественность",
      "COEIN: коагулопатия, овуляторная дисфункция, эндометриальная, ятрогения, невыясненная"
    ],
    "symptoms": [
      "Обильные менструации",
      "Сгустки",
      "Анемия"
    ],
    "symptomGroups": {
      "typical": [
        "Обильные/длительные менструации.",
        "Слабость при анемии."
      ],
      "alarm": [
        "Обильное кровотечение с гемодинамической нестабильностью."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Обильные и частые менструации: исключите органику (УЗИ/биопсия) и коагулопатию; ведение по PALM-COEIN — от НПВС/гормонов до хирургии.",
      "redFlags": [
        "Гемодинамическая нестабильность, анемия тяжёлая.",
        "АМК в постменопаузе (исключить рак)."
      ],
      "firstLineActions": [
        "УЗИ эндометрия, ОАК, коагулограмма, биопсия при показаниях.",
        "НПВС/транексамовая кислота, гормональная терапия."
      ],
      "diagnosticMinimum": [
        "УЗИ, ОАК, коагулограмма, биопсия эндометрия при риске."
      ],
      "whenToEscalate": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "clinicalPearls": [
        "PALM-COEIN — системный подход к АМК."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ESGE",
        "title": "Abnormal uterine bleeding guideline",
        "documentType": "Guideline",
        "scope": "Классификация и ведение АМК.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Обильные/длительные менструации при исключённой беременности."
      ],
      "laboratory": [
        "ОАК (анемия), коагулограмма, гормоны.",
        "Биопсия эндометрия при риске злокачественности."
      ],
      "imaging": [
        "УЗИ эндометрия; гистероскопия/МРТ при показаниях."
      ],
      "diagnosisConfirmedWhen": [
        "По PALM-COEIN после исключения органики/коагулопатии."
      ],
      "diagnosisExcludedWhen": [
        "Беременность (другое ведение)."
      ]
    },
    "severityStratification": {
      "title": "PALM-COEIN",
      "tiers": [
        {
          "name": "Функциональная/легкая",
          "criteria": [
            "Без органики, лёгкая анемия."
          ],
          "clinicalMeaning": "Медикаментозно.",
          "managementImpact": "НПВС, транексамовая кислота, КОК/ЛНГ-ВМК."
        },
        {
          "name": "Органическая/тяжёлая",
          "criteria": [
            "Миома/полип/гиперплазия, тяжёлая анемия."
          ],
          "clinicalMeaning": "Хирургия/биопсия.",
          "managementImpact": "Гистероскопия, ВМК, аблация, гистерэктомия."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Миома/полип/гиперплазия",
        "whyConfused": "АМК.",
        "howToDistinguish": "УЗИ/биопсия.",
        "testsIfNeeded": [
          "УЗИ",
          "биопсия"
        ]
      },
      {
        "condition": "Беременность/осложнения",
        "whyConfused": "Кровотечение из половых путей.",
        "howToDistinguish": "ХГЧ.",
        "testsIfNeeded": [
          "ХГЧ"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "УЗИ, ОАК, коагулограмма, исключение беременности."
      ],
      "confirmDiagnosis": [
        "PALM-COEIN классификация."
      ],
      "startTreatment": [
        "НПВС/транексамовая кислота; КОК/ЛНГ-ВМК; при органике — хирургия."
      ],
      "reassess": [
        "Контроль кровопотери и анемии."
      ],
      "escalateWhen": [
        "Тяжёлая анемия, нестабильность, подозрение на злокачественность."
      ],
      "referWhen": [
        "К гинекологу-хирургу/онкологу."
      ]
    },
    "treatment": {
      "conservative": [
        "НПВС, транексамовая кислота, КОК, ЛНГ-ВМК."
      ],
      "surgical": [
        "Гистероскопия (полип/субмукозная миома), аблация, гистерэктомия."
      ],
      "guidelines": {
        "esge": "ЛНГ-ВМК — первая линия при АМК.",
        "ru": "Биопсия эндометрия при риске злокачественности."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансвагинальное",
          "indications": [
            "Эндометрий/миометрий"
          ],
          "preparation": "Мочевой пузырь опорожнить"
        }
      ],
      "findings": [
        {
          "location": "матка",
          "description": "Утолщение эндометрия, миоматозные узлы, полип.",
          "normal": "Эндометрий ≤ 4 мм в менопаузе.",
          "pathology": "АМК-ассоциированная патология.",
          "clinicalSignificance": "Уточняет PALM-компонент."
        }
      ],
      "imagingTips": [
        "УЗИ — первый шаг при АМК."
      ]
    },
    "recommendations": [
      "Исключение беременности, анемии, коагулопатии.",
      "ЛНГ-ВМК — эффективная терапия."
    ],
    "prognosis": {
      "general": "Хороший при корректном ведении.",
      "factors": [
        "Причина",
        "Анемия"
      ],
      "survival": "Доброкачественное."
    },
    "followUp": {
      "frequency": "Через 3 мес, далее по показаниям",
      "duration": "До стабилизации",
      "tests": [
        "ОАК",
        "УЗИ"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль кровопотери."
      ],
      "earlierReviewIf": [
        "Нарастание кровотечения, анемия."
      ],
      "switchTreatmentIf": [
        "Нет эффекта медикаментов."
      ],
      "urgentReassessmentIf": [
        "Гемодинамическая нестабильность."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не игнорировать АМК в постменопаузе (исключить рак).",
      "Не откладывать биопсию при толстом эндометрии."
    ],
    "patientCounseling": [
      "Объяснить PALM-COEIN.",
      "Важность контроля анемии."
    ],
    "specialPopulations": {
      "adolescents": [
        "Часто овуляторная дисфункция; исключить коагулопатию."
      ],
      "fertilityPlanning": [
        "ЛНГ-ВМК и гормоны совместимы с планированием."
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
    "id": "stub-n93-0",
    "name": "Аномальные кровотечения",
    "icd": "N93.0",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Аномальные кровотечения (N93.0) — Нарушение менструального цикла.",
    "overview": {
      "quickTake": "Аномальные кровотечения (N93.0): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Аномальные кровотечения: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n93-1",
    "name": "Аномальные кровотечения",
    "icd": "N93.1",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Аномальные кровотечения (N93.1) — Нарушение менструального цикла.",
    "overview": {
      "quickTake": "Аномальные кровотечения (N93.1): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Аномальные кровотечения: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n93-2",
    "name": "Аномальные кровотечения",
    "icd": "N93.2",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Аномальные кровотечения (N93.2) — Нарушение менструального цикла.",
    "overview": {
      "quickTake": "Аномальные кровотечения (N93.2): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Аномальные кровотечения: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n93-3",
    "name": "Аномальные кровотечения",
    "icd": "N93.3",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Аномальные кровотечения (N93.3) — Нарушение менструального цикла.",
    "overview": {
      "quickTake": "Аномальные кровотечения (N93.3): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Аномальные кровотечения: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n93-4",
    "name": "Аномальные кровотечения",
    "icd": "N93.4",
    "subtitle": "Гинекология",
    "icon": "menstrual",
    "definition": "Аномальные кровотечения (N93.4) — Нарушение менструального цикла.",
    "overview": {
      "quickTake": "Аномальные кровотечения (N93.4): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Аномальные кровотечения: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
  }
];

export default chunk;
