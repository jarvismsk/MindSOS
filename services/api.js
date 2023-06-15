// api.js
import axios from 'axios';

const API_BASE_URL = 'http://your-backend-url'; // Replace with your actual backend URL

export const signup = (name, email, password) => {
  const url = `${API_BASE_URL}/signup`;
  const data = { name, email, password };

  return axios.post(url, data);
};
