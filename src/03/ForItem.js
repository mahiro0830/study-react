import React from "react";

const ForItem = ({ el }) => {
  return (
    <React.Fragment>
      <dt>{ el.title }</dt>
      <dd>{ el.summary }</dd>
    </React.Fragment>
  );
}

export default ForItem;
