"use client";

import BackgroundSvg from "@/public/backgroundSvg";
import ClientSection from "./features/home/Client-section";

export default function Home() {
  return (
    <>
      <div className=" relative w-screen h-screen">
        <BackgroundSvg className="absolute inset-0 z-0" />
        <ClientSection />
      </div>
    </>
  );
}
