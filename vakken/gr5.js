/* Grieks, aanvulling (23 nov 2026): grammatica-overzicht Thema 2 Olympos (HB p. 97–109), herhalen voor de toets van 10 dec.
   6.1 verbuigen en verbuigingsgroepen (ergon 1–4) · 6.2 genitivus (ergon 5–8) · 7.1 dativus als meewerkend voorwerp of
   bijwoordelijke bepaling (ergon 9–11) · 7.2 overzicht dativus en dativus mv groep 3 (ergon 12–14) · 8.1 persoonlijk
   voornaamwoord (ergon 15–16; de rijtjes zelf staan al in gr.js, onderdeel pv) · 8.2 overzicht naamvallen en functies (ergon 17–19).
   Grieks overgenomen van foto's; antwoorden, modelvertalingen en uitleg zijn van Claude en kunnen afwijken van die van de docent.
   Thema 2 is al behandeld: huiswerk.js zet par 'th2' open (beh). */
(()=>{
const V=VAKDATA.gr;if(!V)return;
const G=s=>`<span class="gr">${s}</span>`;
const GR=/([Ͱ-Ͽἀ-῿][Ͱ-Ͽἀ-῿’' ,]*[Ͱ-Ͽἀ-῿])/g;
const g=s=>String(s).replace(GR,m=>G(m));
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const SECS=[],Q=[];
const sec=(id,nr,name,c,sub,rules)=>SECS.push({id,par:'th2',nr,name,c,sub,rules:rules.map(r=>[g(r[0]),g(r[1]||''),g(r[2]||'')])});
const fx=y=>Array.isArray(y)?[g(y[0]),g(y[1])]:g(y);
const mk=(id,o,nr,q,a,f,u,v,x)=>Q.push(Object.assign({id,o,nr,q:g(q),a:g(a),f:f.map(fx),u:g(u),v:v.a?{q:g(v.q),a:g(v.a),f:v.f.map(fx)}:{q:g(v.q)}},x||{}));
const op=(id,o,nr,q,k,vb,vq)=>Q.push({id,o,nr,t:'open',q:g(q),k:k.map(g),vb:[g(vb)],v:{q:g(vq)}});
/* vertaalvraag: zin, modelvertaling, kernpunten */
const vt=(id,o,nr,erg,zin,nl,k)=>op(id,o,nr,`${erg}: vertaal in je schrift:<br>${zin}`,k,nl,`${erg}: vertaal nog een keer:<br>${zin}`);
/* naamval en functie: items [woord, naamval, functie]; foute opties maken door telkens één onderdeel te veranderen */
const WR={'onderwerp':'lijdend voorwerp','lijdend voorwerp':'onderwerp','meewerkend voorwerp':'bijwoordelijke bepaling','bijwoordelijke bepaling':'meewerkend voorwerp',
 'bijvoeglijke bepaling':'meewerkend voorwerp','bij een voorzetsel':'bijvoeglijke bepaling','bij een werkwoord':'lijdend voorwerp','naamwoordelijk deel':'lijdend voorwerp'};
const NW={nom:'acc',acc:'nom',gen:'dat',dat:'gen'};
const basis=f=>f.replace(/ \(.*$/,'');
const itTxt=it=>it[1]?`${it[0]} (${it[1]}, ${it[2]})`:`${it[0]} (${it[2]})`;
const lijst=its=>its.map(itTxt).join(' · ');
function nvFout(its){const uit=[];
 its.forEach((it,i)=>{const a=its.map(x=>x.slice());a[i][2]=WR[basis(it[2])]||'bijvoeglijke bepaling';uit.push(lijst(a))});
 its.forEach((it,i)=>{if(!it[1])return;const a=its.map(x=>x.slice());a[i][1]=NW[it[1]];uit.push(lijst(a))});
 if(its.length>1){const a=its.map(x=>x.slice());const t=a[0][2];a[0][2]=a[1][2];a[1][2]=t;if(a[0][2]!==a[1][2])uit.push(lijst(a))}
 const goed=lijst(its);let r=shuf([...new Set(uit)].filter(x=>x!==goed));
 /* te weinig foute opties (één woord zonder naamval): vul aan met andere functies */
 const ALLE=['onderwerp','lijdend voorwerp','meewerkend voorwerp','bijvoeglijke bepaling','bijwoordelijke bepaling','bij een voorzetsel','bij een werkwoord'];
 shuf(ALLE).forEach(fn=>{if(r.length>=3)return;const a=its.map(x=>x.slice());if(basis(a[0][2])===fn)return;a[0][2]=fn;const t=lijst(a);if(t!==goed&&!r.includes(t))r.push(t)});
 return r.slice(0,3)}
const NVUITLEG='Naamval → functie: nom = onderwerp of naamwoordelijk deel; gen = bijvoeglijke bepaling (van), bij een voorzetsel of werkwoord (+ gen); dat = meewerkend voorwerp (aan/voor), bijwoordelijke bepaling (met/door), bij een voorzetsel of werkwoord (+ dat); acc = lijdend voorwerp of bij een voorzetsel.';
function nvVraag(id,o,nr,erg,zin,its,extra){
 mk(id,o,nr,`${erg}: wat zijn de naamval en de functie van ${its.map(x=>x[0]).join(', ')}?<br>${zin}`,lijst(its),nvFout(its),
  `${lijst(its)}.${extra?' '+extra:''}<div class="why">${NVUITLEG}</div>`,
  {q:`${erg}: bepaal naamval en functie van ${its.map(x=>x[0]).join(', ')}:<br>${zin}`},
  {mc:1,tv:g(`${erg}: noteer de naamval en de functie van ${its.map(x=>x[0]).join(', ')}:<br>${zin}`),tvVrij:true})}

/* =================== 6.1 VERBUIGEN EN VERBUIGINGSGROEPEN (p. 98–99) =================== */
const R={
 'μάχη':['ἡ μάχη','τῆς μάχης','τῇ μάχῃ','τὴν μάχην','αἱ μάχαι','τῶν μαχῶν','ταῖς μάχαις','τὰς μάχας'],
 'θεά':['ἡ θεά','τῆς θεᾶς','τῇ θεᾷ','τὴν θεάν','αἱ θεαί','τῶν θεῶν','ταῖς θεαῖς','τὰς θεάς'],
 'ναύτης':['ὁ ναύτης','τοῦ ναύτου','τῷ ναύτῃ','τὸν ναύτην','οἱ ναῦται','τῶν ναυτῶν','τοῖς ναύταις','τοὺς ναύτας'],
 'θεός':['ὁ θεός','τοῦ θεοῦ','τῷ θεῷ','τὸν θεόν','οἱ θεοί','τῶν θεῶν','τοῖς θεοῖς','τοὺς θεούς'],
 'τέκνον':['τὸ τέκνον','τοῦ τέκνου','τῷ τέκνῳ','τὸ τέκνον','τὰ τέκνα','τῶν τέκνων','τοῖς τέκνοις','τὰ τέκνα'],
 'παῖς':['ὁ/ἡ παῖς','τοῦ/τῆς παιδός','τῷ/τῇ παιδί','τὸν/τὴν παῖδα','οἱ/αἱ παῖδες','τῶν παίδων','τοῖς/ταῖς παισί(ν)','τοὺς/τὰς παῖδας'],
 'πρᾶγμα':['τὸ πρᾶγμα','τοῦ πράγματος','τῷ πράγματι','τὸ πρᾶγμα','τὰ πράγματα','τῶν πραγμάτων','τοῖς πράγμασι(ν)','τὰ πράγματα']};
const NV8=['nom ev','gen ev','dat ev','acc ev','nom mv','gen mv','dat mv','acc mv'];
sec('g61','6.1','Verbuigen en verbuigingsgroepen','--c1','HB p. 98–99 · de drie verbuigingsgroepen, ergon 1–4',[
 ['groep 1','μάχη (strijd) · θεά (godin) · ναύτης (zeeman)','ev: -η/-α, -ης/-ας, -ῃ/-ᾳ, -ην/-αν · mv: -αι, -ῶν, -αις, -ας'],
 ['groep 2','θεός (god) · τέκνον (kind, onzijdig)','ev: -ος, -ου, -ῳ, -ον · mv: -οι, -ων, -οις, -ους · onzijdig mv: -α'],
 ['groep 3','παῖς, παιδός (kind) · πρᾶγμα, πράγματος (zaak)','stam uit de genitivus (παιδ-, πραγματ-) + -ος, -ι, -α · mv -ες, -ων, -σι(ν), -ας'],
 ['Let op','Aan de nominativus zie je de stam niet','daarom staat bij groep 3 altijd de genitivus in de woordenlijst: παῖς, παιδός'],
 ...Object.keys(R).map(w=>[w,R[w].slice(0,4).join(', '),R[w].slice(4).join(', ')])]);
mk('T61a','g61','HB p. 98','Waarom staat bij een woord van verbuigingsgroep 3 in de woordenlijst ook de genitivus enkelvoud (παῖς, παιδός)?','Aan de nominativus zie je de stam niet; de genitivus laat de stam zien (παιδ-)',
 [['Omdat de genitivus het belangrijkst is','Het gaat om de stam.'],['Omdat groep 3 geen nominativus heeft','Die heeft hij wel: παῖς.'],['Omdat het altijd onzijdig is','παῖς kan mannelijk en vrouwelijk zijn.']],
 'Groep 3: stam = genitivus min -ος. παιδός → παιδ-, πράγματος → πραγματ-. Op die stam bouw je de andere vormen.',{q:'Wat is de stam van τὸ ὄνομα, ὀνόματος?',a:'ὀνοματ-',f:[['ὀνομ-','Haal alleen -ος van de genitivus af.'],['ὀνομα-','De τ hoort bij de stam.'],['ὀνόματος-','-ος is de uitgang.']]},{mc:1});
mk('T61b','g61','HB p. 98','Welke naamvallen zijn bij een onzijdig woord (τέκνον, πρᾶγμα) altijd gelijk?','nominativus en accusativus',[['genitivus en dativus','Die zijn verschillend: τέκνου, τέκνῳ.'],['nominativus en genitivus','τέκνον ≠ τέκνου.'],['dativus en accusativus','τέκνῳ ≠ τέκνον.']],
 'Onzijdig: nom = acc, in het enkelvoud én meervoud (τὸ τέκνον / τὰ τέκνα, τὸ πρᾶγμα / τὰ πράγματα). Het mv eindigt op -α.',{q:'τὰ τέκνα: welke naamval kan dit zijn?',a:'nominativus of accusativus meervoud',f:[['alleen nominativus meervoud','Onzijdig: nom en acc zijn gelijk.'],['genitivus meervoud','Dat is τῶν τέκνων.'],['nominativus enkelvoud','Dat is τὸ τέκνον.']]});
/* ergon 1: groep en voorbeeldrijtje */
const E1=[['ὁ οἶκος',2,'θεός'],['ἡ νίκη',1,'μάχη'],['τὸ ὕδωρ, ὕδατος',3,'πρᾶγμα'],['ἡ στρατιά',1,'θεά'],['ἡ νύξ, νυκτός',3,'παῖς'],
 ['ἡ ψυχή',1,'μάχη'],['ὁ πούς, ποδός',3,'παῖς'],['τὸ δεῖπνον',2,'τέκνον'],['ὁ φόβος',2,'θεός'],['ὁ δεσπότης, -ου',1,'ναύτης']];
const WAAROM={'μάχη':'vrouwelijk op -η','θεά':'vrouwelijk op -α','ναύτης':'mannelijk op -ης, gen -ου','θεός':'mannelijk op -ος','τέκνον':'onzijdig op -ον','παῖς':'genitivus op -ος met een andere stam, mannelijk of vrouwelijk','πρᾶγμα':'onzijdig, genitivus op -ματος'};
E1.forEach(([w,gr,vb],i)=>{const n=i+1,ander=shuf(Object.keys(R).filter(x=>x!==vb)).slice(0,3);
 mk('T1-'+n,'g61','1.'+n,`Ergon 1: bij welke verbuigingsgroep hoort ${w}, en volgens welk voorbeeldrijtje gaat het?`,`groep ${gr}, zoals ${vb}`,
  ander.map(x=>[`groep ${Object.keys(R).indexOf(x)<3?1:Object.keys(R).indexOf(x)<5?2:3}, zoals ${x}`,`${x}: ${WAAROM[x]}.`]),
  `${w}: <b>groep ${gr}</b>, verbogen zoals <b>${vb}</b> (${WAAROM[vb]}).`,{q:`Ergon 1: ${w} — welk rijtje uit p. 98 lijkt erop?`},{tvVrij:true})});
/* ergon 2: rijtjes met lidwoord */
const E2=[['τὸ θηρίον',['τὸ θηρίον','τοῦ θηρίου','τῷ θηρίῳ','τὸ θηρίον','τὰ θηρία','τῶν θηρίων','τοῖς θηρίοις','τὰ θηρία'],'groep 2, zoals τέκνον'],
 ['ἡ ἀσπίς, ἀσπίδος',['ἡ ἀσπίς','τῆς ἀσπίδος','τῇ ἀσπίδι','τὴν ἀσπίδα','αἱ ἀσπίδες','τῶν ἀσπίδων','ταῖς ἀσπίσι(ν)','τὰς ἀσπίδας'],'groep 3, stam ἀσπιδ-; dat mv: δ verdwijnt voor -σι'],
 ['ἡ τέχνη',['ἡ τέχνη','τῆς τέχνης','τῇ τέχνῃ','τὴν τέχνην','αἱ τέχναι','τῶν τεχνῶν','ταῖς τέχναις','τὰς τέχνας'],'groep 1, zoals μάχη'],
 ['ὁ ἵππος',['ὁ ἵππος','τοῦ ἵππου','τῷ ἵππῳ','τὸν ἵππον','οἱ ἵπποι','τῶν ἵππων','τοῖς ἵπποις','τοὺς ἵππους'],'groep 2, zoals θεός'],
 ['ἡ χώρα',['ἡ χώρα','τῆς χώρας','τῇ χώρᾳ','τὴν χώραν','αἱ χῶραι','τῶν χωρῶν','ταῖς χώραις','τὰς χώρας'],'groep 1, zoals θεά (-α blijft)'],
 ['τὸ δόρυ, δόρατος',['τὸ δόρυ','τοῦ δόρατος','τῷ δόρατι','τὸ δόρυ','τὰ δόρατα','τῶν δοράτων','τοῖς δόρασι(ν)','τὰ δόρατα'],'groep 3, stam δορατ-, zoals πρᾶγμα']];
E2.forEach(([w,f,u],i)=>op('T2-'+(i+1),'g61','2.'+(i+1),`Ergon 2: schrijf het volledige rijtje op (nom-gen-dat-acc, ev en mv) van het lidwoord en ${w}.`,
 f.map((x,j)=>NV8[j]+': '+x),`${u}. Ev: ${f.slice(0,4).join(', ')} · mv: ${f.slice(4).join(', ')}`,`Ergon 2: verbuig ${w} met lidwoord, enkelvoud en meervoud.`));
/* ergon 3: ontbrekende vorm */
const E3=[['κεφαλήν – κεφαλῇ – κεφαλάς – κεφαλῆς – κεφαλαί – κεφαλῶν – κεφαλή','κεφαλαῖς (dat mv)',['κεφαλῆς (gen ev)','κεφαλῇ (dat ev)','κεφαλάς (acc mv)'],'κεφαλή, groep 1 zoals μάχη: de dat mv κεφαλαῖς ontbreekt.'],
 ['ἐσθῆτος – ἐσθῆτας – ἐσθήτων – ἐσθῆτι – ἐσθής – ἐσθῆσι – ἐσθῆτες','ἐσθῆτα (acc ev)',['ἐσθῆτας (acc mv)','ἐσθῆτι (dat ev)','ἐσθῆτος (gen ev)'],'ἐσθής, ἐσθῆτος, groep 3: de acc ev ἐσθῆτα ontbreekt.'],
 ['δένδρον – δένδρῳ – δένδρων – δένδρον – δένδροις – δένδρα – δένδρα','δένδρου (gen ev)',['δένδρον (acc ev)','δένδρα (nom mv)','δένδροις (dat mv)'],'δένδρον, groep 2 onzijdig zoals τέκνον: de gen ev δένδρου ontbreekt. δένδρον en δένδρα staan er twee keer (nom = acc).'],
 ['πέτρας – πέτρα – πέτρᾳ – πετρῶν – πέτραι – πέτραν – πέτραις','πέτρας (gen ev of acc mv)',['πέτρᾳ (dat ev)','πέτραν (acc ev)','πετρῶν (gen mv)'],'πέτρα, groep 1 zoals θεά: πέτρας staat er maar één keer, maar is zowel gen ev als acc mv. Eén van die twee ontbreekt.'],
 ['φῶτα – φωτί – φώτων – φῶς – φωτός – φωσί – φῶς','φῶτα (nom of acc mv)',['φῶς (nom ev)','φωτί (dat ev)','φωτός (gen ev)'],'φῶς, φωτός, groep 3 onzijdig: φῶς staat er twee keer (nom = acc ev), φῶτα maar één keer (nom = acc mv).'],
 ['θρόνοι – θρόνος – θρόνων – θρόνους – θρόνου – θρόνον – θρόνοις','θρόνῳ (dat ev)',['θρόνου (gen ev)','θρόνοις (dat mv)','θρόνον (acc ev)'],'θρόνος, groep 2 zoals θεός: de dat ev θρόνῳ ontbreekt.']];
E3.forEach(([r,a,f,u],i)=>mk('T3-'+(i+1),'g61','3.'+(i+1),`Ergon 3: welke vorm ontbreekt in dit rijtje, en welke naamval en welk getal is hij?<br>${r}`,a,f.map(x=>[x,'Die vorm staat al in het rijtje.']),u,
 {q:`Ergon 3: maak het rijtje compleet en noem naamval en getal:<br>${r}`},{tvVrij:true}));
/* ergon 4 en 18: naamval, getal, groep */
const E4=[['τῆς γῆς','gen ev','1'],['γυναῖκες','nom mv','3'],['τοῦ ἡλίου','gen ev','2'],['δένδρα','nom of acc mv','2'],['τοῦ πυρός','gen ev','3'],['δόλος','nom ev','2'],
 ['ἔργων','gen mv','2'],['κεφαλήν','acc ev','1'],['ἀσπίδας','acc mv','3'],['τὸ ὄνομα','nom of acc ev','3'],['βίον','acc ev','2'],['τὰς τέχνας','acc mv','1']];
const E18=[['τιμήν','acc ev','1'],['λιμήν','nom ev','3'],['ὀνόματα','nom of acc mv','3'],['πέτρα','nom ev','1'],['ἄνδρα','acc ev','3'],['κινδύνους','acc mv','2'],
 ['δόλος','nom ev','2'],['γυναικός','gen ev','3'],['Ἑλλάδι','dat ev','3'],['δένδροις','dat mv','2'],['θρόνον','acc ev','2'],['δόρασιν','dat mv','3'],
 ['ἐσθῆτες','nom mv','3'],['ἀρετή','nom ev','1'],['ἡρώων','gen mv','3'],['χώρας','gen ev of acc mv','1'],['θυγατέρας','acc mv','3'],['σοφίᾳ','dat ev','1']];
const HINT={'λιμήν':'λιμήν, λιμένος','ἄνδρα':'ἀνήρ, ἀνδρός','Ἑλλάδι':'Ἑλλάς, Ἑλλάδος','θυγατέρας':'θυγάτηρ, θυγατρός','ἡρώων':'ἥρως, ἥρωος','ὀνόματα':'ὄνομα, ὀνόματος','δόρασιν':'δόρυ, δόρατος','ἐσθῆτες':'ἐσθής, ἐσθῆτος','γυναικός':'γυνή, γυναικός','γυναῖκες':'γυνή, γυναικός','τοῦ πυρός':'πῦρ, πυρός','ἀσπίδας':'ἀσπίς, ἀσπίδος','τὸ ὄνομα':'ὄνομα, ὀνόματος'};
const NVS=['nom ev','gen ev','dat ev','acc ev','nom mv','gen mv','dat mv','acc mv'];
function nggVraag(id,o,nr,erg,[w,nv,gr]){const goed=`${nv} · groep ${gr}`;
 const f=new Set();const nvs=shuf(NVS.filter(x=>!nv.includes(x)));
 f.add(`${nvs[0]} · groep ${gr}`);f.add(`${nv} · groep ${gr==='3'?'2':'3'}`);f.add(`${nvs[1]} · groep ${gr==='1'?'2':'1'}`);
 mk(id,o,nr,`${erg}: welke naamval, welk getal en welke verbuigingsgroep is ${w}?${nv.includes(' of ')?' (Twee mogelijkheden? Noem ze allebei.)':''}`,goed,[...f].map(x=>[x,'Kijk naar de uitgang (en het lidwoord).']),
  `${w} = <b>${nv}</b>, groep ${gr}${HINT[w]?' ('+HINT[w]+')':''}.`,{q:`${erg}: ${w} — naamval, getal en groep?`},{tvVrij:true})}
E4.forEach((x,i)=>nggVraag('T4-'+(i+1),'g61','4.'+(i+1),'Ergon 4',x));

/* =================== 6.2 GENITIVUS (p. 100–101) =================== */
sec('g62','6.2','Genitivus','--c2','HB p. 100–101 · bijvoeglijke bepaling, bij een voorzetsel, bij een werkwoord · ergon 5–8',[
 ['bijvoeglijke bepaling','Ὁ Ζεὺς υἱὸς τοῦ Κρόνου ἐστίν.','Zeus is een zoon van Kronos. Vertaal met ‘van …’'],
 ['Let op','ὁ τοῦ Κρόνου υἱός','letterlijk ‘de van Kronos zoon’ = de zoon van Kronos (gen tussen lidwoord en znw)'],
 ['bij een voorzetsel (+ gen)','Τὸ δένδρον ἐστὶν ἐγγὺς τοῦ ποταμοῦ.','De boom is dichtbij de rivier.'],
 ['bij een werkwoord (+ gen)','Ὁ Ζεὺς τῶν θεῶν ἄρχει.','Zeus heerst over de goden.'],
 ['Woorden','ἡ στρατιά = leger · ἡ θέρμη = hitte · θερμαίνω = verwarmen · ἡ κύλιξ, κύλικος = beker','ὁ οἶνος = wijn · ῥᾴδιος = makkelijk · ἐπιφαίνω = verschijnen · δακρύω = huilen · λούω = wassen · ἀγνοέω = niet kennen · μένω = blijven · ἡ Ἑλλάς, Ἑλλάδος = Griekenland · οἰκέω = wonen']]);
mk('T62a','g62','HB p. 100','Hoe vertaal je een genitivus als bijvoeglijke bepaling meestal?','met ‘van …’',[['met ‘aan …’ of ‘voor …’','Dat is de dativus als meewerkend voorwerp.'],['met ‘met …’ of ‘door …’','Dat is de dativus als bijwoordelijke bepaling.'],['zonder voorzetsel, als lijdend voorwerp','Dat is de accusativus.']],
 'Ὁ Ζεὺς υἱὸς τοῦ Κρόνου ἐστίν = Zeus is een zoon <b>van Kronos</b>.',{q:'Vertaal: ὁ τοῦ Κρόνου υἱός',a:'de zoon van Kronos',f:[['Kronos de zoon','τοῦ Κρόνου is genitivus: van Kronos.'],['de zoon voor Kronos','Voor … is dativus.'],['Kronos’ zoon is','Er staat geen ἐστί.']]});
mk('T62b','g62','HB p. 100','Hoe zie je in de woordenlijst dat een voorzetsel of werkwoord een genitivus bij zich heeft?','aan de toevoeging ‘+ gen’',[['aan de toevoeging ‘+ acc’','Dan is het een accusativus.'],['dat zie je niet','Het staat erbij: ἐγγύς + gen, ἄρχω + gen.'],['aan een sterretje','Het staat er als ‘+ gen’.']],
 'Voorbeelden: ἐγγύς + gen (dichtbij), ἐκ + gen (uit), διά + gen (door … heen), ἀκούω + gen (horen, luisteren naar), μετέχω + gen (deelnemen aan).',{q:'Ὁ Ζεὺς τῶν θεῶν ἄρχει. Waarom staat τῶν θεῶν in de genitivus?',a:'ἄρχω (heersen over) heeft een genitivus bij zich',f:[['Het is een bijvoeglijke bepaling','Er staat geen ander znw waar het bij hoort.'],['Het is het onderwerp','Het onderwerp is ὁ Ζεύς.'],['Het is het lijdend voorwerp','Een lijdend voorwerp staat in de accusativus.']]});
/* ergon 5 */
const E5=[['ἔργον',0],['βίου',1],['ἀσπίδα',0],['γῆς',1],['ἥλιον',0],['ἀδελφάς',0],['γυναικός',1],['υἱῶν',1],['χώρας',1],['ποταμός',0],['πεδία',0],['δοράτων',1]];
[[0,6],[6,12]].forEach(([a,b],k)=>{const d=E5.slice(a,b),goed=d.filter(x=>x[1]).map(x=>x[0]);
 const fout=[goed.slice(0,-1),[...goed,d.find(x=>!x[1])[0]],[...goed.slice(1),d.filter(x=>!x[1])[1][0]]].map(x=>x.join(', '));
 mk('T5-'+(k+1),'g62','5',`Ergon 5: welke woorden staan in de genitivus? ${d.map(x=>x[0]).join(' · ')}`,goed.join(', '),fout.map(x=>[x,'Kijk per woord naar de uitgang: gen ev -ου, -ης/-ας, -ος · gen mv -ων.']),
  d.map(x=>`${x[0]}: ${x[1]?'<b>genitivus</b>':'geen genitivus'}`).join(' · ')+(k===1?' · χώρας kan ook acc mv zijn, maar is in elk geval ook genitivus.':''),
  {q:`Ergon 5: zoek de genitivi: ${d.map(x=>x[0]).join(' · ')}`},{mc:1,tvVrij:true})});
/* ergon 6 */
const E6=[['Ἡ Δημήτηρ ἐστὶ τῆς Ἥρας ἀδελφή.','τῆς Ἥρας → ἀδελφή','Demeter is de zus van Hera.',['ἐστί = is','τῆς Ἥρας ἀδελφή = de zus van Hera'],['ἡ Δημήτηρ','ἐστί']],
 ['Ὁ ἡγεμὼν τὴν τῶν Ἑλλήνων στρατιὰν ἄγει.','τῶν Ἑλλήνων → στρατιάν','De leider leidt het leger van de Grieken.',['ὁ ἡγεμών = de leider','τὴν τῶν Ἑλλήνων στρατιάν = het leger van de Grieken','ἄγει = leidt'],['ὁ ἡγεμών','ἄγει']],
 ['Ἡ τοῦ ἡλίου θέρμη τὰς πέτρας θερμαίνει.','τοῦ ἡλίου → θέρμη','De hitte van de zon verwarmt de rotsen.',['ἡ τοῦ ἡλίου θέρμη = de hitte van de zon','τὰς πέτρας θερμαίνει = verwarmt de rotsen'],['τὰς πέτρας','θερμαίνει']],
 ['Ὁ Κρόνος τὸν τῆς γυναικὸς δόλον οὐ νοεῖ.','τῆς γυναικός → δόλον','Kronos merkt de list van zijn vrouw niet op.',['τὸν τῆς γυναικὸς δόλον = de list van (zijn) vrouw','οὐ νοεῖ = merkt niet op'],['ὁ Κρόνος','νοεῖ']],
 ['Τὸ τέκνον κύλικα οἴνου φέρει.','οἴνου → κύλικα','Het kind brengt een beker wijn.',['κύλικα οἴνου = een beker (met) wijn','φέρει = brengt, draagt'],['τὸ τέκνον','φέρει']],
 ['Οὐκ ἀεὶ ῥᾴδιός ἐστιν ὁ τῶν ἀνθρώπων βίος.','τῶν ἀνθρώπων → βίος','Het leven van de mensen is niet altijd makkelijk.',['ὁ τῶν ἀνθρώπων βίος = het leven van de mensen','οὐκ ἀεί = niet altijd','ῥᾴδιος = makkelijk'],['ῥᾴδιος','ἐστιν']]];
E6.forEach(([z,a,nl,k,x],i)=>{const n=i+1,[bp,zn]=a.split(' → ');
 mk('T6a'+n,'g62','6.'+n,`Ergon 6α: welke bijvoeglijke bepaling staat in de zin, en bij welk zelfstandig naamwoord hoort hij?<br>${z}`,a,[[`${zn} → ${bp}`,'Andersom: de genitivus is de bepaling.'],[`${bp} → ${x[0]}`,'Kijk welk woord ‘van …’ erbij krijgt.'],[`${x[0]} → ${zn}`,'De bijvoeglijke bepaling staat in de genitivus.']],
  `<b>${bp}</b> (genitivus) zegt iets over <b>${zn}</b>. Vaak staat hij tussen het lidwoord en het znw.`,{q:`Ergon 6α: zoek de genitivus en het woord waar hij bij hoort:<br>${z}`},{mc:1,tvVrij:true});
 vt('T6b'+n,'g62','6.'+n,'Ergon 6β',z,nl,k)});
/* ergon 7 */
const E7=[['Οἱ τῆς κόρης ἀδελφοὶ ὅπλα ἔχουσιν.',[['τῆς κόρης','','bijvoeglijke bepaling']],'De broers van het meisje hebben wapens.',['οἱ τῆς κόρης ἀδελφοί = de broers van het meisje','ὅπλα ἔχουσιν = hebben wapens']],
 ['Ἡ θεὰ Ἀθηνᾶ ἐκ τῆς τοῦ πατρὸς κεφαλῆς ἐπιφαίνει.',[['τῆς κεφαλῆς','','bij een voorzetsel (ἐκ)'],['τοῦ πατρός','','bijvoeglijke bepaling']],'De godin Athena verschijnt uit het hoofd van haar vader.',['ἐκ τῆς … κεφαλῆς = uit het hoofd','τοῦ πατρός = van (haar) vader','ἐπιφαίνει = verschijnt']],
 ['Τοῦ τέκνου ἀκούει ἡ ἀδελφή· δακρύει γὰρ τὸ τέκνον.',[['τοῦ τέκνου','','bij een werkwoord (ἀκούω + gen)']],'De zus hoort het kind, want het kind huilt.',['τοῦ τέκνου ἀκούει = hoort het kind','ἡ ἀδελφή = de zus (onderwerp)','δακρύει γάρ = want … huilt']],
 ['Ἡ μήτηρ τὰς τῶν θυγατρῶν ἐσθῆτας λούει.',[['τῶν θυγατρῶν','','bijvoeglijke bepaling']],'De moeder wast de kleren van haar dochters.',['τὰς τῶν θυγατρῶν ἐσθῆτας = de kleren van de dochters','λούει = wast']],
 ['Ἡ Ἀθηνᾶ τοὺς ἀνθρώπους διὰ τῆς μάχης φυλάττει.',[['τῆς μάχης','','bij een voorzetsel (διά)']],'Athena beschermt de mensen tijdens de strijd.',['τοὺς ἀνθρώπους φυλάττει = beschermt de mensen','διὰ τῆς μάχης = gedurende (door) de strijd']]];
E7.forEach(([z,its,nl,k],i)=>{const n=i+1;nvVraag('T7a'+n,'g62','7.'+n,'Ergon 7α',z,its);vt('T7b'+n,'g62','7.'+n,'Ergon 7β',z,nl,k)});
/* ergon 8 */
const E8=[['Οἱ Ἕλληνες ὅπλα φέρουσιν· δόρατα καὶ ἀσπίδας.',[['Ἕλληνες','nom','onderwerp'],['ὅπλα','acc','lijdend voorwerp']],'De Grieken dragen wapens: lansen en schilden.',['οἱ Ἕλληνες = de Grieken','ὅπλα φέρουσιν = dragen wapens','δόρατα καὶ ἀσπίδας = lansen en schilden']],
 ['Ἡ τῆς γυναικὸς θυγάτηρ ἐσθῆτα ποιεῖ.',[['γυναικός','gen','bijvoeglijke bepaling'],['ἐσθῆτα','acc','lijdend voorwerp']],'De dochter van de vrouw maakt een kledingstuk.',['ἡ τῆς γυναικὸς θυγάτηρ = de dochter van de vrouw','ἐσθῆτα ποιεῖ = maakt een kledingstuk']],
 ['Τὰ τῶν ἡγεμόνων ὀνόματα αἱ γυναῖκες ἀγνοοῦσιν.',[['ἡγεμόνων','gen','bijvoeglijke bepaling'],['ὀνόματα','acc','lijdend voorwerp'],['γυναῖκες','nom','onderwerp']],'De vrouwen kennen de namen van de leiders niet.',['τὰ τῶν ἡγεμόνων ὀνόματα = de namen van de leiders','αἱ γυναῖκες = de vrouwen (onderwerp)','ἀγνοοῦσιν = kennen niet']],
 ['Εἰς τὴν μάχην ὁ ἡγεμὼν τοὺς Ἕλληνας ἄγει.',[['μάχην','acc','bij een voorzetsel'],['ἡγεμών','nom','onderwerp']],'De leider leidt de Grieken naar de strijd.',['εἰς τὴν μάχην = naar de strijd','ὁ ἡγεμών = de leider','τοὺς Ἕλληνας ἄγει = leidt de Grieken']],
 ['Ἐγγὺς τοῦ πατρὸς μένει ὁ τοῦ ἡγεμόνος υἱός.',[['πατρός','gen','bij een voorzetsel'],['ἡγεμόνος','gen','bijvoeglijke bepaling']],'De zoon van de leider blijft dichtbij zijn vader.',['ἐγγὺς τοῦ πατρός = dichtbij (zijn) vader','μένει = blijft','ὁ τοῦ ἡγεμόνος υἱός = de zoon van de leider']],
 ['Ἡ τῶν Ἑλλήνων γῆ ἐστιν Ἑλλάς· κατὰ οὖν τὴν Ἑλλάδα οἱ Ἕλληνες οἰκοῦσιν.',[['γῆ','nom','onderwerp'],['Ἑλλάς','nom','naamwoordelijk deel'],['Ἑλλάδα','acc','bij een voorzetsel']],'Het land van de Grieken is Griekenland; dus wonen de Grieken (verspreid) over Griekenland.',['ἡ τῶν Ἑλλήνων γῆ = het land van de Grieken','ἐστιν Ἑλλάς = is Griekenland','κατὰ τὴν Ἑλλάδα = (verspreid) over Griekenland','οὖν = dus','οἰκοῦσιν = wonen']],
 ['Μόνον τῆς μητρὸς ἀκούει ὁ υἱός, ἀλλ’ οὐ τοῦ πατρός.',[['μητρός','gen','bij een werkwoord'],['υἱός','nom','onderwerp']],'De zoon luistert alleen naar zijn moeder, maar niet naar zijn vader.',['μόνον = alleen','τῆς μητρὸς ἀκούει = luistert naar (zijn) moeder','ἀλλ’ οὐ τοῦ πατρός = maar niet naar (zijn) vader']],
 ['Τὸ δόρυ καὶ ἡ ἀσπίς εἰσι τὰ τῆς θεᾶς ὅπλα.',[['δόρυ','nom','onderwerp'],['ἀσπίς','nom','onderwerp'],['θεᾶς','gen','bijvoeglijke bepaling']],'De lans en het schild zijn de wapens van de godin.',['τὸ δόρυ καὶ ἡ ἀσπίς = de lans en het schild','εἰσι = zijn','τὰ τῆς θεᾶς ὅπλα = de wapens van de godin']]];
E8.forEach(([z,its,nl,k],i)=>{const n=i+1;nvVraag('T8a'+n,'g62','8.'+n,'Ergon 8α',z,its);vt('T8b'+n,'g62','8.'+n,'Ergon 8β',z,nl,k)});

/* =================== 7.1 DATIVUS ALS MEEWERKEND VOORWERP OF BIJWOORDELIJKE BEPALING (p. 102–103) =================== */
sec('g71','7.1','Dativus: meewerkend voorwerp of bijwoordelijke bepaling','--c3','HB p. 102–103 · ergon 9–11',[
 ['meewerkend voorwerp','Ὁ χαλκεὺς τὴν ἀξίνην πωλεῖ τῷ γεωργῷ.','De smid verkoopt de bijl aan de boer. Vaak met ‘aan’ of ‘voor’'],
 ['voorbeeld','Ὁ πατὴρ ὅπλα τῷ υἱῷ παρέχει.','De vader geeft zijn zoon wapens / geeft wapens aan zijn zoon.'],
 ['bijwoordelijke bepaling','Ὀργῇ ὁ παῖς ἥκειν οὐκ ἐθέλει.','Uit boosheid wil het kind niet komen.'],
 ['voorbeeld','Ὁ πατὴρ τὸν υἱὸν λόγοις πείθει.','De vader overtuigt zijn zoon met woorden.'],
 ['Bijwoordelijke bepaling','geen noodzakelijke aanvulling, maar een toelichting','waar (plaats), wanneer (tijd), hoe (wijze), waarom (reden), waarmee (middel) · vaak vertaald met ‘met’ of ‘door’'],
 ['Woorden','θύω = offeren · καθαίρω = schoonmaken · μετά + acc = na · ψεύδω = bedriegen · ἡ ὀργή = boosheid','ἡ ὕλη = brandhout · ἡ χαρά = vreugde · ὁ λόγος = woord · ἡ νίκη = overwinning · ᾄδω = zingen · πείθω = overtuigen']]);
mk('T71a','g71','HB p. 102','Wat is het verschil tussen een dativus als meewerkend voorwerp en als bijwoordelijke bepaling?','Meewerkend voorwerp: aan/voor wie (hoort bij geven, zeggen …). Bijwoordelijke bepaling: een toelichting, vaak met/door (middel, reden)',
 [['Er is geen verschil','Wel: de vertaling verschilt (aan/voor tegenover met/door).'],['Meewerkend voorwerp staat altijd vooraan','De plaats in de zin zegt niets.'],['Een bijwoordelijke bepaling is altijd een persoon','Meestal juist een ding of gevoel: λόγοις, ὀργῇ, φόβῳ.']],
 'Τῷ υἱῷ παρέχει = hij geeft <b>aan zijn zoon</b> (meewerkend voorwerp, meestal een persoon). Λόγοις πείθει = hij overtuigt <b>met woorden</b> (bijwoordelijke bepaling).',
 {q:'Ὁ πατὴρ τὸν υἱὸν λόγοις πείθει. Wat is λόγοις?',a:'bijwoordelijke bepaling: met woorden',f:[['meewerkend voorwerp: aan de woorden','Hij overtuigt niet ‘aan’ woorden: het is het middel.'],['lijdend voorwerp','Het lijdend voorwerp is τὸν υἱόν.'],['onderwerp','Het onderwerp is ὁ πατήρ.']]},{mc:1});
/* ergon 9: functies */
const E9=[['Ὁ Ἀπόλλων τοῖς ἀνθρώποις παρέχει τὸ φῶς.',[['ὁ Ἀπόλλων','','onderwerp'],['τὸ φῶς','','lijdend voorwerp'],['τοῖς ἀνθρώποις','','meewerkend voorwerp']],'Apollo geeft de mensen het licht.',['παρέχει = geeft','τοῖς ἀνθρώποις = (aan) de mensen','τὸ φῶς = het licht']],
 ['Ταῖς θεαῖς θηρία θύουσιν αἱ γυναῖκες.',[['αἱ γυναῖκες','','onderwerp'],['θηρία','','lijdend voorwerp'],['ταῖς θεαῖς','','meewerkend voorwerp']],'De vrouwen offeren dieren aan de godinnen.',['αἱ γυναῖκες = de vrouwen (onderwerp)','θηρία θύουσιν = offeren dieren','ταῖς θεαῖς = aan de godinnen']],
 ['Τὸ δεῖπνον ἡ μήτηρ παρασκευάζει τῷ τέκνῳ.',[['ἡ μήτηρ','','onderwerp'],['τὸ δεῖπνον','','lijdend voorwerp'],['τῷ τέκνῳ','','meewerkend voorwerp']],'De moeder maakt de maaltijd klaar voor het kind.',['ἡ μήτηρ = de moeder (onderwerp)','τὸ δεῖπνον παρασκευάζει = maakt de maaltijd klaar','τῷ τέκνῳ = voor het kind']],
 ['Μετὰ τὴν μάχην τὰ ὅπλα τοῖς υἱοῖς καθαίρει ὁ πατήρ.',[['ὁ πατήρ','','onderwerp'],['τὰ ὅπλα','','lijdend voorwerp'],['τοῖς υἱοῖς','','meewerkend voorwerp']],'Na de strijd maakt de vader de wapens schoon voor zijn zonen.',['μετὰ τὴν μάχην = na de strijd','τὰ ὅπλα καθαίρει = maakt de wapens schoon','τοῖς υἱοῖς = voor (zijn) zonen','ὁ πατήρ = de vader (onderwerp)']],
 ['Τὴν ἀσπίδα καὶ τὸ δόρυ παρέχει ὁ Ζεὺς τῇ Ἀθηνᾷ.',[['ὁ Ζεύς','','onderwerp'],['τὴν ἀσπίδα καὶ τὸ δόρυ','','lijdend voorwerp'],['τῇ Ἀθηνᾷ','','meewerkend voorwerp']],'Zeus geeft Athena het schild en de lans.',['ὁ Ζεύς = Zeus (onderwerp)','τὴν ἀσπίδα καὶ τὸ δόρυ = het schild en de lans','τῇ Ἀθηνᾷ = (aan) Athena']]];
E9.forEach(([z,its,nl,k],i)=>{const n=i+1;
 mk('T9a'+n,'g71','9.'+n,`Ergon 9α: noteer de functies in de zin (onderwerp, lijdend voorwerp, meewerkend voorwerp):<br>${z}`,lijst(its),nvFout(its),
  `${lijst(its)}. Nom = onderwerp, acc = lijdend voorwerp, dat = meewerkend voorwerp (aan/voor).`,{q:`Ergon 9α: wie doet het, wat, en aan/voor wie?<br>${z}`},{mc:1,tvVrij:true});
 vt('T9b'+n,'g71','9.'+n,'Ergon 9β',z,nl,k)});
/* ergon 10 */
const E10=[['Φόβῳ οἱ παῖδες φεύγουσι πρὸς τὴν μητέρα.','φόβῳ = uit angst','Uit angst vluchten de kinderen naar hun moeder.',['φόβῳ = uit angst (reden)','οἱ παῖδες φεύγουσι = de kinderen vluchten','πρὸς τὴν μητέρα = naar (hun) moeder'],['φόβῳ = aan de angst','μητέρα = met de moeder']],
 ['Ἡ γυνὴ τὸν ἄνδρα ψεύδει δόλῳ.','δόλῳ = met een list','De vrouw bedriegt haar man met een list.',['ἡ γυνή = de vrouw','τὸν ἄνδρα ψεύδει = bedriegt (haar) man','δόλῳ = met een list (middel)'],['δόλῳ = voor de list','ἄνδρα = met de man']],
 ['Ὅπλοις οἱ ἄνδρες τὴν γῆν φυλάττουσιν.','ὅπλοις = met wapens','Met wapens beschermen de mannen het land.',['ὅπλοις = met wapens (middel)','οἱ ἄνδρες = de mannen','τὴν γῆν φυλάττουσιν = beschermen het land'],['ὅπλοις = aan de wapens','γῆν = met het land']],
 ['Ὀργῇ ὁ ἥρως φαίνειν τὴν ἀρετὴν οὐκ ἐθέλει.','ὀργῇ = uit boosheid','Uit boosheid wil de held zijn dapperheid niet tonen.',['ὀργῇ = uit boosheid (reden)','ὁ ἥρως οὐκ ἐθέλει = de held wil niet','φαίνειν τὴν ἀρετήν = zijn dapperheid tonen'],['ὀργῇ = voor de boosheid','ἀρετήν = met dapperheid']],
 ['Οἱ παῖδες χαίρουσι τοῖς δώροις.','τοῖς δώροις = met (om) de geschenken','De kinderen zijn blij met de geschenken.',['οἱ παῖδες χαίρουσι = de kinderen zijn blij','τοῖς δώροις = met (om) de geschenken (reden)'],['τοῖς δώροις = aan de geschenken','παῖδες = met de kinderen']]];
E10.forEach(([z,a,nl,k,f],i)=>{const n=i+1;
 mk('T10a'+n,'g71','10.'+n,`Ergon 10: welke bijwoordelijke bepaling in de dativus staat in de zin, en hoe vertaal je hem?<br>${z}`,a,[...f.map(x=>[x,'Een bijwoordelijke bepaling vertaal je vaak met ‘met’, ‘door’ of ‘uit’.']),['er staat geen dativus in','Zoek de uitgang -ῳ, -ῃ, -ᾳ, -οις, -αις of -σι(ν).']],
  `<b>${a}</b>: een toelichting (waarom of waarmee), geen noodzakelijke aanvulling.`,{q:`Ergon 10: zoek de dativus die vertelt waarom of waarmee:<br>${z}`},{mc:1});
 vt('T10b'+n,'g71','10.'+n,'Ergon 10',z,nl,k)});
/* ergon 11 */
const B11={a:'ὕλῃ (met brandhout)',b:'φόβῳ (uit angst)',c:'χαρᾷ (van vreugde)',d:'τῇ τοῦ ἀδελφοῦ βοηθείᾳ (met de hulp van haar broer)',e:'οὐ λόγοις, ἀλλ’ ἔργοις (niet met woorden, maar met daden)'};
const E11=[['Τὸ τέκνον ἐγγὺς τοῦ πατρὸς μένει.','b','Uit angst blijft het kind dichtbij zijn vader.',['φόβῳ = uit angst','τὸ τέκνον μένει = het kind blijft','ἐγγὺς τοῦ πατρός = dichtbij (zijn) vader']],
 ['Χαίρει ἡ κόρη.','d','Het meisje is blij met de hulp van haar broer.',['χαίρει ἡ κόρη = het meisje is blij','τῇ τοῦ ἀδελφοῦ βοηθείᾳ = met (om) de hulp van haar broer']],
 ['Μετὰ τὴν νίκην οἱ ἄνθρωποι ᾄδουσιν.','c','Na de overwinning zingen de mensen van vreugde.',['μετὰ τὴν νίκην = na de overwinning','οἱ ἄνθρωποι ᾄδουσιν = de mensen zingen','χαρᾷ = van (uit) vreugde']],
 ['Ἡ θυγάτηρ τῇ μητρὶ πῦρ ποιεῖ.','a','Met brandhout maakt de dochter vuur voor haar moeder.',['ἡ θυγάτηρ = de dochter','τῇ μητρί = voor (haar) moeder','πῦρ ποιεῖ = maakt vuur','ὕλῃ = met brandhout']],
 ['Ὁ ἡγεμὼν τοὺς ἄνδρας πείθει.','e','De leider overtuigt de mannen niet met woorden, maar met daden.',['ὁ ἡγεμών = de leider','τοὺς ἄνδρας πείθει = overtuigt de mannen','οὐ λόγοις, ἀλλ’ ἔργοις = niet met woorden, maar met daden']]];
E11.forEach(([z,l,nl,k],i)=>{const n=i+1,ander=shuf(Object.keys(B11).filter(x=>x!==l)).slice(0,3);
 mk('T11a'+n,'g71','11.'+n,`Ergon 11α: welke bijwoordelijke bepaling (a–e) past het best bij deze zin?<br>${z}`,`${l}. ${B11[l]}`,ander.map(x=>[`${x}. ${B11[x]}`,'Die past beter bij een andere zin.']),
  `<b>${l}. ${B11[l]}</b> → ${nl}${i===1?' (Ook c kan, maar ‘blij van vreugde’ zegt twee keer hetzelfde.)':''}`,{q:`Ergon 11α: kies a–e voor:<br>${z}`},{mc:1});
 vt('T11b'+n,'g71','11.'+n,'Ergon 11β',`${z}<br>met bepaling ${l}: ${B11[l].replace(/ \(.*$/,'')}`,nl,k)});

/* =================== 7.2 OVERZICHT DATIVUS EN DATIVUS MEERVOUD GROEP 3 (p. 104–105) =================== */
sec('g72','7.2','Dativus: overzicht en dat mv groep 3','--c4','HB p. 104–105 · ergon 12–14',[
 ['meewerkend voorwerp','Ὁ πατὴρ ὅπλα τῷ υἱῷ παρέχει.','De vader geeft wapens aan zijn zoon.'],
 ['bijwoordelijke bepaling','Ὁ πατὴρ τὸν υἱὸν λόγοις πείθει.','De vader overtuigt zijn zoon met woorden.'],
 ['bij een voorzetsel (+ dat)','Ὁ Ζεύς ἐστιν ἐν τῷ Ὀλύμπῳ.','Zeus is op de Olympos.'],
 ['bij een werkwoord (+ dat)','Ὁ Ζεὺς τοῖς ἀνθρώποις βοηθεῖ.','Zeus helpt de mensen.'],
 ['dat mv groep 3','stam + -σι(ν)','παιδ- → παισί(ν) · πραγματ- → πράγμασι(ν)'],
 ['-π / -β / -φ','wordt -ψι(ν)','γύψ, γυπός → γυψί(ν)'],['-κ / -γ / -χ','wordt -ξι(ν)','γυνή, γυναικός → γυναιξί(ν)'],
 ['-τ / -δ / -θ / -ζ / -ν','slotletter verdwijnt','πρᾶγμα → πράγμασι(ν) · ἀσπίς → ἀσπίσι(ν)'],['-οντ','wordt -ουσι(ν)','λέων, λέοντος → λέουσι(ν)'],
 ['Let op','soms -ασι(ν)','πατήρ, πατρός → πατράσι(ν) · ἀνήρ, ἀνδρός → ἀνδράσι(ν)']]);
const DM=[['γύψ, γυπός','γυψί(ν)',['γυπσί(ν)','γυποῖς','γυπαῖς'],'π + σ = ψ'],['γυνή, γυναικός','γυναιξί(ν)',['γυναικσί(ν)','γυναικοῖς','γυναῖσι(ν)'],'κ + σ = ξ'],
 ['ἀσπίς, ἀσπίδος','ἀσπίσι(ν)',['ἀσπιδσί(ν)','ἀσπίδοις','ἀσπίξι(ν)'],'de δ verdwijnt voor -σι'],['λέων, λέοντος','λέουσι(ν)',['λέοντσι(ν)','λέοσι(ν)','λέοντοις'],'-οντ + σι wordt -ουσι'],
 ['πατήρ, πατρός','πατράσι(ν)',['πατρσί(ν)','πατέροις','πατρίσι(ν)'],'uitzondering: -ασι(ν)'],['ἀνήρ, ἀνδρός','ἀνδράσι(ν)',['ἀνδρσί(ν)','ἀνδροῖς','ἀνδρίσι(ν)'],'uitzondering: -ασι(ν)']];
DM.forEach(([w,a,f,u],i)=>mk('T72-'+(i+1),'g72','HB p. 104',`Wat is de dativus meervoud van ${w}?`,a,f.map(x=>[x,'Groep 3 krijgt -σι(ν), en die past zich aan de stam aan.']),`${w} → <b>${a}</b>: ${u}.`,
 {q:`Van welk woord is ${a} de dativus meervoud?`,a:w,f:DM.filter(x=>x[0]!==w).slice(0,3).map(x=>[x[0],`Daarvan is het ${x[1]}.`])}));
/* ergon 12 */
const E12=[['ἐσθής','ἐσθητ-','ἐσθῆτι','ἐσθῆσι(ν)','τ verdwijnt'],['ἀσπίς','ἀσπιδ-','ἀσπίδι','ἀσπίσι(ν)','δ verdwijnt'],['Ἕλλην','Ἑλλην-','Ἕλληνι','Ἕλλησι(ν)','ν verdwijnt'],['φῶς','φωτ-','φωτί','φωσί(ν)','τ verdwijnt'],
 ['ὄνομα','ὀνοματ-','ὀνόματι','ὀνόμασι(ν)','τ verdwijnt'],['δόρυ','δορατ-','δόρατι','δόρασι(ν)','τ verdwijnt'],['ἥρως','ἡρω-','ἥρωι','ἥρωσι(ν)','stam op -ω, gewoon -σι'],['γυνή','γυναικ-','γυναικί','γυναιξί(ν)','κ + σ = ξ']];
E12.forEach(([w,s,de,dm,u],i)=>{const n=i+1,anders=E12.filter((x,j)=>j!==i);
 mk('T12-'+n,'g72','12.'+n,`Ergon 12: wat zijn de stam, de dativus enkelvoud en de dativus meervoud van ${w}?`,`${s} · ${de} · ${dm}`,
  [[`${s} · ${de} · ${s.replace('-','')}σι(ν)`,'De slotletter van de stam past zich aan -σι aan.'],[`${s} · ${de} · ${s.replace('-','')}οις`,'-οις is groep 2.'],[`${s} · ${s.replace('-','')}ος · ${dm}`,'-ος is de genitivus enkelvoud.']].filter(x=>x[0]!==`${s} · ${de} · ${dm}`),
  `${w}: stam <b>${s}</b>, dat ev <b>${de}</b>, dat mv <b>${dm}</b> (${u}).`,{q:`Ergon 12: ${w} — stam, dat ev en dat mv?`},{mc:1,tvVrij:true})});
/* ergon 13 */
const E13=[['Αἱ θυγατέρες δῶρον παρέχουσι τῷ πατρί.',[['τῷ πατρί','','meewerkend voorwerp']],'De dochters geven hun vader een geschenk.',['αἱ θυγατέρες = de dochters','δῶρον παρέχουσι = geven een geschenk','τῷ πατρί = (aan) hun vader']],
 ['Οἱ θεοὶ τοῖς ἀνθρώποις φυλάττουσι τὴν γῆν.',[['τοῖς ἀνθρώποις','','meewerkend voorwerp']],'De goden beschermen het land voor de mensen.',['οἱ θεοί = de goden','φυλάττουσι τὴν γῆν = beschermen het land','τοῖς ἀνθρώποις = voor de mensen']],
 ['Τῇ λαμπάδι αἱ γυναῖκες ἅπτουσι τὸ πῦρ.',[['τῇ λαμπάδι','','bijwoordelijke bepaling (middel)']],'De vrouwen steken met de fakkel het vuur aan.',['τῇ λαμπάδι = met de fakkel','αἱ γυναῖκες = de vrouwen','ἅπτουσι τὸ πῦρ = steken het vuur aan']],
 ['Ὁ τῶν Ἑλλήνων ἡγεμὼν τὸν ἐχθρὸν δόρατι κτείνει.',[['δόρατι','','bijwoordelijke bepaling (middel)']],'De leider van de Grieken doodt de vijand met een lans.',['ὁ τῶν Ἑλλήνων ἡγεμών = de leider van de Grieken','τὸν ἐχθρὸν κτείνει = doodt de vijand','δόρατι = met een lans']],
 ['Τοῖς ὅπλοις οἱ ἥρωες τὴν ἀρετὴν φαίνουσιν ἐν τῇ μάχῃ.',[['τοῖς ὅπλοις','','bijwoordelijke bepaling (middel)'],['τῇ μάχῃ','','bij een voorzetsel (ἐν)']],'Met hun wapens tonen de helden hun dapperheid in de strijd.',['τοῖς ὅπλοις = met (hun) wapens','οἱ ἥρωες = de helden','τὴν ἀρετὴν φαίνουσιν = tonen (hun) dapperheid','ἐν τῇ μάχῃ = in de strijd']],
 ['Ὁ υἱὸς βοηθεῖ τῷ πατρὶ ἐπὶ τῷ ἔργῳ.',[['τῷ πατρί','','bij een werkwoord (βοηθέω + dat)'],['τῷ ἔργῳ','','bij een voorzetsel (ἐπί)']],'De zoon helpt zijn vader bij het werk.',['ὁ υἱὸς βοηθεῖ = de zoon helpt','τῷ πατρί = (zijn) vader','ἐπὶ τῷ ἔργῳ = bij het werk']],
 ['Τῇ θυγατρὶ ἡ μήτηρ τὴν τέχνην φαίνει.',[['τῇ θυγατρί','','meewerkend voorwerp']],'De moeder laat haar dochter de kunst (vaardigheid) zien.',['ἡ μήτηρ = de moeder','τὴν τέχνην φαίνει = toont de kunst / vaardigheid','τῇ θυγατρί = (aan) haar dochter']],
 ['Αἰσχύνῃ τὸ τέκνον τῇ ἀδελφῇ τὰ πράγματα οὐ καταλέγει.',[['αἰσχύνῃ','','bijwoordelijke bepaling (reden)'],['τῇ ἀδελφῇ','','meewerkend voorwerp']],'Uit schaamte vertelt het kind zijn zus de gebeurtenissen niet.',['αἰσχύνῃ = uit schaamte','τὸ τέκνον = het kind','τῇ ἀδελφῇ = (aan) zijn zus','τὰ πράγματα οὐ καταλέγει = vertelt de gebeurtenissen niet']],
 ['Ταῖς γυναιξὶν οἱ παῖδες ὕλῃ ποιοῦσι τὸ πῦρ.',[['ταῖς γυναιξίν','','meewerkend voorwerp'],['ὕλῃ','','bijwoordelijke bepaling (middel)']],'De kinderen maken met brandhout het vuur voor de vrouwen.',['ταῖς γυναιξίν = voor de vrouwen','οἱ παῖδες = de kinderen','ὕλῃ = met brandhout','ποιοῦσι τὸ πῦρ = maken het vuur']],
 ['Ἀκηδείᾳ ὁ Κρόνος τὸν τῆς γυναικὸς δόλον οὐ νοεῖ.',[['ἀκηδείᾳ','','bijwoordelijke bepaling (reden)']],'Door onoplettendheid merkt Kronos de list van zijn vrouw niet op.',['ἀκηδείᾳ = door (uit) onoplettendheid','ὁ Κρόνος οὐ νοεῖ = Kronos merkt niet op','τὸν τῆς γυναικὸς δόλον = de list van (zijn) vrouw']]];
E13.forEach(([z,its,nl,k],i)=>{const n=i+1;nvVraag('T13a'+n,'g72','13.'+n,'Ergon 13α',z,its);vt('T13b'+n,'g72','13.'+n,'Ergon 13β',z,nl,k)});
/* ergon 14: geslacht, getal, naamval */
const E14=[['Ὁ τῶν Ἑλλήνων ἡγεμὼν τοὺς ἄνδρας ἀεὶ τοῖς ὀνόμασιν ὀνομάζειν ἐθέλει.',[['Ἑλλήνων','m mv gen'],['ἡγεμών','m ev nom'],['ἄνδρας','m mv acc'],['ὀνόμασιν','o mv dat']],'De leider van de Grieken wil de mannen altijd bij hun naam noemen.',['ὁ τῶν Ἑλλήνων ἡγεμών = de leider van de Grieken','ἐθέλει ὀνομάζειν = wil noemen','τοὺς ἄνδρας = de mannen','τοῖς ὀνόμασιν = bij (met) hun namen']],
 ['Διὰ τῆς νυκτὸς ἡ γυνὴ τὰ ἔργα οὐ ποιεῖ, ἀλλὰ τὸ τοῦ ἡλίου φῶς ἀναμένει.',[['νυκτός','v ev gen'],['γυνή','v ev nom'],['φῶς','o ev acc']],'Gedurende de nacht doet de vrouw het werk niet, maar wacht zij op het licht van de zon.',['διὰ τῆς νυκτός = gedurende de nacht','ἡ γυνὴ τὰ ἔργα οὐ ποιεῖ = de vrouw doet het werk niet','τὸ τοῦ ἡλίου φῶς ἀναμένει = wacht op het licht van de zon']],
 ['Ὡς τάχιστα ὁ ἥρως τῷ δόρατι κτείνει τὸ τέρας, οἱ τῆς χώρας ἄνθρωποι ἤδη δῶρα παρέχουσιν ἀντὶ τῆς βοηθείας.',[['ἥρως','m ev nom'],['δόρατι','o ev dat'],['τέρας','o ev acc']],'Zodra de held met de lans het monster doodt, geven de mensen van het land al geschenken in ruil voor de hulp.',['ὡς τάχιστα = zodra','ὁ ἥρως τῷ δόρατι κτείνει τὸ τέρας = de held doodt het monster met de lans','οἱ τῆς χώρας ἄνθρωποι = de mensen van het land','ἀντὶ τῆς βοηθείας = in ruil voor de hulp']],
 ['Εἰ οἱ παῖδες ἐγγὺς τοῦ ποταμοῦ παίζουσιν, μολύνουσι μὲν τὰς ἐσθῆτας, τὰ δὲ μιάσματα ἐν ταῖς ἐσθῆσιν οὐ νοοῦσιν.',[['παῖδες','m mv nom'],['ἐσθῆτας','v mv acc'],['μιάσματα','o mv acc'],['ἐσθῆσιν','v mv dat']],'Als de kinderen dichtbij de rivier spelen, maken ze hun kleren vies, maar de vlekken op hun kleren zien ze niet.',['εἰ = als','ἐγγὺς τοῦ ποταμοῦ παίζουσιν = spelen dichtbij de rivier','μολύνουσι μὲν τὰς ἐσθῆτας = maken (weliswaar) hun kleren vies','τὰ δὲ μιάσματα … οὐ νοοῦσιν = maar de vlekken merken ze niet op','ἐν ταῖς ἐσθῆσιν = op (in) hun kleren']]];
const GW={m:'v',v:'o',o:'m'},GTW={ev:'mv',mv:'ev'};
E14.forEach(([z,its,nl,k],i)=>{const n=i+1,L=x=>x.map(y=>`${y[0]} (${y[1]})`).join(' · ');
 const f=its.slice(0,3).map((it,j)=>{const a=its.map(y=>y.slice());const p=a[j][1].split(' ');if(j===0)p[2]=NW[p[2]];else if(j===1)p[1]=GTW[p[1]];else p[0]=GW[p[0]];a[j][1]=p.join(' ');return L(a)});
 if(f.length<3){const a=its.map(y=>y.slice());const p=a[0][1].split(' ');p[0]=GW[p[0]];a[0][1]=p.join(' ');f.push(L(a))}
 mk('T14a'+n,'g72','14.'+n,`Ergon 14α: geslacht (m/v/o), getal en naamval van ${its.map(x=>x[0]).join(', ')}?<br>${z}`,L(its),f.map(x=>[x,'Eén van de vormen klopt niet. Kijk naar de uitgang én het lidwoord.']),
  `${L(its)}. m = mannelijk, v = vrouwelijk, o = onzijdig.${i===3?' παῖδες kan ook vrouwelijk zijn.':''}`,{q:`Ergon 14α: bepaal geslacht, getal en naamval:<br>${z}`},{mc:1,tv:g(`Ergon 14α: noteer geslacht, getal en naamval van ${its.map(x=>x[0]).join(', ')}:<br>${z}`),tvVrij:true});
 vt('T14b'+n,'g72','14.'+n,'Ergon 14β',z,nl,k)});

/* =================== 8.1 PERSOONLIJK VOORNAAMWOORD: ERGON 15–16 (p. 107) =================== */
sec('g81','8.1','Persoonlijk voornaamwoord: ergon 15–16','--c5','HB p. 106–107 · de rijtjes staan bij ‘Persoonlijk voornaamwoord’',[
 ['1e persoon','ἐγώ, ἐμοῦ/μου, ἐμοί/μοι, ἐμέ/με · ἡμεῖς, ἡμῶν, ἡμῖν, ἡμᾶς','ik · wij'],
 ['2e persoon','σύ, σοῦ, σοί, σέ · ὑμεῖς, ὑμῶν, ὑμῖν, ὑμᾶς','jij · jullie'],
 ['3e persoon m','—, αὐτοῦ, αὐτῷ, αὐτόν · —, αὐτῶν, αὐτοῖς, αὐτούς','hem · hen'],
 ['3e persoon v','—, αὐτῆς, αὐτῇ, αὐτήν · —, αὐτῶν, αὐταῖς, αὐτάς','haar · hen'],
 ['3e persoon o','—, αὐτοῦ, αὐτῷ, αὐτό · —, αὐτῶν, αὐτοῖς, αὐτά','het (ervan, ervoor) · ze'],
 ['Let op 1','3e persoon: geen nominativus','het onderwerp zit in de persoonsvorm: λέγει = hij zegt'],
 ['Let op 2','onzijdig bij een voorzetsel','niet ‘achter het’, maar ‘erachter’'],
 ['Woorden','καλέω = roepen · ἀκούω + gen = horen · τρεῖς = drie · παίζω = spelen · φυλάττω = beschermen','πάντες, πάντων = allemaal · βλαστάνω = ontstaan · τίς = wie · τί = waarom · οὐδείς = niemand']]);
const E15=[['Ἡ Ἀθηνᾶ λέγει· «Πατὴρ ___ ἐστιν ὁ Ζεύς.»','1 ev / gen','μου (ἐμοῦ)',['μοι','με','ἡμῶν'],'Athena zegt: ‘Zeus is mijn vader.’',['πατὴρ μου = mijn vader (letterlijk: vader van mij)','ἐστιν ὁ Ζεύς = is Zeus']],
 ['Οἱ φίλοι ___ βοηθοῦσιν.','3 mv / mnl / dat','αὐτοῖς',['αὐτούς','αὐτῶν','αὐταῖς'],'De vrienden helpen hen.',['οἱ φίλοι βοηθοῦσιν = de vrienden helpen','αὐτοῖς = hen (βοηθέω + dat)']],
 ['Τὸ πλοῖον ___ φέρει κατὰ θάλατταν εἰς τὴν Ἑλλάδα.','3 ev / mnl / acc','αὐτόν',['αὐτῷ','αὐτοῦ','αὐτήν'],'Het schip brengt hem over zee naar Griekenland.',['τὸ πλοῖον φέρει = het schip brengt','αὐτόν = hem','κατὰ θάλατταν = over zee','εἰς τὴν Ἑλλάδα = naar Griekenland']],
 ['Τίς ___ τὸ ἔργον ποιεῖ;','2 mv / gen','ὑμῶν',['ὑμῖν','ὑμᾶς','ἡμῶν'],'Wie van jullie doet het werk?',['τίς = wie','ὑμῶν = van jullie','τὸ ἔργον ποιεῖ = doet het werk']],
 ['Τί οὐδεὶς ___ θαυμάζει;','1 ev / acc','με (ἐμέ)',['μοι','μου','σε'],'Waarom bewondert niemand mij?',['τί = waarom','οὐδείς = niemand','με θαυμάζει = bewondert mij']],
 ['Σὺν ___ ὁ ἥρως τὸν στόλον ποιεῖ.','1 mv / dat','ἡμῖν',['ἡμᾶς','ἡμῶν','ὑμῖν'],'De held maakt de tocht met ons.',['σὺν ἡμῖν = met ons','ὁ ἥρως = de held','τὸν στόλον ποιεῖ = maakt de tocht (expeditie)']],
 ['Ὁ ἡγεμὼν ___ εἰς τὴν μάχην ἄγει.','2 mv / acc','ὑμᾶς',['ὑμῖν','ὑμῶν','ἡμᾶς'],'De leider leidt jullie naar de strijd.',['ὁ ἡγεμὼν ἄγει = de leider leidt','ὑμᾶς = jullie','εἰς τὴν μάχην = naar de strijd']],
 ['Ὁ ἀνὴρ ___ τὴν ἀρετὴν φαίνειν ἐθέλει.','3 mv / vrl / dat','αὐταῖς',['αὐτάς','αὐτοῖς','αὐτῇ'],'De man wil hun (aan hen) zijn dapperheid tonen.',['ὁ ἀνὴρ ἐθέλει = de man wil','αὐταῖς = aan hen (vrouwen)','τὴν ἀρετὴν φαίνειν = zijn dapperheid tonen']],
 ['Ἡ μήτηρ τοῖς δώροις ___ μάλα χαίρει.','2 ev / gen','σου (σοῦ)',['σοι','σε','ὑμῶν'],'Moeder is erg blij met jouw geschenken.',['ἡ μήτηρ μάλα χαίρει = moeder is erg blij','τοῖς δώροις σου = met jouw geschenken']]];
E15.forEach(([z,nv,a,f,nl,k],i)=>{const n=i+1;
 mk('T15a'+n,'g81','15.'+n,`Ergon 15α: welk persoonlijk voornaamwoord hoort op de puntjes (${nv})?<br>${z}`,a,f.map(x=>[x,'Kijk goed naar persoon, getal, geslacht en naamval.']),`${nv} = <b>${a}</b>.`,
  {q:`Ergon 15α: vul het persoonlijk vnw in (${nv}):<br>${z}`},{mc:1});
 vt('T15b'+n,'g81','15.'+n,'Ergon 15β',z.replace('___',a.replace(/ \(.*$/,'')),nl,k)});
const E16=[['Ὁ παῖς τὸν πατέρα καλεῖ, ἀλλ’ ὁ πατὴρ αὐτοῦ οὐκ ἀκούει.','Het kind roept zijn vader, maar de vader hoort hem niet.',['ὁ παῖς τὸν πατέρα καλεῖ = het kind roept (zijn) vader','αὐτοῦ οὐκ ἀκούει = hoort hem niet (ἀκούω + gen)']],
 ['Ὁ παῖς τῆς μητρὸς ἀκούει· αὐτὴν καλεῖ.','Het kind hoort zijn moeder: hij roept haar.',['τῆς μητρὸς ἀκούει = hoort (zijn) moeder','αὐτὴν καλεῖ = (hij) roept haar']],
 ['Ἡ κόρη τρεῖς ἀδελφοὺς ἔχει· ἀεὶ σὺν αὐτοῖς παίζει.','Het meisje heeft drie broers; ze speelt altijd met hen.',['τρεῖς ἀδελφοὺς ἔχει = heeft drie broers','ἀεὶ σὺν αὐτοῖς παίζει = speelt altijd met hen']],
 ['Τὸ πλοῖον ὑμῶν ἐν τῷ λιμένι ἐστίν· τὸ ὄνομα αὐτοῦ ἐστιν Ἀργώ.','Jullie schip ligt in de haven; de naam ervan is Argo.',['τὸ πλοῖον ὑμῶν = jullie schip','ἐν τῷ λιμένι ἐστίν = is (ligt) in de haven','τὸ ὄνομα αὐτοῦ = de naam ervan (zijn naam)']],
 ['Οἱ Ἕλληνες χαίρουσιν, ὅτι ἡ θεὰ φυλάττει αὐτούς.','De Grieken zijn blij, omdat de godin hen beschermt.',['οἱ Ἕλληνες χαίρουσιν = de Grieken zijn blij','ὅτι = omdat','ἡ θεὰ φυλάττει αὐτούς = de godin beschermt hen']],
 ['Ἡ Γαῖα μήτηρ ἐστὶν ἡμῶν πάντων· βλαστάνει γὰρ ἐξ αὐτῆς ὁ βίος.','Gaia is de moeder van ons allemaal; want uit haar ontstaat het leven.',['μήτηρ ἡμῶν πάντων = moeder van ons allemaal','βλαστάνει γάρ = want … ontstaat','ἐξ αὐτῆς = uit haar','ὁ βίος = het leven']],
 ['Οἱ υἱοὶ τῇ μητρὶ βοηθοῦσιν· πῦρ γὰρ ποιοῦσιν αὐτῇ.','De zonen helpen hun moeder; want ze maken vuur voor haar.',['οἱ υἱοὶ τῇ μητρὶ βοηθοῦσιν = de zonen helpen (hun) moeder','πῦρ ποιοῦσιν = ze maken vuur','αὐτῇ = voor haar']],
 ['Οἱ Ἕλληνες ὅπλα φέρουσιν· ὁ γὰρ ἡγεμὼν αὐτῶν εἰς τὴν μάχην ἄγει αὐτούς.','De Grieken dragen wapens; want hun leider leidt hen naar de strijd.',['ὅπλα φέρουσιν = dragen wapens','ὁ ἡγεμὼν αὐτῶν = hun leider','εἰς τὴν μάχην ἄγει αὐτούς = leidt hen naar de strijd']]];
E16.forEach(([z,nl,k],i)=>vt('T16-'+(i+1),'g81','16.'+(i+1),'Ergon 16',z,nl,k));

/* =================== 8.2 OVERZICHT NAAMVALLEN EN FUNCTIES (p. 108–109) =================== */
sec('g82','8.2','Overzicht naamvallen en functies','--c6','HB p. 108–109 · ergon 17–19',[
 ['nominativus · onderwerp','Ὁ Ποσειδῶν θεός ἐστιν.','Poseidon is een god.'],['nominativus · naamwoordelijk deel','Ὁ Ποσειδῶν θεός ἐστιν.','Poseidon is een god.'],
 ['genitivus · bijvoeglijke bepaling (van)','Ὁ τῆς θαλάττης θεός ἐστι Ποσειδῶν.','De god van de zee is Poseidon.'],
 ['genitivus · bij een voorzetsel','Ὁ θεὸς τοὺς ἀνθρώπους ἐκ τῆς θαλάττης σῴζει.','De god redt de mensen uit de zee.'],
 ['genitivus · bij een werkwoord','Τῆς θαλάττης ἄρχει ὁ Ποσειδῶν.','Poseidon heerst over de zee.'],
 ['dativus · meewerkend voorwerp (aan/voor)','Ὁ ναύτης τῷ Ποσειδῶνι θύει.','De zeeman offert aan Poseidon.'],
 ['dativus · bijwoordelijke bepaling (met/door)','Ὁ θεὸς τῇ τριαίνῃ τὴν θάλατταν γαληνίζει.','De god kalmeert de zee met zijn drietand.'],
 ['dativus · bij een voorzetsel','Ἐν τῇ θαλάττῃ πολλοὶ κίνδυνοί εἰσιν.','In de zee zijn vele gevaren.'],
 ['dativus · bij een werkwoord','Ὁ Ποσειδῶν τῷ ναύτῃ βοηθεῖ.','Poseidon helpt de zeeman.'],
 ['accusativus · lijdend voorwerp','Ποσειδῶν τὴν τρίαιναν φέρει.','Poseidon draagt zijn drietand.'],
 ['accusativus · bij een voorzetsel','Ὁ ναύτης τὸ πλοῖον εἰς τὴν θάλατταν φέρει.','De zeeman brengt zijn schip naar de zee.'],
 ['Woorden','σῴζω = redden · πάλιν = weer, terug · ὁ λίθος = steen · κατεσθίω = opeten · μετέχω + gen = deelnemen aan','ἐπιθυμέω + gen = verlangen naar · πλύνω = wassen · πολλά = veel · ἡ ἀπονία = luiheid · ἀπό + gen = van … (vandaan), vanaf']]);
const FN=[['onderwerp','nominativus'],['naamwoordelijk deel','nominativus'],['bijvoeglijke bepaling (van …)','genitivus'],['meewerkend voorwerp (aan/voor …)','dativus'],['bijwoordelijke bepaling (met/door …)','dativus'],['lijdend voorwerp','accusativus']];
FN.forEach(([f,nv],i)=>mk('T82-'+(i+1),'g82','HB p. 108',`In welke naamval staat in het Grieks meestal het ${f}?`,nv,['nominativus','genitivus','dativus','accusativus'].filter(x=>x!==nv),
 `${f}: <b>${nv}</b>.<div class="why">${NVUITLEG}</div>`,{q:`Welke functie kan een ${nv} hebben?`,a:f,f:FN.filter(x=>x[1]!==nv).slice(0,3).map(x=>[x[0],`Dat is een ${x[1]}.`])}));
/* ergon 17 */
const E17=[['Σοφίᾳ καὶ ἀρετῇ ὁ ἡγεμὼν πρῶτον ἡμᾶς ἐκ τῶν κινδύνων σῴζει καὶ ἔπειτα πάλιν εἰς τὴν Ἑλλάδα ἄγει.',[['ἀρετῇ','dat','bijwoordelijke bepaling (middel)'],['κινδύνων','gen','bij een voorzetsel'],['Ἑλλάδα','acc','bij een voorzetsel']],'Met wijsheid en dapperheid redt de leider ons eerst uit de gevaren en brengt hij ons daarna terug naar Griekenland.',['σοφίᾳ καὶ ἀρετῇ = met wijsheid en dapperheid','ὁ ἡγεμὼν ἡμᾶς σῴζει = de leider redt ons','ἐκ τῶν κινδύνων = uit de gevaren','πάλιν εἰς τὴν Ἑλλάδα ἄγει = brengt (ons) terug naar Griekenland']],
 ['Ὁ Ζεὺς τὴν Ἀθηνᾶν τίκτει ἐκ τῆς κεφαλῆς· οὕτως οὖν πατὴρ αὐτῆς ἐστιν.',[['Ἀθηνᾶν','acc','lijdend voorwerp'],['πατήρ','nom','naamwoordelijk deel']],'Zeus brengt Athena ter wereld uit zijn hoofd; zo is hij dus haar vader.',['τὴν Ἀθηνᾶν τίκτει = brengt Athena ter wereld','ἐκ τῆς κεφαλῆς = uit (zijn) hoofd','οὕτως οὖν = zo … dus','πατὴρ αὐτῆς ἐστιν = is hij haar vader']],
 ['Ὁ Κρόνος τὸν τῆς γυναικὸς δόλον οὐ νοεῖ· ὡς τάχιστα ἡ Ῥέα αὐτῷ τὸν λίθον παρέχει, αὐτὸν κατεσθίει.',[['γυναικός','gen','bijvoeglijke bepaling'],['αὐτῷ','dat','meewerkend voorwerp']],'Kronos merkt de list van zijn vrouw niet op: zodra Rhea hem de steen geeft, eet hij hem op.',['τὸν τῆς γυναικὸς δόλον οὐ νοεῖ = merkt de list van (zijn) vrouw niet op','ὡς τάχιστα = zodra','αὐτῷ τὸν λίθον παρέχει = hem de steen geeft','αὐτὸν κατεσθίει = eet hij hem op']],
 ['Οἱ ἥρωες τοῦ στόλου μετέχειν ἐθέλουσιν, ὅτι τιμῆς ἐπιθυμοῦσιν.',[['ἥρωες','nom','onderwerp'],['τιμῆς','gen','bij een werkwoord']],'De helden willen meedoen aan de tocht, omdat ze naar eer verlangen.',['οἱ ἥρωες ἐθέλουσιν = de helden willen','τοῦ στόλου μετέχειν = deelnemen aan de tocht','ὅτι = omdat','τιμῆς ἐπιθυμοῦσιν = ze verlangen naar eer']],
 ['Ἐν τῷ ποταμῷ αἱ κόραι οὐ πλύνουσι τὰς ἐσθῆτας, ἀλλ’ ἐνταῦθα παίζουσι σὺν τοῖς ἀδελφοῖς.',[['ποταμῷ','dat','bij een voorzetsel'],['ἀδελφοῖς','dat','bij een voorzetsel']],'In de rivier wassen de meisjes de kleren niet, maar daar spelen ze met hun broers.',['ἐν τῷ ποταμῷ = in de rivier','αἱ κόραι οὐ πλύνουσι τὰς ἐσθῆτας = de meisjes wassen de kleren niet','ἐνταῦθα παίζουσι = daar spelen ze','σὺν τοῖς ἀδελφοῖς = met (hun) broers']],
 ['Ἀντὶ τῆς τῶν θεῶν βοηθείας οἱ Ἕλληνες πολλὰ δῶρα φέρουσιν αὐτοῖς.',[['βοηθείας','gen','bij een voorzetsel'],['δῶρα','acc','lijdend voorwerp'],['αὐτοῖς','dat','meewerkend voorwerp']],'In ruil voor de hulp van de goden brengen de Grieken hun veel geschenken.',['ἀντὶ τῆς τῶν θεῶν βοηθείας = in ruil voor de hulp van de goden','οἱ Ἕλληνες φέρουσιν = de Grieken brengen','πολλὰ δῶρα = veel geschenken','αὐτοῖς = (aan) hen']],
 ['Ἀπονίᾳ ὁ παῖς οὐκ ἐθέλει τῇ μητρὶ βοηθεῖν ἐπὶ τῷ ἔργῳ.',[['ἀπονίᾳ','dat','bijwoordelijke bepaling (reden)'],['μητρί','dat','bij een werkwoord']],'Uit luiheid wil het kind zijn moeder niet helpen bij het werk.',['ἀπονίᾳ = uit luiheid','ὁ παῖς οὐκ ἐθέλει = het kind wil niet','τῇ μητρὶ βοηθεῖν = (zijn) moeder helpen','ἐπὶ τῷ ἔργῳ = bij het werk']],
 ['Κατὰ τὸ πεδίον οἱ ἵπποι φεύγουσιν ἀπὸ τῶν ὑμῶν δοράτων.',[['πεδίον','acc','bij een voorzetsel'],['ἵπποι','nom','onderwerp'],['ὑμῶν','gen','bijvoeglijke bepaling']],'De paarden vluchten over de vlakte weg van jullie lansen.',['κατὰ τὸ πεδίον = over de vlakte','οἱ ἵπποι φεύγουσιν = de paarden vluchten','ἀπὸ τῶν ὑμῶν δοράτων = weg van jullie lansen']]];
E17.forEach(([z,its,nl,k],i)=>{const n=i+1;nvVraag('T17a'+n,'g82','17.'+n,'Ergon 17α',z,its,i===0?'Ook σοφίᾳ is een dativus als bijwoordelijke bepaling (met wijsheid).':'');vt('T17b'+n,'g82','17.'+n,'Ergon 17β',z,nl,k)});
/* ergon 18 */
E18.forEach((x,i)=>nggVraag('T18-'+(i+1),'g82','18.'+(i+1),'Ergon 18',x));
/* ergon 19 */
const E19=[['van verbuigingsgroep 1',['σοφία','πρᾶγμα','ἀσπίδα','τιμῆς','ἐσθής'],['σοφία','τιμῆς']],
 ['van verbuigingsgroep 2',['ὅπλα','ἀρετῆς','φίλοις','κίνδυνος','ἀνδρός'],['ὅπλα','φίλοις','κίνδυνος']],
 ['van verbuigingsgroep 3',['τέχνην','λιμήν','ἥρως','ὀνόματα','πεδία'],['λιμήν','ἥρως','ὀνόματα']],
 ['in de nominativus',['Ἑλλάδος','ἥλιος','ἐσθής','τιμῆς','ἡγεμών'],['ἥλιος','ἐσθής','ἡγεμών']],
 ['in de genitivus',['φωτός','θρόνου','φόβος','Ἕλλησι','τέχνης'],['φωτός','θρόνου','τέχνης']],
 ['in de dativus',['φόβῳ','κεφαλαῖς','λιμένι','φῶς','ἥρωσιν'],['φόβῳ','κεφαλαῖς','λιμένι','ἥρωσιν']],
 ['in de accusativus',['Ἕλλην','Ἑλλάς','ἄνδρα','σοφίαν','κόρας'],['ἄνδρα','σοφίαν','κόρας']],
 ['in het enkelvoud',['πλοῖα','χώρᾳ','δόρυ','ἔργων','στόλῳ'],['χώρᾳ','δόρυ','στόλῳ']],
 ['in het meervoud',['δόρατα','κίνδυνοι','θάλαττα','φίλους','ὀνόματι'],['δόρατα','κίνδυνοι','φίλους']]];
const U19={'πρᾶγμα':'groep 3','ἀσπίδα':'groep 3 (acc ev)','ἐσθής':'groep 3','ἀρετῆς':'groep 1','ἀνδρός':'groep 3','τέχνην':'groep 1','πεδία':'groep 2 (onzijdig mv)','Ἑλλάδος':'gen','τιμῆς':'gen','φόβος':'nom','Ἕλλησι':'dat mv','φῶς':'nom/acc','Ἕλλην':'nom','Ἑλλάς':'nom','πλοῖα':'mv','ἔργων':'gen mv','θάλαττα':'ev','ὀνόματι':'dat ev','κόρας':'acc mv (of gen ev)'};
E19.forEach(([kenm,rij,goed],i)=>{const n=i+1,niet=rij.filter(x=>!goed.includes(x));
 const f=[[...goed,niet[0]],goed.slice(0,-1),[...goed.slice(1),niet[niet.length-1]]].map(x=>x.join(', '));
 mk('T19-'+n,'g82','19.'+n,`Ergon 19: welke woorden zijn ${kenm}? ${rij.join(' · ')}`,goed.join(', '),[...new Set(f)].filter(x=>x!==goed.join(', ')).map(x=>[x,'Bekijk elk woord apart: één ervan klopt niet, of er mist er een.']),
  `${goed.join(', ')}.${niet.length?' Niet: '+niet.map(x=>`${x}${U19[x]?' ('+U19[x]+')':''}`).join(', ')+'.':''}`,{q:`Ergon 19: zoek alle woorden ${kenm}: ${rij.join(' · ')}`},{mc:1,tvVrij:true})});

/* =================== samenvoegen =================== */
V.SECS.push(...SECS);V.Q.push(...Q);
const idx=new Map(V.SECS.map((s,i)=>[s,i]));
V.SECS.sort((a,b)=>{const pa=a.par==='mix'?1e9:a.par==='th2'?idx.get(V.SECS.find(s=>s.par==='ww'))-0.5:idx.get(a),pb=b.par==='mix'?1e9:b.par==='th2'?idx.get(V.SECS.find(s=>s.par==='ww'))-0.5:idx.get(b);return pa-pb||idx.get(a)-idx.get(b)});
V.leer=(V.leer||[]).filter(p=>p!=='th2');{const k=V.leer.indexOf('ww');V.leer.splice(k<0?V.leer.length:k,0,'th2')}
V.PN.th2='Grammatica Thema 2 (herhalen) · HB p. 97–109';
})();
