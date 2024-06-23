import React from 'react';
import ReactDOM from 'react-dom/client';

import PortalBasic from './05/PortalBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <div id="dialog"></div>
    <PortalBasic />
  </>
);
