import React from 'react';
import ReactDOM from 'react-dom/client';
import ForNest from './03/ForNest';
import books from './03/books';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ForNest src={ books } />
);
