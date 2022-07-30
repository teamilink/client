import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import InputValidation from "./services/inputValidation";

const inputVlidator = new InputValidation();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App inputVlidator={inputVlidator} />
  </React.StrictMode>
);
