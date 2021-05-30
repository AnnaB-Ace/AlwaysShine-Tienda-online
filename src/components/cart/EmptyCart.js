import React from "react";
import MyButton from "../Common/MyButton";
import "./cart.css";

const EmptyCart = ({ history }) => {
  const goToProducts = () => history.push("/");
  return (
    <div className="empty-cart">
      <span className="empty-cart-text">No hay productos en el carrito</span>
      <MyButton label="Ver productos" type="secondary" onClick={goToProducts} />
    </div>
  );
};

export default EmptyCart;
