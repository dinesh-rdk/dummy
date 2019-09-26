const TOKEN = process.env.REACT_APP_LOCAL_STORAGE_TOKEN_NAME;

export const setToken = token => {
  localStorage.setItem(TOKEN, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN);
};

export const isTokenPresent = () =>
  localStorage.getItem(TOKEN) ? true : false;
