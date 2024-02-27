import React from 'react'
import "./TourmateCard.scss"
import Photo from "../../assets/test/card-1.png";
const TourmateCard = () => {
  return (
    <div className="tourmate-card">
      <div className="tourmate-content">
        <div className="tourmate-content__img">
          <img src={Photo} alt="..." />
        </div>
        <div className="tourmate-content__text">
          <div className="tourmate-content__body">
            <h5 className="tourmate-content__title">Card title</h5>
            <p className="tourmate-content__description">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="tourmate-content__location">
              <small>New York</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourmateCard