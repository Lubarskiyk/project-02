import{A as q,S as x,N as j,K as y,a as A,i as u,b as R}from"./assets/vendor-ySSAwJ0G.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();function p(e,s,o,c,r){let n="",i="",h="",$="",B="",L,I;for(const[E,a]of Object.entries(e))E===s&&(n=a.sources.avif.split(" ")[0],i=a.sources.webp.split(" ")[0],B=a.img.src,L=a.img.w,I=a.img.h),E===o&&(h=a.sources.avif.split(" ")[0],$=a.sources.webp.split(" ")[0]);return`<picture class="${c} ">
	    <source srcset="${n} 1x, ${h} 2x" type="image/avif"/>
	    <source srcset="${i} 1x, ${$} 2x" type="image/webp"/>
	    <img 
	      src="${B}"
	      width="${L}" 
	      height="${I}"
	      alt="${r}"
	  />
	  </picture>`}const t={heroBackground:document.querySelector(".js_image"),modalBackground:document.querySelector(".js_image_modal"),developerFoto:document.querySelector(".js-dev-foto"),accordionContainer:document.querySelector(".js-accordion-container"),rootColor:document.documentElement,openmenu:document.querySelector(".js_menu_changecolor"),changecolor:document.querySelector(".change-theme"),form:document.querySelector(".js-footer-form"),spinner:document.querySelector(".js-loader-footer"),btnFooter:document.querySelector(".js-btn-footer"),formModal:document.querySelector(".js-modal-form"),spinnerModal:document.querySelector(".js-loader-modal"),btnFooterModal:document.querySelector(".js-btn-modal"),modalOrder:document.querySelector("[data-modal]"),openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),projSlideWrap:document.querySelector(".proj-swiper-wrap"),body:document.querySelector("body")},U={avif:"/project-02/assets/hero_blue_1x-D9WSZGyE.avif 1440w",webp:"/project-02/assets/hero_blue_1x-16lRJ8m4.webp 1440w"},H={src:"/project-02/assets/hero_blue_1x-BWZA2Stx.png",w:1440,h:900},X={sources:U,img:H},Y={avif:"/project-02/assets/hero_blue_2x-BfBVl9rF.avif 2880w",webp:"/project-02/assets/hero_blue_2x-BG_0wHao.webp 2880w"},V={src:"/project-02/assets/hero_blue_2x-CYNzmcjV.png",w:2880,h:1800},F={sources:Y,img:V},z={avif:"/project-02/assets/hero_green_1x-CvYf6Jfo.avif 1440w",webp:"/project-02/assets/hero_green_1x-CsYXCIn3.webp 1440w"},Q={src:"/project-02/assets/hero_green_1x-DXmE7hq4.png",w:1440,h:900},W={sources:z,img:Q},J={avif:"/project-02/assets/hero_green_2x-CvRcrWY-.avif 2880w",webp:"/project-02/assets/hero_green_2x-xnNoorFE.webp 2880w"},G={src:"/project-02/assets/hero_green_2x-P8mZQoRH.png",w:2880,h:1800},Z={sources:J,img:G},K={avif:"/project-02/assets/hero_iceberg_1x-C77m3OhU.avif 1440w",webp:"/project-02/assets/hero_iceberg_1x-DP_XqC5W.webp 1440w"},ee={src:"/project-02/assets/hero_iceberg_1x-BuOjNdlQ.png",w:1440,h:900},se={sources:K,img:ee},oe={avif:"/project-02/assets/hero_iceberg_2x-C-XsPSPQ.avif 2880w",webp:"/project-02/assets/hero_iceberg_2x-CnEOoUDF.webp 2880w"},te={src:"/project-02/assets/hero_iceberg_2x-CXd_YeSv.png",w:2880,h:1800},re={sources:oe,img:te},ce={avif:"/project-02/assets/hero_lightred_1x-saHZwOlb.avif 1440w",webp:"/project-02/assets/hero_lightred_1x-L3DUgd1v.webp 1440w"},ne={src:"/project-02/assets/hero_lightred_1x-Cd6JWZOa.png",w:1440,h:900},ie={sources:ce,img:ne},ae={avif:"/project-02/assets/hero_lightred_2x-DI66JcXJ.avif 2880w",webp:"/project-02/assets/hero_lightred_2x-CEJ743dJ.webp 2880w"},ge={src:"/project-02/assets/hero_lightred_2x-DHVgjF4N.png",w:2880,h:1800},pe={sources:ae,img:ge},le={avif:"/project-02/assets/hero_orange_1x-BI09fmsg.avif 1440w",webp:"/project-02/assets/hero_orange_1x-7IWSULF0.webp 1440w"},me={src:"/project-02/assets/hero_orange_1x-QmqGYIMi.png",w:1440,h:900},de={sources:le,img:me},ue={avif:"/project-02/assets/hero_orange_2x-CpJ363RY.avif 2880w",webp:"/project-02/assets/hero_orange_2x-DZY7mBUd.webp 2880w"},_e={src:"/project-02/assets/hero_orange_2x-D6AR_Nru.png",w:2880,h:1800},ve={sources:ue,img:_e},he={avif:"/project-02/assets/hero_red_1x-iepyatp_.avif 1440w",webp:"/project-02/assets/hero_red_1x-C7vcg9Ds.webp 1440w"},we={src:"/project-02/assets/hero_red_1x-BMsS-W4x.png",w:1440,h:900},fe={sources:he,img:we},be={avif:"/project-02/assets/hero_red_2x-DgcFuPrp.avif 2880w",webp:"/project-02/assets/hero_red_2x-BeAfqa0z.webp 2880w"},xe={src:"/project-02/assets/hero_red_2x-Bplvo_7_.png",w:2880,h:1800},je={sources:be,img:xe},ye={avif:"/project-02/assets/image1x-CnDihyB5.avif 680w",webp:"/project-02/assets/image1x-DEsM0OTO.webp 680w"},Ae={src:"/project-02/assets/image1x-CljDKkU6.png",w:680,h:700},ke={sources:ye,img:Ae},Se={avif:"/project-02/assets/image2x-nNIifZQy.avif 1360w",webp:"/project-02/assets/image2x-BAcHkNi_.webp 1360w"},Ce={src:"/project-02/assets/image2x-Db8PjR65.png",w:1360,h:1400},$e={sources:Se,img:Ce},Be={avif:"/project-02/assets/project_1_img_1x-ZO70Slip.avif 614w",webp:"/project-02/assets/project_1_img_1x-DsqB380a.webp 614w"},Le={src:"/project-02/assets/project_1_img_1x-DMQ8NF4p.png",w:614,h:385},Ie={sources:Be,img:Le},Ee={avif:"/project-02/assets/project_1_img_2x-B_7679X_.avif 1228w",webp:"/project-02/assets/project_1_img_2x-6BmgpwRP.webp 1228w"},De={src:"/project-02/assets/project_1_img_2x-C2S7rr2x.png",w:1228,h:770},qe={sources:Ee,img:De},Oe={avif:"/project-02/assets/project_2_img_1x-B5FAYuY4.avif 614w",webp:"/project-02/assets/project_2_img_1x-DA9Pe-Z3.webp 614w"},Me={src:"/project-02/assets/project_2_img_1x-DOy4ZNoS.png",w:614,h:385},Te={sources:Oe,img:Me},Pe={avif:"/project-02/assets/project_2_img_2x-BTNYimmi.avif 1228w",webp:"/project-02/assets/project_2_img_2x-l_JzUZNB.webp 1228w"},Ne={src:"/project-02/assets/project_2_img_2x-vy_m0Jtx.png",w:1228,h:770},Re={sources:Pe,img:Ne},Ue={avif:"/project-02/assets/project_3_img_1x-1H1B1xl1.avif 614w",webp:"/project-02/assets/project_3_img_1x-B3WcnrBP.webp 614w"},He={src:"/project-02/assets/project_3_img_1x-CSyDaivN.png",w:614,h:385},Xe={sources:Ue,img:He},Ye={avif:"/project-02/assets/project_3_img_2x-De381A_g.avif 1228w",webp:"/project-02/assets/project_3_img_2x-SAayjzt2.webp 1228w"},Ve={src:"/project-02/assets/project_3_img_2x-DwGP19yR.png",w:1228,h:770},Fe={sources:Ye,img:Ve},f=Object.assign({"/img/background_hero/hero_blue_1x.png":X,"/img/background_hero/hero_blue_2x.png":F,"/img/background_hero/hero_green_1x.png":W,"/img/background_hero/hero_green_2x.png":Z,"/img/background_hero/hero_iceberg_1x.png":se,"/img/background_hero/hero_iceberg_2x.png":re,"/img/background_hero/hero_lightred_1x.png":ie,"/img/background_hero/hero_lightred_2x.png":pe,"/img/background_hero/hero_orange_1x.png":de,"/img/background_hero/hero_orange_2x.png":ve,"/img/background_hero/hero_red_1x.png":fe,"/img/background_hero/hero_red_2x.png":je}),ze=Object.assign({"/img/aboutme_up/image1x.png":ke,"/img/aboutme_up/image2x.png":$e}),Qe=Object.assign({"/img/projects/project_1_img_1x.png":Ie,"/img/projects/project_1_img_2x.png":qe,"/img/projects/project_2_img_1x.png":Te,"/img/projects/project_2_img_2x.png":Re,"/img/projects/project_3_img_1x.png":Xe,"/img/projects/project_3_img_2x.png":Fe}),D=[{id:1,path:"/img/aboutme_up/image1x.png",path_retina:"/img/aboutme_up/image1x.png"}];function We(){t.developerFoto.insertAdjacentHTML("beforeend",p(ze,D[0].path,D[0].path_retina,"developer-card-photo","Foto Developer"))}const k=[{id:1,path:"/img/background_hero/hero_red_1x.png",path_retina:"/img/background_hero/hero_red_2x.png",accent_color:"#ED3B44",aсcent_collor_hover:"#e0373f"},{id:2,path:"/img/background_hero/hero_green_1x.png",path_retina:"/img/background_hero/hero_green_2x.png",accent_color:"#C6E327",aсcent_collor_hover:"#d0e84a"},{id:3,path:"/img/background_hero/hero_blue_1x.png",path_retina:"/img/background_hero/hero_blue_2x.png",accent_color:"#0041E8",aсcent_collor_hover:"#4d7fff"},{id:4,path:"/img/background_hero/hero_lightred_1x.png",path_retina:"/img/background_hero/hero_lightred_2x.png",accent_color:"#E6533C",aсcent_collor_hover:"#ed8778"},{id:5,path:"/img/background_hero/hero_iceberg_1x.png",path_retina:"/img/background_hero/hero_iceberg_2x.png",accent_color:"#2B4441",aсcent_collor_hover:"#588d87"},{id:6,path:"/img/background_hero/hero_orange_1x.png",path_retina:"/img/background_hero/hero_orange_2x.png",accent_color:"#FF7F08",aсcent_collor_hover:"#ffa34d"}];function Je(){return parseInt(localStorage.getItem("myTheme"))||1}function Ge(e){localStorage.setItem("myTheme",e)}const Ze=document.querySelectorAll(".theme_button");Ze.forEach((e,s)=>{const o=k.find(c=>c.id===s+1);e.style.background=o.accent_color,e.dataset.id=s+1});t.changecolor.addEventListener("click",()=>{t.openmenu.classList.toggle("isopen_changecolor"),t.rootColor.addEventListener("click",S)});function S(e){e.target.classList.contains("theme_button")?Ke(e):e.target.classList.contains("change-theme")||(t.openmenu.classList.remove("isopen_changecolor"),t.rootColor.removeEventListener("click",S))}function Ke(e){const s=parseInt(e.target.dataset.id),o=k.find(c=>c.id===s);t.heroBackground.innerHTML=p(f,o.path,o.path_retina,"background_image"),t.modalBackground.innerHTML=p(f,o.path,o.path_retina,"background_image"),O(o.accent_color,o.aсcent_collor_hover),t.openmenu.classList.remove("isopen_changecolor"),t.rootColor.removeEventListener("click",S),Ge(s)}function O(e,s){t.rootColor.style.setProperty("--akcent-collor",e),t.rootColor.style.setProperty("--aсcent-collor-hover",s)}const es=Je(),l=k.find(e=>e.id===es);function ss(){t.heroBackground.insertAdjacentHTML("beforeend",p(f,l.path,l.path_retina,"background_image","background")),t.modalBackground.insertAdjacentHTML("beforeend",p(f,l.path,l.path_retina,"background_image","background")),O(l.accent_color,l.aсcent_collor_hover)}const m=document.querySelector(".open-burger"),_=document.querySelector(".modal-overlay"),os=document.querySelector(".close-btn"),v=document.querySelector("body"),ts=document.querySelector(".order-mobile"),M=document.querySelector(".nav-list"),rs=document.querySelector(".nav-menu"),cs=document.querySelector(".custom-list");m.addEventListener("click",ns);function ns(){_.classList.add("is-open"),m.style.opacity=0,v.style.overflow="hidden"}os.addEventListener("click",is);function is(){_.classList.remove("is-open"),m.style.opacity="",v.style.overflow=""}M.addEventListener("click",as);function as(e){e.preventDefault(),e.target===e.currentTarget&&(_.classList.remove("is-open"),m.style.opacity="",v.style.overflow="")}ts.addEventListener("click",gs);function gs(e){e.preventDefault(),_.classList.remove("is-open"),m.style.opacity="",v.style.overflow="",setTimeout(()=>{document.querySelector("#work-together").scrollIntoView({behavior:"smooth"})},300)}M.addEventListener("click",ps);function ps(e){if(e.target.tagName==="A"){_.classList.remove("is-open"),m.style.opacity="",v.style.overflow="";const s=e.target.getAttribute("href");setTimeout(()=>{document.querySelector(s).scrollIntoView({behavior:"smooth"})},300)}}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".custom-list .menu-list-item a"),s=document.getElementById("menu-toggle");e.forEach(o=>{o.addEventListener("click",()=>{s.checked=!1})})});rs.addEventListener("click",ls);function ls(){cs.classList.toggle("is-open-menu")}const ms={avif:"/project-02/assets/screen101x-D0F2Qzm1.avif 830w",webp:"/project-02/assets/screen101x-COHgMj--.webp 830w"},ds={src:"/project-02/assets/screen101x-Du8npVwr.png",w:830,h:479},us={sources:ms,img:ds},_s={avif:"/project-02/assets/screen102x-BpD5cC3U.avif 1660w",webp:"/project-02/assets/screen102x-Br9uPSGS.webp 1660w"},vs={src:"/project-02/assets/screen102x-wGcFSfLX.png",w:1660,h:958},hs={sources:_s,img:vs},ws={avif:"/project-02/assets/screen111x-BTEeAEl7.avif 830w",webp:"/project-02/assets/screen111x-qdYL_53m.webp 830w"},fs={src:"/project-02/assets/screen111x-BicfJxof.png",w:830,h:479},bs={sources:ws,img:fs},xs={avif:"/project-02/assets/screen112x-GvFBrX7u.avif 1660w",webp:"/project-02/assets/screen112x-B1Mip4Ug.webp 1660w"},js={src:"/project-02/assets/screen112x-CutCeeNH.png",w:1660,h:958},ys={sources:xs,img:js},As={avif:"/project-02/assets/screen121x-BGj9UkVb.avif 834w",webp:"/project-02/assets/screen121x-BY9n5bbw.webp 834w"},ks={src:"/project-02/assets/screen121x-DipJMA2q.png",w:834,h:509},Ss={sources:As,img:ks},Cs={avif:"/project-02/assets/screen122x-1CDag4yM.avif 1668w",webp:"/project-02/assets/screen122x-DvxBK5NP.webp 1668w"},$s={src:"/project-02/assets/screen122x-ymRusC7Z.png",w:1668,h:1018},Bs={sources:Cs,img:$s},Ls={avif:"/project-02/assets/screen1x-Dnfx79aX.avif 830w",webp:"/project-02/assets/screen1x-7jbcydi4.webp 830w"},Is={src:"/project-02/assets/screen1x-tzH2JqDY.png",w:830,h:462},Es={sources:Ls,img:Is},Ds={avif:"/project-02/assets/screen2x-1VoY9V2H.avif 1660w",webp:"/project-02/assets/screen2x-CD7-uNSD.webp 1660w"},qs={src:"/project-02/assets/screen2x-D0O0n5M0.png",w:1660,h:924},Os={sources:Ds,img:qs},Ms={avif:"/project-02/assets/screen41x-CacewYpN.avif 834w",webp:"/project-02/assets/screen41x-RknjITiP.webp 834w"},Ts={src:"/project-02/assets/screen41x-DdUSrJN_.png",w:834,h:527},Ps={sources:Ms,img:Ts},Ns={avif:"/project-02/assets/screen42x-WQi_nzli.avif 1668w",webp:"/project-02/assets/screen42x-BfJCNgmN.webp 1668w"},Rs={src:"/project-02/assets/screen42x-BJulQern.png",w:1668,h:1054},Us={sources:Ns,img:Rs},Hs={avif:"/project-02/assets/screen51x-BGLwTYzP.avif 830w",webp:"/project-02/assets/screen51x-DX4flF39.webp 830w"},Xs={src:"/project-02/assets/screen51x-BfSzAoA8.png",w:830,h:479},Ys={sources:Hs,img:Xs},Vs={avif:"/project-02/assets/screen52x-RnPa_MwV.avif 1660w",webp:"/project-02/assets/screen52x-gX7ghzy6.webp 1660w"},Fs={src:"/project-02/assets/screen52x-D4cke4w0.png",w:1660,h:958},zs={sources:Vs,img:Fs},Qs={avif:"/project-02/assets/screen61x-Bztue3GO.avif 830w",webp:"/project-02/assets/screen61x-BXY5UXHw.webp 830w"},Ws={src:"/project-02/assets/screen61x-ClL7rUjN.png",w:830,h:515},Js={sources:Qs,img:Ws},Gs={avif:"/project-02/assets/screen62x-Bsvr1cpW.avif 1660w",webp:"/project-02/assets/screen62x-P33QkH9n.webp 1660w"},Zs={src:"/project-02/assets/screen62x-CmPglJqQ.png",w:1660,h:1029},Ks={sources:Gs,img:Zs},eo={avif:"/project-02/assets/screen71x-C7tkEZbS.avif 830w",webp:"/project-02/assets/screen71x-Buq8hHvh.webp 830w"},so={src:"/project-02/assets/screen71x-CzJYB8_K.png",w:830,h:479},oo={sources:eo,img:so},to={avif:"/project-02/assets/screen72x-vh1hJkmc.avif 1660w",webp:"/project-02/assets/screen72x-CjwQtsEI.webp 1660w"},ro={src:"/project-02/assets/screen72x-J_aBDcRr.png",w:1660,h:958},co={sources:to,img:ro},no={avif:"/project-02/assets/screen81x-DdS5n4xg.avif 830w",webp:"/project-02/assets/screen81x-CZWFOadU.webp 830w"},io={src:"/project-02/assets/screen81x-CsdUM33W.png",w:830,h:479},ao={sources:no,img:io},go={avif:"/project-02/assets/screen82x-DiavNCT8.avif 1660w",webp:"/project-02/assets/screen82x-2EQna9cv.webp 1660w"},po={src:"/project-02/assets/screen82x-C4aD4qz7.png",w:1660,h:958},lo={sources:go,img:po},mo={avif:"/project-02/assets/screen91x-CKG41mt3.avif 830w",webp:"/project-02/assets/screen91x-fKXkSomB.webp 830w"},uo={src:"/project-02/assets/screen91x-BOqDqLoG.png",w:830,h:479},_o={sources:mo,img:uo},vo={avif:"/project-02/assets/screen92x-I-hkLm6X.avif 1660w",webp:"/project-02/assets/screen92x-0CC9OPe8.webp 1660w"},ho={src:"/project-02/assets/screen92x-CYql2dCO.png",w:1660,h:958},wo={sources:vo,img:ho};let g=null;function fo(){g=document.createElement("style");const e=`@keyframes Line {

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
    `;g.textContent=e,document.head.appendChild(g)}function bo(){g&&document.head.contains(g)&&(document.head.removeChild(g),g=null)}const xo=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting?fo():bo()})}),jo=document.querySelector(".covers");xo.observe(jo);const w=[{coverClass:"cover-img",coverImeageOne:"/img/covers/screen61x.png",coverImeageTwo:"/img/covers/screen62x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen101x.png",coverImeageTwo:"/img/covers/screen102x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen71x.png",coverImeageTwo:"/img/covers/screen72x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen111x.png",coverImeageTwo:"/img/covers/screen112x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen1x.png",coverImeageTwo:"/img/covers/screen2x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen81x.png",coverImeageTwo:"/img/covers/screen82x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen91x.png",coverImeageTwo:"/img/covers/screen92x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen81x.png",coverImeageTwo:"/img/covers/screen82x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen91x.png",coverImeageTwo:"/img/covers/screen92x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen41x.png",coverImeageTwo:"/img/covers/screen42x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen51x.png",coverImeageTwo:"/img/covers/screen52x.png",coverAlt:"imeage"},{coverClass:"cover-img",coverImeageOne:"/img/covers/screen121x.png",coverImeageTwo:"/img/covers/screen122x.png",coverAlt:"imeage"}],yo=Object.assign({"/img/covers/screen101x.png":us,"/img/covers/screen102x.png":hs,"/img/covers/screen111x.png":bs,"/img/covers/screen112x.png":ys,"/img/covers/screen121x.png":Ss,"/img/covers/screen122x.png":Bs,"/img/covers/screen1x.png":Es,"/img/covers/screen2x.png":Os,"/img/covers/screen41x.png":Ps,"/img/covers/screen42x.png":Us,"/img/covers/screen51x.png":Ys,"/img/covers/screen52x.png":zs,"/img/covers/screen61x.png":Js,"/img/covers/screen62x.png":Ks,"/img/covers/screen71x.png":oo,"/img/covers/screen72x.png":co,"/img/covers/screen81x.png":ao,"/img/covers/screen82x.png":lo,"/img/covers/screen91x.png":_o,"/img/covers/screen92x.png":wo}),Ao=document.querySelectorAll(".cover-list"),ko=[...Ao];ko.forEach((e,s)=>{const o=p(yo,w[s].coverImeageOne,w[s].coverImeageTwo,w[s].coverClass,w[s].coverAlt);e.innerHTML=o});new q("#accordion",{duration:300,showMultiple:!0,openOnInit:[0]});const d=new x(".about-me-swiper",{modules:[j,y],navigation:{nextEl:".swiper-button-wrap .aboutme-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},loop:!0,breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},centeredSlidesBounds:!0,speed:0}),So=document.querySelector(".swiper-button-wrap .aboutme-swiper-btn");So.addEventListener("click",()=>{window.innerWidth>=1440&&(d.slides[d.activeIndex].parentNode.appendChild(d.slides[d.activeIndex]),d.update())});const Co=[{id:1,question:"What programming languages are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{id:2,question:"What are the deadlines for the project?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{id:3,question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{id:4,question:"How can I contact you?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{id:5,question:"Do you provide advice or support?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{id:6,question:"What does the process of developing a software product look like from idea to implementation?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}],$o={faqList:document.querySelector(".js-accordion-container-faq")};function Bo(e){return e.map(({question:s,answer:o})=>`<li class="ac ac-faq">
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
       </li>`).join("")}$o.faqList.insertAdjacentHTML("beforeend",Bo(Co));new q(".js-accordion-container-faq",{duration:600,showMultiple:!0});const Lo="https://portfolio-js.b.goit.study/api";A.defaults.baseURL=Lo;async function Io(e){const{data:s,status:o,statusText:c}=await A.post("/requests",e);return{data:s,status:o,statusText:c}}function Eo(){t.spinner.classList.add("is-hidden"),t.btnFooter.classList.remove("is-hidden"),t.spinnerModal.classList.add("is-hidden"),t.btnFooterModal.classList.remove("is-hidden")}function Do(){t.spinner.classList.remove("is-hidden"),t.btnFooter.classList.add("is-hidden"),t.spinnerModal.classList.remove("is-hidden"),t.btnFooterModal.classList.add("is-hidden")}const qo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgBzVWBDYIwEDw3YAM7ghvICG6AG8gGuIFuwAjECRjBEXQD3eB9zCEf0lpASLzkE/iv99/eWYB/gogcNDIsASU+S4cT5oQSOhKXDTmfHeaCklUaNzZKNB4aNeaAEu05cWZyOXMpfgUnv3nyV9YSTIX++MhJt3zftztppmetwBRYYfm+My5Kmauoh8NY0DEft/QabM0Q4wU3ZIXJbfoNmC9GC+4T1hxZg7XJJxIwQog879vS1N7w5FvB8xi54zQlBu7M1GrqkXxrUFphAyQVwsM1OCGyYJqvERG83b588bSYP1qg7r+nxHPfBMhlxLqsTbghNhvagGvrj+DS3TcOEcSOyKzr7ik+lJgZdORjRUFSLIP7ikezxIf8qXHB0ngB0x4XMNg0o7IAAAAASUVORK5CYII=",Oo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=";function Mo(){return u.info({class:"infoNotify",position:"center",title:"Thank you for your interest in cooperation!",titleSize:" 20px",titleLineHeight:1.5,titleColor:"#fafafa",message:"The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",messageSize:"16px",messageLineHeight:1.5,messageColor:"rgba(250, 250, 250, 0.6)",backgroundColor:"#1c1d20",layout:3,closeOnEscape:!0,progressBar:!1,timeout:!1,icon:null,overlay:!0,overlayColor:"rgba(15, 15, 16, 0.6)",overlayClose:!0,zindex:"222"})}function To(){const e=document.querySelector(".infoNotify .iziToast-title");e.style.textAlign="center",e.style.marginRight=0,e.style.fontFamily="Inter Tight",e.style.fontWeight=600,e.style.letterSpacing="-0.02em"}function Po(){u.warning({class:"emptyNotify",position:"topRight",maxWidth:"340px",title:"Comments can not be empty",titleSize:"16px",titleColor:"white",message:"you must fill the comments section",messageColor:"white",backgroundColor:"#09f",iconUrl:qo,layout:1,progressBarColor:" #3958c9",closeOnEscape:!0})}function No(){u.error({class:"errorNotify",position:"topRight",maxWidth:"340px",message:"Service not found",messageColor:"white",backgroundColor:"#ef4040",iconUrl:Oo,layout:1,progressBarColor:"#b51b1b",closeOnEscape:!0})}function Ro(e){const s=e.target.classList.contains("js-backdrop-order"),o=e.target.closest(".js-modal-close-btn");(s||o)&&(b(),document.removeEventListener("keydown",C))}function b(){document.addEventListener("keydown",C),t.modalOrder.classList.toggle("is-hidden-modal"),t.body.classList.toggle("is-lock")}function C(e){e.code==="Escape"&&b(),document.removeEventListener("keydown",C)}function T(e){e.preventDefault();const{emailContact:s,comment:o}=e.target.elements,c=s.value.trim(),r=o.value.trim();if(!r){Po();return}Do(),Io({email:c,comment:r}).then(()=>{e.target.classList.contains("js-modal-form")&&b(),Mo(),To(),e.target.reset()}).catch(()=>{No()}).finally(()=>{Eo()})}t.form.addEventListener("submit",T);t.spinner.classList.add("is-hidden");const Uo=[{id:1,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_1_img_1x.png",imgRetinaSrc:"/img/projects/project_1_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"},{id:2,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_2_img_1x.png",imgRetinaSrc:"/img/projects/project_2_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"},{id:3,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_3_img_1x.png",imgRetinaSrc:"/img/projects/project_3_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"}];function Ho(e){return e.map(({title:s,imgSrc:o,imgRetinaSrc:c,link:r,tags:n})=>`
    <li class="swiper-slide proj-slide">
      <div class="proj-slide-prescription">
        <ul class="proj-list-tags">${n.map(h=>`<li class="proj-tags-item">
      <p>${h}</p>
    </li>`).join("")}</ul>
        <h3 class="proj-slide-title">${s}</h3>
          <div class="proj-link-wrap" type="button" >
          <a href="${r}" class="proj-slide-link" target="_blank" aria-label="go to project page">
          See project
        </a>
 </div>
      </div>
      <div class="proj-slide-img">
        ${p(Qe,o,c,"proj-img",`${s}`)}
      </div>
    </li>
  `).join("")}t.projSlideWrap.innerHTML=Ho(Uo);new x(".swiper-container",{speed:300,slidesPerView:1,modules:[j,y],navigation:{nextEl:".proj-btn-next",prevEl:".proj-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},lazy:{loadPrevNext:!0,loadOnTransitionStart:!0}});const Xo="https://portfolio-js.b.goit.study/api";async function Yo(){return(await A.get(`${Xo}/reviews`)).data}const P={reviewList:document.querySelector(".reviews-list")};function Vo(e){const s=e.map(({author:o,avatar_url:c,review:r})=>`<li class="reviews-wrap swiper-slide">
            <img src="${c}" alt="${o}" class="reviews-img" width='48' height='48' />
            <div class='reviews-content'>
              <h3 class="reviews-subtitle" >${o}</h3>
              <p class="reviews-text" >${r}</p>
            </div>
          </li>`).join("");P.reviewList.innerHTML=s}function Fo(){const e=`
        <li class="reviews-wrap reviews-wrap--error swiper-slide">
          <p class="reviews-text">Not found</p>
        </li>`;P.reviewList.innerHTML=e}u.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});function zo(){u.error({title:"Error",message:"Sorry, there are no reviews!",theme:"dark",color:"rgb(239, 64, 64)"})}async function Qo(){try{const e=await Yo();Vo(e)}catch{zo(),Fo()}}function Wo(){const e=new x(".reviews-swiper",{modules:[j,y,R],navigation:{nextEl:".reviews-swiper-button-right",prevEl:".reviews-swiper-button-left"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},autoplay:{delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0}});e.on("slideChange",()=>{const s=e.isEnd,o=e.isBeginning;s?(e.autoplay.stop(),e.params.autoplay.reverseDirection=!0,e.autoplay.start()):o&&(e.autoplay.stop(),e.params.autoplay.reverseDirection=!1,e.autoplay.start())})}const Jo=document.querySelector(".reviews"),N=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&(Qo(),Wo(),N.disconnect())})},{root:null,rootMargin:"0px",threshold:.1});N.observe(Jo);document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("scroll-to-header-btn"),s=document.querySelector(".header"),o=window.innerHeight,c=()=>{window.scrollY>o?e.classList.add("show"):e.classList.remove("show")};window.addEventListener("scroll",c),e.addEventListener("click",()=>{s.scrollIntoView({behavior:"smooth"})})});ss();We();t.formModal.addEventListener("submit",T);t.openModalBtn.addEventListener("click",b);t.modalOrder.addEventListener("click",Ro);t.spinnerModal.classList.add("is-hidden");
//# sourceMappingURL=commonHelpers.js.map
