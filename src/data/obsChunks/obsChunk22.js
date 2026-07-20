const chunk = [
  {
    "id": "stub-o74-9",
    "name": "Аномалии сокращений",
    "icd": "O74.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Аномалии сокращений (O74.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Аномалии сокращений (O74.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Аномалии сокращений: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o75",
    "name": "Травма матки",
    "icd": "O75",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Травма матки (O75) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Травма матки (O75): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Травма матки: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o75-0",
    "name": "Травма матки",
    "icd": "O75.0",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Травма матки (O75.0) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Травма матки (O75.0): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Травма матки: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o75-1",
    "name": "Травма матки",
    "icd": "O75.1",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Травма матки (O75.1) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Травма матки (O75.1): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Травма матки: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o75-2",
    "name": "Травма матки",
    "icd": "O75.2",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Травма матки (O75.2) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Травма матки (O75.2): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Травма матки: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o75-3",
    "name": "Травма матки",
    "icd": "O75.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Травма матки (O75.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Травма матки (O75.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Травма матки: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o75-4",
    "name": "Травма матки",
    "icd": "O75.4",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Травма матки (O75.4) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Травма матки (O75.4): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Травма матки: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o75-5",
    "name": "Травма матки",
    "icd": "O75.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Травма матки (O75.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Травма матки (O75.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Травма матки: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o75-6",
    "name": "Травма матки",
    "icd": "O75.6",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Травма матки (O75.6) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Травма матки (O75.6): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Травма матки: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o75-7",
    "name": "Травма матки",
    "icd": "O75.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Травма матки (O75.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Травма матки (O75.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Травма матки: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o75-8",
    "name": "Травма матки",
    "icd": "O75.8",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Травма матки (O75.8) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Травма матки (O75.8): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Травма матки: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o75-9",
    "name": "Травма матки",
    "icd": "O75.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Травма матки (O75.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Травма матки (O75.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Травма матки: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o76",
    "name": "Шок",
    "icd": "O76",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Шок (O76) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Шок (O76): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Шок: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o76-0",
    "name": "Шок",
    "icd": "O76.0",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Шок (O76.0) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Шок (O76.0): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Шок: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o76-1",
    "name": "Шок",
    "icd": "O76.1",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Шок (O76.1) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Шок (O76.1): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Шок: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o76-2",
    "name": "Шок",
    "icd": "O76.2",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Шок (O76.2) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Шок (O76.2): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Шок: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o76-3",
    "name": "Шок",
    "icd": "O76.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Шок (O76.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Шок (O76.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Шок: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o76-4",
    "name": "Шок",
    "icd": "O76.4",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Шок (O76.4) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Шок (O76.4): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Шок: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o76-5",
    "name": "Шок",
    "icd": "O76.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Шок (O76.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Шок (O76.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Шок: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o76-6",
    "name": "Шок",
    "icd": "O76.6",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Шок (O76.6) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Шок (O76.6): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Шок: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o76-7",
    "name": "Шок",
    "icd": "O76.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Шок (O76.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Шок (O76.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Шок: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o76-8",
    "name": "Шок",
    "icd": "O76.8",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Шок (O76.8) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Шок (O76.8): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Шок: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o76-9",
    "name": "Шок",
    "icd": "O76.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Шок (O76.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Шок (O76.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Шок: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o77",
    "name": "Эмболия",
    "icd": "O77",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Эмболия (O77) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Эмболия (O77): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Эмболия: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o77-0",
    "name": "Эмболия",
    "icd": "O77.0",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Эмболия (O77.0) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Эмболия (O77.0): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Эмболия: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o77-1",
    "name": "Эмболия",
    "icd": "O77.1",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Эмболия (O77.1) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Эмболия (O77.1): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Эмболия: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o77-2",
    "name": "Эмболия",
    "icd": "O77.2",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Эмболия (O77.2) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Эмболия (O77.2): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Эмболия: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o77-3",
    "name": "Эмболия",
    "icd": "O77.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Эмболия (O77.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Эмболия (O77.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Эмболия: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o77-4",
    "name": "Эмболия",
    "icd": "O77.4",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Эмболия (O77.4) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Эмболия (O77.4): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Эмболия: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o77-5",
    "name": "Эмболия",
    "icd": "O77.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Эмболия (O77.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Эмболия (O77.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Эмболия: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o77-6",
    "name": "Эмболия",
    "icd": "O77.6",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Эмболия (O77.6) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Эмболия (O77.6): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Эмболия: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o77-7",
    "name": "Эмболия",
    "icd": "O77.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Эмболия (O77.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Эмболия (O77.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Эмболия: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o77-8",
    "name": "Эмболия",
    "icd": "O77.8",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Эмболия (O77.8) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Эмболия (O77.8): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Эмболия: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
    "id": "stub-o77-9",
    "name": "Эмболия",
    "icd": "O77.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Эмболия (O77.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Эмболия (O77.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
      "prevalence": "Зависит от состояния.",
      "riskLevel": "high",
      "practiceFocus": "Мониторинг матери и плода, готовность к экстренному родоразрешению."
    },
    "epidemiology": "Акушерские осложнения — ведущая причина материнской/перинатальной заболеваемости.",
    "etiology": [
      "Физиологические изменения беременности",
      "Патология беременности/плацентации",
      "Инфекция, травма родов"
    ],
    "symptoms": [
      "Зависят от состояния",
      "Боль, кровотечение, нарушение самочувствия"
    ],
    "symptomGroups": {
      "typical": [
        "Симптомы по конкретному состоянию."
      ],
      "alarm": [
        "Кровотечение, гипертензия, судороги, гипоксия плода."
      ]
    },
    "clinicalSummary": {
      "quickSummary": "Эмболия: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
      "redFlags": [
        "Кровотечение, АД ≥ 160/110, судороги, страдание плода."
      ],
      "firstLineActions": [
        "Оценка матери (АД, ОАК, коагулограмма), КТГ/УЗИ плода.",
        "Маршрутизация в перинатальный центр при осложнениях."
      ],
      "diagnosticMinimum": [
        "ОАК, коагулограмма, КТГ, УЗИ/допплер плода."
      ],
      "whenToEscalate": [
        "Любое угрожающее состояние — немедленно."
      ],
      "clinicalPearls": [
        "Родоразрешение — финальная терапия при многих осложнениях."
      ]
    },
    "guidelineBasis": [
      {
        "organization": "ACOG",
        "title": "Obstetric care guidelines",
        "documentType": "Guideline",
        "scope": "Ведение беременности и осложнений.",
        "status": "latest available active guideline",
        "usedFor": [
          "diagnosis",
          "treatment",
          "delivery timing"
        ]
      },
      {
        "organization": "WHO",
        "title": "Intrapartum care",
        "documentType": "Guideline",
        "scope": "Ведение родов и послеродового периода.",
        "status": "latest available active guideline",
        "usedFor": [
          "care"
        ]
      }
    ],
    "diagnosticCriteria": {
      "clinical": [
        "Соответствие состоянию по акушерским критериям."
      ],
      "laboratory": [
        "ОАК, коагулограмма, группа крови, биохимия по показаниям."
      ],
      "imaging": [
        "УЗИ/допплер плода, КТГ."
      ],
      "diagnosisConfirmedWhen": [
        "Клиника + данные матери/плода."
      ],
      "diagnosisExcludedWhen": [
        "Другое состояние."
      ]
    },
    "severityStratification": {
      "title": "Тяжесть",
      "tiers": [
        {
          "name": "Без осложнений",
          "criteria": [
            "Стабильная мать и плод."
          ],
          "clinicalMeaning": "Ведение в ЖК.",
          "managementImpact": "Наблюдение."
        },
        {
          "name": "С осложнениями",
          "criteria": [
            "Угрожающие симптомы матери/плода."
          ],
          "clinicalMeaning": "Перинатальный центр.",
          "managementImpact": "Госпитализация, родоразрешение по показаниям."
        }
      ]
    },
    "differentialDiagnosis": [
      {
        "condition": "Другое акушерское осложнение",
        "whyConfused": "Перекрывающиеся симптомы.",
        "howToDistinguish": "Клиника + УЗИ/лабораторные данные.",
        "testsIfNeeded": [
          "УЗИ",
          "ОАК"
        ]
      }
    ],
    "managementAlgorithm": {
      "initialAssessment": [
        "Мать + плод (АД, КТГ, УЗИ)."
      ],
      "confirmDiagnosis": [
        "Клиника + данные."
      ],
      "startTreatment": [
        "По состоянию; при осложнениях — госпитализация и родоразрешение."
      ],
      "reassess": [
        "Динамика матери/плода."
      ],
      "escalateWhen": [
        "Угрожающие симптомы."
      ],
      "referWhen": [
        "В перинатальный центр."
      ]
    },
    "treatment": {
      "conservative": [
        "Наблюдение, медикаментозная коррекция по показаниям."
      ],
      "surgical": [
        "Родоразрешение (вагинальное/кесарево) по показаниям."
      ],
      "guidelines": {
        "acog": "Своевременная эскалация при осложнениях.",
        "ru": "Маршрутизация в перинатальный центр при угрозе."
      }
    },
    "ultrasound": {
      "protocols": [
        {
          "method": "трансабдоминальное + трансвагинальное",
          "indications": [
            "Оценка плода/плацентации"
          ],
          "preparation": "по ситуации"
        }
      ],
      "findings": [
        {
          "location": "плод/плацента",
          "description": "По конкретному состоянию.",
          "normal": "Норма беременности.",
          "pathology": "Акушерская патология.",
          "clinicalSignificance": "Направляет тактику."
        }
      ],
      "imagingTips": [
        "КТГ + УЗИ/допплер — оценка плода."
      ]
    },
    "recommendations": [
      "Своевременная явка в ЖК, маршрутизация при осложнениях."
    ],
    "prognosis": {
      "general": "Зависит от состояния и своевременности помощи.",
      "factors": [
        "Тяжесть",
        "Срок гестации"
      ],
      "survival": "Материнская — обычно благоприятная при помощи."
    },
    "followUp": {
      "frequency": "По акушерскому плану",
      "duration": "Беременность/послеродовье",
      "tests": [
        "УЗИ",
        "КТГ",
        "ОАК"
      ]
    },
    "followUpTriggers": {
      "routineReview": [
        "Контроль по плану."
      ],
      "earlierReviewIf": [
        "Симптомы/отклонения."
      ],
      "switchTreatmentIf": [
        "Ухудшение."
      ],
      "urgentReassessmentIf": [
        "Угрожающие симптомы матери/плода."
      ]
    },
    "contraindicatedOrAvoid": [
      "Не задерживать родоразрешение при показаниях."
    ],
    "patientCounseling": [
      "Объяснить план ведения.",
      "Когда обращаться экстренно."
    ],
    "specialPopulations": {
      "adolescents": [
        "Беременность в юном возрасте — группа риска."
      ],
      "fertilityPlanning": [
        "Послеродовая контрацепция обсуждается."
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
