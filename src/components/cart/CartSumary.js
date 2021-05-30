import React from "react";
import Divider from "../Common/Divider";

import { Orden } from "../orden/Orden";
import "./cart.css";

const CartSumary = ({ cart, sumTotal, history }) => {
  return (
    <div className="cart-sumary-content">
      <p className="cart-sumary-title">RESUMEN DE COMPRA</p>
      <Divider />
      <div className="cart-total">
        <span className="cart-sumary-title">TOTAL</span>
        <span className="cart-sumary-title">$ {sumTotal(cart)}</span>
      </div>
      <Divider />
      <Orden {...{ history }} />
    </div>
  );
};

export default CartSumary;
