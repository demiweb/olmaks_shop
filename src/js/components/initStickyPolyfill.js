import Stickyfill from 'stickyfilljs';

export default function initStickyPolyfill() {
  const elements = document.querySelectorAll('.js-sticky-polyfill');
  Stickyfill.add(elements);
};
