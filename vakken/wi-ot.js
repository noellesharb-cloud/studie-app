/* ============================================================
   Wiskunde: OEFENTOETS ZOALS BIJ VAN NECK (28 nov 2026)
   Aanleiding: de oefentoets H3 (TW2) van de docent en zijn uitleg bij opgave Z1 (Teams, 25 nov).
   Dezelfde soorten opgaven, met steeds andere getallen (geen kopie: de repo is openbaar):
   - O1 Tabellen aanvullen: recht en omgekeerd evenredig, elk leeg vakje apart nagekeken, ook terugrekenen van y naar x.
   - O2 Parabool in topvorm: top, berg of dal, hoe vaak snijdt hij de lijn y = c (vanuit de top), omschrijven naar de algemene vorm
        (ook met a = −⅓), snijpunten met de x-as via (x − p)² = getal.
   - O3 Parabool in de algemene vorm: top met −b : 2a, snijpunt y-as, punt (r, q) invullen, ander punt op dezelfde hoogte.
   - O4 Hyperbool y = c + k : (mx + n) met een breuk als m: VA, HA, punten rechts van de VA.
   - O5 Wortel y = q ± √(t − x): randpunt, roosterpunten, welke kant op.
   - O6 Verhaalsom met schets (brug, tunnel): de tip van de docent: MAAK EEN GROTE SCHETS en zet alle gegevens erin.
   Elke vraag wordt opnieuw gemaakt (nieuwe getallen) bij elke paragraaftoets en proeftoets (V.vers, aangeroepen door de engine),
   bij het printen van een oefentoets, en bij elke nieuwe ronde na een fout (v). Zo is een herkansing nooit precies dezelfde toets.
   Tekenen kan niet in de app: dat doet ze op papier (geprinte oefentoets).
   Laadt na vakken/wi.js en wi-tabel.js. Par 'ot' staat achteraan in V.leer.
   ============================================================ */
(()=>{
const V=window.VAKDATA&&VAKDATA.wi;if(!V)return;
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[Math.random()*a.length|0];
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const S=(t,s)=>({t,s});
const nf=x=>String(+(+x).toFixed(5)).replace('.',',');
const P=x=>x<0?`(${nf(x)})`:nf(x);
const pl=b=>b===0?'':b<0?` - ${nf(-b)}`:` + ${nf(b)}`;
const dec=(x,n)=>Math.abs(x*10**n-Math.round(x*10**n))<1e-7;
/* breuk als tekst: −⅓ → -[[1|3]] */
const fr=a=>{if(dec(a,0))return nf(Math.round(a));for(const d of [2,3,4,5,6,8,9,10,12])if(dec(a*d,0)){const n=Math.round(Math.abs(a)*d);return `${a<0?'-':''}[[${n}|${d}]]`}return nf(a)};
const plf=b=>b===0?'':b<0?` - ${fr(-b)}`:` + ${fr(b)}`;
const co=(a,v)=>a===1?v:a===-1?'-'+v:fr(a)+v;
const MIN=x=>x<0?'−'+nf(-x):nf(x);
const xp=p=>p===0?'x':`(x${pl(-p)})`;   /* (x − p) of x */
const VN='Zoals de oefentoets van Van Neck';
const SCHETS='Maak eerst een GROTE schets en zet alle gegevens erin. Vaak zie je dan extra informatie die je met een simpele som kunt afleiden. Pas daarna ga je rekenen.';

/* ---------- onderdelen ---------- */
const SECS=[
 {id:'ot1',par:'ot',nr:'O1',name:'Tabellen aanvullen',c:'--c4',sub:'Recht en omgekeerd evenredig, elk vakje met een berekening',
  rules:[
   ['Recht evenredig: y : x is steeds hetzelfde getal','Zoek eerst een kolom waar x én y staan. Reken uit hoeveel y bij 1 x hoort','Lege y: x keer dat getal. Lege x: y gedeeld door dat getal.'],
   ['Omgekeerd evenredig: x · y is steeds hetzelfde getal','$0,3 · 42 = 12,6$ en $1,8 · 7 = 12,6$','Lege y: dat getal gedeeld door x. Lege x: dat getal gedeeld door y.'],
   ['Laat bij elk vakje de berekening zien','Op de toets krijg je punten voor de berekening, niet alleen voor het getal','']]},
 {id:'ot2',par:'ot',nr:'O2',name:'Parabool in de topvorm',c:'--c3',sub:'Top, berg of dal, snijpunten, omschrijven',
  rules:[
   ['Topvorm $y = a(x - p)^2 + q$: de top is $(p, q)$','$y = -[[1|3]](x + 1)^2 + 3$: top $(-1, 3)$','Let op het teken: bij $(x + 1)$ hoort $p = -1$.'],
   ['$a < 0$: bergparabool. $a > 0$: dalparabool','Leg uit = noem a en zeg of die groter of kleiner dan 0 is',''],
   ['Hoe vaak snijdt hij de lijn $y = c$? Kijk naar de top','Berg met top op hoogte 3, lijn $y = -200$ eronder: 2 keer. Lijn er precies door de top: 1 keer. Lijn erboven: 0 keer','Bij een dal andersom.'],
   ['Naar de algemene vorm: eerst het kwadraat uitwerken, dan keer a, dan + q','$-[[1|3]](x + 1)^2 + 3 = -[[1|3]](x^2 + 2x + 1) + 3 = -[[1|3]]x^2 - [[2|3]]x - [[1|3]] + 3$','Elke term binnen de haakjes keer a, ook het losse getal.'],
   ['Snijpunten met de x-as: y = 0, dan het kwadraat alleen zetten','$-[[1|3]](x + 1)^2 + 3 = 0$ → $(x + 1)^2 = 9$ → $x + 1 = 3$ OF $x + 1 = -3$','Vergeet de tweede oplossing niet: ook $(-3)^2 = 9$.']]},
 {id:'ot3',par:'ot',nr:'O3',name:'Parabool in de algemene vorm',c:'--c2',sub:'Top met −b : 2a, punten invullen, symmetrie',
  rules:[
   ['Top: $x_{top} = [[-b|2a]]$, daarna $x_{top}$ invullen voor $y_{top}$','$y = 2x^2 + 4x - 30$: $x_{top} = [[-4|2 · 2]] = -1$, $y_{top} = 2 - 4 - 30 = -32$',''],
   ['Snijpunt met de y-as: vul $x = 0$ in','Alleen het losse getal blijft over',''],
   ['Ligt $(r, q)$ op de parabool? Vul $x = r$ in, dan is y de q','Met haakjes om een negatieve x: $2 · (-4)^2$',''],
   ['Zelfde hoogte: spiegel in de symmetrieas $x = x_{top}$','Van $x = -4$ naar de as $x = -1$ is 3. Aan de andere kant: $-1 + 3 = 2$. Dus $(2, -14)$','Het andere punt heeft dezelfde y.']]},
 {id:'ot4',par:'ot',nr:'O4',name:'Hyperbool met een breuk in de noemer',c:'--c5',sub:'VA, HA en punten berekenen',
  rules:[
   ['VA: de noemer is 0 (delen door nul is flauwekul)','$[[1|3]]x + 2 = 0$ → $[[1|3]]x = -2$ → $x = -2 · 3 = -6$','Delen door $[[1|3]]$ is keer 3.'],
   ['HA: bij een heel grote x wordt de breuk bijna 0','$y = -2 + [[-4|[[1|3]]x + 2]]$: de breuk wordt bijna 0, dus $y = -2$','Laat het zien: vul bijvoorbeeld $x = 100 000$ in.'],
   ['Punten rechts van de VA: kies x groter dan de VA','Handig: kies x zo dat de noemer een deler van de teller is. Dan krijg je hele getallen','']]},
 {id:'ot5',par:'ot',nr:'O5',name:'Wortelgrafiek',c:'--c6',sub:'Randpunt, roosterpunten, welke kant op',
  rules:[
   ['Randpunt: onder de wortel 0','$y = -1 - √{4 - x}$: $4 - x = 0$, $x = 4$, $y = -1 - 0 = -1$. Randpunt $(4, -1)$',''],
   ['Welke kant op? Probeer een x: komt er een negatief getal onder de wortel, dan kan het niet','$√{4 - x}$ met $x = 10$: $√{-6}$ bestaat niet. De grafiek gaat naar links',''],
   ['Roosterpunten: kies x zo dat onder de wortel 1, 4 of 9 staat','$4 - x = 4$ bij $x = 0$: $y = -1 - 2 = -3$','Eerst de wortel, dan het minteken ervoor.']]},
 {id:'ot6',par:'ot',nr:'O6',name:'Verhaalsom met schets',c:'--c1',sub:'Tip van je docent: maak eerst een grote schets',
  rules:[
   ['MAAK EEN GROTE SCHETS en zet alle gegevens erin','Bij wiskunde én bij natuurkunde','Vaak zie je dan extra informatie die je met een simpele som kunt afleiden.'],
   ['Bij $x = 0$ blijft alleen het losse getal over','Bij $h = -0,002x^2 + b$ is b de hoogte van de top, in het midden',''],
   ['Een boog die op de grond begint: daar is $h = 0$','Vul de x van dat punt in en los b op','Het midden ligt bij $x = 0$, dus de rand bij de helft van de breedte.'],
   ['Waar komt de boog op een bepaalde hoogte? Stel de formule gelijk aan die hoogte','$-0,002x^2 + 80 = 30$ → $x^2 = 25 000$ → $x ≈ ±158,1$','De lengte is dan twee keer zo groot.']]}
];

const SNAP={
 ot1:[['Hoe zie ik of het recht of omgekeerd evenredig is?','Recht: wordt x 2 keer zo groot, dan wordt y ook 2 keer zo groot (y : x is steeds hetzelfde). Omgekeerd: wordt x 2 keer zo groot, dan wordt y 2 keer zo klein (x · y is steeds hetzelfde). In de opgave staat meestal welke het is.']],
 ot6:[['Waarom zo\'n grote schets?','In een kleine schets passen de getallen niet en zie je niet welke afstanden bij elkaar horen. Zet het midden op $x = 0$, de randen op $x = -L$ en $x = L$, en schrijf elke hoogte en afstand erbij. Vaak zie je dan een getal dat je met een simpele min-som vindt (zoals de hoogte van het wegdek: top min de afstand eronder).']]
};

/* ---------- O1 tabellen ---------- */
const tabHtml=(lx,ly,xs,ys)=>`<div class="tw"><table class="tb"><tr><th>${lx}</th>${xs.map(v=>`<td>${typeof v==='number'?MIN(v):v}</td>`).join('')}</tr><tr><th>${ly}</th>${ys.map(v=>`<td>${typeof v==='number'?MIN(v):v}</td>`).join('')}</tr></table></div>`;
/* per context passende getallen: [x, y, titel, mogelijke y per 1 x, stapgrootte van x] */
const CR=[['Kilometer','Liters','Benzineverbruik',[0.05,0.06,0.075,0.08,0.1,0.125],[10,20,30,40,60]],['Aantal','Prijs (€)','Schriften kopen',[0.75,1.25,1.5,2.5,3,4,12,15],[2,4,5,6]],
 ['Minuten','Liters water','Een kraan vult een bad',[4,5,6,7.5,8,12,15],[2,4,5,6]],['Gram','Kcal','Voedingswaarde',[0.4,0.5,0.75,1.2,2.5,3.5,4],[10,20,25,50]],['Uren','Kilometer','Een fietstocht',[12,15,16,18,20,24],[1,2]]];
/* [x, y, titel, mogelijke x · y, mogelijke x] */
const CO=[['Inhoud (cm³)','Druk (bar)','Cilinderdruk in een motor',[6,7.2,9.6,12,12.6,18,24],[0.2,0.25,0.3,0.4,0.5,0.6,0.75,0.8,1,1.2,1.5,1.6,1.8,2,2.4,2.5,3,4]],
 ['Aantal schilders','Dagen','Een huis schilderen',[12,24,36,48,60,72],[1,2,3,4,5,6,8,9,10,12]],
 ['Snelheid (km/h)','Tijd (h)','Steeds dezelfde rit',[60,120,180,240,360],[10,12,15,20,24,30,40,45,48,60,72,80,90,120]],
 ['Aantal personen','Liter per persoon','Een vat limonade verdelen',[12,18,24,30,36],[2,3,4,5,6,8,10,12,15,20,24]]];
function TAB(om){
 for(let t=0;t<400;t++){let xs,ys,k,r;
  const C=pick(om?CO:CR);
  if(!om){r=pick(C[3]);const s=pick(C[4]);
   xs=shuf([1,1.5,2,2.5,3,4,5,6,8,10]).slice(0,5).map(k=>s*k).sort((a,b)=>a-b);ys=xs.map(x=>+(x*r).toFixed(6))}
  else{k=pick(C[3]);const cand=C[4].filter(x=>dec(k/x,2));
   if(cand.length<5)continue;xs=shuf(cand).slice(0,5).sort((a,b)=>a-b);ys=xs.map(x=>+(k/x).toFixed(6))}
  if(!xs.every(x=>dec(x,2))||!ys.every(y=>dec(y,2))||new Set(ys).size<5)continue;
  const [lx,ly,titel]=C,vol=R(0,4),leeg=xs.map((_,i)=>i===vol?null:pick(['x','y']));
  if(!leeg.includes('x')){const i=pick(leeg.map((l,j)=>l?j:-1).filter(j=>j>=0));leeg[i]='x'}
  const x0=xs[vol],y0=ys[vol],kk=om?+(x0*y0).toFixed(6):null,rr=om?null:+(y0/x0).toFixed(6);
  const showX=xs.map((x,i)=>leeg[i]==='x'?'…':x),showY=ys.map((y,i)=>leeg[i]==='y'?'…':y);
  const ins=[],st=[S(om?'Omgekeerd evenredig: x · y is steeds hetzelfde.':'Recht evenredig: reken eerst uit hoeveel y bij 1 x hoort.',om?`$${nf(x0)} · ${nf(y0)} = ${nf(kk)}$`:`$${nf(y0)} : ${nf(x0)} = ${nf(rr)}$`)];
  xs.forEach((x,i)=>{if(!leeg[i])return;const y=ys[i];
   if(leeg[i]==='y'){const fout=om?+(y0*x/x0).toFixed(4):+(x0*y0/x).toFixed(4);
    ins.push({lab:`${ly} bij ${nf(x)}:`,v:y,fx:fout!==y?[[fout,om?'Je rekende alsof het recht evenredig is. Bij omgekeerd evenredig: x · y is steeds hetzelfde, dus y = '+nf(kk)+' : x.':'Je rekende alsof het omgekeerd evenredig is. Bij recht evenredig wordt y groter als x groter wordt.']]:[]});
    st.push(S(`${ly} bij ${nf(x)}`,om?`$${nf(kk)} : ${nf(x)} = ${nf(y)}$`:`$${nf(x)} · ${nf(rr)} = ${nf(y)}$`))}
   else{const fout=om?+(x0*y/y0).toFixed(4):+(x0*y0/y).toFixed(4);
    ins.push({lab:`${lx} bij ${nf(y)}:`,v:x,fx:fout!==x?[[fout,om?'Je rekende alsof het recht evenredig is. Hier is x · y steeds '+nf(kk)+', dus x = '+nf(kk)+' : y.':'Je rekende alsof het omgekeerd evenredig is.']]:[]});
    st.push(S(`${lx} bij ${nf(y)}`,om?`$${nf(kk)} : ${nf(y)} = ${nf(x)}$`:`$${nf(y)} : ${nf(rr)} = ${nf(x)}$`))}});
  return {q:`<i>${titel}</i>. In deze tabel is het verband <b>${om?'omgekeerd evenredig':'recht evenredig'}</b>. Neem de tabel over en vul aan. Laat bij elk ingevuld vakje de berekening zien.${tabHtml(lx,ly,showX,showY)}`,
   denk:om?'Zoek de kolom waar x én y staan. Vermenigvuldig: dat getal is overal hetzelfde.':'Zoek de kolom waar x én y staan. Reken uit hoeveel y bij 1 x hoort.',
   st,a:tabHtml(lx,ly,xs,ys),in:ins}}
 return null}

/* ---------- O2 topvorm ---------- */
const AT=[[-1/3,[3,6]],[1/3,[3,6]],[-1/2,[2,4]],[1/2,[2,4]],[-2,[1,2,3]],[2,[1,2,3]],[-1,[1,2,3,4,5]],[1,[1,2,3,4]],[-1/4,[2,4]],[3,[1,2]]];
function topv(){const [a,ds]=pick(AT),p=R(-5,5),d=pick(ds),q=+(-a*d*d).toFixed(6);return {a,p,q,d,tex:`y = ${co(a,xp(p)+'^2')}${pl(q)}`}}
const G2={
 top:()=>{const g=topv(),[a,ds]=pick(AT),q=R(-9,9),p=R(-6,6),tex=`y = ${co(a,xp(p)+'^2')}${pl(q)}`;
  return {q:`Gegeven is de formule $g: ${tex}$. Geef de coördinaten van de top.`,denk:'In de topvorm lees je de top af. Let op het teken tussen de haakjes.',
   st:[S('Topvorm $a(x - p)^2 + q$: top $(p, q)$.',p?`$x${pl(-p)} = 0$ bij $x = ${p}$`:'Er staat alleen $x^2$: $p = 0$'),S('Top.',`$(${p}, ${q})$`)],
   a:`$(${p}, ${q})$`,in:[{lab:'x',v:p,fx:p?[[-p,`$x${pl(-p)} = 0$ bij $x = ${p}$, niet $${-p}$. Het teken draait om.`]]:[]},{lab:'y',v:q}]}},
 berg:()=>{const [a]=pick(AT),q=R(-9,9),p=R(-6,6),tex=`y = ${co(a,xp(p)+'^2')}${pl(q)}`,berg=a<0;
  return {q:`Gegeven is $g: ${tex}$. Is het een berg- of een dalparabool? Leg je antwoord uit.`,mc:1,
   a:berg?'Bergparabool, want $a = '+fr(a)+'$ en dat is kleiner dan 0':'Dalparabool, want $a = '+fr(a)+'$ en dat is groter dan 0',
   f:[[berg?'Dalparabool, want $a = '+fr(a)+'$':'Bergparabool, want $a = '+fr(a)+'$',`Kijk naar het teken van a: $${fr(a)}$ is ${berg?'kleiner':'groter'} dan 0. Dan is het een ${berg?'berg':'dal'}parabool.`],
      [berg?'Bergparabool, want de top is $('+p+', '+q+')$':'Dalparabool, want de top is $('+p+', '+q+')$','Aan de top zie je niet of het een berg of een dal is. Dat zegt alleen het teken van a.']],
   st:[S('Kijk naar a, het getal vóór de haakjes.',`$a = ${fr(a)}$`),S(berg?'$a < 0$: bergparabool.':'$a > 0$: dalparabool.',berg?'Bergparabool':'Dalparabool')]}},
 lijn:()=>{const [a]=pick(AT),q=R(-9,9),p=R(-6,6),tex=`y = ${co(a,xp(p)+'^2')}${pl(q)}`,berg=a<0,soort=pick([2,2,0,1]);
  const c=soort===1?q:soort===2?(berg?q-pick([200,50,100,12,30]):q+pick([200,50,100,12,30])):(berg?q+pick([5,20,100]):q-pick([5,20,100]));
  return {q:`Gegeven is $g: ${tex}$. Hoeveel snijpunten heeft g met de lijn $y = ${c}$? Leg je antwoord uit.`,denk:'Kijk naar de top en of het een berg of een dal is. Ligt de lijn onder, op of boven de top?',
   st:[S('Top en soort.',`Top $(${p}, ${q})$, $a = ${fr(a)}$: ${berg?'berg':'dal'}parabool, ${berg?'hoogste':'laagste'} punt op hoogte ${q}`),
    S(`De lijn $y = ${c}$ ligt ${c===q?'precies door':c<q?'onder':'boven'} de top.`,soort===2?`Een ${berg?'berg':'dal'}parabool gaat aan twee kanten van de top ${berg?'omlaag':'omhoog'}: 2 snijpunten`:soort===1?'Alleen de top raakt de lijn: 1 snijpunt':`De parabool komt nooit ${berg?'hoger':'lager'} dan ${q}: 0 snijpunten`)],
   a:`${soort} ${soort===1?'snijpunt':'snijpunten'}`,in:[{lab:'aantal:',v:soort,fx:soort===2?[[0,`Een ${berg?'berg':'dal'}parabool met de top ${berg?'boven':'onder'} de lijn gaat aan beide kanten door de lijn heen.`],[1,'Een parabool heeft twee armen: allebei gaan ze door de lijn.']]:soort===0?[[2,`De ${berg?'top is het hoogste':'top is het laagste'} punt. De lijn ligt ${berg?'hoger':'lager'}, daar komt de parabool nooit.`]]:[[2,'De lijn gaat precies door de top: die raakt hij maar op 1 plek.']]}]}},
 alg:()=>{const [a]=pick(AT),q=R(-6,6),p=R(-5,5)||1,b=-2*a*p,c=a*p*p+q,tex=`y = ${co(a,xp(p)+'^2')}${pl(q)}`;
  return {q:`Gegeven is $g: ${tex}$. Schrijf de formule om naar de algemene vorm $y = ax^2 + bx + c$.<br><small>Een breuk mag je typen als 2/3 of -8/3.</small>`,
   denk:'Werk eerst het kwadraat uit: $(x'+pl(-p)+')^2 = (x'+pl(-p)+')(x'+pl(-p)+')$. Dan alles keer a, ook het losse getal. Tel daarna q erbij.',
   st:[S('Kwadraat uitwerken.',`$(x${pl(-p)})^2 = x^2${pl(-2*p)}x${pl(p*p)}$`),S(`Alles keer $${fr(a)}$.`,`$${co(a,'x^2')}${plf(b)}x${plf(a*p*p)}$`),S(`Dan $${nf(q)}$ erbij.`,`$${fr(a*p*p)}${pl(q)} = ${fr(c)}$`),S('Algemene vorm.',`$y = ${co(a,'x^2')}${b?plf(b)+'x':''}${plf(c)}$`)],
   a:`$y = ${co(a,'x^2')}${b?plf(b)+'x':''}${plf(c)}$`,
   in:[{lab:'a =',v:a},{lab:'b =',v:b,fx:[[-b,'Let op het minteken: $(x'+pl(-p)+')^2$ geeft $'+(-2*p<0?'-':'+')+' '+Math.abs(2*p)+'x$, en dat keer a.'],[a*p,'De middelste term van $(x - p)^2$ is $2 · p · x$: vergeet de 2 niet.']].filter(e=>e[0]!==b)},
    {lab:'c =',v:c,fx:[[p*p+q,'Ook het losse getal binnen de haakjes ($'+(p*p)+'$) moet keer a.'],[a*p*p,'Vergeet niet om q ('+nf(q)+') erbij op te tellen.']].filter(e=>Math.abs(e[0]-c)>1e-9)}]}},
 xas:()=>{const g=topv(),{a,p,q,d,tex}=g,x1=p-d,x2=p+d;
  return {q:`Gegeven is $g: ${tex}$. Bereken de snijpunten van g met de x-as.`,denk:'Op de x-as is y = 0. Zet het kwadraat alleen: eerst q eraf, dan delen door a. Vergeet de tweede oplossing niet.',
   st:[S('x-as: y = 0.',`$0 = ${co(a,xp(p)+'^2')}${pl(q)}$`),S(`$${nf(q)}$ eraf.`,`$${co(a,xp(p)+'^2')} = ${nf(-q)}$`),S(`Delen door $${fr(a)}$.`,`$${xp(p)}^2 = ${d*d}$`),
    S('Twee getallen in het kwadraat geven '+d*d+'.',`$${p?'x'+pl(-p):'x'} = ${d}$ OF $${p?'x'+pl(-p):'x'} = ${-d}$`),S('Oplossen.',`$x = ${x2}$ OF $x = ${x1}$. Snijpunten $(${x1}, 0)$ en $(${x2}, 0)$`)],
   a:`$(${x1}, 0)$ en $(${x2}, 0)$`,in:[{lab:'x =',v:x1,set:1},{lab:'x =',v:x2,set:1}]}}
};

/* ---------- O3 algemene vorm ---------- */
function algv(){const a=pick([1,2,-1,-2,3,-3]),p=(R(1,4))*pick([1,-1]),b=-2*a*p,c=R(-30,30),ty=c-a*p*p;return {a,b,c,p,ty,tex:`y = ${co(a,'x^2')}${pl(b)}x${pl(c)}`,f:x=>a*x*x+b*x+c}}
const G3={
 top:()=>{const g=algv();
  return {q:`Gegeven is $f: ${g.tex}$. Bereken de coördinaten van de top.`,denk:'$x_{top} = [[-b|2a]]$. Vul daarna $x_{top}$ in voor $y_{top}$, met haakjes.',
   st:[S('$x_{top} = [[-b|2a]]$',`$x_{top} = [[${-g.b}|2 · ${P(g.a)}]] = ${g.p}$`),S('Invullen.',`$y_{top} = ${g.a===1?'':g.a===-1?'-':g.a+' · '}${P(g.p)}^2${pl(g.b)} · ${P(g.p)}${pl(g.c)} = ${g.ty}$`),S('Top.',`$(${g.p}, ${g.ty})$`)],
   a:`$(${g.p}, ${g.ty})$`,in:[{lab:'x',v:g.p,fx:[[-g.p,'$x_{top} = [[-b|2a]]$: vergeet het minteken vóór b niet.']]},{lab:'y',v:g.ty,fx:[[g.f(-g.p),'Je vulde de verkeerde x in. Eerst $x_{top}$ goed, dan die invullen.'],[g.a*-(g.p*g.p)+g.b*g.p+g.c,`$${P(g.p)}^2 = ${g.p*g.p}$: een kwadraat is nooit negatief.`]].filter(e=>e[0]!==g.ty)}]}},
 yas:()=>{const g=algv();
  return {q:`Gegeven is $f: ${g.tex}$. Bereken de coördinaten van het snijpunt met de y-as.`,denk:'Op de y-as is x = 0.',
   st:[S('y-as: x = 0 invullen.',`$y = ${g.a===1?'':g.a+' · '}0^2${pl(g.b)} · 0${pl(g.c)} = ${g.c}$`),S('Snijpunt.',`$(0, ${g.c})$`)],a:`$(0, ${g.c})$`,in:[{lab:'x',v:0},{lab:'y',v:g.c}]}},
 punt:()=>{const g=algv(),k=R(2,4),r=g.p-k*pick([1,-1]),q=g.f(r);
  return {q:`Gegeven is $f: ${g.tex}$. Het punt $(${r}, q)$ ligt op f. Bereken q.`,denk:`Vul $x = ${r}$ in, met haakjes${r<0?' om het negatieve getal':''}.`,
   st:[S(`$x = ${r}$ invullen.`,`$y = ${g.a===1?'':g.a===-1?'-':g.a+' · '}${P(r)}^2${pl(g.b)} · ${P(r)}${pl(g.c)}$`),S('Uitrekenen.',`$y = ${g.a*r*r}${pl(g.b*r)}${pl(g.c)} = ${q}$`),S('Dus',`$q = ${q}$`)],
   a:`$q = ${q}$`,in:[{lab:'q =',v:q,fx:[[-g.a*r*r+g.b*r+g.c,`$${P(r)}^2 = ${r*r}$, niet $${-r*r}$.`],[g.a*r*r-g.b*r+g.c,`$${g.b} · ${P(r)} = ${g.b*r}$: tel de mintekens.`]].filter(e=>e[0]!==q)}]}},
 hoogte:()=>{const g=algv(),k=R(2,4),r=g.p-k*pick([1,-1]),q=g.f(r),x2=2*g.p-r;
  return {q:`Gegeven is $f: ${g.tex}$, met top $(${g.p}, ${g.ty})$. Het punt $(${r}, ${q})$ ligt op f. Welk ander punt van f ligt op dezelfde hoogte?`,denk:'Gebruik de symmetrieas $x = x_{top}$. Hoe ver ligt het punt ervan af? Ga even ver naar de andere kant.',
   st:[S('Symmetrieas.',`$x = ${g.p}$`),S('Afstand tot de as.',`van $x = ${r}$ naar $x = ${g.p}$ is ${Math.abs(r-g.p)}`),S('Even ver aan de andere kant.',`$x = ${g.p} ${r<g.p?'+':'-'} ${Math.abs(r-g.p)} = ${x2}$`),S('Zelfde hoogte, dus dezelfde y.',`$(${x2}, ${q})$`)],
   a:`$(${x2}, ${q})$`,in:[{lab:'x',v:x2,fx:[[-r,'Je spiegelde in de y-as ($x = 0$). Spiegel in de symmetrieas $x = '+g.p+'$.']].filter(e=>e[0]!==x2)},{lab:'y',v:q}]}}
};

/* ---------- O4 hyperbool ---------- */
const MS=[[1,3],[1,2],[1,4],[2,1],[3,1],[3,2],[2,3]];
function hypv(){for(let t=0;t<200;t++){const [mn,md]=pick(MS),m=mn/md,x0=R(-9,9);if(!x0)continue;const n=-m*x0;if(!dec(n,0))continue;
 const k=pick([-4,4,-6,6,8,-8,12,-12]),c=R(-5,5)||-2;/* breuk vóór x in de noemer als ⅓ (een breuk in een breuk kan fmt niet tekenen) */
 const mt=md===1?(mn===1?'':mn):({'1/3':'⅓','1/2':'½','1/4':'¼','3/2':'1½','2/3':'⅔'})[mn+'/'+md];
 const noem=`${mt}x${pl(n)}`,tex=`y = ${c} + [[${k}|${noem}]]`;
 return {m,n,x0,k,c,mt,noem,tex,f:x=>c+k/(m*x+n)}}}
const G4={
 va:()=>{const h=hypv();
  return {q:`Gegeven is $h: ${h.tex}$. Bepaal met een berekening de vergelijking van de verticale asymptoot.`,denk:'Delen door nul is flauwekul: de noemer is 0. Los op. Delen door een breuk is keer het omgekeerde.',
   st:[S('Noemer = 0.',`$${h.noem} = 0$`),S(`$${nf(h.n)}$ naar de andere kant.`,`$${h.mt}x = ${nf(-h.n)}$`),S(`Delen door $${fr(h.m)}$.`,`$x = ${nf(-h.n)} : ${fr(h.m)} = ${h.x0}$`),S('VA.',`$x = ${h.x0}$`)],
   a:`VA: $x = ${h.x0}$`,in:[{lab:'x =',v:h.x0,fx:[[-h.x0,'Let op het minteken: '+(h.n>0?'$'+nf(h.n)+'$ eraf geeft $'+nf(-h.n)+'$.':'$'+nf(-h.n)+'$ erbij.')],[-h.n,`Je vergat te delen door $${fr(h.m)}$.`],[-h.n*h.m,`Delen door $${fr(h.m)}$ is keer $${fr(1/h.m)}$, niet keer $${fr(h.m)}$.`]].filter(e=>Math.abs(e[0]-h.x0)>1e-9)}]}},
 ha:()=>{const h=hypv();
  return {q:`Gegeven is $h: ${h.tex}$. Geef de vergelijking van de horizontale asymptoot. Laat zien hoe je aan je antwoord komt.`,denk:'Wat gebeurt er met de breuk als x heel groot wordt? Vul bijvoorbeeld x = 100 000 in.',
   st:[S('x heel groot, bijv. $x = 100 000$.',`noemer $${h.mt}x${pl(h.n)}$ wordt heel groot`),S(`$${h.k}$ gedeeld door een heel groot getal is bijna 0.`,`$y ≈ ${h.c} + 0$`),S('HA.',`$y = ${h.c}$`)],
   a:`HA: $y = ${h.c}$`,in:[{lab:'y =',v:h.c,fx:[[h.k,'De teller bepaalt de HA niet: de breuk wordt bijna 0. Wat overblijft is het losse getal.'],[0,'Bij $y = [[k|x]]$ is de HA $y = 0$, maar hier staat er nog een los getal bij.']].filter(e=>e[0]!==h.c)}]}},
 punt:()=>{let h,kies=[];for(let t=0;t<60&&kies.length<2;t++){h=hypv();const ds=[1,2,3,4,6,8,12].filter(d=>Math.abs(h.k)%d===0),xs=[];
  ds.forEach(d=>{const x=(d-h.n)/h.m;if(dec(x,0)&&x>h.x0&&!xs.includes(x))xs.push(x)});
  kies=shuf(xs).slice(0,2).sort((a,b)=>a-b)}if(kies.length<2)return G4.va();
  return {q:`Gegeven is $h: ${h.tex}$, met VA $x = ${h.x0}$. Bereken de y-coördinaat van de punten met $x = ${kies[0]}$ en $x = ${kies[1]}$ (rechts van de VA).`,denk:'Reken eerst de noemer uit, dan de breuk, dan het losse getal erbij.',
   st:kies.map(x=>{const d=h.m*x+h.n;return S(`$x = ${x}$`,`noemer $${fr(h.m)} · ${P(x)}${pl(h.n)} = ${nf(d)}$, $y = ${h.c} + [[${h.k}|${nf(d)}]] = ${h.c}${pl(h.k/d)} = ${nf(h.f(x))}$`)}),
   a:kies.map(x=>`$(${x}, ${nf(h.f(x))})$`).join(' en '),in:kies.map(x=>({lab:`x = ${MIN(x)}: y =`,v:h.f(x),fx:[[h.c-h.k/(h.m*x+h.n),`$[[${h.k}|${nf(h.m*x+h.n)}]]$: let op het teken van de teller.`]].filter(e=>Math.abs(e[0]-h.f(x))>1e-9)}))}}
};

/* ---------- O5 wortel ---------- */
function wv(){const s=pick([1,-1,-1,2,-2]),dir=pick([-1,-1,1]),t=R(-6,6),q=R(-5,5);
 const inner=dir<0?(t?`${t} - x`:'-x'):`x${pl(-t)}`,coef=Math.abs(s)===1?'':Math.abs(s);
 const tex=q?`y = ${q}${s>0?' + ':' - '}${coef}√{${inner}}`:`y = ${s<0?'-':''}${coef}√{${inner}}`;
 return {s,dir,t,q,inner,tex,f:x=>q+s*Math.sqrt(dir<0?t-x:x-t),xr:w=>dir<0?t-w:t+w}}
const G5={
 rand:()=>{const w=wv();
  return {q:`Gegeven is $j: ${w.tex}$. Bereken de coördinaten van het randpunt.`,denk:'Onder de wortel is 0. Controleer door je x in te vullen.',
   st:[S('Onder de wortel 0.',`$${w.inner} = 0$ → $x = ${w.t}$`),S('Controle.',`$${w.dir<0?(w.t?w.t+' - '+P(w.t):'-'+P(w.t)):P(w.t)+pl(-w.t)} = 0$ ✓`),S('y uitrekenen.',`$y = ${w.q}${w.s>0?' + ':' - '}${Math.abs(w.s)===1?'':Math.abs(w.s)+' · '}√{0} = ${w.q}$`),S('Randpunt.',`$(${w.t}, ${w.q})$`)],
   a:`$(${w.t}, ${w.q})$`,in:[{lab:'x',v:w.t,fx:w.t?[[-w.t,`Vul $x = ${-w.t}$ in: dan staat er geen 0 onder de wortel.`]]:[]},{lab:'y',v:w.q}]}},
 rooster:()=>{const w=wv(),x1=w.xr(4),x2=w.xr(9),y1=w.f(x1),y2=w.f(x2);
  return {q:`Gegeven is $j: ${w.tex}$, met randpunt $(${w.t}, ${w.q})$. Bereken de y bij $x = ${x1}$ en bij $x = ${x2}$. Dat zijn roosterpunten voor je tabel.`,denk:'Reken eerst uit wat onder de wortel staat (met haakjes om een negatieve x), dan de wortel, dan het getal ervoor met het teken.',
   st:[x1,x2].map(x=>S(`$x = ${x}$`,`onder de wortel $${w.dir<0?w.t+' - '+P(x):P(x)+pl(-w.t)} = ${w.dir<0?w.t-x:x-w.t}$, $√{${w.dir<0?w.t-x:x-w.t}} = ${Math.sqrt(w.dir<0?w.t-x:x-w.t)}$, $y = ${w.q}${w.s>0?' + ':' - '}${Math.abs(w.s)===1?'':Math.abs(w.s)+' · '}${Math.sqrt(w.dir<0?w.t-x:x-w.t)} = ${w.f(x)}$`)),
   a:`$(${x1}, ${y1})$ en $(${x2}, ${y2})$`,in:[{lab:`x = ${MIN(x1)}: y =`,v:y1,fx:[[w.q-w.s*2,'Let op het teken vóór de wortel: eerst de wortel, dan dat teken.']].filter(e=>e[0]!==y1)},{lab:`x = ${MIN(x2)}: y =`,v:y2,fx:[[w.q-w.s*3,'Let op het teken vóór de wortel.']].filter(e=>e[0]!==y2)}]}},
 kant:()=>{const w=wv(),xf=w.dir<0?w.t+R(2,6):w.t-R(2,6),un=w.dir<0?w.t-xf:xf-w.t;
  return {q:`Gegeven is $j: ${w.tex}$. Kun je $x = ${xf}$ invullen? Gaat de grafiek vanaf het randpunt naar links of naar rechts?`,mc:1,
   a:`Nee: onder de wortel komt $${un}$, en de wortel van een negatief getal bestaat niet. De grafiek gaat naar ${w.dir<0?'links':'rechts'}.`,
   f:[[`Ja, dat kan. De grafiek gaat naar ${w.dir<0?'rechts':'links'}.`,`Reken uit wat onder de wortel staat: $${w.dir<0?w.t+' - '+P(xf):P(xf)+pl(-w.t)} = ${un}$. Dat is negatief.`],
      [`Nee: onder de wortel komt $${un}$. De grafiek gaat naar ${w.dir<0?'rechts':'links'}.`,`Bij $x = ${xf}$ kan het niet, dus de grafiek gaat juist de andere kant op: naar ${w.dir<0?'links':'rechts'}.`]],
   st:[S(`Vul $x = ${xf}$ in onder de wortel.`,`$${w.dir<0?w.t+' - '+P(xf):P(xf)+pl(-w.t)} = ${un}$`),S('Negatief onder de wortel kan niet.',`De grafiek gaat vanaf $x = ${w.t}$ naar ${w.dir<0?'links':'rechts'}`)]}}
};

/* ---------- O6 verhaalsom met schets ---------- */
const svgBrug=(L,b,hw,H,toon)=>{const W=300,Hh=150,sx=x=>W/2+x/L*130,sy=h=>Hh-10-h/Math.max(H||b,b)*120;
 const boog=(top,eind)=>{let d='';for(let i=0;i<=40;i++){const x=-L+2*L*i/40,h=top-(top-eind)*(x/L)**2;d+=(i?'L':'M')+sx(x).toFixed(1)+' '+sy(h).toFixed(1)}return d};
 return `<svg viewBox="0 0 ${W} ${Hh}" width="${W}" style="max-width:100%;font:11px sans-serif"><line x1="5" y1="${sy(0)}" x2="${W-5}" y2="${sy(0)}" stroke="currentColor" stroke-width="1"/>
 <path d="${boog(b,0)}" fill="none" stroke="currentColor" stroke-width="2"/>${H?`<path d="${boog(H,hw)}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>`:''}
 ${hw!=null?`<line x1="${sx(-L)}" y1="${sy(hw)}" x2="${sx(L)}" y2="${sy(hw)}" stroke="#2a9d5c" stroke-width="3"/>`:''}
 <line x1="${sx(0)}" y1="${sy(0)}" x2="${sx(0)}" y2="${sy(Math.max(H||0,b))}" stroke="currentColor" stroke-dasharray="2 3"/>
 <text x="${sx(-L)-4}" y="${sy(0)+12}">${MIN(-L)}</text><text x="${sx(L)-12}" y="${sy(0)+12}">${L}</text><text x="${sx(0)+3}" y="${sy(0)+12}">0</text>
 ${toon.map(([x,y,t])=>`<text x="${sx(x)+3}" y="${sy(y)-3}">${t}</text>`).join('')}</svg>`};
function brug(){for(let t=0;t<300;t++){const L=pick([100,125,150,200,250,300]),a=pick([0.0012,0.0016,0.0018,0.002,0.0024,0.003,0.004]),b=+(a*L*L).toFixed(6);
 if(!dec(b,1)||b<40||b>220)continue;const d=pick([20,25,30,40,50,60].filter(x=>x<b-10));if(!d)continue;const hw=+(b-d).toFixed(6);
 const a2=pick([0.0004,0.0008,0.0012,0.0016]),H=+(hw+a2*L*L).toFixed(6);if(!dec(H,1)||H<=b+5)continue;
 const naam=pick(['Een stalen boogbrug','Een spoorbrug','Een brug over een rivier','Een boogbrug voor auto\'s']);return {L,a,b,d,hw,a2,H,naam}}
 return {L:250,a:0.00184,b:115,d:60,hw:55,a2:0.00128,H:135,naam:'Een boogbrug'}}
const G6={
 top:()=>{const z=brug();
  return {q:`${z.naam} heeft een onderste boog met de formule $h = -${nf(z.a)}x^2 + b$. Hierin is x de afstand in meter tot het midden en h de hoogte in meter. De boog begint en eindigt op het water, ${2*z.L} meter uit elkaar. Bereken b.`,
   denk:SCHETS+' Het midden ligt bij x = 0. Waar staat de boog dan op het water?',
   st:[S('Maak een grote schets. Midden op $x = 0$, de boog eindigt op $x = -'+z.L+'$ en $x = '+z.L+'$, op hoogte 0.',svgBrug(z.L,z.b,null,null,[[z.L-z.L*0.25,4,'h = 0']])),
    S(`Bij $x = ${z.L}$ is $h = 0$. Invullen.`,`$0 = -${nf(z.a)} · ${z.L}^2 + b$`),S('Uitrekenen.',`$0 = -${nf(z.a*z.L*z.L)} + b$, dus $b = ${nf(z.b)}$`),S('Betekenis.','b is de hoogte van de top van de boog, in het midden')],
   a:`$b = ${nf(z.b)}$`,in:[{lab:'b =',v:z.b,fx:[[z.a*2*z.L*2*z.L,`De boog eindigt bij de helft van ${2*z.L}: $x = ${z.L}$, niet $x = ${2*z.L}$.`]]}]}},
 wegdek:()=>{const z=brug();
  return {q:`${z.naam}: onderste boog $h = -${nf(z.a)}x^2 + ${nf(z.b)}$. Het wegdek ligt ${z.d} meter onder het hoogste punt van de boog. Op welke hoogte ligt het wegdek?`,
   denk:SCHETS+' Waar is het hoogste punt van de boog? Bij x = 0 blijft alleen het losse getal over.',
   st:[S('Maak een grote schets met de boog, de top en het wegdek.',svgBrug(z.L,z.b,z.hw,null,[[0,z.b,'top '+nf(z.b)],[z.L*0.55,z.hw,'wegdek']])),S('Hoogste punt: $x = 0$.',`$h = ${nf(z.b)}$`),S('Simpele min-som.',`$${nf(z.b)} - ${z.d} = ${nf(z.hw)}$ meter`)],
   a:`${nf(z.hw)} meter`,in:[{lab:'hoogte =',v:z.hw,fx:[[z.d===z.hw?z.b:z.d,'Het wegdek ligt '+z.d+' meter ONDER de top. Reken de top min '+z.d+'.']]}]}},
 boven:()=>{const z=brug();
  return {q:`${z.naam}: het wegdek ligt op ${nf(z.hw)} meter hoogte. De bovenste boog heeft de formule $h = -${nf(z.a2)}x^2 + c$ en eindigt bij de pijlers op het wegdek, bij $x = -${z.L}$ en $x = ${z.L}$. Hoe hoog is de top van de bovenste boog?`,
   denk:SCHETS+' Bij de pijler (x = '+z.L+') is de hoogte van de bovenste boog gelijk aan die van het wegdek.',
   st:[S('Maak een grote schets met het wegdek en de bovenste boog.',svgBrug(z.L,z.b,z.hw,z.H,[[z.L*0.6,z.hw,'wegdek '+nf(z.hw)],[0,z.H,'top = c']])),
    S(`Bij $x = ${z.L}$ is $h = ${nf(z.hw)}$. Invullen.`,`$${nf(z.hw)} = -${nf(z.a2)} · ${z.L}^2 + c$`),S('Uitrekenen.',`$${nf(z.hw)} = -${nf(z.a2*z.L*z.L)} + c$, dus $c = ${nf(z.H)}$`)],
   a:`${nf(z.H)} meter`,in:[{lab:'top =',v:z.H,fx:[[z.hw-z.a2*z.L*z.L,`$-${nf(z.a2*z.L*z.L)} + c = ${nf(z.hw)}$: dan is c groter dan ${nf(z.hw)}. Tel op in plaats van aftrekken.`]]}]}},
 lengte:()=>{const z=brug(),x=Math.sqrt(z.d/z.a),len=2*x,grens=Math.round(len/10)*10+pick([-10,10]);
  return {q:`${z.naam}: onderste boog $h = -${nf(z.a)}x^2 + ${nf(z.b)}$, het wegdek ligt op ${nf(z.hw)} meter. Een deel van het wegdek ligt onder de boog. Hoe lang is dat deel? Rond af op hele meters. Is het langer dan ${grens} meter?`,
   denk:SCHETS+' Waar komt de boog op de hoogte van het wegdek? Stel de formule gelijk aan '+nf(z.hw)+'.',
   st:[S('Maak een grote schets: het wegdek kruist de boog links en rechts.',svgBrug(z.L,z.b,z.hw,null,[[0,z.b,nf(z.b)],[x*0.9,z.hw,'?']])),
    S('Boog op de hoogte van het wegdek.',`$-${nf(z.a)}x^2 + ${nf(z.b)} = ${nf(z.hw)}$`),S('Oplossen.',`$-${nf(z.a)}x^2 = ${nf(-z.d)}$ → $x^2 = ${nf(+(z.d/z.a).toFixed(2))}$ → $x ≈ ±${nf(+x.toFixed(2))}$`),
    S('Lengte: van links naar rechts.',`$2 · ${nf(+x.toFixed(2))} ≈ ${Math.round(len)}$ meter, dus ${len>grens?'ja, langer':'nee, korter'} dan ${grens} meter`)],
   a:`ongeveer ${Math.round(len)} meter: ${len>grens?'langer':'korter'} dan ${grens} meter`,
   in:[{lab:'lengte ≈',v:Math.round(len),fx:[[Math.round(x),'Dat is maar de helft: van het midden naar één kant. Het deel loopt van $-'+nf(+x.toFixed(1))+'$ tot $'+nf(+x.toFixed(1))+'$.']]}]}},
 tunnel:()=>{for(let t=0;t<200;t++){const L=pick([4,5,6,8]),a=pick([0.25,0.3,0.4,0.5,0.2]),b=+(a*L*L).toFixed(6);if(!dec(b,1)||b<3||b>12)continue;
   const w=pick([2,2.5,3,3.5,4].filter(v=>v<2*L-1)),hv=+(b-a*(w/2)**2).toFixed(6),truck=+(hv+pick([-0.3,-0.2,0.2,0.3])).toFixed(1),past=truck<hv;
   return {q:`Een tunnel heeft de vorm van een parabool $h = -${nf(a)}x^2 + b$ (x en h in meter, x = 0 in het midden). Op de grond is de tunnel ${2*L} meter breed. Een vrachtwagen van ${nf(w)} meter breed en ${nf(truck)} meter hoog rijdt precies door het midden. Hoe hoog is de tunnel aan de zijkant van de vrachtwagen? Past hij erdoor?`,
    denk:SCHETS+' Bereken eerst b (de tunnel staat op de grond bij x = '+L+'). De zijkant van de vrachtwagen zit bij x = '+nf(w/2)+'.',
    st:[S('Maak een grote schets: de tunnel van $x = -'+L+'$ tot $x = '+L+'$, de vrachtwagen in het midden van $x = -'+nf(w/2)+'$ tot $x = '+nf(w/2)+'$.','Zet de breedte, de hoogte en de onbekende b erbij'),
     S(`b: bij $x = ${L}$ is $h = 0$.`,`$0 = -${nf(a)} · ${L}^2 + b$ → $b = ${nf(b)}$`),S(`Hoogte bij $x = ${nf(w/2)}$.`,`$h = -${nf(a)} · ${nf(w/2)}^2 + ${nf(b)} = ${nf(hv)}$`),
     S('Vergelijk.',`${nf(truck)} ${past?'<':'>'} ${nf(hv)}: ${past?'hij past':'hij past niet'}`)],
    a:`${nf(hv)} meter: de vrachtwagen ${past?'past':'past niet'}`,in:[{lab:'hoogte =',v:hv,fx:[[+(b-a*w*w).toFixed(6),`De zijkant zit bij de helft van de breedte: $x = ${nf(w/2)}$, niet $x = ${nf(w)}$.`]]}]}}
  return G6.top()}
};

/* ---------- vragen: per soort 3 exemplaren; elke toets nieuwe getallen ---------- */
const SOORT=[['ot1','tr',()=>TAB(false)],['ot1','to',()=>TAB(true)],
 ['ot2','top',G2.top],['ot2','berg',G2.berg],['ot2','lijn',G2.lijn],['ot2','alg',G2.alg],['ot2','xas',G2.xas],
 ['ot3','top',G3.top],['ot3','yas',G3.yas],['ot3','punt',G3.punt],['ot3','hg',G3.hoogte],
 ['ot4','va',G4.va],['ot4','ha',G4.ha],['ot4','pt',G4.punt],
 ['ot5','rp',G5.rand],['ot5','ro',G5.rooster],['ot5','kt',G5.kant],
 ['ot6','top',G6.top],['ot6','wd',G6.wegdek],['ot6','bv',G6.boven],['ot6','len',G6.lengte],['ot6','tun',G6.tunnel]];
const LEEG={q:'',a:'',st:null,in:null,f:null,mc:null,denk:'',u:null};
const vul=(q,f)=>Object.assign(q,LEEG,f(),{gen:1});
const Q=[];
SOORT.forEach(([o,s,f])=>{for(let i=1;i<=3;i++){const q={id:`${o}${s}${i}`,o,nr:VN,v:()=>Object.assign({gen:1,f:null,mc:null,in:null},f())};vul(q,f);Q.push(q)}});
const FN=Object.fromEntries(SOORT.map(([o,s,f])=>[o+s,f]));

V.SECS.splice((i=>i<0?V.SECS.length:i)(V.SECS.findIndex(s=>s.par==='tv')),0,...SECS);
V.Q.push(...Q);
Object.assign(V.SNAP,SNAP);
V.PN.ot='Oefentoets zoals bij Van Neck';
V.geenTT=[...(V.geenTT||[]),'ot'];   /* geen tussentoets ervoor: de paragraaftoets is hier de oefentoets */
V.leer=[...(V.leer||[]).filter(p=>p!=='ot'),'ot'];
/* nieuwe getallen voor elke toets (de engine roept dit aan vóór een paragraaftoets en proeftoets; de print ook) */
/* printen (oefen/print.js): alleen deze oefentoets, 16 vragen, plus twee tekenopdrachten zoals op de toets (tekenen kan niet in de app) */
V.printPar='ot';V.printN=16;
V.printExtra=()=>{const h=hypv(),w=wv(),a=h.x0-10,b=h.x0+14,xs=[];
 for(let x=a;x<=b;x+=2)if(x!==h.x0&&dec(h.f(x),2))xs.push(x);
 const wx=[0,1,4,9,16].map(k=>w.xr(k)),lo=Math.min(...wx,w.t)-2,hi=Math.max(...wx,w.t)+2;
 const rij=(X,f)=>`<div class="tw"><table class="tb"><tr><th>x</th>${X.map(x=>`<td>${MIN(x)}</td>`).join('')}</tr><tr><th>y</th>${X.map(x=>`<td>${MIN(+f(x).toFixed(2))}</td>`).join('')}</tr></table></div>`;
 return [{q:`Teken de grafiek van $h: ${h.tex}$ in het gebied $x = ${a}$ tot en met $x = ${b}$. Teken ook de asymptoten (stippellijn). Kies zelf een handige stapgrootte voor x.`,soort:'teken',par:'ot',
   ant:`VA $x = ${h.x0}$, HA $y = ${h.c}$. Bijvoorbeeld deze punten:${rij(xs.slice(0,9),h.f)}<small>Links en rechts van de VA ligt een tak; de grafiek komt steeds dichter bij de asymptoten maar raakt ze nooit.</small>`},
  {q:`Teken de grafiek van $j: ${w.tex}$ in het gebied $x = ${lo}$ tot en met $x = ${hi}$. Begin bij het randpunt en kies x zo dat onder de wortel 0, 1, 4, 9 of 16 staat.`,soort:'teken',par:'ot',
   ant:`Randpunt $(${w.t}, ${w.q})$. Roosterpunten:${rij(wx.slice().sort((a,b)=>a-b),w.f)}<small>Vanaf het randpunt gaat de grafiek naar ${w.dir<0?'links':'rechts'}.</small>`}]};
V.vers=()=>{Q.forEach(q=>{const f=FN[q.id.replace(/\d+$/,'')];if(f)vul(q,f)})};
/* tip van de docent bij de bestaande verhaalsommen (bruggen) */
V.Q.forEach(q=>{if(q.o!=='ot6'&&/Bridge|brug|boog/i.test(String(q.q))&&!/GROTE schets/.test(q.denk||''))q.denk=SCHETS+(q.denk?' '+q.denk:'')});
})();
