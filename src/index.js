import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import RouteTeste from './services/Routes';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteTeste>
    </RouteTeste>
  </React.StrictMode>
);

reportWebVitals();