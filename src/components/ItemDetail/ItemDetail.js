import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const [showButton, setShowButton] = useState(0);
  const { addToCart } = useCartContext();
  const { removeFromCart } = useCartContext();

  const onAdd = (quantityToAdd) => {
    setShowButton(quantityToAdd);
    addToCart(item, quantityToAdd);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-xs-12"></div>
        <div className="col-lg-4 col-xs-12 imagen card">
          <img
            className="img-fluid"
            src={
              item.imagenExpandida
                ? require(`../../img/jpg/${item.imagenExpandida}.jpg`).default
                : ""
            }
            alt="Coleccion2021"
          />
        </div>

        <div className="col-lg-4 col-xs-12 Propiedades">
          <div className="title">{item.title}</div>
          <div className="title">${item.precio}</div>
          <div className="description">{item.description}</div>
          {showButton === 0 ? (
            <ItemCount initial={1} stock={5} onAdd={onAdd} item={item} />
          ) : (
            <Link to={"/cart"}>
              <button>Terminar compra</button>
            </Link>
          )}
          <button
            onClick={() => {
              removeFromCart(item.id);
            }}
          >
            remover
          </button>
        </div>
        <div className="col-lg-2 col-xs-12 "></div>
      </div>
    </div>
  );
};

export default ItemDetail;

// productDetail1 ? <ItemDetail productDetail1={productDetail1} /> : null;
// function ItemDetail({ item }) {
//  onAdd(quantityToAdd) {
//  // Hemos recibido un evento del ItemCount
//  }
// return <>
//            …
//      <ItemCount > // Configura las props de ItemCount
//      <Button>Termina tu compra</Button> // Oculto hasta que el usuario seleccione la cantidad y clickee en comprar

// </>;
//  // Utilizar dentro de itemdetail el counter
// }
