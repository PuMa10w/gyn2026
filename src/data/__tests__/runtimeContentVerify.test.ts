import { describe, it, expect } from 'vitest';
import { loadGynData } from '../loadGynData';
import { loadObsData } from '../loadObsData';

const STUB = ['Требуется уточнение', 'Данные отсутствуют', 'Клиническое описание для'];
const TMPL_NAME = /^(Заболевание|Болезнь|Болезни)/;

describe('runtime content', () => {
  it('loads gyn + obs with dedup and reports stub ratio', async () => {
    const [gyn, obs] = await Promise.all([loadGynData(), loadObsData()]);
    const all = [...gyn, ...obs];
    const stubCount = all.filter(
      (d) => STUB.some((s) => JSON.stringify(d).includes(s)) || TMPL_NAME.test(String(d.name)),
    ).length;
    console.log(`TOTAL: ${all.length}, STUB: ${stubCount} (${(stubCount / all.length * 100).toFixed(1)}%)`);
    // После очистки стабов и дедупа ICD-иерархии остаются только реальные карточки.
    expect(all.length).toBeGreaterThan(300);
    expect(stubCount).toBe(0); // ни дедуп-маркеров, ни шаблонных имён
  });

  it('provides real clinical cards for key conditions', async () => {
    const [gyn, obs] = await Promise.all([loadGynData(), loadObsData()]);
    const all = [...gyn, ...obs];
    const ids = all.map((d) => String(d.id).replace(/__[a-z]+$/, ''));
    const icds = all.map((d) => String(d.icd).toUpperCase());

    // AUB / abnormal uterine bleeding представлена карточками по ICD N92/N93 и slug
    expect(icds.some((x) => x.startsWith('N92'))).toBe(true);
    expect(icds.some((x) => x.startsWith('N93'))).toBe(true);
    expect(ids).toContain('aub');
    expect(ids).toContain('menorrhagia');

    // СПКЯ (PCOS, E28.2) присутствует как карточка
    expect(icds).toContain('E28.2');
    expect(all.some((d) => String(d.icd).toUpperCase() === 'E28.2' && /СПКЯ/i.test(String(d.name)))).toBe(true);

    // Контрольные разделы, которые должны быть в каталоге
    expect(ids).toContain('menopausal-syndrome');
    expect(ids).toContain('contraception-overview');
    expect(ids).toContain('fibroids');
    expect(ids).toContain('fgr');
  });
});
