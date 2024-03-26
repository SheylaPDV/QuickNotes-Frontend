// Importamos axios, una librería popular para hacer solicitudes HTTP desde el navegador y Node.js
import axios from "axios";
// Creamos una instancia de axios con algunas configuraciones predeterminadas.
// Esto nos permite reutilizar la configuración básica sin tener que especificarla en cada solicitud.
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
