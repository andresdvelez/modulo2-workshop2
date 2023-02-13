import React from "react";
import Logo from "../../utils/Logo";
import "./style.scss";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <Logo />
        <nav className="footer__left-links">
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#events">Events</a>
          <a href="#products">Products</a>
          <a href="#support">Support</a>
        </nav>
      </div>
      <div className="footer__right">
        <div className="footer__right-medias">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={pinterest} alt="" />
          <img src={instagram} alt="" />
        </div>
        <p className="footer__bottom-right">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
