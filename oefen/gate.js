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
  function idsVan(V,h){
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
  /* het vak zoals het vrij oefenen het mag zien */
  function view(vid,extra){
    const V=VAKDATA[vid];if(!V||!V.gate)return V;
    const b=beh(vid,extra),Q=V.Q.filter(q=>b.has(q.id)),inQ=new Set(Q.map(q=>q.o));
    const SECS=V.SECS.filter(s=>inQ.has(s.id)),pars=new Set(SECS.map(s=>s.par));
    const dicht=V.SECS.filter(s=>!inQ.has(s.id)).map(s=>({s,d:komt(vid,s.id)}));
    return Object.assign({},V,{Q,SECS,BEG:(V.BEG||[]).filter(x=>pars.has(x[2])),leer:V.leer?V.leer.filter(p=>pars.has(p)):V.leer,dicht})}
  return {aan,beh,view,komt,morgen}
})();
