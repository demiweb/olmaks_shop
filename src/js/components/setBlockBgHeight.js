import { debounce } from 'throttle-debounce';
import { $WIN } from '../constants';

const $block = $('.js-bg-block');

export function setHeight() {  
  if(!$block.length) return;

  const $blockBg = $block.find('.components__table-bg');
  const $parentWrap = $block.closest('.components');
  const $topBlock = $parentWrap.find('.components__img');
  const SECTION_PADDING = parseInt($parentWrap.closest('.section').css('padding-bottom'));
  const height = $parentWrap.height() - $topBlock.outerHeight(true) + SECTION_PADDING;

  if (window.matchMedia('(max-width: 991px)').matches) {
    $blockBg.css({
      height: ''
    });
    return;
  };

  $blockBg.css({
    height: height + 'px'
  });
};
 
export function setBlockBgHeight() {
  setHeight();

  const setheightDebounced = debounce(66, setHeight);
  $WIN.on('resize', setheightDebounced);
};
