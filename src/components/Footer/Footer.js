import React from "react";
import "./footer.css";
import InputEmail from "./InputEmail";

const Footer = () => {
  return (
    <div className="general-container">
      <InputEmail />
      <div className="create-by">
        <span>Desarrollado por: Anna Acevedo</span>
        {/* <img
          className="image-footer"
          src={require(`../../img/jpg/loggit.jpg`).default}
          alt="Coleccion2021"
        /> */}
      </div>
    </div>
  );
};

export default Footer;
