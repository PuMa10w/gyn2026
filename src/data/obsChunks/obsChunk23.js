const chunk = [
  {
    "id": "stub-o80-0",
    "name": "Спонтанные роды",
    "icd": "O80.0",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Спонтанные роды (O80.0) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Спонтанные роды (O80.0): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Спонтанные роды: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o80-1",
    "name": "Спонтанные роды",
    "icd": "O80.1",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Спонтанные роды (O80.1) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Спонтанные роды (O80.1): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Спонтанные роды: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o80-2",
    "name": "Спонтанные роды",
    "icd": "O80.2",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Спонтанные роды (O80.2) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Спонтанные роды (O80.2): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Спонтанные роды: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o80-3",
    "name": "Спонтанные роды",
    "icd": "O80.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Спонтанные роды (O80.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Спонтанные роды (O80.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Спонтанные роды: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o80-4",
    "name": "Спонтанные роды",
    "icd": "O80.4",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Спонтанные роды (O80.4) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Спонтанные роды (O80.4): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Спонтанные роды: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o80-5",
    "name": "Спонтанные роды",
    "icd": "O80.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Спонтанные роды (O80.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Спонтанные роды (O80.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Спонтанные роды: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o80-6",
    "name": "Спонтанные роды",
    "icd": "O80.6",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Спонтанные роды (O80.6) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Спонтанные роды (O80.6): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Спонтанные роды: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o80-7",
    "name": "Спонтанные роды",
    "icd": "O80.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Спонтанные роды (O80.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Спонтанные роды (O80.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Спонтанные роды: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o80-8",
    "name": "Спонтанные роды",
    "icd": "O80.8",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Спонтанные роды (O80.8) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Спонтанные роды (O80.8): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Спонтанные роды: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o80-9",
    "name": "Спонтанные роды",
    "icd": "O80.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Спонтанные роды (O80.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Спонтанные роды (O80.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Спонтанные роды: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o81",
    "name": "Индуцированные",
    "icd": "O81",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Индуцированные (O81) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Индуцированные (O81): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Индуцированные: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o81-0",
    "name": "Индуцированные",
    "icd": "O81.0",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Индуцированные (O81.0) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Индуцированные (O81.0): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Индуцированные: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o81-1",
    "name": "Индуцированные",
    "icd": "O81.1",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Индуцированные (O81.1) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Индуцированные (O81.1): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Индуцированные: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o81-2",
    "name": "Индуцированные",
    "icd": "O81.2",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Индуцированные (O81.2) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Индуцированные (O81.2): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Индуцированные: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o81-3",
    "name": "Индуцированные",
    "icd": "O81.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Индуцированные (O81.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Индуцированные (O81.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Индуцированные: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o81-4",
    "name": "Индуцированные",
    "icd": "O81.4",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Индуцированные (O81.4) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Индуцированные (O81.4): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Индуцированные: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o81-5",
    "name": "Индуцированные",
    "icd": "O81.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Индуцированные (O81.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Индуцированные (O81.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Индуцированные: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o81-6",
    "name": "Индуцированные",
    "icd": "O81.6",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Индуцированные (O81.6) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Индуцированные (O81.6): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Индуцированные: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o81-7",
    "name": "Индуцированные",
    "icd": "O81.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Индуцированные (O81.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Индуцированные (O81.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Индуцированные: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o81-8",
    "name": "Индуцированные",
    "icd": "O81.8",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Индуцированные (O81.8) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Индуцированные (O81.8): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Индуцированные: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o81-9",
    "name": "Индуцированные",
    "icd": "O81.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Индуцированные (O81.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Индуцированные (O81.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Индуцированные: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o82-0",
    "name": "Кесарево сечение",
    "icd": "O82.0",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Кесарево сечение (O82.0) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Кесарево сечение (O82.0): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Кесарево сечение: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o82-1",
    "name": "Кесарево сечение",
    "icd": "O82.1",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Кесарево сечение (O82.1) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Кесарево сечение (O82.1): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Кесарево сечение: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o82-2",
    "name": "Кесарево сечение",
    "icd": "O82.2",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Кесарево сечение (O82.2) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Кесарево сечение (O82.2): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Кесарево сечение: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o82-3",
    "name": "Кесарево сечение",
    "icd": "O82.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Кесарево сечение (O82.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Кесарево сечение (O82.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Кесарево сечение: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o82-4",
    "name": "Кесарево сечение",
    "icd": "O82.4",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Кесарево сечение (O82.4) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Кесарево сечение (O82.4): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Кесарево сечение: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o82-5",
    "name": "Кесарево сечение",
    "icd": "O82.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Кесарево сечение (O82.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Кесарево сечение (O82.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Кесарево сечение: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o82-6",
    "name": "Кесарево сечение",
    "icd": "O82.6",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Кесарево сечение (O82.6) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Кесарево сечение (O82.6): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Кесарево сечение: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o82-7",
    "name": "Кесарево сечение",
    "icd": "O82.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Кесарево сечение (O82.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Кесарево сечение (O82.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Кесарево сечение: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o82-8",
    "name": "Кесарево сечение",
    "icd": "O82.8",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Кесарево сечение (O82.8) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Кесарево сечение (O82.8): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Кесарево сечение: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o82-9",
    "name": "Кесарево сечение",
    "icd": "O82.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Кесарево сечение (O82.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Кесарево сечение (O82.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
      "quickSummary": "Кесарево сечение: акушерское состояние требует оценки матери и плода; эскалация при угрожающих симптомах.",
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
    "id": "stub-o83",
    "name": "Другие",
    "icd": "O83",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O83) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O83): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
    "id": "stub-o83-0",
    "name": "Другие",
    "icd": "O83.0",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O83.0) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O83.0): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
    "id": "stub-o83-1",
    "name": "Другие",
    "icd": "O83.1",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O83.1) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O83.1): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
    "id": "stub-o83-2",
    "name": "Другие",
    "icd": "O83.2",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O83.2) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O83.2): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
    "id": "stub-o83-3",
    "name": "Другие",
    "icd": "O83.3",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O83.3) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O83.3): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
    "id": "stub-o83-4",
    "name": "Другие",
    "icd": "O83.4",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O83.4) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O83.4): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
    "id": "stub-o83-5",
    "name": "Другие",
    "icd": "O83.5",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O83.5) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O83.5): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
    "id": "stub-o83-6",
    "name": "Другие",
    "icd": "O83.6",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O83.6) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O83.6): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
    "id": "stub-o83-7",
    "name": "Другие",
    "icd": "O83.7",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O83.7) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O83.7): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
    "id": "stub-o83-8",
    "name": "Другие",
    "icd": "O83.8",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O83.8) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O83.8): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
    "id": "stub-o83-9",
    "name": "Другие",
    "icd": "O83.9",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Другие (O83.9) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Другие (O83.9): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
    "id": "stub-o84",
    "name": "Старые шрамы/рубцы",
    "icd": "O84",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Старые шрамы/рубцы (O84) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Старые шрамы/рубцы (O84): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
    "id": "stub-o84-0",
    "name": "Старые шрамы/рубцы",
    "icd": "O84.0",
    "subtitle": "Акушерство",
    "icon": "pregnancy",
    "definition": "Старые шрамы/рубцы (O84.0) — акушерское состояние/осложнение беременности, родов или послеродового периода.",
    "overview": {
      "quickTake": "Старые шрамы/рубцы (O84.0): акушерское ведение; своевременная диагностика и маршрутизация в перинатальный центр при осложнениях.",
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
  }
];

export default chunk;
