import { refs } from './refs';

function toggleModalClick(evt) {
  const backdropModal = evt.target.classList.contains('js-backdrop-order');
  const parentBtnClose = evt.target.closest('.js-modal-close-btn');

  if (backdropModal || parentBtnClose) {
    toggleModal();
    window.removeEventListener('keydown', handlerKey);
  }
}

function toggleModal() {
  refs.modalOrder.classList.toggle('is-hidden-modal');
  window.addEventListener('keydown', handlerKey);
  refs.body.classList.toggle('is-lock');
}

function handlerKey(evt) {
  if (evt.code === 'Escape') {
    toggleModal();
    window.removeEventListener('keydown', handlerKey);
  }
}

export { toggleModalClick, toggleModal, handlerKey };
