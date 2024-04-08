import React from 'react';
import ForItem from './ForItem';

const ForFilter = ({ src }) => {
  const lowPrice = src.filter( el => el.price < 3500 );
  return (
    <dl>
      {
        lowPrice.map( el => (
          <ForItem key={ el.isbn } el={ el } />
        ) )
      }
    </dl>
  );
}

export default ForFilter;
