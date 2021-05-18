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
    console.log(cart);
    const buscarId = cart.findIndex((b) => b.id === item.id);
    console.log(buscarId);

    // if (!buscarId) {

    //   console.log(`Añadimos: ${quantityToAdd} unidades`);
    // } else {
    //   console.log("este item ya fue agregado antes, modifique su cantidad");
    //   // si esta agregado sumar cantidad
    // }
  };

  const removeFromCart = (itemId) => {
    const NewCartWhithItemRemove = cart.filter((item) => item.id !== itemId);
    setCart(NewCartWhithItemRemove);
  };

  useEffect(() => {
    const storageCart = localStorage.getItem("Items");
    const formatCart = JSON.parse(storageCart);
    setCart(formatCart);
    // console.log(storageCart);
  }, []);

  useEffect(() => {
    const ItemJSON = JSON.stringify(cart);
    localStorage.setItem("Items", ItemJSON);
  }, [cart]);

  useEffect(() => {
    setQuantity(cart.length);
  }, [cart]);
  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        quantity,
        addToCart,
        removeFromCart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider> // ACA YA LE AGREGAMOS 1 ITEMS Q =1
  );
};
export default CartContextProvider;

//FIN DE COMPONENTE
// export const CartContextProvider = ({ children }) => {
//   const [cart, setCart] = useState([]); // ACA ESTAVACIO
//   const [quantity, setQuantity] = useState(0);

//   const addToCart = (item, quantityToAdd) => {
//     if (!cart.includes(item)) {
//       const nextItems = [...cart, item];
//       setCart(nextItems);
//       console.log(`Añadimos: ${quantityToAdd} unidades`);
//       productsCount();

//       // return cart.filter((item) => item.id === item);
//     } else {
//       alert(
//         "Este elemento ya fue seleccionado anteriormente, no puede volverlo a seleccionar, vaya al carro de compras y modifican su cantidad"
//       );
//     }
//   };
