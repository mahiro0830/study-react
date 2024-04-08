import React from 'react';
import ForItem from './ForItem';

export default function ForList ({ src }) {
  return (
    <dl>
      {
        src.map( el => (
          <ForItem key={ el.isbn } el={ el } />
        ) )
      }
    </dl>
  );
}
