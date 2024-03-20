import { FC, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IGuide } from "../../models/IGuide";
import TourmateCard from "../TourmateCard/TourmateCard";
import "./TourmateList.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "react-bootstrap";
interface TourmateListProps {
  data: IGuide[];
  title?: string;
  type?: "default" | "city";
}

const TourmateList: FC<TourmateListProps> = ({ data, title, type }) => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <div className="tourmate">
      <h2 className="tourmate-title">{title}</h2>

      <div className="tourmate-cards">
        <div className="left-btn" ref={navigationPrevRef}>
          <FaChevronLeft />
        </div>
        <Swiper
          // spaceBetween={20}
          slidesPerView={5}
          modules={[Navigation]}
          navigation={{
            prevEl: ".left-btn",
            nextEl: ".right-btn",
          }}
          breakpoints={{
            744: {
              navigation: false,
            },
          }}
        >
          {data?.map((el) => (
            <SwiperSlide className="swiper-card">
              <TourmateCard key={el.id} type={type} tourmate={el} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="right-btn" ref={navigationNextRef}>
          <FaChevronRight />
        </div>
      </div>
      <div className="tourmate-btn">
        <button>Куда отправитесь в путешествие?</button>
      </div>
    </div>
  );
};

export default TourmateList;
