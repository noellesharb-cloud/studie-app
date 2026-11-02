/* ============================================================
   Rekensprint: korte sommen van één stap, om te automatiseren.
   Gekozen na de CBO-screening (okt 2025): rekenopgaven, getallenreeksen en
   rekentekens lager, vooral door veel lege antwoorden (tempo), niet door fouten.
   Elke soort heeft niveau 1 t/m 3. Het niveau gaat omhoog na 3 keer goed op rij
   en omlaag na een fout; het niveau per soort wordt op dit apparaat onthouden.
   Een generator geeft {q, a, e?} (getal intypen) of {q, a, opts} (knoppen, a = tekst).
   ============================================================ */
window.REKEN=(()=>{
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[Math.random()*a.length|0];
const k=x=>{const s=String(+(+x).toFixed(4)).replace('.',',');return s.startsWith('-')?'−'+s.slice(1):s};  // 4,5 en −3
const eu=x=>(+x).toFixed(2).replace('.',',');
const n=x=>x<0?`(${k(x)})`:k(x);

const SOORTEN=[
 {id:'tafel',naam:'Tafels en delen',gen:l=>{
   const hi=l===1?10:l===2?12:15,a=R(2,hi),b=R(2,l===1?10:12);
   if(l>=2&&Math.random()<.5)return {q:`$${a*b} : ${a}$ =`,a:b};
   if(l===3&&Math.random()<.4){const c=R(2,9)*10;return {q:`$${a} × ${c}$ =`,a:a*c}}
   return Math.random()<.5?{q:`$${a} × ${b}$ =`,a:a*b}:{q:`$${a*b} : ${b}$ =`,a:a}}},
 {id:'komma',naam:'Kommagetallen',gen:l=>{
   if(l===1){const t=pick([[R(2,9)/10,R(2,9)*10],[R(11,49)/10,10],[R(2,9)/10,R(2,9)]]);
     return Math.random()<.5?{q:`$${k(t[0])} × ${t[1]}$ =`,a:t[0]*t[1]}:{q:`$${k(R(11,99)/10)} + ${k(R(11,99)/10)}$ =`,a:null}}
   if(l===2){const a=R(2,9)/10,b=R(2,9);return Math.random()<.5?{q:`$${k(a*b)} : ${k(a)}$ =`,a:b}:{q:`$${k(R(2,9)/10)} × ${k(R(2,9)/10)}$ =`,a:null}}
   const a=R(11,99)/100,b=R(2,9);return Math.random()<.5?{q:`$${k(a*b)} : ${b}$ =`,a:a}:{q:`$${k(R(101,999)/100)} − ${k(R(11,99)/10)}$ =`,a:null}}},
 {id:'breuk',naam:'Breuken',gen:l=>{
   if(l===1){const d=pick([2,3,4,5,10]),t=R(1,d-1),m=d*R(2,10);return {q:`$[[${t}|${d}]]$ van $${m}$ =`,a:m*t/d}}
   if(l===2){const d=pick([3,4,5,6,8]),t=R(2,d-1),m=d*R(3,12);return {q:`$[[${t}|${d}]]$ van $${m}$ =`,a:m*t/d}}
   const p=pick([[2,4],[2,3],[3,4],[4,8],[2,6],[5,10],[3,6]]),a=R(1,p[0]-1),b=R(1,p[1]-1),op=Math.random()<.5;
   return {q:`$[[${a}|${p[0]}]] ${op?'+':'−'} [[${b}|${p[1]}]]$ = (als breuk of kommagetal)`,a:op?a/p[0]+b/p[1]:a/p[0]-b/p[1]}}},
 {id:'proc',naam:'Procenten',gen:l=>{
   const p=pick(l===1?[10,50,25,1]:l===2?[20,5,15,30,75]:[12.5,35,2,60,120]),m=R(2,20)*(l===3?40:20);
   return {q:`$${k(p)}$% van $${m}$ =`,a:m*p/100}}},
 {id:'neg',naam:'Negatieve getallen',gen:l=>{
   const a=R(-12,12)||-5,b=R(-12,12)||7;
   if(l===1)return Math.random()<.5?{q:`$${k(a)} + ${n(b)}$ =`,a:a+b}:{q:`$${k(-R(1,9))} + ${R(1,15)}$ =`,a:null};
   if(l===2)return Math.random()<.5?{q:`$${k(a)} − ${n(b)}$ =`,a:a-b}:{q:`$${n(a)} × ${n(b)}$ =`,a:a*b};
   const c=R(2,6)*(Math.random()<.5?-1:1),d=R(2,9)*(Math.random()<.5?-1:1);return Math.random()<.5?{q:`$${k(c*d)} : ${n(c)}$ =`,a:d}:{q:`$${k(a)} − ${n(b)} + ${n(c)}$ =`,a:a-b+c}}},
 {id:'meet',naam:'Omrekenen',gen:l=>{
   const L=[
    [()=>{const x=R(1,40)/2;return {q:`$${k(x)}$ km = … m`,a:x*1000,e:'m'}},()=>{const x=R(1,60)*50;return {q:`$${x}$ g = … kg`,a:x/1000,e:'kg'}},()=>{const x=R(1,12)*250;return {q:`$${x}$ mL = … L`,a:x/1000,e:'L'}},()=>{const x=R(2,9);return {q:`$${x}$ m = … cm`,a:x*100,e:'cm'}}],
    [()=>{const x=R(1,9)/4;return {q:`$${k(x)}$ uur = … min`,a:x*60,e:'min'}},()=>{const x=R(5,95);return {q:`$${x}$ cm = … m`,a:x/100,e:'m'}},()=>{const x=R(2,30)*5;return {q:`$${x}$ mm = … cm`,a:x/10,e:'cm'}},()=>{const x=R(3,12)*15;return {q:`$${x}$ min = … uur`,a:x/60,e:'uur'}}],
    [()=>{const x=R(1,9);return {q:`$${x}$ dm^3 = … cm^3`,a:x*1000,e:'cm³'}},()=>{const x=R(2,9);return {q:`$${x}$ m^2 = … dm^2`,a:x*100,e:'dm²'}},()=>{const x=R(2,20)*25;return {q:`$${x}$ cm^3 = … L`,a:x/1000,e:'L'}},()=>{const x=R(2,9)*18;return {q:`$${x}$ km/h = … m/s`,a:x/3.6,e:'m/s'}}]];
   return pick(L[l-1])()}},
 {id:'teken',naam:'Rekentekens',keuze:1,gen:l=>{
   const T={'+':(a,b)=>a+b,'−':(a,b)=>a-b,'×':(a,b)=>a*b,':':(a,b)=>a/b};
   const ok=v=>Number.isInteger(v)&&v>=0;
   for(let i=0;i<200;i++){
     if(l<3){const a=R(2,l===1?12:30),b=R(2,l===1?9:12),o=pick(Object.keys(T)),v=T[o](a,b);if(!ok(v))continue;
       const alt=Object.keys(T).filter(x=>x!==o&&T[x](a,b)===v);if(alt.length)continue;
       return {q:`$${a}$ ? $${b}$ = $${v}$<br><small>Welk teken staat op de plaats van het vraagteken?</small>`,a:o,opts:['+','−','×',':']}}
     const a=R(2,9),b=R(2,9),c=R(2,9),o1=pick(Object.keys(T)),o2=pick(Object.keys(T));
     const pr=o=>o==='×'||o===':';let v;
     if(pr(o2)&&!pr(o1)){const r=T[o2](b,c);if(!ok(r))continue;v=T[o1](a,r)}else{const r=T[o1](a,b);if(!ok(r))continue;v=T[o2](r,c)}
     if(!ok(v))continue;
     const reken=o=>{if(pr(o2)&&!pr(o)){const x=T[o2](b,c);return T[o](a,x)}return T[o2](T[o](a,b),c)};
     if(Object.keys(T).some(o=>o!==o1&&reken(o)===v))continue;
     return {q:`$${a}$ ? $${b}$ ${o2} $${c}$ = $${v}$<br><small>Welk teken staat op de plaats van het vraagteken? (eerst × en :, dan + en −)</small>`,a:o1,opts:['+','−','×',':']}}
   return {q:'$6$ ? $3$ = $18$',a:'×',opts:['+','−','×',':']}}},
 {id:'reeks',naam:'Getallenreeksen',gen:l=>{
   const mk=(arr,nx)=>({q:`$${arr.map(k).join(',  ')},$ …<br><small>Welk getal komt erna?</small>`,a:nx});
   const s=R(1,20),d=R(2,9);
   const L1=[()=>{const a=[0,1,2,3].map(i=>s+i*d);return mk(a,s+4*d)},()=>{const a=[0,1,2,3].map(i=>s*3+40-i*d);return mk(a,s*3+40-4*d)},()=>{const b=R(1,5);const a=[0,1,2,3].map(i=>b*2**i);return mk(a,b*16)}];
   const L2=[()=>{const p=R(2,6),q=R(1,4);let x=R(3,10),a=[x];for(let i=0;i<4;i++){x+=i%2?-q:p;a.push(x)}return mk(a.slice(0,5),a[4]+(4%2?-q:p))},
     ()=>{const b=R(1,3),f=pick([2,3]);const a=[0,1,2,3].map(i=>b*f**i);return mk(a,b*f**4)},()=>{const o=R(0,3);const a=[1,2,3,4].map(i=>(i+o)**2);return mk(a,(5+o)**2)},
     ()=>{let x=s,dd=1,a=[x];for(let i=0;i<4;i++){x+=dd;dd++;a.push(x)}return mk(a,x+dd)}];
   const L3=[()=>{let a=[R(1,3),R(1,4)];for(let i=0;i<3;i++)a.push(a[a.length-1]+a[a.length-2]);return mk(a,a[3]+a[4])},
     ()=>{const st=R(2,5)*32;const a=[st,st/2,st/4,st/8];return mk(a,st/16)},
     ()=>{let x=R(1,4),a=[x];for(let i=0;i<4;i++){x=x*2+1;a.push(x)}return mk(a.slice(0,4),a[4])},
     ()=>{const p=R(2,5);let x=R(2,6),a=[x];for(let i=0;i<4;i++){x=i%2?x-p:x*2;a.push(x)}return mk(a.slice(0,4),a[4])}];
   return pick([L1,L2,L3][l-1])()}},
 {id:'verhaal',naam:'Korte verhaalsommen',gen:l=>{
   const L=[
    [()=>{const p=pick([1.25,0.75,2.5,1.5]),x=R(3,9);return {q:`Een schrift kost € $${eu(p)}$. Wat kosten er $${x}$?`,a:p*x,e:'euro'}},
     ()=>{const x=R(3,9),y=R(4,9);return {q:`Je leest $${y}$ bladzijden per dag. Hoeveel bladzijden lees je in $${x}$ dagen?`,a:x*y,e:'bladzijden'}},
     ()=>{const b=R(2,8)*5,h=pick([5,10,20]);return {q:`Je betaalt € $${b-R(1,4)}$ en geeft een briefje van € $${h*((b/h|0)+1)}$. Hoeveel krijg je terug?`,a:null,e:'euro',raw:1}}],
    [()=>{const g=R(3,8),p=g*R(2,6);return {q:`$${g}$ vrienden delen € $${p}$ eerlijk. Hoeveel krijgt ieder?`,a:p/g,e:'euro'}},
     ()=>{const v=pick([12,15,18,20]),t=pick([2,3,4]);return {q:`Je fietst $${v}$ km per uur. Hoe ver kom je in $${t}$ uur?`,a:v*t,e:'km'}},
     ()=>{const p=R(4,12)*10,k2=pick([10,20,25,50]);return {q:`Een trui van € $${p}$ krijgt $${k2}$% korting. Hoeveel korting is dat?`,a:p*k2/100,e:'euro'}}],
    [()=>{const p=R(4,12)*10,k2=pick([10,20,25,30]);return {q:`Een jas van € $${p}$ krijgt $${k2}$% korting. Wat is de nieuwe prijs?`,a:p*(100-k2)/100,e:'euro'}},
     ()=>{const a=R(3,6),b=a*R(2,4);return {q:`$${a}$ pakken melk kosten € $${eu(b*0.35)}$. Wat kosten er $${b}$?`,a:b*0.35*b/a,e:'euro'}},
     ()=>{const x=R(2,4),p=pick([2.75,1.85,3.40,2.25]);return {q:`Je hebt € $20$. Je koopt $${x}$ broodjes van € $${eu(p)}$. Hoeveel houd je over?`,a:20-x*p,e:'euro'}}]];
   const r=pick(L[l-1])();
   if(r.raw){const m=r.q.match(/€ \$(\d+)\$ en geeft een briefje van € \$(\d+)\$/);r.a=+m[2]-+m[1]}
   return r}}
];

/* som zonder vooraf berekend antwoord: uitrekenen uit de tekst */
function fix(o){if(o.a!==null&&o.a!==undefined)return o;
  const t=o.q.replace(/\$/g,'').replace(/=.*/,'').replace(/−/g,'-').replace(/,/g,'.').replace(/×/g,'*').replace(/:/g,'/').replace(/\(([-\d.]+)\)/g,'$1');
  o.a=Function('return ('+t+')')();o.a=+o.a.toFixed(4);return o}

/* niveau per soort onthouden op dit apparaat */
const KEY='rekensprint-niveau';
let NV={};try{NV=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){NV={}}
const bewaar=()=>{try{localStorage.setItem(KEY,JSON.stringify(NV))}catch(e){}};
const nv=id=>NV[id]?.l||1;

function volgende(laatste){
  // soorten met meer fouten komen vaker; nooit twee keer dezelfde soort achter elkaar
  const kand=SOORTEN.filter(s=>s.id!==laatste),w=kand.map(s=>1+Math.min(3,NV[s.id]?.f||0));
  let r=Math.random()*w.reduce((a,b)=>a+b,0),s=kand[0];
  for(let i=0;i<kand.length;i++){r-=w[i];if(r<=0){s=kand[i];break}}
  const o=fix(s.gen(nv(s.id)));o.k=s.id;o.l=nv(s.id);o.naam=s.naam;return o}

function uitslag(id,ok,ms){
  const x=NV[id]=NV[id]||{l:1,r:0,f:0,n:0,t:0};
  x.n++;x.t+=Math.min(ms,30000);
  if(ok){x.r++;x.f=Math.max(0,x.f-0.5);if(x.r>=3&&x.l<3){x.l++;x.r=0}}
  else{x.r=0;x.f++;if(x.l>1)x.l--}
  bewaar()}

/* antwoord lezen: komma of punt, minteken, breuk a/b */
function lees(v){v=String(v).trim().replace(/\s/g,'').replace(/^[−–]/,'-').replace('€','');
  const b=v.match(/^(-?\d+)\/(\d+)$/);if(b)return +b[1]/+b[2];
  return parseFloat(v.replace(',','.'))}
const klopt=(x,a)=>isFinite(x)&&Math.abs(x-a)<=Math.max(0.011,Math.abs(a)*0.005);

return {SOORTEN,volgende,uitslag,lees,klopt,k,niveaus:()=>SOORTEN.map(s=>({naam:s.naam,l:nv(s.id),n:NV[s.id]?.n||0,sec:NV[s.id]?.n?Math.round(NV[s.id].t/NV[s.id].n/100)/10:null}))};
})();
