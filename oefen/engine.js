/* ============================================================
   Oefenmotor: hetzelfde voor elk vak.
   Een vak staat in vakken/<id>.js en vult VAKDATA[id] met
   {SECS, SNAP, BEG, Q, PN, snapHtml, sprint?, leer?, custom?, reken?}.
   Vraagsoorten: meerkeuze (standaard, f = [antwoord, waarom fout] of alleen tekst, uitleg in st of u),
   t:'open' (zelf nakijken met kernpunten k en voorbeeldantwoorden vb), type:<naam> (V.custom[naam] tekent hem).
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
  let el,vid,V,ST,QM,R,K,S,focusPar=null,focusMode=null;
  const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
  const smooth=matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';
  const secOf=id=>V.SECS.find(s=>s.id===id);
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
  const cijfer=(g,t)=>Math.round((1+9*g/t)*10)/10;
  const f1=n=>n.toFixed(1).replace('.',',');
  const save=()=>Oefen.ctx.save(vid);
  const top=(back,label)=>`<div class="top"><button class="link" id="back">← ${back}</button><span class="tag">${label||''}</span></div>`;

  function load(id){vid=id;V=VAKDATA[id];QM=Object.fromEntries(V.Q.map(q=>[q.id,q]));
    ST=Oefen.ctx.state(id);ST.best=ST.best||{};ST.wrong=(ST.wrong||[]).filter(x=>QM[x]);ST.wrongB=ST.wrongB||[];ST.ptoets=ST.ptoets||{};ST.hw=ST.hw||{};}
  function done(){Oefen.cur=null}
  let toonAlles=false;
  const vandaag=()=>Oefen.ctx.today?Oefen.ctx.today():new Date().toLocaleDateString('sv-SE');
  /* route per paragraaf: dag 1 begrippen (beg) en een oefenronde (vr), dag 2 de paragraaftoets (pt). d1 = dag waarop stap 1 en 2 af waren. */
  function rt(p){ST.route=ST.route||{};return ST.route[p]=ST.route[p]||{}}
  const isOpen=id=>QM[id].t==='open'||!!QM[id].open;
  /* oefenronde: 10 vragen uit deze paragraaf, eerst je foute vragen (max 3), dan uit elk onderdeel één, hoogstens 2 open vragen */
  function routeIds(p){const all=V.Q.filter(q=>secOf(q.o).par===p).map(q=>q.id),pick=shuf(ST.wrong.filter(id=>all.includes(id))).slice(0,3);
    V.SECS.filter(s=>s.par===p).forEach(s=>{const l=shuf(all.filter(id=>QM[id].o===s.id&&!pick.includes(id)));if(l.length)pick.push(l[0])});
    pick.push(...shuf(all.filter(id=>!pick.includes(id))));let no=0;
    return shuf(pick.filter(id=>!isOpen(id)||++no<=2).slice(0,10))}
  function routeCheck(p){const r=rt(p),d=vandaag();if(r.d1===d)return;
    if((!begVan(p).length||r.beg===d)&&r.vr===d){if(r.d1)r.vorig=r.d1;r.d1=d;save();if(Oefen.ctx.klaar)Oefen.ctx.klaar('bij1-'+vid+'-'+p)}}
  /* het stappenscherm: wat is er vandaag aan de beurt voor deze paragraaf */
  function route(){
    const p=focusPar,r=rt(p),d=vandaag(),nb=begVan(p).length,dag2=focusMode==='ptoets',pr=ST.ptoets[p],n=nb?3:2;
    const begOk=!nb||r.beg===d||(dag2&&!!r.beg),vrOk=r.vr===d||(dag2&&!!r.vr),klaar1=!dag2&&begOk&&vrOk,ptNu=r.pt===d;
    const nu=dag2?(ptNu?0:n):!begOk?1:!vrOk?(nb?2:1):0;
    const stap=(i,ok,titel,uit,knop,id)=>`<div class="stap${ok?' ok':''}${nu===i?' nu':''}"><span class="sn">${ok?'✓':i}</span><span class="tx"><b>${titel}</b><small>${uit}</small>${nu===i&&knop?`<button class="btn" id="${id}">${knop}</button>`:''}</span></div>`;
    const S=[];
    if(nb)S.push(stap(1,begOk,`Begrippen-kaartjes (${nb})`,dag2&&r.beg!==d?'Gedaan.':'Bedenk eerst zelf wat het betekent, draai dan om. Wat je nog niet wist, komt terug tot je het weet.','Begin met de begrippen','rt-beg'));
    S.push(stap(nb?2:1,vrOk,'Oefenronde: 10 vragen',dag2&&r.vr!==d?'Gedaan.':'Vragen uit deze paragraaf, met hulp als je vastloopt. Wat je fout had, komt meteen nog een keer.','Start de oefenronde','rt-vr'));
    S.push(stap(n,ptNu||(!dag2&&pr&&pr.best>=7),'Paragraaftoets: 10 vragen zonder hulp',
      dag2?(ptNu?`Gemaakt: ${f1(pr.laatst)}. ${pr.laatst>=7?'De paragraaf heeft een vinkje.':'Nog geen 7: oefen je fouten. Morgen staat hij weer in je plan.'}`:'Kijk of het van gisteren is blijven hangen. Bij een 7 of hoger krijgt de paragraaf een vinkje.')
        :pr&&pr.best>=7?`Al gehaald (${f1(pr.best)}).`:'Morgen. Een dag later laat zien of het echt is blijven hangen.','Start de paragraaftoets','rt-pt'));
    el.innerHTML=`<div class="top"><button class="link" id="back">← Vandaag</button><span class="tag">${V.kop}</span></div>
    <h2>${V.naam} · ${V.PN[p]||p}</h2>
    <p class="sub">${dag2?`Stap ${n} van ${n}: vandaag alleen de paragraaftoets.`:`Stap 1${nb?' en 2':''} van ${n} vandaag. De paragraaftoets doe je morgen.`}</p>
    <div class="stappen">${S.join('')}</div>
    ${klaar1||(dag2&&ptNu)?`<div class="card stack"><b>${dag2?'Klaar voor vandaag.':'Klaar voor vandaag! Morgen staat de paragraaftoets in je plan.'}</b><button class="btn" id="rt-hm">Naar vandaag</button></div>`:''}
    <button class="link" id="rt-alles" style="margin-top:14px">Alles van ${V.naam} bekijken</button>`;
    const q=s=>el.querySelector(s),on=(s,f)=>{if(q(s))q(s).onclick=f};
    const naarVandaag=()=>{done();Oefen.ctx.home({vandaag:true})};on('#back',naarVandaag);on('#rt-hm',naarVandaag);
    on('#rt-beg',()=>kStart(shuf(begVan(p)),false,p));
    on('#rt-vr',()=>{start('oefen',routeIds(p),'Oefenronde '+(V.PN[p]||p),null,p);R.route=p});
    on('#rt-pt',()=>ptoets(p));
    on('#rt-alles',()=>{toonAlles=true;home()});
    scrollTo(0,0);
  }

  /* ---------- startscherm van een vak ---------- */
  function home(){
    Oefen.cur=vid;
    if((focusMode==='bijhouden'||focusMode==='ptoets')&&focusPar&&!toonAlles&&pars().includes(focusPar))return route();
    const secBtn=s=>{const n=V.Q.filter(q=>q.o===s.id).length,b=ST.best[s.id],w=wrongIn(s.id);
      return `<button class="sec" data-s="${s.id}">${chip(s)}<span><b>${s.name}</b><small>${s.sub} · ${n} vragen${ST.diag&&ST.diag.r[s.id]?` · instaptoets ${ST.diag.r[s.id][0]}/${ST.diag.r[s.id][1]}`:''}${w?` · <span style="color:var(--bad)">${w} fout</span>`:''}</small></span><span class="best">${b!=null?'beste<br>'+b+'%':''}</span></button>`};
    const ptCard=p=>{const r=ST.ptoets[p],ok=r&&r.best>=7;
      return `<button class="sec pt${ok?' gehaald':''}" data-pt="${p}"><span class="sq" style="background:${ok?'var(--ok)':'var(--ink)'};color:var(--bg)">${ok?'✓':'T'}</span><span><b>Paragraaftoets</b><small>10 vragen zonder hulp, met een cijfer. ${ok?'Gehaald.':'Haal een 7 of hoger.'}</small></span><span class="best">${r?'beste<br>'+f1(r.best):''}</span></button>`};
    const B=V.basis,isB=p=>!!B&&p===B.par;
    const basisCards=p=>{const d=ST.diag,n=diagIds(p).length,dg=d&&Object.values(d.r).reduce((a,x)=>[a[0]+x[0],a[1]+x[1]],[0,0]);
      return `<button class="sec pt" id="b-diag"><span class="sq" style="background:var(--ink);color:var(--bg)">I</span><span><b>Instaptoets: wat zit er al goed?</b><small>${n} sommen zonder hulp. Daarna zie je per regel hoe het gaat.${d?' Gemaakt op '+d.d.split('-').reverse().join('-')+'.':''}</small></span><span class="best">${dg?dg[0]+' / '+dg[1]:''}</span></button>
      <button class="sec" id="b-dag"><span class="sq" style="background:var(--c2)">5</span><span><b>Rekenregels van vandaag</b><small>${B.dag||5} sommen, ongeveer 5 minuten. ${d?'Vooral de regels die nog niet goed gaan.':'Maak eerst de instaptoets, dan weet de app wat je moet oefenen.'}</small></span></button>
      <button class="sec" id="b-ov"><span class="sq" style="background:var(--line)">≡</span><span><b>Alle rekenregels onder elkaar</b><small>Het overzicht. Schrijf het over in je schrift, met bij elke regel een eigen voorbeeld.</small></span></button>`};
    const tv=focusMode==='toets';
    const ok=leerPars().filter(p=>ST.ptoets[p]&&ST.ptoets[p].best>=7);
    el.innerHTML=`
    ${top('Alle vakken',V.kop)}
    <h2>${V.naam}</h2>
    ${tv?`<div class="card stack plan"><span class="tag">Toetsvoorbereiding</span>
      <p>${ok.length} van ${leerPars().length} paragrafen gehaald. Hoe meer je beheerst, hoe korter je toetsvoorbereiding wordt.</p>
      <ol class="pl"><li>Eerst <button class="link" id="tv-f">je foute vragen</button> (${ST.wrong.length})</li><li>Dan de paragraaftoetsen zonder vinkje</li><li>Alles gehaald? Maak de <button class="link" id="tv-t">proeftoets</button>.</li></ol></div>`:''}
    <div class="stack"><button class="btn" id="kort">Korte ronde (8 vragen)</button>
      ${V.BEG.length?`<button class="sec" id="kaart"><span class="sq" style="background:var(--c6)">B</span><span><b>Begrippen-kaartjes</b><small>${V.BEG.length} kaartjes${ST.wrongB.length?' · '+ST.wrongB.length+' nog lastig':''}</small></span></button>`:''}</div>
    ${pars().map(p=>`<div class="stack${focusPar===p?' focus':''}" id="par-${p.replace('.','-')}"><span class="tag">${V.PN[p]||p}${focusPar===p?' · hier ben je':''}</span>${begVan(p).length?`<button class="sec" data-bp="${p}"><span class="sq" style="background:var(--c6)">B</span><span><b>Begrippen van deze paragraaf</b><small>${begVan(p).length} kaartjes</small></span></button>`:''}${V.SECS.filter(s=>s.par===p).map(secBtn).join('')}${isB(p)?basisCards(p):ptCard(p)+(tvVak()&&tvParIds(p).length?`<button class="sec" data-tvp="${p}"><span class="sq" style="background:var(--line)">✎</span><span><b>Toetsvorm</b><small>5 vragen zonder opties en zonder hulp: zelf uitwerken op papier, dan nakijken</small></span></button>`:'')}</div>`).join('')}
    <div class="stack"><span class="tag">Door elkaar</span>
      ${V.SECS.filter(s=>s.par==='mix').map(secBtn).join('')}
      ${tvVak()&&tvIds().length?`<button class="sec" id="tvboek"><span class="sq" style="background:var(--ink);color:var(--bg)">B</span><span><b>Oefentoets uit het boek</b><small>${tvIds().length} vragen in toetsvorm: zelf uitwerken op papier, dan nakijken</small></span></button>`:''}
      <button class="sec" id="toets"><span class="sq" style="background:var(--c2)">T</span><span><b>Proeftoets</b><small>20 vragen uit alle onderdelen, met een cijfer</small></span><span class="best">${ST.best.toets!=null?'beste<br>'+ST.best.toets+'%':''}</span></button>
      <button class="sec" id="fouten"><span class="sq" style="background:var(--line)">${ST.wrong.length}</span><span><b>Mijn foute vragen</b><small>${ST.wrong.length?'Ze komen terug in andere woorden.':'Nog niets fout gedaan'}</small></span></button>
      <button class="sec" id="spiek"><span class="sq" style="background:var(--line)">?</span><span><b>Spiekbrief</b><small>Alle regels en begrippen op één plek</small></span></button>
    </div>
    ${V.log&&V.log.length?`<div class="card"><span class="tag">Huiswerk in deze app</span><ul class="log">${V.log.map(l=>`<li><b>${l[0]}</b> ${l[1]}: ${l[2]}</li>`).join('')}</ul></div>`:''}`;
    el.querySelector('#back').onclick=()=>{done();Oefen.ctx.home()};
    el.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>section(b.dataset.s));
    el.querySelectorAll('[data-pt]').forEach(b=>b.onclick=()=>ptoets(b.dataset.pt));
    el.querySelector('#kort').onclick=()=>start('oefen',kortIds(),'Korte ronde');
    const ka=el.querySelector('#kaart');if(ka)ka.onclick=kaartMenu;
    el.querySelectorAll('[data-bp]').forEach(b=>b.onclick=()=>kStart(shuf(begVan(b.dataset.bp)),false));
    const q=x=>el.querySelector(x);
    if(q('#tv-f'))q('#tv-f').onclick=()=>{if(ST.wrong.length)start('fout',shuf(ST.wrong),'Mijn foute vragen')};
    if(q('#tv-t'))q('#tv-t').onclick=()=>start('toets',toetsIds(),'Proeftoets');
    el.querySelector('#toets').onclick=()=>start('toets',toetsIds(),'Proeftoets');
    if(q('#tvboek'))q('#tvboek').onclick=()=>start('tvorm',tvIds(),'Oefentoets uit het boek');
    el.querySelectorAll('[data-tvp]').forEach(b=>b.onclick=()=>start('tvorm',tvParIds(b.dataset.tvp),'Toetsvorm '+(V.PN[b.dataset.tvp]||b.dataset.tvp),null,b.dataset.tvp));
    el.querySelector('#fouten').onclick=()=>{if(ST.wrong.length)start('fout',shuf(ST.wrong),'Mijn foute vragen')};
    el.querySelector('#spiek').onclick=()=>spiek();
    if(q('#b-diag'))q('#b-diag').onclick=()=>start('diag',shuf(diagIds(B.par)),'Instaptoets rekenregels',null,B.par);
    if(q('#b-dag'))q('#b-dag').onclick=()=>start('oefen',dagIds(B.par),'Rekenregels van vandaag',null,B.par);
    if(q('#b-ov'))q('#b-ov').onclick=()=>spiek(B.par);
    const f=focusPar&&el.querySelector('#par-'+focusPar.replace('.','-'));
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
  function warmPool(vd,par){const v=VAKDATA[vd];if(!v)return [];const ps=v.leer||[...new Set(v.SECS.filter(s=>s.par!=='mix').map(s=>s.par))],i=ps.indexOf(par);
    if(i<1)return [];const eerder=new Set(ps.slice(0,i)),sec=Object.fromEntries(v.SECS.map(s=>[s.id,s.par]));
    return v.Q.filter(q=>eerder.has(sec[q.o])&&q.t!=='open'&&!q.type).map(q=>q.id)}
  function warmIds(vd,par){const pool=warmPool(vd,par),st=Oefen.ctx.state(vd),f=shuf((st.wrong||[]).filter(id=>pool.includes(id))).slice(0,2);
    return shuf([...f,...shuf(pool.filter(id=>!f.includes(id))).slice(0,3-f.length)])}
  function kortIds(){const f=shuf(ST.wrong).slice(0,4);return shuf([...f,...shuf(V.Q.map(q=>q.id).filter(id=>!f.includes(id))).slice(0,8-f.length)])}
  function toetsIds(){const pick=[];V.SECS.filter(x=>x.par!=='mix'&&!basisSec(x.id)).forEach(x=>{const l=shuf(V.Q.filter(q=>q.o===x.id));if(l.length)pick.push(l[0].id)});const rest=shuf(V.Q.filter(q=>!basisSec(q.o)).map(q=>q.id).filter(id=>!pick.includes(id)));return shuf([...pick,...rest.slice(0,Math.max(0,20-pick.length))]).slice(0,Math.max(20,pick.length))}
  function ptoets(p){const pick=[];V.SECS.filter(s=>s.par===p).forEach(s=>{const l=shuf(V.Q.filter(q=>q.o===s.id));if(l.length)pick.push(l[0].id)});
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
  function kStart(stack,rev,route){K={stack:stack.slice(),rev,tot:stack.length,done:0,first:{},route};kaart()}
  function kaart(){
    if(!K.stack.length){const good=Object.values(K.first).filter(x=>x).length;
      if(K.route){rt(K.route).beg=vandaag();save();routeCheck(K.route);
        el.innerHTML=`<span class="tag">Begrippen-kaartjes</span><div class="card stack"><div class="score">${good} / ${K.tot}</div><p>meteen geweten. Alle kaartjes zitten erin.</p></div>
        <div class="stack"><button class="btn" id="hm">Verder</button></div>`;el.querySelector('#hm').onclick=home;scrollTo(0,0);return}
      el.innerHTML=`<span class="tag">Begrippen-kaartjes</span><div class="card stack"><div class="score">${good} / ${K.tot}</div><p>meteen geweten.</p></div>
      <div class="stack"><button class="btn" id="again">Nog een keer</button><button class="btn ghost" id="hm">Terug naar ${V.naam}</button></div>`;
      el.querySelector('#again').onclick=kaartMenu;el.querySelector('#hm').onclick=home;return;}
    const [t,u]=K.stack[0],front=K.rev?u:t,back=K.rev?t:u;
    el.innerHTML=`<div class="top"><button class="link" id="stop">← Stoppen</button><span class="tag">${K.done} / ${K.tot} klaar</span></div>
    <div class="bar"><i style="width:${Math.round(K.done/K.tot*100)}%"></i></div>
    <button class="card flip" id="fl">${K.rev?`<span>${front}</span>`:`<b>${front}</b>`}<span class="sub">Tik om om te draaien</span></button>
    <div class="row" id="kb" hidden><button class="btn" id="wel" style="flex:1">Wist ik</button><button class="btn ghost" id="niet" style="flex:1">Wist ik nog niet</button></div>`;
    const fl=el.querySelector('#fl');
    fl.onclick=()=>{fl.innerHTML=K.rev?`<span class="why">${front}</span><b>${back}</b>`:`<b>${front}</b><span>${back}</span>`;el.querySelector('#kb').hidden=false;fl.onclick=null};
    el.querySelector('#stop').onclick=K.route?home:kaartMenu;
    el.querySelector('#wel').onclick=()=>{if(!(t in K.first))K.first[t]=true;ST.wrongB=ST.wrongB.filter(x=>x!==t);save();K.stack.shift();K.done++;kaart()};
    el.querySelector('#niet').onclick=()=>{if(!(t in K.first))K.first[t]=false;if(!ST.wrongB.includes(t))ST.wrongB.push(t);save();K.stack.push(K.stack.shift());kaart()};
    scrollTo(0,0);
  }

  /* ---------- oefenen ---------- */
  function start(mode,ids,title,sec,par,hw){
    const was=new Set(ST.wrong),exam=mode==='toets'||mode==='ptoets'||mode==='diag';
    R={mode,exam,title,sec,par,ids,was,queue:ids.map(id=>({id,retry:false,alt:!exam&&was.has(id)&&!!QM[id].v,old:!exam&&was.has(id)})),i:0,first:{},cleared:new Set(),total:ids.length,helped:{},stepErr:{},hw};
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
    const it=R.queue[R.i],q=form(QM[it.id],it.alt),s=secOf(q.o);
    if(q.type&&V.custom&&V.custom[q.type])return askCustom(q,it,s);
    /* vakken met open toetsen (levensbeschouwing): meerkeuzevraag met open versie wordt open gesteld, behalve bij opwarmen en herkansing */
    if(QM[it.id].open&&R.mode!=='opwarm'&&R.mode!=='stap'&&!it.retry){const b=QM[it.id],o=b.open;return askOpen(Object.assign({},b,{t:'open',q:o.q||b.q,k:o.k,vb:o.vb}),Object.assign({},it,{alt:false}),s)}
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
      if(!(q.id in R.first)){R.first[q.id]=ok;if(!ok&&!ST.wrong.includes(q.id))ST.wrong.push(q.id);if(ok&&R.was.has(q.id)&&!R.stepErr[q.id])ST.wrong=ST.wrong.filter(x=>x!==q.id);save()}
      if(ok||R.exam){R.cleared.add(q.id);hwMark(q.id)}
      else{const at=Math.min(R.i+4,R.queue.length);R.queue.splice(at,0,{id:q.id,retry:true,alt:retryAlt(q.id,it)})}
      const ul=uitl(q),fb=el.querySelector('#fb');
      fb.innerHTML=ok?`<div class="fb ok"><div class="head">Goed!</div>${R.helped[q.id]||!ul?'':`<div>Zo zit het:</div>${ul}`}</div>`
        :`<div class="fb bad"><div class="head">Niet goed</div><div><b>Het goede antwoord is:</b></div><div class="res">${fmt(q.a)}</div>${ul?`<div><b>Zo zit het:</b></div>${ul}`:''}
          ${!R.exam?'<p class="why" style="margin-top:10px">Deze soort som komt zo nog een keer terug, met andere getallen.</p>':''}</div>`;
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
      else{b.classList.add('bad');b.disabled=true;R.stepErr[q.id]=1;if(!ST.wrong.includes(q.id)){ST.wrong.push(q.id);save()}
        sw.innerHTML=`<div class="fb bad"><div class="head">Nog niet.</div>${fmt(decodeURIComponent(b.dataset.why))} Probeer het nog een keer.</div>`}});
    else d.querySelector('.sh').onclick=e=>{e.target.remove();finish()};
    d.scrollIntoView({behavior:smooth,block:'nearest'});
  }
  function answer(q,opts,k,it){
    const ok=opts[k][1]===1;
    el.querySelectorAll('.opt[data-k]').forEach((b,j)=>{b.disabled=true;if(opts[j][1]===1)b.classList.add('ok');else if(j===k)b.classList.add('bad');else b.classList.add('dim')});
    const hb=el.querySelector('#help');if(hb)hb.remove();
    if(!(q.id in R.first)){R.first[q.id]=ok;
      if(!ok&&!ST.wrong.includes(q.id))ST.wrong.push(q.id);
      /* pas uit de stapel als hij in een LATERE ronde in één keer goed gaat */
      if(ok&&R.was.has(q.id)&&!R.stepErr[q.id])ST.wrong=ST.wrong.filter(x=>x!==q.id);
      if(ok&&!R.exam&&!R.stepErr[q.id]&&hasSt(q)){ST.ok=ST.ok||[];if(!ST.ok.includes(q.id))ST.ok.push(q.id)}
      save();}
    if(ok||R.exam){R.cleared.add(q.id);hwMark(q.id)}
    else{const at=Math.min(R.i+4,R.queue.length);R.queue.splice(at,0,{id:q.id,retry:true,alt:retryAlt(q.id,it)})}
    const fb=el.querySelector('#fb');
    const ul=uitl(q);
    fb.innerHTML=ok?`<div class="fb ok"><div class="head">Goed!</div>${R.helped[q.id]||!ul?'':`<div>Zo zit het:</div>${ul}`}</div>`
      :`<div class="fb bad"><div class="head">Niet goed</div>${opts[k][1]?`<div><b>Dit ging er mis:</b></div><div class="mistake">${fmt(opts[k][1])}</div>`:''}
        <div><b>Het goede antwoord is:</b></div><div class="res">${fmt(q.a)}</div>${ul?`<div><b>Zo zit het:</b></div>${ul}`:''}
        ${!R.exam?'<p class="why" style="margin-top:10px">Deze vraag komt zo nog een keer terug, in andere woorden.</p>':''}</div>`;
    fb.insertAdjacentHTML('beforeend','<div style="margin-top:12px"><button class="btn" id="next">Volgende</button></div>');
    fb.querySelector('#next').onclick=()=>{R.i++;ask()};
    fb.scrollIntoView({behavior:smooth,block:'start'});
  }
  /* afronden van een vraag die niet meerkeuze is (open vraag of eigen vraagsoort van een vak) */
  function finishCustom(q,it,ok,html){
    if(!(q.id in R.first)){R.first[q.id]=ok;
      if(!ok&&!ST.wrong.includes(q.id))ST.wrong.push(q.id);
      if(ok&&R.was.has(q.id))ST.wrong=ST.wrong.filter(x=>x!==q.id);
      save();}
    if(ok||R.exam){R.cleared.add(q.id);hwMark(q.id)}
    else{const at=Math.min(R.i+4,R.queue.length);R.queue.splice(at,0,{id:q.id,retry:true,alt:retryAlt(q.id,it)})}
    const fb=el.querySelector('#fb');
    fb.innerHTML=(html||'')+(!ok&&!R.exam?'<p class="why" style="margin-top:10px">Deze komt zo nog een keer terug.</p>':'')+'<div style="margin-top:12px"><button class="btn" id="next">Volgende</button></div>';
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
    if(R.mode==='tvorm')return true;
    return !R.exam&&!['stap','opwarm','diag','fout'].includes(R.mode)&&(ST.ok||[]).includes(q.id)}
  function askToets(q,it,s){
    const g=eindGetal(q.a);
    el.innerHTML=`${kop(it,q,s,false)}
    <div class="card stack"><span class="tag">Toetsvorm</span><p>${g!=null?'Werk de vraag helemaal uit op papier, zoals op de toets: met formule, invullen, uitkomst en eenheid.':'Schrijf je antwoord op papier, zoals op de toets: in hele zinnen, met de reden erbij.'}${R.mode==='tvorm'?'':' Deze had je eerder al goed, dus nu zonder hulp.'}</p>
      ${g!=null?`<label class="sub" for="ta">Je eindantwoord (alleen het getal):</label><div class="row"><input id="ta" class="cell" style="width:160px;font-size:1.15rem" inputmode="decimal" autocomplete="off" aria-label="Eindantwoord"></div>`:''}
      <button class="btn" id="see">Klaar: laat de uitwerking zien</button><div id="kp"></div></div><div id="fb"></div>`;
    el.querySelectorAll('details.denk').forEach(d=>d.remove());
    el.querySelector('#stop').onclick=stopRonde;
    const ti=el.querySelector('#ta');if(ti)ti.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();el.querySelector('#see').click()}};
    el.querySelector('#see').onclick=()=>{
      const typed=ti?ti.value.trim():'',tn=eindGetal(typed),tl=lees(typed),goed=g==null?null:typed!==''&&(isFinite(tl)?zelfde(tl,g):tn!=null&&zelfde(tn,g));
      if(ti){ti.disabled=true;ti.classList.add(goed?'ok':'bad')}
      el.querySelector('#see').remove();
      const box=el.querySelector('#kp');
      box.innerHTML=`${g!=null?(goed?'<div class="fb ok"><div class="head">Je eindantwoord klopt.</div>Kijk nu of je uitwerking ook klopt.</div>':`<div class="fb bad"><div class="head">${typed?'Je eindantwoord klopt niet.':'Je hebt geen eindantwoord ingevuld.'}</div>Het antwoord is ${fmt(q.a)}. Zoek in de uitwerking waar het misging.</div>`):''}
        <div class="tip stack"><b>${g!=null?'De uitwerking: vink aan welke stappen jij ook goed op papier had':'Het antwoord: vink aan welke punten jij ook had'}</b>
        <ul class="kp">${q.st.map((x,i)=>`<li><label><input type="checkbox" data-i="${i}"><span><span class="why">${fmt(x.t)}</span>${x.s?`<br><b>${fmt(x.s)}</b>`:''}</span></label></li>`).join('')}</ul>
        ${g==null?`<div><b>Antwoord:</b> ${fmt(q.a)}</div>`:''}</div>
        <div class="row" id="kb"><button class="btn" id="okb">Ik had alles goed</button><button class="btn ghost" id="nob">Nog niet helemaal</button></div>`;
      const kb=[...box.querySelectorAll('input[type=checkbox]')],okb=box.querySelector('#okb');
      const upd=()=>{okb.disabled=goed===false||!kb.every(x=>x.checked)};kb.forEach(x=>x.onchange=upd);upd();
      const klaar=ok=>{box.querySelector('#kb').remove();kb.forEach(x=>x.disabled=true);if(!ok)ST.ok=(ST.ok||[]).filter(x=>x!==q.id);
        finishCustom(q,it,ok,ok?'<div class="fb ok"><div class="head">Goed!</div>Helemaal zelf uitgewerkt, zoals op de toets.</div>':'<div class="fb bad"><div class="head">Nog niet helemaal</div>Schrijf de stappen die je miste over in je schrift. Deze komt terug, eerst weer met hulp.</div>')};
      okb.onclick=()=>klaar(true);box.querySelector('#nob').onclick=()=>klaar(false);
      box.scrollIntoView({behavior:smooth,block:'start'})};
    scrollTo(0,0);
  }
  const tvIds=()=>V.Q.filter(q=>/^Toetsvoorb/.test(q.nr||'')).sort((a,b)=>String(a.nr).localeCompare(String(b.nr),'nl',{numeric:true})).map(q=>q.id);
  const tvParIds=p=>shuf(V.Q.filter(q=>secOf(q.o).par===p&&hasSt(q)&&!q.type&&q.t!=='open'&&!q.in).map(q=>q.id)).slice(0,5);
  function askCustom(q,it,s){
    el.innerHTML=`${kop(it,q,s,R.mode==='stap')}<div id="teken"></div><div id="fb"></div>`;
    el.querySelector('#stop').onclick=stopRonde;
    const api={smooth,finish:(ok,html)=>finishCustom(q,it,ok,html),scroll:()=>el.querySelector('#teken').scrollIntoView({behavior:smooth,block:'start'})};
    api.redraw=()=>V.custom[q.type](q,it,el.querySelector('#teken'),api);
    api.redraw();scrollTo(0,0);
  }
  function askOpen(q,it,s){
    el.innerHTML=`${kop(it,q,s,false)}
    <div class="card stack">${tvVak()?'<p class="sub" style="font-size:.9rem"><b>Leg uit = geef de reden.</b> Na “omdat” moet iets staan wat nog niet in de vraag stond.</p>':''}<label class="sub" for="ans">Schrijf je antwoord op, hier of in je schrift:</label>
      <textarea id="ans" class="ta" placeholder="Mijn antwoord…"></textarea>
      <button class="btn" id="see">Bekijk het modelantwoord</button><div id="kp"></div></div><div id="fb"></div>`;
    el.querySelector('#stop').onclick=stopRonde;
    el.querySelector('#see').onclick=()=>{el.querySelector('#see').remove();el.querySelector('#ans').readOnly=true;
      const box=el.querySelector('#kp');
      box.innerHTML=`<div class="tip stack"><b>Modelantwoord: vink aan wat jij ook had</b>
        <ul class="kp">${(tvVak()?[...q.k,'Mijn reden zegt iets nieuws: ik herhaal niet alleen de vraag']:q.k).map((k,i)=>`<li><label><input type="checkbox" data-i="${i}"><span>${fmt(k)}</span></label></li>`).join('')}</ul></div>
        ${q.vb?`<div class="card stack"><b>${q.vb.length>1?'Voorbeeldantwoorden (twee kanten, allebei goed)':'Voorbeeldantwoord'}</b>${q.vb.map(x=>`<p>${fmt(x)}</p>`).join('')}</div>`:''}
        <div class="row" id="kb"><button class="btn" id="okb">Ik had alles</button><button class="btn ghost" id="nob">Nog niet helemaal</button></div>`;
      const kb=[...box.querySelectorAll('input[type=checkbox]')],okb=box.querySelector('#okb');
      const upd=()=>{okb.disabled=!kb.every(x=>x.checked)};kb.forEach(x=>x.onchange=upd);upd();
      const klaar=ok=>{box.querySelector('#kb').remove();kb.forEach(x=>x.disabled=true);
        finishCustom(q,it,ok,ok?'<div class="fb ok"><div class="head">Goed!</div>Je had alle punten.</div>':'<div class="fb bad"><div class="head">Nog niet helemaal</div>Lees het modelantwoord goed door en onthoud de punten die je miste.</div>')};
      okb.onclick=()=>klaar(true);box.querySelector('#nob').onclick=()=>klaar(false);
      box.scrollIntoView({behavior:smooth,block:'start'})};
    scrollTo(0,0);
  }
  /* ---------- huiswerk uit het boek: precies de opgaven van die dag, stap voor stap ---------- */
  function hwMark(id){if(!R.hw)return;const l=ST.hw[R.hw]=ST.hw[R.hw]||[];if(!l.includes(id)){l.push(id);save()}}
  const nrNum=q=>{const m=String(q.nr||'').replace(/^(Opdracht|Opgave) /,'').match(/^(\d+)([a-z]?)(?![0-9])/);return m?[+m[1],m[2]]:null}; /* ook 'Opdracht 6a/b' */
  function hwIds(nrs,par){const want=nrs.map(Number);
    return V.Q.filter(q=>{const n=nrNum(q);return n&&want.includes(n[0])&&(!par||secOf(q.o).par===par)})
      .map((q,i)=>({q,i,n:nrNum(q)})).sort((a,b)=>a.n[0]-b.n[0]||(a.n[1]<b.n[1]?-1:a.n[1]>b.n[1]?1:a.i-b.i)).map(x=>x.q.id)}
  function hwHome(H){
    Oefen.cur=vid;
    const ids=hwIds(H.nrs,H.par),gedaan=(ST.hw[H.key]||[]).filter(id=>ids.includes(id)),rest=ids.filter(id=>!gedaan.includes(id));
    const ontbreekt=H.nrs.filter(n=>!ids.some(id=>nrNum(QM[id])[0]===+n));
    const W=V.reken===false?'opdracht':'opgave',Wc=W[0].toUpperCase()+W.slice(1),nl=q=>/^\d/.test(q.nr)?W+' '+q.nr:q.nr.charAt(0).toLowerCase()+q.nr.slice(1);
    const titel='Huiswerk: '+W+' '+H.nrs.join(', '),kies=tvVak()&&ids.some(id=>{const q=QM[id];return hasSt(q)&&!q.type&&!q.in&&q.t!=='open'}),vorm=kies&&ST.hwVorm==='tvorm'?'tvorm':'stap';
    el.innerHTML=`${top('Vandaag','Huiswerk')}
    <h2>${H.titel||'Je huiswerk'}</h2>
    <div class="card stack plan"><span class="tag">${Wc} ${H.nrs.join(', ')}</span>
      <p>${V.reken===false?'Je doet de opdrachten uit je werkboek één voor één. Bij een fout zie je waarom. Schrijf je antwoorden ook in je werkboek: dan heb je je huiswerk meteen af.':'Je kiest zelf hoe je het doet. <b>Stap voor stap:</b> bij elke stap kies je zelf, en bij een fout zie je waarom. <b>Zelf op papier:</b> je maakt de som eerst helemaal in je schrift, zoals op een toets, en kijkt daarna na met de uitwerking. Gaat een som dan mis, dan krijg je hem later nog eens stap voor stap. Je kunt per keer kiezen.'}</p>
      <div class="bar"><i style="width:${ids.length?Math.round(gedaan.length/ids.length*100):0}%"></i></div>
      <p class="sub" style="font-size:.9rem">${gedaan.length} van ${ids.length} vragen klaar${gedaan.length&&rest.length?'. Je gaat verder waar je was.':''}</p>
      ${ontbreekt.length?`<p class="sub" style="font-size:.9rem">${Wc} ${ontbreekt.join(', ')} staat nog niet in de app. Die maak je uit je boek.</p>`:''}</div>
    <div class="stack">${rest.length?(kies?[['stap','Stap voor stap, met hulp'],['tvorm','Zelf op papier, daarna nakijken']].sort((a,b)=>(b[0]===vorm)-(a[0]===vorm)).map(([m,t],i)=>`<button class="btn${i?' ghost':''}" data-hwm="${m}">${t}: ${gedaan.length?'verder met '+nl(QM[rest[0]]):'begin met '+nl(QM[rest[0]])}</button>`).join(''):`<button class="btn" data-hwm="stap">${gedaan.length?'Verder met '+nl(QM[rest[0]]):'Begin met '+nl(QM[rest[0]])}</button>`):'<div class="card"><b>Alles klaar!</b> Goed gedaan.</div>'}
      ${gedaan.length?'<button class="btn ghost" id="hwopn">Alles opnieuw, vanaf het begin</button>':''}
      <button class="btn ghost" id="hwvak">Naar alle onderdelen van ${V.naam}</button></div>`;
    el.querySelector('#back').onclick=()=>{done();Oefen.ctx.home()};
    el.querySelectorAll('[data-hwm]').forEach(b=>b.onclick=()=>{const m=b.dataset.hwm;if(kies){ST.hwVorm=m;save()}start(m,rest,titel+(m==='tvorm'?' · zelf op papier':''),null,null,H.key)});
    const op=el.querySelector('#hwopn');if(op)op.onclick=()=>{ST.hw[H.key]=[];save();start(vorm,ids,titel+(vorm==='tvorm'?' · zelf op papier':''),null,null,H.key)};
    el.querySelector('#hwvak').onclick=()=>{focusPar=H.par||null;focusMode=null;home()};
    Oefen._hw=H;scrollTo(0,0);
  }
  function end(){
    if(R.mode==='diag')return diagEnd();
    if(R.title==='Rekenregels van vandaag'&&Oefen.ctx.klaar)Oefen.ctx.klaar('rekenregels');
    if(R.mode==='opwarm'){if(Oefen.ctx.klaar)Oefen.ctx.klaar(R.key);
      const good=R.ids.filter(id=>R.first[id]).length;
      el.innerHTML=`<span class="tag">${R.title}</span><div class="card stack"><div class="score">${good} / ${R.ids.length}</div><p>${good===R.ids.length?'Zit er nog in. ':'Wat fout ging, komt later nog eens terug. '}Je bent opgewarmd: begin nu aan je huiswerk.</p></div>
      <div class="stack"><button class="btn" id="hm">Naar vandaag</button></div>`;
      el.querySelector('#hm').onclick=()=>{done();Oefen.ctx.home()};scrollTo(0,0);return}
    const tot=R.ids.length,good=R.ids.filter(id=>R.first[id]).length,pct=Math.round(good/tot*100),c=cijfer(good,tot);
    const key=R.mode==='toets'?'toets':R.mode==='fout'||R.mode==='ptoets'?null:R.sec;
    if(key&&(ST.best[key]==null||pct>ST.best[key]))ST.best[key]=pct;
    if(R.mode==='ptoets'){const o=ST.ptoets[R.par]||{best:0};ST.ptoets[R.par]={best:Math.max(o.best,c),laatst:c};rt(R.par).pt=vandaag();if(Oefen.ctx.klaar)Oefen.ctx.klaar('bij2-'+vid+'-'+R.par)}
    if(R.route){rt(R.route).vr=vandaag();routeCheck(R.route)}
    save();
    const wrong=R.ids.filter(id=>!R.first[id]);
    const msg=R.mode==='ptoets'?(c>=7?'Paragraaf gehaald! Op naar de volgende.':'Nog geen 7. Oefen je fouten en doe de paragraaftoets nog een keer.')
      :pct===100?'Alles in één keer goed!':pct>=80?'Heel goed gedaan!':pct>=55?'Goed bezig. Oefen je fouten nog even.':'Niet erg, zo leer je het. Oefen je fouten nog een keer.';
    el.innerHTML=`<span class="tag">${R.title}</span>
    <div class="card stack"><div class="score">${good} / ${tot}</div><p>in één keer goed. ${msg}</p>${R.exam?`<p>Cijfer: <b class="count">${f1(c)}</b></p>`:''}</div>
    ${wrong.length?`<h2>Deze had je fout</h2><div class="wl">${wrong.map(id=>{const q=QM[id];return `<div class="card"><span class="tag">${nrTag(q)}</span><div>${fmt(q.q)}</div><div class="res">→ ${fmt(q.a??(q.k||[]).join(' '))}</div></div>`}).join('')}</div>`:''}
    <div class="stack">${wrong.length?'<button class="btn" id="fo">Oefen alleen je fouten</button>':''}
      <button class="btn ${wrong.length?'ghost':''}" id="nw">${R.mode==='ptoets'?'Paragraaftoets opnieuw':'Nieuwe ronde'}</button>
      <button class="btn ghost" id="hm">${R.hw?'Terug naar je huiswerk':R.route||(focusMode==='ptoets'&&R.mode==='ptoets')?'Terug naar je stappen':'Terug naar '+V.naam}</button></div>`;
    const fo=el.querySelector('#fo');if(fo)fo.onclick=()=>start('fout',shuf(wrong),R.title+' · fouten',R.sec);
    el.querySelector('#nw').onclick=()=>R.mode==='ptoets'?ptoets(R.par):R.mode==='toets'?start('toets',toetsIds(),'Proeftoets'):R.title==='Korte ronde'?start('oefen',kortIds(),'Korte ronde'):R.title==='Rekenregels van vandaag'?start('oefen',dagIds(R.par),R.title,null,R.par):R.mode==='tvorm'&&R.par?start('tvorm',tvParIds(R.par),R.title,null,R.par):start(R.mode,R.hw?R.ids:shuf(R.ids),R.title,R.sec,null,R.hw);
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

  return {ctx:null,cur:null,
    vakHome(target,id,par,mode){el=target;load(id);focusPar=par||null;focusMode=mode||null;toonAlles=false;home()},
    huiswerk(target,id,H){el=target;load(id);focusPar=H.par||null;focusMode=null;toonAlles=false;hwHome(H)},
    hwStand(id,key){const v=VAKDATA[id];if(!v)return null;const st=Oefen.ctx.state(id);return (st.hw&&st.hw[key]||[]).length},
    sprint,
    /* vanuit het dagplan: opwarmvragen voor een vak, en de rekenregels van vandaag (tijd telt niet mee voor het vak zelf) */
    warmPool,
    opwarm(target,id,par,key){el=target;load(id);Oefen.cur='opwarm';start('opwarm',warmIds(id,par),'Opwarmen: '+V.naam,null,par);R.key=key;R.van=true},
    rekenregels(target){el=target;load('wi');Oefen.cur='opwarm';start('oefen',dagIds(V.basis.par),'Rekenregels van vandaag',null,V.basis.par);R.van=true},
    load(id){load(id);return ST},
    pars(id){const v=VAKDATA[id];return v.leer||[...new Set(v.SECS.filter(s=>s.par!=='mix').map(s=>s.par))]},
    stop(){Oefen.cur=null}};
})();
