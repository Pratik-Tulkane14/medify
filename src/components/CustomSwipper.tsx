// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import offer1 from "/offer1.png";
import offer2 from "/offer2.png";
import offer3 from "/offer3.png";
// Import Swiper styles
import "swiper/css";

import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const CustomSwipper = () => {
  return (
    <div className="custom-swipper-wrapper">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className="offer" src={offer1} alt="offer1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="offer" src={offer2} alt="offer2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="offer" src={offer3} alt="offer3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="offer" src={offer1} alt="offer1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomSwipper;
