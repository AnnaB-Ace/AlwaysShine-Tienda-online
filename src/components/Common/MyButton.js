import React from "react";
import "./MyButton.css";
import MyLoading from "./MyLoading";

const MyButton = (prop) => {
  const {
    label = "my button",
    onClick,
    disabled,
    type = "primary",
    buttonType = "",
    loading,
  } = prop;

  const getClass = () => {
    let _class = "my-button-primary";
    switch (type) {
      case "primary":
        _class = "my-button-primary";
        break;
      case "secondary":
        _class = "my-button-secondary";
        break;
      case "rentangle":
        _class = "my-button-rentangle";
        break;
      case "small-green":
        _class = "my-buttom-green";
        break;
      case "small":
        _class = "my-buttom-small";
        break;
      default:
        break;
    }
    return _class;
  };

  return (
    // <button className={type === "primary" ? "button my-button-primary" :  "button my-button-secondary"} onClick={onClick} disabled={disabled}>{label}</button>
    <button
      type={buttonType}
      className={`button ${getClass()}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <MyLoading /> : label}
    </button>
  );
};

export default MyButton;
