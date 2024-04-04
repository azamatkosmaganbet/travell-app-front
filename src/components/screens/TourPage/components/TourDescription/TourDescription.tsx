import { Button } from "react-bootstrap";
import { ReactComponent as Verified } from "../../../../../assets/icons/verified.svg";
import { Card } from "../../../../UI/Card/Card";
import "./TourDescription.scss";
import { ITrip } from "../../../../../models/ITrip";
import { FC } from "react";
import { BASE_URL } from "../../../../../constants/api";
import { useNavigate } from "react-router-dom";

interface ITour {
  tour: ITrip;
  isLoading: boolean;
}

const TourDescription: FC<ITour> = ({ tour, isLoading }) => {
  const navigate = useNavigate();
  return (
    <div className="description">
      <div className="description-faq">
        <div className="description-faq-content">
          <div className="description-faq-space"></div>
          <div className="description-faq-content-cards">
            <div className="description-faq-inner">
              <Card type="info" color="#fff">
                <h3>Путешествие организует</h3>
                {isLoading ? (
                  <>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder mt-2 w-75"></span>
                    <span
                      className="placeholder mt-2 w-25"
                      style={{ width: "25% " }}
                    ></span>
                  </>
                ) : (
                  <div className="description-faq-user">
                    <img alt="" src={`${BASE_URL}/${tour.guide?.avatar}`} />
                    <div className="description-faq-user-desc">
                      <b>{tour.guide?.name}</b>
                      <span>Люблю и вдохновляюсь Стамбулом</span>
                    </div>
                    <div className="description-faq-user-verified">
                      {tour.guide?.isActivated && <Verified />}
                    </div>
                  </div>
                )}
                {/* <div className="description-faq-user">
                  <img alt="" src={`${BASE_URL}/${tour.guide?.avatar}`} />
                  <div className="description-faq-user-desc">
                    <b>{tour.guide?.name}</b>
                    <span>Люблю и вдохновляюсь Стамбулом</span>
                  </div>
                  <div className="description-faq-user-verified">
                    {tour.guide?.isActivated && <Verified />}
                  </div>
                </div> */}

                <div className="description-faq-actions">
                  <button className="">Написать локали</button>
                  <a
                    onClick={() => {
                      navigate(`/guide/${tour.guide._id}`);
                    }}
                  >
                    Больше о локали
                  </a>
                </div>
              </Card>

              <Card
                className="additional-info-card"
                type="info"
                color="#FFD500"
              >
                <h3>Кто такие локали?</h3>
                <div className="description-faq-user">
                  <p>
                    Локали — местные жители с разными интересами и хобби,
                    живущие по всему миру. Они влюблены в свои города и готовы
                    разделить эту любовь с вами ❤️
                  </p>
                </div>

                <div className="description-faq-actions">
                  <button
                    className="description-faq-actions-secondary"
                    style={{ width: "100%", marginRight: "0px" }}
                  >
                    О проекте
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="description-content">
        <div className="description-content-wrapper">
          <h2>Описание</h2>
          <div className="description-content-wrapper-text">
            <p>{tour.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDescription;
