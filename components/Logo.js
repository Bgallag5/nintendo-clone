import React from "react";

export default function Logo(props) {
    const {id, size} = props;
  return (
    <h2 id={id} className="nintendo-logo">
      Nintendo<small>&copy;</small>
    </h2>
  );
}
