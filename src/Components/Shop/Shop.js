import React, { useState } from "react";
import fakeData from "../../fakeData";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import Card from "../Card/Card";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [order, setOrder] = useState([]);
  const handleAdd = (product) => {
    const newOrder = [...order, product];
    setOrder(newOrder);
    const sameProduct = newOrder.filter((pd) => pd.key === product.key);
    const count = sameProduct.length;
    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="shop_con">
      <div className="shop_list">
        {products.map((pd) => (
          <Product
            showAddToCard={true}
            handleAdd={handleAdd}
            product={pd}
          ></Product>
        ))}
      </div>
      <div className="order">
        <Card order={order}></Card>
      </div>
    </div>
  );
};

export default Shop;
