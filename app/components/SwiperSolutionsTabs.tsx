import { useState } from "react";
import { useSwiper } from "swiper/react";

const SwiperSolutionsTabs = () => {
  const swiper = useSwiper();
  const [solution, setSolution] = useState(0);
  return (
    <div className="flex justify-center uppercase md:mb-10 mb-6 px-4 order-first">
      <p
        onClick={() => {
          swiper.slideTo(0);
          setSolution(0);
        }}
        className={`w-[162px] cursor-pointer pb-3 text-center text-sm ${
          solution == 0
            ? "font-bold text-primary border-b border-[#1F40AE]"
            : "font-semibold text-neutral-n-50"
        }`}
      >
        retail
      </p>
      <p
        onClick={() => {
          swiper.slideTo(1);
          setSolution(1);
        }}
        className={`w-[162px] cursor-pointer pb-3 text-center text-sm ${
          solution == 1
            ? "font-bold text-primary border-b border-[#1F40AE]"
            : "font-semibold text-neutral-n-50"
        }`}
      >
        cafe
      </p>
      <p
        onClick={() => {
          swiper.slideTo(2);
          setSolution(2);
        }}
        className={`w-[162px] cursor-pointer pb-3 text-center text-sm ${
          solution == 2
            ? "font-bold text-primary border-b border-[#1F40AE]"
            : "font-semibold text-neutral-n-50"
        }`}
      >
        Restaurant
      </p>
    </div>
  );
};

export default SwiperSolutionsTabs;
