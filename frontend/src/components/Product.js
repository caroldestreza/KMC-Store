import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card-product">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h3 className="orange-text">{product.name}</h3>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="price">₱{product.price}</div>
      </div>
    </div>
  );
}
