import React, { useState } from "react";
import MyInput from "../Common/Input";
import "./footer.css";
export const Newsletter = () => {
  const [formstate, setState] = useState({
    email: "",
  });

  const { email } = formstate;
  const handleInputChange = () => {
    console.log("click");
  };
  return (
    <form>
      <div className="contenedor">
        <span className="titulo">Suscribite al newsletter</span>
        <MyInput
          type="text"
          name="name"
          value="email"
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default Newsletter;
