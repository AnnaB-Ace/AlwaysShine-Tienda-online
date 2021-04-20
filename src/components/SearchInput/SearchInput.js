import { useState } from "react";
import lupa from "../../img/svg/lupa.svg";
import "../SearchInput/SearchInput.css";
export const SearchInput = (e) => {
  const [inputValue, setinputValue] = useState("");
  const handleInputChange = (e) => {
    // console.log(e.target.value); vemos la tecla que se preciona
    setinputValue(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //previene la regarga por el navegador
    console.log("Submithecho");
  };

  return (
    <form className="SearchInput" onSubmit={handleSubmit}>
      <input
        className="inputBucar"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <img className="search-icon" src={lupa} alt="search-icon" />
    </form>
  );
};
