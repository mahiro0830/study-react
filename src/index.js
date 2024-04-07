import React from 'react';
import ReactDOM from 'react-dom/client';
import { StateBasic } from './03/StateBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StateBasic init={ 0 } />
);
