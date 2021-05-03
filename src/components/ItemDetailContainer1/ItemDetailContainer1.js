import React, { useEffect, useState } from "react";
import ItemsList from "../ItemsList/ItemsList";
import "../ItemListContainer/ItemListContainer.css";
import { useParams } from "react-router";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  // aca debo usar el id dinamico
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(
        `https://run.mocky.io/v3/817f0bc7-d672-4a79-b551-0a1219b82e6a`
      );
      const products = await response.json();
      //   setproducts(products);
      console.log(products);
      setproducts(products);
    };
    getItems();
  }, []);
  return (
    <div className="ItemsListContainer">
      <ItemsList className="list" products={products} />
    </div>
  );
};
