import React, { useEffect, useState } from "react";
// import MyInput from "../Common/Input";

import MyButton from "../Common/MyButton";
import "./footer.css";

const InputEmail = () => {
  const [formState, setformState] = useState({
    email: "",
  });
  const [loading, setloading] = useState(false);

  const { email } = formState;
  useEffect(() => {
    console.log("hey");
  }, []);
  const handleInputChange = ({ target }) => {
    setformState({ ...formState, [target.name]: target.value });
  };
  //   const onSubmit = (e) => {
  //     if (e.preventDefault()) {
  //       setloading(true);
  //       setformState({});
  //     } else {
  //       setloading(false);
  //     }
  //   };
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
          loading={loading}
        />
        {/* <MyInput
          type="text"
          name={email}
          value={email}
          onChange={handleInputChange}
        /> */}
      </div>
    </form>
  );
};

export default InputEmail;
