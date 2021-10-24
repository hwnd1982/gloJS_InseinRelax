const formInputHandler = () => {
  document.addEventListener('input', ({ target }) => {
    if (!target.matches('input[name="name"], input[name="phone"]')) {
      return;
    } else {
      if (target.matches('input[name="name"]')) {
        target.value = target.value.replace(/[^а-яё\s]+/gi, '');
        if (target.classList.contains('invalid')) {
          if (target.value.length < 2) {
            if (target.previousElementSibling) {
              target.previousElementSibling.innerHTML =
                `
                  <sup>*</sup>
                  Не меньше 2х букв...
                `;
            }
          } else {
            target.classList.remove('invalid');
            if (target.previousElementSibling) {
              target.previousElementSibling.innerHTML =
                `
                  <sup>*</sup>
                  Введите ваше имя:
                `;
              target.previousElementSibling.style.color = '';
              target.previousElementSibling.style.borderBottom = '';
            }
          }
        }
      }
      if (target.matches('input[name="phone"]')) {
        if (target.classList.contains('invalid')) {
          if (target.value.trim().length < 18) {
            if (target.previousElementSibling) {
              target.previousElementSibling.innerHTML =
                `
                  <sup>*</sup>
                  Не верный формат...
                `;
            }
          } else {
            target.classList.remove('invalid');
            if (target.previousElementSibling) {
              target.previousElementSibling.innerHTML =
                `
                  <sup>*</sup>
                  Введите ваш номер:
                `;
              target.previousElementSibling.style.color = '';
              target.previousElementSibling.style.borderBottom = '';
            }
          }
        }
      }
    }
  });
  document.addEventListener('change', ({ target }) => {
    if (!target.matches('input[name="name"], input.checkbox__input')) {
      return;
    }
    if (target.matches('input[name="name"]')) {
      target.value = target.value.replace(/([-()@_.!~*'])(?=[-()@_.!~*']*\1)/g, '')
        .replace(/([\s])(?=[\s]*\1)/g, '')
        .replace(/^([\s-]*)|([\s-]*)$/g, '')
        .replace(/[^-\s]+/gi, str => str[0].toUpperCase() + str.slice(1).toLowerCase());
    }
    if (target.matches('input.checkbox__input')) {
      const checkBtn = target.closest('input.checkbox__input');

      if (target.closest('input.checkbox__input:checked')) {
        checkBtn.nextElementSibling.style.border = '';
        checkBtn.classList.remove('invalid');
      }
    }
  }, true);
};

export default formInputHandler;
