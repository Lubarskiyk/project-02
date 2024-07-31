import { refs } from './refs';

function toggleModalClick(evt) {
  const backdropModal = evt.target.classList.contains('js-backdrop-order');
  const parentBtnClose = evt.target.closest('.js-modal-close-btn');

  if (backdropModal || parentBtnClose) {
    toggleModal();
    handlerKey();
    document.removeEventListener('keydown', handlerKey);
  }
}

function toggleModal() {
  document.addEventListener('keydown', handlerKey);
  refs.modalOrder.classList.toggle('is-hidden-modal');
  refs.body.classList.toggle('is-lock');
}

function handlerKey(evt) {
  if (evt.code === 'Escape') {
    toggleModal();
  }
}

export { toggleModalClick, toggleModal };
