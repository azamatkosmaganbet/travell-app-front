import React, { FC } from "react";
import "./TourHero.scss";
import { Button } from "react-bootstrap";
import { ITrip } from "../../../../../models/ITrip";
import { BASE_URL } from "../../../../../constants/api";

interface ITourProps {
  tour: ITrip;
  handleShow: () => void;
}

const TourHero: FC<ITourProps> = ({ tour, handleShow }) => {
  return (
    <div
      className="tour-hero"
      style={{
        backgroundImage: `linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.01)
    ), url(${BASE_URL}/trips/${tour.image})`,
      }}
    >
      <div className="tour-hero-content">
        <h1>{tour?.title}</h1>
        <p className="tour-hero-content-helper"></p>
        <div className="tour-hero-content-reserve">
          <Button onClick={handleShow} className="btn border-0 bg-orange btn-lg w-50">
            Забронировать
          </Button>
        </div>
        <p className="tour-hero-content-desc">Пока вы ни за что не платите</p>
      </div>
    </div>
  );
};

export default TourHero;
