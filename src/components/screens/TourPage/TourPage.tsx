import "./TourPage.scss";
import TourDescription from "./components/TourDescription/TourDescription";
import TourHero from "./components/TourHero/TourHero";
import TourRoute from "./components/TourRoute/TourRoute";
import { ReactComponent as Notice } from "../../../assets/icons/notice.svg";
const TourPage = () => {
  return (
    <div className="tour">
      <TourHero />
      <TourDescription />
      <TourRoute />
      <div className="tour-price">
        <div className="tour-price-content">
          <div className="tour-price-wrapper">
            <h2>Стоимость</h2>
            <div className="tour-price-total">
              <div className="tour-price-total-top">
                <h3>
                  <span>Общая стоимость</span>
                </h3>
                <div>
                  <b>$149</b>
                </div>
              </div>
              <ul className="tour-price-total-bottom">
                <li>
                  <p>
                    <span>Продолжительность прогулки</span>
                  </p>
                  <div className="tour-price-total-bottom-day">
                    <p>
                      <span>1 день</span>
                    </p>
                    <span className="tour-price-total-bottom-day-price">
                      <span>$149</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tour-price-notice">
              <div className="tour-price-notice-icon">
                <Notice />
              </div>
              <p>Цена за 1 человека. Всего в группе — не более 8 человек.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
