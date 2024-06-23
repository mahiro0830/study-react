import React from 'react';
import ReactDOM from 'react-dom/client';

import ErrorRetryRoot from './05/ErrorRetryRoot';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <div id="dialog"></div>
    <ErrorRetryRoot />
  </>
);
