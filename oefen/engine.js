/* ============================================================
   Oefenmotor: hetzelfde voor elk vak.
   Een vak staat in vakken/<id>.js en vult VAKDATA[id] met
   {SECS, SNAP, BEG, Q, PN, snapHtml, sprint?, leer?, custom?, reken?}.
   Vraagsoorten: meerkeuze (standaard, f = [antwoord, waarom fout] of alleen tekst, uitleg in st of u),
   t:'open' (zelf nakijken met kernpunten k en voorbeeldantwoorden vb),
   met KO[id] = [[aanwijzing, sleutelwoorden, reden nodig], …] per kernpunt (vakken/<id>-ko.js) in onderdelen, type:<naam> (V.custom[naam] tekent hem).
   BEG = [begrip, uitleg, paragraaf?].
   De pagina geeft Oefen.ctx: state(vid), save(vid), sprintDone(kind,score,best), home().
   ============================================================ */
window.VAKDATA=window.VAKDATA||{};
function mth(x){
  x=x.replace(/-/g,'−');
  x=x.replace(/\^\{([^}]*)\}/g,'<sup>$1</sup>');
  x=x.replace(/_\{([^}]*)\}/g,'<sub>$1</sub>');
  x=x.replace(/√\{([^{}]*)\}/g,'<span class="rt">√<span class="rad">$1</span></span>');
  x=x.replace(/\^(−?[0-9]+|[a-z])/g,'<sup>$1</sup>');
  x=x.replace(/\[\[(.+?)\|(.+?)\]\]/g,'<span class="fr"><span>$1</span><span>$2</span></span>');
  return x;
}
function fmt(s){return String(s).replace(/\$([^$]+)\$/g,(_,x)=>'<span class="m">'+mth(x)+'</span>').replace(/(mm|cm|dm|m)\^([23])/g,'$1<sup>$2</sup>')}

window.Oefen=(()=>{
  let el,vid,V,VF,ST,QM,R,K,S,focusPar=null,focusMode=null;
  const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
  const smooth=matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';
  const secOf=id=>(VF||V).SECS.find(s=>s.id===id);
  const nrTag=q=>/^\d/.test(q.nr)?'Opgave '+q.nr:q.nr;
  const chip=s=>`<span class="sq" style="background:var(${s.c})">${s.nr}</span>`;
  const hasSt=q=>!!(q.st&&q.st.length);
  const esc=x=>String(x??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const uitl=q=>hasSt(q)?uitw(q):q.u?`<div>${fmt(q.u)}</div>`:'';
  const begVan=p=>V.BEG.filter(b=>b[2]===p);
  const uitw=q=>`<ol class="uitw">${q.st.map(x=>`<li><div><div class="why">${fmt(x.t)}</div><div class="res">${fmt(x.s)}</div></div></li>`).join('')}</ol>`;
  const form=(q,alt)=>(!alt||!q.v)?q:typeof q.v==='function'?Object.assign({},q,{denk:''},q.v()):Object.assign({},q,{q:q.v.q,a:q.v.a??q.a,f:q.v.f??q.f,st:q.v.st??q.st});
  /* getypt antwoord: komma, punt, minteken of breuk (3/4, -2/3) */
  const lees=v=>{v=String(v).trim().replace(/\s/g,'').replace(/[−–‐]/g,'-').replace(/^[a-zA-Zρ]=/,'').replace(/^\((.*)\)$/,'$1');const b=v.match(/^(-?\d+(?:[.,]\d+)?)\/(-?\d+)$/);if(b)return parseFloat(b[1].replace(',','.'))/+b[2];return v===''?NaN:Number(v.replace(',','.'))};
  const zelfde=(x,a)=>isFinite(x)&&Math.abs(x-a)<=Math.max(0.006,Math.abs(a)*0.002);
  const retryAlt=(id,it)=>typeof QM[id].v==='function'?true:it.alt?false:!!QM[id].v;
  const wrongIn=id=>ST.wrong.filter(x=>QM[x]&&QM[x].o===id).length;
  const pars=()=>[...new Set(V.SECS.filter(s=>s.par!=='mix').map(s=>s.par))];
  const leerPars=()=>V.leer||pars();
  const parIds=p=>V.Q.filter(q=>secOf(q.o).par===p).map(q=>q.id);
  /* NORM (14 nov): voldoende-grens van de toets waarvoor ze nu oefent, bijv. 0.75 bij een D-toets (75% goed = 6,0). Zonder: 1 + 9 × percentage. */
  let NORM=null,TSTOF=null;
  const cijfer=(g,t)=>{const p=t?g/t:0;return Math.round((NORM?(p>=NORM?6+4*(p-NORM)/(1-NORM):1+5*p/NORM):1+9*p)*10)/10};
  /* bij toetsvoorbereiding met stof (TSTOF): foute vragen alleen uit die stof */
  const WR=()=>TSTOF?ST.wrong.filter(id=>V.Q.some(q=>q.id===id)):ST.wrong;
  const f1=n=>n.toFixed(1).replace('.',',');
  const save=()=>Oefen.ctx.save(vid);
  /* wanneer is een toets gemaakt? rid = Date.now() in base 36 (afspraak 12 nov: datum en tijd bij de paragraaftoets en proeftoets).
     Zij ziet de laatste keer, de ouder elke keer met het cijfer. */
  const DGN=['zo','ma','di','wo','do','vr','za'],MND=['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'];
  const wanneer=rid=>{const t=parseInt(rid,36);if(!isFinite(t)||t<1.6e12)return '';const d=new Date(t);return `${DGN[d.getDay()]} ${d.getDate()} ${MND[d.getMonth()]} ${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`};
  const keren=(rs,c)=>{rs=(rs||[]).filter(x=>wanneer(x.rid));if(!rs.length)return '';const ouder=Oefen.ctx.ouder&&Oefen.ctx.ouder(),l=rs[rs.length-1];
    return ouder?`<br><span class="pt-k">Gemaakt: ${rs.slice().reverse().map(x=>`${wanneer(x.rid)} (${c(x)})`).join(' · ')}</span>`:`<br><span class="pt-k">Laatst gemaakt: ${wanneer(l.rid)}</span>`};
  const top=(back,label)=>`<div class="top"><button class="link" id="back">← ${back}</button><span class="tag">${label||''}</span></div>`;

  /* V = wat vrij oefenen mag zien (oefen/gate.js: alleen wat al in een huiswerk aan de beurt was), VF = het hele vak.
     extra = het huiswerk dat nu open staat: dat is meteen aan de beurt. */
  const vw=(id,extra)=>window.Gate?Gate.view(id,extra):VAKDATA[id];
  function load(id,extra){vid=id;VF=VAKDATA[id];ST=Oefen.ctx.state(id);V=vw(id,extra);QM=Object.fromEntries(VF.Q.map(q=>[q.id,q]));
    ST.best=ST.best||{};ST.wrong=(ST.wrong||[]).filter(x=>QM[x]);ST.wrongB=ST.wrongB||[];ST.ptoets=ST.ptoets||{};NORM=null;TSTOF=null;ST.hw=ST.hw||{};if(ST.sr)Object.keys(ST.sr).forEach(k=>{if(!QM[k])delete ST.sr[k]});geenPogingHerstel();}
  /* geen poging (afspraak 14 nov): 'ik kan nu niet vertalen' werd zelf goed gerekend. Zo'n antwoord telt altijd als fout.
     Alleen korte antwoorden die over de vraag zelf gaan (kan niet, weet niet, lukt niet, later, ?), zodat een echte vertaling
     als 'ik kan niet zwemmen' niet wordt afgekeurd. */
  const nWoord=t=>(String(t||'').match(/[\p{L}\p{N}]+/gu)||[]).length;
  const GEEN1=/^(\?+|-+|\.+|x+|\/|0|nvt|n\.?v\.?t\.?|idk|ik weet het niet|weet ik niet|weet niet|weet het niet|geen idee|later|straks|morgen|skip|niks|niets|leeg)$/;
  const GEEN2=/\b(kan|kon)\b(\s+\S+){0,3}?\s+niet(\s+(vertalen|doen|maken|vinden|lezen|beantwoorden|nu|meer))?$|\b(lukt|lukte|snap|snapte|begrijp|begreep|weet|wist)\b.*\bniet\b|\bgeen (idee|tijd|zin|flauw idee)\b|\b(doe|maak|vertaal|schrijf)\b.*\b(later|morgen|straks)\b|\bweet ik (veel|niet)\b|\bniet (vertaald|gemaakt|gedaan)\b/;
  const modelTxt=q=>schoon(goedTxt(q));
  function geenPoging(j,q){const t=String(j||'').toLowerCase().replace(/[!.,;:]+$/,'').replace(/\s+/g,' ').trim();
    if(!t||t==='(op papier)')return false;if(GEEN1.test(t))return true;
    return GEEN2.test(t)&&nWoord(t)<=8&&nWoord(t)<Math.max(4,nWoord(q?modelTxt(q):'')*0.5)}
  const isVertaal=q=>!!q&&(/^Vertal/.test(String(q.nr||''))||/^Vertaal/.test(schoon(q.q)));
  /* een vertaling van een paar woorden die ze toch helemaal goed rekent: de ouder ziet hem gemarkeerd */
  const kortVertaal=(j,q)=>{const t=String(j||'').trim();return isVertaal(q)&&!!t&&t!=='(op papier)'&&nWoord(t)<Math.max(3,nWoord(modelTxt(q))*0.25)};
  /* eerder zelf goed gerekend zonder echt antwoord: alsnog fout (alleen op haar eigen apparaat) */
  function geenPogingHerstel(){if(Oefen.ctx.ouder&&Oefen.ctx.ouder())return;let n=0;
    (ST.inzet||[]).forEach(r=>(r.q||[]).forEach(x=>{const Q=QM[x.i];if(!Q||!x.ok||!(x.f||'').includes('z')||!geenPoging(x.j,Q))return;
      x.ok=0;x.ga=1;n++;if(!ST.wrong.includes(x.i))ST.wrong.push(x.i);if(ST.sr)delete ST.sr[x.i];
      const a=r.hw&&ST.hwAns&&ST.hwAns[r.hw]&&ST.hwAns[r.hw][x.i];if(a)a.ok=false}));
    if(n)save()}
  /* open vragen en vertalingen (afspraak 14 nov): wat ze in een toets zelf goed rekent, gaat naar de ouder om na te kijken */
  const openNaarOuder=()=>!!(R.exam&&R.rid&&Oefen.ctx.nakijk);
  function openNakijk(q,jij){R.nk=(R.nk||0)+1;const t=String(jij||'').trim(),papier=!t||t==='(op papier)';
    Oefen.ctx.nakijk({vak:vid,qid:q.id,rid:R.rid,mode:R.mode,par:R.par||null,toets:R.title,
      vraag:schoon(String(q.tv||q.q).replace(/<button[\s\S]*?<\/button>/g,'')).slice(0,600),
      jij:(papier?'(niets getypt: staat in haar schrift)':t+(kortVertaal(t,q)?'\n(maar een paar woorden getypt: de rest staat volgens haar in haar schrift)':'')).slice(0,800),
      goed:schoon(goedTxt(q)).slice(0,800)})}
  function done(){Oefen.cur=null}

  /* ---------- startscherm van een vak ---------- */
  function home(){
    Oefen.cur=vid;
    const secBtn=s=>{const n=V.Q.filter(q=>q.o===s.id).length,b=ST.best[s.id],w=wrongIn(s.id);
      return `<button class="sec" data-s="${s.id}">${chip(s)}<span><b>${s.name}</b><small>${s.sub} · ${n} vragen${ST.diag&&ST.diag.r[s.id]?` · instaptoets ${ST.diag.r[s.id][0]}/${ST.diag.r[s.id][1]}`:''}${w?` · <span style="color:var(--bad)">${w} fout</span>`:''}</small></span><span class="best">${b!=null?'beste<br>'+b+'%':''}</span></button>`};
    const wacht=new Set((Oefen.ctx.wacht?Oefen.ctx.wacht(vid):[]));
    const voorl=rs=>(rs||[]).some(x=>wacht.has(x.rid))?'<br><small>voorlopig</small>':'';
    const ttCard=p=>{if(!ttHeeft(p))return '';const b=(ST.ttoets||{})[p],ok=ttGehaald(p);
      return `<button class="sec pt${ok?' gehaald':''}" data-tt="${p}"><span class="sq" style="background:${ok?'var(--ok)':'var(--c2)'};color:var(--bg)">${ok?'✓':'1'}</span><span><b>Tussentoets</b><small>6 meerkeuzevragen: zit de basis? ${ok?'Gehaald: de paragraaftoets staat open.':'Haal een 7, dan gaat de paragraaftoets open.'}</small></span><span class="best">${b!=null?'beste<br>'+f1(b):''}</span></button>`};
    const ptCard=p=>{const r=ST.ptoets[p],ok=r&&r.best>=7,dicht=ttNodig(p);
      return ttCard(p)+`<button class="sec pt${ok?' gehaald':''}" data-pt="${p}"${dicht?' disabled aria-disabled="true"':''}><span class="sq" style="background:${ok?'var(--ok)':'var(--ink)'};color:var(--bg)">${ok?'✓':'T'}</span><span><b>Paragraaftoets</b><small>${dicht?'🔒 Gaat open als je de tussentoets hierboven met een 7 of hoger haalt. ':''}10 vragen zonder hulp${V.toetsvorm||tvVak()?' en zonder antwoorden om uit te kiezen, zoals op school':''}, met een cijfer. ${ok?'Gehaald.':'Haal een 7 of hoger.'}${r?keren(r.rondes,x=>f1(x.c)):''}</small></span><span class="best">${r?'beste<br>'+f1(r.best)+voorl(r.rondes):''}</span></button>`};
    const B=V.basis,isB=p=>!!B&&p===B.par;
    const basisCards=p=>{const d=ST.diag,n=diagIds(p).length,dg=d&&Object.values(d.r).reduce((a,x)=>[a[0]+x[0],a[1]+x[1]],[0,0]);
      return `<button class="sec pt" id="b-diag"><span class="sq" style="background:var(--ink);color:var(--bg)">I</span><span><b>Instaptoets: wat zit er al goed?</b><small>${n} sommen zonder hulp. Daarna zie je per regel hoe het gaat.${d?' Gemaakt op '+d.d.split('-').reverse().join('-')+'.':''}</small></span><span class="best">${dg?dg[0]+' / '+dg[1]:''}</span></button>
      <button class="sec" id="b-dag"><span class="sq" style="background:var(--c2)">5</span><span><b>Rekenregels van vandaag</b><small>${B.dag||5} sommen, ongeveer 5 minuten. ${d?'Vooral de regels die nog niet goed gaan.':'Maak eerst de instaptoets, dan weet de app wat je moet oefenen.'}</small></span></button>
      <button class="sec" id="b-ov"><span class="sq" style="background:var(--line)">≡</span><span><b>Alle rekenregels onder elkaar</b><small>Het overzicht. Schrijf het over in je schrift, met bij elke regel een eigen voorbeeld.</small></span></button>`};
    const bh=focusMode==='bijhouden'&&focusPar,tv=focusMode==='toets';
    const tbAan=bh&&terugPool(focusPar).length>=3,tbKlaar=tbAan&&tbGedaan(),tbIds=tbAan&&!tbKlaar?terugIds(focusPar):[];
    /* V.extra = {par, titel, n}: een korte vaste ronde die bij elke keer bijhouden en bij de toetsvoorbereiding hoort (aardrijkskunde: topografie) */
    const X=V.extra,xLi=X&&(tv||bh&&focusPar!==X.par)?`<li>En elke keer even: <button class="link" id="bh-x">${X.titel}</button> (${X.n} vragen, een paar minuten)</li>`:'';
    const ok=leerPars().filter(p=>ST.ptoets[p]&&ST.ptoets[p].best>=7);
    el.innerHTML=`
    ${top('Alle vakken',V.kop)}
    <h2>${V.naam}</h2>
    ${bh?`<div class="card stack plan"><span class="tag">Bijhouden · ${V.PN[focusPar]||focusPar}</span>
      <p>Dit heb je net in de les en als huiswerk gehad. Zo blijft het hangen:</p>
      ${tbAan?(tbKlaar?`<p class="sub" style="font-size:.9rem;margin:0">✓ Terugblik van vandaag gedaan.</p>`:tbIds.length?`<button class="btn" id="bh-tb">1. Terugblik: oude stof (${tbIds.length} ${tbN()===5?'sommen':'vragen'}, ongeveer 5 min)</button>`:`<p class="sub" style="font-size:.9rem;margin:0">Terugblik: vandaag niets. Wat je eerder leerde, zit nog vers.</p>`):''}
      <button class="btn${tbIds.length&&!tbKlaar?' ghost':''}" id="bh-her">${tbIds.length&&!tbKlaar?'2. ':''}Herhaalronde (10 vragen)</button>
      ${tbIds.length&&!tbKlaar?'<p class="sub" style="font-size:.9rem;margin:0">De terugblik haalt stof uit eerdere paragrafen op, door elkaar. Dat voelt lastiger, en juist daardoor onthoud je het.</p>':''}
      <p class="sub" style="font-size:.9rem;margin:0">Herhaalronde: niet de vragen die je net als huiswerk maakte, maar eerst wat je daarin fout had en dan andere vragen uit deze paragraaf. Elke keer een nieuwe mix. Of kies zelf:</p>
      <ol class="pl">${begVan(focusPar).length?`<li><button class="link" id="bh-beg">Begrippen-kaartjes van deze paragraaf</button> (${begVan(focusPar).length})</li>`:''}<li>Oefen de onderdelen: ${V.SECS.filter(x=>x.par===focusPar).map(x=>`<button class="link" data-s="${x.id}">${x.name}</button>`).join(', ')}. Bij elk onderdeel staan eerst de regels.</li><li>Sluit af met de <button class="link" id="bh-pt">${ttNodig(focusPar)?'tussentoets':'paragraaftoets'}</button>${ttNodig(focusPar)?' (meerkeuze). Bij een 7 gaat de paragraaftoets open, zonder keuzes':''}. Bij een 7 of hoger krijgt de paragraaf een vinkje.</li>${xLi}</ol>
      <p class="sub" style="font-size:.9rem">De tijd telt vanzelf mee.</p></div>`:''}
    ${tv?`<div class="card stack plan"><span class="tag">Toetsvoorbereiding</span>
      ${TSTOF?`<p><b>${esc(TSTOF.naam||'Deze toets')}</b> gaat over: ${pars().map(p=>esc(V.PN[p]||p)).join(', ')}. Alleen dat staat hieronder; de rest van ${esc(V.naam)} komt later.</p>`:''}
      ${NORM?`<p>Voldoende = <b>${Math.round(NORM*100)}% goed</b>. In de proeftoets van 20 vragen is dat ${Math.ceil(NORM*20)} goed. De cijfers in de app rekenen ook zo.</p>`:''}
      <p>${ok.length} van ${leerPars().length} ${TSTOF?'onderdelen':'paragrafen'} gehaald. Hoe meer je beheerst, hoe korter je toetsvoorbereiding wordt.</p>
      <ol class="pl"><li>Eerst <button class="link" id="tv-f">je foute vragen</button> (${WR().length})</li><li>Dan de paragraaftoetsen zonder vinkje</li><li>Alles gehaald? Maak de <button class="link" id="tv-t">proeftoets</button>.</li>${xLi}</ol></div>`:''}
    <div class="stack"><button class="btn" id="kort">Korte ronde (8 vragen)</button>
      ${V.BEG.length?`<button class="sec" id="kaart"><span class="sq" style="background:var(--c6)">B</span><span><b>Begrippen-kaartjes</b><small>${V.BEG.length} kaartjes${ST.wrongB.length?' · '+ST.wrongB.length+' nog lastig':''}</small></span></button>`:''}</div>
    ${pars().map(p=>`<div class="stack${focusPar===p?' focus':''}" id="par-${p.replace('.','-')}"><span class="tag">${V.PN[p]||p}${focusPar===p?' · hier ben je':''}</span>${begVan(p).length?`<button class="sec" data-bp="${p}"><span class="sq" style="background:var(--c6)">B</span><span><b>Begrippen van deze paragraaf</b><small>${begVan(p).length} kaartjes</small></span></button>`:''}${V.SECS.filter(s=>s.par===p).map(secBtn).join('')}${isB(p)?basisCards(p):ptCard(p)+(tvVak()&&tvParIds(p).length?`<button class="sec" data-tvp="${p}"><span class="sq" style="background:var(--line)">✎</span><span><b>Toetsvorm</b><small>5 vragen zonder opties en zonder hulp: zelf uitwerken op papier, dan nakijken</small></span></button>`:'')}</div>`).join('')}
    ${V.dicht&&V.dicht.length?`<div class="card stack"><span class="tag">Komt nog</span><p class="sub" style="margin:0">Deze onderdelen staan al klaar. Ze gaan open zodra ze in je huiswerk zitten, eerder oefen je ze niet.</p><ul class="log">${[...new Set(V.dicht.map(x=>x.s.par))].map(p=>{const xs=V.dicht.filter(x=>x.s.par===p),ds=xs.map(x=>x.d).filter(Boolean).sort();return `<li><b>${V.PN[p]||p}</b> (${xs.length}) ${ds.length?'· vanaf het huiswerk voor '+new Date(ds[0]+'T12:00').toLocaleDateString('nl-NL',{weekday:'long',day:'numeric',month:'long'}):'· nog niet opgegeven'}</li>`}).join('')}</ul></div>`:''}
    <div class="stack"><span class="tag">Door elkaar</span>
      ${V.SECS.filter(s=>s.par==='mix').map(secBtn).join('')}
      ${tvVak()&&tvIds().length?`<button class="sec" id="tvboek"><span class="sq" style="background:var(--ink);color:var(--bg)">B</span><span><b>Oefentoets uit het boek</b><small>${tvIds().length} vragen in toetsvorm: zelf uitwerken op papier, dan nakijken</small></span></button>`:''}
      <button class="sec" id="toets"><span class="sq" style="background:var(--c2)">T</span><span><b>Proeftoets</b><small>20 vragen uit alle onderdelen${V.toetsvorm?', zelf opschrijven zoals op de toets':''}, met een cijfer${keren((ST.toetsR||{}).rondes,x=>f1(cijfer(x.g,x.t)))}</small></span><span class="best">${ST.best.toets!=null?'beste<br>'+ST.best.toets+'%'+voorl((ST.toetsR||{}).rondes):''}</span></button>
      <button class="sec" id="fouten"><span class="sq" style="background:var(--line)">${WR().length}</span><span><b>Mijn foute vragen</b><small>${WR().length?`Ze komen terug in andere woorden. Per keer ${Math.min(FOUT_MAX,WR().length)}.`:'Nog niets fout gedaan'}${TSTOF&&ST.wrong.length>WR().length?` · ${ST.wrong.length-WR().length} uit andere stof komen na de toets weer`:''}</small></span></button>
      <button class="sec" id="spiek"><span class="sq" style="background:var(--line)">?</span><span><b>Spiekbrief</b><small>Alle regels en begrippen op één plek</small></span></button>
    </div>
    ${V.log&&V.log.length?`<div class="card"><span class="tag">Huiswerk in deze app</span><ul class="log">${V.log.map(l=>`<li><b>${l[0]}</b> ${l[1]}: ${l[2]}</li>`).join('')}</ul></div>`:''}`;
    el.querySelector('#back').onclick=()=>{done();Oefen.ctx.home()};
    el.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>section(b.dataset.s));
    el.querySelectorAll('[data-pt]').forEach(b=>b.onclick=()=>ptoets(b.dataset.pt));
    el.querySelectorAll('[data-tt]').forEach(b=>b.onclick=()=>ttoets(b.dataset.tt));
    el.querySelector('#kort').onclick=()=>start('oefen',kortIds(),'Korte ronde');
    const ka=el.querySelector('#kaart');if(ka)ka.onclick=kaartMenu;
    el.querySelectorAll('[data-bp]').forEach(b=>b.onclick=()=>kStart(shuf(begVan(b.dataset.bp)),false));
    const q=x=>el.querySelector(x);
    if(q('#bh-beg'))q('#bh-beg').onclick=()=>kStart(shuf(begVan(focusPar)),false);
    if(q('#bh-pt'))q('#bh-pt').onclick=()=>ptoets(focusPar);
    if(q('#bh-tb'))q('#bh-tb').onclick=()=>terugblik(focusPar);
    if(q('#bh-her'))q('#bh-her').onclick=()=>start('oefen',herhaalIds(focusPar),'Herhaalronde · '+(V.PN[focusPar]||focusPar));
    if(q('#bh-x'))q('#bh-x').onclick=()=>{const al=V.Q.filter(x=>secOf(x.o).par===X.par&&x.t!=='open').map(x=>x.id),fout=shuf(al.filter(id=>ST.wrong.includes(id)));
      start('oefen',[...fout,...shuf(al.filter(id=>!fout.includes(id)))].slice(0,X.n),X.titel)};
    if(q('#tv-f'))q('#tv-f').onclick=()=>{if(WR().length)start('fout',shuf(WR()),'Mijn foute vragen')};
    if(q('#tv-t'))q('#tv-t').onclick=()=>start('toets',toetsIds(),'Proeftoets');
    el.querySelector('#toets').onclick=()=>start('toets',toetsIds(),'Proeftoets');
    if(q('#tvboek'))q('#tvboek').onclick=()=>start('tvorm',tvIds(),'Oefentoets uit het boek');
    el.querySelectorAll('[data-tvp]').forEach(b=>b.onclick=()=>start('tvorm',tvParIds(b.dataset.tvp),'Toetsvorm '+(V.PN[b.dataset.tvp]||b.dataset.tvp),null,b.dataset.tvp));
    el.querySelector('#fouten').onclick=()=>{if(WR().length)start('fout',shuf(WR()),'Mijn foute vragen')};
    el.querySelector('#spiek').onclick=()=>spiek();
    if(q('#b-diag'))q('#b-diag').onclick=()=>start('diag',shuf(diagIds(B.par)),'Instaptoets rekenregels',null,B.par);
    if(q('#b-dag'))q('#b-dag').onclick=()=>start('oefen',dagIds(B.par),'Rekenregels van vandaag',null,B.par);
    if(q('#b-ov'))q('#b-ov').onclick=()=>spiek(B.par);
    const f=focusPar&&!bh&&el.querySelector('#par-'+focusPar.replace('.','-'));
    if(f)f.scrollIntoView({block:'start'});else scrollTo(0,0);
  }
  const basisSec=id=>!!V.basis&&secOf(id).par===V.basis.par;
  function diagIds(p){const ids=[];V.SECS.filter(s=>s.par===p).forEach(s=>{const l=V.Q.filter(q=>q.o===s.id),d=l.filter(q=>q.diag);(d.length?d:shuf(l).slice(0,2)).forEach(q=>ids.push(q.id))});return ids}
  function dagIds(p){const n=(V.basis&&V.basis.dag)||5,all=V.Q.filter(q=>secOf(q.o).par===p),d=ST.diag;
    const zwak=new Set(V.SECS.filter(s=>s.par===p&&(!d||!d.r[s.id]||d.r[s.id][0]<d.r[s.id][1]||wrongIn(s.id))).map(s=>s.id));
    const f=shuf(ST.wrong.filter(id=>QM[id]&&secOf(QM[id].o).par===p)).slice(0,2);
    const z=shuf(all.filter(q=>zwak.has(q.o)&&!f.includes(q.id)).map(q=>q.id));
    const r=shuf(all.map(q=>q.id).filter(id=>!f.includes(id)&&!z.includes(id)));
    /* ongeveer 4 van de 5 uit de regels die nog niet goed gaan, 1 ter herhaling */
    const ids=[...f,...z.slice(0,Math.max(0,n-1-f.length))];ids.push(...r.slice(0,n-ids.length));if(ids.length<n)ids.push(...z.filter(id=>!ids.includes(id)).slice(0,n-ids.length));
    return shuf(ids)}
  /* opwarmen: 3 vragen uit eerdere paragrafen van dit vak (vóór de paragraaf van het huiswerk), eerst je foute vragen; geen open vragen of eigen vraagsoorten */
  function warmPool(vd,par){const v=vw(vd);if(!v)return [];const ps=v.leer||[...new Set(v.SECS.filter(s=>s.par!=='mix').map(s=>s.par))],i=ps.indexOf(par);
    if(i<1)return [];const eerder=new Set(ps.slice(0,i)),sec=Object.fromEntries(v.SECS.map(s=>[s.id,s.par]));
    return v.Q.filter(q=>eerder.has(sec[q.o])&&q.t!=='open'&&!q.type).map(q=>q.id)}
  function warmIds(vd,par){const pool=warmPool(vd,par),st=Oefen.ctx.state(vd),S=st.sr||{},t=vandaag(),f=shuf((st.wrong||[]).filter(id=>pool.includes(id))).slice(0,2);
    /* daarna eerst wat volgens de terugblik vandaag terug mag komen */
    const due=shuf(pool.filter(id=>!f.includes(id)&&S[id]&&S[id][1]<=t));
    return shuf([...f,...due,...shuf(pool.filter(id=>!f.includes(id)&&!due.includes(id)))].slice(0,3))}
  /* herhaalronde bij bijhouden (afspraak 9 nov): niet de vragen die ze net als huiswerk deed, maar eerst wat daarin fout ging,
     dan andere vragen uit deze paragraaf, en als die op zijn eerdere stof van dit vak. Elke keer een nieuwe mix. */
  function recentHw(){const d=new Date(),t=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
    const ks=new Set([...Object.keys(ST.hw||{}),...Object.keys(ST.hwAns||{})].filter(k=>k.slice(0,10)>=t)),ids=new Set(),fout=new Set();
    ks.forEach(k=>{((ST.hw||{})[k]||[]).forEach(x=>ids.add(x));Object.entries((ST.hwAns||{})[k]||{}).forEach(([x,a])=>{ids.add(x);if(!a.ok)fout.add(x)})});
    return {ids,fout}}
  function herhaalIds(p,n=10){const {ids,fout}=recentHw(),inV=new Set(V.Q.map(q=>q.id)),R=[];
    const add=xs=>xs.forEach(x=>{if(R.length<n&&inV.has(x)&&!R.includes(x))R.push(x)});
    add(shuf([...fout]).slice(0,4));
    const vers=q=>!ids.has(q.id),inP=V.Q.filter(q=>secOf(q.o).par===p);
    add(shuf(ST.wrong.filter(x=>inP.some(q=>q.id===x)&&!ids.has(x))).slice(0,3));
    add(shuf(inP.filter(vers).map(q=>q.id)));
    const eerder=leerPars().filter(x=>x!==p);add(shuf(V.Q.filter(q=>eerder.includes(secOf(q.o).par)&&vers(q)).map(q=>q.id)));
    add(shuf(inP.map(q=>q.id)));return shuf(R)}
  /* ---------- terugblik (afspraak 13 nov): oude stof komt terug op groeiende tussenpozen, door elkaar.
     ST.sr[vraag-id] = [stap, dag waarop hij terug mag komen]. In één keer goed zonder hulp: een stap verder (3, 7, 14, 30 dagen).
     Fout of met hulp: morgen weer. Geldt voor elke ronde, ook huiswerk en toetsen.
     In het bijhoudblok (binnen de 20 minuten) eerst een terugblik: hooguit 8 vragen (5 sommen bij wiskunde en natuurkunde)
     uit EERDERE paragrafen die al behandeld zijn (Gate), eerst wat terug moet komen, daarna wat nog nooit terugkwam.
     Eén keer per dag; wat niet past, stapelt niet op: de rest komt een andere dag. ---------- */
  const SR_DAGEN=[1,3,7,14,30];
  const plusDag=n=>{const d=new Date();d.setDate(d.getDate()+n);return dagStr(d)};
  const vandaag=()=>dagStr(new Date());
  function srRec(id,ok){const S=ST.sr=ST.sr||{},o=S[id]||[-1,''],st=ok?Math.min(Math.max(o[0],0)+1,SR_DAGEN.length-1):0;S[id]=[st,plusDag(SR_DAGEN[st])]}
  const tbN=()=>tvVak()?5:8;
  function terugPool(p){const ps=leerPars().filter(x=>x!==p&&!(V.basis&&x===V.basis.par));
    return V.Q.filter(q=>ps.includes(secOf(q.o).par)&&q.t!=='open')}
  /* door elkaar: na elkaar zo min mogelijk dezelfde paragraaf */
  function rits(ids){const G={};shuf(ids).forEach(id=>{const k=secOf(QM[id].o).par;(G[k]=G[k]||[]).push(id)});
    const L=Object.values(G).sort((a,b)=>b.length-a.length),R=[];while(L.some(x=>x.length))L.forEach(x=>{if(x.length)R.push(x.shift())});return R}
  function terugIds(p){const n=tbN(),t=vandaag(),S=ST.sr||{},pool=terugPool(p),fout=new Set(ST.wrong);
    const due=pool.filter(q=>S[q.id]&&S[q.id][1]<=t).sort((a,b)=>(fout.has(b.id)-fout.has(a.id))||(S[a.id][1]<S[b.id][1]?-1:S[a.id][1]>S[b.id][1]?1:0)).map(q=>q.id);
    const R=due.concat(shuf(pool.filter(q=>!S[q.id]&&fout.has(q.id)).map(q=>q.id))).slice(0,n);
    if(R.length<n){const nieuw=rits(pool.filter(q=>!S[q.id]&&!fout.has(q.id)).map(q=>q.id));R.push(...nieuw.slice(0,n-R.length))}
    return rits(R)}
  const tbGedaan=()=>ST.tbDag===vandaag();
  function terugblik(p){const ids=terugIds(p);if(!ids.length)return home();
    if(!ST.tbIntro)return tbIntro(()=>terugblik(p));
    start('oefen',ids,'Terugblik · '+V.naam,null,p);R.tb=1}
  function tbIntro(verder){
    el.innerHTML=`${top(V.naam,'Nieuw')}
    <h2>Terugblik: oude stof ophalen</h2>
    <div class="card stack">
      <p><b>Wat je moet ophalen uit je geheugen, onthoud je.</b> Wat je alleen terugleest, vergeet je weer. Daarom begint bijhouden voortaan met een paar vragen uit eerdere paragrafen, door elkaar.</p>
      <p><b>Dit voelt moeilijker dan de stof van deze week.</b> Dat is precies de bedoeling: juist die moeite zorgt dat het blijft hangen. Een fout is hier niet erg.</p>
      <p>Wat je goed hebt, komt pas later terug: na 3 dagen, dan na een week, dan na twee weken. Wat fout gaat, komt morgen nog eens. Zo hoef je voor de toets veel minder opnieuw te leren.</p>
      <p>Het is kort: ${tbN()===5?'hooguit 5 sommen':'hooguit 8 vragen'}, ongeveer 5 minuten. Het hoort bij je bijhouden, het komt er niet bij.</p></div>
    <div class="stack"><button class="btn" id="tbbegin">Begin de terugblik</button><button class="btn ghost" id="tbterug">Terug</button></div>`;
    el.querySelector('#back').onclick=home;el.querySelector('#tbterug').onclick=home;
    el.querySelector('#tbbegin').onclick=()=>{ST.tbIntro=1;save();verder()};scrollTo(0,0)}
  function kortIds(){const f=shuf(WR()).slice(0,4);return shuf([...f,...shuf(V.Q.map(q=>q.id).filter(id=>!f.includes(id))).slice(0,8-f.length)])}
  function toetsIds(){const pick=[];V.SECS.filter(x=>x.par!=='mix'&&!basisSec(x.id)).forEach(x=>{const l=shuf(V.Q.filter(q=>q.o===x.id));if(l.length)pick.push(l[0].id)});const rest=shuf(V.Q.filter(q=>!basisSec(q.o)).map(q=>q.id).filter(id=>!pick.includes(id)));return shuf([...pick,...rest.slice(0,Math.max(0,20-pick.length))]).slice(0,Math.max(20,pick.length))}
  /* tussentoets (afspraak 9 nov): per paragraaf eerst 6 meerkeuzevragen. Een 7 of hoger zet de paragraaftoets (zonder keuzes) open.
     Is de paragraaftoets al eens gehaald, of heeft de paragraaf te weinig meerkeuzevragen, dan is er geen tussentoets nodig. */
  const mcVraag=q=>!q.type&&q.t!=='open'&&!q.in&&Array.isArray(q.f)&&q.f.length>=1;
  const ttPool=p=>V.Q.filter(q=>secOf(q.o).par===p&&mcVraag(q));
  const ttHeeft=p=>ttPool(p).length>=3;
  const ttGehaald=p=>((ST.ttoets||{})[p]||0)>=7||!!(ST.ptoets[p]&&ST.ptoets[p].best>=7);
  const ttNodig=p=>ttHeeft(p)&&!ttGehaald(p);
  function ttoets(p){const pool=ttPool(p),pick=[];V.SECS.filter(s=>s.par===p).forEach(s=>{const l=shuf(pool.filter(q=>q.o===s.id));if(l.length)pick.push(l[0].id)});
    const rest=shuf(pool.map(q=>q.id).filter(id=>!pick.includes(id)));start('ttoets',shuf([...shuf(pick).slice(0,6),...rest].slice(0,6)),'Tussentoets '+(V.PN[p]||p),null,p)}
  function ptoets(p){if(ttNodig(p))return ttoets(p);const pick=[];V.SECS.filter(s=>s.par===p).forEach(s=>{const l=shuf(V.Q.filter(q=>q.o===s.id));if(l.length)pick.push(l[0].id)});
    const rest=shuf(parIds(p).filter(id=>!pick.includes(id)));let no=0;
    const ids=[...pick,...rest].filter(id=>{if(QM[id].t!=='open')return true;return ++no<=3});
    start('ptoets',shuf(ids.slice(0,10)),'Paragraaftoets '+(V.PN[p]||p),null,p)}
  const rulesHtml=s=>s.rules.map(r=>`<div class="rule"><b>${fmt(r[0])}</b>${r[1]?`<div class="res">${fmt(r[1])}</div>`:''}${r[2]?`<div class="why">${fmt(r[2])}</div>`:''}</div>`).join('');

  function section(id){
    const s=secOf(id),ids=V.Q.filter(q=>q.o===id).map(q=>q.id),w=wrongIn(id);
    el.innerHTML=`${top(V.naam,s.sub.split(' · ')[0])}
    <h2 class="row">${chip(s)} ${s.name}</h2>
    <div class="card spiek"><span class="tag">Zo werkt het</span>${rulesHtml(s)}</div>
    ${V.SNAP[id]?`<div class="card snapcard"><span class="tag">Snap het: waarom werkt dit?</span>${V.snapHtml(id)}</div>`:''}
    <div class="stack"><button class="btn" id="oef">Oefenen (${ids.length} vragen)</button>
      ${V.Q.some(q=>q.o===id&&hasSt(q)&&!q.type)?'<button class="btn ghost" id="stap">Stap voor stap: ik krijg bij elke vraag hulp</button>':''}
      ${tvVak()&&V.Q.some(q=>q.o===id&&hasSt(q)&&!q.type&&!q.in&&q.t!=='open')?'<button class="btn ghost" id="tvs">Toetsvorm: zonder antwoorden om uit te kiezen en zonder hulp</button>':''}
      ${w?`<button class="btn ghost" id="sfout" style="border-color:var(--bad)">Mijn foute vragen in dit onderdeel (${w})</button>`:''}</div>`;
    el.querySelector('#back').onclick=home;
    el.querySelector('#oef').onclick=()=>start('oefen',shuf(ids),s.name,id);
    const sb=el.querySelector('#stap');if(sb)sb.onclick=()=>start('stap',ids,s.name,id);
    const tb=el.querySelector('#tvs');if(tb)tb.onclick=()=>start('tvorm',shuf(V.Q.filter(q=>q.o===id&&hasSt(q)&&!q.type&&!q.in&&q.t!=='open').map(q=>q.id)),s.name+' · toetsvorm',id);
    const sf=el.querySelector('#sfout');if(sf)sf.onclick=()=>start('fout',shuf(ST.wrong.filter(x=>QM[x].o===id)),s.name+' · foute vragen',id);
    scrollTo(0,0);
  }
  function spiek(p){
    el.innerHTML=`${top(V.naam)}<h2>${p?V.PN[p]||p:'Spiekbrief'}</h2>
    ${p?'<p class="sub">Leer ze niet alleen uit je hoofd. Schrijf ze over in je schrift en zet bij elke regel een eigen voorbeeld. Bij een fout: zoek op welke regel misging.</p>':''}
    ${V.SECS.filter(s=>!p||s.par===p).map(s=>`<div class="card spiek"><h3>${chip(s)} ${s.name}</h3>${rulesHtml(s)}</div>`).join('')}
    ${V.BEG.length&&!p?`<div class="card spiek"><h3><span class="sq" style="background:var(--c6)">B</span> Begrippen</h3>${V.BEG.map(b=>`<div class="rule"><b>${b[0]}</b><div class="why">${b[1]}</div></div>`).join('')}</div>`:''}`;
    el.querySelector('#back').onclick=home;scrollTo(0,0);
  }

  /* ---------- kaartjes ---------- */
  function kaartMenu(){
    el.innerHTML=`${top(V.naam)}<h2>Begrippen-kaartjes</h2>
    <p class="sub">Bedenk eerst zelf wat het betekent, tik dan op het kaartje. "Wist ik nog niet" gaat achteraan de stapel.</p>
    <div class="stack"><button class="btn" id="b1">Begrip → uitleg</button><button class="btn ghost" id="b2">Uitleg → begrip</button>
    ${ST.wrongB.length?`<button class="btn ghost" id="b3">Alleen mijn lastige begrippen (${ST.wrongB.length})</button>`:''}</div>`;
    el.querySelector('#back').onclick=home;
    el.querySelector('#b1').onclick=()=>kStart(shuf(V.BEG),false);
    el.querySelector('#b2').onclick=()=>kStart(shuf(V.BEG),true);
    const b3=el.querySelector('#b3');if(b3)b3.onclick=()=>kStart(shuf(V.BEG.filter(b=>ST.wrongB.includes(b[0]))),false);
    scrollTo(0,0);
  }
  function kStart(stack,rev){K={stack:stack.slice(),rev,tot:stack.length,done:0,first:{},t0:Date.now(),ik:'k'+Date.now().toString(36)};kaart()}
  /* kaartjes in de inzet (afspraak 14 nov): per kaartje het begrip, na hoeveel seconden ze omdraaide (w) en of ze 'wist ik' koos */
  function kaartRec(t,ok,her){if(Oefen.ctx.ouder&&Oefen.ctx.ouder())return;
    const I=ST.inzet=ST.inzet||[],nu=Date.now(),sec=x=>Math.round(Math.max(0,Math.min(x,3600000))/1000);
    let r=I.find(x=>x.k===K.ik);if(!r){r={k:K.ik,d:dagStr(new Date(K.t0)),m:'kaart',ti:K.rev?'omgekeerd: uitleg → begrip':'',n:K.tot,t0:K.t0,q:[]};I.push(r)}
    const x={i:'kaart',b:schoon(t).slice(0,80),ok:ok?1:0,s:sec(nu-(K.tc||nu)),w:sec((K.tfl||nu)-(K.tc||nu))};if(her)x.f='r';
    r.q.push(x);r.t1=nu;save()}
  function kaart(){
    if(!K.stack.length){const good=Object.values(K.first).filter(x=>x).length;
      el.innerHTML=`<span class="tag">Begrippen-kaartjes</span><div class="card stack"><div class="score">${good} / ${K.tot}</div><p>meteen geweten.</p></div>
      <div class="stack"><button class="btn" id="again">Nog een keer</button><button class="btn ghost" id="hm">Terug naar ${V.naam}</button></div>`;
      el.querySelector('#again').onclick=kaartMenu;el.querySelector('#hm').onclick=home;return;}
    const [t,u]=K.stack[0],front=K.rev?u:t,back=K.rev?t:u;
    el.innerHTML=`<div class="top"><button class="link" id="stop">← Stoppen</button><span class="tag">${K.done} / ${K.tot} klaar</span></div>
    <div class="bar"><i style="width:${Math.round(K.done/K.tot*100)}%"></i></div>
    <button class="card flip" id="fl">${K.rev?`<span>${front}</span>`:`<b>${front}</b>`}<span class="sub">Tik om om te draaien</span></button>
    <div class="row" id="kb" hidden><button class="btn" id="wel" style="flex:1">Wist ik</button><button class="btn ghost" id="niet" style="flex:1">Wist ik nog niet</button></div>`;
    const fl=el.querySelector('#fl');K.tc=Date.now();K.tfl=null;
    fl.onclick=()=>{K.tfl=Date.now();fl.innerHTML=K.rev?`<span class="why">${front}</span><b>${back}</b>`:`<b>${front}</b><span>${back}</span>`;el.querySelector('#kb').hidden=false;fl.onclick=null};
    el.querySelector('#stop').onclick=kaartMenu;
    el.querySelector('#wel').onclick=()=>{kaartRec(t,true,t in K.first);if(!(t in K.first))K.first[t]=true;ST.wrongB=ST.wrongB.filter(x=>x!==t);save();K.stack.shift();K.done++;kaart()};
    el.querySelector('#niet').onclick=()=>{kaartRec(t,false,t in K.first);if(!(t in K.first))K.first[t]=false;if(!ST.wrongB.includes(t))ST.wrongB.push(t);save();K.stack.push(K.stack.shift());kaart()};
    scrollTo(0,0);
  }

  /* ---------- oefenen ---------- */
  /* foute vragen: hooguit FOUT_MAX per keer, de rest blijft op de stapel voor een volgende keer */
  const FOUT_MAX=6;
  /* een foute vraag komt in dezelfde ronde nog één keer terug; gaat hij dan weer fout, dan telt hij als klaar
     voor deze ronde en blijft hij bij 'Mijn foute vragen' voor een andere dag (anders kan een ronde eindeloos duren) */
  function nogEens(q,it){R.tries=R.tries||{};const n=R.tries[q.id]=(R.tries[q.id]||0)+1;
    if(n<2){const at=Math.min(R.i+4,R.queue.length);R.queue.splice(at,0,{id:q.id,retry:true,alt:retryAlt(q.id,it)});return true}
    R.cleared.add(q.id);return false}
  const laterTxt='<p class="why" style="margin-top:10px">Deze bewaren we voor een andere dag. Hij blijft bij Mijn foute vragen; jij gaat nu door.</p>';
  function foutIds(sec){return shuf(ST.wrong.filter(x=>QM[x]&&(!sec||QM[x].o===sec)))}
  function tvIntro(verder){
    el.innerHTML=`${top(V.naam,'Nieuw')}
    <h2>Toetsen zoals op school</h2>
    <div class="card stack">
      <p><b>Geen antwoorden meer om uit te kiezen.</b> In de paragraaftoets en de proeftoets schrijf je alles zelf op, net als op de echte toets.</p>
      <p>${tvVak()?'Sommen werk je helemaal uit op papier: formule, invullen, uitkomst en eenheid. Het eindgetal typ je in, dat kijkt de app na. Daarna vink je aan welke stappen je goed had. Uitleg schrijf je ook op papier, en je ouder kijkt mee.':'Woordjes, vormen en rijtjes kijkt de app zelf na. Zinnen en uitleg kijk je zelf na, en je ouder kijkt mee.'}</p>
      <p><b>Je cijfers worden eerst lager dan je gewend bent.</b> Dat is normaal. Je weet niet minder: de toets is moeilijker geworden. Een 7 is nu meer waard dan een 9 vroeger.</p>
      <p>Lukt het niet meteen? Je mag een paragraaftoets zo vaak overdoen als je wilt. Je beste cijfer telt.</p></div>
    <div class="stack"><button class="btn" id="tvbegin">Begin de toets</button><button class="btn ghost" id="tvterug">Terug</button></div>`;
    el.querySelector('#back').onclick=home;el.querySelector('#tvterug').onclick=home;
    el.querySelector('#tvbegin').onclick=()=>{ST.tvIntro=1;save();verder()};scrollTo(0,0)}
  function start(mode,ids,title,sec,par,hw){
    if((mode==='ptoets'||mode==='toets')&&(V.toetsvorm||tvVak())&&!ST.tvIntro)return tvIntro(()=>start(mode,ids,title,sec,par,hw));
    if(mode==='fout'&&ids.length>FOUT_MAX)ids=ids.slice(0,FOUT_MAX);
    const was=new Set(ST.wrong),exam=mode==='toets'||mode==='ptoets'||mode==='ttoets'||mode==='diag';
    R={rid:exam?Date.now().toString(36):null,nk:0,mode,exam,title,sec,par,ids,was,queue:ids.map(id=>({id,retry:false,alt:!exam&&was.has(id)&&!!QM[id].v,old:!exam&&was.has(id)})),i:0,first:{},cleared:new Set(),total:ids.length,helped:{},stepErr:{},hw,tStart:Date.now()};
    ask();
  }
  function kop(it,q,s,guided){
    return `<div class="top"><button class="link" id="stop">← Stoppen</button><span class="tag">${R.cleared.size} / ${R.total} klaar</span></div>
    <div class="bar"><i style="width:${Math.round(R.cleared.size/R.total*100)}%"></i></div>
    ${it.retry?`<div class="again">${q.gen?'Deze had je net fout. Nu dezelfde soort som met andere getallen: reken hem zelf uit.':it.alt?'Deze had je net fout. Nog een keer, nu anders gevraagd!':'Deze had je net fout. Nog een keer!'}</div>`:it.old?`<div class="again">${q.gen?'Deze soort som had je eerder fout. Nu met andere getallen: reken hem zelf uit.':it.alt?'Deze vraag had je eerder fout. Hij is nu anders gevraagd.':'Deze vraag had je eerder fout. Nog een keer!'}</div>`:''}
    <div class="row">${chip(s)}<span class="tag">${q.gen&&/^\d/.test(q.nr)?'Zoals opgave '+q.nr:nrTag(q)}</span></div>
    <div class="card q">${fmt(q.q)}</div>
    ${!R.exam?`${q.denk?`<details class="denk"${guided?' open':''}><summary>Hoe pak ik dit aan?</summary>${fmt(q.denk)}</details>`:''}
    ${V.SNAP[q.o]&&V.snapInVraag!==false?`<details class="denk"><summary>Snap het: waarom werkt dit?</summary>${V.snapHtml(q.o)}</details>`:''}`:''}`}
  function stopRonde(){if(R&&R.van){done();return Oefen.ctx.home()}if(R&&R.hw&&Oefen._hw)return hwHome(Oefen._hw);R&&R.sec?section(R.sec):home()}
  function ask(){
    if(R.i>=R.queue.length)return end();
    R.t0=Date.now();R.tRev=null;R.zelf=0;
    const it=R.queue[R.i],q=form(QM[it.id],it.alt),s=secOf(q.o);
    if(schrijfVorm(q,it))return askSchrijf(q,it,s);
    if(q.type&&V.custom&&V.custom[q.type])return askCustom(q,it,s);
    /* vakken met open toetsen (levensbeschouwing): meerkeuzevraag met open versie wordt open gesteld, behalve bij opwarmen en herkansing */
    if(QM[it.id].open&&R.mode!=='opwarm'&&R.mode!=='stap'&&R.mode!=='ttoets'&&!it.retry){const b=QM[it.id],o=b.open;return askOpen(Object.assign({},b,{t:'open',q:o.q||b.q,k:o.k,vb:o.vb}),Object.assign({},it,{alt:false}),s)}
    if(q.t==='open')return askOpen(q,it,s);
    if(q.in)return askTyped(q,it,s);
    if(tvorm(q,it))return askToets(q,it,s);
    const opts=shuf([[q.a,1],...q.f.map(x=>Array.isArray(x)?x:[x,''])]),guided=(R.mode==='stap'||(R.hw&&it.retry))&&hasSt(q),two=opts.some(o=>o[0].includes('<svg'));
    el.innerHTML=`${kop(it,q,s,guided)}
    <div id="steps" class="stack"></div>
    <div id="optwrap" class="stack" ${guided?'hidden':''}>
      <span class="tag" id="kies">${V.reken!==false&&/[0-9]/.test(q.a)&&!two?'Reken het uit in je schrift. Kies dan het goede antwoord':'Kies het goede antwoord'}</span>
      <div class="opts${two?' two':''}">${opts.map((o,k)=>`<button class="opt" data-k="${k}">${fmt(o[0])}</button>`).join('')}</div>
    </div>
    ${!R.exam&&!guided&&hasSt(q)?'<button class="btn ghost" id="help">Help mij stap voor stap</button>':''}
    <div id="fb"></div>`;
    el.querySelector('#stop').onclick=stopRonde;
    const hb=el.querySelector('#help');if(hb)hb.onclick=()=>{hb.remove();R.helped[q.id]=1;guide(q,0)};
    if(guided){R.helped[q.id]=1;guide(q,0)}
    el.querySelectorAll('.opt[data-k]').forEach(b=>b.onclick=()=>answer(q,opts,+b.dataset.k,it));
    scrollTo(0,0);
  }
  /* zelf het antwoord intypen (varianten met nieuwe getallen) */
  function askTyped(q,it,s){
    const guided=R.mode==='stap'&&hasSt(q);
    el.innerHTML=`${kop(it,q,s,guided)}
    <div id="steps" class="stack"></div>
    <div id="optwrap" class="stack" ${guided?'hidden':''}>
      <span class="tag" id="kies">Reken het uit in je schrift. Typ dan het antwoord</span>
      <form id="tf" class="card stack">${q.in.length===2&&q.in[0].lab==='x'&&q.in[1].lab==='y'?'<span class="sub">Eerst x, dan y</span>':''}
        <div class="row" style="flex-wrap:wrap;gap:10px">${q.in.map((x,i)=>`<label class="row" style="gap:6px"><span>${x.lab}</span><input class="cell" style="width:90px;font-size:1.1rem" data-i="${i}" inputmode="text" autocomplete="off" aria-label="${x.lab}"></label>`).join('')}</div>
        <span class="sub" style="font-size:.85rem">Een komma, een minteken of een breuk als 3/4 mag.</span>
        <button class="btn" id="tok">Controleer</button></form>
    </div>
    ${!R.exam&&!guided&&hasSt(q)?'<button class="btn ghost" id="help">Help mij stap voor stap</button>':''}
    <div id="fb"></div>`;
    el.querySelector('#stop').onclick=stopRonde;
    const hb=el.querySelector('#help');if(hb)hb.onclick=()=>{hb.remove();R.helped[q.id]=1;guide(q,0)};
    if(guided){R.helped[q.id]=1;guide(q,0)}else{const f=el.querySelector('#tf input');if(f)f.focus()}
    el.querySelector('#tf').onsubmit=e=>{e.preventDefault();
      const ins=[...el.querySelectorAll('#tf input')],val=ins.map(i=>lees(i.value));
      if(val.some(v=>!isFinite(v))){el.querySelector('#kies').textContent='Vul elk vakje in met een getal';return}
      let goed;
      if(q.in.every(x=>x.set)){const want=q.in.map(x=>x.v),left=want.slice();goed=val.map(v=>{const j=left.findIndex(a=>zelfde(v,a));if(j<0)return false;left.splice(j,1);return true})}
      else goed=val.map((v,i)=>zelfde(v,q.in[i].v));
      ins.forEach((i,j)=>{i.readOnly=true;i.classList.add(goed[j]?'ok':'bad')});
      el.querySelector('#tok').remove();
      const ok=goed.every(Boolean),hb2=el.querySelector('#help');if(hb2)hb2.remove();
      inzetRec(q,it,ok,ins.map(i=>i.value.trim()).join(', '));
      if(!(q.id in R.first)){R.first[q.id]=ok;hwRec(q,it,ins.map((i,j)=>(q.in.length>1?q.in[j].lab+' = ':'')+i.value.trim()).join(', '),ok);if(!ok&&!ST.wrong.includes(q.id))ST.wrong.push(q.id);if(ok&&R.was.has(q.id)&&!R.stepErr[q.id])ST.wrong=ST.wrong.filter(x=>x!==q.id);save()}
      if(ok||R.exam){R.cleared.add(q.id);hwMark(q.id)}
      else R.terug=nogEens(q,it)
      const ul=uitl(q),fb=el.querySelector('#fb');
      fb.innerHTML=ok?`<div class="fb ok"><div class="head">Goed!</div>${R.helped[q.id]||!ul?'':`<div>Zo zit het:</div>${ul}`}</div>`
        :`<div class="fb bad"><div class="head">Niet goed</div><div><b>Het goede antwoord is:</b></div><div class="res">${fmt(q.a)}</div>${ul?`<div><b>Zo zit het:</b></div>${ul}`:''}
          ${R.exam?'':R.terug?'<p class="why" style="margin-top:10px">Deze soort som komt zo nog een keer terug, met andere getallen.</p>':laterTxt}</div>`;
      fb.insertAdjacentHTML('beforeend','<div style="margin-top:12px"><button class="btn" id="next">Volgende</button></div>');
      fb.querySelector('#next').onclick=()=>{R.i++;ask()};fb.scrollIntoView({behavior:smooth,block:'start'})};
    scrollTo(0,0);
  }
  function guide(q,n){
    const box=el.querySelector('#steps');
    if(n>=q.st.length){const w=el.querySelector('#optwrap');w.hidden=false;el.querySelector('#kies').textContent=q.in?'Alle stappen gedaan. Typ nu het antwoord':'Alle stappen gedaan. Kies nu het goede antwoord';w.scrollIntoView({behavior:smooth,block:'nearest'});return}
    const x=q.st[n],d=document.createElement('div');d.className='step';
    d.innerHTML=`<span class="tag">Stap ${n+1} van ${q.st.length}</span><div>${fmt(x.t)}</div>`+
      (x.mc?`${x.v?`<b>${fmt(x.v)}</b>`:''}<div class="opts">${shuf(x.mc).map(o=>`<button class="opt" data-ok="${o[1]===1?1:0}" data-why="${encodeURIComponent(o[1]===1?'':o[1])}">${fmt(o[0])}</button>`).join('')}</div><div class="sw"></div>`
           :`<button class="btn ghost sh">Laat zien</button>`);
    box.appendChild(d);
    const finish=()=>{if(x.s){const r=document.createElement('div');r.className='res';r.innerHTML=fmt(x.s);d.appendChild(r)}
      const nb=document.createElement('button');nb.className='btn';nb.textContent=n+1<q.st.length?'Volgende stap':'Naar het antwoord';
      nb.onclick=()=>{nb.remove();d.className='done-step';guide(q,n+1)};d.appendChild(nb);nb.focus()};
    if(x.mc)d.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{const sw=d.querySelector('.sw');
      if(b.dataset.ok==='1'){b.classList.add('ok');d.querySelectorAll('.opt').forEach(o=>o.disabled=true);sw.innerHTML='<div class="fb ok"><div class="head">Goed zo!</div></div>';finish()}
      else{b.classList.add('bad');b.disabled=true;R.stepErr[q.id]=(R.stepErr[q.id]||0)+1;if(!ST.wrong.includes(q.id)){ST.wrong.push(q.id);save()}
        sw.innerHTML=`<div class="fb bad"><div class="head">Nog niet.</div>${fmt(decodeURIComponent(b.dataset.why))} Probeer het nog een keer.</div>`}});
    else d.querySelector('.sh').onclick=e=>{e.target.remove();finish()};
    d.scrollIntoView({behavior:smooth,block:'nearest'});
  }
  function answer(q,opts,k,it){
    const ok=opts[k][1]===1;
    el.querySelectorAll('.opt[data-k]').forEach((b,j)=>{b.disabled=true;if(opts[j][1]===1)b.classList.add('ok');else if(j===k)b.classList.add('bad');else b.classList.add('dim')});
    const hb=el.querySelector('#help');if(hb)hb.remove();
    inzetRec(q,it,ok,opts[k][0]);
    if(!(q.id in R.first)){R.first[q.id]=ok;hwRec(q,it,opts[k][0],ok);
      if(!ok&&!ST.wrong.includes(q.id))ST.wrong.push(q.id);
      /* pas uit de stapel als hij in een LATERE ronde in één keer goed gaat */
      if(ok&&R.was.has(q.id)&&!R.stepErr[q.id])ST.wrong=ST.wrong.filter(x=>x!==q.id);
      if(ok&&!R.exam&&!R.stepErr[q.id]&&hasSt(q)){ST.ok=ST.ok||[];if(!ST.ok.includes(q.id))ST.ok.push(q.id)}
      save();}
    if(ok||R.exam){R.cleared.add(q.id);hwMark(q.id)}
    else R.terug=nogEens(q,it)
    const fb=el.querySelector('#fb');
    const ul=uitl(q);
    fb.innerHTML=ok?`<div class="fb ok"><div class="head">Goed!</div>${R.helped[q.id]||!ul?'':`<div>Zo zit het:</div>${ul}`}</div>`
      :`<div class="fb bad"><div class="head">Niet goed</div>${opts[k][1]?`<div><b>Dit ging er mis:</b></div><div class="mistake">${fmt(opts[k][1])}</div>`:''}
        <div><b>Het goede antwoord is:</b></div><div class="res">${fmt(q.a)}</div>${ul?`<div><b>Zo zit het:</b></div>${ul}`:''}
        ${R.exam?'':R.terug?'<p class="why" style="margin-top:10px">Deze vraag komt zo nog een keer terug, in andere woorden.</p>':laterTxt}</div>`;
    fb.insertAdjacentHTML('beforeend','<div style="margin-top:12px"><button class="btn" id="next">Volgende</button></div>');
    fb.querySelector('#next').onclick=()=>{R.i++;ask()};
    fb.scrollIntoView({behavior:smooth,block:'start'});
  }
  /* afronden van een vraag die niet meerkeuze is (open vraag of eigen vraagsoort van een vak) */
  function finishCustom(q,it,ok,html,jij){
    inzetRec(q,it,ok,jij);
    if(!(q.id in R.first)){R.first[q.id]=ok;hwRec(q,it,jij,ok);
      if(!ok&&!ST.wrong.includes(q.id))ST.wrong.push(q.id);
      if(ok&&R.was.has(q.id))ST.wrong=ST.wrong.filter(x=>x!==q.id);
      save();}
    if(ok||R.exam){R.cleared.add(q.id);hwMark(q.id)}
    else R.terug=nogEens(q,it)
    const fb=el.querySelector('#fb');
    fb.innerHTML=(html||'')+(!ok&&!R.exam?(R.terug?'<p class="why" style="margin-top:10px">Deze komt zo nog een keer terug.</p>':laterTxt):'')+'<div style="margin-top:12px"><button class="btn" id="next">Volgende</button></div>';
    fb.querySelector('#next').onclick=()=>{R.i++;ask()};
  }
  /* ---------- toetsvorm (wiskunde, natuurkunde): de vraag zonder opties en zonder hulp, zoals op de toets.
     Ze werkt de som uit op papier, typt het eindantwoord (als dat een getal is), ziet daarna de hele uitwerking
     en vinkt aan welke stappen ze zelf goed had. Komt in toetsvorm: alles in 'Oefentoets uit het boek' en 'Toetsvorm' per paragraaf,
     en in gewone rondes elke vraag die ze eerder al in één keer goed had (niet bij huiswerk, opwarmen of een herkansing). */
  const eindGetal=a=>{const t=String(a??'').replace(/\$/g,'').replace(/−/g,'-').replace(/^\s*[a-zA-Zρ]\s*=\s*/,'').trim();
    const m=t.match(/^(-?\d[\d.]*(?:,\d+)?)\s*[a-zA-Z°%³²µ\/^\d .]*$/);if(!m)return null;
    let x=m[1];if(x.includes(','))x=x.replace(/\./g,'').replace(',','.');else if(/^\-?\d{1,3}(\.\d{3})+$/.test(x))x=x.replace(/\./g,'');
    const n=Number(x);return isFinite(n)?n:null};
  const tvVak=()=>V.reken!==false;
  function tvorm(q,it){if(!tvVak()||!hasSt(q)||q.type||q.t==='open'||q.in||it.retry)return false;
    if(R.mode==='tvorm'||R.mode==='ptoets'||R.mode==='toets')return true;
    return !R.exam&&!['stap','opwarm','diag','fout'].includes(R.mode)&&(ST.ok||[]).includes(q.id)}
  /* formules nakijken (afspraak 12 nov): 'y = -2x + 5', 'a = -2 en b = 5', 'y = 3/4x + 2' of '12 3/19'. Beide kanten worden
     uitgerekend voor een paar waarden van de letters. Uitkomst: true (klopt), false (klopt niet), null (kan de app niet beoordelen,
     bijvoorbeeld een afgerond kommagetal of een schrijfwijze die de app niet kent: dan kijkt ze zelf na en ziet de ouder het antwoord). */
  const FM=(()=>{
    const prep=t=>String(t??'').replace(/\$/g,'').replace(/<[^>]+>/g,'').replace(/[−–‐]/g,'-').replace(/[·×]/g,'*').replace(/:/g,'/')
      .replace(/(\d+)\[\[([^|\]]+)\|([^\]]+)\]\]/g,'($1+($2)/($3))').replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g,'(($1)/($2))')
      .replace(/(\d)\s+(?=\d{3}(?!\d))/g,'$1').replace(/(\d+)\s+(\d+)\s*\/\s*(\d+)/g,'($1+$2/$3)').replace(/(\d),(\d)/g,'$1.$2')
      .replace(/²/g,'^2').replace(/³/g,'^3').trim();
    function tok(t){const T=[],re=/\s*(\d+(?:\.\d+)?|[a-zA-Z]|[-+*/^()])/y;let m;re.lastIndex=0;
      while(re.lastIndex<t.length){const at=re.lastIndex;m=re.exec(t);if(!m){if(/^\s*$/.test(t.slice(at)))break;return null}T.push(m[1])}
      const U=[];T.forEach((x,i)=>{const p=U[U.length-1];if(p!=null&&(/^[\d.]+$|^[a-zA-Z]$|^\)$/.test(p))&&(/^[a-zA-Z(]$/.test(x)||(/^[a-zA-Z)]$/.test(p)&&/^\d/.test(x))))U.push('*');U.push(x)});return U}
    function parse(T){let i=0;const pk=()=>T[i],nx=()=>T[i++];
      const atom=()=>{const x=nx();if(x==null)throw 0;if(/^\d/.test(x))return ()=>+x;if(/^[a-zA-Z]$/.test(x))return E=>E[x];
        if(x==='('){const e=expr();if(nx()!==')')throw 0;return e}throw 0};
      const power=()=>{const b=atom();if(pk()==='^'){nx();const e=unary();return E=>Math.pow(b(E),e(E))}return b};
      const unary=()=>{if(pk()==='-'){nx();const u=unary();return E=>-u(E)}if(pk()==='+'){nx();return unary()}return power()};
      const term=()=>{let a=unary();while(pk()==='*'||pk()==='/'){const o=nx(),b=unary(),l=a;a=o==='*'?E=>l(E)*b(E):E=>l(E)/b(E)}return a};
      function expr(){let a=term();while(pk()==='+'||pk()==='-'){const o=nx(),b=term(),l=a;a=o==='+'?E=>l(E)+b(E):E=>l(E)-b(E)}return a}
      const e=expr();if(i<T.length)throw 0;return e}
    const fn=t=>{const T=tok(prep(t));if(!T||!T.length)return null;try{return {f:parse(T),v:T.filter(x=>/^[a-zA-Z]$/.test(x))}}catch(e){return null}};
    /* 'a = -2 en b = 5' → [['a','-2'],['b','5']]; zonder '=' één deel met lege letter */
    const delen=t=>{const s=prep(t).replace(/\s+(en|of)\s+/g,' ; ').replace(/,\s+(?=[a-zA-Z]\s*=)/g,' ; ');
      if(!s.includes('='))return s?[['',s]]:[];
      return s.split(/;/).map(x=>x.trim()).filter(Boolean).map(x=>{const m=x.match(/^([a-zA-Z])\s*=\s*(.+)$/);return m?[m[1],m[2].replace(/[\s.;,]+$/,'')]:null})};
    /* gelijk: true (klopt), false (klopt niet), null (afgerond of niet uit te rekenen) */
    function gelijk(a,b){const A=fn(a),B=fn(b);if(!A||!B)return null;const vs=[...new Set([...A.v,...B.v])],P=[1.37,-0.83,2.91,-2.29,0.61,3.7];let n=0,afw=0;
      for(let k=0;k<P.length;k++){const E={};vs.forEach((v,j)=>E[v]=P[(k+j)%P.length]+j*0.17);const x=A.f(E),y=B.f(E);if(!isFinite(x))continue;if(!isFinite(y))return false;n++;
        const d=Math.abs(x-y),sc=Math.max(1,Math.abs(x));if(d>0.006*sc)return false;if(d>1e-6*sc)afw++}
      return n<2?null:afw?null:true}
    /* kan de app dit antwoord nakijken? Alleen als elk deel van het goede antwoord 'letter = …' is en uit te rekenen */
    function kan(a){const ds=String(a??'').split(/\s+of\s+|\(of\s+/)[0],D=delen(ds);return D.length>0&&D.every(d=>d&&d[0]&&fn(d[1]))}
    function check(a,t){const alts=String(a??'').split(/\s+of\s+|\(of\s+/).map(x=>x.replace(/\)\s*$/,'')),T=delen(t);if(!T.length||T.some(x=>!x))return null;
      let best=false;for(const alt of alts){const D=delen(alt);if(!D.length||D.some(d=>!d||!d[0]))continue;
        let r=true;for(const d of D){const x=T.find(y=>y[0]===d[0])||T.find(y=>y[0].toLowerCase()===d[0].toLowerCase())||(D.length===1&&T.length===1?T[0]:null);
          if(!x){r=false;break}const g=gelijk(d[1],x[1]);if(g===false){r=false;break}if(g===null)r=r&&null}
        if(r===true)return true;if(r===null)best=null}
      return best}
    return {kan,check}})();
  function askToets(q,it,s){
    /* soort antwoord: een getal (de app kijkt na), een formule (de app kijkt na), of iets anders (zelf nakijken).
       Afspraak 12 nov: ze typt altijd eerst haar eindantwoord, ook als de app het niet kan nakijken. Zo kan ze niet doorklikken
       en ziet de ouder in het overzicht wat ze opschreef. */
    const g=eindGetal(q.a),fm=g==null&&FM.kan(q.a),soort=g!=null?'getal':fm?'formule':'tekst';
    el.innerHTML=`${kop(it,q,s,false)}
    <div class="card stack"><span class="tag">Toetsvorm</span><p>${soort!=='tekst'?'Werk de vraag helemaal uit op papier, zoals op de toets: met formule, invullen, uitkomst en eenheid.':'Schrijf je antwoord op papier, zoals op de toets: in hele zinnen, met de reden erbij.'}${R.mode==='tvorm'?'':R.exam?' Zo gaat het ook op de echte toets.':' Deze had je eerder al goed, dus nu zonder hulp.'}</p>
      ${soort==='getal'?`<label class="sub" for="ta">Je eindantwoord (alleen het getal):</label><div class="row"><input id="ta" class="cell" style="width:160px;font-size:1.15rem" inputmode="decimal" autocomplete="off" aria-label="Eindantwoord"></div>`
        :soort==='formule'?`<label class="sub" for="ta">Je eindantwoord, zoals in je schrift (bijvoorbeeld y = -2x + 5; een breuk typ je als 3/4, een kommagetal met een komma):</label><input id="ta" class="cell" style="width:100%;max-width:320px;font-size:1.1rem;text-align:left" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Eindantwoord">`
        :`<label class="sub" for="ta">Je antwoord in het kort (wat je onderaan in je schrift hebt staan):</label><textarea id="ta" class="ta" rows="2" spellcheck="false" aria-label="Je antwoord"></textarea>`}
      <p class="ko-err" id="taerr" role="alert"></p>
      <button class="btn" id="see">Klaar: laat de uitwerking zien</button><div id="kp"></div></div><div id="fb"></div>`;
    el.querySelectorAll('details.denk').forEach(d=>d.remove());
    el.querySelector('#stop').onclick=stopRonde;
    const ti=el.querySelector('#ta');if(ti){if(ti.tagName==='INPUT')ti.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();el.querySelector('#see').click()}};ti.focus()}
    el.querySelector('#see').onclick=()=>{
      const typed=ti?ti.value.trim():'';
      if(!typed){el.querySelector('#taerr').textContent='Typ eerst je eindantwoord. Daarna zie je de uitwerking en kun je kijken of het klopte.';ti.focus();return}
      R.tRev=R.tRev||Date.now();
      let goed=null;
      if(soort==='getal'){const tn=eindGetal(typed),tl=lees(typed);goed=isFinite(tl)?zelfde(tl,g):tn!=null?zelfde(tn,g):FM.check(q.a,typed)===true}
      else if(soort==='formule')goed=FM.check(q.a,typed);
      ti.readOnly=true;if(goed!=null)ti.classList.add(goed?'ok':'bad');el.querySelector('#taerr').textContent='';
      el.querySelector('#see').remove();
      const box=el.querySelector('#kp');
      box.innerHTML=`${goed===true?'<div class="fb ok"><div class="head">Je eindantwoord klopt.</div>Kijk nu of je uitwerking ook klopt.</div>'
          :goed===false?`<div class="fb bad"><div class="head">Je eindantwoord klopt niet.</div>Het antwoord is ${fmt(q.a)}. Zoek in de uitwerking waar het misging.</div>`
          :soort==='formule'?`<div class="fb"><div class="head">Vergelijk je antwoord zelf</div>De app kan je schrijfwijze niet precies nakijken (bijvoorbeeld een afgerond getal). Het antwoord is ${fmt(q.a)}.</div>`:''}
        <div class="tip stack"><b>${soort!=='tekst'?'De uitwerking: vink aan welke stappen jij ook goed op papier had':'Het antwoord: vink aan welke punten jij ook had'}</b>
        <ul class="kp">${q.st.map((x,i)=>`<li><label><input type="checkbox" data-i="${i}"><span><span class="why">${fmt(x.t)}</span>${x.s?`<br><b>${fmt(x.s)}</b>`:''}</span></label></li>`).join('')}</ul>
        ${soort==='tekst'?`<div><b>Antwoord:</b> ${fmt(q.a)}</div>`:''}</div>
        <div class="row" id="kb"><button class="btn" id="okb">Ik had alles goed</button><button class="btn ghost" id="nob">Nog niet helemaal</button></div>`;
      const kb=[...box.querySelectorAll('input[type=checkbox]')],okb=box.querySelector('#okb');
      const upd=()=>{okb.disabled=goed===false||!kb.every(x=>x.checked)};kb.forEach(x=>x.onchange=upd);upd();
      /* in een toets: wat ze zelf goed rekent zonder dat de app het eindantwoord heeft kunnen controleren, gaat naar de ouder om na te kijken */
      const naarOuder=ok=>ok&&R.exam&&R.rid&&Oefen.ctx.nakijk&&goed!==true;
      const klaar=ok=>{R.zelf=1;box.querySelector('#kb').remove();kb.forEach(x=>x.disabled=true);if(!ok)ST.ok=(ST.ok||[]).filter(x=>x!==q.id);
        if(naarOuder(ok)){R.nk=(R.nk||0)+1;Oefen.ctx.nakijk({vak:vid,qid:q.id,rid:R.rid,mode:R.mode,par:R.par||null,toets:R.title,
          vraag:schoon(q.q).slice(0,600),jij:typed+' · uitwerking op papier: kijk in haar schrift',goed:schoon([fmt(q.a),...q.st.map(x=>x.t+(x.s?' '+x.s:''))].join('\n')).slice(0,800)})}
        finishCustom(q,it,ok,ok?'<div class="fb ok"><div class="head">Goed!</div>Helemaal zelf uitgewerkt, zoals op de toets.'+(naarOuder(ok)?' Je ouder kijkt je uitwerking nog na: bewaar je papier.':'')+'</div>':'<div class="fb bad"><div class="head">Nog niet helemaal</div>Schrijf de stappen die je miste over in je schrift. Deze komt terug, eerst weer met hulp.</div>',typed)};
      okb.onclick=()=>klaar(true);box.querySelector('#nob').onclick=()=>klaar(false);
      box.scrollIntoView({behavior:smooth,block:'start'})};
    scrollTo(0,0);
  }
  const tvIds=()=>V.Q.filter(q=>/^Toetsvoorb/.test(q.nr||'')).sort((a,b)=>String(a.nr).localeCompare(String(b.nr),'nl',{numeric:true})).map(q=>q.id);
  const tvParIds=p=>shuf(V.Q.filter(q=>secOf(q.o).par===p&&hasSt(q)&&!q.type&&q.t!=='open'&&!q.in).map(q=>q.id)).slice(0,5);
  function askCustom(q,it,s){
    el.innerHTML=`${kop(it,q,s,R.mode==='stap')}<div id="teken"></div><div id="fb"></div>`;
    el.querySelector('#stop').onclick=stopRonde;
    const api={smooth,finish:(ok,html,jij)=>finishCustom(q,it,ok,html,jij),scroll:()=>el.querySelector('#teken').scrollIntoView({behavior:smooth,block:'start'})};
    api.redraw=()=>V.custom[q.type](q,it,el.querySelector('#teken'),api);
    api.redraw();scrollTo(0,0);
  }
  /* ---------- toetsvorm voor talen en aardrijkskunde (vak met toetsvorm:true): in de paragraaftoets en de proeftoets
     geen antwoorden om uit te kiezen. Ze schrijft het antwoord zelf: typen, of op papier en het vak leeg laten.
     Klopt het getypte antwoord precies, dan is het meteen goed. Is alleen een hoofdletter (vak met hoofdletters:true), umlaut of accent anders,
     dan is het fout, zoals op de toets. Anders zet de app haar antwoord naast het goede en kijkt ze zelf na.
     Extra goede antwoorden staan in q.tvAlt, een eigen opdrachttekst in q.tv. Een eigen vraagsoort doet mee met vakjes (q.tvIn met
     de antwoorden in q.tvA) of als het vak hem in tvCustom noemt (dan één antwoord: q.a). Vragen met maar één fout antwoord
     (richtig/falsch, ja/nee) en plaatjes blijven meerkeuze, net als vragen met q.mc (de keuzes horen bij de vraag: 'welke uitspraak',
     'welke is GEEN', een volgorde kiezen). ---------- */
  const NV_AF={nominativus:'nom',genitivus:'gen',dativus:'dat',accusativus:'acc',ablativus:'abl',vocativus:'voc',enkelvoud:'ev',meervoud:'mv'};
  const tvNorm=(x,hl)=>{let t=schoon(x).replace(/\b(nom|gen|dat|acc|abl|voc|ev|mv)\./gi,'$1').replace(/\b(nominativus|genitivus|dativus|accusativus|ablativus|vocativus|enkelvoud|meervoud)\b/gi,w=>NV_AF[w.toLowerCase()]).replace(/-$/,'').replace(/[’‘`´]/g,"'").replace(/[“”„]/g,'"').replace(/\s*([,;:])\s*/g,'$1 ').replace(/\s+/g,' ').replace(/[\s.!]+$/,'').trim();return hl?t:t.toLowerCase()};
  const tvKaal=x=>tvNorm(x).normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ß/g,'ss').replace(/[^a-z0-9Ͱ-Ͽ ]/g,'').replace(/\s+/g,' ').trim();
  /* tvLos: zonder leestekens, haakjes en lengtetekens (ā ĕ: staan in het boek, niet op de toets). Accenten en umlauts tellen wel. */
  /* Nederlandse voornaamwoorden: 'wij moeten' = 'we moeten' (fout 13 nov: 'Wij moeten' werd fout gerekend bij δεῖ ἡμᾶς) */
  const NL_VNW={wij:'we',zij:'ze',jij:'je',mij:'me'};
  const tvLos=(x,hl)=>tvNorm(x,hl).normalize('NFD').replace(/[̄̆]/g,'').normalize('NFC').replace(/[^\p{L}\p{N}]+/gu,' ').replace(/(^| )(wij|zij|jij|mij)(?= |$)/gi,(m,a,w)=>a+(w[0]===w[0].toUpperCase()?NL_VNW[w.toLowerCase()][0].toUpperCase()+NL_VNW[w.toLowerCase()].slice(1):NL_VNW[w.toLowerCase()])).trim();
  function tvMatch(t,goed){
    const heel=x=>goed.some(a=>tvLos(a)===tvLos(x)),hlOk=x=>!V.hoofdletters||goed.some(a=>tvLos(a,1)===tvLos(x,1));
    if(heel(t))return hlOk(t)?'goed':'bijna';
    /* een deel van de betekenissen opgeschreven ('uit, weg van' bij 'uit, weg van, van'): goed als elk deel klopt */
    const dl=String(t).split(/\s*[,;]\s*/).filter(Boolean);
    if(dl.length>1&&dl.every(heel))return dl.every(hlOk)?'goed':'bijna';
    return goed.some(a=>tvKaal(a)===tvKaal(t))?'bijna':'mis'}
  function tvGoed(q){const basis=[goedTxt(q),...(q.tvAlt||[])].map(schoon),uit=new Set(basis),vert=/^(wat betekent|wat is het [a-z]+ voor|hoe zeg je|vertaal)/i.test(schoon(q.q));
    basis.forEach(a=>{const zonder=a.replace(/\s*\([^)]*\)/g,'').trim();
      if(zonder&&zonder!==a&&!/\s/.test(zonder)){uit.add(zonder);(a.match(/\(([^)]*)\)/g)||[]).forEach(p=>uit.add(p.slice(1,-1).trim()))}
      const sl=a.split(/\s+\/\s+/);if(sl.length>1&&sl.every(p=>!/\s/.test(p.trim())))sl.forEach(p=>uit.add(p.trim()));
      if(vert&&!/[.!?]$/.test(a))(zonder||a).split(/\s*[,;]\s*/).forEach(p=>p&&uit.add(p))});
    return [...uit].filter(Boolean)}
  /* streng: bij een vraag met maar één goed antwoord (woordje, vorm, lidwoord, rijtje) moet ze typen en kijkt de app zelf na.
     Kort antwoord van hooguit drie woorden per deel, geen zin, geen Griekse letters (die kan ze niet typen) en geen uitleg met : of ; */
  const GRIEKS=/[\u0370-\u03ff\u1f00-\u1fff]/;
  const VORMVRAAG=/^(wat betekent|wat is het [a-z]+ voor|hoe zeg je|welke vorm|wat is de |der, die of das|vul in|vul het|welke naamval|benoem|schrijf het rijtje|maak het rijtje|bij welk persoon)/i;
  /* een antwoord met … ('we moeten …') is een patroon, geen vaste vorm: dan kijkt ze zelf na (wat precies klopt, is meteen goed) */
  function streng(q){if(q.tvIn)return true;if(!V.woorden||q.tvVrij)return false;const a=schoon(goedTxt(q));
    return VORMVRAAG.test(schoon(q.tv||q.q))&&a.length<=45&&!/[.!?:;=()…]/.test(a)&&!GRIEKS.test(a)&&a.split(/\s*[,/]\s*/).every(p=>p.split(/\s+/).length<=3)}
  function schrijfVorm(q,it){if(!V.toetsvorm||(R.mode!=='ptoets'&&R.mode!=='toets')||it.retry)return false;
    if(q.type)return !!q.tvIn||(V.tvCustom||[]).includes(q.type);
    const svg=x=>String(Array.isArray(x)?x[0]:x).includes('<svg');
    return q.t!=='open'&&!q.in&&!q.open&&!q.mc&&Array.isArray(q.f)&&q.f.length>=2&&!svg(q.a)&&!q.f.some(svg)}
  function askSchrijf(q,it,s){
    const vak=q.tvIn,ga=schoon(goedTxt(q)),kort=!vak&&ga.length<=45&&!/[.!?;]\s/.test(ga);
    el.innerHTML=`${kop(it,Object.assign({},q,{q:String(q.tv||q.q).replace(/<button[\s\S]*?<\/button>/g,'')}),s,false)}
    <div class="card stack"><span class="tag">Toetsvorm · zelf opschrijven</span>
      <p class="sub" style="margin:0;font-size:.9rem">Geen antwoorden om uit te kiezen, net als op de toets. ${streng(q)?(vak?'Typ alle vormen. Hier is maar één antwoord goed, dus de app kijkt het zelf na.':'Typ je antwoord. Hier is maar één antwoord goed, dus de app kijkt het zelf na.'):`Typ je antwoord. Schrijf je liever op papier? Laat ${vak?'de vakjes':'het vak'} dan leeg.`}</p>
      <p class="ko-err" id="tverr" role="alert"></p>
      ${vak?`<div class="tv-in">${vak.map((l,i)=>`<label class="tv-r"><span class="sub">${l}</span><span><input class="tv-v" data-i="${i}" autocomplete="off" autocapitalize="off" spellcheck="false"></span></label>`).join('')}</div>`
        :kort?'<input id="tvi" class="tv-v tv-1" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Je antwoord">'
        :'<textarea id="tvi" class="ta tv-v" placeholder="Mijn antwoord…" spellcheck="false" aria-label="Je antwoord"></textarea>'}
      <button class="btn" id="see">Nakijken</button></div><div id="kp"></div><div id="fb"></div>`;
    el.querySelector('#stop').onclick=stopRonde;
    const ins=[...el.querySelectorAll('.tv-v')];
    ins.forEach((x,j)=>{if(x.tagName==='INPUT')x.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();if(ins[j+1])ins[j+1].focus();else el.querySelector('#see').click()}}});
    const hard=streng(q);
    el.querySelector('#see').onclick=()=>{R.tRev=R.tRev||Date.now();
      if(hard){const leeg=ins.findIndex(x=>!x.value.trim());if(leeg>=0){el.querySelector('#tverr').textContent=vak?'Vul eerst alle vakjes in.':'Typ eerst je antwoord.';ins[leeg].focus();return}}
      const er=el.querySelector('#tverr');if(er)er.remove();
      el.querySelector('#see').remove();ins.forEach(x=>x.readOnly=true);
      const box=el.querySelector('#kp'),ul=uitl(q),uitleg=ul?`<div><b>Zo zit het:</b></div>${ul}`:'';
      const goedHtml=vak?q.tvA.map((w,i)=>`${vak[i]}: <b>${w}</b>`).join('<br>'):[goedTxt(q),...(q.tvAlt||[])].map(fmt).join('<br><span class="sub">of</span> ');
      const zelf=jij=>{
        box.innerHTML=`<div class="tip stack"><b>${jij?'Kijk zelf na: zet jouw antwoord naast het goede':'Kijk je antwoord op papier na'}</b>
          ${jij?`<div><span class="sub">Jij schreef</span><div class="aw-jij">${esc(jij).replace(/\n/g,'<br>')}</div></div>`:''}
          <div><span class="sub">Het goede antwoord</span><div class="res">${goedHtml}</div></div>
          <span class="sub" style="font-size:.88rem">${V.reken===false&&V.woorden?'Goed is alleen goed als het helemaal klopt. Een spelfout of een verkeerde uitgang is op de toets ook fout. Iets anders opgeschreven dat óók goed is, mag wel.':'Goed is goed als jouw antwoord hetzelfde zegt, ook in andere woorden. Mist er een deel, dan is het fout.'}</span></div>
          <div class="row" id="kb">${geenPoging(jij,q)?'<span class="sub">Je schreef dat je het niet weet. Dan telt hij als fout.</span><button class="btn ghost" id="nob">Verder</button>':'<button class="btn ghost" id="okb">Mijn antwoord is goed</button><button class="btn ghost" id="nob">Mijn antwoord is fout</button>'}</div>`;
        const okb=box.querySelector('#okb');if(okb)okb.onclick=()=>klaar(true,jij);box.querySelector('#nob').onclick=()=>klaar(false,jij);
        box.scrollIntoView({behavior:smooth,block:'start'})};
      const klaar=(ok,jij)=>{R.zelf=1;const kb=box.querySelector('#kb');if(kb)kb.remove();
        if(ok&&Oefen.ctx.nakijk&&R.rid){R.nk=(R.nk||0)+1;Oefen.ctx.nakijk({vak:vid,qid:q.id,rid:R.rid,mode:R.mode,par:R.par||null,toets:R.title,
          vraag:schoon(String(q.tv||q.q).replace(/<button[\s\S]*?<\/button>/g,'')).slice(0,600),jij:String(jij||'(op papier)').slice(0,800),goed:schoon(goedHtml.replace(/<br>/g,'\n')).slice(0,800)})}
        finishCustom(q,it,ok,ok?`<div class="fb ok"><div class="head">Goed!</div>Zelf opgeschreven, zoals op de toets.${Oefen.ctx.nakijk&&R.rid?' Je ouder kijkt dit antwoord nog na.':''}</div>`:`<div class="fb bad"><div class="head">Fout</div>${box.innerHTML?'':`<div><b>Het goede antwoord is:</b></div><div class="res">${goedHtml}</div>`}${uitleg}</div>`,jij||'(op papier)')};
      if(vak){const vals=ins.map(x=>x.value.trim()),lv=vals.map((v,i)=>v?tvMatch(v,[q.tvA[i]]):null),jij=vals.some(Boolean)?vals.map(v=>v||'…').join(', '):'';
        if(!lv.every(Boolean))return zelf(jij);
        ins.forEach((x,j)=>{x.classList.add(lv[j]==='goed'?'ok':'bad');if(lv[j]!=='goed')x.insertAdjacentHTML('afterend',`<small class="tv-c">→ ${q.tvA[j]}</small>`)});
        const ok=lv.every(x=>x==='goed');
        return finishCustom(q,it,ok,ok?'<div class="fb ok"><div class="head">Goed!</div>Alles zelf goed opgeschreven.</div>':`<div class="fb bad"><div class="head">Niet goed</div>De rode vakjes kloppen niet. Het goede antwoord staat erachter.${lv.includes('bijna')?' Soms is het maar één letter, een hoofdletter of een accent, maar op de toets is dat ook fout.':''}${ul?`<div>${ul}</div>`:''}</div>`,jij)}
      const t=ins[0].value.trim(),lv=t?tvMatch(t,tvGoed(q)):null;
      if(lv==='goed'){ins[0].classList.add('ok');return finishCustom(q,it,true,`<div class="fb ok"><div class="head">Goed!</div>${ul||''}</div>`,t)}
      if(hard&&lv==='mis'){ins[0].classList.add('bad');return finishCustom(q,it,false,`<div class="fb bad"><div class="head">Fout</div><div><b>Het goede antwoord is:</b></div><div class="res">${goedHtml}</div>${uitleg}</div>`,t)}
      if(lv==='bijna'){ins[0].classList.add('bad');return finishCustom(q,it,false,`<div class="fb bad"><div class="head">Bijna, maar fout</div>Alleen ${V.hoofdletters?'een hoofdletter, ':''}een umlaut of een accent is anders. Op de toets is dat ook fout.<div><b>Het goede antwoord is:</b></div><div class="res">${goedHtml}</div>${uitleg}</div>`,t)}
      zelf(t)};
    if(ins[0])ins[0].focus({preventScroll:true});scrollTo(0,0);
  }
  /* ---------- open vraag in onderdelen (vak met KO[q.id]): eerst per onderdeel een eigen vak met aanwijzing,
     daarna per onderdeel haar tekst naast het modelpunt, sleutelwoorden, en zelf kiezen: goed / half / mis.
     Alleen goed als élk onderdeel goed is. Wat ze miste staat in ST.koMis en wordt bij de volgende keer genoemd. ---------- */
  const koNorm=x=>String(x??'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[−–]/g,'-');
  const KO_REDEN=/(^|[^a-z])(omdat|doordat|want|dus|daardoor|waardoor|hierdoor|zodat|daarom|vanwege|dankzij|door)([^a-z]|$)/;
  const koGroepen=w=>(w||'').split('|').filter(Boolean).map(g=>g.split('/').map(a=>a.trim()).filter(Boolean));
  function koMark(raw,alts){
    const map=[];let n='';for(let i=0;i<raw.length;i++){for(const ch of koNorm(raw[i])){n+=ch;map.push(i)}}
    const hit=new Array(raw.length).fill(false);
    alts.forEach(a=>{let p=n.indexOf(a);while(p>=0){for(let j=p;j<p+a.length;j++)hit[map[j]]=true;p=n.indexOf(a,p+1)}});
    let out='',on=false;for(let i=0;i<raw.length;i++){if(hit[i]&&!on){out+='<mark class="kw">';on=true}if(!hit[i]&&on){out+='</mark>';on=false}out+=esc(raw[i])}
    if(on)out+='</mark>';return out.replace(/\n/g,'<br>')}
  function koBegrippen(q){
    const tekst=koNorm([...q.k,...(q.vb||[])].join(' '));
    return (V.BEG||[]).filter(b=>{const t=koNorm(String(b[0]).replace(/\(.*\)/,'')).trim();return t.length>=4&&tekst.includes(t)}).slice(0,6)}
  function askOpenKO(q,it,s,ko){
    ST.koMis=ST.koMis||{};
    const mis=ST.koMis[q.id]||[],reden=ko.some(o=>o[2]),beg=R.exam?[]:koBegrippen(q);
    el.innerHTML=`${kop(it,q,s,false)}
    <div class="tip stack ko-les"><b>Redeneren, niet opzeggen</b>
      <span>Je krijgt geen punten voor wat je uit je hoofd weet, maar voor hoe je het <i>gebruikt</i>. ${reden?'Laat met begrippen en wat ze betekenen zien <b>waarom</b> iets zo is.':'Wees precies: gebruik het juiste begrip of feit uit de stof, niet iets wat er een beetje op lijkt.'}</span>
      ${reden?'<span class="ko-schema"><b>wat</b> <i>→</i> <b>omdat</b> begrip of feit uit de stof <i>→</i> <b>dus</b> terug naar de vraag</span>':''}</div>
    <div class="card stack">
      <p style="margin:0">Een goed antwoord heeft <b>${ko.length} ${ko.length===1?'onderdeel':'onderdelen'}</b>.${reden?' Bij een onderdeel met <span class="ko-r">reden</span> schrijf je erbij waaróm.':''}</p>
      ${mis.length?`<p class="again" style="margin:0">Vorige keer miste je onderdeel ${mis.map(i=>i+1).join(' en ')}. Let daar extra op.</p>`:''}
      ${ko.map((o,i)=>`<div class="ko-d${mis.includes(i)?' ko-was':''}"><label for="ko${i}"><span class="ko-n">${i+1}</span><span>${fmt(o[0])}${o[2]?' <span class="ko-r">reden</span>':''}</span></label>
        <textarea id="ko${i}" class="ta ko-ta" placeholder="${o[2]?'… omdat …':'Mijn antwoord…'}"></textarea></div>`).join('')}
      ${beg.length?`<details class="denk"><summary>Hulp: welke begrippen kun je hier gebruiken?</summary><p class="sub" style="margin:0 0 6px">Op de toets krijg je deze hulp niet. Gebruik niet alleen het woord, maar ook wat het betekent.</p>${beg.map(b=>`<div class="rule"><b>${b[0]}</b><div class="why">${b[1]}</div></div>`).join('')}</details>`:''}
      <p class="ko-err" id="koerr" role="alert"></p>
      <button class="btn" id="see">Bekijk het modelantwoord</button></div>
    <div id="kp"></div><div id="fb"></div>`;
    el.querySelector('#stop').onclick=stopRonde;
    const tas=[...el.querySelectorAll('.ko-ta')],err=el.querySelector('#koerr');
    tas.forEach(t=>t.oninput=()=>{err.textContent='';t.classList.remove('ko-mist')});
    el.querySelector('#see').onclick=()=>{R.tRev=R.tRev||Date.now();
      for(let i=0;i<ko.length;i++){const v=tas[i].value.trim();
        if(v.length<3){err.textContent=`Vul eerst vak ${i+1} in.`;tas[i].classList.add('ko-mist');tas[i].focus();return}
        if(ko[i][2]&&!KO_REDEN.test(koNorm(v))){err.textContent=`Bij vak ${i+1} ontbreekt de reden. Schrijf erbij waaróm: omdat, doordat, want, dus …`;tas[i].classList.add('ko-mist');tas[i].focus();return}}
      el.querySelector('#see').remove();err.remove();tas.forEach(t=>t.readOnly=true);
      const antw=tas.map(t=>t.value.trim()),alles=koNorm(antw.join(' ')),keus=ko.map(()=>null);
      const box=el.querySelector('#kp');
      box.innerHTML=`<div class="tip" style="margin-bottom:10px"><b>Kijk per onderdeel na.</b> Zet jouw tekst naast het modelpunt. Goed is alleen goed als de kern én de reden erin staan.</div>
        ${q.vb?`<div class="card stack" style="margin-bottom:10px"><b>${q.vb.length>1?'Voorbeeldantwoorden (twee kanten, allebei goed)':'Voorbeeldantwoord'}</b>${q.vb.map(x=>`<p>${fmt(x)}</p>`).join('')}</div>`:''}
        ${ko.map((o,i)=>{const gr=koGroepen(o[1]),eigen=koNorm(antw[i]);
          const chips=gr.map(g=>{const a=g.find(x=>eigen.includes(x));if(a)return `<span class="ko-kw ok">✓ ${esc(a)}</span>`;
            const j=antw.findIndex(t=>g.some(x=>koNorm(t).includes(x)));if(j>=0)return `<span class="ko-kw ok">✓ ${esc(g.find(x=>koNorm(antw[j]).includes(x)))} <small>(in vak ${j+1})</small></span>`;
            return `<span class="ko-kw no">✗ ${esc(g.slice(0,3).join(' / '))}</span>`}).join('');
          return `<div class="card stack ko-k" data-i="${i}"><b><span class="ko-n">${i+1}</span> ${fmt(o[0])}</b>
            <div><span class="sub">Jij schreef</span><div class="ko-jij">${koMark(antw[i],gr.flat())}</div></div>
            <div><span class="sub">Modelpunt</span><div class="ko-mod">${fmt(q.k[i])}</div></div>
            ${gr.length?`<div class="ko-kws"><span class="sub">Sleutelwoorden</span> ${chips}</div>`:''}
            <div class="row ko-keus"><button class="btn ghost sm" data-v="2">Goed</button><button class="btn ghost sm" data-v="1">${o[2]?'Half: wel wát, geen waarom':'Half: niet volledig'}</button><button class="btn ghost sm" data-v="0">Mis</button></div>
            <div class="ko-chk"></div></div>`}).join('')}
        <p class="ko-err" id="koerr2" role="alert"></p>
        <div class="row" id="kb"><button class="btn" id="koklaar">Klaar met nakijken</button></div>`;
      const err2=box.querySelector('#koerr2');
      box.querySelectorAll('.ko-k').forEach(kaart=>{const i=+kaart.dataset.i,chk=kaart.querySelector('.ko-chk'),knoppen=[...kaart.querySelectorAll('[data-v]')];
        const zet=v=>{keus[i]=v;knoppen.forEach(b=>b.classList.toggle('on',v!==null&&+b.dataset.v===v));kaart.classList.toggle('k2',v===2);kaart.classList.toggle('k1',v===1);kaart.classList.toggle('k0',v===0);err2.textContent=''};
        knoppen.forEach(b=>b.onclick=()=>{const v=+b.dataset.v;chk.innerHTML='';
          const weg=koGroepen(ko[i][1]).filter(g=>!g.some(x=>alles.includes(x)));
          if(v===2&&weg.length){zet(null);
            chk.innerHTML=`<div class="tip stack"><span>Je gebruikte <b>${weg.map(g=>esc(g[0])).join('</b> en <b>')}</b> niet. Staat het er echt, in andere woorden? Lees je eigen tekst nog eens naast het modelpunt.</span>
              <div class="row"><button class="btn ghost sm" data-c="2">Ja, in andere woorden</button><button class="btn ghost sm" data-c="1">Nee, dan is het half</button></div></div>`;
            chk.querySelectorAll('[data-c]').forEach(c=>c.onclick=()=>{zet(+c.dataset.c);chk.innerHTML=+c.dataset.c===2?'<p class="sub" style="margin:0">Oké: in andere woorden, maar wel met dezelfde betekenis.</p>':''});return}
          zet(v)})});
      box.querySelector('#koklaar').onclick=()=>{R.zelf=1;
        const open=keus.findIndex(v=>v===null);if(open>=0){err2.textContent=`Kies eerst bij onderdeel ${open+1}: goed, half of mis.`;box.querySelector(`.ko-k[data-i="${open}"]`).scrollIntoView({behavior:smooth,block:'center'});return}
        const ok=keus.every(v=>v===2),fout=keus.map((v,i)=>v<2?i:-1).filter(i=>i>=0);
        if(ok)delete ST.koMis[q.id];else ST.koMis[q.id]=fout;save();const nk=ok&&openNaarOuder();if(nk)openNakijk(q,antw.map((t,i)=>(i+1)+'. '+t).join('\n'));
        box.querySelector('#kb').remove();box.querySelectorAll('.ko-keus button,.ko-chk button').forEach(b=>b.disabled=true);
        const lijst=fout.map(i=>`onderdeel ${i+1} (${keus[i]===1?'half':'mis'})`).join(', ');
        finishCustom(q,it,ok,ok?'<div class="fb ok"><div class="head">Goed!</div>Elk onderdeel klopte, met de kern en de reden erbij.'+(nk?' Je ouder kijkt dit antwoord nog na.':'')+'</div>'
          :`<div class="fb bad"><div class="head">Nog niet helemaal</div>Je miste ${lijst}. Lees bij die onderdelen het modelpunt nog eens: wat is de reden, en welk begrip hoort erbij? Schrijf het goede antwoord in je schrift.</div>`,antw.map((t,i)=>(i+1)+'. '+t).join('\n'))};
      box.scrollIntoView({behavior:smooth,block:'start'})};
    scrollTo(0,0);
  }
  function askOpen(q,it,s){
    const ko=V.KO&&V.KO[q.id];if(ko&&ko.length===q.k.length)return askOpenKO(q,it,s,ko);
    el.innerHTML=`${kop(it,q,s,false)}
    <div class="card stack">${tvVak()?'<p class="sub" style="font-size:.9rem"><b>Leg uit = geef de reden.</b> Na “omdat” moet iets staan wat nog niet in de vraag stond.</p>':''}<label class="sub" for="ans">Schrijf je antwoord op, hier of in je schrift:</label>
      <textarea id="ans" class="ta" placeholder="Mijn antwoord…"></textarea>
      <button class="btn" id="see">Bekijk het modelantwoord</button><div id="kp"></div></div><div id="fb"></div>`;
    el.querySelector('#stop').onclick=stopRonde;
    el.querySelector('#see').onclick=()=>{R.tRev=R.tRev||Date.now();el.querySelector('#see').remove();el.querySelector('#ans').readOnly=true;
      const box=el.querySelector('#kp');
      box.innerHTML=`<div class="tip stack"><b>Modelantwoord: vink aan wat jij ook had</b>
        <span class="sub" style="font-size:.9rem"><b>Goed = elk punt staat erin. Bijna is nog niet helemaal.</b> In andere woorden mag, maar het moet hetzelfde zeggen. Mist er een stukje, of klopt een detail niet? Vink dat punt dan niet aan.</span>
        <ul class="kp">${(tvVak()?[...q.k,'Mijn reden zegt iets nieuws: ik herhaal niet alleen de vraag']:q.k).map((k,i)=>`<li><label><input type="checkbox" data-i="${i}"><span>${fmt(k)}</span></label></li>`).join('')}</ul></div>
        ${q.vb?`<div class="card stack"><b>${q.vb.length>1?'Voorbeeldantwoorden (twee kanten, allebei goed)':'Voorbeeldantwoord'}</b>${q.vb.map(x=>`<p>${fmt(x)}</p>`).join('')}</div>`:''}
        <div class="row" id="kb"><button class="btn" id="okb">Ik had alles</button><button class="btn ghost" id="nob">Nog niet helemaal</button></div>`;
      const kb=[...box.querySelectorAll('input[type=checkbox]')],okb=box.querySelector('#okb'),jij=el.querySelector('#ans').value.trim(),geen=geenPoging(jij,q);
      const upd=()=>{okb.disabled=!kb.every(x=>x.checked)};kb.forEach(x=>x.onchange=upd);upd();
      const klaar=ok=>{R.zelf=1;box.querySelector('#kb').remove();kb.forEach(x=>x.disabled=true);const nk=ok&&openNaarOuder();if(nk)openNakijk(q,jij);
        finishCustom(q,it,ok,ok?`<div class="fb ok"><div class="head">Goed!</div>Je had alle punten.${nk?' Je ouder kijkt dit antwoord nog na'+(jij&&!kortVertaal(jij,q)?'.':': bewaar je schrift.'):''}</div>`
          :geen?`<div class="fb bad"><div class="head">Telt als fout</div>Eerlijk dat je dat opschrijft. Zonder ${isVertaal(q)?'vertaling':'antwoord'} telt hij als fout, en hij komt terug bij Mijn foute vragen. Schrijf het voorbeeld nu over in je schrift en probeer hem straks zelf.</div>`
          :'<div class="fb bad"><div class="head">Nog niet helemaal</div>Lees het modelantwoord goed door en onthoud de punten die je miste.</div>',jij||'(op papier)')};
      if(geen){box.querySelector('#kb').innerHTML=`<p class="sub" style="margin:0">Je schreef dat het nu niet lukt. Dan is er niets om goed te rekenen.</p><button class="btn" id="vrd">Verder</button>`;
        kb.forEach(x=>x.disabled=true);box.querySelector('#vrd').onclick=()=>klaar(false)}
      else{okb.onclick=()=>{if(!kortVertaal(jij,q))return klaar(true);
          box.querySelector('#kb').innerHTML=`<p style="margin:0">Je typte maar een paar woorden. Staat je hele vertaling in je schrift?</p><div class="row"><button class="btn ghost" id="jaS">Ja, hij staat helemaal in mijn schrift</button><button class="btn ghost" id="neeS">Nee, nog niet helemaal</button></div>`;
          box.querySelector('#jaS').onclick=()=>klaar(true);box.querySelector('#neeS').onclick=()=>klaar(false)};
        box.querySelector('#nob').onclick=()=>klaar(false)}
      box.scrollIntoView({behavior:smooth,block:'start'})};
    scrollTo(0,0);
  }
  /* ---------- huiswerk uit het boek: precies de opgaven van die dag, stap voor stap ---------- */
  /* haar eerste antwoord per huiswerkvraag, voor het overzicht 'Antwoorden voor je schrift' (ST.hwAns[huiswerk][vraag] = {j, ok, v?}) */
  const schoon=x=>String(x??'').includes('<svg')?'(plaatje)':String(x??'').replace(/<button[\s\S]*?<\/button>/g,'').replace(/<br\s*\/?>/g,' ').replace(/<[^>]+>/g,'').replace(/&nbsp;/g,' ').replace(/&#36;/g,'$').replace(/&amp;/g,'&').replace(/[ \t]+/g,' ').trim();
  /* plaatjes als antwoord (14 nov): bewaar welke keuze ze maakte (p = 'a' of index in q.f), zodat de ouder het plaatje ziet */
  const svgOf=x=>String(Array.isArray(x)?x[0]:x??'');
  const plaatjeNr=(q,jij)=>{if(!q||!String(jij??'').includes('<svg'))return null;const j=String(jij);
    if(svgOf(q.a)===j)return 'a';const i=(q.f||[]).findIndex(f=>svgOf(f)===j);return i>=0?i:null};
  const plaatjeHtml=(Q,p)=>{if(!Q||p==null)return '';const raw=p==='a'?Q.a:(Q.f||[])[p];return raw==null?'':`<div class="aw-pl">${fmt(svgOf(raw))}</div>`};
  const plaatjeWaarom=(Q,p)=>{const f=Q&&p!=null&&p!=='a'&&(Q.f||[])[p];return Array.isArray(f)&&f[1]?`<div class="sub" style="font-size:.9rem">${fmt(f[1])}</div>`:''};
  function hwRec(q,it,jij,ok){if(!R.hw)return;const A=ST.hwAns=ST.hwAns||{},m=A[R.hw]=A[R.hw]||{};
    m[q.id]=it&&it.alt?{ok:!!ok,v:1}:{j:schoon(jij),ok:!!ok};const pn=!(it&&it.alt)&&plaatjeNr(q,jij);if(pn!=null&&pn!==false)m[q.id].p=pn;
    const ks=Object.keys(A).sort();ks.slice(0,Math.max(0,ks.length-15)).forEach(k=>delete A[k])}
  /* ---------- inzet, voor de ouder (afspraak 12 nov): per ronde elk antwoord en hoe lang ze erover deed.
     ST.inzet = [{k, d, m:mode, ti:titel, hw, n:aantal vragen, t0, t1, q:[{i:vraag-id, ok, s:seconden, w?:seconden tot ze de uitwerking
     of het antwoord opende, f?:'r' herkansing 'v' andere woorden of getallen 'h' stap-voor-stap-hulp 'z' zelf nagekeken, e?:foute stappen,
     j:haar antwoord, q?/a?:de vraag en het antwoord zoals ze hem kreeg (alleen bij andere woorden)}]}]. Laatste 14 dagen.
     Niet als een ouder in de app kijkt. ---------- */
  const dagStr=n=>`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(n.getDate()).padStart(2,'0')}`;
  function inzetRec(q,it,ok,jij){if(!R||(Oefen.ctx.ouder&&Oefen.ctx.ouder()))return;
    const I=ST.inzet=ST.inzet||[],nu=Date.now(),sec=t=>Math.round(Math.max(0,Math.min(t,3600000))/1000);
    if(!(q.id in R.first))srRec(q.id,ok&&!R.helped[q.id]&&!R.stepErr[q.id]);
    R.ik=R.ik||nu.toString(36);let r=I.find(x=>x.k===R.ik);
    if(!r){r={k:R.ik,d:dagStr(new Date(R.tStart||nu)),m:R.mode,ti:schoon(R.title||'').slice(0,120),hw:R.hw||null,n:R.total,t0:R.tStart||nu,q:[]};I.push(r)}
    const x={i:q.id,ok:ok?1:0,s:sec(nu-(R.t0||nu)),j:schoon(jij).slice(0,140)},pn=!(it.alt||q.gen)&&plaatjeNr(q,jij);if(pn!=null&&pn!==false)x.p=pn;const f=(it.retry?'r':'')+(it.alt||q.gen?'v':'')+(R.helped[q.id]?'h':'')+(R.zelf?'z':'');
    if(f)x.f=f;if(R.tRev)x.w=sec(R.tRev-(R.t0||nu));if(R.stepErr[q.id])x.e=R.stepErr[q.id];
    if(it.alt||q.gen){x.q=schoon(q.tv||q.q).slice(0,300);x.a=schoon(goedTxt(q)).slice(0,140)}
    r.q.push(x);r.t1=nu;
    const grens=dagStr(new Date(nu-14*864e5));ST.inzet=I.filter(x=>x.d>=grens).slice(-300);save()}
  function hwMark(id){if(!R.hw)return;const l=ST.hw[R.hw]=ST.hw[R.hw]||[];if(!l.includes(id)){l.push(id);save()}}
  const nrNum=q=>{const m=String(q.nr||'').replace(/^(Opdracht|Opgave) /,'').match(/^(\d+)([a-z]?)(?![0-9])/);return m?[+m[1],m[2]]:null}; /* ook 'Opdracht 6a/b' */
  function hwIds(nrs,par){const want=nrs.map(Number);
    return V.Q.filter(q=>{const n=nrNum(q);return n&&want.includes(n[0])&&(!par||secOf(q.o).par===par)})
      .map((q,i)=>({q,i,n:nrNum(q)})).sort((a,b)=>a.n[0]-b.n[0]||(a.n[1]<b.n[1]?-1:a.n[1]>b.n[1]?1:a.i-b.i)).map(x=>x.q.id)}
  function hwHome(H){
    Oefen.cur=vid;
    /* leerwerk hoort bij het huiswerk: H.leer = [{titel, o:sectie-id} of {titel, ids:[...]}], na de opdrachten, in dezelfde voortgang */
    const opgIds=hwIds(H.nrs,H.par),delen=[{titel:null,ids:opgIds}];
    (H.leer||[]).forEach(L=>{const li=(L.ids||V.Q.filter(q=>q.o===L.o&&q.t!=='open').map(q=>q.id)).filter(id=>QM[id]&&!delen.some(d=>d.ids.includes(id)));if(li.length)delen.push({titel:L.titel,ids:li})});
    const ids=delen.flatMap(d=>d.ids),gedaan=(ST.hw[H.key]||[]).filter(id=>ids.includes(id)),rest=ids.filter(id=>!gedaan.includes(id));
    const deelVan=id=>delen.find(d=>d.ids.includes(id)),antw=(ST.hwAns||{})[H.key]||{};
    const ontbreekt=H.nrs.filter(n=>!ids.some(id=>(nrNum(QM[id])||[])[0]===+n));
    const W=V.reken===false?'opdracht':'opgave',Wc=W[0].toUpperCase()+W.slice(1),nl=q=>{const d=deelVan(q.id);if(d&&d.titel)return d.titel.charAt(0).toLowerCase()+d.titel.slice(1);return /^\d/.test(q.nr)?W+' '+q.nr:q.nr.charAt(0).toLowerCase()+q.nr.slice(1)};
    const nrsTxt=H.nrs.length?Wc+' '+H.nrs.join(', '):'',tagTxt=[nrsTxt,...delen.slice(1).map(d=>d.titel)].filter(Boolean).join(' · ');
    const titel='Huiswerk'+(H.nrs.length?': '+W+' '+H.nrs.join(', '):'')+(delen.length>1?(H.nrs.length?' + leren':': leren'):''),kies=tvVak()&&ids.some(id=>{const q=QM[id];return hasSt(q)&&!q.type&&!q.in&&q.t!=='open'}),vorm=kies&&ST.hwVorm==='tvorm'?'tvorm':'stap';
    el.innerHTML=`${top('Vandaag','Huiswerk')}
    <h2>${H.titel||'Je huiswerk'}</h2>
    <div class="card stack plan"><span class="tag">${tagTxt}</span>
      <p>${V.reken===false?'Je doet de opdrachten uit je werkboek één voor één. Bij een fout zie je waarom. Schrijf je antwoorden ook in je werkboek: dan heb je je huiswerk meteen af. Geen boek bij je? Maak het hier. Als de opdrachten af zijn, staan bij <b>Antwoorden voor je schrift</b> jouw antwoorden met de verbeteringen onder elkaar.':'Je kiest zelf hoe je het doet. <b>Stap voor stap:</b> bij elke stap kies je zelf, en bij een fout zie je waarom. <b>Zelf op papier:</b> je maakt de som eerst helemaal in je schrift, zoals op een toets, en kijkt daarna na met de uitwerking. Gaat een som dan mis, dan krijg je hem later nog eens stap voor stap. Je kunt per keer kiezen.'}</p>
      ${delen.length>1?`<p>${H.nrs.length?'Daarna doe je in de app':'In de app doe je'}${delen.slice(1).map(d=>' <b>'+d.titel.charAt(0).toLowerCase()+d.titel.slice(1)+'</b>').join(' en')}. Dat hoort ook bij je huiswerk. Pas als alles hieronder af is, is je huiswerk klaar.</p>
      <ol class="hwdelen">${delen.filter(d=>d.ids.length).map((d,i)=>{const g=d.ids.filter(id=>gedaan.includes(id)).length;return `<li><b>${d.titel||nrsTxt}</b> <span class="sub">${g===d.ids.length?'✓ klaar':g+' van '+d.ids.length}</span></li>`}).join('')}</ol>`:''}
      <div class="bar"><i style="width:${ids.length?Math.round(gedaan.length/ids.length*100):0}%"></i></div>
      <p class="sub" style="font-size:.9rem">${gedaan.length} van ${ids.length} vragen klaar${gedaan.length&&rest.length?'. Je gaat verder waar je was.':''}</p>
      ${ontbreekt.length?`<p class="sub" style="font-size:.9rem">${Wc} ${ontbreekt.join(', ')} staat nog niet in de app. Die maak je uit je boek.</p>`:''}</div>
    <div class="stack">${rest.length?(kies?[['stap','Stap voor stap, met hulp'],['tvorm','Zelf op papier, daarna nakijken']].sort((a,b)=>(b[0]===vorm)-(a[0]===vorm)).map(([m,t],i)=>`<button class="btn${i?' ghost':''}" data-hwm="${m}">${t}: ${gedaan.length?'verder met '+nl(QM[rest[0]]):'begin met '+nl(QM[rest[0]])}</button>`).join(''):`<button class="btn" data-hwm="stap">${gedaan.length?'Verder met '+nl(QM[rest[0]]):'Begin met '+nl(QM[rest[0]])}</button>`):'<div class="card"><b>Alles klaar!</b> Goed gedaan.</div>'}
      ${(opgIds.length?opgIds:ids).every(id=>gedaan.includes(id)||antw[id])?'<button class="btn'+(rest.length?' ghost':'')+'" id="hwantw">Antwoorden voor je schrift</button>':''}
      ${gedaan.length&&!(Oefen.ctx.ouder&&Oefen.ctx.ouder())?'<button class="btn ghost" id="hwopn">Alles opnieuw, vanaf het begin</button>':''}
      <button class="btn ghost" id="hwvak">Naar alle onderdelen van ${V.naam}</button></div>`;
    el.querySelector('#back').onclick=()=>{done();Oefen.ctx.home()};
    el.querySelectorAll('[data-hwm]').forEach(b=>b.onclick=()=>{const m=b.dataset.hwm;if(kies){ST.hwVorm=m;save()}start(m,rest,titel+(m==='tvorm'?' · zelf op papier':''),null,null,H.key)});
    const aw=el.querySelector('#hwantw');if(aw)aw.onclick=()=>hwAntw(H,delen.filter(d=>d.ids.length));
    const op=el.querySelector('#hwopn');if(op)op.onclick=()=>{ST.hw[H.key]=[];if(ST.hwAns)delete ST.hwAns[H.key];save();start(vorm,ids,titel+(vorm==='tvorm'?' · zelf op papier':''),null,null,H.key)};
    el.querySelector('#hwvak').onclick=()=>{focusPar=H.par||null;focusMode=null;home()};
    Oefen._hw=H;scrollTo(0,0);
  }
  /* ---------- antwoorden voor je schrift: na het huiswerk haar eigen antwoord en het goede antwoord onder elkaar.
     Ze schrijft eerst haar eigen antwoord over en zet de verbetering in een andere kleur erachter,
     zodat de docent kan zien waar ze moeite mee had. ---------- */
  const goedTxt=q=>q.model||(q.t==='open'?(q.vb&&q.vb.length?q.vb[0]:(q.k||[]).join(' ')):q.a);
  /* alle delen van het huiswerk: de opgaven en daarna het leerwerk (zoals opdracht T1), elk onder een eigen kopje (fout 10 nov: alleen de opgaven) */
  function hwAntw(H,delen){const ids=delen.flatMap(d=>d.ids);
    const m=(ST.hwAns||{})[H.key]||{},geen=!ids.some(id=>m[id]);
    const vraag=q=>fmt(String(q.tv||q.q).replace(/<button[\s\S]*?<\/button>/g,''));
    /* de hele uitwerking (de stappen van 'Help mij stap voor stap'): open bij een fout, ingeklapt bij goed */
    const uitwHtml=(q,open)=>hasSt(q)?`<details class="aw-uw"${open?' open':''}><summary>${open?'De uitwerking':'Bekijk de uitwerking'}</summary>${uitw(q)}</details>`:'';
    const kaart=id=>{const q=QM[id],r=m[id],goed=fmt(goedTxt(q));
      if(!r)return `<div class="card stack antw"><span class="tag">${nrTag(q)}</span><div class="sub">${vraag(q)}</div><div class="aw-r"><span class="aw-l">Antwoord</span><div class="res">${goed}</div></div>${uitwHtml(q,false)}</div>`;
      const jij=r.v?'<span class="sub">In de app kreeg je deze vraag in andere woorden.</span>':r.p!=null?plaatjeHtml(q,r.p):fmt(esc(r.j||'')).replace(/\n/g,'<br>')||'<span class="sub">(leeg)</span>';
      return `<div class="card stack antw ${r.ok?'aw-ok':'aw-bad'}"><span class="tag">${nrTag(q)}</span><div class="sub">${vraag(q)}</div>
        <div class="aw-r"><span class="aw-l">Jij</span><div class="aw-jij">${jij} <b class="aw-m">${r.ok?'✓':'✗'}</b></div></div>
        ${r.ok&&!r.v?'':`<div class="aw-r"><span class="aw-l">${r.ok?'Antwoord':'Verbetering'}</span><div class="res aw-pen">${goed}</div></div>`}${uitwHtml(q,!r.ok)}</div>`};
    const fout=ids.filter(id=>m[id]&&!m[id].ok).length;
    el.innerHTML=`${top('Je huiswerk','Antwoorden')}
    <h2>Antwoorden voor je schrift</h2>
    <div class="tip stack">${geen?'<span>Je maakte dit huiswerk voordat de app je antwoorden bewaarde. Hieronder staan daarom alleen de goede antwoorden.</span>'
      :`<span><b>Zo schrijf je het over:</b> schrijf eerst op wat <i>jij</i> antwoordde. Was het fout, zet de verbetering er dan achter <span class="aw-pen"><b>in een andere kleur</b></span>. Dan ziet je docent waar je nog moeite mee hebt.</span>
      ${ids.some(id=>hasSt(QM[id]))?'<span>Bij een som die fout ging, staat de uitwerking eronder. Leg die naast jouw uitwerking in je schrift: bij welke stap ging het mis? Schrijf vanaf die stap de verbetering in je andere kleur.</span>':''}
      <span>${fout?`Je had ${fout} van de ${ids.length} in één keer fout.`:'Je had alles in één keer goed!'}</span>`}
      <span class="sub" style="font-size:.88rem">De antwoorden in de app zijn niet van je docent. Twijfel je of je docent iets anders bedoelt? Vraag het in de les.</span></div>
    ${delen.map(d=>`${delen.length>1?`<h3 style="margin:14px 0 6px">${esc(d.titel||'Opgaven '+H.nrs.join(', '))}</h3>`:''}<div class="wl stack">${d.ids.map(kaart).join('')}</div>`).join('')}
    <div class="stack"><button class="btn ghost" id="hwterug">Terug naar je huiswerk</button></div>`;
    el.querySelector('#back').onclick=()=>hwHome(H);el.querySelector('#hwterug').onclick=()=>hwHome(H);scrollTo(0,0);
  }
  /* bij de toetsvorm (talen, aardrijkskunde): laat zien hoe dichtbij een 7 ze zat, of ze vooruitgaat,
     en dat een lager cijfer dan vroeger door de nieuwe toetsvorm komt */
  function aanmoedig(good,tot,c){
    if(!(V.toetsvorm||tvVak())||(R.mode!=='ptoets'&&R.mode!=='toets'))return '';
    const nodig=Array.from({length:tot+1},(_,g)=>g).find(g=>cijfer(g,tot)>=7),r=[];
    const vorig=R.mode==='ptoets'?(R._ptOud&&R._ptOud.laatst!=null?R._ptOud.laatst:null):(R._tOud?cijfer(R._tOud.g,R._tOud.t):null);
    const best=R.mode==='ptoets'?(R._ptOud?R._ptOud.best:null):(R._vorigToets!=null?cijfer(R._vorigToets,100):null);
    const nieuw=R.mode==='ptoets'?((ST.ptoets[R.par]||{}).rondes||[]).length<=3:((ST.toetsR||{}).rondes||[]).length<=3;
    if(c<7&&nodig!=null){const n=nodig-good;r.push(`<p>${n<=2?'<b>Je zat er dichtbij!</b> ':''}Je had er ${good} goed. Voor een 7 heb je er ${nodig} nodig${n<=2?`, dus nog maar ${n} ${n===1?'antwoord':'antwoorden'}`:''}.</p>`)}
    if(vorig!=null&&c>vorig)r.push(`<p>Vorige keer ${f1(vorig)}, nu ${f1(c)}: <b>je gaat vooruit.</b></p>`);
    if(best!=null&&c<best&&nieuw)r.push(`<p class="sub">Lager dan je vorige cijfers? Dat komt door de nieuwe toetsvorm: je schrijft nu alles zelf op, net als op school. Een 7 is nu meer waard dan een 9 vroeger.</p>`);
    return r.join('')}
  function end(){
    if(R.mode==='diag')return diagEnd();
    if(R.title==='Rekenregels van vandaag'&&Oefen.ctx.klaar)Oefen.ctx.klaar('rekenregels');
    if(R.mode==='opwarm'){if(Oefen.ctx.klaar)Oefen.ctx.klaar(R.key);
      const good=R.ids.filter(id=>R.first[id]).length;
      el.innerHTML=`<span class="tag">${R.title}</span><div class="card stack"><div class="score">${good} / ${R.ids.length}</div><p>${good===R.ids.length?'Zit er nog in. ':'Wat fout ging, komt later nog eens terug. '}Je bent opgewarmd: begin nu aan je huiswerk.</p></div>
      <div class="stack"><button class="btn" id="hm">Naar vandaag</button></div>`;
      el.querySelector('#hm').onclick=()=>{done();Oefen.ctx.home()};scrollTo(0,0);return}
    const tot=R.ids.length,good=R.ids.filter(id=>R.first[id]).length,pct=Math.round(good/tot*100),c=cijfer(good,tot);
    const key=R.mode==='toets'?'toets':R.mode==='fout'||R.mode==='ptoets'||R.mode==='ttoets'?null:R.sec;
    const vorigToets=ST.best.toets;R._vorigToets=vorigToets;R._ptOud=R.mode==='ptoets'&&ST.ptoets[R.par]?JSON.parse(JSON.stringify(ST.ptoets[R.par])):null;
    R._tOud=R.mode==='toets'&&ST.toetsR&&ST.toetsR.rondes.length?ST.toetsR.rondes[ST.toetsR.rondes.length-1]:null;
    if(key&&(ST.best[key]==null||pct>ST.best[key]))ST.best[key]=pct;
    /* per ronde bewaren (laatste 10), zodat nakijken door de ouder het cijfer achteraf kan verlagen; 'oud' = het beste van daarvoor */
    if(R.mode==='ptoets'){const o=ST.ptoets[R.par]||{best:0},rs=(o.rondes||[]).concat([{rid:R.rid,g:good,t:tot,c}]),weg=rs.slice(0,-10);
      const oud=Math.max(o.rondes?o.oud||0:o.best||0,...weg.map(x=>x.c));ST.ptoets[R.par]={best:Math.max(o.best||0,c),laatst:c,oud,rondes:rs.slice(-10)}}
    if(R.mode==='ttoets'){ST.ttoets=ST.ttoets||{};ST.ttoets[R.par]=Math.max(ST.ttoets[R.par]||0,c)}
    if(R.mode==='toets'){const o=ST.toetsR||{oud:vorigToets??null,rondes:[]},rs=o.rondes.concat([{rid:R.rid,g:good,t:tot,p:pct}]),weg=rs.slice(0,-10);
      const oud=[o.oud,...weg.map(x=>x.p)].filter(x=>x!=null);ST.toetsR={oud:oud.length?Math.max(...oud):null,rondes:rs.slice(-10)}}
    if(R.tb)ST.tbDag=vandaag();
    save();
    const wrong=R.ids.filter(id=>!R.first[id]);
    const rest=R.mode==='fout'?foutIds(R.sec).length:0;
    const msg=R.tb?(pct===100?'Alles nog paraat! Die komen pas over een tijdje terug.':pct>=60?'Goed opgehaald. Wat je goed had, komt pas over een paar dagen terug. Wat fout ging, morgen nog eens.':'Oude stof is lastiger dan nieuwe, dus dit hoort erbij. Juist deze vragen komen morgen terug, en dan gaat het al beter.')+' Ga nu door met de herhaalronde.'
      :R.mode==='ttoets'?(c>=7?'De basis zit! Nu de paragraaftoets: zonder antwoorden om uit te kiezen, zoals op school.':'Nog geen 7. Bekijk wat je fout had, oefen nog even en doe de tussentoets opnieuw. Daarna komt de paragraaftoets.')
      :R.mode==='ptoets'?(c>=7?'Paragraaf gehaald! Op naar de volgende.':'Nog geen 7. Oefen je fouten en doe de paragraaftoets nog een keer.')
      :pct===100?'Alles in één keer goed!':pct>=80?'Heel goed gedaan!':pct>=55?'Goed bezig. Oefen je fouten nog even.':'Niet erg, zo leer je het. Oefen je fouten nog een keer.';
    el.innerHTML=`<span class="tag">${R.title}</span>
    <div class="card stack"><div class="score">${good} / ${tot}</div><p>in één keer goed. ${msg}</p>${aanmoedig(good,tot,c)}${R.nk?`<p class="sub">${R.nk===1?'Eén antwoord heb':R.nk+' antwoorden heb'} je zelf goed gerekend. Je ouder kijkt ${R.nk===1?'het':'ze'} nog na, dus je cijfer kan nog veranderen.</p>`:''}${R.exam?`<p>Cijfer: <b class="count">${f1(c)}</b></p>`:''}${R.mode==='fout'?`<p class="sub">${rest?`Er staan nog ${rest} foute vragen op je stapel. Die komen een volgende keer; je hoeft ze niet allemaal vandaag te doen.`:'Je stapel foute vragen is leeg!'}</p>`:''}</div>
    ${wrong.length?`<h2>Deze had je fout</h2><div class="wl">${wrong.map(id=>{const q=QM[id];return `<div class="card"><span class="tag">${nrTag(q)}</span><div>${fmt(q.q)}</div><div class="res">→ ${fmt(q.a??(q.k||[]).join(' '))}</div></div>`}).join('')}</div>`:''}
    <div class="stack">${wrong.length&&!R.tb?'<button class="btn" id="fo">Oefen alleen je fouten</button>':''}
      ${R.mode==='fout'&&!rest?'':`<button class="btn ${wrong.length?'ghost':''}" id="nw">${R.tb?'Door naar de herhaalronde':R.mode==='ttoets'?(c>=7?'Door naar de paragraaftoets':'Tussentoets opnieuw'):R.mode==='ptoets'?'Paragraaftoets opnieuw':R.mode==='fout'?'Nog '+Math.min(FOUT_MAX,rest)+' foute vragen':'Nieuwe ronde'}</button>`}
      <button class="btn ghost" id="hm">${R.hw?'Terug naar je huiswerk':'Terug naar '+V.naam}</button></div>`;
    const fo=el.querySelector('#fo');if(fo)fo.onclick=()=>start('fout',shuf(wrong),R.title+' · fouten',R.sec);
    const nwb=el.querySelector('#nw');if(nwb)nwb.onclick=()=>R.tb?start('oefen',herhaalIds(R.par),'Herhaalronde · '+(V.PN[R.par]||R.par)):R.mode==='fout'?start('fout',foutIds(R.sec),R.title,R.sec):R.mode==='ptoets'||R.mode==='ttoets'?ptoets(R.par):R.mode==='toets'?start('toets',toetsIds(),'Proeftoets'):R.title==='Korte ronde'?start('oefen',kortIds(),'Korte ronde'):R.title==='Rekenregels van vandaag'?start('oefen',dagIds(R.par),R.title,null,R.par):R.mode==='tvorm'&&R.par?start('tvorm',tvParIds(R.par),R.title,null,R.par):start(R.mode,R.hw?R.ids:shuf(R.ids),R.title,R.sec,null,R.hw);
    el.querySelector('#hm').onclick=R.van?()=>{done();Oefen.ctx.home()}:R.hw&&Oefen._hw?()=>hwHome(Oefen._hw):home;if(R.van)el.querySelector('#hm').textContent='Naar vandaag';scrollTo(0,0);
  }

  function diagEnd(){
    const r={};R.ids.forEach(id=>{const o=QM[id].o,x=r[o]=r[o]||[0,0];x[1]++;if(R.first[id])x[0]++});
    const nu=new Date(),d=`${nu.getFullYear()}-${String(nu.getMonth()+1).padStart(2,'0')}-${String(nu.getDate()).padStart(2,'0')}`;
    ST.diag={d,r};save();
    const good=R.ids.filter(id=>R.first[id]).length,tot=R.ids.length,wrong=R.ids.filter(id=>!R.first[id]);
    const secs=V.SECS.filter(s=>r[s.id]),zw=secs.filter(s=>r[s.id][0]<r[s.id][1]);
    el.innerHTML=`<span class="tag">${R.title}</span>
    <div class="card stack"><div class="score">${good} / ${tot}</div><p>in één keer goed. ${zw.length?`Nu weet je welke regels je moet oefenen: ${zw.length===1?'die ene staat':'ze staan'} hieronder in het rood.`:'Alle regels gaan goed. Knap!'}</p></div>
    <div class="card stack"><span class="tag">Per regel</span>${secs.map(s=>{const [g,t]=r[s.id],ok=g===t;return `<div style="display:flex;align-items:center;gap:10px">${chip(s)}<b style="flex:1;min-width:0">${s.name}</b><span style="white-space:nowrap;text-align:right;color:var(${ok?'--ok':'--bad'})"><b>${g}/${t}</b><br><small>${ok?'zit goed':'nog oefenen'}</small></span></div>`}).join('')}</div>
    ${zw.length?`<p class="sub">De sommen die fout gingen, staan nu bij <b>Mijn foute vragen</b>. <b>Rekenregels van vandaag</b> kiest vanaf nu vooral uit ${zw.map(s=>s.name.toLowerCase()).join(', ')}. Doe die elke dag: 5 sommen, 5 minuten.</p>`:''}
    ${wrong.length?`<h2>Deze had je fout</h2><div class="wl">${wrong.map(id=>{const q=QM[id];return `<div class="card"><span class="tag">${secOf(q.o).name}</span><div>${fmt(q.q)}</div><div class="res">→ ${fmt(q.a)}</div></div>`}).join('')}</div>`:''}
    <div class="stack"><button class="btn" id="dg">Rekenregels van vandaag</button>
      ${zw.length?`<button class="btn ghost" id="zw1">Bekijk de regels van ${zw[0].name.toLowerCase()}</button>`:''}
      <button class="btn ghost" id="hm">Terug naar ${V.naam}</button></div>`;
    el.querySelector('#dg').onclick=()=>start('oefen',dagIds(R.par),'Rekenregels van vandaag',null,R.par);
    const z1=el.querySelector('#zw1');if(z1)z1.onclick=()=>section(zw[0].id);
    el.querySelector('#hm').onclick=home;scrollTo(0,0);
  }

  /* ---------- sprint: zoveel mogelijk in een paar minuten ---------- */
  function sprint(target,kind,sec){
    el=target;Oefen.cur='sprint';
    const gens=Object.values(VAKDATA).flatMap(v=>v.sprint||[]);
    /* woordjessprint: alleen echte woordjes van talen met een komende toets, geen begrippen (de rekensprint is algemeen rekenen) */
    const mee=id=>!Oefen.ctx.metToets||Oefen.ctx.metToets(id);
    const TL=kind==='woord'&&window.WOORD?window.WOORD.talen().filter(t=>mee(t.id)):[];
    S={kind,end:0,good:0,bad:0,sec};
    const intro=()=>{el.innerHTML=`${top('Vandaag')}<h2>${kind==='reken'?'Rekensprint':'Woordjessprint'}</h2>
      <div class="card stack"><p>${kind==='reken'?'Korte sommen, zo snel als je kunt. Typ het antwoord en druk op Enter (een komma of een breuk als 3/4 mag), of tik het goede teken. Weet je het niet? Tik op <b>Sla over</b> en ga door: op een toets doe je dat ook.':(TL.length?'Echte woordjes, zo snel als je kunt. Kies de taal. Woordjes die je fout hebt, komen vaker terug; woordjes die je goed kent, minder vaak.':'Er komt nu geen toets in een taal met woordjes in de app. Doe een rekensprint.')}</p>
      <p class="sub">${Math.round(sec/60)} minuten. Zoveel mogelijk goed. Fout kost je niets, alleen tijd.</p></div>
      ${kind==='woord'&&TL.length?`<div class="stack">${TL.map(t=>{const st=window.WOORD.stand(t.id);return `<button class="sec" data-taal="${t.id}"><span class="sq" style="background:var(--c${TL.indexOf(t)%6+1})">${t.taal.slice(0,2).toUpperCase()}</span><span><b>${t.taal}</b><small>${t.n} woordjes · ${st.kent} ken je · ${st.lastig} nog lastig · ${st.nieuw} nieuw</small></span></button>`}).join('')}</div>`:'<button class="btn" id="go">Start</button>'}`;
      el.querySelector('#back').onclick=()=>{done();Oefen.ctx.home()};
      if(kind==='woord'&&!TL.length){const g0=el.querySelector('#go');if(g0)g0.remove()}
      const g=el.querySelector('#go');if(g)g.onclick=run;
      el.querySelectorAll('[data-taal]').forEach(b=>b.onclick=()=>{S.vid=b.dataset.taal;run()})};
    let cur,timer;
    const left=()=>Math.max(0,Math.ceil((S.end-Date.now())/1000));
    const clock=()=>{const l=left(),c=el.querySelector('#clk');if(c)c.textContent=Math.floor(l/60)+':'+String(l%60).padStart(2,'0');if(!l)finish()};
    function run(){S.end=Date.now()+sec*1000;S.good=0;S.bad=0;timer=setInterval(clock,250);next()}
    function next(){
      if(!left())return;
      const head=`<div class="top"><span class="tag">${kind==='reken'?'Rekensprint':'Woordjessprint'}</span><b class="count" id="clk"></b></div>
        <div class="row" style="justify-content:space-between"><span><b style="color:var(--ok)">${S.good}</b> goed</span><span class="sub">${S.bad} fout</span></div>`;
      if(kind==='reken'&&!window.REKEN){el.innerHTML=head+'<div class="card">De rekensprint wordt nog geladen. Ververs de pagina.</div>';return}
      if(kind==='reken'){const RK=window.REKEN;cur=RK.volgende(cur&&cur.k);const t0=Date.now();
        const toon=v=>typeof v==='number'?RK.k(Math.round(v*100)/100):v;
        const klaar=(ok,skip)=>{RK.uitslag(cur.k,ok,Date.now()-t0);ok?S.good++:skip?S.skip=(S.skip||0)+1:S.bad++;
          el.querySelector('#sfb').innerHTML=ok?'<div class="fb ok"><div class="head">Goed!</div></div>':`<div class="fb bad"><div class="head">${skip?'Overgeslagen. ':''}Het was ${toon(cur.a)} ${cur.e&&cur.e!=='euro'?cur.e:''}${cur.e==='euro'?'euro':''}</div></div>`;
          el.querySelectorAll('#sf input,#sf button,[data-o]').forEach(x=>x.disabled=true);setTimeout(next,ok?300:1300)};
        el.innerHTML=head+`<div class="card q"><small class="sub">${cur.naam} · niveau ${cur.l}</small><div style="font-size:1.25rem;margin-top:4px">${fmt(cur.q)}</div></div>`+
          (cur.opts?`<div class="opts" id="sf">${cur.opts.map(o=>`<button class="opt" data-o="${o}" style="font-size:1.4rem">${o}</button>`).join('')}</div>`
          :`<form id="sf" class="row"><input id="sa" class="cell" style="width:140px;font-size:1.2rem" inputmode="decimal" autocomplete="off" aria-label="Antwoord"> <span>${cur.e||''}</span><button class="btn">OK</button></form>`)+
          `<div class="row" style="margin-top:8px"><button class="btn ghost" id="skip" type="button">Sla over</button></div><div id="sfb"></div>`;
        el.querySelector('#skip').onclick=()=>klaar(false,true);
        if(cur.opts)el.querySelectorAll('[data-o]').forEach(x=>x.onclick=()=>{const ok=x.dataset.o===cur.a;x.classList.add(ok?'ok':'bad');klaar(ok)});
        else{const i=el.querySelector('#sa');i.focus();
          el.querySelector('#sf').onsubmit=e=>{e.preventDefault();if(!i.value.trim())return;klaar(RK.klopt(RK.lees(i.value),cur.a))}}
      }else if(S.vid&&window.WOORD){const WD=window.WOORD;cur=WD.volgende(S.vid,cur&&cur.w&&cur.w[0]);const W=cur;
        const klaar=ok=>{WD.uitslag(S.vid,W.w,ok);ok?S.good++:S.bad++;
          el.querySelector('#sfb').innerHTML=ok?'<div class="fb ok"><div class="head">Goed!</div></div>':`<div class="fb bad"><div class="head">${esc(W.w[0])} = ${esc(W.w[1])}</div></div>`;
          el.querySelectorAll('#sf input,#sf button,[data-o]').forEach(x=>x.disabled=true);setTimeout(next,ok?300:1600)};
        const de=W.taal==='Duits'?['ä','ö','ü','ß']:[];
        el.innerHTML=head+`<div class="card q"><small class="sub">${W.typen?'Typ in het '+W.taal:'Wat betekent dit?'}</small><div style="font-size:1.5rem;margin-top:4px${W.taal==='Grieks'&&!W.typen?';font-family:var(--greek,inherit)':''}">${esc(W.vraag)}</div></div>`+
          (W.typen?`<form id="sf" class="stack"><div class="row"><input id="sa" class="cell" style="width:220px;font-size:1.15rem;text-align:left" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Antwoord"><button class="btn">OK</button></div>${de.length?`<div class="row">${de.map(c=>`<button type="button" class="btn ghost" data-ch="${c}" style="min-width:44px">${c}</button>`).join('')}</div>`:''}<span class="sub" style="font-size:.85rem">Bij een zelfstandig naamwoord ook der, die of das.</span></form>`
          :`<div class="opts" id="sf">${W.opts.map(o=>`<button class="opt" data-o="${esc(o)}">${esc(o)}</button>`).join('')}</div>`)+
          `<div class="row" style="margin-top:8px"><button class="btn ghost" id="skip" type="button">Weet ik niet</button></div><div id="sfb"></div>`;
        el.querySelector('#skip').onclick=()=>klaar(false);
        if(W.typen){const i=el.querySelector('#sa');i.focus();
          el.querySelectorAll('[data-ch]').forEach(b=>b.onclick=()=>{i.value+=b.dataset.ch;i.focus()});
          el.querySelector('#sf').onsubmit=e=>{e.preventDefault();if(!i.value.trim())return;const ok=WD.kloptTyp(i.value,W.goed);i.classList.add(ok?'ok':'bad');klaar(ok)}}
        else el.querySelectorAll('[data-o]').forEach(x=>x.onclick=()=>{const ok=x.dataset.o===W.goed;
          el.querySelectorAll('[data-o]').forEach(y=>{if(y.dataset.o===W.goed)y.classList.add('ok');else if(y===x)y.classList.add('bad')});klaar(ok)});
      }
      clock();
    }
    function finish(){clearInterval(timer);if(S.done)return;S.done=1;
      const best=Oefen.ctx.sprintDone(kind,S.good);
      el.innerHTML=`<span class="tag">${kind==='reken'?'Rekensprint':'Woordjessprint'}</span>
      <div class="card stack"><div class="score">${S.good}</div><p>goed in ${Math.round(sec/60)} minuten. ${S.good>best.oud?'<b>Nieuw record!</b>':'Je record is '+best.oud+'.'}</p></div>
      ${kind==='reken'&&window.REKEN?`<div class="card stack"><b>Jouw niveau per soort</b><table class="tbl" style="width:100%">${window.REKEN.niveaus().map(x=>`<tr><td>${x.naam}</td><td style="white-space:nowrap">niveau ${x.l}/3</td><td class="sub" style="white-space:nowrap">${x.sec!=null?x.sec.toString().replace('.',',')+' s/som':''}</td></tr>`).join('')}</table><p class="sub" style="font-size:.9rem">Drie keer goed op rij: een niveau hoger. Sneller worden telt ook: kijk of de seconden per som omlaag gaan.</p></div>`:''}
      <div class="stack"><button class="btn" id="again">Nog een sprint</button><button class="btn ghost" id="hm">Naar vandaag</button></div>`;
      el.querySelector('#again').onclick=()=>{const v=S.vid;sprint(el,kind,sec);if(v&&kind==='woord'){S.vid=v;run()}};el.querySelector('#hm').onclick=()=>{done();Oefen.ctx.home()}}
    intro();
  }

  /* ---------- inzet bekijken (alleen de ouder): per dag, per vak, elke ronde met haar antwoorden en tijden ----------
     'Snel' = sneller dan je nodig hebt om de vraag echt te maken: een som in minder dan 12 s (op papier: uitwerking geopend binnen 30 s),
     een andere vraag in minder dan 3 s (zelf nakijken: binnen 8 s). Met stap-voor-stap-hulp: minder dan 3 s per stap + 6 s. */
  const VAKN=()=>Object.keys(window.VAKDATA||{}).filter(id=>VAKDATA[id]&&VAKDATA[id].Q);
  const isSom=(D,Q)=>D.reken!==false&&!!(Q&&Q.st&&Q.st.length);
  function snelX(D,Q,x){const som=isSom(D,Q);if((x.f||'').includes('h'))return x.s<3*((Q&&Q.st&&Q.st.length)||1)+6;
    return x.w!=null&&(x.f||'').includes('z')?x.w<(som?30:8):x.s<(som?12:3)}
  const nietTeZien=x=>(x.f||'').includes('z')&&x.ok&&(!x.j||x.j==='(op papier)');
  /* zelf goed gerekend, maar geen echt antwoord (of een vertaling van een paar woorden), of door de app alsnog fout gezet */
  const geenAntw=(Q,x)=>x.ga||((x.f||'').includes('z')&&x.ok&&!!Q&&(geenPoging(x.j,Q)||kortVertaal(x.j,Q)));
  function inzetDag(dag){return VAKN().map(id=>{const D=VAKDATA[id],st=Oefen.ctx.state(id),QX=Object.fromEntries(D.Q.map(q=>[q.id,q]));
    const rs=(st.inzet||[]).filter(r=>r.d===dag).sort((a,b)=>a.t0-b.t0);
    const xs=rs.flatMap(r=>r.q.map(x=>({x,Q:QX[x.i]}))).filter(o=>o.Q),eerst=xs.filter(o=>!(o.x.f||'').includes('r'));
    return {id,D,st,QX,rs,n:eerst.length,goed:eerst.filter(o=>o.x.ok).length,snel:xs.filter(o=>snelX(D,o.Q,o.x)).length,
      zelf:xs.filter(o=>nietTeZien(o.x)).length,kaart:rs.filter(r=>r.m==='kaart').reduce((a,r)=>a+r.q.filter(x=>!(x.f||'').includes('r')).length,0),ga:xs.filter(o=>geenAntw(o.Q,o.x)).length,sec:xs.reduce((a,o)=>a+o.x.s,0)}}).filter(v=>v.rs.length)}
  const tijd=t=>{const d=new Date(t);return d.getHours()+':'+String(d.getMinutes()).padStart(2,'0')};
  const secTxt=s=>s<60?s+' s':s<3600?Math.floor(s/60)+' min'+(s%60?' '+s%60+' s':''):'meer dan een uur';
  const MODEN={stap:'Huiswerk',tvorm:'Huiswerk, zelf op papier',oefen:'Oefenen',ptoets:'Paragraaftoets',ttoets:'Tussentoets',toets:'Proeftoets',fout:'Foute vragen',opwarm:'Opwarmen',diag:'Instaptoets'};
  function inzetView(target,dag,o){el=target;Oefen.cur='inzet';o=o||{};
    const V2=inzetDag(dag),hwOud=(o.hw||[]).map(h=>{const D=VAKDATA[h.app];if(!D)return null;const st=Oefen.ctx.state(h.app),A=(st.hwAns||{})[h.id];
      if(!A||!Object.keys(A).length||(st.inzet||[]).some(r=>r.hw===h.id&&r.d===dag))return null;return {h,D,A,QX:Object.fromEntries(D.Q.map(q=>[q.id,q]))}}).filter(Boolean);
    const vraagTxt=(Q,x)=>x.q?esc(x.q):fmt(String(Q.tv||Q.q).replace(/<button[\s\S]*?<\/button>/g,''));
    const kaart=(D,Q,x)=>{const sn=snelX(D,Q,x),f=x.f||'',nz=nietTeZien(x),ga=geenAntw(Q,x),goed=x.a!=null?esc(x.a):fmt(goedTxt(Q));
      const extra=[f.includes('r')?'herkansing':'',f.includes('v')?'in andere woorden of met andere getallen':'',f.includes('h')?'met stap-voor-stap-hulp':'',
        x.e?x.e+(x.e===1?' stap':' stappen')+' eerst fout':'',f.includes('z')?'zelf nagekeken':''].filter(Boolean);
      return `<div class="card stack antw ${x.ok?'aw-ok':'aw-bad'}${sn||nz||ga?' iz-let':''}"><span class="tag">${esc(nrTag(Q))}</span><div class="sub">${vraagTxt(Q,x)}</div>
        <div class="aw-r"><span class="aw-l">Zij</span><div class="aw-jij">${x.p!=null&&Q?plaatjeHtml(Q,x.p):x.j?fmt(esc(x.j)):'<span class="sub">(niets ingevuld)</span>'} <b class="aw-m">${x.ok?'✓':'✗'}</b>${x.ok?'':plaatjeWaarom(Q,x.p)}</div></div>
        ${!x.ok?`<div class="aw-r"><span class="aw-l">Goed</span><div class="res aw-pen">${goed}</div></div>`
          :f.includes('z')?`<div class="aw-r"><span class="aw-l">In de app</span><div class="res">${goed}</div></div>`:''}
        <div class="iz-t"><span class="${sn?'iz-snel':''}">${x.w!=null&&f.includes('z')?`uitwerking geopend na ${secTxt(x.w)}, klaar na ${secTxt(x.s)}`:secTxt(x.s)}${sn?' · snel':''}</span>${extra.length?' · '+extra.join(' · '):''}${nz?' · <b>zelf goed gerekend zonder iets in te typen: kijk in haar schrift</b>':''}${ga?(x.ga?' · <b>zelf goed gerekend zonder echt antwoord; de app heeft hem alsnog fout gezet</b>':geenPoging(x.j,Q)?' · <b>zelf goed gerekend zonder echt antwoord</b>':' · <b>zelf goed gerekend, maar maar een paar woorden getypt: kijk in haar schrift</b>'):''}</div></div>`};
    const kRonde=r=>{const xs=r.q||[],e=xs.filter(x=>!(x.f||'').includes('r')),wist=e.filter(x=>x.ok).length,sn=e.filter(x=>x.w<2).length;
      return `<details class="card iz-r"${sn?' open':''}><summary><b>Begrippen-kaartjes</b>${r.ti?' · '+esc(r.ti):''}
        <span class="sub" style="display:block;font-size:.9rem">${tijd(r.t0)}–${tijd(r.t1||r.t0)} · ${e.length} van ${r.n} kaartjes bekeken, ${wist} keer meteen 'wist ik'${sn?` · <span class="iz-snel">${sn} binnen 2 s omgedraaid</span>`:''}</span></summary>
        <table class="tbl" style="width:100%;margin-top:8px;font-size:.92rem">${xs.map(x=>`<tr${x.w<2?' class="iz-snel"':''}><td>${esc(x.b)}${(x.f||'').includes('r')?' <span class="sub">(nog een keer)</span>':''}</td><td style="white-space:nowrap">${x.ok?'wist ik':'nog niet'}</td><td class="sub" style="white-space:nowrap">${x.w} s</td></tr>`).join('')}</table>
        <p class="sub" style="font-size:.85rem;margin:6px 0 0">De seconden = hoe lang het kaartje voor haar lag voordat ze het omdraaide. 'Wist ik' kiest ze zelf.</p></details>`};
    const ronde=(v,r)=>{if(r.m==='kaart')return kRonde(r);const xs=r.q.filter(x=>v.QX[x.i]),e=xs.filter(x=>!(x.f||'').includes('r')),uniek=new Set(e.map(x=>x.i)).size,g=e.filter(x=>x.ok).length;
      const sn=xs.filter(x=>snelX(v.D,v.QX[x.i],x)).length,nz=xs.filter(nietTeZien).length,ga=xs.filter(x=>geenAntw(v.QX[x.i],x)).length,let_=sn||nz||ga;
      return `<details class="card iz-r"${let_?' open':''}><summary>${(L=>`<b>${esc(L)}</b>${(t=>t&&t!==L?' · '+esc(t):'')(String(r.ti||'').replace(/^Huiswerk:\s*/,''))}`)(r.hw?'Huiswerk':MODEN[r.m]||'Oefenen')}
        <span class="sub" style="display:block;font-size:.9rem">${tijd(r.t0)}–${tijd(r.t1||r.t0)} · ${g} van ${e.length} in één keer goed${uniek<r.n&&!r.hw?` · gestopt na ${uniek} van ${r.n} vragen`:''}${sn?` · <span class="iz-snel">${sn} snel</span>`:''}${nz?` · ${nz} niet te controleren`:''}${ga?` · ${ga} zonder echt antwoord`:''}</span></summary>
        <div class="stack" style="margin-top:10px">${xs.map(x=>kaart(v.D,v.QX[x.i],x)).join('')}</div></details>`};
    const tot=V2.reduce((a,v)=>a+v.n,0),totS=V2.reduce((a,v)=>a+v.snel,0),totZ=V2.reduce((a,v)=>a+v.zelf,0);
    el.innerHTML=`${top('Terug','Inzet')}
    <h2>Zo werkte ze · ${esc(o.titel||dag)}</h2>
    <details class="tip"><summary style="cursor:pointer"><b>Hoe lees je dit?</b></summary><div class="stack" style="margin-top:8px"><span>Per vak elke ronde in de app, met haar antwoorden en hoe lang ze over elke vraag deed. Bij meerkeuze moet ze altijd iets kiezen; een vraag overslaan kan niet. Wel kan ze snel gokken: dat zie je aan de tijd.</span>
      <span><b class="iz-snel">Snel</b> betekent: sneller dan je nodig hebt om de vraag echt te maken (een som binnen 12 seconden; met stap-voor-stap-hulp minder dan 3 seconden per stap; op papier de uitwerking al binnen 30 seconden geopend; een andere vraag binnen 3 seconden). Dat hoeft niet fout te zijn: een vraag die ze goed kent, gaat ook snel.</span>
      <span>Bij <b>zelf op papier</b> ziet de app haar uitwerking niet. Sinds 12 november moet ze daar altijd eerst haar eindantwoord intypen; een getal of formule kijkt de app dan zelf na. Bij een antwoord in woorden kijkt ze zelf na: wat ze typte, staat hier. Oudere antwoorden zonder iets ingetypt staan erbij met 'kijk in haar schrift'.</span>
      <span>Schrijft ze bij een open vraag of vertaling iets als 'ik kan dit nu niet', dan kan ze hem sinds 14 november niet meer zelf goed rekenen: hij telt als fout. Eerdere gevallen zet de app alsnog fout en ze staan hier gemarkeerd. Een vertaling van maar een paar woorden die ze goed rekende, staat er ook gemarkeerd bij.</span>
      <span>Bij een vraag die ze <b>zelf nakeek</b> staat het antwoord uit de app eronder, ook als ze hem goed rekende. Zo kun je ze naast elkaar leggen; in andere woorden kan ook goed zijn.</span>
      <span>Sinds 14 november staan ook de <b>begrippen-kaartjes</b> erin: welk begrip, hoe lang ze keek voordat ze omdraaide, en of ze 'wist ik' koos. Binnen 2 seconden omdraaien is te snel om het begrip echt eerst zelf te bedenken.</span>
      <span>Rondes met iets opvallends staan open. Een oranje streep markeert de vraag.</span></div></details>
    ${V2.length?`<div class="card stack"><span class="tag">Samen</span><p style="margin:0">${tot} ${tot===1?'vraag':'vragen'} beantwoord, ${V2.reduce((a,v)=>a+v.goed,0)} in één keer goed.${totS?` <span class="iz-snel">${totS} snel beantwoord.</span>`:' Niets opvallend snel.'}${totZ?` ${totZ} zelf goed gerekend zonder iets in te typen.`:''}${(t=>t?` ${t} zelf goed gerekend zonder echt antwoord.`:'')(V2.reduce((a,v)=>a+v.ga,0))}</p></div>`:''}
    ${V2.map(v=>`<h3 style="margin:16px 0 6px">${esc(v.D.naam)}</h3>
      <p class="sub" style="margin:0 0 8px;font-size:.9rem">${o.min&&o.min[v.id]?`${Math.round(o.min[v.id])} min actief in de app · `:''}${v.n} ${v.n===1?'vraag':'vragen'}, ${v.goed} in één keer goed${v.kaart?` · ${v.kaart} begrippen-kaartjes`:''}${v.snel?` · <span class="iz-snel">${v.snel} snel</span>`:''}</p>
      <div class="stack">${v.rs.map(r=>ronde(v,r)).join('')}</div>`).join('')}
    ${hwOud.length?`<h3 style="margin:16px 0 6px">Huiswerk, nog zonder tijden</h3><p class="sub" style="font-size:.9rem;margin:0 0 8px">Tijden bewaart de app pas sinds 12 november. Hier zie je wel haar eerste antwoord op elke vraag.</p>
      ${hwOud.map(({h,D,A,QX})=>{const ids=Object.keys(A).filter(i=>QX[i]),g=ids.filter(i=>A[i].ok).length;
        return `<details class="card iz-r" open><summary><b>${esc(D.naam)}</b> · ${esc(h.t||'huiswerk')}<span class="sub" style="display:block;font-size:.9rem">${g} van ${ids.length} in één keer goed</span></summary><div class="stack" style="margin-top:10px">${ids.map(i=>{const Q=QX[i],a=A[i];
          return `<div class="card stack antw ${a.ok?'aw-ok':'aw-bad'}"><span class="tag">${esc(nrTag(Q))}</span><div class="sub">${vraagTxt(Q,{})}</div>
          <div class="aw-r"><span class="aw-l">Zij</span><div class="aw-jij">${a.v?'<span class="sub">(kreeg de vraag in andere woorden)</span>':a.p!=null?plaatjeHtml(Q,a.p):a.j?fmt(esc(a.j)):'<span class="sub">(niets ingevuld)</span>'} <b class="aw-m">${a.ok?'✓':'✗'}</b></div></div>
          ${a.ok?'':`<div class="aw-r"><span class="aw-l">Goed</span><div class="res aw-pen">${fmt(goedTxt(Q))}</div></div>`}</div>`}).join('')}</div></details>`}).join('')}`:''}
    ${!V2.length&&!hwOud.length?'<div class="card">Op deze dag heeft ze niets in de app gemaakt.</div>':''}
    <div class="stack" style="margin-top:12px"><button class="btn ghost" id="izterug">Terug</button></div>`;
    const terug=()=>{Oefen.cur=null;if(o.terug)o.terug()};
    el.querySelector('#back').onclick=terug;el.querySelector('#izterug').onclick=terug;scrollTo(0,0)}
  return {ctx:null,cur:null,
    /* inzet voor de ouder: samenvatting van een dag, en de hele pagina */
    inzetSamen(dag){const V2=inzetDag(dag);return {vakken:V2.map(v=>({id:v.id,naam:v.D.naam,n:v.n,goed:v.goed,snel:v.snel,zelf:v.zelf})),n:V2.reduce((a,v)=>a+v.n,0),goed:V2.reduce((a,v)=>a+v.goed,0),snel:V2.reduce((a,v)=>a+v.snel,0),zelf:V2.reduce((a,v)=>a+v.zelf,0)}},
    inzet:inzetView,
    /* t = de toets waarvoor ze oefent (alleen bij mode 'toets'): {naam, stof:[par], norm:75} */
    vakHome(target,id,par,mode,t){el=target;load(id);focusPar=par||null;focusMode=mode||null;
      if(mode==='toets'&&t){const n=Number(t.norm);NORM=n>0&&n<100?n/100:null;
        const ok=new Set((t.stof||[]).filter(p=>pars().includes(p)));
        if(ok.size){TSTOF={naam:t.naam};const S=V.SECS.filter(s=>ok.has(s.par)),sid=new Set(S.map(s=>s.id));
          V=Object.assign({},V,{SECS:S,Q:V.Q.filter(q=>sid.has(q.o)),BEG:(V.BEG||[]).filter(b=>ok.has(b[2])),leer:V.leer&&V.leer.filter(p=>ok.has(p)),
            dicht:V.dicht&&V.dicht.filter(x=>ok.has(x.s.par)),extra:V.extra&&ok.has(V.extra.par)?V.extra:null})}}
      home()},
    huiswerk(target,id,H){el=target;load(id,H.key);focusPar=H.par||null;focusMode=null;hwHome(H)},
    hwTotaal(id,H){const D=VAKDATA[id];if(!D)return 0;const so=x=>D.SECS.find(s=>s.id===x)||{},want=(H.opg||[]).map(Number),ids=new Set();
      D.Q.forEach(q=>{const n=nrNum(q);if(n&&want.includes(n[0])&&(!H.par||so(q.o).par===H.par))ids.add(q.id)});
      (H.leer||[]).forEach(L=>(L.ids||D.Q.filter(q=>q.o===L.o&&q.t!=='open').map(q=>q.id)).forEach(x=>ids.add(x)));return ids.size},
    hwStand(id,key){const v=VAKDATA[id];if(!v)return null;const st=Oefen.ctx.state(id);return (st.hw&&st.hw[key]||[]).length},
    sprint,
    /* vanuit het dagplan: opwarmvragen voor een vak, en de rekenregels van vandaag (tijd telt niet mee voor het vak zelf) */
    warmPool,
    opwarm(target,id,par,key){el=target;load(id);Oefen.cur='opwarm';start('opwarm',warmIds(id,par),'Opwarmen: '+V.naam,null,par);R.key=key;R.van=true},
    rekenregels(target){el=target;load('wi');Oefen.cur='opwarm';start('oefen',dagIds(V.basis.par),'Rekenregels van vandaag',null,V.basis.par);R.van=true},
    load(id){load(id);return ST},
    /* de ouder zette een antwoord dat ze zelf goed rekende op fout: naar Mijn foute vragen, en het cijfer van die ronde één goed minder */
    corrigeer(vd,it){const st=Oefen.ctx.state(vd);st.wrong=st.wrong||[];if(!st.wrong.includes(it.qid))st.wrong.push(it.qid);
      const eenKeer=r=>{if(!r)return false;r.af=r.af||[];if(r.af.includes(it.qid))return false;r.af.push(it.qid);return r.g>0};
      if(it.mode==='ptoets'){const o=(st.ptoets||{})[it.par],r=o&&o.rondes&&o.rondes.find(x=>x.rid===it.rid);
        if(eenKeer(r)){r.g--;r.c=cijfer(r.g,r.t);o.best=Math.max(o.oud||0,...o.rondes.map(x=>x.c));if(o.rondes[o.rondes.length-1]===r)o.laatst=r.c}}
      if(it.mode==='toets'){const o=st.toetsR,r=o&&o.rondes.find(x=>x.rid===it.rid);
        if(eenKeer(r)){r.g--;r.p=Math.round(r.g/r.t*100);st.best=st.best||{};st.best.toets=Math.max(o.oud==null?0:o.oud,...o.rondes.map(x=>x.p))}}},
    pars(id){const v=vw(id);return v.leer||[...new Set(v.SECS.filter(s=>s.par!=='mix').map(s=>s.par))]},
    stop(){Oefen.cur=null}};
})();
