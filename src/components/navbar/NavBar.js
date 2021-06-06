import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/cartContext";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

import Burger from "./Burger";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: #8fca00;
  align-items: center;

  @media (max-width: 700px) {
     {
      height: 40px;
    }
  }
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
        <NavLink className="NavLink" to={`/`}>
          <div className="logo">Always Shine</div>
        </NavLink>

        <CartWidget />
      </Nav>
      <div className="total-quantity ">
        <span>COMPRA INICIAL: ${sumTotal(cart)}</span>
      </div>
    </>
  );
};

export default NavBar;
