import React from 'react';
import "./TourmateList.scss";
import { Title } from '../UI/Title/Title';
import { Swiper, SwiperSlide } from "swiper/react";
import TourmateCard from '../TourmateCard/TourmateCard';
import "swiper/css";
const TourmateList = () => {
  return (
    <section className="section">
      <div className="text-center">
        <Title>Expert guides reveal city secrets, enriching experiences.</Title>
      </div>

      <div className="tourmate-cards">
        <Swiper
          spaceBetween={50}
          slidesPerView={2.5}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <TourmateCard />
          </SwiperSlide>

          <SwiperSlide>
            <TourmateCard />
          </SwiperSlide>

          <SwiperSlide>
            <TourmateCard />
          </SwiperSlide>

          <SwiperSlide>
            <TourmateCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default TourmateList