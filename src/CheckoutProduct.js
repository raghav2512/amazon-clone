import React, { forwardRef } from "react";
import { toast } from "react-toastify";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, index, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      // remove the item from the basket
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
      toast.dark(
        <div>
          <strong>{title}</strong> has been removed from the cart
        </div>
      );
    };

    return (
      <div ref={ref} key={id + index} className="checkoutProduct grow">
        <img className="checkoutProduct__image" src={image} />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p key={index} className="checkoutProduct__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div key={id + index} className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
