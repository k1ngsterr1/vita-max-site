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
          <img className="logo1" alt="logo1"></img>
        </div>
      </section>
    </div>
  );
};

export default PartnersScreen;
