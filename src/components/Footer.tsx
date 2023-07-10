import React from "react";

import "../styles/footer/footer.css";
import logoWhite from "../assets/logoWhite.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="logo-white" src={logoWhite} alt="logo-white"></img>
      <nav className="nav-links">
        <a className="link">О компании</a>
        <a className="link">Команда</a>
        <a className="link">Партнеры</a>
        <a className="link">Лицензия</a>
      </nav>
    </footer>
  );
};

export default Footer;
