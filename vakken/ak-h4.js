/* Aardrijkskunde H4 Grenzeloos Europa, §4.1–4.3 (toetsstof periode 2, afspraak 18 nov 2026).
   Bron: leerboektekst §4.2 en §4.3 met de Basisboeknummers (PDF's van de ouder), de Start-opdrachten van H4 en B13 Dimensies (foto's).
   §4.1 Berlijn: de leerboektekst ontbreekt nog; daar staan nu de Start-opdrachten, de dimensies en de schaalniveaus.
   Werkboek §4.1 en §4.2 (opdrachten 1–11) staan erin met hun opdrachtnummer; werkboek §4.3 ontbreekt nog. Andere vragen heten 'Leerboek', 'Begrip', 'Start …' of 'Toetsvraag'.
   Wordt na ak.js, ak-ko.js en ak-toets.js geladen. Sleutelwoorden: kleine letters, zonder accenten. */
(()=>{
const V=VAKDATA.ak;
const T=x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\$/g,'&#36;');
function shuf(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
const pick=(arr,n,not)=>shuf(arr.filter(x=>x!==not)).slice(0,n);

/* ---------- paragrafen ---------- */
const NIEUW=[
 {id:'p40',par:'4.0',name:'Start H4',sub:'Veranderingen in Europa, dimensies, schaalniveaus, 1989',rules:[
  'Dimensies (B13): demografisch (omvang en samenstelling bevolking), economisch (geld verdienen), sociaal-cultureel (normen, waarden, taal, godsdienst), politiek (besturen, macht, wetten), natuurlijk of fysisch (klimaat, delfstoffen, reliëf, planten, dieren, bodem).',
  'Schaalniveaus (B14): lokaal, regionaal, nationaal, continentaal, mondiaal; plus fluviaal (stroomgebied van een rivier).',
  'In 1989 scheidde het IJzeren Gordijn Oost- en West-Europa. Na het einde van het communisme vielen de Sovjet-Unie, Joegoslavië en Tsjechoslowakije uiteen: nieuwe landen.']},
 {id:'p41',par:'4.1',name:'4.1 Berlijn',sub:'Model van een stad, de Muur, hereniging, gentrificatie, re-urbanisatie',rules:[
  'Berlijn ontstond op een eiland in de Spree (historische binnenstad, Unter den Linden). Vanaf 1871 industrie langs rivieren en spoor; daaromheen oude woonwijken (4–5 verdiepingen) voor arbeiders.',
  'Na WO II: Oost-Berlijn (Sovjet-Unie) en West-Berlijn (VS, VK, Frankrijk). 13 augustus 1961: de Muur om West-Berlijn. Oude centrum in het oosten → nieuw centrum in het westen rond de Kurfürstendamm. Langs de Muur niemandsland.',
  '9 november 1989 viel de Muur: de Wende. Lege stroken opnieuw ingericht: nieuw cbd bij de Potsdamer Platz (cityvorming), regeringscentrum met de Rijksdag, Berlin Hauptbahnhof.',
  'Stedelijke vernieuwing in vervallen oude woonwijken (Kreuzberg, Prenzlauerberg): woningen tot 70% duurder → gentrificatie, protest.',
  'Na de Wende suburbanisatie (gezinnen naar dorpen en voorsteden) én re-urbanisatie (jongeren terug naar de stad, natuurlijke bevolkingsgroei).',
  'Vroeger was West-Berlijn een uithoek; nu is Berlijn de schakel tussen West-, Midden- en Oost-Europa.',
]},
 {id:'p42',par:'4.2',name:'4.2 Duitsland: de Europese reus',sub:'Industrie, diensten, regionale verschillen, krimp',rules:[
  'Grootste economie van Europa, derde van de wereld. Bijna 85 miljoen inwoners (na Rusland de meeste van Europa).',
  'Na WO II: hightechindustrie (chemie en medicijnen, luchtvaart, auto’s): hoogopgeleiden, onderzoek, robots.',
  'Agglomeratievoordelen: bedrijven bij elkaar (toeleveranciers, universiteit) → snel en op tijd leveren, lagere kosten.',
  'Hoger opgeleide bevolking → hoogwaardige diensten (banken, advocaten; Frankfurt) → dienstensector groeit. Wel digitale achterstand.',
  '1945–1989 BRD (west) en DDR (oost). Na 1990: oude industrie in het oosten failliet, werkloosheid; investeren in infrastructuur.',
  'Ruhrgebied en Saarland: na 1960 mijnen en staal dicht (goedkoper uit het buitenland) → hoge werkloosheid; nu universiteiten en toerisme (industrieel erfgoed).',
  'Zuiden (Baden-Württemberg, Beieren): hightech, BMW, Daimler, Porsche; veel export.',
  'Hoge werkloosheid → vertrekoverschot → demografische krimp (Oost-Duitsland, oude industriegebieden, platteland). Groeigebieden: Berlijn, Hamburg, Keulen, München.']},
 {id:'p43',par:'4.3',name:'4.3 Europa: verenigd in verscheidenheid',sub:'EEG en EU, interne markt, verschillen, migratie',rules:[
  '1957 EEG: België, Frankrijk, Italië, Luxemburg, Nederland, West-Duitsland. Doel: oorlog voorkomen en meer welvaart.',
  'Later Noord- en West-Europa; jaren 1980 Zuid-Europa (na dictatuur); vanaf 2004 dertien landen uit Centraal- en Oost-Europa (na communisme/oorlog). VK eruit in 2020 → 27 landen.',
  'Motto: verenigd in verscheidenheid. EU is multicultureel, vooral een economisch machtsblok.',
  'Interne markt: vrij verkeer van personen, goederen, diensten en geld; afzetmarkt van ruim 450 miljoen mensen; euro. Schengen: 29 landen zonder grenscontroles.',
  'Verschillen: rijk noorden en westen, arm oosten en zuiden (Duitsland ruim 2× Polen). Voordeel: productie uitbesteden aan lagelonenlanden, arbeidsmigranten.',
  'Selectieve migratie: vooral jongeren trekken van oost naar west → vergrijzing en ontgroening in vertrekgebieden (Roemeens en Bulgaars platteland).',
  'Kapitalisme = vrijemarkteconomie (ondernemers beslissen). Communisme = planeconomie (één partij, staat beslist).']}
];
NIEUW.forEach((s,i)=>{s.nr=s.par==='4.0'?'H4':s.par;s.c='--c'+((i+6)%6+1);s.rules=s.rules.map(r=>[T(r),'',''])});
V.SECS.push(...NIEUW);
NIEUW.forEach(s=>V.PN[s.par]=(s.par==='4.0'?'':'§')+s.name);
if(V.leer){const it=V.leer.indexOf('topo');V.leer.splice(it<0?V.leer.length:it,0,'4.0','4.1','4.2','4.3')}
V.kop='H3 Midden-Oosten en H4 Grenzeloos Europa';

/* ---------- begrippen ---------- */
const BEG={
p41:[['historische binnenstad','Het oudste deel van de stad, met monumentale huizen, kerken en musea.'],
 ['central business district (cbd)','Het kantoren-, winkel- en uitgaansgebied van een stad: de centrale zakenwijk.'],
 ['oude woonwijken','Dichtbebouwde wijken rond de binnenstad, gebouwd voor de arbeiders van de fabrieken in de tijd van de industrie.'],
 ['cityvorming','De verdringing van de woonfunctie door kantoren en winkels.'],
 ['stedelijke vernieuwing','Het vernieuwen van woonwijken in de stad, zodat de leefbaarheid sterk verbetert: woningen, woonomgeving en kansen voor bewoners.'],
 ['gentrificatie','Rijkere mensen verdringen minder welvarende bewoners in een opgeknapte wijk.'],
 ['suburbanisatie','Mensen (vooral gezinnen) verhuizen uit de stad naar dorpen en voorsteden met rust en ruimte.'],
 ['re-urbanisatie','Mensen (vooral jongeren) trekken opnieuw naar de stad om er te wonen.'],
 ['de Wende','De verandering in 1989–1990: de val van de Muur en de hereniging van Oost- en West-Duitsland.'],
],
p40:[['demografische dimensie','Invalshoek die gaat over de omvang en samenstelling van de bevolking (geboorte, sterfte, immigratie, emigratie, vergrijzing).'],
 ['economische dimensie','Invalshoek die gaat over het verdienen van geld: sectoren, import en export, handel.'],
 ['sociaal-culturele dimensie','Invalshoek die gaat over de cultuur van mensen: normen, waarden, gewoonten, gebruiken, taal en godsdienst.'],
 ['politieke dimensie','Invalshoek die gaat over het besturen van een land en de verdeling van de macht: overheid, regels en wetten.'],
 ['natuurlijke (fysische) dimensie','Invalshoek die gaat over de natuurlijke omgeving: klimaat, delfstoffen, reliëf, plantengroei, dierenleven en bodem.'],
 ['continentale schaal','Schaalniveau van meer dan één land, een werelddeel.'],
 ['fluviale schaal','Schaalniveau van het stroomgebied van een rivier.'],
 ['IJzeren Gordijn','De scheiding tussen communistisch Oost-Europa en West-Europa, tot 1989.']],
p42:[['hightechindustrie','Industrie waarin hoogstaande kennis en ingewikkelde productietechnieken worden gebruikt, met hooggeschoolde werknemers.'],
 ['agglomeratievoordelen','De voordelen van het bij elkaar in de buurt zitten van bedrijven.'],
 ['multinational','Onderneming die in veel landen actief is.'],
 ['primaire sector','Werk waarbij producten regelrecht uit de natuur worden gehaald: landbouw, visserij, mijnbouw.'],
 ['secundaire sector','Werk waarbij producten uit de primaire sector worden bewerkt: industrie, bouw, energie, ambachten.'],
 ['tertiaire sector','Commerciële dienstverlening, gericht op winst: banken, horeca, winkels, transport.'],
 ['quartaire sector','Niet-commerciële (publieke) dienstverlening: onderwijs, zorg, brandweer, rechtspraak.'],
 ['zware industrie','Industrie die veel ruwe grondstoffen gebruikt, zoals hoogovens, staalfabrieken en raffinaderijen.'],
 ['lichte industrie','Industrie die van halffabricaten consumentenproducten maakt, zoals kleding en fietsen.'],
 ['sociale bevolkingsgroei','De verandering van het bevolkingsaantal doordat mensen een gebied verlaten of zich er vestigen.'],
 ['vertrekoverschot','Er vertrekken meer mensen uit een gebied dan er zich vestigen (negatief migratiesaldo).'],
 ['vestigingsoverschot','Er vestigen zich meer mensen in een gebied dan er vertrekken (positief migratiesaldo).'],
 ['demografische krimp','Afname van de bevolking (bevolkingskrimp).'],
 ['vergrijzing','Het aandeel mensen van 65 jaar en ouder in de bevolking neemt toe.'],
 ['ontgroening','Het aandeel mensen jonger dan 20 jaar in de bevolking neemt af.']],
p43:[['Europese Economische Gemeenschap (EEG)','Samenwerking van zes landen uit 1957, waaruit later de Europese Unie groeide.'],
 ['multicultureel','Met veel verschillende volken en culturen.'],
 ['economisch machtsblok','Groep landen die samenwerken en daardoor economisch sterk zijn, zoals de EU, USMCA en ASEAN.'],
 ['interne markt','Vrij verkeer van personen, goederen, diensten en geld tussen de EU-landen.'],
 ['Schengenlanden','Landen die hun onderlinge grenzen hebben opgeheven (geen grenscontroles).'],
 ['selectieve migratie','Migratie waarbij vooral één groep vertrekt, bijvoorbeeld jongeren.'],
 ['braindrain','Het vertrek van theoretisch opgeleide mensen naar het buitenland (kennisvlucht).'],
 ['seizoensmigrant','Arbeidsmigrant die maar een paar weken of maanden blijft.'],
 ['cirkelmigratie','Arbeidsmigranten gaan een tijdje terug naar huis en komen daarna weer terug om te werken.'],
 ['vrijemarkteconomie','Kapitalistisch systeem: particuliere ondernemers bepalen wat en hoeveel er geproduceerd wordt.'],
 ['planeconomie','Communistisch systeem: de staat leidt de productie centraal, bedrijven zijn van de staat.']]
};
Object.entries(BEG).forEach(([s,l])=>l.forEach(([w,d],i)=>{
  const par=s.replace(/^p(\d)(\d)$/,'$1.$2');V.BEG.push([T(w),T(d),par]);
  V.Q.push({id:'bg'+s+i,o:s,nr:'Begrip',q:T(`Welk begrip hoort hierbij? "${d}"`),a:T(w),f:pick(l.map(x=>x[0]),3,w).map(x=>[T(x),'']),u:T(`${w}: ${d}`),beg:1,
    v:{q:T(`Wat betekent "${w}"?`),a:T(d),f:pick(l.map(x=>x[1]),3,d).map(T)}});
}));

/* ---------- vragen ---------- */
/* M: meerkeuze met variant [vq, va, vf] */
function M(o,id,nr,q,a,f,u,v,x){V.Q.push(Object.assign({id,o,nr,q:T(q),a:T(a),f:f.map(z=>[T(z),'']),u:T(u),v:{q:T(v[0]),a:T(v[1]),f:v[2].map(T)}},x||{}))}
/* O: open vraag; k = modelpunten, ko = onderdelen [aanwijzing, sleutelwoorden, reden nodig] */
function O(o,id,nr,q,vq,k,ko){V.Q.push({id,o,nr,q:T(q),v:{q:T(vq)},t:'open',k:k.map(T)});if(ko){if(ko.length!==k.length)throw new Error('KO '+id);V.KO[id]=ko.map(z=>[T(z[0]),z[1],z[2]])}}
const LB='Leerboek',TV='Toetsvraag';

/* ===== §4.1 / Start H4 ===== */
O('p40','s41a','Start 1a','Noteer een politieke verandering (in een land) in Europa in de twintigste eeuw.','Noem een politieke verandering in Europa in de twintigste eeuw.',
 ['Bijvoorbeeld: Duitsland werd na de Tweede Wereldoorlog gedeeld in de BRD en de DDR en werd in 1990 herenigd; de val van de Berlijnse Muur en het einde van het communisme in 1989; de oprichting van de EEG in 1957 (later de EU).'],
 [['Een verandering in bestuur of macht, met een land of jaartal','duitsland/brd/ddr/muur/communis/eeg/eu/europese unie/hereni/ijzeren gordijn/sovjet/joegoslavie',0]]);
O('p40','s41b','Start 1b','Noteer een economische verandering (in een land) in Europa in de twintigste eeuw.','Noem een economische verandering in Europa in de twintigste eeuw.',
 ['Bijvoorbeeld: in het Ruhrgebied sloten na 1960 de mijnen en staalfabrieken; Duitsland groeide na de oorlog uit tot de grootste economie van Europa (hightechindustrie); de interne markt en de euro in de EU.'],
 [['Een verandering in werk, industrie of handel, met een land of gebied','ruhr/mijn/staal/industrie/dienst/hightech/interne markt/euro/handel/werkloos',0]]);
O('p40','s41c','Start 2b','Je tekent de grenzen van Europa op een kaart. Vanuit welke dimensie kun je dat doen? Licht je antwoord toe.','Vanuit welke dimensie kun je de grenzen van Europa trekken? Leg uit.',
 ['Je noemt een dimensie en legt uit waarom je grens daarbij past. Bijvoorbeeld: natuurlijke dimensie (zeeën en gebergten als grens, zoals de Oeral); politieke dimensie (landsgrenzen of de grens van de EU); sociaal-culturele dimensie (waar het christendom of Europese talen overheersen).'],
 [['Welke dimensie, en waarom past jouw grens daarbij?','natuur/fysisch/politiek/sociaal/cultu/econom|zee/gebergte/oeral/grens/land/eu/godsdienst/taal/christ',1]]);
M('p40','s41d','Start 4a','Wat vormde in 1989 de scheiding tussen Oost- en West-Europa?','het IJzeren Gordijn',['de Berlijnse Muur alleen','de Donau','de Alpen'],
 'Het IJzeren Gordijn liep dwars door Europa, tussen het communistische oosten en het westen. De Berlijnse Muur was een deel ervan.',
 ['Hoe heet de grens die tot 1989 communistisch Oost-Europa scheidde van West-Europa?','het IJzeren Gordijn',['de Oeral','de Schengengrens','de Rijn']],{tv:T('Wat vormde in 1989 de scheiding tussen Oost- en West-Europa?')});
const NL89='kroat/sloven/bosni/servie/montenegro/macedoni/kosovo/tsjechie/slowakije/estland/letland/litouwen/oekraine/wit-rusland/belarus/moldavi';
O('p40','s41e','Start 4b','Noteer drie Europese landen die in 1989 niet bestonden, maar nu wel.','Noem drie landen in Europa die er in 1989 nog niet waren.',
 ['Uit Joegoslavië: bijvoorbeeld Kroatië, Slovenië, Bosnië-Herzegovina, Servië, Montenegro, Noord-Macedonië, Kosovo.','Uit Tsjechoslowakije: Tsjechië en Slowakije.','Uit de Sovjet-Unie: bijvoorbeeld Estland, Letland, Litouwen, Oekraïne, Wit-Rusland (Belarus), Moldavië.'],
 [['Land 1',NL89,0],['Land 2',NL89,0],['Land 3',NL89,0]]);
O('p40','s41f','Start 4c','Waardoor zijn deze landen ontstaan?','Hoe komt het dat er na 1989 nieuwe landen in Europa zijn ontstaan?',
 ['Na het einde van het communisme vielen grote staten uit elkaar: de Sovjet-Unie (1991), Joegoslavië (na de burgeroorlog in de jaren 1990) en Tsjechoslowakije (in 1993 gesplitst in Tsjechië en Slowakije).'],
 [['Wat gebeurde er met het communisme, en welke landen vielen uit elkaar?','communis/sovjet/joegoslavie/tsjechoslowakije|uit elkaar/uiteen/gesplitst/einde/val/oorlog',0]]);
/* dimensies op Vlieland (bron 1.8 in het Basisboek) */
[['dv1','Op Vlieland trekken jongeren weg, waardoor het eiland vergrijst.','demografische dimensie'],
 ['dv2','Op Vlieland zijn veel vakantiehuisjes, restaurants en verhuur van kitesurfmateriaal.','economische dimensie'],
 ['dv3','Door massatoerisme gaan op Vlieland oude eilandtradities verloren.','sociaal-culturele dimensie'],
 ['dv4','Een deel van Vlieland is militair oefenterrein van de overheid.','politieke dimensie'],
 ['dv5','Op de zandplaten bij Vlieland rusten zeehonden en vogels.','natuurlijke (fysische) dimensie']].forEach(([id,s,a],i,L)=>{
  M('p40','s4'+id,'Basisboek B13',`Bij welke dimensie hoort dit? "${s}"`,a,L.filter(x=>x[2]!==a).map(x=>x[2]).slice(0,3),`Bron 1.8 (Vlieland): ${s} → ${a}.`,
   [`Bij welke dimensie hoort dit? "${s}"`,a,shuf(L.filter(x=>x[2]!==a).map(x=>x[2])).slice(0,3)])});
M('p40','s41g','Basisboek B14','Je bestudeert de migratie van jongeren van Oost- naar West-Europa. Op welk schaalniveau kijk je?','continentale schaal',['regionale schaal','nationale schaal','lokale schaal'],
 'Meer dan één land, een werelddeel: continentale schaal.',['Je vergelijkt de werkloosheid in het Ruhrgebied met de rest van Duitsland. Op welk schaalniveau kijk je naar het Ruhrgebied?','regionale schaal',['continentale schaal','mondiale schaal','fluviale schaal']]);
M('p40','s41h','Basisboek B14','De Rijn stroomt door Zwitserland, Duitsland, Frankrijk en Nederland. Welk schaalniveau gebruik je als je het hele stroomgebied bekijkt?','fluviale schaal',['continentale schaal','nationale schaal','regionale schaal'],
 'Het stroomgebied van een rivier is de fluviale schaal; rivieren houden zich niet aan landgrenzen.',['Het stroomgebied van de Nijl bekijk je op welk schaalniveau?','fluviale schaal',['mondiale schaal','lokale schaal','nationale schaal']]);

/* ===== §4.1 Berlijn ===== */
const MODEL=()=>`<figure class="bron"><figcaption><b>Bron</b> Model van een westerse stad (eigen tekening naar bron 7.8 in het Basisboek)</figcaption><div class="bronbox"><svg class="bronkaart" viewBox="0 0 300 220" role="img" aria-label="Model van een westerse stad">
<rect x="0" y="0" width="300" height="220" fill="#EEF3E6"/>
<path d="M0,200 L300,20" stroke="#8A93A6" stroke-width="6"/><text x="236" y="40" font-size="8" class="lbl">snelweg</text>
<rect x="232" y="44" width="40" height="22" fill="#B9A5D6"/><text x="296" y="76" font-size="7" text-anchor="end" class="lbl">bedrijventerrein</text>
<circle cx="150" cy="110" r="95" fill="#CDE8C0"/><circle cx="150" cy="110" r="62" fill="#F5D27A"/><circle cx="150" cy="110" r="30" fill="#E9A93B"/>
<path d="M60,110 L240,110" stroke="#555" stroke-width="1.6" stroke-dasharray="5 3"/><text x="64" y="106" font-size="7" class="lbl">spoorweg</text>
<rect x="96" y="112" width="20" height="10" fill="#9E8C7A"/><rect x="186" y="98" width="18" height="10" fill="#9E8C7A"/><text x="184" y="94" font-size="7" class="lbl">fabrieken</text>
<text x="150" y="108" font-size="8" text-anchor="middle" class="lbl">historische</text><text x="150" y="117" font-size="8" text-anchor="middle" class="lbl">binnenstad</text>
<rect x="164" y="118" width="12" height="16" fill="#1D2842"/><text x="179" y="132" font-size="7" class="lbl">cbd</text>
<text x="150" y="68" font-size="8" text-anchor="middle" class="lbl">oude woonwijken</text><text x="150" y="30" font-size="8" text-anchor="middle" class="lbl">nieuwe woonwijken</text>
<circle cx="88" cy="168" r="9" fill="#7FC77F"/><text x="66" y="186" font-size="7" class="lbl">park, sport</text></svg></div></figure>`;
O('p41','h41a',LB,'Waar en hoe is Berlijn ontstaan, en waar ligt het oudste deel van de stad?','Hoe is Berlijn ontstaan?',
 ['Berlijn ontstond op en rond een eiland in de rivier de Spree. Daar ligt het oudste deel: de historische binnenstad.','Van daaruit breidde de stad zich in alle richtingen uit, onder andere langs Unter den Linden.'],
 [['Waar ontstond Berlijn?','spree|eiland/rivier',0],['Hoe heet het oudste deel?','historische binnenstad/binnenstad/oude centrum/unter den linden',0]]);
O('p41','h41b',LB,'Leg uit hoe vanaf 1871 de oude woonwijken rond de binnenstad van Berlijn zijn ontstaan.','Waarom werden er vanaf 1871 dichtbebouwde wijken rond de binnenstad van Berlijn gebouwd?',
 ['Vanaf 1871 kwam de industrie op: fabrieken vestigden zich langs rivieren en spoorwegen aan de randen van de binnenstad.','Duizenden mensen kwamen in de fabrieken werken. Voor hen waren woningen nodig, dus ontstonden rond de binnenstad dichtbebouwde oude woonwijken met blokken van vier tot vijf verdiepingen.'],
 [['Wat kwam er op, en waar?','industrie/fabriek|rivier/spoor/rand',0],['Waarom waren er veel woningen nodig?','arbeid/werk/mensen/migrant|woning/huizen/wonen',1]]);
M('p41','h41c',LB,'Wanneer werd de Muur om West-Berlijn gebouwd, en waarom?','op 13 augustus 1961, om de vlucht van Oost-Duitsers naar het Westen te stoppen',['in 1945, om de oorlog te beëindigen','op 9 november 1989, om de stad te verenigen','in 1871, om de industrie te beschermen'],
 'Zo’n 3 miljoen Oost-Duitsers waren al gevlucht voor de onderdrukking van het communisme.',['Waarom bouwde Oost-Duitsland in 1961 een muur om West-Berlijn?','om te voorkomen dat nog meer Oost-Duitsers naar het vrije Westen vluchtten',['om West-Berlijn te beschermen tegen de Sovjet-Unie','om de Spree tegen overstromingen te beschermen','om toeristen tegen te houden']]);
M('p41','h41d',LB,'Wie bestuurde na de Tweede Wereldoorlog Oost-Berlijn en wie West-Berlijn?','Oost: de Sovjet-Unie; West: de VS, het VK en Frankrijk',['Oost: Polen; West: Nederland','Oost: de VS; West: de Sovjet-Unie','Oost en West: de Verenigde Naties'],
 'Berlijn werd, net als heel Duitsland, opgedeeld.',['Onder wiens leiding stond Oost-Berlijn na 1945?','de Sovjet-Unie',['de Verenigde Staten','Frankrijk','het Verenigd Koninkrijk']]);
O('p41','h41e',LB,'Welke gevolgen had de Muur voor de opbouw van Berlijn? Noem er twee.','Hoe veranderde de opbouw van Berlijn door de Muur? Noem twee gevolgen.',
 ['Het oude stadscentrum kwam in Oost-Berlijn te liggen, daardoor ontstond in West-Berlijn een nieuw stadscentrum rond de Kurfürstendamm.','Langs de Muur werden gebouwen gesloopt: er ontstond een onbebouwd niemandsland, waar men goed toezicht kon houden.'],
 [['Wat gebeurde er met het centrum?','kurfurstendamm/nieuw centrum/tweede centrum/oude centrum|oost/west',1],['Wat gebeurde er langs de Muur?','niemandsland/gesloopt/sloop/leeg/onbebouwd',0]]);
M('p41','h41f',LB,'Wanneer viel de Muur, en hoe heet die verandering in het Duits?','9 november 1989; de Wende',['13 augustus 1961; de Wende','9 november 1989; de Anschluss','3 oktober 1945; de Mauerfall'],
 'Na 28 jaar werden Oost- en West-Berlijn (en Duitsland) weer één.',['Wat betekent “die Wende”?','de verandering: de val van de Muur en de hereniging',['de muur','de deling van Duitsland','de wederopbouw na de oorlog']]);
O('p41','h41g',LB,'Wat is er na de val van de Muur gebouwd op de lege stroken langs de Muur? Noem twee voorbeelden.','Hoe werden de onbebouwde gebieden langs de Muur na 1989 ingericht? Noem twee voorbeelden.',
 ['Een nieuw zakencentrum (cbd) rond de Potsdamer Platz, vlak bij de Brandenburger Tor, met vooral winkels en kantoren: cityvorming.','Een nieuw regeringscentrum met het parlement (de Rijksdag), en een nieuw centraal station: Berlin Hauptbahnhof.'],
 [['Voorbeeld 1','potsdamer/cbd/zakencentrum/kantoren/winkels/regering/rijksdag/parlement/hauptbahnhof/station',0],['Voorbeeld 2','potsdamer/cbd/zakencentrum/kantoren/winkels/regering/rijksdag/parlement/hauptbahnhof/station',0]]);
O('p41','h41h',LB,'Beschrijf wat er in Kreuzberg en Prenzlauerberg gebeurde. Gebruik de begrippen stedelijke vernieuwing en gentrificatie.','Waarom protesteerden bewoners van Kreuzberg en Prenzlauerberg? Gebruik stedelijke vernieuwing en gentrificatie.',
 ['De oude woonwijken in het voormalige Oost-Berlijn waren slecht onderhouden. Huizen en voorzieningen werden opgeknapt: stedelijke vernieuwing.','Daardoor werden woningen tot wel 70% duurder. Bewoners die dat niet konden betalen, moesten verhuizen en rijkere mensen namen hun plek in: gentrificatie. Daartegen was veel protest.'],
 [['Wat gebeurde er met de wijken? (begrip)','vernieuw/opgeknapt/opknap/renov',0],['Wat was het gevolg voor de bewoners? (begrip)','gentrific|duur/huur/verdre/verhuiz/rijk',1]]);
O('p41','h41i',LB,'Verklaar waarom er in Berlijn de afgelopen jaren zowel suburbanisatie als re-urbanisatie plaatsvond.','Na de Wende verlieten mensen Berlijn, maar de stad groeit toch. Hoe kan dat?',
 ['Suburbanisatie: vooral gezinnen verlieten de stad voor dorpen en voorsteden, waar rust en ruimte is.','Re-urbanisatie: dankzij de verbetering van de oude woonwijken trekken veel jongeren weer naar Berlijn. Daardoor is daar een hoger geboortecijfer en zelfs natuurlijke bevolkingsgroei.'],
 [['Wie vertrekt er, waarheen en waarom? (begrip)','gezin/suburban|voorstad/dorp/rust/ruimte',1],['Wie komt er, en waarom? (begrip)','jong/re-urban|opgeknapt/verbeter/woonwijk/stad',1]]);
O('p41','h41j',LB,'Geef voorbeelden van voordelen voor Berlijn door de centrale ligging in de EU. Leg uit hoe dat vóór 1989 anders was.','Waarom ligt Berlijn nu gunstiger dan vóór 1989?',
 ['Vóór 1989 was West-Berlijn een uithoek: een westers eiland in Oost-Europa, waar alle straten doodliepen op de Muur.','Nu ligt Berlijn niet meer geïsoleerd: het is de schakel tussen West-, Midden- en Oost-Europa. Dat is gunstig voor handel, bedrijven en verkeer, zeker nu veel Oost-Europese landen bij de EU horen.'],
 [['Hoe was het vóór 1989?','uithoek/eiland/geisoleerd/muur/doodl',0],['Waarom is het nu gunstig?','schakel/centraal/midden/tussen|oost/west/handel/bedrijv/verkeer',0]]);
M('p41','h41k','Basisboek B179','Waar liggen in het model van een westerse stad de oude woonwijken?',"rond de historische binnenstad, bij de fabrieken langs het spoor",['aan de rand van de stad, bij de snelweg','midden in de historische binnenstad','in de voorsteden'],
 'Oude woonwijken werden gebouwd voor de arbeiders, vlak bij de fabrieken.',['Wat vind je volgens het model aan de rand van de stad?','nieuwe woonwijken met parken, en bedrijventerreinen bij snelwegen',['de historische binnenstad','de oude woonwijken','het cbd met wolkenkrabbers']],{q:MODEL()+T('Waar liggen in het model van een westerse stad de oude woonwijken?')});
{const q=V.Q[V.Q.length-1];q.v.q=MODEL()+q.v.q;q.tv=T('Waar liggen in het model van een westerse stad de oude woonwijken?')}
M('p41','h41l','Basisboek B180','Rond de Kurfürstendamm en de Potsdamer Platz maakten woningen plaats voor kantoren en winkels. Hoe heet dat?','cityvorming',['gentrificatie','suburbanisatie','re-urbanisatie'],
 'Cityvorming: de woonfunctie wordt verdrongen door kantoren en winkels (naar de City of London).',['Wat is cityvorming?','de verdringing van woningen door kantoren en winkels',['rijke mensen verdringen armere bewoners','mensen trekken naar de voorsteden','jongeren trekken terug naar de stad']]);
M('p41','h41m','Basisboek B188','In Prenzlauerberg komen rijkere mensen wonen in opgeknapte huizen, en de oorspronkelijke bewoners kunnen de huur niet meer betalen. Hoe heet dat?','gentrificatie',['cityvorming','suburbanisatie','ontgroening'],
 'Gentrificatie: sociaal-economische opwaardering, maar de oorspronkelijke bewoners worden verdrongen.',['Wat is een nadeel van gentrificatie voor de oorspronkelijke bewoners?','De wijk wordt te duur en ze verliezen hun buren (sociale cohesie).',['Er komen minder voorzieningen.','De woningen worden slechter.','De wijk wordt minder veilig.']]);
O('p41','tq41a',TV,'Vergelijk Berlijn met het model van een westerse stad. Noem een verschil en verklaar dat verschil.','Berlijn past niet helemaal in het model van een westerse stad. Noem een verschil en leg uit hoe dat komt.',
 ['Verschil: Berlijn heeft twee centra (de oude historische binnenstad in het oosten én het centrum rond de Kurfürstendamm in het westen), terwijl het model één centrum heeft. Of: midden in de stad lagen lege stroken (niemandsland) waar nu een nieuw cbd en regeringscentrum staan.','Verklaring: door de Muur (1961–1989) lag het oude centrum in Oost-Berlijn, dus kreeg West-Berlijn een eigen nieuw centrum; langs de Muur werden gebouwen gesloopt.'],
 [['Welk verschil met het model?','twee centra/tweede centrum/kurfurstendamm/niemandsland/lege strook/potsdamer/cbd',0],['Hoe komt dat?','muur/deling/verdeeld/oost/west',1]]);
O('p41','tq41b',TV,'Stelling: “Stedelijke vernieuwing is voor iedereen in Kreuzberg goed.” Geef een argument vóór en een argument tegen deze stelling.','Is stedelijke vernieuwing in Kreuzberg goed voor iedereen? Geef een argument vóór en een argument tegen.',
 ['Vóór: huizen, straten en voorzieningen worden opgeknapt, dus de leefbaarheid neemt toe.','Tegen: de woningen worden tot 70% duurder, waardoor oorspronkelijke bewoners moeten vertrekken (gentrificatie) en buren kwijtraken.'],
 [['Argument vóór','opgeknapt/opknap/beter/leefbaar/voorziening/mooier',0],['Argument tegen','duur/huur/70/vertrek/verdre/gentrific/protest',0]]);
O('p41','tq41c',TV,'Geef een gevolg van de val van de Muur voor Berlijn vanuit de politieke dimensie en een gevolg vanuit de economische dimensie. Noteer de dimensies bij je antwoorden.','De val van de Muur: noem een politiek en een economisch gevolg voor Berlijn, met de dimensie erbij.',
 ['Politieke dimensie: Oost- en West-Berlijn (en Duitsland) werden weer één; Berlijn kreeg een nieuw regeringscentrum met het parlement (de Rijksdag).','Economische dimensie: op de lege stroken kwam een nieuw zakencentrum met winkels en kantoren (Potsdamer Platz, cityvorming); Berlijn werd de schakel tussen West- en Oost-Europa.'],
 [['Politiek gevolg','politiek|hereni/een land/een stad/regering/rijksdag/parlement/hoofdstad',0],['Economisch gevolg','econom|zakencentrum/cbd/kantoren/winkels/potsdamer/handel/schakel/bedrijv',0]]);
O('p41','tq41d',TV,'In §4.2 leerde je over demografische krimp in Oost-Duitsland. Leg uit waarom Berlijn, dat ook deels in het oosten ligt, juist groeit.','Oost-Duitsland krimpt, maar Berlijn groeit. Hoe kan dat?',
 ['Berlijn is een groeigebied: als grote stad en hoofdstad is er werk, en de opgeknapte oude woonwijken trekken jongeren aan (re-urbanisatie).','Doordat er veel jongeren komen, is er een hoger geboortecijfer en zelfs natuurlijke bevolkingsgroei. In de rest van Oost-Duitsland vertrekken mensen juist door de werkloosheid.'],
 [['Waarom trekken mensen naar Berlijn?','werk/hoofdstad/groeigebied/jong/re-urban/opgeknapt',0],['Wat is het gevolg voor de bevolking?','geboorte/kinderen/natuurlijke|groei/meer/hoger',1]]);

/* ---- werkboek §4.1 (opdrachten 1–11, PDF's van de ouder; 4a–c, 6, 9 en 10 nog niet of in eigen vorm) ---- */
const BERLIJN=()=>{const leg=[['#F5A04A','historische binnenstad'],['#B9A0D8','nieuwe city (cbd)'],['#EE7FB8','City West'],['#FFF08A','oude woonwijk (veel stedelijke vernieuwing)'],['#F3A79C','woonwijk gebouwd na 1945'],['#BFE08F','park'],['#FBE3DC','overige stadsdelen']];
 return `<figure class="bron"><figcaption><b>Bron</b> Berlijn (eigen schets naar bron 3, niet op schaal)</figcaption><div class="bronbox"><svg class="bronkaart" viewBox="0 0 300 290" role="img" aria-label="Schets van Berlijn met de Muur">
<rect width="300" height="290" fill="#FBE3DC"/>
<path d="M70,40 L230,30 L292,70 L300,200 L270,255 L120,270 L70,200 L60,120Z" fill="#FFF08A"/>
<path d="M175,85 L240,80 L250,125 L215,150 L180,140Z" fill="#F3A79C"/>
<path d="M120,95 L165,90 L175,130 L160,152 L122,150Z" fill="#F5A04A"/>
<path d="M104,72 L120,74 L122,150 L104,152Z" fill="#B9A0D8"/>
<ellipse cx="38" cy="178" rx="30" ry="15" fill="#EE7FB8"/>
<path d="M30,120 L102,118 L102,152 L40,150Z" fill="#BFE08F"/><path d="M150,215 L205,212 L208,250 L152,252Z" fill="#BFE08F"/>
<path d="M0,98 C40,90 70,110 100,100 C120,92 130,80 150,90 C170,100 160,120 190,128 C230,140 260,165 300,178" fill="none" stroke="#2E7BCF" stroke-width="3"/>
<path d="M150,0 L150,28 L118,42 L96,60 L104,72 L120,76 L122,152 L170,148 L180,160 L195,152 L205,160 L222,150 L262,170 L240,205 L258,222 L280,240 L300,262" fill="none" stroke="#D6262A" stroke-width="2.6"/>
<text x="133" y="128" font-size="9" class="lbl">Mitte</text><text x="124" y="108" font-size="6.5" class="lbl">Unter den Linden</text>
<text x="104" y="68" font-size="6.5" text-anchor="end" class="lbl">Centraal Station</text><text x="102" y="92" font-size="6.5" text-anchor="end" class="lbl">Rijksdag</text>
<text x="102" y="112" font-size="6.5" text-anchor="end" class="lbl">Brandenburger Tor</text><text x="102" y="163" font-size="6.5" text-anchor="end" class="lbl">Potsdamer Platz</text>
<text x="44" y="140" font-size="7" class="lbl">Tiergarten</text><text x="38" y="181" font-size="7" text-anchor="middle" class="lbl">Kurfürstendamm</text>
<text x="200" y="55" font-size="8" class="lbl">Prenzlauer Berg</text><text x="215" y="112" font-size="8" class="lbl">Friedrichshain</text>
<text x="150" y="190" font-size="8" class="lbl">Kreuzberg</text><text x="157" y="236" font-size="7" class="lbl">Tempelhof</text>
<text x="12" y="92" font-size="7" class="rivl">Spree</text></svg></div>
<div class="bronleg"><span><i style="background:none;border:none;border-top:3px solid #D6262A;height:0;margin-top:4px"></i>Berlijnse Muur</span>${leg.map(([c,t])=>`<span><i style="background:${c}"></i>${t}</span>`).join('')}</div>
<p class="bronnoot">Zelf getekend naar de kaart in je boek, vereenvoudigd.</p></figure>`};
const met=(f,q)=>{q.q=f()+q.q;if(q.v)q.v.q=f()+q.v.q;return q};
O('p41','w41_1a','1a','Lees de inleiding, Oorsprong van Berlijn en De Muur. Welke drie onderdelen van de opbouw van een stad worden beschreven?','Welke drie delen van een stad zie je terug in de geschiedenis van Berlijn tot 1961?',
 ['De historische binnenstad (het oudste deel, op en rond het eiland in de Spree, met Unter den Linden).','De industriegebieden: fabrieken langs de rivieren en bij de spoorwegen aan de randen van de binnenstad.','De oude woonwijken: dichtbebouwde wijken met woonblokken van vier tot vijf verdiepingen rond de binnenstad.'],
 [['Onderdeel 1: het oudste deel','historisch/binnenstad/oude centrum',0],['Onderdeel 2: waar werd gewerkt?','industrie/fabriek',0],['Onderdeel 3: waar woonden de arbeiders?','woonwijk/woonblok/wonen',0]]);
O('p41','w41_1b','1b','Beschrijf een kenmerk van Berlijn dat afwijkt van de normale opbouw van een stad.','Wat is er anders aan de opbouw van Berlijn dan aan een gewone westerse stad?',
 ['Berlijn heeft twee stadscentra: de historische binnenstad in het (vroegere) oosten en een nieuw centrum rond de Kurfürstendamm in het westen. (Ook goed: langs de Muur lag een onbebouwde strook, een niemandsland, midden in de stad.)'],
 [['Welk kenmerk is anders?','twee centra/tweede centrum/twee stadscentra/kurfurstendamm/niemandsland/muur/onbebouwd/leeg',0]]);
O('p41','w41_2a','2a','Bron 2 laat cityvorming zien rond de Kurfürstendamm, met het restant van de Gedächtniskirche. In welk deel van de stad in bron 3 is deze foto genomen?','Bekijk de kaart. In welk deel van Berlijn ligt de Kurfürstendamm?',
 ['In City West, in het (vroegere) West-Berlijn, ten westen van de Tiergarten.'],[['Welk deel van de stad?','city west/west-berlijn/westen/west berlijn',0]]);
met(BERLIJN,V.Q[V.Q.length-1]);
O('p41','w41_2b','2b','Welk kenmerk van een cbd zie je in bron 2 (de Kurfürstendamm)?','Waaraan herken je op een foto een cbd?',
 ['Veel (hoge) kantoorgebouwen en winkels: er wordt nauwelijks gewoond, het is een kantoren-, winkel- en uitgaansgebied.'],[['Wat zie je op de foto?','kantoor/winkel/hoog/hoogbouw/uitgaan/druk/reclame/bedrijv',0]]);
O('p41','w41_2c','2c','Verklaar de ligging van het commerciële centrum rond de Kurfürstendamm. Je antwoord moet een oorzaak-gevolgrelatie bevatten.','Waarom ontstond er in West-Berlijn een nieuw centrum rond de Kurfürstendamm? Gebruik oorzaak en gevolg.',
 ['Oorzaak: door de aanleg van de Muur (1961) kwam het oude stadscentrum in Oost-Berlijn te liggen.','Gevolg: daardoor ontstond in West-Berlijn een nieuw (commercieel) stadscentrum rond de Kurfürstendamm.'],
 [['Oorzaak: wat gebeurde er met het oude centrum?','muur|oost/oude centrum/binnenstad',0],['Gevolg: wat ontstond er daardoor in het westen?','nieuw/eigen|centrum/city/winkel/kantoor',1]]);
M('p41','w41_3a','3a','Lees B179 Model van een stad. Bij welke transportwegen liggen veel industriegebieden?','langs spoorwegen (en rivieren); nieuwe bedrijventerreinen bij snelwegen',['midden in de historische binnenstad','langs voetgangersstraten','bij vliegvelden in de voorsteden'],
 'In de tijd van de industriële revolutie langs de spoorwegen; tegenwoordig liggen bedrijventerreinen bij snelwegen.',['Waar liggen in het model van een stad de nieuwe bedrijventerreinen?','aan de rand van de stad, in de buurt van snelwegen',['in de historische binnenstad','tussen de oude woonwijken','in het cbd']]);
O('p41','w41_3b','3b','Waarom liggen de industriegebieden bij spoorwegen, rivieren en snelwegen?','Waarom bouwden bedrijven hun fabrieken langs het spoor of het water?',
 ['Zo kunnen grondstoffen makkelijk worden aangevoerd en producten worden afgevoerd: de fabriek is goed bereikbaar voor transport.'],[['Waarom is een transportweg dichtbij handig?','aanvoer/afvoer/vervoer/transport/grondstof/product/bereikbaar',0]]);
O('p41','w41_3c','3c','Wat is het verschil tussen de historische binnenstad en het stadscentrum?','Leg uit dat de historische binnenstad en het stadscentrum (cbd) niet hetzelfde zijn.',
 ['De historische binnenstad is het oudste deel van de stad, met monumentale huizen, kerken en musea.','Het stadscentrum (cbd) is het kantoren-, winkel- en uitgaansgebied. Dat ligt niet altijd in de historische binnenstad, maar soms ook rond grote stations aan de rand ervan.'],
 [['Wat is de historische binnenstad?','oudst/oude deel/monument/kerk/muse',0],['Wat is het stadscentrum (cbd)?','kantoor/winkel/uitgaan/zaken/cbd',0]]);
O('p41','w41_3d','3d','Waarom lagen de woonwijken vroeger vlak bij de industriegebieden?','Waarom werden de oude woonwijken vlak bij de fabrieken gebouwd?',
 ['De woonwijken werden gebouwd voor de arbeiders van de fabrieken. Zij hadden geen auto en moesten lopend naar hun werk, dus moesten ze er vlakbij wonen.'],[['Voor wie, en waarom dichtbij?','arbeider/werknemer/fabriek|lopen/dichtbij/vlakbij/kort/werk/auto',1]]);
O('p41','w41_5a','5a','Gebruik het model van een westerse stad en de kaart van Berlijn. Beschrijf twee overeenkomsten.','Wat klopt er aan Berlijn met het model van een westerse stad? Noem twee overeenkomsten.',
 ['De historische binnenstad (Mitte) ligt in het midden van de stad.','Rondom de binnenstad liggen de oude woonwijken (bijvoorbeeld Kreuzberg en Prenzlauer Berg). (Ook goed: er lopen spoorlijnen langs de rand van de binnenstad, er zijn parken.)'],
 [['Overeenkomst 1','binnenstad/mitte/midden/centrum/oude woonwijk/spoor/park',0],['Overeenkomst 2','binnenstad/mitte/midden/centrum/oude woonwijk/kreuzberg/prenzlauer/spoor/park',0]]);
met(()=>MODEL()+BERLIJN(),V.Q[V.Q.length-1]);
O('p41','w41_5b','5b','Beschrijf twee verschillen tussen Berlijn en het model van een westerse stad. Geef per verschil aan waardoor het is ontstaan (5c).','Noem twee verschillen tussen Berlijn en het stadsmodel, en zeg bij elk verschil hoe het komt.',
 ['Berlijn heeft een tweede centrum, City West rond de Kurfürstendamm. Oorzaak: door de Muur lag het oude centrum in Oost-Berlijn, dus kreeg West-Berlijn een eigen centrum.','De nieuwe city (cbd) bij de Potsdamer Platz ligt langs de vroegere Muur, niet in de historische binnenstad. Oorzaak: na 1989 kwamen de lege stroken van het niemandsland vrij om te bouwen. (Ook goed: woonwijken van na 1945 dicht bij het centrum, omdat dat deel in de oorlog was verwoest.)'],
 [['Verschil 1 met de oorzaak','city west/kurfurstendamm/twee centra/tweede centrum/potsdamer/nieuwe city/cbd/na 1945|muur/oorlog/verwoest/niemandsland',1],['Verschil 2 met de oorzaak','city west/kurfurstendamm/twee centra/tweede centrum/potsdamer/nieuwe city/cbd/na 1945|muur/oorlog/verwoest/niemandsland/1989',1]]);
met(()=>MODEL()+BERLIJN(),V.Q[V.Q.length-1]);
M('p41','w41_4a','4 (kaart)','Bekijk de kaart van Berlijn. Waar ligt de nieuwe city (cbd)?','langs de vroegere Muur, aan de westkant van de historische binnenstad',['in het oosten, bij Friedrichshain','rond de Kurfürstendamm','midden in Tempelhof'],
 'Op de lege stroken langs de Muur, bij de Potsdamer Platz en de Brandenburger Tor.',['Waar liggen op de kaart de woonwijken die na 1945 zijn gebouwd?','ten oosten van de historische binnenstad (bij Friedrichshain), in het vroegere Oost-Berlijn',['rond de Kurfürstendamm','in de Tiergarten','langs de westkant van de Muur']]);
met(BERLIJN,V.Q[V.Q.length-1]);
M('p41','w41_4b','4 (kaart)','Bekijk de kaart van Berlijn. Aan welke kant van de Muur lag de historische binnenstad (Mitte)?','aan de oostkant, in Oost-Berlijn',['aan de westkant, in West-Berlijn','precies op de Muur','buiten Berlijn'],
 'Daarom kreeg West-Berlijn een eigen centrum rond de Kurfürstendamm.',['In welk deel van Berlijn lag City West (Kurfürstendamm)?','in West-Berlijn',['in Oost-Berlijn','in de historische binnenstad','in Friedrichshain']]);
met(BERLIJN,V.Q[V.Q.length-1]);
O('p41','w41_7a','7a','Lees B185 Stedelijke vernieuwing. Uit welke drie onderdelen bestaat stedelijke vernieuwing?','Noem de drie onderdelen van stedelijke vernieuwing.',
 ['De verbetering van woningen (renoveren of nieuw bouwen).','De verbetering van de woonomgeving (straten, pleinen, parkeerplaatsen, voorzieningen, toezicht).','Het creëren van kansen voor bewoners (wonen, werken, opleiding, zorg en welzijn, zoals taalcursussen).'],
 [['Onderdeel 1','woning/huizen/renov',0],['Onderdeel 2','woonomgeving/openbare ruimte/straat/plein/voorziening/omgeving',0],['Onderdeel 3','kansen/bewoners/opleiding/werk/cursus/zorg/welzijn',0]]);
O('p41','w41_7b','7b','Welk onderdeel van stedelijke vernieuwing was in Berlijn van groot belang? Leg uit waarom.','Welk deel van stedelijke vernieuwing was na 1989 het belangrijkst in Oost-Berlijn, en waarom?',
 ['De verbetering van woningen (en voorzieningen).','Want veel oude woonwijken in het voormalige Oost-Berlijn waren slecht onderhouden, zoals in Kreuzberg en Prenzlauerberg.'],
 [['Welk onderdeel?','woning/huizen/renov/opknap',0],['Waarom?','slecht onderhouden/vervallen/oud/oost',1]]);
O('p41','w41_8a','8a','Wat is gentrificatie?','Leg uit wat gentrificatie is.',['Gentrificatie: in een (opgeknapte) wijk verdringen rijkere mensen de minder welvarende bewoners.'],
 [['Wie verdringt wie?','rijk/welvarend|arm/minder welvarend/oorspronkelijk/verdre/weg',0]]);
O('p41','w41_8b','8b','Waarom stuit gentrificatie op veel protest?','Waarom protesteren bewoners tegen gentrificatie?',
 ['De woningen worden veel duurder (in Berlijn tot wel 70%), waardoor de oorspronkelijke bewoners de huur niet meer kunnen betalen en moeten verhuizen.','Ze verliezen daardoor ook hun buren en vrienden in de wijk (sociale cohesie) en profiteren zelf nauwelijks van de verbetering.'],
 [['Wat gebeurt er met de huur?','duur/huur/70/prijs',0],['Wat betekent dat voor de bewoners?','verhuiz/weg/vertrek/verdre|buren/vrienden/cohesie/betalen',0]]);
V.Q.push({id:'w41_8c',o:'p41',nr:'8c',t:'open',tvVrij:true,q:T('Wat vind je van de reactie van de bewoners op de stijgende huurprijzen in Berlijn? Licht je antwoord toe.'),v:{q:T('Vind je het terecht dat Berlijners demonstreren tegen de stijgende huren? Licht toe.')},
 k:[T('Dit is een meningsvraag: elk onderbouwd antwoord is goed. Bijvoorbeeld: “Ik vind het terecht, want mensen worden uit hun eigen wijk verdrongen omdat ze de huur niet meer kunnen betalen.” Of: “Ik begrijp het, maar de wijk wordt wel beter en veiliger.”')]});
O('p41','w41_11','11','Beschrijf een verandering van Berlijn na 1989 op lokaal, nationaal en continentaal schaalniveau.','Hoe veranderde Berlijn na 1989? Geef een voorbeeld op lokaal, nationaal en continentaal schaalniveau.',
 ['Lokaal: in de wijken Kreuzberg en Prenzlauerberg werden huizen opgeknapt (gentrificatie), of: op de lege strook langs de Muur kwam een nieuw cbd bij de Potsdamer Platz.','Nationaal: Berlijn werd de hoofdstad van het herenigde Duitsland, met een nieuw regeringscentrum (de Rijksdag).','Continentaal: Berlijn is geen uithoek meer, maar de schakel tussen West-, Midden- en Oost-Europa.'],
 [['Lokaal (de stad of een wijk)','kreuzberg/prenzlauer/wijk/gentrific/opgeknapt/potsdamer/cbd/hauptbahnhof/station',0],['Nationaal (Duitsland)','hoofdstad/regering/rijksdag/parlement/hereni/duitsland',0],['Continentaal (Europa)','europa|schakel/centraal/midden/oost/west/uithoek',0]]);

/* ===== §4.2 Duitsland ===== */
M('p42','h42a',LB,'Welke industrieën ontwikkelden zich na de Tweede Wereldoorlog vooral in Duitsland?','chemie (met medicijnen), luchtvaart en auto’s',['steenkool, staal en scheepsbouw','kleding, fietsen en meubels','landbouw, visserij en mijnbouw'],
 'Chemie, luchtvaart- en auto-industrie: hightechindustrie, met hooggeschoolde werknemers.',['Welke soort industrie is in Duitsland na 1945 vooral gegroeid?','hightechindustrie',['zware industrie','lichte industrie','mijnbouw']]);
M('p42','h42b',LB,'Waarom heet de Duitse chemie-, luchtvaart- en auto-industrie hightechindustrie?','Er zijn hooggeschoolde werknemers en veel onderzoek naar nieuwe technieken nodig.',['Er worden veel ruwe grondstoffen gebruikt.','Er werken vooral ongeschoolde arbeidsmigranten.','De fabrieken staan bij de steenkoolmijnen.'],
 'Hightech = hoogstaande kennis, onderzoek, vakmensen en robots.',['Wat is kenmerkend voor hightechindustrie?','hoogstaande kennis en ingewikkelde productietechnieken',['veel ruwe grondstoffen zoals steenkool','eenvoudig handwerk','producten rechtstreeks uit de natuur']]);
M('p42','h42c',LB,'In welk deel van Duitsland is de economie het meest ontwikkeld?','in het zuiden: Baden-Württemberg en Beieren',['in het oosten: de oude DDR','in het westen: het Ruhrgebied en Saarland','in het noorden: rond Hamburg'],
 'In het zuiden zit veel hightechindustrie, zoals BMW, Daimler-Benz en Porsche.',['Waar staan de fabrieken van BMW, Daimler-Benz en Porsche?','in Baden-Württemberg en Beieren (Zuid-Duitsland)',['in het Ruhrgebied','in Saarland','in Oost-Duitsland']]);
M('p42','h42d',LB,'In welke gebieden in West-Duitsland is de werkloosheid hoog?','het Ruhrgebied en Saarland',['Beieren en Baden-Württemberg','Hamburg en Keulen','Frankfurt en München'],
 'Daar waren mijnbouw (steenkool) en zware industrie (hoogovens, staal) belangrijk.',['Waar in West-Duitsland waren steenkoolmijnen en staalfabrieken heel belangrijk?','het Ruhrgebied en Saarland',['Beieren','Frankfurt','Berlijn']]);
M('p42','h42e',LB,'Waarom sloten na 1960 de mijnen en staalfabrieken in het Ruhrgebied?','Steenkool en staal konden goedkoper uit andere landen worden gehaald.',['De steenkool was helemaal op.','De EU verbood mijnbouw.','Er waren geen werknemers meer.'],
 'Goedkopere import → mijnen en staal dicht → werkloosheid steeg.',['Wat was het gevolg van goedkope steenkool en staal uit het buitenland voor het Ruhrgebied?','Mijnen en staalfabrieken sloten en de werkloosheid steeg.',['Er kwamen juist meer mijnen bij.','Het Ruhrgebied werd het rijkste deel van Duitsland.','Er kwamen veel arbeidsmigranten werken.']]);
M('p42','h42f',LB,'Wat bleek na de hereniging in 1990 over de industrie in het oosten?','Die was erg verouderd; veel bedrijven gingen failliet.',['Die was moderner dan in het westen.','Die bestond vooral uit hightech.','Die groeide het snelst van Europa.'],
 'Honderdduizenden mensen verloren hun baan.',['Waarom verloren na 1990 honderdduizenden Oost-Duitsers hun baan?','De verouderde bedrijven konden de concurrentie niet aan en gingen failliet.',['Ze verhuisden allemaal naar het westen.','De DDR sloot de fabrieken.','Er kwamen robots voor in de plaats.']]);
M('p42','h42g',LB,'Waarmee probeert de regering sinds 1990 (nieuwe) bedrijven naar het oosten te trekken?','met investeringen in infrastructuur',['met lagere belastingen voor rijke mensen','met nieuwe steenkoolmijnen','met een eigen munt voor het oosten'],
 'Door de infrastructuur te verbeteren is de werkloosheid enigszins gedaald.',['Wat is het gevolg van de investeringen in infrastructuur in Oost-Duitsland?','De werkloosheid is enigszins gedaald.',['De werkloosheid is verdwenen.','De bevolking is sterk gegroeid.','Alle bedrijven zijn naar het oosten verhuisd.']]);
M('p42','h42h',LB,'Waarom groeit de bevolking van Duitsland licht, ondanks het lage geboortecijfer?','door migranten uit het Midden-Oosten en andere EU-landen',['doordat mensen steeds ouder worden','doordat er een geboorteoverschot is','doordat Oost-Duitsland groeit'],
 'Bijna 85 miljoen inwoners; groei door immigratie.',['Duitsland heeft een laag geboortecijfer, maar toch groeit de bevolking licht. Hoe kan dat?','Er komen migranten bij uit het Midden-Oosten en andere EU-landen.',['Er worden steeds meer kinderen geboren.','Er vertrekken veel Duitsers naar het buitenland.','Oost-Duitsland groeit heel snel.']]);
M('p42','h42h2',LB,'Hoeveel inwoners heeft Duitsland, en welk Europees land heeft er meer?','bijna 85 miljoen; alleen Rusland heeft er meer',['bijna 45 miljoen; Frankrijk heeft er meer','bijna 125 miljoen; geen enkel land','bijna 60 miljoen; het VK heeft er meer'],'Duitsland heeft na Rusland de grootste bevolking van Europa.',['Welk Europees land heeft meer inwoners dan Duitsland (bijna 85 miljoen)?','Rusland',['Frankrijk','het Verenigd Koninkrijk','Italië']]);
M('p42','h42i',LB,'Welke steden liggen in Duitse groeigebieden?','Berlijn, Hamburg, Keulen en München',['Essen, Dortmund en Duisburg','Saarbrücken en Gelsenkirchen','alle steden in Oost-Duitsland'],
 'Daar is werk. Ook regionale centra als Osnabrück en Regensburg groeien.',['Waar in Duitsland neemt de bevolking juist af?','in grote delen van Oost-Duitsland, de oude industriegebieden en landelijke gebieden',['in Berlijn en München','in Hamburg en Keulen','in Osnabrück en Regensburg']]);
M('p42','h42j',LB,'Welke stad is het centrum van de Duitse en Europese financiële dienstverlening?','Frankfurt',['Berlijn','München','Hamburg'],'Frankfurt: banken en andere financiële instellingen.',['Welke Duitse stad is het centrum van banken en financiële instellingen?','Frankfurt',['Essen','Dresden','Hamburg']]);
M('p42','h42k',LB,'Op welk gebied heeft Duitsland een achterstand, waardoor het de concurrentiestrijd dreigt te verliezen?','digitalisering',['industrie','export','opleidingsniveau'],
 'De regering zet in op 5G, minder bureaucratie, start-ups en een digitale overheid.',['Waarin loopt de Duitse dienstensector achter?','in digitalisering (bijvoorbeeld 5G en een digitale overheid)',['in het opleidingsniveau','in het aantal banken','in de export van auto’s']]);
[['sk1','een bakker','secundaire sector'],['sk2','een leraar op een openbare school','quartaire sector'],['sk3','een medewerker van een bank','tertiaire sector'],['sk4','een kolenmijn in het Ruhrgebied','primaire sector'],['sk5','een autofabriek van BMW','secundaire sector'],['sk6','een brandweerman','quartaire sector']].forEach(([id,w,a])=>{
  const S=['primaire sector','secundaire sector','tertiaire sector','quartaire sector'];
  M('p42','h42'+id,'Basisboek B195',`In welke economische sector werkt ${w}?`,a,S.filter(x=>x!==a),`${w}: ${a}.`,[`${w[0].toUpperCase()+w.slice(1)}: welke sector?`,a,S.filter(x=>x!==a)])});
[['ik1','een hoogoven of staalfabriek','zware industrie'],['ik2','een fietsenfabriek','lichte industrie'],['ik3','een chipmachinefabriek zoals ASML','hightechindustrie']].forEach(([id,w,a])=>{
  const S=['zware industrie','lichte industrie','hightechindustrie','mijnbouw'];
  M('p42','h42'+id,'Basisboek B207',`Wat voor industrie is ${w}?`,a,S.filter(x=>x!==a),`${w}: ${a}.`,[`Bij welke soort industrie hoort ${w}?`,a,S.filter(x=>x!==a)])});
O('p42','h42l',LB,'Leg met de auto-industrie als voorbeeld uit wat agglomeratievoordelen zijn.','Waarom zitten toeleveranciers van een autofabriek graag dicht bij de fabriek? Gebruik het begrip agglomeratievoordelen.',
 ['Toeleverende bedrijven (bijvoorbeeld van stoelen) zitten dicht bij de autofabriek, zodat ze snel en precies op tijd kunnen leveren.','Ook samenwerking in de buurt helpt: een universiteit leidt vakmensen op en doet onderzoek naar productverbetering.','Daardoor worden de kosten lager. Die voordelen van het bij elkaar zitten heten agglomeratievoordelen.'],
 [['Toeleveranciers: waarom dichtbij?','toelever/onderdel/stoel/bedrijv|snel/op tijd/kort/precies',1],['Wie helpt nog meer in de buurt?','universiteit/opleid/onderzoek',0],['Wat is het gevolg voor de kosten?','kosten|lager/minder/goedkoper',1]]);
O('p42','h42m',LB,'Leg uit waarom de dienstensector in Duitsland steeds groter werd.','Hoe komt het dat een steeds groter deel van de Duitse economie uit diensten komt?',
 ['De bevolking werd gemiddeld steeds hoger opgeleid, waardoor de dienstverlening hoogwaardiger werd (advocatenkantoren, designbureaus, banken).','Daardoor werd er steeds meer betaald voor de geleverde diensten, dus kwam een steeds groter deel van de economie uit de dienstensector.'],
 [['Wat veranderde er aan de bevolking?','opgeleid/opleiding|hoger/hoog',0],['Wat was het gevolg voor de diensten en het geld?','hoogwaardig/meer betaald/duurder/geld/groter',1]]);
O('p42','h42n',LB,'Leg in drie stappen uit hoe het Ruhrgebied van mijnbouw en staal naar hoge werkloosheid ging.','Waarom is de werkloosheid in het Ruhrgebied hoger dan het Duitse gemiddelde? Leg uit in drie stappen.',
 ['Stap 1: het Ruhrgebied draaide op mijnbouw (steenkool) en zware industrie (hoogovens, staalfabrieken).','Stap 2: na 1960 konden steenkool en staal goedkoper uit andere landen worden gehaald.','Stap 3: de mijnen en staalfabrieken sloten, dus veel mensen verloren hun baan. Ondanks investeringen in universiteiten en toerisme is de werkloosheid nog steeds hoger dan gemiddeld.'],
 [['Stap 1: waar werkten de mensen in het Ruhrgebied?','mijn/steenkool/staal/zware industrie/hoogoven',0],['Stap 2: wat veranderde er na 1960?','goedkoper|buitenland/andere landen/import',1],['Stap 3: wat was het gevolg?','sloten/dicht/gesloten|werkloos/baan',1]]);
O('p42','h42o',LB,'Hoe hebben de oude industriegebieden (zoals het Ruhrgebied) geprobeerd nieuw werk te krijgen?','Wat is er in het Ruhrgebied gedaan na het sluiten van de mijnen?',
 ['De inrichting is verbeterd, en er is geïnvesteerd in universiteiten en hogescholen.','Er is geïnvesteerd in toerisme: industrieel erfgoed als toeristische trekpleister (Industriekultur), zoals zwemmen tussen de oude fabrieken van Zeche Zollverein (functieverandering).'],
 [['Iets met onderwijs','universiteit/hogeschol/onderwijs/opleiding',0],['Iets met toerisme','toeris/erfgoed/zollverein/industriekultur/recreatie',0]]);
O('p42','h42p',LB,'Leg uit hoe hoge werkloosheid in een gebied leidt tot demografische krimp.','Waarom neemt de bevolking af in gebieden met hoge werkloosheid, zoals in Oost-Duitsland?',
 ['Mensen vertrekken uit gebieden waar weinig werk is, op zoek naar werk elders: er is een vertrekoverschot.','Daardoor neemt de bevolking af: demografische krimp. Dat zie je in grote delen van Oost-Duitsland, de oude industriegebieden en op het platteland.'],
 [['Wat doen mensen als er weinig werk is?','vertrek/verhuiz/weg|werk',1],['Hoe heet het gevolg voor het aantal inwoners?','krimp/afname/neemt af/minder inwoners/vertrekoverschot',0]]);
O('p42','tq42a',TV,'Stelling: “Duitsland is overal even welvarend.” Geef twee argumenten tegen deze stelling, met een voorbeeld van een gebied.','Waarom zijn er in Duitsland grote economische verschillen tussen de regio’s? Geef twee voorbeelden.',
 ['Oost-Duitsland: na de hereniging in 1990 ging veel verouderde industrie failliet; de werkloosheid is er nog steeds hoger, mede door de deling in BRD en DDR (1945–1989).','Het Ruhrgebied en Saarland: na het sluiten van mijnen en staalfabrieken is de werkloosheid hoog. Tegenover het rijke zuiden (Baden-Württemberg, Beieren) met hightechindustrie.'],
 [['Gebied 1, met de oorzaak','oost/ddr|verouderd/failliet/werkloos/hereniging',1],['Gebied 2, met de oorzaak','ruhr/saarland|mijn/staal/werkloos/dicht',1]]);
O('p42','tq42b',TV,'In §3.5 leerde je over ruimtelijke ongelijkheid in Turkije. Leg uit dat er ook in Duitsland ruimtelijke ongelijkheid is, en geef een oorzaak.','Is er in Duitsland ruimtelijke ongelijkheid? Leg uit met een voorbeeld en een oorzaak.',
 ['Ja: er zijn grote verschillen in welvaart tussen gebieden, bijvoorbeeld het rijke zuiden (Beieren, Baden-Württemberg) tegenover Oost-Duitsland of het Ruhrgebied, waar de werkloosheid hoger is.','Oorzaak: bijvoorbeeld de deling van Duitsland (1945–1989) met verouderde industrie in het oosten, of het sluiten van de mijnen en staalfabrieken in het Ruhrgebied.'],
 [['Welke gebieden verschillen in welvaart?','zuid/beieren/baden|oost/ruhr/saar/ddr',0],['Wat is de oorzaak?','ddr/deling/verouderd/failliet/mijn/staal/werkloos',1]]);
O('p42','tq42c',TV,'Jongeren trekken weg uit Oost-Duitsland. Geef een gevolg vanuit de demografische dimensie en een gevolg vanuit de economische dimensie. Noteer de dimensies bij je antwoorden.','Wat zijn de gevolgen als jongeren uit Oost-Duitsland vertrekken? Geef een demografisch en een economisch gevolg, met de dimensie erbij.',
 ['Demografische dimensie: de bevolking krimpt en vergrijst, want vooral jongeren vertrekken (vertrekoverschot, ontgroening).','Economische dimensie: bedrijven vinden minder (jonge) werknemers, of er komen minder nieuwe bedrijven, waardoor de achterstand blijft. (Ook goed: winkels en voorzieningen verdwijnen.)'],
 [['Demografisch gevolg','demogra|krimp/vergrijs/ontgroen/minder inwoners/ouderen',0],['Economisch gevolg','econom|werknemer/bedrijv/werk/winkel/geld/voorziening',0]]);
O('p42','tq42d',TV,'Zeche Zollverein was een kolenmijn in het Ruhrgebied en is nu industrieel erfgoed met een zwembad tussen de oude fabrieken. Geef een voordeel van deze functieverandering vanuit de economische dimensie en een vanuit de sociaal-culturele dimensie.','Zeche Zollverein: van kolenmijn naar toeristische trekpleister. Noem een economisch en een sociaal-cultureel voordeel.',
 ['Economische dimensie: toeristen brengen geld en nieuwe banen in het Ruhrgebied, waar de werkloosheid hoog is.','Sociaal-culturele dimensie: de geschiedenis van de mijnbouw blijft bewaard (erfgoed), en bewoners hebben een plek voor recreatie (zwemmen).'],
 [['Economisch voordeel','econom|toeris/geld/werk/banen',0],['Sociaal-cultureel voordeel','sociaal/cultu|erfgoed/geschiedenis/recreatie/zwem/trots/bewaard',0]]);
O('p42','tq42e',TV,'In §3.2 leerde je over Dubai als wereldstad. Waarom zitten in Frankfurt én in Dubai veel bedrijven van dezelfde soort dicht bij elkaar? Gebruik het begrip agglomeratievoordelen.','Waarom vestigen banken zich graag in Frankfurt, dicht bij andere banken? Gebruik het begrip agglomeratievoordelen.',
 ['Gelijksoortige bedrijven profiteren van elkaars aanwezigheid: er is personeel met de juiste kennis, gespecialiseerde toeleveranciers (zoals advocaten) en ze kunnen ideeën uitwisselen.','Die voordelen van het bij elkaar zitten heten agglomeratievoordelen; ze komen vooral voor in stedelijke gebieden.'],
 [['Waarvan profiteren de bedrijven als ze dicht bij elkaar zitten?','personeel/kennis/toelever/advocat/ideeen/uitwissel/samenwerk/opleiding',0],['Welk begrip?','agglomeratievoordel',0]]);

/* ---- werkboek §4.2 Duitsland (opdrachten 1–11, PDF's van de ouder, 19 nov 2026) ----
   Kleur- en tekenopdrachten op kaarten (3a kleuren, 5a–c, 8a, 8c, 9a–b) staan hier in eigen vorm of niet.
   Nog niet in de app (bron uit het leerboek ontbreekt): 2e (bron 7), 10c (bron W11). */
const DE_PROJ=(lon,lat)=>[Math.round((lon-5.6)*37.8+8),Math.round((55.2-lat)*60+6)];
const DE_RAND=[[7.0,53.6],[8.0,53.6],[8.5,53.9],[9.0,54.0],[8.6,54.9],[9.9,54.8],[10.2,54.4],[11.0,54.1],[11.5,54.0],[12.1,54.2],[13.0,54.4],[13.4,54.6],[14.2,53.9],[14.4,53.3],[14.6,52.6],[14.7,51.9],[15.0,51.1],[14.3,50.9],[12.9,50.4],[12.1,50.3],[12.4,49.7],[13.0,49.3],[13.8,48.8],[13.4,48.3],[13.0,47.5],[12.2,47.7],[11.0,47.4],[10.2,47.3],[9.6,47.5],[8.6,47.7],[7.6,47.6],[7.55,48.1],[7.8,48.5],[8.2,48.97],[7.0,49.1],[6.4,49.2],[6.4,49.5],[6.1,50.1],[6.0,50.8],[6.0,51.8],[6.9,52.2],[7.0,52.6],[7.2,53.2]];
const DE_DDR=[[10.9,54.0],[10.7,53.5],[11.3,53.0],[10.95,52.6],[10.6,52.0],[10.5,51.6],[10.0,51.3],[10.1,50.7],[10.7,50.4],[11.5,50.4],[12.1,50.3]];
const DE_RIJN=[[7.6,47.6],[7.55,48.1],[7.8,48.5],[8.2,48.97],[8.4,49.5],[8.27,50.0],[7.6,50.36],[7.1,50.73],[6.96,50.94],[6.77,51.23],[6.76,51.43],[6.2,51.85]];
/* nummers zoals in opdracht 1a (bron W4); [naam, lon, lat, dx, dy] = plek van het nummer naast de stip */
const DE_STAD=[['Berlijn',13.40,52.52,8,4],['Hamburg',9.99,53.55,8,4],['München',11.58,48.14,8,4],['Keulen',6.96,50.94,7,9,6,9],['Frankfurt',8.68,50.11,8,4],
 ['Stuttgart',9.18,48.78,8,4],['Düsseldorf',6.77,51.23,-13,13,-50,12],['Dortmund',7.47,51.51,7,3],['Essen',7.01,51.46,1,-6,-8,-7],['Bremen',8.80,53.08,8,4],
 ['Dresden',13.74,51.05,8,4],['Leipzig',12.37,51.34,8,4],['Hannover',9.73,52.37,8,4],['Duisburg',6.76,51.43,-17,3,-46,1],['Nürnberg',11.08,49.45,8,4]];
const DE_PAD=l=>l.map((p,i)=>(i?'L':'M')+DE_PROJ(p[0],p[1]).join(',')).join(' ');
const DKAART=(o={})=>{const nr=o.nr!==false,naam=!!o.naam;
 const st=DE_STAD.map(([n,lo,la,dx,dy,ndx,ndy],i)=>{const [x,y]=DE_PROJ(lo,la);if(naam&&ndx!==undefined){dx=ndx;dy=ndy}return `<circle cx="${x}" cy="${y}" r="3" class="stip"/>`+(nr?`<text x="${x+dx}" y="${y+dy}" font-size="${naam?9.5:11}" font-weight="700" class="lbl">${naam?T(n):i+1}</text>`:'')}).join('');
 return `<figure class="bron"><figcaption><b>Bron</b> Duitsland${o.ddr?' met de voormalige grens tussen West- en Oost-Duitsland':''} (eigen schets naar bron W4, niet precies)</figcaption><div class="bronbox"><svg class="bronkaart" viewBox="0 0 380 490" role="img" aria-label="Kaart van Duitsland met steden">
<rect width="380" height="490" class="zee"/><path d="${DE_PAD(DE_RAND)}Z" fill="#E6EDB8" stroke="#5B6784" stroke-width="1.2"/>
<path d="${DE_PAD(DE_RIJN)}" class="riv"/><text x="${DE_PROJ(7.75,49.9)[0]}" y="${DE_PROJ(7.75,49.9)[1]}" font-size="9" class="lbl" fill="#2E7BCF">Rijn</text>
${o.ddr?`<path d="${DE_PAD(DE_DDR)}" fill="none" stroke="#1D2842" stroke-width="2" stroke-dasharray="6 3"/><text x="${DE_PROJ(12.3,52.9)[0]}" y="${DE_PROJ(12.3,52.9)[1]}" font-size="10" class="lbl">Oost (DDR)</text><text x="${DE_PROJ(7.6,52.6)[0]}" y="${DE_PROJ(7.6,52.6)[1]}" font-size="10" class="lbl">West (BRD)</text>`:''}
<text x="${DE_PROJ(6.0,54.6)[0]}" y="${DE_PROJ(6.0,54.6)[1]}" font-size="10" class="lbl" fill="#2E7BCF">Noordzee</text><text x="${DE_PROJ(12.0,54.85)[0]}" y="${DE_PROJ(12.0,54.85)[1]}" font-size="10" class="lbl" fill="#2E7BCF">Oostzee</text>
${st}</svg></div></figure>`};

/* 1a topografie: welke stad is nummer …? */
const DNAMEN=DE_STAD.map(s=>s[0]);
DE_STAD.forEach(([n],i)=>{
  M('p42','w42_1a'+(i+1),'1a',`Welke stad is nummer ${i+1} op de kaart?`,n,pick(DNAMEN,3,n),`Nummer ${i+1} = ${n}.`,
    [`Welk nummer heeft ${n} op de kaart?`,`nummer ${i+1}`,pick(DNAMEN.map((x,j)=>'nummer '+(j+1)),3,'nummer '+(i+1))],{tv:T(`Welke stad is nummer ${i+1} op de kaart?`)});
  met(()=>DKAART(),V.Q[V.Q.length-1]);
});
M('p42','w42_1ar','1a','Welke steden op de kaart liggen in het Ruhrgebied?','Duisburg, Essen en Dortmund',['Keulen, Frankfurt en Stuttgart','Hamburg, Bremen en Hannover','Dresden, Leipzig en Berlijn'],
 'Het Ruhrgebied ligt in het westen, langs de Rijn en de Ruhr: Duisburg, Essen, Dortmund (en Bochum, Gelsenkirchen). Düsseldorf en Keulen liggen er net onder.',
 ['Welke stad op de kaart ligt in het Ruhrgebied?','Essen',['München','Hannover','Leipzig']],{mc:1});
met(()=>DKAART({naam:true}),V.Q[V.Q.length-1]);
/* 1b de voormalige grens */
[['Dresden','Oost-Duitsland (DDR)','Hannover'],['Leipzig','Oost-Duitsland (DDR)','Nürnberg'],['Hannover','West-Duitsland (BRD)','Dresden'],['Hamburg','West-Duitsland (BRD)','Leipzig']].forEach(([s,a,s2],i)=>{
  const b=a[0]==='O'?'West-Duitsland (BRD)':'Oost-Duitsland (DDR)',a2=b;
  M('p42','w42_1b'+(i+1),'1b',`Lag ${s} tot 1990 in West- of in Oost-Duitsland?`,a,[b],`${s} lag in ${a}. De grens liep van de Oostzee bij Lübeck naar het zuiden, ten oosten van Hamburg, Hannover, Kassel en Nürnberg.`,
    [`Lag ${s2} tot 1990 in West- of in Oost-Duitsland?`,a2,[a]]);
  met(()=>DKAART({naam:true,ddr:true}),V.Q[V.Q.length-1]);
});
M('p42','w42_1b5','1b','Hoe zat het met Berlijn tussen 1961 en 1989?','Berlijn lag in Oost-Duitsland; West-Berlijn hoorde bij West-Duitsland en was ommuurd.',['Berlijn lag helemaal in West-Duitsland.','Berlijn lag precies op de grens tussen West- en Oost-Duitsland.','Berlijn was de hoofdstad van West-Duitsland.'],
 'West-Berlijn was een stukje West-Duitsland midden in de DDR, met de Muur eromheen (§4.1).',['Waar lag West-Berlijn?','midden in Oost-Duitsland (de DDR)',['op de grens met Polen','aan de Noordzee','tegen de grens met West-Duitsland aan']]);
met(()=>DKAART({naam:true,ddr:true}),V.Q[V.Q.length-1]);

/* 2 Industriële grootmacht */
O('p42','w42_2a','2a','Welke bedrijfstakken horen, net als de industrie, tot de secundaire sector?','Noem bedrijfstakken die net als de industrie tot de secundaire sector horen.',
 ['De bouw, de energievoorziening (bijvoorbeeld een elektriciteitscentrale) en de ambachten (zoals een bakker of een timmerman). (Basisboek B195)'],
 [['Noem minstens twee','bouw/energie/elektriciteit/ambacht/bakker/timmer/smid/nutsbedrijf',0]]);
O('p42','w42_2b','2b','Welke twee onderdelen van de Duitse industrie zijn het sterkst ontwikkeld?','Noem twee industrieën waarin Duitsland heel sterk is.',
 ['De chemische industrie (met medicijnen).','De auto-industrie. (Ook goed: de luchtvaartindustrie; het leerboek noemt deze drie.)'],
 [['Industrie 1','chemi/medicijn/farma/luchtvaart/vliegtu/auto',0],['Industrie 2','chemi/medicijn/farma/luchtvaart/vliegtu/auto',0]]);
M('p42','w42_2c','2c','Wat is het belangrijkste kenmerk van deze industrieën in Duitsland?','Het is hightechindustrie: hooggeschoolde werknemers, veel onderzoek en moderne technieken (robots).',['Er werken vooral laaggeschoolde werknemers.','Er worden vooral ruwe grondstoffen verwerkt.','Ze zitten allemaal in het oosten van Duitsland.'],
 'Hightechindustrie: hoogstaande kennis en ingewikkelde productietechnieken, met hooggeschoolde werknemers.',['Waarom heet de Duitse auto-industrie hightechindustrie?','Er werken hooggeschoolde mensen en er wordt veel onderzoek gedaan.',['Er worden veel ruwe grondstoffen gebruikt.','De fabrieken zijn heel oud.','Er wordt alleen met de hand gewerkt.']]);
O('p42','w42_2d','2d','Welke invloed heeft dit kenmerk uit vraag 2c op de kwaliteit en de waarde van de producten?','Wat betekent hightech voor de kwaliteit en de prijs van Duitse auto’s en medicijnen?',
 ['Door de kennis, het onderzoek en de moderne technieken is de kwaliteit van de producten hoog.','Daardoor hebben de producten een hoge waarde: ze zijn duur en er wordt veel aan verdiend.'],
 [['Kwaliteit','hoog/goed/beter',0],['Waarde','hoog/duur/veel geld/waardevol/veel waard',0]]);

/* 3 Auto-industrie */
const MERK=[['Volkswagen','Wolfsburg'],['BMW','München'],['Mercedes-Benz','Stuttgart'],['Porsche','Stuttgart'],['Audi','Ingolstadt'],['Opel','Rüsselsheim']];
const MSTAD=['Wolfsburg','München','Stuttgart','Ingolstadt','Rüsselsheim','Hamburg','Dresden','Keulen'];
MERK.forEach(([m,s],i)=>M('p42','w42_3a'+(i+1),'3a',`In welke Duitse stad heeft het automerk ${m} zijn thuisbasis (hoofdkantoor)?`,s,pick(MSTAD.filter(x=>x!==s&&!(s==='Stuttgart'&&x==='Stuttgart')),3,s),
  `${m}: ${s}. Volkswagen in Wolfsburg (Nedersaksen), Opel in Rüsselsheim (bij Frankfurt), BMW en Audi in Beieren, Mercedes-Benz en Porsche in Stuttgart (Baden-Württemberg).${m==='Audi'?' Audi is in 1909 in Zwickau (Oost-Duitsland) begonnen en verhuisde na de oorlog naar Ingolstadt.':''}`,
  [`Welk automerk komt uit ${s}?`,m,pick(MERK.map(x=>x[0]).filter(x=>MERK.find(y=>y[0]===x)[1]!==s),3)]));
O('p42','w42_3b','3b','Beschrijf de ruimtelijke spreiding van de thuissteden van de Duitse automerken. Wat valt op?','Waar in Duitsland liggen de thuissteden van de automerken, en wat valt op?',
 ['De meeste thuissteden liggen in het zuiden (Stuttgart, München, Ingolstadt) en het westen (Rüsselsheim, Keulen); Wolfsburg ligt in het noorden.','Opvallend: er ligt geen enkele in het oosten (de vroegere DDR). De auto-industrie zit vooral in het zuiden (Baden-Württemberg en Beieren).'],
 [['Waar liggen de meeste?','zuid/beieren/baden/stuttgart/munchen|west/zuid/beieren/baden',0],['Wat valt op?','oost/ddr|niet/geen/weinig/nauwelijks',0]]);

/* 4 Agglomeratievoordelen: het schema van bron W6 */
const W6=[['aandrijving: chassis, …, banden, versnelling','motor','aandrijving'],['veiligheid: …, veiligheidsriemen','airbags','veiligheid'],['interieur: airco, …, bekleding','stoelen','interieur'],
 ['… zoals robots en automaten om de auto in elkaar te zetten','kapitaalgoederen','machines om de auto in elkaar te zetten'],['verkoop en na de verkoop: financiering, verkoop, onderhoud, verzekering, …','garage','verkoop en na de verkoop'],
 ['… en ontwikkeling: nieuwe materialen, universiteit, ingenieursbureau','onderzoek','nieuwe materialen, universiteit, ingenieursbureau'],['logistiek en …: brengen en halen van onderdelen en auto’s','transport','brengen en halen van onderdelen en auto’s']];
const W6W=W6.map(x=>x[1]),W6L=W6.map(x=>x[2]);
W6.forEach(([vak,w,l],i)=>M('p42','w42_4a'+(i+1),'4a',`Een autofabriek krijgt van veel bedrijven onderdelen en diensten (bron W6). Welk woord hoort op de puntjes? — ${vak}`,w,pick(W6W,3,w),
  'Het schema: aandrijving (motor), veiligheid (airbags), interieur (stoelen), kapitaalgoederen (robots), verkoop (garage), onderzoek en ontwikkeling, logistiek en transport. Kapitaalgoederen zijn gebouwen, installaties en machines.',
  [`Bij welk vakje in het schema van toeleveranciers van een autofabriek hoort “${w}”?`,l,pick(W6L,3,l)]));
M('p42','w42_4b','4b','Wat zijn agglomeratievoordelen?','de voordelen die bedrijven hebben doordat ze dicht bij elkaar zitten',['de voordelen van een vestiging in een ander land','de voordelen van lage lonen','de voordelen van veel grondstoffen in de bodem'],
 'Agglomeratievoordelen: snel en op tijd leveren, kennis delen, personeel in de buurt; daardoor lagere kosten (Basisboek B213).',['Banken in Frankfurt zitten dicht bij elkaar en profiteren daarvan. Hoe heet dat?','agglomeratievoordelen',['globalisering','suburbanisatie','de-industrialisatie']]);
O('p42','w42_4c','4c','Gebruik bron W5. Welke agglomeratievoordelen zijn er voor een bedrijf uit Stuttgart dat robots maakt voor de auto-industrie in Duitsland?','Waarom is Stuttgart een goede plek voor een bedrijf dat robots maakt voor autofabrieken? Noem twee agglomeratievoordelen.',
 ['De klanten zitten dichtbij: in Stuttgart zelf zitten Mercedes-Benz en Porsche, en in Beieren BMW en Audi. Het bedrijf kan dus snel leveren en onderhoud doen; dat scheelt transportkosten.','Er zijn in de buurt universiteiten en andere toeleveranciers: goed opgeleid personeel, samen onderzoek doen en kennis uitwisselen.'],
 [['Voordeel 1: de klanten','klant/autofabriek/mercedes/porsche/daimler/bmw/audi|dichtbij/snel/leveren/kort/transport/onderhoud',0],['Voordeel 2: kennis of personeel','universiteit/onderzoek/kennis/personeel/werknemer/ingenieur/toelever/samenwerk',0]]);

/* 5 De Volkswagen Group */
O('p42','w42_5d','5d','Welke twee dingen vallen je op aan de spreiding van de vestigingen van Volkswagen?','Kijk naar de fabrieken van Volkswagen op de wereldkaart. Welke twee dingen vallen op?',
 ['Volkswagen heeft fabrieken over de hele wereld, in alle werelddelen: het is een multinational.','De meeste fabrieken staan in Europa (vooral in Duitsland zelf) en in China; in Afrika en Australië zijn er weinig of geen.'],
 [['Waar zijn er vestigingen?','wereld/overal/werelddelen/continent/veel landen/multinational',0],['Waar de meeste?','europa/duitsland/china/azie',0]]);
O('p42','w42_5e','5e','Verklaar de spreiding van de innovatiecentra van de Volkswagen Group.','Waarom zitten de innovatiecentra van Volkswagen in plaatsen als San Francisco, Tel Aviv, Tokio, Shanghai en Wolfsburg?',
 ['De innovatiecentra liggen in (wereld)steden met veel hightechbedrijven, universiteiten en kennis, zoals San Francisco (Silicon Valley), Tel Aviv en Tokio. Daar kan Volkswagen hoogopgeleide mensen vinden en samenwerken (agglomeratievoordelen).','Ook liggen ze bij grote markten: in China (Beijing, Shanghai) worden veel auto’s verkocht, en in Wolfsburg zit het hoofdkantoor.'],
 [['Wat is er in die steden te vinden?','hightech/kennis/universiteit/onderzoek/hoogopgeleid/technolog/silicon/start-up',0],['Nog een reden','china/markt/afzet/verkoop/klant/hoofdkantoor/wolfsburg/samenwerk/agglomeratie',0]]);
M('p42','w42_5f','5f','Welk begrip uit deze paragraaf past het beste bij bron W8 (de vestigingen en innovatiecentra van Volkswagen over de hele wereld)?','multinational',['agglomeratievoordelen','hightechindustrie','vestigingsoverschot'],
 'Een multinational is een onderneming die in veel landen actief is, zoals de Volkswagen Group.',['Hoe heet een onderneming die in veel landen actief is?','multinational',['toeleverancier','dienstensector','planeconomie']]);

/* 6 Dienstensector */
O('p42','w42_6a','6a','Uit welke twee onderdelen bestaat de dienstensector?','Welke twee soorten dienstverlening zijn er?',
 ['De tertiaire sector: commerciële dienstverlening, gericht op winst (banken, winkels, horeca, transport).','De quartaire sector: niet-commerciële (publieke) dienstverlening (onderwijs, zorg, brandweer, rechtspraak). (Basisboek B208)'],
 [['Onderdeel 1','tertia/commerci',0],['Onderdeel 2','quarta/kwarta/niet-commerci/niet commerci/publiek/overheid',0]]);
M('p42','w42_6b','6b','Banken en advocatenkantoren, zoals in Frankfurt: bij welk onderdeel van de dienstensector horen ze?','de tertiaire (commerciële) dienstverlening',['de quartaire (niet-commerciële) dienstverlening','de secundaire sector','de primaire sector'],
 'Banken en advocaten willen winst maken: commerciële dienstverlening (tertiaire sector).',['Bij welk onderdeel van de dienstensector hoort een openbare school of een ziekenhuis?','de quartaire (niet-commerciële) dienstverlening',['de tertiaire (commerciële) dienstverlening','de secundaire sector','de primaire sector']]);
O('p42','w42_6c','6c','Wat is een belangrijk kenmerk van de internationale dienstverlening in Duitsland?','Wat voor diensten levert Duitsland vooral aan het buitenland, en waar zitten ze?',
 ['Het zijn vooral hoogwaardige diensten (zoals banken, verzekeraars en advocaten), waarvoor hoogopgeleide mensen nodig zijn. Ze zitten vooral in Frankfurt, het centrum van de Duitse en Europese financiële dienstverlening.'],
 [['Wat voor diensten?','hoogwaardig/hoogopgeleid/bank/financ/advoca/verzeker/kennis',0]]);

/* 7 Regionale verschillen */
O('p42','w42_7a','7a','Wat zijn twee kenmerken van de zware industrie?','Noem twee kenmerken van zware industrie, zoals hoogovens en staalfabrieken.',
 ['Er worden veel (ruwe) grondstoffen verwerkt, zoals steenkool en ijzererts, en er is veel energie nodig.','Het zijn grote fabrieken met grote, zware producten (zoals staal); ze zitten vaak bij de grondstoffen of bij een haven, en vervuilen veel. (Basisboek B207)'],
 [['Kenmerk 1','grondstof/steenkool/erts/energie',0],['Kenmerk 2','groot/zwaar/vervuil/haven/mijn/veel ruimte/grondstof/energie',0]]);
O('p42','w42_7b','7b','Wat betekenen deze kenmerken uit vraag 7a voor de waarde van de producten?','Zijn producten van de zware industrie, zoals staal, veel waard per kilo? Leg uit.',
 ['De producten zijn halffabricaten (zoals staal) waar nog niet veel kennis in zit: de waarde per kilo is laag (lage toegevoegde waarde), anders dan bij hightechproducten.'],
 [['Waarde?','laag/lager/weinig/goedkoop/niet veel',0]]);
M('p42','w42_7c','7c','In welke twee regio’s in Duitsland is veel zware industrie gevestigd?','het Ruhrgebied en Saarland',['Beieren en Baden-Württemberg','Hamburg en Bremen','Berlijn en Brandenburg'],
 'Daar lagen steenkoolmijnen: de zware industrie vestigde zich bij de grondstof.',['Waarom ontstond in het Ruhrgebied en Saarland zware industrie?','Er was steenkool in de bodem.',['Er waren veel universiteiten.','Er lag een grote luchthaven.','Daar woonden de meeste hoogopgeleiden.']]);
O('p42','w42_7d','7d','Geef twee verklaringen waardoor de ooit zo belangrijke regio’s met zware industrie nu tot de economisch zwakke regio’s in Duitsland worden gerekend.','Waarom zijn het Ruhrgebied en Saarland nu economisch zwakker dan het zuiden? Geef twee verklaringen.',
 ['Na 1960 konden steenkool en staal goedkoper uit het buitenland worden gehaald: mijnen en staalfabrieken gingen dicht, de werkloosheid steeg.','Er was weinig andere (moderne) industrie: de werknemers waren niet opgeleid voor hightech of diensten, en de oude industrie is vervuilend en verouderd. Nieuwe bedrijven kozen liever voor het zuiden.'],
 [['Verklaring 1: wat ging er mis met steenkool en staal?','buitenland/goedkoper/import/concurrent|dicht/sluit/gesloten/werkloos',0],['Verklaring 2','hightech/dienst/opgeleid/scholing/verouder/oud/vervuil/eenzijdig/andere industrie/nieuwe bedrijven/werkloos',0]]);

/* 8 Werkloosheid in Duitsland */
O('p42','w42_8b','8b','Welke tweedeling zie je in bron W9 (de werkloosheid per deelstaat)?','Waar in Duitsland is de werkloosheid hoog en waar laag?',
 ['In het oosten (de vroegere DDR) en in het noorden is de werkloosheid hoger; in het zuiden (Beieren en Baden-Württemberg) is die het laagst. Er is dus een tweedeling tussen oost en west, en tussen noord en zuid.'],
 [['Waar hoog en waar laag?','oost/noord|zuid/west/beieren/baden',0]]);
O('p42','w42_8d','8d','Verklaar de zichtbare regionale verschillen in bron W10 (sterke en minder sterke economische gebieden) aan de hand van bron W9 (werkloosheid).','Waarom zijn de gebieden met hoge werkloosheid de economisch minder sterke gebieden?',
 ['In de minder sterke gebieden (het oosten, het Ruhrgebied en Saarland) is de werkloosheid hoog: de oude industrie verdween en er kwamen niet genoeg nieuwe banen.','In de sterke gebieden (vooral het zuiden: Beieren, Baden-Württemberg; ook Hamburg) is de werkloosheid laag dankzij de hightechindustrie en de diensten.'],
 [['Minder sterke gebieden','oost/ruhr/saar|werkloos/weinig werk/banen',0],['Sterke gebieden','zuid/beieren/baden/munchen/stuttgart/hamburg|werkloos/werk/hightech/dienst/laag',0]]);

/* 9 Sociale bevolkingsontwikkeling */
O('p42','w42_9c','9c','Bedenk waarom de pijlen in bron W10 (migratie binnen Duitsland) niet allemaal even dik zijn.','Wat betekent een dikke pijl op een migratiekaart?',
 ['De dikte van een pijl laat zien hoeveel mensen er verhuizen: hoe dikker de pijl, hoe meer migranten.'],
 [['Waar staat de dikte voor?','aantal/hoeveel/veel/meer|mens/migrant/verhuiz/mensen',0]]);
O('p42','w42_9d','9d','Welke twee hoofdbewegingen van migratie zie je in bron W10?','Noem de twee belangrijkste migratiestromen binnen Duitsland.',
 ['Van Oost-Duitsland naar het westen en zuiden (en naar Berlijn).','Van de oude industriegebieden (het Ruhrgebied en Saarland) naar de sterke gebieden in het zuiden (Stuttgart, München).'],
 [['Beweging 1','oost|west/zuid/berlijn',0],['Beweging 2','ruhr/saar/industrie|zuid/stuttgart/munchen',0]]);
O('p42','w42_9e','9e','Vergelijk bron W10 met bron W11. Welke gebieden in Duitsland hebben een vertrekoverschot en welke een vestigingsoverschot?','Welke Duitse gebieden hebben een vertrekoverschot, en welke een vestigingsoverschot?',
 ['Vertrekoverschot: Oost-Duitsland (buiten Berlijn), het Ruhrgebied en Saarland.','Vestigingsoverschot: het zuiden (rond Stuttgart en München), Hamburg en Berlijn.'],
 [['Vertrekoverschot','oost/ruhr/saar/ddr',0],['Vestigingsoverschot','zuid/stuttgart/munchen/beieren/baden/hamburg/berlijn',0]]);
M('p42','w42_9f','Begrip','Uit een gebied vertrekken meer mensen dan er komen wonen. Hoe heet dat?','vertrekoverschot',['vestigingsoverschot','geboorteoverschot','sterfteoverschot'],
 'Sociale bevolkingsgroei = vestiging min vertrek. Meer vertrek dan vestiging = vertrekoverschot (Basisboek B147).',['Er komen meer mensen in een gebied wonen dan er vertrekken. Hoe heet dat?','vestigingsoverschot',['vertrekoverschot','natuurlijke groei','geboorteoverschot']]);

/* 10 Bevolkingsontwikkeling in Duitsland */
O('p42','w42_10a','10a','Vergelijk bron W11 (bevolkingsgroei en -krimp) met bron W10 (sterke en minder sterke gebieden). Welk verband wordt duidelijk?','Welk verband is er tussen de economie van een gebied en de groei of krimp van de bevolking?',
 ['In de economisch sterke gebieden groeit de bevolking; in de economisch minder sterke gebieden krimpt de bevolking.'],
 [['Het verband','sterk/rijk/werk/welvaart|groei/toe/meer|zwak/minder sterk/krimp/af',0]]);
O('p42','w42_10b','10b','Verklaar het verband uit vraag 10a.','Waarom krimpt de bevolking in economisch zwakke gebieden en groeit ze in sterke gebieden?',
 ['In de economisch zwakke gebieden is weinig werk (hoge werkloosheid). Mensen, vooral jongeren, vertrekken daarom naar gebieden met werk: vertrekoverschot → krimp.','In de sterke gebieden is veel werk, dus komen er mensen bij: vestigingsoverschot → groei.'],
 [['Waarom vertrekken mensen?','werk/werkloos/baan|vertrek/weg/verhuiz/trek',1],['Waar gaan ze heen, en wat is het gevolg?','vestig/groei/werk/sterk',0]]);

/* 11 Ontgroening en vergrijzing */
O('p42','w42_11','11','Leg uit dat zowel ontgroening als vergrijzing logische gevolgen zijn van het vertrekoverschot in grote delen van het oosten van Duitsland.','Waarom krijgt Oost-Duitsland door het vertrekoverschot te maken met ontgroening én vergrijzing?',
 ['Vooral jongeren vertrekken uit het oosten om elders werk of een opleiding te zoeken (selectieve migratie).','Daardoor worden er ook minder kinderen geboren: het aandeel jongeren neemt af (ontgroening).','De ouderen blijven achter, dus het aandeel 65-plussers wordt groter (vergrijzing).'],
 [['Wie vertrekken er vooral?','jong/jonger|vertrek/weg/trek',0],['Waarom ontgroening?','minder kinderen/geboren/geboorte/jongeren|minder/af/kleiner/weg',1],['Waarom vergrijzing?','ouder/65/bejaard|blijven/achter/aandeel/groter/meer',1]]);

/* ===== §4.3 Europa ===== */
M('p43','h43a',LB,'Welke landen richtten in 1957 de Europese Economische Gemeenschap (EEG) op?','België, Frankrijk, Italië, Luxemburg, Nederland en West-Duitsland',['Nederland, België, Luxemburg en het Verenigd Koninkrijk','Frankrijk, Duitsland, Polen en Spanje','alle 27 landen van de huidige EU'],
 'Zes landen; de EEG groeide later uit tot de EU.',['Hoeveel landen richtten in 1957 de EEG op?','zes',['twaalf','achttien','27']]);
M('p43','h43b',LB,'Wat was het doel van de EEG?','oorlog voorkomen en meer welvaart creëren',['het communisme verspreiden','één taal voor heel Europa','de grenzen met Azië sluiten'],
 'Na een eeuw vol oorlogen en crises wilden de landen samenwerken.',['Waarom gingen Europese landen na de Tweede Wereldoorlog samenwerken?','om oorlog te voorkomen en meer welvaart te krijgen',['om samen een leger tegen Afrika te vormen','omdat de VS dat verplichtte','om één godsdienst in te voeren']]);
M('p43','h43c',LB,'Wanneer sloten veel landen uit Zuid-Europa zich aan bij de EU (toen EEG), en waarom pas toen?','in de jaren 1980, nadat daar de dictatuur was beëindigd',['in 1957, bij de oprichting','vanaf 2004, na het einde van het communisme','in 2020, na de Brexit'],
 'Eerst Noord- en West-Europa, jaren 1980 Zuid-Europa, vanaf 2004 dertien landen uit Centraal- en Oost-Europa.',['Vanaf 2004 sloten dertien landen uit Centraal- en Oost-Europa zich aan. Wat was daar eerst gebeurd?','een einde aan (burger)oorlogen en/of het communisme',['een einde aan de monarchie','de invoering van de euro','de bouw van het IJzeren Gordijn']]);
M('p43','h43d',LB,'Hoeveel landen telt de EU nu, en welk land stapte in 2020 uit de EU?','27; het Verenigd Koninkrijk',['28; Noorwegen','25; Zwitserland','30; Turkije'],
 'Na de Brexit (2020) telt de EU 27 landen.',['Welk land verliet in 2020 de Europese Unie?','het Verenigd Koninkrijk',['Polen','Griekenland','Noorwegen']]);
M('p43','h43e',LB,'Wat is het motto van de EU?','verenigd in verscheidenheid',['één volk, één taal','vrijheid, gelijkheid, broederschap','eendracht maakt macht'],
 'De EU is multicultureel, maar probeert politiek en economisch een eenheid te zijn.',['Waarom past het motto “verenigd in verscheidenheid” bij de EU?','Er wonen veel volken met hun eigen cultuur, maar de landen werken samen.',['Alle landen hebben dezelfde taal.','De landen zijn het overal over eens.','Er is één godsdienst.']]);
M('p43','h43f',LB,'Wat mag er vrij over de grens binnen de interne markt van de EU?','personen, goederen, diensten en geld',['alleen goederen','alleen personen met een visum','alleen geld in euro'],
 'Zo ontstond een gemeenschappelijke afzetmarkt van meer dan 450 miljoen mensen.',['Wat houdt de interne markt van de EU in?','vrij verkeer van personen, goederen, diensten en geld',['één taal voor alle EU-landen','alleen vrije handel in landbouwproducten','dat alle landen dezelfde belasting heffen']]);
M('p43','h43f2',LB,'Hoe groot is de gemeenschappelijke afzetmarkt van de EU?','meer dan 450 miljoen mensen',['ongeveer 85 miljoen mensen','ongeveer 1 miljard mensen','ongeveer 27 miljoen mensen'],'Interne markt + euro: een afzetmarkt van meer dan 450 miljoen mensen.',['Voor hoeveel mensen is de EU één afzetmarkt?','meer dan 450 miljoen',['ongeveer 100 miljoen','ongeveer 2 miljard','ongeveer 50 miljoen']]);
M('p43','h43g',LB,'Wat zijn de Schengenlanden?','landen die hun onderlinge grenzen hebben opgeheven (geen grenscontroles)',['landen die de euro gebruiken','landen die lid willen worden van de EU','de oprichters van de EEG'],
 '29 landen: 25 EU-landen en 4 niet-lidstaten, met afspraken over visum, asiel, politie en justitie.',['Hoe heten de landen die hun onderlinge grenscontroles hebben opgeheven?','de Schengenlanden',['de eurolanden','de BRICS+-landen','de G7-landen']]);
M('p43','h43h',LB,'Welke landen zijn officieel in onderhandeling om lid te worden van de EU?','Albanië, Moldavië, Montenegro, Noord-Macedonië, Oekraïne en Servië',['Noorwegen, Zwitserland en IJsland','het Verenigd Koninkrijk en Ierland','Rusland en Turkije'],
 'Ze willen de voordelen van de interne markt en meer veiligheid.',['Welke van deze landen onderhandelt officieel over toetreding tot de EU?','Oekraïne',['Noorwegen','Zwitserland','het Verenigd Koninkrijk']]);
O('p43','h43h2',LB,'Waarom willen landen als Oekraïne, Moldavië en Servië lid worden van de EU?','Wat levert het EU-lidmaatschap een land als Oekraïne op?',['De voordelen van de interne markt: vrij handelen met een afzetmarkt van meer dan 450 miljoen mensen.','Meer veiligheid dankzij de EU.'],[['Iets met handel','interne markt/handel/afzetmarkt/vrij verkeer/welvaart',0],['Iets met veiligheid','veilig/vrede/bescherm',0]]);
M('p43','h43i',LB,'Waar liggen de relatief rijke en waar de relatief arme EU-landen?','rijk in het noorden en westen, arm in het oosten en zuiden',['rijk in het oosten, arm in het westen','rijk in het zuiden, arm in het noorden','overal ongeveer even rijk'],
 'Een inwoner van Duitsland verdient gemiddeld ruim twee keer zoveel als een Pool.',['In welk deel van de EU liggen de relatief arme en minder ontwikkelde landen?','in het oosten en zuiden',['in het noorden en westen','alleen in Scandinavië','in het midden']]);
M('p43','h43i2',LB,'Hoeveel meer verdient een inwoner van Duitsland gemiddeld per maand dan een inwoner van Polen?','ruim twee keer zoveel',['ongeveer evenveel','tien keer zoveel','de helft'],'Een duidelijke economische scheiding tussen noord/west en oost/zuid.',['Een Pool verdient gemiddeld … dan zijn westerbuur in Duitsland.','nog niet de helft',['ongeveer evenveel','twee keer zoveel','tien keer minder']]);
M('p43','h43j',LB,'Waarvoor kreeg de EU in 2012 de Nobelprijs voor de Vrede?','de verzoening tussen Duitsland en Frankrijk, de hereniging van Oost- en West-Europa en de toenadering op de Balkan',['de invoering van de euro','de Brexit','het opheffen van alle grenzen in de wereld'],
 'Na drie grote oorlogen in 75 jaar tussen Duitsland en Frankrijk.',['Het Nobelcomité prees in 2012 de EU. Waarvoor?','de verzoening tussen Duitsland en Frankrijk, de hereniging van Oost- en West-Europa en de toenadering op de Balkan',['de groei van de Duitse economie','het sluiten van de buitengrenzen','de oprichting van de NAVO']]);
M('p43','h43k','Basisboek B250','In welk economisch systeem bepalen particuliere ondernemers zelf wat en hoeveel er wordt geproduceerd?','kapitalisme (vrijemarkteconomie)',['communisme (planeconomie)','feodalisme','monarchie'],
 'Kapitalisme = vrijemarkteconomie. Communisme = planeconomie: de staat bepaalt.',['In welk systeem maakt een ministerie voor elk bedrijf een productieplan?','communisme (planeconomie)',['kapitalisme (vrijemarkteconomie)','democratie','interne markt']]);
M('p43','h43l','Basisboek B271','Welke drie zijn voorbeelden van economische machtsblokken?','EU, USMCA en ASEAN',['NAVO, VN en WTO','G7, Schengen en de euro','Duitsland, Frankrijk en Italië'],
 'USMCA: VS, Mexico, Canada. ASEAN: tien Zuidoost-Aziatische landen.',['Welke samenwerking is een economisch machtsblok van de VS, Mexico en Canada?','USMCA',['ASEAN','EU','BRICS+']]);
M('p43','h43l2','Basisboek B271','Voor wie zijn economische machtsblokken zoals de EU ongunstig?','voor landen erbuiten, vooral in de periferie',['voor de eigen bevolking','voor grote bedrijven in het blok','voor niemand'],'Landen in de periferie krijgen weinig kans op de grote, rijke markten. Daarom: WTO en fair trade.',['Waarom is de EU als machtsblok nadelig voor boeren in Afrika?','Ze krijgen weinig kans hun producten op de grote, rijke markt te verkopen.',['Ze mogen niet meer zelf verbouwen.','De EU koopt alles van hen op.','Ze moeten de euro gebruiken.']]);
M('p43','h43m','Basisboek B156','Een Poolse aspergesteker komt elk voorjaar een paar maanden in Nederland werken en gaat daarna terug. Wat voor migrant is hij?','seizoensmigrant',['kennismigrant (expat)','vluchteling','emigrant'],
 'Seizoensmigrant: een paar weken of maanden. Telkens heen en weer = cirkelmigratie.',['Een Roemeen werkt een paar jaar in Nederland, gaat een tijd terug en komt dan weer. Hoe heet dat?','cirkelmigratie',['braindrain','selectieve migratie','global shift']]);
O('p43','h43n',LB,'Leg uit waarom de EU vooral een economisch machtsblok is geworden.','Waarom noem je de EU een economisch machtsblok? Leg uit.',
 ['Er wordt sinds de jaren 1960 gewerkt aan het makkelijker maken van de handel: de interne markt (vrij verkeer van personen, goederen, diensten en geld), bijna geen grenscontroles (Schengen) en de euro.','Zo ontstond een gemeenschappelijke afzetmarkt van meer dan 450 miljoen mensen; daardoor is de EU economisch sterk. Politiek is er minder eenheid.'],
 [['Wat maakt de handel makkelijker?','interne markt/vrij verkeer/euro/schengen/grens/handel',0],['Wat is het gevolg?','afzetmarkt/450/sterk/machtig/groot',1]]);
O('p43','h43o',LB,'De economische ongelijkheid in de EU heeft ook een voordeel voor de EU. Leg uit welk.','Welk economisch voordeel heeft de EU van de verschillen in lonen tussen de lidstaten? Leg uit.',
 ['Bedrijven uit rijke landen kunnen dankzij het vrije verkeer (een deel van) hun productie uitbesteden aan landen waar de lonen lager liggen.','Arbeidsmigranten kunnen elders in de EU gaan werken, waar de lonen hoger zijn.'],
 [['Wat kunnen bedrijven doen?','uitbested/productie/fabriek|loon/lonen/goedkoop/lager',1],['Wat kunnen werknemers doen?','arbeidsmigr/werken/migr|loon/lonen/hoger/meer',1]]);
O('p43','h43p',LB,'Leg in drie stappen uit hoe selectieve migratie leidt tot vergrijzing en ontgroening in Roemenië of Bulgarije.','Waarom wonen er op het platteland van Roemenië en Bulgarije nauwelijks nog jongeren? Leg uit in drie stappen.',
 ['Stap 1: door de verschillen in welvaart vertrekken mensen uit het oosten naar het westen van Europa om te werken; vooral jongeren (selectieve migratie).','Stap 2: daardoor wordt het aandeel ouderen in de vertrekgebieden steeds groter: vergrijzing.','Stap 3: er worden ook nog minder kinderen geboren, dus het aandeel jongeren neemt steeds verder af: ontgroening.'],
 [['Stap 1: wie vertrekt er, en waarom?','jong|werk/welvaart/loon/geld/west',1],['Stap 2: wat gebeurt er met het aandeel ouderen?','vergrijz/ouderen|groter/meer/toe',0],['Stap 3: wat gebeurt er met het aandeel jongeren?','ontgroen/minder kinderen/jongeren|af/minder/kleiner',0]]);
O('p43','h43q',LB,'Leg uit hoe ontgroening kan leiden tot vergrijzing.','Waarom neemt het aandeel ouderen toe als het aandeel jongeren afneemt?',
 ['Bij ontgroening neemt het aandeel jongeren (onder de 20 jaar) af, bijvoorbeeld doordat jongeren vertrekken en er minder kinderen geboren worden.','Als het aandeel jongeren kleiner wordt, wordt het aandeel ouderen (65+) vanzelf groter: vergrijzing. Het gaat om aandelen (procenten) van de bevolking.'],
 [['Wat is ontgroening?','jong/jonger dan 20/kinderen|af/minder/kleiner',0],['Waarom wordt het aandeel ouderen dan groter?','aandeel/procent/deel|ouder/65/vergrijz',1]]);
O('p43','tq43a',TV,'Stelling: “De Europese Unie is één eenheid.” Geef twee argumenten tegen deze stelling.','Waarom is de EU niet echt één eenheid? Geef twee argumenten.',
 ['Er zijn grote economische verschillen: rijk in het noorden en westen, arm in het oosten en zuiden (Duitsland verdient ruim twee keer zoveel als Polen). Of: de EU is multicultureel, met veel talen en godsdiensten.','Politiek maken sommige lidstaten bewust andere keuzes, en het Verenigd Koninkrijk stapte uit de EU (2020); in sommige landen willen politici dat ook (scheurtjes).'],
 [['Argument 1: verschillen in welvaart of cultuur','rijk/arm/welvaart/inkomen/loon/polen/cultu/taal/godsdienst/multicultu',0],['Argument 2: politieke verschillen','politiek/keuze/verenigd koninkrijk/vk/brexit/uittred/uitstap',0]]);
O('p43','tq43b',TV,'Een Poolse metselaar gaat in Nederland werken. Geef een voordeel voor Nederland vanuit de economische dimensie en een nadeel voor Polen vanuit de demografische dimensie. Noteer de dimensies bij je antwoorden.','Poolse arbeidsmigranten in Nederland: noem een economisch voordeel voor Nederland en een demografisch nadeel voor Polen, met de dimensie erbij.',
 ['Economische dimensie (Nederland): er is hier veel werk en Polen doen ook werk dat Nederlanders niet willen doen; bedrijven krijgen zo genoeg werknemers.','Demografische dimensie (Polen): vooral jongeren vertrekken (selectieve migratie), waardoor de bevolking in de vertrekgebieden krimpt, vergrijst en ontgroent.'],
 [['Economisch voordeel voor Nederland','econom|werk/werknemer/personeel/bedrijv/arbeid',0],['Demografisch nadeel voor Polen','demogra|jong/vergrijs/ontgroen/krimp/minder inwoners',0]]);
O('p43','tq43c',TV,'Een Indiase bouwvakker in Dubai (§3.2) en een Roemeense metselaar in Nederland zijn allebei arbeidsmigrant. Leg uit waarom ze allebei migreren, en noem een verschil tussen hun situatie.','Wat hebben een Indiase bouwvakker in Dubai en een Roemeense metselaar in Nederland gemeen, en wat is een verschil?',
 ['Allebei: ze zijn praktisch opgeleid en gaan naar een rijker gebied, omdat er werk is en ze meer verdienen dan in hun eigen land.','Verschil: de Roemeen mag als EU-burger vrij in Nederland werken (vrij verkeer van personen) en gaat vaak na een paar jaar terug of heen en weer (cirkelmigratie). De bouwvakker in Dubai mag niet vrij van baan wisselen en is niet beschermd door een vakbond.'],
 [['Waarom migreren ze allebei?','werk/loon/verdien/geld/rijk',1],['Een verschil tussen de twee','eu/vrij verkeer/vrij/vakbond/wissel/cirkel/terug/rechten',0]]);
O('p43','tq43d',TV,'Leg uit waarom een Duits autobedrijf een fabriek bouwt in Polen of Roemenië. Gebruik het begrip interne markt.','Waarom verplaatsen bedrijven uit rijke EU-landen productie naar Oost-Europa? Gebruik het begrip interne markt.',
 ['In Polen en Roemenië liggen de lonen lager, dus is produceren daar goedkoper.','Dankzij de interne markt (vrij verkeer van goederen) kunnen de auto’s zonder grenscontrole of heffing in de hele EU worden verkocht.'],
 [['Waarom daar produceren?','loon/lonen|lager/goedkoop',1],['Wat maakt de interne markt mogelijk?','interne markt/vrij verkeer|goederen/verkopen/grens/zonder',0]]);
})();
