import React from "react";
import Logo from "../../utils/Logo";
import "./style.scss";

import closeIcon from "../../assets/icon-close.svg";

import { listMenu } from "../header/Header";

function MobileMenu({ isShow, handleClick }) {
  return (
    <div className={`menu__container ${isShow && "active"}`}>
      <header className="menu__container-header">
        <Logo />
        <button onClick={handleClick} className="menu__container-header-btn">
          <img src={closeIcon} alt="" />
        </button>
      </header>
      <ul className="menu__container-links">
        {listMenu.map((link, i) => (
          <li key={i} className="menu__container-links-link">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileMenu;
