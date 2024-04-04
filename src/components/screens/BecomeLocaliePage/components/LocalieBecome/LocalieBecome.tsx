import React from "react";
import "./LocalieBecome.scss";
import { Catalog } from "../../../../Catalog/Catalog";
import { ReactComponent as Compass } from "../../../../../assets/icons/compass.svg";
const LocalieBecome = () => {
  const { Container } = Catalog;
  return (
    <div className="localie-become">
      <Container>
        <h2>
          Станьте локали — экспертом в своем городе. <br /> Общайтесь с другими,
          вдохновляйте, помогайте, <br /> зарабатывайте
        </h2>
        <div className="localie-become-cards">
          <div className="localie-become-cards-step">
            <Compass />
            <p>Показывайте свой город так, будто к вам приехал в гости друг</p>
          </div>

          <div className="localie-become-cards-step">
            <Compass />
            <p>Показывайте свой город так, будто к вам приехал в гости друг</p>
          </div>

          <div className="localie-become-cards-step">
            <Compass />
            <p>Показывайте свой город так, будто к вам приехал в гости друг</p>
          </div>

          <div className="localie-become-cards-step">
            <Compass />
            <p>Показывайте свой город так, будто к вам приехал в гости друг</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LocalieBecome;
