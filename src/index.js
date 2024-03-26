import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import dotenv from "dotenv"; // Importar dotenv
dotenv.config(); // Cargar la configuración de variables de entorno

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
