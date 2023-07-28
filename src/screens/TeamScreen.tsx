import React from "react";

import "../styles/team-screen/team.css";
import team from "../assets/team.svg";

import Avatar1 from "../assets/avatar.png";
import Avatar2 from "../assets/image03.png";
import Avatar3 from "../assets/Movsar.png";
import Avatar4 from "../assets/image01.png";

import { useState } from "react";

interface ArticlesProps {
  propValue: React.ReactNode;
}

interface CardProps {
  propName: string;
  propView: string;
  propDescription: string;
  onClick?: () => void;
}

const TeamScreen = () => {
  const [teammate, setTeammate] = useState<string | null>(null);

  let teammateDescription;

  if (teammate == "Victor") {
    teammateDescription = (
      <section className="team-member-description">
        <h3 className="name-heading">Виктор Селиванов</h3>
        <p className="team-member-paragraph">
          {" "}
          Старшая должность в управлении проектами в Москве. 3,5+ года –
          командировка в Алматы, Казахстан, для выполнения руководящей должности
          с широким охватом функций Business Excellence, SFE, Strategy и
          Portfolio в регионе СНГ.
        </p>
      </section>
    );
  }

  if (teammate == "Movsar") {
    teammateDescription = (
      <section className="team-member-description">
        <h3 className="name-heading">Мовсар Махматов</h3>
        <p className="team-member-paragraph">
          В Pfizer я руководил организацией в качестве регионального менеджера и
          главы глобального инновационного фармрынка для рынков Казахстана,
          Кыргызстана, Монголии, Туркменистана, Узбекистана, Армении, Грузии и
          Азербайджана.
        </p>
      </section>
    );
  }

  if (teammate == "Daniyar") {
    teammateDescription = (
      <section className="team-member-description">
        <h3 className="name-heading">Данияр Баканбаев</h3>
        <p className="team-member-paragraph">Описание</p>
      </section>
    );
  }

  if (teammate == "Alisher") {
    teammateDescription = (
      <section className="team-member-description">
        <h3 className="name-heading">Алишер Базаров</h3>
        <p className="team-member-paragraph">Описание</p>
      </section>
    );
  }

  const Articles: React.FC<ArticlesProps> = (props) => {
    return <article className="article">{props.propValue}</article>;
  };

  const MemberCard: React.FC<CardProps> = (props) => {
    return (
      <article className="team-member-card" onClick={props.onClick}>
        <figure>
          <img className="avatar" src={props.propView} alt="avatar"></img>
        </figure>
        <header>
          <h2 className="name-heading">{props.propName}</h2>
          <h3 className="role">{props.propDescription}</h3>
        </header>
      </article>
    );
  };

  return (
    <div className="team-screen" id="team">
      <div className="container">
        <img className="team" src={team} alt="team"></img>
        <section className="team-section">
          <h2 className="team-heading">Команда</h2>
          <p className="team-p">
            <strong>Наша главная ценность</strong> – это команда мотивиронных
            профессионалов, ориентированная на результат, которая разделяет
            миссию компани
          </p>
          <Articles
            propValue={
              <p
                className="text"
                style={{
                  paddingLeft: "clamp(5px,2.3364vw,20px)",
                }}
              >
                Команда ТОО «ВитаМакс Фарм» насчитывает более{" "}
                <strong className="green">
                  25 высококлассных специалистов{" "}
                </strong>{" "}
                с большим опытом работы на фармацевтическом рынке и представлена
                специалистами из следующих областей: маркетинг, консалтинг,
                юриспруденция, продажи, регистрация ЛС и ИМН, продажи.
              </p>
            }
          ></Articles>
          <Articles
            propValue={
              <p
                className="text"
                style={{
                  paddingLeft: "clamp(5px,2.3364vw,20px)",
                }}
              >
                Сейлз команда представлена сильнейшими КАМ-ами с опытом работы,
                как в госпитальном так и в ритейл сегменте.
              </p>
            }
          ></Articles>
          <Articles
            propValue={
              <p
                className="text"
                style={{
                  paddingLeft: "clamp(5px,2.3364vw,20px)",
                }}
              >
                Мы заинтересованы привлекать в наш коллектив целеустремленных
                людей, с хорошим образованием, релевантным опытом, желающих
                решать амбициозные задачи в сфере здравоохранения:{" "}
                <strong className="green">hr@vmppharm.com</strong> 
              </p>
            }
          ></Articles>
          <Articles
            propValue={
              <p
                className="text"
                style={{
                  paddingLeft: "clamp(5px,2.3364vw,20px)",
                }}
              >
                Менеджмент компании отличают профессионализм, ориентированность
                на результат и приверженность самым строгим этическим стандартам
                ведения бизнеса.
              </p>
            }
          ></Articles>
        </section>
        <div className="team-members">
          <div className="team-upper">
            <MemberCard
              propView={Avatar1}
              propName="Виктор Селиванов"
              propDescription="Независимый консультант, Customer and business excellence"
              onClick={() => setTeammate("Victor")}
            ></MemberCard>
            <MemberCard
              propView={Avatar2}
              propName="Алишер Базаров"
              propDescription="Генеральный директор"
              onClick={() => setTeammate("Alisher")}
            ></MemberCard>
          </div>
          <div className="team-lower">
            {" "}
            <MemberCard
              propView={Avatar3}
              propName="Мовсар Махматов"
              propDescription="Президент"
              onClick={() => setTeammate("Movsar")}
            ></MemberCard>
            <MemberCard
              propView={Avatar4}
              propName="Данияр Баканбаев"
              propDescription="Президент"
              onClick={() => setTeammate("Daniyar")}
            ></MemberCard>
          </div>
          {teammateDescription}
        </div>
      </div>
      <div className="web-container">
        <h2 className="team-heading">Команда</h2>
        <p className="team-p">
          <strong>Наша главная ценность</strong> – это команда мотивиронных
          профессионалов, ориентированная на результат, которая разделяет миссию
          компани
        </p>
        <div className="tabs-container">
          <div className="tabs">
            <Articles
              propValue={
                <p
                  className="text"
                  style={{
                    paddingLeft: "clamp(5px,2.3364vw,20px)",
                  }}
                >
                  Команда ТОО «ВитаМакс Фарм» насчитывает более{" "}
                  <strong className="green">
                    25 высококлассных специалистов{" "}
                  </strong>{" "}
                  с большим опытом работы на фармацевтическом рынке и
                  представлена специалистами из следующих областей: маркетинг,
                  консалтинг, юриспруденция, продажи, регистрация ЛС и ИМН,
                  продажи.
                </p>
              }
            ></Articles>
            <Articles
              propValue={
                <p
                  className="text"
                  style={{
                    paddingLeft: "clamp(5px,2.3364vw,20px)",
                  }}
                >
                  Сейлз команда представлена сильнейшими КАМ-ами с опытом
                  работы, как в госпитальном так и в ритейл сегменте.
                </p>
              }
            ></Articles>
            <Articles
              propValue={
                <p
                  className="text"
                  style={{
                    paddingLeft: "clamp(5px,2.3364vw,20px)",
                  }}
                >
                  Мы заинтересованы привлекать в наш коллектив целеустремленных
                  людей, с хорошим образованием, релевантным опытом, желающих
                  решать амбициозные задачи в сфере здравоохранения:{" "}
                  <strong className="green">hr@vmppharm.com</strong> 
                </p>
              }
            ></Articles>
            <Articles
              propValue={
                <p
                  className="text"
                  style={{
                    paddingLeft: "clamp(5px,2.3364vw,20px)",
                  }}
                >
                  Менеджмент компании отличают профессионализм,
                  ориентированность на результат и приверженность самым строгим
                  этическим стандартам ведения бизнеса.
                </p>
              }
            ></Articles>
          </div>
          <img className="team" src={team} alt="team"></img>
        </div>
        <div className="team-members">
          <MemberCard
            propView={Avatar1}
            propName="Виктор Селиванов"
            propDescription="Независимый консультант, Customer and business excellence"
            onClick={() => setTeammate("Victor")}
          ></MemberCard>
          <MemberCard
            propView={Avatar2}
            propName="Алишер Базаров"
            propDescription="Генеральный директор"
            onClick={() => setTeammate("Alisher")}
          ></MemberCard>{" "}
          <MemberCard
            propView={Avatar3}
            propName="Мовсар Махматов"
            propDescription="Независимый директор, Government Relations"
            onClick={() => setTeammate("Movsar")}
          ></MemberCard>
          <MemberCard
            propView={Avatar4}
            propName="Данияр Баканбаев"
            propDescription="Президент"
            onClick={() => setTeammate("Daniyar")}
          ></MemberCard>
        </div>
        {teammateDescription}
      </div>
    </div>
  );
};

export default TeamScreen;
