import React from "react";

import Header from "../components/Header";

import illustration from "../assets/amico.svg";
import "../styles/main-screen/main-screen.css";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <Header />
      <div className="main-content">
        <div className="container">
          <img className="illustration" src={illustration}></img>
          <div className="heading-container">
            <h1 className="heading">«ВитаМакс Фарм» </h1>
            <span className="black">
              Маркетингово-дистрибьюторская компания
            </span>
          </div>
          <p className="main-paragraph">
            Обладает комплексом современных инструментов продвижения и обширным
            опытом работы в продажах лекарственных препаратов, БАДов, косметики
            и изделий медицинского назначения.
          </p>
          <button className="contact-us-btn">Связаться с нами</button>
        </div>
      </div>
      <div className="about-company">
        <h1 className="about-heading">О компании</h1>
        <p className="about-p">
          Товарищество с ограниченной ответственностью{" "}
          <span className="vitamax">«ВитаМакс Фарм»</span>{" "}
          <strong>создано в 2008 году.</strong>
        </p>
      </div>
    </div>
  );
};

export default MainScreen;
