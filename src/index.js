import React from 'react';
import ReactDOM from 'react-dom/client';

import ErrorEventRoot from './05/ErrorEventRoot';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <div id="dialog"></div>
    <ErrorEventRoot />
  </>
);
