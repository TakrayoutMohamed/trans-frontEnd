import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";//it breaks the drop down proprites
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.esm.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@/main.css";
import "./public/fonts/Luckiest_Guy/LuckiestGuy-Regular.ttf";
import { createRoot } from "react-dom/client";
import App from "@src/App.tsx";
import { Provider } from "react-redux";
import { store } from "@states/store";
import { StrictMode } from "react";

const rootDOM = document.getElementById("root") as Element;

const root = createRoot(rootDOM);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
