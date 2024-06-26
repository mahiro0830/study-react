import React from "react";
import Download from "./Download";

const ForItem = ({ el }) => {
  return (
    <React.Fragment>
      <dt>
        { el.title }
        { el.download && <Download isbn={ el.isbn } /> }
      </dt>
      <dd>{ el.price }</dd>
    </React.Fragment>
  );
}

export default ForItem;
