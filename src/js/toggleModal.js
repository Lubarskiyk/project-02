import { refs } from './refs';

function toggleModalClick(evt) {
  const backdropModal = evt.target.classList.contains('js-backdrop-order');
  const parentBtnClose = evt.target.closest('.js-modal-close-btn');

  if (backdropModal || parentBtnClose) {
    toggleModal();
  }
}

function toggleModal() {
  refs.modalOrder.classList.toggle('is-hidden-modal');
}

export { toggleModalClick, toggleModal };
