import * as React from "react";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const photos = [
  {
    imgScr: "/image1.png",
    head: "zulaa1",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
  {
    imgScr: "/image1.png",
    head: "zulaa2",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
  {
    imgScr: "/image1.png",
    head: "zulaa3",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
  {
    imgScr: "/image1.png",
    head: "zulaa4",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
  {
    imgScr: "/image1.png",
    head: "zulaa5",
    title:
      "Lorem ipsum dolor sit amet consectetur. Mauris sed nunc in duismassa ac justo cursus pulvinar.",
  },
];

export default function CoverFlow() {
  return (
    <section className="mt-[5%]">
      <div className="lg:mx-auto max-w-7xl mx-[1.5rem]">
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
        </div>
        <div className="lg:mx-auto max-w-7xl mx-[1.5rem]">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect={"coverflow,fade"}
            loop={true}
            spaceBetween={30}
            slidesPerView={5}
            slideToClickedSlide
            initialSlide={3}
            navigation
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
                  <div className="headTitle">
                    <h1 className="">{p.head}</h1>
                  </div>
                  {/* <div className="contentTitle">
                    <p>{p.title}</p>
                  </div> */}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
