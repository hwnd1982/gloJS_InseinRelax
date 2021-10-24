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

const repairTypesSliderStyles = (example, widthSlide) => {
  const style =  document.getElementById(`glo-${example}-slider-style`) || document.createElement('style');

  style.id = `glo-${example}-slider-style`;
  document.body.append(style);
  style.textContent =
    ` .glo-${example}-slider {
        overflow: hidden !important;
        position: relative !important;
      }
      .glo-${example}-slider__wrap {
        position: absolute !important;
        display: flex !important;
        width: 100% !important;
        transition: 0.5s !important;
        will-change: opacity, transform !important;
        overflow: initial !important;
        opacity: 0;
      }
      .glo-${example}-slider__wrap.active-slider {
        opacity: 1;
      }
      .glo-${example}-slider__wrap.glo-${example}-slider__wrap_slave {
        position: absolute !important;
        top: 0 !important;
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

const mobilePortfolioSliderStyles = (example, widthSlide) => {
  const style =  document.getElementById(`glo-${example}-slider-style`) || document.createElement('style');

  style.id = `glo-${example}-slider-style`;
  document.body.append(style);
  style.textContent =
    ` @media (max-width: 575px) {
        .glo-${example}-slider {
          overflow: hidden !important;
          position: relative !important;
          border-radius: 20px;
          height: 210px;
        }
        .glo-${example}-slider__wrap {
          position: absolute !important;
          display: flex !important;
          width: 100% !important;
          transition: 0.5s !important;
          will-change: opacity, transform !important;
          overflow: initial !important;
        }
        .glo-${example}-slider__wrap.active-slider {
          opacity: 1;
        }
        .glo-${example}-slider__wrap.glo-${example}-slider__wrap_slave {
          position: absolute !important;
          top: 0 !important;
        }
        .glo-${example}-slider__item {
          display: flex !important;
          flex: 0 0 ${widthSlide}% !important;
          position: static !important;
          transform: translate(0, 0) !important;
          width: 100% !important;
          transition: none !important;
          justify-content: flex-start !important;
        }
      }`;
};

const portfolioSliderStyles = (example, widthSlide) => {
  const style =  document.getElementById(`glo-${example}-slider-style`) || document.createElement('style');

  style.id = `glo-${example}-slider-style`;
  document.body.append(style);
  style.textContent =
    ` .glo-${example}-slider {
        overflow: hidden !important;
        position: relative !important;
        width: 1056px !important;
        border-radius: 20px !important;
        margin-left: auto;
        margin-right: auto;
      }
      .glo-${example}-slider__wrap {
        position: relative !important;
        width: 100% !important;
        transition: 0.5s !important;
        will-change: opacity, transform !important;
        overflow: initial !important;
      }
      .glo-${example}-slider__item {
        display: flex !important;
        flex: 0 0 ${widthSlide}px !important;
      }
      @media (max-width: 1140px) {
        .glo-${example}-slider {
          width: 704px !important;
        }
      }
      @media (max-width: 900px) {
        .glo-${example}-slider {
          width: 352px !important;
        }
      }
      @media (max-width: 575px) {
        .glo-${example}-slider__buttons {
          display: none !important;
        }
      }`;
};

export { transparencySliderStyles, repairTypesSliderStyles, mobilePortfolioSliderStyles, portfolioSliderStyles };
