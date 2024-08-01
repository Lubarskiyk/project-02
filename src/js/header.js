const clickBurger = document.querySelector('.open-burger');

const modalOverlay = document.querySelector('.modal-overlay');

const closeBtn = document.querySelector('.close-btn');

const overflowModal = document.querySelector('body');

const orderMobile = document.querySelector('.order-mobile');

const navList = document.querySelector('.nav-list');

const navMenu = document.querySelector('.nav-menu');

const customList = document.querySelector('.custom-list');

//ADD Click
clickBurger.addEventListener('click', openModalWindow);

function openModalWindow() {
  modalOverlay.classList.add('is-open');
  clickBurger.style.opacity = 0;
  overflowModal.style.overflow = 'hidden';
}

// REMOVE click
closeBtn.addEventListener('click', closeModalWindow);

function closeModalWindow() {
  modalOverlay.classList.remove('is-open');
  clickBurger.style.opacity = '';
  overflowModal.style.overflow = '';
}

// NAVIGATION modal
navList.addEventListener('click', handlerNavMenu);

function handlerNavMenu(evt) {
  evt.preventDefault();
  if (evt.target !== evt.currentTarget) {
    return;
  } else {
    modalOverlay.classList.remove('is-open');
    clickBurger.style.opacity = '';
    overflowModal.style.overflow = '';
  }
}

orderMobile.addEventListener('click', linkToFooter);

function linkToFooter(evt) {
  evt.preventDefault();
  modalOverlay.classList.remove('is-open');
  clickBurger.style.opacity = '';
  overflowModal.style.overflow = '';

  setTimeout(() => {
    document.querySelector('#work-together').scrollIntoView({ behavior: 'smooth' });
  }, 300);
}

navList.addEventListener('click', NavMenu);

function NavMenu(evt) {
  if (evt.target.tagName === 'A') {
    modalOverlay.classList.remove('is-open');
    clickBurger.style.opacity = '';
    overflowModal.style.overflow = '';

    const targetId = evt.target.getAttribute('href');

    setTimeout(() => {
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
}

// MENU
navMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
  customList.classList.toggle('is-open-menu');
}
