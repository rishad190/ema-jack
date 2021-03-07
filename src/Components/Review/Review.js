import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { getDatabaseCart } from "../../utilities/databaseManager";
import Items from "../Items/Items";

const Review = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCard = getDatabaseCart();
    const productKey = Object.keys(savedCard);
    const cardProduct = productKey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCard[key];
      return product;
    });
    setCart(cardProduct);
  }, []);

  return (
    <div>
      <h1>Review{cart.length}</h1>
      {cart.map((pd) => (
        <Items product={pd}></Items>
      ))}
    </div>
  );
};

export default Review;
