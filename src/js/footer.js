import { renderFooterLogo } from './footerImage';
import { handlerPost } from './handlerPost';
import { refs } from './refs';

renderFooterLogo();

refs.form.addEventListener('submit', handlerPost);
refs.spinner.classList.add('is-hidden');
