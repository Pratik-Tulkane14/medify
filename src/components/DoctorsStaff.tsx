import { Swiper, SwiperSlide } from "swiper/react";
import person1 from "/person1.png";
import person2 from "/person2.png";
import person3 from "/person3.png";
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const DoctorsStaff: React.FC = () => {
    return (
        <div>
            <Swiper
                // className="mySwiper"
                // centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // pagination={true}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={100}
                slidesPerView={4}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="swipper-wrapper">

                        <img className="person" src={person1} alt="person1" />
                        <h5 className="doctor-name">Dr. Ahmad Khan</h5>
                        <p className="post">Neurologist</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swipper-wrapper">

                        <img className="person" src={person2} alt="person2" />
                        <h5 className="doctor-name">Dr. Heena Sachdeva</h5>
                        <p className="post">Orthopadics</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swipper-wrapper">

                        <img className="person" src={person3} alt="person3" />
                        <h5 className="doctor-name">Dr. Ankur Sharma</h5>
                        <p className="post">Medicine</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swipper-wrapper">

                        <img className="person" src={person1} alt="person1" />
                        <h5 className="doctor-name">Dr. Ahmad Khan</h5>
                        <p className="post">Neurologist</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swipper-wrapper">

                        <img className="person" src={person2} alt="person2" />
                        <h5 className="doctor-name">Dr. Heena Sachdeva</h5>
                        <p className="post">Orthopadics</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swipper-wrapper">

                        <img className="person" src={person3} alt="person3" />
                        <h5 className="doctor-name">Dr. Ankur Sharma</h5>
                        <p className="post">Medicine</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default DoctorsStaff