import { useEffect, useState } from 'react'
import hospitalIcon from "/hospitalIcon.png";
import check from "/checkwhite.png";
import freeAppointment from "/freeAppointment.png";
import like from "/like.svg";
import lessthan from "/lessthan.svg";
import greaterthan from "/greaterthan.svg";
import Hospital from '../interfaces/Hospital';
import { useLocation } from 'react-router';
const Hospitals = () => {
    const location = useLocation();
    const data = location.state as { hospitalData: Hospital; };
    console.log(data,"data");
    
    const [hospitalsList, setHospitalsList] = useState<Hospital[]>([]);
    useEffect(() => {
        if (data) {
            setHospitalsList(data.hospitalData)
        }
    }, [])
    return (
        <div className="hospitals-wrapper">
            <div className="hospitals">
                <div className="details-hospital">

                    <p>{hospitalsList?.length} medical centers available in
                        <span className='area-name'>

                            {hospitalsList[0]?.City}
                        </span>
                    </p>
                    <div className="hospital-icon-check">
                        <img src={check} alt="check" />
                        <p>
                            Book appointments with minimum wait-time & verified doctor details
                        </p>
                    </div>
                </div>
                <div className="section">

                    <div className="hospitals-cards">
                        {hospitalsList?.map((item) => {
                            return (

                                <div key={item['Provider ID']} className="hospital-details-card">
                                    <div className="hospital-img">
                                        <img src={hospitalIcon} className='hospital-icon' alt="hospitalIcon" />
                                    </div>
                                    <div className="card-details">

                                        <h2 className='hospital-name'>{item['Hospital Name']}</h2>
                                        <div className="address-wrapper">

                                            <div className="address">

                                                <p className='location'>{item?.City},</p>
                                                <p className='location'>{item?.State}</p>
                                            </div>
                                            <p>{item['Hospital Type']}</p>
                                        </div>
                                        <div className="hos-wrapper">
                                            <div className="like-section">

                                                <p className='offer-details'>
                                                    <span className='offer-free'>FREE</span>
                                                    <del className='offer-price'>500</del>
                                                    Consultation fee at clinic
                                                </p>
                                                <div className='like-wrapper'>
                                                    <img src={like} className='like-icon' alt="like-icon" />
                                                    <p className='like-count'>{item['Hospital overall rating']}</p>
                                                </div>
                                            </div>
                                            <div className="book-btn-wrapper">
                                                <p className='available'>Available Today</p>
                                                <button className='book-btn'>Book FREE Center Visit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="slots-wrapper">
                            <div className="slots-header">
                                <div className="left-navigator">
                                    <img src={lessthan} alt="leftarrow" />
                                </div>
                                <div className="wrapper-slots-time">

                                    <div className="slot-details">
                                        <p className=''>Today</p>
                                        <span className='slots-no'>11 Slots Available</span>
                                    </div>
                                    <div className="slot-details">
                                        <p className=''>Tomorrow</p>
                                        <span className='slots-no'>17 Slots Available</span>

                                    </div>
                                    <div className="slot-details">
                                        <p className=''>Fri, 5 Dec</p>
                                        <span className='slots-no'>18 Slots Available</span>

                                    </div>
                                </div>

                                <div className="right-navigator">
                                    <img src={greaterthan} alt="leftarrow" />
                                </div>
                            </div>
                            <div className="slots-wrapper">
                                <div className="slots-time">
                                    <div className="">
                                        <p className='slot-category'> Morning</p>
                                    </div>
                                    <div className="">
                                        <p className='slot-time'>11:30AM</p>
                                    </div>
                                </div>
                                <div className="slots-time">
                                    <div className="">
                                        <p className='slot-category'> Afternoon</p>
                                    </div>
                                    <div className="">
                                        <p className='slot-time'>12.00PM</p>
                                    </div>
                                    <div className="">
                                        <p className='slot-time'>12:30PM</p>
                                    </div>
                                    <div className="">
                                        <p className='slot-time'>01.00PM</p>
                                    </div>
                                    <div className="">
                                        <p className='slot-time'>01:30PM</p>
                                    </div>
                                    <div className="">
                                        <p className='slot-time'>02.00PM</p>
                                    </div>
                                    {/* <div className="">
                                        <p className='slot-time'>02:30PM</p>
                                    </div> */}
                                </div>
                                <div className="slots-time">
                                    <div className="">
                                        <p className='slot-category'> Evening</p>
                                    </div>
                                    <div className="">
                                        <p className='slot-time'>06.00PM</p>
                                    </div>
                                    <div className="">
                                        <p className='slot-time'>06:30PM</p>
                                    </div>
                                    <div className="">
                                        <p className='slot-time'>07.00PM</p>
                                    </div>
                                    <div className="">
                                        <p className='slot-time'>07:30PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="freeAppointment">
                        <img src={freeAppointment} alt="freeAppointment" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hospitals