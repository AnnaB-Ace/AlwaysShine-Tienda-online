import { useState } from "react";
import "./ItemListContainer.css";

export const Categories = () => {
  const [categories, setcategories] = useState([
    "Remeras",
    "Sweater",
    "Jeans",
    "Camisas",
    "Short/Pollera",
    "Zapatillas",
  ]);
  return (
    <div className="Categories">
      {categories.map((caterory) => {
        return <li key={caterory}>{caterory}</li>;
      })}
    </div>
  );
};
