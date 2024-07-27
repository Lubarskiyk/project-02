import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';
import faqData from '/data/faq.json';
import { refs } from './refs.js';

function renderFAQ(data) {
  console.log();
  return data
    .map(
      ({ question, answer }) =>
        `<div class="ac">
            <h2 class="ac-header">
                <button type="button" class="ac-trigger">${question}</button>
             </h2>
            <div class="ac-panel">
              <p class="ac-text">${answer}</p>
             </div>
       </div>`
    )
    .join('');
}

console.log(refs.accordionContainer);
refs.accordionContainer.insertAdjacentHTML('beforeend', renderFAQ(faqData));

new Accordion('.accordion-container');
