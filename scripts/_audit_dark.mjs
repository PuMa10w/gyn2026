import { chromium } from 'playwright';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:393,height:852}, isMobile:true, hasTouch:true });
const p = await ctx.newPage();
await p.goto('http://localhost:3000/', { waitUntil:'networkidle' });
await p.waitForTimeout(1200);
await p.evaluate(()=>document.documentElement.setAttribute('data-theme','dark'));
await p.waitForTimeout(500);
const r = await p.evaluate(() => {
  const transparent=[];
  document.querySelectorAll('.premium-card,.disease-card,.clinical-card,.am-card,.home-destination-card,.tool-panel').forEach(el=>{
    const s=getComputedStyle(el);
    if(s.backgroundColor==='rgba(0, 0, 0, 0)' && !s.backgroundImage.includes('gradient')) transparent.push(el.className.slice(0,30));
  });
  return { transparentCards: transparent.length, sample: transparent.slice(0,5) };
});
console.log('DARK:', JSON.stringify(r));
await b.close();
