import { renderFooterLogo } from './footerImage';
import { handlerPost } from './handlerPost';
import { refs } from './refs';

renderFooterLogo();

refs.form.addEventListener('submit', handlerPost);
refs.spinner.classList.add('is-hidden');
refs.inputNtf.addEventListener('blur', inputNtfappearance);
refs.inputNtf.addEventListener('focus', inputNtfstatic);

function inputNtfappearance() {
  const inputValue = refs.inputNtf.value.trim();

  if (inputValue.length === 0 && refs.inputNtf.value.length > 0) {
    refs.inputNtf.classList.add('js-contacts-input-invalid');
    refs.inputNtf.classList.remove('js-contacts-input-valid');
    refs.invalidNtf.textContent = 'Invalid comment, fill the gap';
    refs.invalidNtf.classList.add('notify-appearance');
    refs.validNtf.classList.remove('notify-appearance');
  } else if (inputValue.length > 0) {
    refs.inputNtf.classList.add('js-contacts-input-valid');
    refs.inputNtf.classList.remove('js-contacts-input-invalid');
    refs.validNtf.textContent = 'Thanks for your comments!';
    refs.validNtf.classList.add('notify-appearance');
    refs.invalidNtf.classList.remove('notify-appearance');
  } else {
    inputNtfstatic();
  }
}

export function inputNtfstatic() {
  refs.inputNtf.classList.remove('js-contacts-input-invalid', 'js-contacts-input-valid');
  refs.invalidNtf.textContent = '';
  refs.invalidNtf.classList.remove('notify-appearance');
  refs.validNtf.textContent = '';
  refs.validNtf.classList.remove('notify-appearance');
}
