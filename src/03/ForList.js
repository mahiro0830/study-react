import React from 'react';

export default function ForList ({ src }) {
  return (
    <dl>
      {
        src.map( el => (
          <React.Fragment>
            <dt>{ el.title }</dt>
            <dd>{ el.summary }</dd>
          </React.Fragment>
        ) )
      }
    </dl>
  );
}
