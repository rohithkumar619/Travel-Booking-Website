import React from "react";
import "../pages/styles/FansLove.css";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { fansimage } from "../components/Gallery/fans";
const FansLove = () => {
  return (
    <div className="fanss">
      <div className="fanslove">
        <span>Fans Love</span>
        <h4>What our fans say about us</h4>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          slidesPerGroup={1}
          navigation={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {fansimage.map((pic) => (
            <SwiperSlide>
              <div className="fansrev">
                <span>{pic.description}</span>
                <div>
                  <img src={pic.image} alt="" />
                  <div>
                    <span>{pic.name}</span>
                    <span>Customer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FansLove;
