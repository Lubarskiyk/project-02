export function generatePictureTag(background, image_url, retina_url, classname) {
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
  const htmlString = `<picture class="${classname} ">
	    <source srcset="${avifUrl} 1x, ${avifUrlRetina} 2x" type="image/avif"/>
	    <source srcset="${webpfUrl} 1x, ${webpUrlRetina} 2x" type="image/webp"/>
	    <img 
	      src="${imgBase}"
	      width="${imgW}" 
	      height="${imgH}"
	  />
	  </picture>`;
  return htmlString;
}
