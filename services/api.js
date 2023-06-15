import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-backend-url/api',
  // Add any headers or configurations needed
});

export default api;
