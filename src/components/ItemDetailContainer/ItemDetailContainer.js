import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
// import { products } from "../ItemListContainer/ItemListContainer";

import "./ItemDetailContainer.css";
function ItemDetailContainer(props) {
  // const id = props.match.params.id;
  const { id } = useParams();

  const [itemI, setItemI] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollectionId = db.collection("items");
    const itemind = itemCollectionId.doc(id);

    itemind.get().then((doc) => {
      const data = { id: doc.id, ...doc.data() };
      setItemI(data);
    });
  }, [id]);

  return itemI && <ItemDetail item={itemI} />;
}

export default ItemDetailContainer;
