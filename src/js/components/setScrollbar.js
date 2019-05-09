import PerfectScrollbar from 'perfect-scrollbar';

export default function setScrollbar() {
  const $containers = $('.js-scrollbar');

  $containers.each((i, container) => {
    const ps = new PerfectScrollbar(container);
  });
};
