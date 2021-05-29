import firebase from "firebase";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { getFirestore } from "../../firebase/index";

import { Orden } from "../orden/Orden";

import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart, totalunitario, sumTotal } = useCartContext();
  console.log(cart);

  return (
    <>
      <div>
        <h1>Detalle de tu compra</h1>
        {cart.length ? (
          <div className="detalle">
            <div className="tabla">
              <p>Producto</p>
              <p>Precio unitario</p>
              <p>stock actual</p>
              <p>Cantidad</p>

              <p>Precio Total</p>
              <p>Eliminar</p>
            </div>
            <div className="tabladetalle">
              {cart.map((carro, id) => (
                <div className="description" key={carro.id}>
                  <p>{carro.title}</p>
                  <p>{carro.price}</p>
                  <p>{carro.stock}</p>

                  <p>{carro.quantity}</p>

                  <p>{carro.price * carro.quantity}</p>

                  <button
                    onClick={() => {
                      removeFromCart(carro.id);
                    }}
                  >
                    x
                  </button>
                  <button>Continuar</button>
                </div>
              ))}
              <div>
                Total de la compra:
                <p>{sumTotal(cart)}</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="SinP">No hay productos en el carrito</p>
          </>
        )}
      </div>
      <div className="verProductos">
        <NavLink className="enlace" to={`/`}>
          Ver productos
        </NavLink>
      </div>
      <Orden />
    </>
  );
};

export default Cart;
