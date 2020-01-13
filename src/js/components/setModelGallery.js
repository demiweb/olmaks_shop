import Swiper from 'swiper/js/swiper';
import setLazy from './lazyLoading.js';

export default () => {
  const gallery = {
    top: document.querySelector('.js-model-gallery-slider'),
    thumbs: document.querySelector('.js-model-gallery-thumbs')
  };
  if(!gallery.top || !gallery.thumbs) return;
  const $galleryTopWrap = $(gallery.top).closest('.model-gallery__slider');
  const navigation = {
    nextEl: $galleryTopWrap.find('.js-model-gallery-next')[0],
    prevEl: $galleryTopWrap.find('.js-model-gallery-prev')[0]
  };


  const galleryThumbs = new Swiper(gallery.thumbs, {
    slidesPerView: 4,
    on: {
      init: setLazy,
    },
    spaceBetween: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  const galleryTop = new Swiper(gallery.top, {
    navigation,
    on: {
      init: setLazy,
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
};
