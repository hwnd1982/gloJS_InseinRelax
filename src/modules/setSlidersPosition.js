const setTransparencyPosition = slider => {
  const transparency = document.getElementById('transparency');

  transparency.addEventListener('click', ({ target }) => {
    if (target.closest('.transparency-item__img')) {
      const
        targetItem = target.closest('.transparency-item'),
        items = transparency.querySelectorAll('.transparency-item');

      items.forEach((item, index) => {
        if (item === targetItem) {
          slider.options.position = index;
          slider.setStartPosition();
          slider.resetSlider();
          slider.setSlideCounter();
        }
      });
    }
  });
};

const setPortfolioPosition = slider => {
  let indexLast = 0;
  const
    portfolio = document.getElementById('portfolio'),
    slideFrameList = [...portfolio.querySelectorAll('.portfolio-slider__slide-frame')],
    popupPortfolioTextList = [...document.querySelectorAll('.popup-portfolio-text')],
    nextPopupBtn = document.getElementById('popup_portfolio_right'),
    prevPopupBtn = document.getElementById('popup_portfolio_left'),
    showText = indexCurrent => {
      popupPortfolioTextList[indexLast].style.display = 'none';
      popupPortfolioTextList[indexCurrent].style.display = 'flex';
      indexLast = indexCurrent;
    };

  portfolio.addEventListener('click', ({ target }) => {
    const item = target.closest('.portfolio-slider__slide-frame');

    if (item) {
      const indexCurrent = slideFrameList.indexOf(item) % (slideFrameList.length / 2);
      showText(indexCurrent);
      slider.options.position = indexCurrent;
      slider.setStartPosition();
      slider.resetSlider();
      slider.setSlideCounter();
    }
  });
  nextPopupBtn.addEventListener('click', () => showText(slider.options.position));
  prevPopupBtn.addEventListener('click', () => showText(slider.options.position));
};

export { setTransparencyPosition, setPortfolioPosition };
