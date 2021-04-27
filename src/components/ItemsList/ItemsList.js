import { Items } from "../Items/items";

const ItemsList = (props) => {
  const { products = [] } = props;
  return products.map((product, i) => (
    <Items
      key={i}
      title={product.title}
      precio={product.precio}
      description={product.description}
    />
  ));
};

export default ItemsList;
