import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemsList from "../ItemsList/ItemsList";

const products = [
  {
    title: "Remera1",
    precio: "100",
    description: "Remeras basicas unicolor1",
  },
  {
    title: "Remera2",
    precio: "200",
    description: "Remeras basicas unicolor2",
  },
  {
    title: "Remera3",
    precio: "300",
    description: "Remeras basicas unicolor3",
  },
  {
    title: "Remera4",
    precio: "400",
    description: "Remeras basicas unicolor4",
  },
  {
    title: "Remera5",
    precio: "500",
    description: "Remeras basicas unicolor5",
  },
];

const getProductsMock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsFromApi = await getProductsMock();
      setProducts(productsFromApi);
    };
    getProducts();
  }, []);

  return (
    <div className="ItemsListContainer">
      <ItemsList className="list" products={products} />
    </div>
  );
};
