import colorTheme from '/data/themeColor.json';
import { generatePictureTag } from './generatepicturetag.js';

const input = document.querySelector('.inputid');
// const rootvar = document.querySelector(':root');
// rootvar.style.setProperty('--background', '#fff');
const theme = colorTheme.find(theme => theme.id === 1);

const heroBackground = import.meta.glob('/img/background_hero/*.png', {
  query: { format: 'avif;webp;png', as: 'picture' },
  import: 'default',
  eager: true,
});

const image = document.querySelector('.js_image');
image.insertAdjacentHTML(
  'beforeend',
  generatePictureTag(heroBackground, theme.path, theme.path_retina)
);

const btn = document.querySelector('.button_color');
btn.addEventListener('click', e => {
  const id = parseInt(input.value);
  const theme = colorTheme.find(theme => theme.id === id);
  console.log(theme);
  image.innerHTML = generatePictureTag(heroBackground, theme.path, theme.path_retina);
  console.log(id);
});
