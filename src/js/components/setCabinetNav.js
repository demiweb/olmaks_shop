import { $WIN, ACTIVE } from '../constants';
import { throttle } from 'throttle-debounce';

export default function setCabinetNav() {
  const panel = document.querySelector('.js-cabinet-nav');

  if (!panel) return;

  function toggleLinkActive() {
    const windowTop = window.pageYOffset;
    const links = [].slice.call(panel.querySelectorAll('a'));
    const OFFSET = panel.offsetHeight;

    links.forEach((link) => {
      const id = link.getAttribute('href');
      const section = document.querySelector(id);
      const sectionTop = section.offsetTop - OFFSET;
      if (windowTop >= sectionTop) {
        links.forEach((link) => { link.classList.remove(ACTIVE); });
        link.classList.add(ACTIVE);
      };
    });

  };

  const toggleLinkActiveThrottled = throttle(66, toggleLinkActive);
  
  window.addEventListener('scroll', toggleLinkActiveThrottled);
};
