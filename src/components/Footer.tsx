import React from "react";

import "../styles/footer/footer.css";
import logoWhite from "../assets/logoWhite.svg";

import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-phone">
        <img className="logo-white" src={logoWhite} alt="logo-white"></img>
        <nav className="nav-links">
          <Link className="link" to="about">
            О компании
          </Link>
          <Link className="link main" to="team">
            Команда
          </Link>
          <Link className="link main" to="partnership">
            Партнеры
          </Link>
          <Link className="link main" to="license">
            Лицензия
          </Link>
        </nav>
        <span className="line"></span>
        <p className="footer-paragraph">
          Copyright ® 2021 Company All rights Rcerved
        </p>
      </div>
      <div className="footer-web">
        <div className="footer-content">
          <img className="vitamax-logo" src={logoWhite} alt="logo"></img>
          <nav className="nav-links">
            <Link className="link" to="about">
              О компании
            </Link>
            <Link className="link team" to="team">
              Команда
            </Link>
            <Link className="link partner" to="partnership">
              Партнеры
            </Link>
            <Link className="link license" to="license">
              Лицензия
            </Link>
          </nav>
        </div>
      </div>
      <span className="line"></span>
      <p className="footer-paragraph">
        Copyright ® 2021 Company All rights Rcerved
      </p>
    </footer>
  );
};

export default Footer;
