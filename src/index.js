import React from 'react';
import ReactDOM from 'react-dom/client';
import ForFilter from './03/ForFilter';
import books from './03/books';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ForFilter src={ books } />
);
