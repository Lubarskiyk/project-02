import{A as q,S as v,N as w,K as h,i as l,a as N,b as f}from"./assets/vendor-BvCtIY9d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(t){if(t.ep)return;t.ep=!0;const c=o(t);fetch(t.href,c)}})();const R={avif:"/project-02/assets/image1x-CnDihyB5.avif 680w",webp:"/project-02/assets/image1x-DEsM0OTO.webp 680w"},U={src:"/project-02/assets/image1x-CljDKkU6.png",w:680,h:700},H={sources:R,img:U},X={avif:"/project-02/assets/image2x-nNIifZQy.avif 1360w",webp:"/project-02/assets/image2x-BAcHkNi_.webp 1360w"},Y={src:"/project-02/assets/image2x-Db8PjR65.png",w:1360,h:1400},z={sources:X,img:Y};function m(e,s,o,r,t){let c="",i="",C="",B="",I="",S,k;for(const[E,a]of Object.entries(e))E===s&&(c=a.sources.avif.split(" ")[0],i=a.sources.webp.split(" ")[0],I=a.img.src,S=a.img.w,k=a.img.h),E===o&&(C=a.sources.avif.split(" ")[0],B=a.sources.webp.split(" ")[0]);return`<picture class="${r} ">
	    <source srcset="${c} 1x, ${C} 2x" type="image/avif"/>
	    <source srcset="${i} 1x, ${B} 2x" type="image/webp"/>
	    <img 
	      src="${I}"
	      width="${S}" 
	      height="${k}"
	      alt="${t}"
	  />
	  </picture>`}const n={heroBackground:document.querySelector(".js_image"),developerFoto:document.querySelector(".js-dev-foto"),accordionContainer:document.querySelector(".js-accordion-container"),rootColor:document.documentElement,openmenu:document.querySelector(".js_menu_changecolor"),changecolor:document.querySelector(".change-theme"),form:document.querySelector(".js-footer-form")},D={path:"/img/aboutme_up/image1x.png",path_retina:"/img/aboutme_up/image1x.png"},V=Object.assign({"/img/aboutme_up/image1x.png":H,"/img/aboutme_up/image2x.png":z});function Q(){n.developerFoto.insertAdjacentHTML("beforeend",m(V,D.path,D.path_retina,"developer-card-photo","Foto Developer"))}const W={avif:"/project-02/assets/hero_blue_1x-D9WSZGyE.avif 1440w",webp:"/project-02/assets/hero_blue_1x-16lRJ8m4.webp 1440w"},F={src:"/project-02/assets/hero_blue_1x-BWZA2Stx.png",w:1440,h:900},G={sources:W,img:F},J={avif:"/project-02/assets/hero_blue_2x-BfBVl9rF.avif 2880w",webp:"/project-02/assets/hero_blue_2x-BG_0wHao.webp 2880w"},K={src:"/project-02/assets/hero_blue_2x-CYNzmcjV.png",w:2880,h:1800},Z={sources:J,img:K},ee={avif:"/project-02/assets/hero_green_1x-CvYf6Jfo.avif 1440w",webp:"/project-02/assets/hero_green_1x-CsYXCIn3.webp 1440w"},se={src:"/project-02/assets/hero_green_1x-DXmE7hq4.png",w:1440,h:900},oe={sources:ee,img:se},te={avif:"/project-02/assets/hero_green_2x-CvRcrWY-.avif 2880w",webp:"/project-02/assets/hero_green_2x-xnNoorFE.webp 2880w"},re={src:"/project-02/assets/hero_green_2x-P8mZQoRH.png",w:2880,h:1800},ce={sources:te,img:re},ne={avif:"/project-02/assets/hero_iceberg_1x-C77m3OhU.avif 1440w",webp:"/project-02/assets/hero_iceberg_1x-DP_XqC5W.webp 1440w"},ie={src:"/project-02/assets/hero_iceberg_1x-BuOjNdlQ.png",w:1440,h:900},ae={sources:ne,img:ie},ge={avif:"/project-02/assets/hero_iceberg_2x-C-XsPSPQ.avif 2880w",webp:"/project-02/assets/hero_iceberg_2x-CnEOoUDF.webp 2880w"},pe={src:"/project-02/assets/hero_iceberg_2x-CXd_YeSv.png",w:2880,h:1800},le={sources:ge,img:pe},me={avif:"/project-02/assets/hero_lightred_1x-saHZwOlb.avif 1440w",webp:"/project-02/assets/hero_lightred_1x-L3DUgd1v.webp 1440w"},_e={src:"/project-02/assets/hero_lightred_1x-Cd6JWZOa.png",w:1440,h:900},ue={sources:me,img:_e},de={avif:"/project-02/assets/hero_lightred_2x-DI66JcXJ.avif 2880w",webp:"/project-02/assets/hero_lightred_2x-CEJ743dJ.webp 2880w"},ve={src:"/project-02/assets/hero_lightred_2x-DHVgjF4N.png",w:2880,h:1800},we={sources:de,img:ve},he={avif:"/project-02/assets/hero_orange_1x-BI09fmsg.avif 1440w",webp:"/project-02/assets/hero_orange_1x-7IWSULF0.webp 1440w"},fe={src:"/project-02/assets/hero_orange_1x-QmqGYIMi.png",w:1440,h:900},be={sources:he,img:fe},xe={avif:"/project-02/assets/hero_orange_2x-CpJ363RY.avif 2880w",webp:"/project-02/assets/hero_orange_2x-DZY7mBUd.webp 2880w"},je={src:"/project-02/assets/hero_orange_2x-D6AR_Nru.png",w:2880,h:1800},ye={sources:xe,img:je},Ae={avif:"/project-02/assets/hero_red_1x-iepyatp_.avif 1440w",webp:"/project-02/assets/hero_red_1x-C7vcg9Ds.webp 1440w"},$e={src:"/project-02/assets/hero_red_1x-BMsS-W4x.png",w:1440,h:900},Ce={sources:Ae,img:$e},Be={avif:"/project-02/assets/hero_red_2x-DgcFuPrp.avif 2880w",webp:"/project-02/assets/hero_red_2x-BeAfqa0z.webp 2880w"},Ie={src:"/project-02/assets/hero_red_2x-Bplvo_7_.png",w:2880,h:1800},Se={sources:Be,img:Ie},b=[{id:1,path:"/img/background_hero/hero_red_1x.png",path_retina:"/img/background_hero/hero_red_2x.png",accent_color:"#ED3B44",aсcent_collor_hover:"#e0373f"},{id:2,path:"/img/background_hero/hero_green_1x.png",path_retina:"/img/background_hero/hero_green_2x.png",accent_color:"#C6E327",aсcent_collor_hover:"#d0e84a"},{id:3,path:"/img/background_hero/hero_blue_1x.png",path_retina:"/img/background_hero/hero_blue_2x.png",accent_color:"#0041E8",aсcent_collor_hover:"#4d7fff"},{id:4,path:"/img/background_hero/hero_lightred_1x.png",path_retina:"/img/background_hero/hero_lightred_2x.png",accent_color:"#E6533C",aсcent_collor_hover:"#ed8778"},{id:5,path:"/img/background_hero/hero_iceberg_1x.png",path_retina:"/img/background_hero/hero_iceberg_2x.png",accent_color:"#2B4441",aсcent_collor_hover:"#588d87"},{id:6,path:"/img/background_hero/hero_orange_1x.png",path_retina:"/img/background_hero/hero_orange_2x.png",accent_color:"#FF7F08",aсcent_collor_hover:"#ffa34d"}];function ke(){return parseInt(localStorage.getItem("myTheme"))||1}function Ee(e){localStorage.setItem("myTheme",e)}n.changecolor.addEventListener("click",()=>{n.openmenu.classList.toggle("isopen_changecolor")});const De=document.querySelectorAll(".theme_button");De.forEach((e,s)=>{const o=b.find(r=>r.id===s+1);e.style.background=o.accent_color,e.dataset.id=s+1});n.openmenu.addEventListener("click",e=>{const s=parseInt(e.target.dataset.id),o=b.find(r=>r.id===s);n.heroBackground.innerHTML=m(O,o.path,o.path_retina,"background_image"),n.rootColor.style.setProperty("--akcent-collor",`${o.accent_color}`),L(o.accent_color,o.aсcent_collor_hover),n.openmenu.classList.toggle("isopen_changecolor"),Ee(s)});function L(e,s){n.rootColor.style.setProperty("--akcent-collor",e),n.rootColor.style.setProperty("--aсcent-collor-hover",s)}const qe=ke(),_=b.find(e=>e.id===qe),O=Object.assign({"/img/background_hero/hero_blue_1x.png":G,"/img/background_hero/hero_blue_2x.png":Z,"/img/background_hero/hero_green_1x.png":oe,"/img/background_hero/hero_green_2x.png":ce,"/img/background_hero/hero_iceberg_1x.png":ae,"/img/background_hero/hero_iceberg_2x.png":le,"/img/background_hero/hero_lightred_1x.png":ue,"/img/background_hero/hero_lightred_2x.png":we,"/img/background_hero/hero_orange_1x.png":be,"/img/background_hero/hero_orange_2x.png":ye,"/img/background_hero/hero_red_1x.png":Ce,"/img/background_hero/hero_red_2x.png":Se});function Le(){n.heroBackground.insertAdjacentHTML("beforeend",m(O,_.path,_.path_retina,"background_image","background")),L(_.accent_color,_.aсcent_collor_hover)}const Oe={avif:"/project-02/assets/screen101x-D0F2Qzm1.avif 830w",webp:"/project-02/assets/screen101x-COHgMj--.webp 830w"},Te={src:"/project-02/assets/screen101x-Du8npVwr.png",w:830,h:479},Pe={sources:Oe,img:Te},Me={avif:"/project-02/assets/screen102x-BpD5cC3U.avif 1660w",webp:"/project-02/assets/screen102x-Br9uPSGS.webp 1660w"},Ne={src:"/project-02/assets/screen102x-wGcFSfLX.png",w:1660,h:958},Re={sources:Me,img:Ne},Ue={avif:"/project-02/assets/screen111x-BTEeAEl7.avif 830w",webp:"/project-02/assets/screen111x-qdYL_53m.webp 830w"},He={src:"/project-02/assets/screen111x-BicfJxof.png",w:830,h:479},Xe={sources:Ue,img:He},Ye={avif:"/project-02/assets/screen112x-GvFBrX7u.avif 1660w",webp:"/project-02/assets/screen112x-B1Mip4Ug.webp 1660w"},ze={src:"/project-02/assets/screen112x-CutCeeNH.png",w:1660,h:958},Ve={sources:Ye,img:ze},Qe={avif:"/project-02/assets/screen121x-BGj9UkVb.avif 834w",webp:"/project-02/assets/screen121x-BY9n5bbw.webp 834w"},We={src:"/project-02/assets/screen121x-DipJMA2q.png",w:834,h:509},Fe={sources:Qe,img:We},Ge={avif:"/project-02/assets/screen122x-1CDag4yM.avif 1668w",webp:"/project-02/assets/screen122x-DvxBK5NP.webp 1668w"},Je={src:"/project-02/assets/screen122x-ymRusC7Z.png",w:1668,h:1018},Ke={sources:Ge,img:Je},Ze={avif:"/project-02/assets/screen1x-Dnfx79aX.avif 830w",webp:"/project-02/assets/screen1x-7jbcydi4.webp 830w"},es={src:"/project-02/assets/screen1x-tzH2JqDY.png",w:830,h:462},ss={sources:Ze,img:es},os={avif:"/project-02/assets/screen2x-1VoY9V2H.avif 1660w",webp:"/project-02/assets/screen2x-CD7-uNSD.webp 1660w"},ts={src:"/project-02/assets/screen2x-D0O0n5M0.png",w:1660,h:924},rs={sources:os,img:ts},cs={avif:"/project-02/assets/screen41x-CacewYpN.avif 834w",webp:"/project-02/assets/screen41x-RknjITiP.webp 834w"},ns={src:"/project-02/assets/screen41x-DdUSrJN_.png",w:834,h:527},is={sources:cs,img:ns},as={avif:"/project-02/assets/screen42x-WQi_nzli.avif 1668w",webp:"/project-02/assets/screen42x-BfJCNgmN.webp 1668w"},gs={src:"/project-02/assets/screen42x-BJulQern.png",w:1668,h:1054},ps={sources:as,img:gs},ls={avif:"/project-02/assets/screen51x-BGLwTYzP.avif 830w",webp:"/project-02/assets/screen51x-DX4flF39.webp 830w"},ms={src:"/project-02/assets/screen51x-BfSzAoA8.png",w:830,h:479},_s={sources:ls,img:ms},us={avif:"/project-02/assets/screen52x-RnPa_MwV.avif 1660w",webp:"/project-02/assets/screen52x-gX7ghzy6.webp 1660w"},ds={src:"/project-02/assets/screen52x-D4cke4w0.png",w:1660,h:958},vs={sources:us,img:ds},ws={avif:"/project-02/assets/screen61x-Bztue3GO.avif 830w",webp:"/project-02/assets/screen61x-BXY5UXHw.webp 830w"},hs={src:"/project-02/assets/screen61x-ClL7rUjN.png",w:830,h:515},fs={sources:ws,img:hs},bs={avif:"/project-02/assets/screen62x-Bsvr1cpW.avif 1660w",webp:"/project-02/assets/screen62x-P33QkH9n.webp 1660w"},xs={src:"/project-02/assets/screen62x-CmPglJqQ.png",w:1660,h:1029},js={sources:bs,img:xs},ys={avif:"/project-02/assets/screen71x-C7tkEZbS.avif 830w",webp:"/project-02/assets/screen71x-Buq8hHvh.webp 830w"},As={src:"/project-02/assets/screen71x-CzJYB8_K.png",w:830,h:479},$s={sources:ys,img:As},Cs={avif:"/project-02/assets/screen72x-vh1hJkmc.avif 1660w",webp:"/project-02/assets/screen72x-CjwQtsEI.webp 1660w"},Bs={src:"/project-02/assets/screen72x-J_aBDcRr.png",w:1660,h:958},Is={sources:Cs,img:Bs},Ss={avif:"/project-02/assets/screen81x-DdS5n4xg.avif 830w",webp:"/project-02/assets/screen81x-CZWFOadU.webp 830w"},ks={src:"/project-02/assets/screen81x-CsdUM33W.png",w:830,h:479},Es={sources:Ss,img:ks},Ds={avif:"/project-02/assets/screen82x-DiavNCT8.avif 1660w",webp:"/project-02/assets/screen82x-2EQna9cv.webp 1660w"},qs={src:"/project-02/assets/screen82x-C4aD4qz7.png",w:1660,h:958},Ls={sources:Ds,img:qs},Os={avif:"/project-02/assets/screen91x-CKG41mt3.avif 830w",webp:"/project-02/assets/screen91x-fKXkSomB.webp 830w"},Ts={src:"/project-02/assets/screen91x-BOqDqLoG.png",w:830,h:479},Ps={sources:Os,img:Ts},Ms={avif:"/project-02/assets/screen92x-I-hkLm6X.avif 1660w",webp:"/project-02/assets/screen92x-0CC9OPe8.webp 1660w"},Ns={src:"/project-02/assets/screen92x-CYql2dCO.png",w:1660,h:958},Rs={sources:Ms,img:Ns};function Us(){const e=document.querySelector(".title");e.style.display="none"}let g=null;function Hs(){g=document.createElement("style");const e=`@keyframes Line {
    from {
        transform: translateX(80%);
    }
    to {
        transform: translateX(-10%);
    }
}
    `;g.textContent=e,document.head.appendChild(g)}function Xs(){g&&document.head.contains(g)&&(document.head.removeChild(g),g=null)}const Ys=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting?Hs():Xs()})}),zs=document.querySelector(".covers");Ys.observe(zs);const u=[{coverClass:"cover-img",coverImeageOne:"/img/covers/screen61x.png",coverImeageTwo:"/img/covers/screen62x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen101x.png",coverImeageTwo:"/img/covers/screen102x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen71x.png",coverImeageTwo:"/img/covers/screen72x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen111x.png",coverImeageTwo:"/img/covers/screen112x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen1x.png",coverImeageTwo:"/img/covers/screen2x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen81x.png",coverImeageTwo:"/img/covers/screen82x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen91x.png",coverImeageTwo:"/img/covers/screen92x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen81x.png",coverImeageTwo:"/img/covers/screen82x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen91x.png",coverImeageTwo:"/img/covers/screen92x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen41x.png",coverImeageTwo:"/img/covers/screen42x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen51x.png",coverImeageTwo:"/img/covers/screen52x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen121x.png",coverImeageTwo:"/img/covers/screen122x.png",coverAlt:"imeage"}],Vs=Object.assign({"/img/covers/screen101x.png":Pe,"/img/covers/screen102x.png":Re,"/img/covers/screen111x.png":Xe,"/img/covers/screen112x.png":Ve,"/img/covers/screen121x.png":Fe,"/img/covers/screen122x.png":Ke,"/img/covers/screen1x.png":ss,"/img/covers/screen2x.png":rs,"/img/covers/screen41x.png":is,"/img/covers/screen42x.png":ps,"/img/covers/screen51x.png":_s,"/img/covers/screen52x.png":vs,"/img/covers/screen61x.png":fs,"/img/covers/screen62x.png":js,"/img/covers/screen71x.png":$s,"/img/covers/screen72x.png":Is,"/img/covers/screen81x.png":Es,"/img/covers/screen82x.png":Ls,"/img/covers/screen91x.png":Ps,"/img/covers/screen92x.png":Rs}),T=document.querySelectorAll(".cover-list"),Qs=[...T];console.log(T.length);Qs.forEach((e,s)=>{const o=m(Vs,u[s].coverImeageOne,u[s].coverImeageTwo,u[s].coverClass,u[s].coverAlt);e.innerHTML=o});new q("#accordion",{duration:300,showMultiple:!0,openOnInit:[0]});const p=new v(".about-me-swiper",{modules:[w,h],navigation:{nextEl:".swiper-button-wrap .aboutme-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},loop:!0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},centeredSlidesBounds:!0,speed:400}),Ws=document.querySelector(".swiper-button-wrap .aboutme-swiper-btn");Ws.addEventListener("click",()=>{window.innerWidth>=1024&&(p.slides[p.activeIndex].parentNode.appendChild(p.slides[p.activeIndex]),p.update())});Le();Q();Us();const d=document.querySelector(".open-burger"),x=document.querySelector(".modal-overlay"),j=document.querySelector(".logo-wrapper"),y=document.querySelector(".headline1"),A=document.querySelector(".change-theme"),Fs=document.querySelector(".close-btn"),$=document.querySelector("body"),Gs=document.querySelector(".order-mobile"),Js=document.querySelector(".navigation-modal");d.addEventListener("click",Ks);function Ks(){x.classList.add("is-open"),y.style.opacity=0,j.style.opacity=0,A.style.opacity=0,d.style.opacity=0,$.style.overflow="hidden"}Fs.addEventListener("click",Zs);function Zs(){x.classList.remove("is-open"),y.style.opacity="",j.style.opacity="",A.style.opacity="",d.style.opacity="",$.style.overflow=""}Js.addEventListener("click",eo);function eo(e){e.preventDefault}Gs.addEventListener("click",so);function so(){x.classList.remove("is-open"),y.style.opacity="",j.style.opacity="",A.style.opacity="",d.style.opacity="",$.style.overflow=""}const oo={avif:"/project-02/assets/project_1_img_1x-CH6XH0Ja.avif 311w",webp:"/project-02/assets/project_1_img_1x-EgtosvHO.webp 311w"},to={src:"/project-02/assets/project_1_img_1x-AWyopqIu.png",w:311,h:195},ro={sources:oo,img:to},co={avif:"/project-02/assets/project_1_img_2x-8wMXkF_L.avif 622w",webp:"/project-02/assets/project_1_img_2x-ByzE1nxz.webp 622w"},no={src:"/project-02/assets/project_1_img_2x-BFVmaD9i.png",w:622,h:390},io={sources:co,img:no},ao={avif:"/project-02/assets/project_2_img_1x-DnVayz_u.avif 311w",webp:"/project-02/assets/project_2_img_1x-DYAFdYMW.webp 311w"},go={src:"/project-02/assets/project_2_img_1x-B38m7zxH.png",w:311,h:195},po={sources:ao,img:go},lo={avif:"/project-02/assets/project_2_img_2x-CE8-vNOU.avif 622w",webp:"/project-02/assets/project_2_img_2x-B_-GaxJf.webp 622w"},mo={src:"/project-02/assets/project_2_img_2x-DN7HGhGG.png",w:622,h:390},_o={sources:lo,img:mo},uo={avif:"/project-02/assets/project_3_img_1x-C9FxY1sJ.avif 311w",webp:"/project-02/assets/project_3_img_1x-B3idU54T.webp 311w"},vo={src:"/project-02/assets/project_3_img_1x-G-lrxyl2.png",w:311,h:195},wo={sources:uo,img:vo},ho={avif:"/project-02/assets/project_3_img_2x-Ids13O88.avif 622w",webp:"/project-02/assets/project_3_img_2x-BK1Uv5p6.webp 622w"},fo={src:"/project-02/assets/project_3_img_2x-BrEi4qh5.png",w:622,h:390},bo={sources:ho,img:fo},xo=[{id:1,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_1_img_1x.png",imgRetinaSrc:"/img/projects/project_1_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"},{id:2,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_2_img_1x.png",imgRetinaSrc:"/img/projects/project_2_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"},{id:3,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_3_img_1x.png",imgRetinaSrc:"/img/projects/project_3_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"}],jo=Object.assign({"/img/projects/project_1_img_1x.png":ro,"/img/projects/project_1_img_2x.png":io,"/img/projects/project_2_img_1x.png":po,"/img/projects/project_2_img_2x.png":_o,"/img/projects/project_3_img_1x.png":wo,"/img/projects/project_3_img_2x.png":bo}),yo=document.querySelector(".proj-swiper-wrap"),Ao=xo.map(({title:e,imgSrc:s,imgRetinaSrc:o,link:r,tags:t})=>`
    <li class="swiper-slide proj-slide">
      <div class="proj-slide-prescription">
        <ul class="proj-list-tags">${t.map(i=>`<li class="proj-tags-item">
      <p>${i}</p>
    </li>`).join("")}</ul>
        <h3 class="proj-slide-title">${e}</h3>
  <button class="proj-link-wrap" type="button" aria-label="go to project page">
  <a href="${r}" class="proj-slide-link" target="_blank">
          See project
        </a>
 </button>
      </div>
      <div class="proj-slide-img">
        ${m(jo,s,o,"proj-img",`${e}`)}
      </div>
    </li>
  `).join("");yo.innerHTML=Ao;new v(".swiper-container",{speed:300,slidesPerView:1,modules:[w,h],navigation:{nextEl:".proj-btn-next",prevEl:".proj-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},lazy:{loadPrevNext:!0,loadOnTransitionStart:!0}});const $o=[{id:1,question:"What programming languages are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{id:2,question:"What are the deadlines for the project?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{id:3,question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{id:4,question:"How can I contact you?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{id:5,question:"Do you provide advice or support?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{id:6,question:"What does the process of developing a software product look like from idea to implementation?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}],Co="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-arrow-right'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M19.414%2027.414l10-10c0.781-0.781%200.781-2.047%200-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828%200s-0.781%202.047%200%202.828l6.586%206.586h-19.172c-1.105%200-2%200.895-2%202s0.895%202%202%202h19.172l-6.586%206.586c-0.39%200.39-0.586%200.902-0.586%201.414s0.195%201.024%200.586%201.414c0.781%200.781%202.047%200.781%202.828%200z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-arrow-left'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M12.586%2027.414l-10-10c-0.781-0.781-0.781-2.047%200-2.828l10-10c0.781-0.781%202.047-0.781%202.828%200s0.781%202.047%200%202.828l-6.586%206.586h19.172c1.105%200%202%200.895%202%202s-0.895%202-2%202h-19.172l6.586%206.586c0.39%200.39%200.586%200.902%200.586%201.414s-0.195%201.024-0.586%201.414c-0.781%200.781-2.047%200.781-2.828%200z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-up'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M23%2014c-0.278%200-0.555-0.116-0.753-0.341l-6.247-7.14-6.247%207.14c-0.364%200.416-0.995%200.458-1.411%200.094s-0.458-0.995-0.094-1.411l7-8c0.19-0.217%200.464-0.341%200.753-0.341s0.563%200.125%200.753%200.341l7%208c0.364%200.416%200.322%201.047-0.094%201.411-0.19%200.166-0.424%200.247-0.658%200.247z'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",Bo={faqList:document.querySelector(".js-accordion-container-faq")};function Io(e){return e.map(({question:s,answer:o})=>`<li class="ac ac-faq">
            <h2 class="ac-header">
                <button type="button" class="ac-trigger" aria-label="open the answer to the question">${s}
                <span class="svg-wrap-faq"> 
                <svg class="icon-faq" width="20" height="20">
                 <use href="${Co}#icon-up"></use>
              </svg></span></button>
             </h2>
            <div class="ac-panel">
              <p class="ac-text">${o}</p>
             </div>
       </li>`).join("")}Bo.faqList.insertAdjacentHTML("beforeend",Io($o));new q(".js-accordion-container-faq",{duration:600,showMultiple:!0});const So="https://portfolio-js.b.goit.study/api",P={reviewList:document.querySelector(".reviews-list")};function ko(e){const s=e.map(({author:o,avatar_url:r,review:t})=>`<li class="reviews-wrap swiper-slide">
            <img src="${r}" alt="${o}" class="reviews-img" width='48' height='48' />
            <div class='reviews-content'>
              <h3 class="reviews-subtitle" >${o}</h3>
              <p class="reviews-text" >${t}</p>
            </div>
          </li>`).join("");P.reviewList.innerHTML=s}function Eo(){const e=`
        <li class="reviews-wrap reviews-wrap--error swiper-slide">
          <p class="reviews-text">Not found</p>
        </li>`;P.reviewList.innerHTML=e}l.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});function Do(){l.error({title:"Error",message:"Sorry, there are no reviews!",theme:"dark",color:"rgb(239, 64, 64)"})}function qo(){const e=new v(".reviews-swiper",{modules:[w,h,N],navigation:{nextEl:".reviews-swiper-button-right",prevEl:".reviews-swiper-button-left"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},autoplay:{delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0}});e.on("slideChange",()=>{const s=e.isEnd,o=e.isBeginning;s?(e.autoplay.stop(),e.params.autoplay.reverseDirection=!0,e.autoplay.start()):o&&(e.autoplay.stop(),e.params.autoplay.reverseDirection=!1,e.autoplay.start())})}const Lo=document.querySelector(".reviews"),M=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&(To(),qo(),M.disconnect())})},{root:null,rootMargin:"0px",threshold:.1});M.observe(Lo);async function Oo(){return(await f.get(`${So}/reviews`)).data}async function To(){try{const e=await Oo();ko(e)}catch{Do(),Eo()}}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("scroll-to-header-btn"),s=document.querySelector(".header"),o=window.innerHeight,r=()=>{window.scrollY>o?e.classList.add("show"):e.classList.remove("show")};window.addEventListener("scroll",r),e.addEventListener("click",()=>{s.scrollIntoView({behavior:"smooth"})})});const Po="https://portfolio-js.b.goit.study/api";f.defaults.baseURL=Po;async function Mo(e){const{data:s,status:o,statusText:r}=await f.post("/requests",e);return{data:s,status:o,statusText:r}}const No="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgBzVWBDYIwEDw3YAM7ghvICG6AG8gGuIFuwAjECRjBEXQD3eB9zCEf0lpASLzkE/iv99/eWYB/gogcNDIsASU+S4cT5oQSOhKXDTmfHeaCklUaNzZKNB4aNeaAEu05cWZyOXMpfgUnv3nyV9YSTIX++MhJt3zftztppmetwBRYYfm+My5Kmauoh8NY0DEft/QabM0Q4wU3ZIXJbfoNmC9GC+4T1hxZg7XJJxIwQog879vS1N7w5FvB8xi54zQlBu7M1GrqkXxrUFphAyQVwsM1OCGyYJqvERG83b588bSYP1qg7r+nxHPfBMhlxLqsTbghNhvagGvrj+DS3TcOEcSOyKzr7ik+lJgZdORjRUFSLIP7ikezxIf8qXHB0ngB0x4XMNg0o7IAAAAASUVORK5CYII=",Ro="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=";function Uo(){return l.info({class:"infoNotify",position:"center",title:"Thank you for your interest in cooperation!",titleSize:" 20px",titleLineHeight:1.5,titleColor:"#fafafa",message:"The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",messageSize:"16px",messageLineHeight:1.5,messageColor:"rgba(250, 250, 250, 0.6)",backgroundColor:"#1c1d20",layout:3,closeOnEscape:!0,progressBar:!1,timeout:!1,icon:null,overlay:!0,overlayColor:"rgba(15, 15, 16, 0.6)",overlayClose:!0,zindex:"222"})}function Ho(){const e=document.querySelector(".infoNotify .iziToast-title");e.style.textAlign="center",e.style.marginRight=0,e.style.fontFamily="Inter Tight",e.style.fontWeight=600,e.style.letterSpacing="-0.02em"}function Xo(){l.warning({class:"emptyNotify",position:"topRight",maxWidth:"340px",title:"Comments can not be empty",titleSize:"16px",titleColor:"white",message:"you must fill the comments section",messageColor:"white",backgroundColor:"#09f",iconUrl:No,layout:1,progressBarColor:" #3958c9",closeOnEscape:!0})}function Yo(){l.error({class:"errorNotify",position:"topRight",maxWidth:"340px",message:"Service not found",messageColor:"white",backgroundColor:"#ef4040",iconUrl:Ro,layout:1,progressBarColor:"#b51b1b",closeOnEscape:!0})}function zo(e){e.preventDefault();const{emailContact:s,comment:o}=e.target.elements,r=s.value.trim(),t=o.value.trim();if(!t){Xo();return}Mo({email:r,comment:t}).then(()=>{Uo(),Ho(),e.target.reset()}).catch(()=>{Yo()}).finally(()=>{})}const Vo={form:document.querySelector(".js-footer-form")};Vo.form.addEventListener("submit",zo);
//# sourceMappingURL=commonHelpers.js.map
