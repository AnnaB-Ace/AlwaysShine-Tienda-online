export const NavBar = () => {
  return (
    <header className="topbar">
      <p className="logo">Travel-Alternative</p>
      <nav className="navigation">
        <ul className="links">
          <li className="link">
            <a href="#">Inicio</a>
          </li>
          <li className="link">
            <a href="#">Productos</a>
          </li>
          <li className="link">
            <a href="#">Carrito</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
