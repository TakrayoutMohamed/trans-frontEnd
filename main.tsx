import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.tsx";
import "bootstrap/dist/css/bootstrap.css";

const rootDOM = document.getElementById("root") as Element;

const root = createRoot(rootDOM);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
