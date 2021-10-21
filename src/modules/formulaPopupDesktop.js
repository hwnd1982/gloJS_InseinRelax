const formulaPopupDesktop = () => {
  const
    togglePopup = ({ target }) => {
      const item = target.closest('.formula-item__icon');

      if (!item || target.closest('.formula-slider__slide')) return;

      let visible = 0;
      item.classList.toggle('visible');
      visible = item.classList.contains('visible') ? 1 : 0;
      item.querySelector('.formula-item-popup').style.cssText =
        `opacity: ${visible}; visibility: ${visible ? 'visible' : 'hidden'};`;
      item.querySelector('.formula-item__icon-inner').style.cssText =  `opacity: ${visible};`;
    };

  document.querySelector('.formula').addEventListener('mouseover', togglePopup);
  document.querySelector('.formula').addEventListener('mouseout', togglePopup);
};

export default formulaPopupDesktop;
