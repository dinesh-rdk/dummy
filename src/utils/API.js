import axios from 'axios';
import { getToken, removeToken } from 'utils/localAuth';
import { push } from 'connected-react-router';

function get(url, params = {}) {
  return request({ url, params, method: 'get' });
}

function post(url, data = {}) {
  return request({ url, data, method: 'post' });
}

function put(url, data = {}) {
  return request({ url, data, method: 'put' });
}

async function request(params) {
  try {
    const options = {
      ...params,
      baseURL: process.env.REACT_APP_ENDPOINT,
      headers: { Authorization: getToken() },
      timeout: 1000,
    };
    const response = await axios(options);
    return response;
  } catch (error) {
    console.error(error);
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      removeToken();
      push('/login');
    } else {
      throw error;
    }
  }
}

export default { get, post, put };
