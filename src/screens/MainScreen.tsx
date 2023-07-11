import React from "react";

import Header from "../components/Header";

import illustration from "../assets/amico.svg";
import "../styles/main-screen/main-screen.css";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <Header />
      <div className="main-content">
        <main className="container">
          <img
            className="illustration"
            src={illustration}
            alt="illustration"
          ></img>
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
          <img
            className="illustration-two"
            src={illustration}
            alt="illustration"
          ></img>
        </main>
        <main className="container-web">
          <section className="content-section">
            <span className="vitamax">«ВитаМакс Фарм»</span>
            <h1 className="main-heading">
              Маркетингово-дистрибьюторская компания
            </h1>
            <p className="main-paragraph">
              Обладает комплексом современных инструментов продвижения и
              обширным опытом работы в продажах лекарственных препаратов, БАДов,
              косметики и изделий медицинского назначения.
            </p>
            <button className="contact-us-btn">Связаться с нами</button>
          </section>
          <img
            className="illustration-two"
            src={illustration}
            alt="illustration"
          ></img>
        </main>
      </div>
      <div className="about-company">
        <h1 className="about-heading">О компании</h1>
        <p className="about-p">
          Товарищество с ограниченной ответственностью{" "}
          <span className="vitamax">«ВитаМакс Фарм»</span>{" "}
          <strong>создано в 2008 году.</strong>
        </p>
        <p className="about-p-2">
          <strong className="green"> В 2021 году </strong> руководством компании
          принято решение о смене фокуса с дистрибуции на маркетинг и консалтинг
          на фармацевтическом рынке стран СНГ. Миссия компании совместно с
          партнерами компании превратить существующие проблемы в здравоохранении
          в высококачественные решения.
        </p>
        <p className="about-p-3">
          <strong className="green"> Виденье: </strong> Стать признанной
          фармацевтической компанией на национальном и международном уровне
          благодаря инновационным подходам и компетенциям команды, обеспечивая
          высокие стандарты качества и экономически эффективные продукты и
          решения для системы здравоохранения и пациентов.
        </p>
      </div>
    </div>
  );
};

export default MainScreen;
