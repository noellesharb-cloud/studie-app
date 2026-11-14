/* Programma van Toetsing Onderbouw (PTO) klas 2, schooljaar 2026-2027 (versie 29 sep 2026).
   Per vak en periode wat er volgens het PTO getoetst wordt, letterlijk overgenomen (afspraak 14 nov 2026).
   De app koppelt een toets uit Cijfers hieraan via de periode en, als een periode meer toetsen heeft, via een woord in de naam (k).
   Een regel met k hoort alleen bij een toets waarvan de naam daarop past. app = wat ervan in de oefenapp staat.
   Let op: het PTO zegt zelf dat de docent de echte toetsstof in de les geeft. */
window.PTO={
 ne:[
  {p:1,k:/repetitie/i,kop:'Repetitie',stof:[
   {t:'Woordenlijst: werkwoorden met vaste voorzetsels, woorden 1 t/m 40'},
   {t:'Zinsdelen, herhaling leerjaar 1: pv, ow, wg, ng, lv, mv, bwb'},
   {t:'Grammatica woordsoorten, herhaling leerjaar 1: blw, olw, czn, azn, zn-e, bn, st.bn, zww, kww, hww, pers.vnw, bez.vnw, vz, bw (boekje met theorie en opdrachten, PowerPoint, instructievideo soorten werkwoorden)'},
   {t:'Cursus 5 Grammatica woordsoorten §6: aanw.vnw, vr.vnw, onbep.vnw (blz. 216-217)'},
   {t:'Cursus 7 Spelling §2 Leestekens'},
   {t:'Spelling werkwoorden, herhaling leerjaar 1: pvtt, pvvt, vd, od, inf, bn (boekje met theorie en opdrachten, PowerPoint)'},
   {t:'Cursus 7 Spelling werkwoorden §10 Gebiedende wijs, géén aanvoegende wijs (blz. 260-261)'}]},
  {p:2,k:/lees/i,kop:'Leesvaardigheid',stof:[
   {t:'Cursus 1 Meer dan lezen: §2 en §3 Tekstverbanden en signaalwoorden (blz. 10-24)'},
   {t:'PowerPoint met theorie leerjaar 1'}]},
  {p:2,k:/repetitie/i,kop:'Repetitie',stof:[
   {t:'Woordenlijst: werkwoorden met vaste voorzetsels, woorden 1 t/m 80'},
   {t:'Cursus 4 Taal §5 Beeldspraak (blz. 98-99 + hand-out en PowerPoint)'},
   {t:'Cursus 5 Grammatica zinsdelen §3 en §5 (blz. 210-211 en 214-215)'},
   {t:'Cursus 5 Grammatica woordsoorten §6 (blz. 212-213 en 216-217)',app:'Blz. 212-213, wederkerig en wederkerend voornaamwoord, staat in de app'},
   {t:'Cursus 7 Spelling §4 Koppelteken en weglatingsstreepje (blz. 254-255)'},
   {t:'Cursus 7 Spelling werkwoorden §11 Engelse werkwoorden (blz. 262-263)'}]},
  {p:3,k:/schrijf|recensie/i,kop:'Schrijfvaardigheid',stof:[
   {t:'Recensie van een historische (jeugd)roman'}]},
  {p:3,k:/repetitie/i,kop:'Repetitie',stof:[
   {t:'Woordenlijst: werkwoorden met vaste voorzetsels, woorden 1 t/m 120'},
   {t:'Cursus 5 Grammatica zinsdelen §7 Zinsdeelstukken (blz. 218-219)'},
   {t:'Cursus 5 Grammatica woordsoorten §8 Telwoord (blz. 220-221)'},
   {t:'Cursus 7 Spelling §5 Tussenletters in samenstellingen (blz. 256-257)'},
   {t:'Cursus 7 Spelling werkwoorden §12 Persoonsvormen in samengestelde zinnen (blz. 264-265)'}]},
  {p:4,k:/lees/i,kop:'Leesvaardigheid',stof:[
   {t:'Meer dan lezen: §2 t/m §5 (blz. 10-39 + PowerPoint met theorie leerjaar 1)'},
   {t:'D ongezond: §6 Kritisch lezen (blz. 197-202)'}]},
  {p:4,k:/presentatie/i,kop:'Presentatie',stof:[
   {t:'Presentatie over een historische (jeugd)roman'}]},
  {p:5,k:/repetitie/i,kop:'Repetitie',stof:[
   {t:'Eén van de twee keuzeboeken (worden aan het einde van periode 3 bekendgemaakt)'},
   {t:'Woordenlijst: werkwoorden met vaste voorzetsels, woorden 1 t/m 120 (herhaling)'},
   {t:'Cursus 4 Taal §2 Stijl (blz. 92-93)'},
   {t:'Cursus 3 Fictie §5 Over gedichten (blz. 81-87)'},
   {t:'Cursus 5 Grammatica zinsdelen §9 Samengestelde zin (blz. 222-223)'},
   {t:'Cursus 5 Grammatica woordsoorten §10 Voegwoord (blz. 224-225)'},
   {t:'Cursus 7 Spelling §6 Aan elkaar of los (blz. 258-259)'},
   {t:'Cursus 7 Spelling werkwoorden §14 Homofone werkwoordsvormen (blz. 268-269)'}]}],
 ak:[
  {p:1,stof:[{t:'H1 China: bevolking, economie, migratie, ongelijke verdeling, nieuwe zijderoute',k:/H1|china/i},
   {t:'H2: Welke endogene en exogene processen hebben de natuurlandschappen in Europa gevormd?',k:/H2|europa|endogen|exogen/i}]},
  {p:2,stof:[{t:'H3: Wat zijn de aardrijkskundige kenmerken van het Midden-Oosten?',k:/H3|midden/i,app:'H3 staat in de app'},
   {t:'H4: Hoe hebben de economische en politieke veranderingen in Europa in de twintigste eeuw de huidige situatie bepaald?',k:/H4|europa/i}]},
  {p:3,stof:[{t:'Praktische opdracht buurtonderzoek: 2 buurten vergelijken, 20 enquêtes afnemen, verwerken, conclusies trekken'}]},
  {p:4,stof:[{t:'H5: Waarom is Nigeria een arm land, ondanks de rijkdom aan natuurlijke hulpbronnen?',k:/H5|nigeria/i},
   {t:'H6: Hoe gaat Nederland om met klimaatverandering?',k:/H6|klimaat/i}]},
  {p:5,stof:[{t:'H7: Wat zijn de overeenkomsten en verschillen tussen Noord- en Zuid-Korea?',k:/H7|korea/i},
   {t:'H8: Wat zijn de aardrijkskundige kenmerken van de poolgebieden?',k:/H8|pool/i}]}],
 du:[{p:2,stof:[{t:'Hoofdstuk 1-4'}]},{p:3,stof:[{t:'Hoofdstuk 5-8'}]},{p:4,stof:[{t:'Hoofdstuk 9-11'}]},{p:5,stof:[{t:'Hoofdstuk 12-14'}]}],
 en:[{p:1,stof:[{t:'Unit 1 en 2'}]},{p:2,stof:[{t:'Leesvaardigheid'}]},{p:3,stof:[{t:'Unit 6 en 7'}]},{p:4,stof:[{t:'Hollywood project'}]},{p:5,stof:[{t:'Unit 8 en 9'}]}],
 fa:[{p:1,stof:[{t:'H0, H1 en H2'}]},{p:2,stof:[{t:'Praktische opdracht H3'}]},{p:3,stof:[{t:'H5'}]},{p:4,stof:[{t:'H6'}]},{p:5,stof:[{t:'H7'}]}],
 gs:[{p:1,stof:[{t:'Reformatie en Opstand'}]},{p:2,stof:[{t:'Gouden Eeuw',app:'H2 De Gouden Eeuw staat in de app'}]},
  {p:3,stof:[{t:'Democratische revoluties en industrialisatie'}]},{p:5,stof:[{t:'Politiek-maatschappelijke stromingen'}]}],
 gr:[{p:1,stof:[{t:'Les 7 en 8'}]},{p:2,stof:[{t:'Les 9 t/m 11',app:'Les 9 staat in de app, les 10 en 11 nog niet'}]},{p:4,stof:[{t:'Les 12 t/m 15'}]},{p:5,stof:[{t:'Les 16 en 17'}]}],
 la:[{p:1,stof:[{t:'H6'}]},{p:2,stof:[{t:'Het dagelijks leven in Rome'}]},{p:3,stof:[{t:'H7 en H8',app:'H7A staat in de app'}]},{p:4,stof:[{t:'H9 en H10'}]},{p:5,stof:[{t:'H11 t/m H13'}]}],
 lv:[
  {p:1,stof:[{t:'Hoofdstuk 5 Hoofdwaarden',k:/H5|hoofdstuk|hoofdwaard|toets/i},{t:'Praktische opdracht 1: casus + discussie (telt 2× mee)',k:/PO|praktisch|casus|discussie/i},{t:'Levensvisieboekopdracht: hoofdwaarden',k:/levensvisie/i}]},
  {p:2,stof:[{t:'Hoofdstuk 6 Islam (toets 1, telt 2× mee)',app:'§1 en §2 staan in de app'}]},
  {p:3,stof:[{t:'Hoofdstuk 4 Hindoeïsme en boeddhisme (toets 2, telt 2× mee)',k:/H4|hoofdstuk|hindo|boeddh|toets/i},{t:'Excursie gebedshuizen: moskee en mandir/tempel',k:/excursie|gebedshuis/i}]},
  {p:4,stof:[{t:'Hoofdstuk 6/3 Sociale media en seksualiteit',k:/H6|H3|hoofdstuk|seks|toets/i},{t:'Praktische opdracht 2: sociale media (telt 2× mee)',k:/PO|praktisch|sociale/i}]},
  {p:5,stof:[{t:'Hoofdstuk 1 Gelukkig worden',k:/H1|hoofdstuk|toets/i},{t:'Praktische opdracht 3: geluk (telt 2× mee)',k:/PO|praktisch/i},{t:'Levensvisieboekopdracht: geluk',k:/levensvisie/i}]}],
 na:[
  {p:1,stof:[{t:'Praktijktoets in de toetsweek: Stoffen (telt 10× mee)'}]},
  {p:2,stof:[{t:'Toets Polaris H3 en H5: Stoffen en Warmte (telt 10× mee)',app:'H3 en H5 staan in de app'}]},
  {p:3,stof:[{t:'Toets Polaris H4: Elektriciteit (telt 20× mee)'}]},
  {p:4,stof:[{t:'Toets Polaris H2: Beweging (telt 20× mee)'}]},
  {p:5,k:/H1|licht|heelal/i,stof:[{t:'Toets Polaris H1 en H6: Licht en Heelal (telt 20× mee)'}]},
  {p:5,k:/H5|straling|materia/i,stof:[{t:'Toets H5 en H6: Straling en Materialen (telt 20× mee)'}]}],
 wi:[
  {p:1,stof:[{t:'H1 Getallen en H8 Algebra, zonder 8.4 (telt 3× mee)'}]},
  {p:2,stof:[{t:'H3 Verbanden (telt 3× mee)',app:'H3 staat in de app'}]},
  {p:3,stof:[{t:'H2 Ruimtemeetkunde en H7 Meetkundig redeneren (telt 3× mee)'}]},
  {p:4,stof:[{t:'H6 Vergelijkingen en ongelijkheden en H8.4 Kwadraat afsplitsen (telt 3× mee)'}]},
  {p:5,k:/PO|smarties|excel/i,stof:[{t:'Praktische opdracht H4: Smarties en Excel (handelingsdeel)'}]},
  {p:5,k:/H4|H5|kans|pythagoras/i,stof:[{t:'H4 Kansrekening en H5 Stelling van Pythagoras (telt 3× mee)'}]}]
};
/* Wat zegt het PTO over deze toets? Geeft {kop, stof:[{t,app?}]} of null.
   Meer toetsen in een periode: dan moet de naam passen (k). Een zelf toegevoegde toets krijgt alleen PTO-stof als de naam past. */
window.ptoVan=function(vid,t){const L=(PTO[vid]||[]).filter(e=>String(e.p)===String(t&&t.periode));if(!L.length)return null;
  const naam=String(t.naam||''),past=e=>e.k&&e.k.test(naam);
  let e=L.find(past);if(!e){if(t.eigen||L.length>1)return null;e=L[0]}
  const st=e.stof.filter(s=>!s.k),mk=e.stof.filter(s=>s.k&&s.k.test(naam));
  /* geen regel met k past: dan alle regels laten zien (bijv. een toets die H3 en H4 samen toetst) */
  const stof=st.concat(mk.length?mk:e.stof.filter(s=>s.k));
  /* zegt het PTO niets meer dan de naam van de toets (bijv. Engels 'Leesvaardigheid'), dan niets tonen */
  if(stof.length===1&&!stof[0].app&&naam.toLowerCase().includes(stof[0].t.toLowerCase()))return null;
  return {kop:e.kop||'',stof:stof.map(s=>({t:s.t,app:s.app||''}))}};
/* HTML-lijstje van de PTO-stof */
window.ptoLijst=function(P){const E=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  return `<ul class="pto">${P.stof.map(s=>`<li>${E(s.t)}${s.app?`<span class="pa">✓ ${E(s.app)}</span>`:''}</li>`).join('')}</ul>`};
