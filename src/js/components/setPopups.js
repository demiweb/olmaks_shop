import Popup from 'popup-simple';

export default function setPopups() {
  const popup = new Popup();
  popup.onOpen = () => {
    if (popup.name === 'gallery' && !popup.spinnerInited) {
      window.CI360.init();
      popup.spinnerInited = true;      
    }
  };
  popup.init();
}


// export default class MyPopup extends Popup {

//   onOpen() {
//     if (this.name === 'gallery') {
//       this.gallery = this.btn.closest('.js-model-gallery-slider');
//       if(!this.gallery) return;

//       // const { srcset } = this.gallery.dataset;
//       // if(!srcset) return;
      
//       // this.spinnerSourse = srcset.split(',')
//       //   .map(src => src.trim());
//       // this.spinnerSourse.join(',');


//       console.log(this.spinnerSourse);
        


//       // this.spinner = this.popup.querySelector('.js-spinner');
//       // this.spinner.setAttribute('data-image-list', `[${this.spinnerSourse}]`);

//       // window.CI360.init();

//       // console.log(this.spinnerSourse);
        

//       // this.setSpinner('init', gallerySpinnerSrcset);
//     }
//   }

//   onClose() {
//     if(this.name === 'gallery') {
//       // this.setSpinner('destroy');
//     }
//   }
// }
