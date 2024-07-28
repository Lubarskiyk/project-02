import axios from 'axios';
import { BASE_URL } from './baseURL';
import { renderReviewsError, renderReviewsSuccess } from './renderReviews';
import { onError } from './notifications';
import Swiper from 'swiper';
import { Keyboard, Navigation, Autoplay } from 'swiper/modules';

function initSwiper() {
  const swiperReviews = new Swiper('.reviews-swiper', {
    modules: [Navigation, Keyboard, Autoplay],
    navigation: {
      nextEl: '.reviews-swiper-button-right',
      prevEl: '.reviews-swiper-button-left',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  swiperReviews.on('slideChange', () => {
    const isEnd = swiperReviews.isEnd;
    const isBeginning = swiperReviews.isBeginning;

    if (isEnd) {
      swiperReviews.autoplay.stop();
      swiperReviews.params.autoplay.reverseDirection = true;
      swiperReviews.autoplay.start();
    } else if (isBeginning) {
      swiperReviews.autoplay.stop();
      swiperReviews.params.autoplay.reverseDirection = false;
      swiperReviews.autoplay.start();
    }
  });
}
const swiperSection = document.querySelector('.reviews');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        getReviews();
        initSwiper();

        observer.disconnect();
      }
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
);

observer.observe(swiperSection);

async function fetchReviews() {
  return (await axios.get(`${BASE_URL}/reviews`)).data;
}

async function getReviews() {
  try {
    const responseReviews = await fetchReviews();
    renderReviewsSuccess(responseReviews);
  } catch (error) {
    onError();
    renderReviewsError();
  }
}

// ===========scroll-btn=========

document.addEventListener('DOMContentLoaded', () => {
  const scrollToHeaderBtn = document.getElementById('scroll-to-header-btn');
  const header = document.querySelector('.header');
  const showButtonOffset = window.innerHeight; // 100vh

  const handleScroll = () => {
    if (window.scrollY > showButtonOffset) {
      scrollToHeaderBtn.classList.add('show');
    } else {
      scrollToHeaderBtn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', handleScroll);

  scrollToHeaderBtn.addEventListener('click', () => {
    header.scrollIntoView({ behavior: 'smooth' });
  });
});
