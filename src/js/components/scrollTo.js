import { $DOC, $HTMLBODY, ACTIVE } from '../constants';

export default function scrollTo() {
  const btn = 'js-scroll-to-btn';

  $DOC.on('click', `.${btn}`, (e) => {
    e.preventDefault();
    const id = $(e.currentTarget).attr('href');
    const $target = $(id);
    const $btns = $(e.currentTarget).closest('.nav').find(`.${btn}`);

    let panelHeight;

    if ($('.js-cabinet-nav').length && window.matchMedia('(min-width: 992px)').matches) {
      panelHeight = $('.js-cabinet-nav').outerHeight(true);
    } else {
      panelHeight = 0;
    }

    const OFFSET = panelHeight ? panelHeight : 0;

    $btns.removeClass(ACTIVE);
    $(e.currentTarget).addClass(ACTIVE);
    $HTMLBODY.animate({
      scrollTop: $target.offset().top - OFFSET
    }, 800);
  });
};
