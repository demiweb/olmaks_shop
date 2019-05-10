import { debounce } from 'throttle-debounce';
import { $WIN } from '../constants';

export default function setSearchPanelHeight() {
  function setheight() {
    const $panel = $('.js-search-fixed');
    if (!$panel.length) return;

    const $content = $panel.find('.search__content');

    if (window.matchMedia('(min-width: 1200px)').matches) {
      $content.css({
        height: ''
      });
      return;
    };
    
    const $items = $panel.find('.search__block');
    if ($items.lenght <= 1) return;
    
    const contentPadding = parseInt($content.css('padding-top')) + parseInt($content.css('padding-bottom'));
    let heights = [];

    $items.each((i, item) => {
      heights.push($(item).outerHeight(true));
    });

    const height = Math.max.apply(null, heights) + contentPadding;

    $content.css({
      height: height + 'px'
    });
  };

  const setHeightDebounced = debounce(66, setheight);

  setheight();
  $WIN.on('resize', setHeightDebounced);
};
