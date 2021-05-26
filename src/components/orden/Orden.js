import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/cartContext";

import { getFirestore } from "../../firebase";
import "./orden.css";

export const Orden = () => {
  // const id = props.match.params.id;
  const { cart, sumTotal } = useCartContext();
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

    if ([name, email, cel].includes("")) {
      setError(true);
      return;
    }

    console.log(`Your name is ${name} ${email} and you are ${cel} years old`);
  }

  useEffect(() => {
    const db = getFirestore();
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
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

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
              onBlur={handleBlur}
            />
          </div>
        ))}
        <button disabled={[name, email, cel].includes("")} type="submit">
          Crear orden
        </button>
      </form>
      {error && <div className="div-error">HUBU UN ERROR</div>}
    </>
  );
};
