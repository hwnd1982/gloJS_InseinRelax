const formulaPopupDesktop = () => {
  const
    positionPopup = target => {
      const
        popup = target.querySelector('.formula-item-popup'),
        popupPosition = popup.getBoundingClientRect();
      if (!popup.classList.contains('inverted')) {
        if (popupPosition.top < 10) popup.classList.add('inverted');
      } else {
        if (popupPosition.top > popupPosition.height + 100) popup.classList.remove('inverted');
      }
    },
    togglePopup = ({ target }) => {
      const
        item = target.closest('.formula-item__icon'),
        popup = item ? item.querySelector('.formula-item-popup') : null;

      if (!item || target.closest('.formula-slider__slide')) return;

      let visible = 0;
      item.classList.toggle('visible');
      item.classList.toggle('visible-formula-item-popup');
      visible = item.classList.contains('visible') ? 1 : 0;
      item.parentElement.style.cssText = `z-index: ${visible}`;
      positionPopup(item);
      popup.style.cssText =
        `opacity: ${visible}; visibility: ${visible ? 'visible' : 'hidden'};`;
      item.querySelector('.formula-item__icon-inner').style.cssText =  `opacity: ${visible};`;
    };

  document.querySelector('.formula').addEventListener('mouseover', togglePopup);
  document.querySelector('.formula').addEventListener('mouseout', togglePopup);
  window.addEventListener('scroll', () => {
    const item = document.querySelector('.visible-formula-item-popup');
    if (item) positionPopup(item);
  });
};

export default formulaPopupDesktop;
