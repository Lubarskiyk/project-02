import{A as D,S as b,N as x,K as j,a as y,i as d,b as P}from"./assets/vendor-ySSAwJ0G.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(t){if(t.ep)return;t.ep=!0;const c=o(t);fetch(t.href,c)}})();const N={avif:"/project-02/assets/image1x-CnDihyB5.avif 680w",webp:"/project-02/assets/image1x-DEsM0OTO.webp 680w"},M={src:"/project-02/assets/image1x-CljDKkU6.png",w:680,h:700},R={sources:N,img:M},U={avif:"/project-02/assets/image2x-nNIifZQy.avif 1360w",webp:"/project-02/assets/image2x-BAcHkNi_.webp 1360w"},H={src:"/project-02/assets/image2x-Db8PjR65.png",w:1360,h:1400},X={sources:U,img:H};function p(e,s,o,r,t){let c="",i="",$="",C="",S="",k,B;for(const[I,a]of Object.entries(e))I===s&&(c=a.sources.avif.split(" ")[0],i=a.sources.webp.split(" ")[0],S=a.img.src,k=a.img.w,B=a.img.h),I===o&&($=a.sources.avif.split(" ")[0],C=a.sources.webp.split(" ")[0]);return`<picture class="${r} ">
	    <source srcset="${c} 1x, ${$} 2x" type="image/avif"/>
	    <source srcset="${i} 1x, ${C} 2x" type="image/webp"/>
	    <img 
	      src="${S}"
	      width="${k}" 
	      height="${B}"
	      alt="${t}"
	  />
	  </picture>`}const n={heroBackground:document.querySelector(".js_image"),modalBackground:document.querySelector(".js_image_modal"),developerFoto:document.querySelector(".js-dev-foto"),accordionContainer:document.querySelector(".js-accordion-container"),rootColor:document.documentElement,openmenu:document.querySelector(".js_menu_changecolor"),changecolor:document.querySelector(".change-theme"),form:document.querySelector(".js-footer-form")},L={path:"/img/aboutme_up/image1x.png",path_retina:"/img/aboutme_up/image1x.png"},Y=Object.assign({"/img/aboutme_up/image1x.png":R,"/img/aboutme_up/image2x.png":X});function V(){n.developerFoto.insertAdjacentHTML("beforeend",p(Y,L.path,L.path_retina,"developer-card-photo","Foto Developer"))}const z={avif:"/project-02/assets/hero_blue_1x-D9WSZGyE.avif 1440w",webp:"/project-02/assets/hero_blue_1x-16lRJ8m4.webp 1440w"},Q={src:"/project-02/assets/hero_blue_1x-BWZA2Stx.png",w:1440,h:900},F={sources:z,img:Q},W={avif:"/project-02/assets/hero_blue_2x-BfBVl9rF.avif 2880w",webp:"/project-02/assets/hero_blue_2x-BG_0wHao.webp 2880w"},J={src:"/project-02/assets/hero_blue_2x-CYNzmcjV.png",w:2880,h:1800},G={sources:W,img:J},Z={avif:"/project-02/assets/hero_green_1x-CvYf6Jfo.avif 1440w",webp:"/project-02/assets/hero_green_1x-CsYXCIn3.webp 1440w"},K={src:"/project-02/assets/hero_green_1x-DXmE7hq4.png",w:1440,h:900},ee={sources:Z,img:K},se={avif:"/project-02/assets/hero_green_2x-CvRcrWY-.avif 2880w",webp:"/project-02/assets/hero_green_2x-xnNoorFE.webp 2880w"},oe={src:"/project-02/assets/hero_green_2x-P8mZQoRH.png",w:2880,h:1800},te={sources:se,img:oe},re={avif:"/project-02/assets/hero_iceberg_1x-C77m3OhU.avif 1440w",webp:"/project-02/assets/hero_iceberg_1x-DP_XqC5W.webp 1440w"},ce={src:"/project-02/assets/hero_iceberg_1x-BuOjNdlQ.png",w:1440,h:900},ne={sources:re,img:ce},ie={avif:"/project-02/assets/hero_iceberg_2x-C-XsPSPQ.avif 2880w",webp:"/project-02/assets/hero_iceberg_2x-CnEOoUDF.webp 2880w"},ae={src:"/project-02/assets/hero_iceberg_2x-CXd_YeSv.png",w:2880,h:1800},ge={sources:ie,img:ae},pe={avif:"/project-02/assets/hero_lightred_1x-saHZwOlb.avif 1440w",webp:"/project-02/assets/hero_lightred_1x-L3DUgd1v.webp 1440w"},le={src:"/project-02/assets/hero_lightred_1x-Cd6JWZOa.png",w:1440,h:900},me={sources:pe,img:le},_e={avif:"/project-02/assets/hero_lightred_2x-DI66JcXJ.avif 2880w",webp:"/project-02/assets/hero_lightred_2x-CEJ743dJ.webp 2880w"},ue={src:"/project-02/assets/hero_lightred_2x-DHVgjF4N.png",w:2880,h:1800},de={sources:_e,img:ue},ve={avif:"/project-02/assets/hero_orange_1x-BI09fmsg.avif 1440w",webp:"/project-02/assets/hero_orange_1x-7IWSULF0.webp 1440w"},we={src:"/project-02/assets/hero_orange_1x-QmqGYIMi.png",w:1440,h:900},he={sources:ve,img:we},fe={avif:"/project-02/assets/hero_orange_2x-CpJ363RY.avif 2880w",webp:"/project-02/assets/hero_orange_2x-DZY7mBUd.webp 2880w"},be={src:"/project-02/assets/hero_orange_2x-D6AR_Nru.png",w:2880,h:1800},xe={sources:fe,img:be},je={avif:"/project-02/assets/hero_red_1x-iepyatp_.avif 1440w",webp:"/project-02/assets/hero_red_1x-C7vcg9Ds.webp 1440w"},ye={src:"/project-02/assets/hero_red_1x-BMsS-W4x.png",w:1440,h:900},Ae={sources:je,img:ye},$e={avif:"/project-02/assets/hero_red_2x-DgcFuPrp.avif 2880w",webp:"/project-02/assets/hero_red_2x-BeAfqa0z.webp 2880w"},Ce={src:"/project-02/assets/hero_red_2x-Bplvo_7_.png",w:2880,h:1800},Se={sources:$e,img:Ce},A=[{id:1,path:"/img/background_hero/hero_red_1x.png",path_retina:"/img/background_hero/hero_red_2x.png",accent_color:"#ED3B44",aсcent_collor_hover:"#e0373f"},{id:2,path:"/img/background_hero/hero_green_1x.png",path_retina:"/img/background_hero/hero_green_2x.png",accent_color:"#C6E327",aсcent_collor_hover:"#d0e84a"},{id:3,path:"/img/background_hero/hero_blue_1x.png",path_retina:"/img/background_hero/hero_blue_2x.png",accent_color:"#0041E8",aсcent_collor_hover:"#4d7fff"},{id:4,path:"/img/background_hero/hero_lightred_1x.png",path_retina:"/img/background_hero/hero_lightred_2x.png",accent_color:"#E6533C",aсcent_collor_hover:"#ed8778"},{id:5,path:"/img/background_hero/hero_iceberg_1x.png",path_retina:"/img/background_hero/hero_iceberg_2x.png",accent_color:"#2B4441",aсcent_collor_hover:"#588d87"},{id:6,path:"/img/background_hero/hero_orange_1x.png",path_retina:"/img/background_hero/hero_orange_2x.png",accent_color:"#FF7F08",aсcent_collor_hover:"#ffa34d"}];function ke(){return parseInt(localStorage.getItem("myTheme"))||1}function Be(e){localStorage.setItem("myTheme",e)}n.changecolor.addEventListener("click",()=>{n.openmenu.classList.toggle("isopen_changecolor")});const Ie=document.querySelectorAll(".theme_button");Ie.forEach((e,s)=>{const o=A.find(r=>r.id===s+1);e.style.background=o.accent_color,e.dataset.id=s+1});n.openmenu.addEventListener("click",e=>{const s=parseInt(e.target.dataset.id),o=A.find(r=>r.id===s);n.heroBackground.innerHTML=p(f,o.path,o.path_retina,"background_image"),n.modalBackground.innerHTML=p(f,o.path,o.path_retina,"background_image"),n.rootColor.style.setProperty("--akcent-collor",`${o.accent_color}`),E(o.accent_color,o.aсcent_collor_hover),n.openmenu.classList.toggle("isopen_changecolor"),Be(s)});function E(e,s){n.rootColor.style.setProperty("--akcent-collor",e),n.rootColor.style.setProperty("--aсcent-collor-hover",s)}const Le=ke(),l=A.find(e=>e.id===Le),f=Object.assign({"/img/background_hero/hero_blue_1x.png":F,"/img/background_hero/hero_blue_2x.png":G,"/img/background_hero/hero_green_1x.png":ee,"/img/background_hero/hero_green_2x.png":te,"/img/background_hero/hero_iceberg_1x.png":ne,"/img/background_hero/hero_iceberg_2x.png":ge,"/img/background_hero/hero_lightred_1x.png":me,"/img/background_hero/hero_lightred_2x.png":de,"/img/background_hero/hero_orange_1x.png":he,"/img/background_hero/hero_orange_2x.png":xe,"/img/background_hero/hero_red_1x.png":Ae,"/img/background_hero/hero_red_2x.png":Se});function De(){n.heroBackground.insertAdjacentHTML("beforeend",p(f,l.path,l.path_retina,"background_image","background")),n.modalBackground.insertAdjacentHTML("beforeend",p(f,l.path,l.path_retina,"background_image","background")),E(l.accent_color,l.aсcent_collor_hover)}const _=document.querySelector(".open-burger"),v=document.querySelector(".modal-overlay"),Ee=document.querySelector(".close-btn"),w=document.querySelector("body"),qe=document.querySelector(".order-mobile"),q=document.querySelector(".nav-list");_.addEventListener("click",Oe);function Oe(){v.classList.add("is-open"),_.style.opacity=0,w.style.overflow="hidden"}Ee.addEventListener("click",Te);function Te(){v.classList.remove("is-open"),_.style.opacity="",w.style.overflow=""}q.addEventListener("click",Pe);function Pe(e){e.preventDefault(),e.target===e.currentTarget&&(v.classList.remove("is-open"),_.style.opacity="",w.style.overflow="")}qe.addEventListener("click",Ne);function Ne(e){e.preventDefault(),v.classList.remove("is-open"),_.style.opacity="",w.style.overflow="",setTimeout(()=>{document.querySelector("#work-together").scrollIntoView({behavior:"smooth"})},300)}q.addEventListener("click",Me);function Me(e){if(e.target.tagName==="A"){v.classList.remove("is-open"),_.style.opacity="",w.style.overflow="";const s=e.target.getAttribute("href");setTimeout(()=>{document.querySelector(s).scrollIntoView({behavior:"smooth"})},300)}}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".custom-list .menu-list-item a"),s=document.getElementById("menu-toggle");e.forEach(o=>{o.addEventListener("click",()=>{s.checked=!1})})});const Re={avif:"/project-02/assets/screen101x-D0F2Qzm1.avif 830w",webp:"/project-02/assets/screen101x-COHgMj--.webp 830w"},Ue={src:"/project-02/assets/screen101x-Du8npVwr.png",w:830,h:479},He={sources:Re,img:Ue},Xe={avif:"/project-02/assets/screen102x-BpD5cC3U.avif 1660w",webp:"/project-02/assets/screen102x-Br9uPSGS.webp 1660w"},Ye={src:"/project-02/assets/screen102x-wGcFSfLX.png",w:1660,h:958},Ve={sources:Xe,img:Ye},ze={avif:"/project-02/assets/screen111x-BTEeAEl7.avif 830w",webp:"/project-02/assets/screen111x-qdYL_53m.webp 830w"},Qe={src:"/project-02/assets/screen111x-BicfJxof.png",w:830,h:479},Fe={sources:ze,img:Qe},We={avif:"/project-02/assets/screen112x-GvFBrX7u.avif 1660w",webp:"/project-02/assets/screen112x-B1Mip4Ug.webp 1660w"},Je={src:"/project-02/assets/screen112x-CutCeeNH.png",w:1660,h:958},Ge={sources:We,img:Je},Ze={avif:"/project-02/assets/screen121x-BGj9UkVb.avif 834w",webp:"/project-02/assets/screen121x-BY9n5bbw.webp 834w"},Ke={src:"/project-02/assets/screen121x-DipJMA2q.png",w:834,h:509},es={sources:Ze,img:Ke},ss={avif:"/project-02/assets/screen122x-1CDag4yM.avif 1668w",webp:"/project-02/assets/screen122x-DvxBK5NP.webp 1668w"},os={src:"/project-02/assets/screen122x-ymRusC7Z.png",w:1668,h:1018},ts={sources:ss,img:os},rs={avif:"/project-02/assets/screen1x-Dnfx79aX.avif 830w",webp:"/project-02/assets/screen1x-7jbcydi4.webp 830w"},cs={src:"/project-02/assets/screen1x-tzH2JqDY.png",w:830,h:462},ns={sources:rs,img:cs},is={avif:"/project-02/assets/screen2x-1VoY9V2H.avif 1660w",webp:"/project-02/assets/screen2x-CD7-uNSD.webp 1660w"},as={src:"/project-02/assets/screen2x-D0O0n5M0.png",w:1660,h:924},gs={sources:is,img:as},ps={avif:"/project-02/assets/screen41x-CacewYpN.avif 834w",webp:"/project-02/assets/screen41x-RknjITiP.webp 834w"},ls={src:"/project-02/assets/screen41x-DdUSrJN_.png",w:834,h:527},ms={sources:ps,img:ls},_s={avif:"/project-02/assets/screen42x-WQi_nzli.avif 1668w",webp:"/project-02/assets/screen42x-BfJCNgmN.webp 1668w"},us={src:"/project-02/assets/screen42x-BJulQern.png",w:1668,h:1054},ds={sources:_s,img:us},vs={avif:"/project-02/assets/screen51x-BGLwTYzP.avif 830w",webp:"/project-02/assets/screen51x-DX4flF39.webp 830w"},ws={src:"/project-02/assets/screen51x-BfSzAoA8.png",w:830,h:479},hs={sources:vs,img:ws},fs={avif:"/project-02/assets/screen52x-RnPa_MwV.avif 1660w",webp:"/project-02/assets/screen52x-gX7ghzy6.webp 1660w"},bs={src:"/project-02/assets/screen52x-D4cke4w0.png",w:1660,h:958},xs={sources:fs,img:bs},js={avif:"/project-02/assets/screen61x-Bztue3GO.avif 830w",webp:"/project-02/assets/screen61x-BXY5UXHw.webp 830w"},ys={src:"/project-02/assets/screen61x-ClL7rUjN.png",w:830,h:515},As={sources:js,img:ys},$s={avif:"/project-02/assets/screen62x-Bsvr1cpW.avif 1660w",webp:"/project-02/assets/screen62x-P33QkH9n.webp 1660w"},Cs={src:"/project-02/assets/screen62x-CmPglJqQ.png",w:1660,h:1029},Ss={sources:$s,img:Cs},ks={avif:"/project-02/assets/screen71x-C7tkEZbS.avif 830w",webp:"/project-02/assets/screen71x-Buq8hHvh.webp 830w"},Bs={src:"/project-02/assets/screen71x-CzJYB8_K.png",w:830,h:479},Is={sources:ks,img:Bs},Ls={avif:"/project-02/assets/screen72x-vh1hJkmc.avif 1660w",webp:"/project-02/assets/screen72x-CjwQtsEI.webp 1660w"},Ds={src:"/project-02/assets/screen72x-J_aBDcRr.png",w:1660,h:958},Es={sources:Ls,img:Ds},qs={avif:"/project-02/assets/screen81x-DdS5n4xg.avif 830w",webp:"/project-02/assets/screen81x-CZWFOadU.webp 830w"},Os={src:"/project-02/assets/screen81x-CsdUM33W.png",w:830,h:479},Ts={sources:qs,img:Os},Ps={avif:"/project-02/assets/screen82x-DiavNCT8.avif 1660w",webp:"/project-02/assets/screen82x-2EQna9cv.webp 1660w"},Ns={src:"/project-02/assets/screen82x-C4aD4qz7.png",w:1660,h:958},Ms={sources:Ps,img:Ns},Rs={avif:"/project-02/assets/screen91x-CKG41mt3.avif 830w",webp:"/project-02/assets/screen91x-fKXkSomB.webp 830w"},Us={src:"/project-02/assets/screen91x-BOqDqLoG.png",w:830,h:479},Hs={sources:Rs,img:Us},Xs={avif:"/project-02/assets/screen92x-I-hkLm6X.avif 1660w",webp:"/project-02/assets/screen92x-0CC9OPe8.webp 1660w"},Ys={src:"/project-02/assets/screen92x-CYql2dCO.png",w:1660,h:958},Vs={sources:Xs,img:Ys};let g=null;function zs(){g=document.createElement("style");const e=`@keyframes Line {

    0% {

        transform: translateX(80%);
    }
    50% {
        transform: translateX(-50%);
    }
         100% {
        transform: translateX(80%);
    }
}
    `;g.textContent=e,document.head.appendChild(g)}function Qs(){g&&document.head.contains(g)&&(document.head.removeChild(g),g=null)}const Fs=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting?zs():Qs()})}),Ws=document.querySelector(".covers");Fs.observe(Ws);const h=[{coverClass:"cover-img",coverImeageOne:"/img/covers/screen61x.png",coverImeageTwo:"/img/covers/screen62x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen101x.png",coverImeageTwo:"/img/covers/screen102x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen71x.png",coverImeageTwo:"/img/covers/screen72x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen111x.png",coverImeageTwo:"/img/covers/screen112x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen1x.png",coverImeageTwo:"/img/covers/screen2x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen81x.png",coverImeageTwo:"/img/covers/screen82x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen91x.png",coverImeageTwo:"/img/covers/screen92x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen81x.png",coverImeageTwo:"/img/covers/screen82x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen91x.png",coverImeageTwo:"/img/covers/screen92x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen41x.png",coverImeageTwo:"/img/covers/screen42x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen51x.png",coverImeageTwo:"/img/covers/screen52x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen121x.png",coverImeageTwo:"/img/covers/screen122x.png",coverAlt:"imeage"}],Js=Object.assign({"/img/covers/screen101x.png":He,"/img/covers/screen102x.png":Ve,"/img/covers/screen111x.png":Fe,"/img/covers/screen112x.png":Ge,"/img/covers/screen121x.png":es,"/img/covers/screen122x.png":ts,"/img/covers/screen1x.png":ns,"/img/covers/screen2x.png":gs,"/img/covers/screen41x.png":ms,"/img/covers/screen42x.png":ds,"/img/covers/screen51x.png":hs,"/img/covers/screen52x.png":xs,"/img/covers/screen61x.png":As,"/img/covers/screen62x.png":Ss,"/img/covers/screen71x.png":Is,"/img/covers/screen72x.png":Es,"/img/covers/screen81x.png":Ts,"/img/covers/screen82x.png":Ms,"/img/covers/screen91x.png":Hs,"/img/covers/screen92x.png":Vs}),Gs=document.querySelectorAll(".cover-list"),Zs=[...Gs];Zs.forEach((e,s)=>{const o=p(Js,h[s].coverImeageOne,h[s].coverImeageTwo,h[s].coverClass,h[s].coverAlt);e.innerHTML=o});new D("#accordion",{duration:300,showMultiple:!0,openOnInit:[0]});const u=new b(".about-me-swiper",{modules:[x,j],navigation:{nextEl:".swiper-button-wrap .aboutme-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},loop:!0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},centeredSlidesBounds:!0,speed:400}),Ks=document.querySelector(".swiper-button-wrap .aboutme-swiper-btn");Ks.addEventListener("click",()=>{window.innerWidth>=1440&&(u.slides[u.activeIndex].parentNode.appendChild(u.slides[u.activeIndex]),u.update())});const eo=[{id:1,question:"What programming languages are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{id:2,question:"What are the deadlines for the project?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{id:3,question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{id:4,question:"How can I contact you?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{id:5,question:"Do you provide advice or support?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{id:6,question:"What does the process of developing a software product look like from idea to implementation?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}],so={faqList:document.querySelector(".js-accordion-container-faq")};function oo(e){return e.map(({question:s,answer:o})=>`<li class="ac ac-faq">
            <h2 class="ac-header">
                <button type="button" class="ac-trigger" aria-label="open the answer to the question"><span class="title-wrap-faq">${s}</span>
                <span class="svg-wrap-faq"> 
                <svg class="icon-faq" width="20" height="20">
                 <use href="./icons.svg#icon-up"></use>
              </svg></span></button>
             </h2>
            <div class="ac-panel">
              <p class="ac-text">${o}</p>
             </div>
       </li>`).join("")}so.faqList.insertAdjacentHTML("beforeend",oo(eo));new D(".js-accordion-container-faq",{duration:600,showMultiple:!0});const to="https://portfolio-js.b.goit.study/api";y.defaults.baseURL=to;async function ro(e){const{data:s,status:o,statusText:r}=await y.post("/requests",e);return{data:s,status:o,statusText:r}}const m={form:document.querySelector(".js-footer-form"),spinner:document.querySelector(".js-loader-footer"),btnFooter:document.querySelector(".js-btn-footer")};function co(){m.spinner.classList.add("is-hidden"),m.btnFooter.classList.remove("is-hidden")}function no(){m.spinner.classList.remove("is-hidden"),m.btnFooter.classList.add("is-hidden")}const io="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgBzVWBDYIwEDw3YAM7ghvICG6AG8gGuIFuwAjECRjBEXQD3eB9zCEf0lpASLzkE/iv99/eWYB/gogcNDIsASU+S4cT5oQSOhKXDTmfHeaCklUaNzZKNB4aNeaAEu05cWZyOXMpfgUnv3nyV9YSTIX++MhJt3zftztppmetwBRYYfm+My5Kmauoh8NY0DEft/QabM0Q4wU3ZIXJbfoNmC9GC+4T1hxZg7XJJxIwQog879vS1N7w5FvB8xi54zQlBu7M1GrqkXxrUFphAyQVwsM1OCGyYJqvERG83b588bSYP1qg7r+nxHPfBMhlxLqsTbghNhvagGvrj+DS3TcOEcSOyKzr7ik+lJgZdORjRUFSLIP7ikezxIf8qXHB0ngB0x4XMNg0o7IAAAAASUVORK5CYII=",ao="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=";function go(){return d.info({class:"infoNotify",position:"center",title:"Thank you for your interest in cooperation!",titleSize:" 20px",titleLineHeight:1.5,titleColor:"#fafafa",message:"The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",messageSize:"16px",messageLineHeight:1.5,messageColor:"rgba(250, 250, 250, 0.6)",backgroundColor:"#1c1d20",layout:3,closeOnEscape:!0,progressBar:!1,timeout:!1,icon:null,overlay:!0,overlayColor:"rgba(15, 15, 16, 0.6)",overlayClose:!0,zindex:"222"})}function po(){const e=document.querySelector(".infoNotify .iziToast-title");e.style.textAlign="center",e.style.marginRight=0,e.style.fontFamily="Inter Tight",e.style.fontWeight=600,e.style.letterSpacing="-0.02em"}function lo(){d.warning({class:"emptyNotify",position:"topRight",maxWidth:"340px",title:"Comments can not be empty",titleSize:"16px",titleColor:"white",message:"you must fill the comments section",messageColor:"white",backgroundColor:"#09f",iconUrl:io,layout:1,progressBarColor:" #3958c9",closeOnEscape:!0})}function mo(){d.error({class:"errorNotify",position:"topRight",maxWidth:"340px",message:"Service not found",messageColor:"white",backgroundColor:"#ef4040",iconUrl:ao,layout:1,progressBarColor:"#b51b1b",closeOnEscape:!0})}function _o(e){e.preventDefault();const{emailContact:s,comment:o}=e.target.elements,r=s.value.trim(),t=o.value.trim();if(!t){lo();return}no(),ro({email:r,comment:t}).then(()=>{go(),po(),e.target.reset()}).catch(()=>{mo()}).finally(()=>{co()})}m.form.addEventListener("submit",_o);m.spinner.classList.add("is-hidden");const uo={avif:"/project-02/assets/project_1_img_1x-ZO70Slip.avif 614w",webp:"/project-02/assets/project_1_img_1x-DsqB380a.webp 614w"},vo={src:"/project-02/assets/project_1_img_1x-DMQ8NF4p.png",w:614,h:385},wo={sources:uo,img:vo},ho={avif:"/project-02/assets/project_1_img_2x-B_7679X_.avif 1228w",webp:"/project-02/assets/project_1_img_2x-6BmgpwRP.webp 1228w"},fo={src:"/project-02/assets/project_1_img_2x-C2S7rr2x.png",w:1228,h:770},bo={sources:ho,img:fo},xo={avif:"/project-02/assets/project_2_img_1x-B5FAYuY4.avif 614w",webp:"/project-02/assets/project_2_img_1x-DA9Pe-Z3.webp 614w"},jo={src:"/project-02/assets/project_2_img_1x-DOy4ZNoS.png",w:614,h:385},yo={sources:xo,img:jo},Ao={avif:"/project-02/assets/project_2_img_2x-BTNYimmi.avif 1228w",webp:"/project-02/assets/project_2_img_2x-l_JzUZNB.webp 1228w"},$o={src:"/project-02/assets/project_2_img_2x-vy_m0Jtx.png",w:1228,h:770},Co={sources:Ao,img:$o},So={avif:"/project-02/assets/project_3_img_1x-1H1B1xl1.avif 614w",webp:"/project-02/assets/project_3_img_1x-B3WcnrBP.webp 614w"},ko={src:"/project-02/assets/project_3_img_1x-CSyDaivN.png",w:614,h:385},Bo={sources:So,img:ko},Io={avif:"/project-02/assets/project_3_img_2x-De381A_g.avif 1228w",webp:"/project-02/assets/project_3_img_2x-SAayjzt2.webp 1228w"},Lo={src:"/project-02/assets/project_3_img_2x-DwGP19yR.png",w:1228,h:770},Do={sources:Io,img:Lo},Eo=[{id:1,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_1_img_1x.png",imgRetinaSrc:"/img/projects/project_1_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"},{id:2,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_2_img_1x.png",imgRetinaSrc:"/img/projects/project_2_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"},{id:3,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_3_img_1x.png",imgRetinaSrc:"/img/projects/project_3_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"}],qo=Object.assign({"/img/projects/project_1_img_1x.png":wo,"/img/projects/project_1_img_2x.png":bo,"/img/projects/project_2_img_1x.png":yo,"/img/projects/project_2_img_2x.png":Co,"/img/projects/project_3_img_1x.png":Bo,"/img/projects/project_3_img_2x.png":Do}),Oo=document.querySelector(".proj-swiper-wrap"),To=Eo.map(({title:e,imgSrc:s,imgRetinaSrc:o,link:r,tags:t})=>`
    <li class="swiper-slide proj-slide">
      <div class="proj-slide-prescription">
        <ul class="proj-list-tags">${t.map(i=>`<li class="proj-tags-item">
      <p>${i}</p>
    </li>`).join("")}</ul>
        <h3 class="proj-slide-title">${e}</h3>
          <div class="proj-link-wrap" type="button" >
          <a href="${r}" class="proj-slide-link" target="_blank" aria-label="go to project page">
          See project
        </a>
 </div>
      </div>
      <div class="proj-slide-img">
        ${p(qo,s,o,"proj-img",`${e}`)}
      </div>
    </li>
  `).join("");Oo.innerHTML=To;new b(".swiper-container",{speed:300,slidesPerView:1,modules:[x,j],navigation:{nextEl:".proj-btn-next",prevEl:".proj-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},lazy:{loadPrevNext:!0,loadOnTransitionStart:!0}});const Po="https://portfolio-js.b.goit.study/api",O={reviewList:document.querySelector(".reviews-list")};function No(e){const s=e.map(({author:o,avatar_url:r,review:t})=>`<li class="reviews-wrap swiper-slide">
            <img src="${r}" alt="${o}" class="reviews-img" width='48' height='48' />
            <div class='reviews-content'>
              <h3 class="reviews-subtitle" >${o}</h3>
              <p class="reviews-text" >${t}</p>
            </div>
          </li>`).join("");O.reviewList.innerHTML=s}function Mo(){const e=`
        <li class="reviews-wrap reviews-wrap--error swiper-slide">
          <p class="reviews-text">Not found</p>
        </li>`;O.reviewList.innerHTML=e}d.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});function Ro(){d.error({title:"Error",message:"Sorry, there are no reviews!",theme:"dark",color:"rgb(239, 64, 64)"})}function Uo(){const e=new b(".reviews-swiper",{modules:[x,j,P],navigation:{nextEl:".reviews-swiper-button-right",prevEl:".reviews-swiper-button-left"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},autoplay:{delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0}});e.on("slideChange",()=>{const s=e.isEnd,o=e.isBeginning;s?(e.autoplay.stop(),e.params.autoplay.reverseDirection=!0,e.autoplay.start()):o&&(e.autoplay.stop(),e.params.autoplay.reverseDirection=!1,e.autoplay.start())})}const Ho=document.querySelector(".reviews"),T=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&(Yo(),Uo(),T.disconnect())})},{root:null,rootMargin:"0px",threshold:.1});T.observe(Ho);async function Xo(){return(await y.get(`${Po}/reviews`)).data}async function Yo(){try{const e=await Xo();No(e)}catch{Ro(),Mo()}}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("scroll-to-header-btn"),s=document.querySelector(".header"),o=window.innerHeight,r=()=>{window.scrollY>o?e.classList.add("show"):e.classList.remove("show")};window.addEventListener("scroll",r),e.addEventListener("click",()=>{s.scrollIntoView({behavior:"smooth"})})});De();V();
//# sourceMappingURL=commonHelpers.js.map
