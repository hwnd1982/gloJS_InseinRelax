const headerContactsAccord = () => {
  document.querySelector(".header-contacts__arrow")
    .addEventListener("click", event => {
      const phoneNumberAccord = document.querySelector(
        ".header-contacts__phone-number-accord"
      );
      if (phoneNumberAccord) {
        phoneNumberAccord.style.position = "relative";
        phoneNumberAccord.firstElementChild.style.opacity = 1;
        event.currentTarget.style.opacity = 0;
      }
    });
};

export default headerContactsAccord;
