import './css/style.css';
import headerContactsAccord from './modules/headerContactsAccord';
import burgerMenu from './modules/burgerMenu';
import popupRepairTypes from './modules/popupRepairTypes';
import maskPhone from './modules/maskPhone';
import formulaPopupDesktop from './modules/formulaPopupDesktop';
import SliderCarousel from './modules/SliderCarousel';
import { addHighlightStyle, removeHighlightStyle } from './modules/formulaPopupSlider';

// Phone List Active
headerContactsAccord();
// Burger Menu Active
burgerMenu();
// Popup Repair Types Active
popupRepairTypes();
// Mask Phone
maskPhone('input[name="phone"]');
// Formula Popup Desktop
formulaPopupDesktop();
// Formula Popup Slider
const formulaSlider = new SliderCarousel({
  main: '.formula-slider-wrap',
  wrap: '.formula-slider',
  prev: '#formula-arrow_left',
  next: '#formula-arrow_right',
  loop: true,
  showCenter: [addHighlightStyle, removeHighlightStyle],
  autoplay: true,
  time: 5000,
  position: -1,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      slidesToShow: 1
    },
  ]
});
formulaSlider.init();
