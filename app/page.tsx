"use client";

import BackgroundSvg from "@/public/backgroundSvg";
import ClientSection from "./features/home/Client-section";

export default function Home() {
  return (
    <>
      <div className=" relative w-screen h-screen">
        <ClientSection />
        <BackgroundSvg className=" inset-1 z-0 fixed" />
      </div>
    </>
  );
}
