import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { name, img, key } = props.product;
  return (
    <div>
      <div className="product_con">
        <div className="img_con">
          <img src={img} alt="" />
        </div>
        <div className="details_con">
          <h3>
            {" "}
            <Link to={"/product/" + key}>{name}</Link>
          </h3>
          {props.showAddToCard && (
            <button onClick={() => props.handleAdd(props.product)}>
              Add Product
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
