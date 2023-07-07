import React from "react";

import { slide as Menu } from "react-burger-menu";

import "../styles/header/heading.css";
import logo from "../assets/vitamax-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <header className="mobile-header">
        <img className="logo" src={logo}></img>
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      </header>
    </div>
  );
};

export default Header;
