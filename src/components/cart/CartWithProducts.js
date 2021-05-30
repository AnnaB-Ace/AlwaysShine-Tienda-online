import React from "react";
import "./cart.css";
import CartSumary from "./CartSumary";
import CartTable from "./CartTable";

const CartWithProducts = ({
  cart,
  sumTotal,
  removeFromCart,
  clearCart,
  history,
}) => {
  return (
    <div className="cart-with-products">
      <div className="cart-table">
        <CartTable {...{ removeFromCart, cart, clearCart }} />
      </div>
      <div className="cart-sumary">
        <CartSumary {...{ cart, sumTotal, history }} />
      </div>
    </div>
  );
};

export default CartWithProducts;
