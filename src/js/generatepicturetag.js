/**
 *
 * @param objectImage объект даних зображення
 * @param image_url шлях до зображення 1х
 * @param retina_url шлях до зображення 2х
 * @param classname назва класу зля стилізації зображення
 * @returns {string} повертає розмітку на одне зображення
 */
export function generatePictureTag(objectImage, image_url, retina_url, classname, alt) {
  let avifUrl = '';
  let webpfUrl = '';
  let avifUrlRetina = '';
  let webpUrlRetina = '';
  let imgBase = '';
  let imgW;
  let imgH;
  for (const [imgFile, images] of Object.entries(objectImage)) {
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
  const htmlString = `<picture class="${classname} ">
	    <source srcset="${avifUrl} 1x, ${avifUrlRetina} 2x" type="image/avif"/>
	    <source srcset="${webpfUrl} 1x, ${webpUrlRetina} 2x" type="image/webp"/>
	    <img 
	      src="${imgBase}"
	      width="${imgW}" 
	      height="${imgH}"
	      alt="${alt}"
	  />
	  </picture>`;
  return htmlString;
}
