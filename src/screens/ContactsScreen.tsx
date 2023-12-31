import React from "react";

import "../styles/contacts-screen/contacts-screen.css";

const ContactsScreen = () => {
  return (
    <div className="contacts-screen" id="contacts">
      <section className="contacts-section">
        <h2 className="contacts-heading">Контакты</h2>
        <p className="contacts-p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="send-contacts">
          <h3 className="contact-us-heading">Оставайтесь с нами</h3>
          <p className="c-us-p">
            Мы сами напишем вам для дальнейшего сотрудничестве, будь в курсе
            всех событий и получайте новейшие обновления.
          </p>
          <div className="input-container">
            <input
              className="email-input"
              placeholder="Введите ваш email"
              type="email"
            ></input>
            <button className="send-button">Отправить</button>
          </div>
        </div>
      </section>
      <section className="web-contacts-section">
        <h2 className="contacts-heading">Контакты</h2>
        <p className="contacts-p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form className="contacts-form">
          <div className="text-container">
            <h3 className="contact-us-heading">Оставайтесь с нами</h3>
            <p className="contact-p">
              Мы сами напишем вам для дальнейшего сотрудничестве, будь в курсе
              всех событий и получайте новейшие обновления.
            </p>
          </div>
          <div className="input-container">
            <input className="input" placeholder="Введите ваш email"></input>
            <button className="send-btn">Отправить</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactsScreen;
