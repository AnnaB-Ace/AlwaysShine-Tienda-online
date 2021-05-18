import React from "react";
import { useCartContext } from "../../context/cartContext";
import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCartContext();

  return (
    <div>
      <div className="detalle">
        <h1>Detalle de tu compra</h1>
        <div className="tabla">
          <p>Producto</p>
          <p>Precio unitario</p>
          <p>Cantidad</p>
          <p>Precio Total</p>
          <p>Eliminar</p>
        </div>
        <div className="tabladetalle">
          {cart.map((carro, id) => (
            <div className="description" key={carro.id}>
              <p>{carro.title}</p>
              <p>{carro.precio}</p>
              <p>{carro.quantity}</p>
              <p>{"precio"}</p>
              <button
                onClick={() => {
                  removeFromCart(carro.id);
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
