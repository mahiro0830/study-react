import React from "react";

const ListTemplate = ({ src, children }) => {
  return (
    <dl>
      {
        src.map( el => (
          <React.Fragment key={ el.isbn }>
            { children( el ) }
          </React.Fragment>
        ) )
      }
    </dl>
  );
}

export default ListTemplate;
