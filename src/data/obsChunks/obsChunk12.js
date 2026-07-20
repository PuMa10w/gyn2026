const chunk = [
  {
    "id": "stub-o24-8",
    "name": "Сахарный диабет",
    "icd": "O24.8",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Сахарный диабет (O24.8) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Сахарный диабет (O24.8): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Сахарный диабет: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o24-9",
    "name": "Сахарный диабет",
    "icd": "O24.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Сахарный диабет (O24.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Сахарный диабет (O24.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Сахарный диабет: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o25",
    "name": "Недостаточность питания",
    "icd": "O25",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Недостаточность питания (O25) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Недостаточность питания (O25): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Недостаточность питания: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o25-0",
    "name": "Недостаточность питания",
    "icd": "O25.0",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Недостаточность питания (O25.0) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Недостаточность питания (O25.0): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Недостаточность питания: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o25-1",
    "name": "Недостаточность питания",
    "icd": "O25.1",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Недостаточность питания (O25.1) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Недостаточность питания (O25.1): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Недостаточность питания: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o25-2",
    "name": "Недостаточность питания",
    "icd": "O25.2",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Недостаточность питания (O25.2) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Недостаточность питания (O25.2): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Недостаточность питания: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o25-3",
    "name": "Недостаточность питания",
    "icd": "O25.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Недостаточность питания (O25.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Недостаточность питания (O25.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Недостаточность питания: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o25-4",
    "name": "Недостаточность питания",
    "icd": "O25.4",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Недостаточность питания (O25.4) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Недостаточность питания (O25.4): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Недостаточность питания: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o25-5",
    "name": "Недостаточность питания",
    "icd": "O25.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Недостаточность питания (O25.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Недостаточность питания (O25.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Недостаточность питания: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o25-6",
    "name": "Недостаточность питания",
    "icd": "O25.6",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Недостаточность питания (O25.6) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Недостаточность питания (O25.6): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Недостаточность питания: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o25-7",
    "name": "Недостаточность питания",
    "icd": "O25.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Недостаточность питания (O25.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Недостаточность питания (O25.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Недостаточность питания: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o25-8",
    "name": "Недостаточность питания",
    "icd": "O25.8",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Недостаточность питания (O25.8) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Недостаточность питания (O25.8): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Недостаточность питания: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o25-9",
    "name": "Недостаточность питания",
    "icd": "O25.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Недостаточность питания (O25.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Недостаточность питания (O25.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Недостаточность питания: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o26",
    "name": "Расстройства, связанные с беременностью",
    "icd": "O26",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Расстройства, связанные с беременностью (O26) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Расстройства, связанные с беременностью (O26): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Расстройства, связанные с беременностью: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o26-0",
    "name": "Расстройства, связанные с беременностью",
    "icd": "O26.0",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Расстройства, связанные с беременностью (O26.0) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Расстройства, связанные с беременностью (O26.0): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Расстройства, связанные с беременностью: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o26-1",
    "name": "Расстройства, связанные с беременностью",
    "icd": "O26.1",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Расстройства, связанные с беременностью (O26.1) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Расстройства, связанные с беременностью (O26.1): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Расстройства, связанные с беременностью: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o26-3",
    "name": "Расстройства, связанные с беременностью",
    "icd": "O26.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Расстройства, связанные с беременностью (O26.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Расстройства, связанные с беременностью (O26.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Расстройства, связанные с беременностью: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o26-5",
    "name": "Расстройства, связанные с беременностью",
    "icd": "O26.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Расстройства, связанные с беременностью (O26.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Расстройства, связанные с беременностью (O26.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Расстройства, связанные с беременностью: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o26-7",
    "name": "Расстройства, связанные с беременностью",
    "icd": "O26.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Расстройства, связанные с беременностью (O26.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Расстройства, связанные с беременностью (O26.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Расстройства, связанные с беременностью: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o26-9",
    "name": "Расстройства, связанные с беременностью",
    "icd": "O26.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Расстройства, связанные с беременностью (O26.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Расстройства, связанные с беременностью (O26.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Расстройства, связанные с беременностью: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
