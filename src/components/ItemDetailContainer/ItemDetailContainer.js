import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../ItemListContainer/ItemListContainer";

import "./ItemDetailContainer.css";
function ItemDetailContainer(props) {
  // const id = props.match.params.id;
  const { id } = useParams();

  const [item, setItem] = useState([null]);

  const [loading, setLoading] = useState(false);
  const currentProduct = products.find((p) => p.id === Number(id));
  useEffect(() => {
    setLoading(true);
    const getItems = async () => {
      setLoading(true);

      setLoading(false);
      setItem(currentProduct);
    };
    getItems();
  }, [id]);

  if (loading) {
    return <div>Cargando ...</div>;
  }

  return item ? <ItemDetail item={item} /> : null;
}

export default ItemDetailContainer;

// function ItemDetailContainer(props) {
//   // const id = props.match.params.id;
//   const { id } = useParams();

//   const [productDetail, setProductDetail] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getItems = async () => {
//       setLoading(true);
//       const response = await fetch(
//         `https://run.mocky.io/v3/0f139187-be0b-4d67-8f4c-dd461bd8519e`
//       );
//       const products = await response.json();
//       const currentProduct = products.find((p) => p.id === Number(id));
//       setLoading(false);
//       setProductDetail(currentProduct);
//     };
//     getItems();
//   }, [id]);

//   if (loading) {
//     return <div>Cargando ...</div>;
//   }
//   console.log(productDetail);
