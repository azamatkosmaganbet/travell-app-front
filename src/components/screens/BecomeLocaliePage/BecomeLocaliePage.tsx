import React from "react";
import "./BecomeLocaliePage.scss";
import LocalieHero from "./components/LocalieHero/LocalieHero";
import LocalieFaq from "./components/LocalieFaq/LocalieFaq";
import LocalieInstructions from "./components/LocalieInstructions/LocalieInstructions";
import { Catalog } from "../../Catalog/Catalog";
import { ReactComponent as Compass } from "../../../assets/icons/compass.svg";
import LocalieBecome from "./components/LocalieBecome/LocalieBecome";
import { Link } from "react-router-dom";
const BecomeLocaliePage = () => {
  const { Container } = Catalog;
  return (
    <div className="localie">
      <div className="localie-content">
        <LocalieHero />
        <LocalieFaq />
        <LocalieInstructions />
        <LocalieBecome />
        <div className="about">
          <div className="about-container">
            <div className="about-container-content">
              <h1>
                Go Trip — это сообщество. <br /> Социальная сеть для экспатов{" "}
                <br /> и страстных путешественников
              </h1>
              <p>
                Нас объединяет желание делиться любовью к своей новой родине с
                путешественниками. А ещё мы с удовольствием помогаем с переездом
                по работе или учёбе, проводим онлайн-прогулки в прямом эфире,
                помогаем учить иностранные языки и вместе замечательно проводим
                время в нашем сообществе.
              </p>
              <Link to="/account/application">Стать Путеводителем</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeLocaliePage;
