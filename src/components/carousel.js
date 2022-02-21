import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";
import Datos from "./datos";
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <div className="divcarousel">
      <Swiper
        slidesPerView={4}
        slidesPerGroup={4}
        spaceBetween={30}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Datos.map((datos) => (
          <SwiperSlide>
            <div className="card" style={{width: 25 + 'rem'}}>
                <img src={process.env.PUBLIC_URL + `/assets/${datos.image}`} className="card-img-top carousel-img" alt="barcelona"></img>
                <div className="card-body">
                    <h3>{datos.name}</h3>
                    <p className="card-text">{datos.description}</p>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Carousel;