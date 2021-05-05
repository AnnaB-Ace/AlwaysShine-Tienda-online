// import { ItemDetail } from "../IntemDetail/ItemDetail";
import { Items } from "../Items/items";
import "./ItemsList.css";

const ItemsList = (props) => {
  const { products = [] } = props;
  return products.map((product, i) => (
    <Items
      key={i}
      id={product.id}
      categoria={product.categoria}
      imagen={product.imagen}
      title={product.title}
      precio={product.precio}
      description={product.description}
    />
  ));
};

export default ItemsList;
