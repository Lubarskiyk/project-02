import { makePost } from './swagger-api';
import { hideSpinner, showSpinner } from './spinnerHideShow';
import {
  addInlineInfoNotifyStyle,
  emptyNofify,
  errorNotify,
  infoNotify,
} from './footer.backdrop.styles';
// import { toggleModal, toggleModalClick } from './modal';

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
      // toggleModalClick();
      // toggleModal();

      infoNotify();
      addInlineInfoNotifyStyle();

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
