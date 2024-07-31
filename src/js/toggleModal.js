import { refs } from './refs';

function toggleModalClick(evt) {
  const backdropModal = evt.target.classList.contains('js-backdrop-order');
  const parentBtnClose = evt.target.closest('.js-modal-close-btn');

  if (backdropModal || parentBtnClose) {
    toggleModal();
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
  document.removeEventListener('keydown', handlerKey);
}

export { toggleModalClick, toggleModal };
