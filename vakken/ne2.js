/* Nederlands, aanvulling op ne.js (17 nov 2026, foto's van de ouder):
   - Stappenplan zinsdelen (los blad) en Grammatica zinsdelen §3 Gezegde en lijdend voorwerp bij wederkerende werkwoorden (blz. 210–211): opdracht 1 t/m 5.
   - Woordenlijst werkwoorden met vaste voorzetsels 1–120 (los blad, 3 bladzijden).
   - Taal §5 Beeldspraak (blz. 98–99): opdracht 1 t/m 4, tekst 1 'Een fraaie verpakking'.
   - Spelling §11 Engelse werkwoorden (blz. 262–263): opdracht 1 t/m 7.
   Niet gebouwd: §3 opdracht 6 (zelf zinnen maken met een klasgenoot).
   Antwoorden en uitleg zijn door Claude gemaakt en kunnen afwijken van die van de docent. */
(()=>{
const V=VAKDATA.ne;if(!V)return;
const S=s=>`<div class="de">${s}</div>`;
const U=(zin,deel)=>S(zin.replace(deel,`<u><b>${deel}</b></u>`));
const SECS=[],Q=[];

/* =====================================================================
   Stappenplan zinsdelen + §3 gezegde en lv bij wederkerende werkwoorden
   ===================================================================== */
SECS.push(
 {id:'sp',par:'z3',nr:'T',name:'Stappenplan zinsdelen',c:'--c6',sub:'Los blad · in 8 stappen alle zinsdelen vinden',
  rules:[['Stap 1: persoonsvorm (pv)','Zet de zin in een andere tijd, verander het getal of maak de zin vragend.',''],
   ['Stap 2: zinsdeelstrepen','Zet een streep vóór en achter de pv. Alle woorden vóór de pv vormen één zinsdeel.','Zet bij elke volgende stap de gevonden zinsdelen tussen strepen.'],
   ['Stap 3: onderwerp (ow)','Vraag: wie (of wat) + pv?','Het antwoord is het ow.'],
   ['Stap 4: werkwoordelijk of naamwoordelijk gezegde?','Staat er een vorm van zijn, worden, blijven, blijken, lijken, schijnen, heten, dunken of voorkomen?','Ja, en is er geen ander zelfstandig werkwoord → ng. Anders → wg.'],
   ['Werkwoordelijk gezegde (wg)','alle werkwoorden in de zin','Ook: te en aan het vóór een ww, losse delen (kijkt … na), werkwoordelijke uitdrukkingen (op de kast jagen) en het wed.vnw bij verplicht wederkerende ww (Hij schaamt zich → wg = schaamt zich).'],
   ['Naamwoordelijk gezegde (ng)','koppelwerkwoord + naamwoordelijk deel (nw.deel)','Het nw.deel is een zn of bn en zegt iets over het ow. Zet het tussen haken: is [jarig] geweest.'],
   ['Stap 5: lijdend voorwerp (lv)','Vraag: wat (soms wie) + pv + ow + overige ww?','Een lv komt alleen voor in zinnen met een wg. Bij toevallig wederkerende ww is het wed.vnw het lv: Hij was zich → lv = zich.'],
   ['Stap 6: meewerkend voorwerp (mv)','Vraag: aan (soms voor) wie + pv + ow + lv + overige ww?','Komt vooral voor bij ww met iets zeggen of geven.'],
   ['Stap 7: voorzetselvoorwerp (vv)','begint met een vast voorzetsel bij het ww of nw.deel','twijfelen aan, hopen op · is tevreden met'],
   ['Stap 8: bijwoordelijke bepaling (bwb)','Alle overgebleven zinsdelen. Er kunnen er meer in een zin zitten.','Antwoord op waar, wanneer, hoe, waarom, waarheen, waarbij… Ook niet, wel, zeker, misschien, natuurlijk zijn bwb.']]},
 {id:'z3t',par:'z3',nr:'T',name:'Theorie: verplicht of toevallig wederkerend',c:'--c5',sub:'Blz. 210 · hoort het wed.vnw bij het wg of is het lv?',
  rules:[['Verplicht wederkerend','zich schamen, zich gedragen, zich vergissen, zich uitsloven: altijd met wed.vnw','Het wed.vnw hoort bij het wg. Gedroeg jij je verdacht? → wg = gedroeg je'],
   ['Toevallig wederkerend','zich wassen, zich scheren, zich aankleden, zich verbazen: kan ook bij een ander','Het wed.vnw is lv. Deze kapper scheert zich → wg = scheert, lv = zich'],
   ['Test 1: andere persoon','Kun je een ander invullen? Ja → toevallig.','Hij scheert zijn klanten ✓ · *Hij gedroeg zijn broertje ✗'],
   ['Test 2: zelf','Kun je er zelf achter plakken? Ja → toevallig.','Hij scheert zichzelf ✓ · *Hij gedroeg zichzelf ✗']]},
 {id:'z31',par:'z3',nr:'1',name:'Vervang door een gewoon werkwoord',c:'--c1',sub:'Blz. 211 · opdracht 1 · welk woord verdwijnt en wat komt ervoor in de plaats?',
  rules:[['Wat gebeurt er?','Het wed.vnw verdwijnt. Je zet er een zinsdeel voor in de plaats.','Ruud scheert zich → Ruud eet een appel op']]},
 {id:'z32',par:'z3',nr:'2',name:'ow en wg bij verplicht wederkerende ww',c:'--c2',sub:'Blz. 211 · opdracht 2 · a t/m d',
  rules:[['Het wed.vnw hoort bij het wg','schaamden ons · kan me … veroorloven','Andere werkwoorden en losse delen horen er ook bij.']]},
 {id:'z33',par:'z3',nr:'3',name:'ow, wg, lv en soort werkwoord',c:'--c3',sub:'Blz. 211 · opdracht 3 · verplicht, toevallig of niet-wederkerend',
  rules:[['Doe de twee tests','andere persoon invullen? zelf erachter?','Lukt het: toevallig → wed.vnw = lv. Lukt het niet: verplicht → wed.vnw hoort bij het wg.']]},
 {id:'z34',par:'z3',nr:'4',name:'Alle zinsdelen (wg of ng)',c:'--c4',sub:'Blz. 211 · opdracht 4 · ow, wg/ng, lv, mv, bwb',
  rules:[['Volg het stappenplan','pv → ow → wg/ng → lv → mv → (vv) → bwb','']]},
 {id:'z35',par:'z3',nr:'5',name:'Met werkwoordelijke uitdrukking',c:'--c5',sub:'Blz. 211 · opdracht 5 · het wg kan een uitdrukking zijn',
  rules:[['Werkwoordelijke uitdrukking','vaste combinatie die samen het wg is','zich een hoedje schrikken · zich de kaas niet van het brood laten eten']]}
);
const ZD={ow:'onderwerp',wg:'werkwoordelijk gezegde',ng:'naamwoordelijk gezegde',lv:'lijdend voorwerp',mv:'meewerkend voorwerp',vv:'voorzetselvoorwerp',bwb:'bijwoordelijke bepaling'};
const ZBUUR={ow:['lv','mv','bwb'],lv:['ow','mv','bwb'],mv:['lv','ow','bwb'],vv:['bwb','lv','mv'],bwb:['vv','lv','ow']};
const zd=(id,o,nr,zin,deel,a,uit)=>Q.push({id,o,nr,q:`Welk zinsdeel is het onderstreepte deel?${U(zin,deel)}`,a,
  f:ZBUUR[a].map(x=>[x,`${x} = ${ZD[x]}. ${uit}`]),tv:`Benoem het onderstreepte zinsdeel (ow, wg, ng, lv, mv, vv of bwb).${U(zin,deel)}`,
  u:`<b>${deel}</b> = <b>${a}</b> (${ZD[a]}). ${uit}`,v:{q:`${nr}. Benoem het onderstreepte zinsdeel.${U(zin,deel)}`}});
const gez=(id,o,nr,zin,a,f,uit,alt)=>Q.push({id,o,nr,q:`Wat is het gezegde?${S(zin)}`,a,f,tv:`Noteer het gezegde (wg of ng). Zet een naamwoordelijk deel tussen haken.${S(zin)}`,tvAlt:alt||[],
  u:`<b>${a}</b>. ${uit}`,v:{q:`${nr}. Welke woorden vormen samen het gezegde?${S(zin)}`}});
const soort=(id,nr,zin,a,uit)=>Q.push({id,o:'z33',nr,q:`Is het werkwoord verplicht wederkerend, toevallig wederkerend of niet-wederkerend?${S(zin)}`,a,
  f:['verplicht wederkerend','toevallig wederkerend','niet-wederkerend'].filter(x=>x!==a).map(x=>[x,uit]),
  u:`<b>${a}</b>. ${uit}`,v:{q:`${nr}. Doe de twee tests (andere persoon, zelf). Wat voor werkwoord is het?${S(zin)}`}});

/* opdracht 1 */
[
 ['a','Ruud <u>scheert</u> zich sinds zijn zestiende elke dag.','opeten','zich','Ruud eet sinds zijn zestiende elke dag een appel op.',[['Ruud eet zich sinds zijn zestiende elke dag op.','zich blijft dan staan, maar opeten is niet wederkerend: je eet iets op.'],['Ruud eet sinds zijn zestiende elke dag.','opeten heeft een lv nodig: wat eet Ruud op?']]],
 ['b','Hebben jullie je tijdens de les <u>verveeld</u>?','doorvertellen','je','Hebben jullie het geheim tijdens de les doorverteld?',[['Hebben jullie je tijdens de les doorverteld?','je verdwijnt: doorvertellen is niet wederkerend.'],['Hebben jullie tijdens de les doorverteld?','doorvertellen heeft een lv nodig: wat hebben jullie doorverteld?']]],
 ['c','Ik ga me vandaag <u>vermaken</u> op de markt.','verkopen','me','Ik ga vandaag mijn oude fiets verkopen op de markt.',[['Ik ga me vandaag verkopen op de markt.','me verdwijnt: je verkoopt iets, niet jezelf.'],['Ik ga vandaag verkopen op de markt.','verkopen heeft hier een lv nodig: wat ga je verkopen?']]],
 ['d','Wij hooligans hebben ons tijdens de wedstrijd <u>misdragen</u>.','uitschelden','ons','Wij hooligans hebben de scheidsrechter tijdens de wedstrijd uitgescholden.',[['Wij hooligans hebben ons tijdens de wedstrijd uitgescholden.','ons verdwijnt: je scheldt iemand anders uit.'],['Wij hooligans hebben tijdens de wedstrijd uitgescholden.','uitschelden heeft een lv nodig: wie hebben ze uitgescholden?']]]
].forEach(([l,zin,ww,weg,a,f])=>Q.push({id:'z31'+l,o:'z31',nr:'Opdracht 1'+l,q:`Vervang het onderstreepte werkwoord door <b>${ww}</b>. Welke nieuwe zin is goed?${S(zin)}`,a,f,
  tv:`Vervang het onderstreepte werkwoord door <b>${ww}</b>. Er verdwijnt een woord; zet er een zinsdeel van minstens twee woorden voor in de plaats.${S(zin)}`,tvVrij:true,
  u:`Bijvoorbeeld: <b>${a}</b> Het woord <b>${weg}</b> verdwijnt. Een ander lv (van minstens twee woorden) mag ook.`,
  v:{q:`Maak de zin met <b>${ww}</b>. Welke zin klopt?${S(zin)}`}}));
Q.push({id:'z31w',o:'z31',nr:'Opdracht 1.2',q:'Welke vier woorden verdwijnen uit de zinnen a t/m d?',a:'zich, je, me, ons',mc:1,
  f:[['Ruud, jullie, ik, wij','Dat zijn de onderwerpen. Die blijven staan.'],['scheert, verveeld, vermaken, misdragen','Die werkwoorden vervang je; er verdwijnt daarnaast nog een woord.'],['zijn, de, op, tijdens','Die blijven staan.']],
  u:'<b>zich, je, me, ons</b>: de wederkerende voornaamwoorden.',v:{q:'Opdracht 1. Wat voor woorden verdwijnen er als je het wederkerend werkwoord vervangt?'}});
Q.push({id:'z31z',o:'z31',nr:'Opdracht 1.3',q:'Welk zinsdeel vormen de woorden die je in de nieuwe zin hebt toegevoegd (een appel, het geheim, de scheidsrechter)?',a:'lijdend voorwerp',
  f:[['meewerkend voorwerp','Vraag: wat eet Ruud op? Een appel. Dat is een lv, geen mv (aan wie?).'],['onderwerp','Het onderwerp blijft gewoon staan (Ruud, jullie, ik, wij).'],['bijwoordelijke bepaling','Een bwb zegt waar, wanneer of hoe. Een appel is wat er opgegeten wordt: lv.']],
  tv:'Opdracht 1.3. Welk zinsdeel vormen de woorden die je in de nieuwe zin hebt toegevoegd?',
  u:'<b>lijdend voorwerp</b>. Daarom zie je: bij toevallig wederkerende werkwoorden staat het wed.vnw op de plek van een lv, en is het ook lv.',v:{q:'Ruud eet een appel op. Welk zinsdeel is een appel?'}});

/* opdracht 2 */
const Z2={a:'Empathische mensen kunnen zich goed inleven in de gevoelens van anderen.',b:'Na de ruzie schaamden we ons eigenlijk voor ons onvriendelijke gedrag.',
 c:'Heb je je vanmorgen vergist bij het uitrekenen van de wiskundesom?',d:'Zo’n dure cruise langs de Noorse fjorden kan ik me niet veroorloven.'};
zd('z32a1','z32','Opdracht 2a',Z2.a,'Empathische mensen','ow','Wie kunnen zich inleven? Empathische mensen.');
gez('z32a2','z32','Opdracht 2a',Z2.a,'kunnen zich … inleven',[['kunnen … inleven','zich inleven is verplicht wederkerend: zich hoort bij het wg.'],['kunnen zich goed inleven','goed is geen werkwoord: dat is een bwb.'],['kunnen zich … inleven in','in hoort bij het vv: in de gevoelens van anderen.']],'zich inleven is verplicht wederkerend, dus zich hoort bij het wg.',['kunnen zich inleven']);
zd('z32b1','z32','Opdracht 2b',Z2.b,'we','ow','Wie schaamden zich? We.');
gez('z32b2','z32','Opdracht 2b',Z2.b,'schaamden ons',[['schaamden','zich schamen is verplicht wederkerend: ons hoort bij het wg.'],['schaamden ons … voor','voor hoort bij het vv: voor ons onvriendelijke gedrag.'],['schaamden we ons','we is het onderwerp.']],'zich schamen is verplicht wederkerend: ons hoort bij het wg.',['schaamden ons']);
zd('z32c1','z32','Opdracht 2c',Z2.c,'je','ow','Wie heeft zich vergist? Jij (je). Let op: het eerste je is ow, het tweede je hoort bij het wg.');
gez('z32c2','z32','Opdracht 2c',Z2.c,'Heb … je … vergist',[['Heb … vergist','zich vergissen is verplicht wederkerend: het tweede je (wed.vnw) hoort bij het wg.'],['Heb je je vergist','Het eerste je is het onderwerp. Dat hoort niet bij het wg.'],['vergist','Heb (de pv) hoort er ook bij.']],'Het eerste je is het onderwerp, het tweede je is het wed.vnw van zich vergissen (verplicht wederkerend). Dat hoort bij het wg.',['heb je vergist','heb … je vergist']);
zd('z32d1','z32','Opdracht 2d',Z2.d,'ik','ow','Wie kan het zich niet veroorloven? Ik.');
zd('z32d2','z32','Opdracht 2d',Z2.d,'Zo’n dure cruise langs de Noorse fjorden','lv','Wat kan ik me niet veroorloven? Zo’n dure cruise langs de Noorse fjorden.');
gez('z32d3','z32','Opdracht 2d',Z2.d,'kan … me … veroorloven',[['kan … veroorloven','zich veroorloven is verplicht wederkerend: me hoort bij het wg.'],['kan ik me niet veroorloven','ik is het onderwerp en niet is een bwb.'],['kan me niet veroorloven','niet is geen werkwoord: dat is een bwb.']],'zich veroorloven is verplicht wederkerend: me hoort bij het wg. niet is een bwb.',['kan me veroorloven','kan … me veroorloven']);

/* opdracht 3 */
const Z3={a:'Een van de gasten had zich behoorlijk verslikt in een graatje van de makreel.',b:'Gisterochtend heb ik me lelijk gestoten aan de punt van de keukentafel.',
 c:'Soms blijken mensen werkelijk de vreemdste fantasieën te hebben.',d:'Zullen we ons na de zomer aanmelden voor een cursus Italiaans?'};
zd('z33a1','z33','Opdracht 3a',Z3.a,'Een van de gasten','ow','Wie had zich verslikt? Een van de gasten.');
gez('z33a2','z33','Opdracht 3a',Z3.a,'had zich … verslikt',[['had … verslikt','zich verslikken is verplicht wederkerend: zich hoort bij het wg.'],['had zich behoorlijk verslikt','behoorlijk is een bwb.'],['had','verslikt hoort er ook bij.']],'zich verslikken is verplicht wederkerend (*hij verslikte zijn broertje kan niet). Er is geen lv.',['had zich verslikt']);
soort('z33a3','Opdracht 3a',Z3.a,'verplicht wederkerend','Je kunt geen ander verslikken en *zichzelf verslikken kan niet.');
zd('z33b1','z33','Opdracht 3b',Z3.b,'ik','ow','Wie heeft zich gestoten? Ik.');
zd('z33b2','z33','Opdracht 3b',Z3.b,'me','lv','zich stoten is toevallig wederkerend (je kunt ook een ander stoten, of jezelf). Dan is me het lv.');
gez('z33b3','z33','Opdracht 3b',Z3.b,'heb … gestoten',[['heb … me … gestoten','zich stoten is toevallig wederkerend: me is dan lv, niet een deel van het wg.'],['heb ik gestoten','ik is het onderwerp.'],['gestoten','heb (de pv) hoort er ook bij.']],'Toevallig wederkerend: me is lv. (Rekent je docent zich stoten als verplicht, volg dan de docent.)',['heb gestoten']);
soort('z33b4','Opdracht 3b',Z3.b,'toevallig wederkerend','Je kunt ook je broertje stoten, en mezelf gestoten kan ook.');
zd('z33c1','z33','Opdracht 3c',Z3.c,'mensen','ow','Wie blijken fantasieën te hebben? Mensen.');
zd('z33c2','z33','Opdracht 3c',Z3.c,'de vreemdste fantasieën','lv','Wat blijken mensen te hebben? De vreemdste fantasieën.');
gez('z33c3','z33','Opdracht 3c',Z3.c,'blijken … te hebben',[['blijken','te hebben hoort er ook bij: blijken is hier een hulpwerkwoord (blijken te + hele ww).'],['blijken … [de vreemdste fantasieën] te hebben','Er staat een zelfstandig ww (hebben): dan is blijken geen koppelwerkwoord en is het geen ng.'],['te hebben','blijken (de pv) hoort er ook bij.']],'Er staat een zelfstandig werkwoord bij (hebben), dus het is een wg. te hoort bij het wg.',['blijken te hebben']);
soort('z33c4','Opdracht 3c',Z3.c,'niet-wederkerend','Er staat geen wederkerend voornaamwoord in de zin.');
zd('z33d1','z33','Opdracht 3d',Z3.d,'we','ow','Wie zullen zich aanmelden? We.');
zd('z33d2','z33','Opdracht 3d',Z3.d,'ons','lv','zich aanmelden is toevallig wederkerend (je kunt ook een ander aanmelden). Dan is ons het lv.');
gez('z33d3','z33','Opdracht 3d',Z3.d,'Zullen … aanmelden',[['Zullen … ons … aanmelden','zich aanmelden is toevallig wederkerend: ons is lv.'],['Zullen we aanmelden','we is het onderwerp.'],['aanmelden voor','voor hoort bij het vv: voor een cursus Italiaans.']],'Toevallig wederkerend: ons is lv.',['zullen aanmelden']);
soort('z33d4','Opdracht 3d',Z3.d,'toevallig wederkerend','Je kunt ook je zusje aanmelden, en onszelf aanmelden kan ook.');

/* opdracht 4 */
const Z4={a:'Marks moeder bemoeit zich helaas nog altijd met zijn kledingkeuze.',b:'Uw ergernis over mijn uitspraken had ik me tot nu toe niet gerealiseerd.',
 c:'Zou je de wandelaars even een lekker koel glas frisdrank willen inschenken?',d:'Dit duurzame verpakkingsmateriaal schijnt biologisch afbreekbaar te zijn.'};
zd('z34a1','z34','Opdracht 4a',Z4.a,'Marks moeder','ow','Wie bemoeit zich? Marks moeder.');
gez('z34a2','z34','Opdracht 4a',Z4.a,'bemoeit zich',[['bemoeit','zich bemoeien is verplicht wederkerend: zich hoort bij het wg.'],['bemoeit zich … met','met hoort bij het vv.'],['bemoeit zich helaas','helaas is een bwb.']],'zich bemoeien is verplicht wederkerend.',['bemoeit zich']);
zd('z34a3','z34','Opdracht 4a',Z4.a,'helaas','bwb','helaas zegt iets over hoe de spreker het vindt: bwb.');
zd('z34a4','z34','Opdracht 4a',Z4.a,'nog altijd','bwb','Zegt iets over tijd: bwb.');
zd('z34a5','z34','Opdracht 4a',Z4.a,'met zijn kledingkeuze','vv','zich bemoeien met: vast voorzetsel. (In §3 vraagt het boek nog niet naar het vv. Heb je het toen als bwb benoemd, dan weet je nu beter.)');
zd('z34b1','z34','Opdracht 4b',Z4.b,'ik','ow','Wie had het zich niet gerealiseerd? Ik.');
zd('z34b2','z34','Opdracht 4b',Z4.b,'Uw ergernis over mijn uitspraken','lv','Wat had ik me niet gerealiseerd? Uw ergernis over mijn uitspraken. Het lv staat hier vooraan.');
gez('z34b3','z34','Opdracht 4b',Z4.b,'had … me … gerealiseerd',[['had … gerealiseerd','zich realiseren is verplicht wederkerend: me hoort bij het wg.'],['had ik me gerealiseerd','ik is het onderwerp.'],['had me niet gerealiseerd','niet is een bwb.']],'zich realiseren is verplicht wederkerend: me hoort bij het wg.',['had me gerealiseerd','had … me gerealiseerd']);
zd('z34b4','z34','Opdracht 4b',Z4.b,'tot nu toe','bwb','Zegt iets over tijd: bwb.');
zd('z34c1','z34','Opdracht 4c',Z4.c,'je','ow','Wie zou willen inschenken? Je.');
gez('z34c2','z34','Opdracht 4c',Z4.c,'Zou … willen inschenken',[['Zou … inschenken','willen hoort er ook bij: alle werkwoorden horen bij het wg.'],['Zou je … willen inschenken','je is het onderwerp.'],['willen inschenken','Zou (de pv) hoort er ook bij.']],'Alle werkwoorden: zou, willen, inschenken.',['zou willen inschenken']);
zd('z34c3','z34','Opdracht 4c',Z4.c,'de wandelaars','mv','Aan wie zou je het glas inschenken? Aan de wandelaars.');
zd('z34c4','z34','Opdracht 4c',Z4.c,'een lekker koel glas frisdrank','lv','Wat zou je inschenken? Een lekker koel glas frisdrank.');
zd('z34c5','z34','Opdracht 4c',Z4.c,'even','bwb','even zegt hoe (kort): bwb.');
zd('z34d1','z34','Opdracht 4d',Z4.d,'Dit duurzame verpakkingsmateriaal','ow','Wat schijnt afbreekbaar te zijn? Dit duurzame verpakkingsmateriaal.');
gez('z34d2','z34','Opdracht 4d',Z4.d,'ng: schijnt [biologisch afbreekbaar] te zijn',[['wg: schijnt … te zijn','schijnen en zijn zijn koppelwerkwoorden en biologisch afbreekbaar zegt iets over het ow: ng.'],['ng: schijnt [afbreekbaar] te zijn','biologisch hoort erbij: hoe afbreekbaar? Biologisch afbreekbaar.'],['ng: schijnt [biologisch afbreekbaar]','te zijn hoort ook bij het gezegde.']],'Koppelwerkwoord + naamwoordelijk deel: ng. Er is geen lv (dat kan niet bij een ng).',['schijnt [biologisch afbreekbaar] te zijn','ng schijnt [biologisch afbreekbaar] te zijn']);

/* opdracht 5 */
const Z5={a:'Heeft dit bedrijf een groot geldbedrag geschonken aan Artsen zonder Grenzen?',b:'In het holst van de nacht zijn we ons een hoedje geschrokken door een enorme knal.',
 c:'Voor drie personen was het lichtgewicht koepeltentje eigenlijk een beetje te klein.',d:'Volgens mij laat die pittige tante zich de kaas niet van het brood eten.'};
zd('z35a1','z35','Opdracht 5a',Z5.a,'dit bedrijf','ow','Wie heeft geschonken? Dit bedrijf.');
gez('z35a2','z35','Opdracht 5a',Z5.a,'Heeft … geschonken',[['Heeft','geschonken hoort er ook bij.'],['Heeft dit bedrijf geschonken','dit bedrijf is het onderwerp.'],['geschonken aan','aan hoort bij het mv.']],'Alle werkwoorden: heeft en geschonken.',['heeft geschonken']);
zd('z35a3','z35','Opdracht 5a',Z5.a,'een groot geldbedrag','lv','Wat heeft het bedrijf geschonken? Een groot geldbedrag.');
zd('z35a4','z35','Opdracht 5a',Z5.a,'aan Artsen zonder Grenzen','mv','Aan wie is het geschonken? Aan Artsen zonder Grenzen. Een mv kan met aan beginnen.');
zd('z35b1','z35','Opdracht 5b',Z5.b,'In het holst van de nacht','bwb','Zegt wanneer: bwb.');
zd('z35b2','z35','Opdracht 5b',Z5.b,'we','ow','Wie zijn zich een hoedje geschrokken? We.');
gez('z35b3','z35','Opdracht 5b',Z5.b,'zijn … ons een hoedje geschrokken',[['zijn … geschrokken','zich een hoedje schrikken is een werkwoordelijke uitdrukking: ons een hoedje hoort bij het wg.'],['zijn … ons … geschrokken','een hoedje hoort er ook bij: het is een vaste uitdrukking, geen lv.'],['zijn we ons een hoedje geschrokken','we is het onderwerp.']],'zich een hoedje schrikken is een werkwoordelijke uitdrukking: alles hoort bij het wg.',['zijn ons een hoedje geschrokken']);
zd('z35b4','z35','Opdracht 5b',Z5.b,'door een enorme knal','bwb','Zegt waardoor: bwb.');
zd('z35c1','z35','Opdracht 5c',Z5.c,'Voor drie personen','bwb','Zegt voor wie het te klein was: bwb.');
zd('z35c2','z35','Opdracht 5c',Z5.c,'het lichtgewicht koepeltentje','ow','Wat was te klein? Het lichtgewicht koepeltentje.');
gez('z35c3','z35','Opdracht 5c',Z5.c,'ng: was [een beetje te klein]',[['wg: was','was is een koppelwerkwoord en te klein zegt iets over het tentje: ng.'],['ng: was [te klein]','een beetje hoort erbij: hoe klein? Een beetje te klein.'],['ng: was [eigenlijk een beetje te klein]','eigenlijk is een bwb.']],'Koppelwerkwoord was + naamwoordelijk deel een beetje te klein.',['was [een beetje te klein]','ng was [een beetje te klein]']);
zd('z35c4','z35','Opdracht 5c',Z5.c,'eigenlijk','bwb','eigenlijk is een bijwoord: bwb.');
zd('z35d1','z35','Opdracht 5d',Z5.d,'Volgens mij','bwb','Zegt wie dat vindt: bwb.');
zd('z35d2','z35','Opdracht 5d',Z5.d,'die pittige tante','ow','Wie laat zich de kaas niet van het brood eten? Die pittige tante.');
gez('z35d3','z35','Opdracht 5d',Z5.d,'laat zich de kaas … van het brood eten',[['laat … eten','zich de kaas niet van het brood laten eten is een werkwoordelijke uitdrukking: zich de kaas van het brood hoort bij het wg.'],['laat zich … eten','de kaas en van het brood horen bij de uitdrukking: het is geen lv of bwb.'],['laat die pittige tante zich de kaas van het brood eten','die pittige tante is het onderwerp.']],'Werkwoordelijke uitdrukking: zich de kaas (niet) van het brood laten eten. niet is een bwb. (Telt je docent niet bij de uitdrukking, volg dan de docent.)',['laat zich de kaas van het brood eten','laat zich de kaas niet van het brood eten']);
zd('z35d4','z35','Opdracht 5d',Z5.d,'niet','bwb','niet is altijd een bwb.');

/* =====================================================================
   Woordenlijst werkwoorden met vaste voorzetsels 1–120 (los blad)
   ===================================================================== */
const VZ=[
 ['aandacht besteden','aan'],['aandacht hebben','voor'],['aandacht vestigen','op'],['aandringen','op'],['in aanmerking komen','voor'],
 ['in aanraking komen','met'],['(iemand) aanspreken','op'],['afbreuk doen','aan','De regen deed afbreuk aan het openluchtconcert.'],['afgaan','op'],['afhangen','van'],
 ['een afkeer hebben','van'],['zich afzetten','tegen'],['afzien','van'],['akkoord gaan','met'],['baat hebben','bij','Hij heeft baat bij het voorin zitten in de klas, want hij haalt nu mooie cijfers.'],
 ['bedreven zijn','in'],['begaan zijn','met'],['(iemand) behoeden','voor'],['behoefte hebben','aan'],['belang hebben','bij'],
 ['een beroep doen','op'],['besluiten','tot'],['bestand zijn','tegen'],['betrekking hebben','op'],['zich bewust zijn','van'],
 ['bezwaar maken','tegen'],['blijk geven','van'],['breken','met'],['commentaar hebben','op'],['condoleren','met'],
 ['confronteren','met'],['zich distantiëren','van'],['doelen','op'],['dol zijn','op'],['zich ergeren','aan'],
 ['ervaring hebben','met'],['gebaseerd zijn','op'],['gebrek hebben','aan'],['gediend zijn','van'],['gehecht zijn','aan'],
 ['geïnteresseerd zijn','in'],['gesteld zijn','op'],['getuigen','van'],['grenzen','aan'],['op de hoogte zijn','van'],
 ['inbrengen','tegen'],['onder de indruk zijn','van'],['informeren … (informatie vragen)','naar'],['informeren … (informatie geven)','over'],['ingaan … (ergens op reageren)','op'],
 ['ingaan … (ergens tegen reageren)','tegen'],['zich inlaten','met'],['inspelen','op'],['instemmen','met'],['invloed hebben','op'],
 ['zich inzetten','voor'],['kijk hebben','op'],['kritiek hebben','op'],['lijden','aan'],['lucht krijgen','van'],
 ['medeplichtig zijn','aan'],['misbruik maken','van'],['neerkijken','op'],['zich ontfermen','over'],['ontkomen','aan'],
 ['oordelen','over'],['opgaan','in'],['opmaken','uit'],['opzadelen','met'],['opzien','tegen'],
 ['(iets) overhebben','voor'],['overtuigd zijn','van'],['profiteren','van'],['protesteren','tegen'],['raad weten','met'],
 ['reageren','op'],['recht hebben','op'],['refereren','aan'],['samenhangen','met'],['zich schuldig maken','aan'],
 ['smeken','om'],['solliciteren','naar'],['spotten','met'],['te spreken zijn','over'],['in staat zijn','tot'],
 ['stilstaan','bij'],['zich storen','aan'],['streven','naar'],['in strijd zijn','met'],['tegemoetkomen','aan'],
 ['ten onder gaan','aan'],['terugkomen … (er later nog eens over praten)','op'],['terugkomen … (een ander inzicht krijgen)','van'],['toekomen','aan'],['zich uitlaten','over'],
 ['van gedachten wisselen','over'],['vatbaar zijn','voor'],['zich verbazen','over'],['verdenken','van'],['zich verheugen','op'],
 ['zich verkijken','op'],['zich verontschuldigen','voor'],['veroordelen','tot'],['verslag doen','van'],['versteld staan','van'],
 ['verwijzen','naar'],['verzoeken','om'],['voldoen','aan'],['voorafgaan','aan'],['zich voorbereiden','op'],
 ['voorbijgaan','aan'],['voorkeur hebben','voor'],['vooruitlopen','op'],['voorzien','van'],['zich wagen','aan'],
 ['walgen','van'],['zich wijden','aan'],['te wijten zijn','aan'],['een zwak hebben','voor'],['zwijgen','over']];
/* voorzetsels die óók goed (of heel gewoon) zijn, of iets anders betekenen: nooit als fout antwoord aanbieden */
const NIET={21:['om'],22:['om'],35:['over'],48:['over'],49:['naar'],50:['tegen'],51:['op'],59:['onder'],70:['naar'],78:['naar'],82:['bij'],85:['om'],92:['van'],93:['op'],
 96:['met'],98:['om'],100:['over'],103:['voor'],104:['over'],114:['in'],120:['van'],66:['naar'],86:['over'],29:['over'],58:['over']};
const NAAM=(w,a)=>/ … \(/.test(w)?w.replace(' … ',` <b>${a}</b> `):`${w} <b>${a}</b>`;
const POOL=['aan','op','van','voor','met','tegen','over','in','naar','bij','tot','om'];
const vzSec=(n,van,tot,c)=>({id:'vz'+n,par:'vz',nr:String(n),name:`Vaste voorzetsels ${van}–${tot}`,c,sub:`Woordenlijst · ${van} t/m ${tot} · welk voorzetsel hoort erbij?`,
  rules:VZ.slice(van-1,tot).map((x,i)=>[`${van+i}. ${NAAM(x[0],x[1])}`,'',x[2]||''])});
/* groepjes van 20 (afspraak 19 nov 2026): huiswerk en toets zijn 1–60, 1–80 enz., dan kan ze precies de groepjes kiezen die nodig zijn */
['--c1','--c2','--c3','--c4','--c5','--c1'].forEach((c,i)=>SECS.push(vzSec(i+1,i*20+1,i*20+20,c)));
VZ.forEach(([w,a,vb],i)=>{const nr=i+1,uit=NIET[nr]||[],pool=POOL.filter(x=>x!==a&&!uit.includes(x)),f=[];
  for(let k=0;f.length<3;k++)f.push(pool[(nr*5+k*7)%pool.length]),f.splice(0,f.length,...new Set(f));
  const kaal=w.includes('…')?w:w+' …',zin=vb?vb.replace(` ${a} `,' … '):null;
  Q.push({id:'vz'+nr,o:'vz'+Math.ceil(nr/20),nr:`Woordenlijst ${nr}`,q:`Welk vast voorzetsel hoort erbij?${S(kaal)}`,a,
    f:f.map(x=>[x,`Niet ${x}. Het is: ${NAAM(w,a)}.`]),tv:`Vul het vaste voorzetsel in.${S(kaal)}`,tvIn:['voorzetsel'],tvA:[a],
    u:`${NAAM(w,a)}${vb?S(vb):''}`,v:{q:zin?`Vul het vaste voorzetsel in.${S(zin)}`:`Vul aan met het vaste voorzetsel:${S(kaal)}`}})});

/* =====================================================================
   Taal §5 Beeldspraak (blz. 98–99)
   ===================================================================== */
SECS.push(
 {id:'bt',par:'b5',nr:'T',name:'Begrippen: beeldspraak',c:'--c6',sub:'Blz. 98 · beeldspraak, object, beeld, metafoor, personificatie',
  rules:[['Beeldspraak','figuurlijk taalgebruik, waarbij je een beeld gebruikt om iets duidelijk te maken',''],
   ['Object','iets uit de werkelijkheid; iets wat er echt is',''],
   ['Beeld','iets wat lijkt op het object; iets wat overeenkomst heeft met het object',''],
   ['Metafoor','beeldspraak waarbij het beeld het object vervangt','De premier: ‘We zitten in een achtbaan.’ (beeld = achtbaan, object = de onvoorspelbare toestand in het land)'],
   ['Personificatie','beeldspraak waarbij iets wat niet menselijk is, menselijke eigenschappen krijgt','Het geluk lacht ons toe. · De tijd vliegt. · De dennentakken dansen in de wind.'],
   ['Vergelijking (geen metafoor)','object en beeld staan allebei in de zin, met als of lijkt','Rein is zo sluw als een vos. Bij een metafoor: Die vos heeft ons misleid.'],
   ['Voordeel','levendig, kort, je ziet het voor je, krachtig en origineel',''],
   ['Nadeel','een beeld kan de werkelijkheid versluieren; wie het beeld niet kent, snapt het niet','']]},
 {id:'b1',par:'b5',nr:'1',name:'Wat betekent het figuurlijk?',c:'--c1',sub:'Blz. 98 · opdracht 1 · a t/m f',rules:[['Vraag jezelf af','Wat is het beeld, en waar lijkt het op in de zin?','']]},
 {id:'b2',par:'b5',nr:'2',name:'Personificaties',c:'--c2',sub:'Blz. 98 · opdracht 2 · niet letterlijk bedoelde werkwoorden',rules:[['Personificatie','iets wat niet menselijk is, doet iets menselijks','De ketting smeekt · de plicht roept']]},
 {id:'b3',par:'b5',nr:'3',name:'Tekst 1: Een fraaie verpakking',c:'--c3',sub:'Blz. 99 · opdracht 3 · metaforen en personificaties uitleggen',rules:[['Uitleggen','zeg wat het beeld wil zeggen én wat het object is','achtbaan: schiet onvoorspelbaar van hoog naar laag → de toestand in het land tijdens de pandemie']]},
 {id:'b4',par:'b5',nr:'4',name:'Zelf metaforen gebruiken',c:'--c4',sub:'Blz. 99 · opdracht 4 · moeras, rugzak, schaduw, schilderen, wortels',rules:[['Metafoor','het woord betekent niet letterlijk wat er staat','Hij zit in een moeras van schulden.']]}
);
const bm=(id,o,nr,q,a,f,u,vq,extra={})=>Q.push(Object.assign({id,o,nr,q,a,f:f.map(x=>Array.isArray(x)?x:[x,u]),u,v:{q:vq}},extra));
[
 ['a','Vanwege zijn wangedrag kreeg Johnny een <u>preek</u> van de conrector.','een lange, strenge berisping (uitbrander)',['een les over geloof in de kerk','een goed rapport','een extra opdracht'],'Een preek in de kerk is een lange toespraak over hoe je moet leven. Hier: de conrector sprak hem lang en streng toe.'],
 ['b','Het bedrijfsleven is de <u>ruggengraat</u> van de verzorgingsstaat.','het belangrijkste deel dat alles draagt en overeind houdt',['het zwakste deel','de leiding (de baas)','een klein onderdeel'],'Je ruggengraat houdt je lichaam overeind. Hier: zonder het bedrijfsleven (dat geld verdient) valt de verzorgingsstaat om.'],
 ['c','In de <u>herfst</u> van zijn leven schreef de filmacteur een autobiografie.','de laatste periode van zijn leven (zijn oude dag)',['zijn jeugd','het najaar','een moeilijke periode midden in zijn leven'],'De herfst komt na de zomer, vlak voor de winter. Hier: hij was al oud.'],
 ['d','Die <u>judas</u> heeft de leraar verteld dat wij zaten te spieken.','verrader',['klikspaan die het goed bedoelt','beste vriend','leraar'],'Judas verraadde Jezus in de Bijbel. Een judas is iemand die je verraadt.'],
 ['e','Het <u>regende</u> onvoldoendes bij het proefwerk geschiedenis.','er waren heel veel onvoldoendes',['het was slecht weer tijdens het proefwerk','er waren een paar onvoldoendes','de onvoldoendes kwamen onverwacht'],'Bij regen vallen er heel veel druppels. Hier: heel veel onvoldoendes.'],
 ['f','De overburen wonen heel klein, maar ze <u>zwemmen</u> in het geld.','ze hebben heel veel geld',['ze hebben een zwembad','ze geven veel geld uit','ze hebben geldzorgen'],'Om in iets te zwemmen moet er heel veel van zijn. Hier: ze zijn heel rijk.']
].forEach(([l,zin,a,f,u])=>bm('b1'+l,'b1','Opdracht 1.1'+l,`Wat betekent het onderstreepte woord hier?${S(zin)}`,a,f,u,`Het onderstreepte woord is figuurlijk bedoeld. Wat wordt ermee bedoeld?${S(zin)}`,
  {tv:`Wat betekent het onderstreepte woord hier? Schrijf het in je eigen woorden.${S(zin)}`}));
Q.push({id:'b1v',o:'b1',nr:'Opdracht 1.2',t:'open',q:'Welke voor- en nadelen heeft figuurlijk taalgebruik? Noem er van elk minstens één.',
  k:['voordeel: het is levendig en beeldend, je ziet het voor je (ook: kort, krachtig, origineel, makkelijk te onthouden)','nadeel: het kan onduidelijk zijn of verkeerd begrepen worden, bijvoorbeeld als je het beeld niet kent; het kan de werkelijkheid versluieren'],
  vb:['Een voordeel is dat het levendig is: je ziet meteen voor je wat er bedoeld wordt, en het is kort en krachtig. Een nadeel is dat iemand die het beeld niet kent (bijvoorbeeld wie judas niet kent) het niet begrijpt, of dat het beeld overdrijft of verbergt hoe het echt zit.']});
[
 ['a','De ketting van jouw fiets <u>smeekt</u> om een smeerbeurt.','heeft dringend een smeerbeurt nodig',['wordt vaak gesmeerd','is kapot','maakt geen geluid'],'Smeken doen mensen als ze iets heel graag willen. Hier: de ketting moet echt gesmeerd worden.'],
 ['b','Lange witte wolkenveren in de blauwe lucht <u>voorspellen</u> een weersomslag.','laten zien dat het weer gaat veranderen',['zorgen voor een weersomslag','verdwijnen voor het weer omslaat','komen na een weersomslag'],'Voorspellen doet een mens. Hier: de wolken zijn een teken dat het weer gaat omslaan.'],
 ['c','We zagen het koren <u>wuiven</u> in de wind.','heen en weer bewegen',['groeien','geoogst worden','stil staan'],'Wuiven doe je met je hand naar iemand. Hier: het koren beweegt heen en weer door de wind.'],
 ['d','Op maandagochtend zegt mijn moeder regelmatig: ‘De plicht <u>roept</u>.’','ik moet aan het werk (mijn taken wachten)',['ik hoor iemand roepen','ik heb vrij','ik heb zin in het weekend'],'Roepen doet een mens. Hier: haar werk en taken wachten op haar.'],
 ['e','Die roman <u>vertelt</u> het boeiende levensverhaal van een middeleeuwse avonturier.','beschrijft (bevat)',['wordt voorgelezen','is geschreven door','gaat niet over'],'Vertellen doet een mens. Hier: in de roman staat het verhaal beschreven.'],
 ['f','Om aan te geven dat ze altijd bereikbaar is, zegt Mariska: ‘Mijn mobiel <u>slaapt</u> nooit.’','staat altijd aan',['is nooit opgeladen','gaat nooit kapot','ligt altijd naast haar bed'],'Slapen doet een mens (of dier). Hier: haar telefoon staat nooit uit.']
].forEach(([l,zin,a,f,u])=>bm('b2'+l,'b2','Opdracht 2.1'+l,`Wat betekent het onderstreepte werkwoord hier?${S(zin)}`,a,f,u,`Het onderstreepte werkwoord is niet letterlijk bedoeld. Wat betekent het?${S(zin)}`,
  {tv:`Wat betekent het onderstreepte werkwoord hier? Schrijf het in je eigen woorden.${S(zin)}`}));
bm('b2o','b2','Opdracht 2.2','Welke overeenkomst hebben de onderstreepte werkwoorden in opdracht 2 (smeekt, voorspellen, wuiven, roept, vertelt, slaapt)?',
 'Iets wat niet menselijk is (ketting, wolken, koren, plicht, roman, mobiel) doet iets wat mensen doen: het zijn personificaties',
 ['Het zijn allemaal metaforen voor geluid','Het zijn allemaal vergelijkingen met als','Het zijn werkwoorden in de verleden tijd'],
 'Een ketting kan niet smeken en een mobiel kan niet slapen: het zijn menselijke handelingen. Dat heet personificatie.','Wat hebben smeekt, voorspellen, wuiven, roept, vertelt en slaapt hier gemeen?',{mc:1});

/* opdracht 3: tekst 1 */
const MET=[
 ['lichtpuntjes','Gelukkig zijn er ook lichtpuntjes. Hoe dramatisch de mededelingen ook zijn, het taalgebruik bij de persconferenties is om van te smullen.',
  'kleine lichtjes in het donker: iets fijns in een sombere tijd; object: het mooie taalgebruik in de persconferenties tijdens de pandemie',
  ['lampjes in de vergaderzaal van de persconferentie','de goede cijfers over het virus','de korte persconferenties']],
 ['brug','Verbindingswoorden vormen de brug tussen object en beeld.',
  'een brug verbindt twee kanten; object: de verbindingswoorden (als, lijkt) die bij een vergelijking het object en het beeld verbinden',
  ['een brug in Rotterdam','het verschil tussen object en beeld','een metafoor die je moet oversteken']],
 ['rund','Een meisje dat zich gracieus beweegt, wordt ‘de ballerina’ genoemd. Dat is een compliment en een metafoor, zoals ‘rund’ metaforisch een scheldwoord is.',
  'een rund is een groot, log dier; object: iemand die dom of onhandig is',
  ['iemand die veel eet','een boer','iemand die sterk is']],
 ['hofleveranciers','Maar de politiek en de sportwereld lijken toch wel de hofleveranciers van metaforen.',
  'een hofleverancier levert vast en veel aan het koningshuis; object: de politiek en de sportwereld, die heel veel metaforen leveren',
  ['politici die aan het hof van de koning werken','sporters die metaforen verkopen','kranten die over politiek schrijven']],
 ['vliegt','Metaforen vind je ook regelmatig in werkwoorden: ‘De tijd vliegt.’',
  'vliegen gaat heel snel; object: de tijd gaat heel snel voorbij',
  ['de tijd staat stil','de tijd gaat langzaam','je moet de tijd vangen']],
 ['arena','De politieke arena is, net als de literatuur, een goede leerschool.',
  'een arena is een plek waar gevochten wordt (gladiatoren, stieren); object: de politiek, waar politici strijden met elkaar',
  ['een stadion waar politici sporten','de Tweede Kamer als gebouw','een school voor politici']],
 ['goochelen','… als je zelf met deze vormen van beeldspraak wilt goochelen.',
  'een goochelaar speelt handig met dingen en laat je verbaasd staan; object: handig en creatief met beeldspraak omgaan',
  ['beeldspraak verbergen','trucjes uithalen om te bedriegen','beeldspraak uit je hoofd leren']]];
MET.forEach(([w,zin,a,f],i)=>bm('b3m'+(i+1),'b3',`Opdracht 3.1 · ${w}`,`Leg de metafoor <b>${w}</b> uit: wat wil het beeld zeggen en wat is het object?${S(zin.replace(w,`<u>${w}</u>`))}`,a,
 f.map(x=>[x,`Kijk naar wat ${w} letterlijk is en waar het in de zin op lijkt.`]),`<b>${w}</b>: ${a}.`,`Tekst 1. Wat betekent de metafoor <b>${w}</b>, en wat is het object?${S(zin.replace(w,`<u>${w}</u>`))}`,
 {tv:`Leg de metafoor <b>${w}</b> uit: geef aan wat het beeld wil zeggen en noteer het object.${S(zin.replace(w,`<u>${w}</u>`))}`}));
const AL7=[
 ['verpakking','Idealiter zijn beelden een fraaie verpakking die een heldere inhoud prijsgeeft.','een beeld is de buitenkant om een boodschap heen: het maakt de inhoud mooi en aantrekkelijk',['beelden zijn duur','beelden moet je openmaken om te lezen','beelden zitten in een doos']],
 ['oogsten','Ze oogsten bijval voor hun creativiteit en talige acrobatiek.','ze krijgen (als beloning) bijval en waardering',['ze werken op het land','ze verliezen stemmen','ze verzamelen beelden']],
 ['talige acrobatiek','… voor hun creativiteit en talige acrobatiek.','heel handig en lenig met taal omgaan, knappe taaltrucs',['moeilijke woorden gebruiken','sport en taal combineren','fouten maken in taal']],
 ['aan de flanken','Vooral politici aan de flanken van het politieke spectrum gebruiken pakkende beeldspraak.','aan de uiterste kanten: heel links of heel rechts in de politiek',['in het midden van de politiek','aan de zijkant van de Tweede Kamer','politici die nieuw zijn']],
 ['wapen … munitie','Taal is hun wapen, beeldspraak hun munitie.','met taal vechten ze tegen hun tegenstanders, en beeldspraak gebruiken ze om raak te schieten (te winnen)',['politici zijn gewelddadig','taal is gevaarlijk','beeldspraak is verboden']]];
AL7.forEach(([w,zin,a,f],i)=>bm('b3a'+(i+1),'b3',`Opdracht 3.2 · alinea 7`,`Wat betekent de metafoor <b>${w}</b> in alinea 7?${S(zin)}`,a,f.map(x=>[x,'Kijk naar wat het beeld letterlijk betekent en waarop het lijkt.']),`<b>${w}</b>: ${a}.`,
 `Tekst 1, alinea 7. Wat wordt bedoeld met <b>${w}</b>?${S(zin)}`,{tv:`Leg de metafoor <b>${w}</b> uit alinea 7 uit.${S(zin)}`}));
bm('b3a8','b3','Opdracht 3.3 · alinea 8',`Welke metafoor staat in de eerste zin van alinea 8, en wat betekent hij?${S('Daartegenover dreigt het gevaar dat een beeld de werkelijkheid versluiert.')}`,
 'versluiert: zoals een sluier iets bedekt, verbergt het beeld hoe het echt zit (het maakt de werkelijkheid onduidelijk)',
 [['gevaar: het beeld is gevaarlijk','gevaar is letterlijk bedoeld. Zoek het woord dat niet letterlijk is.'],['dreigt: het beeld bedreigt mensen','Zoek het woord dat iets bedekt.'],['werkelijkheid: het beeld is echt','werkelijkheid is letterlijk bedoeld.']],
 'Een sluier bedekt je gezicht, zodat je niet goed ziet wat eronder zit.','Tekst 1, alinea 8, eerste zin. Welk woord is een metafoor en wat betekent het?',{tv:`Noteer uit de eerste zin van alinea 8 een metafoor en geef de betekenis.${S('Daartegenover dreigt het gevaar dat een beeld de werkelijkheid versluiert.')}`});
Q.push({id:'b3p',o:'b3',nr:'Opdracht 3.4 · alinea 1',t:'open',q:`Noteer de twee personificaties uit alinea 1.${S('‘We zitten in een achtbaan’, typeert premier Rutte tijdens een tv-toespraak de toestand van het land. Nee, we zijn hier niet op de kermis. Het is begin jaren twintig en een mondiale pandemie houdt de wereld in een wurgende greep. In Nederland maken premier en ministers via live-uitzendingen bizarre maatregelen bekend: Nederland gaat op slot. Scholen gaan langdurig dicht, ondernemingen zuchten onder omzetverlies.')}`,
  k:['een pandemie houdt de wereld in een wurgende greep (een ziekte kan niet wurgen of vastgrijpen)','ondernemingen zuchten onder omzetverlies (een bedrijf kan niet zuchten)'],
  vb:['1 Een mondiale pandemie houdt de wereld in een wurgende greep. 2 Ondernemingen zuchten onder omzetverlies.']});
bm('b3x','b3','Extra · personificatie',`Welke zin bevat een personificatie?`,'Ondernemingen zuchten onder omzetverlies.',
 [['We zitten in een achtbaan.','Dat is een metafoor: het beeld (achtbaan) vervangt het object. Niemand doet iets menselijks.'],['Rein is zo sluw als een vos.','Dat is een vergelijking: object en beeld staan er allebei, met als.'],['Nederland gaat op slot.','Dat is een metafoor: op slot = alles dicht. Niemand doet iets menselijks.']],
 'Een onderneming kan niet zuchten: dat doet een mens. Iets wat niet menselijk is, krijgt een menselijke eigenschap.','Bij welke zin krijgt iets wat niet menselijk is een menselijke eigenschap?',{mc:1});
bm('b3y','b3','Extra · metafoor of vergelijking',`Wat voor beeldspraak is dit?${S('Die vos heeft ons misleid.')}`,'metafoor',
 [['vergelijking','Bij een vergelijking staan object én beeld erin, met als of lijkt (Rein is zo sluw als een vos). Hier staat alleen het beeld.'],['personificatie','Een vos is hier geen echt dier dat iets menselijks doet: vos staat voor Rein (het beeld vervangt het object).']],
 'Het beeld (de vos) vervangt het object (Rein). Dat is een metafoor.','Het beeld vervangt hier het object. Hoe heet dat?',{tv:`Benoem de beeldspraak: metafoor, personificatie of vergelijking.${S('Die vos heeft ons misleid.')}`});
bm('b3z','b3','Extra · begrippen',`Wat is in de zin het <b>object</b>?${S('Rein is zo sluw als een vos.')}`,'Rein',
 [['een vos','De vos is het beeld: iets wat lijkt op het object.'],['sluw','sluw is de overeenkomst tussen object en beeld.'],['als','als is het verbindingswoord, de brug tussen object en beeld.']],
 'Het object is iets uit de werkelijkheid: Rein. Het beeld is de vos.','Wat is het object (iets uit de werkelijkheid) in deze vergelijking?',{tv:`Noteer het object.${S('Rein is zo sluw als een vos.')}`});

/* opdracht 4 */
[
 ['moeras','Na zijn ontslag zakte hij steeds dieper weg in een moeras van schulden.',['De wandelaars liepen om het moeras heen.','In het moeras leven veel kikkers.','Het moeras droogt in de zomer uit.'],'Een moeras trekt je naar beneden en je komt er moeilijk uit: zo zit hij vast in zijn schulden.'],
 ['rugzak','Elke leerling neemt een eigen rugzak aan ervaringen mee naar school.',['Ze pakte haar boeken in haar rugzak.','Mijn rugzak is te zwaar voor de wandeling.','Hij kocht een nieuwe rugzak voor de reis.'],'Een rugzak draag je altijd met je mee: zo neem je ook je ervaringen mee.'],
 ['schaduw','Hij stond zijn hele leven in de schaduw van zijn beroemde broer.',['We zaten in de schaduw van de boom.','Om twaalf uur is je schaduw het kortst.','De kat lag te slapen in de schaduw.'],'In de schaduw zie je iemand minder goed: hij viel niet op naast zijn broer.'],
 ['schilderen','De schrijfster schildert met woorden het leven in een klein dorp.',['Mijn vader schildert de schuur groen.','Rembrandt schilderde De Nachtwacht.','We gaan morgen de slaapkamer schilderen.'],'Met woorden maakt ze een levendig beeld, alsof het een schilderij is.'],
 ['wortels','Hoewel ze al twintig jaar in Amsterdam woont, liggen haar wortels in Friesland.',['De wortels van de eik zijn heel diep.','Konijnen eten graag wortels.','Ik schil de wortels voor de soep.'],'Wortels houden een plant vast in de grond: daar komt ze vandaan.']
].forEach(([w,a,f,u])=>bm('b4'+w,'b4','Opdracht 4 · '+w,`In welke zin is <b>${w}</b> als metafoor gebruikt?`,a,f.map(x=>[x,'Hier is het letterlijk bedoeld.']),`${u}`,`Welke zin gebruikt <b>${w}</b> figuurlijk?`,{mc:1}));

/* =====================================================================
   Spelling §11 Engelse werkwoorden (blz. 262–263)
   ===================================================================== */
SECS.push(
 {id:'et',par:'s11',nr:'T',name:'Theorie: Engelse werkwoorden',c:'--c6',sub:'Blz. 262 · Engelse werkwoorden vervoeg je als Nederlandse',
  rules:[['ik-vorm','meestal hele ww min -en: finishen → finish, kiteboarden → kiteboard','Is de e nodig voor de uitspraak, dan blijft hij: daten → date, skypen → skype'],
   ['Dubbele medeklinker','Engels eindigt op dubbele medeklinker → één medeklinker: stressen → stres','Tenzij de dubbele nodig is voor de uitspraak: paintballen → paintball'],
   ['Tegenwoordige tijd ev','ik-vorm of ik-vorm + t','ik game, hij gamet · ik chat, hij chat'],
   ['Verleden tijd en vd','Engelse ww zijn zwak: ’t (e)x-f(o)k s ch (aa)p','Het gaat om de KLANK van de laatste letter van de stam, niet om de letter: faken (k) → fakete, gefaket · saven (v) → savede'],
   ['Voorbeelden','bloggen: ik blog, jij blogt, zij blogde, geblogd','downloaden: ik download, zij downloadt, jij downloadde, gedownload'],
   ['','flossen: ik flos, jij flost, ik floste, geflost','mixen: ik mix, zij mixt, wij mixten, gemixt · snoozen: ik snooze, hij snoozet, jullie snoozeden, gesnoozed']]},
 {id:'e1',par:'s11',nr:'1',name:'Vul het schema in',c:'--c1',sub:'Blz. 262 · opdracht 1 · chatten, gamen, highfiven, speechen, upgraden, zappen',rules:[['Stappen','ik-vorm → hij-vorm (+t) → klank laatste letter? → -te(n)/-t of -de(n)/-d','']]},
 {id:'e2',par:'s11',nr:'2',name:'Persoonsvorm tegenwoordige tijd',c:'--c2',sub:'Blz. 263 · opdracht 2 · a t/m d',rules:[['ik-vorm of ik-vorm + t','Staat jij/je achter de pv, dan geen t.','time ik · skateboardt je broer']]},
 {id:'e3',par:'s11',nr:'3',name:'Persoonsvorm verleden tijd',c:'--c3',sub:'Blz. 263 · opdracht 3 · a t/m d',rules:[['’t ex-kofschip op de klank','race (s-klank) → racete · save (v-klank) → savede','']]},
 {id:'e4',par:'s11',nr:'4',name:'Voltooid deelwoord',c:'--c4',sub:'Blz. 263 · opdracht 4 · a t/m d',rules:[['ge- + stam + t of d','gebungeejumpt · gescoord','']]},
 {id:'e5',par:'s11',nr:'5',name:'Kies de juiste vorm',c:'--c5',sub:'Blz. 263 · opdracht 5 · a t/m d',rules:[['Let op de klank','fake → fakete · fix → fixte','']]},
 {id:'e6',par:'s11',nr:'6',name:'pvtt, pvvt, vd of od',c:'--c1',sub:'Blz. 263 · opdracht 6 · noteer de vorm en de spelling',rules:[['od = onvoltooid deelwoord','hele ww + d: checkend','']]},
 {id:'e7',par:'s11',nr:'7',name:'Tekst 1: verbeter de fouten',c:'--c2',sub:'Blz. 263 · opdracht 7 · fout gespelde werkwoordsvormen',rules:[['Niet -ed','Een Nederlands vd eindigt op -t of -d: geconnect, niet geconnected','']]}
);
const ew=(id,o,nr,q,a,f,u,extra={})=>Q.push(Object.assign({id,o,nr,q,a,f:f.map(x=>Array.isArray(x)?x:[x,u]),tvIn:[extra.lab||'werkwoordsvorm'],tvA:[a],u,v:{q:extra.vq||q}},extra.q2||{}));

/* ---------- vragen bij de theorieblokken ---------- */
[
 ['sp1','Hoe vind je het onderwerp?','Vraag: wie (of wat) + pv?',['Vraag: wat + pv + ow?','Vraag: aan wie + pv?','Het eerste woord van de zin'],'Stap 3 van het stappenplan.'],
 ['sp2','Hoe vind je het lijdend voorwerp?','Vraag: wat (soms wie) + pv + ow + overige ww?',['Vraag: wie + pv?','Vraag: aan wie + pv + ow + lv?','Het zinsdeel met een vast voorzetsel'],'Stap 5. Een lv komt alleen voor bij een wg.'],
 ['sp3','Hoe vind je het meewerkend voorwerp?','Vraag: aan (soms voor) wie + pv + ow + lv + overige ww?',['Vraag: wat + pv + ow?','Vraag: wie + pv?','Alle zinsdelen die overblijven'],'Stap 6. Komt vooral voor bij ww met iets zeggen of geven.'],
 ['sp4','Welke zinsdelen zijn bijwoordelijke bepalingen?','alle zinsdelen die na de andere stappen overblijven',['alleen het eerste zinsdeel van de zin','alle zinsdelen met een voorzetsel','alleen woorden als niet en wel'],'Stap 8: alle overgebleven zinsdelen zijn bwb. Ook niet, wel, zeker, misschien, natuurlijk.'],
 ['sp5','Wanneer is het gezegde een naamwoordelijk gezegde?','bij een koppelwerkwoord (zijn, worden, blijven, blijken, lijken, schijnen, heten, dunken, voorkomen) zonder ander zelfstandig ww',['bij elk werkwoord met zijn of hebben','als er een lijdend voorwerp is','als er een voltooid deelwoord in de zin staat'],'Stap 4. Het nw.deel zegt iets over het ow: is [jarig] geweest.'],
 ['sp6','Hoe vind je de persoonsvorm?','zet de zin in een andere tijd, verander het getal of maak de zin vragend',['zoek het laatste werkwoord van de zin','zoek het woord met ge- ervoor','vraag: wie of wat + ww?'],'Stap 1 van het stappenplan.']
].forEach(([id,q,a,f,u])=>Q.push({id,o:'sp',nr:'Stappenplan',q,a,f:f.map(x=>[x,u]),mc:1,u:`<b>${a}</b>. ${u}`,v:{q:`Stappenplan zinsdelen: ${q.toLowerCase()}`}}));
[
 ['z3t1','zich schamen','verplicht wederkerend','*Hij schaamt zijn broer kan niet, en *zichzelf schamen ook niet.'],
 ['z3t2','zich wassen','toevallig wederkerend','Je kunt ook de baby wassen, en jezelf wassen kan ook.'],
 ['z3t3','zich vergissen','verplicht wederkerend','*Ik vergis mijn zus kan niet.'],
 ['z3t4','zich aankleden','toevallig wederkerend','Je kunt ook een kind aankleden.'],
 ['z3t5','zich gedragen','verplicht wederkerend','*Hij gedraagt zijn broertje kan niet.'],
 ['z3t6','zich verbazen','toevallig wederkerend','Je kunt ook een ander verbazen: Zijn antwoord verbaasde de leraar.'],
 ['z3t7','zich uitsloven','verplicht wederkerend','*Ik sloof mijn vriend uit kan niet.']
].forEach(([id,w,a,u])=>Q.push({id,o:'z3t',nr:'Theorie §3',q:`Is <b>${w}</b> verplicht of toevallig wederkerend?`,a,f:[[a==='verplicht wederkerend'?'toevallig wederkerend':'verplicht wederkerend',u]],
  u:`<b>${a}</b>. ${u} ${a==='verplicht wederkerend'?'Het wed.vnw hoort dan bij het wg.':'Het wed.vnw is dan lv.'}`,v:{q:`Kun je bij <b>${w}</b> een ander invullen? Wat voor werkwoord is het?`}}));
Q.push({id:'z3t8',o:'z3t',nr:'Theorie §3',q:`Wat zijn wg en lv?${S('Deze kapper scheert zich altijd met water en scheerzeep.')}`,a:'wg = scheert, lv = zich',
  f:[['wg = scheert zich, geen lv','zich scheren is toevallig wederkerend (hij scheert zijn klanten): zich is lv.'],['wg = scheert, lv = water en scheerzeep','met water en scheerzeep is een bwb (hoe?).']],
  tv:`Noteer het wg en het lv.${S('Deze kapper scheert zich altijd met water en scheerzeep.')}`,tvAlt:['scheert, zich'],u:'Toevallig wederkerend: het wed.vnw is lv.',v:{q:'Deze kapper scheert zich. Hoort zich bij het wg of is het lv?'}});
Q.push({id:'z3t9',o:'z3t',nr:'Theorie §3',q:`Wat is het wg?${S('Gedroeg jij je verdacht volgens de politieagent?')}`,a:'Gedroeg … je',
  f:[['Gedroeg','zich gedragen is verplicht wederkerend: je hoort bij het wg.'],['Gedroeg jij je','jij is het onderwerp.']],
  tv:`Noteer het wg.${S('Gedroeg jij je verdacht volgens de politieagent?')}`,tvAlt:['gedroeg je'],u:'Verplicht wederkerend: het wed.vnw hoort bij het wg.',v:{q:'Gedroeg jij je verdacht? Welke woorden vormen het wg?'}});
[
 ['bt1','Wat is een metafoor?','beeldspraak waarbij het beeld het object vervangt',['beeldspraak waarbij iets niet-menselijks menselijke eigenschappen krijgt','een vergelijking met als of lijkt','iets uit de werkelijkheid']],
 ['bt2','Wat is een personificatie?','beeldspraak waarbij iets wat niet menselijk is, menselijke eigenschappen krijgt',['beeldspraak waarbij het beeld het object vervangt','een vergelijking met als of lijkt','een overdreven uitspraak']],
 ['bt3','Wat is het object bij beeldspraak?','iets uit de werkelijkheid; iets wat er echt is',['iets wat lijkt op het object','het verbindingswoord als','de schrijver van de tekst']],
 ['bt4','Wat is het beeld bij beeldspraak?','iets wat lijkt op het object; iets wat overeenkomst heeft met het object',['iets uit de werkelijkheid','een plaatje bij de tekst','een woord dat letterlijk bedoeld is']],
 ['bt5','Wat is beeldspraak?','figuurlijk taalgebruik, waarbij je een beeld gebruikt om iets duidelijk te maken',['letterlijk taalgebruik met plaatjes','een tekst met illustraties','een moeilijke vergelijking met getallen']]
].forEach(([id,q,a,f])=>Q.push({id,o:'bt',nr:'Begrippen',q,a,f:f.map(x=>[x,`${a[0].toUpperCase()+a.slice(1)}.`]),u:`<b>${a}</b>.`,v:{q:q.replace('Wat is','Wat betekent')},tv:q+' Geef de omschrijving.'}));
[
 ['et1','snoozen: hij …','snoozet',['snoozed','snoost'],'ik snooze (e blijft voor de uitspraak) + t.'],
 ['et2','snoozen: jullie … (verleden tijd)','snoozeden',['snoozeten','snoosden'],'laatste klank z: niet in ’t ex-kofschip: -den.'],
 ['et3','flossen: ik … (verleden tijd)','floste',['flosde','flosste'],'stressen → stres, flossen → flos (één s). s in ’t kofschip: floste.'],
 ['et4','downloaden: jij … (verleden tijd)','downloadde',['downloadte','downloade'],'stam download + de: downloadde (twee d’s).'],
 ['et5','mixen: voltooid deelwoord','gemixt',['gemixd','gemixed'],'x in ’t ex-kofschip: gemixt.'],
 ['et6','bloggen: voltooid deelwoord','geblogd',['geblogt','gebloggd'],'blog (één g): g niet in ’t ex-kofschip: geblogd.']
].forEach(([id,q,a,f,u])=>ew(id,'et','Theorie §11',`Welke vorm is goed? ${q}`,a,f,u,{lab:'vorm',q2:{tv:`Schrijf de goede vorm: ${q}`}}));
/* opdracht 1 */
[
 ['chatten','chat','chat','chatten','gechat','ik chat (één t). hij chat: de stam eindigt al op t, er komt geen tweede t bij. t staat in ’t kofschip: wij chatten (vt), gechat (vd).',
  {ik:['chatt','chatte'],hij:['chatt','chats'],mv:['chatte','chatden'],vd:['gechatt','gechatted']}],
 ['gamen','game','gamet','gameden','gegamed','De e is nodig voor de uitspraak (geem): ik game, hij gamet. Laatste klank m staat niet in ’t ex-kofschip: -de(n), -d.',
  {ik:['gaam','gam'],hij:['games','gaamt'],mv:['gameten','gamden'],vd:['gegamet','gegaamd']}],
 ['highfiven','highfive','highfivet','highfiveden','gehighfived','De e blijft voor de uitspraak: ik highfive, hij highfivet. Laatste klank v staat niet in ’t ex-kofschip: -de(n), -d.',
  {ik:['highfiv','highfif'],hij:['highfives','highfift'],mv:['highfiveten','highfivden'],vd:['gehighfivet','gehighfiveed']}],
 ['speechen','speech','speecht','speechten','gespeecht','ik speech, hij speecht. Laatste klank tsj (ch) is stemloos: -te(n), -t.',
  {ik:['speeche','speach'],hij:['speechd','speechs'],mv:['speechden','speechede'],vd:['gespeechd','gespeeched']}],
 ['upgraden','upgrade','upgradet','upgradeden','geüpgraded','De e blijft voor de uitspraak: ik upgrade, hij upgradet. Laatste klank d: -de(n), -d. Let op het trema: geüpgraded.',
  {ik:['upgrad','upgraad'],hij:['upgrades','upgradt'],mv:['upgradeten','upgradden'],vd:['geupgraded','geüpgradet']}],
 ['zappen','zap','zapt','zapten','gezapt','Dubbele medeklinker wordt één: ik zap, hij zapt. p staat in ’t ex-kofschip: -te(n), -t.',
  {ik:['zapp','zappe'],hij:['zapd','zappt'],mv:['zapden','zappten'],vd:['gezapd','gezappt']}]
].forEach(([inf,ik,hij,mv,vd,u,F],i)=>{const n=i+1;
  [['ik','ik-vorm',ik],['hij','hij/zij-vorm',hij],['mv','meervoud verleden tijd (wij)',mv],['vd','voltooid deelwoord',vd]].forEach(([k,lab,a])=>
   ew(`e1${n}${k}`,'e1',`Opdracht 1 · ${n} ${inf}`,`Wat is de <b>${lab}</b> van <b>${inf}</b>?`,a,F[k],u,{lab,vq:`${inf}: welke ${lab} is goed gespeld?`,q2:{tv:`Schrijf de <b>${lab}</b> van <b>${inf}</b>.`}}))});
/* opdracht 2 */
[
 ['a','Mariana … (shoppen) vaak bij Designer Outlet Roermond.','shopt',['shopd','shoppt','shop'],'Mariana = zij: ik shop + t = shopt (één p).'],
 ['b','Vanaf welke leeftijd … (skateboarden) je broer Matthias al?','skateboardt',['skateboard','skateboardd','skateboards'],'je broer = hij: ik skateboard + t = skateboardt. Het je hoort bij broer, niet bij jij.'],
 ['c','Menige sportieveling … (survivallen) graag in de Pyreneeën.','survivalt',['survivald','survivallt','survival'],'Menige sportieveling = hij: ik survival + t = survivalt.'],
 ['d','Als ik schaats, … (timen) ik altijd mijn rondetijden.','time',['timet','tim','timed'],'ik-vorm: time (de e blijft voor de uitspraak). Geen t bij ik.']
].forEach(([l,zin,a,f,u])=>ew('e2'+l,'e2','Opdracht 2'+l,`Welke persoonsvorm (tegenwoordige tijd) hoort op de puntjes?${S(zin)}`,a,f,u,{lab:'pv tt',vq:`Vul de persoonsvorm in de tegenwoordige tijd in.${S(zin)}`,q2:{tv:`Noteer de persoonsvorm in de tegenwoordige tijd.${S(zin)}`}}));
/* opdracht 3 */
[
 ['a','De genodigden … (toasten) op het geluk van het bruidspaar.','toastten',['toasten','toastden','toasted'],'toast eindigt op t (’t kofschip): toast + ten = toastten (twee keer t).'],
 ['b1','Eladia … (saven) enkele bestanden en … (deleten) enkele andere.','savede',['savete','saved','saafde'],'save: laatste klank v, niet in ’t ex-kofschip: savede.'],
 ['b2','Eladia … (saven) enkele bestanden en … (deleten) enkele andere.','deletete',['deletede','delete','deleted'],'delete: laatste klank t: deletete.'],
 ['c1','Max … (racen) in zijn bolide naar de eindstreep en … (finishen) als eerste.','racete',['racede','raced','raacte'],'race: laatste klank s, die staat in ’t kofschip: racete.'],
 ['c2','Max … (racen) in zijn bolide naar de eindstreep en … (finishen) als eerste.','finishte',['finishde','finished','finisjte'],'finish: laatste klank sj is stemloos (net als ch): finishte.'],
 ['d1','Ik … (scrollen) over het scherm en … (sharen) een grappig filmpje.','scrolde',['scrollde','scrolte','scrolled'],'scrol (één l): l niet in ’t ex-kofschip: scrolde.'],
 ['d2','Ik … (scrollen) over het scherm en … (sharen) een grappig filmpje.','sharede',['sharete','shared','shaarde'],'share: laatste klank r: sharede.']
].forEach(([l,zin,a,f,u])=>ew('e3'+l,'e3','Opdracht 3'+l[0],`Welke persoonsvorm (verleden tijd) hoort op de ${l.length>1?(l[1]==='1'?'eerste':'tweede'):''} puntjes?${S(zin)}`,a,f,u,{lab:'pv vt',vq:`Noteer de persoonsvorm in de verleden tijd${l.length>1?` (${l[1]==='1'?'eerste':'tweede'} puntjes)`:''}.${S(zin)}`,q2:{tv:`Noteer de persoonsvorm in de verleden tijd${l.length>1?` op de ${l[1]==='1'?'eerste':'tweede'} puntjes`:''}.${S(zin)}`}}));
/* opdracht 4 */
[
 ['a1','In zijn vakantie heeft Diemer … (bungeejumpen) en … (parasailen).','gebungeejumpt',['gebungeejumpd','gebungeejumped','bungeegejumpt'],'jump: p in ’t kofschip: gebungeejumpt.'],
 ['a2','In zijn vakantie heeft Diemer … (bungeejumpen) en … (parasailen).','geparasaild',['geparasailt','geparasailed','parasailed'],'parasail: l niet in ’t ex-kofschip: geparasaild.'],
 ['b1','De rechtsback had de bal … (passen) en de spits heeft … (scoren).','gepast',['gepassd','gepassed','gepasst'],'pass → pas (één s): s in ’t kofschip: gepast.'],
 ['b2','De rechtsback had de bal … (passen) en de spits heeft … (scoren).','gescoord',['gescoort','gescored','gescoreed'],'scoor: r niet in ’t ex-kofschip: gescoord.'],
 ['c1','In Zuid-Frankrijk hebben we lekker … (beachvolleyballen) en … (partyen).','gebeachvolleybald',['gebeachvolleybalt','gebeachvolleyballed','gebeachvolleyballd'],'beachvolleybal (één l, je zegt bal): l niet in ’t ex-kofschip: gebeachvolleybald.'],
 ['c2','In Zuid-Frankrijk hebben we lekker … (beachvolleyballen) en … (partyen).','gepartyd',['gepartyt','gepartied','geparty'],'party: eindigt op een klinker-klank (ie): -d: gepartyd.'],
 ['d1','In ons land wordt steeds meer … (bingewatchen) en … (netflixen).','gebingewatcht',['gebingewatchd','gebingewatched','bingegewatcht'],'watch: tsj-klank is stemloos: gebingewatcht.'],
 ['d2','In ons land wordt steeds meer … (bingewatchen) en … (netflixen).','genetflixt',['genetflixd','genetflixed','genetflikst'],'netflix: x in ’t ex-kofschip: genetflixt.']
].forEach(([l,zin,a,f,u])=>ew('e4'+l,'e4','Opdracht 4'+l[0],`Welk voltooid deelwoord hoort op de ${l[1]==='1'?'eerste':'tweede'} puntjes?${S(zin)}`,a,f,u,{lab:'vd',vq:`Noteer het voltooid deelwoord (${l[1]==='1'?'eerste':'tweede'} puntjes).${S(zin)}`,q2:{tv:`Noteer het voltooid deelwoord op de ${l[1]==='1'?'eerste':'tweede'} puntjes.${S(zin)}`}}));
/* opdracht 5: keuzes staan in het boek */
[
 ['a1','Toen de spits werd getackeld / getackeled / getackelet / getackelt, …','getackeld',['getackeled','getackelet','getackelt'],'tackelen → ik tackel: l niet in ’t ex-kofschip: getackeld.'],
 ['a2','… fakede / fakete / fakte hij een blessure.','fakete',['fakede','fakte'],'fake: laatste klank k, in ’t kofschip: fakete. De e blijft voor de uitspraak.'],
 ['b','Voor de zekerheid back-upde / back-upte / backupde / backupte ik mijn aantekeningen.','back-upte',['back-upde','backupde','backupte'],'back-uppen → ik back-up: p in ’t kofschip: back-upte. Met koppelteken, zoals back-up.'],
 ['c1','De auto crashde / crashte, …','crashte',['crashde'],'crash: sj-klank is stemloos: crashte.'],
 ['c2','… maar de monteur fixde / fixede / fixete / fixte hem toch nog.','fixte',['fixde','fixede','fixete'],'fix: x in ’t ex-kofschip: fixte. Er is geen e nodig voor de uitspraak.'],
 ['d','Als je buiten de piste freeride / freeridet / freeridt, moet je oppassen voor lawines.','freeridet',['freeride','freeridt'],'je staat vóór de pv (geen inversie): ik freeride + t = freeridet.']
].forEach(([l,zin,a,f,u])=>Q.push({id:'e5'+l,o:'e5',nr:'Opdracht 5'+l[0],q:`Kies de juist gespelde werkwoordsvorm.${S(zin)}`,a,mc:1,f:f.map(x=>[x,u]),u:`<b>${a}</b>. ${u}`,v:{q:`Welke vorm is goed gespeld?${S(zin)}`}}));
/* opdracht 6 */
[
 ['a1','Vroeger … (msn’en) en … (sms’en) men, …','pvvt: msn’de',['pvvt: msn’te','pvtt: msn’t','pvvt: msnde'],'Vroeger: verleden tijd. msn: laatste klank n: msn’de (met apostrof).'],
 ['a2','Vroeger … (msn’en) en … (sms’en) men, …','pvvt: sms’te',['pvvt: sms’de','pvtt: sms’t','pvvt: smste'],'Vroeger: verleden tijd. sms: laatste klank s, in ’t kofschip: sms’te.'],
 ['a3','… maar tegenwoordig … (appen) men vooral.','pvtt: appt',['pvtt: apt','pvvt: appte','pvtt: app'],'Tegenwoordig: tegenwoordige tijd, men = hij-vorm: app + t = appt.'],
 ['b1','Geregeld zijn snelheid … (checken) … (biken) de triatleet gisteren naar de finish.','od: checkend',['pvvt: checkte','vd: gecheckt','od: checkent'],'Terwijl hij bikete, checkte hij zijn snelheid: onvoltooid deelwoord = hele ww + d: checkend.'],
 ['b2','Geregeld zijn snelheid … (checken) … (biken) de triatleet gisteren naar de finish.','pvvt: bikete',['pvvt: bikede','pvtt: biket','pvvt: bikte'],'gisteren: verleden tijd. bike: k in ’t kofschip: bikete.'],
 ['c1','Mijn oom Gerald heeft vroeger … (baseballen) en …','vd: gebaseballd',['vd: gebasebald','vd: gebaseballt','vd: gebaseballed'],'heeft … : voltooid deelwoord. Je zegt baseball (bòl), de dubbele l blijft: gebaseballd.'],
 ['c2','… heeft vroeger … en … (basketballen).','vd: gebasketbald',['vd: gebasketballd','vd: gebasketbalt','vd: gebasketballed'],'Voltooid deelwoord. Je zegt basketbal (bal, Nederlandse uitspraak): één l, gebasketbald.'],
 ['d1','Yakirah … (fitnessen) en … (streetdancen) nog elke week om in vorm te blijven.','pvtt: fitnest',['pvtt: fitnesst','pvtt: fitness','pvvt: fitneste'],'Yakirah = zij, tegenwoordige tijd: ik fitnes + t = fitnest (één s).'],
 ['d2','Yakirah … (fitnessen) en … (streetdancen) nog elke week om in vorm te blijven.','pvtt: streetdancet',['pvtt: streetdancedt','pvtt: streetdance','pvvt: streetdancete'],'Yakirah = zij, tegenwoordige tijd: ik streetdance + t = streetdancet.']
].forEach(([l,zin,a,f,u])=>Q.push({id:'e6'+l,o:'e6',nr:'Opdracht 6'+l[0],q:`Welke werkwoordsvorm (pvtt, pvvt, vd of od) en welke spelling horen op de puntjes van <b>${zin.match(/\(([^)]+)\)/)[1]}</b>?${S(zin)}`,a,f:f.map(x=>[x,u]),
  tv:`Noteer de werkwoordsvorm (pvtt, pvvt, vd of od) van <b>${zin.match(/\(([^)]+)\)/)[1]}</b> en zet de juiste spelling erachter.${S(zin)}`,tvAlt:[a.split(': ')[1]+' ('+a.split(':')[0]+')'],
  u:`<b>${a}</b>. ${u}`,v:{q:`Bepaal de vorm en spel hem goed: <b>${zin.match(/\(([^)]+)\)/)[1]}</b>.${S(zin)}`}}));
/* opdracht 7 */
const T7='Wat houdt je bezig? Sociale media draaien allemaal om deze vraag. Als je facebooked, twittert of linkedinned, word je er regelmatig mee om de oren geslagen. Of je nu een video van een hond op een skateboard likete, een vriend mentionde of connecte met een nieuwe collega, je komt er niet onderuit. Want als jij die vraag bovenaan het scherm niet beantwoordt, dan doen de mensen met wie je geconnected hebt, dat wel. Het is een vraag die je als gebruiker van sociale media misschien eens wat vaker kunt stellen, zonder dat je hem messaged of post.';
[
 ['facebooked','facebookt',['facebooked','facebookd'],'Als je … (tt, jij-vorm): ik facebook + t = facebookt.'],
 ['twittert','twittert',['twitterd','twitters'],'Goed: ik twitter + t = twittert.'],
 ['linkedinned','linkedint',['linkedinned','linkedind'],'Als je … (tt): ik linkedin + t = linkedint (één n).'],
 ['word','word',['wordt','wort'],'Goed: word je (inversie, jij achter de pv): geen t.'],
 ['likete','likete',['likede','liked'],'Goed: like, laatste klank k (’t kofschip): likete.'],
 ['mentionde','mentionde',['mentionte','mentioned'],'Goed: mention, laatste klank n: mentionde.'],
 ['connecte','connectte',['connecte','connectde'],'connect eindigt op t (’t kofschip): connect + te = connectte.'],
 ['beantwoordt','beantwoordt',['beantwoord','beantwoordd'],'Goed: als jij … beantwoordt (jij vóór de pv): beantwoord + t.'],
 ['geconnected','geconnect',['geconnected','geconnectt'],'Voltooid deelwoord: ge + connect + t, maar de stam eindigt al op t: geconnect.'],
 ['messaged','messaget',['messaged','messagedt'],'zonder dat je … (tt, jij-vorm): ik message + t = messaget.']
].forEach(([w,a,f,u],i)=>{const zin=T7.replace(new RegExp(`(^|[^a-z])${w}(?=[^a-z])`),(m,p)=>p+`<u><b>${w}</b></u>`);
  Q.push({id:'e7'+(i+1),o:'e7',nr:'Opdracht 7 · '+w,q:`Is <b>${w}</b> goed gespeld? Kies de goede vorm.${S(zin)}`,a,f:f.filter(x=>x!==a).map(x=>[x,u]),tvIn:['goede vorm'],tvA:[a],
   tv:`Schrijf <b>${w}</b> goed op (is hij al goed, schrijf hem dan over).${S(zin)}`,u:`<b>${a}</b>${a===w?' (was al goed)':` (niet ${w})`}. ${u}`,v:{q:`Tekst 1. Welke spelling van <b>${w}</b> is goed?${S(zin)}`}})});

/* =================== samenvoegen =================== */
V.SECS.push(...SECS);V.Q.push(...Q);
V.BEG.push(
 ['verplicht wederkerend werkwoord (zinsdelen)','het wed.vnw hoort bij het wg: Gedroeg jij je verdacht? → wg = gedroeg je','z3'],
 ['toevallig wederkerend werkwoord (zinsdelen)','het wed.vnw is lijdend voorwerp: Hij scheert zich → wg = scheert, lv = zich','z3'],
 ['werkwoordelijke uitdrukking','vaste combinatie die samen het wg is: zich een hoedje schrikken, iemand op de kast jagen','z3'],
 ['lijdend voorwerp (lv)','wat (soms wie) + pv + ow + overige ww? Alleen in zinnen met een wg','z3'],
 ['meewerkend voorwerp (mv)','aan (soms voor) wie + pv + ow + lv + overige ww?','z3'],
 ['beeldspraak','figuurlijk taalgebruik, waarbij je een beeld gebruikt om iets duidelijk te maken','b5'],
 ['object','iets uit de werkelijkheid; iets wat er echt is','b5'],
 ['beeld','iets wat lijkt op het object; iets wat overeenkomst heeft met het object','b5'],
 ['metafoor','beeldspraak waarbij het beeld het object vervangt','b5'],
 ['personificatie','beeldspraak waarbij iets wat niet menselijk is, menselijke eigenschappen krijgt: Het geluk lacht ons toe','b5'],
 ['Engelse werkwoorden','vervoeg je als Nederlandse zwakke ww; ’t ex-kofschip op de klank van de laatste letter van de stam','s11'],
 ['onvoltooid deelwoord (od)','hele werkwoord + d: checkend, wachtend','s11']);
Object.assign(V.SNAP,{
 z3t:[['Waarom maakt het uit of het verplicht of toevallig is?','Bij toevallig wederkerend kun je het wed.vnw vervangen door iemand anders (hij scheert zijn klanten): dan is het duidelijk een lv. Bij verplicht wederkerend kan dat niet (*hij schaamt zijn broer): het wed.vnw is dan geen voorwerp, maar een vast deel van het werkwoord.']],
 vz1:[['Hoe leer je dit het best?','Zeg het hardop met een voorbeeld erbij: ik heb behoefte <b>aan</b> rust. Een zinnetje onthoud je beter dan een los woord.']],
 b3:[['Wat moet je bij uitleggen opschrijven?','Twee dingen: wat het beeld wil zeggen (waar lijkt het op?) en wat het object is (waar gaat het echt over?).']],
 et:[['Waarom fakete en niet fakede?','Je kijkt naar de klank van de laatste letter van de stam. fake spreek je uit als feek: de laatste klank is k, en k zit in ’t kofschip. De e staat er alleen voor de uitspraak.']]});
const ORDE=['4','z3','z5','vz','b5','s4','s11','mix'];
V.SECS.sort((a,b)=>ORDE.indexOf(a.par)-ORDE.indexOf(b.par));
V.leer=ORDE.filter(p=>p!=='mix');
/* 27 nov: met §3, vaste voorzetsels, beeldspraak en §11 staat het hele PTO van de repetitie (9 dec) in de app; behaalde paragrafen maken de toetsvoorbereiding nu korter */
V.volledig=true;
Object.assign(V.PN,{z3:'Grammatica zinsdelen §3 · gezegde en lv bij wederkerende werkwoorden',vz:'Woordenlijst · werkwoorden met vaste voorzetsels',b5:'Taal §5 · beeldspraak',s11:'Spelling §11 · Engelse werkwoorden'});
V.kop='Grammatica §3, §4, §5 · vaste voorzetsels · beeldspraak · spelling §4 en §11';
V.log.unshift(['di 17 nov','Toegevoegd: stappenplan zinsdelen, zinsdelen §3, woordenlijst vaste voorzetsels 1–120, Taal §5 beeldspraak, spelling §11 Engelse werkwoorden','§3: opdracht 1 t/m 5 · beeldspraak: opdracht 1 t/m 4 · spelling §11: opdracht 1 t/m 7']);
})();
