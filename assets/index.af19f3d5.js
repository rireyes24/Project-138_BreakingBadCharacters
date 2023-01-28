(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();class Z{constructor(){}static create({id:t,name:n,nickname:r,birthday:a,status:i,imageUrl:s,phrase:$,starring:Q}){const M=document.querySelector(`#BB${t.toString()}`);if(M!=null){const f=document.createElement("div");f.className="card-name";const w=document.createElement("h1");w.className="card-name_name",w.innerText=`${n.toLocaleUpperCase()}`,f.appendChild(w);const x=document.createElement("div");x.className="card-image";const l=document.createElement("img");l.src=`${s}`,l.loading="lazy",l.alt=`${n}`,x.appendChild(l);const d=document.createElement("div");d.id=`BBB${t.toString()}`,d.className="card-stats";const B=document.createElement("div");B.className="card-stats_data";const H=document.createElement("h3");H.innerText="Nickname:";const G=document.createElement("h4");G.innerText=`${r}`;const L=document.createElement("h3");L.innerText="Status:";const N=document.createElement("h4");N.innerText=`${i}`;const J=document.createElement("h3");J.innerText="Birthday:";const z=document.createElement("h4");z.innerText=`${a}`;const O=document.createElement("h3");O.innerText="Starring:";const W=document.createElement("h4");W.innerText=`${Q}`,B.append(H,G,L,N,J,z,O,W);const A=document.createElement("p");A.className="card-stats_phase",A.innerText=`${$}`,d.append(B,A),M.append(f,x,d)}}}const c=[{id:1,name:"Walter H. White",nickname:"Heisenberg",birthday:"09-07-1958",status:"Dead",imageUrl:"https://res.cloudinary.com/dejj8n6g7/image/upload/v1674793603/BreakingBadCharacters/walter-white_d7oc6z.jpg",phrase:"I am the danger!",starring:"Bryan Cranston",occupation:["High School Chemistry Teacher","Meth King Pin"]},{id:2,name:"Jesse Pinkman",nickname:"Cap n' Cook",birthday:"09-24-1984",status:"Alive",imageUrl:"https://images.ladepeche.fr/api/v1/images/view/5c657d228fe56f28a6226565/large/image.jpg",phrase:"Yeah!, Bitch!!!",starring:"Aaron Paul",occupation:["Meth Dealer"]},{id:3,name:"Saul Goodman",nickname:"Jimmy McGill",birthday:"",status:"Alive",imageUrl:"https://rollingstone.uol.com.br/media/uploads/saul_goodman_reprod.jpg",phrase:"Hi, I am Saul Goodman!",starring:"Bob Odenkirk",occupation:[""]},{id:4,name:"Skyler White",nickname:"",birthday:"08-11-1970",status:"Alive",imageUrl:"https://res.cloudinary.com/dejj8n6g7/image/upload/v1674870851/BreakingBadCharacters/Skyler_White_xshjct.jpg",phrase:"",starring:"Anna Gunn",occupation:["House wife","Book Keeper","Car Wash Manager","Taxi Dispatcher"]},{id:5,name:"Walter White Jr.",nickname:"Flynn",birthday:"07-08-1993",status:"Alive",imageUrl:"https://mediaproxy.salon.com/width/1200/https://media.salon.com/2013/09/walt_junior.jpg",phrase:"",starring:"RJ Mitte",occupation:["Teenager"]},{id:6,name:"Henry Schrader",nickname:"Hank",birthday:"Unknown",status:"Dead",imageUrl:"https://e.rpp-noticias.io/xlarge/2020/01/16/030403_888145.jpg",phrase:"",starring:"Dean Norris",occupation:["DEA Agent"]},{id:7,name:"Marie Schrader",nickname:"Marie",birthday:"",status:"Alive",imageUrl:"https://www.petitepoire.ca/wp-content/uploads/2016/10/Cast_bb_800x600_maria-schrader.jpg",phrase:"",starring:"Betsy Brandt",occupation:["Housewife","Clepto"]},{id:8,name:"Mike Ehrmantraut",nickname:"Mike",birthday:"",status:"Dead",imageUrl:"https://indiehoy.com/wp-content/uploads/2019/09/Mike-Ehrmantraut.jpg",phrase:"",starring:"Jonathan Banks",occupation:["Hitman","Private Investigator","Ex-Cop"]},{id:9,name:"Gustavo Fring",nickname:"Gus",birthday:"",status:"Dead",imageUrl:"https://okdiario.com/img/series/2016/04/3913109-8993961646-bb8.j.jpg",phrase:"",starring:"Giancarlo Esposito",occupation:[""]},{id:10,name:"Hector Salamanca",nickname:"Don Hector",birthday:"",status:"Dead",imageUrl:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/4/4b/Hector_Salamanca.jpg",phrase:"",starring:"Mark Margolis",occupation:[""]},{id:11,name:"Domingo Molina",nickname:"Krazy-8",birthday:"",status:"Dead",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554",phrase:"",starring:"Maximino Arciniega",occupation:[""]},{id:12,name:"Tuco Salamanca",nickname:"Tuco",birthday:"",status:"Dead",imageUrl:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/e/ec/Tuco_Salamanca.jpg",phrase:"",starring:"Raymond Cruz",occupation:[""]},{id:13,name:"Marco & Leonel Salamanca",nickname:"The Cousins",birthday:"",status:"Dead",imageUrl:"https://k5p5x6s5.rocketcdn.me/wp-content/uploads/2022/04/4d2c782a0a112fa253d2183ace74a4d3.jpeg",phrase:"",starring:"Luis & Daniel Moncada",occupation:[""]},{id:14,name:"Lydia Rodarte-Quayle",nickname:"Lydia",birthday:"",status:"Dead",imageUrl:"https://www.rollingstone.com/wp-content/uploads/2018/06/rs-18051-breakingbad-624-1380209485.jpg",phrase:"",starring:"Laura Fraser",occupation:[""]},{id:15,name:"Todd Alquist",nickname:"Ricky Hitler",birthday:"",status:"Dead",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303",phrase:"",starring:"Jesse Plemons",occupation:[""]},{id:16,name:"Jane Margolis",nickname:"Apology Girl",birthday:"",status:"Dead",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Jane.jpg/revision/latest?cb=20090621233653",phrase:"",starring:"Krysten Ritter",occupation:[""]},{id:17,name:"Skinny Pete",nickname:"Skinny",birthday:"",status:"Alive",imageUrl:"https://static.wikia.nocookie.net/breakingbad/images/1/17/Skinny_Pete_El_Camino.jpeg",phrase:"",starring:"Charles Baker",occupation:[""]},{id:18,name:"Brandon Mayhew",nickname:"Badger",birthday:"",status:"Alive",imageUrl:"https://imagez.tmz.com/image/f1/4by3/2019/07/17/f1949f71f6724888a7af493b02be5ee1_xl.jpg",phrase:"",starring:"Matt L. Jones",occupation:[""]},{id:19,name:"Huell Babineaux",nickname:"Huell",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/c/c1/4x11_-_Huell.png/revision/latest?cb=20130913100459&path-prefix=es",phrase:"",starring:"Lavell Crawford",occupation:[""]},{id:20,name:"Steven Gomez",nickname:"Gomie",birthday:"",status:"Dead",imageUrl:"https://www.thesun.co.uk/wp-content/uploads/2022/01/5f282fac5fa9a40e2c00f6da-1.jpeg",phrase:"",starring:"Steven Michael Quezada",occupation:[""]},{id:21,name:"Theodore Beneke",nickname:"Ted",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/b/bd/Cast_bb_700x1000_todd-beneke-lg.jpg/revision/latest?cb=20170723165057",phrase:"",starring:"Christopher Cousins",occupation:[""]},{id:22,name:"Gale Boetticher",nickname:"GB",birthday:"",status:"Dead",imageUrl:"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_gale-boetticher-lg.jpg",phrase:"",starring:"David Costabile",occupation:[""]},{id:23,name:"Andrea Cantillo",nickname:"Andrea",birthday:"",status:"Dead",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/5/51/Andrea_-_To%27hajilee.png/revision/latest?cb=20131025094457",phrase:"",starring:"Emily Rios",occupation:[""]},{id:24,name:"Brock Cantillo",nickname:"Brock",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/9/97/Brock.png/revision/latest?cb=20170725193144",phrase:"",starring:"Ian Posada",occupation:[""]},{id:25,name:"Carmen Molina",nickname:"Carmen",birthday:"",status:"Alive",imageUrl:"https://www.satiny.org/media/2017/11/Breaking-Bad-Green-Light-17.jpg",phrase:"",starring:"Carmen Serano",occupation:[""]},{id:26,name:"Gretchen Schwartz",nickname:"Gretchen",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/5/5e/Gretchen_Schwartz.png/revision/latest?cb=20131005103735&path-prefix=es",phrase:"",starring:"Jessica Hecht",occupation:[""]},{id:27,name:"Elliot Schwartz",nickname:"Elliot",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/8/8a/Elliott_Schwartz.png/revision/latest?cb=20131005103743&path-prefix=es",phrase:"",starring:"Adam Godley",occupation:[""]},{id:28,name:"Gonzo",nickname:"Gonzo",birthday:"",status:"Dead",imageUrl:"https://i.insider.com/5f2478ad40c1f32c144dff0e?width=600&format=jpeg&auto=webp",phrase:"",starring:"Jesus, Payan, Jr.",occupation:[""]},{id:29,name:"Christian Ortega",nickname:"Combo",birthday:"",status:"Dead",imageUrl:"https://static.wikia.nocookie.net/breakingbad/images/2/20/Combo_main.png",phrase:"",starring:"Rodney Rush",occupation:[""]},{id:30,name:"Mrs. Pinkman",nickname:"Jesse's mom",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/a/a2/Tess_Harper.jpg/revision/latest?cb=20120923235754",phrase:"",starring:"Tess Harper",occupation:[""]},{id:31,name:"Adam Pinkman",nickname:"Jesse's dad",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/c/c9/AdamPinkman.png/revision/latest?cb=20141117180836&path-prefix=es",phrase:"",starring:"Michael Bofshever",occupation:[""]},{id:32,name:"Jake Pinkman",nickname:"Jake",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/a/a4/Jake.jpg/revision/latest?cb=20121214201656&path-prefix=de",phrase:"",starring:"Ben Petry",occupation:[""]},{id:33,name:"No-Doze",nickname:"No-Doze",birthday:"",status:"Dead",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/c/ca/No_Doze_2.png/revision/latest?cb=20131014073210",phrase:"",starring:"Cesar Garcia",occupation:[""]},{id:34,name:"Emilio Koyama",nickname:"Emilio",birthday:"",status:"Dead",imageUrl:"https://vignette.wikia.nocookie.net/trbreakingbad/images/9/9c/Emilio.jpeg/revision/latest?cb=20161029192022",phrase:"",starring:"John Koyama",occupation:[""]},{id:35,name:"Dr. Delcavoli",nickname:"Dr. Delcavoli",birthday:"",status:"Alive",imageUrl:"https://res.cloudinary.com/dwvrok1le/image/upload/v1540314509/lj5qlbe6xvmmpxnspz6y.jpg",phrase:"",starring:"David House",occupation:[""]},{id:36,name:"Wendy S.",nickname:"Wendy",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/c/cc/Wendy.jpg/revision/latest?cb=20170721162715",phrase:"",starring:"Julie Minesci",occupation:[""]},{id:37,name:"Bogdan Wolynetz",nickname:"Bogdan",birthday:"",status:"Alive",imageUrl:"https://i.pinimg.com/originals/d5/c0/34/d5c0345ae70fbdbaa33b7537d685da54.jpg",phrase:"",starring:"Marius Stan",occupation:[""]},{id:38,name:"Ken",nickname:"Ken Wins",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/8/8c/Ken.png/revision/latest?cb=20170721163649",phrase:"",starring:"Kyle Bornheimer",occupation:[""]},{id:39,name:"Holly White",nickname:"Holly",birthday:"",status:"Alive",imageUrl:"https://external-preview.redd.it/AGoRf6tSmKYoGxRFj6RevVEmLlp9Z5hdWOj9aZ3I7Qc.jpg?auto=webp&s=ea73d28e012c05fba8cce7ad1f2a0ec83ceb64bf",phrase:"",starring:"Unknown",occupation:[""]},{id:40,name:"George Merkert",nickname:"ASAC Merkert",birthday:"",status:"Alive",imageUrl:"https://m.media-amazon.com/images/M/MV5BMTkwMTkxNjUzM15BMl5BanBnXkFtZTgwMTg5MTczMTE@._V1_UY317_CR175,0,214,317_AL_.jpg",phrase:"",starring:"Michael Shamus Wiles",occupation:[""]},{id:41,name:"Donald Margolis",nickname:"Jane's dad",birthday:"",status:"Unknown",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/1/12/Donald_Margolis.png/revision/latest?cb=20120802212034",phrase:"",starring:"John de Lancie",occupation:[""]},{id:42,name:"Clovis",nickname:"Clovis",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/0/0f/Clovis.JPG/revision/latest?cb=20100415221013",phrase:"",starring:"Tom Kiesche",occupation:[""]},{id:43,name:"SAC Ramey",nickname:"SAC Ramey",birthday:"",status:"Alive",imageUrl:"https://res.cloudinary.com/dwvrok1le/image/upload/v1539360786/o7thsjdorobfbetqaefj.jpg",phrase:"",starring:"Todd Terry",occupation:[""]},{id:44,name:"Victor",nickname:"Victor",birthday:"",status:"Dead",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/4/48/Victor2.png/revision/latest?cb=20131009225027",phrase:"",starring:"Jeremiah Bitsui",occupation:[""]},{id:45,name:"Tom\xE1s Cantillo",nickname:"Andrea's brother",birthday:"",status:"Dead",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/e/ec/Tomas.png/revision/latest?cb=20130131043014",phrase:"",starring:"Angelo Martinez",occupation:[""]},{id:46,name:"Francesca Liddy",nickname:"Honey Tits",birthday:"",status:"Alive",imageUrl:"https://res.cloudinary.com/dwvrok1le/image/upload/v1539362182/o9mstjonfn6dsdi3uij6.jpg",phrase:"",starring:"Tina Parker",occupation:[""]},{id:47,name:"Cynthia",nickname:"Cynthia",birthday:"",status:"Alive",imageUrl:"https://res.cloudinary.com/dwvrok1le/image/upload/v1539362375/z63youp272k5mbqbuqj9.jpg",phrase:"",starring:"Ashley Kajiki",occupation:[""]},{id:48,name:"Tortuga",nickname:"Tortuga",birthday:"",status:"Dead",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/5/58/BBWA_Tortuga.jpg/revision/latest?cb=20131101172007",phrase:"",starring:"Danny Trejo",occupation:[""]},{id:49,name:"Tim Roberts",nickname:"Detective Roberts",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/8/8d/2x02_-_Tim_Roberts.jpg/revision/latest?cb=20110927053954",phrase:"",starring:"Nigel Gibbs",occupation:[""]},{id:50,name:"Juan Bolsa",nickname:"Don Juan",birthday:"",status:"Dead",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/3/38/Bolsa.png/revision/latest?cb=20180825204033",phrase:"",starring:"Javier Grajeda",occupation:[""]},{id:51,name:"Stacey Ehrmantraut",nickname:"Mike's daugter-in-law",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/b/b3/StaceyEhrmantraut.png/revision/latest?cb=20150310150049",phrase:"",starring:"Kerry Condon",occupation:[""]},{id:52,name:"Kaylee Ehrmantraut",nickname:"Mike's Granddaughter",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/c/cc/Kaylee.png/revision/latest?cb=20170810082843",phrase:"",starring:"Kaija Rose Bales",occupation:[""]},{id:53,name:"Pamela",nickname:"Skyler's attorney",birthday:"",status:"Alive",imageUrl:"https://res.cloudinary.com/dwvrok1le/image/upload/v1539373707/bbb6muek0tcmbc3g2sog.jpg",phrase:"",starring:"Julie Dretzin",occupation:[""]},{id:54,name:"Duane Chow",nickname:"Chow",birthday:"",status:"Dead",imageUrl:"https://res.cloudinary.com/dejj8n6g7/image/upload/v1674794463/BreakingBadCharacters/chow_cxptfu.jpg",phrase:"",starring:"James Ning",occupation:[""]},{id:55,name:"Group Leader",nickname:"Counselor",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/8/81/Group_Leader_Brown_Shirt_-_Kafkaesque.png/revision/latest?cb=20131025095333",phrase:"",starring:"Jere Burns",occupation:[""]},{id:56,name:"Officer Saxton",nickname:"Saxton",birthday:"",status:"Alive",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/f/f3/Officer_Saxton_-_I.F.T..png/revision/latest?cb=20131025090606",phrase:"",starring:"Stoney Westmoreland",occupation:[""]},{id:57,name:"Jack Welker",nickname:"Uncle Jack",birthday:"",status:"Dead",imageUrl:"https://vignette.wikia.nocookie.net/breakingbad/images/c/ce/Jack5x13.png/revision/latest?cb=20130912225922",phrase:"",starring:"Michael Bowen",occupation:[""]}];c.map(e=>{e.birthday===""&&(e.birthday="Unknown")});const P=document.createElement("section");P.className="header__background";const Y='<svg class="header__logoBBC" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2476 640"><defs><style>.cls-1,.cls-5,.cls-8{font-size:220px;}.cls-1,.cls-5,.cls-6,.cls-8{font-family:Quicksand-Bold, Quicksand;font-weight:700;}.cls-2{letter-spacing:-0.01em;}.cls-3{letter-spacing:0em;}.cls-4{fill:url(#linear-gradient);}.cls-5,.cls-6{fill:#fff;}.cls-6{font-size:50px;}.cls-7{fill:url(#linear-gradient-2);}.cls-8{letter-spacing:0em;}.cls-9{letter-spacing:0em;}.cls-10{fill:url(#linear-gradient-3);}</style><linearGradient id="linear-gradient" x1="1351.5" y1="639.5" x2="1052.5" y2="340.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d483f"/><stop offset="0.36" stop-color="#0a513d"/><stop offset="0.95" stop-color="#016b38"/><stop offset="0.99" stop-color="#006d38"/></linearGradient><linearGradient id="linear-gradient-2" x1="521" y1="0.5" x2="820" y2="299.5" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-3" x1="1906.5" y1="299.5" x2="1607.5" y2="0.5" xlink:href="#linear-gradient"/></defs><text class="cls-1" transform="translate(1354.5 592.4)">ha<tspan class="cls-2" x="267.08" y="0">r</tspan><tspan x="359.92" y="0">ac</tspan><tspan class="cls-3" x="612.47" y="0">t</tspan><tspan x="701.35" y="0">ers</tspan></text><rect class="cls-4" x="1052.5" y="340.5" width="299" height="299"/><path d="M1351,341V639H1053V341h298m1-1H1052V640h300V340Z"/><text class="cls-5" transform="translate(1132.53 585.83)">C</text><text class="cls-6" transform="translate(1306.33 398.88) scale(0.93 1)">6</text><text class="cls-1" transform="translate(52 235.4)">The</text><rect class="cls-7" x="521" y="0.5" width="299" height="299"/><path d="M819.5,1V299h-298V1h298m1-1h-300V300h300V0Z"/><text class="cls-5" transform="translate(549.71 242.8)">Br</text><text class="cls-6" transform="translate(754.85 58.88)">35</text><text class="cls-8" transform="translate(822 246.4)">e<tspan class="cls-9" x="130.68" y="0">aking</tspan></text><text class="cls-1" transform="translate(1907.5 243.4)">d</text><rect class="cls-10" x="1607.5" y="0.5" width="299" height="299"/><path d="M1906,1V299H1608V1h298m1-1H1607V300h300V0Z"/><text class="cls-5" transform="translate(1615.37 245.83)">Ba</text><text class="cls-6" transform="translate(1840.55 58.88)">56</text></svg>',C=document.createElement("button");C.className="header__buttonOrderBy";const K=document.createElement("span");K.className="spanMenu";C.appendChild(K);const m=document.createElement("div");m.id="buttonsAliveDead";m.className="header__buttonsAliveDead";const p=document.createElement("button");p.id="btnDefault";p.className="btnOrder";p.innerText="Default";const V=document.createElement("div");V.appendChild(p);const g=document.createElement("button");g.id="btnAlive";g.className="btnOrder";g.innerText="Alive";const q=document.createElement("div");q.appendChild(g);const h=document.createElement("button");h.id="btnDead";h.className="btnOrder";h.innerText="Dead";const F=document.createElement("div");F.appendChild(h);const u=document.createElement("button");u.id="btnAlpha";u.className="btnOrder";u.innerText="Alphabetical";const j=document.createElement("div");j.className="btnOrder-Alphabetic";j.appendChild(u);const b=document.createElement("button");b.id="btnWhite";b.className="btnOrder";b.innerText="Family White";const S=document.createElement("div");S.className="btnOrder-FWhite";S.appendChild(b);const k=document.createElement("button");k.id="btnSalamanca";k.className="btnOrder";k.innerText="Family Salamanca";const E=document.createElement("div");E.className="btnOrder-familySala";E.appendChild(k);m.append(V,q,F,j,S,E);const y=e=>{const t=document.querySelector("#sectionCards");for(let n=0;n<e.length;n++){const r=document.createElement("div");r.id=`BB${e[n]}`,r.className="section_card",t==null||t.append(r)}},X=c.map(e=>e.id),I=X,ee=c.sort((e,t)=>{const n=e.name.toUpperCase(),r=t.name.toUpperCase();return n<r?-1:n>r?1:0});ee.map(e=>(e.name,e.id));let D=[],U=[];c.forEach(e=>{e.status==="Alive"&&(D.push(e),D.sort((t,n)=>t.id-n.id)),e.status==="Dead"&&(U.push(e),U.sort((t,n)=>t.id-n.id))});const ae=D.map(e=>e.id),te=U.map(e=>e.id),ne=`
    <div class="footer-bar">
        <div class="footer-bar_repository">
            <h2>Project Breaking Bad Characters</h2>
            <a href="">Repository on Github</a>
        </div>

        <h2 class="footer-bar_developer">Rireyes Technologies 2022</h2>

        <div class="footer-bar_webs">
            <a href="https://github.com/EduardoRireyes24" target="_blank" rel="noreferrer noopener">
                <svg height="40"  viewBox="0 0 16 16" width="80" class="icon-github">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
            </a>
            <a href="" class="icon-instagram"></a>
            <a href="" class="icon-twitter">
                <svg height="40" viewBox="0 0 24 24" >
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </svg>
            </a>
        </div>
    </div>
`,_=document.querySelector("#headerBar");_!=null&&(_.innerHTML=Y,_.append(P,C,m));const o=document.querySelector("#sectionCards");o!=null&&o.append(y(I));function v(){c.forEach(e=>{Z.create(e)})}v();const ie=document.querySelector("#btnDefault");ie.addEventListener("click",()=>{o.innerHTML=y(I),v(),T.style.animation="closeListButtons 1s ease forwards"});const re=document.querySelector("#btnAlive"),T=document.querySelector("#buttonsOrder");re.addEventListener("click",()=>{o.innerHTML=y(ae),v(),T.style.animation="closeListButtons 1s ease forwards"});const se=document.querySelector("#btnDead");se.addEventListener("click",()=>{o.innerHTML=y(te),v(),T.style.animation="closeListButtons 1s ease forwards"});const R=document.querySelector("#infoFooter");R!=null&&(R.innerHTML=ne);