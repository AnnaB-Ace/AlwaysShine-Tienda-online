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
    const buscarId = cart.find((b) => b.id === item.id);
    if (!buscarId) {
      const nextItems = [...cart, item];
      setCart(nextItems);
      console.log(`Añadimos: ${quantityToAdd} unidades`);
    } else {
    }
  };

  const removeFromCart = (itemId) => {
    const NewCartWhithItemRemove = cart.filter((item) => item.id !== itemId);
    setCart(NewCartWhithItemRemove);
  };

  useEffect(() => {
    const storageCart = localStorage.getItem("Items");
    const formatCart = JSON.parse(storageCart);
    setCart(formatCart);
    console.log(storageCart);
  }, []);

  useEffect(() => {
    const ItemJSON = JSON.stringify(cart);
    localStorage.setItem("Items", ItemJSON);
  }, [cart]);

  const guardoCarrito = (cart) => {};

  const recuperoCarrito = () => {};

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
        guardoCarrito,
        recuperoCarrito,
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
