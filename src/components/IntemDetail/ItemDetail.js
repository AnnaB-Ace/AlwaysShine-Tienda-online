import React from "react";
import "../Items/items.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = (props) => {
  const imagenSrc = require(`../../img/jpg/${props.imagen}.jpg`).default;
  return (
    <div className="card-ms-4 tarjeta " style={{ maxWidth: 200 }}>
      <div className="row">
        <div className="col-md-6">
          <img
            src={imagenSrc}
            alt="coleccion2021"
            className="card-img img-fluid"
          />
        </div>
        <div className="cold-md-6">
          <div className="card-body">
            <h5>{props.title}</h5>
            <p className="card-text">
              <small>{props.description}</small>
            </p>
            <p>
              <small>{props.precio}</small>
            </p>
            <ItemCount initial={1} stock={5} />
          </div>
        </div>
      </div>
    </div>
  );
};
