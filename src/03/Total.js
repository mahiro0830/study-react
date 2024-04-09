import React from "react";

const Total = ({ src }) => {
  return (
    <p>{ src.length > 0 && `${ src.length }件のデータがあります。` }</p>
  );
}

export default Total;
