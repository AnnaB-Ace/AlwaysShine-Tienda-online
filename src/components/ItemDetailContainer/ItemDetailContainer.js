import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css";

function ItemDetailContainer(props) {
  // const id = props.match.params.id;
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      const response = await fetch(
        `https://run.mocky.io/v3/0f139187-be0b-4d67-8f4c-dd461bd8519e`
      );
      const products = await response.json();
      const currentProduct = products.find((p) => p.id === Number(id));
      setLoading(false);
      setProductDetail(currentProduct);
    };
    getItems();
  }, [id]);

  if (loading) {
    return <div>Cargando ...</div>;
  }

  return productDetail ? (
    <div className="Container-fluid">
      <div className="row">
        <div className="col-lg-6 col-xs-12 imagen">
          <img
            className="img-fluid"
            src={
              productDetail.imagenExpandida
                ? require(`../../img/jpg/${productDetail.imagenExpandida}.jpg`)
                    .default
                : ""
            }
          />
        </div>

        <div className="col-lg-6 col-xs-12 Propiedades">
          <div className="title">{productDetail.title}</div>
          <div className="title">${productDetail.precio}</div>
          <div className="description">{productDetail.description}</div>
          <ItemCount initial={1} stock={5} />
        </div>
      </div>
    </div>
  ) : null;
}

export default ItemDetailContainer;
