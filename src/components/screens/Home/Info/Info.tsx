import React from "react";
import "./Info.scss";
import { Title } from "../../../UI/Title/Title";
const Info = () => {
  return (
    <section className="info section">
      <div className="info-title">
        <Title>
          GO Trip: Real locals, real experiences. Like exploring with a friend
          worldwide, every step of the way.
        </Title>
      </div>

      <div className="info-blocks">
        <div className="info-blocks-item">
          <span>1</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            placerat arcu.
          </p>
        </div>

        <div className="info-blocks-item">
          <span>2</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            placerat arcu.
          </p>
        </div>

        <div className="info-blocks-item">
          <span>3</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla at placerat arcu.
          </p>
        </div>

        <div className="info-blocks-item">
          <span>4</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            placerat arcu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
