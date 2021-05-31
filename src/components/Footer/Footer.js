import React from "react";

import "./footer.css";
import InputEmail from "./InputEmail";

const Footer = () => {
  // const [fomr, setfomr] = useState(initialState);
  return (
    <div
      className="contenedorGeneral"
      style={{ backgroundColor: "black", height: "300px" }}
    >
      <InputEmail />
      <div className="create">
        <span>Desarrollado por: Anna Acevedo</span>
        <img
          className="image"
          src={require(`../../img/jpg/loggit.jpg`).default}
          alt="Coleccion2021"
        />
      </div>
    </div>
  );
};

export default Footer;
