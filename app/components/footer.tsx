"use client";
import { Input } from "@/components/ui/input";
import CopyButton from "@/public/copyButton";
import SearchSvg from "@/public/searchSvg";
import { useState } from "react";
import SentMailSection from "./sentMailSection";

const footTitles= [
  "> Бүтээгдэхүүн үйлчилгээ",
  "> Брэндүүд",
  "> Хэрэглэх заавар",
  "> Бүтээгдэхүүн үйлчилгээ",
  "> Бүтээгдэхүүн үйлчилгээ",
  "> Бүтээгдэхүүн үйлчилгээ",
  "> Бүтээгдэхүүн үйлчилгээ",
  "> Бүтээгдэхүүн үйлчилгээ",
  "> Бүтээгдэхүүн үйлчилгээ"
]

export const Footer = () => {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className="lg:mx-auto max-w-7xl mx-[1.5rem]">
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
        <div className="flex">
          <button className="w-[170px] flex justify-around items-center border-red-700 border rounded-xl text-red-700 h-[45px]">
            Бүртгүүлэх <CopyButton />
          </button>
          <button className="w-[170px] flex justify-around items-center border-red-700 border rounded-xl text-red-700 h-[45px]">
            Бүртгүүлэх
            <p>></p>
          </button>
        </div>
      </div>
      <SentMailSection />

      <div className="bg-gray-500 w-full h-[1px] mt-10"></div>

      <div className="w-full mt-[10px] flex justify-between">
        <div className="grid grid-cols-3 gap-10">
          {footTitles.map((el,index) => (
            <p key={index}>{el}</p>
          ))}
        </div>
        <div>
          <img src="foot-img.png"  alt="" />
          <img src="foot-img1.png" className="mt-[10px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
