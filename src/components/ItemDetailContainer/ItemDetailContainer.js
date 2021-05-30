import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import MyLoading from '../Common/MyLoading'

import "./ItemDetailContainer.css";
function ItemDetailContainer() {
  const { id } = useParams();

  const [itemI, setItemI] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemCollectionId = db.collection("items");
    const itemind = itemCollectionId.doc(id);

    itemind.get().then((doc) => {
      const data = { id: doc.id, ...doc.data() };
      setItemI(data);
    });
  }, [id]);

  return !itemI ? <MyLoading magin="40px"/> : <ItemDetail item={itemI}/>
}

export default ItemDetailContainer;
