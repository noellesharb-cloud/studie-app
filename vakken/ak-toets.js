/* Aardrijkskunde H3: toetsvragen zoals in de oefentoetsen van de uitgever (afspraak 18 nov 2026).
   Waarom: de docent zei dat 2/3 van de toets begripsvragen zijn. In de oefentoetsen moet ze
   (1) een kaart of plaat zelf lezen en gebruiken, (2) argumenten geven vanuit één dimensie (economisch, politiek, natuurlijk),
   (3) stof uit verschillende paragrafen combineren en (4) een stelling onderbouwd tegenspreken.
   nr 'Oefentoets' = de vraag uit de oefentoets van de uitgever (H3 of §3.5), 'Toetsvraag' = dezelfde soort vraag over andere casussen
   uit H3 (binnen de stof, geen andere landen). Bronnen: vakken/ak-bron.js. Wordt na ak.js en ak-ko.js geladen. */
(()=>{
const V=VAKDATA.ak,B=window.AK_BRON;
const D=x=>typeof x==='string'?x.replace(/\$/g,'&#36;'):Array.isArray(x)?x.map(D):x;
const vr=t=>`<p class="tvraag"><b>${D(t)}</b></p>`;
/* open vraag: k = punten van het modelantwoord, ko = onderdelen [aanwijzing, sleutelwoorden, reden nodig] (zelfde aantal) */
function O(o,id,nr,bron,q,vq,k,ko,vb){
  const b=bron?bron():'';
  const x={id,o,nr,q:b+vr(q),v:{q:(bron?bron():'')+vr(vq)},t:'open',k:D(k)};if(vb)x.vb=D(vb);
  V.Q.push(x);if(ko){if(ko.length!==k.length)throw new Error('KO '+id);V.KO[id]=ko.map(o=>[D(o[0]),o[1],o[2]])}}
function M(o,id,nr,q,a,f,u,v,extra){V.Q.push(Object.assign({id,o,nr,q:D(q),a,f:f.map(x=>[x,'']),u:D(u),v:{q:D(v[0]),a:v[1],f:v[2]}},extra||{}))}
const OT='Oefentoets',TV='Toetsvraag';
/* terugblik: 2 van de 8 vragen zijn open (uitleg)vragen */
V.openTerug=2;

/* ================= §3.1 Kennismaking ================= */
O('p31','ot31a',OT,B.neerslag,
 'Stelling: “Je kunt met deze kaart de bevolkingsspreiding van het Midden-Oosten beschrijven en verklaren.” Geef een argument tegen de stelling. Ondersteun je antwoord met een voorbeeld van een gebied waarvoor de stelling niet klopt.',
 'Iemand zegt: “Waar weinig regen valt, wonen weinig mensen. Dat zie je op deze kaart.” Waarom klopt dat niet altijd? Noem een gebied als voorbeeld.',
 ['Waar mensen wonen hangt af van de toegang tot water, en die komt niet alleen uit neerslag: ook uit rivieren en grondwater.',
  'Voorbeeld: langs de Nijl (Caïro) valt minder dan 250 mm neerslag, maar het is er heel dichtbevolkt, doordat de rivier water aanvoert uit een natter gebied. (Ook goed: Bagdad aan de Eufraat en de Tigris, of Riyad met grondwater en ontzilt water.)'],
 [['Waarom klopt de stelling niet? Waar hangt de bevolkingsspreiding echt van af?','water',1],
  ['Voorbeeld: welk gebied heeft weinig neerslag en toch veel mensen? Waardoor kan dat?','nijl/cairo/kairo/egypte/bagdad/eufraat/tigris/riyad|rivier/grondwater/aquifer/ontzilt',1]]);
O('p31','ot31b',OT,null,
 'Stelling: “Het Midden-Oosten is één cultuurgebied.” Geef een argument tegen het zien van het Midden-Oosten als één cultuurgebied.',
 'Waarom kun je zeggen dat het Midden-Oosten géén cultuurgebied is? Geef een argument met een voorbeeld.',
 ['Er zijn grote verschillen in godsdienst of taal, bijvoorbeeld: in Israël is de meerderheid joods en in Libanon wonen veel christenen; moslims zijn verdeeld in soennieten en sjiieten; in Turkije spreken ze Turks, in Iran Perzisch en in Israël Hebreeuws.'],
 [['Noem een verschil in godsdienst of taal, met een land als voorbeeld.','joods/jood/christen/soenniet/sjiiet/turks/perzisch/hebreeuws',0]]);
O('p31','tq31a',TV,B.neerslag,
 'In Jemen wonen de meeste mensen in het westen, in de bergen rond Sanaa. Verklaar dit met de kaart.',
 'Waarom wonen er in het westen van Jemen veel meer mensen dan in het oosten? Gebruik de kaart.',
 ['Op de kaart zie je dat in het westen van Jemen (de bergen) meer neerslag valt: 250 tot meer dan 500 mm. In de rest van Jemen valt minder dan 250 mm.',
  'Daar is genoeg water voor landbouw en drinkwater, dus kunnen er meer mensen wonen.'],
 [['Wat zie je op de kaart bij West-Jemen?','neerslag/regen/250/500',0],['Wat betekent dat voor de mensen daar? (dus …)','water|landbouw/drinkwater/wonen/leven/eten',1]]);
O('p31','tq31b',TV,B.neerslag,
 'In Turkije wonen de mensen verspreid over het hele land. In Saudi-Arabië wonen ze juist dicht op elkaar in een paar plekken. Verklaar dit verschil met de kaart.',
 'Leg met de kaart uit waarom de bevolking in Turkije verspreid woont en in Saudi-Arabië geconcentreerd.',
 ['In Turkije valt bijna overal veel neerslag (250 tot meer dan 1.000 mm), in bijna heel Saudi-Arabië minder dan 250 mm.',
  'In Turkije kun je dus bijna overal landbouw doen en aan water komen. In Saudi-Arabië kan dat alleen bij oasen, met grondwater of met ontzilt water, dus wonen de mensen daar geconcentreerd.'],
 [['Wat zie je op de kaart bij Turkije en bij Saudi-Arabië?','neerslag/regen/250/500',0],['Wat betekent dat voor waar mensen kunnen wonen?','water|oase/grondwater/ontzilt/landbouw/overal',1]]);
O('p31','tq31c',TV,null,
 'Stelling: “Omdat bijna iedereen in het Midden-Oosten moslim is, zijn er weinig spanningen tussen de landen.” Geef twee argumenten tegen deze stelling.',
 'Waarom zijn er in het Midden-Oosten toch veel spanningen, terwijl de meeste mensen moslim zijn? Geef twee argumenten.',
 ['Binnen de islam zijn er grote verschillen: soennieten en sjiieten. In Iran, Irak en Bahrein is de meerderheid sjiitisch, in de meeste andere landen soennitisch.',
  'Er zijn ook andere verschillen die tot spanningen leiden: in welvaart (olie), in water (rivieren die door meer landen stromen) en in bestuur (veel landen scoren laag op de democratie-index).'],
 [['Verschil binnen de islam','soenniet|sjiiet',0],['Een ander soort verschil dat tot spanningen leidt','water/olie/welvaart/bestuur/democratie/politiek/macht',0]]);

/* ================= §3.2 Dubai ================= */
O('p32','ot32a',OT,null,
 'Stelling: “Voor een duurzamere wereld in de toekomst is Dubai een goede plek om een klimaatconferentie van de VN te organiseren.” Geef twee argumenten tegen deze stelling.',
 'Waarom kun je kritiek hebben op een klimaatconferentie in Dubai? Geef twee argumenten.',
 ['Dubai is zelf niet duurzaam: een inwoner verbruikt ongeveer drie keer zoveel energie als een Nederlander (vooral door de airco), er is een skihal en het water komt uit ontzilting, die veel energie kost. Dubai heeft een grote ecologische voetafdruk.',
  'De VAE verdienen veel aan olie, en de conferentie kan worden gebruikt voor greenwashing: Dubai doet zich duurzamer voor dan het is.'],
 [['Argument 1: hoe duurzaam is Dubai zelf? Gebruik een voorbeeld.','energie/airco/skihal/voetafdruk/ontzilt/vervuil',0],['Argument 2: welk begrip past bij een niet-duurzaam land dat zich duurzaam voordoet? Of: waar verdienen de VAE hun geld mee?','greenwashing/olie',0]]);
O('p32','ot32b',OT,null,
 'Leg met de begrippen global shift en relatieve ligging uit hoe Dubai kon uitgroeien tot een wereldstad.',
 'Hoe hebben de global shift en de relatieve ligging van Dubai ervoor gezorgd dat Dubai een wereldstad werd?',
 ['Door de global shift verschoof het economische zwaartepunt van het gebied rond de Atlantische Oceaan naar het gebied rond de Grote Oceaan (Azië).',
  'Daardoor kreeg Dubai een gunstigere relatieve ligging: bijna precies halverwege Europa en Azië, op de handelsroute.',
  'Dubai werd zo een mainport (knooppunt) voor goederen en passagiers, en groeide uit tot wereldstad.'],
 [['Global shift: wat verschoof, waarheen?','grote oceaan/azie/atlantisch',0],['Relatieve ligging: waar ligt Dubai ten opzichte van wat?','europa|azie/halverwege',1],['Wat werd Dubai daardoor?','mainport/knooppunt/handel/overstap',1]]);
O('p32','ot32c',OT,()=>B.neerslag()+B.welvaart(),
 'Geef twee voorbeelden van landen die (nog) niet op grote schaal aan ontzilting doen als oplossing voor een tekort aan water. Onderbouw je keuzes met de neerslagkaart en/of de kaart over welvaart en olie.',
 'Noem twee landen in het Midden-Oosten waar ontzilting geen oplossing is of (nog) niet nodig is. Gebruik de twee kaarten om je keuze uit te leggen.',
 ['Een land met weinig geld en weinig olie, zoals Jemen (inkomen minder dan $ 2.000, maar 70.200 vaten olie per dag) of Syrië: ontzilting is duur en kost veel energie, dat kunnen zij niet betalen.',
  'Een land met veel neerslag, zoals Turkije of Libanon (500 tot meer dan 1.000 mm): daar is ontzilting (nog) niet nodig. (Ook goed: Egypte of Irak, die water uit een rivier hebben en weinig geld.)'],
 [['Land 1: waarom kan dit land ontzilting niet betalen? Gebruik de kaart over welvaart en olie.','jemen/syrie/egypte/irak/jordanie|geld/inkomen/arm/olie/duur/welvaart',1],
  ['Land 2: waarom is ontzilting daar (nog) niet nodig? Gebruik de neerslagkaart.','turkije/libanon/iran/egypte/irak|neerslag/regen/rivier/nijl/eufraat/tigris',1]]);
O('p32','tq32a',TV,B.welvaart,
 'Irak produceert ongeveer evenveel olie als Koeweit en Qatar samen. Toch is het gemiddelde inkomen in Irak veel lager. Geef twee verklaringen.',
 'Waarom is Irak veel armer dan Koeweit en Qatar, terwijl het ongeveer evenveel olie heeft als die twee samen? Geef twee verklaringen.',
 ['Irak heeft veel meer inwoners dan Koeweit en Qatar. De opbrengst van de olie wordt dus over veel meer mensen verdeeld, waardoor het inkomen per persoon lager is.',
  'In Irak is lange tijd oorlog en onrust geweest. Daardoor is er veel kapotgegaan en komt het geld niet bij de bevolking terecht.'],
 [['Verklaring 1: denk aan het aantal inwoners (dus …)','inwoner/mensen|verdeel/per persoon/per inwoner/minder/meer',1],['Verklaring 2: wat is er in Irak gebeurd?','oorlog/onrust/conflict/geweld',0]]);
O('p32','tq32b',TV,null,
 'Geef een voordeel van Dubai als wereldstad vanuit de economische dimensie, en een nadeel vanuit de natuurlijke dimensie. Noteer de dimensies bij je antwoorden.',
 'Dubai als wereldstad: noem één economisch voordeel en één natuurlijk nadeel. Schrijf de dimensie erbij.',
 ['Economische dimensie (voordeel): veel werk en inkomen door handel, de haven en luchthaven (mainport), toerisme en bedrijven. Dubai is minder afhankelijk van olie (diversificatie).',
  'Natuurlijke dimensie (nadeel): Dubai heeft een grote ecologische voetafdruk: veel energie voor airco, ontzilting, de skihal en vliegverkeer.'],
 [['Economisch voordeel','econom|werk/geld/inkomen/handel/toeris/diversificatie/bedrijven',0],['Natuurlijk nadeel','natuur|energie/voetafdruk/airco/ontzilt/vervuil/co2/skihal/milieu',0]]);
O('p32','tq32c',TV,null,
 'Stelling: “In een land met een hoog bnp per inwoner heeft iedereen een hoog welzijn.” Geef een argument tegen deze stelling, met een voorbeeld uit §3.2.',
 'Waarom zegt een hoog bnp per inwoner niet dat iedereen in een land het goed heeft? Gebruik een voorbeeld uit Dubai.',
 ['Het bnp per inwoner is een gemiddelde: het zegt niets over hoe het geld verdeeld is.',
  'Voorbeeld: in Dubai (VAE) is het bnp per inwoner heel hoog, maar slechtbetaalde arbeidsmigranten werken lange dagen voor weinig geld, wonen slecht en hebben weinig rechten (geen vakbond, niet vrij van baan wisselen).'],
 [['Wat voor getal is het bnp per inwoner? Wat zegt het dus niet?','gemiddeld|verdeel/verdeling/iedereen',1],['Voorbeeld uit Dubai: welke groep heeft het niet goed?','arbeidsmigrant/migrant/bouwvakker',1]]);
O('p32','tq32d',TV,B.neerslag,
 'In Dubai valt bijna geen neerslag, maar er zijn veel zwembaden, golfbanen en zelfs een skihal. Leg uit hoe Dubai aan genoeg water komt, en waarom dat niet duurzaam is.',
 'Dubai ligt in een gebied met minder dan 250 mm neerslag. Waar komt het water vandaan, en waarom is dat niet duurzaam?',
 ['Dubai maakt zoet water van zeewater (ontzilting). Dat kan omdat Dubai rijk is (olie, handel, toerisme).',
  'Ontzilting kost veel energie, vooral uit olie en gas. Dat geeft een grote ecologische voetafdruk, dus het is niet duurzaam.'],
 [['Waar komt het water vandaan, en waarom kan Dubai dat betalen?','ontzilt/zeewater|rijk/geld/olie/welvaart',1],['Waarom is dat niet duurzaam?','energie/olie/gas/voetafdruk/co2',1]]);

/* ================= §3.3 Water ================= */
O('p33','ot33a',OT,null,
 'Beschrijf in drie stappen hoe een watertekort op het platteland kan leiden tot een tekort aan woningen in de grote steden in het Midden-Oosten. Gebruik in je antwoord het begrip leefbaarheid.',
 'Hoe kan te weinig water op het platteland ervoor zorgen dat er in Caïro te weinig woningen zijn? Leg het uit in drie stappen, met het begrip leefbaarheid.',
 ['Stap 1: door het watertekort mislukt de landbouw: minder voedsel en minder werk op het platteland.',
  'Stap 2: de leefbaarheid op het platteland gaat achteruit, daardoor trekken mensen naar de grote steden.',
  'Stap 3: in de steden komen zoveel mensen bij dat er te weinig woningen zijn.'],
 [['Stap 1: wat gebeurt er op het platteland door het watertekort?','landbouw/oogst/voedsel/werk/boer',1],['Stap 2: gebruik het begrip leefbaarheid. Wat doen de mensen dan?','leefbaar|trek/verhuis/vertrek/migr/stad',1],['Stap 3: wat gebeurt er in de stad?','woning|tekort/te weinig/vol/druk',1]]);
O('p33','tq33a',TV,B.neerslag,
 'Bagdad ligt in een gebied met minder dan 250 mm neerslag per jaar. Toch wonen er miljoenen mensen. Leg uit hoe dat kan, en welk soort oase Bagdad is.',
 'Hoe kan Bagdad een miljoenenstad zijn met minder dan 250 mm neerslag? Welk soort oase is het?',
 ['Bagdad ligt aan de Tigris (dicht bij de Eufraat). Die rivieren voeren water aan uit een natter gebied in Turkije (500 tot meer dan 1.000 mm).',
  'Bagdad is dus een rivieroase.'],
 [['Waar komt het water vandaan? Gebruik de kaart.','tigris/eufraat/rivier|turkije/natter/neerslag/berg',1],['Welk soort oase?','rivieroase',0]]);
O('p33','tq33b',TV,null,
 'De Grote Renaissancedam in Ethiopië. Geef een argument vóór de dam vanuit de economische dimensie, en een argument tegen de dam vanuit de natuurlijke dimensie. Noteer de dimensies bij je antwoorden.',
 'Noem een economisch argument vóór de Grote Renaissancedam en een natuurlijk argument ertegen. Schrijf de dimensie erbij.',
 ['Economische dimensie (vóór): de dam levert elektriciteit voor Ethiopië (en Sudan kan stroom kopen); dat is goed voor bedrijven en de ontwikkeling van het land.',
  'Natuurlijke dimensie (tegen): er stroomt minder water door de Nijl naar Egypte, dat 97% van zijn water uit de Nijl haalt. (Ook goed: een groot stuwmeer waar veel water verdampt.)'],
 [['Economisch argument vóór','elektriciteit/stroom/energie',0],['Natuurlijk argument tegen','minder water/nijl/verdamp/97',0]]);
O('p33','tq33c',TV,null,
 'Stelling: “Saudi-Arabië heeft genoeg water, want onder de woestijn zit veel water in aquifers.” Geef twee argumenten tegen deze stelling.',
 'Waarom is het water in de aquifers onder Saudi-Arabië geen oplossing voor altijd? Geef twee argumenten.',
 ['Het water in de aquifers is fossiel water: het viel duizenden jaren geleden in een natter klimaat en wordt bijna niet aangevuld.',
  'Er wordt veel meer water opgepompt dan er bijkomt, dus de aquifers raken leeg (grondwater is als een spaarrekening).'],
 [['Wat voor water zit er in de aquifers?','fossiel/oud/natter klimaat/duizenden',0],['Wat gebeurt er als je blijft oppompen?','opgepompt/oppomp/aangevuld/aanvul|leeg/op/minder',1]]);
O('p33','tq33d',TV,()=>B.tigris(),
 'Turkije en Egypte zijn allebei afhankelijk van een rivier die door meer landen stroomt. Leg uit waarom Turkije in een waterconflict sterker staat dan Egypte.',
 'Waarom heeft Turkije bij de Eufraat en de Tigris meer macht dan Egypte bij de Nijl?',
 ['Turkije ligt bovenstrooms: de Eufraat en de Tigris ontspringen in Turkije, in het natte gebied. Met stuwdammen kan Turkije water tegenhouden.',
  'Egypte ligt benedenstrooms aan de Nijl: het krijgt alleen wat landen als Ethiopië doorlaten, zoals bij de Grote Renaissancedam.'],
 [['Waar ligt Turkije aan de rivier, en wat kan het daardoor?','bovenstrooms/ontspring/bron|dam/tegenhouden/stuw',1],['Waar ligt Egypte aan de Nijl, en wat betekent dat?','benedenstrooms/ethiopi',1]]);
O('p33','tq33e',TV,B.welvaart,
 'Jemen heeft een groot watertekort. Bekijk de kaart. Kies een maatregel tegen het watertekort die past bij Jemen, en leg uit waarom. Zeg ook of de maatregel de vraag verkleint of het aanbod vergroot.',
 'Welke maatregel tegen watertekort kan Jemen wél betalen? Leg uit met de kaart, en zeg of hij de vraag verkleint of het aanbod vergroot.',
 ['Een goedkope maatregel, bijvoorbeeld druppelirrigatie, afvalwater zuiveren en hergebruiken, of water bewaren in tanks. Jemen is arm en heeft weinig olie (minder dan $ 2.000 inkomen, 70.200 vaten per dag), dus dure ontzilting kan het niet betalen.',
  'Druppelirrigatie verkleint de vraag; afvalwater hergebruiken of water bewaren vergroot het aanbod.'],
 [['Welke maatregel, en waarom past die bij Jemen? (Gebruik de kaart.)','druppel/afvalwater/hergebruik/tank/bewaren/stuw/bezuinig|arm/geld/duur/goedkoop/olie/inkomen',1],['Verkleint hij de vraag of vergroot hij het aanbod?','vraag/aanbod',0]]);

/* ================= §3.4 Suezkanaal en Rode Zee ================= */
M('p34','ot34a',OT,'Vul in. Machtscentra kunnen verschuiven, zoals bij de global shift: van de landen rondom de … Oceaan naar de landen rondom de … Oceaan.',
 'Atlantische → Grote',['Grote → Atlantische','Indische → Atlantische','Atlantische → Indische'],
 'Bij de global shift verschoof het economische zwaartepunt van het gebied rond de Atlantische Oceaan (Europa, Noord-Amerika) naar het gebied rond de Grote Oceaan (Azië).',
 ['De global shift: van welke oceaan naar welke oceaan verschoof het economische zwaartepunt?','van de Atlantische naar de Grote Oceaan',['van de Grote naar de Atlantische Oceaan','van de Indische naar de Atlantische Oceaan','van de Atlantische naar de Indische Oceaan']],
 {tv:'Vul in. Machtscentra kunnen verschuiven, zoals bij de global shift: van de landen rondom de … Oceaan naar de landen rondom de … Oceaan.'});
M('p34','ot34b',OT,'Kies het juiste woord. Door de global shift heeft Dubai een gunstigere … ligging gekregen.',
 'relatieve',['absolute'],
 'Relatieve ligging = de ligging ten opzichte van andere plekken. Dubai ligt nog op dezelfde plek (absolute ligging), maar ligt nu gunstiger ten opzichte van de groeiende handel met Azië.',
 ['Dubai ligt nu gunstiger ten opzichte van Azië. Welke ligging is veranderd?','de relatieve ligging',['de absolute ligging']]);
M('p34','ot34c',OT,'Vul in. Vroeger was er een tweedeling tussen de machtigere ontwikkelde landen, die vooral op het … halfrond lagen, en de ontwikkelingslanden, die vooral op het … halfrond lagen.',
 'noordelijk → zuidelijk',['zuidelijk → noordelijk'],
 'De oude tweedeling: rijke, ontwikkelde landen in het noorden en ontwikkelingslanden in het zuiden. Die bestaat niet meer, doordat veel landen snel gegroeid zijn.',
 ['Waar lagen vroeger vooral de ontwikkelde landen, en waar de ontwikkelingslanden?','ontwikkeld: noordelijk halfrond, ontwikkelingslanden: zuidelijk halfrond',['ontwikkeld: zuidelijk halfrond, ontwikkelingslanden: noordelijk halfrond']]);
M('p34','ot34d',OT,'Kies het juiste woord. De …-landen winnen de laatste decennia aan politieke invloed, terwijl de …-landen hun invloed steeds meer moeten delen. Daarom voeren ze een geopolitieke strijd, bijvoorbeeld in het Midden-Oosten.',
 'BRICS+ → G7',['G7 → BRICS+'],
 'De BRICS+-landen (zoals China, India, Rusland, en in het Midden-Oosten Egypte, Iran en de VAE) worden machtiger. De G7-landen moeten hun invloed delen.',
 ['Welke groep landen wint aan invloed, en welke moet invloed delen?','winnen: BRICS+, delen: G7',['winnen: G7, delen: BRICS+']]);
O('p34','ot34e',OT,B.welvaart,
 'Geef drie redenen waarom het Suezkanaal en de Rode Zee een belangrijke rol spelen bij geopolitiek. Een van deze redenen is zichtbaar op de kaart.',
 'Waarom willen grote landen invloed hebben op het Suezkanaal en de Rode Zee? Geef drie redenen; één ervan zie je op de kaart.',
 ['Olie: de landen rond de Perzische Golf produceren heel veel olie (zie de kaart, bijvoorbeeld Saudi-Arabië 10.815.700 vaten per dag). Veel olie gaat via de Rode Zee en het Suezkanaal naar Europa.',
  'Containervervoer: ongeveer 33% van het mondiale containervervoer vaart door de Rode Zee; het is de kortste route tussen Azië en Europa.',
  'Onderzeese datakabels: de datacommunicatie tussen Azië en Europa loopt door de Rode Zee.'],
 [['Reden op de kaart: wat wordt er rond de Perzische Golf veel geproduceerd?','olie',0],['Wat voor vervoer gaat er door de Rode Zee? Waarom juist daar?','container/schepen/goederen/handel|kort/route/azie',0],['Iets onder water','kabel/data/internet',0]]);
O('p34','tq34a',TV,null,
 'De Houthi’s vallen schepen aan in de Rode Zee. Geef een gevolg vanuit de economische dimensie voor Nederland, en een gevolg vanuit de politieke dimensie. Noteer de dimensies bij je antwoorden.',
 'Wat merkt Nederland van de aanvallen van de Houthi’s in de Rode Zee? Geef een economisch en een politiek gevolg, met de dimensie erbij.',
 ['Economische dimensie: schepen varen om via Kaap de Goede Hoop. De reis duurt langer en kost meer, dus producten uit Azië komen later en worden duurder.',
  'Politieke dimensie: landen gaan samenwerken om de schepen te beschermen, zoals in Operation Prosperity Guardian (G7-landen en bondgenoten, ook Nederland).'],
 [['Economisch gevolg','kaap/omvaren/langer/duur/kosten/later/vertraging',0],['Politiek gevolg','prosperity/bescherm/marine/samenwerk/leger/bondgenot/g7',0]]);
O('p34','tq34b',TV,null,
 'Stelling: “Als het Suezkanaal dicht is, merkt Nederland daar niets van.” Geef twee argumenten tegen deze stelling.',
 'Waarom merkt Nederland het wel als het Suezkanaal dicht is? Geef twee argumenten.',
 ['Rotterdam is een mainport (hub): veel containers uit Azië komen via het Suezkanaal naar Rotterdam, en gaan van daar verder naar bijvoorbeeld Duitsland (de spokes).',
  'Zonder het Suezkanaal varen schepen om Afrika heen (Kaap de Goede Hoop): duizenden kilometers en dagen extra, dus hogere kosten en vertraging, zoals bij de Ever Given in 2021.'],
 [['Wat is de rol van Rotterdam?','rotterdam|haven/mainport/hub/container',0],['Wat gebeurt er met de route als het kanaal dicht is?','kaap/afrika/omvaren/langer|duur/kosten/later/vertraging/dagen',1]]);
O('p34','tq34c',TV,null,
 'Leg uit waarom zowel Dubai als het Suezkanaal belangrijker zijn geworden door de global shift.',
 'Wat hebben Dubai en het Suezkanaal met de global shift te maken? Leg uit.',
 ['Door de global shift is de economie rond de Grote Oceaan (Azië) sterk gegroeid, dus ook de handel tussen Azië en Europa.',
  'De route tussen Azië en Europa loopt langs Dubai en door de Rode Zee en het Suezkanaal. Daar komen dus steeds meer schepen, goederen en passagiers langs.'],
 [['Wat veranderde er door de global shift?','azie/grote oceaan|groei/handel/econom',0],['Waarom zijn Dubai en Suez daardoor belangrijker?','route/onderweg/langs/tussen|europa',1]]);

/* ================= §3.5 Turkije ================= */
O('p35','ot35a',OT,null,
 'Noteer twee manieren waarop Turkije cultureel is verbonden met het Midden-Oosten.',
 'Turkije en het Midden-Oosten: noem twee cultuurelementen die ze delen.',
 ['De meeste Turken zijn moslim: de islam, moskeeën met minaretten (en gewoonten als de ramadan).',
  'Tot 1928 gebruikte Turkije het Arabische schrift, en het Turks heeft veel Arabische woorden. (Ook goed: kruiden zoals komijn en sumak.)'],
 [['Iets met godsdienst','islam/moslim/moskee/ramadan',0],['Iets met taal, schrift of eten','arabisch/schrift/komijn/sumak/kruid',0]]);
O('p35','ot35b',OT,null,
 'Turkije is een opkomend land. Noteer drie kenmerken van opkomende landen.',
 'Noem drie kenmerken waaraan je een opkomend land zoals Turkije herkent.',
 ['De economie groeit snel en het bnp per inwoner stijgt.',
  'Er is een massale trek van het platteland naar de stad.',
  'De middenklasse groeit. (Ook goed: de ruimtelijke ongelijkheid is groot.)'],
 [['Kenmerk 1: iets met de economie','econom/bnp|groei/stijg',0],['Kenmerk 2: waar gaan de mensen wonen?','stad|platteland/trek/verhuis',0],['Kenmerk 3: welke groep groeit, of: hoe groot zijn de verschillen tussen gebieden?','middenklasse/ongelijk',0]]);
O('p35','ot35c',OT,B.istanbul,
 'Stelling: “Het kanaal in aanleg tussen de Zee van Marmara en de Zwarte Zee is niet krankzinnig, maar juist een ontzettend goed idee.” Geef vanuit de politieke dimensie een argument vóór deze stelling.',
 'Het Istanbulkanaal: geef een politiek argument vóór de aanleg.',
 ['Turkije krijgt een eigen doorvaart tussen de Zwarte Zee en de Zee van Marmara en bepaalt daar zelf wie er doorvaart en wat het kost. Dat geeft Turkije meer macht en invloed (geopolitiek). (Ook goed: president Erdogan wil het graag en laat zo zien hoe machtig Turkije is.)'],
 [['Wat levert het kanaal Turkije politiek op?','macht/invloed/controle/bepalen/geopoliti/erdogan/president',0]]);
O('p35','ot35d',OT,B.istanbul,
 'Stelling: “Het kanaal in aanleg tussen de Zee van Marmara en de Zwarte Zee is niet krankzinnig, maar juist een ontzettend goed idee.” Geef vanuit de economische dimensie twee argumenten tegen deze stelling.',
 'Het Istanbulkanaal: geef twee economische argumenten tegen de aanleg. Gebruik de bron.',
 ['Er gaat landbouwgrond verloren, en drinkwater moet duur via pijpleidingen worden aangevoerd (zoetwaterbronnen verdwijnen).',
  'Schippers wachten liever op een gratis doorvaart door de Bosporus dan dat ze tol betalen voor het kanaal; het kanaal levert dan minder op dan het kost.'],
 [['Argument 1: wat gaat er verloren, of wat wordt duur?','landbouwgrond/landbouw/drinkwater/water/pijpleiding',0],['Argument 2: denk aan de schippers','tol/gratis/bosporus/betalen',0]]);
O('p35','ot35e',OT,B.badplaats,
 'De milieukosten van massatoerisme zijn erg hoog. Je ziet hiervan verschillende voorbeelden in de bron. Noteer twee van deze voorbeelden en geef bij beide voorbeelden ook een maatregel om de milieukosten te beperken.',
 'Noem twee onderdelen van de badplaats die slecht zijn voor het milieu, en bedenk bij elk een maatregel.',
 ['Voorbeeld 1 met maatregel, bijvoorbeeld: de vuilnisstort (veel afval) → afval scheiden en recyclen, minder plastic.',
  'Voorbeeld 2 met maatregel, bijvoorbeeld: golfbaan, waterpark en zwembaden gebruiken veel water → gezuiverd afvalwater gebruiken; of: vliegveld en nieuwe snelweg → meer openbaar vervoer; of: elektriciteitscentrale → zonne-energie.'],
 [['Voorbeeld 1 + maatregel','vuilnis/afval/golf/waterpark/zwembad/vliegveld/snelweg/weg/centrale/steengroeve/riool/hoogbouw',0],['Voorbeeld 2 + maatregel','vuilnis/afval/golf/waterpark/zwembad/vliegveld/snelweg/weg/centrale/steengroeve/riool/hoogbouw',0]]);
O('p35','ot35f',OT,B.badplaats,
 'Turkije is een populaire bestemming voor massatoerisme. Geef een voordeel en een nadeel van massatoerisme voor Turkije, elk vanuit een andere geografische dimensie. Noteer de dimensies bij je antwoorden.',
 'Massatoerisme in Turkije: geef een voordeel en een nadeel, elk vanuit een andere dimensie. Schrijf de dimensie erbij.',
 ['Voordeel, economische dimensie: toeristen brengen geld en werk (hotels, restaurants, winkels, rondvaart).',
  'Nadeel, natuurlijke dimensie: veel afval, veel waterverbruik (zwembaden, golfbanen) en natuur die verdwijnt voor hotels, wegen en vliegvelden. (Ook goed: een ander nadeel met de juiste dimensie, zoals drukte of het oude dorp dat verandert.)'],
 [['Voordeel, met de dimensie erbij','econom|geld/werk/banen/inkomen',0],['Nadeel, met een andere dimensie erbij','natuur/sociaal/cultu|afval/water/natuur/druk/milieu/vervuil',0]]);
O('p35','ot35g',OT,B.tigris,
 'Beschrijf hoe je het Zuidoost-Anatoliëproject kunt herkennen in de bron. Verklaar daarna waarom Syrië niet blij is met dit waterproject.',
 'Waar zie je het Zuidoost-Anatoliëproject op de kaart? En waarom vindt Syrië het een slecht plan?',
 ['Op de kaart zie je in het zuidoosten van Turkije veel stuwmeren en stuwdammen in de Eufraat en de Tigris (bijvoorbeeld de Atatürkdam en de Ilisudam).',
  'Syrië ligt benedenstrooms in een droog gebied (minder dan 250 mm). Turkije houdt water vast, waardoor er minder water (60% minder) Syrië in stroomt voor landbouw en drinkwater.'],
 [['Wat zie je op de kaart in Zuidoost-Turkije?','stuwme/dam|eufraat/tigris/turkije',0],['Waarom is Syrië er niet blij mee?','minder water/60|benedenstrooms/droog/tegenhoud/vast',1]]);
O('p35','tq35a',TV,null,
 'Geef een voordeel van het Zuidoost-Anatoliëproject vanuit de economische dimensie, en een nadeel vanuit de politieke dimensie. Noteer de dimensies bij je antwoorden.',
 'Zuidoost-Anatoliëproject: noem een economisch voordeel en een politiek nadeel, met de dimensie erbij.',
 ['Economische dimensie: elektriciteit voor bedrijven en water voor irrigatie, dus meer werk en een hogere landbouwopbrengst in het armere zuidoosten (de ruimtelijke ongelijkheid wordt kleiner).',
  'Politieke dimensie: spanningen met Syrië en Irak, omdat er minder water over de grens stroomt.'],
 [['Economisch voordeel','elektriciteit/stroom/irrigatie/landbouw/werk/bedrijven',0],['Politiek nadeel','syri/irak|spanning/conflict/ruzie/minder water',0]]);
O('p35','tq35b',TV,null,
 'Stelling: “Massatoerisme is de oorzaak van het watertekort in Turkije.” Geef een argument vóór en een argument tegen deze stelling.',
 'Is massatoerisme de schuld van het watertekort in Turkije? Geef een argument vóór en een argument tegen.',
 ['Vóór: toeristen gebruiken twee tot drie keer zoveel water als de lokale bevolking (zwembaden, vaak douchen, elke dag handdoeken wassen), en ze komen juist in de hete, droge zomer.',
  'Tegen: er zijn ook natuurlijke oorzaken: weinig neerslag in hete, droge zomers en klimaatverandering. En ook in Oost-Turkije (bijvoorbeeld Malatya), waar geen massatoerisme is, zijn er watertekorten.'],
 [['Argument vóór','toerist|water/zwembad/douche/handdoek/zomer',0],['Argument tegen','neerslag/regen/droog/klimaat/malatya/oost',0]]);
O('p35','tq35c',TV,B.welvaart,
 'Turkije produceert weinig olie (89.000 vaten per dag), maar het gemiddelde inkomen is hoger dan in Irak en Iran, die veel olie hebben. Hoe kan dat?',
 'Waarom is Turkije rijker dan Irak en Iran, terwijl het bijna geen olie heeft?',
 ['Turkije is een opkomend land met een gevarieerde economie: industrie, handel en (massa)toerisme. Het is dus niet afhankelijk van olie.',
  'Irak en Iran zijn erg afhankelijk van olie, en hebben te maken met oorlog en onrust, waardoor de opbrengst niet bij de bevolking komt.'],
 [['Waar verdient Turkije zijn geld mee?','opkomend/industrie/toeris/handel/fabriek/econom',0],['Waarom helpt de olie Irak en Iran minder?','afhankelijk/oorlog/onrust/conflict/verdeel',0]]);
O('p35','tq35d',TV,null,
 'Turkije wordt soms bij Europa en soms bij het Midden-Oosten ingedeeld. Geef één argument waarom Turkije bij het Midden-Oosten past en één argument waarom het bij Europa past.',
 'Hoort Turkije bij Europa of bij het Midden-Oosten? Geef voor allebei één argument.',
 ['Midden-Oosten: de meeste inwoners zijn moslim. (Ook goed: de democratie-index daalt, doordat de president steeds meer macht krijgt, zoals in veel landen in het Midden-Oosten.)',
  'Europa: sinds 1928 het westerse alfabet; een deel van Turkije en Istanbul ligt in Europa. (Ook goed: de christelijke Byzantijnse bouwstijl, zoals de Hagia Sophia.)'],
 [['Argument voor het Midden-Oosten','islam/moslim/democratie/president/macht',0],['Argument voor Europa','alfabet/1928/istanbul/europa/byzantijn/hagia',0]]);
})();
