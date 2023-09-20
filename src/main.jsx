import React from 'react'
import ReactDOM from 'react-dom/client';
import { Router } from "./App";
import '@mantine/core/styles.css';
import './styles/index.css';
import { MantineProvider } from '@mantine/core';


ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <Router />
  </MantineProvider>,
)
