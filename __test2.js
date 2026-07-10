const fs=require('fs'),path=require('path');
const txt = fs.readFileSync('src/data/obsChunks/obsChunk16.js','utf8').slice(0,500);
const icdPattern = /icd\s*:\s*(['"`])([^'"`]+)\1/g;
const matches = [...txt.matchAll(icdPattern)].map(m=>m[2]);
console.log('O codes in first 500 chars of obsChunk16:', matches.filter(c=>c.startsWith('O')).slice(0,5));
const r=require('./artifacts/icd-audit-report.json');
console.log('O46 in existingCodes?', r.sections.find(s=>s.kind==='obstetrics').existingCodes.includes('O46'));