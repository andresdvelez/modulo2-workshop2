import React from "react";
import "./Logo.scss";
import logo from "../assets/logo.svg";

function Logo() {
  return (
    <a href="#" className="logo">
      <img src={logo} alt="loopstudio" />
    </a>
  );
}

export default Logo;
