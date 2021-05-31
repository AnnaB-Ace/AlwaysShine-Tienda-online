import React, { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import { getFirestore } from "../../firebase";
import "./orden.css";
import MyButton from "../Common/MyButton";
import MyInput from "../Common/Input";
import Divider from "../Common/Divider";
import Modal from "../Common/Modal";

export const Orden = ({ history }) => {
  const { cart, sumTotal, clearCart } = useCartContext();
  const [visible, setVisiblle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    email2: "",
    cel: "",
  });
  const [order, setOrder] = useState("");

  const [error, setError] = useState(false);

  const { name, email, email2, cel } = inputValues;

  const renderDivs = [
    {
      id: 1,
      label: "Nombre:",
      name: "name",
      value: name,
    },
    {
      id: 2,
      label: "Correo:",
      name: "email",
      value: email,
    },
    {
      id: 3,
      label: "Confirmar correo:",
      name: "email2",
      value: email2,
    },
    {
      id: 4,
      label: "Celular:",
      name: "cel",
      value: cel,
    },
  ];

  const handleChange = ({ target: { name, value } }) =>
    setInputValues({ ...inputValues, [name]: value });

  // const handleBlur = ({ target: { name, value } }) =>
  //   setInputValues({ ...inputValues, [name]: value.trim() });

  function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
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
        setVisiblle(true);
        setLoading(false);
        cart.forEach((item) => {
          const itemfirebaseRef = db.collection("items").doc(item.id);
          batch.update(itemfirebaseRef, { stock: item.stock - item.quantity });
        });
        batch.commit();
        setInputValues({
          name: "",
          email: "",
          cel: "",
        });
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    console.log(`Your name is ${name} ${email} and you are ${cel} cel`);
  }

  const accept = () => {
    setVisiblle(false);
    clearCart();
    history.push("/");
  };

  const isEmailsValid = email && email2 && email === email2;
  const valid = name && isEmailsValid && cel;

  return (
    <>
      {cart.length !== 0 && (
        <form onSubmit={onSubmit} className="form">
          <p className="cart-sumary-title">COMPLETA TUS DATOS</p>
          <Divider />
          <br />
          {renderDivs.map((div, i) => (
            <div className="input-container" key={i}>
              <label className="mr-4">{div.label}</label>
              <MyInput
                type="text"
                name={div.name}
                value={div.value}
                onChange={handleChange}
              />
            </div>
          ))}
          <br />
          <MyButton
            label="Crear orden"
            disabled={!valid}
            buttonType="submit"
            type="rentangle"
            loading={loading}
          />
        </form>
      )}
      {error && <div className="div-error">HUBU UN ERROR</div>}
      <Modal
        visible={visible}
        title="Su compra ha sido procesada"
        onClickButton={accept}
      >
        <div className="cart-modal-content">Su numero de orden es {order}.</div>
      </Modal>
    </>
  );
};
