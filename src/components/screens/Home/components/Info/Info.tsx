import React from "react";
import "./Info.scss";
import { Title } from "../../../../UI/Title/Title";
import { Button } from "react-bootstrap";
const Info = () => {
  return (
    <section className="info section">
      <div className="info-content">
        <h2 className="info-content-title">
          <span>Один на один с путеводитель или в маленьких группах.</span>
          Выберите понравившегося путеводителя в нужном городе.
          <span>
            Напишите ему через нашу платформу, чтобы обсудить все детали и
            забронировать прогулку.
          </span>
          путеводитель покажет город с изнанки — без туристической мишуры, настоящий.
          То, за что здесь так любят жить местные.
          <span>Будто вы приехали в гости к другу.</span>
        </h2>

        <div className="info-content-main">
          <div className="info-content-main-item">
            <span>1</span>
            <p>
              Встретим в аэропорту, на вокзале или в отеле — когда удобно и где
              лучше 😉
            </p>
          </div>

          <div className="info-content-main-item">
            <span>2</span>
            <p>
              Встретим в аэропорту, на вокзале или в отеле — когда удобно и где
              лучше 😉
            </p>
          </div>

          <div className="info-content-main-item">
            <span>3</span>
            <p>
              Встретим в аэропорту, на вокзале или в отеле — когда удобно и где
              лучше 😉
            </p>
          </div>

          <div className="info-content-main-item">
            <span>4</span>
            <p>
              Встретим в аэропорту, на вокзале или в отеле — когда удобно и где
              лучше 😉
            </p>
          </div>
        </div>
        <div className="tourmate-btn">
          <button>Куда отправитесь в путешествие?</button>
        </div>
      </div>
    </section>
  );
};

export default Info;
