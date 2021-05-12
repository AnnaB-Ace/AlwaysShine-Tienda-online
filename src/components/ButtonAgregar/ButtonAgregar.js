import React from "react";

export const ButtonAgregar = ({ count, onAdd }) => {
  return count ? (
    <div>
      <button className="agregar" onClick={onAdd}>
        Agregar
      </button>
    </div>
  ) : null;
};

// const onAdd = (item, count) => {};
