import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, description }) {
  const [{ basket, category }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        description: description,
      },
    });
  };
  console.log(category);
  console.log(basket);
  console.log(id, title, image);

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <h4>{title}</h4>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product__description">
          <p>{description}</p>
        </div>
      </div>
      <img src={image} alt="product" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
