import React from 'react'
import ReactDOM from 'react-dom/client';
import { Router } from "./App";
import { NextUIProvider } from "@nextui-org/react";
import './styles.css'
import { AuthProvider } from './context/auth';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </NextUIProvider>
  </React.StrictMode>,
)