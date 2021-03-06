import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import FlipMove from "react-flip-move";
import axios from "./axios";
import { getBasketTotal } from "./reducer";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  //runs when payment component loads or when any variable inside it changes - basket in our case.
  //whenever basket updates, it makes a request and gets special client secret which helps us to charge the correct amount
  useEffect(() => {
    // generate the special stripe secret which allows us to charge the customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe expects the total in currency subunits- eg. if dollars then expects in cents
        url: `/payments/create?total=${Math.round(
          getBasketTotal(basket) * 100
        )}`,
      });
      console.log("response is =>>>>", response);
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("The secret is =====>", clientSecret);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff
    event.preventDefault();
    setProcessing(true);
    console.log(
      "card elemnt=->>>>>",
      elements.getElement(CardElement),
      CardElement
    );
    //uses client secret. This is how stripe knows how much we're going to charge. Payent method is card and then we find card element
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((response) => {
        // {paymentIntent} can destructure rsponse
        console.log("response=>>>>", response);
        //destructure paymentIntent from response
        //paymentIntent = payment confirmation
        if (response?.paymentIntent) {
          const paymentIntent = response?.paymentIntent;
          db.collection("users") // nosql db collection
            .doc(user?.uid) // user.uid
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
            });

          setSucceeded(true);
          setError(null);
          setProcessing(false);

          dispatch({ type: "EMPTY_BASKET" });

          history.replace("/orders"); //we don't want users to come back to this page ever again after the order goes through
        } else if (response?.error) {
          setError(response.error?.message);
          setProcessing(false);
        }
      });
  };

  const handleChange = (event) => {
    // Listen for changes inside card element
    // and display any errors as the customer types his/her card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout {<Link to="/checkout"> ({basket?.length} items)</Link>}
        </h1>
        {/*Payment section- delivery address*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Avenue</p>
            <p>Dehradun, UK</p>
          </div>
        </div>
        {/*Payment section- review items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            <FlipMove>
              {basket.map((item, index) => (
                <CheckoutProduct
                  index={index}
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </FlipMove>
          </div>
        </div>
        {/*Payment section- payment method*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/**Error handling */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
