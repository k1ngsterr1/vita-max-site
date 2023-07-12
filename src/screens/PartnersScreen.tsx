import React from "react";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

import "../styles/partners-screen/partners-screen.css";

const PartnersScreen = () => {
  return (
    <div className="partners-screen">
      <section className="partners-section">
        <h2 className="partners-heading">Партнеры</h2>
        <div className="logos">
          <div className="logo-upper">
            <img className="logo1" src={logo1} alt="logo1"></img>
            <img className="logo2" src={logo2} alt="logo2"></img>
          </div>
          <div className="logo-lower">
            <img className="logo3" src={logo3} alt="logo3"></img>
            <img className="logo4" src={logo4} alt="logo4"></img>
          </div>
        </div>
      </section>
      <section className="partners-section-web">
        <img className="logo1" src={logo1} alt="logo1"></img>
        <img className="logo2" src={logo2} alt="logo2"></img>
        <img className="logo3" src={logo3} alt="logo3"></img>
        <img className="logo4" src={logo4} alt="logo4"></img>
      </section>
    </div>
  );
};

export default PartnersScreen;
