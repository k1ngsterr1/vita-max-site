import React from "react";

import "../styles/document-screen/document-screen.css";

import document1 from "../assets/license-1.png";
import document2 from "../assets/license-2.png";
import document3 from "../assets/license-3.png";

import pdf from "../license.pdf";

const DocumentsScreen = () => {
  return (
    <div className="documents-screen" id="license">
      <section className="documents-section">
        <h2 className="documents-heading">Документы</h2>
        <div className="documents">
          <img
            className="document one"
            src={document1}
            alt="document1"
            onClick={() => window.open(pdf, "_blank")}
          ></img>
          <img
            className="document two"
            src={document2}
            alt="document2"
            onClick={() => window.open(pdf, "_blank")}
          ></img>
          <img
            className="document three"
            src={document3}
            alt="document3"
            onClick={() => window.open(pdf, "_blank")}
          ></img>
        </div>
      </section>
      <section className="web-documents-section">
        <h2 className=" documents-heading">Документы</h2>
        <div className="documents">
          <div className="document-one-c">
            <img
              className="document one"
              src={document1}
              alt="document1"
              onClick={() => window.open(pdf, "_blank")}
            ></img>
            <span className="text">Лицензия на фармдеятельность </span>
          </div>
          <div className="document-two-c">
            <img
              className="document two"
              src={document2}
              alt="document1"
              onClick={() => window.open(pdf, "_blank")}
            ></img>
            <span className="text">Лицензия на фармдеятельность </span>
          </div>
          <div className="document-three-c">
            <img
              className="document three"
              src={document3}
              alt="document1"
              onClick={() => window.open(pdf, "_blank")}
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentsScreen;
