import React, { useState } from "react";
import { toast } from "react-toastify";
import { useStateValue } from "./StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const options = {
    autoClose: 5000,
    //hideProgressBar: true,
  };

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast(
      <div>
        <strong>{title}</strong> successfully added to the cart
      </div>,
      options
    );
  };

  return (
    <div key={id + title} className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div key={id + title} className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img className="product__image" src={image} alt="" />

      <button onClick={addToBasket} className="product__button">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
