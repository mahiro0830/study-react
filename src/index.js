import React from 'react';
import ReactDOM from 'react-dom/client';
import ForSort from './03/ForSort';
import books from './03/books';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ForSort src={ books } />
);
