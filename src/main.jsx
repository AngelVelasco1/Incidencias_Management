import React from 'react'
import ReactDOM from 'react-dom/client';
import { Router } from "./App";
import { NextUIProvider } from "@nextui-org/react";
import './styles/index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Router />
    </NextUIProvider>,
  </React.StrictMode>
)
