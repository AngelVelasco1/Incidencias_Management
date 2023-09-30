import React from 'react'
import ReactDOM from 'react-dom/client';
import { Router } from "./App";
import { NextUIProvider } from "@nextui-org/react";
import './styles.css'

//? Color pallete:  https://colorhunt.co/palette/0000004e4feb068fffeeeeee 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
        <Router />
    </NextUIProvider>
  </React.StrictMode>,
)