const chunk = [
  {
    "id": "stub-n99-5",
    "name": "Другие болезни",
    "icd": "N99.5",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Другие болезни (N99.5) — Состояние после гинекологического вмешательства/процедуры.",
    "overview": {
      "quickTake": "Другие болезни (N99.5): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n99-6",
    "name": "Другие болезни",
    "icd": "N99.6",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Другие болезни (N99.6) — Состояние после гинекологического вмешательства/процедуры.",
    "overview": {
      "quickTake": "Другие болезни (N99.6): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n99-7",
    "name": "Другие болезни",
    "icd": "N99.7",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Другие болезни (N99.7) — Состояние после гинекологического вмешательства/процедуры.",
    "overview": {
      "quickTake": "Другие болезни (N99.7): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
    "id": "stub-n99-9",
    "name": "Другие болезни",
    "icd": "N99.9",
    "subtitle": "Гинекология",
    "icon": "card",
    "definition": "Другие болезни (N99.9) — Состояние после гинекологического вмешательства/процедуры.",
    "overview": {
      "quickTake": "Другие болезни (N99.9): требует клинической оценки и дифференциальной диагностики; тактика по степени тяжести.",
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
      "quickSummary": "Другие болезни: оцените при осмотре/визуализации; исключите острые и злокачественные состояния.",
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
