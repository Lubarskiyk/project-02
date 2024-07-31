import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
import projects from '/data/projects.json';
import { renderProjectSlides } from './renderProjectSlides.js';
import { refs } from './refs.js';

refs.projSlideWrap.innerHTML = renderProjectSlides(projects);

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
