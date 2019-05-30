import { $DOC, ACTIVE } from '../constants';

export default function toggleHeroSearch() {
  const btn = 'js-toggle-hero-search';

  $DOC.on('click', `.${btn}`, (e) => {
    e.preventDefault();

    const $search = $(e.currentTarget).next('.js-search-fixed');

    $(e.currentTarget).toggleClass(ACTIVE);
    $search.slideToggle();    
  });
};
