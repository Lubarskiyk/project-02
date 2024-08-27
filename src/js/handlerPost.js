import { makePost } from './swagger-api';
import { hideSpinner, showSpinner } from './spinnerHideShow';
import {
  addInlineInfoNotifyStyle,
  emptyNofify,
  errorNotify,
  infoNotify,
} from './footer.backdrop.styles';
import { handlerKey, toggleModal } from './toggleModal';
import { inputNtfstatic } from './footer';

export function handlerPost(evt) {
  evt.preventDefault();

  const { emailContact, comment } = evt.target.elements;
  const emailValue = emailContact.value.trim();
  const commentValue = comment.value.trim();

  if (!commentValue) {
    emptyNofify();
    return;
  }

  showSpinner();

  makePost({ email: emailValue, comment: commentValue })
    .then(() => {
      if (evt.target.classList.contains('js-modal-form')) {
        toggleModal();
        window.removeEventListener('keydown', handlerKey);
      }

      infoNotify();
      addInlineInfoNotifyStyle();
      inputNtfstatic();

      evt.target.reset();
    })
    .catch(() => {
      errorNotify();
      return;
    })
    .finally(() => {
      hideSpinner();
    });
}
