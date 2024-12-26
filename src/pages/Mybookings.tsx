import mybookings from "../constants/mybookings";
import hospitalIcon from "/hospitalIcon.png";
import freeAppointment from "/freeAppointment.png";
import like from "/like.svg";
import BookingSeach from "../components/BookingSeach";
const Mybookings = () => {
    return (
        <div className="bookings-section">
            <BookingSeach />
            <div className="my-bookings-wrapper">
                <div className="hospitals-cards">
                    {mybookings?.map((item) => {
                        return (
                            <div key={item["Provider ID"]} className="hospital-details-card">
                                <div className="hospital-img">
                                    <img
                                        src={hospitalIcon}
                                        className="hospital-icon"
                                        alt="hospitalIcon"
                                    />
                                </div>
                                <div className="card-details">
                                    <div className="booking-slots-section">
                                        <h2 className="hospital-name">{item["Hospital Name"]}</h2>
                                        <p className="booking-slot-time">11:30AM</p>
                                        <p className="booking-slot-date">{item["Booking date"]}</p>
                                    </div>
                                    <div className="address-wrapper">
                                        <div className="address">
                                            <p className="location">{item?.City},</p>
                                            <p className="location">{item?.State}</p>
                                        </div>
                                        <p>{item["Hospital Type"]}</p>
                                    </div>
                                    <div className="hos-wrapper">
                                        <div className="like-section">
                                            <div className="like-wrapper">
                                                <img src={like} className="like-icon" alt="like-icon" />
                                                <p className="like-count">
                                                    {item["Hospital overall rating"]}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="freeAppointment">
                    <img src={freeAppointment} alt="freeAppointment" />
                </div>
            </div>
        </div>

    );
};

export default Mybookings;
