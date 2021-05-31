import React, { useState } from "react";

import "./footer.css";
import Newsletter from "./Newsletter";

const Footer = () => {
  // const [fomr, setfomr] = useState(initialState);
  return (
    <div
      className="contenedorGeneral"
      style={{ backgroundColor: "black", height: "300px" }}
    >
      <Newsletter />
    </div>
  );
};

export default Footer;
