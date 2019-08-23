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

    this.btn = e.currentTarget;

    this.name = this.btn.getAttribute('data-target');
    this.$menu = $(`.js-menu[data-menu="${this.name}"]`);

    $(this.btn).toggleClass(ACTIVE);
    this.$menu.toggleClass(ACTIVE);
    $BODY.toggleClass(NOSCROLL);

    if (this.onToggle) {
      this.onToggle(this.btn, this.$menu);
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
