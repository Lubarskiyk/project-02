import { refs } from './refs';

function hideSpinner() {
  refs.spinner.classList.add('is-hidden');
  refs.btnFooter.classList.remove('is-hidden');
  refs.spinnerModal.classList.add('is-hidden');
  refs.btnFooterModal.classList.remove('is-hidden');
}

function showSpinner() {
  refs.spinner.classList.remove('is-hidden');
  refs.btnFooter.classList.add('is-hidden');
  refs.spinnerModal.classList.remove('is-hidden');
  refs.btnFooterModal.classList.add('is-hidden');
}

export { hideSpinner, showSpinner };
