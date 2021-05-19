import React from "react";
import { useCartContext } from "../../context/cartContext";
import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart, totalunitario, sumTotal } = useCartContext();
  console.log(totalunitario);
  return (
    <div>
      <h1>Detalle de tu compra</h1>
      {cart.length ? (
        <div className="detalle">
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
                <p>{carro.precio * carro.quantity}</p>
                <button
                  onClick={() => {
                    removeFromCart(carro.id);
                  }}
                >
                  x
                </button>
              </div>
            ))}
            <div>
              Total de la compra:
              <p>{sumTotal(cart)}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
};

export default Cart;
