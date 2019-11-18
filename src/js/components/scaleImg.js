import { $DOC } from '../constants';
import Draggabilly from 'draggabilly';

class Zoom {
  constructor($wrap) {
    this.$wrap = $wrap;
    this.$img = $wrap.find('img[data-loaded="true"]');
    this.$imgWrap = $wrap.find('.js-scale-img-wrap');
    this.btns = ['js-scale-plus', 'js-scale-minus'];
    this.resetBtn = 'js-scale-reset';
    this.index = 0;
    this.imgSize = {};
    this.step = 2;
    this.iteration = 0;
    this.iterationsNumber = 9;
    this.dragDisable = true;
    this.direction = undefined;
  }

  initDrag() {
    this.draggie = new Draggabilly(this.$imgWrap[0]);
  }

  disableDrag() {
    this.draggie.destroy();
    this.dragDisable = true;
  }

  scaleImg() {
    if (this.dragDisable) {
      this.initDrag();
      this.dragDisable = false;
    }

    if (this.direction > 0) {
      if(this.iteration > this.iterationsNumber) {
        this.iteration = this.iterationsNumber;

        this.index = this.index;
      } else {
        this.index += this.step;
        this.iteration += 1;
      }      
      
    } else {
      this.index -= this.step;
      this.iteration -= 1;

      
      if(this.index < 0) {
        this.index = 0;
        this.disableDrag();
      };
      if(this.iteration < 0) this.iteration = 0;
    }

    this.scaleNmb = 1 + (this.index/10);


    this.$img.css({
      transform: `scale(${this.scaleNmb})`
    });
  }

  scale(state, e) {
    console.log('handle click');
    if(this.iteration > this.iterationsNumber && state === 'plus') return;
    if(this.iteration < 0 ) return;

    e.preventDefault();
    this.$btn = $(e.currentTarget);
    this.$wrap = this.$btn.closest('.js-scale-container');
    this.$img = this.$wrap.find('img[data-loaded="true"]');
    this.$imgWrap = this.$wrap.find('.js-scale-img-wrap');
    this.direction = state === 'plus' ? 1 : -1;

    this.scaleImg();
  };

  handleMouseWheel(e) {
    const $wrap = $(e.target).closest('.js-scale-container');
    if(!$wrap.length) return;
    this.direction = e.deltaY > 0 ? 1 : -1;
    if(this.iteration > this.iterationsNumber && this.direction > 0) return;
    if(this.iteration < 0 ) return;

    e.preventDefault();
    this.scaleImg();
  }

  reset() {
    this.$img.css({
      transform: 'scale(1)'
    });

    this.disableDrag();
    
    this.index = 0;
    this.iteration = 0;    
  }

  init() {
    this.btns.forEach((btn, i) => {
      const state = i === 0 ? 'plus' : 'minus';
      $DOC.on('click', `.${btn}`, this.scale.bind(this, state));
    });

    $DOC.on('click', `.${this.resetBtn}`, this.reset.bind(this));

    window.addEventListener('wheel', this.handleMouseWheel.bind(this), { passive: false });
  }
}

export default function scaleImg() {
  const $imgContainer = $('.js-scale-container');
  if(!$imgContainer.length) return;

  const zoom = new Zoom($imgContainer);
  zoom.init();
}
