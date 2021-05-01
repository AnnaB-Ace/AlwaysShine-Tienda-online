import { ItemDetail } from "../IntemDetail/ItemDetail";
// import { Items } from "../Items/items";
import "./ItemsList.css";

const ItemsList = (props) => {
  const { products = [] } = props;
  return products.map((product, i) => (
    <ItemDetail
      key={i}
      imagen={product.imagen}
      title={product.title}
      precio={product.precio}
      description={product.description}
    />
  ));
};

export default ItemsList;
