import '../lib/spritespin';

export default function rotateImage(action, source) {
  const $spinner = $('.js-spinner');
  if (!$spinner.length) return;

  if (action === 'destroy') {
    $spinner.spritespin('destroy');
    
  } else {
    $spinner.spritespin({
      source,
      sense: -1,
      animate: false,
      plugins: [
        '360',
        'drag'
      ]
    });
  }  
};
