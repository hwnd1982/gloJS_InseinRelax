const popupControl = () => {
  document.addEventListener('click', ({ target }) => {
    if (target.matches('.link-list>a')) {
      document.querySelector('.popup-repair-types').style.visibility = 'visible';
    }
    if (target.matches('.link-privacy')) {
      document.querySelector('.popup-privacy').style.visibility = 'visible';
    }
    if (target.matches('.close') && target.closest('.popup')) {
      const popup = target.closest('.popup');
      if (!popup.matches('.popup-dialog-menu'))
        popup.style.visibility = 'hidden';
    }
  });
};

export default popupControl;
