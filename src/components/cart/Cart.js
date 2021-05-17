import React from "react";
import { useCartContext } from "../../context/cartContext";
import "./cart.css";

const Cart = () => {
  const { cart, quantityToAdd } = useCartContext();

  return (
    <div>
      <div className="detalle">
        <h1>Aqui va el Cart</h1>
        <div className="tabla">
          <p>Producto</p>
          <p>Precio unitario</p>
          <p>Cantidad</p>
          <p>Precio Total</p>
        </div>
        <div className="tabladetalle">
          {cart.map((carro, id) => (
            <div className="description" key={carro.id}>
              <p>{carro.title}</p>
              <p>{carro.precio}</p>
              <p>{"cantidad"}</p>
              <p>{"precio"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
