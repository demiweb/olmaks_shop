import Popup from 'popup-simple';
import '../lib/js-cloudimage-360-view';

class MyPopup extends Popup {
  constructor() {
    super();
    this.spinnerSource = null;
  }
  onOpen() {
    if (this.name === 'gallery') {
      if (this.spinnerInited) return;

      this.gallery = this.btn.closest('.js-model-gallery-slider');
      this.spinner = this.popup.querySelector('.js-spinner');
      if(!this.gallery || !this.spinner) return;

      this.spinnerSource = this.gallery.dataset.imageList;
      this.spinner.setAttribute('data-image-list', this.spinnerSource);

      window.CI360.init();
      this.spinnerInited = true;      
    }
  }

  // onClose() {
  //   if(this.name === 'gallery') {
  //     // this.setSpinner('destroy');
  //   }
  // }
}

export default function setPopups() {
  const popup = new MyPopup();
  popup.init();
}


