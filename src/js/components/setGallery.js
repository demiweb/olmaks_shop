import { ACTIVE } from '../constants';

export default function setGallery(argument) {
  const $gallery = $('.js-gallery');

  if (!$gallery.length) return;

  const $thumbs = $gallery.find('.js-gallery-thumb');
  const $imgs = $gallery.find('.js-gallery-img');

  $thumbs.on('click', (e) => {
    e.preventDefault();

    const index = e.currentTarget.getAttribute('data-img-target');
    const $target = $gallery.find(`.js-gallery-img[data-index="${index}"]`);

    console.log($target, index);

    $thumbs.removeClass(ACTIVE);
    $imgs.removeClass(ACTIVE);

    $(e.currentTarget).addClass(ACTIVE);
    $target.addClass(ACTIVE);
  });
}
