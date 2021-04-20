import { Product } from "../components/products";

export const List = (props) => {
  return props.products.map((product) => (
    <Product
      title={product.title}
      precio={product.precio}
      description={product.description}
    />
  ));
};
