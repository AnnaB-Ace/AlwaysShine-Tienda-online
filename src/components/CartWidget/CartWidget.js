import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import bag from "../../img/svg/shoppingbag.svg";
import "./CartWidget.css";

export const CartWidget = () => {
  const { cart, cantTotal } = useCartContext();

  return (
    <div className="cart">
      {cart.length !== 0 ? (
        <Link className="link" to={"/cart"}>
          <img src={bag} className="cart-icon" alt="Cart" />
          <div>({cantTotal(cart)})</div>
        </Link>
      ) : (
        <Link className="link" to={"/cart"}>
          <img src={bag} className="cart-icon" alt="Cart" />
          <div className="cart-cant">({cantTotal(cart)})</div>
        </Link>
      )}
    </div>
  );
};
