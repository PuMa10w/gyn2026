const chunk = [
  {
    "id": "stub-o84-1",
    "name": "Старые шрамы/рубцы",
    "icd": "O84.1",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Старые шрамы/рубцы (O84.1) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Старые шрамы/рубцы (O84.1): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Старые шрамы/рубцы: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o84-2",
    "name": "Старые шрамы/рубцы",
    "icd": "O84.2",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Старые шрамы/рубцы (O84.2) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Старые шрамы/рубцы (O84.2): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Старые шрамы/рубцы: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o84-3",
    "name": "Старые шрамы/рубцы",
    "icd": "O84.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Старые шрамы/рубцы (O84.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Старые шрамы/рубцы (O84.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Старые шрамы/рубцы: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o84-4",
    "name": "Старые шрамы/рубцы",
    "icd": "O84.4",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Старые шрамы/рубцы (O84.4) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Старые шрамы/рубцы (O84.4): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Старые шрамы/рубцы: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o84-5",
    "name": "Старые шрамы/рубцы",
    "icd": "O84.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Старые шрамы/рубцы (O84.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Старые шрамы/рубцы (O84.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Старые шрамы/рубцы: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o84-6",
    "name": "Старые шрамы/рубцы",
    "icd": "O84.6",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Старые шрамы/рубцы (O84.6) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Старые шрамы/рубцы (O84.6): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Старые шрамы/рубцы: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o84-7",
    "name": "Старые шрамы/рубцы",
    "icd": "O84.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Старые шрамы/рубцы (O84.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Старые шрамы/рубцы (O84.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Старые шрамы/рубцы: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o84-8",
    "name": "Старые шрамы/рубцы",
    "icd": "O84.8",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Старые шрамы/рубцы (O84.8) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Старые шрамы/рубцы (O84.8): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Старые шрамы/рубцы: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o84-9",
    "name": "Старые шрамы/рубцы",
    "icd": "O84.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Старые шрамы/рубцы (O84.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Старые шрамы/рубцы (O84.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Старые шрамы/рубцы: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o85-0",
    "name": "Инфекции",
    "icd": "O85.0",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Инфекции (O85.0) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Инфекции (O85.0): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Инфекции: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o85-1",
    "name": "Инфекции",
    "icd": "O85.1",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Инфекции (O85.1) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Инфекции (O85.1): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Инфекции: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o85-2",
    "name": "Инфекции",
    "icd": "O85.2",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Инфекции (O85.2) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Инфекции (O85.2): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Инфекции: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o85-3",
    "name": "Инфекции",
    "icd": "O85.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Инфекции (O85.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Инфекции (O85.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Инфекции: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o85-4",
    "name": "Инфекции",
    "icd": "O85.4",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Инфекции (O85.4) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Инфекции (O85.4): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Инфекции: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o85-5",
    "name": "Инфекции",
    "icd": "O85.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Инфекции (O85.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Инфекции (O85.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Инфекции: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o85-6",
    "name": "Инфекции",
    "icd": "O85.6",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Инфекции (O85.6) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Инфекции (O85.6): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Инфекции: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o85-7",
    "name": "Инфекции",
    "icd": "O85.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Инфекции (O85.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Инфекции (O85.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Инфекции: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o85-8",
    "name": "Инфекции",
    "icd": "O85.8",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Инфекции (O85.8) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Инфекции (O85.8): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Инфекции: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o85-9",
    "name": "Инфекции",
    "icd": "O85.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Инфекции (O85.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Инфекции (O85.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Инфекции: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o86",
    "name": "Другие",
    "icd": "O86",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O86) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O86): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o86-0",
    "name": "Другие",
    "icd": "O86.0",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O86.0) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O86.0): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o86-1",
    "name": "Другие",
    "icd": "O86.1",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O86.1) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O86.1): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o86-2",
    "name": "Другие",
    "icd": "O86.2",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O86.2) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O86.2): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o86-3",
    "name": "Другие",
    "icd": "O86.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O86.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O86.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o86-4",
    "name": "Другие",
    "icd": "O86.4",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O86.4) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O86.4): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o86-5",
    "name": "Другие",
    "icd": "O86.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O86.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O86.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o86-6",
    "name": "Другие",
    "icd": "O86.6",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O86.6) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O86.6): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o86-7",
    "name": "Другие",
    "icd": "O86.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O86.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O86.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o86-9",
    "name": "Другие",
    "icd": "O86.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O86.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O86.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Другие: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o88-0",
    "name": "Задержка околоплодных вод",
    "icd": "O88.0",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Задержка околоплодных вод (O88.0) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Задержка околоплодных вод (O88.0): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Задержка околоплодных вод: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o88-2",
    "name": "Задержка околоплодных вод",
    "icd": "O88.2",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Задержка околоплодных вод (O88.2) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Задержка околоплодных вод (O88.2): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Задержка околоплодных вод: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o88-3",
    "name": "Задержка околоплодных вод",
    "icd": "O88.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Задержка околоплодных вод (O88.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Задержка околоплодных вод (O88.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Задержка околоплодных вод: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o88-4",
    "name": "Задержка околоплодных вод",
    "icd": "O88.4",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Задержка околоплодных вод (O88.4) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Задержка околоплодных вод (O88.4): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Задержка околоплодных вод: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o88-5",
    "name": "Задержка околоплодных вод",
    "icd": "O88.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Задержка околоплодных вод (O88.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Задержка околоплодных вод (O88.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Задержка околоплодных вод: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o88-6",
    "name": "Задержка околоплодных вод",
    "icd": "O88.6",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Задержка околоплодных вод (O88.6) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Задержка околоплодных вод (O88.6): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Задержка околоплодных вод: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o88-7",
    "name": "Задержка околоплодных вод",
    "icd": "O88.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Задержка околоплодных вод (O88.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Задержка околоплодных вод (O88.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Задержка околоплодных вод: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o88-8",
    "name": "Задержка околоплодных вод",
    "icd": "O88.8",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Задержка околоплодных вод (O88.8) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Задержка околоплодных вод (O88.8): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Задержка околоплодных вод: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o88-9",
    "name": "Задержка околоплодных вод",
    "icd": "O88.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Задержка околоплодных вод (O88.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Задержка околоплодных вод (O88.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Задержка околоплодных вод: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
