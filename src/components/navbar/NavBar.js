import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/cartContext";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: #8fca00;
  align-items: center;
  .logo {
    padding: 15px 0;
  }
`;
export const NavBar = () => {
  const { sumTotal, cart } = useCartContext();
  return (
    <>
      <Nav>
        <Burger />
        <div className="logo">Always Shine</div>
        <CartWidget />
      </Nav>
      {sumTotal(cart) >= 10000 ? (
        <div className="envios">
          <span>COMPRA INICIAL: ${sumTotal(cart)}</span>
          <span>ENVIOS A TODO EL PAIS</span>
        </div>
      ) : (
        <div className="envios">ENVIOS GRATIS EN COMPRAS MAYORES A $10.000</div>
      )}
    </>
  );
};

export default NavBar;
