import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/cartContext";

import { getFirestore } from "../../firebase";
import "./orden.css";

export const Orden = () => {
  // const id = props.match.params.id;
  const { cart, sumTotal, clearCart } = useCartContext();
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    cel: "",
  });
  const [Order, setOrder] = useState({});

  const [error, setError] = useState(false);

  const { name, email, cel } = inputValues;

  const renderDivs = [
    {
      id: 1,
      label: "Nombre",
      name: "name",
      value: name,
    },
    {
      id: 2,
      label: "Correo",
      name: "email",
      value: email,
    },
    {
      id: 3,
      label: "Celular",
      name: "cel",
      value: cel,
    },
  ];

  const handleChange = ({ target: { name, value } }) =>
    setInputValues({ ...inputValues, [name]: value });

  const handleBlur = ({ target: { name, value } }) =>
    setInputValues({ ...inputValues, [name]: value.trim() });

  function onSubmit(e) {
    e.preventDefault();
    const db = getFirestore();
    const batch = db.batch();
    const orders = db.collection("orders");
    const newOrder = {
      buyer: inputValues,
      items: cart,
      total: sumTotal(cart),
    };
    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrder(id);
        cart.forEach((item) => {
          const itemfirebaseRef = db.collection("items").doc(item.id);
          batch.update(itemfirebaseRef, { stock: item.stock - item.quantity });
          console.log(item);
        });
        batch.commit();
        setInputValues({
          name: "",
          email: "",
          cel: "",
        });
        clearCart();
      })
      .catch((err) => {
        setError(err);
      });
    console.log(`Your name is ${name} ${email} and you are ${cel} cel`);
  }

  const valid = name && email && cel;

  return (
    <>
      <form onSubmit={onSubmit} className="form">
        {renderDivs.map((div) => (
          <div className="input-container" key={div.id}>
            <label className="mr-4">{div.label}</label>
            <input
              type="text"
              name={div.name}
              value={div.value}
              onChange={handleChange}
            />
          </div>
        ))}
        <button disabled={!valid} type="submit">
          Crear orden
        </button>
      </form>
      {error && <div className="div-error">HUBU UN ERROR</div>}
    </>
  );
};
