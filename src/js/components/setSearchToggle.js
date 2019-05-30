import { debounce } from 'throttle-debounce';
import { $WIN, $DOC, ACTIVE } from '../constants';

export default function setSearchToggle() {
  const $inputs = $('.js-search-input');
  if (!$inputs.length) return;

  function setWidth() {
    $inputs.each((i, input) => {
      const $parent = $(input).parent();

      const $container = $(input).closest('.container').length ? $(input).closest('.container') : $(input).closest('.header');
      const $header = $(input).closest('.header');
      const $logo =  $header.find('.logo');
      const $burger = $header.find('.header__burger');

      const rightOffset = $burger.css('display') === 'none'
        ? $parent.width() + $parent.siblings('.lang').width()
        : $parent.width() + $parent.siblings('.lang').width() + $burger.width();
      const leftOffset = $logo.width();
      const containerWidth = $container.width();
      const width = containerWidth - rightOffset - leftOffset + 'px';
      
      input.style.setProperty('--width', width);
    });
  };

  setTimeout(setWidth, 66);

  const setWidthDebounced = debounce(66, setWidth);

  $WIN.on('resize', setWidthDebounced);

  function toggleSearch() {
    const btn = 'js-search';

    $DOC.on('click', `.${btn}`, (e) => {
      e.preventDefault();
      const $search = $(e.currentTarget).siblings('.js-search-input');
      $search.toggleClass(ACTIVE);
    });
  };

  toggleSearch();
};
