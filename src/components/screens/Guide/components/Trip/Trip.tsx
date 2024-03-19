import React, { FC } from "react";
import "./Trip.scss";
import { Title } from "../../../../UI/Title/Title";
import { Button } from "react-bootstrap";
import { Card } from "../../../../UI/Card/Card";
import { BASE_URL } from "../../../../../constants/api";
import { ITrip } from "../../../../../models/ITrip";
import { useNavigate } from "react-router-dom";

interface TripProps {
  trips: ITrip[];
}

const Trip: FC<TripProps> = ({ trips }) => {
  const navigate = useNavigate()
  return (
    <div className="trips">
      {trips.map((trip) => (
        <Card type="trip">
          <div className="trip-content" onClick={() => {navigate(`/tour/${trip._id}`)}}>
            <img
              className=""
              alt="Trip"
              src={`${BASE_URL}/trips/${trip.image}`}
            />
            <div className="trip-title">
              <div className="trip-details">
                <Title className="trip-day" variant="h4">
                  <span>{trip.day | 1} ДЕНЬ</span>
                </Title>
                <p>
                  <span>$149</span>
                </p>
              </div>
              <h2>{trip.title}</h2>
            </div>
            <div className="trip-user">
              <a>
                <div className="trip-user-top">
                  <img src={`${BASE_URL}/${trip.guide.avatar}`} alt="User" />
                  <div className="trip-user-top-title">
                    <h5>{trip.guide.name}</h5>
                    <a>
                      <div>
                        <p className="trip-user-desc">31 отзывов</p>
                      </div>
                    </a>
                  </div>
                </div>
              </a>
              <Button className="btn btn-lg bg-orange border-0">
                Посмотреть детали
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Trip;
