"use client";
import CoverFlow from "@/app/components/coverflow";
import * as React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/grid";
import Footer from "@/app/components/footer";
import StatisticClient from "../statistic/Statistic-client";

export const ClientSection = () => {
  return (
    <div>
      <div>
        <StatisticClient />
      </div>
      <CoverFlow />
      <Footer />
    </div>
  );
};
export default ClientSection;
