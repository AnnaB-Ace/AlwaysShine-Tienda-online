import React, { useState } from "react";

import MyButton from "../Common/MyButton";
import "./footer.css";

const InputEmail = () => {
  const [formState, setformState] = useState({
    email: "",
  });

  const { email } = formState;

  const handleInputChange = ({ target }) => {
    setformState({ ...formState, [target.name]: target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setformState({ email: "" });
  };
  const valid = email;

  return (
    <form onSubmit={onSubmit} className="form">
      <h1 className="title">Suscribite a nuestro Newsletter</h1>
      <div className="form-group">
        <input
          className="input"
          type="text"
          name="email"
          placeholder="@email"
          value={email}
          onChange={handleInputChange}
        />
        <MyButton
          label="Aceptar"
          disabled={!valid}
          buttonType="submit"
          type="small-green"
        />
      </div>
    </form>
  );
};

export default InputEmail;
