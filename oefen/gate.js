/* Alleen oefenen wat al aan de beurt was (afspraak met de ouder, 9 nov 2026).
   Geldt voor vakken met V.gate = true. Een vraag is 'behandeld' als hij in een huiswerk van dat vak zit
   dat af moet uiterlijk morgen, of dat ze al geopend of begonnen heeft (ST.hw, of het huiswerk dat nu open staat).
   Wat in een huiswerk zit: de opgaven (opg + par), het leerwerk (leer: o of ids) en beh (alleen voor deze regel):
   een lijst met onderdeel-id's, paragraaf-id's of vraag-id's, voor stof die niet als opgave of leerwerk in de app staat
   (bijvoorbeeld 'tekst t/m regel 12' of 'woorden van les 9').
   Vrij oefenen (korte ronde, paragraaftoets, proeftoets, door elkaar, opwarmen, sprint, kaartjes) gebruikt alleen
   behandelde vragen. Op de huiswerkpagina zelf staat altijd alles wat dat huiswerk opgeeft.
   Vakken zonder gate: alles is behandeld. */
window.Gate=(()=>{
  const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const morgen=()=>{const d=new Date();d.setDate(d.getDate()+1);return iso(d)};
  const nrNum=q=>{const m=String(q.nr||'').replace(/^(Opdracht|Opgave) /,'').match(/^(\d+)([a-z]?)(?![0-9])/);return m?+m[1]:null};
  const aan=vid=>!!(window.VAKDATA&&VAKDATA[vid]&&VAKDATA[vid].gate);
  const hws=vid=>(window.HUISWERK||[]).filter(h=>h.app===vid);
  /* alle vraag-id's die een huiswerk opgeeft */
  /* onthouden: huiswerk en vakdata veranderen niet terwijl de app open is, en dit werd honderden keren per scherm uitgerekend (traag) */
  const IDS=new Map(),VIEW=new Map();
  function idsVan(V,h){const k=V.id+'|'+h.id;if(!IDS.has(k))IDS.set(k,idsVan0(V,h));return IDS.get(k)}
  function idsVan0(V,h){
    const sec=Object.fromEntries(V.SECS.map(s=>[s.id,s.par])),uit=new Set();
    if(h.opg&&h.opg.length){const want=h.opg.map(Number);V.Q.forEach(q=>{const n=nrNum(q);if(n!=null&&want.includes(n)&&(!h.par||sec[q.o]===h.par))uit.add(q.id)})}
    (h.leer||[]).forEach(L=>{if(L.ids)L.ids.forEach(id=>uit.add(id));else V.Q.forEach(q=>{if(q.o===L.o)uit.add(q.id)})});
    (h.beh||[]).forEach(b=>V.Q.forEach(q=>{if(q.id===b||q.o===b||sec[q.o]===b)uit.add(q.id)}));
    return uit}
  /* extra = id van het huiswerk dat nu open staat */
  function beh(vid,extra){
    const V=window.VAKDATA&&VAKDATA[vid];if(!V)return new Set();
    if(!V.gate)return new Set(V.Q.map(q=>q.id));
    const st=(window.Oefen&&Oefen.ctx&&Oefen.ctx.state)?Oefen.ctx.state(vid):{},hw=st.hw||{},m=morgen(),uit=new Set();
    hws(vid).forEach(h=>{if(h.d<=m||h.id===extra||(hw[h.id]&&hw[h.id].length))idsVan(V,h).forEach(id=>uit.add(id))});
    return uit}
  /* wanneer komt een onderdeel aan de beurt? eerste huiswerk dat er iets uit opgeeft */
  function komt(vid,secId){
    const V=VAKDATA[vid];let best=null;
    hws(vid).forEach(h=>{const ids=idsVan(V,h);if(V.Q.some(q=>q.o===secId&&ids.has(q.id))&&(!best||h.d<best))best=h.d});
    return best}
  /* Practica (afspraak 15 nov 2026): een vraag met een practicumcode in nr (H5PB, H5P3, H5P12 …) komt pas in vrij oefenen
     als een huiswerk van dat vak de code noemt (in t of wat) en uiterlijk morgen af moet, of als ze dat huiswerk al opende.
     Alleen voor vakken met pracSlot:true. pracGedaan:['H5PB'] in het vak zet een practicum open dat in de les is gedaan zonder huiswerk. */
  const PRAC=/\bH\d+P[0-9A-Z]+\b/;
  const pracCode=q=>{const m=String(q.nr||'').match(PRAC);return m?m[0]:null};
  const hwsVak=V=>(window.HUISWERK||[]).filter(h=>h.app===V.id||String(h.vak||'').toLowerCase()===String(V.naam||'').toLowerCase());
  const noemt=(h,c)=>new RegExp('\\b'+c+'\\b').test([h.t||'',...(h.wat||[])].join(' '));
  function pracOpen(V,c,extra){if((V.pracGedaan||[]).includes(c))return true;
    const hw=((window.Oefen&&Oefen.ctx&&Oefen.ctx.state)?Oefen.ctx.state(V.id):{}).hw||{},m=morgen();
    return hwsVak(V).some(h=>noemt(h,c)&&(h.d<=m||h.id===extra||(hw[h.id]&&hw[h.id].length)))}
  function pracKomt(V,c){const ds=hwsVak(V).filter(h=>noemt(h,c)).map(h=>h.d).sort();return ds[0]||null}
  /* het vak zoals het vrij oefenen het mag zien */
  function view(vid,extra){
    const V=VAKDATA[vid];if(!V||!V.gate&&!V.pracSlot)return V;
    const hw=((window.Oefen&&Oefen.ctx&&Oefen.ctx.state)?Oefen.ctx.state(vid):{}).hw||{};
    const k=[vid,extra||'',morgen(),...hws(vid).filter(h=>hw[h.id]&&hw[h.id].length).map(h=>h.id)].join('|');
    if(!VIEW.has(k)){if(VIEW.size>50)VIEW.clear();VIEW.set(k,view0(vid,extra))}
    return VIEW.get(k)}
  function view0(vid,extra){
    const V=VAKDATA[vid];
    const b=V.gate?beh(vid,extra):new Set(V.Q.map(q=>q.id)),dc=new Map();
    if(V.pracSlot)V.Q.forEach(q=>{const c=pracCode(q);if(!c)return;if(!dc.has(c))dc.set(c,pracOpen(V,c,extra));if(!dc.get(c))b.delete(q.id)});
    const Q=V.Q.filter(q=>b.has(q.id)),inQ=new Set(Q.map(q=>q.o)),heeftQ=new Set(V.Q.map(q=>q.o));
    /* zonder gate blijven onderdelen zonder eigen vragen (zoals 'door elkaar') gewoon staan */
    const SECS=V.SECS.filter(s=>inQ.has(s.id)||!V.gate&&!heeftQ.has(s.id)),pars=new Set(SECS.map(s=>s.par));
    const dicht=V.SECS.filter(s=>!SECS.includes(s)).map(s=>{let d=V.gate?komt(vid,s.id):null;
      if(!d&&V.pracSlot){const cs=[...new Set(V.Q.filter(q=>q.o===s.id).map(pracCode).filter(Boolean))];d=cs.map(c=>pracKomt(V,c)).filter(Boolean).sort()[0]||null}
      return {s,d}});
    return Object.assign({},V,{Q,SECS,BEG:(V.BEG||[]).filter(x=>pars.has(x[2])),leer:V.leer?V.leer.filter(p=>pars.has(p)):V.leer,dicht})}
  return {aan,beh,view,komt,morgen}
})();
