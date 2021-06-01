import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import MyLoading from "../Common/MyLoading";
import "./ItemDetailContainer.css";
import MyButton from "../Common/MyButton";
import { Link } from "react-router-dom";
function ItemDetailContainer() {
  const { id } = useParams();

  const [itemI, setItemI] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemCollectionId = db.collection("items");
    const itemind = itemCollectionId.doc(id);

    itemind.get().then((doc) => {
      if (!doc.exists) {
        setError(true);
      } else {
        const data = { id: doc.id, ...doc.data() };
        setItemI(data);
      }
    });
  }, [id]);

  if (error) {
    return (
      <>
        <div className="error-container">
          <div className="error">El producto no existe</div>
          <Link to={"/"}>
            <MyButton label="Ver más productos" type="secondary" />
          </Link>
        </div>
      </>
    );
  }

  return itemI ? <ItemDetail item={itemI} /> : <MyLoading magin="40px" />;
}

export default ItemDetailContainer;
