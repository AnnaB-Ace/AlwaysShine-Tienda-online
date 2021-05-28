import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
     
      
      flex-flow: column nowrap;
      background-color: #0d2538;
      position: fixed;
      top 0;
      left: 0;
      height: 100vh;
      width: 300px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
      display: none;

      .NavLink{
        color: #fff;
        text-decoration: none;
      }
    }

  }
`;
export const Categories = ({ openBurger, handleOpen }) => {
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
            <NavLink className="NavLink" to={`/category/${category}`}>
              {category}
            </NavLink>
          </li>
        );
      })}
    </UL>
  );
};

// const [categories, setcategories] = useState([
//   "Abrigo",
//   "Sweater",
//   "Pollera",
//   "Jeans",
//   "Vestido",
// ]);

//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-lg-12 col-xs-12">
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ml-auto">
//                 {categories.map((category) => {
//                   return (
//                     <li className="nav-item" key={category}>
//                       <NavLink
//                         className="nav-link"
//                         to={`/category/${category}`}
//                       >
//                         {category}
//                       </NavLink>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
