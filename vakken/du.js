/* Duits, Kapitel 4 Mein Tag (AB blz. 32 en 39, onderaan toegevoegd) en Kapitel 6 Haustiere: werkblad blz. 32, opdracht 6, 7 en 8a, plus Akkusativ en woordjes.
   Overgenomen uit de losse app "Duits Kapitel 6". Alleen vragen en uitleg; de manier van oefenen staat in oefen/engine.js.
   Eigen vraagsoorten (zie custom onderaan): rij = werkwoordrijtje bouwen, zin = vraag bouwen in twee stappen.
   Akkusativ (lijdend voorwerp) in haar blauwe markeerkleur, achter de knop Kleurhulp.
   Vertalingen, uitleg en extra oefeningen zijn door Claude gemaakt en kunnen afwijken van die van de docent. */
window.VAKDATA=window.VAKDATA||{};
VAKDATA.du=(()=>{
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
const A=s=>`<span class="acc">${s}</span>`;                       /* lijdend voorwerp, kleurt blauw met Kleurhulp */
const AK=s=>`<span class="mk c-acc">${s}</span>`;                  /* altijd blauw (uitleg, spiekbrief) */
const kleur=s=>s.replace(/class="acc"/g,'class="mk c-acc"');
const kaal=s=>s.replace(/<[^>]+>/g,'');
const KH=`<button type="button" class="khbtn" onclick="this.closest('.card').classList.toggle('kh')">Kleurhulp</button>`;
const DE=s=>`<div class="de">${s}</div>`;

/* ---------- woordjes van werkblad blz. 32 ---------- */
const VOC=[
 ['das Haustier','het huisdier','die Haustiere'],['der Hund','de hond','die Hunde'],['die Katze','de kat','die Katzen'],
 ['der Kanarienvogel','de kanarie',''],['das Pferd','het paard','die Pferde'],['der Papagei','de papegaai',''],
 ['der Pinguin','de pinguïn','die Pinguine'],['der Eisbär','de ijsbeer','die Eisbären'],['die Maus','de muis','die Mäuse'],
 ['die Ratte','de rat','die Ratten'],['der Mensch','de mens','die Menschen'],['das Buch','het boek','die Bücher'],
 ['die Arbeit','het werk',''],['kennen','kennen',''],['hassen','haten',''],['lernen','leren',''],['lesen','lezen',''],
 ['schreiben','schrijven',''],['hören','horen, luisteren naar',''],['mögen','houden van, aardig vinden',''],
 ['leben','leven, wonen',''],['fressen','eten (van dieren)',''],['sprechen','spreken, praten',''],['heißen','heten','']
];
const isN=v=>/^(der|die|das) /.test(v[0]);

/* ---------- woordjes Arbeitsbuch blz. 19 (Deine Wörter 2) en blz. 27 (Deine Wörter 3) ----------
   Vertalingen door Claude (niet die uit haar schrift: daar staan een paar fouten in, zoals 'de feestjes' en 'ik hou van wortel'). */
const AB19=[
 ['die Klasse','de klas','die Klassen'],['meine Klasse','mijn klas',''],['die Pause','de pauze','die Pausen'],['Jetzt ist Pause.','Nu is het pauze.',''],
 ['aber','maar',''],['Was ist jetzt?','Wat hebben we nu?',''],['Magst du Bio?','Vind je biologie leuk?',''],['Und du?','En jij?',''],['auch gut','ook goed',''],['auch','ook',''],
 ['Nein, ich mag Bio nicht.','Nee, ik vind biologie niet leuk.',''],['nein','nee',''],['nicht','niet',''],['langweilig','saai',''],['super','super',''],
 ['Mathe ist super!','Wiskunde is super!',''],['Na ja, es geht.','Nou ja, het gaat wel.',''],['Ja, sehr.','Ja, heel erg.',''],['Wie heißt … auf Deutsch?','Hoe heet … in het Duits?',''],
 ['toll','geweldig, leuk, gaaf',''],['blöd','stom',''],
 ['die Freundin','de vriendin','die Freundinnen'],['meine Freundin','mijn vriendin',''],['der Freund','de vriend','die Freunde'],['mein Freund','mijn vriend',''],
 ['spielen','spelen',''],['viel','veel',''],['zusammen','samen',''],['nur','alleen, slechts',''],['Wir spielen viel zusammen.','We spelen veel samen.',''],
 ['der Nachmittag','de middag','die Nachmittage'],['heute Nachmittag','vanmiddag',''],['Keine Ahnung.','Geen idee.',''],['gern','graag',''],
 ['lernen','leren',''],['morgen','morgen',''],['Tschüs, bis morgen!','Doei, tot morgen!',''],['die Handynummer','het mobiele nummer','die Handynummern'],
 ['die Postleitzahl','de postcode','die Postleitzahlen'],['die Hausnummer','het huisnummer','die Hausnummern'],
 ['der Bleistift','het potlood','die Bleistifte'],['der Kuli','de pen','die Kulis'],['das Smartphone','de smartphone','die Smartphones'],['die Schere','de schaar','die Scheren'],
 ['der Radiergummi','de gum','die Radiergummis'],['der Kleber','de lijm',''],['das Buch','het boek','die Bücher'],['das Lineal','de liniaal','die Lineale'],
 ['die Sporttasche','de sporttas','die Sporttaschen'],['die Brille','de bril','die Brillen'],['der Taschenrechner','de rekenmachine','die Taschenrechner'],
 ['das Wörterbuch','het woordenboek','die Wörterbücher'],['das Tablet','de tablet','die Tablets'],['der Laptop','de laptop','die Laptops'],['der Computer','de computer','die Computer'],
 ['der USB-Stick','de usb-stick','die USB-Sticks'],['der Rucksack','de rugzak','die Rucksäcke'],['der Schreibblock','het schrijfblok','die Schreibblöcke'],
 ['die Brotdose','de broodtrommel','die Brotdosen'],['das Heft','het schrift','die Hefte'],['die Uhr','de klok, het horloge','die Uhren'],
 ['Deutsch','Duits',''],['Englisch','Engels',''],['Französisch','Frans',''],['Mathe / Mathematik','wiskunde',''],['Physik','natuurkunde',''],['Biologie','biologie',''],
 ['Erdkunde / Geografie','aardrijkskunde',''],['Geschichte','geschiedenis',''],['Kunst','beeldende vorming, kunst',''],
 /* aanvulling uit de bijlage 'Prima 1.1 Wörter E2' (SOMtoday) */
 ['ach so','o zo, o oké',''],['alles','alles',''],['die Auskunft','de inlichting, de informatie','die Auskünfte'],['dein, deine','jouw',''],['ein, eine','een',''],
 ['englisch','Engels (bijvoeglijk naamwoord)',''],['er','hij',''],['sie','zij',''],['ihr','jullie',''],['die Feuerwehr','de brandweer','die Feuerwehren'],['fit','fit',''],
 ['die Geige','de viool','die Geigen'],['heute','vandaag',''],['der Kugelschreiber','de balpen (het lange woord voor Kuli)','die Kugelschreiber'],
 ['das Mäppchen','het etui','die Mäppchen'],['die Nacht','de nacht','die Nächte'],['oft','vaak',''],['die Präsentation','de presentatie','die Präsentationen'],
 ['die Schule','de school','die Schulen'],['die Schulsachen','de schoolspullen',''],['Sport','lo, gym (schoolvak)',''],['die Tafel','het (school)bord','die Tafeln'],
 ['die Telefonnummer','het telefoonnummer','die Telefonnummern'],['weg sein','weg zijn',''],['die Zahl','het getal','die Zahlen']
];
const AB27=[
 ['die Katze','de kat','die Katzen'],['Das ist meine Katze.','Dat is mijn kat.',''],['alt','oud',''],['Meine Katze ist vier Jahre alt.','Mijn kat is vier jaar oud.',''],
 ['das Jahr','het jaar','die Jahre'],['der Hund','de hond','die Hunde'],
 ['das Lieblingstier','het lievelingsdier','die Lieblingstiere'],['Das weiß ich nicht.','Dat weet ik niet.',''],['glauben','geloven, denken',''],
 ['das Haustier','het huisdier','die Haustiere'],['kein, keine','geen',''],['der Vogel','de vogel','die Vögel'],['aber','maar',''],
 ['das Land','het land','die Länder'],['die Stadt','de stad','die Städte'],['das Alter','de leeftijd',''],['das Hobby','de hobby','die Hobbys'],['von','van',''],
 ['der Hund von Sophie','de hond van Sophie',''],['die Party','het feest','die Partys'],['oder','of',''],
 ['der Salat','de salade, de sla','die Salate'],['die Karotte','de wortel','die Karotten'],['Er mag Karotten.','Hij houdt van wortels.',''],['klein','klein',''],['groß','groot',''],
 ['stark','sterk',''],['süß','zoet, schattig',''],['schnell','snel',''],['die Million','het miljoen','die Millionen'],['fast','bijna',''],['fast 10 Millionen','bijna 10 miljoen',''],
 ['über','over, meer dan',''],['über 10 Millionen','meer dan 10 miljoen',''],['leben','leven, wonen',''],['die Wohnung','de woning, het appartement','die Wohnungen'],
 ['es gibt','er is, er zijn',''],['viele','veel (meervoud)',''],['andere','andere',''],['z. B. (zum Beispiel)','bijv. (bijvoorbeeld)',''],['usw. (und so weiter)','enz. (enzovoort)',''],
 ['Afrika','Afrika',''],['Antarktis','Antarctica',''],['Asien','Azië',''],['Australien','Australië',''],['Europa','Europa',''],['Nordamerika','Noord-Amerika',''],['Südamerika','Zuid-Amerika',''],
 ['grau','grijs',''],['schwarz','zwart',''],['weiß','wit',''],['rot','rood',''],['grün','groen',''],['blau','blauw',''],['gelb','geel',''],['braun','bruin',''],
 /* aanvulling uit de bijlage 'Prima A1.1 Wörter E3' (SOMtoday) */
 ['das Bild','de afbeelding, het plaatje','die Bilder'],['der / die Deutsche','de Duitser, de Duitse','die Deutschen'],['der Fisch','de vis','die Fische'],
 ['haben','hebben',''],['das Handy','het mobieltje','die Handys'],['das Telefon','de telefoon','die Telefone'],['das Tier','het dier','die Tiere'],
 ['das Kaninchen','het konijn','die Kaninchen'],['die Kuh','de koe','die Kühe'],['die Maus','de muis','die Mäuse'],['das Meerschweinchen','de cavia','die Meerschweinchen'],
 ['die Möwe','de meeuw','die Möwen'],['das Pferd','het paard','die Pferde'],['die Ratte','de rat','die Ratten'],['der Schmetterling','de vlinder','die Schmetterlinge'],['schon','al','']
];


/* ---------- werkwoorden ---------- */
const PERS=['ich','du','er/sie/es','wir','ihr','sie/Sie'];
const VERBS={
 kennen:{nl:'kennen',f:['kenne','kennst','kennt','kennen','kennt','kennen'],x:[],
   uitleg:'Regelmatig: stam <b>kenn</b> + e, st, t, en, t, en.'},
 schreiben:{nl:'schrijven',f:['schreibe','schreibst','schreibt','schreiben','schreibt','schreiben'],x:['schriebst'],
   uitleg:'Regelmatig: stam <b>schreib</b> + e, st, t, en, t, en.'},
 lesen:{nl:'lezen',f:['lese','liest','liest','lesen','lest','lesen'],x:['lesst'],
   uitleg:'Sterk werkwoord: bij <b>du</b> en <b>er/sie/es</b> wordt de e een <b>ie</b>. De stam eindigt op s, dus bij du alleen -t erachter: du liest (niet liesst).'},
 haben:{nl:'hebben',f:['habe','hast','hat','haben','habt','haben'],x:['habst'],
   uitleg:'Onregelmatig: bij <b>du</b> en <b>er/sie/es</b> valt de b weg: du hast, er hat.'},
 mögen:{nl:'houden van',f:['mag','magst','mag','mögen','mögt','mögen'],x:['mögst','möge'],
   uitleg:'Onregelmatig: ich, du en er hebben een <b>a</b>: ich mag, du magst, er mag. Let op: ich mag en er mag zijn hetzelfde, zonder -e of -t.'}
};
/* extra vormen die opdracht 8 nodig heeft (voor de varianten "bij welk persoon hoort dit?") */
const VF=Object.assign(Object.fromEntries(Object.entries(VERBS).map(([k,v])=>[k,v.f])),{
 fressen:['fresse','frisst','frisst','fressen','fresst','fressen'],
 können:['kann','kannst','kann','können','könnt','können'],
 heißen:['heiße','heißt','heißt','heißen','heißt','heißen']});
const PL={ich:0,du:1,er:2,wir:3,ihr:4,sie:5};

/* ---------- onderdelen ---------- */
const MEAN={lerne:'ik leer',lese:'ik lees',hasse:'ik haat',habe:'ik heb',kenne:'ik ken',schreibe:'ik schrijf',höre:'ik luister (naar)'};
const BANK=['lerne','lese','hasse','habe','kenne','schreibe','höre'];
const WRULE='W-vraag: <b>vraagwoord – werkwoord – onderwerp – rest</b>';
const JRULE='Ja/nee-vraag: het <b>werkwoord staat vooraan</b>, dan het onderwerp, dan de rest';
const ex={lesen:[1,2],haben:[1,2],mögen:[0,1,2]};
const rijRegels=Object.entries(VERBS).map(([k,v])=>[`${k} (${v.nl})`,PERS.map((p,j)=>`${p} ${(ex[k]||[]).includes(j)?'<b>'+v.f[j]+'</b>':v.f[j]}`).join(' · '),v.uitleg]);
const SECS=[
 {id:'o12',par:'ab',nr:'12',name:'Tiere in Deutschland',c:'--c3',sub:'Arbeitsbuch blz. 24 · opdracht 12 · richtig oder falsch?',
  rules:[['Lees eerst de tekst in je Arbeitsbuch','Zoek bij elke zin het stukje in de tekst waar het over gaat',''],
   ['Let op getallen en wie het is','900 Zoos of 900 Tiere? München of heel Deutschland?','Eén woord anders maakt de zin falsch'],
   ['nicht en kein draaien het om','modern ↔ nicht modern','']]},
 {id:'p1',par:'ab',nr:'1',name:'Über Tiere sprechen: antworten',c:'--c1',sub:'Arbeitsbuch blz. 26 · opdracht 1 · hele zinnen',
  rules:[['Antwoord in een hele zin','Hast du …? → Ja, ich habe … / Nein, ich habe kein …','Neem de woorden uit de vraag over'],
   ['du in de vraag wordt ich in je antwoord','hast → habe · magst → mag',''],
   ['geen = kein, keine, keinen','der → keinen · die/meervoud → keine · das → kein','Ich habe keinen Hund. Ich mag keine Spinnen.']]},
 {id:'p2',par:'ab',nr:'2',name:'Über Tiere sprechen: fragen',c:'--c2',sub:'Arbeitsbuch blz. 26 · opdracht 2 · de vraag bij het antwoord',
  rules:[['Kijk naar het antwoord','Er heißt Cox → je vroeg naar de naam: Wie heißt …?',''],
   ['W-vraag','vraagwoord – werkwoord – onderwerp','Wie heißt dein Hund? · Wie alt ist dein Hund?'],
   ['Ja/nee-vraag','werkwoord vooraan','Hast du ein Haustier? · Magst du Katzen?']]},
 {id:'p3',par:'ab',nr:'3',name:'Berichten: Siri',c:'--c6',sub:'Arbeitsbuch blz. 26 · opdracht 3 · zinnen voor je schrift',
  rules:[['die Katze = sie, der Hund = er','Over een die-woord zeg je sie, over een der-woord er','Die Katze heißt Mux. Sie ist schwarz.'],
   ['Leeftijd: sein, niet haben','Sie ist 13 Jahre alt.','Niet: Sie hat 13 Jahre.']]},
 {id:'w19',par:'ab',nr:'19',name:'Woorden blz. 19',c:'--c5',sub:'Deine Wörter 2 + bijlage Wörter E2 · Duits-Nederlands en Nederlands-Duits',
  rules:[['Leer zelfstandige naamwoorden mét der, die of das','der Kuli, die Schere, das Heft','']].concat(AB19.map(v=>[v[0],v[1],v[2]?'meervoud: '+v[2]:'']))},
 {id:'w27',par:'ab',nr:'27',name:'Woorden blz. 27',c:'--c4',sub:'Deine Wörter 3 + bijlage Wörter E3 · Duits-Nederlands en Nederlands-Duits',
  rules:[['Leer zelfstandige naamwoorden mét der, die of das, en het meervoud','die Stadt, die Städte','']].concat(AB27.map(v=>[v[0],v[1],v[2]?'meervoud: '+v[2]:'']))},
 {id:'o6',par:'ws',nr:'6',name:'Verben mit Akkusativ',c:'--c4',sub:'Opdracht 6 · zinnen aanvullen met het goede werkwoord',
  rules:[['Kies uit','lerne – lese – hasse – habe – kenne – schreibe – höre','Elk werkwoord gebruik je één keer.'],
   ['Kijk naar het woord erachter','wat doe je met <b>Bücher</b>, <b>CDs</b>, <b>Texte</b>?',''],
   ['Kleurhulp',`Het ${AK('blauwe stuk')} is het lijdend voorwerp (Akkusativ)`,'Wat heb, lees of hoor je?']]},
 {id:'o7',par:'ws',nr:'7',name:'Verbformen',c:'--c2',sub:'Opdracht 7 · rijtjes: kennen, schreiben, lesen, haben, mögen',
  rules:[['Regelmatig','stam + <b>e, st, t, en, t, en</b>','kennen: ich kenne, du kennst, er kennt …'],
   ['Sterk (lesen, fressen)','bij du en er wordt de e een ie of i','du liest, er frisst'],
   ['haben en mögen zijn onregelmatig','du <b>hast</b>, er <b>hat</b> · ich <b>mag</b>, du <b>magst</b>, er <b>mag</b>',''],
   ['Ook nodig voor opdracht 8','fressen → du/er <b>frisst</b> · können → ich/er <b>kann</b> · heißen → du <b>heißt</b>','']].concat(rijRegels)},
 {id:'o8',par:'ws',nr:'8a',name:'Fragen',c:'--c3',sub:'Opdracht 8a · vragen bouwen',
  rules:[[WRULE,'Wo leben die Pinguine?',''],[JRULE,'Hast du ein Pferd?',''],
   ['Twee werkwoorden','het tweede werkwoord gaat helemaal naar achteren','Kann dein Papagei sprechen?'],
   ['Zoek eerst het onderwerp','daar hoort de vorm van het werkwoord bij','dein Hund = er → macht · die Pinguine = sie (mv) → leben']]},
 {id:'akk',par:'ex',nr:'A',name:'Akkusativ: den, einen, keinen',c:'--c1',sub:'Extra bij opdracht 6 en 8',
  rules:[['Het lijdend voorwerp staat in de Akkusativ','Wat heb ik? → het lijdend voorwerp',`Ich habe ${AK('einen Hund')}.`],
   ['Alleen der-woorden veranderen','der → <b>den</b> · ein → <b>einen</b> · kein → <b>keinen</b>',''],
   ['die, das en meervoud blijven hetzelfde','die / eine / keine · das / ein / kein · meervoud: die / keine','']]},
 {id:'woord',par:'ex',nr:'W',name:'Woordjes: Haustiere',c:'--c6',sub:'Woordjes van blz. 32 · betekenis en der, die of das',
  rules:[['Leer zelfstandige naamwoorden altijd mét der, die of das','Die heb je nodig voor de Akkusativ','der Hund → einen Hund']].concat(VOC.map(v=>[v[0],v[1],v[2]?'meervoud: '+v[2]:'']))}
];

const SNAP={
 o7:[['Waarom zeg je du liest en niet du liesst?','De stam van lesen is <b>les</b>. Die eindigt al op een s-klank. Bij du komt er normaal <b>-st</b> achter, maar twee s-en achter elkaar klinken als één. Daarom alleen <b>-t</b>: du liest. Zo ook: du heißt, du frisst.'],
  ['Waarom ich mag zonder -e?','mögen is een <b>modaal werkwoord</b>, net als können (ich kann). Die krijgen bij ich en er geen uitgang: ich mag, er mag, ich kann, er kann.']],
 o8:[['Waarom staat het werkwoord vooraan bij een ja/nee-vraag?','In het Nederlands doe je het ook: "Heb jij een paard?" In het Duits precies zo: <b>Hast du ein Pferd?</b> Bij een W-vraag staat het vraagwoord ervoor: <b>Wo</b> leben die Pinguine?']],
 akk:[['Waarom verandert alleen der?','Bij die, das en meervoud zien de 1e naamval en de Akkusativ er hetzelfde uit. Alleen het mannelijke woord krijgt een herkenbare -n: <b>der → den</b>, <b>ein → einen</b>. Ezelsbrug: hij (der) krijgt er een n bij.']]
};
function snapHtml(id){return (SNAP[id]||[]).map(x=>`<details class="snap"><summary>${x[0]}</summary><div>${x[1]}</div></details>`).join('')}

/* ---------- vragen ---------- */
const Q=[];
/* 6: zinnen aanvullen (meerkeuze uit de 7 werkwoorden van het werkblad) */
[
 ['Ich ___ '+A('keine Haustiere')+'.','habe','Ik heb geen huisdieren.'],
 ['… und ich ___ '+A('keine Menschen mit Haustieren')+'.','kenne','… en ik ken geen mensen met huisdieren.'],
 ['Ich ___ '+A('Hunde und Katzen')+', …','hasse','Ik haat honden en katten, … Het woordje „aber” (maar) in de volgende zin laat zien dat dit iets negatiefs is.'],
 ['… aber ich ___ gerne '+A('Bücher')+' …','lese','… maar ik lees graag boeken.'],
 ['… und ___ sehr gern '+A('CDs')+'.','höre','… en luister heel graag naar cd’s. „ich” staat er niet nog een keer: und höre.'],
 ['Ich ___ immer '+A('meine Deutschvokabeln')+' …','lerne','Ik leer altijd mijn Duitse woordjes …'],
 ['… und ___ '+A('Texte')+'.','schreibe','… en schrijf teksten.'],
].forEach(([zin,ans,nl],i)=>Q.push({id:'g'+(i+1),o:'o6',nr:'Opdracht 6 · zin '+(i+1),
  q:`Kies het passende werkwoord.${DE(zin)}${KH}`,a:ans,tv:`Vul het passende werkwoord in: lerne, lese, hasse, habe, kenne, schreibe of höre.${DE(zin)}`,
  f:BANK.filter(w=>w!==ans).map(w=>[w,`„${w}” betekent ${MEAN[w]}. Dat past hier niet.`]),
  u:`${DE(kleur(zin.replace('___','<b>'+ans+'</b>')))}<span class="nl">${nl}</span>`,
  v:{q:`Wat doe je met het blauwe stuk? Kies het werkwoord dat past.${DE(kleur(zin))}`}}));

/* 7: rijtjes bouwen */
Object.keys(VERBS).forEach(v=>Q.push({id:'r-'+v,o:'o7',nr:'Opdracht 7 · rijtje',type:'rij',verb:v,a:VERBS[v].f.join(', '),tvIn:PERS,tvA:VERBS[v].f,
  tv:`Schrijf het rijtje van <b>${v}</b> <span class="nl">(${VERBS[v].nl})</span>.`,
  q:`Maak het rijtje van <b>${v}</b> <span class="nl">(${VERBS[v].nl})</span>. Zet de vormen op de goede plek.`}));
/* 7: losse vormen; variant = omgekeerd: bij welk persoon hoort deze vorm? */
[
 ['du','lesen','liest',[['lest','lest hoort bij ihr. Bij du wordt de e een ie: du liest.'],['lesst','De stam eindigt al op s. Dan komt er alleen -t achter: du liest.']]],
 ['er','haben','hat',[['habt','habt hoort bij ihr.'],['habet','Die vorm bestaat niet. Bij er valt de b weg: er hat.']]],
 ['ich','mögen','mag',[['möge','mögen is onregelmatig: ich mag, met een a en zonder -e.'],['mögst','mögst bestaat niet. Bij ich: ich mag.']]],
 ['du','mögen','magst',[['mögst','Bij du blijft de a: du magst.'],['mögt','mögt hoort bij ihr.']]],
 ['ihr','haben','habt',[['hat','hat hoort bij er/sie/es.'],['habst','Die vorm bestaat niet. Bij ihr: stam hab + t = habt.']]],
 ['er','fressen','frisst',[['fresst','fressen is sterk: bij du en er wordt de e een i: er frisst.'],['fressen','fressen hoort bij wir en sie (meervoud).']]],
 ['er','können','kann',[['könnt','könnt hoort bij ihr.'],['kannt','Bij können hebben ich en er dezelfde vorm, zonder -t: er kann.']]],
 ['du','heißen','heißt',[['heißst','De stam eindigt op ß. Dan komt er alleen -t achter: du heißt.'],['heiße','heiße hoort bij ich.']]],
 ['er','kennen','kennt',[['kennst','kennst hoort bij du.'],['kenne','kenne hoort bij ich.']]],
 ['du','schreiben','schreibst',[['schreibt','schreibt hoort bij er/sie/es of ihr.'],['schreiben','schreiben hoort bij wir en sie (meervoud).']]],
].forEach(([p,inf,ans,f],i)=>{const fs=VF[inf],lab=p==='er'?'er/sie/es':p;
  const andere=PERS.filter((x,j)=>fs[j]!==ans).slice(0,3).map(x=>[x,`Bij ${x} is het: ${x.split('/')[0]} ${fs[PERS.indexOf(x)]}.`]);
  Q.push({id:'v'+(i+1),o:'o7',nr:'Opdracht 7 · vorm',q:`Welke vorm hoort bij <b>${p}</b> + <b>${inf}</b>?`,a:ans,f,u:`${p} <b>${ans}</b>`,
    v:{q:`Bij welk persoon hoort <b>${ans}</b> (van ${inf})?`,a:lab,f:andere}})});

/* 8a: vragen bouwen in twee stappen */
[
 ['einen Kanarienvogel / haben / du / ?','haben','du',['hast',['habst','haben is onregelmatig: bij du valt de b weg: du hast.'],['hat','hat hoort bij er/sie/es.'],['habe','habe hoort bij ich.']],['hast','du','einen','Kanarienvogel'],'j','Hast du '+A('einen Kanarienvogel')+'?','Heb jij een kanarie?'],
 ['dein Hund / machen / viel Arbeit / ?','machen','dein Hund',['macht',['machst','machst hoort bij du. „dein Hund” is een hij (er): macht.'],['machen','machen hoort bij wir of sie (meervoud).']],['macht','dein','Hund','viel','Arbeit'],'j','Macht dein Hund '+A('viel Arbeit')+'?','Geeft jouw hond veel werk?'],
 ['Peters Katze / heißen / wie / ?','heißen','Peters Katze',['heißt',['heißst','De stam eindigt op ß. Dan alleen -t: heißt.'],['heißen','heißen hoort bij meervoud. „Peters Katze” is één kat (sie).']],['wie','heißt','Peters','Katze'],'w','Wie heißt Peters Katze?','Hoe heet de kat van Peter?'],
 ['die Pinguine / leben / wo / ?','leben','die Pinguine',['leben',['lebt','lebt hoort bij er of ihr. „die Pinguine” is meervoud (sie): leben.'],['lebst','lebst hoort bij du.']],['wo','leben','die','Pinguine'],'w','Wo leben die Pinguine?','Waar leven de pinguïns?'],
 ['ein Pferd / haben / du / ?','haben','du',['hast',['habst','Bij du valt de b weg: du hast.'],['hat','hat hoort bij er/sie/es.']],['hast','du','ein','Pferd'],'j','Hast du '+A('ein Pferd')+'?','Heb jij een paard?'],
 ['dein Papagei / können / sprechen / ?','können','dein Papagei',['kann',['könnt','könnt hoort bij ihr.'],['kannst','kannst hoort bij du. „dein Papagei” is een hij (er): kann.']],['kann','dein','Papagei','sprechen'],'k','Kann dein Papagei sprechen?','Kan jouw papegaai praten?'],
 ['ihr / haben / einen Hund / ?','haben','ihr',['habt',['hat','hat hoort bij er/sie/es.'],['hast','hast hoort bij du.']],['habt','ihr','einen','Hund'],'j','Habt ihr '+A('einen Hund')+'?','Hebben jullie een hond?'],
 ['Eisbären / leben / wo / ?','leben','Eisbären',['leben',['lebt','„Eisbären” is meervoud (sie): leben.'],['lebe','lebe hoort bij ich.']],['wo','leben','Eisbären'],'w','Wo leben Eisbären?','Waar leven ijsberen?'],
 ['deine Katze / fressen / Mäuse / ?','fressen','deine Katze',['frisst',['fresst','fressen is sterk: bij du en er/sie/es wordt de e een i: frisst.'],['fressen','„deine Katze” is één kat (sie): frisst.']],['frisst','deine','Katze','Mäuse'],'j','Frisst deine Katze '+A('Mäuse')+'?','Eet jouw kat muizen?'],
 ['mögen / du / Ratten / ?','mögen','du',['magst',['mögst','mögen is onregelmatig: du magst, met een a.'],['mag','mag hoort bij ich en er/sie/es.']],['magst','du','Ratten'],'j','Magst du '+A('Ratten')+'?','Vind jij ratten leuk?'],
].forEach(([prompt,inf,subj,vopts,words,kind,model,nl],i)=>Q.push({id:'f'+(i+1),o:'o8',nr:'Opdracht 8a · '+(i+1),type:'zin',
  q:`Schrijf de vraag.<div class="prompt">${prompt}</div>`,
  denk:kind==='w'?WRULE+'. Zoek eerst het onderwerp: daar hoort de vorm van het werkwoord bij.':JRULE+'. Zoek eerst het onderwerp: daar hoort de vorm van het werkwoord bij.',
  inf,subj,vopts:[[vopts[0]],...vopts.slice(1)],words,kind,model,nl,a:kaal(model)}));

/* Akkusativ (extra) */
[
 ['Ich habe ___ '+A('Hund')+'.','der Hund','einen',[['ein','Hund is een der-woord. In de Akkusativ wordt ein → einen.'],['eine','eine is voor die-woorden. Het is der Hund.']],'der Hund → einen Hund (lijdend voorwerp).'],
 ['Hast du ___ '+A('Pferd')+'?','das Pferd','ein',[['einen','Alleen der-woorden krijgen -en. Bij das blijft het ein.'],['eine','Het is das Pferd, geen die-woord.']],'das Pferd → ein Pferd. Bij das verandert er niets.'],
 ['Ich mag ___ '+A('Katze')+'.','die Katze','die',[['den','den is voor der-woorden. Het is die Katze.'],['der','Bij die-woorden blijft het in de Akkusativ die.']],'die Katze → die Katze. Bij die verandert er niets.'],
 ['Ich kenne ___ '+A('Papagei')+'.','der Papagei','den',[['der','In de Akkusativ wordt der → den.'],['das','Het is der Papagei, geen das-woord.']],'der Papagei → den Papagei.'],
 ['Ich habe ___ '+A('Haustiere')+'.','geen, meervoud','keine',[['keinen','Meervoud krijgt keine, net als die.'],['kein','kein is voor das-woorden (of der/das in de 1e naamval).']],'Meervoud: keine Haustiere.'],
 ['Wir haben ___ '+A('Kanarienvogel')+'.','geen, der Kanarienvogel','keinen',[['kein','der-woord in de Akkusativ: kein → keinen, net als ein → einen.'],['keine','keine is voor die-woorden en meervoud.']],'der Kanarienvogel → keinen Kanarienvogel.'],
 ['Er hat ___ '+A('Maus')+'.','eine, die Maus','eine',[['einen','einen is voor der-woorden. Het is die Maus.'],['ein','ein is voor das-woorden.']],'die Maus → eine Maus. Bij die verandert er niets.'],
].forEach(([zin,hint,ans,f,uitleg],i)=>Q.push({id:'a'+(i+1),o:'akk',nr:'Extra',
  q:`Vul in.${DE(zin)}<div class="nl">(${hint})</div>${KH}`,a:ans,f,u:`${DE(kleur(zin.replace('___','<b>'+ans+'</b>')))}${uitleg}`,
  v:{q:`Het blauwe stuk is het lijdend voorwerp. Welk woordje komt op de puntjes?${DE(kleur(zin))}<div class="nl">(${hint})</div>`}}));
Q.push({id:'a8',o:'akk',nr:'Extra',q:`Welk deel van de zin is het lijdend voorwerp (Akkusativ)?${DE('Ich lese gerne Bücher.')}`,a:'Bücher',
  f:[['Ich','Ich is het onderwerp: wie leest er? Dat is de Nominativ.'],['lese','lese is het werkwoord.'],['gerne','gerne (graag) zegt hoe je het doet. Het is geen lijdend voorwerp.']],
  u:`Wat lees ik? ${AK('Bücher')}. Dat is het lijdend voorwerp: de Akkusativ.`,
  v:{q:`Ich lese gerne Bücher. Wat lees ik? Welk woord is dus de Akkusativ?`}});

/* woordjes: Nederlands → Duits (variant: Duits → Nederlands) en der/die/das */
VOC.forEach((v,i)=>{
  const pool=shuf(VOC.filter(w=>w!==v&&isN(w)===isN(v))).slice(0,3);
  Q.push({id:'w'+i,o:'woord',nr:'Woordjes',q:`Wat is het Duits voor <b>${v[1]}</b>?`,a:v[0],
    f:pool.map(o=>[o[0],`${o[0]} betekent ${o[1]}.`]),u:`${v[1]} = <b>${v[0]}</b>${v[2]?` (meervoud: ${v[2]})`:''}`,
    v:{q:`Wat betekent <b>${v[0]}</b>?`,a:v[1],f:pool.map(o=>[o[1],`Dat is ${o[0]}.`])}});
});
VOC.filter(isN).forEach((v,i)=>{
  const [art,...rest]=v[0].split(' '),n=rest.join(' '),andere=['der','die','das'].filter(a=>a!==art);
  Q.push({id:'l'+i,o:'woord',nr:'Woordjes · lidwoord',q:`der, die of das?${DE('___ '+n)}<div class="nl">(${v[1]})</div>`,a:art,
    f:andere.map(a=>[a,`Het is ${art} ${n}. Leer het lidwoord altijd mee met het woord.`]),
    u:`<b>${v[0]}</b> = ${v[1]}. In de Akkusativ: ${art==='der'?'den / einen '+n:art==='die'?'die / eine '+n:'das / ein '+n}.`,
    v:{q:`Hoe zeg je <b>${v[1]}</b> in het Duits, met het goede lidwoord?`,a:v[0],f:andere.map(a=>[a+' '+n,`Het is ${art} ${n}.`])}});
});

/* AB blz. 19 en 27: Nederlands → Duits (variant: Duits → Nederlands), afleiders van dezelfde soort uit dezelfde bladzijde */
const zinOf=v=>/[.!?]$/.test(v[0]);
const soort=v=>isN(v)?'n':zinOf(v)?'z':'w';
[['w19','b',AB19,'blz. 19'],['w27','c',AB27,'blz. 27']].forEach(([o,p,L,bl])=>L.forEach((v,i)=>{
  const pool=shuf(L.filter(w=>w!==v&&soort(w)===soort(v)&&w[1]!==v[1]&&w[0]!==v[0])).slice(0,3);
  Q.push({id:p+i,o,nr:'Woorden '+bl,q:`Wat is het Duits voor <b>${v[1]}</b>?`,a:v[0],
    f:pool.map(w=>[w[0],`${w[0]} betekent ${w[1]}.`]),u:`${v[1]} = <b>${v[0]}</b>${v[2]?` (meervoud: ${v[2]})`:''}`,
    v:{q:`Wat betekent <b>${v[0]}</b>?`,a:v[1],f:pool.map(w=>[w[1],`Dat is ${w[0]}.`])}});
}));
/* AB blz. 26 opdracht 1: antwoorden in hele zinnen. Haar eigen antwoord schrijft ze in haar boek; hier: welke hele zin is goed? */
[
 ['Hast du ein Haustier?','Ja, ich habe ein Haustier.',[['Ja, ich habe einen Haustier.','Het is das Haustier. Bij das blijft het ein, ook als lijdend voorwerp.'],['Ja, ich hast ein Haustier.','hast hoort bij du. Bij ich is het habe.'],['Ja, du hast ein Haustier.','In je antwoord praat je over jezelf: ich habe.']],
   'Nein, ich habe kein Haustier.',[['Nein, ich habe nicht ein Haustier.','Geen + zelfstandig naamwoord is kein: ich habe kein Haustier.'],['Nein, ich habe keinen Haustier.','keinen is voor der-woorden. Het is das Haustier: kein.'],['Nein, ich habe keine Haustier.','keine is voor die-woorden en meervoud. Het is das Haustier: kein.']]],
 ['Hast du eine Katze?','Nein, ich habe keine Katze.',[['Nein, ich habe keinen Katze.','keinen is voor der-woorden. Het is die Katze: keine.'],['Nein, ich habe nicht eine Katze.','Geen + zelfstandig naamwoord is kein(e): keine Katze.'],['Nein, ich habe kein Katze.','Het is die Katze: keine, net als eine.']],
   'Ja, ich habe eine Katze.',[['Ja, ich habe einen Katze.','einen is voor der-woorden. Het is die Katze: eine.'],['Ja, ich habe ein Katze.','Het is die Katze: eine.'],['Ja, ich hat eine Katze.','hat hoort bij er/sie/es. Bij ich is het habe.']]],
 ['Was ist dein Lieblingstier?','Mein Lieblingstier ist der Hund.',[['Meine Lieblingstier ist der Hund.','Het is das Lieblingstier: mein, zonder e.'],['Mein Lieblingstier bin der Hund.','bin hoort bij ich. Bij mein Lieblingstier (es) is het ist.'],['Mein Lieblingstier ist den Hund.','Na ist verandert der niet in den. Ist heeft geen lijdend voorwerp.']],
   'Mein Lieblingstier ist die Katze.',[['Meine Lieblingstier ist die Katze.','Het is das Lieblingstier: mein, zonder e.'],['Mein Lieblingstier sind die Katze.','sind is meervoud. Eén lievelingsdier: ist.'],['Mein Lieblingstier ist der Katze.','Het is die Katze.']]],
 ['Magst du Spinnen?','Nein, ich mag keine Spinnen.',[['Nein, ich magst keine Spinnen.','magst hoort bij du. Bij ich is het mag.'],['Nein, ich möge keine Spinnen.','mögen is onregelmatig: ich mag.'],['Nein, ich mag keinen Spinnen.','Spinnen is meervoud: keine.']],
   'Ja, ich mag Spinnen.',[['Ja, ich mage Spinnen.','Bij ich is het mag, zonder e.'],['Ja, ich magst Spinnen.','magst hoort bij du.'],['Ja, ich mögen Spinnen.','mögen hoort bij wir of sie (meervoud). Bij ich: mag.']]],
 ['Mag dein Freund / deine Freundin Hunde?','Ja, meine Freundin mag Hunde.',[['Ja, mein Freundin mag Hunde.','Het is die Freundin: meine.'],['Ja, meine Freundin magt Hunde.','mögen is onregelmatig: er/sie mag, zonder t.'],['Ja, meine Freundin magst Hunde.','magst hoort bij du. Meine Freundin is sie: mag.']],
   'Nein, mein Freund mag keine Hunde.',[['Nein, meine Freund mag keine Hunde.','Het is der Freund: mein, zonder e.'],['Nein, mein Freund mag keinen Hunde.','Hunde is meervoud: keine.'],['Nein, mein Freund magst keine Hunde.','magst hoort bij du. Mein Freund is er: mag.']]],
].forEach(([vr,a,f,a2,f2],i)=>Q.push({id:'p1-'+(i+1),o:'p1',nr:'Opdracht 1 · zin '+(i+1),
  q:`Welk antwoord is een goede hele zin?${DE(vr)}`,a,f,tv:`Beantwoord de vraag in een hele zin. Ja of nee mag allebei.${DE(vr)}`,tvAlt:[a2],u:`${DE(a)}Schrijf in je boek je eigen antwoord, ook als een hele zin. Ja of nee mag allebei.`,
  v:{q:`Welk antwoord is een goede hele zin?${DE(vr)}`,a:a2,f:f2}}));

/* AB blz. 26 opdracht 2: de vraag bij het antwoord bouwen (zelfde vraagsoort als opdracht 8a) */
[
 ['Ich habe einen Hund.','haben','du',['hast',['habst','haben is onregelmatig: bij du valt de b weg: du hast.'],['hat','hat hoort bij er/sie/es.']],['hast','du','ein','Haustier'],'j','Hast du '+A('ein Haustier')+'?','Heb jij een huisdier? (Hast du einen Hund? is ook goed.)'],
 ['Er heißt Cox.','heißen','dein Hund',['heißt',['heißst','De stam eindigt op ß. Dan alleen -t: heißt.'],['heißen','heißen hoort bij meervoud. „dein Hund” is één hond (er).']],['wie','heißt','dein','Hund'],'w','Wie heißt dein Hund?','Hoe heet jouw hond?'],
 ['Er ist sechs Jahre alt.','sein','dein Hund',['ist',['bist','bist hoort bij du. „dein Hund” is er: ist.'],['sind','sind hoort bij wir of sie (meervoud).']],['wie alt','ist','dein','Hund'],'w','Wie alt ist dein Hund?','Hoe oud is jouw hond?'],
 ['Mein Lieblingstier heißt Cox.','heißen','dein Lieblingstier',['heißt',['heißst','De stam eindigt op ß. Dan alleen -t: heißt.'],['heißen','heißen hoort bij meervoud. „dein Lieblingstier” is één dier (es): heißt.']],['wie','heißt','dein','Lieblingstier'],'w','Wie heißt dein Lieblingstier?','Hoe heet jouw lievelingsdier?'],
 ['Nein, ich mag keine Katzen.','mögen','du',['magst',['mögst','mögen is onregelmatig: du magst, met een a.'],['mag','mag hoort bij ich en er/sie/es.']],['magst','du','Katzen'],'j','Magst du '+A('Katzen')+'?','Vind jij katten leuk?'],
].forEach(([antw,inf,subj,vopts,words,kind,model,nl],i)=>Q.push({id:'p2-'+(i+1),o:'p2',nr:'Opdracht 2 · zin '+(i+1),type:'zin',
  q:`Schrijf de vraag bij dit antwoord.<div class="prompt">… ? → ${antw}</div>`,
  denk:(kind==='w'?WRULE:JRULE)+'. Kijk naar het antwoord: waar vroeg je naar? Zoek dan het onderwerp: daar hoort de vorm van het werkwoord bij.',
  inf,subj,vopts:[[vopts[0]],...vopts.slice(1)],words,kind,model,nl,a:kaal(model),tvAlt:i===0?['Hast du einen Hund?']:undefined}));

/* AB blz. 26 opdracht 3: zinnen over Siri; daarna schrijft ze de tekst in haar schrift */
const SIRI='Das ist Siri. Sie ist in Klasse 7. Sie ist dreizehn Jahre alt. Siris Lieblingstier ist die Katze. Sie mag Hunde und Mäuse. Die Katze heißt Mux. Sie ist drei Jahre alt, schwarz und sehr lieb. Der Hund heißt Tasso. Er ist fünf Jahre alt, braun und groß.';
[
 ['Klasse 7','Siri zit in klas 7.','Sie ist in Klasse 7.',[['Sie bin in Klasse 7.','bin hoort bij ich. Bij sie (Siri): ist.'],['Sie hat in Klasse 7.','Je bent in een klas: sein, dus ist.'],['Sie sind in Klasse 7.','sind is meervoud of Sie (beleefd). Siri is één persoon: ist.']]],
 ['13 Jahre','Siri is 13 jaar.','Sie ist dreizehn Jahre alt.',[['Sie hat dreizehn Jahre.','Leeftijd gaat met sein: Sie ist … Jahre alt.'],['Sie ist dreizehn Jahr alt.','Bij meer dan één jaar: Jahre.'],['Sie sind dreizehn Jahre alt.','Siri is één persoon: ist.']]],
 ['Lieblingstier: Katze','Siri’s lievelingsdier is de kat.','Siris Lieblingstier ist die Katze.',[['Siris Lieblingstier ist der Katze.','Het is die Katze.'],['Siris Lieblingstier sind die Katze.','Eén lievelingsdier: ist.'],['Siris Lieblingstier ist den Katze.','Na ist geen den. En het is die Katze.']]],
 ['mag Hunde und Mäuse','Siri vindt honden en muizen leuk.','Sie mag Hunde und Mäuse.',[['Sie magt Hunde und Mäuse.','mögen is onregelmatig: sie mag, zonder t.'],['Sie magst Hunde und Mäuse.','magst hoort bij du.'],['Sie mag Hunde und Mause.','Eén Maus, meer Mäuse (met ä).']]],
 ['Katze: Mux','De kat heet Mux.','Die Katze heißt Mux.',[['Der Katze heißt Mux.','Het is die Katze.'],['Die Katze heiße Mux.','heiße hoort bij ich. Die Katze (sie): heißt.'],['Die Katze heißen Mux.','heißen is meervoud. Eén kat: heißt.']]],
 ['3 Jahre, schwarz, sehr lieb','De kat is 3 jaar, zwart en heel lief.','Sie ist drei Jahre alt, schwarz und sehr lieb.',[['Er ist drei Jahre alt, schwarz und sehr lieb.','Het gaat over die Katze. Een die-woord wordt sie, niet er.'],['Sie hat drei Jahre, schwarz und sehr lieb.','Leeftijd gaat met sein: Sie ist drei Jahre alt.'],['Es ist drei Jahre alt, schwarz und sehr lieb.','es is voor das-woorden. Die Katze → sie.']]],
 ['Hund: Tasso','De hond heet Tasso.','Der Hund heißt Tasso.',[['Die Hund heißt Tasso.','Het is der Hund.'],['Das Hund heißt Tasso.','Het is der Hund.'],['Der Hund heißst Tasso.','De stam eindigt op ß: alleen -t, heißt.']]],
 ['5 Jahre, braun, groß','De hond is 5 jaar, bruin en groot.','Er ist fünf Jahre alt, braun und groß.',[['Sie ist fünf Jahre alt, braun und groß.','Het gaat over der Hund. Een der-woord wordt er.'],['Er hat fünf Jahre, braun und groß.','Leeftijd gaat met sein: Er ist fünf Jahre alt.'],['Es ist fünf Jahre alt, braun und groß.','es is voor das-woorden. Der Hund → er.']]],
].forEach(([info,nl,a,f],i,L)=>Q.push({id:'p3-'+(i+1),o:'p3',nr:'Opdracht 3 · zin '+(i+1),
  q:`Siri: <b>${info}</b>. Welke zin is goed?`,a,f,tv:`Schrijf een hele Duitse zin over Siri: <b>${info}</b>.<div class="nl">(${nl})</div>`,
  u:`${DE(a)}`+(i===L.length-1?`<p><b>Zo kan je hele tekst in je schrift eruitzien:</b></p>${DE(SIRI)}<p class="sub">Schrijf hem in je schrift, met je eigen zinnen mag ook.</p>`:''),
  v:{q:`${nl} Welke Duitse zin is goed?`}}));

/* AB blz. 24 opdracht 12: richtig oder falsch. De tekst staat in haar Arbeitsbuch; hier alleen de zinnen en uitleg in eigen woorden. */
[
 ['Im Zoo in München gibt es 900 Tiere.','Er zijn 900 dieren in de dierentuin van München.','falsch','In de tekst gaat het getal 900 over heel Duitsland: daar zijn bijna 900 dierentuinen (Zoos), geen 900 dieren in München.'],
 ['Der Zoo in Berlin hat ungefähr 15 000 Tiere.','De dierentuin in Berlijn heeft ongeveer 15.000 dieren.','richtig','De dierentuinen in München, Hamburg en Berlijn zijn heel groot en hebben ongeveer 15.000 dieren. Berlijn hoort daarbij.'],
 ['Die Zoos haben auch Tiere aus der Arktis.','De dierentuinen hebben ook dieren uit het noordpoolgebied.','richtig','Er komen ook dieren uit de Arktis en de Antarktis, bijvoorbeeld de ijsberen in Berlijn.'],
 ['Die Delfine leben in einem Swimmingpool.','De dolfijnen leven in een zwembad.','richtig','De dolfijnen in Duisburg leven in een zwembad (Swimming-Pool) met drie miljoen liter water.'],
 ['Der Zoo in Frankfurt ist nicht modern.','De dierentuin in Frankfurt is niet modern.','falsch','De dierentuin in Frankfurt is wel oud (meer dan 150 jaar), maar juist heel modern. Het apenhuis is helemaal nieuw.'],
].forEach(([de,nl,a,uit],i)=>Q.push({id:'z12-'+(i+1),o:'o12',nr:'Opdracht 12 · zin '+(i+1),
  q:`Lees de tekst „Zoos in Deutschland” in je Arbeitsbuch (blz. 24). Klopt deze zin?${DE(de)}`,a,
  f:[[a==='richtig'?'falsch':'richtig',uit]],u:`<b>${a}</b>. ${uit}`,
  v:{q:`Klopt dit volgens de tekst „Zoos in Deutschland” (AB blz. 24)?<div class="nl">${nl}</div>`}}));

/* ---------- eigen vraagsoorten ---------- */
/* rij: tik de vormen in de goede volgorde in de vakjes; er zitten vormen bij die niet bestaan */
function drawRij(q,it,box,api){
  const v=VERBS[q.verb]||VERBS2[q.verb];
  const S=it._r=it._r||{pool:shuf([...v.f,...v.x].map((w,i)=>({w,i}))),slots:Array(6).fill(null),done:false};
  const next=S.slots.indexOf(null);
  box.innerHTML=`<div class="card stack"><div class="rij">${PERS.map((p,j)=>{const c=S.slots[j];let cls=c?'filled':'';
      if(j===next&&!S.done)cls+=' next';if(S.done)cls+=S.res[j]?' ok':' bad';
      return `<span class="p">${p}</span><button class="slot ${cls}" data-j="${j}" ${S.done||!c?'disabled':''}>${c?c.w:'&nbsp;'}${S.done&&!S.res[j]?`<small>→ ${v.f[j]}</small>`:''}</button>`}).join('')}</div></div>
    ${S.done?'':`<div class="pool">${S.pool.map((c,k)=>`<button class="chip" data-k="${k}" ${c.used?'disabled':''}>${c.w}</button>`).join('')}</div>
    <p class="sub" style="font-size:.9rem">Tik op een vorm om hem in te vullen. Tik op een ingevuld vakje om hem terug te zetten.${v.x.length?' Let op: er zitten vormen bij die niet bestaan.':''}</p>
    <button class="btn" id="rijok" ${next===-1?'':'disabled'}>Controleer</button>`}`;
  if(S.done)return;
  box.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{const c=S.pool[+b.dataset.k],j=S.slots.indexOf(null);if(j<0)return;S.slots[j]=c;c.used=true;api.redraw()});
  box.querySelectorAll('.slot[data-j]').forEach(b=>b.onclick=()=>{const j=+b.dataset.j,c=S.slots[j];if(!c)return;c.used=false;S.slots[j]=null;api.redraw()});
  box.querySelector('#rijok').onclick=()=>{S.res=S.slots.map((c,j)=>c.w===v.f[j]);S.done=true;const ok=S.res.every(Boolean);api.redraw();
    api.finish(ok,ok?`<div class="fb ok"><div class="head">Goed!</div><div class="why">${v.uitleg}</div></div>`
      :`<div class="fb bad"><div class="head">Niet goed</div><div><b>Dit ging er mis:</b></div><div class="mistake">De rode vakjes kloppen niet. Het goede antwoord staat erachter.</div><div class="why">${v.uitleg}</div></div>`,S.slots.map(c=>c.w).join(', '))};
}
/* zin: stap 1 de vorm van het werkwoord kiezen, stap 2 de woorden in de goede volgorde zetten */
function drawZin(q,it,box,api){
  const S=it._z=it._z||{fase:'verb',ord:shuf(q.vopts.map((x,k)=>k))};
  const vw=q.vopts[0][0];
  let h='';
  const vbtn=S.ord.map(k=>{let c='';if(S.fase!=='verb')c=k===0?'ok':k===S.vk?'bad':'dim';
    return `<button class="opt ${c}" data-v="${k}" ${S.fase!=='verb'?'disabled':''}>${q.vopts[k][0]}</button>`}).join('');
  h+=`<span class="tag">Stap 1 · het onderwerp is ${q.subj}</span><p>Welke vorm van <b>${q.inf}</b> hoort bij <b>${q.subj}</b>?</p><div class="opts">${vbtn}</div>`;
  if(S.fase!=='verb'){const ok=S.vk===0;
    h+=`<div class="fb ${ok?'ok':'bad'}"><div class="head">${ok?'Goed!':'Niet goed'}</div>${ok?'':`<div class="mistake">${q.vopts[S.vk][1]}</div>`}<div>${q.subj} → <b>${vw}</b></div></div>`;
    if(S.fase==='verbfb')h+=`<button class="btn" id="tobuild">Stap 2: de vraag bouwen</button>`;}
  if(S.fase==='build'||S.fase==='klaar'){
    const klaar=S.fase==='klaar',vol=S.built.length===S.target.length;
    h+=`<span class="tag" style="margin-top:6px">Stap 2 · zet de woorden in de goede volgorde</span>
    <div class="build ${klaar?(S.zok?'ok':'bad'):''}">${S.built.length?S.built.map((c,j)=>`<button class="chip" data-r="${j}" ${klaar?'disabled':''}>${j===0?cap(c.w):c.w}</button>`).join(''):'<span class="leeg">Tik hieronder op de woorden</span>'}${vol?'<b style="font-size:1.2rem">?</b>':''}</div>`;
    if(!klaar)h+=`<div class="pool">${S.pool.map((c,k)=>`<button class="chip" data-a="${k}" ${c.used?'disabled':''}>${c.w}</button>`).join('')}</div>
      <button class="btn" id="zinok" ${vol?'':'disabled'}>Controleer</button>`;}
  box.innerHTML=`<div class="stack">${h}</div>`;
  box.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{S.vk=+b.dataset.v;S.fase='verbfb';api.redraw()});
  const tb=box.querySelector('#tobuild');if(tb)tb.onclick=()=>{const w=q.words.slice();w[q.kind==='w'?1:0]=vw;S.target=w;S.pool=shuf(w.map((x,i)=>({w:x,i})));S.built=[];S.fase='build';api.redraw();api.scroll()};
  box.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{const c=S.pool[+b.dataset.a];c.used=true;S.built.push(c);api.redraw()});
  box.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{const c=S.built.splice(+b.dataset.r,1)[0];c.used=false;api.redraw()});
  const zo=box.querySelector('#zinok');
  if(zo)zo.onclick=()=>{S.zok=S.built.map(c=>c.w).join(' ')===S.target.join(' ');S.fase='klaar';api.redraw();
    const ok=S.zok&&S.vk===0,regel=q.kind==='w'?WRULE:q.kind==='k'?JRULE+'. Het tweede werkwoord (sprechen) gaat helemaal naar achteren':JRULE;
    const mis=S.zok?(S.vk===0?'':'De volgorde is goed, maar in stap 1 koos je de verkeerde vorm.'):'De woorden staan niet in de goede volgorde.';
    api.finish(ok,`<div class="fb ${ok?'ok':'bad'}"><div class="head">${ok?'Goed!':'Niet goed'}</div>${mis?`<div><b>Dit ging er mis:</b></div><div class="mistake">${mis}</div>`:''}
      ${ok?'':'<div><b>Het goede antwoord is:</b></div>'}${DE(kleur(q.model))}<div class="nl">${q.nl}</div><div class="why">${regel}.</div></div>`,
      cap(S.built.map(c=>c.w).join(' '))+'?'+(S.vk===0?'':` (werkwoord gekozen: ${q.vopts[S.vk][0]})`))};
}


/* ================= Kapitel 4 Mein Tag: Arbeitsbuch blz. 32 (opdracht 1a, 1b, 2a) en blz. 39 (Deine Wörter 4) =================
   Vertalingen door Claude. In haar boek staat bij 'So ein Mist!' een eigen vertaling; hier staat een nette. */
/* ---------- klok ---------- */
const GETAL=['zwölf','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf'];
const uur=h=>GETAL[((h%12)+12)%12||12];
function TIJD(h,m){const n=uur(h),v=uur(h+1);
  return m===0?(h%12===1?'ein':n)+' Uhr':m===5?'fünf nach '+n:m===10?'zehn nach '+n:m===15?'Viertel nach '+n:m===20?'zwanzig nach '+n:
    m===25?'fünf vor halb '+v:m===30?'halb '+v:m===35?'fünf nach halb '+v:m===40?'zwanzig vor '+v:m===45?'Viertel vor '+v:m===50?'zehn vor '+v:'fünf vor '+v}
const dig=(h,m)=>`${((h%12)+12)%12||12}:${String(m).padStart(2,'0')}`;
function KLOK(h,m){
  const p=(a,r)=>[(Math.sin(a*Math.PI/180)*r).toFixed(1),(-Math.cos(a*Math.PI/180)*r).toFixed(1)];
  let t='';for(let i=0;i<60;i++){const [x1,y1]=p(i*6,i%5?80:75),[x2,y2]=p(i*6,84);t+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${i%5?1:2.2}" opacity=".6"/>`}
  let g='';for(let i=1;i<=12;i++){const [x,y]=p(i*30,64);g+=`<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-size="17" fill="currentColor">${i}</text>`}
  const [hx,hy]=p((h%12)*30+m/2,40),[mx,my]=p(m*6,70);
  return `<svg class="klok" viewBox="-100 -100 200 200" width="170" height="170" role="img" aria-label="klok" style="display:block;margin:10px auto;color:var(--ink)">
   <circle r="93" fill="var(--card)" stroke="#E8743B" stroke-width="12"/>${t}${g}
   <line x1="0" y1="0" x2="${hx}" y2="${hy}" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
   <line x1="0" y1="0" x2="${mx}" y2="${my}" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle r="6" fill="currentColor"/></svg>`}
/* foute antwoorden: tijden die er net naast zitten (nach/vor omgedraaid, uur ernaast, halb verkeerd) */
function tijdFout(h,m){
  const c=[];if(m&&m!==30)c.push(m<30?[h-1,60-m]:[h+1,60-m]);   /* Viertel nach ↔ Viertel vor */
  c.push([h-1,m],[h+1,m],[h,m===30?0:30]);
  const zien=new Set([TIJD(h,m)]),uit=[];
  c.forEach(([H,M])=>{const w=TIJD(H,M);if(zien.has(w))return;zien.add(w);
    uit.push(['Es ist '+w+'.',`${w} is ${dig(H,M)}.${/^halb/.test(w)?' Let op: halb hoort bij het uur erna, net als half in het Nederlands.':''}`])});
  return uit.slice(0,3)}
const TIJDREGEL='nach = over · vor = voor · halb neun = half negen (8:30) · Let op: 8:20 is <b>zwanzig nach acht</b>, 8:40 is <b>zwanzig vor neun</b> (in het Nederlands: tien voor half negen en tien over half negen).';

SECS.push(
 {id:'k1a',par:'k4',nr:'1a',name:'Timo, aufstehen!',c:'--c1',sub:'Arbeitsbuch blz. 32 · opdracht 1a · dialoog aanvullen',
  rules:[['Lees eerst het hele gesprek','Timo is moe, maar het is al halb sieben',''],
   ['müde zijn = müde sein','Ich bin so müde.','Niet: Ich habe so müde.'],
   ['Hoe laat is het?','Wie viel Uhr ist es?','viel, niet viele'],
   ['Dagen met hoofdletter','Mittwoch, Donnerstag','Donnerstag, niet Donderstag']]},
 {id:'k1b',par:'k4',nr:'1b',name:'Kira: Dialog ordnen',c:'--c2',sub:'Arbeitsbuch blz. 32 · opdracht 1b · zinnen in de goede volgorde',
  rules:[['Begin met de groet','Guten Morgen, Kira.',''],['Vraag en antwoord horen bij elkaar','Wie viel Uhr ist es? → Es ist …',''],
   ['Herhaal wat de ander zei, met een vraagteken','Viertel nach sechs? Ich habe heute erst …','erst = pas']]},
 {id:'k2a',par:'k4',nr:'2a',name:'Wie viel Uhr ist es?',c:'--c3',sub:'Arbeitsbuch blz. 32 · opdracht 2a · uhrzeiten noteren',
  rules:[['De lange wijzer: de minuten','Kijk eerst naar de lange wijzer: over (nach) of voor (vor)?',''],
   ['nach en vor','5 nach · 10 nach · Viertel nach · 20 nach','20 vor · Viertel vor · 10 vor · 5 vor'],
   ['halb = half, net als in het Nederlands','halb neun = 8:30','fünf vor halb neun = 8:25 · fünf nach halb neun = 8:35'],
   ['Anders dan in het Nederlands','8:20 = zwanzig nach acht','8:40 = zwanzig vor neun'],['Hele uren','Es ist elf Uhr.','1:00 = ein Uhr']]},
 {id:'uz',par:'k4',nr:'U',name:'Uhrzeit: extra klokken',c:'--c4',sub:'Extra · alle tijden van "Die Uhrzeit" (blz. 39)',
  rules:[['Zo staat het op blz. 39','12 Uhr · 5 nach 12 · 10 nach 12 · Viertel nach 12 · 20 nach 12 · 5 vor halb 1 · halb 1','5 nach halb 1 · 20 vor 1 · Viertel vor 1 · 10 vor 1 · 5 vor 1']]});

/* ---------- woorden blz. 39 (Deine Wörter 4) ---------- */
const W4A=[ /* Seite 35 en 36: t/m 'zu Hause sein' (huiswerk woensdag 11 november) */
 ['der Wecker','de wekker','die Wecker'],['klingeln','afgaan (van een wekker of bel), rinkelen',''],['die Mittagspause','de middagpauze','die Mittagspausen'],
 ['Mittagspause haben','middagpauze hebben',''],['zur Schule fahren','naar school gaan (met fiets, bus of auto)',''],['die Hausaufgabe','de huiswerkopdracht','die Hausaufgaben'],
 ['Hausaufgaben machen','huiswerk maken',''],['der Unterricht','de les, het onderwijs',''],['Unterricht haben','les hebben',''],['die Freizeit','de vrije tijd',''],
 ['Freizeit haben','vrije tijd hebben',''],['aufstehen','opstaan',''],['Es ist schon halb sieben.','Het is al half zeven.',''],['schon','al',''],['müde','moe',''],
 ['Wie viel Uhr ist es?','Hoe laat is het?',''],['erst','pas (niet eerder dan)',''],['So ein Mist!','Wat balen! Verdorie!',''],['zu spät','te laat',''],
 ['Ich bin viel zu spät.','Ik ben veel te laat.',''],['zu Hause sein','thuis zijn','']];
const W4B=[ /* Seite 38 t/m 41, de week en de schoolvakken */
 ['die Familie','het gezin, de familie','die Familien'],['der Bruder','de broer','die Brüder'],['die Schwester','de zus','die Schwestern'],['die Stunde','het uur, het lesuur','die Stunden'],
 ['der Tag','de dag','die Tage'],['der Morgen','de ochtend',''],['am Morgen','in de ochtend',''],['der Vormittag','de voormiddag (de ochtend tot 12 uur)','die Vormittage'],
 ['der Nachmittag','de middag (na 12 uur)','die Nachmittage'],['morgens','\'s ochtends, elke ochtend',''],['vormittags','\'s ochtends (voor 12 uur)',''],
 ['die Unterrichtsstunde','het lesuur','die Unterrichtsstunden'],['beginnen','beginnen',''],['das Ende','het einde',''],['zu Ende sein','afgelopen zijn',''],
 ['von … bis','van … tot',''],['gegen','tegen, rond (gegen acht Uhr = rond acht uur)',''],['aus dem Haus gehen','de deur uit gaan',''],['fleißig','ijverig, vlijtig',''],
 ['Du Armer!','Jij arme!',''],['befreundet','bevriend',''],['die Minute','de minuut','die Minuten'],['wann','wanneer',''],['wie viele','hoeveel',''],
 ['frei haben','vrij hebben',''],['der Sport','de sport, gym',''],['das Lieblingsfach','het lievelingsvak','die Lieblingsfächer'],['toll','geweldig, gaaf',''],
 ['nicht so toll','niet zo leuk',''],['Wie lange?','Hoe lang?',''],['interessant','interessant',''],['das Wochenende','het weekend','die Wochenenden'],['Zeit haben','tijd hebben',''],
 ['bleiben','blijven',''],['zu Hause bleiben','thuisblijven',''],['Mama','mama',''],['Papa','papa',''],
 ['der Montag','maandag','die Montage'],['der Dienstag','dinsdag','die Dienstage'],['der Mittwoch','woensdag','die Mittwoche'],['der Donnerstag','donderdag','die Donnerstage'],
 ['der Freitag','vrijdag','die Freitage'],['der Samstag','zaterdag','die Samstage'],['der Sonntag','zondag','die Sonntage'],['montags','op maandag, elke maandag',''],
 ['dienstags','op dinsdag, elke dinsdag',''],['mittwochs','op woensdag, elke woensdag',''],
 ['Kunst','tekenen, beeldende vorming',''],['Physik','natuurkunde',''],['Ethik','ethiek, levensbeschouwing',''],['Mathematik / Mathe','wiskunde',''],['Deutsch','Duits',''],
 ['Erdkunde','aardrijkskunde',''],['Religion','godsdienst',''],['Sport','gym, lo (schoolvak)',''],['Englisch','Engels',''],['Naturwissenschaft','natuurwetenschappen (zoals NaSk)',''],
 ['Französisch','Frans',''],['Geschichte','geschiedenis','']];
SECS.push(
 {id:'w4a',par:'k4',nr:'39a',name:'Woorden blz. 39 t/m „zu Hause sein”',c:'--c5',sub:'Deine Wörter 4 · Seite 35 en 36 · Duits-Nederlands en Nederlands-Duits',
  rules:[['Leer zelfstandige naamwoorden mét der, die of das','der Wecker, die Freizeit','']].concat(W4A.map(v=>[v[0],v[1],v[2]?'meervoud: '+v[2]:'']))},
 {id:'w4b',par:'k4',nr:'39b',name:'Woorden blz. 39: de rest',c:'--c6',sub:'Deine Wörter 4 · Seite 38–41, de week en de schoolvakken',
  rules:[['Dagen zijn der-woorden','der Montag … der Sonntag','montags = op maandag, elke maandag']].concat(W4B.map(v=>[v[0],v[1],v[2]?'meervoud: '+v[2]:'']))});
[['w4a','k',W4A,'blz. 39'],['w4b','m',W4B,'blz. 39']].forEach(([o,p,L,bl])=>{
  L.forEach((v,i)=>{
    const pool=shuf(L.filter(w=>w!==v&&soort(w)===soort(v)&&w[1]!==v[1]&&w[0]!==v[0])).slice(0,3);
    Q.push({id:p+i,o,nr:'Woorden '+bl,q:`Wat is het Duits voor <b>${v[1]}</b>?`,a:v[0],
      f:pool.map(w=>[w[0],`${w[0]} betekent ${w[1]}.`]),u:`${v[1]} = <b>${v[0]}</b>${v[2]?` (meervoud: ${v[2]})`:''}`,
      v:{q:`Wat betekent <b>${v[0]}</b>?`,a:v[1],f:pool.map(w=>[w[1],`Dat is ${w[0]}.`])}})});
  L.filter(isN).forEach((v,i)=>{
    const [art,...rest]=v[0].split(' '),n=rest.join(' '),andere=['der','die','das'].filter(a=>a!==art);
    Q.push({id:p+'l'+i,o,nr:'Woorden '+bl+' · lidwoord',q:`der, die of das?${DE('___ '+n)}<div class="nl">(${v[1]})</div>`,a:art,
      f:andere.map(a=>[a,`Het is ${art} ${n}. Leer het lidwoord altijd mee met het woord.`]),u:`<b>${v[0]}</b> = ${v[1]}${v[2]?` (meervoud: ${v[2]})`:''}.`,
      v:{q:`Hoe zeg je <b>${v[1]}</b> in het Duits, met het goede lidwoord?`,a:v[0],f:andere.map(a=>[a+' '+n,`Het is ${art} ${n}.`])}})})});

/* ---------- opdracht 1a: het gesprek van Timo, per beurt ---------- */
[
 ['• Timo, a______n!','Timo, aufstehen!','Timo, sta op!',[['Timo, aufstehst!','Mama roept het als bevel, met de hele werkwoordsvorm: aufstehen!'],['Timo, aufstand!','aufstand bestaat niet. Het is aufstehen.'],['Timo, aufgestehen!','Hier hoort geen ge- bij: aufstehen.']]],
 ['■ Ich b___ so m___e. Wie v___ U___ ist es?','Ich bin so müde. Wie viel Uhr ist es?','Ik ben zo moe. Hoe laat is het?',[['Ich habe so müde. Wie viel Uhr ist es?','Moe zijn is müde sein: ich bin müde.'],['Ich bin so müde. Wie viele Uhr ist es?','Hoe laat is het? = Wie viel Uhr ist es? (viel, niet viele).'],['Ich bin so mude. Wie viel Uhr ist es?','müde schrijf je met ü.']]],
 ['• E___ ist schon h___ sieben. A______!','Es ist schon halb sieben. Aufstehen!','Het is al half zeven. Opstaan!',[['Er ist schon halb sieben. Aufstehen!','Bij de tijd zeg je es: Es ist …'],['Es ist schon half sieben. Aufstehen!','half is Nederlands. In het Duits: halb.'],['Es ist schon halb siebt. Aufstehen!','Zeven is sieben.']]],
 ['■ H___ sieben? Ich habe am M______ um h___ neun Schule.','Halb sieben? Ich habe am Mittwoch um halb neun Schule.','Half zeven? Ik heb op woensdag om half negen school.',[['Halb sieben? Ich habe am Mitwoch um halb neun Schule.','Mittwoch schrijf je met tt.'],['Halb sieben? Ich habe am Mittwoch um half neun Schule.','half is Nederlands. In het Duits: halb.'],['Halb sieben? Ich habe am Mittwoch um halb neun Schulen.','Eén school: Schule.']]],
 ['• Timo, heute ist Do______, nicht M______!','Timo, heute ist Donnerstag, nicht Mittwoch!','Timo, vandaag is het donderdag, geen woensdag!',[['Timo, heute ist Donderstag, nicht Mittwoch!','Donderstag is half Nederlands. In het Duits: Donnerstag.'],['Timo, heute ist Donnerstag, nicht Mitwoch!','Mittwoch schrijf je met tt.'],['Timo, heute ist Dienstag, nicht Mittwoch!','Er staat Do… op de puntjes: Donnerstag. Dienstag is dinsdag.']]],
 ['■ Was? Ich b___ zu s___. Ich habe heute um V______ vor acht Schule.','Was? Ich bin zu spät. Ich habe heute um Viertel vor acht Schule.','Wat? Ik ben te laat. Ik heb vandaag om kwart voor acht school.',[['Was? Ich bin zu spat. Ich habe heute um Viertel vor acht Schule.','spät schrijf je met ä.'],['Was? Ich habe zu spät. Ich habe heute um Viertel vor acht Schule.','Te laat zijn is zu spät sein: ich bin zu spät.'],['Was? Ich bin zu spät. Ich habe heute um Fiertel vor acht Schule.','Viertel schrijf je met een V.']]],
].forEach(([gat,a,nl,f],i)=>Q.push({id:'t1-'+(i+1),o:'k1a',nr:'Opdracht 1a · beurt '+(i+1),
  q:`Welke zin is helemaal goed?${DE(gat)}`,a,f,tv:`Schrijf de hele zin op, met de stukjes op de puntjes ingevuld.${DE(gat)}`,
  u:`${DE(a)}<span class="nl">${nl}</span>`,v:{q:`<span class="nl">${nl}</span> Welke Duitse zin is goed?`}}));

/* ---------- opdracht 1b: het gesprek van Kira in de goede volgorde ---------- */
const KIRA=[['•','Guten Morgen, Kira.'],['■','Guten Morgen, Mama. Wie viel Uhr ist es?'],['•','Es ist Viertel nach sechs.'],
 ['■','Viertel nach sechs? Ich habe heute erst um Viertel nach neun Schule.'],['•','Am Mittwoch hast du immer um Viertel vor acht Schule.'],['■','Ja, aber heute haben wir kein Mathe.']];
const KIRA_NL=['Goedemorgen, Kira.','Goedemorgen, mam. Hoe laat is het?','Het is kwart over zes.','Kwart over zes? Ik heb vandaag pas om kwart over negen school.','Op woensdag heb je altijd om kwart voor acht school.','Ja, maar vandaag hebben we geen wiskunde.'];
Q.push({id:'t1b',o:'k1b',nr:'Opdracht 1b · hele gesprek',type:'volg',lines:KIRA,a:KIRA.map(x=>x[1]).join(' / '),
  q:'Zet het gesprek tussen Kira en haar moeder in de goede volgorde. • = Mama, ■ = Kira.',
  uitleg:`Mama groet, Kira vraagt hoe laat het is, Mama zegt de tijd. Kira herhaalt die tijd verbaasd, want ze heeft pas om Viertel nach neun school. Mama zegt dat ze op woensdag altijd vroeg begint, en Kira antwoordt: ja, maar vandaag geen wiskunde.`});
[[2,'Guten Morgen, Kira.','Guten Morgen, Mama. Wie viel Uhr ist es?','Na de groet groet Kira terug en vraagt hoe laat het is.'],
 [3,'Guten Morgen, Mama. Wie viel Uhr ist es?','Es ist Viertel nach sechs.','Op „Wie viel Uhr ist es?” volgt de tijd.'],
 [4,'Es ist Viertel nach sechs.','Viertel nach sechs? Ich habe heute erst um Viertel nach neun Schule.','Kira herhaalt de tijd verbaasd: zo vroeg?'],
 [5,'Viertel nach sechs? Ich habe heute erst um Viertel nach neun Schule.','Am Mittwoch hast du immer um Viertel vor acht Schule.','Mama spreekt haar tegen: op woensdag begin je altijd om Viertel vor acht.'],
 [6,'Am Mittwoch hast du immer um Viertel vor acht Schule.','Ja, aber heute haben wir kein Mathe.','Kira legt uit waarom ze vandaag later begint: geen wiskunde.']
].forEach(([n,voor,a,uit])=>{const andere=KIRA.map(x=>x[1]).filter(z=>z!==a&&z!==voor&&z!==KIRA[0][1]).slice(0,3);
  Q.push({id:'t1b-'+n,o:'k1b',nr:'Extra bij 1b · zin '+n,q:`Welke zin komt hierna?${DE(voor)}`,a,
    f:andere.map(z=>[z,`Die zin past hier niet. ${uit}`]),u:`${DE(voor)}${DE('→ '+a)}${uit}`,tv:`Welke zin komt na deze zin? Schrijf hem op.${DE(voor)}`,
    v:{q:`In het gesprek van Kira: wat zegt de ander na deze zin?${DE(voor)}`}})});

/* ---------- opdracht 2a: acht klokken ---------- */
[[8,15],[8,30],[9,45],[1,10],[3,15],[11,0],[4,40],[11,55]].forEach(([h,m],i)=>{const w=TIJD(h,m);
  Q.push({id:'k2-'+(i+1),o:'k2a',nr:'Opdracht 2a · klok '+(i+1),q:`Wie viel Uhr ist es? Kies wat je opschrijft.${KLOK(h,m)}`,a:'Es ist '+w+'.',
    f:tijdFout(h,m),tv:`Wie viel Uhr ist es? Schrijf het op zoals in je boek: Es ist …${KLOK(h,m)}`,tvAlt:[cap(w)+'.'],
    u:`${dig(h,m)} = <b>Es ist ${w}.</b><div class="why">${TIJDREGEL}</div>`,v:{q:`Klok ${i+1} uit je boek. Hoe laat is het?${KLOK(h,m)}`}})});

/* ---------- extra: alle tijden van 'Die Uhrzeit' ---------- */
[[7,5],[6,10],[2,15],[6,20],[9,25],[12,30],[5,35],[7,40],[10,45],[12,50],[3,55],[4,0],[2,20],[10,40],[1,30],[8,25]].forEach(([h,m],i)=>{const w=TIJD(h,m);
  const fo=tijdFout(h,m);
  Q.push({id:'uz'+(i+1),o:'uz',nr:'Extra · klok',q:`Wie viel Uhr ist es?${KLOK(h,m)}`,a:'Es ist '+w+'.',f:fo,tv:`Wie viel Uhr ist es? Schrijf: Es ist …${KLOK(h,m)}`,tvAlt:[cap(w)+'.'],
    u:`${dig(h,m)} = <b>Es ist ${w}.</b><div class="why">${TIJDREGEL}</div>`,
    v:{q:`Hoe zeg je <b>${dig(h,m)}</b> in het Duits?`}})});
/* de valkuil: 20 over en 20 voor */
[[3,20,'tien voor half vier'],[3,40,'tien over half vier'],[9,20,'tien voor half tien'],[11,40,'tien over half twaalf']].forEach(([h,m,nlw],i)=>{const w=TIJD(h,m);
  Q.push({id:'uzv'+(i+1),o:'uz',nr:'Extra · valkuil',q:`In het Nederlands zeg je <b>${nlw}</b> (${dig(h,m)}). Hoe zeg je het in het Duits?`,a:'Es ist '+w+'.',
    f:[[`Es ist zehn ${m===20?'vor':'nach'} halb ${uur(h+1)}.`,`Zo zeg je het in het Nederlands (en in een deel van Duitsland). Je boek leert ${w}: schrijf het op de toets zoals in je boek.`],...tijdFout(h,m).slice(0,2)],
    tv:`Schrijf in het Duits: ${dig(h,m)} <span class="nl">(${nlw})</span>`,tvAlt:[cap(w)+'.'],
    u:`${dig(h,m)} = <b>Es ist ${w}.</b> In het Duits tel je bij 20 minuten vanaf het hele uur.`,
    v:{q:`Hoe zeg je <b>${dig(h,m)}</b> in het Duits?${KLOK(h,m)}`}})});
SNAP.k2a=[['Waarom zwanzig nach acht en niet zehn vor halb neun?','In het Nederlands zeg je tien voor half negen. Je boek (blz. 39) leert <b>zwanzig nach acht</b>: tot en met 20 minuten tel je vanaf het hele uur. Pas vanaf 25 minuten gebruik je halb: <b>fünf vor halb neun</b> (8:25).'],
 ['Is halb neun 8:30 of 9:30?','<b>8:30</b>, precies zoals half negen in het Nederlands. (In het Engels is het anders, daar komt de verwarring vandaan.)']];
SNAP.uz=SNAP.k2a;

/* volg: tik de zinnen in de goede volgorde */
function drawVolg(q,it,box,api){
  const S=it._v=it._v||{pool:shuf(q.lines.map((l,i)=>({l,i}))),gekozen:[],done:false};
  const vol=S.gekozen.length===q.lines.length;
  box.innerHTML=`<div class="card stack"><ol class="volg">${S.gekozen.length?S.gekozen.map((c,j)=>`<li><button class="chip volgk ${S.done?(c.i===j?'ok':'bad'):''}" data-r="${j}" ${S.done?'disabled':''}>${c.l[0]} ${c.l[1]}</button>${S.done&&c.i!==j?`<small class="sub">→ ${q.lines[j][0]} ${q.lines[j][1]}</small>`:''}</li>`).join(''):'<li class="leeg sub">Tik hieronder op de zin die als eerste komt</li>'}</ol></div>
   ${S.done?'':`<div class="pool">${S.pool.map((c,k)=>c.used?'':`<button class="chip volgk" data-k="${k}">${c.l[0]} ${c.l[1]}</button>`).join('')}</div>
   <p class="sub" style="font-size:.9rem">Tik op een ingevulde zin om hem terug te zetten.</p><button class="btn" id="volgok" ${vol?'':'disabled'}>Controleer</button>`}`;
  if(S.done)return;
  box.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{const c=S.pool[+b.dataset.k];c.used=true;S.gekozen.push(c);api.redraw()});
  box.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{const c=S.gekozen.splice(+b.dataset.r,1)[0];c.used=false;api.redraw()});
  box.querySelector('#volgok').onclick=()=>{S.done=true;const ok=S.gekozen.every((c,j)=>c.i===j);api.redraw();
    const model=q.lines.map((l,j)=>`${l[0]} ${l[1]}<br><span class="nl">${KIRA_NL[j]||''}</span>`).join('<br>');
    api.finish(ok,`<div class="fb ${ok?'ok':'bad'}"><div class="head">${ok?'Goed!':'Niet goed'}</div>${ok?'':'<div class="mistake">De rode zinnen staan op de verkeerde plek. De goede zin staat eronder.</div>'}<div class="why">${q.uitleg}</div><p><b>Zo schrijf je het gesprek in je schrift:</b></p>${DE(model)}</div>`,
      S.gekozen.map((c,j)=>`${j+1}. ${c.l[1]}`).join('\n'))};
}

/* ---------- Toetsweek 2 (stofoverzicht MG2 2026-2027): Redemittel en Grammatik uit SB blz. 12, 20, 28 en 42 ----------
   Gemaakt op 14 nov 2026 uit het stofoverzicht en de Grammatikübersicht (B. Baljeu). De bladzijden uit het Schülerbuch zelf
   waren er niet bij: zinnen, uitleg en extra oefeningen zijn door Claude gemaakt en kunnen afwijken van het boek. */
const U=s=>`<u>${s}</u>`;
const twQ=(o,nr)=>(id,q,a,f,u,v,x)=>Q.push(Object.assign({id:'tw-'+id,o,nr,q,a,f,u,v},x||{}));

/* Zahlen bis 100 (SB blz. 16 en 17) */
const EIN=['null','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf','dreizehn','vierzehn','fünfzehn','sechzehn','siebzehn','achtzehn','neunzehn'];
const ZIG=['','','zwanzig','dreißig','vierzig','fünfzig','sechzig','siebzig','achtzig','neunzig'];
const ZAHL=n=>n===100?'hundert':n<20?EIN[n]:(n%10?(n%10===1?'ein':EIN[n%10])+'und':'')+ZIG[n/10|0];
const ZALLE=Array.from({length:101},(_,m)=>ZAHL(m));
const ZREGEL='Net als in het Nederlands: eerst de eenheden, dan <b>und</b>, dan de tientallen, alles aan elkaar: drei<b>und</b>zwanzig. Let op: drei<b>ß</b>ig, sech<b>z</b>ig (zonder s), sieb<b>z</b>ig (zonder en), ein<b>und</b>zwanzig (zonder s).';
[[11,['elve','einzehn','zehneins'],[12,21,10]],[12,['zwolf','zweizehn','zwölve'],[21,20,2]],[16,['sechszehn','sechzig','zechzehn'],[60,61,6]],[17,['siebenzehn','siebzig','siebtzehn'],[70,71,7]],
 [20,['zweizig','zwanzich','zwantig'],[2,12,22]],[21,['einsundzwanzig','zwanzigundeins','einundzwangig'],[12,20,31]],[30,['dreizig','dreisig','dreizehn'],[13,3,33]],
 [34,['vierunddreizig','dreißigundvier','vierunddreisig'],[43,24,44]],[37,['siebenunddreisig','siebunddreißig','dreißigundsieben'],[73,27,47]],[46,['sechsundvierzich','vierzigundsechs','sechsvierzig'],[64,56,36]],
 [56,['sechsundfünfzich','fünfzigundsechs','sechsundfunfzig'],[65,66,46]],[61,['einsundsechzig','einundsechszig','sechzigundeins'],[16,71,51]],
 [66,['sechsundsechszig','sechszigundsechs','sechsundsechsig'],[16,76,56]],[71,['einundsiebenzig','einsundsiebzig','siebzigundeins'],[17,61,81]],
 [77,['siebenundsiebenzig','siebzigundsieben','siebenundsiebzich'],[17,67,87]],[83,['dreiundachzig','achtzigunddrei','dreiundachtzich'],[38,93,73]],
 [89,['neunundachzig','achtzigundneun','neunachtzig'],[98,79,99]],[95,['fünfundneunzich','neunzigundfünf','fünfundneunsig'],[59,85,96]],
 [99,['neunundneunzich','neunzigundneun','neunneunzig'],[9,89,90]],[100,['hunderd','zehnzig','hundertzig'],[10,1000,90]]
].forEach(([n,fw,fn],i)=>{const w=ZAHL(n);
  Q.push({id:'zl'+(i+1),o:'zahl',nr:'Zahlen bis 100',q:`Wat is het Duits voor het getal <b>${n}</b>?`,a:w,tvAlt:n===100?['einhundert']:[],
    tv:`Wat is het Duits voor het getal <b>${n}</b>? Schrijf het in letters.`,
    f:fw.map(x=>[x,ZALLE.includes(x)?`${x} is ${ZALLE.indexOf(x)}.`:ZIG.some(z=>z&&x.startsWith(z))?'De tientallen komen achteraan, net als in het Nederlands (drie-en-twintig).':'Let op de spelling: zo schrijf je het niet.']),
    u:`${n} = <b>${w}</b>${n===100?' (of einhundert)':''}<div class="why">${ZREGEL}</div>`,
    v:{q:`Welk getal is <b>${w}</b>?`,a:String(n),f:fn.map(x=>[String(x),`${x} is ${ZAHL(x)}.`])}})});

/* Personalpronomen und Verben (SB blz. 12 en 20): rijtjes */
const VERBS2={
 sein:{nl:'zijn',f:['bin','bist','ist','sind','seid','sind'],x:['seit','bis'],
   uitleg:'Helemaal onregelmatig: ich bin, du bist, er ist, wir sind, ihr <b>seid</b> (met d), sie sind. Let op: seit (met t) is een ander woord (sinds).'},
 heißen:{nl:'heten',f:['heiße','heißt','heißt','heißen','heißt','heißen'],x:['heißst'],
   uitleg:'Regelmatig, maar de stam eindigt op ß: bij du komt er alleen -t achter. du heißt (niet heißst).'},
 wohnen:{nl:'wonen',f:['wohne','wohnst','wohnt','wohnen','wohnt','wohnen'],x:['wohn'],
   uitleg:'Regelmatig: stam <b>wohn</b> + e, st, t, en, t, en.'},
 kommen:{nl:'komen',f:['komme','kommst','kommt','kommen','kommt','kommen'],x:['komst'],
   uitleg:'Regelmatig: stam <b>komm</b> + e, st, t, en, t, en. De dubbele m blijft overal staan.'},
 spielen:{nl:'spelen',f:['spiele','spielst','spielt','spielen','spielt','spielen'],x:['spielet'],
   uitleg:'Regelmatig: stam <b>spiel</b> + e, st, t, en, t, en.'}
};
Object.assign(VF,Object.fromEntries(Object.entries(VERBS2).map(([k,v])=>[k,v.f])));
Object.keys(VERBS2).forEach(v=>Q.push({id:'r2-'+v,o:'pv',nr:'Personalpronomen und Verben · rijtje',type:'rij',verb:v,a:VERBS2[v].f.join(', '),tvIn:PERS,tvA:VERBS2[v].f,
  tv:`Schrijf het rijtje van <b>${v}</b> <span class="nl">(${VERBS2[v].nl})</span>.`,
  q:`Maak het rijtje van <b>${v}</b> <span class="nl">(${VERBS2[v].nl})</span>. Zet de vormen op de goede plek.`}));
{const pv=twQ('pv','Personalpronomen und Verben');
 [['wij','wir',['ihr','sie','uns']],['jullie','ihr',['wir','sie','euch']],['u (beleefd)','Sie',['du','Ihr','sie']],['zij (meervoud)','sie',['ihr','wir','es']],
  ['hij','er',['es','sie','ihr']],['het','es',['er','das','sie']],['jij','du',['dir','Sie','ihr']],['zij (één meisje)','sie',['er','es','ihr']]].forEach(([nl,de,fo],i)=>
  pv('pp'+(i+1),`Wat is het Duits voor <b>${nl}</b>? (onderwerp)`,de,fo.map(x=>[x,{ihr:'ihr = jullie.',wir:'wir = wij.',sie:'sie = zij (één meisje of meervoud).',uns:'uns = ons (geen onderwerp).',euch:'euch = jullie als lijdend voorwerp, geen onderwerp.',du:'du = jij.',Ihr:'Ihr met een hoofdletter = uw (bezittelijk).',es:'es = het.',er:'er = hij.',das:'das = dat/het (lidwoord of aanwijzend), geen persoonlijk voornaamwoord.',dir:'dir = jou (meewerkend voorwerp).',Sie:'Sie met hoofdletter = u.'}[x]||'']),
   `${nl} = <b>${de}</b><div class="why">ich, du, er/sie/es, wir, ihr, sie/Sie</div>`,{q:`Wat betekent <b>${de}</b>?`,a:nl,f:fo.slice(0,2).map(x=>[{wir:'wij',ihr:'jullie',sie:'zij',du:'jij',es:'het',er:'hij',Sie:'u',uns:'ons',euch:'jullie (lijdend voorwerp)',Ihr:'uw',das:'dat',dir:'jou'}[x],`Dat is ${x}.`])}));
 [['du','sein','bist',[['bis','bis betekent tot (bis morgen). Bij du: du bist.'],['ist','ist hoort bij er/sie/es.']]],
  ['ihr','sein','seid',[['seit','seit (met t) betekent sinds. ihr seid schrijf je met d.'],['sind','sind hoort bij wir en sie.']]],
  ['ich','sein','bin',[['ben','ben is Nederlands. In het Duits: ich bin.'],['bist','bist hoort bij du.']]],
  ['er','wohnen','wohnt',[['wohnst','wohnst hoort bij du.'],['wohne','wohne hoort bij ich.']]],
  ['du','kommen','kommst',[['komst','De dubbele m blijft: du kommst.'],['kommt','kommt hoort bij er/sie/es of ihr.']]],
  ['wir','heißen','heißen',[['heißt','heißt hoort bij du, er/sie/es en ihr.'],['heißn','Bij wir komt er -en achter: wir heißen.']]],
  ['sie (meervoud)','spielen','spielen',[['spielt','spielt hoort bij er/sie/es en ihr. sie meervoud = -en.'],['spielst','spielst hoort bij du.']]],
  ['ihr','haben','habt',[['hat','hat hoort bij er/sie/es.'],['habe','habe hoort bij ich.']]],
 ].forEach(([p,inf,ans,f],i)=>{const fs=VF[inf],lab=p==='er'?'er/sie/es':p;
   const andere=PERS.filter((x,j)=>fs[j]!==ans).slice(0,3).map(x=>[x,`Bij ${x} is het: ${x.split('/')[0]} ${fs[PERS.indexOf(x)]}.`]);
   pv('pf'+(i+1),`Welke vorm hoort bij <b>${p}</b> + <b>${inf}</b>?`,ans,f,`${p.split(' ')[0]} <b>${ans}</b><div class="why">${(VERBS2[inf]||VERBS[inf]).uitleg}</div>`,
     {q:`Bij welk persoon hoort <b>${ans}</b> (van ${inf})?`,a:p==='sie (meervoud)'?'sie/Sie':lab,f:andere.filter(x=>!(p==='sie (meervoud)'&&x[0]==='wir'))}) });
 [['___ wohnst in Berlin.','Du',[['Ich','Bij ich hoort wohne.'],['Er','Bij er hoort wohnt.']],'wohnst eindigt op -st: dat hoort bij du.'],
  ['___ heißen Ben und Lukas.','Sie',[['Er','Bij er hoort heißt. Ben und Lukas zijn twee jongens: sie.'],['Ihr','Bij ihr hoort heißt.']],'Twee personen, werkwoord op -en: sie (meervoud).'],
  ['___ seid zwölf Jahre alt.','Ihr',[['Wir','Bij wir hoort sind.'],['Sie','Bij sie hoort sind.']],'seid hoort alleen bij ihr.'],
  ['___ bin Anna.','Ich',[['Du','Bij du hoort bist.'],['Sie','Bij sie hoort ist of sind.']],'bin hoort alleen bij ich.'],
 ].forEach(([zin,ans,f,uit],i)=>pv('pz'+(i+1),`Vul het persoonlijk voornaamwoord in.${DE(zin)}`,ans,f,`${DE(zin.replace('___','<b>'+ans+'</b>'))}${uit}`,
   {q:`Kijk naar de vorm van het werkwoord. Wie hoort erbij?${DE(zin)}`}));
}

/* W-Fragen und Antworten (SB blz. 12) */
{const wf=twQ('wf','W-Fragen');
 const VW={Wie:'Wie = hoe',Wo:'Wo = waar',Woher:'Woher = waarvandaan',Was:'Was = wat',Wer:'Wer = wie (welke persoon)',Wann:'Wann = wanneer','Wie alt':'Wie alt = hoe oud','Wie viel Uhr':'Wie viel Uhr = hoe laat','Wie viele':'Wie viele = hoeveel','Wie lange':'Wie lange = hoe lang'};
 [['___ heißt du?','Ich heiße Lena.','Wie',['Wo','Was','Wer']],['___ wohnst du?','Ich wohne in Köln.','Wo',['Woher','Wie','Wann']],
  ['___ kommst du?','Ich komme aus den Niederlanden.','Woher',['Wo','Wie','Was']],['___ bist du?','Ich bin zwölf Jahre alt.','Wie alt',['Wie viele','Wann','Wo']],
  ['___ ist das?','Das ist mein Freund Paul.','Wer',['Was','Wie','Wo']],['___ ist das?','Das ist ein Lineal.','Was',['Wer','Wie','Wo']],
  ['___ magst du?','Ich mag Pferde und Katzen.','Was',['Wer','Wie','Wo']],['___ beginnt der Unterricht?','Um acht Uhr.','Wann',['Wie','Wo','Was']],
  ['___ ist es?','Es ist halb neun.','Wie viel Uhr',['Wann','Wie alt','Wie viele']],['___ Geschwister hast du?','Ich habe zwei Schwestern.','Wie viele',['Wie viel Uhr','Wann','Was']],
  ['___ geht’s?','Danke, gut!','Wie',['Was','Wo','Wer']],['___ hast du Mittagspause?','Eine Stunde, von zwölf bis eins.','Wie lange',['Wie viele','Wo','Wer']],
 ].forEach(([vr,antw,a,fo],i)=>wf('wv'+(i+1),`Vul het vraagwoord in.${DE(vr+'<br>– '+antw)}`,a,fo.map(x=>[x,`${VW[x]}. Dat past niet bij het antwoord „${antw}”.`]),
   `${DE(vr.replace('___','<b>'+a+'</b>')+'<br>– '+antw)}${VW[a]}.`,{q:`Welk vraagwoord hoort bij dit antwoord?${DE('– '+antw)}`}));
 const WO='In een W-vraag staat het werkwoord direct na het vraagwoord: <b>vraagwoord – werkwoord – onderwerp – rest</b>.';
 [['Ich heiße Tim.','Wie heißt du?',[['Wie heiße du?','heiße hoort bij ich. Bij du: heißt.'],['Wer heißt du?','Naar een naam vraag je met Wie.'],['Wie du heißt?',WO]]],
  ['Ich wohne in Amsterdam.','Wo wohnst du?',[['Woher wohnst du?','Woher = waarvandaan. Dat hoort bij kommen.'],['Wo wohnt du?','Bij du hoort wohnst.'],['Wo du wohnst?',WO]]],
  ['Ich bin dreizehn Jahre alt.','Wie alt bist du?',[['Wie alt hast du?','Leeftijd gaat met sein: Wie alt bist du?'],['Wie alt ist du?','Bij du hoort bist.'],['Wie alt du bist?',WO]]],
  ['Ich komme aus Belgien.','Woher kommst du?',[['Wo kommst du?','Wo = waar. Bij kommen vraag je waarvandaan: Woher.'],['Woher kommt du?','Bij du hoort kommst.'],['Woher du kommst?',WO]]],
  ['Mein Lieblingstier ist der Hund.','Was ist dein Lieblingstier?',[['Wer ist dein Lieblingstier?','Naar een dier of ding vraag je met Was.'],['Was ist deine Lieblingstier?','das Lieblingstier is een das-woord: dein.'],['Was dein Lieblingstier ist?',WO]]],
  ['Der Unterricht beginnt um acht Uhr.','Wann beginnt der Unterricht?',[['Wo beginnt der Unterricht?','Wo = waar. Het antwoord is een tijd: Wann.'],['Wann der Unterricht beginnt?',WO],['Wann beginnen der Unterricht?','der Unterricht is één ding (er): beginnt.']]],
 ].forEach(([antw,a,f],i)=>wf('wa'+(i+1),`Welke vraag hoort bij dit antwoord?${DE('– '+antw)}`,a,f,`${DE(a+'<br>– '+antw)}${WO}`,
   {q:`Welke vraag is helemaal goed? Het antwoord is:${DE('– '+antw)}`},{tv:`Schrijf de vraag bij dit antwoord. Gebruik du.${DE('– '+antw)}`}));
}

/* Ja/Nein-Fragen und Antworten, haben (SB blz. 28) */
{const jn=twQ('jn','Ja/Nein-Fragen');
 const KN='<b>kein</b> = geen, vóór een zelfstandig naamwoord (ein → kein, einen → keinen, eine → keine). <b>nicht</b> = niet, bij een werkwoord, bijvoeglijk naamwoord of plaats.';
 [['du / einen Hund / haben','Hast du einen Hund?',[['Du hast einen Hund?','Bij een ja/nee-vraag staat het werkwoord vooraan.'],['Hat du einen Hund?','Bij du hoort hast.'],['Hast du ein Hund?','der Hund in de Akkusativ: einen Hund.']]],
  ['deine Katze / schwarz / sein','Ist deine Katze schwarz?',[['Deine Katze ist schwarz?','Bij een ja/nee-vraag staat het werkwoord vooraan.'],['Bist deine Katze schwarz?','deine Katze = sie: ist.'],['Ist dein Katze schwarz?','die Katze: deine.']]],
  ['ihr / heute / Unterricht / haben','Habt ihr heute Unterricht?',[['Hat ihr heute Unterricht?','Bij ihr hoort habt.'],['Ihr habt heute Unterricht?','Bij een ja/nee-vraag staat het werkwoord vooraan.'],['Habt ihr heute Unterrichten?','der Unterricht, zonder -en.']]],
  ['du / Pferde / mögen','Magst du Pferde?',[['Mögst du Pferde?','mögen: du magst, met a.'],['Mag du Pferde?','Bij du: magst.'],['Du magst Pferde?','Bij een ja/nee-vraag staat het werkwoord vooraan.']]],
 ].forEach(([pr,a,f],i)=>jn('jv'+(i+1),`Welke ja/nee-vraag is helemaal goed?<div class="prompt">${pr} / ?</div>`,a,f,`${DE(a)}${JRULE}.`,
   {q:`Maak er een ja/nee-vraag van. Welke is goed?<div class="prompt">${pr} / ?</div>`},{tv:`Maak er een ja/nee-vraag van.<div class="prompt">${pr} / ?</div>`}));
 [['Hast du einen Bruder?','Nein, ich habe keinen Bruder.',[['Nein, ich habe nicht einen Bruder.','Geen + zelfstandig naamwoord = kein. der Bruder → keinen Bruder.'],['Nein, ich habe keine Bruder.','keine is voor die-woorden en meervoud. der Bruder → keinen.'],['Nein, ich hat keinen Bruder.','Bij ich hoort habe.']]],
  ['Ist dein Hund groß?','Nein, er ist nicht groß.',[['Nein, er ist kein groß.','groß is een bijvoeglijk naamwoord: nicht.'],['Nein, sie ist nicht groß.','der Hund = er.'],['Nein, er nicht ist groß.','nicht staat na het werkwoord: er ist nicht groß.']]],
  ['Wohnst du in Berlin?','Nein, ich wohne nicht in Berlin.',[['Nein, ich wohne kein in Berlin.','Bij een plaats gebruik je nicht.'],['Nein, ich wohnst nicht in Berlin.','Bij ich hoort wohne.'],['Nein, ich nicht wohne in Berlin.','nicht staat na het werkwoord.']]],
  ['Hast du heute Unterricht?','Nein, heute habe ich keinen Unterricht.',[['Nein, heute ich habe keinen Unterricht.','Begint de zin met heute, dan komt het werkwoord op plek 2: heute habe ich.'],['Nein, heute habe ich keine Unterricht.','der Unterricht → keinen.'],['Nein, heute habe ich nicht Unterricht.','Vóór een zelfstandig naamwoord: kein(en).']]],
  ['Habt ihr am Samstag Schule?','Nein, am Samstag haben wir keine Schule.',[['Nein, am Samstag wir haben keine Schule.','Na am Samstag komt het werkwoord op plek 2: haben wir.'],['Nein, am Samstag haben wir keinen Schule.','die Schule → keine.'],['Nein, am Samstag habt wir keine Schule.','Bij wir hoort haben.']]],
  ['Kommst du aus Deutschland?','Ja, ich komme aus Deutschland.',[['Ja, ich kommst aus Deutschland.','Bij ich hoort komme.'],['Ja, ich komme von Deutschland.','Uit een land = aus.'],['Ja, komme ich aus Deutschland.','Na Ja, komt het onderwerp eerst: Ja, ich komme …']]],
  ['Hat Lisa ein Kaninchen?','Nein, sie hat kein Kaninchen.',[['Nein, sie hat keinen Kaninchen.','das Kaninchen → kein (net als ein).'],['Nein, er hat kein Kaninchen.','Lisa is een meisje: sie.'],['Nein, sie hat nicht ein Kaninchen.','Geen + zelfstandig naamwoord = kein.']]],
 ].forEach(([vr,a,f],i)=>jn('ja'+(i+1),`Welk antwoord is helemaal goed?${DE(vr)}`,a,f,`${DE(vr+'<br>– '+a)}${KN}`,
   {q:`Kies het goede antwoord op de vraag.${DE(vr)}`},{tv:`Beantwoord de vraag in een hele zin, met ${a.startsWith('Ja')?'ja':'nee'}.${DE(vr)}`}));
}

/* Artikel und Personalpronomen, Nominativ und Akkusativ (SB blz. 20 en 28) */
{const ap=twQ('ap','Artikel und Personalpronomen');
 const PR={Er:'Er = hij: voor der-woorden en jongens.',Sie:'Sie = zij: voor die-woorden, meisjes en meervoud.',Es:'Es = het: voor das-woorden.',Ihr:'Ihr = jullie.'};
 [['Das ist Paul. ___ ist zwölf.','Er','Paul is een jongen.'],['Das ist meine Katze. ___ heißt Mimi.','Sie','die Katze → sie.'],['Das ist mein Hund. ___ ist braun.','Er','der Hund → er.'],
  ['Das ist mein Pferd. ___ ist groß und stark.','Es','das Pferd → es.'],['Das sind meine Mäuse. ___ sind klein und weiß.','Sie','die Mäuse is meervoud → sie.'],
  ['Hier ist das Kaninchen. ___ frisst Karotten.','Es','das Kaninchen → es.'],['Da ist der Vogel. ___ ist bunt.','Er','der Vogel → er.'],['Das ist Lisa. ___ wohnt in Bremen.','Sie','Lisa is een meisje.']
 ].forEach(([zin,a,uit],i)=>ap('pr'+(i+1),`Vul in: er, sie of es?${DE(zin)}`,a,['Er','Sie','Es','Ihr'].filter(x=>x!==a).map(x=>[x,PR[x]+' '+uit]),`${DE(zin.replace('___','<b>'+a+'</b>'))}${uit}`,
   {q:`Welk woordje komt op de puntjes? Kijk naar der, die of das.${DE(zin)}`}));
 const NA='Na <b>sein</b> (ist, sind) staat de 1e naamval (Nominativ): Das ist ein Hund. Na <b>haben, mögen, es gibt</b> en andere werkwoorden met een lijdend voorwerp: Akkusativ. Alleen der-woorden veranderen: der → den, ein → einen, kein → keinen.';
 [['Das ist ___ Hund.','een','ein',[['einen','Na „Das ist” staat de Nominativ: ein Hund.'],['eine','der Hund: ein.']]],
  ['Ich habe ___ Hund.','een','einen',[['ein','haben + Akkusativ: der Hund → einen Hund.'],['eine','der Hund, geen die-woord.']]],
  ['Das ist ___ Katze.','een','eine',[['ein','die Katze: eine.'],['einen','einen is voor der-woorden in de Akkusativ.']]],
  ['Ich habe ___ Kaninchen.','een','ein',[['einen','das Kaninchen: in de Akkusativ blijft het ein.'],['eine','das Kaninchen, geen die-woord.']]],
  ['___ Hund heißt Bello.','de','Der',[['Den','Der Hund is het onderwerp: Nominativ.'],['Das','der Hund, geen das-woord.']]],
  ['Ich mag ___ Hund.','de','den',[['der','mögen + Akkusativ: der → den.'],['das','der Hund, geen das-woord.']]],
  ['Es gibt ___ Zoo in Berlin.','een','einen',[['ein','es gibt + Akkusativ: der Zoo → einen Zoo.'],['eine','der Zoo, geen die-woord.']]],
  ['Das ist ___ Vogel.','geen','kein',[['keinen','Na „Das ist” staat de Nominativ: kein Vogel.'],['keine','der Vogel: kein.']]],
  ['Ich habe ___ Vogel.','geen','keinen',[['kein','haben + Akkusativ: der Vogel → keinen Vogel.'],['keine','der Vogel, geen die-woord.']]],
  ['Das ist ___ Lieblingstier.','mijn','mein',[['meine','das Lieblingstier: mein.'],['meinen','Na „Das ist” staat de Nominativ; en het is een das-woord.']]],
  ['Wie heißt ___ Katze?','jouw','deine',[['dein','die Katze: deine.'],['deinen','deinen is voor der-woorden in de Akkusativ.']]],
  ['Ich habe ___ Schwester und ___ Bruder.','een, een','eine, einen',[['eine, ein','der Bruder in de Akkusativ: einen.'],['einen, einen','die Schwester: eine.']]],
 ].forEach(([zin,hint,a,f],i)=>ap('ar'+(i+1),`Vul in.${DE(zin)}<div class="nl">(${hint})</div>`,a,f,`${DE(zin.replace('___','<b>'+a.split(', ')[0]+'</b>').replace('___','<b>'+(a.split(', ')[1]||'')+'</b>'))}${NA}`,
   {q:`Welk woordje komt op de puntjes? Let op: Nominativ of Akkusativ?${DE(zin)}<div class="nl">(${hint})</div>`}));
 [['Der Hund','Der Hund frisst einen Salat.','Nominativ','Der Hund doet het: het onderwerp.'],['einen Salat','Der Hund frisst einen Salat.','Akkusativ','Wat frisst der Hund? einen Salat: het lijdend voorwerp.'],
  ['die Katze','Mein Lieblingstier ist die Katze.','Nominativ','Na sein staat de Nominativ, ook al staat het achteraan.'],['keinen Bruder','Ich habe keinen Bruder.','Akkusativ','Wat heb ik (niet)? Het lijdend voorwerp, en der → keinen laat het al zien.'],
  ['viele Tiere','Im Zoo gibt es viele Tiere.','Akkusativ','es gibt + Akkusativ.'],['Meine Schwester','Meine Schwester mag Pferde.','Nominativ','Wie vindt paarden leuk? meine Schwester: het onderwerp.'],
 ].forEach(([deel,zin,a,uit],i)=>ap('nk'+(i+1),`Welke naamval is het onderstreepte deel?${DE(zin.replace(deel,U(deel)))}`,a,[[a==='Nominativ'?'Akkusativ':'Nominativ',uit]],
   `<b>${deel}</b> = ${a}. ${uit}<div class="why">Nominativ = onderwerp (en na sein). Akkusativ = lijdend voorwerp.</div>`,
   {q:`Is <b>${deel}</b> hier onderwerp (Nominativ) of lijdend voorwerp (Akkusativ)?${DE(zin)}`}));
}

/* Redemittel (SB blz. 12, 20, 28 en 42) */
const rmQ=(o,nr)=>{const p=twQ(o,nr);return (id,nl,de,f,sit,uit,alt)=>p(id,`Hoe zeg je in het Duits: <b>${nl}</b>`,de,f,`${DE(de)}${alt?`<span class="sub">Ook goed: ${alt.join(' · ')}</span><br>`:''}${uit||''}`,
  {q:`${sit} Wat zeg je?`},{tv:`Hoe zeg je in het Duits: <b>${nl}</b> Schrijf de hele zin.`,tvAlt:alt||[]})};
{const r=rmQ('rm1','Redemittel SB blz. 12 en 20');
 r('b1','Goedemorgen!','Guten Morgen!',[['Gute Morgen!','der Morgen: Guten Morgen.'],['Gut Morgen!','Het is Guten Morgen, met -en.'],['Guten Morgend!','Morgen zonder d.']],'Het is acht uur ’s ochtends en je groet je docent.','Guten Morgen, Guten Tag, Guten Abend: altijd Guten.');
 r('b2','Goedenavond!','Guten Abend!',[['Gute Abend!','der Abend: Guten Abend.'],['Gute Nacht!','Gute Nacht = welterusten, dat zeg je als je gaat slapen.'],['Guten Avend!','Abend met een b.']],'Het is acht uur ’s avonds en je groet de buurvrouw.');
 r('b3','Tot ziens! (beleefd)','Auf Wiedersehen!',[['Auf Widersehen!','Wiedersehen schrijf je met ie.'],['Tot Wiedersehen!','tot is Nederlands.'],['Bis Wiedersehen!','Het is Auf Wiedersehen.']],'Je neemt afscheid van de directeur.');
 r('b4','Doei, tot morgen!','Tschüs, bis morgen!',[['Tschüs, tot morgen!','tot = bis.'],['Tschüs, bis morgens!','morgens = ’s ochtends. Tot morgen = bis morgen.'],['Tschüs, bis Morgen!','morgen (de dag na vandaag) schrijf je met een kleine letter. der Morgen (de ochtend) met een hoofdletter.']],'Je gaat naar huis en zegt je vriendin gedag. Je ziet haar morgen weer.','',['Tschüss, bis morgen!']);
 r('b5','Hoe gaat het?','Wie geht’s?',[['Was geht’s?','Hoe = Wie.'],['Wie gehst du?','Zo zeg je het niet. Het is: Wie geht’s? (Wie geht es dir?)'],['Wie gaat es?','gaat is Nederlands.']],'Je ziet een vriend en wilt weten hoe het met hem is.','',["Wie geht's?",'Wie geht es dir?','Wie geht es?']);
 r('n1','Ik heet Noor.','Ich heiße Noor.',[['Ich heißt Noor.','Bij ich hoort heiße.'],['Ich bin heiße Noor.','Alleen: Ich heiße … (of: Ich bin Noor.)'],['Mein Name heißt Noor.','Het is Mein Name ist Noor.']],'Je stelt jezelf voor in de klas.','',['Ich bin Noor.','Mein Name ist Noor.']);
 r('n2','Ik woon in Utrecht.','Ich wohne in Utrecht.',[['Ich wohnst in Utrecht.','Bij ich hoort wohne.'],['Ich wohne aus Utrecht.','Wonen ín een stad: in.'],['Ich woone in Utrecht.','wohnen met h.']],'Iemand vraagt: „Wo wohnst du?”');
 r('n3','Ik kom uit Nederland.','Ich komme aus den Niederlanden.',[['Ich komme aus Niederlande.','die Niederlande is meervoud: aus den Niederlanden.'],['Ich komme von den Niederlanden.','Uit een land = aus.'],['Ich komme aus Nederland.','Nederland = die Niederlande.']],'Iemand vraagt: „Woher kommst du?”','',['Ich komme aus Holland.']);
 r('m1','Ik vind paarden leuk.','Ich mag Pferde.',[['Ich magst Pferde.','Bij ich: mag.'],['Ich möge Pferde.','mögen: ich mag.'],['Ich mag Pferden.','Meervoud: die Pferde.']],'Je vertelt wat je leuk vindt: paarden.');
 r('m2','Ik vind biologie niet leuk.','Ich mag Bio nicht.',[['Ich nicht mag Bio.','nicht staat niet vóór het werkwoord.'],['Ich mag Bio nichts.','nichts = niets. Niet = nicht.'],['Ich mögt Bio nicht.','Bij ich: mag.']],'Je vertelt dat je biologie niet leuk vindt.','nicht staat aan het eind: Ich mag Bio nicht.',['Ich mag Biologie nicht.']);
 r('m3','Wiskunde vind ik saai.','Mathe finde ich langweilig.',[['Mathe ich finde langweilig.','Het werkwoord staat op plek 2: Mathe finde ich …'],['Mathe finde ich langweilich.','langweilig schrijf je met g.'],['Mathe findet ich langweilig.','Bij ich: finde.']],'Je vertelt wat je van wiskunde vindt: saai.','',['Ich finde Mathe langweilig.']);
 r('v1','Dit is mijn vriendin Mia.','Das ist meine Freundin Mia.',[['Das ist mein Freundin Mia.','die Freundin: meine.'],['Das ist meine Freund Mia.','vriendin = die Freundin.'],['Das sind meine Freundin Mia.','Eén persoon: Das ist.']],'Je stelt je vriendin Mia voor.');
 r('v2','Hij is twaalf jaar oud.','Er ist zwölf Jahre alt.',[['Er hat zwölf Jahre alt.','Leeftijd gaat met sein: Er ist …'],['Er ist zwölf Jahren alt.','Het is Jahre, zonder n.'],['Er ist zwölf Jahre oud.','oud = alt.']],'Je vertelt hoe oud je broer is: 12.','',['Er ist zwölf.']);
 r('v3','Zij woont in Hamburg.','Sie wohnt in Hamburg.',[['Sie wohnst in Hamburg.','wohnst hoort bij du.'],['Er wohnt in Hamburg.','zij = sie.'],['Sie wohne in Hamburg.','wohne hoort bij ich.']],'Je vertelt waar je nicht woont: in Hamburg.');
 r('v4','Dit zijn Tim en Jonas.','Das sind Tim und Jonas.',[['Das ist Tim und Jonas.','Twee personen: Das sind.'],['Das seid Tim und Jonas.','seid hoort bij ihr.'],['Dass sind Tim und Jonas.','das (dit) met één s.']],'Je stelt twee vrienden voor.');
 r('v5','Hij houdt van voetbal.','Er mag Fußball.',[['Er magt Fußball.','mögen: er mag, zonder -t.'],['Er mögt Fußball.','mögt hoort bij ihr.'],['Er mag Voetbal.','voetbal = Fußball.']],'Je vertelt wat je broer leuk vindt: voetbal.','',['Er spielt gern Fußball.']);
}
{const r=rmQ('rm2','Redemittel SB blz. 28');
 r('t1','Mijn hond is klein en bruin.','Mein Hund ist klein und braun.',[['Meine Hund ist klein und braun.','der Hund: mein.'],['Mein Hund hat klein und braun.','Zo is hij: sein → ist.'],['Mein Hund ist klein und bruin.','bruin = braun.']],'Je beschrijft je hond: klein en bruin.');
 r('t2','Mijn kat is drie jaar oud.','Meine Katze ist drei Jahre alt.',[['Mein Katze ist drei Jahre alt.','die Katze: meine.'],['Meine Katze hat drei Jahre.','Leeftijd gaat met sein: ist drei Jahre alt.'],['Meine Katze ist drei Jahr alt.','Meervoud: Jahre.']],'Je vertelt hoe oud je kat is: drie.');
 r('t3','Hij houdt van wortels.','Er mag Karotten.',[['Er magt Karotten.','mögen: er mag.'],['Er mögt Karotten.','mögt hoort bij ihr.'],['Er mag Karotte.','Meervoud: Karotten.']],'Je vertelt wat je konijn graag eet: wortels.');
 r('t4','Mijn lievelingsdier is de vogel.','Mein Lieblingstier ist der Vogel.',[['Meine Lieblingstier ist der Vogel.','das Lieblingstier: mein.'],['Mein Lieblingstier ist den Vogel.','Na sein staat de Nominativ: der Vogel.'],['Mein Lievelingstier ist der Vogel.','Lieblingstier met b.']],'Je vertelt welk dier je het leukst vindt: de vogel.');
 r('t5','Er zijn veel dieren in de dierentuin.','Im Zoo gibt es viele Tiere.',[['Im Zoo geben es viele Tiere.','Het is altijd es gibt.'],['Im Zoo es gibt viele Tiere.','Na Im Zoo komt het werkwoord op plek 2: gibt es.'],['Im Zoo gibt es viel Tiere.','Veel + meervoud: viele.']],'Je vertelt over de dierentuin: veel dieren.','',['Es gibt viele Tiere im Zoo.']);
 r('t6','Heb jij een huisdier?','Hast du ein Haustier?',[['Hast du einen Haustier?','das Haustier: ein.'],['Hat du ein Haustier?','Bij du: hast.'],['Du hast ein Haustier?','Bij een ja/nee-vraag staat het werkwoord vooraan.']],'Je interviewt een klasgenoot over huisdieren.');
 r('t7','Hoe heet jouw hond?','Wie heißt dein Hund?',[['Wie heißt deine Hund?','der Hund: dein.'],['Was heißt dein Hund?','Was heißt …? = Wat betekent …? Naar een naam vraag je met Wie.'],['Wie heiße dein Hund?','dein Hund = er: heißt.']],'Je wilt weten hoe de hond van je klasgenoot heet.');
 r('t8','Zij heeft geen huisdier.','Sie hat kein Haustier.',[['Sie hat nicht ein Haustier.','Geen + zelfstandig naamwoord = kein.'],['Sie hat keinen Haustier.','das Haustier: kein.'],['Sie habt kein Haustier.','Bij sie (één meisje): hat.']],'Je vertelt na het interview over Lisa: zij heeft geen huisdier.');
}
{const r=rmQ('rm3','Redemittel SB blz. 42');
 const AM='<b>am</b> + dag of dagdeel (am Montag, am Nachmittag), <b>um</b> + tijd (um acht Uhr). Begint de zin niet met het onderwerp, dan komt het werkwoord op plek 2: Am Montag <b>habe</b> ich …';
 r('d1','Op maandag heb ik om acht uur les.','Am Montag habe ich um acht Uhr Unterricht.',[['Am Montag ich habe um acht Uhr Unterricht.','Het werkwoord op plek 2: Am Montag habe ich …'],['Im Montag habe ich um acht Uhr Unterricht.','Op een dag = am.'],['Am Montag habe ich am acht Uhr Unterricht.','Om een tijd = um.']],'Je vertelt hoe laat je maandag begint.',AM,['Am Montag habe ich um acht Uhr Schule.','Ich habe am Montag um acht Uhr Unterricht.']);
 r('d2','Ik sta om zeven uur op.','Ich stehe um sieben Uhr auf.',[['Ich aufstehe um sieben Uhr.','aufstehen is scheidbaar: auf gaat naar het eind. Ich stehe … auf.'],['Ich stehst um sieben Uhr auf.','Bij ich: stehe.'],['Ich stehe um sieben Uhr op.','op = auf.']],'Je vertelt over je ochtend: opstaan om zeven uur.','aufstehen is scheidbaar, net als opstaan: Ik sta om zeven uur <b>op</b> = Ich stehe um sieben Uhr <b>auf</b>.');
 r('d3','Om half acht ga ik de deur uit.','Um halb acht gehe ich aus dem Haus.',[['Um halb acht ich gehe aus dem Haus.','Het werkwoord op plek 2: Um halb acht gehe ich …'],['Um half acht gehe ich aus dem Haus.','half = halb.'],['Um halb acht gehe ich aus das Haus.','Het is een vaste uitdrukking: aus dem Haus gehen.']],'Je vertelt hoe laat je van huis gaat: 7.30 uur.',AM);
 r('d4','De les begint om kwart over acht.','Der Unterricht beginnt um Viertel nach acht.',[['Der Unterricht beginnt um Viertel vor acht.','Kwart over = Viertel nach. Viertel vor = kwart voor.'],['Der Unterricht beginnt am Viertel nach acht.','Om een tijd = um.'],['Der Unterricht begint um Viertel nach acht.','beginnen: er beginnt, met nn.']],'Je vertelt hoe laat de les begint: 8.15 uur.');
 r('d5','Van twaalf tot één uur heb ik middagpauze.','Von zwölf bis ein Uhr habe ich Mittagspause.',[['Von zwölf bis ein Uhr ich habe Mittagspause.','Het werkwoord op plek 2.'],['Von zwölf tot ein Uhr habe ich Mittagspause.','tot = bis.'],['Von zwölf bis ein Uhr habe ich Mittagpause.','Mittagspause, met s in het midden.']],'Je vertelt wanneer je middagpauze hebt: 12–13 uur.','',['Von zwölf bis eins habe ich Mittagspause.','Ich habe von zwölf bis ein Uhr Mittagspause.']);
 r('d6','’s Middags maak ik huiswerk.','Am Nachmittag mache ich Hausaufgaben.',[['Im Nachmittag mache ich Hausaufgaben.','Dagdeel = am: am Nachmittag.'],['Am Nachmittag ich mache Hausaufgaben.','Het werkwoord op plek 2.'],['Am Nachmittag macht ich Hausaufgaben.','Bij ich: mache.']],'Je vertelt wat je na school doet: huiswerk.',AM,['Nachmittags mache ich Hausaufgaben.','Ich mache am Nachmittag Hausaufgaben.']);
 r('d7','Op zaterdag en zondag heb ik vrij.','Am Samstag und am Sonntag habe ich frei.',[['Am Samstag und am Sonntag ich habe frei.','Het werkwoord op plek 2.'],['Im Samstag und im Sonntag habe ich frei.','Op een dag = am.'],['Am Zaterdag und am Sonntag habe ich frei.','zaterdag = Samstag.']],'Je vertelt over het weekend.',AM,['Am Samstag und Sonntag habe ich frei.','Am Wochenende habe ich frei.']);
 r('d8','Op woensdag heb ik vrije tijd.','Am Mittwoch habe ich Freizeit.',[['Am Mitwoch habe ich Freizeit.','Mittwoch met tt.'],['Am Mittwoch ich habe Freizeit.','Het werkwoord op plek 2.'],['Am Mittwoch habe ich Freizeiten.','Freizeit zonder -en.']],'Je vertelt dat je woensdagmiddag vrij bent.',AM,['Mittwochs habe ich Freizeit.']);
 const DAG=['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'];
 const tg=twQ('rm3','Wochentage und Tageszeiten');
 [['Mittwoch',3],['Freitag',5],['Samstag',6],['Montag',1]].forEach(([d,i],k)=>{const a='der '+DAG[i%7];
   tg('wt'+(k+1),`Welke dag komt na <b>der ${d}</b>?`,a,[DAG[(i+1)%7],DAG[(i+6)%7],DAG[(i+5)%7]].map(x=>['der '+x,`der ${x} is ${['maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag','zondag'][DAG.indexOf(x)]}.`]),
     `Na der ${d} komt <b>${a}</b>.<div class="why">Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag. Alle dagen zijn der-woorden.</div>`,
     {q:`Wat is het Duits voor <b>${['maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag','zondag'][i%7]}</b>?`},{tv:`Welke dag komt na der ${d}? Schrijf hem op met der.`})});
 const TZ=[['7.00 uur','am Morgen'],['10.00 uur','am Vormittag'],['12.00 uur','am Mittag'],['15.00 uur','am Nachmittag'],['20.00 uur','am Abend'],['3.00 uur','in der Nacht']];
 TZ.forEach(([t,a],k)=>{const fo=TZ.filter(x=>x[1]!==a).slice(k%2,k%2+3);
   tg('tz'+(k+1),`Welk dagdeel past bij <b>${t}</b>?`,a,fo.map(x=>[x[1],`${x[1]} is rond ${x[0]}.`]),
     `${t} = <b>${a}</b><div class="why">am Morgen (vroeg) · am Vormittag (tot 12) · am Mittag (12 uur) · am Nachmittag (na 12) · am Abend · <b>in der Nacht</b> (die Nacht, dus niet am).</div>`,
     {q:`Het is ${t}. Hoe zeg je in welk dagdeel dat is?`})});
}

SECS.unshift(
 {id:'zahl',par:'tw',nr:'Z',name:'Zahlen bis 100',c:'--c1',sub:'SB blz. 16 en 17 · getallen in letters',
  rules:[['Eerst de eenheden, dan und, dan de tientallen','23 = dreiundzwanzig · 45 = fünfundvierzig','Alles aan elkaar, net als drieëntwintig'],
   ['Let op de spelling','dreißig (ß) · sechzehn, sechzig (zonder s) · siebzehn, siebzig (zonder en)','21 = einundzwanzig (zonder s)'],['100','hundert of einhundert','']]},
 {id:'pv',par:'tw',nr:'P',name:'Personalpronomen und Verben',c:'--c2',sub:'SB blz. 12 en 20 · ich, du, er … en rijtjes sein, heißen, wohnen, kommen, spielen',
  rules:[['Persoonlijk voornaamwoord','ich, du, er/sie/es, wir, ihr, sie/Sie','Sie met hoofdletter = u'],['Regelmatig','stam + e, st, t, en, t, en','wohnen: ich wohne, du wohnst, er wohnt …'],
   ['sein (onregelmatig)','ich bin, du bist, er ist, wir sind, ihr seid, sie sind','ihr seid met d'],['haben','ich habe, du hast, er hat, wir haben, ihr habt, sie haben','']]},
 {id:'wf',par:'tw',nr:'W',name:'W-Fragen und Antworten',c:'--c3',sub:'SB blz. 12 · vraagwoorden en de vraag bij een antwoord',
  rules:[[WRULE,'Wo wohnst du?',''],['Vraagwoorden','Wie (hoe) · Wo (waar) · Woher (waarvandaan) · Was (wat) · Wer (wie, persoon) · Wann (wanneer)','Wie alt · Wie viel Uhr · Wie viele · Wie lange']]},
 {id:'jn',par:'tw',nr:'J',name:'Ja/Nein-Fragen und Antworten',c:'--c4',sub:'SB blz. 28 · werkwoord vooraan, antwoorden met kein of nicht',
  rules:[[JRULE,'Hast du einen Hund?',''],['kein of nicht?','kein(e/en) vóór een zelfstandig naamwoord · nicht bij werkwoord, bijvoeglijk naamwoord, plaats','Ich habe keinen Hund. · Er ist nicht groß.']]},
 {id:'ap',par:'tw',nr:'A',name:'Artikel, Personalpronomen, Nominativ und Akkusativ',c:'--c5',sub:'SB blz. 20 en 28 · der/ein/kein, er/sie/es, 1e en 4e naamval',
  rules:[['der → er · die → sie · das → es','meervoud → sie','Das ist mein Pferd. Es ist groß.'],['Nominativ','onderwerp, en na sein: Das ist ein Hund.',''],
   ['Akkusativ','lijdend voorwerp, na haben, mögen, es gibt …','alleen der verandert: den, einen, keinen, meinen']]},
 {id:'rm1',par:'tw',nr:'R1',name:'Redemittel: begroeten, jezelf en anderen voorstellen',c:'--c6',sub:'SB blz. 12 en 20 · begrüßen, Name, Wohnort, was du magst, Personen vorstellen',
  rules:[['Begroeten','Hallo! · Guten Morgen! · Guten Tag! · Guten Abend! · Wie geht’s?',''],['Afscheid','Tschüs! · Bis morgen! · Auf Wiedersehen!',''],
   ['Jezelf voorstellen','Ich heiße … · Ich wohne in … · Ich komme aus … · Ich bin … Jahre alt.',''],['Wat je leuk vindt','Ich mag … · Ich mag … nicht. · … finde ich toll / langweilig.',''],['Iemand voorstellen','Das ist … · Er/Sie heißt … · Er/Sie wohnt in …','Das sind …']]},
 {id:'rm2',par:'tw',nr:'R2',name:'Redemittel: over dieren praten',c:'--c1',sub:'SB blz. 28 · Tiere beschreiben, Interviews machen und berichten',
  rules:[['Een dier beschrijven','Mein Hund heißt … · Er ist … Jahre alt. · Er ist klein und braun. · Er mag …',''],['Interview','Hast du ein Haustier? · Wie heißt es? · Was ist dein Lieblingstier?',''],['Berichten','Lisa hat kein Haustier. Ihr Lieblingstier ist …','']]},
 {id:'rm3',par:'tw',nr:'R3',name:'Redemittel: tijden, dagen en je dag',c:'--c2',sub:'SB blz. 42 · Uhrzeiten, Tageszeiten, Wochentage, Tagesablauf',
  rules:[['am + dag of dagdeel','am Montag · am Morgen · am Nachmittag','maar: in der Nacht'],['um + tijd','um halb acht · um Viertel nach acht',''],['Werkwoord op plek 2','Am Montag habe ich … · Um sieben Uhr stehe ich auf.',''],['Scheidbaar','aufstehen → Ich stehe um sieben Uhr auf.','']]});
SNAP.zahl=[['Waarom zeg je de eenheden eerst?','Net als in het Nederlands: drie-en-twintig = drei-und-zwanzig. Schrijf het als één woord.']];
SNAP.jn=[['kein of nicht?','Staat er een zelfstandig naamwoord met ein of zonder lidwoord? Dan <b>kein</b>: Ich habe keinen Hund. Ich habe keine Zeit. Anders <b>nicht</b>: Er ist nicht groß. Ich wohne nicht in Berlin.']];
SNAP.ap=[['Waarom ein bij „Das ist” en einen bij „Ich habe”?','Na <b>sein</b> (ist, sind) zeg je wat iets ís: dat is geen lijdend voorwerp, dus 1e naamval: Das ist <b>ein</b> Hund. Bij haben heb je iets: lijdend voorwerp, Akkusativ: Ich habe <b>einen</b> Hund.']];

const LOG=[['ma 26 okt','Werkblad blz. 32','opdracht 6, 7 en 8a'],['vr 6 nov','Arbeitsbuch blz. 19, 24, 26 en 27','woorden Deine Wörter 2 en 3, opdracht 12 (blz. 24), opdracht 1, 2 en 3 (blz. 26)'],['di 10 nov','Kapitel 4 Mein Tag: Arbeitsbuch blz. 32 en 39','opdracht 1a, 1b en 2a (blz. 32), woorden Deine Wörter 4 (blz. 39), extra klokken'],['za 14 nov','Toetsweek 2: stofoverzicht en Grammatikübersicht','Zahlen bis 100, Personalpronomen und Verben, W-Fragen, Ja/Nein-Fragen, Artikel en Nominativ/Akkusativ, Redemittel SB blz. 12, 20, 28 en 42']];
const LIJST=[];[...W4A,...W4B,...AB19,...AB27,...VOC].forEach(v=>{if(!LIJST.some(w=>w[0]===v[0]))LIJST.push([v[0],v[1]])});
return {woorden:{taal:'Duits',typen:true,lijst:LIJST},id:'du',naam:'Duits',afk:'DU',kop:'Toetsweek 2 (SB blz. 12, 20, 28, 42) · Kapitel 4 Mein Tag (AB blz. 32 en 39) · Arbeitsbuch blz. 19, 24, 26 en 27 · Haustiere',log:LOG,SECS,SNAP,BEG:VOC.map(v=>[v[0],v[1],'ex']),Q,snapHtml,
  leer:['tw','k4','ab','ws','ex'],reken:false,volledig:false,snapInVraag:false,toetsvorm:true,hoofdletters:true,tvCustom:['zin'],
  custom:{rij:drawRij,zin:drawZin,volg:drawVolg},
  PN:{tw:'Toetsweek 2 · Zahlen, Grammatik en Redemittel (SB blz. 12, 20, 28, 42)',k4:'Kapitel 4 Mein Tag · AB blz. 32 en woorden blz. 39',ab:'Arbeitsbuch blz. 19, 24, 26 en 27 · woorden en opdrachten',ws:'Werkblad blz. 32 · opdracht 6, 7 en 8a',ex:'Extra: Akkusativ en woordjes',mix:'Door elkaar'}};
})();
