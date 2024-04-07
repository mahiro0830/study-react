import React from 'react';
import ReactDOM from 'react-dom/client';
import ForList from './03/ForList';
import books from './03/books';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ForList src={ books } />
);
