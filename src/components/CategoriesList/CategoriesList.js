import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase";
import "./CategoriesList.css";
// import { useCartContext } from "../../context/cartContext";

export const CategoriesList = () => {
  const { categoriaid } = useParams();

  const [productscategory, setproductscategory] = useState([]);
  const [categoriaWithDiscount, setcategoriaWithDiscount] = useState([
    "Sweater",
    "Vestido",
  ]);

  useEffect(() => {
    const db = getFirestore();
    const items = db.collection("items");
    const cat = items.where("category", "==", categoriaid);

    cat.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setproductscategory(data);
    });
  }, [categoriaid]);

  const hasDiscount = (categoriaid) =>
    categoriaWithDiscount.some((category) => category === categoriaid);
  return (
    <div>
      <>
        {hasDiscount(categoriaid) && (
          <p>Toda esta categoria esta con descuento del 30%</p>
        )}
      </>
      <div className="CategoriesList">
        {productscategory.map((product, id) => {
          return (
            <div
              key={product.id}
              className="tarjeta "
              style={{ maxWidth: 200 }}
            >
              <div>
                <Link to={`/item/${product.id}`}>
                  <img
                    src={require(`../../img/jpg/${product.image}.jpg`).default}
                    alt="coleccion2021"
                    className="card-img img-fluid"
                  />
                </Link>
              </div>
              <div className="Box">
                <h5>{product.title}</h5>

                {hasDiscount(categoriaid) ? (
                  <p className="price_withDiscount">
                    <small>${product.price}</small>
                  </p>
                ) : (
                  <p className="price">
                    <small>${product.price}</small>
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
