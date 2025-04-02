import { ArrowRightIcon } from "lucide-react";
import SwiperInstance from "swiper";

export interface SwiperButtonProps {
  swiperRef: React.RefObject<SwiperInstance | null>;
}

const NextButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slideNext()}
      className="text-white py-3 px-4  rounded cursor-pointer"
    >
      <ArrowRightIcon />
    </button>
  );
};

export default NextButton;
