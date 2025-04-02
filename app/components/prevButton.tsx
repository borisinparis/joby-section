import { ArrowLeftIcon } from "lucide-react";
import { SwiperButtonProps } from "./nextButton";

const PrevButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slidePrev()}
      className="text-white py-2 px-4 rounded cursor-pointer transition"
    >
      <ArrowLeftIcon />
    </button>
  );
};

export default PrevButton;
