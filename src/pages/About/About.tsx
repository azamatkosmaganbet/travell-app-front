import React from "react";
import "./About.scss";
import { FaInstagram } from "react-icons/fa";
const About = () => {
  return (
    <div className="about-us">
      <div>
        <div className="about-us-main">
          <div className="about-us-header">
            <div className="about-us-header-container">
              <h2>О проекте</h2>
              <p>
                GO была основана в 2024 году как побочный проект и наше хобби. В
                феврале 2024 года она была преобразована в полноценную компанию.
                С 2024 года мы растем быстрее, чем когда-либо прежде.
              </p>
            </div>
          </div>

          <div className="about-wrapper">
            <div className="about-wrapper-left">
              <div className="about-wrapper-left-team"></div>
              <div className="about-wrapper-left-desc">
                <h2 className="about-wrapper-left-desc-title">— Наша Миссия</h2>
                <h2 className="about-wrapper-left-desc-sub">
                  Изменить формат путешествий, объединяя путешественников с
                  местными жителями и сообществами, делая каждое путешествие
                  незабываемым и оставляющим положительный след.
                </h2>
              </div>
            </div>

            <div className="about-wrapper-right">
              <div className="about-wrapper-right-team"></div>
              <h5>Связаться с нами:</h5>
              <a>
                <p>hello@go-trip.com</p>
              </a>
              <div className="about-wrapper-right-links">
                <a>
                  <FaInstagram />
                </a>
              </div>
              <p>Kazakhstan, Almaty Abylaikhan street 1</p>
            </div>

            <h3 className="about-us-title">О нас</h3>
            <p>
              Наши амбиции определяют видение, которое выходит далеко за рамки
              просто прогулок по городу с местными жителями. Мы хотим заново
              изобрести весь опыт путешествий, установив связь между
              путешественниками и местными сообществами, которые знают свой
              город лучше всех и уверены, что вы полностью влюбитесь в место,
              которое посещаете. Я уверен, что это осуществится, поскольку над
              этим работает фантастическая команда увлеченных людей. Мы живем в
              разных частях света, и всех нас объединяет мечта – сделать
              путешествия доступными для всех людей во всем мире.
            </p>
            <div className="about-us-author">
              <div className="about-us-author-text">
                <div className="about-us-author-text-image"></div>
                <div className="about-us-author-text-desc">
                  <p className="about-us-author-text-desc-name">
                    Maira Dauletova
                  </p>
                  <p className="about-us-author-text-desc-role">
                    Product Manager
                  </p>
                </div>
              </div>
            </div>

            <div className="about-us-happy">
              <h3>
                Что делает нас счастливыми?  <br />
                <span>Хорошие впечатления и воспоминания.</span>
                <br /> Самые лучшие – мы всегда получаем от путешествий.
              </h3>
            </div>
          </div>

          <div className="about-us-our-team">
            <h3>
              Мы живем по всему миру, но разделяем одни и те же цели и миссию.
            </h3>
            <div className="about-us-our-team-members">
              <div className="about-us-our-team-members-card">
                <div className="about-us-our-team-members-card-avatar avatar-1"></div>
                <p className="about-us-our-team-members-card-city">Казахстан</p>
                <h5 className="about-us-our-team-members-card-title">
                  Майра Даулетова
                </h5>
                <p className="about-us-our-team-members-card-p">Product</p>
              </div>

              <div className="about-us-our-team-members-card">
                <div className="about-us-our-team-members-card-avatar avatar-2"></div>
                <p className="about-us-our-team-members-card-city">Казахстан</p>
                <h5 className="about-us-our-team-members-card-title">
                  Сена Есбол
                </h5>
                <p className="about-us-our-team-members-card-p">Designer</p>
              </div>

              <div className="about-us-our-team-members-card">
                <div className="about-us-our-team-members-card-avatar avatar-3"></div>
                <p className="about-us-our-team-members-card-city">Казахстан</p>
                <h5 className="about-us-our-team-members-card-title">
                  Азамат Космаганбет
                </h5>
                <p className="about-us-our-team-members-card-p">Developer</p>
              </div>
            </div>
          </div>

          <div className="about-join">
            <h3>
              Присоединяйтесь к нашей команде !
            </h3>
            <p>
              Независимо от того, где вы живете, сколько вам лет и какой у вас
              опыт работы, если вам это интересно и вы разделяете нашу мечту о
              создании будущего путешествий, свяжитесь с нами! Пожалуйста,
              отправьте свое резюме и сопроводительное письмо на
              адрес gotrip@.gmail.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
