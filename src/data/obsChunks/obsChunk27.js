const chunk = [
  {
    "id": "stub-o98-9",
    "name": "Инфекционные болезни",
    "icd": "O98.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Инфекционные болезни (O98.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Инфекционные болезни (O98.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Инфекционные болезни: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o99",
    "name": "Другие состояния",
    "icd": "O99",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие состояния (O99) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие состояния (O99): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие состояния: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o99-1",
    "name": "Другие состояния",
    "icd": "O99.1",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие состояния (O99.1) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие состояния (O99.1): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие состояния: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o99-3",
    "name": "Другие состояния",
    "icd": "O99.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие состояния (O99.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие состояния (O99.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие состояния: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o99-4",
    "name": "Другие состояния",
    "icd": "O99.4",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие состояния (O99.4) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие состояния (O99.4): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие состояния: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o99-5",
    "name": "Другие состояния",
    "icd": "O99.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие состояния (O99.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие состояния (O99.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие состояния: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o99-6",
    "name": "Другие состояния",
    "icd": "O99.6",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие состояния (O99.6) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие состояния (O99.6): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие состояния: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o99-7",
    "name": "Другие состояния",
    "icd": "O99.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие состояния (O99.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие состояния (O99.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие состояния: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o99-9",
    "name": "Другие состояния",
    "icd": "O99.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие состояния (O99.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие состояния (O99.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие состояния: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
