import { Button } from "react-bootstrap";
import { ReactComponent as Verified } from "../../../../../assets/icons/verified.svg";
import { Card } from "../../../../UI/Card/Card";
import "./TourDescription.scss";
const TourDescription = () => {
  return (
    <div className="description">
      <div className="description-faq">
        <div className="description-faq-content">
          <div className="description-faq-space"></div>
          <div className="description-faq-content-cards">
            <div className="description-faq-inner">
              <Card type="info" color="#fff">
                <h3>Гульжамал</h3>
                <div className="description-faq-user">
                  <img
                    alt=""
                    src="https://res.cloudinary.com/localie/image/upload/f_auto,w_200,,/v1649111467/vzknwfjsmpiv02i7fhj3.jpg"
                  />
                  <div className="description-faq-user-desc">
                    <b>Гульжамал</b>
                    <span>Люблю и вдохновляюсь Стамбулом</span>
                  </div>
                  <div className="description-faq-user-verified">
                    <Verified />
                  </div>
                </div>

                <div className="description-faq-actions">
                  <Button className="btn btn-md btn-dark me-4 w-100">
                    Написать локали
                  </Button>
                  <Button className="btn btn-md btn-light w-100 btn-outline-success">
                    Больше о локали
                  </Button>
                </div>
              </Card>

              <Card type="info" color="#FFD500">
                <h3>Кто такие локали?</h3>
                <div className="description-faq-user">
                  <p>
                    Локали — местные жители с разными интересами и хобби,
                    живущие по всему миру. Они влюблены в свои города и готовы
                    разделить эту любовь с вами ❤️
                  </p>
                </div>

                <div className="description-faq-actions">
                  <Button className="btn btn-md btn-dark me-4 w-100">
                    О проекте
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="description-content">
        <div className="description-content-wrapper">
          <h2>Описание</h2>
          <div className="description-content-wrapper-text">
            <p>
              Поездка в Стамбул будет неполноценной без посещения азиатской
              стороны города, поэтому обязательно выделите себе денёчек,
              садитесь на паром и приезжайте ко мне на Кадыкёй! Прогрессивный,
              волнительный и будоражащий, он не оставит вас равнодушным, будь то
              богемная Модá, элегантная архитектура Суадие или эклектичная
              набережная Джаддебостан. Кадыкёй признан одним из самых удобных
              районов для проживания, познакомьтесь с неспешной жизнью
              современного Стамбула во время прогулки со мной.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDescription;
