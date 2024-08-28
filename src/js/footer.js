import { renderFooterLogo } from './footerImage';
import { handlerPost } from './handlerPost';
import { inputNtfappearance, inputNtfstatic } from './inputNtfappearance';
import { refs } from './refs';

renderFooterLogo();

refs.form.addEventListener('submit', handlerPost);
refs.spinner.classList.add('is-hidden');
refs.inputNtf.addEventListener('blur', inputNtfappearance);
refs.inputNtf.addEventListener('focus', inputNtfstatic);
