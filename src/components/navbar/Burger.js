import React, { useState } from "react";
import styled from "styled-components";
import { Categories } from "../Categories/Categories";

const StyleBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transform-origin:1px;
    transition: all 0.3s linear;
    background-color: ${(props) => (props.openBurger ? "#ccc" : "#333")};
  }
`;

const Burger = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const handleOpen = () => setOpenBurger(!openBurger);

  const handleCategory = () => setOpenBurger(false);
  
  return (
    <>
      <StyleBurger
        {...{openBurger}}
        onClick={handleOpen}
      >
        <div
          style={{
            transform: openBurger ? "rotate(45deg)" : "rotate(0deg)",
          }}
        />
        <div
          style={{
            transform: !openBurger ? "translateX(0)" : "translateX(100%)",
            opacity: !openBurger ? 1 : 0,
          }}
        />
        <div
          style={{
            transform: !openBurger ? "rotate(0)" : "rotate(-45deg)",
          }}
        />
      </StyleBurger>
      {openBurger && (
        <Categories {...{openBurger, handleOpen, handleCategory}}/>
      )}
    </>
  );
};

export default Burger;
