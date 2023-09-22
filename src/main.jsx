import React from 'react'
import ReactDOM from 'react-dom/client';
import { Router } from "./App";
import { NextUIProvider} from "@nextui-org/react";
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <NextUIProvider>
    <main className="dark text-foreground bg-background">

    <Router />
    </main>
  </NextUIProvider>
</React.StrictMode>,
)