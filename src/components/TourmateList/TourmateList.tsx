import React, { FC } from "react";
import "./TourmateList.scss";
import { Title } from "../UI/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import TourmateCard from "../TourmateCard/TourmateCard";
import "swiper/css";
import { IUser } from "../../models/IUser";

interface TourmateListProps {
  data: IUser[];
  title: string;
}

const TourmateList: FC<TourmateListProps> = ({ data, title }) => {
  return (
    <section className="section">
      <div className="text-center">
        <Title>{title}</Title>
      </div>

      <div className="tourmate-cards">
        <Swiper
          spaceBetween={50}
          slidesPerView={2.5}
          onSlideChange={() => console.log("slide change")}
        >
          {data.length > 0 &&
            data?.map((tourmate) => (
              <SwiperSlide>
                <TourmateCard tourmate={tourmate} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TourmateList;
