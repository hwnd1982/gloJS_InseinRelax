import "regenerator-runtime/runtime";
import "./styles/index.css";

const
  warning = document.querySelectorAll('.text-warning'),
  name = document.getElementById('name'),
  button = document.querySelector('.button'),
  password = document.getElementById('password'),
  setCookie = (name, value, year, month, day, path, domain, secure) => {
    document.cookie = `${name}=${value}; ${
      year ? 'expires=' + new Date(year, month, day).toGMTString() : ''}; ${
      path ? '; path' + path : ''}${
      domain ? '; domain' + domain : ''}${
      secure ? '; secure' + secure : ''}`;
  },
  cookieState = () => Object.assign(...document.cookie.split('; ').map(item => {
    const obj = {};

    obj[item.split('=')[0]] = item.split('=')[1];
    return obj;
  })),
  deleteCookie = name => {
    setCookie(name, "", {
      'max-age': -1
    });
  },
  getData = async () => {
    const response = await fetch('http://localhost:3000/api/items', {
      method: 'GET',
      mode: 'cors'
    });

    return await response.json();
  };

if (location.pathname === '/admin/') {
  warning.forEach(item => item.style.display = 'none');
  button.addEventListener('click', event => {
    event.preventDefault();
    console.log(name.value, password.value);
    if (name.value === 'admin' && password.value === '123') {
      setCookie(name.value, true);
      location = './table.html';
      console.log(cookieState());
    } else {
      deleteCookie('admin');
    }
    name.value = '';
    password.value = '';
  });
}

(async () => {
  console.log(await getData());
})();

