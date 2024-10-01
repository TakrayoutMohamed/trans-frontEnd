import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/App.tsx'
import React from 'react';

const rootDOM = document.getElementById("root") as Element;

const root = createRoot(rootDOM);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
