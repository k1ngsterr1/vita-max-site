import React from "react";

import "../styles/document-screen/document-screen.css";

import document1 from "../assets/document01.png";
import document2 from "../assets/document02.png";
import document3 from "../assets/document03.png";

const DocumentsScreen = () => {
  return (
    <div className="documents-screen">
      <section className="documents-section">
        <h2 className="documents-heading">Документы</h2>
        <div className="documents">
          <img className="document one" src={document1} alt="document1"></img>
          <img className="document two" src={document2} alt="document2"></img>
          <img className="document three" src={document3} alt="document3"></img>
        </div>
      </section>
    </div>
  );
};

export default DocumentsScreen;
