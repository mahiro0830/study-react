import React from 'react';
import ReactDOM from 'react-dom/client';
import StyleSelect from './03/SelectStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <StyleSelect mode={ 'light' }/>
  </React.Fragment>
);
