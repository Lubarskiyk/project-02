import { refs } from './refs';

document.addEventListener('keydown', handlerKey);

function handlerKey(evt) {
  if (evt.code === 'Escape') {
    toggleModal();
  }
}

function toggleModalClick(evt) {
  const backdropModal = evt.target.classList.contains('js-backdrop-order');
  const parentBtnClose = evt.target.closest('.js-modal-close-btn');

  if (backdropModal || parentBtnClose) {
    toggleModal();
    document.removeEventListener('keydown', handlerKey);
  }
}

function toggleModal() {
  refs.modalOrder.classList.toggle('is-hidden-modal');
  refs.body.classList.toggle('is-lock');
}

export { toggleModalClick, toggleModal };
