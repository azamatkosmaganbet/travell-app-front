import { FC } from "react";
import { Link } from "react-router-dom";
import Photo from "../../assets/test/card-1.png";
import { IGuide } from "../../models/IGuide";
import "./TourmateCard.scss";
import { BASE_URL } from "../../constants/api";

interface TourmateCardProps {
  tourmate: IGuide;
  type?: "default" | "city";
}

const TourmateCard: FC<TourmateCardProps> = ({
  tourmate,
  type = "default",
}) => {
  return (
    <>
      {type === "default" && (
        <Link to={`/guide/${tourmate.userId._id}`} className="tourmate-card">
          <div className="tourmate-card-inner">
            <div className="tourmate-card-inner-container">
              <img
                src={`${BASE_URL}/${tourmate.userId.avatar}`}
                alt={tourmate.userId.name}
              />
              <div className="tourmate-card-inner-container-bottom">
                <div className="tourmate-card-inner-container-bottom-p">
                  <div className="tourmate-card-inner-container-bottom-p-content">
                    <div className="tourmate-card-inner-container-bottom-p-content-title">
                      <p>{tourmate?.userId.name}</p>
                    </div>
                    <p className="tourmate-card-text">
                      {tourmate?.description}
                    </p>
                    <div className="tourmate-card-city">
                      {tourmate.cities.length > 0 &&
                        tourmate?.cities.map((c) => (
                          <Link to={`/`}>
                            <h5>{c}</h5>
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
        <Link className="location-card" to={"/"}>
          <div className="location-content">
            <div className="location-content-inner">
              <img src="https://res.cloudinary.com/localie/image/upload/f_auto,w_600,,/v1520494018/cities-opt/it_rome.jpg" />
              <h2>Рим</h2>
            </div>
          </div>
          <p className="location-desc">158 прогулок проведено</p>
        </Link>
      )}
    </>
  );
};

export default TourmateCard;
