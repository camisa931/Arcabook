import React from 'react';
import ReactDOM from 'react-dom'; //esta estaba sin el /client
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from "./serviceWorker";
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
//reportWebVitals();