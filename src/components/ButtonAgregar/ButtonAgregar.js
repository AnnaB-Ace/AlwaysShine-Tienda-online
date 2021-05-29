import React from "react";
import "./agregar.css";

export const ButtonAgregar = ({ count, onAdd }) => {
  return count ? (
    <div>
      <button className="agregar" onClick={onAdd}></button>
    </div>
  ) : null;
};

// const onAdd = (item, count) => {};
