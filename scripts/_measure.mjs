import { chromium } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
await page.goto('https://gyn-clinical.pages.dev/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
await page.evaluate(() => { const b=[...document.querySelectorAll('.nav-tab')].find(x=>x.textContent.trim()==='Гинекология'); b&&b.click(); });
await page.waitForTimeout(2500);
const data = await page.evaluate(() => {
  const grid = document.querySelector('.cards-grid');
  const gridStyle = grid ? getComputedStyle(grid) : null;
  const card = document.querySelector('.disease-card');
  const cs = card ? getComputedStyle(card) : null;
  // measure overlap: card rects
  const cards = [...document.querySelectorAll('.disease-card')].slice(0,12);
  const rects = cards.map(c => { const r=c.getBoundingClientRect(); return {x:Math.round(r.x),y:Math.round(r.y),w:Math.round(r.width),h:Math.round(r.height)}; });
  // check if any two overlap
  let overlaps=0;
  for(let i=0;i<rects.length;i++)for(let j=i+1;j<rects.length;j++){
    const a=rects[i],b=rects[j];
    if(a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y) overlaps++;
  }
  return {
    gridCols: gridStyle ? gridStyle.gridTemplateColumns : null,
    gridGap: gridStyle ? gridStyle.gap : null,
    cardH: cs?cs.height:null, cardW: cs?cs.width:null,
    cardPadding: cs?cs.padding:null,
    rect0: rects[0], rect1: rects[1], rect2: rects[2],
    overlaps,
    cardCount: document.querySelectorAll('.disease-card').length,
  };
});
console.log(JSON.stringify(data,null,1));
await ctx.close();
await browser.close();
