const colorTheme = [
  {
    id: 1,
    path: '/img/background_hero/hero_red_1x.png',
    path_retina: '/img/background_hero/hero_red_2x.png',
  },
  {
    id: 2,
    path: '/img/background_hero/hero_blue_1x.png',
    path_retina: '/img/background_hero/hero_blue_2x.png',
  },
];
const theme = colorTheme.find(theme => theme.id === 1);

const heroBackground = import.meta.glob('/img/background_hero/*.png', {
  query: { format: 'avif;webp;png', as: 'picture' },
  import: 'default',
  eager: true,
});

console.log(imageHeroBackground(heroBackground, theme.path, theme.path_retina));

const image = document.querySelector('.image');
console.log(image);

image.insertAdjacentHTML(
  'beforeend',
  imageHeroBackground(heroBackground, theme.path, theme.path_retina)
);

function imageHeroBackground(background, image_url, retina_url) {
  let avifUrl = '';
  let webpfUrl = '';
  let avifUrlRetina = '';
  let webpUrlRetina = '';
  let imgBase = '';
  let imgW;
  let imgH;
  for (const [imgFile, images] of Object.entries(background)) {
    if (imgFile === image_url) {
      avifUrl = images.sources['avif'].split(' ')[0];
      webpfUrl = images.sources['webp'].split(' ')[0];
      imgBase = images.img['src'];
      imgW = images.img['w'];
      imgH = images.img['h'];
    }
    if (imgFile === retina_url) {
      avifUrlRetina = images.sources['avif'].split(' ')[0];
      webpUrlRetina = images.sources['webp'].split(' ')[0];
    }
  }
  const html = `<picture>
	    <source srcset="${avifUrl} 1x, ${avifUrlRetina} 2x" type="image/avif"/>
	    <source srcset="${webpfUrl} 1x, ${webpUrlRetina} 2x" type="image/webp"/>
	    <img 
	      src="${imgBase}"
	      width="${imgW}" 
	      height="${imgH}"
	      alt="${name}"/>
	  </picture>`;
  return html;
}
