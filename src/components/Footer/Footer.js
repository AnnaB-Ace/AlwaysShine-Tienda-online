import React from "react";
import "./footer.css";
import InputEmail from "./InputEmail";

const Footer = () => {
  return (
    <div className="general-container">
      <InputEmail />
      <div className="create-by">
        <span>Desarrollado por: Anna Acevedo</span>
      </div>
    </div>
  );
};

export default Footer;
