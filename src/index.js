import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Attachment from "./components/Attachment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Attachment />
  </React.StrictMode>
);
