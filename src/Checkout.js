import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider.js";
import CheckoutProduct from "./CheckoutProduct.js";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div class="checkout_left">
        <h1 className="checkout_title">Shopping Cart</h1>
        {basket.map((item) => (
          <CheckoutProduct
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
        {/* BasketItem */}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
