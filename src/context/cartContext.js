import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => {
  // customHook
  return useContext(CartContext);
};

// contex Provider
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // ACA ESTAVACIO
  const [quantity, setQuantity] = useState(0);

  const addToCart = (item, quantityToAdd) => {
    if (!cart.includes(item)) {
      setCart([...cart, item]);
      console.log(`Añadimos: ${quantityToAdd} unidades`);

      // return cart.filter((item) => item.id === item);
    } else {
      alert(
        "Este elemento ya fue seleccionado anteriormente, no puede volverlo a seleccionar, vaya al carro de compras y modifican su cantidad"
      );
    }
  };

  const removeFromCart = (itemId) => {
    const NewCartWhithItemRemove = cart.filter((item) => item.id !== itemId);
    setCart(NewCartWhithItemRemove);
  };

  useEffect(() => {
    setQuantity(cart.length);
  }, [cart]);
  console.log(cart);
  return (
    <CartContext.Provider value={{ cart, quantity, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider> // ACA YA LE AGREGAMOS 1 ITEMS Q =1
  );
};
export default CartContextProvider;

//FIN DE COMPONENTE

// export const useCartContext = () => {
//   return useContext(CartContext); // con esta funcion lo puedo usar en mis children

//1) creamos el contexto
//2) creamos las funcion Provider que le pasa sus propiedades a los hijos
//3) creamos el hook useContext para cuando se va a usar en los hijos

//4) cuando lo voy a usar import  el hook useCartContext
