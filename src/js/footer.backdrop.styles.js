import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import caution from '../img/footer/bi_exclamation-triangle.png';
import iconOctagon from '../img/footer/bi_x-octagon.png';

function infoNotify() {
  return iziToast.info({
    class: 'infoNotify',
    position: 'center',
    title: 'Thank you for your interest in cooperation!',
    titleSize: ' 20px',
    titleLineHeight: 1.5,
    titleColor: '#fafafa',
    message:
      'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.',
    messageSize: '16px',
    messageLineHeight: 1.5,
    messageColor: 'rgba(250, 250, 250, 0.6)',
    backgroundColor: '#1c1d20',
    layout: 3,
    closeOnEscape: true,
    progressBar: false,
    timeout: false,
    icon: null,
    overlay: true,
    overlayColor: 'rgba(15, 15, 16, 0.6)',
    overlayClose: true,
    zindex: '222',
  });
}

function addInlineInfoNotifyStyle() {
  const strong = document.querySelector('.infoNotify .iziToast-title');
  strong.style.textAlign = 'center';
  strong.style.marginRight = 0;
  strong.style.fontFamily = 'Inter Tight';
  strong.style.fontWeight = 600;
  strong.style.letterSpacing = '-0.02em';
}

function emptyNofify() {
  iziToast.warning({
    class: 'emptyNotify',
    position: 'topRight',
    maxWidth: '340px',
    title: 'Comments can not be empty',
    titleSize: '16px',
    titleColor: 'white',
    message: 'you must fill the comments section',
    messageColor: 'white',
    backgroundColor: '#09f',
    iconUrl: caution,
    layout: 1,
    progressBarColor: ' #3958c9',
    closeOnEscape: true,
  });
}

function errorNotify() {
  iziToast.error({
    class: 'errorNotify',
    position: 'topRight',
    maxWidth: '340px',
    message: 'Service not found',
    messageColor: 'white',
    backgroundColor: '#ef4040',
    iconUrl: iconOctagon,
    layout: 1,
    progressBarColor: '#b51b1b',
    closeOnEscape: true,
  });
}

export { infoNotify, addInlineInfoNotifyStyle, emptyNofify, errorNotify };
