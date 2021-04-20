// export const Products = () => {
//   <div>
//     <h2>{products[0].title}</h2>
//     <p>{products[0].precio}</p>
//     <p>{products[0].description}</p>
//   </div>;
// }; forma 1)

//forma 2)
export const Product = (props) => {
  const handleClick = () =>
    alert(`Compra ${props.title}, porque esta en promo, vence en 10 min`);
  return (
    <div onClick={handleClick}>
      <h2>{props.title}</h2>
      <p>{props.precio}</p>
      <p>{props.description}</p>
    </div>
  );
};
// map recibe cada elemento del arreglo lo pasa a la funcion que esta adentro, el map recibe como parametro una funcion, con cada elemento dentro del arreglo lo recibe como parametro esa funcion
