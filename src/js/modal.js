import { handlerPost } from './handlerPost';
import { refs } from './refs';

refs.formModal.addEventListener('submit', handlerPost);
refs.openModalBtn.addEventListener('click', toggleModal);
refs.modalOrder.addEventListener('click', toggleModalClick);

refs.spinnerModal.classList.add('is-hidden');
refs.modalOrder.classList.add('is-hidden-modal');

export function toggleModalClick(evt) {
  // console.log(evt.target.tagName);
  // const parentModal = evt.target.closest('.js-backdrop-order');
  // console.log(parentModal);
  const parentBtnClose = evt.target.closest('.js-modal-close-btn');
  const parentBtnSend = evt.target.closest('.js-spinner-wrap');
  if (parentBtnSend) {
    toggleModal();
    return;
  }

  parentBtnClose ? toggleModal() : false;
}

export function toggleModal() {
  refs.modalOrder.classList.toggle('is-hidden-modal');
}
