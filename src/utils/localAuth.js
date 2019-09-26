const TOKEN = process.env.REACT_APP_LOCAL_STORAGE_TOKEN_NAME;

function setToken(token) {
  localStorage.setItem(TOKEN, token);
}

function removeToken() {
  localStorage.removeItem(TOKEN);
}

function getToken() {
  return localStorage.getItem(TOKEN);
}

function isTokenPresent() {
  return getToken() ? true : false;
}

export { setToken, removeToken, getToken, isTokenPresent };
