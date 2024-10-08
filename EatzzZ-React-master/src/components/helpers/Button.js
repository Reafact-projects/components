import React from "react";
import "./Button.module.css";
const Button = (props) => {
  return (
    <button className="btn flash-slide flash-slide--green">
      {props.children}
    </button>
  );
};

export default Button;
