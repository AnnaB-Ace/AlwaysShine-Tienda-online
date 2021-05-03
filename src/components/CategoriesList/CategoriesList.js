import React, { useEffect, useState } from "react";
// import { products } from "../ItemListContainer/ItemListContainer";
import { useParams } from "react-router";

export const CategoriesList = (props) => {
  const { categoria } = useParams();

  // aca debo usar el id dinamico
  const [productscategory, setproductscategory] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(
        `https://run.mocky.io/v3/0f139187-be0b-4d67-8f4c-dd461bd8519e`
      );
      const productsC = await response.json();
      console.log(productsC);

      const productosFiltrados = productsC.filter(
        (f) => f.productsC.categoria === "Jeans"
      );
      console.log(productosFiltrados);
      setproductscategory(productosFiltrados);
    };
    getItems();
  }, [productscategory]);

  return (
    <div>
      {productscategory.map((product) => {
        return <li key={product}>{product.title}</li>;
      })}
    </div>
  );
};
