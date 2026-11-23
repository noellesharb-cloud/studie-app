/* Grieks, aanvulling (23 nov 2026): grammatica les 11 en de woorden van les 2, 3, 4 en 6 (herhalen voor de toets van 10 dec).
   Bron: foto's van Hulpboek p. 112–115 (11.1 persoonsvormen, 11.2 infinitivus, imperativus, vocativus, ERGON 1–7)
   en tekstboek p. 26–27 (les 2 Kosmos), 28–29 (les 3 Kronos), 30–31 (les 4 Zeus) en 40–41 (les 6 Goden).
   Woorden en betekenissen letterlijk van de lijsten; vet = leerwoord. Antwoorden, modelvertalingen en uitleg zijn van Claude
   en kunnen afwijken van die van de docent.
   Gate: ERGON 1–2 en 3–4 gaan open met het huiswerk van 20 en 24 nov; de woorden van les 2–6 zijn al behandeld (huiswerk.js);
   11.2 en ERGON 5–7 gaan pas open als een huiswerk ze opgeeft.
   Ontbreken nog: woorden les 1, 5, 7 en 10, en het grammatica-overzicht van Thema 2. */
(()=>{
const V=VAKDATA.gr;if(!V)return;
const G=s=>`<span class="gr">${s}</span>`;
const GR=/([Ͱ-Ͽἀ-῿][Ͱ-Ͽἀ-῿’' ,]*[Ͱ-Ͽἀ-῿])/g;
const g=s=>String(s).replace(GR,m=>G(m));
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=(arr,n,not)=>shuf([...new Set(arr)].filter(x=>x!==not)).slice(0,n);
const SECS=[],Q=[],BEG=[],WOORD=[];
const sec=(id,par,nr,name,c,sub,rules)=>SECS.push({id,par,nr,name,c,sub,rules:rules.map(r=>[g(r[0]),g(r[1]||''),g(r[2]||'')])});
/* meerkeuze: id, o, nr, vraag, antwoord, fout[] (tekst of [tekst, waarom]), uitleg, variant ({q} of {q,a,f}), extra velden */
const mk=(id,o,nr,q,a,f,u,v,x)=>Q.push(Object.assign({id,o,nr,q:g(q),a:g(a),f:f.map(y=>Array.isArray(y)?[g(y[0]),g(y[1])]:g(y)),u:g(u),
  v:v.a?{q:g(v.q),a:g(v.a),f:v.f.map(y=>Array.isArray(y)?[g(y[0]),g(y[1])]:g(y))}:{q:g(v.q)}},x||{}));
/* open: id, o, nr, vraag, kernpunten[], modelantwoord, variantvraag */
const op=(id,o,nr,q,k,vb,vq)=>Q.push({id,o,nr,t:'open',q:g(q),k:k.map(g),vb:[g(vb)],v:{q:g(vq)}});

/* =================== 11.1 PERSOONSVORMEN (HB p. 112) =================== */
const UIT=[['-ω','ik','1 ev'],['-εις','jij','2 ev'],['-ει','hij/zij/het','3 ev'],['-ομεν','wij','1 mv'],['-ετε','jullie','2 mv'],['-ουσι(ν)','zij','3 mv']];
const PG=['1 ev','2 ev','3 ev','1 mv','2 mv','3 mv'];
sec('pu','g11','11.1','Persoonsuitgangen (praesens)','--c1','HB p. 112 · stam + persoonsuitgang = wie het doet',
 UIT.map(u=>[u[0],u[1]+' ('+u[2]+')','λύ'+u[0].slice(1)]).concat([
  ['Let op 1','Persoonlijk vnw (ἐγώ, σύ) alleen bij nadruk','Σὺ μὲν χαίρεις, ἐγὼ δ’ οὔ. = Jíj bent wel blij, maar ík niet.'],
  ['Let op 2','Onzijdig meervoud als onderwerp → persoonsvorm in het enkelvoud','Τὰ τέκνα χαίρει. = De kinderen zijn blij.']]));
UIT.forEach((u,i)=>{const fout=shuf(UIT.filter(x=>x!==u)).slice(0,3);
 mk('pu'+i,'pu','HB p. 112',`Bij welke persoon hoort de persoonsuitgang ${u[0]} (zoals in λύ${u[0].slice(1)})?`,`${u[1]} (${u[2]})`,
  fout.map(x=>[`${x[1]} (${x[2]})`,`${x[1]} heeft de uitgang ${x[0]}.`]),
  `${u[0]} = ${u[1]} (${u[2]}). Het rijtje: -ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν).`,
  {q:`Welke persoonsuitgang hoort bij <b>${u[1]}</b> (${u[2]})?`,a:u[0],f:fout.map(x=>[x[0],`${x[0]} hoort bij ${x[1]}.`])})});
mk('pu6','pu','HB p. 112 · Let op','Τὰ τέκνα χαίρει betekent: de kinderen zijn blij. Waarom staat χαίρει in het enkelvoud?','Het onderwerp is een onzijdig meervoud: dan staat de persoonsvorm in het enkelvoud',
 [['Het is een drukfout','Nee, dit is een vaste regel.'],['τέκνα is enkelvoud','τὰ τέκνα is meervoud: de kinderen.'],['Bij χαίρω is het altijd enkelvoud','Nee: χαίρουσι bestaat ook (zij zijn blij).']],
 'Is het onderwerp een onzijdig meervoud (τὰ τέκνα, τὰ τέρατα, τὰ θηρία), dan staat de persoonsvorm in het enkelvoud. Vertaal hem wel als meervoud: de kinderen <b>zijn</b> blij.',
 {q:'Τὰ τέρατα φεύγει. Hoe vertaal je φεύγει hier, en waarom?',a:'zij vluchten: τὰ τέρατα is onzijdig meervoud, dus de persoonsvorm staat in het enkelvoud',f:[['hij vlucht: φεύγει is enkelvoud','Kijk naar het onderwerp: τὰ τέρατα = de monsters (mv).'],['jij vlucht','Dat zou φεύγεις zijn.'],['wij vluchten','Dat zou φεύγομεν zijn.']]},{mc:1});
mk('pu7','pu','HB p. 112 · Let op','Waarom staan ἐγώ en σύ in de zin Σὺ μὲν χαίρεις, ἐγὼ δ’ οὔ?','Voor nadruk: jíj wel, ík niet',
 [['Omdat de zin anders niet klopt','Zonder ἐγώ/σύ zie je de persoon ook aan de uitgang (χαίρεις = jij bent blij).'],['Omdat het een vraag is','Het is geen vraag.'],['Omdat het een bevel is','Het is geen bevel.']],
 'Aan de persoonsvorm zie je al wie het onderwerp is, dus ἐγώ en σύ zijn meestal niet nodig. Staan ze er wel, dan is er nadruk: Jíj bent wel blij, maar ík niet.',
 {q:'Wanneer gebruikt het Grieks een persoonlijk voornaamwoord als ἐγώ of σύ als onderwerp?',a:'Alleen als er nadruk nodig is',f:[['Altijd','Nee: aan de uitgang zie je al wie het doet.'],['Nooit','Wel bij nadruk, zoals Σὺ μὲν χαίρεις, ἐγὼ δ’ οὔ.'],['Alleen in vragen','Het gaat om nadruk, niet om vragen.']]},{mc:1});

/* ERGON 1: rijtjes ἥκω en πέμπω (zelfde vraagsoort rij als λύω en εἰμί in gr3.js) */
const PERS=['ik','jij','hij/zij/het','wij','jullie','zij (mv)'];
const R1={'ἥκω':{nl:'komen',f:['ἥκω','ἥκεις','ἥκει','ἥκομεν','ἥκετε','ἥκουσι(ν)'],x:['ἥκεμεν','ἥκοτε','ἥκεσι(ν)'],
   t:['ik kom','jij komt','hij komt','wij komen','jullie komen','zij komen'],u:'Regelmatig, net als λύω: stam <b>ἡκ-</b> + -ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν).'},
 'πέμπω':{nl:'zenden, sturen',f:['πέμπω','πέμπεις','πέμπει','πέμπομεν','πέμπετε','πέμπουσι(ν)'],x:['πέμπεμεν','πέμποτε','πέμπεσι(ν)'],
   t:['ik stuur','jij stuurt','hij stuurt','wij sturen','jullie sturen','zij sturen'],u:'Regelmatig, net als λύω: stam <b>πεμπ-</b> + -ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν).'}};
sec('e1','g11','1','Ergon 1: rijtjes ἥκω en πέμπω','--c2','HB p. 113 · neem het schema over en vul het in',
 PG.map((p,i)=>[p,R1['ἥκω'].f[i]+' = '+R1['ἥκω'].t[i],R1['πέμπω'].f[i]+' = '+R1['πέμπω'].t[i]]));
if(V.RIJ){Object.assign(V.RIJ,R1);
 Object.keys(R1).forEach((w,k)=>Q.push({id:'e1-rij'+k,o:'e1',nr:'1',type:'rij',w,a:R1[w].f.join(', '),q:`Ergon 1: maak het rijtje van ${G(w)} (${R1[w].nl}). Zet de vormen op de goede plek.`,
  tvIn:PERS,tvVrij:true,tvA:R1[w].f.map(f=>f.includes('(ν)')?f.replace('(ν)','')+' / '+f.replace('(ν)','ν'):f),
  tv:`Ergon 1: schrijf het rijtje van ${G(w)} (${R1[w].nl}) op. Typ de vormen in het Grieks, of schrijf ze op papier en laat de vakjes leeg.`}))}
Object.keys(R1).forEach((w,k)=>{const r=R1[w];r.f.forEach((f,i)=>{const kies=shuf([0,1,2,3,4,5].filter(j=>j!==i)).slice(0,3);
 Q.push({id:`e1-${k}${i}`,o:'e1',nr:'1',q:`Ergon 1: wat betekent ${G(f)}?`,a:r.t[i],tvAlt:i===2?[r.t[i].replace('hij','zij'),r.t[i].replace('hij','het'),r.t[i].replace('hij','hij/zij/het')]:i===5?[r.t[i].replace('zij','ze')]:[],
  f:kies.map(j=>[r.t[j],`${G(r.f[j])} = ${r.t[j]}.`]),u:`${G(f)} = <b>${r.t[i]}</b> (${PG[i]}).<div class="why">${r.u}</div>`,
  v:{q:`Ergon 1: hoe zeg je in het Grieks: <b>${r.t[i]}</b>?`,a:G(f),f:kies.map(j=>[G(r.f[j]),`Dat is ${r.t[j]}.`])}})})});

/* ERGON 2: persoon, getal en vertaling */
const E2=[['ὀνομάζετε',4,'jullie noemen','ὀνομάζω = noemen'],['κτείνω',0,'ik dood','κτείνω = doden'],['εἶ',1,'jij bent','εἰμί = zijn (onregelmatig)'],
 ['φεύγει',2,'hij vlucht','φεύγω = vluchten'],['φαίνουσιν',5,'zij tonen','φαίνω = tonen'],['ἐσμέν',3,'wij zijn','εἰμί = zijn (onregelmatig)'],
 ['ἁρπάζει',2,'hij rooft','ἁρπάζω = roven'],['θαυμάζω',0,'ik bewonder','θαυμάζω = bewonderen, verbaasd zijn over'],['διώκετε',4,'jullie achtervolgen','διώκω = achtervolgen, wegjagen'],
 ['διαφθείρεις',1,'jij vernietigt','διαφθείρω = vernietigen, bederven'],['τίκτουσι',5,'zij brengen ter wereld','τίκτω = ter wereld brengen'],['παρασκευάζομεν',3,'wij maken klaar','παρασκευάζω = klaarmaken']];
sec('e2','g11','2','Ergon 2: persoon, getal en vertaling','--c3','HB p. 113 · α persoon en getal · β vertalen',
 E2.map((e,i)=>[(i+1)+'. '+e[0],PG[e[1]],e[2]]));
const alt=t=>{const a=[];if(/^hij /.test(t))a.push(t.replace(/^hij/,'zij'),t.replace(/^hij/,'het'),t.replace(/^hij/,'hij/zij/het'));
 if(/^zij /.test(t))a.push(t.replace(/^zij/,'ze'));if(/^jij /.test(t))a.push(t.replace(/^jij/,'je'));if(/^wij /.test(t))a.push(t.replace(/^wij/,'we'));
 if(t==='ik bewonder')a.push('ik ben verbaasd','ik verbaas me');return a};
E2.forEach((e,i)=>{const n=i+1,[f,p,t,b]=e,fout=shuf([0,1,2,3,4,5].filter(j=>j!==p)).slice(0,3),ui=UIT[p];
 mk(`e2a${n}`,'e2',`2.${n}`,`Ergon 2α: welke persoon en welk getal is ${f}?`,PG[p],fout.map(j=>[PG[j],`${PG[j]} heeft de uitgang ${UIT[j][0]}.`]),
  `${f}: ${p===1&&f==='εἶ'||p===3&&f==='ἐσμέν'?'een vorm van εἰμί, die is onregelmatig: εἰμί, εἶ, ἐστί(ν), ἐσμέν, ἐστέ, εἰσί(ν).':'uitgang '+ui[0]+' = '+ui[1]+'.'} Dus <b>${PG[p]}</b>.`,
  {q:`Ergon 2α: ${f}. Wie doet het: ik, jij, hij, wij, jullie of zij?`,a:`${ui[1]} (${PG[p]})`,f:fout.map(j=>[`${UIT[j][1]} (${PG[j]})`,`${UIT[j][1]} heeft de uitgang ${UIT[j][0]}.`])},{tvVrij:true});
 const pool=E2.filter(x=>x!==e);const ff=pick(pool.map(x=>x[2]),3,t);
 mk(`e2b${n}`,'e2',`2.${n}`,`Ergon 2β: wat betekent ${f}?`,t,ff.map(x=>[x,`Dat is ${pool.find(y=>y[2]===x)[0]}.`]),`${f} = <b>${t}</b> (${PG[p]}). ${b}.`,
  {q:`Ergon 2β: hoe zeg je in het Grieks: <b>${t}</b>?`,a:f,f:ff.map(x=>[pool.find(y=>y[2]===x)[0],`Dat is ${x}.`])},{tvAlt:alt(t)})});

/* ERGON 3: persoonsvormen in zinnen + vertalen */
const E3=[
 ['Αἱ Ἅρπυιαι τὸ τοῦ γέροντος δεῖπνον ἁρπάζουσιν, ἀλλ’ οἱ ἥρωες διώκουσιν αὐτάς.','ἁρπάζουσιν (3 mv) en διώκουσιν (3 mv)',
  ['ἁρπάζουσιν (3 mv) en αὐτάς (3 mv)','ἁρπάζουσιν (3 ev) en διώκουσιν (3 ev)','δεῖπνον (3 ev) en διώκουσιν (3 mv)'],
  'De Harpijen roven de maaltijd van de oude man, maar de helden jagen hen weg.',
  ['αἱ Ἅρπυιαι = de Harpijen (onderwerp)','τὸ τοῦ γέροντος δεῖπνον = de maaltijd van de oude man','ἁρπάζουσιν = (zij) roven','οἱ ἥρωες διώκουσιν = de helden jagen weg / achtervolgen','αὐτάς = hen (de Harpijen)']],
 ['Ὁ Ἰάσων πρῶτον μὲν πέλειαν διὰ τῶν πετρῶν πέμπει, ἔπειτα δὲ τὸ πλοῖον.','πέμπει (3 ev)',
  ['πέμπει (3 mv)','πρῶτον (1 ev) en πέμπει (3 ev)','πέλειαν (3 ev) en πέμπει (3 ev)'],
  'Iason stuurt eerst een duif tussen de rotsen door, daarna het schip.',
  ['πρῶτον μὲν … ἔπειτα δέ = eerst … daarna','πέλειαν = een duif (acc)','διὰ τῶν πετρῶν = door de rotsen (heen)','πέμπει = (hij) stuurt','τὸ πλοῖον = het schip (ook lijdend voorwerp bij πέμπει)']],
 ['Τί τοὺς λόγους ἡμῶν οὐ γιγνώσκετε;','γιγνώσκετε (2 mv)',
  ['γιγνώσκετε (1 mv)','γιγνώσκετε (2 ev)','ἡμῶν (1 mv) en γιγνώσκετε (2 mv)'],
  'Waarom begrijpen jullie onze woorden niet?',
  ['τί = waarom (vraag)','τοὺς λόγους ἡμῶν = onze woorden','οὐ γιγνώσκετε = (jullie) begrijpen niet']],
 ['Τῆς μάχης οὔποτε μετέχεις, ὅτι φόβον ἔχεις.','μετέχεις (2 ev) en ἔχεις (2 ev)',
  ['μετέχεις (3 ev) en ἔχεις (3 ev)','μετέχεις (2 ev) en φόβον (2 ev)','μετέχεις (2 mv) en ἔχεις (2 mv)'],
  'Je neemt nooit deel aan de strijd, omdat je bang bent (angst hebt).',
  ['τῆς μάχης μετέχεις = je neemt deel aan de strijd (μετέχω + gen)','οὔποτε = nooit','ὅτι = omdat','φόβον ἔχεις = je hebt angst, je bent bang']],
 ['Ἐγὼ μὲν νῦν οἶνον πίνω, ὑμεῖς δ’ οὔ· ἔργον γὰρ ἔτι πράττετε.','πίνω (1 ev) en πράττετε (2 mv)',
  ['πίνω (1 ev) en ὑμεῖς (2 mv)','πίνω (3 ev) en πράττετε (2 ev)','οἶνον (1 ev) en πράττετε (2 mv)'],
  'Ik drink nu wel wijn, maar jullie niet: want jullie zijn nog aan het werk (doen nog werk).',
  ['ἐγὼ μὲν … ὑμεῖς δ’ οὔ = ík wel … maar jullie niet (nadruk)','οἶνον πίνω = ik drink wijn','γάρ = want','ἔργον ἔτι πράττετε = jullie doen nog werk']]];
sec('e3','g11','3','Ergon 3: persoonsvormen in zinnen','--c4','HB p. 113 · α persoonsvorm(en) met persoon en getal · β vertalen',
 E3.map((e,i)=>[(i+1)+'. '+e[0],e[1],e[3]]).concat([['Woorden','ἡ πέλεια = duif · τί = waarom','']]));
E3.forEach((e,i)=>{const n=i+1;
 mk(`e3a${n}`,'e3',`3.${n}`,`Ergon 3α: welke persoonsvorm(en) staan in deze zin, met persoon en getal?<br>${e[0]}`,e[1],e[2],
  `Een persoonsvorm is een vorm van een werkwoord met een persoonsuitgang (-ω, -εις, -ει, -ομεν, -ετε, -ουσι). Hier: <b>${e[1]}</b>.`,
  {q:`Ergon 3α: zoek de persoonsvorm(en) en geef persoon en getal:<br>${e[0]}`},{tv:g(`Ergon 3α: schrijf uit deze zin de persoonsvorm(en) op, met persoon (1, 2, 3) en getal (ev, mv):<br>${e[0]}`),tvVrij:true});
 op(`e3b${n}`,'e3',`3.${n}`,`Ergon 3β: vertaal in je schrift:<br>${e[0]}`,e[4],e[3],`Ergon 3β: vertaal nog een keer:<br>${e[0]}`)});

/* ERGON 4: kies de juiste persoonsvorm + vertalen */
const E4=[
 ['Ὅτι οἱ φίλοι ἥκουσιν, ἡμεῖς δεῖπνον μέγιστον ___.','παρασκευάζομεν',[['παρασκευάζετε','Dat is jullie (2 mv).'],['παρασκευάζουσιν','Dat is zij (3 mv).']],
  'Het onderwerp is ἡμεῖς (wij), dus 1 mv: -ομεν.','Omdat de vrienden gekomen zijn, maken wij een zeer grote maaltijd klaar.',
  ['ὅτι = omdat','οἱ φίλοι ἥκουσιν = de vrienden zijn gekomen (ἥκω = komen, gekomen zijn)','ἡμεῖς … παρασκευάζομεν = wij maken klaar','δεῖπνον μέγιστον = een zeer grote maaltijd']],
 ['Εἰ ἐμοὶ τὴν ἀρετήν σου φαίνεις, ἐγὼ τιμὴν ___ σοι.','παρέχω',[['παρέχεις','Dat is jij (2 ev).'],['παρέχει','Dat is hij (3 ev).']],
  'Het onderwerp is ἐγώ (ik), dus 1 ev: -ω.','Als jij mij je dapperheid toont, geef ik jou eer.',
  ['εἰ = als','ἐμοί = (aan) mij','τὴν ἀρετήν σου φαίνεις = jij toont je dapperheid (moed)','ἐγὼ τιμὴν παρέχω σοι = ik geef jou eer']],
 ['Οἱ ἀδελφοὶ καὶ αἱ ἀδελφαί μου τὴν τῶν Ἑλλήνων σοφίαν ___.','θαυμάζουσιν',[['θαυμάζω','Dat is ik (1 ev).'],['θαυμάζομεν','Dat is wij (1 mv).']],
  'Het onderwerp is οἱ ἀδελφοὶ καὶ αἱ ἀδελφαί (zij, mv), dus 3 mv: -ουσι(ν).','Mijn broers en zussen bewonderen de wijsheid van de Grieken.',
  ['οἱ ἀδελφοὶ καὶ αἱ ἀδελφαί μου = mijn broers en zussen (onderwerp)','τὴν τῶν Ἑλλήνων σοφίαν = de wijsheid van de Grieken','θαυμάζουσιν = (zij) bewonderen']],
 ['Τὰ τέρατα τάχα φεύγει· σὺ γὰρ αὐτὰ ___.','διώκεις',[['διώκω','Dat is ik (1 ev).'],['διώκει','Dat is hij (3 ev).']],
  'Het onderwerp is σύ (jij), dus 2 ev: -εις. Let op: φεύγει staat in het enkelvoud omdat τὰ τέρατα onzijdig meervoud is.','De monsters vluchten snel, want jij achtervolgt ze.',
  ['τὰ τέρατα = de monsters','φεύγει = vluchten (ev bij onzijdig meervoud, vertaal als meervoud)','τάχα = snel','σὺ γὰρ αὐτὰ διώκεις = want jij achtervolgt ze']],
 ['Ὡς τάχιστα ἡ Ῥέα τὸ τέκνον τίκτει, ὁ Κρόνος ___ αὐτό.','ἁρπάζει',[['ἁρπάζετε','Dat is jullie (2 mv).'],['ἁρπάζω','Dat is ik (1 ev).']],
  'Het onderwerp is ὁ Κρόνος (hij), dus 3 ev: -ει.','Zodra Rhea het kind ter wereld brengt, rooft Kronos het.',
  ['ὡς τάχιστα = zodra','ἡ Ῥέα τὸ τέκνον τίκτει = Rhea brengt het kind ter wereld','ὁ Κρόνος ἁρπάζει αὐτό = Kronos rooft het']]];
sec('e4','g11','4','Ergon 4: kies de juiste persoonsvorm','--c5','HB p. 113 · α kies de vorm die bij het onderwerp past · β vertalen',
 E4.map((e,i)=>[(i+1)+'. '+e[0].replace('___',e[1]),e[3],e[4]]).concat([['Woorden','μέγιστον = zeer grote · τὸ τέρας, τέρατος = monster','']]));
E4.forEach((e,i)=>{const n=i+1;
 mk(`e4a${n}`,'e4',`4.${n}`,`Ergon 4α: welke persoonsvorm maakt de zin compleet?<br>${e[0]}`,e[1],e[2],e[3]+` Kijk altijd eerst: wie is het onderwerp?`,
  {q:`Ergon 4α: welke vorm hoort op de puntjes? Zoek eerst het onderwerp.<br>${e[0]}`},{mc:1});
 op(`e4b${n}`,'e4',`4.${n}`,`Ergon 4β: vertaal in je schrift:<br>${e[0].replace('___',e[1])}`,e[5],e[4],`Ergon 4β: vertaal nog een keer:<br>${e[0].replace('___',e[1])}`)});

/* =================== 11.2 INFINITIVUS, IMPERATIVUS, VOCATIVUS (HB p. 114) =================== */
sec('g112','g11','11.2','Infinitivus, imperativus en vocativus','--c6','HB p. 114 · het hele werkwoord, de gebiedende wijs en de aanspreekvorm',[
 ['infinitivus','λύειν · εἶναι','(te) losmaken · (te) zijn · uitgang -ειν, vaak met te / om te'],
 ['voorbeeld','Ὁ Ἀχιλλεὺς ἥκειν οὐκ ἐθέλει.','Achilles wil niet komen.'],
 ['voorbeeld','Ὁ χόλος τὸν Ἀχιλλέα ἥκειν κωλύει.','Zijn woede verhindert Achilles om te komen.'],
 ['imperativus ev','λῦε · ἴσθι','maak los! · wees!'],['imperativus mv','λύετε · ἔστε','maak los! · wees!'],
 ['ontkenning','μή','Μὴ λύετε. = Maak niet los!'],
 ['vocativus groep 2 (-ος)','φίλος → φίλε','uitgang -ε'],['vocativus groep 3','πατήρ → πάτερ','vocativus = stam'],
 ['ὦ','Ὦ φίλε, ἄκουέ μου.','(O) Vriend, luister naar mij. ὦ hoef je niet te vertalen']]);
mk('g1','g112','HB p. 114','Aan welke uitgang herken je de infinitivus praesens van een regelmatig werkwoord?','-ειν',[['-ει','-ει is hij/zij/het (3 ev).'],['-ετε','-ετε is jullie, of de imperativus meervoud.'],['-ε','-ε is de imperativus enkelvoud.']],
 'Infinitivus praesens = stam + <b>-ειν</b>: λύειν, ἥκειν, πέμπειν. Van εἰμί: εἶναι.',{q:'Welke vorm is ἥκειν?',a:'infinitivus (komen)',f:[['hij komt','Dat is ἥκει.'],['kom!','Dat is ἧκε.'],['jullie komen','Dat is ἥκετε.']]});
mk('g2','g112','HB p. 114','Vertaal: Ὁ Ἀχιλλεὺς ἥκειν οὐκ ἐθέλει.','Achilles wil niet komen.',[['Achilles komt niet.','Dat is Ὁ Ἀχιλλεὺς οὐχ ἥκει.'],['Achilles wil niet dat hij komt.','ἥκειν hoort bij Achilles zelf.'],['Achilles moet niet komen.','ἐθέλει = hij wil.']],
 'De infinitivus ἥκειν (komen) is een aanvulling bij de persoonsvorm ἐθέλει (hij wil).',{q:'Hoe zeg je in het Grieks: Achilles wil niet komen?',a:'Ὁ Ἀχιλλεὺς ἥκειν οὐκ ἐθέλει.',f:[['Ὁ Ἀχιλλεὺς οὐχ ἥκει.','Dat is: Achilles komt niet.'],['Ὁ Ἀχιλλεὺς ἥκει οὐκ ἐθέλειν.','Andersom: ἐθέλει moet de persoonsvorm zijn.'],['Ὁ χόλος τὸν Ἀχιλλέα ἥκειν κωλύει.','Dat is: zijn woede verhindert Achilles om te komen.']]});
mk('g3','g112','HB p. 114','Wat is de imperativus enkelvoud van πέμπω (sturen)?','πέμπε',[['πέμπει','πέμπει = hij stuurt.'],['πέμπετε','πέμπετε = stuur! (mv), of jullie sturen.'],['πέμπειν','πέμπειν = sturen (infinitivus).']],
 'Imperativus enkelvoud = stam + <b>-ε</b> (λῦε, πέμπε). Meervoud = stam + <b>-ετε</b> (λύετε, πέμπετε).',{q:'Wat betekent πέμπε?',a:'stuur! (tegen één persoon)',f:[['hij stuurt','Dat is πέμπει.'],['sturen','Dat is πέμπειν.'],['jullie sturen','Dat is πέμπετε.']]});
mk('g4','g112','HB p. 114','λύετε kan twee dingen betekenen. Welke?','jullie maken los, óf: maak los! (tegen meer personen)',[['hij maakt los, óf: maak los!','Hij maakt los = λύει.'],['losmaken, óf: maak los!','Losmaken = λύειν.'],['wij maken los, óf: jullie maken los','Wij maken los = λύομεν.']],
 'De imperativus meervoud is gelijk aan de persoonsvorm 2 mv: λύετε. De zin beslist: een bevel of verzoek, vaak met een vocativus (Ὦ φίλοι, λύετε) → imperativus.',
 {q:'Ὦ κόραι, ἀκούετε ἡμῶν. Wat is ἀκούετε hier?',a:'imperativus meervoud: luister!',f:[['persoonsvorm: jullie luisteren','Er staat een aanspreekvorm (ὦ κόραι) bij: het is een bevel.'],['infinitivus: luisteren','Dat zou ἀκούειν zijn.'],['imperativus enkelvoud: luister!','Enkelvoud is ἄκουε.']]},{mc:1});
mk('g5','g112','HB p. 114','Welk woord gebruik je als ontkenning bij een imperativus?','μή',[['οὐ','οὐ (οὐκ, οὐχ) hoort bij een gewone persoonsvorm.'],['οὐδέ','οὐδέ = en niet, ook niet.'],['οὔποτε','οὔποτε = nooit.']],
 'Bij een bevel of verzoek: <b>μή</b>. Μὴ λύετε = Maak niet los! Bij een gewone persoonsvorm: οὐ.',{q:'Vertaal: Μὴ λύετε.',a:'Maak niet los!',f:[['Jullie maken niet los.','Dat zou οὐ λύετε zijn.'],['Hij maakt niet los.','Dat is οὐ λύει.'],['Niet losmaken is goed.','μή + imperativus = een verbod.']]});
mk('g6','g112','HB p. 114','Wat is de vocativus van ὁ φίλος?','φίλε',[['φίλος','Bij groep 2 op -ος is de vocativus anders: -ε.'],['φίλου','φίλου is genitivus.'],['φίλον','φίλον is accusativus.']],
 'Groep 2 op -ος: vocativus op <b>-ε</b>. φίλος → φίλε, ἄνθρωπος → ἄνθρωπε, υἱός → υἱέ.',{q:'Ὦ φίλε, ἄκουέ μου. Welke naamval is φίλε?',a:'vocativus',f:[['nominativus','De nominativus is φίλος.'],['accusativus','De accusativus is φίλον.'],['genitivus','De genitivus is φίλου.']]});
mk('g7','g112','HB p. 114','Wat is de vocativus van ὁ πατήρ?','πάτερ',[['πατήρ','Dat is de nominativus.'],['πατρός','Dat is de genitivus.'],['πατέρε','Groep 3 krijgt geen -ε: de vocativus is de stam.']],
 'Groep 3: de vocativus is gelijk aan de stam. πατήρ → πάτερ, θυγάτηρ → θύγατερ.',{q:'Ὦ θύγατερ … Van welk woord is θύγατερ de vocativus?',a:'ἡ θυγάτηρ (dochter)',f:[['ὁ πατήρ (vader)','Die vocativus is πάτερ.'],['ἡ μήτηρ (moeder)','Die vocativus is μῆτερ.'],['ὁ υἱός (zoon)','Die vocativus is υἱέ.']]});
mk('g8','g112','HB p. 114','Hoe vertaal je ὦ bij een vocativus (Ὦ φίλε, ἄκουέ μου)?','Je hoeft het niet te vertalen (hooguit: O)',[['met: wie','ὦ is geen vraagwoord.'],['met: waar','ὦ is geen vraagwoord.'],['met: niet','Dat is οὐ of μή.']],
 'ὦ staat bijna altijd bij een vocativus en hoef je niet te vertalen: (O) Vriend, luister naar mij.',{q:'Vertaal: Ὦ κόραι, ἀκούετε ἡμῶν.',a:'Meisjes, luister naar ons.',f:[['O meisjes, jullie luisteren naar ons.','ἀκούετε is hier een bevel (er staat een vocativus bij).'],['Meisjes, luister naar mij.','ἡμῶν = ons.'],['De meisjes luisteren naar ons.','κόραι met ὦ is een aanspreekvorm, geen onderwerp.']]});

/* ERGON 5: persoonsvorm, infinitivus, vertaling */
const E5=[
 ['Πῶς τὸ ἔργον πράττειν μέλλεις ταῖς ἀδελφαῖς σου;','μέλλεις','πράττειν','Hoe ga je het werk voor je zussen doen?',['πῶς = hoe','μέλλεις = je zult, je gaat (μέλλω + inf)','πράττειν = doen','τὸ ἔργον = het werk','ταῖς ἀδελφαῖς σου = voor je zussen (dat)']],
 ['Ἡ τῆς τέχνης θεὰ δυνατή ἐστι σοφίαν ἐπὶ τῷ ἔργῳ παρέχειν τοῖς ἥρωσιν.','ἐστι','παρέχειν','De godin van de kunst is in staat de helden wijsheid te geven bij het werk.',['ἡ τῆς τέχνης θεά = de godin van de kunst(vaardigheid)','δυνατή ἐστι = zij is in staat','παρέχειν = te geven','σοφίαν = wijsheid','τοῖς ἥρωσιν = aan de helden']],
 ['Τότε τοὺς θεοὺς ἱκετεύομεν τὰς γυναῖκας τάχα σῴζειν ἐκ τοῦ κινδύνου.','ἱκετεύομεν','σῴζειν','Dan smeken wij de goden de vrouwen snel uit het gevaar te redden.',['τότε = dan, toen','ἱκετεύομεν = wij smeken','τοὺς θεούς = de goden','σῴζειν = te redden','τὰς γυναῖκας = de vrouwen','ἐκ τοῦ κινδύνου = uit het gevaar']],
 ['Πρῶτον ὀφείλετε ἀκούειν τοὺς λόγους μου· ἔπειτα καὶ ὑμῖν ἔξεστι λέγειν.','ὀφείλετε en ἔξεστι','ἀκούειν en λέγειν','Eerst moeten jullie naar mijn woorden luisteren; daarna mogen jullie ook spreken.',['πρῶτον … ἔπειτα = eerst … daarna','ὀφείλετε ἀκούειν = jullie zijn verplicht te luisteren','τοὺς λόγους μου = mijn woorden','ὑμῖν ἔξεστι λέγειν = het is jullie toegestaan te spreken','καί = ook']],
 ['Οἱ ἥρωες τὰς Ἁρπυίας τὸ τοῦ γέροντος δεῖπνον ἁρπάζειν κωλύουσιν.','κωλύουσιν','ἁρπάζειν','De helden verhinderen de Harpijen de maaltijd van de oude man te roven.',['οἱ ἥρωες = de helden (onderwerp)','κωλύουσιν = verhinderen, houden tegen','τὰς Ἁρπυίας = de Harpijen','ἁρπάζειν = te roven','τὸ τοῦ γέροντος δεῖπνον = de maaltijd van de oude man']],
 ['Δῶρα παρέχειν σοι ἐθέλω ἀντὶ τῆς βοηθείας σου.','ἐθέλω','παρέχειν','Ik wil jou geschenken geven in ruil voor je hulp.',['ἐθέλω = ik wil','παρέχειν = geven','δῶρα = geschenken','σοι = (aan) jou','ἀντὶ τῆς βοηθείας σου = in ruil voor (in plaats van) jouw hulp']]];
sec('e5','g11','5','Ergon 5: persoonsvorm en infinitivus','--c1','HB p. 115 · α persoonsvorm · β infinitivus · γ vertalen',
 [['Voorbeeld','Ὅπλα ἔχειν ἐθέλεις.','pv ἐθέλεις · inf ἔχειν · Jij wilt wapens hebben.']].concat(E5.map((e,i)=>[(i+1)+'. '+e[0],'pv '+e[1]+' · inf '+e[2],e[3]]),
 [['Woorden','δυνατή ἐστι = (zij) is in staat · ἱκετεύω = smeken, bidden','ὀφείλω = verplicht zijn · ἔξεστι + inf = het is toegestaan om']]));
E5.forEach((e,i)=>{const n=i+1,anders=E5.filter((x,j)=>j!==i);
 mk(`e5a${n}`,'e5',`5.${n}`,`Ergon 5αβ: wat is de persoonsvorm en wat is de infinitivus?<br>${e[0]}`,`persoonsvorm ${e[1]} · infinitivus ${e[2]}`,
  [[`persoonsvorm ${e[2]} · infinitivus ${e[1]}`,'Andersom: de infinitivus eindigt op -ειν (of is εἶναι).'],...pick(anders.map(x=>`persoonsvorm ${x[1]} · infinitivus ${x[2]}`),2,'').map(x=>[x,'Die vormen staan in een andere zin.'])],
  `De infinitivus herken je aan <b>-ειν</b>; de persoonsvorm heeft een persoonsuitgang. Hier: persoonsvorm <b>${e[1]}</b>, infinitivus <b>${e[2]}</b>.`,
  {q:`Ergon 5αβ: zoek de persoonsvorm en de infinitivus:<br>${e[0]}`},{tv:g(`Ergon 5: noteer de persoonsvorm (α) en de infinitivus (β):<br>${e[0]}`),tvVrij:true});
 op(`e5c${n}`,'e5',`5.${n}`,`Ergon 5γ: vertaal in je schrift:<br>${e[0]}`,e[4],e[3],`Ergon 5γ: vertaal nog een keer:<br>${e[0]}`)});

/* ERGON 6: vertalen (imperativus en vocativus) */
const E6=[
 ['Ὦ ἥρωες, τοῦ γέροντος ἀκούετε, ἀεὶ γὰρ σόφους λόγους λέγει.','Helden, luister naar de oude man, want hij zegt altijd verstandige woorden.',['ὦ ἥρωες = helden (vocativus)','ἀκούετε = luister! (imperativus mv)','τοῦ γέροντος = naar de oude man (ἀκούω + gen)','ἀεί = altijd','σόφους λόγους λέγει = hij zegt verstandige woorden'],'ἀκούετε','imperativus mv','ἥρωες'],
 ['Ὦ θύγατερ, τὴν μητέρα μὴ ὄργιζε.','Dochter, maak je moeder niet boos.',['ὦ θύγατερ = dochter (vocativus van θυγάτηρ)','μὴ ὄργιζε = maak niet boos! (imperativus ev met μή)','τὴν μητέρα = (je) moeder'],'ὄργιζε','imperativus ev','θύγατερ'],
 ['Σῴζετε, ὦ θεοί, ἡμᾶς καὶ τοὺς παῖδας ἡμῶν ἐκ τοῦ κινδύνου.','Goden, red ons en onze kinderen uit het gevaar.',['σῴζετε = red! (imperativus mv)','ὦ θεοί = goden (vocativus)','ἡμᾶς καὶ τοὺς παῖδας ἡμῶν = ons en onze kinderen','ἐκ τοῦ κινδύνου = uit het gevaar'],'σῴζετε','imperativus mv','θεοί'],
 ['Πάρεχέ μοι τὸ δόρυ καὶ τὴν ἀσπίδα, ὦ υἱέ· τῆς γὰρ μάχης μετέχειν μέλλω.','Geef mij de lans en het schild, zoon; want ik ga deelnemen aan de strijd.',['πάρεχε = geef! (imperativus ev)','μοι = (aan) mij','τὸ δόρυ καὶ τὴν ἀσπίδα = de lans en het schild','ὦ υἱέ = zoon (vocativus van υἱός)','τῆς μάχης μετέχειν μέλλω = ik ga deelnemen aan de strijd'],'πάρεχε','imperativus ev','υἱέ'],
 ['Μετέχετε τοῦ δείπνου, ὦ ἄνδρες, καὶ οἶνον πίνετε.','Neem deel aan de maaltijd, mannen, en drink wijn.',['μετέχετε = neem deel! (imperativus mv, + gen)','τοῦ δείπνου = aan de maaltijd','ὦ ἄνδρες = mannen (vocativus)','οἶνον πίνετε = drink wijn!'],'μετέχετε','imperativus mv','ἄνδρες'],
 ['Μὴ λέγε, ὅτι τὸ ἔργον οὐ γιγνώσκεις.','Zeg niet dat je het werk niet kent.',['μὴ λέγε = zeg niet! (imperativus ev met μή)','ὅτι = dat','τὸ ἔργον οὐ γιγνώσκεις = je kent (begrijpt) het werk niet (gewone persoonsvorm met οὐ)'],'λέγε','imperativus ev',null]];
sec('e6','g11','6','Ergon 6: vertalen met imperativus en vocativus','--c2','HB p. 115 · bevelen, verzoeken en aanspreekvormen',
 E6.map((e,i)=>[(i+1)+'. '+e[0],e[1],'']).concat([['Woorden','σόφους = verstandige · ὀργίζω = boos maken','']]));
E6.forEach((e,i)=>{const n=i+1;
 op(`e6v${n}`,'e6',`6.${n}`,`Ergon 6: vertaal in je schrift:<br>${e[0]}`,e[2],e[1],`Ergon 6: vertaal nog een keer:<br>${e[0]}`);
 mk(`e6a${n}`,'e6',`6.${n}`,`Ergon 6: welke vorm is ${e[3]} in deze zin?<br>${e[0]}`,e[4],
  [['persoonsvorm','Er wordt iemand aangesproken: het is een bevel of verzoek.'],['infinitivus','De infinitivus eindigt op -ειν.'],[e[4]==='imperativus ev'?'imperativus mv':'imperativus ev',e[4]==='imperativus ev'?'Meervoud eindigt op -ετε.':'Enkelvoud eindigt op -ε.']],
  `${e[3]} = <b>${e[4]}</b>. Imperativus ev: -ε (λῦε), mv: -ετε (λύετε).${/[Μμ]ὴ /.test(e[0])?' Met μή: een verbod.':''}`,
  {q:`Ergon 6: is ${e[3]} een bevel aan één persoon of aan meer personen?<br>${e[0]}`,a:e[4]==='imperativus ev'?'aan één persoon (imperativus ev)':'aan meer personen (imperativus mv)',
   f:[[e[4]==='imperativus ev'?'aan meer personen (imperativus mv)':'aan één persoon (imperativus ev)',e[4]==='imperativus ev'?'Meervoud eindigt op -ετε.':'Enkelvoud eindigt op -ε.'],['het is geen bevel','Er wordt iemand aangesproken: het is een bevel.'],['het is een infinitivus','De infinitivus eindigt op -ειν.']]},{mc:1});
 if(e[5])mk(`e6c${n}`,'e6',`6.${n}`,`Ergon 6: welke naamval is ${e[5]} in deze zin?<br>${e[0]}`,'vocativus',[['nominativus','Met ὦ ervoor spreek je iemand aan: vocativus.'],['accusativus','Met ὦ ervoor spreek je iemand aan: vocativus.'],['genitivus','Met ὦ ervoor spreek je iemand aan: vocativus.']],
  `ὦ ${e[5]} = aanspreekvorm: <b>vocativus</b>. Je hoeft ὦ niet te vertalen.`,{q:`Ergon 6: waarom staat er ὦ voor ${e[5]}?`,a:'Omdat iemand wordt aangesproken (vocativus)',f:[['Omdat het onderwerp is','Het onderwerp heeft geen ὦ.'],['Omdat het een vraag is','ὦ is geen vraagwoord.'],['Omdat het een ontkenning is','De ontkenning bij een bevel is μή.']]})});

/* ERGON 7: maak er een bevel of verzoek van */
const E7=[
 ['Οἱ Ἀργοναῦται τὸ πλοῖον λύουσι καὶ τὸν λιμένα λείπουσιν.','Ὦ Ἀργοναῦται, τὸ πλοῖον λύετε καὶ τὸν λιμένα λείπετε.','Argonauten, maak het schip los en verlaat de haven!',
  [['Ὦ Ἀργοναῦται, τὸ πλοῖον λῦε καὶ τὸν λιμένα λεῖπε.','Het zijn meer Argonauten: imperativus mv (-ετε).'],['Ὦ Ἀργοναῦται, τὸ πλοῖον λύουσι καὶ τὸν λιμένα λείπουσιν.','λύουσι en λείπουσιν zijn persoonsvormen, geen bevel.'],['Ὦ Ἀργοναῦται, τὸ πλοῖον λύειν καὶ τὸν λιμένα λείπειν.','Dat zijn infinitivi.']],
  ['ὦ Ἀργοναῦται = Argonauten (vocativus)','λύετε = maak los! (imperativus mv)','λείπετε = verlaat! (imperativus mv)','τὸ πλοῖον … τὸν λιμένα = het schip … de haven']],
 ['Ἡ κόρη τῷ πατρὶ καὶ τῇ μητρὶ ἀγγελίαν πέμπει.','Ὦ κόρη, τῷ πατρὶ καὶ τῇ μητρὶ ἀγγελίαν πέμπε.','Meisje, stuur je vader en moeder een bericht!',
  [['Ὦ κόρη, τῷ πατρὶ καὶ τῇ μητρὶ ἀγγελίαν πέμπετε.','Het is één meisje: imperativus ev (-ε).'],['Ὦ κόρη, τῷ πατρὶ καὶ τῇ μητρὶ ἀγγελίαν πέμπει.','πέμπει = zij stuurt, geen bevel.'],['Ὦ κόρε, τῷ πατρὶ καὶ τῇ μητρὶ ἀγγελίαν πέμπε.','κόρη is groep 1: de vocativus is gelijk aan de nominativus.']],
  ['ὦ κόρη = meisje (vocativus, gelijk aan nom)','πέμπε = stuur! (imperativus ev)','τῷ πατρὶ καὶ τῇ μητρί = (aan) je vader en moeder','ἀγγελίαν = een bericht']],
 ['Ὁ ἄνθρωπος οὐ φοβερός ἐστιν.','Ὦ ἄνθρωπε, μὴ ἴσθι φοβερός.','Man (mens), wees niet bang!',
  [['Ὦ ἄνθρωπε, οὐκ ἴσθι φοβερός.','Bij een bevel is de ontkenning μή, niet οὐ.'],['Ὦ ἄνθρωπος, μὴ ἴσθι φοβερός.','Groep 2 op -ος: vocativus op -ε (ἄνθρωπε).'],['Ὦ ἄνθρωπε, μὴ ἐστὶ φοβερός.','ἐστί = hij is. De imperativus van εἰμί is ἴσθι.']],
  ['ὦ ἄνθρωπε = mens, man (vocativus op -ε)','μὴ ἴσθι = wees niet! (imperativus ev van εἰμί, met μή)','φοβερός = bang']],
 ['Οἱ ἄνδρες τὰ ὅπλα λαμβάνουσι καὶ τῆς μάχης μετέχουσιν.','Ὦ ἄνδρες, τὰ ὅπλα λαμβάνετε καὶ τῆς μάχης μετέχετε.','Mannen, pak de wapens en neem deel aan de strijd!',
  [['Ὦ ἄνδρες, τὰ ὅπλα λάμβανε καὶ τῆς μάχης μέτεχε.','Het zijn meer mannen: imperativus mv (-ετε).'],['Ὦ ἄνδρες, τὰ ὅπλα λαμβάνουσι καὶ τῆς μάχης μετέχουσιν.','Dat zijn persoonsvormen, geen bevel.'],['Ὦ ἄνδρες, μὴ τὰ ὅπλα λαμβάνετε καὶ τῆς μάχης μετέχετε.','In de zin staat geen ontkenning, dus ook geen μή.']],
  ['ὦ ἄνδρες = mannen (vocativus)','λαμβάνετε = pak! (imperativus mv)','τὰ ὅπλα = de wapens','τῆς μάχης μετέχετε = neem deel aan de strijd!']]];
sec('e7','g11','7','Ergon 7: maak er een bevel van','--c3','HB p. 115 · α imperativus (ontkenning: μή) · β vertalen',
 [['Voorbeeld','Ὁ φίλος ἡμᾶς οὐ κωλύει. → Ὦ φίλε, ἡμᾶς μὴ κώλυε.','Vriend, houd ons niet tegen!']].concat(E7.map((e,i)=>[(i+1)+'. '+e[0]+' →',e[1],e[2]]),
 [['Woorden','λείπω = verlaten · ἀγγελία = bericht · φοβερός = bang','']]));
E7.forEach((e,i)=>{const n=i+1;
 mk(`e7a${n}`,'e7',`7.${n}`,`Ergon 7α: maak van deze zin een bevel of verzoek:<br>${e[0]}`,e[1],e[3],
  `Onderwerp wordt aanspreekvorm (ὦ + vocativus), persoonsvorm wordt imperativus (ev -ε, mv -ετε, van εἰμί: ἴσθι / ἔστε), οὐ wordt μή.`,
  {q:`Ergon 7α: hoe wordt dit een bevel? Let op vocativus, imperativus en μή.<br>${e[0]}`},{mc:1,tv:g(`Ergon 7α: schrijf deze zin als bevel of verzoek (denk aan μή bij de ontkenning):<br>${e[0]}`),tvVrij:true});
 op(`e7b${n}`,'e7',`7.${n}`,`Ergon 7β: vertaal de zin die je hebt gemaakt:<br>${e[1]}`,e[4],e[2],`Ergon 7β: vertaal nog een keer:<br>${e[1]}`)});

/* =================== WOORDEN LES 2, 3, 4 EN 6 (Thema 1 en 2, herhalen) =================== */
/* [Grieks, betekenis, vet] */
const W2=[['ἐν ἀρχῇ','in het begin',0],['ἐστί(ν)','(hij/zij/het/er) is, bestaat',1],['ὁ, ἡ, τό','de, het',1],['τὸ Χάος','Chaos',0],['οὐ / οὐκ / οὐχ','niet',1],
 ['ἡ γῆ','land, aarde',1],['ἡ θάλαττα','zee',0],['εἰσί(ν)','(zij/er) zijn, bestaan',1],['ὁ ποταμός','rivier',1],['οὐδέ, οὐδ’','en niet, ook niet',0],
 ['ἡ πέτρα','rots, rotsblok',1],['τὸ δένδρον','boom',1],['τὸ ζῷον','levend wezen',0],['ὁ ἄνθρωπος','mens',1],['ὁ θεός','god',1],['ἡ μάχη','strijd, gevecht',1],
 ['ὁ πόλεμος','oorlog',0],['ἡ εἰρήνη','vrede',0],['τὸ ἀργύριον','geld',0],['τὸ ἔργον','werk, taak; daad',1],['ἡ σχολή','vrije tijd',0],['πρῶτον','eerst',1],
 ['δέ, δ’','en, maar',1],['βλαστάνει','(hij/zij/het) ontstaat',0],['ἰσχυρά','sterke, krachtige',0],['ἡ θεά','godin',1],['ἔπειτα','daarna',1],['καί','en; ook, zelfs',1],
 ['μεγάλοι','grote',0],['τότε','dan, toen, op dat moment',1],['ὁ κόσμος','wereld(orde)',0],['τυκτός','in elkaar gezet, klaar',0],['ἐν τῷ μέσῳ','in het midden',0],
 ['γάρ','want, immers, namelijk',1],['εὐρυόδεια','met zich wijd uitstrekkende wegen',0],['ἐνταῦθα','daar',1],['μέλλουσιν οἰκεῖν','(zij) zullen wonen',0],
 ['ἄνω','(er)boven',0],['ἀστερόεις','rijk aan sterren',0],['κάτω','eronder, beneden',0],['ἀερόεις','met nevelige schemer',0],['ἡ ψυχή','schim (van een overledene)',0]];
const W3=[['ἐπὶ Κρόνου','in de tijd van Kronos',0],['ὁ βίος','(het) leven',1],['ἡδύς','aangenaam',0],['ἀεί','altijd, steeds',1],['λάμπω','schijnen',0],['ὁ ἥλιος','zon',1],
 ['πνέω','waaien',0],['ὁ ἄνεμος','wind',0],['πανταχοῦ','overal',0],['ῥέω','stromen',0],['ποτε','eens, ooit',0],['περισκοπέω','rondkijken',0],['νοέω','waarnemen, opmerken',1],
 ['μέν … δέ','(weliswaar) … maar; … en',1],['τὸ πεδίον','vlakte',1],['τὸ θηρίον','(wild) dier',1],['ὁ ἔλαφος','hert',0],['ἡ ἔχιδνα','adder, slang',0],['ἡ μέλιττα','bij (insect)',0],
 ['τὸ ὄρνεον','vogel',0],['εὐδοκέω','tevreden zijn',0],['ἡ μηλέα','appelboom',0],['φέρω','dragen, brengen',1],['τὸ μῆλον','appel',0],['οὐδείς','niemand',0],['ἐσθίω','eten',0],
 ['κατά, κατ’, καθ’ + acc','(verspreid) over',1],['τρέχω','draven, rennen',0],['ὁ ἵππος','paard',1],['ἀλλά, ἀλλ’','maar',1],['δαμάζω','temmen',0],['οἴκαδε','naar huis',0],
 ['ἄγω','leiden, brengen',1],['λέγω','zeggen, spreken',1],['ὁ ἐπίτροπος','opzichter, beheerder',0],['δεῖ ἔχειν + acc','het is nodig om (…) te hebben',0],['νῦν','nu, op dit moment',1],
 ['διοικέω','beheren',0],['αὐτίκα','meteen',1],['ὁ κέραμος','(pottenbakkers)klei',0],['λαμβάνω','pakken, nemen',0],['ὁ τύπος','beeld, afbeelding',0],['πλάττω','boetseren',0],
 ['ζωοποιέω','levend maken',0],['αὐτούς','hen',0],['ὀνομάζω','noemen',1]];
const W4=[['γαμέω','trouwen met',0],['τὸ τέκνον','kind',1],['τίκτω','ter wereld brengen, voortbrengen',1],['τρεῖς','drie',0],['ἡ κόρη','meisje',1],['ὁ νεανίσκος','jongen',0],
 ['νεώτατον','jongste',0],['ἔχθω','haten',0],['πιστεύω ὅτι','geloven dat',0],['εἷς αὐτῶν','een van hen',0],['ὁ θρόνος','troon',1],['ἀφαιρεῖν αὐτόν / αὐτήν (+ acc)','(iets) van hem / haar afpakken',0],
 ['μέλλω','zullen',0],['ἀποκτείνω','doden',0],['ἔξεστιν + inf','het is mogelijk om',0],['ἀθάνατοι','onsterfelijk',0],['ποιέω','doen',0],['οὖν','dus, dan, nu',1],
 ['οὕτω(ς)','zo, op deze manier',1],['ἕκαστον τέκνον νεόγονον','ieder pasgeboren kind',0],['καταπίνω','opslokken',0],['κατείργω εἰς + acc','opsluiten in',0],['ὁ στόμαχος','maag, buik',0],
 ['ἡ λύπη','pijn, verdriet',0],['τείρω','kwellen',0],['τέλος','tenslotte',1],['ὁ δόλος','list, bedrog',1],['ἐπινοέω','bedenken',0],['κρύφα','in het geheim',0],['ὁ υἱός','zoon',1],
 ['εἰς + acc','naar (binnen)',1],['ἡ Κρήτη','Kreta',0],['ἡ Νύμφη','Nimf',0],['ἐκτρέφω','grootbrengen',0],['ἀντὶ τοῦ τέκνου','in plaats van het kind',0],['ὁ λίθος','steen',0],
 ['ἐσπαργανωμένον','in doeken gewikkeld',0],['πρός + acc','naar (toe), tot, tegen',1],['χρόνῳ ὕστερον','later, in later tijd',0],['κρατέω','overmeesteren',0],['ἀναγκάζω','dwingen',0],
 ['αὐτόν','hem',0],['ἐμέω','braken, uitbraken',0],['ὁ ἀδελφός','broer',1],['ἡ ἀδελφή','zus',1],['ἔχω','hebben, houden',1]];
const W6=[['ἰδού','kijk, zie daar',0],['σύνεισιν','(zij) zijn bij elkaar',0],['ὁ ἡγεμών, ἡγεμόνος','leider, aanvoerder',1],['ὄπισθεν + gen','achter',0],['Διός','genitivus van Ζεύς',0],
 ['ἡ γυνή, γυναικός','vrouw',1],['τὸ ὄνομα, ὀνόματος','naam',1],['ἐναντίον + gen','tegenover',0],['ἡ τρίαινα','drietand',0],['ἐγγύς (+ gen)','dichtbij',1],['τὸ πῦρ, πυρός','vuur',1],
 ['ἡ ἀξίνη','bijl',0],['τὸ ὄργανον','muziekinstrument',0],['μόνον','alleen (maar)',1],['τὸ φῶς, φωτός','(dag)licht',1],['μουσικάς','muzisch, van de muziek',0],['ἡ τέχνη','kunst, vaardigheid',1],
 ['διδάσκω','onderwijzen',0],['τὰ ὅπλα','wapens',1],['τὸ δόρυ, δόρατος','lans',1],['ἡ ἀσπίς, ἀσπίδος','schild',1],['διά, δι’ + gen','door … heen; gedurende',1],
 ['ὁ Ἕλλην, Ἕλληνος','Griek',1],['φυλάττω','beschermen',0],['βλέπω','kijken',1],['τὸ πρᾶγμα, πράγματος','zaak, gebeurtenis',1],['μάλα, μάλ’','zeer, erg',1],['θαυμάζω + acc','verbaasd zijn over',0],
 ['τὴν γένεσιν','geboorte',0],['ἐκ, ἐξ + gen','uit',1],['ἡ μήτηρ, μητρός','moeder',1],['ὁ πατήρ, πατρός','vader',1],['ἡ κεφαλή','hoofd',1],['τῇ ἀξίνῃ','met de bijl',0],
 ['ἀνασχίζω','opensplijten',0],['πάρεστι(ν)','(hij/zij) is er, is aanwezig',0],['ἡ ἐσθής, ἐσθῆτος','kleding(stuk)',1],['ἤδη','al, reeds; (vanaf) nu',1],['νεογνή','pasgeboren',0],
 ['ἡ θυγάτηρ, θυγατρός','dochter',1]];
const LES=[[2,'Kosmos','TB p. 27',W2,'--c4','--c5'],[3,'Kronos','TB p. 29',W3,'--c6','--c1'],[4,'Zeus','TB p. 31',W4,'--c2','--c3'],[6,'Goden','TB p. 41',W6,'--c4','--c5']];
LES.forEach(([les,naam,p,lijst,cL,cO])=>{
 SECS.push({id:'w'+les+'l',par:'ow',nr:String(les),name:`Leerwoorden les ${les} ${naam}`,c:cL,sub:`${p} · de vetgedrukte woorden`,rules:lijst.filter(w=>w[2]).map(w=>[G(w[0]),w[1],''])});
 SECS.push({id:'w'+les+'o',par:'ow',nr:les+'+',name:`Overige woorden les ${les} ${naam}`,c:cO,sub:`${p} · niet vet, wel in de tekst`,rules:lijst.filter(w=>!w[2]).map(w=>[G(w[0]),w[1],''])});
 lijst.forEach((w,i)=>{const pool=lijst.filter(x=>x!==w&&x[1]!==w[1]),id='l'+les+'w'+i;
  Q.push({id,o:'w'+les+(w[2]?'l':'o'),nr:(w[2]?'Leerwoord':'Woord')+' les '+les,q:`Wat betekent ${G(w[0])}?`,a:w[1],f:pick(pool.map(x=>x[1]),3,w[1]),u:`${G(w[0])} = ${w[1]}.`,
   v:{q:`Hoe zeg je in het Grieks: <b>${w[1]}</b>?`,a:G(w[0]),f:pick(pool.map(x=>G(x[0])),3,G(w[0]))}});
  BEG.push([G(w[0]),w[1],'ow']);if(w[2])WOORD.push([w[0],w[1],id])})});

/* =================== samenvoegen =================== */
V.SECS.push(...SECS);V.Q.push(...Q);V.BEG.push(...BEG);if(V.woorden&&V.woorden.alle)V.woorden.alle.push(...WOORD);
const ORDE=['ow','8w','8t','hb8','9w','pv','9t','hb9','hb10','epi','t3p','11w','11t','hb11','ww','g11','mix'];
const plek=s=>{const k=ORDE.indexOf(s.par);return k<0?ORDE.length-1:k};
V.SECS=V.SECS.map((s,i)=>[s,i]).sort((a,b)=>plek(a[0])-plek(b[0])||a[1]-b[1]).map(x=>x[0]);
V.leer=ORDE.filter(p=>p!=='mix'&&V.SECS.some(s=>s.par===p));
Object.assign(V.PN,{ow:'Woorden les 2, 3, 4 en 6 (herhalen)',g11:'Les 11 grammatica · HB p. 112–115 (ERGA 1–7)'});
})();
