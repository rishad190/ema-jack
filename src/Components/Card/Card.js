import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { order } = props;

  let total = 0;
  for (let i = 0; i < order.length; i++) {
    let price = order[i].price;
    total = total + price;
  }
  return (
    <div>
      <h2>Order List </h2>
      <h4>Order Amount : {order.length}</h4>
      <p>Total Price ${total}</p>
      <Link to="/order">
        <button>Review</button>
      </Link>
    </div>
  );
};

export default Card;
