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

export { setTransparencyPosition };
