import Accordion from 'accordion-js';
import faqData from '/data/faq.json';

const refs = {
  faqList: document.querySelector('.js-accordion-container-faq'),
};

function renderFAQ(data) {
  return data
    .map(
      ({ question, answer }) =>
        `<li class="ac ac-faq">
            <h2 class="ac-header">
                <button type="button" class="ac-trigger" aria-label="open the answer to the question">${question}
                <span class="svg-wrap-faq"> 
                <svg class="icon-faq" width="20" height="20">
                 <use href="/img/icons.svg#icon-up"></use>
              </svg></span></button>
             </h2>
            <div class="ac-panel">
              <p class="ac-text">${answer}</p>
             </div>
       </li>`
    )
    .join('');
}

refs.faqList.insertAdjacentHTML('beforeend', renderFAQ(faqData));

new Accordion('.js-accordion-container-faq', {
  duration: 600,
  showMultiple: true,
});
