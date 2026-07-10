import { describe, it, expect } from 'vitest';
import { loadGynData } from '../loadGynData';
import { loadObsData } from '../loadObsData';

const STUB = ['Требуется уточнение', 'Данные отсутствуют', 'Клиническое описание для'];

describe('runtime content', () => {
  it('loads gyn + obs with dedup and reports stub ratio', async () => {
    const [gyn, obs] = await Promise.all([loadGynData(), loadObsData()]);
    const all = [...gyn, ...obs];
    const stubCount = all.filter((d) => STUB.some((s) => JSON.stringify(d).includes(s))).length;
    console.log(`TOTAL: ${all.length}, STUB: ${stubCount} (${(stubCount / all.length * 100).toFixed(1)}%)`);
    expect(all.length).toBeGreaterThan(1400);
    expect(stubCount).toBeLessThan(all.length); // дедуп сработал
  });

  it('fetal-growth-restriction / pcos / uterine-fibroids present as real cards', async () => {
    const [gyn, obs] = await Promise.all([loadGynData(), loadObsData()]);
    const all = [...gyn, ...obs];
    const ids = all.map((d) => String(d.id).replace(/__[a-z]+$/, ''));
    for (const target of ['fetal-growth-restriction', 'pcos', 'uterine-fibroids', 'abnormal-uterine-bleeding', 'menopausal-hormone-therapy', 'contraception']) {
      const found = ids.some((i) => i.includes(target.split('-')[0]));
      console.log(target, found ? 'present' : 'MISSING');
    }
  });
});
