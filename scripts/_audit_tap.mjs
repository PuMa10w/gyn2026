import { chromium } from 'playwright';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:393,height:852}, isMobile:true, hasTouch:true });
const p = await ctx.newPage();
const errs=[]; p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto('http://localhost:3000/', { waitUntil:'networkidle' });
await p.waitForTimeout(1500);
const r = await p.evaluate(() => {
  const small=[];
  document.querySelectorAll('a,button,[role=button],.tab-btn,.category-chip,.favorite-btn,.source-badge,.nav-item,.guideline-card a').forEach(el=>{
    const rc=el.getBoundingClientRect();
    if(rc.width&&rc.height&&(rc.width<40||rc.height<40)) small.push({t:(el.textContent||'').trim().slice(0,14),h:Math.round(rc.height),w:Math.round(rc.width)});
  });
  return { smallTapCount: small.length, sample: small.slice(0,6), overflowX: document.documentElement.scrollWidth>window.innerWidth+2 };
});
console.log('TAP:', JSON.stringify(r), 'errors:', errs.length);
await b.close();
