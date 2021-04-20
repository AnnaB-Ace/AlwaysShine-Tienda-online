import bag from "../../img/svg/shoppingbag.svg";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div>
      <img src={bag} className="cart-icon" alt="Cart" />
    </div>
  );
};
