const faqAccordion = minimizeAll => {
  const accordion = document.querySelector('.accordion');

  accordion.addEventListener('click', ({ target }) => {
    if (target.matches('.title_block')) {
      if (minimizeAll === undefined) {
        target.classList.toggle('msg-active');
      } else {
        const active = accordion.querySelector('.msg-active');

        if (active) active.classList.remove('msg-active');
        if (!(minimizeAll && active === target)) {
          target.classList.add('msg-active');
        }
      }
    }
  });
};

export default faqAccordion;
