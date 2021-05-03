import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { LoginPerson } from "../LoginPerson/LoginPerson";
import { SearchInput } from "../SearchInput/SearchInput";
import { Link } from "react-router-dom";
import { products } from "../ItemListContainer/ItemListContainer";
import CategoriesList from "../CategoriesList/CategoriesList";

const { categoria } = products;
export const NavBar = () => {
  return (
    <header className="topbar">
      <p className="logo">MiArgentina</p>
      <SearchInput />
      <nav className="navigation">
        <ul className="links">
          <li className="link categoria1">
            <Link to={`/category/${categoria}`}>Categorias</Link>
          </li>
          <li className="link">
            <a href="#">
              <LoginPerson />
            </a>
          </li>
          <li className="link">
            <a href="#">
              <CartWidget />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
