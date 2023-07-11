import React from "react";

import { slide as Menu } from "react-burger-menu";

import "../styles/header/heading.css";
import logo from "../assets/logonobg.svg";
import { Link } from "react-scroll";

import { BsTelephoneFill } from "react-icons/bs";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "clamp(16px,7.47648vw,64px)",
    height: "clamp(14.5px,6.77556vw,58px)",
    right: "clamp(12px,5.60736vw,48px)",
    top: "clamp(17.5px,8.177399999999999vw,70px)",
  },
  bmBurgerBars: {
    background: "#032727",
    width: "clamp(17.5px,8.177399999999999vw,70px)",
    height: "clamp(2px,0.93456vw,8px)",
    borderRadius: "120px",
  },
  bmBurgerBarsHover: {
    background: "#1f1f1f",
  },
  bmCrossButton: {
    height: "clamp(18px,1.875vw,72px)",
    width: "clamp(18px,1.875vw,72px)",
    left: "clamp(150px,15.625vw,600px)",
    right: "clamp(32px,3.3333333333333335vw,128px)",
    top: "clamp(10px,1.0416666666666667vw,40px)",
    bottom: "0",
    overflowX: "hidden",
  },
  bmCross: {
    background: "#FCEE03",
    width: "3px",
    height: "clamp(13.5px,1.40625vw,54px)",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0px",
  },
  bmMenu: {
    background: "#022761",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    overflowX: "hidden",
    overflowY: "hidden",
    boxShadow: "0px 0px 37px 15px rgba(0, 0, 0, 0.25)",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingRight: "clamp(136px,14.166666666666666vw,544px)",
    paddingTop: "clamp(22.5px,2.34375vw,90px)",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "clamp(9.25px,0.9635416666666666vw,37px)",
    textAlign: "left",
    color: "#FCEE03",
    overflowX: "hidden",
  },
  bmItem: {
    display: "inline-block",
    marginTop: "clamp(12px,1.25vw,48px)",
  },
  // bmOverlay: {
  //   left: "0",
  //   right: "0",
  //   bottom: "0",
  //   top: "0",
  //   width: "100vw",
  //   height: "clamp(5666.3px,590.2395833333334vw,22665.2px)",
  //   position: "absolute",
  //   background: "rgba(0, 0, 0, 0.3)",
  // },
};

const Header = () => {
  return (
    <div className="header">
      <header className="mobile-header">
        <img className="logo" src={logo} alt="logo"></img>
        <Menu styles={styles} right>
          <Link to="О компании" className="menu-item" href="/">
            О компании
          </Link>
          <Link to="Team" className="menu-item">
            Команда
          </Link>
          <Link to="Partnership" className="menu-item">
            Партнеры
          </Link>
          <Link to="License" className="menu-item">
            Лицензия
          </Link>
        </Menu>
      </header>
      <header className="web-header">
        <img className="logo" src={logo} alt="logo"></img>
        <nav className="navigation-links">
          <Link to="О компании" className="menu-item 1" href="/">
            О компании
          </Link>
          <Link to="Team" className="menu-item t">
            Команда
          </Link>
          <Link to="Partnership" className="menu-item t">
            Партнеры
          </Link>
          <Link to="License" className="menu-item t">
            Лицензия
          </Link>
        </nav>
        <div className="phone-container">
          <BsTelephoneFill className="phone-icon"></BsTelephoneFill>
          <a className="phone" href="tel:+8 (800) 000-00-00">
            8 (800) 000-00-00
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
