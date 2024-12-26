import { Link, NavLink } from "react-router";
import brandLogo from "/brandLogo.svg";
import NavArray from "../constants/NavArray";
const Navbar: React.FC = () => {
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
                        {NavArray.map((item) => {
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
                        <NavLink to="/my-bookings" className="my-booking-btn">
                            <span className={"my-bookings"}>
                                My Bookings
                            </span>
                    </NavLink>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar