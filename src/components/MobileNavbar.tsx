import React from 'react'
import navClose from '/navClose.svg'
import brandLogo from "/brandLogo.svg";
import { Link, NavLink } from 'react-router';
import NavArray from '../constants/NavArray';
interface MobileNavbarProps {
    isMobileNavVisible: boolean,
    setIsMobileNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileNavbar = ({ isMobileNavVisible, setIsMobileNavVisible }: MobileNavbarProps) => {
    return (
        <div className="ph-nav">
            <div className="ph-nav-wrapper">

                <div className={`mobile-nav`}>
                    <div className="mobile-header-section">
                        <Link to="/">
                            <img className='nav-img' src={brandLogo} alt="brandLogo" />
                        </Link>
                        <img className='nav-close-icon' onClick={() => setIsMobileNavVisible(false)} src={navClose} alt="navClose icon" />
                    </div>
                    <nav className="mobile-nav-list">
                        {NavArray.map((item) => {
                            return (
                                <NavLink
                                    key={item.id}
                                    to={item.link}
                                    className={({ isActive }) =>
                                        isActive ? "ph-active" : "mobile-nav-item"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            )
                        })}
                        <NavLink to="/my-bookings" className="my-booking-btn">
                            <span className={"my-bookings"}>
                                My Bookings
                            </span>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>


    )
}

export default MobileNavbar