import React from "react";

const Items = (props) => {
  const { name, quantity } = props.product;
  return (
    <div>
      <h3>{name}</h3>
      <p>quantity{quantity}</p>
    </div>
  );
};

export default Items;
