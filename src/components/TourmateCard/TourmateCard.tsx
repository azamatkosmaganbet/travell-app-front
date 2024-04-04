import { FC } from "react";
import { Link } from "react-router-dom";
import Photo from "../../assets/test/card-1.png";
import { IGuide } from "../../models/IGuide";
import "./TourmateCard.scss";
import { BASE_URL } from "../../constants/api";
import { ICity } from "../../models/ICity";

interface TourmateCardProps {
  tourmate: IGuide | ICity;
  type?: "default" | "city";
}

const TourmateCard: FC<TourmateCardProps> = ({
  tourmate,
  type = "default",
}) => {
  return (
    <>
      {type === "default" && (
        <Link
          to={`/guide/${(tourmate as IGuide).userId?._id}`}
          className="tourmate-card"
        >
          <div className="tourmate-card-inner">
            <div className="tourmate-card-inner-container">
              <img
                src={`${BASE_URL}/${(tourmate as IGuide).userId?.avatar}`}
                alt={(tourmate as IGuide).userId?.name}
              />
              <div className="tourmate-card-inner-container-bottom">
                <div className="tourmate-card-inner-container-bottom-p">
                  <div className="tourmate-card-inner-container-bottom-p-content">
                    <div className="tourmate-card-inner-container-bottom-p-content-title">
                      <p>{(tourmate as IGuide).userId?.name}</p>
                    </div>
                    <p className="tourmate-card-text">
                      {(tourmate as IGuide).description}
                    </p>
                    <div className="tourmate-card-city">
                      {(tourmate as IGuide).cities?.length > 0 &&
                        (tourmate as IGuide).cities.map((c) => (
                          <Link to={`/`} key={c._id}>
                            <h5>{c.name}</h5>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}

      {type === "city" && (
        <Link className="location-card" to={`/city/${(tourmate as ICity)._id}`}>
          <div className="location-content">
            <div className="location-content-inner">
              <img src={`${BASE_URL}/trips/${(tourmate as ICity).image}`} />
              <h2>{(tourmate as ICity).name}</h2>
            </div>
          </div>
          <p className="location-desc">158 прогулок проведено</p>
        </Link>
      )}
    </>
  );
};

export default TourmateCard;
