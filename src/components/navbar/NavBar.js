import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { LoginPerson } from "../LoginPerson/LoginPerson";
import { Categories } from "../Categories/Categories";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

export const NavBar = ({ itemsQuantity = 0 }) => {
  return (
    <div>
      <header className="topbar">
        <p className="logo">MiArgentina</p>
        <nav className="navigation">
          <ul className="links">
            <li className="link">
              <LoginPerson />
            </li>
            <Link className="link" to={"/cart"}>
              <CartWidget />({itemsQuantity}) Cart
            </Link>
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
