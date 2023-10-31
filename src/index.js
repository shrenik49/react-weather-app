import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LoginProvider } from './Components/context';

ReactDOM.render(
  <LoginProvider>
    <App />
  </LoginProvider>,
  document.getElementById('root')
);

