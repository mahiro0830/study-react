import React from 'react';
import ReactDOM from 'react-dom/client';

// import ErrorEventRoot from './05/ErrorEventRoot';

// import MaterialBasic from './06/1-2/MaterialBasic';
import MaterialDrawer from './06/1-3/MaterialDrawer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <div id="dialog"></div>
    <MaterialDrawer />
  </>
);
