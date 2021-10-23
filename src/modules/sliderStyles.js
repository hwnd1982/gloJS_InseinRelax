const transparencySliderStyles = (example, widthSlide) => {
  const style =  document.getElementById(`glo-${example}-slider-style`) || document.createElement('style');

  style.id = `glo-${example}-slider-style`;
  document.body.append(style);
  style.textContent =
    ` .glo-${example}-slider {
        display: flex !important;
        overflow: hidden !important;
      }
      .glo-${example}-slider__wrap {
        position: relative !important;
        display: flex !important;
        flex-wrap: nowrap !important;
        width: 100% !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
        overflow: initial !important;
      }
      .glo-${example}-slider__item {
        display: flex !important;
        flex: 0 0 ${widthSlide}% !important;
        position: static !important;
        transform: translate(0, 0) !important;
        width: 100% !important;
        transition: none !important;
        justify-content: flex-start !important;
      }`;
};

export { transparencySliderStyles };
