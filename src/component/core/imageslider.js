import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Slider({ images }) {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper w-[100%] h-[100%]"
      >
        <SwiperSlide>
          <img
            src={images[0]}
            alt=""
            className=" block h-[100%] w-[100%]  object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={images[1]}
            alt=""
            className=" block h-[100%] w-[100%]  object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={images[2]}
            alt=""
            className=" block h-[100%] w-[100%]  object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={images[3]}
            alt=""
            className=" block h-[100%] w-[100%]  object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={images[4]}
            alt=""
            className=" block h-[100%] w-[100%]  object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
