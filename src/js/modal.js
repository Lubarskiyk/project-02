import { handlerPost } from './handlerPost';
import { refs } from './refs';

refs.formModal.addEventListener('submit', handlerPost);
refs.openModalBtn.addEventListener('click', toggleModal);
refs.modalOrder.addEventListener('click', toggleModalClick);

refs.spinnerModal.classList.add('is-hidden');

// if (refs.modalOrder.classList.contains('is-hidden-modal')) {
//   document.body.style.overflow = 'scroll';
// } else {
//   document.body.style.overflow = 'hidden';
// }

export function toggleModalClick(evt) {
  const backdropModal = evt.target.classList.contains('js-backdrop-order');
  const parentBtnClose = evt.target.closest('.js-modal-close-btn');

  if (backdropModal || parentBtnClose) {
    toggleModal();
  }
}

export function toggleModal() {
  refs.modalOrder.classList.toggle('is-hidden-modal');
}
