import React from 'react';
import ReactDOM from 'react-dom/client';

import ListTemplate from './03/ListTemplate';
import books from './03/books';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ListTemplate src={ books } render={
    el => (
      <React.Fragment>
        <dt>
          <a href={ `https://google.co.jp/${ el.isbn }` }>
            { el.title }（{ el.price }円）
          </a>
        </dt>
        <dd>{ el.summary }</dd>
      </React.Fragment>
    )
  }>
  </ListTemplate>
);
