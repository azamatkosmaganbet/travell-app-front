import React from "react";
import "./TourRoute.scss";
const TourRoute = () => {
  return (
    <div className="tour-route">
      <div>
        <div className="tour-title">
          <h2>Маршрут</h2>
        </div>
        <div className="tour-content">
          <div className="tour-content-inner">
            <div className="tour-content-day">
              <h5>День 1 </h5>
            </div>
            <div className="tour-content-route">
              <div className="tour-content-route-wrapper">
                <div className="tour-content-route-wrapper-text">
                  <span>1</span>
                  <div className="tour-content-route-wrapper-text-desc">
                    <h4>Маршрут</h4>
                    <p>
                      Старые районы <br /> Кадыкёй <br /> Тусовочная Модá <br />
                      Набережные Мраморного моря <br /> Архитектура Гёзтепе и
                      Джаддебостан <br /> Энергичная улица Багдад <br />{" "}
                      Современные муралы и граффити <br /> Стадион Фенербахче
                      <br />
                      Яхтклуб и остров Фенербахче
                    </p>
                  </div>

                  <div className="tour-content-route-wrapper-text-image">
                    <div className="tour-content-route-wrapper-text-image-inner">
                      <div className="tour-content-route-wrapper-text-image-inner-block">
                        <img src="https://res.cloudinary.com/localie/image/upload/f_auto,w_2000,,/v1613243790/ged1ls5zccylf2eqk3sm.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourRoute;
