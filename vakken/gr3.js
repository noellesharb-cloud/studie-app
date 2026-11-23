/* Grieks, aanvulling (20 nov 2026): rijtjes van λύω en εἰμί (HB p. 112), leerwerk voor dinsdag 24 november.
   De vormen zijn op 23 nov gecontroleerd met een foto van HB p. 112 en 114: ze kloppen met het boek.
   Eigen vraagsoort rij: zes vakjes (ik … zij), vormen aantikken, met nepvormen ertussen. In de toetsvorm (paragraaftoets, proeftoets)
   zes typvakjes: ze werkt op haar laptop. Typt ze alles, dan kijkt de app na (een accent anders = fout, zoals op de toets);
   laat ze vakjes leeg, dan schrijft ze op papier en kijkt ze zelf na (tvVrij). */
(()=>{
const V=VAKDATA.gr;if(!V)return;
const G=s=>`<span class="gr">${s}</span>`;
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const PERS=['ik','jij','hij/zij/het','wij','jullie','zij (mv)'];
const RIJ={
 'λύω':{nl:'losmaken',f:['λύω','λύεις','λύει','λύομεν','λύετε','λύουσι(ν)'],x:['λύεσι(ν)','λύεμεν','λύοτε'],
   u:'Regelmatig: stam <b>λυ-</b> + -ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν). Bij wij en zij een <b>ο</b> (λύ<b>ο</b>μεν, λύ<b>ου</b>σι), bij jullie een <b>ε</b> (λύ<b>ε</b>τε).'},
 'εἰμί':{nl:'zijn',f:['εἰμί','εἶ','ἐστί(ν)','ἐσμέν','ἐστέ','εἰσί(ν)'],x:['ἐσί','εἶς','ἐσμί'],
   u:'Onregelmatig, dus uit je hoofd: εἰμί, εἶ, ἐστί(ν), ἐσμέν, ἐστέ, εἰσί(ν). Let op: ἐστέ (jullie zijn) en ἐστί (hij is) lijken op elkaar.'}
};
const SECS=[
 {id:'rlu',par:'ww',nr:'1',name:'Rijtje λύω',c:'--c1',sub:'HB p. 112 · regelmatig werkwoord, tegenwoordige tijd',
  rules:PERS.map((p,i)=>[p,G(RIJ['λύω'].f[i]),['ik maak los','jij maakt los','hij maakt los','wij maken los','jullie maken los','zij maken los'][i]]).concat([['infinitief',G('λύειν'),'losmaken'],['gebiedende wijs',G('λῦε')+' · '+G('λύετε'),'maak los! (ev · mv)']])},
 {id:'rei',par:'ww',nr:'2',name:'Rijtje εἰμί',c:'--c2',sub:'HB p. 112 · onregelmatig werkwoord zijn',
  rules:PERS.map((p,i)=>[p,G(RIJ['εἰμί'].f[i]),['ik ben','jij bent','hij is','wij zijn','jullie zijn','zij zijn'][i]]).concat([['infinitief',G('εἶναι'),'zijn'],['gebiedende wijs',G('ἴσθι')+' · '+G('ἔστε'),'wees! (ev · mv) · μὴ ἴσθι = wees niet (tekst 11)']])},
 {id:'vww',par:'ww',nr:'3',name:'Losse vormen van λύω en εἰμί',c:'--c3',sub:'Herkennen: welke persoon, en wat betekent het?',
  rules:[['Uitgangen λύω','-ω · -εις · -ει · -ομεν · -ετε · -ουσι(ν)',''],['εἰμί','εἰμί · εἶ · ἐστί(ν) · ἐσμέν · ἐστέ · εἰσί(ν)','']]}
];
const Q=[];
Object.keys(RIJ).forEach(w=>Q.push({id:'rij-'+(w==='λύω'?'lu':'ei'),o:w==='λύω'?'rlu':'rei',nr:'HB p. 112 · rijtje',type:'rij',w,
  a:RIJ[w].f.join(', '),q:`Maak het rijtje van ${G(w)} (${RIJ[w].nl}). Zet de vormen op de goede plek.`}));
/* losse vormen: persoon herkennen en vorm maken */
const NL={'λύω':['ik maak los','jij maakt los','hij maakt los','wij maken los','jullie maken los','zij maken los'],'εἰμί':['ik ben','jij bent','hij is','wij zijn','jullie zijn','zij zijn']};
Object.keys(RIJ).forEach(w=>{const r=RIJ[w],k=w==='λύω'?'lu':'ei';
  r.f.forEach((f,i)=>{const fout=[0,1,2,3,4,5].filter(j=>j!==i);const kies=shuf(fout).slice(0,3);
    const alt=[NL[w][i].replace(/^jij /,'je ').replace(/^wij /,'we ').replace(/^jullie /,'jullie '),...(i===2?['zij','het','hij/zij/het'].map(x=>NL[w][i].replace(/^hij/,x)):[]),...(i===5?[NL[w][i].replace(/^zij/,'ze')]:[])].filter(x=>x!==NL[w][i]);
    Q.push({id:`v${k}${i}`,o:'vww',nr:'HB p. 112',q:`Wat betekent ${G(f)}?`,a:NL[w][i],tvAlt:alt,f:kies.map(j=>[NL[w][j],`${G(r.f[j])} = ${NL[w][j]}.`]),
      u:`${G(f)} = <b>${NL[w][i]}</b> (${PERS[i]}).<div class="why">${r.u}</div>`,
      v:{q:`Hoe zeg je in het Grieks: <b>${NL[w][i]}</b>?`,a:G(f),f:kies.map(j=>[G(r.f[j]),`Dat is ${NL[w][j]}.`])}})})});
Q.push({id:'vlinf',o:'vww',nr:'HB p. 112',q:`Wat is de infinitief van ${G('λύω')} (losmaken)?`,a:G('λύειν'),f:[[G('λύει'),'λύει = hij maakt los.'],[G('λῦε'),'λῦε = maak los! (gebiedende wijs)'],[G('λύεις'),'λύεις = jij maakt los.']],
  u:`${G('λύειν')} = losmaken. De infinitief eindigt op <b>-ειν</b>.`,v:{q:`Wat betekent ${G('λύειν')}?`,a:'losmaken',f:[['hij maakt los','Dat is λύει.'],['maak los!','Dat is λῦε.'],['jij maakt los','Dat is λύεις.']]}});
Q.push({id:'veinf',o:'vww',nr:'HB p. 112',q:`Wat is de infinitief van ${G('εἰμί')} (zijn)?`,a:G('εἶναι'),f:[[G('εἶ'),'εἶ = jij bent.'],[G('ἐστί'),'ἐστί = hij is.'],[G('ἴσθι'),'ἴσθι = wees! (gebiedende wijs)']],
  u:`${G('εἶναι')} = zijn.`,v:{q:`Wat betekent ${G('εἶναι')}?`,a:'zijn',f:[['jij bent','Dat is εἶ.'],['wees!','Dat is ἴσθι.'],['hij is','Dat is ἐστί.']]}});
Q.push({id:'veimp',o:'vww',nr:'Tekst 11, r. 10',q:`In tekst 11 zegt Achilles: ${G('μὴ ἴσθι φιλοκτέανος')}. Wat betekent ${G('ἴσθι')}?`,a:'wees!',f:[['jij bent','Dat is εἶ.'],['zijn','Dat is εἶναι.'],['hij is','Dat is ἐστί.']],
  u:`${G('ἴσθι')} = wees! (gebiedende wijs enkelvoud van εἰμί). ${G('μὴ ἴσθι φιλοκτέανος')} = wees niet hebzuchtig.`,v:{q:`Wat is de gebiedende wijs (enkelvoud) van ${G('εἰμί')}?`,a:G('ἴσθι'),f:[[G('εἶ'),'εἶ = jij bent.'],[G('εἶναι'),'εἶναι = zijn (infinitief).'],[G('ἐστέ'),'ἐστέ = jullie zijn.']]}});

/* eigen vraagsoort: rijtje bouwen (zes vakjes) */
function drawRijG(q,it,box,api){
  const r=RIJ[q.w];
  const S=it._r=it._r||{pool:shuf([...r.f,...r.x].map(w=>({w}))),slots:Array(6).fill(null),done:false};
  const next=S.slots.indexOf(null);
  const slot=j=>{const c=S.slots[j];let cls=c?'filled':'';if(j===next&&!S.done)cls+=' next';if(S.done)cls+=S.res[j]?' ok':' bad';
    return `<span class="p">${PERS[j]}</span><button class="slot ${cls}" data-j="${j}" ${S.done||!c?'disabled':''}>${c?G(c.w):'&nbsp;'}${S.done&&!S.res[j]?`<small>→ ${G(r.f[j])}</small>`:''}</button>`};
  box.innerHTML=`<div class="card stack"><div class="rij">${[0,1,2,3,4,5].map(slot).join('')}</div></div>
    ${S.done?'':`<div class="pool">${S.pool.map((c,k)=>`<button class="chip" data-k="${k}" ${c.used?'disabled':''}>${G(c.w)}</button>`).join('')}</div>
    <p class="sub" style="font-size:.9rem">Tik op een vorm om hem in te vullen, van boven naar beneden. Tik op een ingevuld vakje om hem terug te zetten. Let op: er zitten vormen bij die niet bestaan.</p>
    <button class="btn" id="rijok" ${next===-1?'':'disabled'}>Controleer</button>`}`;
  if(S.done)return;
  box.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{const c=S.pool[+b.dataset.k],j=S.slots.indexOf(null);if(j<0||c.used)return;S.slots[j]=c;c.used=true;api.redraw()});
  box.querySelectorAll('.slot[data-j]').forEach(b=>b.onclick=()=>{const j=+b.dataset.j,c=S.slots[j];if(!c)return;c.used=false;S.slots[j]=null;api.redraw()});
  box.querySelector('#rijok').onclick=()=>{S.res=S.slots.map((c,j)=>c.w===r.f[j]);S.done=true;const ok=S.res.every(Boolean);api.redraw();
    api.finish(ok,ok?`<div class="fb ok"><div class="head">Goed!</div><div class="why">${r.u}</div></div>`
      :`<div class="fb bad"><div class="head">Niet goed</div><div class="mistake">De rode vakjes kloppen niet. Het goede antwoord staat erachter. Schrijf het rijtje nog een keer goed in je schrift.</div><div class="why">${r.u}</div></div>`,S.slots.map(c=>c.w).join(', '))};
}

Q.forEach(q=>{if(q.type==='rij'){q.tvIn=PERS;q.tvVrij=true;q.tvA=RIJ[q.w].f.map(f=>f.includes('(ν)')?f.replace('(ν)','')+' / '+f.replace('(ν)','ν'):f);
  q.tv=`Schrijf het rijtje van ${G(q.w)} (${RIJ[q.w].nl}) op. Typ de vormen in het Grieks, of schrijf ze op papier en laat de vakjes leeg.`}});
V.SECS.push(...SECS);V.Q.push(...Q);
V.custom=Object.assign({},V.custom||{},{rij:drawRijG});
V.RIJ=RIJ; /* gr4.js voegt ἥκω en πέμπω toe (Ergon 1) */
V.leer=(V.leer||[]).filter(p=>p!=='ww').concat('ww');
V.PN.ww='Werkwoorden λύω en εἰμί (HB p. 112)';
})();
