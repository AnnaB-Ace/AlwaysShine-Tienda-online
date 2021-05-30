import React from "react";
import { useCartContext } from "../../context/cartContext";
import "./cart.css";
import EmptyCart from "./EmptyCart";
import CartWithProducts from "./CartWithProducts";

const Cart = ({ history }) => {
  const { cart, removeFromCart, clearCart, sumTotal } = useCartContext();
  return !cart.length ? (
    <EmptyCart {...{ history }} />
  ) : (
    <CartWithProducts
      {...{ cart, clearCart, sumTotal, removeFromCart, history }}
    />
  );
};

export default Cart;
