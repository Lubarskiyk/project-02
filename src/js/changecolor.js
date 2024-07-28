import colorTheme from '/data/themeColor.json';
import { generatePictureTag } from './generatepicturetag.js';
import { refs } from './refs.js';
import { heroBackground } from './hero_background.js';
import { setLocalData } from './localdata.js';

refs.changecolor.addEventListener('click', () => {
  refs.openmenu.classList.toggle('isopen_changecolor');
});
const li_item = document.querySelectorAll('.theme_button');
li_item.forEach((e, key) => {
  const theme = colorTheme.find(theme => theme.id === key + 1);
  e.style.background = theme.accent_color;
  e.dataset.id = key + 1;
});

refs.openmenu.addEventListener('click', e => {
  const id = parseInt(e.target.dataset.id);
  const theme = colorTheme.find(theme => theme.id === id);
  refs.heroBackground.innerHTML = generatePictureTag(
    heroBackground,
    theme.path,
    theme.path_retina,
    'background_image'
  );
  refs.rootColor.style.setProperty('--akcent-collor', `${theme.accent_color}`);
  setLocalData(id);
});

export function changerColor(accent_color, accent_color_hover) {
  refs.rootColor.style.setProperty('--akcent-collor', accent_color);
  refs.rootColor.style.setProperty('--aсcent-collor-hover', accent_color_hover);
}
