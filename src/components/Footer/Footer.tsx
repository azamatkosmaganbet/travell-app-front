import React from "react";
import "./Footer.scss";
import Logo from "../../assets/icons/f-logo.png";
import Text from "../../assets/icons/f-logo-text.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-left-logo">
            <img src={Logo} />
            <img src={Text} />
          </div>
          <h4>
            Путеводитель делает каждое путешествие проще, дешевле и еще более
            захватывающим.
          </h4>
        </div>
        <div className="footer-center">
          <div className="footer-center-menu">
            <h4>Меню</h4>
            <ul className="footer-center-menu-list">
              <li>
                <div className="footer-center-menu-list-item">
                  <p>Города и страны</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>Стать Путеводитель</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>О проекте</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>Блог</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>Цены</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>Города и страны</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>Стать Путеводитель</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>О проекте</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="footer-center-menu">
            <h4>Меню</h4>
            <ul className="footer-center-menu-list">
              <li>
                <div className="footer-center-menu-list-item">
                  <p>Города и страны</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>Стать Путеводитель</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>О проекте</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>Блог</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>Цены</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="footer-center-menu">
            <h4>Меню</h4>
            <ul className="footer-center-menu-list">
              <li>
                <div className="footer-center-menu-list-item">
                  <p>Города и страны</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>Стать Путеводитель</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>О проекте</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>Блог</p>
                </div>
              </li>

              <li>
                <div className="footer-center-menu-list-item">
                  <p>Цены</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
