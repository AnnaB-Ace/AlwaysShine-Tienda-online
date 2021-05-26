import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { LoginPerson } from "../LoginPerson/LoginPerson";
import { Categories } from "../Categories/Categories";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

// import PropTypes from "prop-types";

export const NavBar = () => {
  // para el navbar me intereza la cantidad por lo tanto la tengo que guardar en un estado

  // const { quantity } = useCartContext();
  const { sumTotal, cart } = useCartContext();

  // console.log(`Hemos guardado la cantidad: ${quantity} `);

  return (
    <div>
      <header className="topbar">
        <p className="logo">Always Shine</p>
        <nav className="navigation">
          <ul className="links">
            {/* <li className="link">
              <Link to={"/login"}>
                <LoginPerson />
              </Link>
            </li> */}
            <li>
              <CartWidget />
            </li>
          </ul>
        </nav>
      </header>
      <Categories />
      {sumTotal(cart) >= 10000 ? (
        <div className="envios">
          <p>COMPRA INICIAL: ${sumTotal(cart)}</p>
          <p>ENVIOS A TODO EL PAIS</p>
        </div>
      ) : (
        <div className="envios">ENVIOS GRATIS EN COMPRAS MAYORES A $10.000</div>
      )}
    </div>
  );
};
// NavBar.propTypes = {
//   itemsQuantity: PropTypes.number.isRequired,
// };
