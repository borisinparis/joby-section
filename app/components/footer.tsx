"use client";
import { Input } from "@/components/ui/input";
import SearchSvg from "@/public/searchSvg";
import { useState } from "react";

export const Footer = () => {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className="lg:mx-auto max-w-7xl mx-[1.5rem]">
      <div className="flex">
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
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Footer;
