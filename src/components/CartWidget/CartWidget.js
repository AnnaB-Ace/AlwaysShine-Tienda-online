import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import bag from "../../img/svg/shoppingbag.svg";
import "./CartWidget.css";

export const CartWidget = () => {
  const { quantity } = useCartContext();
  const { cart } = useCartContext();
  return (
    <div>
      {cart.length !== 0 ? (
        <Link className="link" to={"/cart"}>
          <img src={bag} className="cart-icon" alt="Cart" />
          <div>({quantity})</div>
        </Link>
      ) : (
        <Link className="link" to={"/cart"}>
          <img src={bag} className="cart-icon" alt="Cart" />
          <div>({quantity})</div>
        </Link>
      )}
    </div>
  );
};
// {
//   cart.length !== 0 ? (
//     <Link className="link" to={"/cart"}>
//       <CartWidget />({quantity}) Cart
//     </Link>
//   ) : (
//     <CartWidget
//       onClick={() => {
//         return <div>Nohay</div>;
//       }}
//     >
//       {quantity}
//     </CartWidget>
//   );
// }
