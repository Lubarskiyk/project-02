import axios from 'axios';
import { BASE_URL } from './baseURL';
import { renderReviewsError, renderReviewsSuccess } from './renderReviews';
import { onError } from './notifications';
import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

const swiperReviews = new Swiper('.reviews-swiper', {
  modules: [Navigation, Keyboard],
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
      // spaceBetween: 0,
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
});

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

getReviews();
