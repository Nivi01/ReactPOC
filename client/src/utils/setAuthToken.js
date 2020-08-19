import api from './api';

const setAuthToken = token => {
  if (token) {
    api.defaults.proxy.host = "http://localhost:5000"
    api.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
  }
};

export default setAuthToken;
