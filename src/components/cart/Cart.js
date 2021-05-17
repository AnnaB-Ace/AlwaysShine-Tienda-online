import React from "react";
import { useCartContext } from "../../context/cartContext";
import "./cart.css";

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <div>
      <div className="detalle">
        <h1>Aqui va el Cart</h1>
        <div>
          <p>Producto</p>
          <p>Precio unitario</p>
          <p>Cantidad</p>
          <p>Precio Total</p>
        </div>
        <div>
          <p>Producto</p>
          <p>Precio unitario</p>
          <p>Cantidad</p>
          <p>Precio Total</p>
        </div>
      </div>
      <div className="resumen"> Resumen de la compra</div>
      <div className="contenedor">
        {cart.map((carro, id) => (
          <p key={carro.id}>{carro.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Cart;
