/* ============================================================
   Oefentoets op papier (afspraak met de ouder, 28 nov 2026).
   De ouder print de dag voor de toets een oefentoets uit de app, die ze zonder boek en zonder app op papier maakt.
   Ook bruikbaar om haar te overhoren: de vragen staan bovenaan, de antwoorden op een aparte bladzijde.
   - Vragen uit de toetsstof (vinkjes in Cijfers), eerst haar foute vragen (hooguit 6), dan uit elk onderdeel minstens één.
   - Zoals op de toets: zelf opschrijven. Open versies (q.open) en open vragen met kernpunten; meerkeuze alleen waar de keuzes bij de
     vraag horen (mc:1, plaatjes, ja/nee). Sommen (wi, na) met de uitwerking bij de antwoorden.
   - Eigen vraagsoorten (kaart, rijtjes bouwen, zinnen bouwen, tekenen) en vakjes (tvIn) blijven in de app: niet op papier.
   - Wiskunde en natuurkunde 12 vragen (uitwerken kost tijd), andere vakken 20.
   ============================================================ */
window.PrintToets=(()=>{
  const esc=x=>String(x??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
  const F=s=>typeof fmt==='function'?fmt(s):esc(s);
  const svg=x=>/<svg/i.test(String(x??''));
  const fTxt=f=>Array.isArray(f)?f[0]:f;
  const REKEN={wi:1,na:1};
  const lijst=k=>Array.isArray(k)&&k.length?`<ul class="pv-k">${k.map(x=>`<li>${F(x)}</li>`).join('')}</ul>`:'';
  /* hoe een vraag op papier komt; null = alleen in de app */
  function vorm(q){
    if(q.type||q.tvIn||q.in)return null;
    if(/\(plaatje\)/.test(q.q||''))return null;
    if(q.open&&q.open.k)return {q:q.open.q||q.q,soort:'open',ant:lijst(q.open.k)};
    if(q.t==='open')return {q:q.q,soort:'open',ant:lijst(q.k)+(q.vb&&q.vb[0]?`<p class="pv-vb"><i>Voorbeeld:</i> ${F(q.vb[0])}</p>`:'')};
    const st=q.st&&q.st.length?`<ol class="pv-st">${q.st.map(x=>x.s?`<li>${F(x.s)}</li>`:'').join('')}</ol>`:'';
    const f=Array.isArray(q.f)?q.f.map(fTxt):[];
    const keuze=q.mc||svg(q.a)||f.some(svg)||f.length===1||/^(kies|welk antwoord|welke uitspraak|welke van)/i.test(q.tv?'':(q.q||''));
    if(keuze&&f.length)return {q:q.q,soort:'mc',opts:shuf([q.a,...f]),ant:F(q.a)+st};
    const tekst=q.tv||q.q;
    return {q:tekst,soort:st?'reken':String(q.a||'').replace(/<[^>]+>/g,'').length>45?'open':'kort',ant:F(q.a)+st};
  }
  function kies(vid,t,st){const V=VAKDATA[vid];if(!V)return [];
    const al=Oefen.allePars(vid),ps=t&&t.stof&&t.stof.some(p=>al.includes(p))?al.filter(p=>t.stof.includes(p)):al;
    const S=V.SECS.filter(s=>s.par!=='mix'&&ps.includes(s.par)&&!(V.basis&&s.par===V.basis.par)),si=new Map(S.map((s,i)=>[s.id,i]));
    const pool=V.Q.filter(q=>si.has(q.o)).map(q=>({q,v:vorm(q)})).filter(x=>x.v);
    const N=REKEN[vid]?12:20,uit=[],neem=x=>{if(x&&!uit.includes(x)&&uit.length<N)uit.push(x)};
    const fout=new Set(st&&st.wrong||[]);
    shuf(pool.filter(x=>fout.has(x.q.id))).slice(0,6).forEach(neem);
    /* uit elk onderdeel minstens één, met voorkeur voor een open vraag (op de toets de meeste punten) */
    S.forEach(s=>{if(uit.some(x=>x.q.o===s.id))return;const l=shuf(pool.filter(x=>x.q.o===s.id&&!uit.includes(x)));neem(l.find(x=>x.v.soort==='open')||l[0])});
    shuf(pool.filter(x=>!uit.includes(x))).forEach(neem);
    return uit.sort((a,b)=>si.get(a.q.o)-si.get(b.q.o)).map(x=>Object.assign({},x,{fout:fout.has(x.q.id),par:(secOf(V,x.q.o)||{}).par}))}
  const secOf=(V,id)=>V.SECS.find(s=>s.id===id);
  const regels=n=>`<div class="pv-l">${'<span></span>'.repeat(n)}</div>`;
  const LET='abcdef';
  function html(vid,t,lijstQ,o){const V=VAKDATA[vid],PN=V.PN||{},min=Math.max(30,Math.min(60,Math.round(lijstQ.reduce((a,x)=>a+({open:3,reken:5,kort:1.5,mc:1}[x.v.soort]||2),0)/5)*5));
    const vr=lijstQ.map((x,i)=>`<li class="pv-v"><div class="pv-q">${F(x.v.q)}</div>${x.v.soort==='mc'?`<ol class="pv-o">${x.v.opts.map((op,j)=>`<li><b>${LET[j]}</b> ${F(op)}</li>`).join('')}</ol>`:''}${regels({open:4,reken:6,kort:1,mc:0}[x.v.soort]??2)}</li>`).join('');
    const an=lijstQ.map((x,i)=>`<li><div class="pv-a">${x.v.ant}</div><small class="pv-p">${esc(PN[x.par]||x.par||'')}${x.fout?' · stond bij je foute vragen':''}</small></li>`).join('');
    return `<div class="pv-bar"><b>Oefentoets ${esc(V.naam)}</b><span class="pv-knop"><button class="btn" id="pv-print">Printen</button><button class="btn ghost" id="pv-nieuw">Andere vragen</button><button class="btn ghost" id="pv-dicht">Sluiten</button></span>
      <small>Print hem, of gebruik hem om haar te overhoren: vragen bovenaan, antwoorden op de laatste bladzijde. Elke keer andere vragen; haar foute vragen komen eerst.</small></div>
    <div class="pv-blad">
      <h1>Oefentoets ${esc(V.naam)}</h1>
      <p class="pv-sub">${esc(o.toets||'')}${o.datum?' · toets op '+esc(o.datum):''} · ${lijstQ.length} vragen · ongeveer ${min} minuten</p>
      <p class="pv-naam">Naam: ______________________ &nbsp; Datum: ____________</p>
      <p class="pv-uitleg">Zonder boek en zonder app, net als op de echte toets. Schrijf alles op${REKEN[vid]?', ook je tussenstappen en de eenheid':', in hele zinnen als het om uitleg gaat'}. Weet je iets niet? Sla het over en ga door; aan het eind kijk je het na.</p>
      <ol class="pv-lijst">${vr}</ol>
      <div class="pv-ant"><h2>Antwoorden</h2>
        <p class="pv-uitleg">Kijk na met een pen in een andere kleur. Bij een uitlegvraag: de kernpunten moeten erin staan, in je eigen woorden. Onder elk antwoord staat het onderdeel: wat fout ging, leer je daarna opnieuw in de app.</p>
        <ol class="pv-lijst">${an}</ol>
        <p class="pv-score">Goed: ______ van ${lijstQ.length}</p></div>
    </div>`}
  function toon(vid,t,st,o){const L=kies(vid,t,st);if(!L.length){alert('Voor dit vak zijn er (nog) geen vragen die op papier kunnen.');return}
    let el=document.getElementById('pv');if(!el){el=document.createElement('div');el.id='pv';document.body.appendChild(el)}
    el.innerHTML=html(vid,t,L,o||{});document.body.classList.add('pv-aan');el.scrollTop=0;scrollTo(0,0);
    el.querySelector('#pv-print').onclick=()=>window.print();
    el.querySelector('#pv-nieuw').onclick=()=>toon(vid,t,st,o);
    el.querySelector('#pv-dicht').onclick=()=>{document.body.classList.remove('pv-aan');el.remove()}}
  return {toon,kies,vorm};
})();
