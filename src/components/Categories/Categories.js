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
  );
};
