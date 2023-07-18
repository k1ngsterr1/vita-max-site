import React from "react";

import logo1 from "../assets/logo1.png";
import GenSci from "../assets/GenSci.png";
import logo2 from "../assets/logo2.png";
import ProfitPharm from "../assets/profitpharm.png";
import Kobayashi from "../assets/kobayashi.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

import "../styles/partners-screen/partners-screen.css";

const PartnersScreen = () => {
  return (
    <div className="partners-screen" id="partners">
      <section className="partners-section">
        <h2 className="partners-heading">Партнеры</h2>
        <div className="logos">
          <div className="logo-upper">
            <img
              className="logo1"
              onClick={() =>
                window.open("https://www.gensci-china.com/", "_blank")
              }
              src={GenSci}
              alt="logo1"
            ></img>
            <img
              className="logo2"
              src={ProfitPharm}
              alt="logo2"
              onClick={() => window.open("https://profitpharm.ru/", "_blank")}
            ></img>
          </div>
          <div className="logo-lower">
            <img
              className="logo3"
              src={Kobayashi}
              alt="logo3"
              onClick={() =>
                window.open(
                  "https://www.kobayashi.co.jp/english/index.html",
                  "_blank"
                )
              }
            ></img>
            <img className="logo4" src={logo4} alt="logo4"></img>
          </div>
        </div>
      </section>
      <section className="partners-section-web">
        <h2 className="partners-heading">Партнеры</h2>
        <div className="logos">
          <img
            className="logo1"
            onClick={() =>
              window.open("https://www.gensci-china.com/", "_blank")
            }
            src={GenSci}
            alt="logo1"
          ></img>
          <img
            className="logo2"
            src={ProfitPharm}
            alt="logo2"
            onClick={() => window.open("https://profitpharm.ru/", "_blank")}
          ></img>
          <img
            className="logo3"
            src={Kobayashi}
            alt="logo3"
            onClick={() =>
              window.open(
                "https://www.kobayashi.co.jp/english/index.html",
                "_blank"
              )
            }
          ></img>
          <img className="logo4" src={logo4} alt="logo4"></img>
          <img className="logo5" src={logo5} alt="logo5"></img>
        </div>
      </section>
    </div>
  );
};

export default PartnersScreen;
