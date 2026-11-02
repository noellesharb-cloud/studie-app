/* Levensbeschouwing, hoofdstuk 6 De islam: paragraaf 1 en 2 (werkboek blz. 113–120).
   Alleen vragen en uitleg; de manier van oefenen staat in oefen/engine.js.
   Feiten komen uit de bronnen in het boek. Modelantwoorden bij open vragen zijn door Claude gemaakt
   en kunnen afwijken van die van de docent. */
window.VAKDATA=window.VAKDATA||{};
VAKDATA.lv=(()=>{
const SECS=[
 {id:'moh',par:'1',nr:'1',name:'Mohammed en het ontstaan',c:'--c1',sub:'Bron 1 · opdracht 1 en 2',
  rules:[['570','Mohammed wordt geboren in Mekka (waarschijnlijk).',''],
   ['610','Mohammed begint te prediken, nadat God zich voor het eerst aan hem openbaarde.','Zijn belangrijkste boodschap: er is maar één god.'],
   ['622','Mohammed en zijn volgelingen vertrekken van Mekka naar Medina.','De meeste bewoners van Mekka vonden dat hij onrust bracht.'],
   ['630','Mekka geeft zich over; velen bekeren zich alsnog tot de islam.','Let op: Mekka geeft zich over, niet Mohammed.'],
   ['632','Mohammed sterft. Hij wordt opgevolgd door een kalief (politiek leider).',''],
   ['661','Scheiding van de moslimgemeenschap in sjiieten en soennieten.','Ongeveer 85% van de moslims is soenniet.'],
   ['Mohammed was','religieus, politiek én militair leider','Hij bedacht niet de hele islam zelf: hij voegde eigen ideeën toe aan de godsdiensten om hem heen.']]},
 {id:'god',par:'2',nr:'2',name:'Geloof in de ene God (1)',c:'--c2',sub:'Bron 2 · opdracht 3 en 4',
  rules:[['Allah','Arabisch voor "de God" (al + illah), geen eigennaam.',''],
   ['Eén god, en God is "enig"','God is ondeelbaar; niets of niemand deelt in zijn almacht.','Daarom wees Mohammed de drie-eenheid af (Vader, Zoon en Heilige Geest).'],
   ['Monotheïsme','godsdienst met één God',''],
   ['99 namen voor God','bijv. de Enige, de Barmhartige, de Schepper, de Alwetende, de Genadevolle','Ze helpen om iets van God te begrijpen. De subha (bidsnoer) heeft 100 kralen: 99 namen + 1 onbekende naam.'],
   ['Beeldverbod','Het is verboden God af te beelden: je kunt nooit een goede afbeelding van God maken.','De joodse Tora kent ook dit beeldverbod.']]},
 {id:'eng',par:'2',nr:'3',name:'Engelen (2) en profeten (3)',c:'--c3',sub:'Bron 3 · opdracht 5',
  rules:[['Engelen','horen bij het bovennatuurlijke; verbinding tussen God en de schepping','Ze brengen het gedrag van mensen in kaart en ontvangen de zielen van overledenen.'],
   ['Djibriel (Gabriël)','openbaarde de Koran aan Mohammed en vertelde Maria dat Jezus zou komen',''],
   ['Profeten','gezanten of zendelingen van God','4 Arabische profeten, 18 uit het Oude Testament, 3 uit het Nieuwe Testament (Zacharias, Johannes de Doper, Jezus).'],
   ['Mohammed is de laatste profeet','Hij sprak niet tot één volk, maar tot de hele mensheid.','Alle profeten bouwen aan hetzelfde huis.'],
   ['Namen in de Koran','Zacharia = Zakarijja · Johannes = Jahja · Maria = Marjam · Jacob = Ja\'koeb · Jezus = \'Isa · Abraham = Ibrahim','Ismaël = Isma\'iel · Isaak = Ishaak · Mozes = Moesa · Aäron = Haroen · Michaël = Mika\'il · Gabriël = Djibriel']]},
 {id:'kor',par:'2',nr:'4',name:'De Koran en eerdere boeken (4)',c:'--c4',sub:'Bron 4 · opdracht 6',
  rules:[['Eerdere boeken in de Koran','de Tora (Taura), de psalmen van David, de evangeliën','Tora en psalmen komen uit de TeNaCh; de evangeliën uit het Nieuwe Testament.'],
   ['Volgens Mohammed','bevatten die boeken veel waarheden, maar zijn het minder geslaagde pogingen om Gods openbaring te beschrijven',''],
   ['De Koran','de volledige en perfecte overschrijving van de goddelijke Koran die bij God bestaat','De Koran is de laatste openbaring, zoals Mohammed de laatste gezant is.'],
   ['Schema (opdracht 6)','Bijbel = Oude Testament (TeNaCh) + Nieuwe Testament; de evangeliën staan in het Nieuwe Testament','De Koran staat niet in de Bijbel, maar noemt Tora, psalmen en evangeliën als eerdere openbaringen.']]},
 {id:'oor',par:'2',nr:'5',name:'Laatste oordeel en leven na de dood (5)',c:'--c5',sub:'Bron 5 · opdracht 7 en 8',
  rules:[['Laatste oordeel','ook: Dag des oordeels of Dag van de opstanding','Alleen God weet wanneer.'],
   ['Wat gebeurt er?','zonsverduistering, neerstortende sterren; graven gaan open en de doden worden opgewekt','Iedereen is dan 33 jaar oud. De opstanding is lichamelijk.'],
   ['De daden worden gewogen','gezegenden ter rechterzijde → paradijs; verdoemden ter linkerzijde → hel',''],
   ['Bijbel en Koran lijken op elkaar','troon, boeken, oordeel naar daden, vuur voor wie slecht leefde','Mohammed kende de Bijbelse verhalen door te luisteren.'],
   ['De vijf geloofspunten','1 de ene God · 2 engelen · 3 profeten · 4 de Koran en eerdere heilige boeken · 5 het laatste oordeel en leven na de dood','Dit is opdracht 8.']]},
 {id:'lij',par:'2',nr:'6',name:'Lijden en dood',c:'--c6',sub:'Bron 6 · opdracht 9',
  rules:[['Westerse cultuur','sterven vaak gezien als het einde; zoveel mogelijk pijnbestrijding',''],
   ['Veel moslims','accepteren pijn eerder geduldig; euthanasie wordt vaak afgewezen','Het leven is door God gegeven; alleen God bepaalt hoe lang het duurt.'],
   ['Lijden is niet altijd zinloos','een beproeving van God waardoor je sterker wordt, of een straf waardoor je schuld inlost en minder hoeft te lijden na je dood',''],
   ['Lijden verzachten mag','smeekbeden tot God, pelgrimstocht naar Mekka, vasten, geld geven aan goede doelen','Of God daar iets mee doet, is aan God.']]}
];

/* begrippen, met de paragraaf waar ze bij horen */
const BEG=[
 ['islam','Levensbeschouwing die in de 7e eeuw op het Arabisch schiereiland ontstond, gesticht door Mohammed.','1'],
 ['moslim','Aanhanger van de islam.','1'],
 ['Koran','Het boek waarin volgens moslims de woorden van God zijn opgetekend.','1'],
 ['De Profeet','Zo noemen moslims Mohammed.','1'],
 ['kalief','Politiek leider die Mohammed na zijn dood opvolgde.','1'],
 ['soennieten','De grootste groep moslims (ongeveer 85%).','1'],
 ['sjiieten','De andere groep na de scheiding in 661.','1'],
 ['Allah','Arabisch voor "de God" (al + illah); geen eigennaam.','2'],
 ['monotheïsme','Godsdienst met één God.','2'],
 ['drie-eenheid','Christelijk idee: God bestaat als Vader, Zoon en Heilige Geest. Mohammed wees dit af.','2'],
 ['beeldverbod','Het verbod om God af te beelden (islam en jodendom).','2'],
 ['subha','Bidsnoer met 100 kralen: 99 voor de namen van God, de 100e voor een onbekende naam.','2'],
 ['engelen','Bovennatuurlijke wezens; de verbinding tussen God en de schepping.','2'],
 ['Djibriel','De engel Gabriël; openbaarde de Koran aan Mohammed.','2'],
 ['profeet','Gezant of zendeling van God.','2'],
 ['openbaren','Kenbaar maken aan mensen (zoals God zich openbaart).','2'],
 ['Taura','Zo heet de joodse Tora in de Koran.','2'],
 ['TeNaCh','De joodse bijbel; voor christenen ongeveer het Oude Testament.','2'],
 ['laatste oordeel','De dag waarop God de daden van alle mensen weegt (ook: Dag des oordeels, Dag van de opstanding).','2'],
 ['euthanasie','Het leven op verzoek beëindigen; door veel moslims afgewezen.','2'],
 ['beproeving','Lijden als test van God waardoor je sterker wordt.','2']
];

const Q=[
/* ---- 1. Mohammed ---- */
 {id:'m1',o:'moh',nr:'Opdracht 1a',q:'Wat gebeurde er in 570 n.Chr.?',a:'Mohammed werd geboren in Mekka',f:['Mohammed begon te prediken','Mohammed vertrok naar Medina','Mohammed stierf'],u:'Mohammed werd waarschijnlijk rond 570 geboren in Mekka.',v:{q:'In welk jaar werd Mohammed geboren?',a:'rond 570',f:['rond 610','rond 622','rond 632']}},
 {id:'m2',o:'moh',nr:'Opdracht 1b',q:'Wat gebeurde er in 610 n.Chr.?',a:'Mohammed begon te prediken, nadat God zich aan hem had geopenbaard',f:['Mekka gaf zich over','Mohammed werd geboren','De moslims splitsten in soennieten en sjiieten'],u:'Omstreeks 610 begon Mohammed te prediken, nadat God zich voor het eerst aan hem had geopenbaard.',v:{q:'In welk jaar begon Mohammed te prediken?',a:'610',f:['570','622','661']}},
 {id:'m3',o:'moh',nr:'Opdracht 1c',q:'Wat gebeurde er in 622 n.Chr.?',a:'Mohammed en zijn volgelingen vertrokken naar Medina',f:['Mohammed veroverde Mekka','Mohammed stierf in Medina','Mohammed werd kalief'],u:'Het verzet in Mekka werd zo groot dat Mohammed en zijn volgelingen naar Medina vertrokken.',v:{q:'In welk jaar vertrok Mohammed naar Medina?',a:'622',f:['610','630','632']}},
 {id:'m4',o:'moh',nr:'Opdracht 1d',q:'Wat gebeurde er rond 630 n.Chr.?',a:'Mekka gaf zich over en velen bekeerden zich tot de islam',f:['Mohammed gaf zich over aan Mekka','Mohammed werd geboren','De Koran werd gevonden'],u:'Let op: Mekka gaf zich over aan Mohammed, niet andersom.',v:{q:'Wie gaf zich rond 630 over?',a:'De stad Mekka',f:['Mohammed','De stad Medina','De kalief']}},
 {id:'m5',o:'moh',nr:'Opdracht 1e',q:'Wat gebeurde er in 632 n.Chr.?',a:'Mohammed stierf en werd opgevolgd door een kalief',f:['Mohammed vertrok naar Medina','De islam ontstond','Mekka gaf zich over'],u:'Mohammed stierf in 632. Hij werd opgevolgd door een politiek leider, een kalief.',v:{q:'In welk jaar stierf Mohammed?',a:'632',f:['622','630','661']}},
 {id:'m6',o:'moh',nr:'Opdracht 1f',q:'Wat gebeurde er in 661 n.Chr.?',a:'De moslimgemeenschap scheidde in sjiieten en soennieten',f:['Mohammed begon te prediken','De eerste kalief werd gekozen','Mekka werd veroverd'],u:'Problemen over het leiderschap (enkele leiders werden vermoord) leidden in 661 tot de scheiding. Die bestaat nog steeds.',v:{q:'In welk jaar ontstond de scheiding tussen soennieten en sjiieten?',a:'661',f:['632','630','610']}},
 {id:'m7',o:'moh',nr:'Bron 1',q:'Wat was het belangrijkste van de boodschap van Mohammed?',a:'Dat er maar één god is',f:['Dat iedereen naar Mekka moest','Dat Jezus de laatste profeet was','Dat er veel goden zijn'],u:'Het belangrijkste van Mohammeds boodschap was dat er maar één god is.',v:{q:'Welke boodschap stond voor Mohammed voorop?'}},
 {id:'m8',o:'moh',nr:'Bron 1',q:'Wat voor leider was Mohammed?',a:'Religieus, politiek én militair leider',f:['Alleen religieus leider','Alleen politiek leider','Een kalief'],u:'Mohammed was zowel een religieus leider als een politiek en militair leider.',v:{q:'Mohammed was niet alleen een religieus leider. Wat nog meer?',a:'Ook politiek en militair leider',f:['Ook koning van Medina','Ook kalief van Mekka','Ook priester van de joden']}},
 {id:'m9',o:'moh',nr:'Bron 1',q:'Heeft Mohammed de hele islam zelf bedacht?',a:'Nee, hij voegde eigen ideeën toe aan de godsdiensten om hem heen',f:['Ja, alles was nieuw','Nee, hij nam het jodendom letterlijk over','Ja, het stond al in de Bijbel'],u:'In zijn omgeving woonden joden, christenen en stammen met eigen goden. Mohammed voegde daar zijn eigen ideeën aan toe.',v:{q:'Wat betekent het dat Mohammed de stichter van de islam is?'}},
 {id:'m10',o:'moh',nr:'Bron 1',q:'Welke groep is het grootst onder de moslims op de wereld?',a:'Soennieten (ongeveer 85%)',f:['Sjiieten (ongeveer 85%)','Soennieten en sjiieten zijn even groot','Kaliefen'],u:'De meerderheid van de moslims op de wereld is soennitisch: ongeveer 85%.',v:{q:'Hoeveel procent van de moslims is ongeveer soenniet?',a:'± 85%',f:['± 15%','± 50%','± 30%']}},
 {id:'m11',o:'moh',nr:'Opdracht 2',q:'Welke drie landen op de kaart liggen NIET in het Midden-Oosten?',a:'Indonesië, Pakistan en Afghanistan',f:['Iran, Irak en Turkije','Saudi-Arabië, Irak en Iran','Turkije, Marokko en Iran'],u:'Op de kaart: 1 Iran, 2 Irak, 3 Indonesië, 4 Pakistan, 5 Saudi-Arabië, 6 Turkije, 7 Marokko, 8 Afghanistan. Marokko ligt in Noord-Afrika.',v:{q:'Welk genummerd land op de kaart ligt in Zuidoost-Azië?',a:'Indonesië (3)',f:['Pakistan (4)','Afghanistan (8)','Marokko (7)']}},
 {id:'m12',o:'moh',nr:'Op-pad-opdracht 1',q:'In welk land wonen de meeste moslims ter wereld, en ongeveer hoeveel?',a:'Indonesië, ruim 230 miljoen',f:['Indonesië, ongeveer 250.000','Saudi-Arabië, ongeveer 35 miljoen','Turkije, ongeveer 85 miljoen'],u:'Indonesië heeft ruim 280 miljoen inwoners, van wie het overgrote deel moslim is: ruim 230 miljoen. (Dit staat niet in het boek.)',v:{q:'Hoeveel moslims wonen er ongeveer in Indonesië?',a:'ruim 230 miljoen',f:['ongeveer 250.000','ongeveer 2,5 miljoen','ongeveer 23 miljoen']}},
 {id:'m13',o:'moh',nr:'Inleiding',q:'Waar en wanneer is de islam ontstaan?',a:'Op het Arabisch schiereiland, in de zevende eeuw',f:['In Jeruzalem, in de eerste eeuw','In Turkije, in de tiende eeuw','In Egypte, in de zevende eeuw'],u:'De islam is in de zevende eeuw ontstaan op het Arabisch schiereiland.',v:{q:'In welke eeuw ontstond de islam?',a:'de zevende eeuw',f:['de eerste eeuw','de vijfde eeuw','de tiende eeuw']}},

/* ---- 2. De ene God ---- */
 {id:'g1',o:'god',nr:'Bron 2',q:'Wat betekent "Allah" letterlijk?',a:'de God',f:['de Enige','de Schepper','de Profeet'],u:'Allah is een samentrekking van al en illah: "de God". Het is geen eigennaam.',v:{q:'Is "Allah" een eigennaam?',a:'Nee, het is het Arabische woord voor "de God"',f:['Ja, het is de naam van de god van de moslims','Ja, het betekent "Mohammed"','Nee, het betekent "profeet"']}},
 {id:'g2',o:'god',nr:'Bron 2',q:'Wat bedoelt de islam met: God is "enig"?',a:'God is ondeelbaar en niemand deelt in zijn almacht',f:['God is de eerste god','God is eenzaam','God heeft één profeet'],u:'Mohammed benadrukte dat er één god is én dat God enig is: ondeelbaar, niemand deelt in zijn almacht.',v:{q:'Waarom wees Mohammed de drie-eenheid af?',a:'Omdat God volgens hem ondeelbaar is',f:['Omdat hij Jezus niet kende','Omdat de joden dat zeiden','Omdat het niet in de Tora stond']}},
 {id:'g3',o:'god',nr:'Bron 2',q:'Wat is monotheïsme?',a:'Een godsdienst met één God',f:['Een godsdienst met veel goden','Een godsdienst zonder God','Het verbod om God af te beelden'],u:'De islam is heel uitdrukkelijk een godsdienst met één God: monotheïsme.',v:{q:'Hoe heet een godsdienst met één God?',a:'monotheïsme',f:['drie-eenheid','beeldverbod','polytheïsme']}},
 {id:'g4',o:'god',nr:'Bron 2',q:'Waarom mag je in de islam God niet afbeelden?',a:'Omdat de mens nooit helemaal kan bevatten wie God is; een goede afbeelding is onmogelijk',f:['Omdat Mohammed niet kon tekenen','Omdat schilderijen te duur waren','Omdat God een engel is'],u:'Een moslim beseft dat de mens nooit helemaal kan bevatten wie God is. Daarom is het verboden God af te beelden.',v:{q:'Welke andere godsdienst kent ook een beeldverbod?',a:'Het jodendom (de Tora)',f:['Het christendom','Het hindoeïsme','Geen enkele']}},
 {id:'g5',o:'god',nr:'Bron 2',q:'Hoeveel namen kent de islam voor God?',a:'99',f:['33','100','5'],u:'Binnen de islam kent men 99 namen voor God, zoals de Enige, de Barmhartige en de Schepper.',v:{q:'Waarom zijn er 99 namen voor God?',a:'Ze helpen de mens om iets van God te begrijpen',f:['Omdat er 99 profeten zijn','Omdat Mohammed 99 jaar werd','Omdat de Koran 99 hoofdstukken heeft']}},
 {id:'g6',o:'god',nr:'Kader',q:'Wat is een subha?',a:'Een bidsnoer met 100 kralen',f:['Een gebedskleed','Een hoofdstuk uit de Koran','Een moskee'],u:'99 kralen staan voor de 99 namen van God; de 100e, grotere sluitkraal staat voor een onbekende naam.',v:{q:'Waar staat de 100e kraal van de subha voor?',a:'Een onbekende naam: God kan nooit volledig gekend worden',f:['De naam van Mohammed','De Koran','De engel Djibriel']}},
 {id:'g7',o:'god',nr:'Opdracht 4a',q:'Wat is de overeenkomst tussen het christelijke en het islamitische beeld van God?',a:'Allebei geloven ze dat er maar één God is',f:['Allebei geloven ze in de drie-eenheid','Allebei hebben ze 99 namen voor God','Allebei beelden ze God nooit af'],u:'Christenen en moslims geloven allebei in één God.',v:{q:'Waarin zijn christenen en moslims het eens over God?'}},
 {id:'g8',o:'god',nr:'Opdracht 4b',q:'Wat is het verschil tussen het christelijke en het islamitische beeld van God?',a:'Christenen geloven in een drie-eenheid (Vader, Zoon, Heilige Geest); voor moslims is God ondeelbaar',f:['Moslims geloven in drie goden','Christenen geloven niet in één God','Moslims geloven dat Jezus God is'],u:'Christenen zien God als drie-eenheid. Moslims vinden dat God enig en ondeelbaar is.',v:{q:'Welk christelijk idee over God wees Mohammed af?',a:'De drie-eenheid',f:['Dat God de Schepper is','Dat er één God is','Dat God barmhartig is']}},
 {id:'g9',o:'god',nr:'Opdracht 3',t:'open',q:'Zowel de islam als het jodendom kennen een verbod op het afbeelden van God. Hoe denken christenen (katholieken en protestanten) over het afbeelden van God?',
  k:['Katholieken beelden God wel af: in kerken zie je schilderijen en beelden (zoals Michelangelo, op blz. 115).','Protestanten zijn terughoudender: zij volgen het gebod "maak geen beeld van God" en hebben weinig afbeeldingen in de kerk.'],
  vb:['Katholieken vinden het niet erg om God af te beelden. In hun kerken zie je veel schilderijen en beelden, zoals het schilderij van Michelangelo waarop God Adam schept. Protestanten zijn strenger. Zij houden zich aan het gebod uit de Bijbel dat je geen beeld van God mag maken, en hun kerken zijn daarom vaak sober.'],
  v:{q:'Leg uit hoe katholieken en protestanten verschillend denken over het afbeelden van God.'}},

/* ---- 3. Engelen en profeten ---- */
 {id:'e1',o:'eng',nr:'Bron 3',q:'Wat doen engelen volgens de islam?',a:'Ze vormen de verbinding tussen God en de schepping',f:['Ze schreven de Koran','Ze zijn de kinderen van God','Ze leiden de moslims in de oorlog'],u:'Engelen brengen het gedrag van mensen in kaart en ontvangen de zielen van overledenen.',v:{q:'Noem iets wat engelen volgens de islam doen.',a:'Het gedrag van mensen in kaart brengen',f:['Mensen straffen op aarde','De moskee bouwen','Nieuwe profeten kiezen']}},
 {id:'e2',o:'eng',nr:'Bron 3',q:'Waarom is de engel Djibriel zo belangrijk?',a:'Hij openbaarde de Koran aan Mohammed en vertelde Maria dat Jezus zou komen',f:['Hij is de laatste profeet','Hij bouwde de Kaaba','Hij is de vader van Mohammed'],u:'Djibriel is de Arabische naam van de engel Gabriël.',v:{q:'Hoe heet Djibriel in de Bijbel?',a:'Gabriël',f:['Michaël','Rafaël','Johannes']}},
 {id:'e3',o:'eng',nr:'Bron 3',q:'Wat is een profeet volgens de islam?',a:'Een gezant of zendeling van God',f:['Een engel','Een kalief','Iemand die de toekomst voorspelt'],u:'Het derde geloofspunt betreft het geloof in profeten: gezanten of zendelingen van God.',v:{q:'Hoe noemt de islam een gezant of zendeling van God?',a:'een profeet',f:['een engel','een kalief','een imam']}},
 {id:'e4',o:'eng',nr:'Bron 3',q:'Welke drie profeten uit het Nieuwe Testament komen in de Koran voor?',a:'Zacharias, Johannes de Doper en Jezus',f:['Abraham, Jacob en Mozes','Petrus, Paulus en Jezus','Maria, Jozef en Jezus'],u:'De Koran noemt 4 Arabische profeten, 18 uit het Oude Testament (zoals Abraham, Jacob en Mozes) en 3 uit het Nieuwe Testament.',v:{q:'Hoeveel profeten uit het Oude Testament noemt de Koran?',a:'18',f:['3','4','25']}},
 {id:'e5',o:'eng',nr:'Bron 3',q:'Waarom is Mohammed volgens moslims de laatste profeet?',a:'Hij sprak niet tot één volk, maar tot de hele mensheid',f:['Hij was de jongste profeet','Hij leefde het langst','Na hem werd de Koran verboden'],u:'Eerdere profeten spraken tot een bepaald volk (bijvoorbeeld de joden). Mohammed sprak tot de hele mensheid.',v:{q:'Met welk beeld beschrijft de Koran alle profeten?',a:'Bouwers aan hetzelfde huis',f:['Herders van dezelfde kudde','Soldaten in hetzelfde leger','Takken van dezelfde boom']}},
 ...[['Zacharia','Zakarijja'],['Johannes','Jahja'],['Maria','Marjam'],['Jacob','Ja\'koeb'],['Jezus','\'Isa'],['Abraham','Ibrahim'],['Ismaël','Isma\'iel'],['Isaak','Ishaak'],['Mozes','Moesa'],['Aäron','Haroen'],['Michaël','Mika\'il'],['Gabriël (engel)','Djibriel']].map(([b,k],i,arr)=>{
   const pool=arr.filter(x=>x[1]!==k),sh=a=>{a=a.slice();for(let j=a.length-1;j>0;j--){const r=Math.random()*(j+1)|0;[a[j],a[r]]=[a[r],a[j]]}return a};
   return {id:'n'+i,o:'eng',nr:'Opdracht 5',q:`Hoe heet ${b} in de Koran?`,a:k,f:sh(pool.map(x=>x[1])).slice(0,3),u:`${b} = ${k}.`,
     v:{q:`Wie is ${k} in de Bijbel?`,a:b,f:sh(pool.map(x=>x[0])).slice(0,3)}}}),

/* ---- 4. Koran en eerdere boeken ---- */
 {id:'k1',o:'kor',nr:'Bron 4',q:'Welke eerdere boeken worden in de Koran genoemd?',a:'De Tora, de psalmen van David en de evangeliën',f:['Alleen de Tora','Het hele Nieuwe Testament','Geen enkel ander boek'],u:'De Tora (de Taura in de Koran) en de psalmen komen uit de TeNaCh, de evangeliën uit het Nieuwe Testament.',v:{q:'Hoe heet de Tora in de Koran?',a:'de Taura',f:['de Subha','de Djibriel','de Injil']}},
 {id:'k2',o:'kor',nr:'Bron 4',q:'Wat vond Mohammed van de joodse en christelijke boeken?',a:'Ze bevatten veel waarheden, maar zijn minder geslaagde pogingen om Gods openbaring te beschrijven',f:['Ze zijn volledig fout','Ze zijn even goed als de Koran','Ze zijn door engelen geschreven'],u:'Volgens moslims is alleen de Koran de volledige en perfecte overschrijving van de goddelijke Koran die bij God bestaat.',v:{q:'Waarom is de Koran voor moslims beter dan de eerdere boeken?'}},
 {id:'k3',o:'kor',nr:'Bron 4',q:'Wat betekent "God heeft zich geopenbaard"?',a:'God heeft zich kenbaar gemaakt aan mensen',f:['God is gestorven','God is mens geworden','God heeft een boek geschreven'],u:'Openbaren = kenbaar maken aan mensen.',v:{q:'Welk woord gebruikt het boek voor "God maakt zich kenbaar aan mensen"?',a:'openbaren',f:['bekeren','prediken','aanschouwen']}},
 {id:'k4',o:'kor',nr:'Opdracht 6a',q:'Welk schema klopt?',a:'Bijbel = Oude Testament (TeNaCh) + Nieuwe Testament; de evangeliën staan in het Nieuwe Testament',f:['Bijbel = evangeliën + TeNaCh; het Nieuwe Testament staat in de evangeliën','Oude Testament = Bijbel + evangeliën','Nieuwe Testament = TeNaCh + evangeliën'],u:'De evangeliën zijn een deel van het Nieuwe Testament. Oude en Nieuwe Testament samen vormen de Bijbel.',v:{q:'In welk deel van de Bijbel staan de evangeliën?',a:'In het Nieuwe Testament',f:['In het Oude Testament','In de TeNaCh','In de Tora']}},
 {id:'k5',o:'kor',nr:'Opdracht 6b',t:'open',q:'Kun je ook de Koran een plaats geven in het schema van de Bijbel (Oude Testament, Nieuwe Testament, evangeliën)?',
  k:['De Koran hoort niet bij de Bijbel: het is een apart boek.','Wel noemt de Koran de Tora en de psalmen (uit het Oude Testament/TeNaCh) en de evangeliën (uit het Nieuwe Testament) als eerdere openbaringen.','Voor moslims komt de Koran daarna, als laatste en volmaakte openbaring.'],
  vb:['Nee, de Koran staat niet in de Bijbel. Je kunt hem wel naast of na de Bijbel zetten. De Koran noemt de Tora en de psalmen uit het Oude Testament en de evangeliën uit het Nieuwe Testament als eerdere boeken van God. Volgens moslims is de Koran de laatste en beste openbaring.'],
  v:{q:'Waar zou jij de Koran zetten in het schema Bijbel → Oude en Nieuwe Testament → evangeliën? Leg uit.'}},

/* ---- 5. Laatste oordeel ---- */
 {id:'o1',o:'oor',nr:'Bron 5',q:'Wie weet wanneer het laatste oordeel komt?',a:'Alleen God',f:['De profeet Mohammed','De engel Djibriel','De kalief'],u:'Alleen God weet wanneer dat moment komt.',v:{q:'Welke andere namen heeft het laatste oordeel?',a:'Dag des oordeels of Dag van de opstanding',f:['Dag van de profeet','Dag van de Koran','Dag van Mekka']}},
 {id:'o2',o:'oor',nr:'Bron 5',q:'Hoe oud is iedereen bij de opstanding uit de dood?',a:'33 jaar',f:['18 jaar','70 jaar','Even oud als toen hij stierf'],u:'De graven gaan open, de doden worden opgewekt en iedereen is dan 33 jaar oud.',v:{q:'Wat gebeurt er met de doden bij het laatste oordeel?',a:'De graven gaan open en de doden worden opgewekt',f:['Ze worden engelen','Ze blijven in hun graf','Ze worden opnieuw geboren als baby']}},
 {id:'o3',o:'oor',nr:'Bron 5',q:'Waarom is de opstanding volgens de islam lichamelijk?',a:'Alleen zo kan de mens hemels genieten en hels lijden',f:['Omdat de ziel niet bestaat','Omdat God een lichaam heeft','Omdat engelen geen lichaam hebben'],u:'De opstanding uit de dood is een echt lichamelijke opstanding: alleen zo kan de mens hemels genieten en hels lijden.',v:{q:'Is de opstanding uit de dood volgens de islam lichamelijk of alleen geestelijk?',a:'Lichamelijk',f:['Alleen geestelijk','Dat weet niemand','Alleen voor profeten lichamelijk']}},
 {id:'o4',o:'oor',nr:'Bron 5',q:'Waar gaan de "gezegenden ter rechterzijde" naartoe?',a:'Naar het paradijs, "aan stromende rivieren"',f:['Naar de hel','Terug naar de aarde','Naar Mekka'],u:'De gezegenden mogen eeuwig in het paradijs wonen, waar men God kan aanschouwen. Voor zondaars is er de hel.',v:{q:'Wat gebeurt er met de verdoemden ter linkerzijde?',a:'Ze gaan voor eeuwig naar de hel',f:['Ze krijgen een tweede kans','Ze worden engelen','Ze gaan naar het paradijs']}},
 {id:'o5',o:'oor',nr:'Opdracht 7',q:'Welke overeenkomst zie je tussen de tekst uit de Bijbel en die uit de Koran?',a:'In allebei is er een troon, worden mensen naar hun daden beoordeeld en gaan slechte mensen het vuur in',f:['In allebei is iedereen 33 jaar oud','In allebei dragen acht engelen de troon','In allebei komt Mohammed voor'],u:'Bijbel: troon, boeken, oordeel naar daden, poel van vuur. Koran: troon, je boek in je rechter- of linkerhand, hellevuur.',v:{q:'Wat speelt in allebei de teksten een rol bij het oordeel?',a:'Boeken waarin de daden staan',f:['Een weegschaal','Een subha','Een duif']}},
 {id:'o6',o:'oor',nr:'Opdracht 7',t:'open',q:'Vergelijk de tekst uit de Koran (69,17–31) met die uit de Bijbel (Openbaring 20,11–15). Noteer zoveel mogelijk overeenkomsten.',
  k:['In allebei is er een troon met God (de Heer) erop.','In allebei spelen boeken een rol (het boek van het leven; je boek in je rechter- of linkerhand).','In allebei worden mensen geoordeeld naar hun daden.','In allebei worden de slechte mensen in het vuur gegooid (poel van vuur, hellevuur).','In allebei moeten alle mensen voor God verschijnen (de doden staan voor de troon; jullie worden voorgeleid).'],
  vb:['In beide teksten staat er een troon waar God op zit. Alle mensen moeten voor God verschijnen. Er zijn boeken waarin staat wat mensen gedaan hebben, en mensen worden geoordeeld naar hun daden. Wie slecht heeft geleefd, wordt in het vuur gegooid.'],
  v:{q:'Noem minstens vier dingen die in zowel de Bijbeltekst als de Korantekst over het laatste oordeel voorkomen.'}},
 {id:'o7',o:'oor',nr:'Opdracht 8',t:'open',q:'Noem de vijf belangrijke geloofspunten van de islam.',
  k:['1. Geloof in de ene God','2. Geloof in engelen','3. Geloof in de profeten','4. Geloof in de Koran en eerdere heilige boeken','5. Geloof in het laatste oordeel en een leven na de dood'],
  v:{q:'Welke vijf dingen gelooft een moslim volgens bron 2 tot en met 5?'}},
 {id:'o8',o:'oor',nr:'Opdracht 8',q:'Welke van deze is GEEN geloofspunt uit bron 2 t/m 5?',a:'Geloof in de drie-eenheid',f:['Geloof in engelen','Geloof in de profeten','Geloof in het laatste oordeel'],u:'De vijf geloofspunten: de ene God, engelen, profeten, de Koran en eerdere boeken, het laatste oordeel. De drie-eenheid wijst de islam juist af.',v:{q:'Welk geloofspunt is het tweede?',a:'Geloof in engelen',f:['Geloof in de Koran','Geloof in de ene God','Geloof in het laatste oordeel']}},

/* ---- 6. Lijden en dood ---- */
 {id:'l1',o:'lij',nr:'Bron 6',q:'Hoe kijken veel moslims naar euthanasie?',a:'Ze wijzen het af, omdat alleen God de lengte van het leven mag bepalen',f:['Ze vinden het een goede oplossing','Ze vinden het verplicht bij ernstige pijn','Ze laten het aan de dokter over'],u:'Het leven is door God gegeven en alleen God mag de lengte ervan bepalen.',v:{q:'Waarom wijzen veel moslims euthanasie af?'}},
 {id:'l2',o:'lij',nr:'Opdracht 9b',q:'Waarom is lijden voor moslims lang niet altijd zinloos?',a:'Het kan een beproeving zijn waardoor je sterker wordt, of een straf waardoor je schuld inlost',f:['Omdat pijn niet bestaat','Omdat God het lijden altijd wegneemt','Omdat lijden alleen voor ongelovigen is'],u:'Lijden als beproeving: je wordt er sterker van. Lijden als straf: je lost een deel van je schuld bij God in en hoeft na je sterven minder te lijden.',v:{q:'Wat kan lijden volgens de islam zijn?',a:'Een beproeving van God of een straf waardoor je schuld inlost',f:['Altijd een teken van zonde','Een fout van de schepping','Iets wat je met medicijnen moet stoppen']}},
 {id:'l3',o:'lij',nr:'Bron 6',q:'Hoe kunnen nabestaanden het lijden van een overledene proberen te bekorten?',a:'Met smeekbeden, een pelgrimstocht naar Mekka, vasten of geld geven aan goede doelen',f:['Door de Koran te verbranden','Door euthanasie','Door niet meer te bidden'],u:'Of God daarmee iets doet, is aan God.',v:{q:'Noem een manier waarop nabestaanden iets kunnen doen voor een overledene.'}},
 {id:'l4',o:'lij',nr:'Bron 6',q:'Hoe wordt sterven in onze westerse cultuur vaak gezien?',a:'Als het einde van het leven, en pijn als iets negatiefs',f:['Als overgang naar het paradijs','Als beproeving van God','Als straf voor zonde'],u:'In de westerse cultuur zien veel mensen sterven als het einde, en er wordt zoveel mogelijk aan pijnbestrijding gedaan.',v:{q:'Wat is een verschil tussen de westerse cultuur en veel moslims over pijn?',a:'Westers: pijn zoveel mogelijk bestrijden; veel moslims: pijn eerder geduldig accepteren',f:['Moslims gebruiken meer pijnstillers','In het westen accepteert men pijn geduldiger','Er is geen verschil']}},
 {id:'l5',o:'lij',nr:'Opdracht 9b',t:'open',q:'Leg uit waarom het lijden voor moslims lang niet altijd als zinloos wordt ervaren.',
  k:['Lijden kan een beproeving van God zijn, waardoor je sterker wordt.','Lijden kan een straf zijn, waardoor je een stuk van je schuld bij God inlost en minder hoeft te lijden na je sterven.'],
  vb:['Voor moslims heeft lijden vaak een zin. Het kan een beproeving van God zijn, waardoor je sterker wordt. Het kan ook een straf zijn: dan los je een deel van je schuld bij God al af, zodat je na je dood minder hoeft te lijden.'],
  v:{q:'Geef twee redenen waarom lijden voor een moslim zin kan hebben.'}}
];

return {id:'lv',naam:'Levensbeschouwing',afk:'LV',kop:'Hoofdstuk 6 De islam · §1 en §2',SECS,SNAP:{},BEG,Q,snapHtml:()=>'',
  leer:['1','2'],reken:false,volledig:false,
  PN:{'1':'§1 Het ontstaan van de islam','2':'§2 De levensbeschouwing van de moslim','mix':'Door elkaar'}};
})();
