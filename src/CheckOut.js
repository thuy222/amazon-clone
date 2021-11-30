import React from "react";
import { useStateValue } from "./StateProvider";
import "./components/styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

function CheckOut() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div>
        <img
          src="https://images.unsplash.com/photo-1619296740635-5d0a8afcc221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMGFsb25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
          className="checkout__ad"
        />
        {basket && basket.length === 0 ? (
          <div>
            <h2>Your basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more, click "Add
              To Basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Checkout</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default CheckOut;
