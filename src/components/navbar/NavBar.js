import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { LoginPerson } from "../LoginPerson/LoginPerson";
import { Categories } from "../Categories/Categories";

export const NavBar = () => {
  return (
    <div>
      <header className="topbar">
        <p className="logo">MiArgentina</p>
        <nav className="navigation">
          <ul className="links">
            <li className="link">
              <LoginPerson />
            </li>
            <li className="link">
              <CartWidget />
            </li>
          </ul>
        </nav>
      </header>
      <Categories />
    </div>
  );
};
