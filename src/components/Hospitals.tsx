import React, { useState } from 'react'
import hospitalIcon from "/hospitalIcon.png";
import check from "/checkwhite.png";
import freeAppointment from "/freeAppointment.png";
import like from "/like.svg";
import lessthan from "/lessthan.svg";
import greaterthan from "/greaterthan.svg";
import Hospital from '../interfaces/Hospital';
const Hospitals = () => {
    const [hospitalsList, setHospitalsList] = useState<Hospital[]>([
        {
            "Provider ID": 190045,
            "Hospital Name": "ST TAMMANY PARISH HOSPITAL",
            "Address": "1202 S TYLER STREET",
            "City": "COVINGTON",
            "State": "Louisiana",
            "ZIP Code": 70433,
            "County Name": "SAINT TAMMANY",
            "Phone Number": 9858984000,
            "Hospital Type": "Acute Care Hospitals",
            "Hospital Ownership": "Government - Hospital District or Authority",
            "Emergency Services": "Yes",
            "Meets criteria for meaningful use of EHRs": "Y",
            "Hospital overall rating": 4,
            "Hospital overall rating footnote": "",
            "Mortality national comparison": "Above the national average",
            "Mortality national comparison footnote": "",
            "Safety of care national comparison": "Above the national average",
            "Safety of care national comparison footnote": "",
            "Readmission national comparison": "Above the national average",
            "Readmission national comparison footnote": "",
            "Patient experience national comparison": "Above the national average",
            "Patient experience national comparison footnote": "",
            "Effectiveness of care national comparison": "Same as the national average",
            "Effectiveness of care national comparison footnote": "",
            "Timeliness of care national comparison": "Same as the national average",
            "Timeliness of care national comparison footnote": "",
            "Efficient use of medical imaging national comparison": "Below the national average",
            "Efficient use of medical imaging national comparison footnote": ""
        },
        {
            "Provider ID": 190177,
            "Hospital Name": "LAKEVIEW REGIONAL MEDICAL CENTER",
            "Address": "95 JUDGE TANNER BOULEVARD",
            "City": "COVINGTON",
            "State": "Louisiana",
            "ZIP Code": 70433,
            "County Name": "SAINT TAMMANY",
            "Phone Number": 9858674443,
            "Hospital Type": "Acute Care Hospitals",
            "Hospital Ownership": "Proprietary",
            "Emergency Services": "Yes",
            "Meets criteria for meaningful use of EHRs": "Y",
            "Hospital overall rating": 3,
            "Hospital overall rating footnote": "",
            "Mortality national comparison": "Same as the national average",
            "Mortality national comparison footnote": "",
            "Safety of care national comparison": "Below the national average",
            "Safety of care national comparison footnote": "",
            "Readmission national comparison": "Same as the national average",
            "Readmission national comparison footnote": "",
            "Patient experience national comparison": "Same as the national average",
            "Patient experience national comparison footnote": "",
            "Effectiveness of care national comparison": "Same as the national average",
            "Effectiveness of care national comparison footnote": "",
            "Timeliness of care national comparison": "Above the national average",
            "Timeliness of care national comparison footnote": "",
            "Efficient use of medical imaging national comparison": "Below the national average",
            "Efficient use of medical imaging national comparison footnote": ""
        },
        {
            "Provider ID": 190267,
            "Hospital Name": "FAIRWAY MEDICAL CENTER",
            "Address": "67252 INDUSTRY LANE",
            "City": "COVINGTON",
            "State": "Louisiana",
            "ZIP Code": 70433,
            "County Name": "SAINT TAMMANY",
            "Phone Number": 9858016252,
            "Hospital Type": "Acute Care Hospitals",
            "Hospital Ownership": "Physician",
            "Emergency Services": "No",
            "Meets criteria for meaningful use of EHRs": "Y",
            "Hospital overall rating": 5,
            "Hospital overall rating footnote": "There are too few measures or measure groups reported to calculate a star rating or measure group score",
            "Mortality national comparison": "Not Available",
            "Mortality national comparison footnote": "Results are not available for this reporting period",
            "Safety of care national comparison": "Not Available",
            "Safety of care national comparison footnote": "Results are not available for this reporting period",
            "Readmission national comparison": "Not Available",
            "Readmission national comparison footnote": "Results are not available for this reporting period",
            "Patient experience national comparison": "Not Available",
            "Patient experience national comparison footnote": "Results are not available for this reporting period",
            "Effectiveness of care national comparison": "Same as the national average",
            "Effectiveness of care national comparison footnote": "",
            "Timeliness of care national comparison": "Not Available",
            "Timeliness of care national comparison footnote": "Results are not available for this reporting period",
            "Efficient use of medical imaging national comparison": "Not Available",
            "Efficient use of medical imaging national comparison footnote": "Results are not available for this reporting period"
        }]);
    return (
        <div className="hospitals-wrapper">
            <div className="hospitals">
                <div className="details-hospital">

                    <p>{hospitalsList?.length} medical centers available in Alaska</p>
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
                                    <div className="">
                                        <p className='slot-time'>02:30PM</p>
                                    </div>
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