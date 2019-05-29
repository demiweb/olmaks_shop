import Ellipsity from '../lib/truncate';
import { debounce } from 'throttle-debounce';
import { $WIN } from '../constants';

export default function truncateText() {
  const blocks = [].slice.call(document.querySelectorAll('.js-truncate-text'));

  blocks.forEach((block) => {
    const text = block.innerText;
    block.innerHTML = `<p>${text}</p>`;

    const ellipsity = new Ellipsity({
      container: block
    });
    ellipsity.init();

    const truncate = (e) => {
      block.innerHTML = `<p>${text}</p>`;
      ellipsity.init();
    };

    const truncateDebounced = debounce(300, truncate);

    $WIN.on('resize', truncateDebounced);
  });

};
