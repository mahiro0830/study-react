import React from 'react';
import ReactDOM from 'react-dom/client';

import ErrorRoot from './05/ErrorRoot';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <div id="dialog"></div>
    <ErrorRoot />
  </>
);
