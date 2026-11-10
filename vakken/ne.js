/* Nederlands, Grammatica woordsoorten §4 Wederkerig en wederkerend voornaamwoord (blz. 212–213).
   Opdracht 1, 2 en 4 (tekst 1 'Vrouwe Fortuna'), plus extra oefening bij de theorie.
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
   ['vz en bw','vz staat vóór een woordgroep (met je, dankzij haar vleugels) · bw zegt iets over hoe, waar of wanneer (bovenaan, daarom)','']]}
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
  f:[['Ik bemoei mezelf nooit met de ruzies van anderen.','zich bemoeien is verplicht wederkerend: dan geen mezelf, alleen me.'],['Ik bemoei mijn nooit met de ruzies van anderen.','mijn is een bez.vnw. Hier hoort een wed.vnw: me.']],
  u:'Bij verplicht wederkerende werkwoorden (zich bemoeien, zich vergissen, zich schamen) gebruik je geen mezelf, jezelf, zichzelf of onszelf.',
  v:{q:'Bij welke zin is het wederkerend voornaamwoord goed gebruikt?'}});
Q.push({id:'tv10',o:'th',nr:'Extra · mezelf',q:'Bij welk werkwoord mag je <b>zichzelf</b> gebruiken?',a:'zich wassen',
  f:[['zich vergissen','zich vergissen is verplicht wederkerend: alleen zich.'],['zich schamen','zich schamen is verplicht wederkerend: alleen zich.'],['zich verslikken','zich verslikken is verplicht wederkerend: alleen zich.']],
  u:'zich wassen is toevallig wederkerend: je kunt ook iemand anders wassen. Dan mag zichzelf.',v:{q:'Welk werkwoord is toevallig wederkerend (je kunt het ook bij een ander doen)?'}});

const BEG=[['wederkerig voornaamwoord (wedig.vnw)','elkaar (mekaar, elkander)','4'],['wederkerend voornaamwoord (wed.vnw)','me, je, zich, ons (mezelf, jezelf, zichzelf, onszelf); slaat terug op het onderwerp','4'],
 ['verplicht wederkerend werkwoord','werkwoord dat altijd met een wed.vnw gaat: zich schamen, zich vergissen. Geen mezelf.','4'],['toevallig wederkerend werkwoord','kan ook bij een ander: zich wassen, zich scheren. mezelf mag.','4'],
 ['vervangtruc','hij/hem → pers.vnw · zijn → bez.vnw · zich → wed.vnw','4']];
const SNAP={o4:[['Is worden een koppelwerkwoord of een hulpwerkwoord?','Allebei kan. Staat er nog een werkwoord bij (worden bepaald), dan is het een <b>hulpwerkwoord</b>. Staat er geen ander werkwoord bij (Hij wordt boos), dan is het een <b>koppelwerkwoord</b>.']],
 th:[['Waarom is zich altijd wed.vnw?','zich bestaat alleen als wederkerend voornaamwoord. Je kunt het niet als pers.vnw gebruiken (*ik zie zich). Daarom is het ook het woord van de vervangtruc.']]};
function snapHtml(id){return (SNAP[id]||[]).map(x=>`<details class="snap"><summary>${x[0]}</summary><div>${x[1]}</div></details>`).join('')}
return {id:'ne',naam:'Nederlands',afk:'NE',kop:'Grammatica woordsoorten §4 · wederkerig en wederkerend voornaamwoord',
  log:[['wo 11 nov','Grammatica woordsoorten §4 (blz. 212–213)','opdracht 1, 2 en 4; opdracht 3 maak je met een klasgenoot']],
  SECS,SNAP,BEG,Q,snapHtml,leer:['4'],reken:false,volledig:false,toetsvorm:true,
  PN:{'4':'Grammatica woordsoorten §4 · wederkerig en wederkerend voornaamwoord',mix:'Door elkaar'}};
})();
