import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import { generatePictureTag } from './generatepicturetag.js';
import projects from '/data/projects.json';

const projectImage = import.meta.glob('/img/projects/*.png', {
  query: { format: 'avif;webp;png', as: 'picture' },
  import: 'default',
  eager: true,
});

const projSlideWrap = document.querySelector('.proj-swiper-wrap');
const slides = projects
  .map(({ title, imgSrc, imgRetinaSrc, link, tags }) => {
    const tagsList = tags
      .map(
        tag =>
          `<li class="proj-tags-item">
      <p>${tag}</p>
    </li>`
      )
      .join('');

    return `
    <li class="swiper-slide proj-slide">
      <div class="proj-slide-prescription">
        <ul class="proj-list-tags">${tagsList}</ul>
        <h3 class="proj-slide-title">${title}</h3>
          <button class="proj-link-wrap" type="button" aria-label="go to project page">
          <a href="${link}" class="proj-slide-link" target="_blank">
          See project
        </a>
 </button>
      </div>
      <div class="proj-slide-img">
        ${generatePictureTag(projectImage, imgSrc, imgRetinaSrc, 'proj-img', `${title}`)}
      </div>
    </li>
  `;
  })
  .join('');
projSlideWrap.innerHTML = slides;

const swiper = new Swiper('.swiper-container', {
  speed: 300,
  slidesPerView: 1,
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.proj-btn-next',
    prevEl: '.proj-btn-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  lazy: {
    loadPrevNext: true,
    loadOnTransitionStart: true,
  },
});
