import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css";
import styled from "styled-components";

const UL = styled.ul`
  flex-flow: column nowrap;
  background-color: #333333;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 2;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  list-style: none;
  .NavLink{
    color: #fff;
    text-decoration: none;
  }
  li {
    padding: 18px 10px;
  }
`;

export const Categories = ({ openBurger, handleCategory }) => {
  const [categories, setcategories] = useState([
    "Abrigo",
    "Sweater",
    "Pollera",
    "Jeans",
    "Vestido",
  ]);

  return (
    <UL
      openBurger={openBurger}
      style={{
        transform: openBurger ? "traslateX(0)" : "traslateX(100%)",
      }}
    >
      {categories.map((category) => {
        return (
          <li key={category}>
            <NavLink
              onClick={handleCategory}
              className="NavLink"
              to={`/category/${category}`}
            >
              {category}
            </NavLink>
          </li>
        );
      })}
    </UL>
  );
};