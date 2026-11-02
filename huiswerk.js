/* Huiswerk uit SOMtoday (studiewijzer). Elke week aanvullen.
   id    = uniek, vast houden (afvinken wordt hierop bewaard)
   d     = de dag waarvoor het af moet (de dag ervóór staat het in het dagplan)
   vak   = (deel van) de vaknaam zoals in de app
   t     = titel, wat = regels uit de omschrijving ('# ' = kopje)
   min   = geschatte tijd, klaar = al afgevinkt in SOMtoday, app = oefenapp die erbij hoort
   opg   = opgavenummers uit het boek die in de app staan: dan komt er een knop 'Maak je huiswerk stap voor stap'
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
  {id:'2026-11-04-gr',d:'2026-11-04',vak:'grieks',t:'Les 9 en tekst 9 t/m regel 19',wat:['# Leerwerk','Woorden van les 9','Herhalen: alle rijtjes van het persoonlijk voornaamwoord (HB p. 106)','# Maakwerk','Benoemen en vertalen (B&V): tekst 9 t/m regel 19','# Meenemen','Argo Tekstboek en Argo Hulpboek','Benoemblad tekst 9 en kleurtjes','Schrift en schrijfmateriaal'],min:35,app:'gr',par:'9t'},
  {id:'2026-11-04-wi',d:'2026-11-04',vak:'wiskunde',t:'H3.4',wat:['Lezen H3.4 blz 80','Bekijken uitlegfilmpjes H3.4','Maken: 50, 51, 52, 53, 54, 55, 56, 57'],min:45,app:'wi',par:'3.4',opg:[50,51,52,53,54,55,56,57]},

  /* donderdag 5 november */
  {id:'2026-11-05-la',d:'2026-11-05',vak:'latijn',t:'Woorden 1 en rijtjes',wat:['Maken: Woorden 1, blz. 81-82 in je oefenboek','Schrijf op: rijtjes mons, sanguis, en extra moeilijk: frater (fratris)','Leren: woordjes 7A en rijtjes groep 3'],min:35},
  {id:'2026-11-05-wi',d:'2026-11-05',vak:'wiskunde',t:'Afmaken H3.4, begin H3.5',wat:['Leren blz 80','Maken: 58, 59, 60','Lezen blz 84','Bekijken uitlegfilmpje H3.5','Maken: 62, 63, 64, 65, 66'],min:45,app:'wi',opg:[58,59,60,62,63,64,65,66]},

  /* vrijdag 6 november */
  {id:'2026-11-06-fa',d:'2026-11-06',vak:'frans',t:'Exercices digitaal via Noordhoff',wat:['Maak digitaal via Noordhoff:','Exercice 5e','Exercice 7b','Exercice 8a'],min:20},

  /* volgende week (nog niet compleet) */
  {id:'2026-11-09-ak',d:'2026-11-09',vak:'aardrijkskunde',t:'Taak 4: §3.4 Suezkanaal en Rode Zee',wat:['Bestudeer LB H3.4','Maak WB H3.4 opdracht 2, 3, 5, 6, 8','# Begrippen in je schrift (met betekenis) en leren','Containers, geopolitiek'],min:40,app:'ak',par:'3.4',opg:[2,3,5,6,8]},
  {id:'2026-11-11-ak',d:'2026-11-11',vak:'aardrijkskunde',t:'Taak 5: §3.5 Turkije',wat:['Bestudeer LB H3.5','Maak WB H3.5 opdracht 1, 2, 3, 5, 6','# Begrippen in je schrift (met betekenis) en leren','Opkomend land, middenklasse, ruimtelijke ongelijkheid, toeristen','# Woensdag 11-11 in de les','Controle huiswerk H3 en oefentoets H3'],min:40,app:'ak',par:'3.5',opg:[1,2,3,5,6]},
  {id:'2026-11-09-na',d:'2026-11-09',vak:'natuurkunde',t:'L5.03',wat:['Maken ✎ o.11-14','Maken ★ o.12-15'],min:25,app:'na',par:'5.1',opg:[11,12,13,14,15]},
  {id:'2026-11-10-na',d:'2026-11-10',vak:'natuurkunde',t:'L5.04',wat:['Uitwerken practicum H5P12 IJking thermometer'],min:30}
];
