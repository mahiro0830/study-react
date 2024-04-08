import React from "react";
import ForItem from "./ForItem";

const ForSort = ({ src }) => {
  src.sort( (m, n) => m.price - n.price );

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

export default ForSort;
