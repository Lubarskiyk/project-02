import{S as B,N as L,K as q,A as C,i as $,a as E}from"./assets/vendor-lqURoMku.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const D={avif:"/project-02/assets/image1x-CnDihyB5.avif 680w",webp:"/project-02/assets/image1x-DEsM0OTO.webp 680w"},I={src:"/project-02/assets/image1x-CljDKkU6.png",w:680,h:700},O={sources:D,img:I},P={avif:"/project-02/assets/image2x-nNIifZQy.avif 1360w",webp:"/project-02/assets/image2x-BAcHkNi_.webp 1360w"},T={src:"/project-02/assets/image2x-Db8PjR65.png",w:1360,h:1400},M={sources:P,img:T};function _(e,t,s,c,o){let r="",i="",w="",b="",v="",f,j;for(const[x,n]of Object.entries(e))x===t&&(r=n.sources.avif.split(" ")[0],i=n.sources.webp.split(" ")[0],v=n.img.src,f=n.img.w,j=n.img.h),x===s&&(w=n.sources.avif.split(" ")[0],b=n.sources.webp.split(" ")[0]);return`<picture class="${c} ">
	    <source srcset="${r} 1x, ${w} 2x" type="image/avif"/>
	    <source srcset="${i} 1x, ${b} 2x" type="image/webp"/>
	    <img 
	      src="${v}"
	      width="${f}" 
	      height="${j}"
	      alt="${o}"
	  />
	  </picture>`}const a={heroBackground:document.querySelector(".js_image"),developerFoto:document.querySelector(".js-dev-foto"),accordionContainer:document.querySelector(".js-accordion-container"),rootColor:document.documentElement,openmenu:document.querySelector(".js_menu_changecolor"),changecolor:document.querySelector(".open_theme")},y={path:"/img/aboutme_up/image1x.png",path_retina:"/img/aboutme_up/image1x.png"},F=Object.assign({"/img/aboutme_up/image1x.png":O,"/img/aboutme_up/image2x.png":M});function H(){a.developerFoto.insertAdjacentHTML("beforeend",_(F,y.path,y.path_retina,"developer-card-photo","Foto Developer"))}const A={avif:"/project-02/assets/hero_blue_1x-D9WSZGyE.avif 1440w",webp:"/project-02/assets/hero_blue_1x-16lRJ8m4.webp 1440w"},R={src:"/project-02/assets/hero_blue_1x-BWZA2Stx.png",w:1440,h:900},W={sources:A,img:R},N={avif:"/project-02/assets/hero_blue_2x-BfBVl9rF.avif 2880w",webp:"/project-02/assets/hero_blue_2x-BG_0wHao.webp 2880w"},U={src:"/project-02/assets/hero_blue_2x-CYNzmcjV.png",w:2880,h:1800},Y={sources:N,img:U},J={avif:"/project-02/assets/hero_green_1x-CvYf6Jfo.avif 1440w",webp:"/project-02/assets/hero_green_1x-CsYXCIn3.webp 1440w"},z={src:"/project-02/assets/hero_green_1x-DXmE7hq4.png",w:1440,h:900},V={sources:J,img:z},G={avif:"/project-02/assets/hero_green_2x-CvRcrWY-.avif 2880w",webp:"/project-02/assets/hero_green_2x-xnNoorFE.webp 2880w"},X={src:"/project-02/assets/hero_green_2x-P8mZQoRH.png",w:2880,h:1800},Z={sources:G,img:X},Q={avif:"/project-02/assets/hero_iceberg_1x-C77m3OhU.avif 1440w",webp:"/project-02/assets/hero_iceberg_1x-DP_XqC5W.webp 1440w"},K={src:"/project-02/assets/hero_iceberg_1x-BuOjNdlQ.png",w:1440,h:900},ee={sources:Q,img:K},oe={avif:"/project-02/assets/hero_iceberg_2x-C-XsPSPQ.avif 2880w",webp:"/project-02/assets/hero_iceberg_2x-CnEOoUDF.webp 2880w"},te={src:"/project-02/assets/hero_iceberg_2x-CXd_YeSv.png",w:2880,h:1800},re={sources:oe,img:te},se={avif:"/project-02/assets/hero_lightred_1x-saHZwOlb.avif 1440w",webp:"/project-02/assets/hero_lightred_1x-L3DUgd1v.webp 1440w"},ce={src:"/project-02/assets/hero_lightred_1x-Cd6JWZOa.png",w:1440,h:900},ie={sources:se,img:ce},ne={avif:"/project-02/assets/hero_lightred_2x-DI66JcXJ.avif 2880w",webp:"/project-02/assets/hero_lightred_2x-CEJ743dJ.webp 2880w"},ae={src:"/project-02/assets/hero_lightred_2x-DHVgjF4N.png",w:2880,h:1800},pe={sources:ne,img:ae},ge={avif:"/project-02/assets/hero_orange_1x-BI09fmsg.avif 1440w",webp:"/project-02/assets/hero_orange_1x-7IWSULF0.webp 1440w"},_e={src:"/project-02/assets/hero_orange_1x-QmqGYIMi.png",w:1440,h:900},le={sources:ge,img:_e},de={avif:"/project-02/assets/hero_orange_2x-CpJ363RY.avif 2880w",webp:"/project-02/assets/hero_orange_2x-DZY7mBUd.webp 2880w"},me={src:"/project-02/assets/hero_orange_2x-D6AR_Nru.png",w:2880,h:1800},ue={sources:de,img:me},he={avif:"/project-02/assets/hero_red_1x-iepyatp_.avif 1440w",webp:"/project-02/assets/hero_red_1x-C7vcg9Ds.webp 1440w"},we={src:"/project-02/assets/hero_red_1x-BMsS-W4x.png",w:1440,h:900},be={sources:he,img:we},ve={avif:"/project-02/assets/hero_red_2x-DgcFuPrp.avif 2880w",webp:"/project-02/assets/hero_red_2x-BeAfqa0z.webp 2880w"},fe={src:"/project-02/assets/hero_red_2x-Bplvo_7_.png",w:2880,h:1800},je={sources:ve,img:fe},xe=[{id:1,path:"/img/background_hero/hero_red_1x.png",path_retina:"/img/background_hero/hero_red_2x.png",accent_color:"#ED3B44",aсcent_collor_hover:"#e0373f"},{id:2,path:"/img/background_hero/hero_green_1x.png",path_retina:"/img/background_hero/hero_green_2x.png",accent_color:"#C6E327",aсcent_collor_hover:"#d0e84a"},{id:3,path:"/img/background_hero/hero_blue_1x.png",path_retina:"/img/background_hero/hero_blue_2x.png",accent_color:"#0041E8",aсcent_collor_hover:"#4d7fff"},{id:4,path:"/img/background_hero/hero_lightred_1x.png",path_retina:"/img/background_hero/hero_lightred_2x.png",accent_color:"#E6533C",aсcent_collor_hover:"#ed8778"},{id:5,path:"/img/background_hero/hero_iceberg_1x.png",path_retina:"/img/background_hero/hero_iceberg_2x.png",accent_color:"#2B4441",aсcent_collor_hover:"#588d87"},{id:6,path:"/img/background_hero/hero_orange_1x.png",path_retina:"/img/background_hero/hero_orange_2x.png",accent_color:"#FF7F08",aсcent_collor_hover:"#ffa34d"}];function ye(){return parseInt(localStorage.getItem("myTheme"))||1}document.querySelector(".open_theme");window.getComputedStyle(a.rootColor);function $e(e,t){a.rootColor.style.setProperty("--akcent-collor",e),a.rootColor.style.setProperty("--aсcent-collor-hover",t)}const ke=ye(),p=xe.find(e=>e.id===ke),Se=Object.assign({"/img/background_hero/hero_blue_1x.png":W,"/img/background_hero/hero_blue_2x.png":Y,"/img/background_hero/hero_green_1x.png":V,"/img/background_hero/hero_green_2x.png":Z,"/img/background_hero/hero_iceberg_1x.png":ee,"/img/background_hero/hero_iceberg_2x.png":re,"/img/background_hero/hero_lightred_1x.png":ie,"/img/background_hero/hero_lightred_2x.png":pe,"/img/background_hero/hero_orange_1x.png":le,"/img/background_hero/hero_orange_2x.png":ue,"/img/background_hero/hero_red_1x.png":be,"/img/background_hero/hero_red_2x.png":je});function Be(){a.heroBackground.insertAdjacentHTML("beforeend",_(Se,p.path,p.path_retina,"background_image","background")),$e(p.accent_color,p.aсcent_collor_hover)}Be();H();const g=document.querySelector(".open-burger"),l=document.querySelector(".modal-overlay"),d=document.querySelector(".logo-wrapper"),m=document.querySelector(".headline1"),u=document.querySelector(".change-theme"),Le=document.querySelector(".close-btn"),h=document.querySelector("body"),qe=document.querySelector(".order-mobile"),Ce=document.querySelector(".navigation-modal");g.addEventListener("click",Ee);function Ee(){l.classList.add("is-open"),m.style.opacity=0,d.style.opacity=0,u.style.opacity=0,g.style.opacity=0,h.style.overflow="hidden"}Le.addEventListener("click",De);function De(){l.classList.remove("is-open"),m.style.opacity="",d.style.opacity="",u.style.opacity="",g.style.opacity="",h.style.overflow=""}Ce.addEventListener("click",Ie);function Ie(e){e.preventDefault}qe.addEventListener("click",Oe);function Oe(){l.classList.remove("is-open"),m.style.opacity="",d.style.opacity="",u.style.opacity="",g.style.opacity="",h.style.overflow=""}const Pe={avif:"/project-02/assets/project_1_img_1x-CH6XH0Ja.avif 311w",webp:"/project-02/assets/project_1_img_1x-EgtosvHO.webp 311w"},Te={src:"/project-02/assets/project_1_img_1x-AWyopqIu.png",w:311,h:195},Me={sources:Pe,img:Te},Fe={avif:"/project-02/assets/project_1_img_2x-8wMXkF_L.avif 622w",webp:"/project-02/assets/project_1_img_2x-ByzE1nxz.webp 622w"},He={src:"/project-02/assets/project_1_img_2x-BFVmaD9i.png",w:622,h:390},Ae={sources:Fe,img:He},Re={avif:"/project-02/assets/project_2_img_1x-DnVayz_u.avif 311w",webp:"/project-02/assets/project_2_img_1x-DYAFdYMW.webp 311w"},We={src:"/project-02/assets/project_2_img_1x-B38m7zxH.png",w:311,h:195},Ne={sources:Re,img:We},Ue={avif:"/project-02/assets/project_2_img_2x-CE8-vNOU.avif 622w",webp:"/project-02/assets/project_2_img_2x-B_-GaxJf.webp 622w"},Ye={src:"/project-02/assets/project_2_img_2x-DN7HGhGG.png",w:622,h:390},Je={sources:Ue,img:Ye},ze={avif:"/project-02/assets/project_3_img_1x-C9FxY1sJ.avif 311w",webp:"/project-02/assets/project_3_img_1x-B3idU54T.webp 311w"},Ve={src:"/project-02/assets/project_3_img_1x-G-lrxyl2.png",w:311,h:195},Ge={sources:ze,img:Ve},Xe={avif:"/project-02/assets/project_3_img_2x-Ids13O88.avif 622w",webp:"/project-02/assets/project_3_img_2x-BK1Uv5p6.webp 622w"},Ze={src:"/project-02/assets/project_3_img_2x-BrEi4qh5.png",w:622,h:390},Qe={sources:Xe,img:Ze},Ke=[{id:1,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_1_img_1x.png",imgRetinaSrc:"/img/projects/project_1_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"},{id:2,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_2_img_1x.png",imgRetinaSrc:"/img/projects/project_2_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"},{id:3,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_3_img_1x.png",imgRetinaSrc:"/img/projects/project_3_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"}],eo=Object.assign({"/img/projects/project_1_img_1x.png":Me,"/img/projects/project_1_img_2x.png":Ae,"/img/projects/project_2_img_1x.png":Ne,"/img/projects/project_2_img_2x.png":Je,"/img/projects/project_3_img_1x.png":Ge,"/img/projects/project_3_img_2x.png":Qe}),oo=document.querySelector(".swiper-wrapper"),to=Ke.map(({title:e,imgSrc:t,imgRetinaSrc:s,link:c,tags:o})=>`
    <li class="swiper-slide proj-slide">
      <div class="proj-slide-prescription">
        <ul class="proj-list-tags">${o.map(i=>`<li class="proj-tags-item">
      <p>${i}</p>
    </li>`).join("")}</ul>
        <h3 class="proj-slide-title">${e}</h3>
  <button class="proj-link-wrap" type="button">
  <a href="${c}" class="proj-slide-link" target="_blank">
          See project
        </a>
 </button>
      </div>
      <div class="proj-slide-img">
        ${_(eo,t,s,"proj-img",`${e}`)}
      </div>
    </li>
  `).join("");oo.innerHTML=to;new B(".swiper-container",{speed:300,slidesPerView:1,modules:[L,q],navigation:{nextEl:".proj-btn-next",prevEl:".proj-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},lazy:{loadPrevNext:!0,loadOnTransitionStart:!0}});const ro=[{id:1,question:"What programming languages are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{id:2,question:"What are the deadlines for the project?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{id:3,question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{id:4,question:"How can I contact you?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{id:5,question:"Do you provide advice or support?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{id:6,question:"What does the process of developing a software product look like from idea to implementation?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function so(e){return console.log(),e.map(({question:t,answer:s})=>`<div class="ac">
            <h2 class="ac-header">
                <button type="button" class="ac-trigger">${t}</button>
             </h2>
            <div class="ac-panel">
              <p class="ac-text">${s}</p>
             </div>
       </div>`).join("")}console.log(a.accordionContainer);a.accordionContainer.insertAdjacentHTML("beforeend",so(ro));new C(".accordion-container");const co="https://portfolio-js.b.goit.study/api",k={reviewList:document.querySelector(".reviews-list")};function io(e){const t=e.map(({author:s,avatar_url:c,review:o})=>`<li class="reviews-wrap swiper-slide">
            <img src="${c}" alt="${s}" class="reviews-img" width='48' height='48' />
            <div class='reviews-content'>
              <h3 class="reviews-subtitle" >${s}</h3>
              <p class="reviews-text" >${o}</p>
            </div>
          </li>`).join("");k.reviewList.innerHTML=t}function no(){const e=`
        <li class="reviews-wrap reviews-wrap--error swiper-slide">
          <p class="reviews-text">Not found</p>
        </li>`;k.reviewList.innerHTML=e}$.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});function ao(){$.error({title:"Error",message:"Sorry, there are no reviews!",theme:"dark",color:"rgb(239, 64, 64)"})}const po=document.querySelector(".reviews"),S=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(_o(),S.disconnect())})},{root:null,rootMargin:"0px",threshold:.1});S.observe(po);async function go(){return(await E.get(`${co}/reviews`)).data}async function _o(){try{const e=await go();io(e)}catch{ao(),no()}}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("scroll-to-header-btn"),t=document.querySelector(".header"),s=window.innerHeight,c=()=>{window.scrollY>s?e.classList.add("show"):e.classList.remove("show")};window.addEventListener("scroll",c),e.addEventListener("click",()=>{t.scrollIntoView({behavior:"smooth"})})});
//# sourceMappingURL=commonHelpers.js.map
