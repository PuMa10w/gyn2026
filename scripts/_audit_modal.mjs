import { chromium } from 'playwright';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:393,height:852}, isMobile:true, hasTouch:true });
const p = await ctx.newPage();
await p.goto('http://localhost:3000/', { waitUntil:'networkidle' });
await p.waitForTimeout(1200);
await p.evaluate(()=>{ const c=document.querySelector('.disease-card,.home-destination-card'); if(c)c.click(); });
await p.waitForTimeout(800);
const m = await p.evaluate(() => {
  const d = document.querySelector('[role=dialog]') || document.querySelector('.modal-content');
  if(!d) return {found:false};
  const rc=d.getBoundingClientRect();
  const close = d.querySelector('[aria-label], .modal-close, button');
  const cq = close?close.getBoundingClientRect():null;
  return { found:true, top:Math.round(rc.top), bottom:Math.round(rc.bottom), w:Math.round(rc.width), h:Math.round(rc.height), winH:Math.round(window.innerHeight), closeH: cq?Math.round(cq.height):0, overflowX: document.documentElement.scrollWidth>window.innerWidth+2 };
});
console.log('MODAL:', JSON.stringify(m));
await b.close();
