import { makePost } from './swagger-api';
import { addInlineIziToastStyle, emptyComment, iziToastStyle } from './footer.backdrop.styles';

export function handlerPost(evt) {
  evt.preventDefault();

  const { emailContact, comment } = evt.target.elements;
  const emailValue = emailContact.value.trim();
  const commentValue = comment.value.trim();

  if (!commentValue) {
    emptyComment();
    return;
  }

  makePost({ email: emailValue, comment: commentValue })
    .then(() => {
      iziToastStyle();
      addInlineIziToastStyle();

      evt.target.reset();
    })
    .catch(error => {
      console.log(error);
      //////////////////////todo iziToast
      alert('something went wrong');
      return;
    })
    .finally(() => {});
}

// console.error(
//       error.response.status,
//       `${error.response.statusText}: ${error.response.data.message}`
//     )
