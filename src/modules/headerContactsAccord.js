const headerContactsAccord = () => {
  document.querySelector(".header-contacts__arrow")
    .addEventListener("click", event => {
      const phoneNumberAccord = document.querySelector(
        ".header-contacts__phone-number-accord"
      );
      if (phoneNumberAccord) {
        event.currentTarget.classList.toggle('phone-number-accord-show');
        if (event.currentTarget.classList.contains('phone-number-accord-show')) {
          setTimeout((() => phoneNumberAccord.style.position = "absolute"), 500);
          phoneNumberAccord.firstElementChild.style.opacity = 0;
          event.currentTarget.firstElementChild.style.cssText = '';
        } else {
          phoneNumberAccord.style.position = "relative";
          phoneNumberAccord.firstElementChild.style.opacity = 1;
          event.currentTarget.firstElementChild.style.cssText = 'transform: translate(0, 30px) rotate(180deg)';
        }
      }
    });
};

export default headerContactsAccord;
