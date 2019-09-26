const TOKEN_KEY = 'jwt';

export const setToken = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isTokenPresent = () =>
  localStorage.getItem(TOKEN_KEY) ? true : false;
