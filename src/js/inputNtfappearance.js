import { refs } from './refs';

export function inputNtfappearance() {
  const inputValue = refs.inputNtf.value.trim();
  const inputValueModal = refs.inputNtfModal.value.trim();

  if (
    (inputValue.length === 0 && refs.inputNtf.value.length > 0) ||
    (inputValueModal.length === 0 && refs.inputNtfModal.value.length > 0)
  ) {
    refs.inputNtf.classList.add('js-contacts-input-invalid');
    refs.inputNtf.classList.remove('js-contacts-input-valid');
    refs.invalidNtf.textContent = 'Invalid comment, fill the gap';
    refs.invalidNtf.classList.add('notify-appearance');
    refs.validNtf.classList.remove('notify-appearance');
    refs.inputNtfModal.classList.add('js-contacts-input-invalid');
    refs.inputNtfModal.classList.remove('js-contacts-input-valid');
    refs.invalidNtfModal.textContent = 'Invalid comment, fill the gap';
    refs.invalidNtfModal.classList.add('notify-appearance');
    refs.validNtfModal.classList.remove('notify-appearance');
  } else if (inputValue.length > 0 || inputValueModal.length > 0) {
    refs.inputNtf.classList.add('js-contacts-input-valid');
    refs.inputNtf.classList.remove('js-contacts-input-invalid');
    refs.validNtf.textContent = 'Thanks for your comments!';
    refs.validNtf.classList.add('notify-appearance');
    refs.invalidNtf.classList.remove('notify-appearance');
    refs.inputNtfModal.classList.add('js-contacts-input-valid');
    refs.inputNtfModal.classList.remove('js-contacts-input-invalid');
    refs.validNtfModal.textContent = 'Thanks for your comments!';
    refs.validNtfModal.classList.add('notify-appearance');
    refs.invalidNtfModal.classList.remove('notify-appearance');
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
  refs.inputNtfModal.classList.remove('js-contacts-input-invalid', 'js-contacts-input-valid');
  refs.invalidNtfModal.textContent = '';
  refs.invalidNtfModal.classList.remove('notify-appearance');
  refs.validNtfModal.textContent = '';
  refs.validNtfModal.classList.remove('notify-appearance');
}
