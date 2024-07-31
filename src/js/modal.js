import { handlerPost } from './handlerPost';
import { refs } from './refs';
import { toggleModal, toggleModalClick } from './toggleModal';

refs.formModal.addEventListener('submit', handlerPost);
refs.openModalBtn.addEventListener('click', toggleModal);
refs.modalOrder.addEventListener('click', toggleModalClick);

refs.spinnerModal.classList.add('is-hidden');

// if (refs.modalOrder.classList.contains('is-hidden-modal')) {
//   document.body.style.overflow = 'scroll';
// } else {
//   document.body.style.overflow = 'hidden';
// }
