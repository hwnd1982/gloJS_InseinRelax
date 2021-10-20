const popupRepairTypes = () => {
  document.addEventListener('click', event => {
    const
      target = event.target,
      popup = document.querySelector('.popup-repair-types');

    if (target.matches('.link-list>a')) {
      popup.style.visibility = 'visible';
    }
    if (target.matches('.popup-repair-types>.close')) {
      popup.style.visibility = 'hidden';
    }
  });
};

export default popupRepairTypes;
