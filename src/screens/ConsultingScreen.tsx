import React from "react";

import consulting from "../assets/consulting.png";
import "../styles/consulting-screen/consulting-screen.css";

const ConsultingSreen = () => {
  return (
    <div className="consulting-screen">
      <div className="container">
        <img
          className="consulting-image"
          src={consulting}
          alt="consulting"
        ></img>
        <section className="consulting-section">
          <h2 className="consulting-heading">
            <strong className="green">Консалтинговые услуги</strong> в области
            фармацевтики
          </h2>
        </section>
      </div>
    </div>
  );
};

export default ConsultingSreen;
