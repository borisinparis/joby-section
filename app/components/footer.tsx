"use client";
import { Input } from "@/components/ui/input";
import CopyButton from "@/public/copyButton";
import SearchSvg from "@/public/searchSvg";
import { useState } from "react";
import SentMailSection from "./sentMailSection";
import IconJobySvg from "@/public/iconJobySvg";
import { TwitterIcon } from "lucide-react";
import VectorSvg from "@/public/vectorSvg";
import VectorSvgLogo from "@/public/vectorSvgLogo";
const footTitles = [
  { name: "Бүтээгдэхүүн үйлчилгээ", logo: <VectorSvgLogo /> },
  { name: "Брэндүүд", logo: <VectorSvgLogo /> },
  { name: "Хэрэглэх заавар ", logo: <VectorSvgLogo /> },
  { name: "Ажлын байр ", logo: <VectorSvgLogo /> },
  { name: "Хямдралын карт ", logo: <VectorSvgLogo /> },
  { name: "Хамтран ажиллагаа", logo: <VectorSvgLogo /> },
  { name: "Хэрэглэх заавар", logo: <VectorSvgLogo /> },
  { name: "Түгээмэл асуултууд", logo: <VectorSvgLogo /> },
  { name: "Үйлчилгээний нөхцөл", logo: <VectorSvgLogo /> },
];
export const Footer = () => {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className="max-w-screen-lg min-h-[714px] lg:mx-auto max-w-7xl mx-[1.5rem]">
      <div className="flex justify-between">
        <div className="relative w-[362px] h-[44px] rounded-[20px]">
          <Input
            onChange={(event) => {
              setValue(event.target.value);
            }}
            type="search"
            placeholder="Хайх...."
            value={value}
          />
          <SearchSvg className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className="flex gap-3">
          <button className="w-[150px] flex justify-evenly items-center border-red-700 border rounded-[20px] text-red-700 h-[40px]">
            Бүртгүүлэх <CopyButton />
          </button>
          <button className="w-[140px] flex justify-evenly items-center border-red-700 border  rounded-[20px] text-red-700 h-[40px]">
            Бүртгүүлэх
            <VectorSvg />
          </button>
        </div>
      </div>
      <SentMailSection />
      <div className="bg-gray-500 w-full h-[1px] mt-10"></div>
      <div className="w-full mt-[10px] gap-20 flex items-center justify-between">
        <div className=" min-w-[651px] min-h-[130px] lg:mx-auto  grid grid-cols-3">
          {footTitles.map((el, index) => (
            <div
              key={index}
              className="cursor-pointer relative z-10000 flex gap-[10px] items-center"
            >
              <div>{el.logo}</div>
              <p className="text-[90%] font-[400px]">{el.name}</p>
            </div>
          ))}
        </div>
        <div className=" mt-5 m-auto">
          <img src="foot-img.png" alt="" />
          <img src="foot-img1.png" className="mt-[10px]" alt="" />
        </div>
      </div>
      <div className="bg-gray-500 w-full h-[1px] mt-10"></div>
      <div className="lg:mx-auto max-w-4xl mt-[20px] mx-[1.5rem]">
        <div className="flex justify-between items-center">
          <div className="flex gap-[20px] items-center">
            <IconJobySvg />
            <div>
              <p>ЗӨВ ЦАГТАА</p>
              <p>ХЭРЭГТЭЙ ГАЗРАА</p>
            </div>
          </div>
          <div className="flex gap-[50px]">
            <div className=" flex items-center justify-around w-[40px] h-[40px]  border-[2px] rounded-3xl border-gray-500">
              <p className="text-[25px]">in</p>
            </div>
            <div className=" flex items-center justify-around w-[40px] h-[40px]  border-[2px] rounded-3xl border-gray-500">
              <p className="text-[25px]">f</p>
            </div>
            <div className=" flex items-center justify-around w-[40px] h-[40px]  border-[2px] rounded-3xl border-gray-500">
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
