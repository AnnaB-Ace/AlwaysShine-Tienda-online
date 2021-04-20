import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { LoginPerson } from "../LoginPerson/LoginPerson";
import { SearchInput } from "../SearchInput/SearchInput";

export const NavBar = () => {
  return (
    <header className="topbar">
      <p className="logo">MiArgentina</p>
      <SearchInput />
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
  );
};
