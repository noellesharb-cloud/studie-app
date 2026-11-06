/* Huiswerk uit SOMtoday (studiewijzer). Elke week aanvullen.
   id    = uniek, vast houden (afvinken wordt hierop bewaard)
   d     = de dag waarvoor het af moet (de dag ervóór staat het in het dagplan)
   vak   = (deel van) de vaknaam zoals in de app
   t     = titel, wat = regels uit de omschrijving ('# ' = kopje)
   min   = geschatte tijd, klaar = al afgevinkt in SOMtoday, app = oefenapp die erbij hoort
   opg   = opgavenummers uit het boek die in de app staan: dan komt er een knop 'Maak je huiswerk stap voor stap'
   leer  = leerwerk dat ook bij het huiswerk hoort, na de opgaven: [{titel, o:sectie-id} of {titel, ids:[vraag-id's]}]
   par   = paragraaf in de oefenapp (voor het bijhoudblok na het huiswerk). Leeg: de eerste paragraaf zonder vinkje
   COMPLEET_TOT: tot en met deze datum staat al het huiswerk erin. Daarna is het nog onvolledig
   en blijft er ook een algemeen huiswerkblok ("kijk in SOMtoday") staan. */
window.HUISWERK_COMPLEET_TOT='2026-11-06';
window.HUISWERK=[
  /* maandag 2 november */
  {id:'2026-11-02-ak',d:'2026-11-02',vak:'aardrijkskunde',t:'Taak 2: §3.2 Dubai',wat:['Bestudeer LB H3.2','Maak WB H3.2 opdracht 2, 4, 6, 7, 9','# Begrippen in je schrift (met betekenis) en leren','Welvaart, bnp/inwoner, armoedegrens, basisbehoefte, welzijn, wereldstad, mainport, diversificatie, kennismigranten, arbeidsmigranten, duurzaamheid, ecologische voetafdruk, klimaatafspraken, greenwashing'],min:20,klaar:true,app:'ak',par:'3.2',opg:[2,4,6,7,9]},
  {id:'2026-11-02-du',d:'2026-11-02',vak:'duits',t:'Woorden en opdrachten',wat:['Leren: SB blz 12, AB blz 27 woorden t/m "oder"','Maken: AB blz 26 opdr 1, 2'],min:25,klaar:true},
  {id:'2026-11-02-na',d:'2026-11-02',vak:'natuurkunde',t:'L5.02',wat:['Lezen 5.1','Maken ✎ o.1-6, 8, 9','Maken ★ o.3-6, 8-11'],min:30,klaar:true,par:'5.1'},

  /* dinsdag 3 november */
  {id:'2026-11-03-gr',d:'2026-11-03',vak:'grieks',t:'Les 9 en tekst 9 t/m regel 12',wat:['# Leerwerk','Beginnen aan de woorden van les 9','Herhalen: alle rijtjes van het persoonlijk voornaamwoord (HB p. 106)','# Maakwerk','Benoemen en vertalen (B&V): tekst 9 t/m regel 12','# Meenemen','Argo Tekstboek en Argo Hulpboek','Benoemblad tekst 9 en kleurtjes','Schrift en schrijfmateriaal'],min:35,app:'gr',par:'9w'},
  {id:'2026-11-03-lv',d:'2026-11-03',vak:'levensbeschouw',t:'Opdracht 7 en 9',wat:['Opdracht 7 en 9 (blz. 119 af)'],min:15,app:'lv',par:'2'},
  {id:'2026-11-03-wi',d:'2026-11-03',vak:'wiskunde',t:'H3.3 + oefentoetsje H3.1 t/m H3.3',wat:['Leren H3.3 blz 76','Bekijken: ALLE filmpjes H3.1 t/m H3.3 (zie Teams)','Maken: 37, 38, 39, 40, 41, 43, 44, 46','Nakijken en evt. verbeteren!!','Let op: tijdens het oefentoetsje controleert de docent het huiswerk H3.1 t/m H3.3'],min:60,app:'wi',par:'3.3',opg:[37,38,39,40,41,43,44,46]},
  {id:'2026-11-03-na',d:'2026-11-03',vak:'natuurkunde',t:'Toets bespreken',wat:['Toets bespreken'],min:5,klaar:true},

  /* woensdag 4 november */
  {id:'2026-11-04-ak',d:'2026-11-04',vak:'aardrijkskunde',t:'Taak 3: §3.3 Water',wat:['Bestudeer LB H3.3','Maak WB H3.3 opdracht 1, 2, 3, 5, 6','# Begrippen in je schrift (met betekenis) en leren','Bevolkingsconcentraties, oases, rivieroase, stuwdam, stuwmeer, grondwater, bronoase, aquifers, fossiel water, leefbaarheid, verdamping, druppelirrigatie, ontzilting'],min:45,app:'ak',par:'3.3',opg:[1,2,3,5,6]},
  {id:'2026-11-04-wi',d:'2026-11-04',vak:'wiskunde',t:'H3.4',wat:['Lezen H3.4 blz 80','Bekijken uitlegfilmpjes H3.4','Maken: 50, 51, 52, 53, 54, 55, 56, 57'],min:45,app:'wi',par:'3.4',opg:[50,51,52,53,54,55,56,57]},

  /* donderdag 5 november */
  {id:'2026-11-05-la',d:'2026-11-05',vak:'latijn',t:'Woorden 1 en rijtjes',wat:['Maken: Woorden 1, blz. 81-82 in je oefenboek','Schrijf op: rijtjes mons, sanguis, en extra moeilijk: frater (fratris)','Leren: woordjes 7A en rijtjes groep 3'],min:35,app:'la',par:'wo',opg:[1,2,3,4,5],leer:[{titel:'Woordjes 7A',o:'w7'},{titel:'Rijtjes groep 3',ids:['r-rex','r-nomen','r-mons','r-sanguis','r-frater']}]},
  {id:'2026-11-05-wi',d:'2026-11-05',vak:'wiskunde',t:'Afmaken H3.4, begin H3.5',wat:['Leren blz 80','Maken: 58, 59, 60','Lezen blz 84','Bekijken uitlegfilmpje H3.5','Maken: 62, 63, 64, 65, 66'],min:45,app:'wi',opg:[58,59,60,62,63,64,65,66]},

  /* vrijdag 6 november */
  {id:'2026-11-06-ak',d:'2026-11-06',vak:'aardrijkskunde',t:'Inhalen: rest van §3.3',wat:['Afspraak met de docent: je maakt voortaan ALLE opdrachten in het werkboek, niet de helft.','Maak de opdrachten van WB H3.3 die nog niet in je huiswerk zaten: opdracht 4, 7, 8, 9, 10','Bij de controle op woensdag 11 november moeten alle opdrachten van H3 af zijn.','# Nakijken','Na de controle krijg je ALLE antwoorden. Kijk alles na met een andere kleur pen en schrijf bij elke fout kort waarom het goede antwoord klopt.'],min:40,app:'ak',par:'3.3',opg:[4,7,8,9,10]},
  /* id blijft 2026-11-04-gr zodat afvinken bewaard blijft; volgens SOMtoday moet het af op vrijdag 6 nov */
  {id:'2026-11-04-gr',d:'2026-11-06',vak:'grieks',t:'Les 9 en tekst 9 t/m regel 19',wat:['# Leerwerk','Woorden van les 9','Herhalen: alle rijtjes van het persoonlijk voornaamwoord (HB p. 106)','# Maakwerk','Benoemen en vertalen (B&V): tekst 9 t/m regel 19','# Meenemen','Argo Tekstboek en Argo Hulpboek','Benoemblad tekst 9 en kleurtjes','Schrift en schrijfmateriaal'],min:35,app:'gr',par:'9t',leer:[{titel:'Woorden les 9',o:'w9l'},{titel:'Persoonlijk voornaamwoord 1e en 2e persoon',o:'pv12'},{titel:'Persoonlijk voornaamwoord 3e persoon',o:'pv3'}]},
  {id:'2026-11-06-fa',d:'2026-11-06',vak:'frans',t:'Exercices digitaal via Noordhoff',wat:['Maak digitaal via Noordhoff:','Exercice 5e','Exercice 7b','Exercice 8a'],min:20},

  /* volgende week (nog niet compleet) */
  {id:'2026-11-09-ak',d:'2026-11-09',vak:'aardrijkskunde',t:'Taak 4: §3.4 Suezkanaal en Rode Zee',wat:['Bestudeer LB H3.4','Maak ALLE opdrachten van WB H3.4: opdracht 1 t/m 9 (afspraak met de docent: niet de helft maar alles)','# Begrippen: snappen, niet overschrijven','Overschrijven in je schrift hoeft voorlopig niet. Zorg dat je ze kunt gebruiken als je iets verklaart.','Containers, geopolitiek','# Nakijken','Na de controle krijg je ALLE antwoorden. Kijk alles na met een andere kleur pen en schrijf bij elke fout kort waarom het goede antwoord klopt.'],min:65,app:'ak',par:'3.4',opg:[1,2,3,4,5,6,7,8,9]},
  {id:'2026-11-10-ak31',d:'2026-11-10',vak:'aardrijkskunde',t:'Inhalen: rest van §3.1',wat:['Maak de opdrachten van WB H3.1 die je nog niet had gemaakt (opdracht 1 t/m 8). Wat al af is, sla je over.','Bij de controle op woensdag 11 november moeten alle opdrachten van H3 af zijn.','# Nakijken','Na de controle krijg je ALLE antwoorden. Kijk alles na met een andere kleur pen en schrijf bij elke fout kort waarom het goede antwoord klopt.'],min:35,app:'ak',par:'3.1',opg:[1,2,3,4,5,6,7,8]},
  {id:'2026-11-10-ak32',d:'2026-11-10',vak:'aardrijkskunde',t:'Inhalen: rest van §3.2',wat:['Maak de opdrachten van WB H3.2 die nog niet in je huiswerk zaten: opdracht 3, 5, 8, 10 (en opdracht 1, als die er is)','Bij de controle op woensdag 11 november moeten alle opdrachten van H3 af zijn.'],min:30,app:'ak',par:'3.2',opg:[3,5,8,10]},
  {id:'2026-11-11-ak',d:'2026-11-11',vak:'aardrijkskunde',t:'Taak 5: §3.5 Turkije',wat:['Bestudeer LB H3.5','Maak ALLE opdrachten van WB H3.5: opdracht 1 t/m 8 (afspraak met de docent: niet de helft maar alles)','# Begrippen: snappen, niet overschrijven','Overschrijven in je schrift hoeft voorlopig niet. Zorg dat je ze kunt gebruiken als je iets verklaart.','Opkomend land, middenklasse, ruimtelijke ongelijkheid, toeristen','# Woensdag 11-11 in de les','Controle huiswerk H3: alle opdrachten van H3 moeten af zijn','Oefentoets H3','# Nakijken','Na de controle krijg je ALLE antwoorden. Kijk alles na met een andere kleur pen en schrijf bij elke fout kort waarom het goede antwoord klopt.'],min:65,app:'ak',par:'3.5',opg:[1,2,3,4,5,6,7,8]},
  {id:'2026-11-09-na',d:'2026-11-09',vak:'natuurkunde',t:'L5.03',wat:['Maken ✎ o.11-14','Maken ★ o.12-15'],min:25,app:'na',par:'5.1',opg:[11,12,13,14,15]},
  {id:'2026-11-10-wi',d:'2026-11-10',vak:'wiskunde',t:'Afmaken H3.4, klein begin H3.5',wat:['Leren H3.4 blz 80- en H3.5 blz 84','Maken: 64 t/m 69'],min:45,app:'wi',par:'3.5',opg:[64,65,66,67,68,69]},
  {id:'2026-11-10-na',d:'2026-11-10',vak:'natuurkunde',t:'L5.04',wat:['Uitwerken practicum H5P12 IJking thermometer'],min:30},

  /* maandag 9 november */
  {id:'2026-11-09-du',d:'2026-11-09',vak:'duits',t:'AB blz 24 en 26, woorden blz 19 en 27',wat:['# Maken','AB blz 24 opdr 12','AB blz 26 opdr 1 (hele zinnen), 2, 3 (hele zinnen in je schrift)','# Leren','Woorden AB blz 19 en 27, Duits-Nederlands én Nederlands-Duits','Niet compleet? Vul aan met de bijlagen in SOMtoday: Prima A1.1 Wörter E3 en Prima 1.1 Wörter E2'],min:45},
  /* woensdag 11 november */
  {id:'2026-11-11-ne',d:'2026-11-11',vak:'nederlands',t:'Grammatica woordsoorten §4',wat:['Maken van Grammatica woordsoorten §4: opdracht 1, 2 en 4 (blz. 213)'],min:25},
  {id:'2026-11-11-wi',d:'2026-11-11',vak:'wiskunde',t:'Leren H3.5',wat:['Leren H3.5, blz 84','Maken: 70 t/m 72','Maken: Opdracht T1 (bijlage in SOMtoday, ook in de app)'],min:50,app:'wi',par:'3.5',opg:[70,71,72],leer:[{titel:'Opdracht T1',ids:['t1a','t1b','t1c','t1d','t1e']}]},
  /* donderdag 12 november */
  {id:'2026-11-12-wi',d:'2026-11-12',vak:'wiskunde',t:'Herhalen H3.1 en H3.2',wat:['Leren H3.1 blz 68','Bekijken uitleg filmpje(s) H3.1. Eventueel afspelen op snelheid 1,3 of 1,5','Leren: 7 stappenplan van Van Neck','Maken: Extra opdrachten H3: E1, E2, E3cd, E4, E5, E6, E7bd, E8 (zie Teams)','Maken: Opdracht R1 (bijlage in SOMtoday, ook in de app). Let op juiste notatie!!!!'],min:60,app:'wi',par:'3.1',leer:[{titel:'Opdracht R1',ids:['r1a','r1b','r1c','r1d']}]},
  {id:'2026-11-12-la',d:'2026-11-12',vak:'latijn',t:'Krantenartikelen samenvatten',wat:['Lees 2 krantenartikelen en lever een samenvatting van 1-3 zinnen over deze artikelen in bij je docent op Teams.','Zinnen moeten grammaticaal correcte volzinnen zijn! Fouten in het Nederlands geven een \'huiswerk-niet-gemaakt\' op SOM en puntenaftrek van het uiteindelijke cijfer (zie beoordelingsformulier).'],min:30},
  /* vrijdag 13 november: D-toets Latijn (woorden 7A + 7B, zelfstandige naamwoorden groep 3, bijvoeglijke naamwoorden groep 3). Toetsdatum staat in Cijfers, niet hier. */
  /* dinsdag 17 november */
  {id:'2026-11-17-na',d:'2026-11-17',vak:'natuurkunde',t:'L5.06',wat:['Kijk in SOMtoday bij L5.06 wat je moet maken (de omschrijving staat nog niet in de app)'],min:30}
];
