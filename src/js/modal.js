import { handlerPost } from './handlerPost';
import { refs } from './refs';

refs.formModal.addEventListener('submit', handlerPost);

refs.spinnerModal.classList.add('is-hidden');
