import React from "react";

import "../styles/policy-screen/policy-screen.css";

interface PolicyProps {
  propName: string;
  propDescription: string;
}

const PolicyScreen = () => {
  const PolicyTab: React.FC<PolicyProps> = (props) => {
    return (
      <article className="article">
        <h3 className="article-heading">{props.propName}</h3>
        <p className="article-description">{props.propDescription}</p>
      </article>
    );
  };

  const PolicyTabGrey: React.FC<PolicyProps> = (props) => {
    return (
      <article className="article-g">
        <h3 className="article-heading">{props.propName}</h3>
        <p className="article-description">{props.propDescription}</p>
      </article>
    );
  };

  return (
    <div className="policy-screen">
      <section className="policy-section">
        <h2 className="policy-heading">Комплаенс политика</h2>
        <div className="tabs-container">
          <PolicyTab
            propName="Наша компания"
            propDescription="Придерживается самых высоких комплаенс-стандартов, следуя не только требованиям закона, но и принятым правилам этичного ведения бизнеса. Каждый сотрудник «ВитаМакс Фарм», действуя от лица компании, демонстрирует исключительно профессиональный подход и приверженность требованиям закона, внутренних политик компании и правил, установленных
            в профессиональном сообществе."
          ></PolicyTab>
          <PolicyTabGrey
            propName="Мы проводим"
            propDescription="Тщательную проверку всех контрагентов
            и не взаимодействуем с лицами, которые не следуют требованиям закона и принятым этическим нормам продвижения ЛС и ИМН. «ВитаМакс Фарм» придерживается принципа полного неприятия коррупции и требует соблюдения этого принципа
            от всех своих деловых партнеров. С текущими контрагентами наши отношения основаны на взаимном доверии и уважении."
          ></PolicyTabGrey>
          <PolicyTabGrey
            propName="Любое взаимодействие"
            propDescription="«ВитаМакс Фарм» с работниками здравоохранения происходит в рамках установленных законом ограничений. Мы следуем всем правилам этичного продвижения продукции и стремимся поддерживать актуальную информацию о ней в открытом доступе."
          ></PolicyTabGrey>
          <PolicyTabGrey
            propName="В компании"
            propDescription="Внедрены все необходимые меры по предупреждению и предотвращению любых комплаенс-нарушений, в том числе, категорически запрещены любые действия коррупционного характера."
          ></PolicyTabGrey>
        </div>
      </section>
      <section className="web-policy-section">
        <h2 className="policy-heading">Комплаенс политика</h2>
        <div className="tabs-container">
          {" "}
          <PolicyTab
            propName="Наша компания"
            propDescription="Придерживается самых высоких комплаенс-стандартов, следуя не только требованиям закона, но и принятым правилам этичного ведения бизнеса. Каждый сотрудник «ВитаМакс Фарм», действуя от лица компании, демонстрирует исключительно профессиональный подход и приверженность требованиям закона, внутренних политик компании и правил, установленных
            в профессиональном сообществе."
          ></PolicyTab>
          <PolicyTabGrey
            propName="Мы проводим"
            propDescription="Тщательную проверку всех контрагентов
            и не взаимодействуем с лицами, которые не следуют требованиям закона и принятым этическим нормам продвижения ЛС и ИМН. «ВитаМакс Фарм» придерживается принципа полного неприятия коррупции и требует соблюдения этого принципа
            от всех своих деловых партнеров. С текущими контрагентами наши отношения основаны на взаимном доверии и уважении."
          ></PolicyTabGrey>
          <PolicyTabGrey
            propName="Любое взаимодействие"
            propDescription="«ВитаМакс Фарм» с работниками здравоохранения происходит в рамках установленных законом ограничений. Мы следуем всем правилам этичного продвижения продукции и стремимся поддерживать актуальную информацию о ней в открытом доступе."
          ></PolicyTabGrey>
          <PolicyTabGrey
            propName="В компании"
            propDescription="Внедрены все необходимые меры по предупреждению и предотвращению любых комплаенс-нарушений, в том числе, категорически запрещены любые действия коррупционного характера."
          ></PolicyTabGrey>
        </div>
      </section>
    </div>
  );
};

export default PolicyScreen;
