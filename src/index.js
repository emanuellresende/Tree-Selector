import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/pages/Home';
import { GlobalStyle } from './globalStyles';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Home/>
  </React.StrictMode>
);


reportWebVitals();
