import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemsList from "../ItemsList/ItemsList";
import { getFirestore } from "../../firebase/index";
import MyLoading from "../Common/MyLoading";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [carga, setcarga] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setcarga(true);
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const querySnapshot = await itemCollection.get();
        setcarga(false);
        if (querySnapshot.size === 0) {
          console.log("probando si pasa x aca");
        } else {
          let data = [];
          querySnapshot.docs.forEach((doc) =>
            data.push({
              id: doc.id,
              ...doc.data(),
            })
          );
          setItems(data);
        }
      } catch (error) {
        console.error("Firestore error: ", error);
        setcarga(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div>
        {carga ? (
          <MyLoading margin="30px" className="my-loading" />
        ) : (
          <div className="ItemsListContainer">
            <ItemsList className="list" items={items} />
          </div>
        )}
      </div>
    </>
  );
};
