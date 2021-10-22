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
    const form = event.target;

    event.preventDefault();
    if (checkFormData(form)) return;

    const
      formData = new FormData(form),
      body = {};
    let dataValidation = true, focusInput = false;

    formData.forEach((value, key) => {
      if (!value.trim()) dataValidation = false;
      if (!dataValidation && !focusInput) {
        form.querySelector(`input[name="${key}"]`).focus();
        focusInput = true;
      }
      body[key] = value;
    });
    if (!dataValidation) return;

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
