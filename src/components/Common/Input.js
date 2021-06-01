import React from "react";

const MyInput = ({ type = "text", name = "", value = "", onChange }) => {
  return <input {...{ type, name, value, onChange }} />;
};

export default MyInput;
