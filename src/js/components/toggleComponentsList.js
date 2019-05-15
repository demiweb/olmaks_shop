import { $DOC, ACTIVE } from '../constants';

export default function toggleComponentsList() {
  const btn = 'js-toggle-components';

  $DOC.on('click', '.'+btn, (e) => {
    e.preventDefault();
    const $list = $(e.currentTarget).closest('.components').find('.js-components-list');

    if (!$list.length) return;

    $(e.currentTarget).toggleClass(ACTIVE);
    $list.slideToggle();
  });

};
