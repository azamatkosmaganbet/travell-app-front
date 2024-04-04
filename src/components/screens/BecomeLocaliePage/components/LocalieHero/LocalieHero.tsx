import React from 'react';
import "./LocalieHero.scss";

const LocalieHero = () => {
  return (
    <div className="localie-hero">
      <img
        alt="Hero"
        src="https://res.cloudinary.com/localie/image/upload/f_auto,w_2000,,/v1605022163/content/BecomeLocalie.jpg"
      />
      <div className="localie-hero-content">
        <div className="localie-hero-text">
          <h2>
            Делитесь любовью <br />к своему городу. <br />
            Общайтесь. Вдохновляйте.
            <br />
            Зарабатывайте.
          </h2>

          <a>Стать локали</a>
        </div>
      </div>
    </div>
  );
}

export default LocalieHero