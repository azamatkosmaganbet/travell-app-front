import React, { useContext, useEffect } from "react";
import "./CityPage.scss";
import TourPrice from "../../TourPrice/TourPrice";
import GuidePrice from "../../GuidePrice/GuidePrice";
import { useParams } from "react-router-dom";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import { BASE_URL } from "../../../constants/api";
const CityPage = () => {
  const { store } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      store.getCitiesById(id);
    }
  }, [id, store]);

  return (
    <div className="city">
      <div className="city-main">
        <div className="city-top">
          <div className="city-title">
            <h2>{store.city.city?.name}</h2>
          </div>
        </div>

        <div className="city-content">
          <div className="city-cards">
            <div className="city-cards-inner">
              {store.city.guides?.map((guide) => (
                <div className="city-tourmate-card" key={guide.id}>
                  <div className="city-tourmate-card-content">
                    <img alt={guide.userId.name} src={`${BASE_URL}/${guide.userId.avatar}`} />
                    <div className="city-tourmate-card-title">
                      <h5>{guide.userId?.name}</h5>
                    </div>
                    <p className="city-tourmate-card-desc">
                      {guide.description}
                    </p>
                    <div className="city-tourmate-card-btn">
                      <div className="city-tourmate-card-btn-inner">
                        <button>Связаться с путеводителем</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <GuidePrice />
    </div>
  );
};

export default observer(CityPage);
