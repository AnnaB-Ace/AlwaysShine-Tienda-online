import React from "react";
import "./items.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const Items = (props) => {
  const onAdd = () => {
    alert(`Estas llevando: `);
  };
  return (
    <div className="BoxProductos">
      <h2>{props.title}</h2>
      <p>{props.precio}</p>
      <p>{props.description}</p>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
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

//forma 2)
