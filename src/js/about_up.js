import { generatePictureTag } from './generatepicturetag.js';
import { refs } from './refs.js';
import { developerFoto } from './imageobject.js';
import developerFotoData from '/data/aboutmefoto.json';

export function renderPhotoAboutme() {
  refs.developerFoto.insertAdjacentHTML(
    'beforeend',
    generatePictureTag(
      developerFoto,
      developerFotoData[0].path,
      developerFotoData[0].path_retina,
      'developer-card-photo',
      'Foto Developer'
    )
  );
}
