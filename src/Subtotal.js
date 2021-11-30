import React from "react";
import CurrencyFormat from "react-currency-format";
import { BsBasket } from "react-icons/bs";
import "./components/styles/Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        // renderText={(value) => (
        //   <>
        //     <p>Subtotal {basket.length}</p>
        //     <small className="subtotal__gift">
        //       <input type="checkbox" /> This order contains gift
        //     </small>
        //   </>
        // )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Checkout</button>
    </div>
  );
}

export default Subtotal;
