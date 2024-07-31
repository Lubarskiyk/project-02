import { handlerPost } from './handlerPost';
import { refs } from './refs';

refs.formModal.addEventListener('submit', handlerPost);
refs.openModalBtn.addEventListener('click', toggleModal);
refs.modalOrder.addEventListener('click', toggleModalClick);

refs.spinnerModal.classList.add('is-hidden');

export function toggleModalClick(evt) {
  // document.body.style.overflow = 'hidden';
  const parentBtnClose = evt.target.closest('.js-modal-close-btn');
  const parentBtnSend = evt.target.closest('.js-spinner-wrap');

  if (evt.target.classList.contains('js-backdrop-order') || parentBtnSend) {
    toggleModal();
  } else if (parentBtnClose) {
    toggleModal();
  }
}

export function toggleModal() {
  refs.modalOrder.classList.toggle('is-hidden-modal');
  document.body.style.overflow = 'auto';
}
