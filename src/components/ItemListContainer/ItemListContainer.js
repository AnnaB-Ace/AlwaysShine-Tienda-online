import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemsList from "../ItemsList/ItemsList";

const products = [
  {
    id: 1,
    imagen: require("../../img/jpg/remera1.jpg").default,
    title: "Remera Basica unicolor",
    precio: "100",
    description: "Remeras basica manga corta unicolor",
  },
  {
    id: 2,
    imagen: require("../../img/jpg/remera3.jpg").default,
    title: "Sweater Primavera",
    precio: "200",
    description: "Sweater elastizado manga larga con volado al  hombro",
  },
  {
    id: 3,
    imagen: require("../../img/jpg/remera3.jpg").default,
    title: "Remera3",
    precio: "300",
    description: "Remeras basicas unicolor3",
  },
  {
    id: 4,
    imagen: require("../../img/jpg/remera1.jpg").default,
    title: "Remera4",
    precio: "400",
    description: "Remeras basicas unicolor4",
  },
  {
    id: 5,
    imagen: require("../../img/jpg/remera1.jpg").default,
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
