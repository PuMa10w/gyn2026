import { describe, it, expect } from 'vitest';
import { dedupeByContent } from '../dedupeDiseases';
import type { Disease } from '../../types';

function mk(id: string, name: string, icd: string, subtitle: string, weight: number): Disease {
  const d: any = { id, name, icd, subtitle };
  // добавляем weight заполненных полей
  const fields = ['definition','epidemiology','etiology','symptoms','clinicalSummary','diagnosticCriteria','severityStratification','differentialDiagnosis','managementAlgorithm','treatment','ultrasound','followUpTriggers','patientCounseling','guidelineBasis','recommendations','prognosis','followUp'];
  for (let i = 0; i < weight; i++) d[fields[i]] = { filled: true };
  return d as Disease;
}

describe('dedupeByContent', () => {
  it('keeps the richer duplicate (verified over stub)', () => {
    const stub = mk('preterm-labor','Преждевременные роды','O60','Акушерство',1);
    const rich = mk('preterm-labor','Преждевременные роды','O60','Акушерство',12);
    const result = dedupeByContent([stub, rich]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(rich);
  });

  it('does not merge different ICD codes', () => {
    const a = mk('x','А','O60','Акушерство',5);
    const b = mk('y','Б','O44','Акушерство',5);
    const result = dedupeByContent([a, b]);
    expect(result).toHaveLength(2);
  });

  it('merges duplicate id across files but keeps one', () => {
    const a = mk('ectopic-pregnancy','Внематочная беременность','O00','Акушерство',2);
    const b = mk('ectopic-pregnancy','Внематочная беременность','O00','Акушерство',8);
    const c = mk('ectopic-pregnancy','Внематочная беременность','O00','Акушерство',3);
    const result = dedupeByContent([a, b, c]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(b);
  });
});
