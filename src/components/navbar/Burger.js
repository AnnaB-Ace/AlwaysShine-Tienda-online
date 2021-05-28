import React, { useState } from "react";
import styled from "styled-components";
import { Categories } from "../Categories/Categories";

const StyleBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  z-index: 20;
  display: none;

  @media(max-width: 768px){
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
      
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transform-origin:1px;
    transition: all 0.3s linear
   
`;

const Burger = () => {
  // background-color: ${({ openBurger }) => (openBurger ? "#ccc" : "#333")};
  const [openBurger, setOpenBurger] = useState(false);
  const handleOpen = () => {
    setOpenBurger(!openBurger);
    console.log("click");
  };
  return (
    <>
      <StyleBurger
        openBurger={openBurger}
        handleOpen={handleOpen}
        onClick={handleOpen}
      >
        <div
          style={{
            background: openBurger ? "#CCC" : "#333",
            transform: openBurger ? "rotate(45deg)" : "rotate(0deg)",
          }}
        />
        <div
          style={{
            background: openBurger ? "#CCC" : "#333",
            transform: !openBurger ? "translateX(0)" : "translateX(100%)",
            opacity: !openBurger ? 1 : 0,
          }}
        />
        <div
          style={{
            background: openBurger ? "#CCC" : "#333",
            transform: !openBurger ? "rotate(0)" : "rotate(-45deg)",
          }}
        />
      </StyleBurger>
      <Categories openBurger={openBurger} handleOpen={handleOpen} />
    </>
  );
};

export default Burger;
