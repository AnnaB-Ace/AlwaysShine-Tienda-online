import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css";

export const Categories = () => {
  const [categories, setcategories] = useState([
    "Abrigo",
    "Sweater",
    "Pollera",
    "Jeans",
    "Vestido",
  ]);

  return (
    <div className="Categories">
      {categories.map((category) => {
        return (
          <li key={category}>
            <NavLink className="Lista" to={`/category/${category}`}>
              {category}
            </NavLink>
          </li>
        );
      })}
    </div>
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
  );
};
