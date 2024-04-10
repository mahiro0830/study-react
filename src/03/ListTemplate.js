import React from "react";

const ListTemplate = ({ src, render }) => {
  return (
    <dl>
      {
        src.map( el => (
          <React.Fragment key={ el.isbn }>
            { render( el ) }
          </React.Fragment>
        ) )
      }
    </dl>
  );
}

export default ListTemplate;
