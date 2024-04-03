import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* 0 を除いて、ブール値、null、undefined は無視されます */}
    <li>{true}</li>
    <li>{false}</li>
    <li>{undefined}</li>
    <li>{null}</li>
    <li>{0}</li>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
