import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'

/* Define container using the root block from index.html */
const container = document.getElementById('root')

/*Create root from container  */
const root = createRoot(container)

/* Print app from App.jsx*/
root.render(<App/>) 


