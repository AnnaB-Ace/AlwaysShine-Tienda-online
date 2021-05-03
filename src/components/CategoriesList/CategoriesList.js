import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function CategoriesList(props) {
  // const { categoria } = useParams();
  const [productosCategoria, setproductosCategoria] = useState([]);

  useEffect(() => {
    const getProductCategory = async () => {
      const response = await fetch(
        `https://run.mocky.io/v3/0f139187-be0b-4d67-8f4c-dd461bd8519e`
      );
      const productoC = await response.json();
      const productosFiltrados = productoC.filter(
        (f) => f.productoC.categoria === "Jeans"
      );
      setproductosCategoria(productosFiltrados);
    };
    getProductCategory();
  }, [productosCategoria]);

  return (
    <div>
      {productosCategoria.map((product) => {
        return <li key={product}>{product.title}</li>;
      })}
    </div>
  );
}

export default CategoriesList;
