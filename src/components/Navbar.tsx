import { Link, NavLink } from "react-router";
import brandLogo from "/brandLogo.svg";
import hamburger from "/hamburger.svg";
import NavArray from "../constants/NavArray";
interface NavbarProps {
    setIsMobileNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar = ({ setIsMobileNavVisible }: NavbarProps) => {
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
                <div className="hamburger-section">
                    <img className="hamburger"
                        onClick={() => setIsMobileNavVisible(true)}
                    src={hamburger} alt="menu-icon" />
                </div>
            </div>
        </>
    )
}

export default Navbar