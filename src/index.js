import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import report from './report';

/* runs all the pages that I have made */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

report();
