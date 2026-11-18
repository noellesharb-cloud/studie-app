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
/* ---------- woorden 7B (boek p. 86, woordenlijst Een vriendelijke omgang met slaven) ---------- */
const W2=[
 ['vivo (vivĕre)','leven'],['alii ... alii','sommige(n) ... andere(n)'],['puto (putare)','1. menen 2. (+ 2 acc.) beschouwen als'],
 ['exemplum','voorbeeld'],['licet + dat.','het is toegestaan, het is mogelijk'],['silentium','stilte'],
 ['alius ... alius','de een ... de ander'],['colligo (colligĕre)','verzamelen'],['vestis, vestis (v)','kleding(stuk)'],
 ['aeque (bijw.)','net zo, even(zeer)'],['enim','want, immers'],['aestimo (aestimare)','1. schatten, waarderen 2. beoordelen'],
 ['opinio, opinionis (v)','mening, opvatting'],['inferior, -or, -us (inferioris)','1. lager 2. minder, zwakker'],
 ['quemadmodum','1. hoe? 2. (zo)als'],['ingens, -ns, -ns (ingentis)','geweldig, enorm'],['fortis, -is, -e (fortis)','dapper, sterk']
];
const WU2={'licet + dat.':'licet heeft een dativus bij zich: servis non licet loqui = het is de slaven niet toegestaan te spreken (tekst 7B r. 6).',
 'alii ... alii':'Meervoud: alii dicunt ..., alii putant ... = sommigen zeggen ..., anderen menen ... (tekst 7B r. 2-4).',
 'alius ... alius':'Enkelvoud: alius sputa deterget, alius reliquias colligit = de een ruimt spuug op, de ander verzamelt de resten (r. 9-10).',
 'puto (putare)':'Met twee accusativi: Lucilium amicum puto = ik beschouw Lucilius als vriend.',
 'quemadmodum':'Vraag = hoe? Vergelijking = (zo)als: vive quemadmodum vis = leef zoals je wilt (r. 19).',
 'vestis, vestis (v)':'Groep 3: vestis, vestis. Denk aan travestiet (iemand die andere kleren draagt) en vest.',
 'exemplum':'Denk aan het Nederlandse exempel en het Engelse example.','silentium':'Engels: silence.','aestimo (aestimare)':'Engels: to estimate = schatten.',
 'inferior, -or, -us (inferioris)':'Inferieure kwaliteit = mindere, lagere kwaliteit.',
 'ingens, -ns, -ns (ingentis)':'Bijvoeglijk naamwoord groep 3 met één uitgang voor m, v en o (ingens). Stam ingent-.',
 'fortis, -is, -e (fortis)':'Bijvoeglijk naamwoord groep 3: fortis (m), fortis (v), forte (o). Stam fort-.'};
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
   u:'Groep 2 (o-stammen). Uitgangen: -us, -i, -o, -um, -o · -i, -orum, -is, -os, -is.'},
 /* --- H7 bijvoeglijk naamwoord groep 3 (p. 92) en H8 voornaamwoorden (p. 100–101); s = onderdeel, lb = naam in de vraag, tv = antwoorden voor de toetsvorm --- */
 'fortis-mv':{s:'g7',lb:'fortis (m/v)',nl:'dapper',f:['fortis','fortis','forti','fortem','forti','fortes','fortium','fortibus','fortes','fortibus'],x:['forte','fortum','fortia'],bron:'Boek p. 92',
   u:'Bijvoeglijk nw groep 3, mannelijk/vrouwelijk. Let op: abl ev <b>forti</b> (niet forte) en gen mv <b>fortium</b>.'},
 'fortis-o':{s:'g7',lb:'forte (onzijdig)',nl:'dapper',f:['forte','fortis','forti','forte','forti','fortia','fortium','fortibus','fortia','fortibus'],x:['fortem','fortes','fortum'],bron:'Boek p. 92',
   u:'Onzijdig: nom = acc (ev <b>forte</b>, mv <b>fortia</b>). Abl ev <b>forti</b>.'},
 'ingens-mv':{s:'g7',lb:'ingens (m/v)',nl:'enorm',f:['ingens','ingentis','ingenti','ingentem','ingenti','ingentes','ingentium','ingentibus','ingentes','ingentibus'],x:['ingente','ingentum','ingensem'],bron:'Boek p. 92',
   u:'Stam <b>ingent-</b> (gen. ingentis min -is). Abl ev <b>ingenti</b>, gen mv <b>ingentium</b>.'},
 'ingens-o':{s:'g7',lb:'ingens (onzijdig)',nl:'enorm',f:['ingens','ingentis','ingenti','ingens','ingenti','ingentia','ingentium','ingentibus','ingentia','ingentibus'],x:['ingentem','ingentes','ingentum'],bron:'Boek p. 92',
   u:'Onzijdig: nom = acc ev <b>ingens</b>, nom = acc mv <b>ingentia</b>.'},
 is:{s:'g8',lb:'is (m)',nl:'hij; deze, die',f:['is','eius','ei','eum','eo','ei','eorum','eis','eos','eis'],tv:['is','eius','ei','eum','eo','ei / ii','eorum','eis / iis','eos','eis / iis'],x:['eam','ea'],bron:'Boek p. 100',
   u:'Mannelijk zoals servus (eum, eo, eorum, eos), behalve gen ev <b>eius</b> en dat ev <b>ei</b>. Voor ei (nom mv) en eis kun je ook ii en iis tegenkomen.'},
 ea:{s:'g8',lb:'ea (v)',nl:'zij; deze, die',f:['ea','eius','ei','eam','ea','eae','earum','eis','eas','eis'],tv:['ea','eius','ei','eam','ea','eae','earum','eis / iis','eas','eis / iis'],x:['eum','eorum'],bron:'Boek p. 100',
   u:'Vrouwelijk zoals mensa (eam, ea, earum, eas), behalve gen ev <b>eius</b> en dat ev <b>ei</b>.'},
 id:{s:'g8',lb:'id (o)',nl:'het; dit, dat',f:['id','eius','ei','id','eo','ea','eorum','eis','ea','eis'],tv:['id','eius','ei','id','eo','ea','eorum','eis / iis','ea','eis / iis'],x:['eum','eae','eos'],bron:'Boek p. 100',
   u:'Onzijdig zoals donum: nom = acc (<b>id</b>, mv <b>ea</b>). Gen ev <b>eius</b>, dat ev <b>ei</b>.'},
 hic:{s:'g8',lb:'hic (m)',nl:'deze; hij',f:['hic','huius','huic','hunc','hoc','hi','horum','his','hos','his'],x:['hanc','hac','hae'],bron:'Boek p. 101',
   u:'Enkelvoud onregelmatig: hic, huius, huic, <b>hunc</b>, hoc. Meervoud zoals servus: hi, horum, his, hos, his.'},
 haec:{s:'g8',lb:'haec (v)',nl:'deze; zij',f:['haec','huius','huic','hanc','hac','hae','harum','his','has','his'],x:['hunc','hoc','horum'],bron:'Boek p. 101',
   u:'Enkelvoud onregelmatig: haec, huius, huic, <b>hanc</b>, <b>hac</b>. Meervoud zoals mensa: hae, harum, his, has, his.'},
 hoc:{s:'g8',lb:'hoc (o)',nl:'dit; het',f:['hoc','huius','huic','hoc','hoc','haec','horum','his','haec','his'],x:['hunc','hae','hos'],bron:'Boek p. 101',
   u:'Nom, acc en abl ev zijn allemaal <b>hoc</b>. Nom en acc mv zijn onregelmatig: <b>haec</b>.'}
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
 {id:'w7b',par:'7wb',nr:'2b',name:'Woorden 7B',c:'--c5',sub:'Een vriendelijke omgang met slaven · boek p. 86 · 17 woorden',
  rules:W2.map(w=>[L(w[0]),w[1],''])},
 {id:'g3',par:'g3',nr:'3',name:'Rijtjes groep 3',c:'--c3',sub:'Boek p. 90 · rex, nomen + mons, sanguis, frater',
  rules:[['Stam = genitivus min -is','rex, reg-is → stam <b>reg-</b> · nomen, nomin-is → stam <b>nomin-</b>','Daarom staat in de woordenlijst bij groep 3 altijd de genitivus.'],
   ['Uitgangen achter de stam','ev: — · -is · -i · -em · -e<br>mv: -es · -um · -ibus · -es · -ibus','De nominativus ev heeft geen vaste uitgang.'],
   ['Onzijdig (zoals nomen)','nom = acc, ev en mv · mv op <b>-a</b>: nomina','Net als bij donum in groep 2.'],
   ['Let op: lijken op elkaar','reg-<b>em</b> (acc ev) en reg-<b>um</b> (gen mv)',''],
   ['Twee naamvallen, één vorm','-es = nom of acc mv · -ibus = dat of abl mv','Welke het is, zie je aan de zin.'],
   ['Soms -ium in de gen mv','urbs → urbium · mons → montium · mors → mortium','']].concat(Object.keys(RIJ).filter(k=>!['silva','donum','equus'].includes(k)&&!RIJ[k].s).map(k=>[`${k} (${RIJ[k].nl}) <small>${RIJ[k].bron}</small>`,rijHtml(k),RIJ[k].u]))},
 {id:'t7',par:'7t',nr:'4',name:'Tekst 7A',c:'--c4',sub:'Door het oog van de naald · Pollio en Augustus',
  rules:[['Woorden naast de tekst','Pollio, Pollionis · peccaverat · eum · vivarium · inicĕre · murena · quae · saginare + abl · quodam die · cena · cenare · imprudens · crystallinum · illum · confugit · motus · his · ipse · adesse · manumittĕre · gaudeamus + abl · castigare',''],
   ['Groep 3 in de tekst','sanguine (r. 5) · hominum (r. 5) · imperatorem (r. 7) · Pollionis (r. 9, 13) · imperatoris, pedes (r. 12) · crudelitatem (r. 13) · Pollioni (r. 15) · hominem (r. 18) · morte (r. 20)','']]},
 {id:'t7b',par:'7tb',nr:'5',name:'Tekst 7B',c:'--c5',sub:'Seneca · Een vriendelijke omgang met slaven · p. 86',
  rules:[['Waar gaat het over?','Seneca prijst zijn vriend Lucilius omdat hij vriendelijk met zijn slaven omgaat. Hij geeft voorbeelden van wreedheid en zegt: een slaaf wordt net zo geboren, leeft en sterft net zo als jij.',''],
   ['Kern (r. 18–19)','Leef zo met een mindere zoals je wilt dat een meerdere met jou leeft.',''],
   ['Groep 3 in de tekst','homines · contubernales · crudelitatis · vestibus muliebribus · verberibus · seminibus · hominem · veste · origine · opinionis · inferiore · superiorem',''],
   ['Let op','licet + dat (aliis servis non licet) · abutimur + abl · alii … alii = sommigen … anderen · alius … alius = de een … de ander · tecum = cum te','']]},
 {id:'k7',par:'7k',nr:'6',name:'Cultuur: slaven en Spartacus',c:'--c6',sub:'p. 86–88 · vrijlating, Spartacus, Glaber, Crassus',
  rules:[['Vrijlating','peculium = geld dat een slaaf spaarde om zich vrij te kopen · meestal vrij na de dood van de meester (testament) · vrijgelaten slaven = <b>liberti</b>',''],
   ['Spartacus (73 v.Chr.)','gladiatorenschool ten zuiden van Rome · ± 70 gladiatoren ontsnappen met keukenmessen · senatoren onderschatten hen',''],
   ['Claudius Glaber','belegert de slaven op de <b>Vesuvius</b> · bouwt geen muur om zijn kamp · slaven vallen \'s nachts aan en winnen',''],
   ['Crassus','rijkste man van Rome, meer dan 40.000 soldaten · Spartacus heeft 70.000 slaven, wil via Zuid-Italië naar Sicilië of Griekenland · schepen komen niet · slaven moe · Spartacus sterft vechtend',''],
   ['Afloop','overgebleven slaven gekruisigd langs de weg naar Rome, als waarschuwing','']]},
 {id:'g7',par:'g7',nr:'7',name:'Geslacht, bijv. nw groep 3, congruentie',c:'--c3',sub:'p. 91–92 · fortis, ingens',
  rules:[['Geslachtsregels groep 3','1. man/mannelijk dier → m (pater, rex) · 2. vrouw → v (mater) · 3. -os, -or, -er → meestal m · 4. -o, -s, -x → meestal v · 5. -us (gen. -eris/-oris) en -men → o','In de woordenlijst staat het geslacht erbij.'],
   ['Bijv. nw groep 3','op -is → zoals <b>fortis</b> · de rest → zoals <b>ingens</b> (stam = gen min -is: ingent-) · twee rijtjes: m/v en o',''],
   ['Anders dan het zelfst. nw','abl ev op <b>-i</b> (forti) · gen mv op <b>-ium</b> · onzijdig mv op <b>-ia</b>',''],
   ['Congruentie','bijv. nw past zich aan in <b>naamval, geslacht en getal</b> · regi crudeli · capita ingentia · mensarum ingentium · rege bono · reges boni/bonos','De uitgangen hoeven niet gelijk te zijn.']].concat(['fortis-mv','fortis-o','ingens-mv','ingens-o'].map(k=>[`${RIJ[k].lb} (${RIJ[k].nl}) <small>${RIJ[k].bron}</small>`,rijHtml(k),RIJ[k].u]))},
 {id:'t7c',par:'7tc',nr:'8',name:'Tekst 7C Lupus ad canem',c:'--c4',sub:'Phaedrus · de wolf en de hond · p. 89 (met vertaling)',
  rules:[['Waar gaat het over?','Een magere wolf ontmoet een doorvoede hond. De hond krijgt eten voor het bewaken van het huis. De wolf wil mee, tot hij de kale nek van de ketting ziet. Hij blijft liever vrij.',''],
   ['Les','Vrijheid is meer waard dan eten en een dak. Verband met slavernij: de hond is als een slaaf.','']]},
 {id:'k8',par:'8k',nr:'9',name:'Cultuur: onderwijs',c:'--c1',sub:'H8 · p. 94–98 · magister, grammaticus, retor',
  rules:[['Basisschool (7–12 jaar)','geen leerplicht, ouders betaalden · <b>paedagogus</b> (Griekse slaaf) bracht je · begin vóór zonsopgang · 6 uur, thuis eten · één bedompt lokaaltje of zuilengalerij met gordijn · alleen jongens',''],
   ['Bij de magister','lezen, schrijven, beetje rekenen, Latijn en Grieks · schrijfplankje met was en pen · papyrus · onruststoker krijgt meppen met een takkenbos',''],
   ['Grammaticus (3–4 jaar)','alleen rijkere jongens · literatuur van Grieken en Romeinen · boekrol (papyrus) → rond 1e eeuw n.Chr. boek van <b>perkament</b> (dierenhuiden) · proefwerken: opstel',''],
   ['Grieks','belangrijke boeken in het Grieks, handel met Griekenland, Griekssprekende slaven en kooplieden, en het was chic',''],
   ['Retorenschool','<b>retor</b> = spreekt in het openbaar (advocaat, consul) · voor een politieke carrière · redevoering opbouwen, argumenten ordenen, toespraken uit het hoofd · Cicero','']]},
 {id:'t8a',par:'8ta',nr:'10',name:'Tekst 8A De schoolmeester van Falerii',c:'--c2',sub:'Camillus en de verrader · p. 97',
  rules:[['Waar gaat het over?','Een schoolmeester van Falerii brengt de kinderen van de leiders naar de Romeinse leider Camillus. Camillus weigert: ook in oorlog gelden regels. De jongens slaan de verrader terug de stad in.',''],
   ['Voornaamwoorden in de tekst','Is (r. 2) · ei magistro (r. 3) · cum eis (r. 4) · eos (r. 5) · ei respondit (r. 9) · hoc scelesto munere (r. 10) · haec (r. 11) · hos liberos (r. 12) · hos pueros (r. 13) · eum (r. 15) · eis (r. 16) · his virgis (r. 16)','']]},
 {id:'g8',par:'g8',nr:'11',name:'is ea id, hic haec hoc, ego tu',c:'--c3',sub:'Grammatica H8 · p. 100–102',
  rules:[['is, ea, id','bijvoeglijk: deze/die/dit/dat · zelfstandig: hij/hem, zij/haar, het · gen ev <b>eius</b>, dat ev <b>ei</b> (alle geslachten)',''],
   ['hic, haec, hoc','bijvoeglijk: deze/dit · zelfstandig: hij, zij, het, deze (dingen) · gen ev <b>huius</b>, dat ev <b>huic</b> · haec = nom ev v of nom/acc mv o',''],
   ['Vertaalstrategie','1. welke naamval? 2. staat er een zelfstandig naamwoord bij waarmee het congrueert? Ja → deze/dit. Nee → hij, zij, het, deze.',''],
   ['ego, tu, nos, vos','ego – mihi – me – me · tu – tibi – te – te · nos – (nostrum) – nobis – nos – nobis · vos – (vestrum) – vobis – vos – vobis',''],
   ['Bezittelijk','meus mijn · tuus jouw · noster ons · vester jullie · suus zijn/haar/hun · nostrum/vestrum = van ons/jullie (velen van ons)','']].concat(['is','ea','id','hic','haec','hoc'].map(k=>[`${RIJ[k].lb} (${RIJ[k].nl}) <small>${RIJ[k].bron}</small>`,rijHtml(k),RIJ[k].u]))},
 {id:'t8b',par:'8tb',nr:'12',name:'Tekst 8B Een leraar schreeuwt te hard',c:'--c4',sub:'Een buurman klaagt · p. 99',
  rules:[['Waar gaat het over?','Een buurman klaagt dat de schoolmeester al schreeuwt en slaat als het nog nacht is. De buren willen hem betalen om stil te zijn.','']]},
 {id:'t8c',par:'8tc',nr:'13',name:'Tekst 8C Quintilianus',c:'--c5',sub:'Een advies aan leerlingen · p. 99 (met vertaling)',
  rules:[['Waar gaat het over?','Quintilianus (leraar retoriek, 1e eeuw n.Chr.) zegt: houd van je leraren, zie ze als ouders van je verstand. Leraar moet lesgeven, leerling moet leergierig zijn.','']]},
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
 g7:[['Waarom is de abl ev van fortis forti en niet forte?','Bijvoeglijke naamwoorden van groep 3 hebben in de abl ev <b>-i</b>: forti, ingenti. forte is de nom/acc ev onzijdig. Het zelfstandig naamwoord heeft wel -e: rege.'],['Waarom passen regi en crudeli bij elkaar, maar mensarum en ingentium ook?','Congruentie gaat om naamval, geslacht en getal, niet om dezelfde letters. mensa is groep 1, ingens groep 3: allebei gen mv vrouwelijk.']],
 g8:[['Hoe weet ik of ik deze of hij moet vertalen?','Kijk of er een zelfstandig naamwoord bij staat in dezelfde naamval, geslacht en getal. <i>ei magistro</i> = die schoolmeester. <i>ei respondit</i> = hij antwoordde hem.'],['Waarom staat er bij ego geen genitivus?','Voor bezit gebruikt het Latijn het bezittelijk voornaamwoord (meus = mijn). nostrum en vestrum zijn alleen voor een deel van een groep: velen van ons.']],
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

/* woorden 7B: Latijn → betekenis, variant andersom */
W2.forEach((w,i)=>{const pool=W2.filter(x=>x!==w);
  Q.push({id:'wb'+i,o:'w7b',nr:'Woord 7B',q:`Wat betekent ${L(w[0])}?`,a:w[1],f:pick(pool.map(x=>x[1]),3,w[1]),
    u:WU2[w[0]]||`${L(w[0])} = ${w[1]}.`,
    v:{q:`Welk Latijns woord betekent <b>${w[1]}</b>?`,a:L(w[0]),f:pick(pool.map(x=>L(x[0])),3,L(w[0]))}})});

/* rijtjes bouwen */
Object.keys(RIJ).forEach(k=>Q.push({id:'r-'+k,o:RIJ[k].s||'g3',nr:'Rijtje · '+RIJ[k].bron,type:'rij',w:k,a:RIJ[k].f.join(', '),
  q:`Maak het rijtje van <b>${RIJ[k].lb||k}</b>, ${RIJ[k].f[1]} <span class="sub">(${RIJ[k].nl})</span>. Zet de vormen op de goede plek.`}));

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


/* ================= H7 vervolg en H8 (boek p. 86–102, foto's 18 nov 2026) =================
   Vertalingen van 7B, 8A en 8B zijn door Claude gemaakt en kunnen afwijken van die van de docent.
   7C en 8C staan in het boek met vertaling: daarover alleen inhoudsvragen. */
const mk=(id,o,nr,q,a,f,u,vq,x)=>Q.push(Object.assign({id,o,nr,q,a,f,u,v:{q:vq||q}},x||{}));
const vertaal=(Z,o,pre,tekst)=>Z.forEach((z,i)=>Q.push({id:pre+i,o,nr:`Vertalen r. ${z[0]}`,t:'open',q:`Vertaal in je schrift (${tekst}):<br>${L(z[1])}`,k:z[3],vb:[z[2]+(z[4]?' ('+z[4]+')':'')],
  v:{q:`Vertaal nog een keer:<br>${L(z[1])}`}}));
const snapZ=Z=>Z.map(z=>[`r. ${z[0]}: ${z[1].slice(0,55)}${z[1].length>55?'…':''}`,`${L(z[1])}<br><b>${z[2]}</b>${z[4]?'<br><span class="why">'+z[4]+'</span>':''}`]);
const open=(id,o,nr,q,k,vb,vq)=>Q.push({id,o,nr,t:'open',q,k,vb:[vb],v:{q:vq||q}});

/* ---------- Tekst 7B Seneca ---------- */
const Z7B=[
 ['1','Prudens es, quia familiariter cum servis tuis vivis.','Je bent verstandig, omdat je vriendelijk met je slaven leeft.',['prudens es = je bent verstandig','quia = omdat','familiariter = vriendelijk','cum servis tuis = met je slaven','vivis = je leeft'],''],
 ['2–3','Alii dicunt: "Servi sunt", tu autem: "Immo, homines sunt!"','Sommigen zeggen: "Het zijn slaven", maar jij (zegt): "Nee, het zijn mensen!"',['alii dicunt = sommigen zeggen','servi sunt = het zijn slaven','tu autem = maar jij (zegt)','immo = nee','homines sunt = het zijn mensen'],'Bij tu autem moet je "zegt" er zelf bij denken.'],
 ['3–4','Et semper dicis: "Contubernales sunt", alii autem putant: "Immo, servi sunt!"','En je zegt altijd: "Het zijn huisvrienden", maar anderen menen: "Nee, het zijn slaven!"',['semper dicis = je zegt altijd','contubernales sunt = het zijn huisvrienden','alii autem putant = maar anderen menen'],''],
 ['5','Sunt autem multa exempla crudelitatis in servos:','Er zijn echter veel voorbeelden van wreedheid jegens slaven:',['sunt = er zijn','multa exempla = veel voorbeelden','crudelitatis = van wreedheid (gen ev)','in servos = jegens slaven'],'in + acc betekent hier "jegens", niet "in".'],
 ['6','Aliis servis non licet loqui, dum dominus cenat.','Sommige slaven mogen niet spreken, terwijl de heer dineert.',['aliis servis non licet = het is sommige slaven niet toegestaan (licet + dat)','loqui = (te) spreken','dum dominus cenat = terwijl de heer dineert'],'Letterlijk: "Aan sommige slaven is het niet toegestaan te spreken".'],
 ['6–7','Et si quis servus tamen silentium interpellat, poena gravis est.','En als een of andere slaaf toch de stilte onderbreekt, is de straf zwaar.',['si quis servus = als een of andere slaaf','tamen = toch','silentium interpellat = de stilte onderbreekt','poena gravis est = de straf is zwaar'],''],
 ['8–10','Aliis servis tamquam iumentis abutimur: cum cenamus, alius sputa deterget, alius reliquias temulentorum colligit.','Andere slaven misbruiken wij als vee: wanneer wij dineren, ruimt de een het speeksel op, verzamelt de ander de resten van de dronkenlappen.',['aliis servis … abutimur = andere slaven misbruiken wij (abutimur + abl)','tamquam iumentis = als vee','cum cenamus = wanneer wij dineren','alius … alius = de een … de ander','sputa deterget = ruimt het speeksel op','reliquias temulentorum colligit = verzamelt de resten van de dronkenlappen'],'alius … alius (ev) = de een … de ander.'],
 ['11–12','Alii domini servos ministros vini esse iubent et tum eos vestibus muliebribus ornant.','Andere heren bevelen slaven wijnschenker te zijn en versieren hen dan met vrouwenkleren.',['alii domini = andere heren','servos ministros vini esse iubent = bevelen slaven wijnschenker te zijn','tum = dan','eos = hen','vestibus muliebribus = met vrouwenkleren (abl mv)','ornant = versieren'],'vestibus muliebribus: allebei groep 3, abl mv. Het bijvoeglijk naamwoord muliebris congrueert met vestis.'],
 ['13–14','Tu autem recte facis, quia servos verbis, non verberibus punis.','Maar jij handelt juist, omdat je slaven met woorden, niet met zweepslagen straft.',['tu autem = maar jij','recte facis = je handelt juist','servos … punis = je straft slaven','verbis = met woorden','non verberibus = niet met zweepslagen (abl mv van verber)'],'Woordgrapje: verbis en verberibus lijken op elkaar.'],
 ['14–15','Servus tuus enim ex isdem seminibus ortus est et aeque spirat, aeque vivit et aeque moritur.','Want jouw slaaf is op dezelfde manier geboren en ademt net zo, leeft net zo en sterft net zo.',['servus tuus = jouw slaaf','enim = want','ex isdem seminibus ortus est = is op dezelfde manier geboren','aeque spirat = ademt net zo','aeque vivit = leeft net zo','aeque moritur = sterft net zo'],'enim staat in het Latijn op de tweede plaats, in het Nederlands vooraan: "Want …".'],
 ['16–17','Praeterea stultum est hominem aut ex veste aut ex origine aestimare.','Bovendien is het dom een mens op grond van zijn kleding of op grond van zijn afkomst te beoordelen.',['praeterea = bovendien','stultum est = het is dom','hominem = een mens (acc ev)','aut ex veste aut ex origine = óf op grond van kleding óf op grond van afkomst','aestimare = beoordelen'],'ex betekent hier "op grond van" (zie de aantekening naast de tekst).'],
 ['18–19','Haec est summa meae opinionis: sic cum inferiore vive quemadmodum vis superiorem tecum vivere.','Dit is de kern van mijn mening: leef zo met een mindere zoals je wilt dat een meerdere met jou leeft.',['haec est summa = dit is de kern','meae opinionis = van mijn mening (gen ev)','sic … vive = leef zo','cum inferiore = met een mindere (abl ev)','quemadmodum = zoals','vis superiorem tecum vivere = je wilt dat een meerdere met jou leeft'],'tecum = cum te (met jou), zoals nobiscum = cum nobis.']
];
vertaal(Z7B,'t7b','v7b','tekst 7B');
[['tb1','r. 1','Waarom noemt Seneca zijn vriend Lucilius verstandig?','Omdat Lucilius vriendelijk met zijn slaven omgaat',['Omdat Lucilius veel slaven heeft','Omdat Lucilius zijn slaven streng straft','Omdat Lucilius zijn slaven heeft vrijgelaten'],'quia familiariter cum servis tuis vivis = omdat je vriendelijk met je slaven leeft.'],
 ['tb2','r. 2–4','Wat zegt Lucilius over slaven, volgens Seneca?','Het zijn mensen en huisvrienden',['Het zijn slaven en geen mensen','Het zijn wijnschenkers','Het zijn dieren, net als vee'],'"Immo, homines sunt!" en "Contubernales sunt" (huisvrienden). Anderen zeggen: "Servi sunt".'],
 ['tb3','r. 6–7','Wat gebeurt er bij sommige heren als een slaaf tijdens het diner de stilte onderbreekt?','Hij krijgt een zware straf',['Hij moet wijn schenken','Hij wordt vrijgelaten','Hij mag mee-eten'],'si quis servus silentium interpellat, poena gravis est.'],
 ['tb4','r. 8–10','Seneca zegt dat sommige slaven als vee (tamquam iumentis) worden behandeld. Welk voorbeeld geeft hij?','Ze moeten speeksel opruimen en de resten van dronken gasten verzamelen',['Ze moeten de akkers ploegen','Ze moeten vechten in de arena','Ze moeten de kinderen naar school brengen'],'alius sputa deterget, alius reliquias temulentorum colligit.'],
 ['tb5','r. 11–12','Wat doen sommige heren met slaven die wijn moeten schenken?','Ze kleden hen in vrouwenkleren',['Ze laten hen zwijgen','Ze slaan hen met de zweep','Ze geven hen een peculium'],'eos vestibus muliebribus ornant: ze versieren hen met vrouwenkleren.'],
 ['tb6','r. 13–14','Hoe straft Lucilius zijn slaven?','Met woorden, niet met zweepslagen',['Met zweepslagen, niet met woorden','Hij straft ze nooit','Hij laat ze zonder eten'],'servos verbis, non verberibus punis.'],
 ['tb7','r. 14–15','Welk argument geeft Seneca om slaven goed te behandelen?','Een slaaf wordt net zo geboren, ademt, leeft en sterft net zo als jij',['Een slaaf werkt beter als hij goed wordt behandeld','Een slaaf kan zich anders vrijkopen','De keizer heeft het zo bevolen'],'ex isdem seminibus ortus est et aeque spirat, aeque vivit et aeque moritur.'],
 ['tb8','r. 16–17','Waarop moet je een mens volgens Seneca NIET beoordelen?','Op zijn kleding of zijn afkomst',['Op wat hij zegt','Op hoe hij zich gedraagt','Op zijn verstand'],'stultum est hominem aut ex veste aut ex origine aestimare.'],
 ['tb9','r. 18–19','Wat is de kern van Seneca\'s mening?','Behandel een mindere zoals je wilt dat een meerdere jou behandelt',['Een slaaf moet altijd gehoorzamen','Alle slaven moeten worden vrijgelaten','Een meerdere mag een mindere straffen'],'sic cum inferiore vive quemadmodum vis superiorem tecum vivere.']
].forEach(([id,nr,q,a,f,u])=>mk(id,'t7b','Tekst 7B '+nr,q,a,f,u,`Tekst 7B ${nr}: ${q}`));
[['tg1','r. 11–12','… et tum eos <b>vestibus muliebribus</b> ornant.<br>Welke naamval is vestibus muliebribus?','abl mv',['dat mv','acc mv','nom mv'],'vest-ibus en muliebr-ibus: abl mv (met vrouwenkleren). Het bijvoeglijk naamwoord muliebris congrueert met vestis: zelfde naamval, geslacht en getal.'],
 ['tg2','r. 13','… quia servos verbis, non <b>verberibus</b> punis.<br>Van welk woord komt verberibus?','verber, verberis (zweepslag)',['verbum (woord)','verbero (slaan)','vester (jullie)'],'verber, verberis is groep 3: verber-ibus = abl mv, met zweepslagen. verbis komt van verbum (groep 2).'],
 ['tg3','r. 5','Sunt autem multa exempla <b>crudelitatis</b> in servos.<br>Hoe vertaal je crudelitatis?','van wreedheid',['wreed','met wreedheid','de wreedheden'],'crudelitas, crudelitatis: crudelitat-is = gen ev.'],
 ['tg4','r. 6','<b>Aliis servis</b> non licet loqui.<br>Waarom staat aliis servis in de dativus?','licet heeft een dativus bij zich',['Het is het onderwerp','Het is het lijdend voorwerp','Na non komt altijd een dativus'],'licet + dat: het is (aan) sommige slaven niet toegestaan.'],
 ['tg5','r. 18','sic cum <b>inferiore</b> vive …<br>Welke naamval is inferiore?','abl ev',['acc ev','dat ev','nom mv'],'cum + abl: met een mindere. inferior, inferioris: inferior-e = abl ev.'],
 ['tg6','r. 16','stultum est <b>hominem</b> aut ex veste aut ex origine aestimare.<br>Welke naamval is hominem?','acc ev',['gen mv','nom ev','abl ev'],'homin-em = acc ev: lijdend voorwerp bij aestimare. Niet verwarren met homin-um (gen mv).'],
 ['tg7','r. 18','Haec est summa <b>meae opinionis</b>.<br>Hoe vertaal je meae opinionis?','van mijn mening',['mijn mening','met mijn mening','mijn meningen'],'opinio, opinionis: opinion-is = gen ev. meae (bezittelijk vnw) congrueert ermee.']
].forEach(([id,nr,q,a,f,u])=>mk(id,'t7b','Tekst 7B '+nr,'<i>'+q.replace('<br>','</i><br>'),a,f,u,`Tekst 7B ${nr}: ${q.split('<br>').pop()}`));
open('tbo1','t7b','Meningsvraag','Is Seneca tegen slavernij? Leg je antwoord uit met de tekst.',['Nee, hij wil slavernij niet afschaffen','Hij vindt wel dat je slaven als mensen moet behandelen','Een voorbeeld uit de tekst (woorden in plaats van zweepslagen, zelfde geboorte)'],'Nee. Seneca zegt nergens dat slaven vrij moeten zijn: Lucilius heeft gewoon slaven. Wel vindt hij dat je ze vriendelijk en als mensen moet behandelen, bijvoorbeeld straffen met woorden in plaats van zweepslagen, omdat een slaaf net zo geboren wordt, leeft en sterft als jij.','Wil Seneca de slavernij afschaffen? Leg uit.');

/* ---------- Tekst 7C Lupus ad canem (Phaedrus, met vertaling in het boek) ---------- */
[['tc1','r. 1','Wat wil Phaedrus met deze fabel laten zien?','Hoe zoet (fijn) de vrijheid is',['Dat honden slimmer zijn dan wolven','Dat je altijd moet werken voor je eten','Dat je een meester moet gehoorzamen'],'Quam dulcis sit libertas breviter proloquar: hoe zoet de vrijheid is, zal ik kort uiteenzetten.'],
 ['tc2','r. 2–6','Hoe zien de wolf en de hond eruit als ze elkaar tegenkomen?','De wolf is mager, de hond is goed doorvoed',['De hond is mager, de wolf is goed doorvoed','Allebei zijn ze mager','De wolf is gewond, de hond is ziek'],'cani perpasto (goed doorvoede hond) en macie confectus lupus (wolf, verzwakt door magerte).'],
 ['tc3','r. 6','Waarom vindt de wolf het oneerlijk dat hij honger heeft?','Hij is veel sterker dan de hond',['Hij jaagt harder dan de hond','Hij heeft de hond vroeger geholpen','Hij is ouder dan de hond'],'Ego, qui sum longe fortior, pereo fame: ik, die veel sterker ben, kom om van de honger.'],
 ['tc4','r. 9–14','Wat moet de hond doen voor zijn eten?','De drempel bewaken en \'s nachts het huis beschermen tegen dieven',['Op jacht gaan met zijn meester','De kinderen naar school brengen','Schapen hoeden in de bossen'],'Custos ut sis liminis, a furibus tuearis et noctu domum.'],
 ['tc5','r. 15–18','Waarom wil de wolf eerst graag mee?','In het bos lijdt hij onder sneeuw en regen; onder een dak met veel eten is makkelijker',['Hij wil de meester van de hond bestelen','Hij wil zelf koning worden','Hij is bang voor de dieven'],'nunc patior nives imbresque in silvis … quanto est facilius mihi sub tecto vivere.'],
 ['tc6','r. 19–20','Wat ziet de wolf onderweg aan de hond?','Zijn nek is kaal geschuurd door een ketting',['Hij heeft een wond aan zijn poot','Hij is erg moe','Hij draagt een halsband van goud'],'aspicit lupus a catena collum detritum cani.'],
 ['tc7','r. 22–24','Waarom bindt de meester de hond overdag vast?','Omdat hij fel is: overdag rust hij, \'s nachts moet hij waken',['Omdat hij wil weglopen','Omdat hij de buren bijt','Omdat hij eten steelt'],'Quia videor acer, alligant me interdiu, luce ut quiescam, et vigilem nox cum venerit.'],
 ['tc8','r. 25–27','Wat besluit de wolf aan het eind?','Hij gaat niet mee: liever vrij dan koning zonder vrijheid',['Hij gaat toch mee naar de meester','Hij laat de hond vrij','Hij wordt ook een waakhond'],'regnare nolo, liber ut non sim mihi: ik wil geen koning zijn als ik dan niet vrij ben.'],
 ['tc9','r. 2','<i>Cani perpasto macie confectus lupus forte occucurrit</i>. In welke naamval staat cani?','dat ev',['nom ev','abl ev','gen ev'],'canis, canis: can-i = dat ev. occurrere + dat: iemand tegenkomen.'],
 ['tc10','r. 6','<i>pereo fame</i>. Hoe vertaal je fame?','van de honger',['de honger','met honger','hongerig'],'fames, famis (honger): fam-e = abl ev, hier: (door) van de honger.']
].forEach(([id,nr,q,a,f,u])=>mk(id,'t7c','Tekst 7C '+nr,q,a,f,u,`Lupus ad canem ${nr}: ${q}`));
open('tco1','t7c','Tekst 7C','Wat heeft de fabel van de wolf en de hond te maken met het hoofdstuk over slavernij?',['De hond is als een slaaf: eten en een dak, maar geen vrijheid (ketting)','De wolf kiest voor vrijheid, ook al heeft hij honger'],'De hond is als een slaaf: hij krijgt eten en een dak, maar zit aan de ketting en mag niet gaan waar hij wil. De wolf is arm en hongerig, maar vrij, en die vrijheid vindt hij belangrijker. Net als Spartacus en zijn mannen.','Leg uit waarom deze fabel in het hoofdstuk over slavernij staat.');

/* ---------- Cultuur H7: slavernij en Spartacus (p. 86–88) ---------- */
[['k1','Wat was het peculium?','Geld dat een slaaf spaarde om zich vrij te kopen',['Een straf voor een ongehoorzame slaaf','Het testament van een meester','Een school voor gladiatoren'],'Een slaaf kon geld sparen om zich vrij te kopen. Dat geld heette het peculium.'],
 ['k2','Wanneer liet een meester een slaaf meestal vrij?','Na de dood van de meester, omdat het in zijn testament stond',['Op de verjaardag van de slaaf','Als de slaaf 12 jaar was','Als de slaaf een gladiator had verslagen'],'Dit gebeurde in de regel pas als de meester gestorven was en het in zijn testament had laten opnemen.'],
 ['k3','Hoe heetten vrijgelaten slaven?','liberti',['servi','contubernales','gladiatores'],'Vrijgelaten slaven heetten liberti. Ze konden als vrije mensen een rol spelen; sommigen kregen een aanzienlijke positie.'],
 ['k4','Waarom kwamen de gladiatoren in opstand?','Ze moesten elke dag keihard trainen, kregen de zweep en trainden om elkaar te doden voor het vermaak van de Romeinen',['Ze kregen geen peculium','Ze moesten vrouwenkleren dragen','Ze mochten niet spreken tijdens het diner'],'Op een gladiatorenschool ten zuiden van Rome hadden ze er genoeg van.'],
 ['k5','In welk jaar begon de opstand van Spartacus?','73 v.Chr.',['73 n.Chr.','37 v.Chr.','173 v.Chr.'],'In 73 v.Chr. ontsnapte Spartacus met een groepje gladiatoren.'],
 ['k6','Hoeveel gladiatoren ontsnapten er met Spartacus, en waarmee waren ze bewapend?','Ongeveer 70, met keukenmessen',['Ongeveer 700, met zwaarden','Ongeveer 70.000, met speren','Ongeveer 40, met stokken'],'Ongeveer 70 gladiatoren vochten zich met keukenmessen een weg naar de wagens.'],
 ['k7','Hoe reageerden de senatoren in Rome eerst op de opstand?','Ze onderschatten de slaven en stuurden maar een paar soldaten',['Ze stuurden meteen Crassus met 40.000 soldaten','Ze lieten alle slaven vrij','Ze gingen onderhandelen'],'"Moeten we die serieus nemen?" Een paar soldaten werden genadeloos verslagen.'],
 ['k8','Waar belegerde Claudius Glaber de slaven?','Op de Vesuvius',['In Sicilië','Bij de poorten van Rome','In Griekenland'],'Glaber joeg de slaven de Vesuvius op en hoopte dat ze door honger zouden opgeven.'],
 ['k9','Welke fout maakte Claudius Glaber?','Hij bouwde geen muur om zijn legerkamp, dus de slaven konden \'s nachts binnendringen',['Hij liet de schepen niet komen','Hij stuurde te veel soldaten','Hij ging onderhandelen met Spartacus'],'Ook hij onderschatte de slaven. Spartacus was een bekwaam strateeg: de slaven slopen \'s nachts naar beneden en vielen aan.'],
 ['k10','Wie was Marcus Crassus?','De rijkste man van Rome, met meer dan 40.000 goed getrainde soldaten',['De leider van de gladiatorenschool','Een slaaf die zich bij Spartacus aansloot','De keizer van Rome'],'Eindelijk werden de slaven als serieuze vijanden gezien.'],
 ['k11','Hoeveel slaven had Spartacus uiteindelijk verzameld?','70.000',['70','7.000','40.000'],'Na verloop van tijd had hij maar liefst 70.000 slaven verzameld.'],
 ['k12','Waar wilde Spartacus naartoe?','Naar het zuiden van Italië, en dan met de boot naar Sicilië of Griekenland',['Naar Rome, om de stad in te nemen','Naar de Vesuvius','Naar Falerii'],'Hij zocht een plek om in vrijheid te leven.'],
 ['k13','Waarom verloren de slaven van Crassus?','Ze waren moe na jaren op de vlucht; hun motivatie en organisatie waren verdwenen, en de schepen kwamen niet',['Spartacus liep over naar de Romeinen','Ze hadden geen wapens meer','De Vesuvius barstte uit'],'Crassus had gezorgd dat de schepen niet kwamen; onderhandelen had geen zin. Spartacus stierf vechtend voor de vrijheid.'],
 ['k14','Wat gebeurde er met de slaven die niet in de strijd waren gedood?','Ze werden gekruisigd langs de weg naar Rome',['Ze werden vrijgelaten','Ze werden gladiator','Ze werden naar Griekenland gestuurd'],'Zo kon iedereen zien wat er gebeurde met slaven die hun meester niet gehoorzaamden.']
].forEach(([id,q,a,f,u])=>mk(id,'k7','Cultuur H7',q,a,f,u));
open('ko1','k7','Cultuur H7','Waarom kruisigden de Romeinen de slaven juist langs de weg naar Rome?',['Afschrikken: iedereen die langskwam zag het','Dit gebeurt met slaven die hun meester niet gehoorzamen'],'Om andere slaven af te schrikken: iedereen die over die weg kwam, zag wat er gebeurde met slaven die hun meester niet gehoorzaamden.','Wat wilden de Romeinen bereiken met de kruisigingen langs de weg?');

/* ---------- Grammatica H7 (II)–(IV): geslacht, bijvoeglijk naamwoord groep 3, congruentie (p. 91–92) ---------- */
const GS=[['pater, patris','mannelijk','regel 1: een man'],['mater, matris','vrouwelijk','regel 2: een vrouw'],['rex, regis','mannelijk','regel 1: een man (gaat voor de regel van -x)'],
 ['flos, floris','mannelijk','regel 3: -os'],['imperator, imperatoris','mannelijk','regel 3: -or (en een man)'],['opinio, opinionis','vrouwelijk','regel 4: -o'],
 ['crudelitas, crudelitatis','vrouwelijk','regel 4: -s'],['origo, originis','vrouwelijk','regel 4: -o'],['vestis, vestis','vrouwelijk','regel 4: -s'],
 ['nomen, nominis','onzijdig','regel 5: -men'],['corpus, corporis','onzijdig','regel 5: -us met genitivus -oris'],['tempus, temporis','onzijdig','regel 5: -us met genitivus -oris'],['genus, generis','onzijdig','regel 5: -us met genitivus -eris']];
const GSA={mannelijk:'m',vrouwelijk:'v',onzijdig:'o'};
GS.forEach(([w,a,u],i)=>mk('gs'+i,'g7','Geslacht',`Welk geslacht heeft ${L(w)}?`,a,['mannelijk','vrouwelijk','onzijdig'].filter(x=>x!==a),`${L(w)} is ${a}: ${u}.`,`Is ${L(w)} mannelijk, vrouwelijk of onzijdig?`,{tvAlt:[GSA[a]]}));
[['gr1','Welke woorden uit groep 3 zijn meestal onzijdig?','Woorden op -us (gen. -eris/-oris) en op -men',['Woorden op -o, -s en -x','Woorden op -os, -or en -er','Woorden die naar een vrouw verwijzen'],'Regel 5: corpus, corporis · genus, generis · nomen, nominis.'],
 ['gr2','Welke woorden uit groep 3 zijn meestal vrouwelijk?','Woorden op -o, -s of -x',['Woorden op -os, -or of -er','Woorden op -men','Woorden op -us met gen. -oris'],'Regel 4: opinio, crudelitas. Maar: een woord voor een man (rex) is mannelijk (regel 1 gaat voor).'],
 ['gr3','Welke woorden uit groep 3 zijn meestal mannelijk?','Woorden op -os, -or of -er',['Woorden op -o, -s of -x','Woorden op -men','Woorden op -us met gen. -eris'],'Regel 3: flos, imperator.']
].forEach(([id,q,a,f,u])=>mk(id,'g7','Geslachtsregels',q,a,f,u,q.replace('?','? (p. 91)')));
[['bv1','Welke bijvoeglijke naamwoorden worden verbogen volgens fortis?','Alle bijvoeglijke naamwoorden op -is',['Alle bijvoeglijke naamwoorden op -us','Alleen fortis en crudelis','Alle bijvoeglijke naamwoorden op -ns'],'Op -is (fortis, crudelis, gravis, omnis) → fortis. De rest van groep 3 (ingens, prudens) → ingens.'],
 ['bv2','Hoeveel rijtjes heeft een bijvoeglijk naamwoord uit groep 3?','Twee: één voor mannelijk/vrouwelijk en één voor onzijdig',['Drie: m, v en o','Eén voor alle geslachten','Vier: m, v, o en meervoud'],'Nota bene 1, p. 92: fortis (m/v), forte (o).'],
 ['bv3','Wat is de ablativus enkelvoud van fortis?','forti',['forte','fortis','fortem'],'Let op: bij het bijvoeglijk naamwoord is de abl ev <b>fort-i</b>, bij het zelfstandig naamwoord reg-e. forte is nom/acc ev onzijdig.'],
 ['bv4','Wat is de genitivus meervoud van fortis?','fortium',['fortum','fortis','fortibus'],'Bijvoeglijke naamwoorden groep 3 hebben gen mv op <b>-ium</b>: fortium, ingentium.'],
 ['bv5','Wat is de nominativus meervoud onzijdig van fortis?','fortia',['fortes','forta','fortiae'],'Onzijdig mv op <b>-ia</b>: fortia, ingentia (zelfst. nw: nomina).'],
 ['bv6','Wat is de stam van ingens?','ingent-',['ingen-','ingens-','inge-'],'Genitivus ingentis min -is = <b>ingent-</b>. Daarom staat in de woordenlijst ook de genitivus.'],
 ['bv7','Wat is de nominativus enkelvoud onzijdig van ingens?','ingens',['ingente','ingent','ingentum'],'Bij ingens zijn de nom m, v en o allemaal ingens. Onzijdig: acc = nom = ingens.'],
 ['cg1','In welke drie dingen past een bijvoeglijk naamwoord zich aan het zelfstandig naamwoord aan?','naamval, geslacht en getal',['naamval, groep en uitgang','geslacht, uitgang en stam','persoon, getal en tijd'],'Dat heet congruentie. De uitgang hoeft er niet hetzelfde uit te zien: rege bono, mensarum ingentium.'],
 ['cg2','Welke vorm van crudelis hoort bij regi (dat ev)?','crudeli',['crudele','crudelis','crudelem'],'regi crudeli = (aan) de wrede koning: dat ev m.'],
 ['cg3','Welke vorm van fortis hoort bij regem (acc ev)?','fortem',['forte','fortis','forti'],'regem fortem: acc ev m.'],
 ['cg4','Welke vorm van fortis hoort bij nomina (nom mv)?','fortia',['fortes','fortium','fortibus'],'nomen is onzijdig: nomina fortia.'],
 ['cg5','Welke vorm van ingens hoort bij capita (nom mv onzijdig)?','ingentia',['ingentes','ingens','ingentium'],'capita ingentia: nom of acc mv onzijdig (p. 92).'],
 ['cg6','Welke vorm van ingens hoort bij mensarum (gen mv)?','ingentium',['ingentarum','ingentum','ingentis'],'mensarum ingentium: gen mv v. De uitgangen zien er anders uit, maar naamval, geslacht en getal kloppen.'],
 ['cg7','Welke vorm van bonus hoort bij rege (abl ev)?','bono',['bone','bona','boni'],'rege bono: abl ev m. bonus gaat volgens groep 1/2.'],
 ['cg8','Welke vorm van bonus hoort bij reges als het accusativus meervoud is?','bonos',['boni','bones','bonis'],'reges bonos (acc mv); als nom mv: reges boni.'],
 ['cg9','Welke vorm van fortis hoort bij verberibus (abl mv)?','fortibus',['fortis','fortium','forti'],'fortibus verberibus = met harde slagen (tekst 8B r. 6).']
].forEach(([id,q,a,f,u])=>mk(id,'g7',id.startsWith('cg')?'Congruentie':'Bijv. nw groep 3',q,a,f,u,q.replace('?','? Kijk naar de rijtjes op p. 92.')));
open('cgo1','g7','Congruentie','<i>regi crudeli</i> en <i>rege bono</i>: de uitgangen zijn niet hetzelfde. Hoe weet je dan dat ze bij elkaar horen?',['Ze staan in dezelfde naamval, hetzelfde geslacht en hetzelfde getal','Ze komen uit verschillende groepen, dus andere uitgangen'],'Ze congrueren: zelfde naamval, geslacht en getal (dat ev m en abl ev m). rex is groep 3, crudelis groep 3 bijv. nw en bonus groep 1/2; daarom zien de uitgangen er anders uit.');

/* ---------- Cultuur H8: onderwijs (p. 94–98) ---------- */
[['o1','Was er in de Romeinse tijd leerplicht?','Nee, onderwijs was een voorrecht waarvoor ouders soms veel betaalden',['Ja, voor alle kinderen van 7 tot 12','Ja, maar alleen voor jongens','Nee, onderwijs was gratis maar niet verplicht'],'Wilde je een hoge functie in Rome, dan was goed onderwijs onmisbaar.'],
 ['o2','Op welke leeftijd begonnen Romeinse kinderen met school?','7 jaar',['4 jaar','10 jaar','12 jaar'],'Later dan nu: pas als ze zeven waren.'],
 ['o3','Wie was de paedagogus?','Een slaaf, meestal een Griek, die het kind naar school bracht en zorgde dat het op tijd was',['De leraar van de basisschool','De leraar van de retorenschool','De vader van het kind'],'Paedagogus is een Grieks woord: kinderbegeleider.'],
 ['o4','Wanneer begon de school?','Vóór zonsopgang',['Om twaalf uur','Na de lunch','Bij zonsondergang'],'Zie ook tekst 8B: de buurman klaagt dat het nog nacht is.'],
 ['o5','Hoe zag een schooldag eruit?','Zes uur les, met tussendoor thuis een maaltijd',['Acht uur les zonder pauze','Drie uur les en daarna sport','Les van zonsopgang tot zonsondergang op school, met eten op school'],'Na de maaltijd ging school meteen verder.'],
 ['o6','Waar kregen kinderen les bij de magister?','In één klein bedompt lokaaltje, of soms in een zuilengalerij met een gordijn',['In een groot schoolgebouw','In de tempel','In het amfitheater'],'Het gordijn hing er zodat de leerlingen niet afgeleid werden.'],
 ['o7','Hoe werkte een schrijfplankje?','Twee houten plankjes met was; met een pen kras je erin en met de platte kant strijk je de was weer glad',['Een plankje waarop je met inkt schreef','Een stuk papyrus op een plank geplakt','Een stenen tafel waarop je met krijt schreef'],'Voordat je het uitwiste, moest je het uit je hoofd leren: weg is weg!'],
 ['o8','Hoe werd papyrus gemaakt?','Stengels van de papyrusplant in linten gesneden, aan elkaar geplakt en een tweede laag erop geperst',['Dierenhuiden geweekt en gedroogd','Hout met was ingesmeerd','Klei gedroogd in de zon'],'Dierenhuiden = perkament, hout met was = schrijfplankje.'],
 ['o9','Waarom waren er grote leeftijdsverschillen in de klas van de magister?','Alle basisscholieren, van 7 tot 12 jaar, kregen samen les',['Volwassenen leerden ook lezen','Slaven zaten in dezelfde klas','Er waren klassen van 7 tot 18 jaar'],'De magister moest ze allemaal tegelijk lesgeven. Orde houden was dus belangrijk.'],
 ['o10','Wat gebeurde er met een leerling die de les verstoorde?','De magister gaf hem een paar flinke meppen met een takkenbos',['Hij moest strafregels schrijven','Hij werd naar huis gestuurd','Hij moest de vloer vegen'],'De onruststoker werd hardhandig aangepakt.'],
 ['o11','Wat leerden kinderen bij de magister?','Lezen, schrijven en een beetje rekenen, in het Latijn en het Grieks',['Literatuur en filosofie','Mooi spreken in het openbaar','Een vak, zoals timmerman'],'Literatuur = grammaticus, spreken = retor, vak = bij een vakman.'],
 ['o12','Hoe kregen meisjes les?','Meestal van hun moeder; meisjes uit rijkere gezinnen soms in een apart klasje',['Bij de magister, samen met de jongens','Bij de grammaticus','Meisjes kregen nooit les'],'In de klas zaten alleen jongens.'],
 ['o13','Wat deden de meeste jongens na hun twaalfde?','Ze gingen in dienst bij een vakman om een vak te leren en geld te verdienen',['Ze gingen naar de grammaticus','Ze gingen naar de retorenschool','Ze gingen in het leger'],'Veel ouders hadden geen geld om hen langer naar school te sturen.'],
 ['o14','Wat deden leerlingen bij de grammaticus?','Ze lazen literaire werken van beroemde Grieken en Romeinen (3 à 4 jaar)',['Ze leerden lezen en schrijven','Ze leerden een vak','Ze leerden redevoeringen houden'],'Ook aardrijkskunde, geschiedenis, astronomie en filosofie, maar alleen aan de hand van die werken.'],
 ['o15','Waarom was een boekrol onpraktisch?','Het duurde heel lang voordat je bij de goede passage was',['Hij was te zwaar om mee te nemen','Je kon er maar aan één kant op schrijven','Hij ging snel kapot in de regen'],'Daarom kwam rond de eerste eeuw n.Chr. het boek zoals wij het kennen, van perkament.'],
 ['o16','Waarvan werd perkament gemaakt?','Van dierenhuiden die geweekt en gedroogd werden',['Van papyrusplanten','Van hout met was','Van linnen'],'De vellen werden gevouwen, gesneden en ingenaaid: zo ontstonden boeken.'],
 ['o17','Waarom was Grieks onmisbaar voor een ontwikkelde Romein?','Belangrijke boeken waren in het Grieks, Romeinen handelden veel met Griekenland en er waren veel Griekssprekende slaven en kooplieden',['Grieks was de taal van het Romeinse leger','De keizer sprak alleen Grieks','Latijn had nog geen schrift'],'En Grieks had iets chics: een afspraakje maakte je ook vaak in het Grieks.'],
 ['o18','Wat is een retor?','Iemand die in het openbaar spreekt, zoals een advocaat of een consul',['Een leraar van de basisschool','Een slaaf die kinderen naar school brengt','Iemand die boeken overschrijft'],'Een opleiding tot retor was onmisbaar voor een politieke carrière.'],
 ['o19','Wat leerde je op de retorenschool?','Mooi praten, een redevoering opbouwen en argumenten ordenen',['Lezen, schrijven en rekenen','Lezen van boekrollen in het Grieks','Een vak in de praktijk'],'Soms moest je hele toespraken van beroemde Grieken en Romeinen uit je hoofd leren.'],
 ['o20','In welke volgorde ging een rijke Romeinse jongen naar school?','magister → grammaticus → retor',['grammaticus → magister → retor','magister → retor → grammaticus','paedagogus → magister → grammaticus'],'De paedagogus is geen leraar maar een begeleider.']
].forEach(([id,q,a,f,u])=>mk(id,'k8','Cultuur H8',q,a,f,u,undefined,id==='o20'?{mc:1}:undefined));
open('oo1','k8','Cultuur H8','Noem twee verschillen tussen de Romeinse basisschool en jouw school.',['Twee duidelijke verschillen','Bijvoorbeeld: geen leerplicht, begin vóór zonsopgang, alleen jongens, één lokaal voor 7–12 jaar, schrijfplankjes, slaan'],'Bijvoorbeeld: er was geen leerplicht en je ouders betaalden; school begon vóór zonsopgang; alleen jongens zaten in de klas; alle leeftijden van 7 tot 12 zaten in één lokaaltje; je schreef op een wasplankje; een leerling die de les verstoorde werd geslagen.','Geef twee verschillen tussen school bij de magister en school nu.');

/* ---------- Tekst 8A De schoolmeester van Falerii ---------- */
const Z8A=[
 ['1','Falerii liberos curae magistri demandabant.','De inwoners van Falerii vertrouwden hun kinderen toe aan de zorg van een schoolmeester.',['Falerii = de inwoners van Falerii','liberos = (hun) kinderen','curae magistri demandabant = vertrouwden toe aan de zorg van een schoolmeester'],'liberi (mv) = kinderen, niet "vrije mensen".'],
 ['2','Is, qui valde doctus erat, filios principum erudiebat.','Hij, die zeer geleerd was, leidde de zonen van de leiders op.',['is = hij (zelfstandig gebruikt)','qui valde doctus erat = die zeer geleerd was','filios principum = de zonen van de leiders','erudiebat = leidde op'],'Is staat zonder zelfstandig naamwoord: vertaal met "hij" of "deze man".'],
 ['3–4','Mos ei magistro erat et in pace et in bello pueros a portis urbis trahere et cum eis ante urbem exercere.','Die schoolmeester had de gewoonte zowel in vrede als in oorlog de jongens van de poorten van de stad weg te leiden en met hen voor de stad te oefenen.',['mos ei magistro erat = die schoolmeester had de gewoonte','et in pace et in bello = zowel in vrede als in oorlog','pueros a portis urbis trahere = de jongens van de poorten van de stad weg (te) leiden','cum eis = met hen','ante urbem exercere = voor de stad (te) oefenen'],'Letterlijk: "Er was aan die schoolmeester een gewoonte". ei magistro: ei is bijvoeglijk, dus "die".'],
 ['5–6','Quodam die eos longius solito inter stationes hostium ad Camillum, ducem Romanorum, duxit.','Op een zekere dag leidde hij hen verder dan gewoonlijk tussen de wachtposten van de vijanden door naar Camillus, de leider van de Romeinen.',['quodam die = op een zekere dag','eos = hen','longius solito = verder dan gewoonlijk','inter stationes hostium = tussen de wachtposten van de vijanden','ad Camillum, ducem Romanorum = naar Camillus, de leider van de Romeinen','duxit = leidde'],''],
 ['7–8','Magister Camillo dixit: "Falerios Romanis trado, quia vobis liberos principum do."','De schoolmeester zei tegen Camillus: "Ik lever Falerii uit aan de Romeinen, omdat ik jullie de kinderen van de leiders geef."',['Camillo dixit = zei tegen Camillus (dat)','Falerios Romanis trado = ik lever Falerii (de inwoners) uit aan de Romeinen','quia = omdat','vobis = (aan) jullie (dat mv van vos)','liberos principum do = ik geef de kinderen van de leiders'],''],
 ['9–10','Dux Romanorum ei respondit: "Non venisti ad scelestum populum et imperatorem cum hoc scelesto munere!','De leider van de Romeinen antwoordde hem: "Je bent niet met dit misdadige geschenk naar een misdadig volk en een misdadige veldheer gekomen!',['dux Romanorum = de leider van de Romeinen','ei respondit = antwoordde hem (dat ev)','non venisti = je bent niet gekomen','ad scelestum populum et imperatorem = naar een misdadig volk en (misdadige) veldheer','cum hoc scelesto munere = met dit misdadige geschenk'],'munus, muneris = geschenk. hoc is bijvoeglijk: "dit".'],
 ['11–12','Sunt iura belli, sicut pacis. Nos Romani haec solemus gerere.','Er zijn wetten van de oorlog, net als van de vrede. Wij Romeinen plegen deze (dingen) te handhaven.',['sunt iura belli = er zijn wetten (rechten) van de oorlog','sicut pacis = net als van de vrede','nos Romani = wij Romeinen','haec = deze dingen (zelfstandig, acc mv o)','solemus gerere = plegen (gewoonlijk) te handhaven'],''],
 ['12–13','Arma habemus non adversus hos liberos, sed adversus homines armatos.','Wij hebben wapens niet om deze kinderen aan te vallen, maar tegen gewapende mannen.',['arma habemus = wij hebben wapens','non adversus hos liberos = niet tegen deze kinderen','sed adversus homines armatos = maar tegen gewapende mannen'],'hos liberos: hos is bijvoeglijk, dus "deze".'],
 ['13–14','Tu hos pueros novo scelere vicisti, sed ego Falerios virtute armisque vincam!"','Jij hebt deze jongens met een ongehoorde misdaad overwonnen, maar ik zal de Falerii(ërs) met dapperheid en wapens overwinnen!"',['tu hos pueros … vicisti = jij hebt deze jongens overwonnen','novo scelere = met een ongehoorde misdaad (abl)','sed ego Falerios … vincam = maar ik zal de inwoners van Falerii overwinnen','virtute armisque = met dapperheid en wapens'],'-que = en: armisque = et armis.'],
 ['15–16','Deinde manus magistri post tergum illigavit et eum pueris tradidit.','Daarna bond hij de handen van de schoolmeester op zijn rug vast en leverde hem uit aan de jongens.',['deinde = daarna','manus magistri = de handen van de schoolmeester','post tergum illigavit = bond op zijn rug vast','eum = hem','pueris tradidit = leverde uit aan de jongens (dat mv)'],''],
 ['16','Virgas quoque eis dedit.','Ook gaf hij hun stokken.',['virgas = stokken','quoque = ook','eis = (aan) hen (dat mv)','dedit = gaf'],''],
 ['16–17','Dum his virgis pueri proditorem verberant, eum in urbem egerunt.','Terwijl de jongens de verrader met deze stokken sloegen, dreven ze hem de stad in.',['dum = terwijl','his virgis = met deze stokken (abl mv)','pueri proditorem verberant = de jongens slaan de verrader','eum in urbem egerunt = dreven hem de stad in'],'Na dum mag je in het Nederlands ook de verleden tijd gebruiken: "sloegen".']
];
vertaal(Z8A,'t8a','v8a','tekst 8A');
[['fa1','r. 1–2','Wat voor iemand was de schoolmeester van Falerii?','Hij was zeer geleerd en leidde de zonen van de leiders op',['Hij was een Romeinse soldaat','Hij was een slaaf van Camillus','Hij leerde kinderen vechten'],'Is, qui valde doctus erat, filios principum erudiebat.'],
 ['fa2','r. 3–4','Wat was de gewoonte van de schoolmeester?','Met de jongens buiten de stad oefenen, in vrede én in oorlog',['De jongens slaan met stokken','De jongens naar Rome brengen','Elke ochtend vóór zonsopgang beginnen'],'et in pace et in bello pueros a portis urbis trahere et cum eis ante urbem exercere.'],
 ['fa3','r. 5–8','Wat doet de schoolmeester op een dag?','Hij brengt de kinderen naar Camillus, zodat Falerii zich moet overgeven',['Hij verstopt de kinderen voor de Romeinen','Hij valt de Romeinen aan met de kinderen','Hij laat de kinderen vrij'],'Met de kinderen van de leiders in Romeinse handen zou Falerii zich moeten overgeven.'],
 ['fa4','r. 9–14','Waarom wijst Camillus het "geschenk" af?','Ook in de oorlog gelden regels; Romeinen vechten niet tegen kinderen maar tegen gewapende mannen',['Hij wil geen kinderen voeden','Hij vertrouwt de schoolmeester niet','De kinderen zijn te jong om slaaf te zijn'],'Sunt iura belli, sicut pacis … arma habemus non adversus hos liberos, sed adversus homines armatos.'],
 ['fa5','r. 14','Hoe wil Camillus Falerii wél overwinnen?','Met dapperheid en wapens',['Met een list','Door de stad uit te hongeren','Door de leiders om te kopen'],'ego Falerios virtute armisque vincam.'],
 ['fa6','r. 15–17','Wat gebeurt er met de schoolmeester?','Zijn handen worden op zijn rug gebonden en de jongens slaan hem met stokken terug de stad in',['Hij wordt een Romein','Hij wordt gekruisigd','Hij vlucht naar Rome'],'De verrader (proditor) wordt door zijn eigen leerlingen teruggedreven.'],
 ['fa7','na de tekst','Hoe loopt het verhaal af?','De inwoners van Falerii geven zich vrijwillig over, onder de indruk van de rechtvaardige Camillus',['Camillus verovert Falerii met geweld','Falerii wint de oorlog','De Romeinen trekken zich terug'],'Zie de zin onder de tekst.']
].forEach(([id,nr,q,a,f,u])=>mk(id,'t8a','Tekst 8A '+nr,q,a,f,u,`Falerii ${nr}: ${q}`));
const VNW=['zelfstandig: hij/hem','zelfstandig: zij/haar/hen','bijvoeglijk: deze/die/dit'];
[['ga1','r. 2','<b>Is</b>, qui valde doctus erat …','is','nom ev m','hij','Er staat geen zelfstandig naamwoord bij: zelfstandig, "hij" (of "deze man").'],
 ['ga2','r. 3','Mos <b>ei</b> magistro erat …','ei','dat ev m','die (schoolmeester)','ei congrueert met magistro (dat ev): bijvoeglijk, "die schoolmeester".'],
 ['ga3','r. 4','… et cum <b>eis</b> ante urbem exercere.','eis','abl mv m','(met) hen','cum + abl. Geen zelfstandig naamwoord erbij: "met hen".'],
 ['ga4','r. 5','Quodam die <b>eos</b> … duxit.','eos','acc mv m','hen','Lijdend voorwerp, zelfstandig: "hen" (de jongens).'],
 ['ga5','r. 9','Dux Romanorum <b>ei</b> respondit.','ei','dat ev m','(aan) hem','Geen zelfstandig naamwoord erbij: zelfstandig, dat ev: "antwoordde hem".'],
 ['ga6','r. 10','… cum <b>hoc</b> scelesto munere!','hoc','abl ev o','dit','hoc congrueert met munere (abl ev o): bijvoeglijk, "met dit misdadige geschenk".'],
 ['ga7','r. 11','Nos Romani <b>haec</b> solemus gerere.','haec','acc mv o','deze dingen','Geen zelfstandig naamwoord erbij, onzijdig mv: "deze dingen". Lijdend voorwerp bij gerere.'],
 ['ga8','r. 12','… non adversus <b>hos</b> liberos …','hos','acc mv m','deze','hos congrueert met liberos: "deze kinderen".'],
 ['ga9','r. 15','… et <b>eum</b> pueris tradidit.','eum','acc ev m','hem','Zelfstandig, lijdend voorwerp: "hem" (de schoolmeester).'],
 ['ga10','r. 16','Virgas quoque <b>eis</b> dedit.','eis','dat mv m','(aan) hen','Meewerkend voorwerp bij dedit: "gaf hun".'],
 ['ga11','r. 16','Dum <b>his</b> virgis pueri proditorem verberant …','his','abl mv v','deze','his congrueert met virgis (abl mv v): "met deze stokken".']
].forEach(([id,nr,zin,w,nv,nl,u])=>{
  mk(id+'n','t8a','Tekst 8A '+nr,`<i>${zin}</i><br>In welke naamval staat ${L(w)}?`,nv,pick(['nom ev m','gen ev m','dat ev m','acc ev m','abl ev m','abl ev o','nom mv m','dat mv m','acc mv m','abl mv m','acc mv o','abl mv v','acc mv v'],3,nv),u,`Benoem ${L(w)} in: <i>${zin}</i>`);
  mk(id,'t8a','Tekst 8A '+nr,`<i>${zin}</i><br>Hoe vertaal je ${L(w)} hier?`,nl,pick(['hij','hem','(aan) hem','hen','(aan) hen','(met) hen','die (schoolmeester)','dit','deze','deze dingen','zij','haar'],3,nl),u,`Vertaal ${L(w)} in: <i>${zin}</i>`)});

/* ---------- Tekst 8B Een leraar schreeuwt te hard ---------- */
const Z8B=[
 ['1–2','Quid hoc rei est? Quid tibi nobiscum est, tu scelerate magister?','Wat is dit? Wat heb je met ons te maken, jij misdadige schoolmeester?',['quid hoc rei est = wat is dit','quid tibi nobiscum est = wat heb je met ons te maken','tu scelerate magister = jij misdadige schoolmeester (aanspreekvorm)'],'nobiscum = cum nobis.'],
 ['3','Invisus es pueris virginibusque huius ludi.','Je bent gehaat bij de jongens en meisjes van deze school.',['invisus es = je bent gehaat','pueris virginibusque = bij de jongens en meisjes (dat mv)','huius ludi = van deze school (gen ev)'],'invisus = gehaat, ludus = school.'],
 ['4','Adhuc nox est et nondum ruperunt galli silentium.','Het is nog nacht en de hanen hebben de stilte nog niet verbroken.',['adhuc nox est = het is nog nacht','nondum = nog niet','ruperunt galli silentium = hebben de hanen de stilte verbroken'],''],
 ['5–6','Clamas voce magna et, sicut Iuppiter, tonas murmure saevo et fortibus verberibus.','Je schreeuwt met luide stem en je dondert, zoals Jupiter, met woest gebrul en harde slagen.',['clamas voce magna = je schreeuwt met luide stem','sicut Iuppiter = zoals Jupiter','tonas = je dondert','murmure saevo = met woest gebrul','fortibus verberibus = met harde slagen (abl mv)'],'fortibus congrueert met verberibus: abl mv.'],
 ['7–8','Etiam in magno amphitheatro non clamor tam magnopere furit, cum populus victorem conclamat.','Zelfs in het grote amfitheater raast het geschreeuw niet zo erg, wanneer het volk de overwinnaar toejuicht.',['etiam in magno amphitheatro = zelfs in het grote amfitheater','non clamor tam magnopere furit = raast het geschreeuw niet zo erg','cum populus victorem conclamat = wanneer het volk de overwinnaar toejuicht'],''],
 ['9–10','Nos, vicini, hoc unum, somnum – non tota nocte –, rogamus.','Wij, buren, vragen dit ene: slaap – niet (eens) de hele nacht.',['nos, vicini = wij, buren','hoc unum = dit ene (acc ev o)','somnum = slaap','non tota nocte = niet de hele nacht','rogamus = vragen wij'],''],
 ['11','Nam vigilare leve est, pervigilare grave est.','Want wakker zijn is licht, de hele nacht wakker zijn is zwaar.',['nam = want','vigilare leve est = wakker zijn is licht (makkelijk)','pervigilare grave est = de hele nacht wakker zijn is zwaar'],''],
 ['12–13','Discipulos tuos dimitte. Eam pecuniam, quam accipis ut clames, garrule, accipe ut taceas.','Stuur je leerlingen weg. Dat geld dat je krijgt om te schreeuwen, kletskous, neem het aan om te zwijgen.',['discipulos tuos dimitte = stuur je leerlingen weg','eam pecuniam = dat geld (bijvoeglijk)','quam accipis ut clames = dat je krijgt om te schreeuwen','garrule = kletskous (aanspreekvorm)','accipe ut taceas = neem (het) aan om te zwijgen'],'De buren willen hem dus betalen om stil te zijn.']
];
vertaal(Z8B,'t8b','v8b','tekst 8B');
[['mb1','Wie spreekt in tekst 8B, en tegen wie?','Een buurman tegen de schoolmeester',['Een leerling tegen de schoolmeester','De schoolmeester tegen zijn leerlingen','Quintilianus tegen een leraar'],'Nos, vicini … rogamus: wij, buren.'],
 ['mb2','Waarover klaagt de buurman?','De schoolmeester schreeuwt en slaat al terwijl het nog nacht is',['De leerlingen spelen te hard op straat','De school is te duur','De hanen kraaien te vroeg'],'Adhuc nox est et nondum ruperunt galli silentium. Klopt met de cultuurtekst: school begon vóór zonsopgang.'],
 ['mb3','Waarmee vergelijkt de buurman het lawaai van de meester?','Met Jupiter die dondert; zelfs het juichen in het amfitheater is minder',['Met hanen die kraaien','Met een storm op zee','Met een leger dat aanvalt'],'sicut Iuppiter tonas … etiam in magno amphitheatro non clamor tam magnopere furit.'],
 ['mb4','Wat vragen de buren?','Alleen slaap, en niet eens de hele nacht',['Dat de school verhuist','Dat de meester zijn leerlingen niet meer slaat','Geld voor het lawaai'],'hoc unum, somnum – non tota nocte –, rogamus.'],
 ['mb5','Wat stelt de buurman aan het eind voor?','Dat de meester geld van de buren aanneemt om te zwijgen',['Dat de meester later begint','Dat de meester naar het amfitheater gaat','Dat de buren hun kinderen ook naar school sturen'],'Eam pecuniam, quam accipis ut clames, … accipe ut taceas.']
].forEach(([id,q,a,f,u])=>mk(id,'t8b','Tekst 8B',q,a,f,u));
[['gb1','r. 3','Invisus es pueris virginibusque <b>huius</b> ludi.','huius ludi','van deze school',['deze school','met deze school','aan deze school'],'huius = gen ev (alle geslachten gelijk): van deze school.'],
 ['gb2','r. 9','Nos, vicini, <b>hoc unum</b>, somnum, rogamus.','hoc unum','dit ene',['met dit ene','van dit ene','hij alleen'],'hoc = acc ev o, congrueert met unum: lijdend voorwerp bij rogamus.'],
 ['gb3','r. 12','<b>Eam pecuniam</b>, quam accipis ut clames …','eam pecuniam','dat geld',['haar geld','van dat geld','met dat geld'],'eam = acc ev v, congrueert met pecuniam: bijvoeglijk, "dat geld".'],
 ['gb4','r. 1','Quid <b>tibi</b> nobiscum est?','tibi','(aan) jou',['jij','van jou','met jou'],'tibi = dat ev van tu.'],
 ['gb5','r. 5','Clamas <b>voce magna</b>.','voce magna','met luide stem',['de luide stem','van de luide stem','aan de luide stem'],'vox, vocis: voc-e = abl ev; magna (groep 1) congrueert ermee.']
].forEach(([id,nr,zin,w,a,f,u])=>mk(id,'t8b','Tekst 8B '+nr,`<i>${zin}</i><br>Hoe vertaal je ${L(w)}?`,a,f,u,`Vertaal ${L(w)} in: <i>${zin}</i>`));

/* ---------- Tekst 8C Quintilianus (met vertaling in het boek) ---------- */
[['qc1','Wie was Quintilianus?','Een Romeinse leraar in de retoriek uit de 1e eeuw n.Chr.',['Een Griekse filosoof','Een schoolmeester uit Falerii','Een keizer die een school stichtte'],'Hij had beroemde leerlingen, zoals de keizerlijke familie, en schreef een dik handboek over het vak van de redenaar.'],
 ['qc2','Welk advies geeft Quintilianus aan leerlingen?','Houd niet minder van je leraren dan van het schoolwerk, en zie hen als ouders van je verstand',['Leer alles uit je hoofd','Spreek je leraar nooit tegen','Kom altijd vóór zonsopgang naar school'],'Ze zijn ouders, niet van hun lichaam (corporum), maar van hun verstand (mentium).'],
 ['qc3','Wat levert dat respect volgens Quintilianus op?','Ze luisteren graag, geloven hun leraar, komen graag naar school en worden niet boos als ze verbeterd worden',['Hogere cijfers en minder huiswerk','Een hoge functie in Rome','Minder slaag van de meester'],'Multum haec pietas conferet studio.'],
 ['qc4','Hoe eindigt het advies?','Leraar moet lesgeven, leerling moet leergierig zijn; geen van beiden is genoeg zonder de ander',['De leraar is belangrijker dan de leerling','De leerling moet de leraar betalen','Wie niet luistert, krijgt straf'],'ut illorum officium est docere, sic horum praebere se dociles: alioqui neutrum sine altero sufficit.']
].forEach(([id,q,a,f,u])=>mk(id,'t8c','Tekst 8C',q,a,f,u));
open('qco1','t8c','Tekst 8C','Vergelijk de schoolmeester uit tekst 8B met het advies van Quintilianus. Zou Quintilianus tevreden zijn over die meester? Leg uit.',['Nee: hij schreeuwt en slaat','Leerlingen gaan dan niet graag naar school / zien hem niet als ouder','Quintilianus wil een band met wederzijds respect'],'Nee. De meester uit 8B schreeuwt en slaat al vóór zonsopgang; zijn leerlingen haten hem (invisus es pueris). Quintilianus wil dat leerlingen van hun leraar houden als van een ouder en graag naar school komen; dat lukt niet met zo\'n meester. Leraar en leerling moeten allebei hun taak doen.');

/* ---------- Grammatica H8: is ea id, hic haec hoc, ego tu nos vos (p. 100–102) ---------- */
[['p1','Wat is de genitivus enkelvoud van is, ea en id?','eius',['eis','eorum','ei'],'Nota bene 1: in alle drie de rijtjes eius. Vertaal: van hem/haar/het, of zijn/haar.'],
 ['p2','Wat is de dativus enkelvoud van hic, haec en hoc?','huic',['huius','hunc','his'],'In alle drie de rijtjes huic. Genitivus = huius.'],
 ['p3','Wat is de accusativus enkelvoud mannelijk van hic?','hunc',['hanc','hoc','huic'],'hunc (m), hanc (v), hoc (o).'],
 ['p4','Wat is de accusativus enkelvoud vrouwelijk van is, ea, id?','eam',['eum','ea','eas'],'eum (m), eam (v), id (o).'],
 ['p5','Wat is de nominativus meervoud onzijdig van hoc?','haec',['hae','hi','hoc'],'Onregelmatig: haec (Nota bene 3). Dus haec = nom ev v óf nom/acc mv o.'],
 ['p6','Welke naamvallen kan ea zijn?','nom ev v, abl ev v, nom of acc mv o',['alleen nom ev v','nom ev v of acc ev v','abl ev v of dat mv o'],'Nota bene 3, p. 100: ea komt vier keer voor in het schema.'],
 ['p7','Welke naamvallen kan ei zijn?','dat ev (m, v, o) of nom mv m',['alleen dat ev m','gen ev of dat ev','nom ev m of nom mv m'],'ei staat vier keer in het schema. In plaats van ei (nom mv) kun je ook ii tegenkomen.'],
 ['p8','Welke naamvallen kan haec zijn?','nom ev v, nom of acc mv o',['alleen nom ev v','nom ev v of acc ev v','nom mv v of acc mv v'],'Nota bene 4, p. 101.'],
 ['p9','Welke naamvallen kan his zijn?','dat of abl mv (alle geslachten)',['alleen dat mv m','gen mv','nom mv m'],'his = dat en abl mv voor m, v en o.'],
 ['p10','Hoe vertaal je is, ea, id bij bijvoeglijk gebruik (er staat een zelfstandig naamwoord bij)?','deze, die, dit, dat',['hij, zij, het','mijn, jouw, zijn','van hem, van haar'],'Ea femina per silvam errat = Deze/Die vrouw zwerft door het bos.'],
 ['p11','Hoe vertaal je is, ea, id bij zelfstandig gebruik (geen zelfstandig naamwoord erbij)?','hij/hem, zij/haar, het',['deze, die, dit','mijn, jouw, zijn','wij, jullie'],'Io per agros errat. Iuppiter eam videt = Jupiter ziet haar.'],
 ['p12','<i>Iuppiter haec verba dixit.</i> Hoe vertaal je haec?','deze',['zij','deze dingen','dit ding'],'haec congrueert met verba (acc mv o): bijvoeglijk, "deze woorden".'],
 ['p13','<i>Iuppiter haec dixit.</i> Hoe vertaal je haec?','deze dingen',['deze','zij','dit woord'],'Geen zelfstandig naamwoord erbij, onzijdig mv: "deze dingen".'],
 ['p14','Wat is de dativus van ego?','mihi',['me','tibi','nobis'],'ego, (–), mihi, me, me.'],
 ['p15','Wat is de accusativus van tu?','te',['tibi','tu','vos'],'tu, (–), tibi, te, te.'],
 ['p16','Wat is de dativus van nos?','nobis',['nos','vobis','nostrum'],'nos, (nostrum), nobis, nos, nobis.'],
 ['p17','Wat is de dativus van vos?','vobis',['vos','nobis','vestrum'],'vos, (vestrum), vobis, vos, vobis. In tekst 8A: vobis liberos principum do.'],
 ['p18','Welke naamval is me?','acc of abl ev',['nom ev','dat ev','gen ev'],'me = acc en abl van ego. Dat = mihi.'],
 ['p19','Wat betekent noster, nostra, nostrum?','ons, onze',['jullie','mijn','van hen'],'Bezittelijk voornaamwoord: noster (m), nostra (v), nostrum (o).'],
 ['p20','Wat betekent suus, sua, suum?','zijn, haar, hun',['jouw','ons','mijn'],'suus verwijst naar het onderwerp: amicum suum = zijn (eigen) vriend.'],
 ['p21','Wat betekent nostrum in <i>multi nostrum</i>?','van ons',['ons','onze','wij'],'Genitivus partitivus (deel van een geheel): velen van ons. Voor bezit gebruikt het Latijn het bezittelijk voornaamwoord (noster).'],
 ['p22','Hoe vertaal je <i>cum servis tuis</i> (tekst 7B)?','met jouw slaven',['met jullie slaven','met hun slaven','met mijn slaven'],'tuus, tua, tuum = jouw. servis tuis = abl mv.'],
 ['p23','Welke twee vragen stel je bij een vorm van is of hic?','In welke naamval staat het, en staat er een zelfstandig naamwoord bij waarmee het congrueert?',['Welk geslacht en welke stam?','Welke groep en welke uitgang?','Is het enkelvoud of meervoud, en wie is het onderwerp?'],'Vertaalstrategie p. 102: zo ja → deze/dit; zo nee → hij, zij, het, deze.']
].forEach(([id,q,a,f,u])=>mk(id,'g8','Voornaamwoorden',q,a,f,u,q.replace(/\?$/,'? (p. 100–102)'),['p6','p7','p8','p23'].includes(id)?{mc:1}:undefined));

Object.assign(SNAP,{t7b:snapZ(Z7B),t8a:snapZ(Z8A),t8b:snapZ(Z8B)});
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
      :`<div class="fb bad"><div class="head">Niet goed</div><div class="mistake">De rode vakjes kloppen niet. Het goede antwoord staat erachter. Schrijf het rijtje nog een keer goed in je schrift.</div><div class="why">${r.u}</div></div>`,S.slots.map(c=>c.w).join(', '))};
}

/* toetsvorm: rijtjes zelf opschrijven in tien vakjes */
Q.forEach(q=>{if(q.type==='rij'){q.tvIn=PL;q.tvA=RIJ[q.w].tv||RIJ[q.w].f;q.tv=q.q.replace('Zet de vormen op de goede plek.','Schrijf alle vormen op.')}});
return {id:'la',naam:'Latijn',afk:'LA',kop:'H7 Slavernij · H8 Onderwijs',SECS,SNAP,BEG:W.map(w=>[w[0],w[1],'7w']).concat(W2.map(w=>[w[0],w[1],'7wb'])).concat([['peculium','geld dat een slaaf spaarde om zich vrij te kopen','7k'],['liberti','vrijgelaten slaven','7k'],['congruentie','een bijvoeglijk naamwoord past zich aan het zelfstandig naamwoord aan in naamval, geslacht en getal','g7'],['paedagogus','slaaf (meestal een Griek) die een kind naar school bracht en zorgde dat het op tijd was','8k'],['magister','leraar van de basisschool (kinderen van 7 tot 12)','8k'],['grammaticus','leraar na de basisschool: literatuur van Grieken en Romeinen (3 à 4 jaar)','8k'],['retor','iemand die in het openbaar spreekt, zoals een advocaat of consul','8k'],['papyrus','schrijfpapier van de papyrusplant','8k'],['perkament','schrijfmateriaal van geweekte en gedroogde dierenhuiden','8k']]),Q,snapHtml,
  woorden:{taal:'Latijn',lijst:W.concat(W2).map(w=>[w[0],w[1]])},
  leer:['bas','wo','7w','7wb','g3','7t','7tb','7k','g7','7tc','8k','8ta','g8','8tb','8tc'],reken:false,volledig:false,snapInVraag:false,toetsvorm:true,custom:{rij:drawRij},
  PN:{bas:'Basis Latijn (D-toets P1)',wo:'Opdracht Woorden 1 (p. 81–82)','7w':'Woorden 7A','7wb':'Woorden 7B (p. 86)','g3':'Rijtjes groep 3 (p. 90)','7t':'Tekst 7A','7tb':'Tekst 7B Seneca (p. 86)','7k':'Cultuur H7: slaven en Spartacus','g7':'Geslacht, bijv. nw groep 3, congruentie (p. 91–92)','7tc':'Tekst 7C Lupus ad canem','8k':'Cultuur H8: onderwijs','8ta':'Tekst 8A Falerii','g8':'is ea id, hic haec hoc, ego tu (p. 100–102)','8tb':'Tekst 8B','8tc':'Tekst 8C Quintilianus','mix':'Door elkaar'}};
})();
