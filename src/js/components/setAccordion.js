import { $DOC, ACTIVE } from '../constants';
import { setHeight } from './setBlockBgHeight';

class Accordion {
  constructor() {
    this.$contentItems = $(`.${Accordion.classNames.content}`);
  };
  init() {
    this.$contentItems.each((i, item) => {
      if ($(item).hasClass(ACTIVE)) {
        $(item).slideDown();
      };
    });
    
    $DOC.on('click', '.'+Accordion.classNames.title, this._toggleAccordion.bind(this));
  };

  _toggleAccordion(e) {
    e.preventDefault();
    
    const $wrap = $(e.currentTarget).closest('.'+Accordion.classNames.wrap);    
    const name = e.currentTarget.getAttribute('data-accordion-title');
    const $item = name
      ? $wrap.find('[data-accordion-item="'+name+'"]')
      : $(e.currentTarget).next('.'+Accordion.classNames.content);


    const $itemsElse = name
      ? $wrap.find('.'+Accordion.classNames.content+':not([data-accordion-item="'+name+'"])')
      : $wrap.find('.'+Accordion.classNames.content).not($(e.currentTarget).next('.'+Accordion.classNames.content));
    const $titlesElse = name
      ? $wrap.find('.'+Accordion.classNames.title+':not([data-accordion-title="'+name+'"])')
      : $wrap.find('.'+Accordion.classNames.title).not(e.currentTarget);


    $(e.currentTarget).toggleClass(ACTIVE);
    $item.toggleClass(ACTIVE);

    if (this.onToggle) {
      this.onToggle(e.currentTarget, $item, $itemsElse, $titlesElse);
    };
  };
};

Accordion.classNames = {
  wrap: 'js-accordion',
  title: 'js-accordion-title',
  content: 'js-accordion-content'
};


export default function setAccordion() {
  const SLIDE_DURATION = 400;

  const accordion = new Accordion();
  accordion.onToggle = (title, $item, $itemsElse, $titlesElse) => {
    $item.slideToggle(SLIDE_DURATION);
    setTimeout(setHeight, SLIDE_DURATION);

    const $orderItem = $item.closest('.orders-item');
    if (!$orderItem.length) return;

    $orderItem.toggleClass(ACTIVE);
  };
  accordion.init();
};
