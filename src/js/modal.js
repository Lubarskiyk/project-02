import { handlerPost } from './handlerPost';
import { checkModalInput, resetModalNotify } from './inputNtfappearance';
import { refs } from './refs';
import { toggleModal, toggleModalClick } from './toggleModal';

refs.formModal.addEventListener('submit', handlerPost);
refs.openModalBtn.addEventListener('click', toggleModal);
refs.modalOrder.addEventListener('click', toggleModalClick);

refs.spinnerModal.classList.add('is-hidden');
refs.inputNtfModal.addEventListener('blur', checkModalInput);
refs.inputNtfModal.addEventListener('focus', resetModalNotify);
