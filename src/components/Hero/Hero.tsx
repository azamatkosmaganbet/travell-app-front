import "./Hero.scss";
import { CiSearch } from "react-icons/ci";
import HeroImage from "../../assets/test/hero.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <picture className="hero-picture">
          <img
            alt="Найти турмейта"
            src={"https://res.cloudinary.com/localie/image/upload/f_auto,w_1400,,dpr_1.0/v1593608071/content/landing/landingbg_mirrored.jpg"}
          />
        </picture>
      </div>
      <div className="hero-content">
        <div className="hero-content-inner">
          <h1>
            Открывайте новые города <br /> с местными жителями.
          </h1>
          <p className="hero-content-inner-desc">
            Локали покажут свои города так, будто вы приехали в гости к другу.
          </p>
          <div className="hero-search">
            <div className="hero-search-content">
              <p>Куда отправимся сегодня?</p>
            </div>
            <button className="btn-search">
              <span>
                <CiSearch />
              </span>
              Найти локали
            </button>

            <button className="mb-btn-search">
              <CiSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <section className="hero">
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
    </section> */
}
