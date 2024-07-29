import { handlerPost } from './handlerPost';
import { refs } from './refs.footer';

refs.form.addEventListener('submit', handlerPost);

refs.spinner.classList.add('is-hidden');
