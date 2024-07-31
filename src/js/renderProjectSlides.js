import { generatePictureTag } from './generatepicturetag.js';
import { projectImage } from './imageobject.js';

export function renderProjectSlides(data) {
  return data
    .map(({ title, imgSrc, imgRetinaSrc, link, tags }) => {
      const tagsList = tags
        .map(
          tag =>
            `<li class="proj-tags-item">
      <p>${tag}</p>
    </li>`
        )
        .join('');

      return `
    <li class="swiper-slide proj-slide">
      <div class="proj-slide-prescription">
        <ul class="proj-list-tags">${tagsList}</ul>
        <h3 class="proj-slide-title">${title}</h3>
          <div class="proj-link-wrap" type="button" >
          <a href="${link}" class="proj-slide-link" target="_blank" aria-label="go to project page">
          See project
        </a>
 </div>
      </div>
      <div class="proj-slide-img">
        ${generatePictureTag(projectImage, imgSrc, imgRetinaSrc, 'proj-img', `${title}`)}
      </div>
    </li>
  `;
    })
    .join('');
}
