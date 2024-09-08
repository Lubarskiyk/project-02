import { generatePictureTag } from './generatepicturetag.js';
import { footerImage } from './imageobject.js';
import { refs } from './refs.js';
import footerLogoPhoto from '/data/footerLogoPhoto.json';

export function renderFooterLogo() {
  refs.footerImage.forEach(el => {
    el.insertAdjacentHTML(
      'beforeend',
      generatePictureTag(
        footerImage,
        footerLogoPhoto[0].path,
        footerLogoPhoto[0].path_retina,
        'footer-logo-photo',
        'Foto Developer'
      )
    );
  });
}
