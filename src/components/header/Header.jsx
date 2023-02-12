import React from "react";
import "./styles.scss";
import logo from "../../assets/logo.svg";

function Header() {
  const listMenu = ["About", "Careers", "Events", "Products", "Support"];

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={logo} alt="loopstudio" />
      </a>
      <nav className="nav__links">
        {listMenu.map((item, index) => (
          <div key={index}>
            <a href="#about">{item}</a>
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Header;
