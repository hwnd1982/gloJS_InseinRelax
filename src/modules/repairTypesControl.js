const repairTypesControl = (Slider, style) => {
  let position = 0, sum = 0;
  const
    repairTypes = document.querySelector('.repair-types'),
    navListRepair = repairTypes.querySelector('.nav-list-repair'),
    navItems = [...navListRepair.children],
    typesRepairItems = [...repairTypes.querySelector('.repair-types-slider').children],
    nextNavItems = document.getElementById('nav-arrow-repair-right_base'),
    prevNavItems = document.getElementById('nav-arrow-repair-left_base'),
    slidersLastPosition = [],
    sizesNavItems = [0],
    showHideArrow = () => {
      if (position === 0) prevNavItems.style.display = 'none';
      if (position === navItems.length - 1) nextNavItems.style.display = 'none';
      if (prevNavItems.style.display === 'none' && position > 0) prevNavItems.style.display = 'block';
      if (nextNavItems.style.display === 'none' && position < navItems.length - 1) nextNavItems.style.display = 'block';
    };

  showHideArrow();
  navItems.forEach((item, index) => {
    if (item.classList.contains('active')) typesRepairItems[index].classList.add('active-slider');
    slidersLastPosition.push(0);
    sum += item.offsetWidth + 10;
    sizesNavItems.push(sum);
  });

  const repairTypesSlider = new Slider({
    main: '.repair-types-slider',
    wrap: '.active-slider',
    prev: '#repair-types-arrow_left',
    next: '#repair-types-arrow_right',
    slideCounter: '#repair-counter',
    currentCount: '.slider-counter-content__current',
    totalCount: '.slider-counter-content__total',
    style,
    position,
    slidesToShow: 1,
  });
  repairTypesSlider.init();
  typesRepairItems.forEach(item => {
    repairTypesSlider.wrap = item;
    repairTypesSlider.slides = [...repairTypesSlider.wrap.children];
    repairTypesSlider.addGloClass();
  });
  repairTypesSlider.wrap = repairTypes.querySelector('.active-slider');
  repairTypesSlider.slides = [...repairTypesSlider.wrap.children];

  repairTypes.addEventListener('click', ({ target }) => {
    let repairTypesNavItem = target.closest('.repair-types-nav__item');

    if (target.matches('#nav-arrow-repair-right_base, #nav-arrow-repair-left_base')) {
      if (target.matches('#nav-arrow-repair-right_base')) {
        if (position < navItems.length - 1) ++position;
      } else {
        if (position > 0) --position;
      }
      repairTypesNavItem = navItems[position];
    }

    if (repairTypesNavItem) {
      if (!repairTypesNavItem.classList.contains('active')) {
        const
          indexCurrentItem = navItems.indexOf(repairTypes.querySelector('.active')),
          indexNewItem = navItems.indexOf(repairTypesNavItem);

        position = indexNewItem;
        if (innerWidth <= 1024) {
          navListRepair.style.transform = `translateX(${-sizesNavItems[position]}px)`;
          showHideArrow();
        }
        navItems[indexCurrentItem].classList.remove('active');
        typesRepairItems[indexCurrentItem].classList.remove('active-slider');
        repairTypesNavItem.classList.add('active');
        typesRepairItems[indexNewItem].classList.add('active-slider');

        slidersLastPosition[indexCurrentItem] = repairTypesSlider.options.position;
        repairTypesSlider.options.position = slidersLastPosition[indexNewItem];
        repairTypesSlider.wrap = repairTypes.querySelector('.active-slider');
        repairTypesSlider.slides = [...repairTypesSlider.wrap.children];
        repairTypesSlider.setStartPosition();
        repairTypesSlider.setSlideCounter();
      }
    }
  });
  window.addEventListener('resize', () => {
    if (innerWidth > 1024) {
      nextNavItems.style.display = '';
      prevNavItems.style.display = '';
      navListRepair.style.transform = '';
    } else {
      navListRepair.style.transform = `translateX(${-sizesNavItems[position]}px)`;
      showHideArrow();
    }
  });
};

export default repairTypesControl;
