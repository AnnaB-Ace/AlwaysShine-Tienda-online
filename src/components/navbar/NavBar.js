import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/cartContext";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: #8fca00;
  aling-items: center;
  .logo {
    padding: 15px 0;
  }
`;
export const NavBar = () => {
  const { sumTotal, cart } = useCartContext();
  return (
    <>
      <Nav>
        <div className="logo">Always Shine</div>
        <Burger />
        <CartWidget />
      </Nav>
      {sumTotal(cart) >= 10000 ? (
        <div className="envios">
          <p>COMPRA INICIAL: ${sumTotal(cart)}</p>
          <p>ENVIOS A TODO EL PAIS</p>
        </div>
      ) : (
        <div className="envios">ENVIOS GRATIS EN COMPRAS MAYORES A $10.000</div>
      )}
    </>
  );
};

export default NavBar;

// import "./NavBar.css";
// import { CartWidget } from "../CartWidget/CartWidget";
// import { LoginPerson } from "../LoginPerson/LoginPerson";
// import { Categories } from "../Categories/Categories";
// import { Link } from "react-router-dom";
// import { useCartContext } from "../../context/cartContext";

// // import PropTypes from "prop-types";

// export const NavBar = () => {
//   // para el navbar me intereza la cantidad por lo tanto la tengo que guardar en un estado

//   // const { quantity } = useCartContext();
//   const { sumTotal, cart } = useCartContext();

//   // console.log(`Hemos guardado la cantidad: ${quantity} `);

//   return (
//     <div>
//       <header className="topbar">
//         <p className="logo">Always Shine</p>
//         <nav className="navigation">
//           <ul className="links">
//             {/* <li className="link">
//               <Link to={"/login"}>
//                 <LoginPerson />
//               </Link>
//             </li> */}
//             <li>
//               <CartWidget />
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <Categories />
//       {sumTotal(cart) >= 10000 ? (
//         <div className="envios">
//           <p>COMPRA INICIAL: ${sumTotal(cart)}</p>
//           <p>ENVIOS A TODO EL PAIS</p>
//         </div>
//       ) : (
//         <div className="envios">ENVIOS GRATIS EN COMPRAS MAYORES A $10.000</div>
//       )}
//     </div>
//   );
// };
