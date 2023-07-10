import React from "react";

import "../styles/footer/footer.css";
import logoWhite from "../assets/logoWhite.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="logo-white" src={logoWhite} alt="logo-white"></img>
      <nav className="nav-links">
        <a className="link">О компании</a>
        <a className="link main">Команда</a>
        <a className="link main">Партнеры</a>
        <a className="link main">Лицензия</a>
      </nav>
      <span className="line"></span>
      <p className="footer-paragraph">
        Copyright ® 2021 Company All rights Rcerved
      </p>
    </footer>
  );
};

export default Footer;
