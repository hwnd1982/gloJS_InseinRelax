import { setCookie, deleteCookie } from './cookieHandler';

const loginHeandler = () => {
  const
    warning = document.querySelectorAll('.text-warning'),
    name = document.getElementById('name'),
    button = document.querySelector('.button'),
    password = document.getElementById('password');

  warning.forEach(item => item.style.display = 'none');
  button.addEventListener('click', event => {
    event.preventDefault();
    console.log(name.value, password.value);
    if (name.value === 'admin' && password.value === '123') {
      setCookie(name.value, true);
      location = './table.html';
    } else {
      deleteCookie('admin');
      warning.forEach(item => item.style.display = 'block');
    }
    name.value = '';
    password.value = '';
  });
};

export default loginHeandler;
