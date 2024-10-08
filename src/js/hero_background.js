import colorTheme from '/data/themeColor.json';
import { generatePictureTag } from './generatepicturetag.js';
import { getLocalData, setLocalData } from './localdata.js';
import { refs } from './refs.js';
import { changerColor } from './changecolor.js';
import { heroBackground } from './imageobject.js';

const localId = getLocalData();
const theme = colorTheme.find(theme => theme.id === localId);

export function renderHero() {
  refs.heroBackground.insertAdjacentHTML(
    'beforeend',
    generatePictureTag(
      heroBackground,
      theme.path,
      theme.path_retina,
      'background_image',
      'background'
    )
  );
  refs.modalBackground.insertAdjacentHTML(
    'beforeend',
    generatePictureTag(
      heroBackground,
      theme.path,
      theme.path_retina,
      'background_image',
      'background'
    )
  );
  changerColor(theme.accent_color, theme.aсcent_collor_hover);
}
