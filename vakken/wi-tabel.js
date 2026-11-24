/* ============================================================
   Wiskunde: OEFENBLOK TABELLEN EN SNIJPUNTEN (24 nov 2026)
   Aanleiding: bij de oefentoets maakt ze eerst een fout in de tabel en ziet dat pas aan de grafiek.
   Op de oefenopdracht H3.5 (y = −√(−x + 1) − 1) kwam het startpunt op x = −1 in plaats van x = 1:
   bij −x met x = −1 verdween één minteken. Bij snijpunten gaf de app vaak al hoe vaak de grafiek snijdt.
   Hier:
   - T1 Min x invullen: −x met een negatief getal, startpunt, (−3)² en −3².
   - T2 Slimme x-waarden: waar begint de tabel, wat zet je in het midden, welke x mag niet.
   - T3 Tabel invullen: elk vakje apart nagekeken. Een typische minfout krijgt een eigen uitleg (fx in de vakjes).
   - T4 Tabel controleren: vind de fout vóór je tekent (gelijke stappen, symmetrie, mintekens).
   - T5 Snijpunten: eerst ZELF kiezen hoe vaak (0, 1 of 2), pas daarna de coördinaten (eigen vraagsoort 'snij').
   Alles typen, geen keuzes (behalve 0/1/2 bij snijpunten, dat is juist de vraag). Elke som die fout gaat, komt terug met nieuwe getallen.
   Laadt na vakken/wi.js. Par 'tg' staat vooraan in V.leer: het dagplan kiest dit blok tot de paragraaftoets een 7 is.
   ============================================================ */
(()=>{
const V=window.VAKDATA&&VAKDATA.wi;if(!V)return;
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[Math.random()*a.length|0];
const S=(t,s)=>({t,s});
const P=x=>x<0?`(${nf(x)})`:nf(x);                       /* negatief getal tussen haakjes */
const nf=x=>String(+(+x).toFixed(4)).replace('.',',');
const co=(a,v)=>a===1?v:a===-1?'-'+v:a+v;
const pl=b=>b===0?'':b<0?` - ${nf(-b)}`:` + ${nf(b)}`;
const xl=x=>'x = '+(x<0?'−'+(-x):x);
const MIN=x=>x<0?'−'+nf(-x):nf(x);
const tbl=(xs,ys)=>`<div class="tw"><table class="tb"><tr><th><i>x</i></th>${xs.map(v=>`<td>${MIN(v)}</td>`).join('')}</tr><tr><th><i>y</i></th>${ys.map(v=>`<td>${typeof v==='number'?MIN(v):v}</td>`).join('')}</tr></table></div>`;
const sq=n=>Number.isInteger(Math.sqrt(n));
const gen=f=>()=>Object.assign({gen:1,f:[]},f());

/* ---------- onderdelen ---------- */
const SECS=[
 {id:'tg1',par:'tg',nr:'T1',name:'Min x invullen',c:'--c3',sub:'Waar het bij jou misging: −x met een negatief getal',
  rules:[
   ['$-x$ betekent: het tegenovergestelde van x','$x = -1$: $-x = -(-1) = 1$','Er staan dan twee mintekens. Min keer min is plus.'],
   ['Vul altijd in mét haakjes','$-x + 1$ met $x = -3$: $-(-3) + 1 = 3 + 1 = 4$','Zonder haakjes schrijf je $-3 + 1$ en dan verdwijnt een minteken.'],
   ['Startpunt van een wortelgrafiek: wat onder de wortel staat is 0','$y = -√{-x + 1} - 1$: $-x + 1 = 0$, dus $-x = -1$, dus $x = 1$','Startpunt $(1, -1)$. Niet $x = -1$: dat geeft $-(-1) + 1 = 2$.'],
   ['Controleer je startpunt altijd door het in te vullen','$x = 1$: $-1 + 1 = 0$ ✓','Komt er geen 0 onder de wortel? Dan klopt je startpunt niet.'],
   ['$(-3)^2 = 9$ maar $-3^2 = -9$','$-x^2$ met $x = -3$: $-(-3)^2 = -9$','Eerst het kwadraat, dan het minteken ervoor.']]},
 {id:'tg2',par:'tg',nr:'T2',name:'Slimme x-waarden kiezen',c:'--c4',sub:'Niet altijd −1, 0, 1, 2, 3',
  rules:[
   ['Lijn: kies een paar x-waarden rond 0','$y = -2x + 3$: $x = -2, -1, 0, 1, 2$',''],
   ['Parabool: zet de top in het midden','$y = (x - 3)^2 - 4$: top bij $x = 3$, dus $x = 1, 2, 3, 4, 5$','Bij $y = a(x - m)(x - n)$ ligt de top midden tussen m en n. Let op het teken: $(x + 8)$ hoort bij $x = -8$.'],
   ['Wortel: begin bij het startpunt en kies x zo dat onder de wortel 0, 1, 4 of 9 staat','$y = -√{-x + 1} - 1$: $x = 1, 0, -3, -8$','Dan krijg je hele getallen, geen kommagetallen.'],
   ['Wortel met $-x$: de grafiek gaat naar links','$-x + 1$ is alleen 0 of meer bij $x ≤ 1$','$x = 3$ kan niet: $-3 + 1 = -2$ en $√{-2}$ bestaat niet.'],
   ['Hyperbool: de x die de noemer 0 maakt, mag niet','$y = [[6|x - 2]]$: $x = 2$ mag niet','Kies x-waarden aan beide kanten van die x.']]},
 {id:'tg3',par:'tg',nr:'T3',name:'Tabel invullen',c:'--c2',sub:'Elk vakje apart nagekeken',
  rules:[
   ['Schrijf bij elke x de invulling op, met haakjes','$y = x^2 - 2x$, $x = -2$: $(-2)^2 - 2 · (-2) = 4 + 4 = 8$',''],
   ['Reken in de goede volgorde','Haakjes, machten en wortels, keer en delen, plus en min',''],
   ['Bij een negatieve x: tel de mintekens','$-2 · (-3) = 6$ en $6 : (-2) = -3$','']]},
 {id:'tg4',par:'tg',nr:'T4',name:'Tabel controleren vóór je tekent',c:'--c5',sub:'Dan hoef je niet te twijfelen bij de grafiek',
  rules:[
   ['Lijn: y verandert steeds met hetzelfde getal','y: 7, 5, 3, 1 is steeds $-2$ ✓','Wijkt één stap af? Dan zit daar de fout.'],
   ['Parabool: de tabel is symmetrisch rond de top','x: 1, 2, 3, 4, 5 met top bij 3: y van 2 en 4 is gelijk, y van 1 en 5 ook',''],
   ['Hyperbool $y = [[k|x]]$: bij $-x$ hoort precies de tegengestelde y','$[[6|2]] = 3$ en $[[6|-2]] = -3$',''],
   ['Wortel: de stappen worden steeds kleiner','',''],
   ['Klopt iets niet? Reken dat ene vakje opnieuw uit, met haakjes','','Kijk eerst naar de vakjes met een negatieve x.']]},
 {id:'tg5',par:'tg',nr:'T5',name:'Snijpunten: zelf bepalen hoe vaak',c:'--c1',sub:'Eerst hoe vaak, dan waar',
  rules:[
   ['Snijpunt met de x-as: daar is $y = 0$','Los op: formule $= 0$',''],
   ['Snijpunt met de y-as: daar is $x = 0$','Vul $x = 0$ in','Mag je $x = 0$ niet invullen (wortel, hyperbool)? Dan geen snijpunt met de y-as.'],
   ['Lijn: snijdt de x-as 1 keer. Een horizontale lijn $y = 3$: 0 keer','',''],
   ['Parabool: bereken de top. Dal met top onder de x-as: 2 keer. Top op de x-as: 1 keer. Top erboven: 0 keer','Bij een berg andersom',''],
   ['Snijpuntvorm $a(x - m)(x - n)$: snijpunten bij $x = m$ en $x = n$','$y = 2(x - 7)(x + 8)$: $x = 7$ en $x = -8$','$(x + 8) = 0$ bij $x = -8$. Het teken draait om.'],
   ['Wortel $y = √{…} + q$: een wortel is nooit negatief','$q > 0$: nooit 0, dus 0 keer. $q < 0$: 1 keer',''],
   ['Hyperbool $y = [[k|x]] + c$: $c = 0$ geeft 0 keer, anders 1 keer','','']]}
];

const SNAP={
 tg1:[
  ['Waarom is $-(-1) = 1$?','$-x$ is "het tegenovergestelde van x". Het tegenovergestelde van $-1$ is $1$. Op de getallenlijn spiegel je om 0.'],
  ['Waarom ging mijn startpunt mis?','Bij $y = -√{-x + 1} - 1$ moet onder de wortel 0 staan. Vul je $x = -1$ in, dan staat er $-(-1) + 1 = 1 + 1 = 2$, geen 0.<br>Met $x = 1$: $-1 + 1 = 0$ ✓. Daarom is het startpunt $(1, -1)$.<br>De grafiek liet je dat ook zien. Nu zie je het al in de tabel.']],
 tg4:[
  ['Waarom kan ik de tabel controleren zonder te tekenen?','Elke soort grafiek heeft een patroon in de tabel. Een lijn: steeds even grote stappen. Een parabool: links en rechts van de top hetzelfde. Een fout vakje valt dan op, nog vóór je tekent.']],
 tg5:[
  ['Waarom kan een parabool 0, 1 of 2 keer de x-as snijden?','Een dalparabool heeft een laagste punt. Ligt dat onder de x-as, dan gaan beide armen erdoorheen: 2 keer. Ligt het precies op de x-as: 1 keer. Ligt het erboven, dan komt hij nooit bij de x-as: 0 keer.']]
};

/* ---------- soorten formules voor tabellen ----------
   Elke soort geeft: tex, f(x), xs, fx(x) = [[fout antwoord, uitleg], …] (de typische minfouten), st(x) = uitwerking. */
const K={
 lin:(a,b)=>{a=a??pick([-3,-2,2,3,-1]);b=b??R(-5,5);const f=x=>a*x+b;
  return {tex:`y = ${co(a,'x')}${pl(b)}`,f,xs:[-2,-1,0,1,2],
   fx:x=>x<0?[[-a*x+b,a===-1?`$-x$ met $x = ${x}$ is $-(${x}) = ${-x}$: min keer min is plus.`:`$${a} · ${P(x)} = ${a*x}$: tel de mintekens.`]]:[],
   st:x=>`$y = ${a===1?'':a===-1?'-':a+' · '}${P(x)}${pl(b)} = ${f(x)}$`,
   ctl:`Lijn: y verandert steeds met ${MIN(a)}.`}},
 minx:(c)=>{c=c??R(1,6);const f=x=>c-x;
  return {tex:`y = ${c} - x`,f,xs:[-3,-2,-1,0,1,2],
   fx:x=>x<0?[[c+x,`$${c} - (${x}) = ${c} + ${-x} = ${c-x}$. Min een negatief getal is plus.`]]:[],
   st:x=>`$y = ${c} - ${P(x)} = ${f(x)}$`,ctl:'Lijn: y gaat steeds 1 omlaag.'}},
 kw:(b,c)=>{b=b??pick([-4,-2,0,2,4]);c=c??R(-4,3);const t=-b/2,f=x=>x*x+b*x+c;
  return {tex:`y = x^2${b?pl(b)+'x':''}${pl(c)}`,f,xs:[t-2,t-1,t,t+1,t+2],
   fx:x=>{const r=[];if(x<0)r.push([-x*x+b*x+c,`$(${x})^2 = ${x*x}$, niet $${-x*x}$: min keer min is plus.`]);if(x<0&&b)r.push([x*x-b*x+c,`$${b} · ${P(x)} = ${b*x}$: tel de mintekens.`]);return r},
   st:x=>`$y = ${P(x)}^2${b?` ${b<0?'-':'+'} ${Math.abs(b)} · ${P(x)}`:''}${pl(c)} = ${x*x}${b?pl(b*x):''}${pl(c)} = ${f(x)}$`,
   ctl:`Parabool: symmetrisch rond de top bij $x = ${nf(t)}$.`}},
 negkw:(c)=>{c=c??R(1,9);const f=x=>-x*x+c;
  return {tex:`y = -x^2${pl(c)}`,f,xs:[-2,-1,0,1,2],
   fx:x=>x?[[x*x+c,`$-x^2$ met $x = ${x}$: eerst het kwadraat, $${P(x)}^2 = ${x*x}$. Dan het minteken ervoor: $${-x*x}$.`]]:[],
   st:x=>`$y = -${P(x)}^2${pl(c)} = ${-x*x}${pl(c)} = ${f(x)}$`,ctl:'Parabool: symmetrisch rond $x = 0$.'}},
 wort:(s,p,q)=>{s=s??pick([1,-1]);p=p??R(-2,3);q=q??R(-3,3);const f=x=>s*Math.sqrt(-x+p)+q;
  return {tex:`y = ${s<0?'-':''}√{-x${pl(p)}}${pl(q)}`,f,xs:[p-9,p-4,p-1,p],
   fx:x=>{const r=[];const u=x+p;if(x<0&&u>=0&&sq(u)&&s*Math.sqrt(u)+q!==f(x))r.push([s*Math.sqrt(u)+q,`$-x$ met $x = ${x}$ is $-(${x}) = ${-x}$. Onder de wortel staat dus $${-x}${pl(p)} = ${p-x}$.`]);
     if(s<0&&p-x>0)r.push([Math.sqrt(p-x)+q,'Er staat een minteken vóór de wortel. Eerst de wortel, dan dat minteken.']);return r},
   st:x=>`$${x?'-'+P(x):'0'}${pl(p)} = ${p-x}$, $√{${p-x}} = ${Math.sqrt(p-x)}$, $y = ${s<0?'-':''}${Math.sqrt(p-x)}${pl(q)} = ${f(x)}$`,
   ctl:`Wortel: startpunt $(${p}, ${q})$, en de stappen worden steeds kleiner.`}},
 hyp:(k,c)=>{k=k??pick([6,12,-6]);c=c??R(-2,2);const xs=Math.abs(k)===12?[-4,-3,-2,2,3,4]:[-3,-2,-1,1,2,3],f=x=>k/x+c;
  return {tex:`y = ${k<0?'-':''}[[${Math.abs(k)}|x]]${pl(c)}`,f,xs,
   fx:x=>x<0?[[-k/x+c,`$${k} : ${P(x)} = ${k/x}$: bij delen ook de mintekens tellen.`]]:[],
   st:x=>`$y = ${k} : ${P(x)}${pl(c)} = ${k/x}${pl(c)} = ${f(x)}$`,ctl:`Hyperbool: bij $-x$ hoort de tegengestelde ${c?'(y − '+nf(c)+')':'y'}.`}}
};
const KS=Object.keys(K);

/* T3: de hele tabel invullen */
function TB(kind,...a){const k=K[kind](...a);
 return {q:`Vul de tabel in bij $${k.tex}$.${tbl(k.xs,k.xs.map(()=>'…'))}<small>Reken elk vakje uit in je schrift, met haakjes om een negatieve x.</small>`,
  denk:'Schrijf bij elke x de invulling op met haakjes. Begin met de negatieve x: daar zitten de mintekens.',
  st:[...k.xs.map(x=>S(`$x = ${x}$`,k.st(x))),S('Controle',k.ctl)],
  a:tbl(k.xs,k.xs.map(k.f)),in:k.xs.map(x=>({lab:xl(x)+':  y =',v:k.f(x),fx:k.fx(x).filter(e=>e[0]!==k.f(x))}))}}

/* T4: vind de fout (één vakje heeft de typische minfout) */
function FE(kind,...a){
 for(let i=0;i<30;i++){const k=K[kind](...a),cand=k.xs.filter(x=>k.fx(x).some(e=>e[0]!==k.f(x)&&Number.isFinite(e[0])));if(!cand.length)continue;
  const x=pick(cand),e=k.fx(x).find(e=>e[0]!==k.f(x)),ys=k.xs.map(z=>z===x?e[0]:k.f(z));
  return {q:`Iemand maakte deze tabel bij $${k.tex}$. Eén vakje is fout.${tbl(k.xs,ys)}Bij welke x staat de fout, en wat moet daar staan?`,
   denk:k.ctl+' Controleer daarna de vakjes met een negatieve x.',
   st:[S('Kijk naar het patroon.',k.ctl),S(`Reken $x = ${x}$ opnieuw uit.`,k.st(x)),S('Wat ging er mis?',e[1])],
   a:`Bij $x = ${x}$ hoort $y = ${nf(k.f(x))}$. ${e[1]}`,in:[{lab:'fout bij x =',v:x},{lab:'goede y =',v:k.f(x),fx:[[e[0],'Dat is het getal dat er al stond. Reken het opnieuw uit, met haakjes.']]}]}}
 return TB(kind,...a)}

/* ---------- T1 en T2: losse sommen ---------- */
const G={
 /* T1 */
 mx:(c,x)=>{c=c??R(1,7);x=x??-R(1,6);const v=pick([0,1]);
  return v?{q:`Reken uit: $-x${pl(c)}$ bij $x = ${x}$.`,denk:'Vul in mét haakjes: $-('+x+')$.',st:[S('Invullen met haakjes.',`$-(${x})${pl(c)}$`),S('Min min is plus.',`$${-x}${pl(c)} = ${c-x}$`)],
     a:`$${c-x}$`,in:[{lab:'=',v:c-x,fx:[[x+c,`$-(${x}) = ${-x}$, niet $${x}$. Twee mintekens: plus.`]]}]}
   :{q:`Reken uit: $${c} - x$ bij $x = ${x}$.`,denk:'Vul in mét haakjes.',st:[S('Invullen met haakjes.',`$${c} - (${x})$`),S('Min min is plus.',`$${c} + ${-x} = ${c-x}$`)],
     a:`$${c-x}$`,in:[{lab:'=',v:c-x,fx:[[c+x,`$${c} - (${x}) = ${c} + ${-x}$. Min een negatief getal is plus.`]]}]}},
 mkw:(x)=>{x=x??-R(2,6);const h=pick([0,1]);
  return {q:`Reken uit: $${h?'':'-'}x^2$ bij $x = ${x}$.`,denk:'Vul in mét haakjes. Eerst het kwadraat.',st:[S('Invullen.',`$${h?'':'-'}(${x})^2$`),S('Kwadraat van een negatief getal is positief.',`$(${x})^2 = ${x*x}$`),S(h?'Klaar.':'Dan het minteken ervoor.',`$${h?x*x:-x*x}$`)],
   a:`$${h?x*x:-x*x}$`,in:[{lab:'=',v:h?x*x:-x*x,fx:[[h?-x*x:x*x,h?`$(${x})^2 = ${x} · ${x} = ${x*x}$: min keer min is plus.`:`Eerst het kwadraat ($${x*x}$), dan het minteken vóór de x²: $${-x*x}$.`]]}]}},
 mw:(p,r)=>{p=p??R(-3,2);r=r??R(1,3);const x=p-r*r;
  return {q:`Reken uit: $√{-x${pl(p)}}$ bij $x = ${x}$.`,denk:'Eerst wat onder de wortel staat, met haakjes om x.',st:[S('Onder de wortel.',`$-(${x})${pl(p)} = ${-x}${pl(p)} = ${r*r}$`),S('Wortel.',`$√{${r*r}} = ${r}$`)],
   a:`$${r}$`,in:[{lab:'=',v:r,fx:sq(x+p)&&x+p>=0&&Math.sqrt(x+p)!==r?[[Math.sqrt(x+p),`Onder de wortel: $-(${x}) = ${-x}$. Dus $${-x}${pl(p)} = ${r*r}$.`]]:[]}]}},
 nul:(a,p)=>{a=a??pick([-1,-1,-2,-3]);const x=p??(R(-4,5)||2),b=-a*x;
  return {q:`Voor welke x is $${co(a,'x')}${pl(b)} = 0$?`,denk:'Haal eerst het losse getal naar de andere kant. Deel dan door het getal vóór x, mét het minteken.',
   st:[S('Losse getal weg.',`$${co(a,'x')} = ${-b}$`),S(`Delen door $${a}$.`,`$x = ${-b} : ${P(a)} = ${x}$`),S('Controle.',`$${a===-1?'-':a+' · '}${P(x)}${pl(b)} = 0$ ✓`)],
   a:`$x = ${x}$`,in:[{lab:'x =',v:x,fx:x?[[-x,`Je bent het laatste minteken vergeten: $${co(a,'x')} = ${-b}$, dus $x = ${-b} : ${P(a)} = ${x}$. Controleer door in te vullen.`]]:[]}]}},
 rp:(s,m,p,q)=>{s=s??pick([1,-1]);m=m??pick([1,-1,-1]);p=p??(R(-4,4)||1);q=q??R(-4,4);const x=m<0?p:-p;
  return {q:`Wat is het startpunt van de grafiek van $y = ${s<0?'-':''}√{${m<0?'-x':'x'}${pl(p)}}${pl(q)}$?`,denk:'Onder de wortel moet 0 staan. Los dat op en controleer door in te vullen.',
   st:[S('Onder de wortel is 0.',`$${m<0?'-x':'x'}${pl(p)} = 0$`),S('Oplossen.',m<0?`$-x = ${-p}$, dus $x = ${p}$`:`$x = ${-p}$`),S('Controle.',`$${m<0?(x<0?`-(${x})`:`-${x}`):P(x)}${pl(p)} = 0$ ✓`),S('Dan y.',`$y = ${s<0?'-':''}√{0}${pl(q)} = ${q}$`)],
   a:`$(${x}, ${q})$`,in:[{lab:'x',v:x,fx:x?[[-x,`Vul $x = ${-x}$ in: ${m<0?`$-(${-x})${pl(p)} = ${x+p}$`:`$${P(-x)}${pl(p)} = ${-x+p}$`}, geen 0. Het startpunt ligt bij $x = ${x}$.`]]:[]},{lab:'y',v:q}]}},
 /* T2 */
 kies:(m,p,s,q)=>{m=m??pick([-1,-1,1]);p=p??R(-3,3);s=s??pick([1,-1]);q=q??R(-3,3);const xs=[0,1,4,9].map(k=>m<0?p-k:k-p);
  return {q:`Je maakt een tabel bij $y = ${s<0?'-':''}√{${m<0?'-x':'x'}${pl(p)}}${pl(q)}$. Welke x moet je invullen zodat onder de wortel 0, 1, 4 en 9 staat?`,
   denk:m<0?'Los op: $-x'+pl(p)+' = 0$, $= 1$, $= 4$ en $= 9$. Let op het minteken bij $-x$.':'Los op: $x'+pl(p)+' = 0$, $= 1$, $= 4$ en $= 9$.',
   st:[0,1,4,9].map((k,i)=>S(`Onder de wortel ${k}.`,m<0?`$-x${pl(p)} = ${k}$ → $-x = ${k-p}$ → $x = ${xs[i]}$`:`$x${pl(p)} = ${k}$ → $x = ${xs[i]}$`)),
   a:`$x = ${xs.join(';\\ ')}$`,in:[0,1,4,9].map((k,i)=>({lab:`onder de wortel ${k}:  x =`,v:xs[i],fx:xs[i]?[[-xs[i],m<0?`$-x = ${-xs[i]}$, dus $x = ${xs[i]}$. Het laatste minteken draait het om.`:`$x = ${k} - ${P(p)} = ${xs[i]}$.`]]:[]}))}},
 midden:(a,m,n)=>{a=a??pick([1,2,-1,0.5]);m=m??R(1,8);n=n??-R(1,8);if(m===-n)n--;const t=(m+n)/2;
  return {q:`Je maakt een tabel bij $y = ${a===1?'':a===-1?'-':nf(a)}(x${pl(-m)})(x${pl(-n)})$. Welke x zet je in het midden van je tabel?`,
   denk:'In het midden komt de top. Die ligt precies tussen de twee snijpunten met de x-as. Let op het teken: $(x + 8)$ is 0 bij $x = -8$.',
   st:[S('Snijpunten met de x-as.',`$x${pl(-m)} = 0$ → $x = ${m}$ en $x${pl(-n)} = 0$ → $x = ${n}$`),S('Midden ertussen.',`$[[${m} + ${P(n)}|2]] = ${nf(t)}$`)],
   a:`$x = ${nf(t)}$`,in:[{lab:'x =',v:t,fx:[[(m-n)/2,`Bij $(x${pl(-n)})$ hoort $x = ${n}$, niet $${-n}$: $${n}${pl(-n)} = 0$.`],[(-m+n)/2,`Bij $(x${pl(-m)})$ hoort $x = ${m}$, niet $${-m}$.`],[-t,'De tekens zijn omgedraaid. $(x - 7) = 0$ bij $x = 7$ en $(x + 8) = 0$ bij $x = -8$.']].filter(e=>e[0]!==t)}]}},
 top:(a,p,q)=>{a=a??pick([1,2,-1,3]);p=p??(R(1,6)*pick([1,-1]));q=q??R(-6,6);
  return {q:`Je maakt een tabel bij $y = ${a===1?'':a===-1?'-':a}(x${pl(-p)})^2${pl(q)}$. Welke x zet je in het midden van je tabel?`,
   denk:'In het midden komt de top. Wanneer is wat tussen de haakjes staat 0?',
   st:[S('Tussen de haakjes 0.',`$x${pl(-p)} = 0$ → $x = ${p}$`),S('Top.',`$(${p}, ${q})$`)],
   a:`$x = ${p}$`,in:[{lab:'x =',v:p,fx:[[-p,`$x${pl(-p)} = 0$ bij $x = ${p}$. Het teken in de formule is omgekeerd.`]]}]}},
 nmag:(k,p,c)=>{k=k??pick([6,8,12]);p=p??(R(1,5)*pick([1,-1]));c=c??R(-3,3);
  return {q:`Je maakt een tabel bij $y = [[${k}|x${pl(-p)}]]${pl(c)}$. Welke x mag je niet invullen?`,denk:'Delen door 0 kan niet. Wanneer is de noemer 0?',
   st:[S('Noemer 0.',`$x${pl(-p)} = 0$ → $x = ${p}$`),S('Daar zit de verticale asymptoot.',`$x = ${p}$`)],
   a:`$x = ${p}$`,in:[{lab:'x =',v:p,fx:[[-p,`Vul $x = ${-p}$ in: $${-p}${pl(-p)} = ${-2*p}$, geen 0. De noemer is 0 bij $x = ${p}$.`]]}]}}
};

/* ---------- T5: snijpunten, eigen vraagsoort 'snij' ----------
   q.sn = {as:'x'|'y', sol:[…], tex, why}. Eerst kiest ze zelf hoe vaak; daarna pas komen er vakjes. */
const SN={
 lijn:(a,r)=>{a=a??pick([2,-2,3,-3,-1,1]);r=r??(R(1,6)*pick([1,-1]));const b=-a*r,tex=`y = ${co(a,'x')}${pl(b)}`;
  return {tex,as:'x',sol:[r],why:`Een schuine lijn snijdt de x-as altijd 1 keer. $${co(a,'x')}${pl(b)} = 0$ → $${co(a,'x')} = ${-b}$ → $x = ${r}$.`}},
 hor:(c)=>{c=c??(R(1,6)*pick([1,-1]));return {tex:`y = ${c}`,as:'x',sol:[],why:`y is altijd ${nf(c)}, nooit 0. Een horizontale lijn die niet óp de x-as ligt, snijdt de x-as nooit.`}},
 svorm:(a,m,n)=>{a=a??pick([1,2,-1,0.5,3]);m=m??R(-8,8);n=n??R(-8,8);const sol=m===n?[m]:[m,n].sort((u,v)=>u-v);
  const tex=m===n?`y = ${a===1?'':a===-1?'-':nf(a)}(x${pl(-m)})^2`:`y = ${a===1?'':a===-1?'-':nf(a)}(x${pl(-m)})(x${pl(-n)})`;
  return {tex,as:'x',sol,why:m===n?`$(x${pl(-m)})^2 = 0$ alleen bij $x = ${m}$. De top ligt óp de x-as: 1 keer.`:`$y = 0$ als één van de haakjes 0 is: $x${pl(-m)} = 0$ → $x = ${m}$, en $x${pl(-n)} = 0$ → $x = ${n}$. Het teken draait om.`}},
 tvorm:(a,p,n)=>{a=a??pick([1,-1,2,-2]);p=p??R(-4,4);n=n??pick([0,1,2,2]);const d=R(1,3);
  const q=n===2?-a*d*d:n===1?0:a*R(1,5),sol=n===2?[p-d,p+d]:n===1?[p]:[];
  const tex=`y = ${a===1?'':a===-1?'-':a}(x${pl(-p)})^2${pl(q)}`,dal=a>0,pos=q>0?'boven':q<0?'onder':'op';
  return {tex,as:'x',sol,why:`Top $(${p}, ${q})$. $a ${dal?'> 0':'< 0'}$: ${dal?'dal':'berg'}parabool. De top ligt ${pos} de x-as, dus ${sol.length} keer.`+(n===2?` Oplossen: $${a===1?'':a===-1?'-':a}(x${pl(-p)})^2 = ${-q}$ → $(x${pl(-p)})^2 = ${d*d}$ → $x${pl(-p)} = ${d}$ of $${-d}$ → $x = ${p+d}$ of $x = ${p-d}$.`:n===1?` Het snijpunt is de top: $x = ${p}$.`:'')}},
 wortx:(s,p,q)=>{s=s??pick([1,-1]);p=p??R(-4,4);q=q??(R(1,4)*pick([1,-1]));const een=s*q<0,x=q*q-p;
  return {tex:`y = ${s<0?'-':''}√{x${pl(p)}}${pl(q)}`,as:'x',sol:een?[x]:[],
   why:`Een wortel is nooit negatief. ${s>0?`$√{…}${pl(q)}$ is dus minstens $${q}$.`:`$-√{…}${pl(q)}$ is dus hoogstens $${q}$.`} `+(een?`Hij kan 0 worden: $${s<0?'-':''}√{x${pl(p)}} = ${-q}$ → $√{x${pl(p)}} = ${Math.abs(q)}$ → $x${pl(p)} = ${q*q}$ → $x = ${x}$. 1 keer.`:`Hij wordt nooit 0: 0 keer.`)}},
 hypx:(c,m)=>{c=c??pick([0,1,-1,2,-2,3]);m=m??(R(1,4)*pick([1,-1]));const k=c?-c*m:pick([6,-4,8]);
  return {tex:`y = ${k<0?'-':''}[[${Math.abs(k)}|x]]${pl(c)}`,as:'x',sol:c?[m]:[],
   why:c?`$${k<0?'-':''}[[${Math.abs(k)}|x]] = ${-c}$ → $x = ${k} : ${P(-c)} = ${m}$. 1 keer.`:`$[[${Math.abs(k)}|x]]$ wordt nooit 0: een breuk is alleen 0 als er boven 0 staat. 0 keer (de x-as is de asymptoot).`}},
 worty:(s,p,q,m)=>{s=s??pick([1,-1]);m=m??pick([1,-1]);q=q??R(-4,4);const mag=Math.random()<.65;p=p??(mag?pick([0,1,4,9]):-R(1,5));
  const ok=p>=0;
  return {tex:`y = ${s<0?'-':''}√{${m<0?'-x':'x'}${pl(p)}}${pl(q)}`,as:'y',sol:ok?[s*Math.sqrt(p)+q]:[],
   why:`Op de y-as is $x = 0$. Onder de wortel staat dan $${p}$. `+(ok?`Dat mag: $y = ${s<0?'-':''}√{${p}}${pl(q)} = ${s*Math.sqrt(p)+q}$. 1 keer.`:`$√{${p}}$ bestaat niet. De grafiek komt niet bij $x = 0$: 0 keer.`)}},
 hypy:(k,p,c)=>{p=p??pick([0,1,-1,2,-2,3]);k=k??(p?p*pick([2,3,-2,4]):pick([6,4]));c=c??R(-3,3);
  return {tex:`y = [[${k}|x${pl(-p)}]]${pl(c)}`.replace('[[-','-[['),as:'y',sol:p?[k/(-p)+c]:[],
   why:p?`Vul $x = 0$ in: $[[${k}|${-p}]]${pl(c)} = ${k/(-p)}${pl(c)} = ${k/(-p)+c}$. 1 keer.`:`Bij $x = 0$ is de noemer 0. De y-as is de verticale asymptoot: 0 keer.`}},
 kwy:(a,b,c)=>{a=a??pick([1,-1,2,0.5]);b=b??R(-6,6);c=c??R(-9,9);
  return {tex:`y = ${a===1?'':a===-1?'-':nf(a)}x^2${b?pl(b)+'x':''}${pl(c)}`,as:'y',sol:[c],why:`Elke parabool snijdt de y-as 1 keer. Vul $x = 0$ in: alleen het losse getal blijft over, $y = ${c}$.`}}
};
function SQ(kind,...a){const z=SN[kind](...a),as=z.as;
 const q={type:'snij',sn:z,q:`Hoe vaak snijdt de grafiek van $${z.tex}$ de <b>${as}-as</b>? En waar?`,
  denk:as==='x'?'Op de x-as is $y = 0$. Kies eerst zelf hoe vaak, dan pas de punten.':'Op de y-as is $x = 0$. Mag je $x = 0$ invullen?',
  a:z.sol.length?`${z.sol.length} keer: ${z.sol.map(v=>as==='x'?`$(${nf(v)}, 0)$`:`$(0, ${nf(v)})$`).join(' en ')}`:`0 keer`,
  u:z.why,st:[S('Zo zit het.',z.why)]};
 return q}

function drawSnij(q,it,box,api){
 const z=q.sn,as=z.as,k=it.sn=it.sn||{n:null,done:false},max=as==='x'?2:1;
 const knop=n=>`<button class="opt" data-n="${n}" style="font-size:1.2rem;min-width:70px" ${k.n!=null?'disabled':''}>${n} keer</button>`;
 let h=`<div class="card stack"><span class="tag">Eerst: hoe vaak?</span><div class="opts row" style="gap:8px">${[...Array(max+1).keys()].map(knop).join('')}</div>`;
 if(k.n>0&&!k.done)h+=`<form id="snf" class="stack" style="margin-top:8px"><span class="sub">Typ ${as==='x'?'de x van elk snijpunt (y is 0 op de x-as)':'de y van het snijpunt (x is 0 op de y-as)'}</span>
  <div class="row" style="flex-wrap:wrap;gap:12px">${[...Array(k.n).keys()].map(i=>as==='x'?`<label class="row" style="gap:4px">(<input class="cell" style="width:80px;font-size:1.1rem" data-i="${i}" inputmode="text" autocomplete="off" aria-label="x van snijpunt ${i+1}">, 0)</label>`:`<label class="row" style="gap:4px">(0, <input class="cell" style="width:80px;font-size:1.1rem" data-i="${i}" inputmode="text" autocomplete="off" aria-label="y van het snijpunt">)</label>`).join('')}</div>
  <span class="sub" style="font-size:.85rem">Een komma, een minteken of een breuk als 3/4 mag.</span><button class="btn">Controleer</button></form>`;
 h+='</div>';box.innerHTML=h;
 const lees=v=>{v=String(v).trim().replace(/\s/g,'').replace(/[−–‐]/g,'-');const b=v.match(/^(-?\d+(?:[.,]\d+)?)\/(-?\d+)$/);if(b)return parseFloat(b[1].replace(',','.'))/+b[2];return v===''?NaN:Number(v.replace(',','.'))};
 const zelfde=(x,a)=>isFinite(x)&&Math.abs(x-a)<=Math.max(0.006,Math.abs(a)*0.002);
 const klaar=(vals)=>{k.done=true;const sol=z.sol,nOk=k.n===sol.length;let ok=nOk,mis=[];
  if(nOk&&vals){const left=sol.slice();vals.forEach(v=>{const j=left.findIndex(a=>zelfde(v,a));if(j<0){ok=false;if(sol.some(a=>zelfde(-v,a)&&a!==0))mis.push(`Bij ${as==='x'?'x':'y'} = ${nf(v)} is het teken omgedraaid. Controleer door in te vullen.`)}else left.splice(j,1)})}
  if(!nOk)mis.push(`Je koos ${k.n} keer. Het is ${sol.length} keer.`);
  const jij=`${k.n} keer`+(vals&&vals.length?': '+vals.map(v=>as==='x'?`(${nf(v)}, 0)`:`(0, ${nf(v)})`).join(' en '):'');
  api.redraw();
  api.finish(ok,`<div class="fb ${ok?'ok':'bad'}"><div class="head">${ok?'Goed!':'Niet goed'}</div>${ok?'':`<div><b>Het goede antwoord is:</b></div><div class="res">${fmt(q.a)}</div>`}${mis.length?`<div><b>Dit ging er mis:</b></div><div class="mistake">${fmt(mis.join('<br>'))}</div>`:''}<div><b>Zo zit het:</b></div><div>${fmt(z.why)}</div></div>`,jij)};
 box.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>{k.n=+b.dataset.n;if(k.n===0){api.redraw();klaar(null)}else{api.redraw();const f=box.querySelector('#snf input');if(f)f.focus()}});
 const fm=box.querySelector('#snf');
 if(fm)fm.onsubmit=e=>{e.preventDefault();const ins=[...fm.querySelectorAll('input')],vals=ins.map(i=>lees(i.value));
  if(vals.some(v=>!isFinite(v))){fm.querySelector('.sub').textContent='Vul elk vakje in met een getal';return}
  k.vals=vals;klaar(vals)};
 if(k.done){box.querySelectorAll('[data-n]').forEach(b=>{b.disabled=true;if(+b.dataset.n===k.n)b.classList.add(k.n===z.sol.length?'ok':'bad');else if(+b.dataset.n===z.sol.length)b.classList.add('ok')})}
}

/* ---------- de sommen ----------
   Vaste beginsommen (stabiele id's voor foute vragen en het herhaalschema); bij fout komt dezelfde soort terug met nieuwe getallen (v). */
const N='Oefenblok';
const mk=(id,o,f,args,extra)=>Object.assign({id,o,nr:N},f(...args),{v:gen(()=>f())},extra||{});
const Q=[
 /* T1 Min x invullen */
 mk('tg1a','tg1',G.rp,[-1,-1,1,-1],{nr:'Zoals je oefenopdracht H3.5'}),
 mk('tg1b','tg1',G.nul,[-1,1]),
 mk('tg1c','tg1',G.mx,[1,-1]),
 mk('tg1d','tg1',G.mx,[5,-3]),
 mk('tg1e','tg1',G.mkw,[-3]),
 mk('tg1f','tg1',G.mw,[1,3]),
 mk('tg1g','tg1',G.rp,[1,-1,4,2]),
 mk('tg1h','tg1',G.nul,[-2,3]),
 /* T2 Slimme x-waarden */
 mk('tg2a','tg2',G.kies,[-1,1,-1,-1],{nr:'Zoals je oefenopdracht H3.5'}),
 mk('tg2b','tg2',G.midden,[0.5,7,-8]),
 mk('tg2c','tg2',G.top,[2,-3,1]),
 mk('tg2d','tg2',G.nmag,[6,-2,1]),
 mk('tg2e','tg2',G.kies,[1,3,1,-2]),
 mk('tg2f','tg2',G.midden,[-1,2,-6]),
 /* T3 Tabel invullen */
 mk('tg3a','tg3',k=>TB('wort',-1,1,-1),[],{v:gen(()=>TB('wort')),nr:'Zoals je oefenopdracht H3.5'}),
 mk('tg3b','tg3',k=>TB('lin',-2,3),[],{v:gen(()=>TB('lin'))}),
 mk('tg3c','tg3',k=>TB('minx',4),[],{v:gen(()=>TB('minx'))}),
 mk('tg3d','tg3',k=>TB('kw',-2,-3),[],{v:gen(()=>TB('kw'))}),
 mk('tg3e','tg3',k=>TB('negkw',4),[],{v:gen(()=>TB('negkw'))}),
 mk('tg3f','tg3',k=>TB('hyp',6,1),[],{v:gen(()=>TB('hyp'))}),
 mk('tg3g','tg3',k=>TB('wort',1,2,-3),[],{v:gen(()=>TB('wort'))}),
 /* T4 Tabel controleren */
 mk('tg4a','tg4',k=>FE('wort',-1,1,-1),[],{v:gen(()=>FE(pick(['wort','minx']))),nr:'Zoals je oefenopdracht H3.5'}),
 mk('tg4b','tg4',k=>FE('lin',3,-1),[],{v:gen(()=>FE('lin'))}),
 mk('tg4c','tg4',k=>FE('kw',2,-1),[],{v:gen(()=>FE('kw'))}),
 mk('tg4d','tg4',k=>FE('negkw',5),[],{v:gen(()=>FE('negkw'))}),
 mk('tg4e','tg4',k=>FE('hyp',12,0),[],{v:gen(()=>FE('hyp'))}),
 /* T5 Snijpunten */
 mk('tg5a','tg5',k=>SQ('svorm',0.5,7,-8),[],{v:gen(()=>SQ('svorm'))}),
 mk('tg5b','tg5',k=>SQ('tvorm',1,2,0),[],{v:gen(()=>SQ('tvorm'))}),
 mk('tg5c','tg5',k=>SQ('tvorm',-1,-1,2),[],{v:gen(()=>SQ('tvorm'))}),
 mk('tg5d','tg5',k=>SQ('tvorm',2,3,1),[],{v:gen(()=>SQ('tvorm'))}),
 mk('tg5e','tg5',k=>SQ('lijn',-2,3),[],{v:gen(()=>SQ(pick(['lijn','lijn','hor'])))}),
 mk('tg5f','tg5',k=>SQ('wortx',1,2,3),[],{v:gen(()=>SQ('wortx'))}),
 mk('tg5g','tg5',k=>SQ('wortx',-1,1,2),[],{v:gen(()=>SQ('wortx'))}),
 mk('tg5h','tg5',k=>SQ('hypx',0),[],{v:gen(()=>SQ('hypx'))}),
 mk('tg5i','tg5',k=>SQ('hypx',2,-3),[],{v:gen(()=>SQ('hypx'))}),
 mk('tg5j','tg5',k=>SQ('worty',-1,1,-1,-1),[],{v:gen(()=>SQ('worty'))}),
 mk('tg5k','tg5',k=>SQ('worty',1,-4,2,1),[],{v:gen(()=>SQ('worty'))}),
 mk('tg5l','tg5',k=>SQ('hypy',6,0,1),[],{v:gen(()=>SQ('hypy'))}),
 mk('tg5m','tg5',k=>SQ('hypy',6,2,-1),[],{v:gen(()=>SQ('hypy'))}),
 mk('tg5n','tg5',k=>SQ('kwy',-1,4,-5),[],{v:gen(()=>SQ('kwy'))})
];

/* ---------- toevoegen aan wiskunde: vóór de toetsvoorbereiding, en vooraan in de leervolgorde (voorrang in het dagplan) ---------- */
const i=V.SECS.findIndex(s=>s.par==='tv');V.SECS.splice(i<0?V.SECS.length:i,0,...SECS);
V.Q.push(...Q);
Object.assign(V.SNAP,SNAP);
V.PN.tg='Oefenblok: tabellen en snijpunten';
V.leer=['tg',...(V.leer||[]).filter(p=>p!=='tg')];
V.custom=Object.assign(V.custom||{},{snij:drawSnij});
V.GENT={K,G,SN,TB,FE,SQ};
/* uitleg vooraf, de eerste keer (afspraak 24 nov 2026): de minregel lezen en twee controlesommetjes */
V.intro=(V.intro||[]).concat([{id:'tg-min',o:SECS.map(s=>s.id),titel:'De minregel: −x met een negatief getal',
 html:`<p><b>$-x$ betekent: het tegenovergestelde van x.</b> Is x positief, dan wordt $-x$ negatief. Is x negatief, dan wordt $-x$ positief.</p>
  <p>$x = 3$ → $-x = -3$<br>$x = -3$ → $-x = -(-3) = 3$ &nbsp;(twee mintekens: plus)</p>
  <p><b>Vul daarom altijd in mét haakjes.</b> $-x + 1$ met $x = -3$ wordt $-(-3) + 1 = 3 + 1 = 4$.<br>Zonder haakjes schrijf je snel $-3 + 1$, en dan verdwijnt er een minteken. Dat gebeurde bij je oefenopdracht.</p>
  <p><b>Een vergelijking met $-x$:</b> $-x + 1 = 0$ → $-x = -1$ → $x = 1$. Het laatste minteken draait het om. Controleer door in te vullen: $-1 + 1 = 0$ ✓.</p>
  <p><b>Kwadraat:</b> $(-3)^2 = 9$, maar $-3^2 = -9$. En $-x^2$ met $x = -3$ is $-(-3)^2 = -9$: eerst het kwadraat, dan het minteken.</p>`,
 check:[{q:'Reken uit: $-x$ bij $x = -4$.',v:4,u:'$-x = -(-4) = 4$. Twee mintekens: plus.',fout:[[-4,'Je schreef de $-4$ gewoon over. Maar $-x$ is het tegenovergestelde: $-(-4) = 4$.']]},
  {q:'Voor welke x is $-x + 1 = 0$?',v:1,u:'$-x = -1$, dus $x = 1$. Controle: $-1 + 1 = 0$ ✓.',fout:[[-1,'Vul $x = -1$ in: $-(-1) + 1 = 1 + 1 = 2$. Geen 0. Bij $-x = -1$ hoort $x = 1$.']]}],
 nog:`<p>Zie $-x$ als: <b>draai het teken van x om</b>.</p><p>$x = -4$: draai om → $4$.<br>$x = 5$: draai om → $-5$.</p><p>Schrijf bij het invullen altijd haakjes: $-(-4)$. Dan zie je de twee mintekens staan, en twee mintekens worden plus.</p><p>Bij $-x = -1$: draai beide kanten om → $x = 1$.</p>`}]);
})();
