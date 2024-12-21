// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import offersData from "../constants/offersData";
const CustomSwipper: React.FC = () => {
  return (
    <div className="custom-swipper-wrapper">
      <Swiper
        className="mySwiper"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30} // Reduced from 100 for better mobile layout
        pagination={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 100
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 100
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 150
          }
        }}
      >
        {offersData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swipper-wrapper">
              <img className="offer" src={item.offerImage} alt={`offer-${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwipper;
