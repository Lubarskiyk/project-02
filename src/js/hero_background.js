import colorTheme from '/data/themeColor.json';
import { generatePictureTag } from './generatepicturetag.js';
import { getLocalData, setLocalData } from './localdata.js';
import { refs } from './refs.js';

// const input = document.querySelector('.inputid');
const localId = getLocalData();
const theme = colorTheme.find(theme => theme.id === localId);

const heroBackground = import.meta.glob('/img/background_hero/*.png', {
  query: { format: 'avif;webp;png', as: 'picture' },
  import: 'default',
  eager: true,
});

refs.heroBackground.insertAdjacentHTML(
  'beforeend',
  generatePictureTag(heroBackground, theme.path, theme.path_retina, 'background_image')
);

// const btn = document.querySelector('.button_color');
// btn.addEventListener('click', e => {
//   const id = parseInt(input.value);
//   const theme = colorTheme.find(theme => theme.id === id);
//   image.innerHTML = generatePictureTag(
//     heroBackground,
//     theme.path,
//     theme.path_retina,
//     'background_image'
//   );
//   setLocalData(id);
// });
