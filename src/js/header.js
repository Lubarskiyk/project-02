// const n = require('accordion-js');

const clickBurger = document.querySelector('.open-burger');

const modalOverlay = document.querySelector('.modal-overlay');

const logoWrapper = document.querySelector('.logo-wrapper');

const headLine = document.querySelector('.headline1');

const changeTheme = document.querySelector('.change-theme');

const closeBtn = document.querySelector('.close-btn');

const overflowModal = document.querySelector('body');

const orderMobile = document.querySelector('.order-mobile');

const navModal = document.querySelector('.navigation-modal');

//ADD Click
clickBurger.addEventListener('click', openModalWindow);

function openModalWindow() {
  modalOverlay.classList.add('is-open');
  headLine.style.opacity = 0;
  logoWrapper.style.opacity = 0;
  changeTheme.style.opacity = 0;
  clickBurger.style.opacity = 0;
  overflowModal.style.overflow = 'hidden';
}

// REMOVE click
closeBtn.addEventListener('click', closeModalWindow);

function closeModalWindow() {
  modalOverlay.classList.remove('is-open');
  headLine.style.opacity = '';
  logoWrapper.style.opacity = '';
  changeTheme.style.opacity = '';
  clickBurger.style.opacity = '';
  overflowModal.style.overflow = '';
}

// NAVIGATION modal
navModal.addEventListener('click', handlerNavMenu);

function handlerNavMenu(evt) {
  evt.preventDefault;
}

//CLICK to Order button

orderMobile.addEventListener('click', linkToFooter);

function linkToFooter() {
  modalOverlay.classList.remove('is-open');
  headLine.style.opacity = '';
  logoWrapper.style.opacity = '';
  changeTheme.style.opacity = '';
  clickBurger.style.opacity = '';
  overflowModal.style.overflow = '';
}
