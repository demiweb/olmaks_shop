import Popup from 'popup-simple';
import '../lib/spritespin';


export default class MyPopup extends Popup {
  setSpinner(action, source) {
    const $spinner = $(this.popup).find('.js-spinner');
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
  }

  onOpen() {
    if (this.name === 'gallery') {   
      const { srcset } = this.btn.dataset;
      if(!srcset) return;
      
      const gallerySpinnerSrcset = srcset.split(',')
        .map(src => src.trim());

      this.setSpinner('init', gallerySpinnerSrcset);
    }
  }

  onClose() {
    if(this.name === 'gallery') {
      this.setSpinner('destroy');
    }
  }
}
