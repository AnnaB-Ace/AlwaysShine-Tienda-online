import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { LoginPerson } from "../LoginPerson/LoginPerson";
import { Categories } from "../Categories/Categories";
import { Link } from "react-router-dom";
// import { useCartContext } from "../../context/cartContext";

// import PropTypes from "prop-types";

export const NavBar = () => {
  // para el navbar me intereza la cantidad por lo tanto la tengo que guardar en un estado

  // const { quantity } = useCartContext();
  // const { cart } = useCartContext();

  // console.log(`Hemos guardado la cantidad: ${quantity} `);

  return (
    <div>
      <header className="topbar">
        <p className="logo">Always Shine</p>
        <nav className="navigation">
          <ul className="links">
            <li className="link">
              <Link to={"/login"}>
                <LoginPerson />
              </Link>
            </li>
            <li>
              <CartWidget />
            </li>
          </ul>
        </nav>
      </header>
      <Categories />
    </div>
  );
};
// NavBar.propTypes = {
//   itemsQuantity: PropTypes.number.isRequired,
// };
