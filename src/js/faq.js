import Accordion from 'accordion-js';

// import 'accordion-js/dist/accordion.min.css';

import faqData from '/data/faq.json';

const refs = {
  accordionsWrap: document.querySelector('.ac-wrap'),
};

function renderFAQ(data) {
  const ulAccFirst = document.createElement('ul');
  const ulAccSecond = document.createElement('ul');

  ulAccFirst.classList.add('accordion-container', 'js-accordion-container-first');
  ulAccSecond.classList.add('accordion-container', 'js-accordion-container-second');

  const liAccFirst = data
    .slice(0, Math.floor(data.length / 2))
    .map(
      ({ question, answer }) =>
        `<li class="ac ac-first">
            <h2 class="ac-header">
                <button type="button" class="ac-trigger">${question}
                <span class="svg-wrap"> <svg class="icon" width="20" height="20">
                <use href="./img/icons.svg#icon-up"></use>
              </svg></span></button>
             </h2>
            <div class="ac-panel">
              <p class="ac-text">${answer}</p>
             </div>
       </li>`
    )
    .join('');
  const liAccSecond = data
    .slice(Math.floor(data.length / 2))
    .map(
      ({ question, answer }) =>
        `<li class="ac ac-second">
            <h2 class="ac-header">
                <button type="button" class="ac-trigger">${question}
                <span class="svg-wrap"> <svg class="icon" width="20" height="20">
                <use href="./img/icons.svg#icon-up"></use>
              </svg></span></button>
             </h2>
            <div class="ac-panel">
              <p class="ac-text">${answer}</p>
             </div>
       </li>`
    )
    .join('');

  ulAccFirst.innerHTML = liAccFirst;
  ulAccSecond.innerHTML = liAccSecond;
  return [ulAccFirst, ulAccSecond];
}

const accordions = renderFAQ(faqData);
refs.accordionsWrap.append(...accordions);

new Accordion('.js-accordion-container-first', {
  duration: 300,
  showMultiple: true,
  openOnInit: [0],
});

new Accordion('.js-accordion-container-second', {
  duration: 300,
  showMultiple: true,
  openOnInit: [0],
});
