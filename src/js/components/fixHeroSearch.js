import { throttle, debounce } from 'throttle-debounce';
import { $WIN, FIXED } from '../constants';
import isTouch from '../lib/detectTouch';

class SearchPanel {
  constructor() {
    this.$search = $('.js-search-fixed');
    this.OFFSET = this.$search.offset().top - parseInt(this.$search.css('margin-top'));
    this.$close = this.$search.find('.js-search-fixed-close');
  };

  init() {
    if (this.return()) {
      this.destroy();
      return;
    };
    this._fixSearchPanel();
    this._close();
  };

  return() {
    if (isTouch() || window.matchMedia('(max-width: 1199px)').matches || !this.$search.length) {
      return true;
    };
  };

  fixPanel(e) {
    const pageY = window.pageYOffset;    
    const searchMarginTop = parseInt(this.$search.css('margin-top'));
    const searchTop = this.$search.offset().top - searchMarginTop;
    if (pageY >= searchTop) {
      this.$search.addClass(FIXED);
    };

    if (pageY < this.OFFSET) {
      this.$search.removeClass(FIXED);
    };
  };

  destroy() {
    this.$search.removeClass(FIXED);
    $WIN.off('scroll', this.fixSearchThrottled);
  };

  _fixSearchPanel() {
    this.fixPanelBinded = this.fixPanel.bind(this);
    this.fixSearchThrottled = throttle(66, this.fixPanelBinded);

    $WIN.on('scroll', this.fixSearchThrottled);
  };

  _close() {
    this.$close.on('click', (e) => {
      e.preventDefault();
      this.destroy();
    });
  };
};

export default function fixHeroSearch() {
  function fixPanel() {
    const panel = new SearchPanel();
    panel.init();
  };

  const fixPanelDebounced = debounce(66, fixPanel);

  fixPanel();
  $WIN.on('resize', fixPanelDebounced);  
};
