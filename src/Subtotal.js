import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { calculateTotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" name="" id="" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={calculateTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
