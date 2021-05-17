import React, { useState } from "react";
import { ButtonAgregar } from "../ButtonAgregar/ButtonAgregar";
import "./ItemCount.css";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setcount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setcount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };

  // useEffect(() => {
  //   console.log("componente montado");

  //   return () => {
  //     console.log("componente desmontado");
  //   };
  // }, []);
  return (
    <div className="buttonCont">
      <button className="masmenos" onClick={decrement}>
        -
      </button>
      <p className="count">{count}</p>
      <button className="masmenos" onClick={increment}>
        +
      </button>
      <ButtonAgregar count={count} onAdd={() => onAdd(count)} />
    </div>
  );

  //       <button
  //         className="agregar"
  //         onClick={() => {
  //           if (count != 0) {
  //             onAdd();
  //           } else {
  //             console.log(`no hay productos en el carrito`);
  //           }
  //         }}
  //       >
  //         Agregar
  //       </button> : null;
  //   return  (
  //     <>
  //       <div className="buttonCont">
  //         <button className="masmenos" onClick={decrement}>
  //           -
  //         </button>
  //         <p className="count">{count}</p>
  //         <button className="masmenos" onClick={increment}>
  //           +
  //         </button>
  //       </div>
  //       <button
  //         className="agregar"
  //         onClick={() => {
  //           if (count != 0) {
  //             onAdd();
  //           } else {
  //             console.log(`no hay productos en el carrito`);
  //           }
  //         }}
  //       >
  //         Agregar
  //       </button>
  //       <button
  //         className="agregar"
  //         onClick={() => {
  //           if (count != 0) {
  //             onAdd();
  //           } else {
  //             console.log(`no hay productos en el carrito`);
  //           }
  //         }}
  //       >
  //         Agregar
  //       </button>
  //     </>
  //   );
  // };
};
