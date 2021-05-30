import React from "react";
import Divider from "../Common/Divider";
import MyButton from "../Common/MyButton";
import "./cart.css";

const CartTable = ({ removeFromCart, cart, clearCart }) => {
  return (
    <div className="cart-table-content">
      <div className="cart-table-header">
        <div className="cart-table-header-item">
          <span>Cantidad</span>
        </div>
        <div className="cart-table-header-item">
          <span>Producto</span>
        </div>
        <div className="cart-table-header-item">
          <span>Precio</span>
        </div>
        <div className="cart-table-header-item">
          <span>Total</span>
        </div>
        <div className="cart-table-header-item">
          <span>Borrar</span>
        </div>
      </div>
      <Divider />
      {cart.map((carro) => (
        <div key={carro.id}>
          <div className="cart-table-row">
            <div className="cart-table-row-item">
              <span>{carro.quantity}</span>
            </div>
            <div className="cart-table-row-item">
              <span>{carro.title}</span>
            </div>
            <div className="cart-table-row-item">
              <span>{carro.price}</span>
            </div>
            <div className="cart-table-row-item">
              <span>{carro.price * carro.quantity}</span>
            </div>
            <div className="cart-table-row-item">
              <MyButton
                label="x"
                type="small"
                onClick={() => {
                  removeFromCart(carro.id);
                }}
              />
            </div>
          </div>
          <Divider />
        </div>
      ))}
      <br />
      <MyButton label="Borrar todo" type="secondary" onClick={clearCart} />
    </div>
  );
};

export default CartTable;
