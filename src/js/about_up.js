import { generatePictureTag } from './generatepicturetag.js';
import { refs } from './refs.js';

const foto = {
  path: '/img/aboutme_up/image1x.png',
  path_retina: '/img/aboutme_up/image1x.png',
};
const developerFoto = import.meta.glob('/img/aboutme_up/*.png', {
  query: { format: 'avif;webp;png', as: 'picture' },
  import: 'default',
  eager: true,
});

refs.developerFoto.insertAdjacentHTML(
  'beforeend',
  generatePictureTag(
    developerFoto,
    foto.path,
    foto.path_retina,
    'developer-card-photo',
    'Foto Developer'
  )
);
