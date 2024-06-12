import React, { FC, PropsWithChildren } from "react";
import "./Card.scss";
import classNames from "classnames";
import { Button } from "react-bootstrap";
import { ReactComponent as Verified } from "../../../assets/icons/verified.svg";
interface ICard {
  className?: string;
  type?: "default" | "price" | "trip" | "info";
  color?: string;
}

interface ICardItem {
  title: string;
  description: string;
  price?: number;
  variant?: "default" | "price" | "info";
}

export const Card: FC<PropsWithChildren<ICard>> = ({
  children,
  className,
  color,
  type = "default",
}) => {
  return (
    <div
      className={classNames(
        type === "default" && "main-card",
        type === "price" && "price-card",
        type === "trip" && "trip-card",
        type === "info" && "description-faq-card",
        className
      )}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export const CardItem: FC<PropsWithChildren<ICardItem>> = ({
  children,
  title,
  description,
  price,
  variant = "default",
}) => {
  return (
    <>
      {variant === "default" && (
        <div className={classNames("card-item")}>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      )}

      {variant === "price" && (
        <>
          <div className="card-item-price-title">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <b className="card-item-price-bold">
            <span>${price}</span>
          </b>
        </>
      )}

      {variant === "info" && (
        <>
          <h3>{title}</h3>
          <div className="description-faq-user">
            <img
              alt=""
              src="https://res.cloudinary.com/localie/image/upload/f_auto,w_200,,/v1649111467/vzknwfjsmpiv02i7fhj3.jpg"
            />
            <div className="description-faq-user-desc">
              <b>Гульжамал</b>
              <span>Люблю и вдохновляюсь Стамбулом</span>
            </div>
            <div className="description-faq-user-verified">
              <Verified />
            </div>
          </div>

          <div className="description-faq-actions">
            <Button className="btn btn-lg btn-dark me-4 w-100">
              Написать путеводителю
            </Button>
            <Button className="btn btn-lg btn-light w-100 btn-outline-success">
              Больше о Go Trip
            </Button>
          </div>
        </>
      )}
    </>
  );
};
