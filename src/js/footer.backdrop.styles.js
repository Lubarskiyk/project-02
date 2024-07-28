import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function iziToastStyle() {
  return iziToast.info({
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

function addInlineIziToastStyle() {
  const strong = document.querySelector('.iziToast-title ');
  strong.style.textAlign = 'center';
  strong.style.marginRight = 0;
  strong.style.fontFamily = 'Inter Tight';
  strong.style.fontWeight = 600;
  strong.style.letterSpacing = '-0.02em';
}

export { iziToastStyle, addInlineIziToastStyle };
