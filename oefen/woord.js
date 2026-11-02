/* ============================================================
   Woordjessprint: echte woordjes van de talen, zo snel mogelijk.
   Een vak geeft V.woorden = {taal, lijst:[[vreemd, nederlands]], typen?:true}.
   typen: bij de helft van de woordjes typt ze het vreemde woord zelf (Nederlands → vreemde taal).
   Woordjes die ze fout heeft, komen vaker terug; woordjes die ze 3 keer op rij goed heeft, minder vaak.
   Per woord bijgehouden op dit apparaat (localStorage).
   ============================================================ */
window.WOORD=(()=>{
const KEY='woordsprint-stand';
let ST={};try{ST=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){ST={}}
const bewaar=()=>{try{localStorage.setItem(KEY,JSON.stringify(ST))}catch(e){}};
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};

function talen(){return Object.values(window.VAKDATA||{}).filter(v=>v.woorden&&v.woorden.lijst&&v.woorden.lijst.length).map(v=>({id:v.id,taal:v.woorden.taal,n:v.woorden.lijst.length}))}
const sleutel=(vid,w)=>vid+'|'+w[0];
/* gewicht: nieuw 3, fout veel hoger, vaak goed laag */
function gewicht(vid,w){const s=ST[sleutel(vid,w)];if(!s)return 3;return Math.max(0.5,1+2*s.f-Math.min(2,s.r*0.7))}

/* vergelijken bij typen: hoofdletters, spaties en leestekens tellen niet; ae/oe/ue/ss mag voor ä/ö/ü/ß */
const norm=x=>String(x).toLowerCase().replace(/\(.*?\)/g,'').replace(/[.,;!?'’]/g,'').replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').replace(/\s+/g,' ').trim();
const varianten=x=>String(x).split(/\s*[,/;]\s*/).map(norm).filter(Boolean);
function kloptTyp(invoer,goed){const a=norm(invoer);return a===norm(goed)||varianten(goed).includes(a)}

function volgende(vid,laatste){
  const V=VAKDATA[vid],L=V.woorden.lijst.filter(w=>w[0]!==laatste);
  const g=L.map(w=>gewicht(vid,w));let r=Math.random()*g.reduce((a,b)=>a+b,0),w=L[0];
  for(let i=0;i<L.length;i++){r-=g[i];if(r<=0){w=L[i];break}}
  const typen=V.woorden.typen&&Math.random()<.5;
  if(typen)return {w,typen:true,vraag:w[1],goed:w[0],taal:V.woorden.taal};
  const andere=shuf(V.woorden.lijst.filter(x=>x[1]!==w[1])).slice(0,3).map(x=>x[1]);
  return {w,typen:false,vraag:w[0],goed:w[1],opts:shuf([w[1],...andere]),taal:V.woorden.taal}}

function uitslag(vid,w,ok){const k=sleutel(vid,w),s=ST[k]=ST[k]||{r:0,f:0,n:0};
  s.n++;if(ok){s.r++;s.f=Math.max(0,s.f-0.5)}else{s.r=0;s.f++}bewaar()}

function stand(vid){const L=VAKDATA[vid].woorden.lijst;let kent=0,lastig=0,nieuw=0;
  L.forEach(w=>{const s=ST[sleutel(vid,w)];if(!s)nieuw++;else if(s.r>=3)kent++;else if(s.f>0)lastig++});
  return {kent,lastig,nieuw,tot:L.length}}

return {talen,volgende,uitslag,kloptTyp,stand};
})();
