import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import MyButton from "../Common/MyButton";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const [showButton, setShowButton] = useState(0);
  const { addToCart } = useCartContext();

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
              item.expandedImage
                ? require(`../../img/jpg/${item.expandedImage}.jpg`).default
                : ""
            }
            alt="Coleccion2021"
          />
        </div>

        <div className="col-lg-4 col-xs-12 propiedades">
          <div className="title">{item.title}</div>
          <div className="title">${item.price}</div>
          <div className="description">{item.description}</div>
          <div className="title">Stock disponible: {item.stock}</div>
          {showButton === 0 ? (
            <ItemCount
              initial={1}
              stock={item.stock}
              onAdd={onAdd}
              item={item}
            />
          ) : (
            <>
            <Link to={"/cart"}>
              <MyButton label="Terminar compra" type="primary" />
            </Link>
            <Link to={"/"}>
              <MyButton label="Escoger mas productos" type="secondary"/>
            </Link>
            </>
          )}
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
