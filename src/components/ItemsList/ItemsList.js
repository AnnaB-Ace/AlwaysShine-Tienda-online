import { Items } from "../Items/items";

const ItemsList = (props) => {
  const { items = [] } = props;
  return items.map((product, i) => (
    <Items
      key={i}
      id={product.id}
      categoria={product.category}
      imagen={product.image}
      title={product.title}
      precio={product.price}
      description={product.description}
    />
  ));
};

export default ItemsList;
