import { Link, NavLink } from "react-router";
import brandLogo from "/brandLogo.svg";
const Navbar: React.FC = () => {
    const navArray = [
        {
            id: 1,
            name: 'Find Doctors',
            link: '/find-doctors'
        },
        {
            id: 2,
            name: 'Medicines',
            link: '/medicines'
        },
        {
            id: 3,
            name: 'Surgeires',
            link: '/surgeires'
        },
        {
            id: 4,
            name: 'Software for Provider',
            link: '/software-for-provider'
        },
        {
            id: 5,
            name: 'Facilities',
            link: '/facilities'
        },
    ]
    return (
        <>
            <div className="navbar">
                <div className="nav-left-section">
                    <Link to="/">
                        <img src={brandLogo} alt="brandLogo" />
                    </Link>
                </div>
                <div className="nav-right-section">

                    <nav className="nav-list">
                        {navArray.map((item) => {
                            return (
                                <NavLink
                                    key={item.id}
                                    to={item.link}
                                    className={({ isActive }) =>
                                        isActive ? "active" : "nav-item"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            )
                        })}
                        <button className="my-booking-btn">
                            My Bookings
                        </button>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar