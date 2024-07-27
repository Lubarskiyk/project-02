import { makePost } from './swagger-api';

export function handlerPost(evt) {
  evt.preventDefault();

  const { emailContact, comment } = evt.target.elements;
  const emailValue = emailContact.value.trim();
  const commentValue = comment.value.trim();

  if (!commentValue) {
    //////////////////////todo iziToast

    alert('it is can not be empty');
    return;
  }

  makePost({ email: emailValue, comment: commentValue })
    .then(data => {
      ////////////////////////////////todo
      evt.target.reset();
      console.log('success');
      console.log(data);
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
