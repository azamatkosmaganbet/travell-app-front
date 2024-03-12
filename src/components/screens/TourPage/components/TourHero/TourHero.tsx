import React from "react";
import "./TourHero.scss";
import { Button } from "react-bootstrap";
const TourHero = () => {
  return (
    <div className="tour-hero">
      <div className="tour-hero-content">
        <h1>Зажигательный Кадыкёй</h1>
        <p className="tour-hero-content-helper"></p>
        <div className="tour-hero-content-reserve">
          <Button className="btn border-0 bg-orange btn-lg w-50">
            Забронировать
          </Button>
        </div>
        <p className="tour-hero-content-desc">Пока вы ни за что не платите</p>
      </div>
    </div>
  );
};

export default TourHero;
