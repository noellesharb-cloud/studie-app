/* Frans, Chapitre 2 · werkboek blz. 66–67: exercice 10c (Ken Amante, woorden), 11a, 11b, 11c, 12a (mots cachés), 12b (dialogue), 12c en 12d (rollenspel).
   Alleen vragen en uitleg; de manier van oefenen staat in oefen/engine.js.
   Antwoorden 11a, 11b en 11c komen uit haar werkboek. De woordzoeker 12a is door Claude opgelost.
   12b: de zinnen 'staan in de tekst', maar die tekst is niet meegestuurd; de zinnen van A en B zijn door Claude gemaakt.
   10c: de tekst over Ken Amante ontbreekt; daarom alleen de woorden en de zinsbouw 'Ken est …, parce que …'.
   Uitleg en extra oefeningen zijn door Claude gemaakt en kunnen afwijken van die van de docent. */
window.VAKDATA=window.VAKDATA||{};
VAKDATA.fa=(()=>{
const FR=s=>`<div class="de">${s}</div>`;

const SECS=[
 {id:'e10',par:'2',nr:'10',name:'Comment est Ken Amante?',c:'--c6',sub:'Blz. 66 · exercice 10c · bijvoeglijke naamwoorden en parce que',
  rules:[['timide','verlegen',''],['curieux','nieuwsgierig',''],['câlin','aanhalig, knuffelig',''],['responsable','verantwoordelijk',''],['intelligent','slim',''],['gentil','aardig, lief',''],['généreux','vrijgevig',''],
   ['Ken est …, parce que …','Ken is …, omdat …','parce que + il / elle → parce qu’il, parce qu’elle']]},
 {id:'e11',par:'2',nr:'11',name:'Paires, animaux, mots',c:'--c1',sub:'Blz. 66–67 · exercice 11a, 11b en 11c',
  rules:[['11a · paren','le chien – animal domestique · donner – généreux · malade – 40 degrés de fièvre','heureux – rire · je m’occupe de – je suis responsable · vieux – quatre-vingt-dix ans'],
   ['11b · huisdieren','un oiseau · un lapin · une tortue · un cochon d’Inde · un hamster · un poisson','Let op: alleen une tortue is vrouwelijk.'],
   ['11c · woorden maken','envoyer (opsturen) · nourriture (voedsel) · acheter (kopen) · exister (bestaan) · intelligent (slim)','']]},
 {id:'e12',par:'2',nr:'12',name:'Mots cachés en dialogue',c:'--c2',sub:'Blz. 67 · exercice 12a en 12b',
  rules:[['12a · zo is je huisdier','vieux (oud) · sympa (leuk) · intelligent (slim) · petit (klein)','noir (zwart) · adorable (schattig) · câlin (aanhalig)'],
   ['12b · drie vragen','Tu as un animal domestique ? · Il s’appelle comment ? · Il est comment ?','Heb je een huisdier? · Hoe heet hij? · Hoe is hij?'],
   ['Antwoorden','Oui, j’ai un chien. · Il s’appelle Max. · Il est noir et adorable.','']]},
 {id:'e12c',par:'2',nr:'12c',name:'Jeu de rôle: mon animal',c:'--c3',sub:'Blz. 67 · exercice 12c en 12d · met je buur',
  rules:[['Een mannetjesdier (il)','J’ai un chien. Il s’appelle Max. Il est noir et adorable.',''],
   ['Een vrouwtjesdier (elle)','J’ai une chatte. Elle s’appelle Olga. Elle est drôle et câline.','Bij elle krijgt een bijvoeglijk naamwoord vaak een -e: câlin → câline, petit → petite, noir → noire.'],
   ['Eindigt het woord al op -e?','dan blijft het gelijk','drôle, adorable, sympa, timide, responsable']]}
];

const Q=[];
/* ---------- 10c: woorden van Ken Amante ---------- */
const K10=[['timide','verlegen'],['curieux','nieuwsgierig'],['câlin','aanhalig, knuffelig'],['responsable','verantwoordelijk'],['intelligent','slim'],['gentil','aardig, lief'],['généreux','vrijgevig']];
K10.forEach(([fr,nl],i)=>{const ander=K10.filter(x=>x[0]!==fr);const kies=[ander[i%6],ander[(i+2)%6],ander[(i+4)%6]];
  Q.push({id:`k10${i+1}`,o:'e10',nr:`10c · ${fr}`,q:`Wat betekent <b>${fr}</b>?`,a:nl,f:kies.map(x=>[x[1],`Dat is ${x[0]}.`]),
    u:`<b>${fr}</b> = ${nl}.`,v:{q:`Hoe zeg je <b>${nl.split(',')[0]}</b> in het Frans?`,a:fr,f:kies.map(x=>[x[0],`${x[0]} betekent ${x[1]}.`])}})});
Q.push({id:'k10z1',o:'e10',nr:'10c · parce que',q:'Wat betekent <b>parce que</b>?',a:'omdat',f:[['maar','maar = mais.'],['want ik','Er zit geen ik (je) in.'],['dus','dus = donc.']],
  u:'<b>parce que</b> = omdat. Je zin wordt: Ken est …, parce que … = Ken is …, omdat …',v:{q:'Hoe zeg je <b>omdat</b> in het Frans?',a:'parce que',f:[['mais','mais = maar.'],['donc','donc = dus.'],['pour','pour = voor, om te.']]}});
Q.push({id:'k10z2',o:'e10',nr:'10c · parce qu’il',q:'Welke zin is goed geschreven?',a:'Ken est gentil, parce qu’il aime les animaux.',
  f:[['Ken est gentil, parce que il aime les animaux.','Vóór il wordt que ingekort tot qu’ (met apostrof).'],['Ken est gentil, parce qu’il aimes les animaux.','Bij il hoort aime, zonder -s.'],['Ken et gentil, parce qu’il aime les animaux.','et = en. Is = est.']],
  tv:'Schrijf in het Frans: Ken is aardig, omdat hij van dieren houdt.',tvAlt:['Ken est gentil parce qu’il aime les animaux.',"Ken est gentil, parce qu'il aime les animaux."],
  u:'<b>parce que + il</b> wordt <b>parce qu’il</b>. Dat heet een elisie: de e van que valt weg vóór een klinker.',
  v:{q:'Hoe schrijf je <i>omdat hij</i> goed in het Frans?',a:'parce qu’il',f:[['parce que il','Vóór een klinker wordt que → qu’.'],['parce qu il','Vergeet de apostrof niet.'],['par ce qu’il','parce is één woord.']]}});
Q.push({id:'k10o',o:'e10',nr:'10c',t:'open',q:'Comment est Ken Amante? Kies twee woorden (timide, curieux, câlin, responsable, intelligent, gentil, généreux) en leg je keuze uit in het Frans: <i>Ken est …, parce que …</i>. Gebruik de tekst.',
  k:['Zin 1 en 2 beginnen met Ken est + een woord uit het rijtje.','Na parce que (of parce qu’il) staat een reden uit de tekst, in het Frans.','Je gebruikt twee verschillende woorden.'],
  vb:['Ken est responsable, parce qu’il s’occupe de … (vul aan uit de tekst).','Ken est généreux, parce qu’il donne … (vul aan uit de tekst).'],
  u:'De tekst over Ken Amante staat niet in de app. Pak de tekst erbij en zoek een zin die past bij het woord dat je kiest. Tip: s’occuper de (zorgen voor) past bij responsable, donner (geven) bij généreux.',
  v:{q:'Kies twee woorden die bij Ken Amante passen en schrijf: Ken est …, parce que … (met een reden uit de tekst).'}});

/* ---------- 11a: paren ---------- */
const P11=[['le chien','animal domestique','een hond een huisdier is'],['donner','généreux','je vrijgevig bent als je geeft'],['malade','40 degrés de fièvre','je met 40 graden koorts ziek bent'],
 ['heureux','rire','je lacht als je blij bent'],['je m’occupe de','je suis responsable','als je voor iets zorgt, ben je ervoor verantwoordelijk'],['vieux','quatre-vingt-dix ans','je met negentig jaar oud bent']];
const NL11={'le chien':'de hond','animal domestique':'huisdier','donner':'geven','généreux':'vrijgevig','malade':'ziek','40 degrés de fièvre':'40 graden koorts','heureux':'blij, gelukkig','rire':'lachen','je m’occupe de':'ik zorg voor','je suis responsable':'ik ben verantwoordelijk','vieux':'oud','quatre-vingt-dix ans':'negentig jaar'};
const RIJ11='heureux, donner, malade, je m’occupe de, vieux, rire, je suis responsable, 40 degrés de fièvre, animal domestique, quatre-vingt-dix ans, généreux, le chien';
P11.forEach(([x,y,om],i)=>{const ander=P11.filter(p=>p[0]!==x);
  Q.push({id:`p11${i+1}`,o:'e11',nr:`11a · ${x}`,q:`Welk woord hoort bij <b>${x}</b> (${NL11[x]})?`,a:y,f:[ander[i%5],ander[(i+2)%5],ander[(i+3)%5]].map(p=>[p[1],`${p[1]} (${NL11[p[1]]}) hoort bij ${p[0]}.`]),
    tv:`Welk woord uit het rijtje hoort bij <b>${x}</b>?<br><small>${RIJ11}</small>`,
    u:`<b>${x}</b> hoort bij <b>${y}</b> (${NL11[y]}), omdat ${om}.`,
    v:{q:`Bij welk woord hoort <b>${y}</b> (${NL11[y]})?`,a:x,f:[ander[(i+1)%5],ander[(i+4)%5]].map(p=>[p[0],`${p[0]} hoort bij ${p[1]}.`])}})});
['heureux','vieux','malade'].forEach((w,i)=>Q.push({id:`p11w${i+1}`,o:'e11',nr:`11a · ${w}`,q:`Wat betekent <b>${w}</b>?`,a:NL11[w],
  f:[['blij, gelukkig','heureux'],['oud','vieux'],['ziek','malade'],['verlegen','timide']].filter(z=>z[1]!==w).map(z=>[z[0],`Dat is ${z[1]}.`]),u:`<b>${w}</b> = ${NL11[w]}.`,
  v:{q:`Hoe zeg je <b>${NL11[w].split(',')[0]}</b> in het Frans?`,a:w,f:['heureux','vieux','malade','timide'].filter(z=>z!==w).map(z=>[z,`${z} = ${NL11[z]||'verlegen'}.`])}}));

/* ---------- 11b: huisdieren ---------- */
const D11=[['een papegaai (een vogel)','un oiseau',['une oiseau','oiseau is mannelijk: un oiseau.'],['un oiseaux','Eén vogel: oiseau. oiseaux is meervoud.']],
 ['een konijn','un lapin',['une lapine','Uit het rijtje: un lapin.'],['un lapain','Schrijf lapin.']],
 ['een schildpad','une tortue',['un tortue','tortue is vrouwelijk: une tortue.'],['une tortu','Vergeet de -e niet: tortue.']],
 ['een cavia','un cochon d’Inde',['un cochon','un cochon alleen is een varken. Een cavia is un cochon d’Inde.'],['une cochon d’Inde','cochon is mannelijk: un.']],
 ['een hamster','un hamster',['une hamster','hamster is mannelijk: un hamster.'],['un hamstre','Gewoon zoals in het Nederlands: hamster.']],
 ['een (goud)vis','un poisson',['un poison','poison (één s) = vergif! Vis = poisson.'],['une poisson','poisson is mannelijk: un.']]];
D11.forEach(([nl,fr,f1,f2],i)=>{const ander=D11.filter(d=>d[1]!==fr)[i%5];
  Q.push({id:`d11${i+1}`,o:'e11',nr:`11b · ${fr.replace(/^une? /,'')}`,q:`Hoe zeg je <b>${nl}</b> in het Frans?`,a:fr,f:[f1,f2,[ander[1],`${ander[1]} = ${ander[0]}.`]],
    tv:`Schrijf in het Frans, met un of une: <b>${nl}</b>`,u:`${nl} = <b>${fr}</b>.`,
    v:{q:`Wat is <b>${fr}</b>?`,a:nl.replace('een ',''),f:D11.filter(d=>d[1]!==fr).slice(0,3).map(d=>[d[0].replace('een ',''),`Dat is ${d[1]}.`])}})});

/* ---------- 11c: woorden maken van stukjes ---------- */
const W11=[['opsturen','en – yer – vo','envoyer',['envoier','Met y: envoyer.'],['anvoyer','Het begint met en-.']],
 ['voedsel','re – ri – nour – tu','nourriture',['nouriture','Twee keer r: nourriture.'],['nourritur','Er staat nog een e aan het eind: -ture.']],
 ['kopen','ter – a – che','acheter',['achêter','Geen accent: acheter.'],['acheté','De stukjes zijn a – che – ter: acheter.']],
 ['bestaan','ter – ex – is','exister',['existe','De stukjes zijn ex – is – ter: exister.'],['egsister','Met x: exister.']],
 ['slim','in – gent – li – tel','intelligent',['inteligent','Twee keer l: intelligent.'],['intelligant','Het eindigt op -gent.']]];
W11.forEach(([nl,st,fr,f1,f2],i)=>Q.push({id:`w11${i}`,o:'e11',nr:i?`11c · ${nl}`:'11c · voorbeeld',q:`Maak het Franse woord voor <b>${nl}</b> van de stukjes: <b>${st}</b>`,a:fr,f:[f1,f2],
  tv:`Zet de stukjes in de goede volgorde en schrijf het woord: <b>${st}</b> (${nl})`,u:`${nl} = <b>${fr}</b>.`,
  v:{q:`Wat betekent <b>${fr}</b>?`,a:nl,f:W11.filter(w=>w[2]!==fr).slice(0,3).map(w=>[w[0],`Dat is ${w[2]}.`])}}));

/* ---------- 12a: woordzoeker ---------- */
const M12=[['oud','vieux',['vieu','Met een x aan het eind: vieux.'],['vieil','Het woord in de woordzoeker is vieux.']],
 ['leuk','sympa',['sympas','Geen s: sympa.'],['simpa','Met y: sympa.']],
 ['slim','intelligent',['inteligent','Twee keer l: intelligent.'],['intelligant','Het eindigt op -gent.']],
 ['klein','petit',['petite','petite is de vrouwelijke vorm. In de woordzoeker staat petit.'],['petti','Schrijf petit.']],
 ['zwart','noir',['noire','noire is de vrouwelijke vorm. In de woordzoeker staat noir.'],['nior','Eerst o, dan i: noir.']],
 ['schattig','adorable',['adorabel','Frans eindigt op -able: adorable.'],['adorables','Eén dier: adorable.']],
 ['aanhalig','câlin',['calin','Op de a staat een dakje: câlin.'],['câline','câline is de vrouwelijke vorm. In de woordzoeker staat câlin.']]];
M12.forEach(([nl,fr,f1,f2],i)=>{const ander=M12.filter(m=>m[1]!==fr)[(i+1)%6];
  Q.push({id:`m12${i+1}`,o:'e12',nr:`12a · ${nl}`,q:`Vertaal <b>${nl}</b>. Het woord staat in de woordzoeker.`,a:fr,f:[f1,f2,[ander[1],`${ander[1]} = ${ander[0]}.`]],
    tv:`Vertaal in het Frans: <b>${nl}</b>`,u:`${nl} = <b>${fr}</b>.`,
    v:{q:`Wat betekent <b>${fr}</b>?`,a:nl,f:M12.filter(m=>m[1]!==fr).slice(i%3,i%3+3).map(m=>[m[0],`Dat is ${m[1]}.`])}})});

/* ---------- 12b: dialogue ---------- */
Q.push({id:'g12a',o:'e12',nr:'12b · vraag 1',q:`Vul aan. A vraagt iets, B antwoordt: <i>Oui, j’ai un chien.</i> Wat vraagt A?`,a:'Tu as un animal domestique ?',
  f:[['Tu es un animal domestique ?','es = bent. Jij bent toch geen huisdier! Heb je = tu as.'],['Il s’appelle comment ?','Die vraag komt pas daarna. B antwoordt hier met ja, ik heb een hond.'],['Tu as animal domestique ?','Vergeet un niet: un animal domestique.']],
  tv:'Vul aan. A vraagt: … B antwoordt: <i>Oui, j’ai un chien.</i> Schrijf de vraag van A in het Frans.',tvAlt:['Tu as un animal ?','Est-ce que tu as un animal domestique ?','Est-ce que tu as un animal ?','Tu as un animal domestique?'],
  u:'<b>Tu as un animal domestique ?</b> = Heb jij een huisdier? (De zin uit de tekst kan iets anders zijn, bijvoorbeeld met <i>Est-ce que</i>.)',
  v:{q:'Hoe vraag je in het Frans: <b>Heb jij een huisdier?</b>'}});
Q.push({id:'g12b',o:'e12',nr:'12b · vraag 2',q:`A vraagt: <i>Il s’appelle comment ?</i> De hond heet Max. Wat antwoordt B?`,a:'Il s’appelle Max.',
  f:[['Il appelle Max.','s’ vergeten: il s’appelle = hij heet.'],['Je m’appelle Max.','Dan heet jij Max. Het gaat om de hond: il s’appelle.'],['Il est Max.','Een naam zeg je met s’appeler: Il s’appelle Max.']],
  tv:'A vraagt: <i>Il s’appelle comment ?</i> De hond heet Max. Schrijf het antwoord van B in het Frans.',tvAlt:["Il s'appelle Max."],
  u:'<b>Il s’appelle Max.</b> = Hij heet Max.',v:{q:'Hoe zeg je in het Frans: <b>Hij heet Max.</b>'}});
Q.push({id:'g12c',o:'e12',nr:'12b · vraag 3',q:`A vraagt: <i>Il est comment ?</i> Max is zwart en schattig. Wat antwoordt B?`,a:'Il est noir et adorable.',
  f:[['Il a noir et adorable.','il a = hij heeft. Hij is = il est.'],['Il est noire et adorable.','noire is vrouwelijk. Max is een mannetje: noir.'],['Il s’appelle noir et adorable.','Dat is het antwoord op een andere vraag.']],
  tv:'A vraagt: <i>Il est comment ?</i> Max is zwart en schattig. Schrijf het antwoord van B in het Frans.',
  u:'<b>Il est noir et adorable.</b> = Hij is zwart en schattig.',v:{q:'Hoe zeg je in het Frans: <b>Hij is zwart en schattig.</b>'}});
Q.push({id:'g12d',o:'e12',nr:'12b · betekenis',q:'Wat betekent <b>Il est comment ?</b>',a:'Hoe is hij? (Hoe ziet hij eruit?)',
  f:[['Hoe heet hij?','Hoe heet hij? = Il s’appelle comment ?'],['Waar is hij?','Waar = où: Il est où ?'],['Hoeveel heb je er?','Daar staat geen getal in.']],
  u:'<b>comment</b> = hoe. <i>Il est comment ?</i> = Hoe is hij? Je antwoordt met bijvoeglijke naamwoorden: Il est noir et adorable.',
  v:{q:'Hoe vraag je in het Frans: <b>Hoe is hij? (Hoe ziet hij eruit?)</b>',a:'Il est comment ?',f:[['Il s’appelle comment ?','Dat is: Hoe heet hij?'],['Il est où ?','Dat is: Waar is hij?'],['Il a comment ?','Hij is = il est.']]}});
Q.push({id:'g12e',o:'e12',nr:'12b · betekenis',q:'Wat betekent <b>Il s’appelle comment ?</b>',a:'Hoe heet hij?',
  f:[['Hoe is hij?','Dat is: Il est comment ?'],['Hoe heet jij?','Hoe heet jij? = Tu t’appelles comment ?'],['Roep je hem?','appeler = roepen, maar s’appeler = heten.']],
  u:'<b>s’appeler</b> = heten. <i>Il s’appelle comment ?</i> = Hoe heet hij?',
  v:{q:'Hoe vraag je in het Frans: <b>Hoe heet hij?</b>',a:'Il s’appelle comment ?',f:[['Il est comment ?','Dat is: Hoe is hij?'],['Tu t’appelles comment ?','Dat is: Hoe heet jij?'],['Il appelle comment ?','Vergeet s’ niet.']]}});

/* ---------- 12c en 12d: rollenspel ---------- */
Q.push({id:'r12a',o:'e12c',nr:'Rollenspel 12c · kat',q:'Olga is een poes. Ze is grappig en knuffelig. Welke zin is goed?',a:'Elle est drôle et câline.',
  f:[['Elle est drôle et câlin.','Bij elle krijgt câlin een -e: câline.'],['Il est drôles et câline.','Olga is een poes: elle. En één dier: drôle zonder -s.'],['Elle a drôle et câline.','elle a = zij heeft. Zij is = elle est.']],
  tv:'Olga is een poes. Schrijf in het Frans: <b>Zij is grappig en knuffelig.</b>',tvAlt:['Elle est câline et drôle.'],
  u:'<b>Elle est drôle et câline.</b> drôle eindigt al op -e en blijft gelijk; câlin wordt câline.',v:{q:'Schrijf over de poes Olga: zij is grappig en knuffelig.'}});
Q.push({id:'r12b',o:'e12c',nr:'Rollenspel 12c · kat',q:'Hoe zeg je <b>grappig</b> in het Frans?',a:'drôle',
  f:[['drôlement','Dat is een bijwoord (erg).'],['câlin','câlin = aanhalig.'],['gentil','gentil = aardig.']],
  u:'grappig = <b>drôle</b> (ook: marrant, rigolo).',v:{q:'Wat betekent <b>drôle</b>?',a:'grappig',f:[['schattig','schattig = adorable.'],['verlegen','verlegen = timide.'],['oud','oud = vieux.']]}});
[['câlin','câline'],['petit','petite'],['noir','noire'],['intelligent','intelligente'],['adorable','adorable'],['sympa','sympa']].forEach(([m,v],i)=>{
  const fout=m===v?[[m+'s',`-s is voor meervoud. ${m} eindigt al op -${m.slice(-1)} en blijft bij elle gelijk.`]]:[[m,`Bij elle krijgt ${m} een -e.`],[m+'s','-s is voor meervoud. Eén poes: '+v+'.']];
  Q.push({id:`r12f${i+1}`,o:'e12c',nr:`Rollenspel 12c · elle`,q:`Maak af voor een poes: <i>Elle est …</i> (<b>${m}</b>)`,a:v,f:fout,
    tv:`Maak af voor een poes: <i>Elle est …</i> (${m})`,u:`Elle est <b>${v}</b>. ${m===v?'Woorden op -e (en sympa) blijven gelijk.':'Bij elle krijgt het bijvoeglijk naamwoord een -e.'}`,
    v:{q:`Een poes is <b>${m}</b>. Hoe schrijf je dat na <i>Elle est</i>?`}})});
Q.push({id:'r12o',o:'e12c',nr:'Rollenspel 12c',t:'open',q:'Stel drie vragen aan je buur over de kat Olga (grappig, knuffelig), zoals in 12b. Schrijf ook de antwoorden op.',
  k:['Vraag 1: Tu as un animal domestique ?','Vraag 2: Il/Elle s’appelle comment ?','Vraag 3: Il/Elle est comment ?','Antwoord met drôle en câlin(e).'],
  vb:['– Tu as un animal domestique ? – Oui, j’ai une chatte. – Elle s’appelle comment ? – Elle s’appelle Olga. – Elle est comment ? – Elle est drôle et câline.','Met un chat mag ook: – Oui, j’ai un chat. – Il s’appelle comment ? – Il s’appelle Olga. – Il est comment ? – Il est drôle et câlin.'],
  u:'Dezelfde drie vragen als in 12b. Bij een poes (une chatte) gebruik je elle; bij un chat il.',v:{q:'Speel het gesprek over Olga de kat: drie vragen en drie antwoorden.'}});
Q.push({id:'r12d',o:'e12c',nr:'Rollenspel 12d',t:'open',q:'Schrijf in het Nederlands over je eigen huisdier (of een dier dat je wilt): wat voor dier, naam, hoe het is. Stel jezelf daarna in het Frans voor aan je buur.',
  k:['J’ai un/une + dier.','Il/Elle s’appelle + naam.','Il/Elle est + twee woorden (vrouwtjesdier: met -e).'],
  vb:['Nederlands: hond, Bobby, klein en aanhalig. Frans: J’ai un chien. Il s’appelle Bobby. Il est petit et câlin.','Heb je geen huisdier: Je n’ai pas d’animal domestique. Mais je voudrais un lapin. Il est petit et adorable.'],
  u:'Gebruik de woorden van 11b en 12a. Vrouwtjesdier: elle, en een -e achter câlin, petit, noir, intelligent.',v:{q:'Stel je (droom)huisdier voor in drie Franse zinnen: dier, naam, hoe het is.'}});

/* ---------- woordzoeker voor op de onderdeelpagina ---------- */
const GRID=['VISADORABLE','VCYDVPEMDLP','IIMNOCIIRAE','EPPENOIRÔNT','UFAGAABLLCI','XINTCÂLINPT','INTELLIGENT'];
const grid=`<table style="border-collapse:collapse;margin:6px 0;font-weight:700">${GRID.map(r=>`<tr>${[...r].map(c=>`<td style="border:1px solid var(--line);width:1.6em;height:1.6em;text-align:center">${c}</td>`).join('')}</tr>`).join('')}</table>`;
const SNAP={e12:[['De woordzoeker van 12a',`${grid}<details><summary>Oplossing (eerst zelf zoeken!)</summary><p><b>vieux</b> en <b>petit</b> staan van boven naar beneden (eerste en laatste kolom), <b>sympa</b> in de derde kolom omlaag. <b>adorable</b>, <b>noir</b>, <b>câlin</b> en <b>intelligent</b> staan van links naar rechts.</p></details>`],
  ['Waarom staat er bij 12b steeds il?','Het dier is un chien: mannelijk. Daarom il s’appelle, il est. Bij een vrouwtjesdier (une chatte, une tortue) zeg je elle.']],
 e10:[['Waarom parce qu’il en niet parce que il?','Als het volgende woord met een klinker begint, valt de e van que weg: <b>qu’il</b>, <b>qu’elle</b>. Net als je → j’ai en le → l’animal.']]};
function snapHtml(id){return (SNAP[id]||[]).map(x=>`<details class="snap"><summary>${x[0]}</summary><div>${x[1]}</div></details>`).join('')}

const LIJST=[['un animal domestique','een huisdier'],['un chien','een hond'],['un chat','een kat'],['un oiseau','een vogel'],['un lapin','een konijn'],['une tortue','een schildpad'],['un cochon d’Inde','een cavia'],
 ['un hamster','een hamster'],['un poisson','een vis'],['vieux','oud'],['sympa','leuk, aardig'],['intelligent','slim'],['petit','klein'],['noir','zwart'],['adorable','schattig'],['câlin','aanhalig, knuffelig'],['drôle','grappig'],
 ['timide','verlegen'],['curieux','nieuwsgierig'],['responsable','verantwoordelijk'],['gentil','aardig, lief'],['généreux','vrijgevig'],['heureux','blij, gelukkig'],['malade','ziek'],['donner','geven'],['rire','lachen'],
 ['je m’occupe de','ik zorg voor'],['la fièvre','de koorts'],['envoyer','opsturen'],['la nourriture','het voedsel'],['acheter','kopen'],['exister','bestaan'],['parce que','omdat'],
 ['Tu as un animal domestique ?','Heb jij een huisdier?'],['Il s’appelle comment ?','Hoe heet hij?'],['Il est comment ?','Hoe is hij?']];

return {woorden:{taal:'Frans',typen:true,lijst:LIJST},id:'fa',naam:'Frans',afk:'FA',kop:'Chapitre 2 · werkboek blz. 66–67 · huisdieren en hoe ze zijn',
  log:[['vr 13 nov','Chapitre 2, werkboek blz. 66–67','exercice 10c, 11a/b/c, 12a/b; 12c en 12d (rollenspel met je buur)']],
  SECS,SNAP,BEG:LIJST.map(w=>[w[0],w[1],'2']),Q,snapHtml,leer:['2'],reken:false,volledig:false,toetsvorm:true,
  PN:{'2':'Chapitre 2 · blz. 66–67 · huisdieren',mix:'Door elkaar'}};
})();
