import { ACTIVE, $BODY, $DOC, NOSCROLL } from '../constants';

class Menu {
  constructor(burger) {
    this.burger = burger;
  };

  init() {
    $DOC.on('click', '.'+this.burger, this.toggle.bind(this));
  };

  toggle(e) {
    e.preventDefault();

    const name = e.currentTarget.getAttribute('data-target');
    const $menu = $(`.js-menu[data-menu="${name}"]`);

    $(e.currentTarget).toggleClass(ACTIVE);
    $menu.toggleClass(ACTIVE);
    $BODY.toggleClass(NOSCROLL);

    if (this.onToggle) {
      this.onToggle(e.currentTarget, $menu);
    }
  };
};

export default function toggleMenu() {
  const burger = 'js-burger';

  const menuToggle = new Menu(burger);
  menuToggle.onToggle = (burger, $menu) => {
    if ($menu.hasClass('aside-nav')) {
      $BODY.removeClass(NOSCROLL);
      $menu.slideToggle();
    };
  };
  menuToggle.init();
};
