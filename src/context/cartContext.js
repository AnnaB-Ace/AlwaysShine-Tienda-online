import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => {
  // customHook
  return useContext(CartContext);
};

// contex Provider
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantityToAdd) => {
    const buscarId = cart.findIndex((b) => b.id === item.id);
    if (buscarId >= 0) {
      const copyCart = [...cart];
      copyCart[buscarId].quantity = copyCart[buscarId].quantity + quantityToAdd;
      setCart(copyCart);
    } else {
      const newItem = { ...item, quantity: quantityToAdd };
      const nextItems = [...cart, newItem];
      console.log(nextItems);
      setCart(nextItems);
    }
  };

  const sumTotal = (cart) => {
    let total = cart.reduce(
      (t, product) => (t += product.price * product.quantity),
      0
    );
    return total;
  };
  const cantTotal = (cart) => {
    let totalcantidad = cart.reduce((t, product) => (t += product.quantity), 0);

    return totalcantidad;
  };

  const removeFromCart = (itemId) => {
    const NewCartWhithItemRemove = cart.filter((item) => item.id !== itemId);
    setCart(NewCartWhithItemRemove);
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const storageCart = localStorage.getItem("Items");
    const formatCart = JSON.parse(storageCart);
    setCart(formatCart || []);
  }, []);

  useEffect(() => {
    const ItemJSON = JSON.stringify(cart);
    localStorage.setItem("Items", ItemJSON);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        setCart,
        sumTotal,
        cantTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
