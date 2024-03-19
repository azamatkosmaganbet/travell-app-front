import React, { FC } from "react";
import "./TourRoute.scss";
import { ITrip } from "../../../../../models/ITrip";
import { BASE_URL } from "../../../../../constants/api";

interface ITourRoute {
  tour: ITrip;
}

const TourRoute: FC<ITourRoute> = ({ tour }) => {
  return (
    <div className="tour-route">
      <div>
        <div className="tour-title">
          <h2>Маршрут</h2>
        </div>
        {tour.routes?.map((route, index) => (
          <div className="tour-content" key={route._id}>
            <div className="tour-content-inner">
              <div className="tour-content-day">
                <h5>
                  День {index + 1} - {route.name}{" "}
                </h5>
              </div>
              {route.stops.map((stop, index2) => (
                <div className="tour-content-route">
                  <div className="tour-content-route-wrapper">
                    <div className="tour-content-route-wrapper-text">
                      <span>{index2 + 1}</span>
                      <div className="tour-content-route-wrapper-text-desc">
                        <h4>Маршрут: {stop.name}</h4>
                        <p key={stop._id}>
                          {stop.description}
                          {/* Старые районы <br /> Кадыкёй <br /> Тусовочная Модá{" "}
                          <br />
                          Набережные Мраморного моря <br /> Архитектура Гёзтепе
                          и Джаддебостан <br /> Энергичная улица Багдад <br />{" "}
                          Современные муралы и граффити <br /> Стадион
                          Фенербахче
                          <br />
                          Яхтклуб и остров Фенербахче */}
                        </p>
                      </div>

                      <div className="tour-content-route-wrapper-text-image">
                        <div className="tour-content-route-wrapper-text-image-inner">
                          <div className="tour-content-route-wrapper-text-image-inner-block">
                            <img
                              src={
                                stop.image
                                  ? `${BASE_URL}/trips/${stop.image}`
                                  : "https://res.cloudinary.com/localie/image/upload/f_auto,w_2000,,/v1613243790/ged1ls5zccylf2eqk3sm.jpg"
                              }
                              alt="User"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourRoute;
