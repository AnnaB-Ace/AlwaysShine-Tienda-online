import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase";
import MyLoading from "../Common/MyLoading";
import "./CategoriesList.css";

export const CategoriesList = () => {
  const { categoriaid } = useParams();

  const [productscategory, setproductscategory] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const items = db.collection("items");
    const cat = items.where("category", "==", categoriaid);

    cat.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setproductscategory(data);
      setLoading(false);
    });
  }, [categoriaid]);

  return (
    <div>
      <div className="categories-list">
        {loading ? (
          <MyLoading margin="30px" />
        ) : (
          productscategory.map((product, id) => {
            return (
              <div
                key={product.id}
                className="tarjeta "
                style={{ maxWidth: 200 }}
              >
                <div>
                  <Link to={`/item/${product.id}`}>
                    <img
                      src={
                        require(`../../img/jpg/${product.image}.jpg`).default
                      }
                      alt="coleccion2021"
                      className="card-img img-fluid"
                    />
                  </Link>
                </div>
                <div className="Box">
                  <h5>{product.title}</h5>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
