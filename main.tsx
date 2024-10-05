import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.esm.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./main.css";

const rootDOM = document.getElementById("root") as Element;

const root = createRoot(rootDOM);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
