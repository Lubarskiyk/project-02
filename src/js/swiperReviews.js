import Swiper from 'swiper';
import { Keyboard, Navigation, Autoplay } from 'swiper/modules';
import { getReviews } from './getReviews';

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
const reviewsObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        getReviews();
        initSwiper();

        reviewsObserver.disconnect();
      }
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
);

reviewsObserver.observe(swiperSection);
