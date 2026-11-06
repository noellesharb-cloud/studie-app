/* Duits, Kapitel 6 Haustiere: werkblad blz. 32, opdracht 6, 7 en 8a, plus Akkusativ en woordjes.
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
  q:`Kies het passende werkwoord.${DE(zin)}${KH}`,a:ans,
  f:BANK.filter(w=>w!==ans).map(w=>[w,`„${w}” betekent ${MEAN[w]}. Dat past hier niet.`]),
  u:`${DE(kleur(zin.replace('___','<b>'+ans+'</b>')))}<span class="nl">${nl}</span>`,
  v:{q:`Wat doe je met het blauwe stuk? Kies het werkwoord dat past.${DE(kleur(zin))}`}}));

/* 7: rijtjes bouwen */
Object.keys(VERBS).forEach(v=>Q.push({id:'r-'+v,o:'o7',nr:'Opdracht 7 · rijtje',type:'rij',verb:v,a:VERBS[v].f.join(', '),
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
  q:`Welk antwoord is een goede hele zin?${DE(vr)}`,a,f,u:`${DE(a)}Schrijf in je boek je eigen antwoord, ook als een hele zin. Ja of nee mag allebei.`,
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
  inf,subj,vopts:[[vopts[0]],...vopts.slice(1)],words,kind,model,nl,a:kaal(model)}));

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
  q:`Siri: <b>${info}</b>. Welke zin is goed?`,a,f,
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
  const v=VERBS[q.verb];
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
      :`<div class="fb bad"><div class="head">Niet goed</div><div><b>Dit ging er mis:</b></div><div class="mistake">De rode vakjes kloppen niet. Het goede antwoord staat erachter.</div><div class="why">${v.uitleg}</div></div>`)};
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
      ${ok?'':'<div><b>Het goede antwoord is:</b></div>'}${DE(kleur(q.model))}<div class="nl">${q.nl}</div><div class="why">${regel}.</div></div>`)};
}

const LOG=[['ma 26 okt','Werkblad blz. 32','opdracht 6, 7 en 8a'],['vr 6 nov','Arbeitsbuch blz. 19, 24, 26 en 27','woorden Deine Wörter 2 en 3, opdracht 12 (blz. 24), opdracht 1, 2 en 3 (blz. 26)']];
const LIJST=[];[...AB19,...AB27,...VOC].forEach(v=>{if(!LIJST.some(w=>w[0]===v[0]))LIJST.push([v[0],v[1]])});
return {woorden:{taal:'Duits',typen:true,lijst:LIJST},id:'du',naam:'Duits',afk:'DU',kop:'Arbeitsbuch blz. 19, 24, 26 en 27 · Kapitel 6 Haustiere',log:LOG,SECS,SNAP,BEG:VOC.map(v=>[v[0],v[1],'ex']),Q,snapHtml,
  leer:['ab','ws','ex'],reken:false,volledig:false,snapInVraag:false,
  custom:{rij:drawRij,zin:drawZin},
  PN:{ab:'Arbeitsbuch blz. 19, 24, 26 en 27 · woorden en opdrachten',ws:'Werkblad blz. 32 · opdracht 6, 7 en 8a',ex:'Extra: Akkusativ en woordjes',mix:'Door elkaar'}};
})();
