import React from "react";

import mark from "../assets/mark.svg";
import consulting from "../assets/consulting.png";
import "../styles/consulting-screen/consulting-screen.css";

interface MarksProps {
  propsName: string;
}

const ConsultingSreen = () => {
  const MarkComponents: React.FC<MarksProps> = (props) => {
    return (
      <div className="mark-container">
        <figure>
          <img className="mark" src={mark} alt="mark"></img>
        </figure>
        <span className="mark-text">{props.propsName}</span>
      </div>
    );
  };

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
          <div className="marks">
            <MarkComponents propsName="Анализ рынка"></MarkComponents>
            <MarkComponents propsName="Прогнозирование и моделирование продаж"></MarkComponents>
            <MarkComponents propsName="Поиск объектов экстенсивного развития"></MarkComponents>
            <MarkComponents
              propsName="Полное сопровождение сделок M&A,
              in&out- licensing"
            ></MarkComponents>
            <MarkComponents propsName="Ценообразование"></MarkComponents>
            <MarkComponents
              propsName="Разработка Market access стратегий
              "
            ></MarkComponents>
            <MarkComponents propsName="Коммерческая эффективность"></MarkComponents>
            <MarkComponents propsName="Оценка здоровья бизнеса"></MarkComponents>
            <MarkComponents propsName="Разбитие бизнеса"></MarkComponents>
          </div>
        </section>
      </div>
      <div className="web-container">
        <section className="consulting-section">
          <div className="marks-container">
            <h2 className="consulting-heading">
              <strong className="green">Консалтинговые услуги</strong> в области
              фармацевтики
            </h2>
            <div className="marks">
              <MarkComponents propsName="Анализ рынка"></MarkComponents>
              <MarkComponents propsName="Прогнозирование и моделирование продаж"></MarkComponents>
              <MarkComponents propsName="Поиск объектов экстенсивного развития"></MarkComponents>
              <MarkComponents
                propsName="Полное сопровождение сделок M&A,
              in&out- licensing"
              ></MarkComponents>
              <MarkComponents propsName="Ценообразование"></MarkComponents>
              <MarkComponents
                propsName="Разработка Market access стратегий
              "
              ></MarkComponents>
              <MarkComponents propsName="Коммерческая эффективность"></MarkComponents>
              <MarkComponents propsName="Оценка здоровья бизнеса"></MarkComponents>
              <MarkComponents propsName="Разбитие бизнеса"></MarkComponents>
            </div>
          </div>
          <img
            className="consulting-image"
            src={consulting}
            alt="consulting"
          ></img>
        </section>
      </div>
    </div>
  );
};

export default ConsultingSreen;
