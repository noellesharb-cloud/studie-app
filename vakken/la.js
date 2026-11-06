/* Latijn, Hoofdstuk 7A Door het oog van de naald. Alleen vragen en uitleg; de manier van oefenen staat in oefen/engine.js.
   Bron: woordenlijst 7A, Grammatica H7 (I) zelfstandig naamwoord groep 3 (p. 90), Opdracht Woorden 1 (oefenboek p. 81-82), Tekst 7A (p. 84).
   Rijtjes mons, sanguis en frater komen uit het huiswerk van do 5 nov (niet uit het boek); mors, pes en imperator zijn extra.
   Naamvalkleuren zoals in het boek: nom rood, gen groen, dat geel, acc blauw, abl lila.
   Eigen vraagsoort (zie custom onderaan): rij = naamvalrijtje bouwen.
   De vertaling van tekst 7A en de antwoorden van Woorden 1 zijn door Claude gemaakt en kunnen afwijken van die van de docent. */
window.VAKDATA=window.VAKDATA||{};
VAKDATA.la=(()=>{
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=(arr,n,not)=>shuf([...new Set(arr)].filter(x=>x!==not&&!(Array.isArray(not)&&not.includes(x)))).slice(0,n);
const L=s=>`<i>${s}</i>`;
const NV=['nom','gen','dat','acc','abl'],NVL={nom:'nominativus',gen:'genitivus',dat:'dativus',acc:'accusativus',abl:'ablativus'};
const MK=(k,s)=>`<span class="mk c-${k}">${s}</span>`;

/* ---------- woorden 7A (alle woorden uit de lijst) ---------- */
const W=[
 ['dives, -es, -es (divitis)','rijk'],['villa','landhuis'],['habui','perf. van habeo (habēre): hebben, houden'],
 ['crudelis, -is, -e (crudelis)','wreed'],['soleo (solēre)','de gewoonte hebben, gewoonlijk doen'],['sanguis, sanguinis (m)','bloed'],
 ['imperator, imperatoris (m)','1. opperbevelhebber 2. keizer'],['invito (invitare)','uitnodigen'],['dum','1. terwijl 2. zolang als'],
 ['e(x) + abl.','uit, weg van, van'],['fregi','perf. van frango (frangĕre)'],['frango (frangĕre)','breken'],['pes, pedis (m)','voet'],
 ['crudelitas, crudelitatis (v)','wreedheid'],['dominus','heer, heerser'],['parco (parcĕre) + dat.','sparen'],
 ['omnis, -is, -e (omnis)','1. ieder, elk 2. geheel 3. (mv.) alle(n)'],['compleo (complēre)','vullen'],['praeterea','bovendien'],
 ['gravis, -is, -e (gravis)','1. zwaar 2. gewichtig 3. ernstig'],['bonus, -a, -um','goed'],['si','als'],['necesse','noodzakelijk'],
 ['neco (necare)','doden'],['mors, mortis (v)','dood'],['servo (servare)','redden, beschermen'],['nomen, nominis (o)','naam']
];
const WU={habui:'habui = ik heb gehad / ik had. Het is een vorm van habeo.',fregi:'fregi = ik heb gebroken / ik brak. Het is een vorm van frango (breken).',
 'parco (parcĕre) + dat.':'parco heeft een dativus bij zich: parce mihi = spaar mij (tekst r. 13).',
 'e(x) + abl.':'ex voor een klinker, e of ex voor een medeklinker: unus ex servis = een van de slaven (r. 9).'};

/* ---------- naamvalrijtjes groep 3 ---------- */
/* [ev nom..abl, mv nom..abl], betekenis, geslacht, foute vormen voor de rijtjes-oefening, uitleg */
const RIJ={
 rex:{nl:'koning',g:'m',f:['rex','regis','regi','regem','rege','reges','regum','regibus','reges','regibus'],x:['rexem','regium','regae'],bron:'Boek p. 90',
   u:'Stam <b>reg-</b> (gen. reg-is min -is). Achter de stam: -is, -i, -em, -e · -es, -um, -ibus, -es, -ibus.'},
 nomen:{nl:'naam',g:'o',f:['nomen','nominis','nomini','nomen','nomine','nomina','nominum','nominibus','nomina','nominibus'],x:['nominem','nomines','nomenis'],bron:'Boek p. 90',
   u:'Onzijdig: nom en acc zijn gelijk (ev <b>nomen</b>, mv <b>nomina</b> op -a). Stam <b>nomin-</b>.'},
 mons:{nl:'berg',g:'m',f:['mons','montis','monti','montem','monte','montes','montium','montibus','montes','montibus'],x:['montum','monsis','monsem'],bron:'Huiswerk',
   u:'Stam <b>mont-</b>. Let op: gen mv is <b>montium</b> (met -ium), net als urbs → urbium (Nota bene 4). Dat gebeurt vaak bij een kort woord waarvan de stam op twee medeklinkers eindigt: mon<b>t</b>-is.'},
 sanguis:{nl:'bloed',g:'m',f:['sanguis','sanguinis','sanguini','sanguinem','sanguine','sanguines','sanguinum','sanguinibus','sanguines','sanguinibus'],x:['sanguisem','sanguem','sanguinium'],bron:'Huiswerk',
   u:'Stam <b>sanguin-</b>: de nominativus lijkt er niet op, dus leer de genitivus mee (sanguis, <b>sanguinis</b>). Het meervoud komt in teksten bijna niet voor, maar schrijf het rijtje wel helemaal.'},
 frater:{nl:'broer',g:'m',f:['frater','fratris','fratri','fratrem','fratre','fratres','fratrum','fratribus','fratres','fratribus'],x:['fraterem','fraterum','frateris'],bron:'Huiswerk, extra moeilijk',
   u:'Extra moeilijk: de <b>e</b> van frat<b>e</b>r valt weg. Stam <b>fratr-</b> (gen. fratr-is). Dus fratrem, niet fraterem.'},
 imperator:{nl:'keizer',g:'m',f:['imperator','imperatoris','imperatori','imperatorem','imperatore','imperatores','imperatorum','imperatoribus','imperatores','imperatoribus'],x:['imperatorium','imperatorae'],bron:'Extra, woordenlijst',
   u:'Makkelijk: de stam is de hele nominativus, <b>imperator-</b>. In tekst 7A: imperatorem (r. 7), imperatoris (r. 12).'},
 pes:{nl:'voet',g:'m',f:['pes','pedis','pedi','pedem','pede','pedes','pedum','pedibus','pedes','pedibus'],x:['pesem','pesis','pedium'],bron:'Extra, woordenlijst',
   u:'Stam <b>ped-</b> (gen. ped-is). In tekst 7A: ad imperatoris <b>pedes</b> (acc mv, r. 12). Denk aan pedicure.'},
 mors:{nl:'dood',g:'v',f:['mors','mortis','morti','mortem','morte','mortes','mortium','mortibus','mortes','mortibus'],x:['mortum','morsem','morsis'],bron:'Extra, woordenlijst',
   u:'Stam <b>mort-</b>. Net als mons: gen mv <b>mortium</b>. In tekst 7A: a <b>morte</b> (abl ev, r. 20).'},
 /* --- groep 1 en 2 (basis, D-toets periode 1) --- */
 silva:{nl:'bos',g:'v',f:['silva','silvae','silvae','silvam','silva','silvae','silvarum','silvis','silvas','silvis'],x:['silvum','silvos','silvibus','silvorum'],bron:'D-toets P1',
   u:'Groep 1 (a-stammen). Uitgangen: -a, -ae, -ae, -am, -a · -ae, -arum, -is, -as, -is. Let op: nom ev en abl ev zijn allebei <b>silva</b>.'},
 donum:{nl:'geschenk',g:'o',f:['donum','doni','dono','donum','dono','dona','donorum','donis','dona','donis'],x:['donae','donam','donibus','donarum'],bron:'D-toets P1',
   u:'Groep 2, onzijdig. Nom en acc zijn gelijk (ev <b>donum</b>, mv <b>dona</b> op -a). Verder als equus.'},
 equus:{nl:'paard',g:'m',f:['equus','equi','equo','equum','equo','equi','equorum','equis','equos','equis'],x:['equae','equam','equibus','equarum'],bron:'D-toets P1',
   u:'Groep 2 (o-stammen). Uitgangen: -us, -i, -o, -um, -o · -i, -orum, -is, -os, -is.'}
};
const PL=['nom ev','gen ev','dat ev','acc ev','abl ev','nom mv','gen mv','dat mv','acc mv','abl mv'];
const rijHtml=k=>{const r=RIJ[k];return `<table class="lrij"><tr><th></th><th>ev</th><th>mv</th></tr>${NV.map((n,i)=>`<tr><td>${MK(n,n)}</td><td>${r.f[i]}</td><td>${r.f[i+5]}</td></tr>`).join('')}</table>`};

/* ---------- tekst 7A met modelvertaling: [regel(s), Latijn, vertaling, kernpunten, tip] ---------- */
const Z=[
 ['1','Vedius Pollio valde dives erat.','Vedius Pollio was erg rijk.',['valde = erg, zeer','dives erat = was rijk'],''],
 ['1–2','In magna villa habitavit et multos servos habuit.','Hij woonde in een groot landhuis en had veel slaven.',['in magna villa = in een groot landhuis','habitavit = hij woonde','multos servos habuit = hij had veel slaven'],'habuit is een vorm van habeo, net als habui in de woordenlijst.'],
 ['3','Crudelis quoque erat.','Hij was ook wreed.',['crudelis = wreed','quoque = ook'],''],
 ['3–4','Pollio, cum servus peccaverat, solebat eum in vivarium inicere.','Wanneer een slaaf een fout had gemaakt, had Pollio de gewoonte hem in de vijver te gooien.',['cum servus peccaverat = wanneer een slaaf een fout had gemaakt','solebat = had de gewoonte (soleo)','eum in vivarium inicere = hem in de vijver (te) gooien'],'Begin met de bijzin: "Wanneer een slaaf …, had Pollio de gewoonte …".'],
 ['5–6','In vivario murenae erant, quae sanguine hominum saginabant.','In de vijver zaten murenen, die zich voedden met het bloed van mensen.',['in vivario = in de vijver','murenae erant = er waren murenen','quae = die','sanguine = met (het) bloed: abl ev (saginare + abl)','hominum = van (de) mensen: gen mv'],'sanguine en hominum zijn allebei groep 3.'],
 ['7–8','Quodam die Pollio imperatorem Augustum, amicum suum, ad cenam invitavit.','Op een zekere dag nodigde Pollio keizer Augustus, zijn vriend, uit voor een diner.',['quodam die = op een zekere dag','imperatorem Augustum = keizer Augustus: acc ev, lijdend voorwerp','amicum suum = zijn vriend (bijstelling)','ad cenam invitavit = nodigde uit voor een diner'],''],
 ['8–9','Dum amici cenant, unus ex servis Pollionis imprudens crystallinum fregit.','Terwijl de vrienden dineren, breekt een van de slaven van Pollio per ongeluk een kristallen schaal.',['dum = terwijl','amici cenant = de vrienden dineren','unus ex servis = een van de slaven','Pollionis = van Pollio: gen ev','imprudens = per ongeluk','crystallinum fregit = brak een kristallen schaal'],'fregit is verleden tijd (brak), cenant tegenwoordige tijd. Na dum mag je in het Nederlands allebei in de verleden tijd zetten: "Terwijl de vrienden dineerden, brak …".'],
 ['10–11','Pollio, quia valde iratus erat, alios servos illum in vivarium inicere iussit.','Omdat Pollio erg boos was, beval hij de andere slaven hem in de vijver te gooien.',['quia valde iratus erat = omdat hij erg boos was','alios servos … iussit = beval de andere slaven','illum in vivarium inicere = hem in de vijver te gooien'],''],
 ['11–13','Servus autem confugit ad imperatoris pedes et dixit: "domine, videsne crudelitatem Pollionis? Parce mihi!"','Maar de slaaf nam zijn toevlucht tot de voeten van de keizer en zei: "Heer, ziet u de wreedheid van Pollio? Spaar mij!"',['autem = maar','confugit ad … pedes = nam zijn toevlucht tot de voeten','imperatoris = van de keizer: gen ev','domine = heer (aanspreekvorm)','videsne = ziet u? (-ne = vraag)','crudelitatem Pollionis = de wreedheid van Pollio','parce mihi = spaar mij (parco + dat)'],'pedes = acc mv (na ad). crudelitatem = acc ev.'],
 ['13–15','Motus verbis imperator iussit alios servos omnia crystallina frangere et his vivarium complere.','Geraakt door de woorden beval de keizer de andere slaven alle kristallen schalen te breken en de vijver hiermee te vullen.',['motus verbis = geraakt door de woorden','imperator iussit = de keizer beval','omnia crystallina frangere = alle kristallen schalen (te) breken','his vivarium complere = de vijver hiermee (te) vullen'],'omnia = mv onzijdig: alle. imperator is hier nom ev: het onderwerp.'],
 ['15–18','Praeterea Pollioni dixit: "Cur poena gravis? Si bonus servus crystallinum frangit, necesse est eum interficere?','Bovendien zei hij tegen Pollio: "Waarom een zware straf? Als een goede slaaf een kristallen schaal breekt, is het dan noodzakelijk hem te doden?',['praeterea = bovendien','Pollioni = tegen Pollio: dat ev','cur poena gravis = waarom een zware straf','si bonus servus … frangit = als een goede slaaf … breekt','necesse est eum interficere = is het noodzakelijk hem te doden'],''],
 ['18–19','Hominem necas, ubi imperator ipse adest? Manumitte servum et cena gaudeamus!"','Dood jij een mens, waar de keizer zelf bij is? Laat de slaaf vrij en laten we genieten van het diner!"',['hominem necas = dood jij een mens (hominem = acc ev)','ubi imperator ipse adest = waar de keizer zelf aanwezig is','manumitte servum = laat de slaaf vrij','cena gaudeamus = laten we genieten van het diner'],'necas = jij doodt (2e persoon ev). ubi kun je ook vertalen met "terwijl".'],
 ['19–20','Sic Augustus amicum castigavit et servum a morte servavit.','Zo wees Augustus zijn vriend terecht en redde hij de slaaf van de dood.',['sic = zo','amicum castigavit = wees zijn vriend terecht','servum servavit = redde de slaaf','a morte = van de dood: abl ev'],'']
];

/* ---------- onderdelen ---------- */
const SECS=[
 {id:'wo1',par:'wo',nr:'1',name:'Opdracht Woorden 1',c:'--c1',sub:'Oefenboek p. 81–82 · opdracht 1 t/m 5',
  rules:[['Zoek het Latijnse woord dat erin zit','grave → gravis · necessity → necesse · cruelty → crudelitas','Kijk dan in de woordenlijst 7A wat het betekent.'],
   ['Sanquin','sanguis, sanguinis = bloed',''],['salto mortale','mors, mortis = dood',''],['pedicure','pes, pedis = voet','']]},
 {id:'w7',par:'7w',nr:'2',name:'Woorden 7A',c:'--c2',sub:'Door het oog van de naald · 27 woorden',
  rules:W.map(w=>[L(w[0]),w[1],''])},
 {id:'g3',par:'g3',nr:'3',name:'Rijtjes groep 3',c:'--c3',sub:'Boek p. 90 · rex, nomen + mons, sanguis, frater',
  rules:[['Stam = genitivus min -is','rex, reg-is → stam <b>reg-</b> · nomen, nomin-is → stam <b>nomin-</b>','Daarom staat in de woordenlijst bij groep 3 altijd de genitivus.'],
   ['Uitgangen achter de stam','ev: — · -is · -i · -em · -e<br>mv: -es · -um · -ibus · -es · -ibus','De nominativus ev heeft geen vaste uitgang.'],
   ['Onzijdig (zoals nomen)','nom = acc, ev en mv · mv op <b>-a</b>: nomina','Net als bij donum in groep 2.'],
   ['Let op: lijken op elkaar','reg-<b>em</b> (acc ev) en reg-<b>um</b> (gen mv)',''],
   ['Twee naamvallen, één vorm','-es = nom of acc mv · -ibus = dat of abl mv','Welke het is, zie je aan de zin.'],
   ['Soms -ium in de gen mv','urbs → urbium · mons → montium · mors → mortium','']].concat(Object.keys(RIJ).filter(k=>!['silva','donum','equus'].includes(k)).map(k=>[`${k} (${RIJ[k].nl}) <small>${RIJ[k].bron}</small>`,rijHtml(k),RIJ[k].u]))},
 {id:'t7',par:'7t',nr:'4',name:'Tekst 7A',c:'--c4',sub:'Door het oog van de naald · Pollio en Augustus',
  rules:[['Woorden naast de tekst','Pollio, Pollionis · peccaverat · eum · vivarium · inicĕre · murena · quae · saginare + abl · quodam die · cena · cenare · imprudens · crystallinum · illum · confugit · motus · his · ipse · adesse · manumittĕre · gaudeamus + abl · castigare',''],
   ['Groep 3 in de tekst','sanguine (r. 5) · hominum (r. 5) · imperatorem (r. 7) · Pollionis (r. 9, 13) · imperatoris, pedes (r. 12) · crudelitatem (r. 13) · Pollioni (r. 15) · hominem (r. 18) · morte (r. 20)','']]},
 {id:'b-rij',par:'bas',nr:'B1',name:'Rijtjes groep 1 en 2',c:'--c6',sub:'D-toets P1 \u00b7 silva, donum, equus',
  rules:[['Groep 1 (silva): a-stammen','ev: -a \u00b7 -ae \u00b7 -ae \u00b7 -am \u00b7 -a<br>mv: -ae \u00b7 -arum \u00b7 -is \u00b7 -as \u00b7 -is','Let op: nom ev en abl ev zijn allebei silva.'],
   ['Groep 2 (equus): o-stammen','ev: -us \u00b7 -i \u00b7 -o \u00b7 -um \u00b7 -o<br>mv: -i \u00b7 -orum \u00b7 -is \u00b7 -os \u00b7 -is',''],
   ['Groep 2 onzijdig (donum)','nom = acc, ev en mv \u00b7 mv op <b>-a</b>: dona','Net als nomen bij groep 3.']]
   .concat(['silva','donum','equus'].map(k=>[`${k} (${RIJ[k].nl}) <small>${RIJ[k].bron}</small>`,rijHtml(k),RIJ[k].u]))},
 {id:'b-ww',par:'bas',nr:'B2',name:'Werkwoorden',c:'--c1',sub:'D-toets P1 \u00b7 flecto, perfectum, infinitivus',
  rules:[['flecto (buigen) presens','flecto \u00b7 flectis \u00b7 flectit \u00b7 flectimus \u00b7 flectitis \u00b7 flectunt',''],
   ['Perfectum herkennen','appropinquavi \u2192 appropinquo (naderen)<br>dixi \u2192 dico (zeggen)',''],
   ['Infinitivus','appropinquare (naderen) \u00b7 dicere (zeggen)','De infinitivus eindigt op -re.']]},
 {id:'b-st',par:'bas',nr:'B3',name:'Stamtijden',c:'--c2',sub:'D-toets P1 \u00b7 perfectum \u2192 presens',
  rules:[['cognovi','cognosco (leren kennen)',''],['potui','possum (kunnen)',''],['respondi','respondeo (antwoorden)','']]},
 {id:'b-wo',par:'bas',nr:'B4',name:'Basiswoorden',c:'--c3',sub:'D-toets P1',
  rules:[[L('ingenium'),'aanleg, talent',''],[L('tum'),'toen, dan',''],[L('sol'),'zon','']]},
 {id:'mix7',par:'mix',nr:'?',name:'7A door elkaar',c:'--c5',sub:'Woorden, rijtjes en tekst',
  rules:[['Zoek eerst de persoonsvorm en het onderwerp (nom)','',''],['Groep 3? Zoek de genitivus in de woordenlijst en haal -is eraf','','']]}
];

/* ---------- snap het ---------- */
const SNAP={
 g3:[['Waarom moet ik de genitivus leren?','Bij groep 3 lijkt de nominativus vaak niet op de rest: <b>pes</b> → pedis, <b>sanguis</b> → sanguinis, <b>frater</b> → fratris. Pas aan de genitivus zie je de stam. Haal -is eraf en plak de uitgangen erachter.'],
  ['Hoe zie ik of regem of regum is?','<b>-em</b> = acc ev (één koning als lijdend voorwerp). <b>-um</b> = gen mv (van de koningen). Ezelsbrug: reg<b>u</b>m klinkt als een groep (van de koningen), reg<b>e</b>m als <b>é</b>én koning.'],
  ['Waarom is nomen ook de accusativus?','nomen is onzijdig. Bij onzijdige woorden zijn nom en acc altijd gelijk, in ev én mv. Het meervoud eindigt dan op <b>-a</b>: nomina. Dat ken je al van donum → dona.']],
 t7:Z.map(z=>[`r. ${z[0]}: ${z[1].slice(0,55)}${z[1].length>55?'…':''}`,`${L(z[1])}<br><b>${z[2]}</b>${z[4]?'<br><span class="why">'+z[4]+'</span>':''}`]),
 bas:[['Wat is het verschil tussen groep 1 en groep 2?','Groep 1 (silva) zijn vrouwelijk met <b>a-stammen</b>: gen mv -arum. Groep 2 (equus, donum) zijn mannelijk of onzijdig met <b>o-stammen</b>: gen mv -orum. Onzijdig: nom = acc, mv op -a.'],
  ['Hoe herken ik welke groep?','Kijk naar de nominativus: -a = groep 1 (v), -us = groep 2 (m), -um = groep 2 (o). Bij groep 3 lijkt de nominativus niet op de rest (rex, pes, sanguis).'],
  ['Wat zijn stamtijden?','De drie basisvormen van een werkwoord: presens (ik doe), perfectum (ik deed/heb gedaan) en het participium. Met de stamtijden kun je alle vormen afleiden. Bijv. cognosco (presens) \u2192 cognovi (perfectum).']]
};
function snapHtml(id){return (SNAP[id]||[]).map(x=>`<details class="snap"><summary>${x[0]}</summary><div>${x[1]}</div></details>`).join('')}

/* ---------- vragen ---------- */
const Q=[];
/* Opdracht Woorden 1 (huiswerk do 5 nov) */
[
 ['Opdracht 1','Als je in het Frans zegt <i>“ce n’est pas grave”</i>, wat bedoel je dan?','Het is niet erg (niet ernstig)',[['Het is niet zwaar om te tillen','grave komt van gravis. Dat kan zwaar betekenen, maar in deze uitdrukking gaat het om betekenis 3: ernstig.'],['Het is niet goed','Goed is bonus. grave komt van gravis.'],['Het is niet nodig','Nodig is necesse.']],
  '<i>grave</i> komt van <b>gravis</b>: zwaar, gewichtig, <b>ernstig</b>. “Het is niet ernstig” = het is niet erg.','Uit welk Latijns woord komt het Franse grave, en wat betekent dat?'],
 ['Opdracht 2','In het Engels bestaan <i>necessity</i> en <i>cruelty</i>. Wat betekenen die woorden?','necessity = noodzaak, cruelty = wreedheid',[['necessity = noodzaak, cruelty = rijkdom','Rijk is dives. cruelty komt van crudelitas.'],['necessity = dood, cruelty = bloed','Dood = mors, bloed = sanguis.'],['necessity = naam, cruelty = wreed','Naam = nomen. cruelty is een zelfstandig naamwoord: wreedheid.']],
  '<i>necessity</i> komt van <b>necesse</b> (noodzakelijk): noodzaak. <i>cruelty</i> komt van <b>crudelitas</b>: wreedheid.','Bij welke twee woorden uit de lijst horen necessity en cruelty?'],
 ['Opdracht 3','Aan welk Latijns woord heeft de <i>Sanquin Bloedbank</i> haar naam ontleend?','sanguis (bloed)',[['sanus (gezond)','Dat staat niet in de woordenlijst. Kijk naar wat een bloedbank doet.'],['servo (redden)','Bloed geven redt levens, maar de naam lijkt op een ander woord.'],['crudelis (wreed)','Dat lijkt niet op Sanquin.']],
  'Sanquin komt van <b>sanguis, sanguinis</b> = bloed.','Welk woord uit 7A betekent bloed?'],
 ['Opdracht 4','Wat betekent een <i>salto mortale</i> letterlijk?','Een dodelijke sprong (doodssprong)',[['Een sprong in het water','Daar zit geen Latijns woord uit 7A in.'],['Een redding op het laatste moment','Redden is servo. mortale komt van mors.'],['Een sprong met je voeten tegelijk','Voet is pes.']],
  '<i>salto</i> = sprong, <i>mortale</i> komt van <b>mors, mortis</b> = dood. Letterlijk: een dodelijke sprong.','Welk woord uit 7A zit in mortale?'],
 ['Opdracht 5','Als je naar de <i>pedicure</i> gaat, welk lichaamsdeel wordt dan verzorgd?','Je voeten',[['Je handen','Dat is de manicure (manus = hand).'],['Je haar','Daar zit geen woord uit 7A in.'],['Je bloed','Bloed is sanguis.']],
  '<i>pedi-</i> komt van <b>pes, pedis</b> = voet.','Welk woord uit 7A zit in pedicure?']
].forEach(([nr,q,a,f,u,vq],i)=>Q.push({id:'wo'+(i+1),o:'wo1',nr,q,a,f,u,v:{q:vq}}));

/* woorden: Latijn → betekenis, variant andersom */
W.forEach((w,i)=>{const pool=W.filter(x=>x!==w);
  Q.push({id:'w'+i,o:'w7',nr:'Woord',q:`Wat betekent ${L(w[0])}?`,a:w[1],f:pick(pool.map(x=>x[1]),3,w[1]),
    u:WU[w[0].split(' (')[0]]||WU[w[0]]||`${L(w[0])} = ${w[1]}.`,
    v:{q:`Welk Latijns woord betekent <b>${w[1]}</b>?`,a:L(w[0]),f:pick(pool.map(x=>L(x[0])),3,L(w[0]))}})});

/* rijtjes bouwen */
Object.keys(RIJ).forEach(k=>Q.push({id:'r-'+k,o:'g3',nr:'Rijtje · '+RIJ[k].bron,type:'rij',w:k,a:RIJ[k].f.join(', '),
  q:`Maak het rijtje van <b>${k}</b>, ${RIJ[k].f[1]} <span class="sub">(${RIJ[k].nl})</span>. Zet de vormen op de goede plek.`}));

/* stam vinden */
[['rex','reg-',['rex-','re-','regi-']],['nomen','nomin-',['nomen-','nom-','nomi-']],['mons','mont-',['mons-','mon-','monti-']],
 ['sanguis','sanguin-',['sanguis-','sangu-','sanguini-']],['frater','fratr-',['frater-','frat-','fratri-']],['pes','ped-',['pes-','pe-','pedi-']],
 ['mors','mort-',['mors-','mor-','morti-']],['crudelitas','crudelitat-',['crudelitas-','crudel-','crudelita-']],['dives','divit-',['dives-','div-','divi-']],
 ['imperator','imperator-',['imperat-','imperatori-','impera-']]
].forEach(([w,a,f],i)=>{const r=RIJ[w],gen=r?r.f[1]:{crudelitas:'crudelitatis',dives:'divitis'}[w];
  Q.push({id:'st'+i,o:'g3',nr:'Stam',q:`Wat is de stam van ${L(w)}?`,a,f,u:`Genitivus ${L(gen)} min -is = <b>${a}</b>.`,
    v:{q:`De genitivus van ${L(w)} is ${L(gen)}. Wat is dan de stam?`}})});

/* naamval herkennen */
const NA=['nom ev','gen ev','dat ev','acc ev','abl ev','nom of acc ev','nom of acc mv','gen mv','dat of abl mv'];
[['regem','acc ev','reg-em: één koning als lijdend voorwerp. Niet verwarren met regum (gen mv).'],['regum','gen mv','reg-um: van de koningen. Niet verwarren met regem (acc ev).'],
 ['reges','nom of acc mv','-es is bij rex zowel nom als acc mv (Nota bene 5).'],['regibus','dat of abl mv','-ibus is altijd dat of abl mv (Nota bene 7).'],
 ['regis','gen ev','reg-is: van de koning.'],['regi','dat ev','reg-i: (aan/voor) de koning.'],['rege','abl ev','reg-e: ablativus enkelvoud.'],
 ['nomen','nom of acc ev','Onzijdig: nom en acc ev zijn gelijk (Nota bene 6).'],['nomina','nom of acc mv','Onzijdig meervoud op -a: nom en acc mv.'],
 ['nomine','abl ev','nomin-e: ablativus enkelvoud.'],['nominis','gen ev','nomin-is: van de naam.'],
 ['montium','gen mv','Gen mv met -ium, zoals urbium (Nota bene 4).'],['fratrem','acc ev','fratr-em. De e van frater valt weg.'],
 ['sanguini','dat ev','sanguin-i: dativus enkelvoud.'],['pedes','nom of acc mv','ped-es. In de tekst: ad imperatoris pedes (acc, na ad).'],
 ['morte','abl ev','mort-e. In de tekst: a morte = van de dood.'],['imperatorum','gen mv','imperator-um: van de keizers.'],
 ['crudelitatem','acc ev','crudelitat-em: lijdend voorwerp bij videsne (r. 13).']
].forEach(([v,a,u],i)=>Q.push({id:'nv'+i,o:'g3',nr:'Naamval',q:`Welke naamval is ${L(v)}?`,a,f:pick(NA,3,a),u,
  v:{q:`In welke naamval en welk getal staat ${L(v)}? Kijk goed naar de uitgang.`}}));

/* vorm maken */
[['frater','acc ev','fratrem',['fraterem','fratrum','fratre']],['mons','gen mv','montium',['montum','montis','montem']],
 ['sanguis','abl ev','sanguine',['sanguise','sanguini','sangue']],['nomen','nom mv','nomina',['nomines','nominum','nomena']],
 ['rex','gen mv','regum',['regem','regium','reges']],['pes','acc mv','pedes',['pesa','pedum','pedis']],
 ['mors','dat ev','morti',['mortis','morte','morsi']],['imperator','acc ev','imperatorem',['imperatorum','imperatore','imperator']],
 ['frater','gen ev','fratris',['frateris','fratrum','fratri']],['nomen','acc ev','nomen',['nominem','nomina','nomine']]
].forEach(([w,nv,a,f],i)=>Q.push({id:'vm'+i,o:'g3',nr:'Vorm maken',q:`Wat is de <b>${nv}</b> van ${L(w)}, ${L(RIJ[w].f[1])}?`,a,f,u:RIJ[w].u,
  v:{q:`Maak de ${nv} van ${L(w)} (${RIJ[w].nl}).`}}));

/* nota bene */
[['nb1','Hoe vind je de stam van een woord uit groep 3?','Genitivus enkelvoud min -is',[['Nominativus min de laatste letter','Bij pes zou je dan pe- krijgen, maar de stam is ped-.'],['Nominativus enkelvoud is de stam','rex is niet de stam: de stam is reg-.'],['Accusativus min -em','Dat klopt toevallig wel, maar in de woordenlijst staat de genitivus.']],'Daarom staat bij groep 3 in de woordenlijst altijd de genitivus: rex, regis.'],
 ['nb2','Welke twee vormen van rex lijken sterk op elkaar?','regem (acc ev) en regum (gen mv)',[['regis (gen ev) en regi (dat ev)','Die lijken op elkaar, maar het boek noemt een ander paar.'],['rege (abl ev) en reges (nom mv)',''],['regibus (dat mv) en regibus (abl mv)','Die zijn niet alleen gelijk, ze zijn hetzelfde (Nota bene 7).']],'Nota bene 3: reg-em en reg-um. Let goed op de klinker.'],
 ['nb3','Bij een onzijdig woord als nomen zijn twee naamvallen altijd gelijk. Welke?','nominativus en accusativus',[['dativus en ablativus','Dat geldt alleen in het meervoud, en voor alle woorden.'],['genitivus en dativus',''],['nominativus en genitivus','']],'Nota bene 6: nom = acc, in ev en mv (nomen, nomina).'],
 ['nb4','Welke uitgang hebben de dativus en ablativus meervoud in groep 3?','-ibus',[['-is','-is is de gen ev.'],['-um','-um is de gen mv.'],['-es','-es is de nom/acc mv.']],'Nota bene 7: regibus, nominibus.']
].forEach(([id,q,a,f,u])=>Q.push({id,o:'g3',nr:'Nota bene',q,a,f,u,v:{q:q.replace(/\?$/,'? Denk aan p. 90.')}}));

/* tekst: groep 3 in de zin en inhoud */
[['tq1','r. 5','In vivario murenae erant, quae <b>sanguine</b> hominum saginabant.<br>Welke naamval is sanguine?','abl ev',['acc ev','dat ev','nom ev'],'sanguin-e = abl ev. Bij saginare + abl: zich voeden <b>met</b> bloed.'],
 ['tq2','r. 5','… quae sanguine <b>hominum</b> saginabant.<br>Hoe vertaal je hominum?','van (de) mensen',['de mens','met de mensen','aan de mensen'],'homin-um = gen mv: van de mensen.'],
 ['tq3','r. 7','Pollio <b>imperatorem</b> Augustum ad cenam invitavit.<br>Waarom staat imperatorem in de accusativus?','Het is het lijdend voorwerp: Pollio nodigt de keizer uit',['Het is het onderwerp','Het hoort bij ad','Het is een bezit: van de keizer'],'Pollio (nom) nodigt <b>wie</b> uit? De keizer: lijdend voorwerp, dus acc.'],
 ['tq4','r. 12','Servus confugit ad <b>imperatoris pedes</b>.<br>Hoe vertaal je imperatoris pedes?','de voeten van de keizer',['de voet van de keizers','de keizer van de voeten','de keizers met de voeten'],'imperatoris = gen ev (van de keizer), pedes = acc mv na ad (voeten).'],
 ['tq5','r. 15','Praeterea <b>Pollioni</b> dixit.<br>Hoe vertaal je Pollioni?','tegen Pollio',['van Pollio','Pollio zei','met Pollio'],'Pollion-i = dat ev: tegen / aan Pollio.'],
 ['tq6','r. 20','Augustus servum a <b>morte</b> servavit.<br>Wat betekent a morte servavit?','redde van de dood',['doodde met een zwaard','bewaarde tot zijn dood','redde de doden'],'mors, mortis = dood; morte = abl ev. servo = redden.'],
 ['tq7','r. 3–4','Wat deed Pollio als een slaaf een fout had gemaakt?','Hij gooide hem in een vijver met murenen',['Hij liet hem vrij','Hij verkocht hem aan de keizer','Hij liet hem kristallen schalen breken'],'solebat eum in vivarium inicere: hij had de gewoonte hem in de vijver te gooien.'],
 ['tq8','r. 9','Wat breekt de slaaf tijdens het diner?','Een kristallen schaal',['Zijn voet','Een beeld van Augustus','Een glas wijn van de keizer'],'imprudens crystallinum fregit: hij brak per ongeluk een kristallen schaal.'],
 ['tq9','r. 13–15','Wat beveelt Augustus de andere slaven?','Alle kristallen schalen te breken en de vijver ermee te vullen',['De slaaf in de vijver te gooien','Pollio in de vijver te gooien','De murenen te doden'],'omnia crystallina frangere et his vivarium complere.'],
 ['tq10','r. 19–20','Hoe loopt het af?','Augustus wijst Pollio terecht en redt de slaaf van de dood',['Pollio gooit de slaaf toch in de vijver','De slaaf vlucht naar Rome','Augustus straft de slaaf zelf'],'Sic Augustus amicum castigavit et servum a morte servavit.']
].forEach(([id,nr,q,a,f,u])=>Q.push({id,o:'t7',nr:'Tekst '+nr,q:q.includes('<br>')?'<i>'+q.replace('<br>','</i><br>'):q,a,f,u,v:{q:`Tekst 7A ${nr}: ${q.split('<br>').pop()}`}}));

/* zelf vertalen */
Z.forEach((z,i)=>Q.push({id:'vt'+i,o:'t7',nr:`Vertalen r. ${z[0]}`,t:'open',q:`Vertaal in je schrift:<br>${L(z[1])}`,k:z[3],vb:[z[2]+(z[4]?' ('+z[4]+')':'')],
  v:{q:`Vertaal nog een keer:<br>${L(z[1])}`}}));

/* door elkaar: een paar vragen die over alles gaan */
[['mx1','Welk woord uit 7A heeft een dativus bij zich?','parco (sparen)',['servo (redden)','neco (doden)','invito (uitnodigen)'],'parco + dat: parce mihi = spaar mij (r. 13).'],
 ['mx2','Welk woord uit 7A is groep 3?','mors, mortis',['dominus','villa','bonus'],'Groep 3 herken je aan de genitivus op -is: mors, mortis.'],
 ['mx3','Wat betekent omnia in omnia crystallina?','alle',['ieder','geheel','bovendien'],'omnis in het meervoud = alle(n). omnia is onzijdig mv.']
].forEach(([id,q,a,f,u])=>Q.push({id,o:'mix7',nr:'Door elkaar',q,a,f,u,v:{q}}));

/* ---------- basis Latijn: D-toets periode 1 ---------- */
/* rijtjes groep 1 en 2 */
['silva','donum','equus'].forEach(k=>Q.push({id:'br-'+k,o:'b-rij',nr:'Rijtje \u00b7 '+RIJ[k].bron,type:'rij',w:k,a:RIJ[k].f.join(', '),
  q:`Maak het rijtje van <b>${k}</b>, ${RIJ[k].f[1]} <span class="sub">(${RIJ[k].nl})</span>. Zet de vormen op de goede plek.`}));

/* naamval herkennen groep 1 en 2 */
[['silvam','acc ev','silv-am: accusativus enkelvoud.'],
 ['silvarum','gen mv','silv-arum: genitivus meervoud.'],
 ['silvas','acc mv','silv-as: accusativus meervoud.'],
 ['silvis','dat of abl mv','silv-is: dativus of ablativus meervoud.'],
 ['equum','acc ev','equ-um: accusativus enkelvoud.'],
 ['equorum','gen mv','equ-orum: genitivus meervoud.'],
 ['equos','acc mv','equ-os: accusativus meervoud.'],
 ['equi','gen ev of nom mv','equ-i: genitivus ev of nominativus mv. Kijk naar de zin.'],
 ['equis','dat of abl mv','equ-is: dativus of ablativus meervoud.'],
 ['dona','nom of acc mv','don-a: onzijdig meervoud. Nom en acc zijn altijd gelijk.'],
 ['doni','gen ev','don-i: genitivus enkelvoud.'],
 ['dono','dat of abl ev','don-o: dativus of ablativus enkelvoud.']
].forEach(([v,a,u],i)=>Q.push({id:'bnv'+i,o:'b-rij',nr:'Naamval',q:`Welke naamval is ${L(v)}?`,a,f:pick(NA,3,a),u,
  v:{q:`In welke naamval en welk getal staat ${L(v)}?`}}));

/* vorm maken groep 1 en 2 */
[['silva','acc ev','silvam',['silvum','silvae','silvarum']],
 ['silva','gen mv','silvarum',['silvorum','silvae','silvas']],
 ['equus','acc ev','equum',['equam','equi','equo']],
 ['equus','gen mv','equorum',['equarum','equis','equi']],
 ['donum','nom mv','dona',['donae','doni','donum']],
 ['donum','dat ev','dono',['donum','donae','doni']]
].forEach(([w,nv,a,f],i)=>Q.push({id:'bvm'+i,o:'b-rij',nr:'Vorm maken',q:`Wat is de <b>${nv}</b> van ${L(w)}, ${L(RIJ[w].f[1])}?`,a,f,u:RIJ[w].u,
  v:{q:`Maak de ${nv} van ${L(w)} (${RIJ[w].nl}).`}}));

/* flecto presens */
[['1e pers. ev','flecto',['flecti','flectum','flectis']],['2e pers. ev','flectis',['flecto','flectit','flectas']],
 ['3e pers. ev','flectit',['flectis','flecto','flectunt']],['1e pers. mv','flectimus',['flectitis','flectunt','flectamus']],
 ['2e pers. mv','flectitis',['flectimus','flectunt','flectatis']],['3e pers. mv','flectunt',['flectitis','flectimus','flectant']]
].forEach(([p,a,f],i)=>Q.push({id:'bwv'+i,o:'b-ww',nr:'Presens',q:`Wat is de <b>${p}</b> van ${L('flecto')}?`,a,f,
  u:'flecto, flectis, flectit, flectimus, flectitis, flectunt.',
  v:{q:`Vervoeg ${L('flecto')} in de ${p}.`}}));

/* perfectum herkennen */
[['appropinquavi','appropinquo','naderen',['appello','advenio','accuso']],
 ['dixi','dico','zeggen',['duco','disco','doceo']]
].forEach(([perf,pres,nl,f],i)=>Q.push({id:'bwp'+i,o:'b-ww',nr:'Perfectum',q:`Van welk werkwoord is ${L(perf)} de perfectumvorm?`,a:pres,f,
  u:`${L(perf)} is de perfectum (1e pers. ev) van ${L(pres)} (${nl}).`,
  v:{q:`${L(perf)} is een perfectumvorm. Welk werkwoord hoort erbij?`}}));

/* infinitivus */
[['appropinquavi','appropinquare','naderen',['appropinquere','appropinquire','appropinquari']],
 ['dixi','dicere','zeggen',['dixere','dicire','dicari']]
].forEach(([perf,inf,nl,f],i)=>Q.push({id:'bwi'+i,o:'b-ww',nr:'Infinitivus',q:`Wat is de infinitivus van ${L(perf)}?`,a:inf,f,
  u:`De infinitivus is ${L(inf)} (${nl}).`,
  v:{q:`Schrijf de infinitivus op van ${L(perf)}.`}}));

/* stamtijden */
[['cognovi','cognosco','leren kennen',['cogno','cognosceo','cognitio']],
 ['potui','possum','kunnen',['poteo','potesco','potior']],
 ['respondi','respondeo','antwoorden',['respondo','responsio','respondio']]
].forEach(([perf,pres,nl,f],i)=>Q.push({id:'bst'+i,o:'b-st',nr:'Stamtijd',q:`Wat is de presens (1e pers. ev) van ${L(perf)}?`,a:pres,f,
  u:`${L(perf)} \u2192 ${L(pres)} (${nl}).`,
  v:{q:`${L(perf)} is een perfectumvorm. Wat is de presensvorm?`}}));

/* basiswoorden */
const BW=[[L('ingenium'),'aanleg, talent'],[L('tum'),'toen, dan'],[L('sol'),'zon']];
BW.forEach((w,i)=>{const pool=BW.filter(x=>x!==w);
  Q.push({id:'bwo'+i,o:'b-wo',nr:'Woord',q:`Wat betekent ${w[0]}?`,a:w[1],
    f:[...pool.map(x=>x[1]),'bloed'],
    u:`${w[0]} = ${w[1]}.`,
    v:{q:`Welk Latijns woord betekent <b>${w[1]}</b>?`,a:w[0],f:[...pool.map(x=>x[0]),L('sanguis')]}})});

/* ---------- eigen vraagsoort: rijtje bouwen ---------- */
function drawRij(q,it,box,api){
  const r=RIJ[q.w];
  const S=it._r=it._r||{pool:shuf([...r.f,...r.x].map(w=>({w}))),slots:Array(10).fill(null),done:false};
  const next=S.slots.indexOf(null);
  const slot=j=>{const c=S.slots[j];let cls=c?'filled':'';if(j===next&&!S.done)cls+=' next';if(S.done)cls+=S.res[j]?' ok':' bad';
    return `<span class="p">${MK(NV[j%5],PL[j])}</span><button class="slot ${cls}" data-j="${j}" ${S.done||!c?'disabled':''}>${c?c.w:'&nbsp;'}${S.done&&!S.res[j]?`<small>→ ${r.f[j]}</small>`:''}</button>`};
  box.innerHTML=`<div class="card stack"><div class="rij">${[0,1,2,3,4,5,6,7,8,9].map(slot).join('')}</div></div>
    ${S.done?'':`<div class="pool">${S.pool.map((c,k)=>`<button class="chip" data-k="${k}" ${c.used?'disabled':''}>${c.w}</button>`).join('')}</div>
    <p class="sub" style="font-size:.9rem">Tik op een vorm om hem in te vullen, van boven naar beneden. Tik op een ingevuld vakje om hem terug te zetten. Let op: er zitten vormen bij die niet bestaan.</p>
    <button class="btn" id="rijok" ${next===-1?'':'disabled'}>Controleer</button>`}`;
  if(S.done)return;
  box.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{const c=S.pool[+b.dataset.k],j=S.slots.indexOf(null);if(j<0||c.used)return;S.slots[j]=c;c.used=true;api.redraw()});
  box.querySelectorAll('.slot[data-j]').forEach(b=>b.onclick=()=>{const j=+b.dataset.j,c=S.slots[j];if(!c)return;c.used=false;S.slots[j]=null;api.redraw()});
  box.querySelector('#rijok').onclick=()=>{S.res=S.slots.map((c,j)=>c.w===r.f[j]);S.done=true;const ok=S.res.every(Boolean);api.redraw();
    api.finish(ok,ok?`<div class="fb ok"><div class="head">Goed!</div><div class="why">${r.u}</div></div>`
      :`<div class="fb bad"><div class="head">Niet goed</div><div class="mistake">De rode vakjes kloppen niet. Het goede antwoord staat erachter. Schrijf het rijtje nog een keer goed in je schrift.</div><div class="why">${r.u}</div></div>`)};
}

return {id:'la',naam:'Latijn',afk:'LA',kop:'H7A Door het oog van de naald',SECS,SNAP,BEG:W.map(w=>[w[0],w[1],'7w']),Q,snapHtml,
  woorden:{taal:'Latijn',lijst:W.map(w=>[w[0],w[1]])},
  leer:['bas','wo','7w','g3','7t'],reken:false,volledig:false,snapInVraag:false,custom:{rij:drawRij},
  PN:{bas:'Basis Latijn (D-toets P1)',wo:'Opdracht Woorden 1 (p. 81–82)','7w':'Woorden 7A','g3':'Rijtjes groep 3 (p. 90)','7t':'Tekst 7A','mix':'Door elkaar'}};
})();
