const
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
  };

export { setCookie, cookieState, deleteCookie };
