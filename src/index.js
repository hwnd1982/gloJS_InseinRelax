import "regenerator-runtime/runtime";
import './css/style.css';
import headerContactsAccord from './modules/headerContactsAccord';
import burgerMenu from './modules/burgerMenu';
import popupControl from './modules/popupControl';
import maskPhone from './modules/maskPhone';
import formulaPopupDesktop from './modules/formulaPopupDesktop';
import SliderCarousel from './modules/SliderCarousel';
import {
  transparencySliderStyles,
  repairTypesSliderStyles,
  mobilePortfolioSliderStyles,
  portfolioSliderStyles
} from './modules/sliderStyles';
import { addHighlightStyle, removeHighlightStyle } from './modules/formulaPopupSlider';
import sendForm from './modules/sendForm';
import { errorMassage, loadMessage } from './modules/messageSendForm';
import successMessage from './modules/successMessage';
import faqAccordion from './modules/faqAccordion';
import { setTransparencyPosition, setPortfolioPosition } from './modules/setSlidersPosition';
import repairTypesControl from './modules/repairTypesControl';
import dataHandlerPopupRepairTypes from './modules/dataHandlerPopupRepairTypes';
import formInputHandler from './modules/formInputHandler';

// Phone List Active
headerContactsAccord();
// Burger Menu Active
burgerMenu();
// Popup Repair Types Active
popupControl();
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
// Send Form
sendForm(loadMessage, successMessage, errorMassage);
// FAQ Accordion (undefined: Maximize & Minimize All, true: Single Minimize All, false: Single)
faqAccordion(false);
// Reviews Slider
const reviewsSlider = new SliderCarousel({
  wrap: '.reviews-slider',
  prev: '#reviews-arrow_left',
  next: '#reviews-arrow_right',
  dotsList: '.slider-dots-reviews',
  position: 1,
  pagination: true,
  slidesToShow: 1,
});
reviewsSlider.init();
// Transparency Slider
const transparencySlider = new SliderCarousel({
  wrap: '.transparency-slider',
  prev: '#transparency-arrow_left',
  next: '#transparency-arrow_right',
  style: transparencySliderStyles,
  position: 0,
  slidesToShow: 3,
  resetDefault: true,
  responsive: [
    {
      breakpoint: 1090,
      slidesToShow: 1
    },
  ]
});
transparencySlider.init();
//Popup Transparency Slider
const popupTransparencySlider = new SliderCarousel({
  wrap: '.popup-transparency-slider',
  prev: '#transparency_left',
  next: '#transparency_right',
  style: transparencySliderStyles,
  slideCounter: '#transparency-popup-counter',
  currentCount: '.slider-counter-content__current',
  totalCount: '.slider-counter-content__total',
  position: 0,
  slidesToShow: 1,
});
popupTransparencySlider.init();
setTransparencyPosition(popupTransparencySlider);
// Repair Types Control
repairTypesControl(SliderCarousel, repairTypesSliderStyles);
// Popup Portfolio Slider
const popupPortfolioSlider = new SliderCarousel({
  wrap: '.popup-portfolio-slider',
  prev: '#popup_portfolio_left',
  next: '#popup_portfolio_right',
  slideCounter: '#popup-portfolio-counter',
  currentCount: '.slider-counter-content__current',
  totalCount: '.slider-counter-content__total',
  position: 0,
  slidesToShow: 1,
});
popupPortfolioSlider.init();
setPortfolioPosition(popupPortfolioSlider);
// Portfolio Slider
const portfolioSlider = new SliderCarousel({
  wrap: '.portfolio-slider',
  prev: '#portfolio-arrow_left',
  next: '#portfolio-arrow_right',
  style: portfolioSliderStyles,
  position: 0,
  px: 352,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1140,
      slidesToShow: 2
    },
    {
      breakpoint: 900,
      slidesToShow: 1
    },
  ]
});
portfolioSlider.init();
// Mobile Portfolio Slider
const mobilePortfolioSlider = new SliderCarousel({
  wrap: '.portfolio-slider-mobile',
  prev: '#portfolio-arrow-mobile_left',
  next: '#portfolio-arrow-mobile_right',
  slideCounter: '#portfolio-counter',
  style: mobilePortfolioSliderStyles,
  currentCount: '.slider-counter-content__current',
  totalCount: '.slider-counter-content__total',
  position: 0,
  slidesToShow: 1,
});
mobilePortfolioSlider.init();
// Data Handler Popup Repair Types
dataHandlerPopupRepairTypes();
// formInputHandler
formInputHandler();
