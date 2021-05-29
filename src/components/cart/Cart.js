import firebase from "firebase";

import React, { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import { getFirestore } from "../../firebase/index";
import { Orden } from "../orden/Orden";

import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart, totalunitario, sumTotal } = useCartContext();
  console.log(cart);
  const db = getFirestore();
  const usuario = {
    nombre: "Fernando",
    activo: true,
    fechaNaci: 0,
  };
  db.collection("usuarios").add(usuario);
  // const [orders, setorders] = useState(initialState);

  // //preguntar
  // const handleContinue = async () => {
  //   const db = getFirestore();
  //   const batch = db.batch();

  //   cart.forEach((item) => {
  //     const itemRef = db.collection("items").doc(item.id);
  //     batch.update(itemRef, { stock: item.stock - item.quantity });
  //   });

  //   batch.commit().then((r) => console.log(r));
  // };
  // //preguntar
  // const OrdenN = () => {
  //   const db = getFirestore();
  //   const orders = db.collection("orders");
  //   // const item = cart.map({ title, id, price });
  //   const newOrder = {
  //     buyer: { user, email, phone },
  //     items: cart,
  //     date: firebase.firestore.Timestamp.fromDate(new Date()),
  //     total: sumTotal,
  //   };
  //   orders
  //     .add(newOrder)
  //     .then(({ id }) => {
  //       setOrder(id);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });
  // };
  // OrdenN();

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
                </div>
              ))}
              <div>
                Total de la compra:
                <p>{sumTotal(cart)}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="SinP">No hay productos en el carrito</p>
        )}
      </div>
      <button>Continuar</button>
      <Orden />
    </>
  );
};

export default Cart;
