import { renderFooterLogo } from './footerImage';
import { handlerPost } from './handlerPost';
import { checkFooterInput, resetFooterNotify } from './inputNtfappearance';
import { refs } from './refs';

renderFooterLogo();

refs.form.addEventListener('submit', handlerPost);
refs.spinner.classList.add('is-hidden');
refs.inputNtf.addEventListener('blur', checkFooterInput);
refs.inputNtf.addEventListener('focus', resetFooterNotify);
