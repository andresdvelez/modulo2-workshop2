import React, { useState } from "react";
import "./styles.scss";
import burgerMenu from "../../assets/icon-hamburger.svg";
import Logo from "../../utils/Logo";
import MobileMenu from "../mobileMenu/MobileMenu";

export const listMenu = ["About", "Careers", "Events", "Products", "Support"];

function Header() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <header className="header">
      <Logo />
      <button onClick={handleClick} className="hamburger-menu">
        <img src={burgerMenu} alt="" />
      </button>
      <MobileMenu isShow={show} handleClick={handleClick} />

      <nav className="nav__links">
        {listMenu.map((item, i) => (
          <a key={i} href="#">
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
