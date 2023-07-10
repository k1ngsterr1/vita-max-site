import React from "react";

const ContactsScreen = () => {
  return (
    <div className="contacts-screen">
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
            <input className="email-input"></input>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsScreen;
