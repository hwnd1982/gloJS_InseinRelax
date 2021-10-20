const
  smoothScrollOfLink = event => {
    const
      target = event.target.tagName === 'A' ? event.target : event.target.closest('a');
    if (target) {
      const
        href = target.getAttribute('href'),
        domRect = href !== '#' ? document.querySelector(href).getBoundingClientRect() : 0;

      event.preventDefault();
      scrollTo({ top: domRect ? domRect.top + window.pageYOffset : 0, behavior: "smooth" });
    }
  },
  burgerMenu = () => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');

    window.addEventListener('resize', () => {
      if (popupDialogMenu.style.transform !== 'translate3d(0px, 0px, 0px)') {
        popupDialogMenu.parentElement.append(popupDialogMenu);
        screen.width > 576 ?
          popupDialogMenu.style.transform = 'translate3d(555px, 0, 0)' :
          popupDialogMenu.style.transform = 'translate3d(0, -100vh, 0)';
      }
    });
    document.addEventListener('click', event => {
      const
        target = event.target;

      if (target.closest('.menu__icon')) {
        popupDialogMenu.style.transform = 'translate3d(0, 0, 0)';
      } else {
        if (!target.closest('.popup-dialog-menu') || target.matches('.close-menu, .menu-link')) {
          screen.width > 576 ?
            popupDialogMenu.style.transform = 'translate3d(555px, 0, 0)' :
            popupDialogMenu.style.transform = 'translate3d(0, -100vh, 0)';
          if (target.matches('.menu-link')) {
            smoothScrollOfLink(event);
          }
        }
        if (target.closest('.button-footer')) {
          smoothScrollOfLink(event);
        }
      }
    });
  };

export default burgerMenu;
