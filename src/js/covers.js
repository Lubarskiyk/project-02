import { generatePictureTag } from './generatepicturetag.js';

// export function hideTitle() {
//   const title = document.querySelector('.title');
//   title.style.display = 'none';
// }

let createElement = null;

function createAnimation() {
  createElement = document.createElement('style');
  const animation = `@keyframes Line {

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
    `;
  createElement.textContent = animation;
  document.head.appendChild(createElement);
}

function removeAnimation() {
  if (createElement && document.head.contains(createElement)) {
    document.head.removeChild(createElement);
    createElement = null;
  }
}

const coverObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      createAnimation();
    } else {
      removeAnimation();
    }
  });
});

const line = document.querySelector('.covers');
coverObserver.observe(line);

//---------------------------------------------picture---------------------------------------------

const pictureArr = [
  {
    coverClass: 'cover-img',
    coverImeageOne: '/img/covers/screen61x.png',
    coverImeageTwo: '/img/covers/screen62x.png',
    coverAlt: 'imeage',
  },
  {
    coverClass: 'cover-img',
    coverImeageOne: '/img/covers/screen101x.png',
    coverImeageTwo: '/img/covers/screen102x.png',
    coverAlt: 'imeage',
  },
  {
    coverClass: 'cover-img',
    coverImeageOne: '/img/covers/screen71x.png',
    coverImeageTwo: '/img/covers/screen72x.png',
    coverAlt: 'imeage',
  },
  {
    coverClass: 'cover-img',
    coverImeageOne: '/img/covers/screen111x.png',
    coverImeageTwo: '/img/covers/screen112x.png',
    coverAlt: 'imeage',
  },
  {
    coverClass: 'cover-img',
    coverImeageOne: '/img/covers/screen1x.png',
    coverImeageTwo: '/img/covers/screen2x.png',
    coverAlt: 'imeage',
  },
  {
    coverClass: 'cover-img',
    coverImeageOne: '/img/covers/screen81x.png',
    coverImeageTwo: '/img/covers/screen82x.png',
    coverAlt: 'imeage',
  },
  {
    coverClass: 'cover-img',
    coverImeageOne: '/img/covers/screen91x.png',
    coverImeageTwo: '/img/covers/screen92x.png',
    coverAlt: 'imeage',
  },
  {
    coverClass: 'cover-img',
    coverImeageOne: '/img/covers/screen81x.png',
    coverImeageTwo: '/img/covers/screen82x.png',
    coverAlt: 'imeage',
  },
  {
    coverClass: 'cover-img',
    coverImeageOne: '/img/covers/screen91x.png',
    coverImeageTwo: '/img/covers/screen92x.png',
    coverAlt: 'imeage',
  },
  {
    coverClass: 'cover-img',
    coverImeageOne: '/img/covers/screen41x.png',
    coverImeageTwo: '/img/covers/screen42x.png',
    coverAlt: 'imeage',
  },
  {
    coverClass: 'cover-img',
    coverImeageOne: '/img/covers/screen51x.png',
    coverImeageTwo: '/img/covers/screen52x.png',
    coverAlt: 'imeage',
  },
  {
    coverClass: 'cover-img',
    coverImeageOne: '/img/covers/screen121x.png',
    coverImeageTwo: '/img/covers/screen122x.png',
    coverAlt: 'imeage',
  },
];
const coversImage = import.meta.glob('/img/covers/*.png', {
  query: { format: 'avif;webp;png', as: 'picture' },
  import: 'default',
  eager: true,
});
const coverLi = document.querySelectorAll('.cover-list');
const coverArrLi = [...coverLi];

coverArrLi.forEach((cover, index) => {
  const pictureHtml = generatePictureTag(
    coversImage,
    pictureArr[index].coverImeageOne,
    pictureArr[index].coverImeageTwo,
    pictureArr[index].coverClass,
    pictureArr[index].coverAlt
  );
  cover.innerHTML = pictureHtml;
});
