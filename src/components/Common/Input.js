import React from "react";
// import "./common.css";

const MyInput = ({ type = "text", name = "", value = "", onChange }) => {
  return <input className="my-input" {...{ type, name, value, onChange }} />;
};

export default MyInput;
