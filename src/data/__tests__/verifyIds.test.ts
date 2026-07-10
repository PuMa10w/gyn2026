import { describe, it, expect } from 'vitest';
import { loadGynData } from '../loadGynData';
import { loadObsData } from '../loadObsData';
describe('key diseases present', () => {
  it('has PCOS (E28.2), AUB (N92/N93), and no stub markers', async () => {
    const [gyn, obs] = await Promise.all([loadGynData(), loadObsData()]);
    const all = [...gyn, ...obs];
    const byId = (s: string) => all.find(d => String(d.id).toLowerCase().includes(s));
    const icds = all.map(d => String(d.icd).toUpperCase());
    console.log('E28.2 (PCOS):', icds.includes('E28.2') ? 'present' : 'MISSING');
    console.log('N92 (menorrhagia):', icds.includes('N92') || icds.some(x=>x.startsWith('N92')) ? 'present' : 'MISSING');
    console.log('N93 (other AUB):', icds.some(x=>x.startsWith('N93')) ? 'present' : 'MISSING');
    console.log('pcos id:', !!byId('pcos'), '| e28.2 name:', all.find(d=>String(d.icd)==='E28.2')?.name);
    const stub = all.filter(d => JSON.stringify(d).includes('Требуется уточнение') || JSON.stringify(d).includes('Данные отсутствуют')).length;
    console.log('STUB in runtime:', stub);
    expect(icds).toContain('E28.2');
    expect(stub).toBe(0);
  });
});
