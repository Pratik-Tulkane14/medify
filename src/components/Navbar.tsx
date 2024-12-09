import brandLogo from "/brandLogo.svg";
const Navbar: React.FC = () => {
    return (
        <>
            <div className="navbar">
                <div className="nav-left-section">
                    <img src={brandLogo} alt="brandLogo" />
                </div>
                <div className="nav-right-section">
                    <ul className="nav-list">
                        <li>Find Doctors</li>
                        <li>Hospitals</li>
                        <li>Medicines</li>
                        <li>Surgeires</li>
                        <li>Software for Provider</li>
                        <li>Facilities</li>
                        <li >
                            <span className="my-booking-btn">

                                My Bookings
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar