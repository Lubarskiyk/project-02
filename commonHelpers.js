import{A as _,S as m,N as h,K as w,i as p,a as M,b as f}from"./assets/vendor-BvCtIY9d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const O={avif:"/project-02/assets/image1x-CnDihyB5.avif 680w",webp:"/project-02/assets/image1x-DEsM0OTO.webp 680w"},P={src:"/project-02/assets/image1x-CljDKkU6.png",w:680,h:700},R={sources:O,img:P},T={avif:"/project-02/assets/image2x-nNIifZQy.avif 1360w",webp:"/project-02/assets/image2x-BAcHkNi_.webp 1360w"},N={src:"/project-02/assets/image2x-Db8PjR65.png",w:1360,h:1400},U={sources:T,img:N};function d(e,o,t,r,s){let n="",i="",S="",k="",B="",$,E;for(const[C,a]of Object.entries(e))C===o&&(n=a.sources.avif.split(" ")[0],i=a.sources.webp.split(" ")[0],B=a.img.src,$=a.img.w,E=a.img.h),C===t&&(S=a.sources.avif.split(" ")[0],k=a.sources.webp.split(" ")[0]);return`<picture class="${r} ">
	    <source srcset="${n} 1x, ${S} 2x" type="image/avif"/>
	    <source srcset="${i} 1x, ${k} 2x" type="image/webp"/>
	    <img 
	      src="${B}"
	      width="${$}" 
	      height="${E}"
	      alt="${s}"
	  />
	  </picture>`}const c={heroBackground:document.querySelector(".js_image"),developerFoto:document.querySelector(".js-dev-foto"),accordionContainer:document.querySelector(".js-accordion-container"),rootColor:document.documentElement,openmenu:document.querySelector(".js_menu_changecolor"),changecolor:document.querySelector(".change-theme"),form:document.querySelector(".js-footer-form")},I={path:"/img/aboutme_up/image1x.png",path_retina:"/img/aboutme_up/image1x.png"},H=Object.assign({"/img/aboutme_up/image1x.png":R,"/img/aboutme_up/image2x.png":U});function V(){c.developerFoto.insertAdjacentHTML("beforeend",d(H,I.path,I.path_retina,"developer-card-photo","Foto Developer"))}const W={avif:"/project-02/assets/hero_blue_1x-D9WSZGyE.avif 1440w",webp:"/project-02/assets/hero_blue_1x-16lRJ8m4.webp 1440w"},Y={src:"/project-02/assets/hero_blue_1x-BWZA2Stx.png",w:1440,h:900},F={sources:W,img:Y},X={avif:"/project-02/assets/hero_blue_2x-BfBVl9rF.avif 2880w",webp:"/project-02/assets/hero_blue_2x-BG_0wHao.webp 2880w"},Q={src:"/project-02/assets/hero_blue_2x-CYNzmcjV.png",w:2880,h:1800},z={sources:X,img:Q},G={avif:"/project-02/assets/hero_green_1x-CvYf6Jfo.avif 1440w",webp:"/project-02/assets/hero_green_1x-CsYXCIn3.webp 1440w"},J={src:"/project-02/assets/hero_green_1x-DXmE7hq4.png",w:1440,h:900},Z={sources:G,img:J},K={avif:"/project-02/assets/hero_green_2x-CvRcrWY-.avif 2880w",webp:"/project-02/assets/hero_green_2x-xnNoorFE.webp 2880w"},ee={src:"/project-02/assets/hero_green_2x-P8mZQoRH.png",w:2880,h:1800},oe={sources:K,img:ee},te={avif:"/project-02/assets/hero_iceberg_1x-C77m3OhU.avif 1440w",webp:"/project-02/assets/hero_iceberg_1x-DP_XqC5W.webp 1440w"},se={src:"/project-02/assets/hero_iceberg_1x-BuOjNdlQ.png",w:1440,h:900},re={sources:te,img:se},ne={avif:"/project-02/assets/hero_iceberg_2x-C-XsPSPQ.avif 2880w",webp:"/project-02/assets/hero_iceberg_2x-CnEOoUDF.webp 2880w"},ie={src:"/project-02/assets/hero_iceberg_2x-CXd_YeSv.png",w:2880,h:1800},ce={sources:ne,img:ie},ae={avif:"/project-02/assets/hero_lightred_1x-saHZwOlb.avif 1440w",webp:"/project-02/assets/hero_lightred_1x-L3DUgd1v.webp 1440w"},le={src:"/project-02/assets/hero_lightred_1x-Cd6JWZOa.png",w:1440,h:900},pe={sources:ae,img:le},ge={avif:"/project-02/assets/hero_lightred_2x-DI66JcXJ.avif 2880w",webp:"/project-02/assets/hero_lightred_2x-CEJ743dJ.webp 2880w"},de={src:"/project-02/assets/hero_lightred_2x-DHVgjF4N.png",w:2880,h:1800},ue={sources:ge,img:de},_e={avif:"/project-02/assets/hero_orange_1x-BI09fmsg.avif 1440w",webp:"/project-02/assets/hero_orange_1x-7IWSULF0.webp 1440w"},me={src:"/project-02/assets/hero_orange_1x-QmqGYIMi.png",w:1440,h:900},he={sources:_e,img:me},we={avif:"/project-02/assets/hero_orange_2x-CpJ363RY.avif 2880w",webp:"/project-02/assets/hero_orange_2x-DZY7mBUd.webp 2880w"},fe={src:"/project-02/assets/hero_orange_2x-D6AR_Nru.png",w:2880,h:1800},be={sources:we,img:fe},ve={avif:"/project-02/assets/hero_red_1x-iepyatp_.avif 1440w",webp:"/project-02/assets/hero_red_1x-C7vcg9Ds.webp 1440w"},ye={src:"/project-02/assets/hero_red_1x-BMsS-W4x.png",w:1440,h:900},je={sources:ve,img:ye},xe={avif:"/project-02/assets/hero_red_2x-DgcFuPrp.avif 2880w",webp:"/project-02/assets/hero_red_2x-BeAfqa0z.webp 2880w"},Ae={src:"/project-02/assets/hero_red_2x-Bplvo_7_.png",w:2880,h:1800},Se={sources:xe,img:Ae},b=[{id:1,path:"/img/background_hero/hero_red_1x.png",path_retina:"/img/background_hero/hero_red_2x.png",accent_color:"#ED3B44",aсcent_collor_hover:"#e0373f"},{id:2,path:"/img/background_hero/hero_green_1x.png",path_retina:"/img/background_hero/hero_green_2x.png",accent_color:"#C6E327",aсcent_collor_hover:"#d0e84a"},{id:3,path:"/img/background_hero/hero_blue_1x.png",path_retina:"/img/background_hero/hero_blue_2x.png",accent_color:"#0041E8",aсcent_collor_hover:"#4d7fff"},{id:4,path:"/img/background_hero/hero_lightred_1x.png",path_retina:"/img/background_hero/hero_lightred_2x.png",accent_color:"#E6533C",aсcent_collor_hover:"#ed8778"},{id:5,path:"/img/background_hero/hero_iceberg_1x.png",path_retina:"/img/background_hero/hero_iceberg_2x.png",accent_color:"#2B4441",aсcent_collor_hover:"#588d87"},{id:6,path:"/img/background_hero/hero_orange_1x.png",path_retina:"/img/background_hero/hero_orange_2x.png",accent_color:"#FF7F08",aсcent_collor_hover:"#ffa34d"}];function ke(){return parseInt(localStorage.getItem("myTheme"))||1}function Be(e){localStorage.setItem("myTheme",e)}c.changecolor.addEventListener("click",()=>{c.openmenu.classList.toggle("isopen_changecolor")});const $e=document.querySelectorAll(".theme_button");$e.forEach((e,o)=>{const t=b.find(r=>r.id===o+1);e.style.background=t.accent_color,e.dataset.id=o+1});c.openmenu.addEventListener("click",e=>{const o=parseInt(e.target.dataset.id),t=b.find(r=>r.id===o);c.heroBackground.innerHTML=d(L,t.path,t.path_retina,"background_image"),c.rootColor.style.setProperty("--akcent-collor",`${t.accent_color}`),Be(o)});function Ee(e,o){c.rootColor.style.setProperty("--akcent-collor",e),c.rootColor.style.setProperty("--aсcent-collor-hover",o)}const Ce=ke(),g=b.find(e=>e.id===Ce),L=Object.assign({"/img/background_hero/hero_blue_1x.png":F,"/img/background_hero/hero_blue_2x.png":z,"/img/background_hero/hero_green_1x.png":Z,"/img/background_hero/hero_green_2x.png":oe,"/img/background_hero/hero_iceberg_1x.png":re,"/img/background_hero/hero_iceberg_2x.png":ce,"/img/background_hero/hero_lightred_1x.png":pe,"/img/background_hero/hero_lightred_2x.png":ue,"/img/background_hero/hero_orange_1x.png":he,"/img/background_hero/hero_orange_2x.png":be,"/img/background_hero/hero_red_1x.png":je,"/img/background_hero/hero_red_2x.png":Se});function Ie(){c.heroBackground.insertAdjacentHTML("beforeend",d(L,g.path,g.path_retina,"background_image","background")),Ee(g.accent_color,g.aсcent_collor_hover)}function Le(){const e=document.querySelector(".title");e.style.display="none"}Ie();V();Le();const u=document.querySelector(".open-burger"),v=document.querySelector(".modal-overlay"),y=document.querySelector(".logo-wrapper"),j=document.querySelector(".headline1"),x=document.querySelector(".change-theme"),De=document.querySelector(".close-btn"),A=document.querySelector("body"),qe=document.querySelector(".order-mobile"),Me=document.querySelector(".navigation-modal");u.addEventListener("click",Oe);function Oe(){v.classList.add("is-open"),j.style.opacity=0,y.style.opacity=0,x.style.opacity=0,u.style.opacity=0,A.style.overflow="hidden"}De.addEventListener("click",Pe);function Pe(){v.classList.remove("is-open"),j.style.opacity="",y.style.opacity="",x.style.opacity="",u.style.opacity="",A.style.overflow=""}Me.addEventListener("click",Re);function Re(e){e.preventDefault}qe.addEventListener("click",Te);function Te(){v.classList.remove("is-open"),j.style.opacity="",y.style.opacity="",x.style.opacity="",u.style.opacity="",A.style.overflow=""}new _("#accordion",{duration:300,showMultiple:!0,openOnInit:[0]});const l=new m(".about-me-swiper",{modules:[h,w],navigation:{nextEl:".swiper-button-wrap .aboutme-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},loop:!0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},centeredSlidesBounds:!0,speed:400}),Ne=document.querySelector(".swiper-button-wrap .aboutme-swiper-btn");Ne.addEventListener("click",()=>{window.innerWidth>=1024&&(l.slides[l.activeIndex].parentNode.appendChild(l.slides[l.activeIndex]),l.update())});const Ue={avif:"/project-02/assets/project_1_img_1x-CH6XH0Ja.avif 311w",webp:"/project-02/assets/project_1_img_1x-EgtosvHO.webp 311w"},He={src:"/project-02/assets/project_1_img_1x-AWyopqIu.png",w:311,h:195},Ve={sources:Ue,img:He},We={avif:"/project-02/assets/project_1_img_2x-8wMXkF_L.avif 622w",webp:"/project-02/assets/project_1_img_2x-ByzE1nxz.webp 622w"},Ye={src:"/project-02/assets/project_1_img_2x-BFVmaD9i.png",w:622,h:390},Fe={sources:We,img:Ye},Xe={avif:"/project-02/assets/project_2_img_1x-DnVayz_u.avif 311w",webp:"/project-02/assets/project_2_img_1x-DYAFdYMW.webp 311w"},Qe={src:"/project-02/assets/project_2_img_1x-B38m7zxH.png",w:311,h:195},ze={sources:Xe,img:Qe},Ge={avif:"/project-02/assets/project_2_img_2x-CE8-vNOU.avif 622w",webp:"/project-02/assets/project_2_img_2x-B_-GaxJf.webp 622w"},Je={src:"/project-02/assets/project_2_img_2x-DN7HGhGG.png",w:622,h:390},Ze={sources:Ge,img:Je},Ke={avif:"/project-02/assets/project_3_img_1x-C9FxY1sJ.avif 311w",webp:"/project-02/assets/project_3_img_1x-B3idU54T.webp 311w"},eo={src:"/project-02/assets/project_3_img_1x-G-lrxyl2.png",w:311,h:195},oo={sources:Ke,img:eo},to={avif:"/project-02/assets/project_3_img_2x-Ids13O88.avif 622w",webp:"/project-02/assets/project_3_img_2x-BK1Uv5p6.webp 622w"},so={src:"/project-02/assets/project_3_img_2x-BrEi4qh5.png",w:622,h:390},ro={sources:to,img:so},no=[{id:1,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_1_img_1x.png",imgRetinaSrc:"/img/projects/project_1_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"},{id:2,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_2_img_1x.png",imgRetinaSrc:"/img/projects/project_2_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"},{id:3,tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/img/projects/project_3_img_1x.png",imgRetinaSrc:"/img/projects/project_3_img_2x.png",link:"https://lubarskiyk.github.io/project-02/"}],io=Object.assign({"/img/projects/project_1_img_1x.png":Ve,"/img/projects/project_1_img_2x.png":Fe,"/img/projects/project_2_img_1x.png":ze,"/img/projects/project_2_img_2x.png":Ze,"/img/projects/project_3_img_1x.png":oo,"/img/projects/project_3_img_2x.png":ro}),co=document.querySelector(".proj-swiper-wrap"),ao=no.map(({title:e,imgSrc:o,imgRetinaSrc:t,link:r,tags:s})=>`
    <li class="swiper-slide proj-slide">
      <div class="proj-slide-prescription">
        <ul class="proj-list-tags">${s.map(i=>`<li class="proj-tags-item">
      <p>${i}</p>
    </li>`).join("")}</ul>
        <h3 class="proj-slide-title">${e}</h3>
  <button class="proj-link-wrap" type="button">
  <a href="${r}" class="proj-slide-link" target="_blank">
          See project
        </a>
 </button>
      </div>
      <div class="proj-slide-img">
        ${d(io,o,t,"proj-img",`${e}`)}
      </div>
    </li>
  `).join("");co.innerHTML=ao;new m(".swiper-container",{speed:300,slidesPerView:1,modules:[h,w],navigation:{nextEl:".proj-btn-next",prevEl:".proj-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},lazy:{loadPrevNext:!0,loadOnTransitionStart:!0}});const lo=[{id:1,question:"What programming languages are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{id:2,question:"What are the deadlines for the project?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{id:3,question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{id:4,question:"How can I contact you?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{id:5,question:"Do you provide advice or support?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{id:6,question:"What does the process of developing a software product look like from idea to implementation?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}],po={accordionsWrap:document.querySelector(".ac-wrap")};function go(e){const o=document.createElement("ul"),t=document.createElement("ul");o.classList.add("accordion-container","js-accordion-container-first"),t.classList.add("accordion-container","js-accordion-container-second");const r=e.slice(0,Math.floor(e.length/2)).map(({question:n,answer:i})=>`<li class="ac ac-first">
            <h2 class="ac-header">
                <button type="button" class="ac-trigger">${n}
                <span class="svg-wrap"> <svg class="icon" width="20" height="20">
                <use href="/img/icons.svg#icon-up"></use>
              </svg></span></button>
             </h2>
            <div class="ac-panel">
              <p class="ac-text">${i}</p>
             </div>
       </li>`).join(""),s=e.slice(Math.floor(e.length/2)).map(({question:n,answer:i})=>`<li class="ac ac-second">
            <h2 class="ac-header">
                <button type="button" class="ac-trigger">${n}
                <span class="svg-wrap"> <svg class="icon" width="20" height="20">
                <use href="/img/icons.svg#icon-up"></use>
              </svg></span></button>
             </h2>
            <div class="ac-panel">
              <p class="ac-text">${i}</p>
             </div>
       </li>`).join("");return o.innerHTML=r,t.innerHTML=s,[o,t]}const uo=go(lo);po.accordionsWrap.append(...uo);new _(".js-accordion-container-first",{duration:300,showMultiple:!0,openOnInit:[0]});new _(".js-accordion-container-second",{duration:300,showMultiple:!0,openOnInit:[0]});const _o="https://portfolio-js.b.goit.study/api",D={reviewList:document.querySelector(".reviews-list")};function mo(e){const o=e.map(({author:t,avatar_url:r,review:s})=>`<li class="reviews-wrap swiper-slide">
            <img src="${r}" alt="${t}" class="reviews-img" width='48' height='48' />
            <div class='reviews-content'>
              <h3 class="reviews-subtitle" >${t}</h3>
              <p class="reviews-text" >${s}</p>
            </div>
          </li>`).join("");D.reviewList.innerHTML=o}function ho(){const e=`
        <li class="reviews-wrap reviews-wrap--error swiper-slide">
          <p class="reviews-text">Not found</p>
        </li>`;D.reviewList.innerHTML=e}p.settings({timeout:3e3,transitionIn:"fadeInDown",position:"topRight"});function wo(){p.error({title:"Error",message:"Sorry, there are no reviews!",theme:"dark",color:"rgb(239, 64, 64)"})}function fo(){const e=new m(".reviews-swiper",{modules:[h,w,M],navigation:{nextEl:".reviews-swiper-button-right",prevEl:".reviews-swiper-button-left"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},autoplay:{delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0}});e.on("slideChange",()=>{const o=e.isEnd,t=e.isBeginning;o?(e.autoplay.stop(),e.params.autoplay.reverseDirection=!0,e.autoplay.start()):t&&(e.autoplay.stop(),e.params.autoplay.reverseDirection=!1,e.autoplay.start())})}const bo=document.querySelector(".reviews"),q=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&(yo(),fo(),q.disconnect())})},{root:null,rootMargin:"0px",threshold:.1});q.observe(bo);async function vo(){return(await f.get(`${_o}/reviews`)).data}async function yo(){try{const e=await vo();mo(e)}catch{wo(),ho()}}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("scroll-to-header-btn"),o=document.querySelector(".header"),t=window.innerHeight,r=()=>{window.scrollY>t?e.classList.add("show"):e.classList.remove("show")};window.addEventListener("scroll",r),e.addEventListener("click",()=>{o.scrollIntoView({behavior:"smooth"})})});const jo="https://portfolio-js.b.goit.study/api";f.defaults.baseURL=jo;async function xo(e){const{data:o,status:t,statusText:r}=await f.post("/requests",e);return{data:o,status:t,statusText:r}}const Ao="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgBzVWBDYIwEDw3YAM7ghvICG6AG8gGuIFuwAjECRjBEXQD3eB9zCEf0lpASLzkE/iv99/eWYB/gogcNDIsASU+S4cT5oQSOhKXDTmfHeaCklUaNzZKNB4aNeaAEu05cWZyOXMpfgUnv3nyV9YSTIX++MhJt3zftztppmetwBRYYfm+My5Kmauoh8NY0DEft/QabM0Q4wU3ZIXJbfoNmC9GC+4T1hxZg7XJJxIwQog879vS1N7w5FvB8xi54zQlBu7M1GrqkXxrUFphAyQVwsM1OCGyYJqvERG83b588bSYP1qg7r+nxHPfBMhlxLqsTbghNhvagGvrj+DS3TcOEcSOyKzr7ik+lJgZdORjRUFSLIP7ikezxIf8qXHB0ngB0x4XMNg0o7IAAAAASUVORK5CYII=",So="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=";function ko(){return p.info({class:"infoNotify",position:"center",title:"Thank you for your interest in cooperation!",titleSize:" 20px",titleLineHeight:1.5,titleColor:"#fafafa",message:"The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.",messageSize:"16px",messageLineHeight:1.5,messageColor:"rgba(250, 250, 250, 0.6)",backgroundColor:"#1c1d20",layout:3,closeOnEscape:!0,progressBar:!1,timeout:!1,icon:null,overlay:!0,overlayColor:"rgba(15, 15, 16, 0.6)",overlayClose:!0,zindex:"222"})}function Bo(){const e=document.querySelector(".infoNotify .iziToast-title");e.style.textAlign="center",e.style.marginRight=0,e.style.fontFamily="Inter Tight",e.style.fontWeight=600,e.style.letterSpacing="-0.02em"}function $o(){p.warning({class:"emptyNotify",position:"topRight",maxWidth:"340px",title:"Comments can not be empty",titleSize:"16px",titleColor:"white",message:"you must fill the comments section",messageColor:"white",backgroundColor:"#09f",iconUrl:Ao,layout:1,progressBarColor:" #3958c9",closeOnEscape:!0})}function Eo(){p.error({class:"errorNotify",position:"topRight",maxWidth:"340px",message:"Service not found",messageColor:"white",backgroundColor:"#ef4040",iconUrl:So,layout:1,progressBarColor:"#b51b1b",closeOnEscape:!0})}function Co(e){e.preventDefault();const{emailContact:o,comment:t}=e.target.elements,r=o.value.trim(),s=t.value.trim();if(!s){$o();return}xo({email:r,comment:s}).then(()=>{ko(),Bo(),e.target.reset()}).catch(()=>{Eo()}).finally(()=>{})}const Io={form:document.querySelector(".js-footer-form")};Io.form.addEventListener("submit",Co);
//# sourceMappingURL=commonHelpers.js.map
