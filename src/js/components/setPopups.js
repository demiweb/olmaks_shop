import Popup from 'popup-simple';
import rotateImage from './rotateImage';

export default class MyPopup extends Popup {
  onOpen() {
    if (this.name === 'gallery') {   
      const { srcset } = this.btn.dataset;
      if(!srcset) return;
      
      const gallerySpinnerSrcset = srcset.split(',')
        .map(src => src.trim());

      rotateImage('init', gallerySpinnerSrcset);
    }
  }

  onClose() {
    if(this.name === 'gallery') {
      rotateImage('destroy');
    }
  }
}
