import brandLogo from "/brandLogo.svg";
import x from "/x.png";
import youtube from "/youtube.png";
import pintrest from "/pintrest.png";
import faceBook from "/fb.png";
import FooterLinks from "./FooterLinks";

const Footer: React.FC = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="first-section">

                    <div className="item">
                        <img className="footer-brand-logo" src={brandLogo} alt="Brand Logo" />
                    </div>
                    <div className="media-links">
                        <img src={faceBook} alt="Facebook" />
                        <img src={x} alt="X" />
                        <img src={youtube} alt="Youtube" />
                        <img src={pintrest} alt="Pintrest" />
                    </div>
                </div>
                <div className="item">
                    <FooterLinks />
                </div>
                <div className="item">
                    <ul className="links">
                        <li>Orthology</li>
                        <li>Neurology</li>
                        <li>Dental Care</li>
                        <li>Opthalmology</li>
                        <li>Cardiology</li>
                    </ul>
                </div>
                <div className="item">
                    <FooterLinks />
                </div>
            </div>
            <div className="right-reserve-wrapper">

                    <p className="right-reserve">Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
                </div>
        </div>
    );
};

export default Footer;
