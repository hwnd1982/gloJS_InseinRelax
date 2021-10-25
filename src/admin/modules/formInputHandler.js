const formInputHandler = () => {
  document.addEventListener('input', ({ target }) => {
    if (!target.matches('input[name="name"], input[name="units"], input[name="cost"], input[name="type"]')) {
      return;
    } else {
      target.matches('input[name="type"]') ?
        target.value = target.value.replace(/[^а-яё\s:]+/gi, '') : null;
      target.matches('input[name="name"]') ?
        target.value = target.value.replace(/[^а-яё\w\s\d().,/'"]+/gi, '') : null;
      target.matches('input[name="units"]') ?
        target.value = target.value.replace(/[^а-яё\d.]+/g, '') : null;
      target.matches('input[name="cost"]') ? target.value = target.value.replace(/[^\d]+/g, '') : null;
    }
  });
  document.addEventListener('change', ({ target }) => {
    if (!target.matches('input[name="name"], input[name="units"], input[name="cost"], input[name="type"]')) {
      return;
    }
    target.value = target.value.replace(/([().,x/:.'"])(?=[().,/:.'"]*\1)/g, '')
      .replace(/([\s])(?=[\s]*\1)/g, '')
      .replace(/^([\s-]*)|([\s-]*)$/g, '');
  }, true);
};

export default formInputHandler;
