const sendForm = (
  loadMessage = 'Загрузка...',
  successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
  errorMassage = 'Что-то пошло не так...'
) => {
  let timerLifeOfStatusMessage;
  const
    hideStatusMessage = (form, statusMessage, time) => setTimeout(() => {
      statusMessage.style = '';
      statusMessage.textContent = '';
    }, time),
    clearForm = form => {
      [...form.elements].forEach(elem => {
        elem.value = '';
        if (elem.type === 'checkbox') elem.checked = false;
        elem.classList.remove('success');
      });
    },
    outputData = (response, form, statusMessage) => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      successMessage instanceof  Function ? successMessage() :
        statusMessage.innerHTML = successMessage;
      clearForm(form);
      timerLifeOfStatusMessage = hideStatusMessage(form, statusMessage, 0);
    },
    errorData = (form, statusMessage) => {
      statusMessage.innerHTML = errorMassage;
      timerLifeOfStatusMessage = hideStatusMessage(form, statusMessage, 3000);
    },
    postData = body =>
      fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include'
      }),
    checkFormData = form => !form.querySelector('input.checkbox__input:checked');

  document.body.addEventListener('submit', event => {
    const
      form = event.target,
      formData = new FormData(form),
      body = {};

    let dataValidation = true, focusInput = false;
    event.preventDefault();
    formData.forEach((value, key) => {
      const input = form.querySelector(`input[name="${key}"]`);

      if (key === 'name' && value.trim().length < 2) {
        dataValidation = false;
        input.classList.add('invalid');
        if (value.trim().length < 2 && value.trim()) {
          if (input.previousElementSibling) {
            input.previousElementSibling.innerHTML =
            `
              <sup>*</sup>
              Не меньше 2х букв...
            `;
          }
        }
        if (input.previousElementSibling) {
          input.previousElementSibling.style.color = 'rgb(244, 137, 34)';
          input.previousElementSibling.style.borderBottom = '1px solid';
        }
      }
      if (key === 'phone' && value.trim().length < 18) {
        dataValidation = false;
        input.classList.add('invalid');
        if (value.trim().length < 18 && value.trim()) {
          if (input.previousElementSibling) {
            input.previousElementSibling.innerHTML =
              `
                <sup>*</sup>
                Не верный формат...
              `;
          }
        }
        if (input.previousElementSibling) {
          input.previousElementSibling.style.color = 'rgb(244, 137, 34)';
          input.previousElementSibling.style.borderBottom = '1px solid';
        }
      }
      if (!dataValidation && !focusInput) {
        form.querySelector(`input[name="${key}"]`).focus();
        focusInput = true;
      }
      body[key] = value;
    });
    if (!dataValidation) return;
    if (checkFormData(form)) {
      const checkBtn = form.querySelector('input.checkbox__input');

      checkBtn.classList.add('invalid');
      checkBtn.nextElementSibling.style.border = '3px solid #f48922';
      return;
    }

    const statusMessage = form.appendChild(document.createElement('div'));

    statusMessage.style.cssText =
    ` 
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 150px;
    `;
    statusMessage.innerHTML = loadMessage;
    if (timerLifeOfStatusMessage) {
      clearTimeout(timerLifeOfStatusMessage);
    }
    postData(body)
      .then(response => outputData(response, form, statusMessage))
      .catch(() => errorData(form, statusMessage));
  });
};

export default sendForm;
