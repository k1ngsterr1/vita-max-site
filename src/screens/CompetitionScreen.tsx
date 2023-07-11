import React from "react";

import "../styles/competition-screen/competition-screen.css";

import cases from "../assets/case.svg";
import cart from "../assets/cart.svg";
import stats from "../assets/stats.svg";
import graph from "../assets/graph.svg";
import arrows from "../assets/arrows.svg";
import charts from "../assets/charts.svg";
import settings from "../assets/settings.svg";

interface CompetitionProps {
  propView: string;
  propName: string;
}

const CompetitionScreen = () => {
  const CompetitionTab: React.FC<CompetitionProps> = (props) => {
    return (
      <div className="competition-tab two">
        <img className="icon" src={props.propView}></img>
        <article className="competition-white">
          <p className="tab-text">{props.propName}</p>
        </article>
      </div>
    );
  };

  return (
    <div className="competition-screen">
      <div className="container">
        <section className="competition-screen">
          <div className="competition-heading-container">
            <h2 className="competition-heading">Наши компетенции</h2>
            <p className="competition-p">
              <strong> «ВитаМакс Фарм» </strong> - эффективно выполняет полный
              спектр задач по продвижению и коммерциализации лекарственных
              средств, изделий медицинского назначения, биологически-активных
              добавок (БАДов) и лечебной косметики.
            </p>
          </div>
          <div className="competition-tabs">
            <CompetitionTab
              propView={cases}
              propName="Работа с регуляторными органами"
            ></CompetitionTab>
            <CompetitionTab
              propView={cart}
              propName="Вывод на рынок новых продуктов"
            ></CompetitionTab>
            <CompetitionTab
              propView={stats}
              propName="Обеспечение целевых показателей продаж"
            ></CompetitionTab>
            <CompetitionTab
              propView={graph}
              propName="Мониторинг рынка и составление регулярных аналитических отчетов"
            ></CompetitionTab>
            <CompetitionTab
              propView={arrows}
              propName="Планирование и проведение маркетинговых кампаний, market access инструментов"
            ></CompetitionTab>
            <CompetitionTab
              propView={charts}
              propName="Разработка и имплементация коммерческих стратегий"
            ></CompetitionTab>
            <CompetitionTab
              propView={settings}
              propName="Логистика лекарственных препаратов, медицинских изделий, косметики и БАДов
              по Республике Казахстан и ближнему зарубежью"
            ></CompetitionTab>
          </div>
        </section>
      </div>
      <div className="web-container"></div>
    </div>
  );
};

export default CompetitionScreen;
