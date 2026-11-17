/* Nederlands. Grammatica woordsoorten §4 Wederkerig en wederkerend voornaamwoord (blz. 212–213): opdracht 1, 2 en 4.
   Grammatica zinsdelen §5 Voorzetselvoorwerp (blz. 215): opdracht 2, 4, 5, 6.
   Spelling §4 Koppelteken en weglatingsstreepje (blz. 254–255): opdracht 1 t/m 4. Plus extra oefening bij de theorie.
   Alleen vragen en uitleg; de manier van oefenen staat in oefen/engine.js.
   Antwoorden en uitleg zijn door Claude gemaakt en kunnen afwijken van die van de docent. */
window.VAKDATA=window.VAKDATA||{};
VAKDATA.ne=(()=>{
const S=s=>`<div class="de">${s}</div>`;                 /* zin uit het boek */
const O=w=>`<u><b>${w}</b></u>`;                          /* het woord waar het om gaat */
const TRUC='Vervangtruc: vervang het woord door <b>hij</b>/<b>hem</b> (pers.vnw), <b>zijn</b> (bez.vnw) of <b>zich</b> (wed.vnw). <b>elkaar</b> is altijd wedig.vnw.';
const VNW={'pers.vnw':'persoonlijk voornaamwoord','bez.vnw':'bezittelijk voornaamwoord','wed.vnw':'wederkerend voornaamwoord','wedig.vnw':'wederkerig voornaamwoord'};
const WAAROM={
 'pers.vnw':'Een persoonlijk voornaamwoord vervang je door hij of hem. Het staat in plaats van een persoon of ding.',
 'bez.vnw':'Een bezittelijk voornaamwoord vervang je door zijn. Het zegt van wie iets is en staat vóór een zelfstandig naamwoord.',
 'wed.vnw':'Een wederkerend voornaamwoord vervang je door zich. Het slaat terug op het onderwerp (zich schamen, zich vergissen).',
 'wedig.vnw':'Het wederkerig voornaamwoord is altijd elkaar (of mekaar, elkander): ze doen iets bij elkaar.'};

const SECS=[
 {id:'th',par:'4',nr:'T',name:'Theorie: de vervangtruc',c:'--c6',sub:'Blz. 212 · wederkerig, wederkerend, persoonlijk of bezittelijk?',
  rules:[['wedig.vnw','elkaar (mekaar, elkander)','Julie en Isra beschuldigen elkaar.'],
   ['wed.vnw','me, je, zich, ons · mezelf, jezelf, zichzelf, onszelf','Hoort bij een wederkerend werkwoord en slaat terug op het onderwerp.'],
   ['Rijtje wed.vnw','ik vergis me · jij vergist je · u vergist zich · hij/zij vergist zich','wij vergissen ons · jullie vergissen je · zij vergissen zich'],
   ['zich is áltijd wed.vnw','me, je en ons kunnen ook pers.vnw zijn; je en ons ook bez.vnw',''],
   ['De vervangtruc','hij/hem → pers.vnw · zijn → bez.vnw · zich → wed.vnw','Kun je je voorstellen dat je zusje… → Kan hij zich voorstellen dat zijn zusje…'],
   ['mezelf, jezelf, zichzelf, onszelf','alleen bij toevallig wederkerende werkwoorden (zich wassen, zich scheren)','Niet bij verplicht wederkerende werkwoorden: *ik bemoei mezelf is fout.']]},
 {id:'o1',par:'4',nr:'1',name:'Onderstreepte woorden benoemen',c:'--c1',sub:'Blz. 213 · opdracht 1 · pers.vnw, bez.vnw, wed.vnw of wedig.vnw',
  rules:[['Gebruik de vervangtruc','hij/hem · zijn · zich',''],['elkaar','altijd wedig.vnw','']]},
 {id:'o2',par:'4',nr:'2',name:'Invullen en benoemen',c:'--c2',sub:'Blz. 213 · opdracht 2 · vul in en zet de woordsoort erachter',
  rules:[['Kijk eerst naar het werkwoord','zich verbazen, zich bemoeien, zich voor het hoofd slaan → wed.vnw',''],
   ['Staat er een zelfstandig naamwoord achter?','dan is het vaak een bez.vnw','… eigen zaken → jullie eigen zaken'],
   ['Samen iets doen','met elkaar overleggen → wedig.vnw','']]},
 {id:'o4',par:'4',nr:'4',name:'Tekst 1: Vrouwe Fortuna',c:'--c3',sub:'Blz. 213 · opdracht 4 · alle woordsoorten',
  rules:[['Lidwoorden','blw = de, het · olw = een',''],
   ['Zelfstandige naamwoorden','czn = concreet (kun je zien of aanraken) · azn = abstract · zn-e = eigennaam',''],
   ['Bijvoeglijke naamwoorden','bn · st.bn = stoffelijk bn (waar het van gemaakt is: houten, gouden)',''],
   ['Werkwoorden','zww = zelfstandig · kww = koppelwerkwoord (zijn, worden, blijken…) · hww = hulpwerkwoord',''],
   ['Losse deeltjes van een werkwoord','draait … door = doordraaien · houdt … vast = vasthouden','Die horen bij het werkwoord.'],
   ['vz en bw','vz staat vóór een woordgroep (met je, dankzij haar vleugels) · bw zegt iets over hoe, waar of wanneer (bovenaan, daarom)','']]},
 {id:'v2',par:'z5',nr:'2',name:'Vul aan met een voorzetselvoorwerp',c:'--c4',sub:'Blz. 215 · opdracht 2 · welk vast voorzetsel hoort erbij?',
  rules:[['Voorzetselvoorwerp (vv)','begint met een vast voorzetsel dat bij het werkwoord hoort','wachten op, denken aan, zoeken naar, zich schamen voor'],
   ['Ook bij een bijvoeglijk naamwoord','geïnteresseerd in, nieuwsgierig naar, bestand tegen','']]},
 {id:'v4',par:'z5',nr:'4',name:'vv of bwb?',c:'--c5',sub:'Blz. 215 · opdracht 4 · voorzetselvoorwerp of bijwoordelijke bepaling',
  rules:[['De test','Kun je het voorzetsel vervangen door een ander voorzetsel en blijft het werkwoord hetzelfde betekenen?','Ja → bwb (in/bij/naast de kantine). Nee → vv (protesteren tegen, uitkijken naar).'],
   ['er + voorzetsel','Een vv kun je vervangen door er + voorzetsel','Ze kijken ernaar uit. Hij zag ervan af.'],
   ['bwb zegt','waar, wanneer, hoe of waarom','op donderdag, met vereende krachten, vanwege…']]},
 {id:'v5',par:'z5',nr:'5',name:'ow, wg, lv, mv, vv en bwb',c:'--c1',sub:'Blz. 215 · opdracht 5 · noteer alle zinsdelen',
  rules:[['Volgorde','1 persoonsvorm · 2 onderwerp · 3 gezegde · 4 lv · 5 mv · 6 vv · 7 de rest is bwb',''],
   ['Losse deeltjes','spoorde … aan = aansporen: het deeltje hoort bij het wg','']]},
 {id:'v6',par:'z5',nr:'6',name:'wg of ng, met naamwoordelijk deel',c:'--c3',sub:'Blz. 215 · opdracht 6 · zet het naamwoordelijk deel tussen haken',
  rules:[['Naamwoordelijk gezegde (ng)','koppelwerkwoord + naamwoordelijk deel','was [erg blij] · zou [bestand] blijken'],
   ['Koppelwerkwoorden','zijn, worden, blijven, lijken, blijken, schijnen, heten, dunken, voorkomen',''],
   ['Staat er nog een werkwoord bij?','dan is zijn/hebben een hulpwerkwoord en is het een wg','had … voorbereid']]},
 {id:'st',par:'s4',nr:'T',name:'Theorie: koppelteken en weglatingsstreepje',c:'--c6',sub:'Blz. 254 · wanneer een liggend streepje?',
  rules:[['Koppelteken in samenkoppelingen','kop-en-schotel, doe-het-zelfzaak','Het laatste deel van een samenstelling komt er direct aan vast.'],
   ['Botsende klinkers','aa, ae, ai, au, ee, ei, eu, ie, ii, oe, oi, oo, ou, ui, uu, i+j, i+ij, e+ui','mee-eter, milieu-inspecteur, penicilline-injectie (maar: adoptieouder, koffieautomaat)'],
   ['Letters, cijfers, tekens, afkortingen','vwo-diploma, A3-formaat, $-teken, sint-bernardshond','Afkorting die je als woord uitspreekt: geen koppelteken (pincode, simkaart)'],
   ['Aardrijkskundige namen','Noord-Italië, Zuid-Amerikaan, ’s-Gravenhage, Nieuw-Vennep',''],
   ['Voorvoegsels','adjunct-, aspirant-, bijna-, ex-, interim-, kandidaat-, leerling-, niet-, non-, oud-','adjunct-directeur, oud-leerling'],
   ['Hoofdletter in het tweede deel','on-Nederlands, pro-Russisch',''],
   ['Gelijkwaardige woorden','trainer-coach, rood-wit-blauw',''],
   ['Engelse leenwoorden','burn-out, play-off',''],
   ['Weglatingsstreepje','als je een deel van een woord weglaat','op- en aanmerkingen · krantenverkopers en -bezorgers'],
   ['Let op','geen weglatingsstreepje als je een heel woord weglaat','hoge en lage cijfers']]},
 {id:'s1',par:'s4',nr:'1',name:'Aan elkaar met koppeltekens',c:'--c1',sub:'Blz. 254 · opdracht 1 · a t/m o',
  rules:[['Eerst: is het één woord?','Dan aan elkaar. Daarna: moet er een koppelteken in?',''],['Botsende klinkers?','kijk in het rijtje: u+a (bureauagent) en e+a (politieagent) staan er niet in','']]},
 {id:'s2',par:'s4',nr:'2',name:'Weglatingsstreepjes',c:'--c2',sub:'Blz. 255 · opdracht 2 · a t/m l · zo kort mogelijk',
  rules:[['Het streepje staat waar het deel wegvalt','hoofd- en bijzaken · landwinning en -bewerking',''],['Alleen bij delen van een woord','losse woorden (lager onderwijs, provinciale politiek) krijgen geen streepje','']]},
 {id:'s3',par:'s4',nr:'3',name:'Kies de juiste spelling',c:'--c3',sub:'Blz. 255 · opdracht 3 · a t/m f',rules:[['Combineer de regels','koppelteken én weglatingsstreepje in één woordgroep','hbo- en mbo-studenten en -docenten']]},
 {id:'s4',par:'s4',nr:'4',name:'Tekst 1: met of zonder koppelteken',c:'--c4',sub:'Blz. 255 · opdracht 4 · een streepje verandert de betekenis',
  rules:[['oud- = vroeger','oud-ijzerhandelaar (vroeger) · oudijzerhandelaar (handelt in oud ijzer)',''],['Een koppelteken mag ook voor de duidelijkheid','carnavals-hit · carnaval-shit','']]}
];

const Q=[];
/* ---------- opdracht 1 ---------- */
const ALLE=Object.keys(VNW);
const fout=(goed,extra={})=>ALLE.filter(x=>x!==goed).map(x=>[x,extra[x]||`Probeer de vervangtruc. ${WAAROM[goed]}`]);
[
 ['a','Hebben hun ouders elkaar tijdens een weekendje Parijs het jawoord gegeven?',[['hun','bez.vnw','hun ouders → zijn ouders'],['elkaar','wedig.vnw','elkaar is altijd wedig.vnw']]],
 ['b','Zou zij zich weleens hebben afgevraagd wat ze je aandoet met haar houding?',[['zij','pers.vnw','Zou hij…'],['zich','wed.vnw','zich is altijd wed.vnw (zich afvragen)'],['ze','pers.vnw','wat hij je aandoet'],['je','pers.vnw','wat ze hem aandoet'],['haar','bez.vnw','met zijn houding']]],
 ['c','Jullie moesten je schamen, want jullie huiswerk is nu al voor de vierde keer niet af.',[['Jullie','pers.vnw','Hij moest…'],['je','wed.vnw','Hij moest zich schamen'],['jullie','bez.vnw','want zijn huiswerk']]],
 ['d','Ik heb me vergist in mijn broer, want hij wil me zijn nieuwe laptop niet lenen.',[['me','wed.vnw','Hij heeft zich vergist',1],['mijn','bez.vnw','in zijn broer'],['hij','pers.vnw','hij blijft hij'],['me','pers.vnw','hij wil hem zijn laptop niet lenen',2],['zijn','bez.vnw','zijn nieuwe laptop']]],
 ['e','Zou je vriendin weten dat wij al een hele tijd verliefd zijn op elkaar?',[['je','bez.vnw','zijn vriendin'],['wij','pers.vnw','dat hij…'],['elkaar','wedig.vnw','elkaar is altijd wedig.vnw']]],
 ['f','We hebben onszelf kapot gewerkt om ons huis in één dag schoon te maken.',[['We','pers.vnw','Hij heeft…'],['onszelf','wed.vnw','Hij heeft zichzelf kapot gewerkt'],['ons','bez.vnw','om zijn huis']]],
].forEach(([l,zin,ws])=>{const tel={};ws.forEach(([w,a,truc,k],i)=>{
  let n=0;const z=zin.replace(new RegExp(`(^|[^A-Za-zë])(${w})(?=[^A-Za-zë]|$)`,'g'),(m,p1,p2)=>{n++;return p1+((!k||n===k)?O(p2):p2)});
  Q.push({id:`n1${l}${i+1}`,o:'o1',nr:`Opdracht 1${l} · ${w}`,q:`Welke woordsoort is het onderstreepte woord?${S(z)}`,a,f:fout(a),
    tv:`Noteer de woordsoort van het onderstreepte woord: pers.vnw, bez.vnw, wed.vnw of wedig.vnw.${S(z)}`,
    u:`<b>${w}</b> = <b>${a}</b> (${VNW[a]}). Truc: ${truc}.<div class="why">${WAAROM[a]}</div>`,
    v:{q:`Vervang het onderstreepte woord door hij/hem, zijn of zich. Welke woordsoort is het?${S(z)}`}})})});

/* ---------- opdracht 2: hele zin invullen met woordsoorten ---------- */
[
 ['a','Ellen, … verbaas … erover dat … de verkering met Aron hebt uitgemaakt.','Ellen, ik (pers.vnw) verbaas me (wed.vnw) erover dat jij (pers.vnw) de verkering met Aron hebt uitgemaakt.',
  [['Ellen, ik (pers.vnw) verbaas mezelf (wed.vnw) erover dat jij (pers.vnw) de verkering met Aron hebt uitgemaakt.','zich verbazen is verplicht wederkerend: dan geen mezelf, maar me.'],
   ['Ellen, ik (pers.vnw) verbaas me (pers.vnw) erover dat jij (pers.vnw) de verkering met Aron hebt uitgemaakt.','Hij verbaast zich: me is hier wed.vnw.'],
   ['Ellen, ik (pers.vnw) verbaas me (wed.vnw) erover dat jouw (bez.vnw) de verkering met Aron hebt uitgemaakt.','Daar hoort een onderwerp: jij of je (pers.vnw).']],
  ['Ellen, ik verbaas me erover dat je de verkering met Aron hebt uitgemaakt.'],'Je mag ook je in plaats van jij invullen (ook pers.vnw).'],
 ['b','‘… moeten … met … eigen zaken bemoeien’, zei Meryem tegen … broers.','‘Jullie (pers.vnw) moeten je (wed.vnw) met jullie (bez.vnw) eigen zaken bemoeien’, zei Meryem tegen haar (bez.vnw) broers.',
  [['‘Jullie (pers.vnw) moeten jullie (wed.vnw) met jullie (bez.vnw) eigen zaken bemoeien’, zei Meryem tegen haar (bez.vnw) broers.','Het wed.vnw bij jullie is je: jullie vergissen je, jullie bemoeien je.'],
   ['‘Jullie (pers.vnw) moeten je (wed.vnw) met jullie (pers.vnw) eigen zaken bemoeien’, zei Meryem tegen haar (bez.vnw) broers.','met zijn eigen zaken → jullie is hier bez.vnw.'],
   ['‘Jullie (pers.vnw) moeten jezelf (wed.vnw) met jullie (bez.vnw) eigen zaken bemoeien’, zei Meryem tegen haar (bez.vnw) broers.','zich bemoeien is verplicht wederkerend: geen jezelf.']],
  [],'Ze praat tegen haar broers, dus jullie. Het wed.vnw bij jullie is je.'],
 ['c','Zullen … even straks met … overleggen over … vakantiebestemming?','Zullen we (pers.vnw) even straks met elkaar (wedig.vnw) overleggen over onze (bez.vnw) vakantiebestemming?',
  [['Zullen we (pers.vnw) even straks met ons (wed.vnw) overleggen over onze (bez.vnw) vakantiebestemming?','Samen met de ander overleggen: met elkaar (wedig.vnw).'],
   ['Zullen we (pers.vnw) even straks met elkaar (wed.vnw) overleggen over onze (bez.vnw) vakantiebestemming?','elkaar is altijd wedig.vnw, niet wed.vnw.'],
   ['Zullen we (pers.vnw) even straks met elkaar (wedig.vnw) overleggen over ons (pers.vnw) vakantiebestemming?','Vóór vakantiebestemming hoort een bez.vnw: onze.']],
  ['Zullen jullie even straks met elkaar overleggen over jullie vakantiebestemming?','Zullen wij even straks met elkaar overleggen over onze vakantiebestemming?'],'Met jullie … jullie mag ook: Zullen jullie (pers.vnw) … met elkaar (wedig.vnw) … jullie (bez.vnw) vakantiebestemming.'],
 ['d','Ik kon … wel voor het hoofd slaan, toen … merkte dat men … had opgelicht.','Ik kon me (wed.vnw) wel voor het hoofd slaan, toen ik (pers.vnw) merkte dat men mij (pers.vnw) had opgelicht.',
  [['Ik kon mezelf (wed.vnw) wel voor het hoofd slaan, toen ik (pers.vnw) merkte dat men me (wed.vnw) had opgelicht.','men heeft mij opgelicht: dat slaat niet terug op het onderwerp (men). Dus pers.vnw.'],
   ['Ik kon me (pers.vnw) wel voor het hoofd slaan, toen ik (pers.vnw) merkte dat men mij (pers.vnw) had opgelicht.','Hij kon zich voor het hoofd slaan: me is hier wed.vnw.'],
   ['Ik kon me (wed.vnw) wel voor het hoofd slaan, toen ik (pers.vnw) merkte dat men mijn (bez.vnw) had opgelicht.','Er staat geen zelfstandig naamwoord achter: men had hem opgelicht → mij of me (pers.vnw).']],
  ['Ik kon me wel voor het hoofd slaan, toen ik merkte dat men me had opgelicht.','Ik kon mezelf wel voor het hoofd slaan, toen ik merkte dat men mij had opgelicht.'],'Bij de laatste puntjes mag ook me (pers.vnw). Mezelf voor het hoofd slaan kan ook (je slaat echt jezelf).'],
 ['e','‘Kunnen … de tegels deze week al aan … leveren?’ vroegen … aan de leveranciers.','‘Kunnen jullie (pers.vnw) de tegels deze week al aan ons (pers.vnw) leveren?’ vroegen we (pers.vnw) aan de leveranciers.',
  [['‘Kunnen jullie (pers.vnw) de tegels deze week al aan ons (wed.vnw) leveren?’ vroegen we (pers.vnw) aan de leveranciers.','aan hem leveren: pers.vnw. Het slaat niet terug op het onderwerp jullie.'],
   ['‘Kunnen jullie (pers.vnw) de tegels deze week al aan onze (bez.vnw) leveren?’ vroegen we (pers.vnw) aan de leveranciers.','Er staat geen zelfstandig naamwoord achter: aan ons (pers.vnw).'],
   ['‘Kunnen jullie (bez.vnw) de tegels deze week al aan ons (pers.vnw) leveren?’ vroegen we (pers.vnw) aan de leveranciers.','Kan hij de tegels leveren: jullie is hier pers.vnw (onderwerp).']],
  ['‘Kunt u de tegels deze week al aan ons leveren?’ vroegen wij aan de leveranciers.'],'u (pers.vnw) mag ook, en wij of zij in plaats van we.'],
 ['f','Als … voor al … toetsen een voldoende haal, geeft Joeri … een cadeautje.','Als ik (pers.vnw) voor al mijn (bez.vnw) toetsen een voldoende haal, geeft Joeri me (pers.vnw) een cadeautje.',
  [['Als ik (pers.vnw) voor al mijn (bez.vnw) toetsen een voldoende haal, geeft Joeri me (wed.vnw) een cadeautje.','Joeri geeft hem een cadeautje: me slaat niet terug op Joeri. Dus pers.vnw.'],
   ['Als ik (pers.vnw) voor al me (pers.vnw) toetsen een voldoende haal, geeft Joeri me (pers.vnw) een cadeautje.','Vóór toetsen hoort een bez.vnw: mijn toetsen.'],
   ['Als ik (pers.vnw) voor al mijn (bez.vnw) toetsen een voldoende haal, geeft Joeri mezelf (wed.vnw) een cadeautje.','Joeri geeft iemand anders iets: geen mezelf.']],
  ['Als ik voor al mijn toetsen een voldoende haal, geeft Joeri mij een cadeautje.'],'Let op: er staat haal (zonder t). Dan past alleen ik: ik haal. Me of mij (pers.vnw) mag allebei.'],
].forEach(([l,gat,a,f,alt,extra])=>Q.push({id:'n2'+l,o:'o2',nr:'Opdracht 2'+l,q:`Welke ingevulde zin is helemaal goed, met de goede woordsoorten?${S(gat)}`,a,f,
  tv:`Vul de zin in en zet achter elk ingevuld woord de woordsoort (pers.vnw, bez.vnw, wed.vnw of wedig.vnw).${S(gat)}`,tvAlt:alt,
  u:`${S(a)}${extra}<div class="why">${TRUC}</div>`,v:{q:`Vul in met een voornaamwoord en benoem het. Welke zin is helemaal goed?${S(gat)}`}}));

/* ---------- opdracht 4: tekst 1 Vrouwe Fortuna ---------- */
const UITL={blw:'bepaald lidwoord: de of het',olw:'onbepaald lidwoord: een',czn:'concreet zelfstandig naamwoord: iets wat je kunt zien of aanraken',azn:'abstract zelfstandig naamwoord: iets wat je niet kunt aanraken',
 'zn-e':'eigennaam',bn:'bijvoeglijk naamwoord: zegt iets over een zelfstandig naamwoord','st.bn':'stoffelijk bijvoeglijk naamwoord: waar iets van gemaakt is',
 zww:'zelfstandig werkwoord: het belangrijkste werkwoord, zegt wat er gebeurt',kww:'koppelwerkwoord: zijn, worden, blijven, lijken, blijken, schijnen, heten, dunken, voorkomen',
 hww:'hulpwerkwoord: helpt een ander werkwoord (er staat nog een werkwoord bij)','pers.vnw':'persoonlijk voornaamwoord: vervang door hij of hem','bez.vnw':'bezittelijk voornaamwoord: vervang door zijn',
 'wed.vnw':'wederkerend voornaamwoord: vervang door zich','wedig.vnw':'wederkerig voornaamwoord: elkaar',vz:'voorzetsel: staat vóór een woordgroep (met, door, op, dankzij)',bw:'bijwoord: zegt iets over hoe, waar of wanneer'};
const BUREN={blw:['olw','pers.vnw','bez.vnw'],olw:['blw','bn','bw'],czn:['azn','zn-e','bn'],azn:['czn','zn-e','zww'],'zn-e':['czn','azn','blw'],bn:['st.bn','bw','czn'],'st.bn':['bn','czn','bw'],
 zww:['kww','hww','bw'],kww:['hww','zww','bw'],hww:['kww','zww','bw'],'pers.vnw':['bez.vnw','wed.vnw','blw'],'bez.vnw':['pers.vnw','wed.vnw','blw'],'wed.vnw':['pers.vnw','wedig.vnw','bez.vnw'],
 'wedig.vnw':['wed.vnw','pers.vnw','bw'],vz:['bw','blw','zww'],bw:['vz','bn','zww']};
const T1=[
 [1,'Soms gaat het goed <u>met</u> je, soms zit het tegen.','met','vz','met je: vóór een woordgroep.'],
 [2,'Voor- en tegenspoed <u>worden</u> bepaald door Vrouwe Fortuna, de Romeinse godin van het lot.','worden','hww','worden bepaald: er staat nog een werkwoord bij (bepaald), dus hier is worden een hulpwerkwoord (van de lijdende vorm), geen koppelwerkwoord.'],
 [2,'Voor- en tegenspoed worden <u>bepaald</u> door Vrouwe Fortuna, de Romeinse godin van het lot.','bepaald','zww','bepaald (van bepalen) zegt wat er gebeurt.'],
 [2,'Voor- en tegenspoed worden bepaald door Vrouwe Fortuna, de <u>Romeinse</u> godin van het lot.','Romeinse','bn','Romeinse zegt iets over godin. Het is niet waar ze van gemaakt is, dus geen st.bn.'],
 [3,'Zij draait aan <u>het</u> rad van fortuin.','het','blw','het rad: bepaald lidwoord.'],
 [4,'<u>Het</u> lijkt op een houten scheepsroer.','Het','pers.vnw','Het staat in plaats van het rad: pers.vnw. Er staat geen zelfstandig naamwoord achter, dus geen lidwoord.'],
 [4,'Het lijkt op een <u>houten</u> scheepsroer.','houten','st.bn','Het roer is van hout gemaakt: stoffelijk bijvoeglijk naamwoord.'],
 [4,'Het lijkt op een houten <u>scheepsroer</u>.','scheepsroer','czn','Een roer kun je zien en aanraken.'],
 [5,'Daarmee geeft <u>ze</u> richting aan het menselijk bestaan.','ze','pers.vnw','ze = Fortuna. Daarmee geeft hij richting…'],
 [5,'Daarmee geeft ze <u>richting</u> aan het menselijk bestaan.','richting','azn','Richting (in je leven) kun je niet aanraken.'],
 [5,'Daarmee geeft ze richting aan het <u>menselijk</u> bestaan.','menselijk','bn','menselijk zegt iets over bestaan.'],
 [6,'Wie <u>zich</u> bovenaan het rad bevindt, heeft geluk.','zich','wed.vnw','zich is altijd wed.vnw (zich bevinden).'],
 [6,'Wie zich <u>bovenaan</u> het rad bevindt, heeft geluk.','bovenaan','bw','bovenaan zegt waar: bijwoord, net als onderaan in zin 8. (Benoemt je docent dit als vz, volg dan de docent.)'],
 [7,'Maar het rad draait <u>door</u>.','door','zww','draait … door hoort bij het werkwoord doordraaien. Het losse deel hoort bij het zww. (Benoemt je docent dit anders, volg dan de docent.)'],
 [8,'Dus kun <u>jij</u> ook onderaan belanden.','jij','pers.vnw','Dus kan hij ook onderaan belanden.'],
 [8,'Dus kun jij ook <u>onderaan</u> belanden.','onderaan','bw','onderaan zegt waar.'],
 [9,'Fortuna staat op <u>een</u> bol.','een','olw','een bol: onbepaald lidwoord.'],
 [10,'Het geluk <u>is</u> immers een wankel evenwicht.','is','kww','is koppelt het geluk aan een wankel evenwicht. Er staat geen ander werkwoord bij.'],
 [10,'Het geluk is immers een <u>wankel</u> evenwicht.','wankel','bn','wankel zegt iets over evenwicht.'],
 [11,'<u>Dankzij</u> haar vleugels gaat het haar ‘voor de wind’.','Dankzij','vz','Dankzij haar vleugels: vóór een woordgroep.'],
 [11,'Dankzij haar vleugels gaat het <u>haar</u> ‘voor de wind’.','haar','pers.vnw','het gaat hem voor de wind: pers.vnw. Er staat geen zelfstandig naamwoord achter.'],
 [12,'<u>Daarom</u> waaien op afbeeldingen haar haren naar voren.','Daarom','bw','daarom zegt waarom: bijwoord.'],
 [12,'Daarom waaien op afbeeldingen <u>haar</u> haren naar voren.','haar','bez.vnw','zijn haren: bez.vnw.'],
 [13,'<u>We</u> moeten het geluk namelijk pakken als het naar ons toe komt.','We','pers.vnw','Hij moet…'],
 [13,'We <u>moeten</u> het geluk namelijk pakken als het naar ons toe komt.','moeten','hww','Er staat nog een werkwoord bij: pakken.'],
 [13,'We moeten het geluk namelijk <u>pakken</u> als het naar ons toe komt.','pakken','zww','pakken zegt wat er gebeurt.'],
 [13,'We moeten het geluk namelijk pakken als het naar <u>ons</u> toe komt.','ons','pers.vnw','naar hem toe komt: pers.vnw.'],
 [14,'Laten we <u>de</u> kans voorbijgaan, dan kunnen we het geluk niet meer grijpen.','de','blw','de kans: bepaald lidwoord.'],
 [14,'Laten we de <u>kans</u> voorbijgaan, dan kunnen we het geluk niet meer grijpen.','kans','azn','Een kans kun je niet aanraken.'],
 [15,'Dat moeten <u>jullie</u> je goed realiseren.','jullie','pers.vnw','Dat moet hij zich goed realiseren.'],
 [15,'Dat moeten jullie <u>je</u> goed realiseren.','je','wed.vnw','Dat moet hij zich realiseren: wed.vnw.'],
 [16,'Vaak <u>houdt</u> Fortuna een ‘Hoorn des Overvloeds’ vast.','houdt','zww','houdt … vast = vasthouden: zelfstandig werkwoord.'],
 [16,'Vaak houdt <u>Fortuna</u> een ‘Hoorn des Overvloeds’ vast.','Fortuna','zn-e','Fortuna is een naam: eigennaam.'],
 [16,'Vaak houdt Fortuna een ‘Hoorn des Overvloeds’ <u>vast</u>.','vast','zww','vast hoort bij vasthouden: deel van het zww. (Benoemt je docent dit anders, volg dan de docent.)'],
 [17,'Daar rolt een grote <u>hoeveelheid</u> vruchten uit.','hoeveelheid','azn','Een hoeveelheid kun je niet aanraken (de vruchten wel).'],
 [17,'Daar rolt een grote hoeveelheid <u>vruchten</u> uit.','vruchten','czn','Vruchten kun je zien en aanraken.']
];
T1.forEach(([zn,zin,w,a,uit],i)=>Q.push({id:'n4-'+(i+1),o:'o4',nr:`Opdracht 4 · zin ${zn}`,q:`Welke woordsoort is <b>${w}</b>?${S(zin)}`,a,
  f:(w==='bovenaan'?['bn','zww','olw']:BUREN[a]).map(x=>[x,`${x} = ${UITL[x]}. ${uit}`]),tv:`Noteer de woordsoort van <b>${w}</b> (blw, olw, czn, azn, zn-e, bn, st.bn, zww, kww, hww, pers.vnw, bez.vnw, wed.vnw, wedig.vnw, vz of bw).${S(zin)}`,
  u:`<b>${w}</b> = <b>${a}</b> (${UITL[a]}).<div class="why">${uit}</div>`,v:{q:`Tekst 1, zin ${zn}. Benoem het onderstreepte woord.${S(zin)}`}}));

/* ---------- extra bij de theorie ---------- */
[
 ['tv1',`Kun ${O('je')} je voorstellen dat je zusje de hoofdrol krijgt?`,'pers.vnw','Kan hij zich voorstellen: het eerste je wordt hij.'],
 ['tv2',`Kun je ${O('je')} voorstellen dat je zusje de hoofdrol krijgt?`,'wed.vnw','Kan hij zich voorstellen: het tweede je wordt zich.'],
 ['tv3',`Kun je je voorstellen dat ${O('je')} zusje de hoofdrol krijgt?`,'bez.vnw','dat zijn zusje: het derde je wordt zijn.'],
 ['tv4',`Julie en Isra beschuldigen ${O('elkaar')} ervan.`,'wedig.vnw','elkaar is het enige wederkerig voornaamwoord.'],
 ['tv5',`Meneer Van het Hof scheert ${O('zichzelf')} het liefst met een scheermesje.`,'wed.vnw','zich scheren is toevallig wederkerend: zichzelf mag.'],
 ['tv6',`Wij vergissen ${O('ons')} vaak.`,'wed.vnw','Hij vergist zich: wed.vnw.'],
 ['tv7',`Mama brengt ${O('ons')} naar school.`,'pers.vnw','Mama brengt hem naar school: pers.vnw.'],
 ['tv8',`${O('Ons')} huis is groot.`,'bez.vnw','Zijn huis is groot: bez.vnw.'],
].forEach(([id,z,a,u])=>Q.push({id,o:'th',nr:'Extra · vervangtruc',q:`Welke woordsoort is het onderstreepte woord?${S(z)}`,a,f:fout(a),
  tv:`Benoem het onderstreepte woord: pers.vnw, bez.vnw, wed.vnw of wedig.vnw.${S(z)}`,u:`<b>${a}</b>. ${u}<div class="why">${TRUC}</div>`,
  v:{q:`Gebruik de vervangtruc (hij/hem, zijn, zich). Wat is het onderstreepte woord?${S(z)}`}}));
Q.push({id:'tv9',o:'th',nr:'Extra · mezelf',q:'Welke zin is goed?',a:'Ik bemoei me nooit met de ruzies van anderen.',
  tv:`Vul het goede woord in.${S('Ik bemoei ___ nooit met de ruzies van anderen.')}`,tvAlt:['me'],
  f:[['Ik bemoei mezelf nooit met de ruzies van anderen.','zich bemoeien is verplicht wederkerend: dan geen mezelf, alleen me.'],['Ik bemoei mijn nooit met de ruzies van anderen.','mijn is een bez.vnw. Hier hoort een wed.vnw: me.']],
  u:'Bij verplicht wederkerende werkwoorden (zich bemoeien, zich vergissen, zich schamen) gebruik je geen mezelf, jezelf, zichzelf of onszelf.',
  v:{q:'Bij welke zin is het wederkerend voornaamwoord goed gebruikt?'}});
Q.push({id:'tv10',o:'th',nr:'Extra · mezelf',q:'Bij welk werkwoord mag je <b>zichzelf</b> gebruiken?',a:'zich wassen',mc:1,
  f:[['zich vergissen','zich vergissen is verplicht wederkerend: alleen zich.'],['zich schamen','zich schamen is verplicht wederkerend: alleen zich.'],['zich verslikken','zich verslikken is verplicht wederkerend: alleen zich.']],
  u:'zich wassen is toevallig wederkerend: je kunt ook iemand anders wassen. Dan mag zichzelf.',v:{q:'Welk werkwoord is toevallig wederkerend (je kunt het ook bij een ander doen)?'}});


/* =====================================================================
   Grammatica zinsdelen §5 Voorzetselvoorwerp (blz. 215): opdracht 2, 4, 5, 6
   ===================================================================== */
const ZD={ow:'onderwerp',wg:'werkwoordelijk gezegde',ng:'naamwoordelijk gezegde',lv:'lijdend voorwerp',mv:'meewerkend voorwerp',vv:'voorzetselvoorwerp',bwb:'bijwoordelijke bepaling'};
const ZDW={ow:'Het onderwerp vind je met: wie of wat + gezegde? Het past bij de persoonsvorm (enkelvoud of meervoud).',
 wg:'Het werkwoordelijk gezegde zijn alle werkwoorden in de zin (persoonsvorm + andere werkwoorden + losse deeltjes zoals aan in aansporen).',
 ng:'Een naamwoordelijk gezegde heeft een koppelwerkwoord (zijn, worden, blijven, lijken, blijken, schijnen…) plus een naamwoordelijk deel dat iets over het onderwerp zegt.',
 lv:'Het lijdend voorwerp vind je met: wie of wat + gezegde + onderwerp? (Wat spoorde de coach aan? Zijn pupil.)',
 mv:'Het meewerkend voorwerp krijgt iets of ontvangt iets; je kunt er aan of voor vóór zetten.',
 vv:'Het voorzetselvoorwerp begint met een vast voorzetsel dat bij het werkwoord (of naamwoordelijk deel) hoort: wachten op, denken aan, zich verdiepen in. Een ander voorzetsel kan niet.',
 bwb:'Een bijwoordelijke bepaling zegt iets over waar, wanneer, hoe of waarom. Het voorzetsel kun je vaak vervangen door een ander voorzetsel.'};
const VVTEST='Test: kun je het voorzetsel vervangen door een ander voorzetsel en blijft het werkwoord hetzelfde betekenen? Ja → bwb. Nee, het voorzetsel hoort vast bij het werkwoord → vv. Een vv kun je ook vervangen door er + voorzetsel (erop, eraan, ernaar).';
const ZBUUR={ow:['lv','mv','bwb'],wg:['ng','vv','bwb'],ng:['wg','lv','bwb'],lv:['ow','mv','vv'],mv:['lv','vv','bwb'],vv:['bwb','lv','mv'],bwb:['vv','lv','ow']};
const zdQ=(id,o,nr,zin,deel,a,uit,extra={})=>Q.push(Object.assign({id,o,nr,q:`Welk zinsdeel is het onderstreepte deel?${S(zin.replace(deel,`<u><b>${deel}</b></u>`))}`,a,
  f:(extra.buren||ZBUUR[a]).map(x=>[x,`${x} = ${ZD[x]}. ${uit}`]),
  tv:`Benoem het onderstreepte zinsdeel (ow, wg, ng, lv, mv, vv of bwb).${S(zin.replace(deel,`<u><b>${deel}</b></u>`))}`,
  u:`<b>${deel}</b> = <b>${a}</b> (${ZD[a]}). ${uit}<div class="why">${ZDW[a]}</div>`,
  v:{q:`${nr}. Benoem het onderstreepte zinsdeel.${S(zin.replace(deel,`<u><b>${deel}</b></u>`))}`}},extra.q||{}));

/* opdracht 2: vul aan met een voorzetselvoorwerp (welk vast voorzetsel?) */
[
 ['a','In de bouwput zoeken mensen van de Explosieven Opruimingsdienst …','naar',['op','voor','om'],'zoeken naar: je zoekt naar iets.','… naar bommen of explosieven.'],
 ['b','Jullie hoeven je resultaten niet altijd te vergelijken …','met',['aan','naar','op'],'vergelijken met: je vergelijkt iets met iets anders.','… met die van anderen.'],
 ['c','Momenteel zijn steeds meer jongeren geïnteresseerd …','in',['voor','op','aan'],'geïnteresseerd in: je bent geïnteresseerd in iets.','… in politiek / in gamen.'],
 ['d','Veel supporters bleken uitermate nieuwsgierig …','naar',['over','op','om'],'nieuwsgierig naar: je bent nieuwsgierig naar iets. (Niet: nieuwsgierig over.)','… naar de nieuwe spelers.'],
 ['e','Waarom schaam je je zo …?','voor',['aan','op','met'],'zich schamen voor (of over): je schaamt je voor iemand of iets.','… voor mij? / … over je cijfer?'],
 ['f','De zorgverleners van Artsen zonder Grenzen ontfermden zich …','over',['voor','aan','op'],'zich ontfermen over: je ontfermt je over iemand (je zorgt voor iemand).','… over de gewonden.']
].forEach(([l,zin,a,fs,uit,vb])=>Q.push({id:'v2'+l,o:'v2',nr:'Opdracht 2'+l,q:`Welk vast voorzetsel hoort bij het voorzetselvoorwerp?${S(zin)}`,a,
  f:fs.map(x=>[x,`Dat voorzetsel hoort hier niet vast bij. ${uit}`]),tvAlt:l==='e'?['over']:[],
  tv:`Vul de zin aan met een voorzetselvoorwerp (welk voorzetsel hoort erbij?).${S(zin)}`,
  u:`<b>${a}</b>. ${uit}<br>Voorbeeld: ${vb}<div class="why">Het voorzetsel van een vv hoort vast bij het werkwoord of bij het bijvoeglijk naamwoord. Een ander voorzetsel kan niet.</div>`,
  v:{q:`Vul aan met een vv. Welk voorzetsel past?${S(zin)}`}}));

/* opdracht 4: vv of bwb */
[
 ['a1','Op het Binnenhof protesteerden studenten tegen de afschaffing van de studiebeurs.','Op het Binnenhof','bwb','Zegt waar. Je kunt ook zeggen: bij het Binnenhof.'],
 ['a2','Op het Binnenhof protesteerden studenten tegen de afschaffing van de studiebeurs.','tegen de afschaffing van de studiebeurs','vv','protesteren tegen: vast voorzetsel. Er protesteren tegen.'],
 ['b1','Zag de rechter van strafvervolging af vanwege verzachtende omstandigheden?','van strafvervolging','vv','afzien van: vast voorzetsel. Zag de rechter ervan af?'],
 ['b2','Zag de rechter van strafvervolging af vanwege verzachtende omstandigheden?','vanwege verzachtende omstandigheden','bwb','Zegt waarom (reden).'],
 ['c1','Tot diep in de nacht dansten de jongelui in de kantine van de camping.','Tot diep in de nacht','bwb','Zegt wanneer (tijd).'],
 ['c2','Tot diep in de nacht dansten de jongelui in de kantine van de camping.','in de kantine van de camping','bwb','Zegt waar. Je kunt ook dansen bij, naast of achter de kantine.'],
 ['d1','De meeste werknemers schijnen op donderdag al uit te kijken naar het weekend.','op donderdag','bwb','Zegt wanneer (tijd).'],
 ['d2','De meeste werknemers schijnen op donderdag al uit te kijken naar het weekend.','naar het weekend','vv','uitkijken naar: vast voorzetsel. Ze kijken ernaar uit.'],
 ['e1','Met vereende krachten haalden de reddingswerkers het kleine meisje onder het puin vandaan.','Met vereende krachten','bwb','Zegt hoe (op welke manier).'],
 ['e2','Met vereende krachten haalden de reddingswerkers het kleine meisje onder het puin vandaan.','onder het puin vandaan','bwb','Zegt waar vandaan (plaats). Het kan ook: achter het puin vandaan, uit het puin.'],
 ['f1','Binnenkort gaan wij ons in klimaatverandering verdiepen bij het vak aardrijkskunde.','in klimaatverandering','vv','zich verdiepen in: vast voorzetsel. We gaan ons erin verdiepen.'],
 ['f2','Binnenkort gaan wij ons in klimaatverandering verdiepen bij het vak aardrijkskunde.','bij het vak aardrijkskunde','bwb','Zegt waar (bij welk vak).']
].forEach(([l,zin,deel,a,uit])=>{const z=S(zin.replace(deel,`<u><b>${deel}</b></u>`)),b=a==='vv'?'bwb':'vv';
  Q.push({id:'v4'+l,o:'v4',nr:'Opdracht 4'+l[0],q:`Is het onderstreepte zinsdeel een vv of een bwb?${z}`,a,f:[[b,`${uit}`]],
   tv:`Benoem het onderstreepte zinsdeel: vv of bwb.${z}`,u:`<b>${a}</b> (${ZD[a]}). ${uit}<div class="why">${VVTEST}</div>`,
   v:{q:`Voorzetselvoorwerp of bijwoordelijke bepaling?${z}`}})});

/* opdracht 5: ow, wg, lv, mv, vv, bwb */
const Z5a='Op weg naar het toernooi spoorde de coach zijn pupil aan tot meer trainingsarbeid.',
 Z5c='Zou de politie zich nog steeds over het toenemend aantal inbraken verbazen?',
 Z5d='Aan onze reis naar Lapland hebben we vorig jaar veel plezier beleefd.';
zdQ('v5a1','v5','Opdracht 5a',Z5a,'Op weg naar het toernooi','bwb','Zegt waar of wanneer.');
zdQ('v5a2','v5','Opdracht 5a',Z5a,'de coach','ow','Wie spoorde aan? De coach.');
zdQ('v5a3','v5','Opdracht 5a',Z5a,'zijn pupil','lv','Wie spoorde de coach aan? Zijn pupil.');
zdQ('v5a4','v5','Opdracht 5a',Z5a,'tot meer trainingsarbeid','vv','aansporen tot: vast voorzetsel. Hij spoorde hem ertoe aan.');
Q.push({id:'v5a5',o:'v5',nr:'Opdracht 5a',q:`Wat is het werkwoordelijk gezegde?${S(Z5a)}`,a:'spoorde … aan',
  f:[['spoorde','aan hoort er ook bij: aansporen. Een los deeltje van het werkwoord hoort bij het wg.'],['spoorde … aan tot','tot hoort bij het vv: tot meer trainingsarbeid.'],['toernooi spoorde','toernooi is geen werkwoord.']],
  tv:`Noteer het werkwoordelijk gezegde.${S(Z5a)}`,tvAlt:['spoorde aan'],u:`<b>spoorde … aan</b> (aansporen). Het losse deeltje aan hoort bij het werkwoord.<div class="why">${ZDW.wg}</div>`,v:{q:`Welke woorden vormen samen het wg?${S(Z5a)}`}});
zdQ('v5c1','v5','Opdracht 5c',Z5c,'de politie','ow','Wie zou zich verbazen? De politie.');
zdQ('v5c2','v5','Opdracht 5c',Z5c,'nog steeds','bwb','Zegt iets over tijd: nog steeds.');
zdQ('v5c3','v5','Opdracht 5c',Z5c,'over het toenemend aantal inbraken','vv','zich verbazen over: vast voorzetsel. Zou de politie zich erover verbazen?');
Q.push({id:'v5c4',o:'v5',nr:'Opdracht 5c',q:`Wat is het werkwoordelijk gezegde?${S(Z5c)}`,a:'Zou … verbazen',
  f:[['Zou','verbazen hoort er ook bij: alle werkwoorden horen bij het wg.'],['verbazen','Zou (de persoonsvorm) hoort er ook bij.'],['Zou … steeds verbazen','steeds is een bijwoord, geen werkwoord.']],
  tv:`Noteer het werkwoordelijk gezegde.${S(Z5c)}`,tvAlt:['zou verbazen','zou zich verbazen','zou … zich verbazen'],u:`<b>Zou … verbazen</b>. Zich hoort bij het wederkerend werkwoord zich verbazen; schrijft je docent zich bij het wg, volg dan de docent.<div class="why">${ZDW.wg}</div>`,v:{q:`Welke woorden vormen samen het wg?${S(Z5c)}`}});
zdQ('v5d1','v5','Opdracht 5d',Z5d,'Aan onze reis naar Lapland','vv','plezier beleven aan: vast voorzetsel. We hebben er veel plezier aan beleefd.');
zdQ('v5d2','v5','Opdracht 5d',Z5d,'we','ow','Wie hebben plezier beleefd? We.');
zdQ('v5d3','v5','Opdracht 5d',Z5d,'vorig jaar','bwb','Zegt wanneer.');
zdQ('v5d4','v5','Opdracht 5d',Z5d,'veel plezier','lv','Wat hebben we beleefd? Veel plezier.');
Q.push({id:'v5d5',o:'v5',nr:'Opdracht 5d',q:`Wat is het werkwoordelijk gezegde?${S(Z5d)}`,a:'hebben … beleefd',
  f:[['hebben','beleefd hoort er ook bij.'],['hebben … plezier beleefd','plezier is een zelfstandig naamwoord: dat hoort bij het lv.'],['beleefd','hebben (de persoonsvorm) hoort er ook bij.']],
  tv:`Noteer het werkwoordelijk gezegde.${S(Z5d)}`,tvAlt:['hebben beleefd'],u:`<b>hebben … beleefd</b>.<div class="why">${ZDW.wg}</div>`,v:{q:`Welke woorden vormen samen het wg?${S(Z5d)}`}});

/* opdracht 6: ow, wg of ng, lv, vv, bwb; naamwoordelijk deel tussen haken */
const Z6a='De organisatie had zich niet voorbereid op zware regenval.',
 Z6b='Met de stijgende bezoekersaantallen was de museumdirecteur uiteraard erg blij.',
 Z6c='De kasteelheer ontsloeg zijn horigen van de verplichting op zijn land te werken.',
 Z6d='Zou het oude woonhuis tegen de kracht van de orkaan bestand blijken?';
zdQ('v6a1','v6','Opdracht 6a',Z6a,'De organisatie','ow','Wie had zich voorbereid? De organisatie.');
zdQ('v6a2','v6','Opdracht 6a',Z6a,'op zware regenval','vv','zich voorbereiden op: vast voorzetsel. Ze had zich erop voorbereid.');
zdQ('v6a3','v6','Opdracht 6a',Z6a,'niet','bwb','niet is een bijwoord: bwb.');
Q.push({id:'v6a4',o:'v6',nr:'Opdracht 6a',q:`Is het gezegde een wg of een ng?${S(Z6a)}`,a:'wg: had … voorbereid',
  f:[['ng: had … [voorbereid]','had is hier een hulpwerkwoord, geen koppelwerkwoord. Er staat geen naamwoordelijk deel.'],['wg: had','voorbereid hoort er ook bij.']],
  tv:`Noteer het gezegde en zet erachter of het een wg of ng is.${S(Z6a)}`,tvAlt:['had voorbereid (wg)','wg had voorbereid'],u:`<b>wg: had … voorbereid</b>.<div class="why">${ZDW.wg}</div>`,v:{q:`Werkwoordelijk of naamwoordelijk gezegde?${S(Z6a)}`}});
Q.push({id:'v6b1',o:'v6',nr:'Opdracht 6b',q:`Wat is het gezegde? Het naamwoordelijk deel staat tussen haken.${S(Z6b)}`,a:'ng: was [erg blij]',
  f:[['wg: was','was is hier een koppelwerkwoord: het koppelt de museumdirecteur aan erg blij. Dan is het een ng.'],['ng: was [blij]','erg hoort bij blij: hoe blij? Erg blij. Het hele naamwoordelijk deel is erg blij.'],['ng: was [uiteraard erg blij]','uiteraard zegt niet iets over de directeur, maar over de hele zin: bwb.']],
  tv:`Noteer het gezegde, zet erachter wg of ng en zet het naamwoordelijk deel tussen haken.${S(Z6b)}`,tvAlt:['was [erg blij]','ng was [erg blij]'],
  u:`<b>ng: was [erg blij]</b>. was = koppelwerkwoord, erg blij = naamwoordelijk deel.<div class="why">${ZDW.ng}</div>`,v:{q:`Benoem het gezegde (wg of ng) met het naamwoordelijk deel tussen haken.${S(Z6b)}`}});
zdQ('v6b2','v6','Opdracht 6b',Z6b,'de museumdirecteur','ow','Wie was blij? De museumdirecteur.');
zdQ('v6b3','v6','Opdracht 6b',Z6b,'uiteraard','bwb','uiteraard is een bijwoord: bwb.');
zdQ('v6c1','v6','Opdracht 6c',Z6c,'De kasteelheer','ow','Wie ontsloeg? De kasteelheer.');
zdQ('v6c2','v6','Opdracht 6c',Z6c,'ontsloeg','wg','Het enige werkwoord in de hoofdzin: ontsloeg.');
zdQ('v6c3','v6','Opdracht 6c',Z6c,'zijn horigen','lv','Wie ontsloeg de kasteelheer? Zijn horigen.');
zdQ('v6c4','v6','Opdracht 6c',Z6c,'van de verplichting op zijn land te werken','vv','iemand ontslaan van iets: vast voorzetsel. Hij ontsloeg hen ervan.');
zdQ('v6d1','v6','Opdracht 6d',Z6d,'het oude woonhuis','ow','Wat zou bestand blijken? Het oude woonhuis.');
zdQ('v6d2','v6','Opdracht 6d',Z6d,'tegen de kracht van de orkaan','vv','bestand zijn tegen: vast voorzetsel. Zou het ertegen bestand blijken?');
Q.push({id:'v6d3',o:'v6',nr:'Opdracht 6d',q:`Wat is het gezegde? Het naamwoordelijk deel staat tussen haken.${S(Z6d)}`,a:'ng: Zou … [bestand] blijken',
  f:[['wg: Zou … blijken','blijken is een koppelwerkwoord en bestand zegt iets over het huis: dan is het een ng.'],['ng: Zou … [bestand tegen de kracht van de orkaan] blijken','tegen de kracht van de orkaan is een apart zinsdeel: het vv.'],['wg: Zou … bestand blijken','bestand is geen werkwoord, maar een naamwoordelijk deel.']],
  tv:`Noteer het gezegde, zet erachter wg of ng en zet het naamwoordelijk deel tussen haken.${S(Z6d)}`,tvAlt:['zou [bestand] blijken','ng zou [bestand] blijken'],
  u:`<b>ng: Zou … [bestand] blijken</b>. blijken = koppelwerkwoord, bestand = naamwoordelijk deel.<div class="why">${ZDW.ng}</div>`,v:{q:`Benoem het gezegde (wg of ng) met het naamwoordelijk deel tussen haken.${S(Z6d)}`}});

/* =====================================================================
   Spelling §4 Koppelteken en weglatingsstreepje (blz. 254–255): opdracht 1 t/m 4
   ===================================================================== */
const KT={
 sk:'samenkoppeling: woorden die anders onoverzichtelijk worden krijgen koppeltekens (kop-en-schotel, doe-het-zelfzaak)',
 bk:'botsende klinkers: aa, ae, ai, au, ee, ei, eu, ie, ii, oe, oi, oo, ou, ui, uu en i+j, i+ij, e+ui (mee-eter, milieu-inspecteur)',
 tk:'na letters, cijfers, tekens en afkortingen (vwo-diploma, A3-formaat, $-teken)',
 aa:'aardrijkskundige namen (Noord-Italië, ’s-Gravenhage)',
 vv:'na adjunct-, aspirant-, bijna-, ex-, interim-, kandidaat-, leerling-, niet-, non-, oud- (oud-leerling, non-actief)',
 hl:'als het tweede deel een hoofdletter heeft (on-Nederlands, pro-Russisch)',
 gw:'gelijkwaardige woorden (trainer-coach, rood-wit-blauw)',
 wl:'weglatingsstreepje: als je een deel van een samenstelling weglaat (op- en aanmerkingen, krantenverkopers en -bezorgers)'};
const SP=(id,o,nr,woord,a,fs,uit,extra={})=>Q.push(Object.assign({id,o,nr,q:`Hoe schrijf je het goed?${S(woord)}`,a,f:fs,
  tv:`Schrijf het woord zo nodig aan elkaar en plaats koppeltekens of weglatingsstreepjes waar dat moet.${S(woord)}`,
  u:`<b>${a}</b>. ${uit}`,v:{q:`Aan elkaar, los of met streepje? Kies de goede spelling.${S(woord)}`}},extra));

/* opdracht 1 */
[
 ['a','& teken','&-teken',[['&teken','Na een teken komt altijd een koppelteken.'],['& teken','Het is één woord (een samenstelling), dus niet los.']],`Regel: ${KT.tk}.`],
 ['b','bureau agent','bureauagent',[['bureau-agent','u + a staat niet in het rijtje botsende klinkers. Je leest bureauagent ook zonder streepje goed.'],['bureau agent','Het is een samenstelling: aan elkaar.']],`Geen botsende klinkers (u + a), dus gewoon aan elkaar. Vergelijk politieagent en milieuactivist.`],
 ['c','cd speler','cd-speler',[['cdspeler','Na een afkorting die je als letters uitspreekt (c-d) komt een koppelteken.'],['cd speler','Het is één woord: aan elkaar, met koppelteken.']],`Regel: ${KT.tk}.`],
 ['d','een sta in de weg','een sta-in-de-weg',[['een staindeweg','Aan elkaar wordt het onoverzichtelijk: dit is een samenkoppeling, met koppeltekens.'],['een-sta-in-de-weg','een is het lidwoord: dat hoort niet bij het woord.']],`Regel: ${KT.sk}. Het lidwoord een blijft los.`],
 ['e','jury uitspraak','juryuitspraak',[['jury-uitspraak','y + u staat niet in het rijtje botsende klinkers. (Rekent je docent jury-uitspraak goed, volg dan de docent.)'],['jury uitspraak','Het is een samenstelling: aan elkaar.']],`Geen botsende klinkers: y + u staat niet in het rijtje. Dus aan elkaar.`],
 ['f','laag bij de gronds','laag-bij-de-gronds',[['laagbijdegronds','Aan elkaar is onoverzichtelijk: samenkoppeling met koppeltekens.'],['laag bij de gronds','Het is één begrip (plat, ordinair): samenkoppeling.']],`Regel: ${KT.sk}.`],
 ['g','milieu activist','milieuactivist',[['milieu-activist','u + a staat niet in het rijtje botsende klinkers. (Bij milieu-inspecteur wel: u + i.)'],['milieu activist','Het is een samenstelling: aan elkaar.']],`Geen botsende klinkers (u + a), dus aan elkaar. Let op: milieu-inspecteur wél, want ui botst.`],
 ['h','nek aan nek race','nek-aan-nekrace',[['nek-aan-nek-race','Het laatste deel (race) schrijf je vast, net als doe-het-zelfzaak.'],['nekaannekrace','Aan elkaar is onoverzichtelijk: nek-aan-nek is een samenkoppeling.']],`Samenkoppeling (nek-aan-nek) in een samenstelling: het laatste woord komt er direct aan vast, zoals bij doe-het-zelfzaak.`],
 ['i','oud burgemeester','oud-burgemeester',[['oudburgemeester','Na oud- (= vroeger) komt een koppelteken.'],['oud burgemeester','Los betekent het: een burgemeester die oud is. Bedoeld is een vroegere burgemeester.']],`Regel: ${KT.vv}.`],
 ['j','peper en zout stel','peper-en-zoutstel',[['peper-en-zout-stel','Het laatste deel (stel) komt er direct aan vast, zoals bij doe-het-zelfzaak.'],['peper- en zoutstel','Het is één stel voor peper en zout: samenkoppeling peper-en-zout + stel.']],`Samenkoppeling (peper-en-zout) in een samenstelling: stel komt er direct aan vast.`],
 ['k','politie agent','politieagent',[['politie-agent','e + a staat niet in het rijtje botsende klinkers.'],['politie agent','Het is een samenstelling: aan elkaar.']],`Geen botsende klinkers (e + a), dus aan elkaar.`],
 ['l','’s Heerenberg','’s-Heerenberg',[['’sHeerenberg','Na ’s in een plaatsnaam komt een koppelteken, zoals ’s-Gravenhage.'],['’s Heerenberg','Zoals ’s-Gravenhage en ’s-Hertogenbosch: met koppelteken.']],`Regel: ${KT.aa}.`],
 ['m','schrijver journalist','schrijver-journalist',[['schrijverjournalist','Gelijkwaardige woorden (hij is schrijver én journalist) krijgen een koppelteken.'],['schrijver journalist','Het is één persoon die allebei is: koppelteken.']],`Regel: ${KT.gw}.`],
 ['n','vmbo leerling','vmbo-leerling',[['vmboleerling','Na een afkorting komt een koppelteken.'],['vmbo leerling','Het is één woord: aan elkaar, met koppelteken.']],`Regel: ${KT.tk}.`],
 ['o','zwart wit foto','zwart-witfoto',[['zwart-wit-foto','zwart-wit is gelijkwaardig (koppelteken), maar foto komt er direct aan vast: zwart-witfoto.'],['zwart-wit foto','Het is één woord (samenstelling met foto): foto schrijf je eraan vast.']],`Gelijkwaardige woorden (zwart-wit) krijgen een koppelteken; foto komt er direct aan vast.`]
].forEach(([l,w,a,fs,uit])=>SP('s1'+l,'s1','Opdracht 1'+l,w,a,fs,uit));

/* opdracht 2 */
[
 ['a','baby kleertjes en baby schoentjes','babykleertjes en -schoentjes',[['babykleertjes- en schoentjes','Het streepje komt op de plek van het deel dat je weglaat: baby vóór schoentjes, dus -schoentjes.'],['baby kleertjes en schoentjes','babykleertjes is één woord: aan elkaar. En bij schoentjes hoort een weglatingsstreepje.']],`Je laat baby weg bij schoentjes: -schoentjes. ${KT.wl}.`],
 ['b','carnavals feesten en carnavals fuiven','carnavalsfeesten en -fuiven',[['carnavalsfeesten- en fuiven','Het streepje staat waar het weggelaten deel stond: vóór fuiven.'],['carnavals feesten en fuiven','Aan elkaar, en bij fuiven een weglatingsstreepje.']],`Je laat carnavals weg bij fuiven: -fuiven.`],
 ['c','deugd zaam en zorg zaam','deugd- en zorgzaam',[['deugd en zorgzaam','Zonder streepje lijkt deugd een los woord. Je laat zaam weg: deugd-.'],['deugdzaam en -zorg','Je laat het gelijke deel (zaam) weg, en dat staat achteraan: deugd- en zorgzaam.']],`Het gelijke deel staat achteraan (zaam): weglaten bij het eerste woord, streepje erachter: deugd-.`],
 ['d','doorgaand verkeer en stads verkeer','doorgaand verkeer en stadsverkeer',[['doorgaand- en stadsverkeer','doorgaand verkeer is geen samenstelling (twee woorden). Een weglatingsstreepje mag alleen bij een deel van een woord.'],['doorgaand verkeer en stads- verkeer','stadsverkeer is één woord: aan elkaar.']],`doorgaand verkeer is twee losse woorden, geen samenstelling. Daar hoort geen weglatingsstreepje. (Doorgaand en stadsverkeer, zonder streepje, rekenen sommige docenten ook goed.)`,{tvAlt:['doorgaand en stadsverkeer']}],
 ['e','gemeente politiek en provinciale politiek','gemeentepolitiek en provinciale politiek',[['gemeente- en provinciale politiek','provinciale politiek is twee losse woorden, geen samenstelling. Dan mag je niet samentrekken met een streepje.'],['gemeentepolitiek en provinciale- politiek','provinciale is een bijvoeglijk naamwoord: daar komt nooit een streepje achter.']],`Alleen gemeentepolitiek is een samenstelling. provinciale politiek is twee woorden: daar laat je niets weg.`],
 ['f','hoofd zaken en bij zaken','hoofd- en bijzaken',[['hoofdzaken en -bij','Het gelijke deel (zaken) staat achteraan: weglaten bij het eerste woord, hoofd-.'],['hoofd en bijzaken','Zonder streepje lijkt hoofd een los woord.']],`Je laat zaken weg bij hoofdzaken: hoofd-.`],
 ['g','in voer en uit voer','in- en uitvoer',[['in en uitvoer','Zonder streepje zie je niet dat er iets is weggelaten.'],['invoer en -uit','Het gelijke deel (voer) staat achteraan: in- en uitvoer.']],`Je laat voer weg bij invoer: in-.`],
 ['h','keel arts, neus arts en oor arts','keel-, neus- en oorarts',[['keel- neus- en oorarts','Bij een opsomming blijft de komma staan: keel-, neus- en oorarts.'],['keel, neus en oorarts','Zonder streepjes zie je niet dat arts is weggelaten.']],`Je laat arts twee keer weg. De komma van de opsomming blijft staan.`],
 ['i','lager onderwijs en voortgezet onderwijs','lager en voortgezet onderwijs',[['lager- en voortgezet onderwijs','lager onderwijs is twee losse woorden, geen samenstelling: geen streepje.'],['lageronderwijs en voortgezet onderwijs','lager onderwijs schrijf je los.']],`Het zijn losse woorden, geen samenstellingen. Je mag onderwijs wel één keer weglaten, maar zonder streepje.`],
 ['j','land winning en land bewerking','landwinning en -bewerking',[['landwinning- en bewerking','Het streepje staat waar het weggelaten deel stond: vóór bewerking.'],['land winning en bewerking','landwinning is één woord, en bij bewerking hoort een streepje.']],`Het gelijke deel (land) staat vooraan: weglaten bij het tweede woord, -bewerking.`],
 ['k','nationaal overleg en regionaal overleg','nationaal en regionaal overleg',[['nationaal- en regionaal overleg','nationaal overleg is twee losse woorden: geen streepje.'],['nationaalen regionaal overleg','en is een los woord.']],`Losse woorden, geen samenstellingen: overleg één keer weglaten, zonder streepje.`],
 ['l','rood achtig of bruin achtig','rood- of bruinachtig',[['rood of bruinachtig','Zonder streepje lijkt rood los te staan. Je laat achtig weg: rood-.'],['roodachtig of -bruin','Het gelijke deel (achtig) staat achteraan: rood- of bruinachtig.']],`Je laat achtig weg bij roodachtig: rood-.`]
].forEach(([l,w,a,fs,uit,ex])=>SP('s2'+l,'s2','Opdracht 2'+l,w,a,fs,uit,Object.assign({q:`Schrijf zo kort mogelijk, met weglatingsstreepje als dat mag. Welke is goed?${S(w)}`,
  tv:`Schrijf zo kort mogelijk aan elkaar. Laat weg wat je mag weglaten en plaats zo nodig weglatingsstreepjes.${S(w)}`},ex||{})));

/* opdracht 3: kies de juiste spelling (de keuzes staan in het boek) */
[
 ['a','auto-uitlaten en -banden',[['auto uitlaten en -banden','o + u botst (ou): auto-uitlaten met koppelteken.'],['auto-uitlaten- en banden','Het gelijke deel (auto) staat vooraan: bij banden laat je het weg, dus -banden.']],`auto-uitlaten: koppelteken door botsende klinkers (o + u). -banden: weglatingsstreepje voor auto.`],
 ['b','een paard-en-wagen',[['een paard en wagen','Het is één ding (een rijtuig): samenkoppeling met koppeltekens.'],['een paard-enwagen','Bij een samenkoppeling komen overal koppeltekens: paard-en-wagen.']],`Regel: ${KT.sk}.`],
 ['c','evacuatie-instructie',[['evacuatie instructie','Het is één woord.'],['evacuatieïnstructie','Bij botsende klinkers in een samenstelling gebruik je een koppelteken, geen trema.']],`Botsende klinkers e + i (ei): koppelteken.`],
 ['d','hbo- en mbo-studenten en -docenten',[['hbo en mbo studenten en docenten','Na een afkorting komt een koppelteken, en weggelaten delen krijgen een streepje.'],['hbo- en mbo-studenten- en -docenten','Bij studenten is niets weggelaten: daar komt geen streepje achter.']],`hbo- (weggelaten: studenten), mbo-studenten (afkorting), -docenten (weggelaten: hbo/mbo).`],
 ['e','leerling-loodgieter',[['leerling loodgieter','Het is één woord.'],['leerlingloodgieter','Na leerling- (iemand die het vak leert) komt een koppelteken.']],`Regel: ${KT.vv}.`],
 ['f','vergeet-mij-nietje',[['vergeet-mij-niet-je','-je is een verkleinwoord-uitgang: die komt er direct aan vast.'],['vergeetmijnietje','Aan elkaar is onoverzichtelijk: samenkoppeling met koppeltekens.']],`Samenkoppeling vergeet-mij-niet; het verkleinwoord -je komt er direct aan vast.`]
].forEach(([l,a,fs,uit])=>SP('s3'+l,'s3','Opdracht 3'+l,[a,...fs.map(x=>x[0])].sort().join(' / '),a,fs,uit,{mc:1,q:`Kies de juiste spelling.${S([a,...fs.map(x=>x[0])].sort().join(' / '))}`,tv:`Kies de juiste spelling.${S([a,...fs.map(x=>x[0])].sort().join(' / '))}`,v:{q:'Welke spelling is goed?'}}));

/* opdracht 4: tekst 1, met of zonder koppelteken, verschil in betekenis */
[
 ['a','oud ijzerhandelaar','Opa was vroeger ijzerhandelaar (in nieuw ijzer). Nu is hij dat niet meer.','oud-ijzerhandelaar',[['oudijzerhandelaar','Dat is een handelaar in oud ijzer, en dan doet hij het nu nog.'],['oud ijzerhandelaar','Los betekent het: een ijzerhandelaar die oud is.']],'oud- = vroeger: koppelteken.'],
 ['b','oud ijzerhandelaar','Opa is nu nog steeds handelaar, maar dan in oud ijzer.','oudijzerhandelaar',[['oud-ijzerhandelaar','Dat betekent: vroeger ijzerhandelaar.'],['oud ijzer handelaar','Het is één woord: een handelaar in oud ijzer.']],'Een woordgroep (oud ijzer) in een samenstelling schrijf je aan elkaar.'],
 ['c','drie jarigen','In het zaaltje zaten drie mensen die alle drie jarig waren.','drie jarigen',[['driejarigen','Dat zijn kinderen van drie jaar.'],['drie-jarigen','Een koppelteken komt hier niet: het zijn gewoon drie jarigen.']],'drie = hoeveel, jarigen = mensen die jarig zijn: los.'],
 ['d','drie jarigen','In het zaaltje zaten kinderen van drie jaar.','driejarigen',[['drie jarigen','Dat zijn drie mensen die jarig zijn.'],['drie-jarigen','Voluit geschreven getallen in een samenstelling: aan elkaar (driejarige). Alleen met cijfers: 3-jarige.']],'Kinderen van drie jaar: driejarigen, aan elkaar.'],
 ['e','non actief','De tuinman van het vrouwenklooster werkt niet meer.','non-actief',[['non actief','Los betekent het: een non die actief is.'],['nonactief','Na non- (= niet) komt een koppelteken.']],`Regel: ${KT.vv}.`],
 ['f','oud Hollands','Het gebak is traditioneel, zoals je het vroeger in Holland bakte.','oud-Hollands',[['oud Hollands','Los betekent het: Hollands gebak dat oud is (niet vers meer).'],['oudhollands','Hollands houdt zijn hoofdletter, en dan komt er een koppelteken: oud-Hollands.']],'Traditioneel = oud-Hollands. Met een hoofdletter in het tweede deel komt er ook een koppelteken.'],
 ['g','carnavalshit','Een liedje dat een hit is tijdens carnaval.','carnavals-hit',[['carnaval-shit','Dan staat er carnaval + shit: iets heel anders.'],['carnavalsh-it','Het streepje komt tussen de twee delen: carnavals + hit.']],'Een koppelteken mag je gebruiken om een woord duidelijker te maken: carnavals-hit.'],
 ['h','carnavalshit','Iemand is helemaal klaar met al dat gedoe rond carnaval.','carnaval-shit',[['carnavals-hit','Dan staat er carnavals + hit: een liedje.'],['carna-valshit','Het streepje komt tussen de twee delen: carnaval + shit.']],'Een koppelteken mag je gebruiken om een woord duidelijker te maken: carnaval-shit.']
].forEach(([l,w,bet,a,fs,uit])=>SP('s4'+l,'s4','Opdracht 4',w,a,fs,uit,{q:`Hoe schrijf je het als dit bedoeld wordt?${S(`<b>${w}</b>: ${bet}`)}`,
  tv:`Schrijf het vetgedrukte woord met of zonder koppelteken, zodat het dit betekent.${S(`<b>${w}</b>: ${bet}`)}`,v:{q:`Tekst 1. Welke spelling past bij deze betekenis?${S(`<b>${w}</b>: ${bet}`)}`}}));

/* extra bij de theorie */
[
 ['k1','zee egel','zee-egel',[['zeeegel','e + e botst (ee): koppelteken.'],['zee egel','Het is één woord.']],`Regel: ${KT.bk}.`],
 ['k2','Zuid Amerikaan','Zuid-Amerikaan',[['Zuidamerikaan','Aardrijkskundige namen krijgen een koppelteken; Amerikaan houdt zijn hoofdletter.'],['Zuid Amerikaan','Het is één woord.']],`Regel: ${KT.aa}.`],
 ['k3','pin code','pincode',[['pin-code','PIN spreek je uit als woord (pin), niet als letters: geen koppelteken.'],['PIN-code','Een afkorting die je als woord uitspreekt, schrijf je met kleine letters en zonder koppelteken.']],'Een afkorting die je als woord uitspreekt (pin, sim) schrijf je zonder hoofdletters en zonder koppelteken: pincode, simkaart.'],
 ['k4','burn out','burn-out',[['burnout','Bij Engelse leenwoorden met een voorzetsel als tweede deel: koppelteken.'],['burn out','Het is één woord.']],'In leenwoorden uit het Engels met een voorzetsel als tweede deel: burn-out, play-off.'],
 ['k5','hoge en lage cijfers','hoge en lage cijfers',[['hoge- en lage cijfers','Je laat een heel woord weg (cijfers), geen deel van een woord: geen weglatingsstreepje.'],['hoge-en-lage cijfers','Het is geen samenkoppeling: gewoon losse woorden.']],'Geen weglatingsstreepje als je een heel woord weglaat.'],
 ['k6','oud leerling','oud-leerling',[['oudleerling','Na oud- (= vroeger) komt een koppelteken.'],['oud leerling','Los betekent: een leerling die oud is.']],`Regel: ${KT.vv}.`]
].forEach(([id,w,a,fs,uit])=>SP(id,'st','Extra · theorie',w,a,fs,uit));

const BEG=[['voorzetselvoorwerp (vv)','zinsdeel met een vast voorzetsel dat bij het werkwoord hoort (wachten op, denken aan); vervang door er + voorzetsel','z5'],
 ['bijwoordelijke bepaling (bwb)','zegt waar, wanneer, hoe of waarom; het voorzetsel kun je vervangen door een ander','z5'],
 ['naamwoordelijk gezegde (ng)','koppelwerkwoord + naamwoordelijk deel: was [erg blij]','z5'],
 ['koppelteken','liggend streepje tussen delen van één woord: kop-en-schotel, mee-eter, cd-speler','s4'],
 ['weglatingsstreepje','liggend streepje op de plek van een weggelaten deel: op- en aanmerkingen','s4'],
 ['samenkoppeling','woorden die samen één begrip vormen, met koppeltekens: doe-het-zelf, laag-bij-de-gronds','s4'],
 ['botsende klinkers','klinkers die je samen anders zou lezen (aa, ae, ai, au, ee, ei, eu, ie, ii, oe, oi, oo, ou, ui, uu, i+j, i+ij, e+ui): koppelteken','s4'],
 ['wederkerig voornaamwoord (wedig.vnw)','elkaar (mekaar, elkander)','4'],['wederkerend voornaamwoord (wed.vnw)','me, je, zich, ons (mezelf, jezelf, zichzelf, onszelf); slaat terug op het onderwerp','4'],
 ['verplicht wederkerend werkwoord','werkwoord dat altijd met een wed.vnw gaat: zich schamen, zich vergissen. Geen mezelf.','4'],['toevallig wederkerend werkwoord','kan ook bij een ander: zich wassen, zich scheren. mezelf mag.','4'],
 ['vervangtruc','hij/hem → pers.vnw · zijn → bez.vnw · zich → wed.vnw','4']];
const SNAP={o4:[['Is worden een koppelwerkwoord of een hulpwerkwoord?','Allebei kan. Staat er nog een werkwoord bij (worden bepaald), dan is het een <b>hulpwerkwoord</b>. Staat er geen ander werkwoord bij (Hij wordt boos), dan is het een <b>koppelwerkwoord</b>.']],
 v4:[['Waarom werkt de vervangtest?','Bij een bwb draagt het voorzetsel zelf betekenis (in, bij, naast de kantine: steeds een andere plek). Bij een vv is het voorzetsel vastgegroeid aan het werkwoord: uitkijken naar. Uitkijken op betekent iets heel anders (een raam kijkt uit op zee).']],
 s1:[['Waarom een koppelteken bij botsende klinkers?','Zonder streepje lees je de klinkers als één klank: zeeegel, mee-eter zou meeëter of meeeter worden. Het koppelteken laat zien waar het ene woord ophoudt en het andere begint. Bij bureauagent lees je ua niet als één klank, dus daar is het niet nodig.']],
 s2:[['Waarom alleen bij delen van een woord?','Het streepje zegt: hier hoort nog een stuk aan vast. Bij losse woorden (lager onderwijs) hoort er niets aan vast, dus is er ook geen streepje nodig.']],
 th:[['Waarom is zich altijd wed.vnw?','zich bestaat alleen als wederkerend voornaamwoord. Je kunt het niet als pers.vnw gebruiken (*ik zie zich). Daarom is het ook het woord van de vervangtruc.']]};
function snapHtml(id){return (SNAP[id]||[]).map(x=>`<details class="snap"><summary>${x[0]}</summary><div>${x[1]}</div></details>`).join('')}
return {id:'ne',naam:'Nederlands',afk:'NE',kop:'Grammatica woordsoorten §4 · zinsdelen §5 voorzetselvoorwerp · spelling §4 koppelteken',
  log:[['di 17 nov','Zinsdelen §5 voorzetselvoorwerp (blz. 215) en spelling §4 koppelteken en weglatingsstreepje (blz. 254–255)','vv: opdracht 2, 4, 5, 6 · spelling: opdracht 1 t/m 4'],['wo 11 nov','Grammatica woordsoorten §4 (blz. 212–213)','opdracht 1, 2 en 4; opdracht 3 maak je met een klasgenoot']],
  SECS,SNAP,BEG,Q,snapHtml,leer:['4','z5','s4'],reken:false,volledig:false,toetsvorm:true,
  PN:{'4':'Grammatica woordsoorten §4 · wederkerig en wederkerend voornaamwoord',z5:'Grammatica zinsdelen §5 · voorzetselvoorwerp',s4:'Spelling §4 · koppelteken en weglatingsstreepje',mix:'Door elkaar'}};
})();
