import React, { createContext, useContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => {
  // customHook
  return useContext(CartContext); // con esta funcion lo puedo usar en mis children
};

export const CartContextProvider = ({ children }) => {
  console.log(
    "todo lo que haga aqui se pasa a sus children cuando yo llame esta funcion"
  );
  const Intem1 = {
    id: 23,
    categoria: "Vestido",
    imagen: "Vestido8R",
    imagenExpandida: "Vestido8",
    title: "Vestido corto verano",
    precio: "3300",
    description:
      "Vestido de calce amplio, escote a la base sin mangas. Tejido 100% lino en compromiso con la sustentabilidad.",
  };

  return (
    <CartContext.Provider value={[Intem1]}>{children}</CartContext.Provider>
  );
};
export default CartContextProvider;

// export const useCartContext = () => {
//   return useContext(CartContext); // con esta funcion lo puedo usar en mis children
