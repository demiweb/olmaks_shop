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
    this.step = 1;
    this.iteration = 0;
    this.iterationsNumber = 9;
    this.dragDisable = true;
  }

  initDrag() {
    this.draggie = new Draggabilly(this.$imgWrap[0], {
      // containment: this.$wrap[0]
    });

    // this.draggie.on( 'dragMove', (event, pointer, moveVector) => {
    //   console.log( this.draggie.position.x);
    // });
  }

  disableDrag() {
    this.draggie.destroy();
    this.dragDisable = true;
  }

  scale(state, e) {
    if(this.iteration > this.iterationsNumber && state === 'plus') return;
    if(this.iteration < 0 ) return;

    e.preventDefault();
    this.$btn = $(e.currentTarget);
    this.$wrap = this.$btn.closest('.js-scale-container');
    this.$img = this.$wrap.find('img[data-loaded="true"]');
    this.$imgWrap = this.$wrap.find('.js-scale-img-wrap');

    if (this.dragDisable) {
      this.initDrag();
      this.dragDisable = false;
    }

    if (state === 'plus') {
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

  };

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
  }
}

export default function scaleImg() {
  const $imgContainer = $('.js-scale-container');
  if(!$imgContainer.length) return;

  window.onload = () => {
    const zoom = new Zoom($imgContainer);
    zoom.init();
  };  
}
