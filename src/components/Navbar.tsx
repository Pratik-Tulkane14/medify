import brandLogo from "/brandLogo.svg";
const Navbar:React.FC = () => {
  return (
    <>
    <div className="">
        <div className="">
                  <img src={brandLogo} alt="brandLogo" />
        </div>
        <div className="">
            <ul>
                <li>Find Doctors</li>
                <li>Hospitals</li>
                <li>Medicines</li>
                <li>Surgeires</li>
                <li>Software for Provider</li>
                <li>Facilities</li>
                <li>My Bookings</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar