import React from "react";
import "./items.css";
import { Link } from "react-router-dom";

export const Items = (props) => {
  const imagenSrc = require(`../../img/jpg/${props.imagen}.jpg`).default;
  return (
    <div className="tarjeta " style={{ maxWidth: 200 }}>
      <div>
        <Link to={`/item/${props.id}`}>
          <img
            src={imagenSrc}
            alt="coleccion2021"
            className="card-img img-fluid"
          />
        </Link>
      </div>
      <div className="Box">
        <h5>{props.title}</h5>

        <p>
          <small>${props.precio}</small>
        </p>
      </div>
    </div>
  );
};

// map recibe cada elemento del arreglo lo pasa a la funcion que esta adentro, el map recibe como parametro una funcion, con cada elemento dentro del arreglo lo recibe como parametro esa funcion
// export const Products = () => {
//   <div>
//     <h2>{products[0].title}</h2>
//     <p>{products[0].precio}</p>
//     <p>{products[0].description}</p>
//   </div>;
// }; forma 1)
