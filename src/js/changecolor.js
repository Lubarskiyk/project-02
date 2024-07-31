import colorTheme from '/data/themeColor.json';
import { generatePictureTag } from './generatepicturetag.js';
import { refs } from './refs.js';
// import { heroBackground } from './hero_background.js';
import { setLocalData } from './localdata.js';
import { heroBackground } from './imageobject.js';

const li_item = document.querySelectorAll('.theme_button');
li_item.forEach((e, key) => {
  const theme = colorTheme.find(theme => theme.id === key + 1);
  e.style.background = theme.accent_color;
  e.dataset.id = key + 1;
});

refs.changecolor.addEventListener('click', () => {
  refs.openmenu.classList.toggle('isopen_changecolor');
  refs.rootColor.addEventListener('click', handlerClick);
});

function handlerClick(e) {
  if (e.target.classList.contains('theme_button')) {
    themeChangeHandler(e);
  } else {
    if (!e.target.classList.contains('change-theme')) {
      refs.openmenu.classList.remove('isopen_changecolor');
      refs.rootColor.removeEventListener('click', handlerClick);
    }
  }
}

function themeChangeHandler(evt) {
  const id = parseInt(evt.target.dataset.id);
  const theme = colorTheme.find(theme => theme.id === id);
  refs.heroBackground.innerHTML = generatePictureTag(
    heroBackground,
    theme.path,
    theme.path_retina,
    'background_image'
  );
  refs.modalBackground.innerHTML = generatePictureTag(
    heroBackground,
    theme.path,
    theme.path_retina,
    'background_image'
  );
  changerColor(theme.accent_color, theme.aсcent_collor_hover);
  refs.openmenu.classList.remove('isopen_changecolor');
  refs.rootColor.removeEventListener('click', handlerClick);
  setLocalData(id);
}

export function changerColor(accentColor, accentColorHover) {
  refs.rootColor.style.setProperty('--akcent-collor', accentColor);
  refs.rootColor.style.setProperty('--aсcent-collor-hover', accentColorHover);
}
