import React from 'react';
import ReactDOM from 'react-dom/client';
import ForSort from './03/ForSort';
import books from './03/books';
import Total from './03/Total';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <Total src={ books } />
    <ForSort src={ books } />
  </React.Fragment>
);
