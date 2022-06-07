import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { UIProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UIProvider>
    <App />
    </UIProvider>
  </React.StrictMode>
);
