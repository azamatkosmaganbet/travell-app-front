import React from "react";
import BG from "../../assets/test/main.png";
import "./Hero.scss";
import { TextField } from "../UI/TextField/TextField";
import { Button } from "react-bootstrap";
import { Title } from "../UI/Title/Title";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-picture">
        <img src={BG} alt="Главная картинка" />
      </div>
      <div className="hero-content">
        <Title variant="h1" className="hero-content-title">
          Experience the pulse of the city through the eyes of a local expert.
        </Title>
        <span className="hero-content-desc">
          Let GO Trip be your gateway to authentic adventures and unforgettable
          memories.
        </span>
        <div className="hero-search">
          <TextField placeholder="Where are you going?" variant="fill" />
          <button className="hero-search__btn">
            <svg
              color="currentColor"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              className="sc-dkrGBB jkrsAl  css-1v0890g"
              height="24"
              width="24"
            >
              <path
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
                className="sc-eDvShL dvWedH"
              ></path>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M338.29 338.29L448 448"
                className="sc-eDvShL dvWedH"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
