/* ============================================================
   Wiskunde H3: varianten met NIEUWE GETALLEN.
   Heeft ze een rekenvraag fout, dan komt hij terug als dezelfde soort som met andere
   getallen, en dan typt ze het antwoord zelf in (geen keuze uit vier).
   Zo kan ze het antwoord niet onthouden; ze moet de methode kunnen.
   Elke generator geeft {q, a, st, in, gen:1}. in = de vakjes om in te typen:
   [{lab, v}] of [{lab, v, set}] (set: de waarden mogen in elke volgorde).
   Laadt na vakken/wi.js en koppelt de generators aan bestaande vragen (q.v).
   ============================================================ */
(()=>{
const V=window.VAKDATA&&VAKDATA.wi;if(!V)return;
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[Math.random()*a.length|0];
const nz=(a,b)=>{let x=0;while(!x)x=R(a,b);return x};
const num=x=>{x=+(+x).toFixed(4);return String(x).replace('.',',')};          // in $…$ wordt - vanzelf −
const co=(a,v)=>a===1?v:a===-1?'-'+v:num(a)+v;
const pl=b=>b===0?'':b<0?' - '+num(-b):' + '+num(b);
const par=x=>x<0?`(${num(x)})`:num(x);
const isInt=x=>Math.abs(x-Math.round(x))<1e-9;
const pt=(x,y)=>isInt(x)&&isInt(y)?`(${num(x)}, ${num(y)})`:`(${num(x)}; ${num(y)})`;
const S=(t,s)=>({t,s});
const gcd=(a,b)=>b?gcd(b,a%b):Math.abs(a);
const br=(t,n)=>{if(n<0){t=-t;n=-n}const g=gcd(Math.abs(t),n);t/=g;n/=g;return n===1?num(t):`${t<0?'-':''}[[${Math.abs(t)}|${n}]]`};  // breuk als −8/3
const tbl=(xs,ys,lab=['x','y'])=>`<div class="tw"><table class="tb"><tr><th><i>${lab[0]}</i></th>${xs.map(v=>`<td>${num(v).replace('-','−')}</td>`).join('')}</tr><tr><th><i>${lab[1]}</i></th>${ys.map(v=>`<td>${num(v).replace('-','−')}</td>`).join('')}</tr></table></div>`;
const kwf=(a,b,c)=>'y = '+co(a,'x^2')+(b===0?'':b===1?' + x':b===-1?' - x':pl(b)+'x')+pl(c);
const XY=(x,y)=>[{lab:'x',v:x},{lab:'y',v:y}];
const G={};

/* ---------- §3.1 lineair ---------- */
G.vgl=()=>{const a=pick([2,3,4,5,-2,-3,-4,0.5,-0.5]),x=a===0.5||a===-0.5?2*R(-8,8):R(-9,9),b=nz(-12,12),c=a*x+b;
  return {q:`Los op: $${co(a,'x')}${pl(b)} = ${num(c)}$.`,a:`$x = ${num(x)}$`,in:[{lab:'x',v:x}],
    st:[S(`${b>0?'Haal':'Tel'} aan beide kanten ${num(Math.abs(b))} ${b>0?'eraf':'erbij'}.`,`$${co(a,'x')} = ${num(c)}${pl(-b)} = ${num(c-b)}$`),
        S(`Deel door ${num(a)}.`,`$x = ${num(c-b)} : ${par(a)} = ${num(x)}$`)]}};
const lin=()=>{const a=pick([1,2,3,-1,-2,-3,0.5,-0.5,4]),b=nz(-9,9);return {a,b,f:`y = ${co(a,'x')}${pl(b)}`}};
G.liny=()=>{const L=lin(),x=Math.abs(L.a)===0.5?2*nz(-4,4):nz(-5,5),y=L.a*x+L.b;
  return {q:`Gegeven is $${L.f}$. Bereken y bij $x = ${num(x)}$.`,a:`$y = ${num(y)}$`,in:[{lab:'y',v:y}],
    st:[S('Vul x in. Een negatief getal zet je tussen haakjes.',`$y = ${num(L.a)}·${par(x)}${pl(L.b)} = ${num(L.a*x)}${pl(L.b)} = ${num(y)}$`)]}};
G.snijy=()=>{const L=lin();return {q:`Wat zijn de coördinaten van het snijpunt van $${L.f}$ met de <b>y-as</b>?`,a:`$(0, ${num(L.b)})$`,in:XY(0,L.b),
  st:[S('Op de y-as is $x = 0$. Vul $x = 0$ in.',`$y = ${num(L.a)}·0${pl(L.b)} = ${num(L.b)}$`),S('Eerst x, dan y.',`$(0, ${num(L.b)})$`)]}};
G.snijx=()=>{const a=pick([1,2,3,-1,-2,-3,0.5,-0.5]),r=Math.abs(a)===0.5?2*nz(-6,6):nz(-8,8),b=-a*r;
  return {q:`Wat zijn de coördinaten van het snijpunt van $y = ${co(a,'x')}${pl(b)}$ met de <b>x-as</b>?`,a:`$(${num(r)}, 0)$`,in:XY(r,0),
    st:[S('Op de x-as is $y = 0$.',`$${co(a,'x')}${pl(b)} = 0$`),S('Los op.',`$${co(a,'x')} = ${num(-b)}$, dus $x = ${num(-b)} : ${par(a)} = ${num(r)}$`),S('Eerst x, dan y.',`$(${num(r)}, 0)$`)]}};
G.tab=()=>{const a=nz(-5,5),b=R(-9,9),st=pick([1,1,2]),x0=pick([0,-1,1,2]),xs=[0,1,2,3].map(i=>x0+i*st),ys=xs.map(x=>a*x+b);
  return {q:`Stel een formule op van de vorm $y = ax + b$ bij deze tabel. Typ a en b.${tbl(xs,ys)}`,a:`$y = ${co(a,'x')}${pl(b)}$`,in:[{lab:'a',v:a},{lab:'b',v:b}],
    st:[S(`a: hoeveel komt er bij y bij als x 1 groter wordt?${st>1?' Let op: x gaat in stappen van '+st+'.':''}`,`y gaat steeds ${a>0?'+':''}${num(a*st)}${st>1?` per ${st} stappen, dus per 1 stap ${num(a)}`:''}: $a = ${num(a)}$`),
        S(x0===0?'b: de y bij $x = 0$.':'b: reken terug naar $x = 0$.',`$b = ${num(b)}$`),S('Formule','$y = '+co(a,'x')+pl(b)+'$')]}};
G.rev=m=>()=>{const c=pick([2,3,4,5,6,8,2.5,1.5,0.5]),x1=pick([2,3,4,5,6,8,10]),y1=c*x1,x2=pick([3,6,7,9,12,20].filter(v=>v!==x1)),y2=c*pick([7,11,14,16,30].filter(v=>v!==x1));
  const intro=`y is recht evenredig met x. Bij $x = ${x1}$ hoort $y = ${num(y1)}$.`,st0=S('Bereken eerst c: deel y door x.',`$c = ${num(y1)} : ${x1} = ${num(c)}$, dus $y = ${num(c)}x$`);
  if(m==='f')return {q:intro+' Stel de formule $y = c · x$ op: wat is c?',a:`$y = ${num(c)}x$`,in:[{lab:'c',v:c}],st:[st0]};
  if(m==='y')return {q:intro+` Welke y hoort bij $x = ${x2}$?`,a:`$y = ${num(c*x2)}$`,in:[{lab:'y',v:c*x2}],st:[st0,S('Vul x in.',`$y = ${num(c)} · ${x2} = ${num(c*x2)}$`)]};
  return {q:intro+` Welke x hoort bij $y = ${num(y2)}$?`,a:`$x = ${num(y2/c)}$`,in:[{lab:'x',v:y2/c}],st:[st0,S('Terugrekenen: deel door c.',`$x = ${num(y2)} : ${num(c)} = ${num(y2/c)}$`)]}};
G.verh=m=>()=>{
  if(m==='prijs'||m==='aantal'){const ding=pick(['schriften','pennen','kaartjes','broodjes']),n1=pick([3,4,5,6,8]),pp=pick([0.5,0.75,1.25,1.5,2.5]),p1=n1*pp;
    if(m==='prijs'){const n2=pick([10,12,15,20,30].filter(v=>v!==n1));return {q:`${n1} ${ding} kosten € $${num(p1)}$. Wat kosten ${n2} ${ding}?`,a:`€ $${num(n2*pp)}$`,in:[{lab:'€',v:n2*pp}],
      st:[S('Verhoudingstabel: reken eerst terug naar 1.',`1 kost € $${num(p1)} : ${n1} = ${num(pp)}$`),S(`Dan keer ${n2}.`,`$${n2} × ${num(pp)} = ${num(n2*pp)}$`)]}}
    const n2=pick([12,16,20,24,40]);return {q:`${n1} ${ding} kosten € $${num(p1)}$. Hoeveel ${ding} krijg je voor € $${num(n2*pp)}$?`,a:`$${n2}$ ${ding}`,in:[{lab:'aantal',v:n2}],
      st:[S('Reken eerst terug naar 1.',`1 kost € $${num(pp)}$`),S('Hoe vaak past dat in het bedrag?',`$${num(n2*pp)} : ${num(pp)} = ${n2}$`)]}}
  const v=pick([12,15,16,18,20,24]),t1=pick([2,3,4]),d1=v*t1;
  if(m==='afstand'){const t2=pick([0.5,1.5,2.5,5,6].filter(x=>x!==t1));return {q:`Een fietser fietst met een constante snelheid. In ${t1} uur fietst hij $${d1}$ km. Hoeveel km fietst hij in $${num(t2)}$ uur?`,a:`$${num(v*t2)}$ km`,in:[{lab:'km',v:v*t2}],
    st:[S('Eerst naar 1 uur.',`$${d1} : ${t1} = ${v}$ km per uur`),S(`Dan keer ${num(t2)}.`,`$${v} × ${num(t2)} = ${num(v*t2)}$ km`)]}}
  const t2=pick([1.5,2.5,3.5,5]),d2=v*t2;return {q:`Een fietser fietst ${d1} km in ${t1} uur. Hoeveel uur doet hij over $${num(d2)}$ km? (als kommagetal, bijvoorbeeld 2,5)`,a:`$${num(t2)}$ uur`,in:[{lab:'uur',v:t2}],
    st:[S('Eerst de snelheid: km per uur.',`$${d1} : ${t1} = ${v}$ km per uur`),S('Hoeveel uur voor de afstand?',`$${num(d2)} : ${v} = ${num(t2)}$ uur`)]}};

/* ---------- §3.2 kwadratisch ---------- */
const abc=()=>{const a=pick([1,-1,2,-2,0.5,-0.5,3]),xt=Math.abs(a)===0.5?R(-6,6):R(-5,5),b=-2*a*xt,c=R(-10,10);return {a,b,c,xt,yt:a*xt*xt+b*xt+c,f:kwf(a,b,c)}};
G.kwin=()=>{const a=pick([1,-1,2,-2]),b=R(-6,6),c=R(-9,9),x=nz(-4,4),y=a*x*x+b*x+c;
  return {q:`Gegeven is $${kwf(a,b,c)}$. Welke y hoort bij $x = ${x}$?`,a:`$y = ${num(y)}$`,in:[{lab:'y',v:y}],
    st:[S('Vul x in, tussen haakjes. Eerst het kwadraat.',`$${par(x)}^2 = ${x*x}$`),S('Reken uit.',`$y = ${num(a)}·${x*x}${b?pl(b*x):''}${pl(c)} = ${num(y)}$`)]}};
G.top=()=>{const P=abc();return {q:`Bereken de coördinaten van de top van de grafiek van $${P.f}$.`,a:`top $${pt(P.xt,P.yt)}$`,in:XY(P.xt,P.yt),
  st:[S('Zoek a en b.',`$a = ${num(P.a)}$ en $b = ${num(P.b)}$`),S('Bereken $x_{top} = [[-b|2a]]$.',`$x_{top} = [[${num(-P.b)}|${num(2*P.a)}]] = ${num(P.xt)}$`),
      S('Vul $x_{top}$ in de formule in, tussen haakjes.',`$y_{top} = ${num(P.a)}·${par(P.xt)}^2${P.b?pl(P.b)+'·'+par(P.xt):''}${pl(P.c)} = ${num(P.a*P.xt*P.xt)}${P.b?pl(P.b*P.xt):''}${pl(P.c)} = ${num(P.yt)}$`),S('Eerst x, dan y.',`top $${pt(P.xt,P.yt)}$`)]}};
G.symas=()=>{const P=abc();return {q:`Wat is de vergelijking van de symmetrieas van de grafiek van $${P.f}$? Typ het getal na $x =$.`,a:`$x = ${num(P.xt)}$`,in:[{lab:'x',v:P.xt}],
  st:[S('De symmetrieas gaat door de top: $x = [[-b|2a]]$.',`$a = ${num(P.a)}$, $b = ${num(P.b)}$`),S('Reken uit.',`$x = [[${num(-P.b)}|${num(2*P.a)}]] = ${num(P.xt)}$`)]}};
G.nsnij=()=>{const a=pick([1,-1,2,-0.5,3,-2]),p=R(-6,6),q=pick([R(-9,-1),0,R(1,9)]),n=q===0?1:(a>0)===(q<0)?2:0,
  dal=a>0,f=Math.random()<.5?`y = ${co(a,'')}(x${pl(-p)})^2${pl(q)}`.replace('y = (','y = (').replace(/^y = -\(/,'y = -('):kwf(a,-2*a*p,a*p*p+q);
  return {q:`Hoe vaak snijdt de grafiek van $${f}$ de x-as? Typ 0, 1 of 2.`,a:`${n} keer`,in:[{lab:'aantal',v:n}],
    st:[S('Dal of berg?',`$a = ${num(a)}$ is ${dal?'positief: dalparabool':'negatief: bergparabool'}`),S('Waar ligt de top?',`top $${pt(p,q)}$: ${q===0?'precies op de x-as':q>0?'boven de x-as':'onder de x-as'}`),
        S('Dus',q===0?'de top raakt de x-as: 1 keer':n===2?(dal?'een dal met de top onder de x-as gaat er 2 keer doorheen':'een berg met de top boven de x-as gaat er 2 keer doorheen'):(dal?'een dal met de top boven de x-as raakt hem nooit: 0 keer':'een berg met de top onder de x-as raakt hem nooit: 0 keer'))]}};

/* ---------- §3.3 topvorm en snijpuntenvorm ---------- */
const tv=()=>{const a=pick([1,-1,2,-2,0.5,-0.5,3]),p=nz(-7,7),q=R(-9,9);return {a,p,q,f:`y = ${co(a,'')}(x${pl(-p)})^2${pl(q)}`}};
G.topv=m=>()=>{const T=tv();
  if(m==='y'){const y=T.a*T.p*T.p+T.q;return {q:`Gegeven is $${T.f}$. Wat zijn de coördinaten van het snijpunt met de y-as?`,a:`$${pt(0,y)}$`,in:XY(0,y),
    st:[S('Op de y-as is $x = 0$. Vul in.',`$y = ${num(T.a)}·(0${pl(-T.p)})^2${pl(T.q)} = ${num(T.a)}·${T.p*T.p}${pl(T.q)} = ${num(y)}$`),S('Eerst x, dan y.',`$${pt(0,y)}$`)]}}
  return {q:`Gegeven is $${T.f}$. Wat zijn de coördinaten van de top?`,a:`top $${pt(T.p,T.q)}$`,in:XY(T.p,T.q),
    st:[S('Topvorm $y = a(x - p)^2 + q$: de top is $(p, q)$.',`Let op het teken: $(x${pl(-T.p)})$ betekent $p = ${num(T.p)}$`),S('Eerst x, dan y.',`top $${pt(T.p,T.q)}$`)]}};
const sv=()=>{const a=pick([1,-1,2,-2,3,0.5]),m=R(-8,7);let n=R(-8,8);while(n===m)n=R(-8,8);
  const fx=v=>v===0?'x':`(x${pl(-v)})`;return {a,m,n,f:`y = ${a===1?'':a===-1?'-':num(a)}${fx(m)}${fx(n)}`}};
G.snijv=k=>()=>{const P=sv(),xt=(P.m+P.n)/2,yt=P.a*(xt-P.m)*(xt-P.n);
  if(k==='nul')return {q:`Gegeven is $${P.f}$. Wat zijn de x-coördinaten van de snijpunten met de x-as? (volgorde maakt niet uit)`,a:`$(${num(P.m)}, 0)$ en $(${num(P.n)}, 0)$`,in:[{lab:'x₁',v:P.m,set:1},{lab:'x₂',v:P.n,set:1}],
    st:[S('Op de x-as is $y = 0$. Een product is 0 als één van de factoren 0 is.',`$x = ${num(P.m)}$ of $x = ${num(P.n)}$`),S('Let op het teken.',`$(x${pl(-P.m)}) = 0$ geeft $x = ${num(P.m)}$`)]};
  if(k==='y'){const y=P.a*P.m*P.n;return {q:`Gegeven is $${P.f}$. Wat zijn de coördinaten van het snijpunt met de y-as?`,a:`$${pt(0,y)}$`,in:XY(0,y),
    st:[S('Vul $x = 0$ in.',`$y = ${num(P.a)}·${par(-P.m)}·${par(-P.n)} = ${num(y)}$`),S('Eerst x, dan y.',`$${pt(0,y)}$`)]}}
  return {q:`Gegeven is $${P.f}$. Wat zijn de coördinaten van de top?`,a:`top $${pt(xt,yt)}$`,in:XY(xt,yt),
    st:[S('Snijpunten met de x-as',`$x = ${num(P.m)}$ en $x = ${num(P.n)}$`),S('De top ligt precies in het midden.',`$x_{top} = [[${num(P.m)} + ${par(P.n)}|2]] = ${num(xt)}$`),
        S('Vul $x_{top}$ in.',`$y_{top} = ${num(P.a)}·(${num(xt)}${pl(-P.m)})·(${num(xt)}${pl(-P.n)}) = ${num(yt)}$`),S('Eerst x, dan y.',`top $${pt(xt,yt)}$`)]}};
G.haak=k=>()=>{
  if(k==='kw'){const p=nz(-7,7),q=R(-9,9),b=-2*p,c=p*p+q;return {q:`Schrijf $y = (x${pl(-p)})^2${pl(q)}$ om naar $y = x^2 + bx + c$. Wat zijn b en c?`,a:`$${kwf(1,b,c)}$`,in:[{lab:'b',v:b},{lab:'c',v:c}],
    st:[S('Schrijf het kwadraat als twee haakjes.',`$(x${pl(-p)})(x${pl(-p)}) = x^2${pl(-p)}x${pl(-p)}x + ${p*p}$`),S('Tel op.',`$x^2${pl(b)}x + ${p*p}${pl(q)} = ${kwf(1,b,c).replace('y = ','')}$`)]}}
  const p=nz(-8,8),q=nz(-8,8),b=p+q,c=p*q;return {q:`Schrijf $y = (x${pl(p)})(x${pl(q)})$ om naar $y = x^2 + bx + c$. Wat zijn b en c?`,a:`$${kwf(1,b,c)}$`,in:[{lab:'b',v:b},{lab:'c',v:c}],
    st:[S('Elk stuk van de eerste haakjes keer elk stuk van de tweede.',`$x·x${pl(q)}x${pl(p)}x${pl(c)}$`),S('Tel de x-en bij elkaar.',`$b = ${num(p)} + ${par(q)} = ${num(b)}$ en $c = ${num(p)}·${par(q)} = ${num(c)}$`)]}};

/* ---------- §3.4 hyperbolisch en omgekeerd evenredig ---------- */
const hy=()=>{const c=pick([2,3,4,5,6,8,10,12,-4,-6]),p=nz(-6,6),q=nz(-6,6);return {c,p,q,f:`y = [[${num(c)}|x${pl(-p)}]]${pl(q)}`}};
/* uitleg bij asymptootvragen: wat is het, met een voorbeeldgrafiek (andere getallen dan de vraag), en na het antwoord de grafiek van de vraag zelf */
const ASD=H=>{const e=H.p===2||H.q===1?[-3,2]:[2,1];return `Een <b>asymptoot</b> is een lijn waar de grafiek steeds dichter bij komt, maar die hij nooit raakt (de stippellijnen). De <b>verticale</b> staat rechtop: $x = …$, bij de x waar de noemer 0 wordt. De <b>horizontale</b> ligt plat: $y = …$, het getal dat erbij of eraf gaat.<br>Voorbeeld: $y = [[3|x${pl(-e[0])}]]${pl(e[1])}$ heeft $x = ${num(e[0])}$ en $y = ${num(e[1])}$.`+(V.GH?V.GH(x=>3/(x-e[0])+e[1],e[0],e[1],{x:[e[0]-6,e[0]+6],y:[e[1]-6,e[1]+6],u:14,label:'voorbeeld van een hyperbool met asymptoten'}):'')};
const ASG=H=>V.GH?V.GH(x=>H.c/(x-H.p)+H.q,H.p,H.q,{x:[-10,10],y:[-10,10],u:11,label:'hyperbool met asymptoten'}):'';
G.asym=m=>()=>{const H=hy(),st=[S('Verticale asymptoot: de noemer mag niet 0 zijn.',`$x${pl(-H.p)} = 0$ geeft $x = ${num(H.p)}$`),S('Horizontale asymptoot: het getal dat erbij of eraf gaat.',`$y = ${num(H.q)}$`)],
  zie=S(m==='v'?`In de grafiek: de stippellijn rechtop bij $x = ${num(H.p)}$`:m==='h'?`In de grafiek: de platte stippellijn bij $y = ${num(H.q)}$`:'In de grafiek: de twee stippellijnen',ASG(H));
  if(m==='v')return {q:`Geef de vergelijking van de <b>verticale</b> asymptoot van $${H.f}$. Typ het getal na $x =$.`,denk:ASD(H),a:`$x = ${num(H.p)}$`,in:[{lab:'x',v:H.p}],st:[st[0],zie]};
  if(m==='h')return {q:`Geef de vergelijking van de <b>horizontale</b> asymptoot van $${H.f}$. Typ het getal na $y =$.`,denk:ASD(H),a:`$y = ${num(H.q)}$`,in:[{lab:'y',v:H.q}],st:[st[1],zie]};
  return {q:`Wat zijn de asymptoten van de grafiek van $${H.f}$?`,denk:ASD(H),a:`$x = ${num(H.p)}$ en $y = ${num(H.q)}$`,in:[{lab:'x =',v:H.p},{lab:'y =',v:H.q}],st:[...st,zie]}};
G.hypin=()=>{const H=hy(),d=pick([1,2,-1,-2,4].filter(v=>H.c%v===0)),x=H.p+d,y=H.c/d+H.q;
  return {q:`Gegeven is $${H.f}$. Bereken y bij $x = ${num(x)}$.`,a:`$y = ${num(y)}$`,in:[{lab:'y',v:y}],
    st:[S('Eerst de noemer.',`$${num(x)}${pl(-H.p)} = ${num(d)}$`),S('Dan delen en erbij/eraf.',`$y = ${num(H.c)} : ${par(d)}${pl(H.q)} = ${num(H.c/d)}${pl(H.q)} = ${num(y)}$`)]}};
G.omg=m=>()=>{const k=pick([24,36,48,60,72,120,100]),x1=pick([2,3,4,5,6].filter(v=>k%v===0)),y1=k/x1,st0=S('Omgekeerd evenredig: x keer y is steeds hetzelfde.',`$x · y = ${x1} · ${y1} = ${k}$`);
  const intro=`y is omgekeerd evenredig met x. Bij $x = ${x1}$ hoort $y = ${y1}$.`;
  if(m==='f')return {q:intro+` Stel de formule $y = [[k|x]]$ op: wat is k?`,a:`$y = [[${k}|x]]$`,in:[{lab:'k',v:k}],st:[st0]};
  const x2=pick([8,10,12,15,20,30].filter(v=>v!==x1)),y2=k/x2;
  if(m==='y')return {q:intro+` Welke y hoort bij $x = ${x2}$?`,a:`$y = ${num(y2)}$`,in:[{lab:'y',v:y2}],st:[st0,S('Deel door x.',`$y = ${k} : ${x2} = ${num(y2)}$`)]};
  return {q:intro+` Welke x hoort bij $y = ${num(y2)}$?`,a:`$x = ${x2}$`,in:[{lab:'x',v:x2}],st:[st0,S('Deel door y.',`$x = ${k} : ${num(y2)} = ${x2}$`)]}};

/* ---------- §3.5 wortels ---------- */
G.wortin=()=>{const a=pick([1,2,3,-1,-2]),p=R(-5,5),q=R(-8,8),r=pick([1,2,3,4]),x=p+r*r,y=a*r+q,f=`y = ${a===1?'':a===-1?'-':num(a)}√{x${pl(-p)}}${pl(q)}`;
  return {q:`Bereken y bij $x = ${x}$ voor $${f}$.`,a:`$y = ${num(y)}$`,in:[{lab:'y',v:y}],
    st:[S('Eerst wat onder de wortel staat.',`$${x}${pl(-p)} = ${r*r}$`),S('Dan de wortel.',`$√{${r*r}} = ${r}$`),S('Dan keer en erbij/eraf.',`$y = ${num(a)}·${r}${pl(q)} = ${num(y)}$`)]}};
G.rand=()=>{const k=pick([1,1,1,2,3,-1]),m=R(-9,9),a=pick([1,2,3,-1,-2,0.5]),q=R(-9,9),x=-m/k,xs=br(-m,k),P=isInt(x)?pt(x,q):`(${xs}; ${num(q)})`,
  binnen=`${k===1?'x':k===-1?'-x':k+'x'}${pl(m)}`,f=Math.random()<.3?`y = ${num(q)} ${a<0?'+':'-'} ${Math.abs(a)===1?'':num(Math.abs(a))}√{${binnen}}`:`y = ${a===1?'':a===-1?'-':num(a)}√{${binnen}}${pl(q)}`;
  return {q:`Bepaal de coördinaten van het randpunt van de grafiek van $${f}$. (een breuk als 2/3 mag)`,a:`randpunt $${P}$`,in:XY(x,q),
    st:[S('Bij het randpunt staat er 0 onder de wortel.',`$${binnen} = 0$ geeft $x = ${xs}$`),S('De wortel is dan 0, dus alleen het losse getal blijft over.',`$y = ${num(q)}$`),S('Eerst x, dan y.',`randpunt $${P}$`)]}};

/* ---------- koppelen aan de vragen van het boek ---------- */
const MAP={
 vgl:['vk2a','vk2f','vk2b','vk2c','vk2d'],liny:['graf4'],snijy:['graf2','graf6'],snijx:['graf3','graf5'],tab:['tab1','tab2','tab3','tab4'],
 'rev.f':['rev1','tv5'],'rev.y':['rev2','rev7'],'rev.x':['rev8'],
 'verh.prijs':['verh3','verh4','verh7'],'verh.aantal':['verh8'],'verh.afstand':['verh1','verh9'],'verh.tijd':['verh10'],
 kwin:['kw6','kw7'],top:['top3','top4','top5','top6','top7','top8','top9','top10','snij3','tv12'],symas:['top12','tv8','vorm12','vorm13','vorm14'],
 nsnij:['snij4','snij6','snij7','h38a','h38b','h38c','tv13'],'topv.top':['h37b','tv19','reg12'],'topv.y':['h37c'],
 'snijv.top':['h40a','h40b','h40c','h41c','vorm6'],'snijv.nul':['h41b','vorm5'],'snijv.y':['h41d'],'haak.kw':['h39c'],'haak.pq':['h42'],
 'asym.b':['hyp2','hyp8','tv25'],'asym.v':['h52d','h53a','h53b'],'asym.h':['h52e','h53c'],hypin:['hyp3','h52b'],
 'omg.f':['hyp6','tv28'],'omg.y':['h55a','tv26','hyp5'],'omg.x':['h55b','tv27'],
 wortin:['wort3','wort9','rand4'],rand:['rand1','rand3','rand7','rand9','rand11','rand12','rand13','rand15','rand17','rand18','rand19','tv29','tv31','tv32']};
const QM=Object.fromEntries(V.Q.map(q=>[q.id,q]));
for(const [k,ids] of Object.entries(MAP)){const [g,m]=k.split('.'),fn=m?G[g](m):G[g];
  ids.forEach(id=>{const q=QM[id];if(!q)return;q.v=()=>Object.assign({gen:1,f:[]},fn())})}
V.GEN=G;V.GENMAP=MAP;
})();
