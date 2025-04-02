import * as React from "react";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import PrevButton from "./prevButton";
import NextButton from "./nextButton";

const photos = [
  {
    imgScr: "/image2.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
  {
    imgScr: "/image3.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
  {
    imgScr: "/image1.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
  {
    imgScr: "/image2.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
  {
    imgScr: "/image1.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
];

export default function CoverFlow() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="mt-[5%]">
      <div className=" lg:mx-auto max-w-6xl mx-[1.5rem]">
        <div className="flex gap-[80px]">
          <h1 className="text-[3rem] font-bold underline mb-[2rem] text-center">
            Харилцагчид
          </h1>
          <div className="w-[400px]">
            <p className="text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duis
              massa ac justo cursus pulvinar.
            </p>
          </div>

          <div className="relative z-50">
            <PrevButton swiperRef={swiperRef} />
            <NextButton swiperRef={swiperRef} />
          </div>
        </div>
        <div className=" lg:mx-auto max-w-6xl mx-[1.5rem] py-10">
          <Swiper
            onSwiper={(swiper: any) => (swiperRef.current = swiper)}
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect={"coverflow,fade"}
            loop={true}
            spaceBetween={30}
            slidesPerView={5}
            initialSlide={3}
            slideToClickedSlide
            centeredSlides={true}
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,
              slideShadows: false,
            }}
            className="coverflow fade"
          >
            {photos.map((p, index) => {
              return (
                <SwiperSlide key={index} style={{ marginRight: "0px" }}>
                  <img className="imageStyle" src={p.imgScr} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
