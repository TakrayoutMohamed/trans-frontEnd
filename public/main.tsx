import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/App.tsx'

const rootDOM = document.getElementById("root") as Element;

const root = createRoot(rootDOM);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
