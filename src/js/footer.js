import { handlerPost } from './handlerPost';
import { refs } from './refs';

refs.form.addEventListener('submit', handlerPost);

refs.spinner.classList.add('is-hidden');
