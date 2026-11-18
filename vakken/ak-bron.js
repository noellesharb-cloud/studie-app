/* Aardrijkskunde H3: bronnen voor toetsvragen (kaarten en tekstbronnen), zelf getekend naar de bronnen in de oefentoets
   van de uitgever. Geen kopie van hun plaatjes (de repo is openbaar): zelfde soort kaart, eigen tekening, bij benadering.
   Gebruikt de landsgrenzen van vakken/ak-kaart.js (Natural Earth, Mercator, viewBox 0 0 400 380). */
window.AK_BRON=(()=>{
const K=window.AK_KAART;
/* lengte/breedte -> kaartcoördinaten (zelfde projectie als ak-kaart.js, berekend uit de hoofdsteden) */
const merc=l=>Math.log(Math.tan(Math.PI/4+l*Math.PI/360));
const P=(lon,lat)=>[+(10.26223*lon-251.6169).toFixed(1),+(-587.6573*merc(lat)+487.9927).toFixed(1)];
const pad=pts=>'M'+pts.map(([lo,la])=>P(lo,la).join(',')).join('L')+'Z';
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
let uid=0;

/* neerslag per jaar, bij benadering (zoals de neerslagkaart in het boek en de oefentoets). Volgorde = tekenvolgorde. */
const NS=[
 ['n3',[[26,42.3],[42,42.2],[44.8,41.4],[44.6,39.6],[43.6,38.6],[42,37.4],[37.5,37.7],[36.4,37],[36,36.1],[30,36.1],[26.5,36.5],[25.8,38.5],[25.8,40.6]]],
 ['n2',[[36.5,37.95],[42.6,37.95],[42.6,36.8],[36.5,36.6]]],
 ['n2',[[30.4,39.8],[33,40.5],[36,40.1],[38.6,39.4],[38.6,38.3],[36,37.6],[33,37.3],[30.4,38.3]]],
 ['n2',[[36.4,36.9],[38,36.6],[40,36.9],[42.5,36.9],[44,36.4],[45.5,35],[46.5,33.8],[47.5,32.6],[48.5,31],[49.5,30.4],[51,29.6],[52.6,29.3],[52.9,30.3],[50.5,32],[48.5,34],[46.5,35.3],[45,36.6],[43.5,37.5],[42,37.4],[40,37.7],[37.5,37.7]]],
 ['n2',[[36,35.9],[37,35.5],[37.1,34],[36.6,33],[36,32],[35.5,31],[34.9,31.2],[35.3,32.3],[35.8,33.3],[36.4,34.2]]],
 ['n2',[[49.5,36.5],[51.5,35.5],[54,35.8],[57,36.3],[60.5,36.8],[61,37.4],[59,37.9],[56.5,38],[54,37.3],[51.5,36.7]]],
 ['n2',[[55.8,25.8],[56.4,26.4],[57.5,24],[59.9,22.6],[59.4,22.1],[57,23.4],[56,24.3]]],
 ['n2',[[41.5,20],[43,19],[44.3,17],[45.5,15],[46,13.8],[44.8,12.9],[43.3,12.6],[42.8,14.5],[42.5,16.5],[41,19]]],
 ['n3',[[35.6,36.9],[36.6,36.4],[36.6,35],[36.2,33.5],[35.7,32.6],[35.4,32.3],[34.8,32.3],[35.2,33.3],[35.6,34.6],[35.8,35.8]]],
 ['n3',[[43.5,38.6],[45,37.6],[47,35.6],[49,33.6],[51,31.1],[52.5,29.9],[51.5,29.5],[50,30.6],[48,32.5],[46,34],[44.5,35.8],[43,37.1]]],
 ['n3',[[44.2,39.6],[48,39.6],[48.9,38.5],[47.5,37.8],[45.5,37.6],[44.2,38]]],
 ['n3',[[48.6,38.3],[51,37],[54.5,37],[56,37.6],[54.5,36.4],[52,36.1],[49.5,36.6],[48.4,37.5]]],
 ['n3',[[43.8,15.9],[44.6,15],[44.6,13.8],[43.9,13.5],[43.5,14.5]]],
 ['n4',[[36,41.5],[41.7,41.7],[41.7,40.85],[38,40.8],[36,41.05]]],
 ['n4',[[48.8,38.6],[50,37.7],[52,37],[54,37],[54,36.55],[52,36.55],[50,37.05],[48.6,37.8]]],
 ['n4',[[45.4,36.6],[47,35.6],[48.1,34.1],[47.2,33.8],[46,35],[44.9,36.2]]],
 ['n4',[[35.6,34.6],[36.3,34.2],[35.9,33.4],[35.4,33.3]]],
 ['n4',[[29.5,37.1],[32,36.8],[32,36.2],[29.5,36.3]]]
];
const NS_LEG=[['n1','minder dan 250 mm'],['n2','250 – 500 mm'],['n3','500 – 1.000 mm'],['n4','meer dan 1.000 mm']];
const STEDEN={Ankara:[32.86,39.93],Beiroet:[35.5,33.89],Bagdad:[44.36,33.31],Teheran:[51.39,35.69],'Caïro':[31.24,30.04],Riyad:[46.72,24.71],Sanaa:[44.21,15.35],Dubai:[55.27,25.2]};

function basis(vb,inhoud,aria){
  const id='bk'+(++uid);
  let s=`<svg class="bronkaart" viewBox="${vb.join(' ')}" role="img" aria-label="${esc(aria)}"><defs><clipPath id="${id}">${K.G.land.map(([,d])=>`<path d="${d}"/>`).join('')}</clipPath></defs>`;
  s+=`<rect class="zee" x="-50" y="-50" width="500" height="480"/>`;
  K.G.bg.forEach(d=>s+=`<path class="buur" d="${d}"/>`);
  return s+inhoud(id)+'</svg>'}
const grenzen=()=>K.G.land.map(([,d])=>`<path class="grens" d="${d}"/>`).join('');
const rivieren=(namen)=>K.WATER.filter(w=>w[1]==='r'&&(!namen||namen.includes(w[0]))).map(w=>w[2].map(l=>`<polyline class="riv" points="${l.map(c=>c.join(',')).join(' ')}"/>`).join('')).join('');
const stad=(n,dx=4,dy=-3,fs=9)=>{const [x,y]=P(...STEDEN[n]);return `<circle class="stip" cx="${x}" cy="${y}" r="2.2"/><text class="lbl" x="${x+dx}" y="${y+dy}" font-size="${fs}">${esc(n)}</text>`};
const tekst=(t,lon,lat,fs=9,cls='lbl')=>{const [x,y]=P(lon,lat);return `<text class="${cls}" x="${x}" y="${y}" font-size="${fs}">${esc(t)}</text>`};
const legenda=items=>`<div class="bronleg">${items.map(([c,t])=>`<span><i class="${c}"></i>${esc(t).replace(/\$/g,'&#36;')}</span>`).join('')}</div>`;
const fig=(titel,svg,leg,noot)=>`<figure class="bron"><figcaption><b>Bron</b> ${esc(titel)}</figcaption><div class="bronbox">${svg}</div>${leg||''}${noot?`<p class="bronnoot">${noot}</p>`:''}</figure>`;
const neerslagLagen=id=>`<g clip-path="url(#${id})"><rect class="n1" x="-50" y="-50" width="500" height="480"/>${NS.map(([c,p])=>`<path class="${c}" d="${pad(p)}"/>`).join('')}</g>`;

function neerslag(){
  const svg=basis([0,0,400,380],id=>neerslagLagen(id)+grenzen()+rivieren()
    +stad('Ankara')+stad('Beiroet',-38,-2)+stad('Bagdad')+stad('Teheran')+stad('Caïro',-30,-4)+stad('Riyad')+stad('Sanaa')
    +tekst('Middellandse Zee',26,33.6,8,'zeel')+tekst('Rode Zee',36.2,22.5,8,'zeel')+tekst('Perzische Golf',50.4,27.6,8,'zeel'),'Kaart: neerslag per jaar in het Midden-Oosten');
  return fig('Neerslag per jaar in het Midden-Oosten',svg,legenda(NS_LEG),'Zelf getekend naar de neerslagkaart in je boek. De grenzen van de kleuren zijn bij benadering.')}

/* welvaart en olie: gemiddeld inkomen per persoon per jaar (klasse) en aardolieproductie in vaten per dag, zoals op de kaart in de oefentoets */
const WV={'Syrië':'w1','Jemen':'w1','Egypte':'w2','Iran':'w2','Irak':'w2','Jordanië':'w2','Libanon':'w2','Turkije':'w3','Oman':'w3',
  'Saudi-Arabië':'w4','Koeweit':'w4','Bahrein':'w4','Verenigde Arabische Emiraten (VAE)':'w5','Qatar':'w5','Israël':'w5'};
const OLIE=[['Turkije','89.000',33,39.6],['Syrië','95.000',38.6,35.4],['Irak','4.162.000',43.2,32.6],['Iran','4.084.000',54,32.4],['Koeweit','2.720.000',48.9,29.9,47.8,29.3],
  ['Bahrein','185.000',46.3,27.3,50.5,26.05],['Qatar','1.815.100',52.6,27.0,51.25,25.4],['VAE','3.770.000',55.4,22.4,54.6,23.9],['Saudi-Arabië','10.815.700',42.6,23.4],
  ['Oman','1.040.000',56.8,20.4],['Jemen','70.200',46.4,15.9],['Egypte','661.000',29.5,26.5]];
const WV_LEG=[['w1','minder dan $ 2.000'],['w2','$ 2.000 – 10.000'],['w3','$ 10.000 – 25.000'],['w4','$ 25.000 – 50.000'],['w5','meer dan $ 50.000']];
function welvaart(){
  const svg=basis([0,0,400,380],()=>K.G.land.map(([n,d])=>`<path class="${WV[n]||'w0'}" d="${d}"/>`).join('')
    +OLIE.map(([n,v,lo,la,lo2,la2])=>{const [x,y]=P(lo,la);let s='';if(lo2!=null){const [x2,y2]=P(lo2,la2);s+=`<line class="lijn" x1="${x}" y1="${y}" x2="${x2}" y2="${y2}"/>`}
      return s+`<text class="vat" x="${x}" y="${y-1}" font-size="9.5">🛢 ${esc(n)}</text><text class="vatn" x="${x}" y="${y+9}" font-size="9">${v}</text>`}).join('')
    +tekst('Middellandse Zee',26,33.6,8,'zeel')+tekst('Rode Zee',36.2,22.5,8,'zeel'),'Kaart: welvaart en olieproductie in het Midden-Oosten');
  return fig('Welvaart en olieproductie in het Midden-Oosten',svg,legenda(WV_LEG)+'<p class="bronnoot" style="margin-top:4px">Kleur = gemiddeld inkomen per persoon per jaar. 🛢 = aardolieproductie in vaten per dag.</p>',
    'Zelf getekend naar de kaart in de oefentoets. Israël, Jordanië en Libanon hebben (bijna) geen olie.')}

/* stroomgebied Eufraat en Tigris met stuwmeren (Zuidoost-Anatoliëproject) */
/* [naam, lengte, breedte, rivier, label-verschuiving]; de stuwmeren worden op de getekende rivier gelegd */
const DAM=[['Atatürkdam',38.32,37.48,'de Eufraat',[-40,9]],['Ilisudam',41.85,37.53,'de Tigris',[4,-4]],['',38.75,38.75,'de Eufraat'],['',38.6,38.25,'de Eufraat'],
  ['',41.2,37.9,'de Tigris'],['',38.4,35.9,'de Eufraat'],['',42.8,36.63,'de Tigris'],['',42.4,34.2,'de Eufraat']];
function opRivier(rv,x,y){let b=[x,y],bd=1e9;K.WATER.filter(w=>w[0]===rv).forEach(w=>w[2].forEach(l=>{for(let i=1;i<l.length;i++){const[a1,a2]=l[i-1],[b1,b2]=l[i],dx=b1-a1,dy=b2-a2,
  t=Math.max(0,Math.min(1,((x-a1)*dx+(y-a2)*dy)/(dx*dx+dy*dy||1))),px=a1+t*dx,py=a2+t*dy,d=Math.hypot(px-x,py-y);if(d<bd){bd=d;b=[px,py]}}}));return b}
function tigris(){
  const vb=[100,30,175,155];
  const svg=basis(vb,id=>neerslagLagen(id)+grenzen()+rivieren(['de Tigris','de Eufraat'])
    +DAM.map(([n,lo,la,rv,o])=>{const [x,y]=opRivier(rv,...P(lo,la));return `<ellipse class="meer" cx="${x}" cy="${y}" rx="3" ry="1.8"/><path class="dam" d="M${x-2.2},${y+2.3}h4.4"/>`+(n?`<text class="lbl" x="${x+o[0]}" y="${y+o[1]}" font-size="6.5">${esc(n)}</text>`:'')}).join('')
    +stad('Bagdad',3,-2,6.5)+tekst('TURKIJE',34.5,39.2,7,'land')+tekst('SYRIË',37.2,34.8,7,'land')+tekst('IRAK',42.2,32.4,7,'land')+tekst('IRAN',47.2,34.6,7,'land')
    +tekst('Eufraat',39.6,35.5,6.5,'rivl')+tekst('Tigris',43.6,35.4,6.5,'rivl'),'Kaart: stroomgebied van de Eufraat en de Tigris met stuwmeren');
  return fig('Het stroomgebied van de Eufraat en de Tigris',svg,legenda([...NS_LEG,['meer','stuwmeer met stuwdam']]),'Zelf getekend naar de kaart in de oefentoets, bij benadering.')}

/* tekstbronnen: beschrijving van wat er op de afbeelding in de oefentoets staat */
const tbron=(titel,html)=>`<figure class="bron tekst"><figcaption><b>Bron</b> ${esc(titel)}</figcaption><div class="bronbox">${html}</div></figure>`;
function istanbul(){return tbron('Stadsuitbreiding Istanbul en de aanleg van een nieuw kanaal',
  `<p>Op de kaart zie je Istanbul aan beide kanten van de <b>Bosporus</b>: Europa in het westen, Azië in het oosten. De Bosporus verbindt de <b>Zwarte Zee</b> (noorden) met de <b>Zee van Marmara</b> (zuiden).</p>
  <ul><li><b>Bebouwd tot 1950:</b> alleen het oude centrum rond de Bosporus en de Gouden Hoorn.</li>
  <li><b>1950 – 1975:</b> de stad groeit langs de kust van de Zee van Marmara, naar het westen en naar het oosten (Azië).</li>
  <li><b>1975 – 2024:</b> nieuwe wijken steeds verder naar buiten, ook naar het noorden, de bossen in.</li>
  <li>Drie bruggen over de Bosporus, snelwegen en spoorlijnen, twee luchthavens en een <b>nieuwe grote luchthaven</b> in het noorden bij de Zwarte Zee.</li>
  <li>Ten westen van de stad: een <b>bevaarbaar kanaal in aanleg</b> van de Zwarte Zee naar de Zee van Marmara, door gebied dat nu nog bos en landbouwgrond is.</li></ul>`)}
function badplaats(){return tbron('Massatoerisme en inrichting (bouwplaat van een badplaats)',
  `<p>Een tekening van een badplaats aan zee. Op de plaat staat bij elk onderdeel een naam:</p>
  <ul class="kol"><li>strand met restaurants, bars, winkels</li><li>verhuur strandstoelen</li><li>pier, rondvaart, zeilschool, watersport</li><li>hotels in hoogbouw en appartementen</li><li>het oude dorp</li><li>casino, pretpark, waterpark</li><li>golfbaan, tennis, sportcentrum</li><li>camping, parkeren</li><li>nieuwe woonwijk</li><li>panoramarestaurant</li><li>vliegveld</li><li>nieuwe snelweg en nieuwe wegen</li><li>steengroeve</li><li>vuilnisstort</li><li>rioolwaterzuivering</li><li>elektriciteitscentrale en een elektriciteitscentrale aan een stuwdam</li><li>hoogspanningsleiding</li></ul>`)}
function g7(){return tbron('G7 en BRICS+, 2025 (wereldkaart)',
  `<ul><li><b>G7-landen:</b> Verenigde Staten, Canada, Verenigd Koninkrijk, Frankrijk, Duitsland, Italië en Japan.</li>
  <li><b>BRICS+-landen:</b> Brazilië, Rusland, India, China, Zuid-Afrika, Egypte, Ethiopië, Iran, Verenigde Arabische Emiraten en Indonesië.</li>
  <li><b>Kandidaat-BRICS+-landen:</b> onder andere Saudi-Arabië en een aantal landen in Afrika, Azië en Zuid-Amerika.</li></ul>`)}
return {neerslag,welvaart,tigris,istanbul,badplaats,g7,P};
})();
