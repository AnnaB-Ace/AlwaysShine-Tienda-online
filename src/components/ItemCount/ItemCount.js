import React, { useState } from "react";
import MyButton from "../Common/MyButton";
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

  return (
    <div className="contador">
      <div className="button-count">
        <MyButton label="-" type="small" onClick={decrement} />
        <p className="count">{count}</p>
        <MyButton label="+" type="small" onClick={increment} />
      </div>
      <MyButton
        label="Agregar"
        onClick={() => onAdd(count)}
        disabled={!count}
      />
    </div>
  );
};
