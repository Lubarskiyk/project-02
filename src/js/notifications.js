import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  timeout: 3000,
  transitionIn: 'fadeInDown',
  position: 'topRight',
});

export function onError() {
  iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no reviews!',
    theme: 'dark',
    color: 'rgb(239, 64, 64)',
  });
}
