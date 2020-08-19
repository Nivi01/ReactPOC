import axios from 'axios';


const api = axios.create({
  baseURL: '/api',
  proxy: true,
  headers: {
    'Content-Type': 'application/json'
  }
  
});

export default api;
