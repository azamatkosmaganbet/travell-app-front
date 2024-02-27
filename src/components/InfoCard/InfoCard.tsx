import React, { FC } from "react";
import "./InfoCard.scss";
import classNames from "classnames";

interface InfoCardProps {
  type: "solo" | "combined";
  title?: string;
  tag: string;
  color?: string;
}

const InfoCard: FC<InfoCardProps> = ({ type, title, tag, color }) => {
  return (
    <>
      {title && <span className="info-card-title">{title}</span>}
      <div
        className={classNames(
          type === "solo" && "profile-info-card",
          type === "combined" && "profile-info-combined-card",
          "profile-common-card"
        )}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle
              cx="16.0001"
              cy="9.33333"
              r="5.33333"
              stroke="#375E97"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M7.52929 22.9361C8.39108 20.1976 11.1051 18.6667 13.976 18.6667H18.0242C20.895 18.6667 23.6091 20.1976 24.4709 22.9361C24.8585 24.1679 25.1853 25.5685 25.2945 27.0009C25.3365 27.5516 24.8857 28 24.3334 28H7.66675C7.11446 28 6.6637 27.5516 6.70569 27.0009C6.8149 25.5685 7.14164 24.1679 7.52929 22.9361Z"
              stroke="#375E97"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <p className={classNames(color === "red" && "red", "default")}>{tag}</p>
      </div>
    </>
  );
};

export default InfoCard;
