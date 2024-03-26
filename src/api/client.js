import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Corregir la URL base aquí
});

client.interceptors.response.use(
  (response) => response.data,
  (err) => {
    if (!err.response) {
      return Promise.reject({ message: err.message });
    }
    return Promise.reject({
      message: err.response.statusText,
      ...err.response,
      ...err.response.data,
    });
  }
);

export default client;
