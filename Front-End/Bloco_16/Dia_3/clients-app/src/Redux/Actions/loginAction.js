export const LOGIN = 'LOGIN';
export const LOGIN_VALUE = 'LOGIN_VALUE';

export const setLogin = () => ({
  type: LOGIN,
  login: true
});

export const handleLogin = ({ name, value }) => ({
  type: LOGIN_VALUE,
  name,
  value,
});
