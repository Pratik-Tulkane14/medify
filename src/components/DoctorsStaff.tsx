import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import doctorsData from "../constants/doctorsData";

const DoctorsStaff: React.FC = () => {

    return (
        <div>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={100}
                slidesPerView={4}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 100
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    }
                }}
            >
                {doctorsData.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="swipper-wrapper">

                                <img className="person" src={item.image} alt="person2" />
                                <h5 className="doctor-name">{item["dr-name"]}</h5>
                                <p className="post">{item.post}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default DoctorsStaff