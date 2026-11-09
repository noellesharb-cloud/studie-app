/* Grieks, Argo Thema 2, les 9 Argonautentocht. Alleen vragen en uitleg; de manier van oefenen staat in oefen/engine.js.
   Bron: woordenlijst les 9 (vet = leerwoord), Hulpboek p. 106 (persoonlijk voornaamwoord), benoemblad tekst 9.
   Tekst: [n:...] nominativus (rood), [g:...] genitivus (groen), [d:...] dativus (geel), [a:...] accusativus (blauw), zoals in haar schrift.
   De modelvertaling is door Claude gemaakt en kan afwijken van die van de docent. */
window.VAKDATA=window.VAKDATA||{};
VAKDATA.gr=(()=>{
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=(arr,n,not)=>shuf(arr.filter(x=>x!==not&&!(Array.isArray(not)&&not.includes(x)))).slice(0,n);
const G=s=>`<span class="gr">${s}</span>`;
const CN={n:'nom',g:'gen',d:'dat',a:'acc'},CL={n:'nominativus',g:'genitivus',d:'dativus',a:'accusativus'};
const kleur=s=>G(s.replace(/\[([ngda]):([^\]]+)\]/g,(m,k,t)=>`<span class="mk c-${CN[k]}" title="${CL[k]}">${t}</span>`));
const kaal=s=>s.replace(/\[[ngda]:([^\]]+)\]/g,'$1');
const LEGENDA='<span class="mk c-nom">nom</span> <span class="mk c-gen">gen</span> <span class="mk c-dat">dat</span> <span class="mk c-acc">acc</span>';

/* ---------- woorden les 9 (vet in de lijst = leerwoord) ---------- */
const W=[
 ['οὗ','waar',1,'voegwoord'],['βασιλεύω','koning zijn',0],['ὁ γέρων, γέροντος','oude man',1],['σοφός','verstandig, wijs',0],
 ['ἐπερωτᾶν ἐθέλω + acc','willen raadplegen',0],['περί + gen','over, om',1],['τείρω','kwellen',0],['ἡ δίκη','straf',1],
 ['αἱ Ἅρπυιαι','Harpijen',0],['τὸ δεῖπνον','maaltijd',1],['ἁρπάζω','roven',1],['παρασκευάζω','klaarmaken',1],
 ['ἥκω','komen, gekomen zijn',1],['διώκω','achtervolgen, wegjagen',1],['οὐκέτι','niet meer',1,'bijwoord'],['συμβουλεύω','advies geven',0],
 ['ἐπικίνδυνοι','gevaarlijk',0],['αἱ Συμπληγάδες','Symplegaden',0],['ὑψηλαί','hoog',0],['ἑκατέρωθεν τοῦ πορθμοῦ','aan weerszijden van de zeeëngte',0],
 ['συγκροτέω','tegen elkaar klappen',0],['διαφθείρω','vernietigen, bederven',1],['δεῖ πέμπειν','je moet sturen',0],['ἡ πέλεια','duif',0],
 ['(δεῖ) ἐρέσσειν','je moet roeien',0],['ἐν ᾧ','in de tijd dat, terwijl',0],['ἀποχωρέω','zich terugtrekken',0],['πέμπω','zenden, sturen',1],
 ['κατά + acc','(verspreid) over; overeenkomstig',1],['ὁ λόγος','woord, verhaal',1],['θάττων','sneller, te snel',0],['μέρος τι (acc)','een stukje',0],
 ['τὸ ὀρροπυγίον','staart (van een vogel)',0],['ἐρέσσω','roeien',0],['αὖθις','opnieuw',1,'bijwoord'],['ἡ πρύμνη','achtersteven',0],
 ['ἡ ὁδός','weg; tocht',1],['ἐλευθέρα','vrij',0]
];
const WL=W.filter(w=>w[2]),WO=W.filter(w=>!w[2]);

/* ---------- persoonlijk voornaamwoord (Hulpboek p. 106) ---------- */
const PV=[
 ['ἐγώ','1 ev nom','ik'],['ἐμοῦ / μου','1 ev gen','(van) mij'],['ἐμοί / μοι','1 ev dat','(voor/aan) mij'],['ἐμέ / με','1 ev acc','mij / me'],
 ['ἡμεῖς','1 mv nom','wij'],['ἡμῶν','1 mv gen','(van) ons'],['ἡμῖν','1 mv dat','(voor/aan) ons'],['ἡμᾶς','1 mv acc','ons'],
 ['σύ','2 ev nom','jij / u'],['σοῦ','2 ev gen','(van) jou'],['σοί','2 ev dat','(voor/aan) jou'],['σέ','2 ev acc','jou / je / u'],
 ['ὑμεῖς','2 mv nom','jullie'],['ὑμῶν','2 mv gen','(van) jullie'],['ὑμῖν','2 mv dat','(voor/aan) jullie'],['ὑμᾶς','2 mv acc','jullie'],
 ['αὐτοῦ','3 ev gen mnl/onz','(van) hem; ervan'],['αὐτῷ','3 ev dat mnl/onz','(voor/aan) hem; ervoor'],['αὐτόν','3 ev acc mnl','hem'],['αὐτό','3 ev acc onz','het'],
 ['αὐτῆς','3 ev gen vrl','(van) haar'],['αὐτῇ','3 ev dat vrl','(voor/aan) haar'],['αὐτήν','3 ev acc vrl','haar'],
 ['αὐτῶν','3 mv gen (alle geslachten)','(van) hen; ervan'],['αὐτοῖς','3 mv dat mnl/onz','(voor/aan) hen; ervoor'],['αὐταῖς','3 mv dat vrl','(voor/aan) hen'],
 ['αὐτούς','3 mv acc mnl','hen'],['αὐτάς','3 mv acc vrl','hen'],['αὐτά','3 mv acc onz','ze']
];

/* ---------- tekst 9 ΣΤΟΛΟΣ, regel voor regel ---------- */
const T=[
 '[n:Οἱ Ἀργοναῦται] ἐν [d:τῇ χώρᾳ] εἰσίν, οὗ βασιλεύει',
 '[n:Φινεύς], [n:γέρων μάλα σοφός]. Ἐπερωτᾶν γὰρ',
 '[a:αὐτὸν] ἐθέλουσι περὶ [g:τῶν] [g:τοῦ στόλου] [g:κινδύνων].',
 '[n:Ὁ δὲ Φινεὺς] βοηθεῖν [d:αὐτοῖς] ἐθέλει, εἰ πρῶτον',
 '[n:οἱ ἥρωες] βοηθεῖν ἐθέλουσιν [d:αὐτῷ]. Τείρει γὰρ',
 '[a:αὐτὸν] [n:δίκη] [g:τῶν θεῶν]· [n:αἱ Ἅρπυιαι] [a:τὰ δεῖπνα]',
 '[g:αὐτοῦ] ἀεὶ ἁρπάζουσιν. [n:Οἱ] οὖν [n:Ἀργοναῦται] [d:τῷ]',
 '[d:γέροντι] [a:δεῖπνον] παρασκευάζουσιν. Ἥκουσι μὲν',
 'ἤδη [n:αἱ Ἅρπυιαι], [a:τὸ δὲ δεῖπνον] οὐχ ἁρπάζουσιν.',
 '[n:Οἱ γὰρ Βορεάδαι] διώκουσιν [a:αὐτάς]. Τέλος δ’ [n:αἱ]',
 '[n:Ἅρπυιαι] [d:φόβῳ] ἐκ [g:τῆς χώρας] φεύγουσιν. Οὕτω',
 'δ’ [n:ἡ] [g:τῶν θεῶν] [n:δίκη] [a:τὸν γέροντα] οὐκέτι τείρει.',
 'Ἔπειτα δ’ [n:ὁ Φινεὺς] [d:τῷ Ἰάσονι] συμβουλεύει·',
 '«[n:Ἐπικίνδυνοί] εἰσι [d:σοὶ] καὶ [d:τοῖς φίλοις] [g:σου]',
 '[n:αἱ Συμπληγάδες], [n:ὑψηλαὶ πέτραι] ἑκατέρωθεν',
 '[g:τοῦ πορθμοῦ]. Ἀεὶ γὰρ συγκροτοῦσι καὶ οὕτω',
 'διαφθείρουσι [a:τὰ πλοῖα]. Πρῶτον μὲν δεῖ πέμπειν',
 '[a:πέλειαν] δι’ [g:αὐτῶν], ἔπειτα δ’ ὡς τάχιστα',
 'ἐρέσσειν, ἐν ᾧ ἀποχωροῦσιν [n:αἱ πέτραι].»',
 '[n:Οἱ δ’ Ἀργοναῦται] πρῶτον μὲν [a:πέλειαν] πέμπουσι',
 'διὰ [g:τῶν Συμπληγάδων] κατὰ [a:τοὺς] [g:τοῦ γέροντος]',
 '[a:λόγους]. Συγκροτοῦσι δ’ [n:αἱ Συμπληγάδες], ἀλλὰ',
 '[n:θάττων] ἐστὶν [n:ἡ πέλεια]· [a:μέρος τι] μόνον [g:τοῦ]',
 '[g:ὀρροπυγίου] διαφθείρουσιν [n:αἱ πέτραι]. Αὐτίκα',
 'δ’ [n:οἱ ἥρωες] ὡς τάχιστα ἐρέσσουσιν. Αὖθις μὲν',
 '[n:αἱ πέτραι] συγκροτοῦσιν, μόνον δὲ [a:μέρος τι]',
 '[g:τῆς πρύμνης] διαφθείρουσιν· [n:θάττων] γάρ ἐστιν',
 '[n:ἡ Ἀργώ]. Οὕτω δ’ ἤδη [n:ἡ] εἰς [a:τὴν Κολχίδα] [n:ὁδὸς]',
 '[n:ἐλευθέρα] ἐστὶ [d:τῷ πλοίῳ] καὶ [d:τοῖς ἥρωσιν].'
];
const r=(a,b)=>T.slice(a-1,b).join(' ');                 /* regels a t/m b, met kleuren */
/* zinnen met modelvertaling: [van, tot, Grieks (met kleuren), vertaling, kernpunten, tip] */
const Z=[
 [1,3,'[n:Οἱ Ἀργοναῦται] ἐν [d:τῇ χώρᾳ] εἰσίν, οὗ βασιλεύει [n:Φινεύς], [n:γέρων μάλα σοφός].',
  'De Argonauten zijn in het gebied waar Phineus koning is, een zeer wijze oude man.',
  ['ἐν τῇ χώρᾳ εἰσίν = zijn in het gebied (land)','οὗ βασιλεύει Φινεύς = waar Phineus koning is','γέρων μάλα σοφός = een zeer wijze oude man (bijstelling bij Phineus)'],
  'οὗ is hier een voegwoord: "waar". μάλα = zeer.'],
 [2,3,'Ἐπερωτᾶν γὰρ [a:αὐτὸν] ἐθέλουσι περὶ [g:τῶν] [g:τοῦ στόλου] [g:κινδύνων].',
  'Want zij willen hem raadplegen over de gevaren van de expeditie.',
  ['γάρ = want','ἐπερωτᾶν ἐθέλουσι = zij willen raadplegen','αὐτόν = hem (Phineus)','περὶ τῶν τοῦ στόλου κινδύνων = over de gevaren van de expeditie'],
  'τῶν … κινδύνων hoort bij elkaar (gen mv, na περί). τοῦ στόλου staat ertussen: "van de expeditie".'],
 [4,5,'[n:Ὁ δὲ Φινεὺς] βοηθεῖν [d:αὐτοῖς] ἐθέλει, εἰ πρῶτον [n:οἱ ἥρωες] βοηθεῖν ἐθέλουσιν [d:αὐτῷ].',
  'En Phineus wil hen helpen, als de helden eerst hem willen helpen.',
  ['βοηθεῖν αὐτοῖς ἐθέλει = hij wil hen helpen (βοηθέω + dat)','εἰ πρῶτον = als eerst','οἱ ἥρωες … αὐτῷ = de helden … hem'],
  'βοηθέω heeft een dativus bij zich: αὐτοῖς en αὐτῷ vertaal je gewoon met "hen" en "hem".'],
 [5,7,'Τείρει γὰρ [a:αὐτὸν] [n:δίκη] [g:τῶν θεῶν]· [n:αἱ Ἅρπυιαι] [a:τὰ δεῖπνα] [g:αὐτοῦ] ἀεὶ ἁρπάζουσιν.',
  'Want een straf van de goden kwelt hem: de Harpijen roven altijd zijn maaltijden.',
  ['τείρει … δίκη τῶν θεῶν = een straf van de goden kwelt','αὐτόν = hem (lijdend voorwerp)','αἱ Ἅρπυιαι … ἁρπάζουσιν = de Harpijen roven','τὰ δεῖπνα αὐτοῦ = zijn maaltijden (letterlijk: de maaltijden van hem)'],
  'Het onderwerp δίκη staat ná het werkwoord. Zoek eerst de nominativus.'],
 [7,8,'[n:Οἱ] οὖν [n:Ἀργοναῦται] [d:τῷ γέροντι] [a:δεῖπνον] παρασκευάζουσιν.',
  'De Argonauten maken dus een maaltijd klaar voor de oude man.',
  ['οὖν = dus','τῷ γέροντι = voor de oude man (dat)','δεῖπνον παρασκευάζουσιν = maken een maaltijd klaar'],
  'οὖν staat op de tweede plaats in de zin, maar vertaal je vooraan of na het werkwoord.'],
 [8,9,'Ἥκουσι μὲν ἤδη [n:αἱ Ἅρπυιαι], [a:τὸ δὲ δεῖπνον] οὐχ ἁρπάζουσιν.',
  'De Harpijen zijn al gekomen, maar de maaltijd roven ze niet.',
  ['ἥκουσι = zijn gekomen','ἤδη = al','μέν … δέ = … maar …','οὐχ ἁρπάζουσιν = ze roven niet'],
  'οὐχ is οὐ vóór een woord met een spiritus asper (ἁ).'],
 [10,10,'[n:Οἱ γὰρ Βορεάδαι] διώκουσιν [a:αὐτάς].',
  'Want de Boreaden jagen hen weg.',
  ['οἱ Βορεάδαι = de Boreaden (onderwerp)','διώκουσιν = jagen weg / achtervolgen','αὐτάς = hen (de Harpijen: vrouwelijk mv acc)'],
  'αὐτάς is vrouwelijk, dus het gaat over de Harpijen, niet over de helden.'],
 [10,11,'Τέλος δ’ [n:αἱ Ἅρπυιαι] [d:φόβῳ] ἐκ [g:τῆς χώρας] φεύγουσιν.',
  'Ten slotte vluchten de Harpijen uit angst uit het gebied.',
  ['τέλος = ten slotte','φόβῳ = uit angst (dat)','ἐκ τῆς χώρας = uit het gebied (ἐκ + gen)','φεύγουσιν = vluchten'],''],
 [11,12,'Οὕτω δ’ [n:ἡ] [g:τῶν θεῶν] [n:δίκη] [a:τὸν γέροντα] οὐκέτι τείρει.',
  'Zo kwelt de straf van de goden de oude man niet meer.',
  ['οὕτω = zo','ἡ τῶν θεῶν δίκη = de straf van de goden','τὸν γέροντα = de oude man (acc)','οὐκέτι τείρει = kwelt niet meer'],
  'ἡ … δίκη hoort bij elkaar; τῶν θεῶν staat ertussen.'],
 [13,13,'Ἔπειτα δ’ [n:ὁ Φινεὺς] [d:τῷ Ἰάσονι] συμβουλεύει·',
  'Daarna geeft Phineus Iason advies:',
  ['ἔπειτα = daarna','τῷ Ἰάσονι = aan Iason (dat)','συμβουλεύει = geeft advies'],''],
 [14,16,'«[n:Ἐπικίνδυνοί] εἰσι [d:σοὶ] καὶ [d:τοῖς φίλοις] [g:σου] [n:αἱ Συμπληγάδες], [n:ὑψηλαὶ πέτραι] ἑκατέρωθεν [g:τοῦ πορθμοῦ].',
  '"Gevaarlijk voor jou en je vrienden zijn de Symplegaden, hoge rotsen aan weerszijden van de zeeëngte.',
  ['ἐπικίνδυνοί εἰσι = (ze) zijn gevaarlijk','σοὶ καὶ τοῖς φίλοις σου = voor jou en je vrienden (dat)','αἱ Συμπληγάδες = de Symplegaden (onderwerp)','ὑψηλαὶ πέτραι ἑκατέρωθεν τοῦ πορθμοῦ = hoge rotsen aan weerszijden van de zeeëngte'],
  'Het onderwerp αἱ Συμπληγάδες komt pas in r. 15. Begin je vertaling gerust met "De Symplegaden zijn …".'],
 [16,17,'Ἀεὶ γὰρ συγκροτοῦσι καὶ οὕτω διαφθείρουσι [a:τὰ πλοῖα].',
  'Want ze klappen altijd tegen elkaar en vernietigen zo de schepen.',
  ['ἀεί = altijd','συγκροτοῦσι = ze klappen tegen elkaar','οὕτω διαφθείρουσι = zo vernietigen ze','τὰ πλοῖα = de schepen (acc mv)'],''],
 [17,19,'Πρῶτον μὲν δεῖ πέμπειν [a:πέλειαν] δι’ [g:αὐτῶν], ἔπειτα δ’ ὡς τάχιστα ἐρέσσειν, ἐν ᾧ ἀποχωροῦσιν [n:αἱ πέτραι].»',
  'Eerst moet je een duif tussen hen door sturen, daarna moet je zo snel mogelijk roeien, terwijl de rotsen zich terugtrekken."',
  ['πρῶτον μὲν … ἔπειτα δέ = eerst … daarna','δεῖ πέμπειν πέλειαν = je moet een duif sturen','δι’ αὐτῶν = tussen hen (de rotsen) door','ὡς τάχιστα ἐρέσσειν = zo snel mogelijk roeien','ἐν ᾧ ἀποχωροῦσιν αἱ πέτραι = terwijl de rotsen zich terugtrekken'],
  'δι’ = διά vóór een klinker; διά + gen = door. αὐτῶν = de rotsen.'],
 [20,22,'[n:Οἱ δ’ Ἀργοναῦται] πρῶτον μὲν [a:πέλειαν] πέμπουσι διὰ [g:τῶν Συμπληγάδων] κατὰ [a:τοὺς] [g:τοῦ γέροντος] [a:λόγους].',
  'De Argonauten sturen eerst een duif door de Symplegaden, overeenkomstig de woorden van de oude man.',
  ['πέλειαν πέμπουσι = sturen een duif','διὰ τῶν Συμπληγάδων = door de Symplegaden','κατὰ τοὺς … λόγους = overeenkomstig de woorden','τοῦ γέροντος = van de oude man'],
  'κατά + acc = overeenkomstig. τοὺς … λόγους hoort bij elkaar.'],
 [22,24,'Συγκροτοῦσι δ’ [n:αἱ Συμπληγάδες], ἀλλὰ [n:θάττων] ἐστὶν [n:ἡ πέλεια]· [a:μέρος τι] μόνον [g:τοῦ ὀρροπυγίου] διαφθείρουσιν [n:αἱ πέτραι].',
  'De Symplegaden klappen tegen elkaar, maar de duif is sneller: de rotsen vernietigen alleen een stukje van de staart.',
  ['συγκροτοῦσι αἱ Συμπληγάδες = de Symplegaden klappen tegen elkaar','θάττων ἐστὶν ἡ πέλεια = de duif is sneller','μέρος τι μόνον τοῦ ὀρροπυγίου = alleen een stukje van de staart','διαφθείρουσιν αἱ πέτραι = vernietigen de rotsen'],''],
 [24,25,'Αὐτίκα δ’ [n:οἱ ἥρωες] ὡς τάχιστα ἐρέσσουσιν.',
  'Meteen roeien de helden zo snel mogelijk.',
  ['αὐτίκα = meteen','οἱ ἥρωες = de helden','ὡς τάχιστα ἐρέσσουσιν = roeien zo snel mogelijk'],
  'αὐτίκα staat niet in de lijst van les 9: het betekent "meteen".'],
 [25,28,'Αὖθις μὲν [n:αἱ πέτραι] συγκροτοῦσιν, μόνον δὲ [a:μέρος τι] [g:τῆς πρύμνης] διαφθείρουσιν· [n:θάττων] γάρ ἐστιν [n:ἡ Ἀργώ].',
  'De rotsen klappen opnieuw tegen elkaar, maar ze vernietigen alleen een stukje van de achtersteven; want de Argo is sneller.',
  ['αὖθις = opnieuw','μέν … δέ = … maar …','μέρος τι τῆς πρύμνης = een stukje van de achtersteven','θάττων γάρ ἐστιν ἡ Ἀργώ = want de Argo is sneller'],''],
 [28,29,'Οὕτω δ’ ἤδη [n:ἡ] εἰς [a:τὴν Κολχίδα] [n:ὁδὸς] [n:ἐλευθέρα] ἐστὶ [d:τῷ πλοίῳ] καὶ [d:τοῖς ἥρωσιν].',
  'Zo is de weg naar Kolchis nu vrij voor het schip en de helden.',
  ['ἡ εἰς τὴν Κολχίδα ὁδός = de weg naar Kolchis','ἐλευθέρα ἐστί = is vrij','τῷ πλοίῳ καὶ τοῖς ἥρωσιν = voor het schip en de helden (dat)'],
  'ἡ … ὁδός hoort bij elkaar; εἰς τὴν Κολχίδα staat ertussen.']
];
const secVan=(a)=>a<=12?'t9a':a<=19?'t9b':'t9c';

/* ---------- onderdelen ---------- */
const tekstRegels=(a,b)=>[['Kleuren zoals in je schrift',LEGENDA,'Werkwoorden onderstreep je zelf in je benoemblad.']].concat(
  T.slice(a-1,b).map((t,i)=>['r. '+(a+i),kleur(t),'']));
const SECS=[
 {id:'w9l',par:'9w',nr:'1',name:'Leerwoorden les 9',c:'--c1',sub:'De vetgedrukte woorden uit de lijst',
  rules:WL.map(w=>[G(w[0]),w[1],w[3]||''])},
 {id:'w9o',par:'9w',nr:'2',name:'Overige woorden les 9',c:'--c2',sub:'Niet vet, wel nodig voor de tekst',
  rules:WO.map(w=>[G(w[0]),w[1],''])},
 {id:'pv12',par:'pv',nr:'3',name:'1e en 2e persoon',c:'--c3',sub:'HB p. 106 · ἐγώ, σύ, ἡμεῖς, ὑμεῖς',
  rules:[['Eerste persoon: wie over zichzelf spreekt','ἐγώ – ἐμοῦ/μου – ἐμοί/μοι – ἐμέ/με · ἡμεῖς – ἡμῶν – ἡμῖν – ἡμᾶς','ik, (van) mij, (voor/aan) mij, mij · wij, (van) ons, (voor/aan) ons, ons'],
   ['Tweede persoon: tegen wie je praat','σύ – σοῦ – σοί – σέ · ὑμεῖς – ὑμῶν – ὑμῖν – ὑμᾶς','jij, (van) jou, (voor/aan) jou, jou · jullie'],
   ['Herken het aan de uitgang','-ῶν = gen mv · -ῖν = dat mv · -ᾶς = acc mv','ἡμ- = wij/ons, ὑμ- = jullie']].map(x=>[x[0],G(x[1]),x[2]])},
 {id:'pv3',par:'pv',nr:'4',name:'3e persoon αὐτοῦ, αὐτῆς',c:'--c4',sub:'HB p. 106 · hem, haar, het, hen',
  rules:[['Mannelijk','— – αὐτοῦ – αὐτῷ – αὐτόν · — – αὐτῶν – αὐτοῖς – αὐτούς','[hij], (van) hem, (voor/aan) hem, hem · [zij], (van) hen, (voor/aan) hen, hen'],
   ['Vrouwelijk','— – αὐτῆς – αὐτῇ – αὐτήν · — – αὐτῶν – αὐταῖς – αὐτάς','[zij], (van) haar, (voor/aan) haar, haar · [zij], (van) hen, (voor/aan) hen, hen'],
   ['Onzijdig','— – αὐτοῦ – αὐτῷ – αὐτό · — – αὐτῶν – αὐτοῖς – αὐτά','[het], ervan, ervoor, het · [ze], ervan, ervoor, ze'],
   ['Let op 1: geen nominativus in de 3e persoon','λέγει = hij zegt','Het onderwerp zit al in de persoonsvorm.'],
   ['Let op 2: onzijdig na een voorzetsel','δι’ αὐτῶν = ertussendoor','Niet "door het", maar "erdoor", "erachter", "erboven".']].map(x=>[x[0],G(x[1]),x[2]])},
 {id:'t9a',par:'9t',nr:'5',name:'Tekst 9 r. 1–12',c:'--c5',sub:'Phineus en de Harpijen',rules:tekstRegels(1,12)},
 {id:'t9b',par:'9t',nr:'6',name:'Tekst 9 r. 13–19',c:'--c6',sub:'Het advies van Phineus',rules:tekstRegels(13,19)},
 {id:'t9c',par:'9t',nr:'7',name:'Tekst 9 r. 20–29',c:'--c1',sub:'Door de Symplegaden',rules:tekstRegels(20,29)},
 {id:'mix9',par:'mix',nr:'?',name:'Les 9 door elkaar',c:'--c2',sub:'Woorden, voornaamwoorden en tekst',
  rules:[['Zoek eerst de persoonsvorm en de nominativus','',''],['Kijk bij elk naamwoord naar de kleur: welke naamval?','',''],['Voorzetsel? Kijk welke naamval erbij hoort','περί + gen · ἐκ + gen · διά + gen · κατά + acc · εἰς + acc · ἐν + dat','']]}
];

/* "Snap het" bij de tekst: per zin de vertaling (eerst zelf proberen!) */
const SNAP={};
['t9a','t9b','t9c'].forEach(s=>{SNAP[s]=Z.filter(z=>secVan(z[0])===s).map(z=>[`r. ${z[0]}${z[1]>z[0]?'–'+z[1]:''}: ${kaal(z[2]).slice(0,60)}${kaal(z[2]).length>60?'…':''}`,`${kleur(z[2])}<br><b>${z[3]}</b>${z[5]?'<br><span class="why">'+z[5]+'</span>':''}`])});
SNAP.pv3=[['Waarom is αὐτάς in r. 10 de Harpijen?','αὐτάς is vrouwelijk meervoud accusativus. De Harpijen zijn vrouwelijk (αἱ Ἅρπυιαι), de Boreaden mannelijk. Dus: de Boreaden jagen <b>hen</b> (de Harpijen) weg.'],
 ['Waarom is αὐτοῦ in r. 7 "zijn"?','αὐτοῦ is genitivus: "van hem". τὰ δεῖπνα αὐτοῦ = de maaltijden van hem = <b>zijn</b> maaltijden. Het gaat over Phineus.']];
function snapHtml(id){return (SNAP[id]||[]).map(x=>`<details class="snap"><summary>${x[0]}</summary><div>${x[1]}</div></details>`).join('')}

/* ---------- vragen ---------- */
const Q=[];
/* woorden: Grieks → betekenis, en als variant andersom */
W.forEach((w,i)=>{const pool=W.filter(x=>x!==w);const o=w[2]?'w9l':'w9o';
  Q.push({id:'w'+i,o,nr:w[2]?'Leerwoord':'Woord',q:`Wat betekent ${G(w[0])}?`,a:w[1],f:pick(pool.map(x=>x[1]),3,w[1]),
    u:`${G(w[0])} = ${w[1]}${w[3]?' ('+w[3]+')':''}.`,
    v:{q:`Hoe zeg je in het Grieks: <b>${w[1]}</b>?`,a:G(w[0]),f:pick(pool.map(x=>G(x[0])),3,G(w[0]))}})});
/* persoonlijk voornaamwoord: vorm → betekenis, variant: betekenis → vorm */
PV.forEach((p,i)=>{const pool=PV.filter(x=>x!==p);const o=p[1].startsWith('3')?'pv3':'pv12';
  Q.push({id:'pv'+i,o,nr:'HB p. 106',q:`Wat is ${G(p[0])}?`,a:`${p[1]}: ${p[2]}`,f:pick(pool.map(x=>`${x[1]}: ${x[2]}`),3),
    u:`${G(p[0])} = ${p[1]}, vertaal met "${p[2]}".`,
    v:{q:`Welke vorm is <b>${p[1]}</b> (${p[2]})?`,a:G(p[0]),f:pick(pool.map(x=>G(x[0])),3)}})});
/* voornaamwoorden in de tekst: naar wie verwijst het? */
const PT=[
 ['pt1','t9a','r. 3',`${G('Ἐπερωτᾶν γὰρ αὐτὸν ἐθέλουσι')}<br>Naar wie verwijst ${G('αὐτόν')}?`,'Naar Phineus',['Naar de Argonauten','Naar Iason','Naar de Harpijen'],'αὐτόν = 3 ev mnl acc: "hem". De Argonauten willen Phineus raadplegen.','Wie willen de Argonauten raadplegen?'],
 ['pt2','t9a','r. 4',`${G('Ὁ δὲ Φινεὺς βοηθεῖν αὐτοῖς ἐθέλει')}<br>Naar wie verwijst ${G('αὐτοῖς')}?`,'Naar de Argonauten',['Naar de goden','Naar de Harpijen','Naar de Boreaden'],'αὐτοῖς = 3 mv mnl dat: "hen". Phineus wil de Argonauten helpen.','Wie wil Phineus helpen?'],
 ['pt3','t9a','r. 5',`${G('οἱ ἥρωες βοηθεῖν ἐθέλουσιν αὐτῷ')}<br>Hoe vertaal je ${G('αὐτῷ')} hier?`,'hem (Phineus)',['hen (de helden)','haar','het schip'],'αὐτῷ = 3 ev mnl dat. Bij βοηθέω + dat vertaal je gewoon "hem helpen".','Wie moeten de helden eerst helpen?'],
 ['pt4','t9a','r. 6–7',`${G('αἱ Ἅρπυιαι τὰ δεῖπνα αὐτοῦ ἀεὶ ἁρπάζουσιν')}<br>Hoe vertaal je ${G('τὰ δεῖπνα αὐτοῦ')}?`,'zijn maaltijden',['hun maaltijden','de maaltijden voor hem','de maaltijd'],'αὐτοῦ = gen: "van hem" = zijn. τὰ δεῖπνα is meervoud.','Wiens maaltijden roven de Harpijen?'],
 ['pt5','t9a','r. 10',`${G('Οἱ γὰρ Βορεάδαι διώκουσιν αὐτάς')}<br>Wie worden er weggejaagd?`,'De Harpijen',['De Argonauten','De Boreaden zelf','Phineus en Iason'],'αὐτάς is vrouwelijk meervoud acc. Alleen de Harpijen zijn vrouwelijk.','Naar wie verwijst αὐτάς?'],
 ['pt6','t9b','r. 14',`${G('Ἐπικίνδυνοί εἰσι σοὶ καὶ τοῖς φίλοις σου')}<br>Welke vormen zijn ${G('σοί')} en ${G('σου')}?`,'σοί = 2 ev dat (voor jou), σου = 2 ev gen (van jou)',['σοί = 2 ev nom (jij), σου = 2 ev acc (jou)','allebei 2 ev dat','σοί = 1 ev dat (voor mij), σου = 1 ev gen (van mij)'],'σοί is dativus: "voor jou". σου is genitivus: "van jou", dus "je vrienden".','Hoe vertaal je σοὶ καὶ τοῖς φίλοις σου?'],
 ['pt7','t9b','r. 18',`${G('δεῖ πέμπειν πέλειαν δι’ αὐτῶν')}<br>Naar wat verwijst ${G('αὐτῶν')}?`,'Naar de rotsen (de Symplegaden)',['Naar de Argonauten','Naar de schepen','Naar de duiven'],'αὐτῶν = 3 mv gen. Je stuurt de duif tussen de rotsen door: δι’ αὐτῶν = tussen hen door.','Waartussen moet de duif door?']
];
PT.forEach(([id,o,nr,q,a,f,u,vq])=>Q.push({id,o,nr,q,a,f,u,v:{q:vq}}));
/* benoemen: welke naamval en welk getal? */
const NV=['nom ev','gen ev','dat ev','acc ev','nom mv','gen mv','dat mv','acc mv'];
const BN=[
 ['bn1','t9a','r. 1','τῇ χώρᾳ','dat ev','ἐν + dat: in het gebied.'],
 ['bn2','t9a','r. 3','τῶν … κινδύνων','gen mv','περί + gen: over de gevaren.'],
 ['bn3','t9a','r. 3','τοῦ στόλου','gen ev','"van de expeditie".'],
 ['bn4','t9a','r. 6','τὰ δεῖπνα','acc mv','Lijdend voorwerp bij ἁρπάζουσιν. Onzijdig: nom en acc mv zijn gelijk; hier is het acc.'],
 ['bn5','t9a','r. 6','τῶν θεῶν','gen mv','"van de goden".'],
 ['bn6','t9a','r. 7–8','τῷ γέροντι','dat ev','"voor de oude man". ὁ γέρων, γέροντος is groep 3.'],
 ['bn7','t9a','r. 11','φόβῳ','dat ev','"uit angst": de dativus geeft hier de reden.'],
 ['bn8','t9a','r. 12','τὸν γέροντα','acc ev','Lijdend voorwerp bij τείρει.'],
 ['bn9','t9b','r. 13','τῷ Ἰάσονι','dat ev','συμβουλεύω + dat: Iason advies geven.'],
 ['bn10','t9b','r. 16','τοῦ πορθμοῦ','gen ev','ἑκατέρωθεν + gen: aan weerszijden van de zeeëngte.'],
 ['bn11','t9b','r. 17','τὰ πλοῖα','acc mv','Lijdend voorwerp bij διαφθείρουσι.'],
 ['bn12','t9c','r. 21','τῶν Συμπληγάδων','gen mv','διά + gen: door de Symplegaden.'],
 ['bn13','t9c','r. 21–22','τοὺς … λόγους','acc mv','κατά + acc: overeenkomstig de woorden.'],
 ['bn14','t9c','r. 24','τοῦ ὀρροπυγίου','gen ev','"van de staart".'],
 ['bn15','t9c','r. 27','τῆς πρύμνης','gen ev','"van de achtersteven".'],
 ['bn16','t9c','r. 28','ἡ … ὁδός','nom ev','Onderwerp: de weg is vrij.'],
 ['bn17','t9c','r. 29','τοῖς ἥρωσιν','dat mv','"voor de helden". ὁ ἥρως, ἥρωος is groep 3.'],
 ['bn18','t9c','r. 29','τῷ πλοίῳ','dat ev','"voor het schip".']
];
BN.forEach(([id,o,nr,f0,a,u])=>Q.push({id,o,nr:'Benoemen '+nr,q:`Benoem ${G(f0)}: welke naamval en welk getal?`,a,f:pick(NV,3,a),u,
  v:{q:`${nr}: in welke naamval en welk getal staat ${G(f0)}?`}}));
/* inhoud en grammatica van de tekst */
const IQ=[
 ['iq1','t9a','r. 1–2','Wie is Phineus?','Een zeer wijze oude man die koning is van het gebied',['Een Argonaut','De vader van Iason','Een god die de Harpijen stuurt'],'οὗ βασιλεύει Φινεύς, γέρων μάλα σοφός. In het boek: koning van Thrakië, blind gemaakt door Zeus.','Wat voor iemand is Phineus volgens r. 1–2?'],
 ['iq2','t9a','r. 2–3','Waarom gaan de Argonauten naar Phineus?','Ze willen hem raadplegen over de gevaren van de expeditie',['Ze willen hem verslaan in een bokswedstrijd','Ze willen eten bij hem halen','Ze willen het Gulden Vlies van hem krijgen'],'Ἐπερωτᾶν γὰρ αὐτὸν ἐθέλουσι περὶ τῶν τοῦ στόλου κινδύνων.','Wat willen de Argonauten van Phineus?'],
 ['iq3','t9a','r. 4–5','Onder welke voorwaarde wil Phineus helpen?','Als de helden eerst hem helpen',['Als ze hem goud geven','Als ze hem meenemen op de Argo','Als ze een offer brengen aan Zeus'],'εἰ πρῶτον οἱ ἥρωες βοηθεῖν ἐθέλουσιν αὐτῷ: als de helden eerst hem willen helpen.','Wat moeten de helden eerst doen?'],
 ['iq4','t9a','r. 5–7','Wat is de straf van de goden?','De Harpijen roven altijd zijn maaltijden',['Hij is blind en kan niet lopen','Hij mag het land niet uit','De rotsen klappen tegen zijn schip'],'αἱ Ἅρπυιαι τὰ δεῖπνα αὐτοῦ ἀεὶ ἁρπάζουσιν. (Dat hij blind is, staat in de inleiding, niet in de tekst.)','Hoe kwellen de goden Phineus?'],
 ['iq5','t9a','r. 10','Wie jagen de Harpijen weg?','De Boreaden, de gevleugelde zonen van de Noordenwind',['Herakles','Orpheus met zijn lied','Atalanta met haar boog'],'Οἱ γὰρ Βορεάδαι διώκουσιν αὐτάς. Uit tekst 8 weet je: de Boreaden zijn gevleugeld.','Welke Argonauten zorgen dat de Harpijen vluchten?'],
 ['iq6','t9a','r. 9','Waarom staat er οὐχ en niet οὐ in r. 9?','Omdat het volgende woord met een spiritus asper begint (ἁ)',['Omdat het werkwoord meervoud is','Omdat het een vraag is','Omdat οὐχ "niet meer" betekent'],'οὐ wordt οὐκ vóór een klinker en οὐχ vóór een klinker met spiritus asper: οὐχ ἁρπάζουσιν.','Wanneer schrijf je οὐχ?'],
 ['iq7','t9b','r. 14–16','Wat zijn de Symplegaden?','Hoge rotsen aan weerszijden van een zeeëngte',['Zeemonsters','Vogels met scherpe klauwen','Twee eilanden waar de vrouwen wonen'],'αἱ Συμπληγάδες, ὑψηλαὶ πέτραι ἑκατέρωθεν τοῦ πορθμοῦ.','Hoe beschrijft Phineus de Symplegaden?'],
 ['iq8','t9b','r. 16–17','Waarom zijn de Symplegaden gevaarlijk?','Ze klappen steeds tegen elkaar en vernietigen zo de schepen',['Er wonen Harpijen op','Er staat een draak die nooit slaapt','Er is geen wind'],'Ἀεὶ γὰρ συγκροτοῦσι καὶ οὕτω διαφθείρουσι τὰ πλοῖα.','Wat doen de rotsen met schepen?'],
 ['iq9','t9b','r. 17–19','Wat is het advies van Phineus?','Eerst een duif ertussendoor sturen, dan zo snel mogelijk roeien terwijl de rotsen terugwijken',['Om de rotsen heen varen','Wachten tot de rotsen stilstaan','De rotsen kapotslaan met de boeg'],'Πρῶτον μὲν δεῖ πέμπειν πέλειαν δι’ αὐτῶν, ἔπειτα δ’ ὡς τάχιστα ἐρέσσειν, ἐν ᾧ ἀποχωροῦσιν αἱ πέτραι.','Welke twee stappen moeten de Argonauten volgens Phineus zetten?'],
 ['iq10','t9b','r. 19','Wat betekent ἐν ᾧ in r. 19?','terwijl, in de tijd dat',['in het water','waar','omdat'],'ἐν ᾧ = in de tijd dat, terwijl (woordenlijst r. 19).','Hoe vertaal je ἐν ᾧ ἀποχωροῦσιν αἱ πέτραι?'],
 ['iq11','t9c','r. 22–24','Wat gebeurt er met de duif?','De rotsen vernietigen alleen een stukje van haar staart',['Ze wordt verpletterd','Ze vliegt terug naar de Argo','Ze komt er zonder schade doorheen'],'μέρος τι μόνον τοῦ ὀρροπυγίου διαφθείρουσιν αἱ πέτραι.','Hoe loopt het af met de duif?'],
 ['iq12','t9c','r. 25–28','Wat gebeurt er met de Argo?','Alleen een stukje van de achtersteven wordt vernietigd',['Het schip zinkt','De boeg breekt af','Er gebeurt niets met het schip'],'μόνον δὲ μέρος τι τῆς πρύμνης διαφθείρουσιν· θάττων γάρ ἐστιν ἡ Ἀργώ.','Hoeveel schade heeft de Argo?'],
 ['iq13','t9c','r. 23 en 27','Wat betekent θάττων?','sneller',['langzamer','hoger','sterker'],'θάττων = sneller, te snel. De duif en later de Argo zijn sneller dan de rotsen.','Waarom halen de duif en de Argo het?'],
 ['iq14','t9c','r. 21','Wat betekent κατά in κατὰ τοὺς τοῦ γέροντος λόγους?','overeenkomstig',['tegen','zonder','naar'],'κατά + acc = overeenkomstig: volgens de woorden van de oude man.','Hoe vertaal je κατὰ τοὺς … λόγους?'],
 ['iq15','t9c','r. 28–29','Hoe eindigt tekst 9?','De weg naar Kolchis is vrij voor het schip en de helden',['De Argonauten keren terug naar Iolkos','Phineus gaat mee op de Argo','De Argo komt aan in Kolchis'],'Οὕτω δ’ ἤδη ἡ εἰς τὴν Κολχίδα ὁδὸς ἐλευθέρα ἐστὶ τῷ πλοίῳ καὶ τοῖς ἥρωσιν.','Wat is er na de Symplegaden vrij?'],
 ['iq16','mix9','Grammatica','Welk voorzetsel heeft een accusativus bij zich?','κατά (overeenkomstig)',['περί (over)','ἐκ (uit)','διά (door)'],'κατά + acc, εἰς + acc. περί, ἐκ en διά hebben in tekst 9 een genitivus.','Bij welk voorzetsel staat in tekst 9 een accusativus?'],
 ['iq17','mix9','Grammatica','βοηθέω en συμβουλεύω hebben dezelfde naamval bij zich. Welke?','dativus',['accusativus','genitivus','nominativus'],'βοηθεῖν αὐτοῖς (r. 4), τῷ Ἰάσονι συμβουλεύει (r. 13): allebei dativus.','Welke naamval hoort bij βοηθέω?'],
 ['iq18','mix9','Inleiding','Wie houdt de Argonauten op Lemnos tegen om te blijven?','Herakles',['Iason','Phineus','Polydeukes'],'Herakles is aan boord gebleven, gaat aan land, scheldt zijn reismakkers uit en jaagt ze terug de boot in.','Wie redt de expeditie op Lemnos?'],
 ['iq19','mix9','Inleiding','Waarom heeft Zeus Phineus blind gemaakt?','Omdat hij de toekomst aan de hele mensheid bekendmaakte',['Omdat hij de Argonauten hielp','Omdat hij Zeus uitdaagde tot een bokswedstrijd','Omdat hij Aphrodite vergat te offeren'],'Phineus kreeg van Apollo de gave de toekomst te voorspellen, maar maakte die aan iedereen bekend. Dat was niet de bedoeling.','Wat deed Phineus fout volgens de inleiding?'],
 ['iq20','mix9','Inleiding','Welke Argonaut wint de bokswedstrijd?','Polydeukes, de zoon van Zeus',['Herakles','Kastor','Iason'],'Polydeukes is snel en behendig en verslaat de koning die iedereen doodslaat.','Wie verslaat de bokskoning?']
];
IQ.forEach(([id,o,nr,q,a,f,u,vq])=>Q.push({id,o,nr,q:/^[A-ZΑ-Ω]/.test(q)?q.replace(/([\u0370-\u03FF\u1F00-\u1FFF][\u0370-\u03FF\u1F00-\u1FFF’ ]*[\u0370-\u03FF\u1F00-\u1FFF])/g,m=>G(m)):q,a,f,u,v:{q:vq}}));
/* zelf vertalen: open vraag met kernpunten en modelvertaling */
Z.forEach((z,i)=>Q.push({id:'vt'+i,o:secVan(z[0]),nr:`Vertalen r. ${z[0]}${z[1]>z[0]?'–'+z[1]:''}`,t:'open',
  q:`Vertaal in je schrift:<br>${G(kaal(z[2]))}`,k:z[4],vb:[z[3]+(z[5]?' ('+z[5]+')':'')],
  v:{q:`Vertaal nog een keer, nu met de kleurhulp:<br>${kleur(z[2])}`}}));

/* ---------- Hulpboek les 9, opdrachten (HB p. 38–39) ----------
   Wat nog niet in een huiswerk zat, ziet ze niet bij vrij oefenen (oefen/gate.js). Opdracht 28–30 en 34 staan in gr2.js. */
const HBSECS=[
 {id:'o31',hb:31,par:'hb9',nr:'31',name:'Opdracht 31: persoonlijk voornaamwoord',c:'--c3',sub:'HB p. 38 · vormen uit r. 1–12: getal, geslacht, functie, naar wie',
  rules:[['Zoek in r. 1–12 de vormen van αὐτός','αὐτόν (r. 3, 6), αὐτοῖς (r. 4), αὐτῷ (r. 5), αὐτοῦ (r. 7), αὐτάς (r. 10)','Vier verschillende is genoeg voor 31a.'],
   ['Getal en geslacht','Kijk naar de uitgang: -ον/-ου/-ῳ/-οις mnl, -ας/-ης vrl','HB p. 106'],
   ['Functie uit de naamval','acc = lijdend voorwerp · dat = meewerkend voorwerp · gen bij een zelfstandig naamwoord = bijvoeglijke bepaling ("zijn")','Bij βοηθέω staat een dativus: "hen helpen".'],
   ['Naar wie verwijst het?','Zoek iemand in de zinnen ervoor met hetzelfde getal en geslacht','αὐτάς is vrouwelijk mv: dat kunnen alleen de Harpijen zijn.']].map(x=>[x[0],G(x[1]),x[2]])},
 {id:'o32',hb:32,par:'hb9',nr:'32',name:'Opdracht 32: juist of onjuist',c:'--c4',sub:'HB p. 38 · eerste alinea (r. 1–12), beweringen A–F',
  rules:[['Lees eerst de alinea globaal','Wie zijn er? Wat willen ze? Wat gebeurt er?',''],
   ['Zoek bij elke bewering het stukje tekst','Noteer in je schrift waarom de bewering juist of onjuist is','Gebruik ook de inleiding van les 9 en de woordenlijst.']]},
 {id:'o33',hb:33,par:'hb9',nr:'33',name:'Opdracht 33: het advies van Phineus',c:'--c5',sub:'HB p. 39 · tweede alinea (r. 13–19)',
  rules:[['Het gevaar','Ἀεὶ γὰρ συγκροτοῦσι καὶ οὕτω διαφθείρουσι τὰ πλοῖα (r. 16–17)','ze klappen altijd tegen elkaar en vernietigen zo de schepen'],
   ['Twee stappen','πρῶτον μέν … ἔπειτα δέ (r. 17–18)','eerst … daarna']].map(x=>[x[0],G(x[1]),x[2]])},
 {id:'o35',hb:35,par:'hb9',nr:'35',name:'Opdracht 35: waar lagen de Symplegaden?',c:'--c6',sub:'HB p. 39 · kaart in het tekstboek p. 10–11',
  rules:[['Volg de rode stippellijn op de kaart','Iolkos → Lemnos → Hellespont → Bosporus → Zwarte Zee → Kolchis',''],
   ['Zoek een zeeëngte','πορθμός = zeeëngte (r. 16)','Op de route zijn er twee: de Hellespont en de Bosporus.'],
   ['Welke van de twee?','Na Phineus (Thrakië) en vlak vóór de Zwarte Zee','De Symplegaden zijn de laatste hindernis: daarna is de weg naar Kolchis vrij (r. 28–29).']].map(x=>[x[0],G(x[1]),x[2]])}
];
const HBQ=[];
/* 31a: open */
HBQ.push({id:'h31a',hb:31,o:'o31',nr:'Opdracht 31a',t:'open',q:'Noteer vier verschillende persoonlijk voornaamwoorden uit r. 1–12.',
  k:['Vier verschillende vormen, bijvoorbeeld:',G('αὐτόν (r. 3)'),G('αὐτοῖς (r. 4)'),G('αὐτῷ (r. 5)'),G('αὐτοῦ (r. 7)'),G('αὐτάς (r. 10)')],
  vb:['αὐτόν (r. 3), αὐτοῖς (r. 4), αὐτῷ (r. 5), αὐτοῦ (r. 7) en αὐτάς (r. 10). Vier daarvan is genoeg.'],
  v:{q:'Welke vormen van het persoonlijk voornaamwoord staan er in r. 1–12? Noem er vier.'}});
/* 31b en 31c per vorm: [id, vorm, regel, citaat, getal/geslacht/functie, uitleg, verwijst naar, fout-verwijzingen] */
const HB31=[
 ['a','αὐτόν','r. 3','Ἐπερωτᾶν γὰρ αὐτὸν ἐθέλουσι','ev, mnl, lijdend voorwerp','acc ev mnl: lijdend voorwerp bij ἐπερωτᾶν (hem raadplegen).','Phineus',['de Argonauten','Iason','de Harpijen']],
 ['b','αὐτοῖς','r. 4','Ὁ δὲ Φινεὺς βοηθεῖν αὐτοῖς ἐθέλει','mv, mnl, meewerkend voorwerp','dat mv mnl. Bij βοηθέω hoort een dativus: "hen helpen". Je docent noemt dit misschien gewoon "voorwerp bij βοηθέω".','de Argonauten',['de goden','de Harpijen','de Boreaden']],
 ['c','αὐτῷ','r. 5','οἱ ἥρωες βοηθεῖν ἐθέλουσιν αὐτῷ','ev, mnl, meewerkend voorwerp','dat ev mnl, weer bij βοηθεῖν: "hem helpen".','Phineus',['de helden','Iason','de straf']],
 ['d','αὐτοῦ','r. 7','αἱ Ἅρπυιαι τὰ δεῖπνα αὐτοῦ ἀεὶ ἁρπάζουσιν','ev, mnl, bijvoeglijke bepaling','gen ev mnl bij τὰ δεῖπνα: "de maaltijden van hem" = zijn maaltijden.','Phineus',['de Harpijen','de Argonauten','Zeus']],
 ['e','αὐτάς','r. 10','Οἱ γὰρ Βορεάδαι διώκουσιν αὐτάς','mv, vrl, lijdend voorwerp','acc mv vrl: lijdend voorwerp bij διώκουσιν.','de Harpijen',['de Boreaden','de Argonauten','de goden']]
];
const FUN=['ev, mnl, lijdend voorwerp','mv, mnl, meewerkend voorwerp','ev, mnl, meewerkend voorwerp','ev, mnl, bijvoeglijke bepaling','mv, vrl, lijdend voorwerp','ev, vrl, lijdend voorwerp','mv, mnl, onderwerp','ev, onz, lijdend voorwerp'];
HB31.forEach(([k,f0,nr,zin,a,u,naar,fn])=>{
  HBQ.push({id:'h31b'+k,hb:31,o:'o31',nr:'Opdracht 31b',q:`${G(zin)} (${nr})<br>Welk getal, welk geslacht en welke functie heeft ${G(f0)}?`,a,f:pick(FUN,3,a),u:`${G(f0)}: ${u}`,
    tv:`${G(zin)} (${nr})<br>Noteer getal, geslacht en functie van ${G(f0)}.`,tvVrij:true,
    v:{q:`${nr}: ${G(f0)} in ${G(zin)}. Getal, geslacht en functie?`}});
  HBQ.push({id:'h31c'+k,hb:31,o:'o31',nr:'Opdracht 31c',q:`${G(zin)} (${nr})<br>Naar wie verwijst ${G(f0)}?`,a:naar.charAt(0).toUpperCase()+naar.slice(1),f:fn.map(x=>x.charAt(0).toUpperCase()+x.slice(1)),
    u:`${G(f0)} verwijst naar ${naar}. ${u}`,v:{q:`Wie wordt bedoeld met ${G(f0)} in ${nr}?`}})});
/* 32: juist of onjuist */
const HB32=[
 ['A','Phineus kan de Argonauten vertellen welke gevaren hen te wachten staan omdat hij de streek goed kent.','Onjuist','Hij is γέρων μάλα σοφός (r. 2) en heeft van Apollo de gave om de toekomst te zien (inleiding). Daarom weet hij welke gevaren komen, niet omdat hij de streek kent.'],
 ['B','Phineus wil de Argonauten direct helpen.','Onjuist','εἰ πρῶτον οἱ ἥρωες βοηθεῖν ἐθέλουσιν αὐτῷ (r. 4–5): eerst moeten de helden hém helpen.'],
 ['C','Phineus is een oude en wijze koning.','Juist','οὗ βασιλεύει Φινεύς, γέρων μάλα σοφός (r. 1–2): hij is koning, een zeer wijze oude man.'],
 ['D','Phineus wordt door Zeus gestraft omdat hij bij Iason de toekomst heeft voorspeld.','Onjuist','Hij wordt gestraft (δίκη τῶν θεῶν, r. 6) omdat hij de toekomst aan de hele mensheid bekendmaakte (inleiding). Iason heeft hij nog niets voorspeld: het advies komt pas in r. 13.'],
 ['E','Het lukt de Harpijen om de maaltijd die de Argonauten hebben neergezet te stelen.','Onjuist','τὸ δὲ δεῖπνον οὐχ ἁρπάζουσιν (r. 9): de maaltijd roven ze niet.'],
 ['F','Het lukt de Boreaden om de Harpijen te verjagen.','Juist','Οἱ γὰρ Βορεάδαι διώκουσιν αὐτάς (r. 10) en de Harpijen vluchten uit het gebied (r. 11).']
];
HB32.forEach(([l,b,a,u])=>HBQ.push({id:'h32'+l,hb:32,o:'o32',nr:'Opdracht 32'+l,q:`Bewering ${l}: <i>${b}</i><br>Juist of onjuist?`,a,f:[a==='Juist'?'Onjuist':'Juist'],
  u:u.replace(/([Ͱ-Ͽἀ-῿][Ͱ-Ͽἀ-῿’ ]*[Ͱ-Ͽἀ-῿])/g,m=>G(m))+' Schrijf in je schrift ook waarom.',
  v:{q:`Klopt dit? <i>${b}</i>`}}));
/* 33 */
HBQ.push({id:'h33a',hb:33,o:'o33',nr:'Opdracht 33a',t:'open',q:'Beschrijf in eigen woorden wat het gevaar is van de Symplegaden.',
  k:['Het zijn hoge rotsen aan weerszijden van een zeeëngte (r. 15–16)','Ze klappen steeds tegen elkaar (r. 16)','Zo vernietigen ze de schepen die ertussendoor willen (r. 16–17)'],
  vb:['De Symplegaden zijn hoge rotsen aan weerszijden van een zeeëngte. Ze klappen steeds tegen elkaar en vernietigen zo de schepen die erdoorheen varen.'],
  v:{q:'Waarom is het gevaarlijk om tussen de Symplegaden door te varen? Leg uit in eigen woorden.'}});
HBQ.push({id:'h33b',hb:33,o:'o33',nr:'Opdracht 33b',q:'Het advies van Phineus bestaat uit twee stappen. Welke tekstelementen geven de volgorde aan?',a:G('πρῶτον μέν (r. 17) en ἔπειτα δέ (r. 18)'),
  f:[G('ἀεὶ γάρ (r. 16) en οὕτω (r. 16)'),G('ὡς τάχιστα (r. 18) en ἐν ᾧ (r. 19)'),G('ἔπειτα δ’ (r. 13) en ἀεί (r. 16)')],
  u:`${G('πρῶτον μέν')} = eerst, ${G('ἔπειτα δέ')} = daarna.`,tv:'Het advies van Phineus bestaat uit twee stappen. Noteer de tekstelementen die de volgorde aangeven.',tvVrij:true,
  v:{q:'Met welke woorden geeft Phineus aan wat de Argonauten eerst en daarna moeten doen?'}});
HBQ.push({id:'h33c',hb:33,o:'o33',nr:'Opdracht 33c',t:'open',q:'Beschrijf in eigen woorden hoe het advies van Phineus luidt.',
  k:['Eerst een duif tussen de rotsen door sturen (r. 17–18)','Daarna zo snel mogelijk roeien (r. 18–19)','Terwijl de rotsen weer uit elkaar gaan (r. 19)'],
  vb:['Eerst moeten ze een duif tussen de rotsen door laten vliegen. Daarna moeten ze zo snel mogelijk roeien, terwijl de rotsen weer uit elkaar gaan.'],
  v:{q:'Wat moeten de Argonauten volgens Phineus doen bij de Symplegaden? Leg uit in eigen woorden.'}});
/* 35 */
HBQ.push({id:'h35',hb:35,o:'o35',nr:'Opdracht 35',t:'open',q:'Bekijk de reis van de Argo op de kaart op p. 10–11 van het tekstboek. Waar zouden de Symplegaden volgens de mythe kunnen liggen? Leg je antwoord uit.',
  k:['Bij de Bosporus (bij het huidige Istanbul)','Dat is een zeeëngte (πορθμός, r. 16): de rotsen staan aan weerszijden ervan','De Bosporus is de toegang tot de Zwarte Zee; daarna is de weg naar Kolchis vrij (r. 28–29). Niet de Hellespont: die ligt eerder op de route, vóór Phineus'],
  vb:['Bij de Bosporus. Op de kaart vaart de Argo daar de Zwarte Zee in, op weg naar Kolchis. Het is een smalle zeeëngte, en in de tekst staan de Symplegaden aan weerszijden van een zeeëngte. Na de Symplegaden is de weg naar Kolchis vrij, dus het moet de laatste zeeëngte vóór de Zwarte Zee zijn: de Bosporus, niet de Hellespont.'],
  v:{q:'Op de kaart: door welke zeeëngte moet de Argo om bij Kolchis te komen? Daar lagen volgens de mythe de Symplegaden. Leg uit.'}});
HBSECS.forEach(x=>SECS.splice(SECS.length-1,0,x));
HBQ.forEach(q=>Q.push(q));

/* ---------- woorden les 8 (tekstboek p. 45; vet = leerwoord) ---------- */
const W8=[
 ['ἡ Ἑλλάς, Ἑλλάδος','Griekenland',1],['συνάγω','bijeenbrengen',0],['σύν + dat','met',1],['αὐτοῦ, αὐτῆς, αὐτοῦ','(gen/dat/acc) hij, zij, het',1],
 ['ὁ στόλος','reis, expeditie',1],['ποιέω','maken, doen',1],['ὁ ναυπηγός','scheepsbouwer',0],['ὁ λιμήν, λιμένος','haven',1],
 ['τὸ πλοῖον','vaartuig, schip',1],['θαυμάζω','bewonderen',1],['ἐγώ / ἐμοῦ / ἐμοί / ἐμέ','ik, mij',1],['ἀρέσκω + dat','in de smaak vallen bij',0],
 ['σύ / σοῦ / σοί / σέ','jij, jou, u',1],['πρέπει + inf','het is passend om',0],['πάρεστι / πάρεισι','is / zijn aanwezig',0],['ὦ','o (aanhef, meestal niet vertalen)',1],
 ['ὁ φίλος','vriend',1],['ὁ κίνδυνος','gevaar',1],['πολλοί','vele',0],['ἡμεῖς / ἡμῶν / ἡμῖν / ἡμᾶς','wij, ons',1],
 ['μένω + acc','te wachten staan',0],['οὐδείς (nom)','niemand',0],['ὑμεῖς / ὑμῶν / ὑμῖν / ὑμᾶς','jullie',1],['ἄπεστιν','(hij/zij) is afwezig',0],
 ['ὑπόπτεροι','gevleugelde',0],['ὅτι','omdat',1],['ἡ ᾠδή','lied, gezang',0],['θέλγω','betoveren',0],
 ['συνοδεύω (+ dat)','meereizen (met)',0],['τὸ τόξον','(pijl en) boog',0],['ὑπερβάλλω','overtreffen',0],['ἀσπάσιοι ἔστε','wees welkom',0],
 ['πάντες ἄλλοι','alle andere',0],['ἐπί, ἐπ’, ἐφ’ + dat','aan, bij',1],['ἡ σοφία','(vak)kennis, wijsheid',1],['οἴσει','(hij/zij) zal brengen',0],
 ['ἡ θάλαττα','zee',1],['ἡ Κολχίς, Κολχίδος','Kolchis',0],['τὸ χρύσεον κῴδιον','het Gulden Vlies',0],['δεῖ ἡμᾶς + inf','we moeten …',0],
 ['μεγάλην','grote',0],['ἡ τιμή','eer, aanzien',1]
];
{
  SECS.unshift({id:'w8l',par:'8w',nr:'8',name:'Leerwoorden les 8',c:'--c5',sub:'Herhalen · de vetgedrukte woorden van tekstboek p. 45',rules:W8.filter(w=>w[2]).map(w=>[G(w[0]),w[1],''])},
    {id:'w8o',par:'8w',nr:'8+',name:'Overige woorden les 8',c:'--c6',sub:'Niet vet, wel in de tekst',rules:W8.filter(w=>!w[2]).map(w=>[G(w[0]),w[1],''])});
  W8.forEach((w,i)=>{const pool=W8.filter(x=>x!==w),o=w[2]?'w8l':'w8o';
    Q.push({id:'l8w'+i,o,nr:w[2]?'Leerwoord les 8':'Woord les 8',q:`Wat betekent ${G(w[0])}?`,a:w[1],f:pick(pool.map(x=>x[1]),3,w[1]),u:`${G(w[0])} = ${w[1]}.`,
      v:{q:`Hoe zeg je in het Grieks: <b>${w[1]}</b>?`,a:G(w[0]),f:pick(pool.map(x=>G(x[0])),3,G(w[0]))}})});
}

return {woorden:{taal:'Grieks',alle:W.map((w,i)=>[w[0],w[1],'w'+i]).filter((x,i)=>W[i][2]).concat(W8.map((w,i)=>[w[0],w[1],'l8w'+i]).filter((x,i)=>W8[i][2])),get lijst(){const b=window.Gate?Gate.beh('gr'):null;return this.alle.filter(x=>!b||b.has(x[2])).map(x=>[x[0],x[1]])}},gate:true,id:'gr',naam:'Grieks',afk:'GR',kop:'Les 9 Argonautentocht',SECS,SNAP,BEG:W.map(w=>[w[0],w[1],'9w']).concat(W8.map(w=>[w[0],w[1],'8w'])),Q,snapHtml,
  leer:['8w','9w','pv','9t','hb9'],reken:false,toetsvorm:true,volledig:false,snapInVraag:false,
  PN:{'8w':'Les 8 · Woorden (herhalen)','9w':'Les 9 · Woorden','pv':'Persoonlijk voornaamwoord (HB p. 106)','9t':'Tekst 9 ΣΤΟΛΟΣ','hb9':'Hulpboek les 9 · opdrachten','mix':'Door elkaar'}};
})();
