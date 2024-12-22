import brandLogo from "/brandLogo.svg";
import x from "/x.png";
import youtube from "/youtube.png";
import pintrest from "/pintrest.png";
import faceBook from "/fb.png";
import FooterLinks from "./FooterLinks";
import FooterLinksSecond from "./FooterLinksSecond";

const Footer: React.FC = () => {
    const socialMediaLinks = [
        { src: faceBook, alt: "Facebook", link: "https://facebook.com" },
        { src: x, alt: "Twitter", link: "https://twitter.com" },
        { src: youtube, alt: "YouTube", link: "https://youtube.com" },
        { src: pintrest, alt: "Pinterest", link: "https://pinterest.com" },
    ];
    return (
        <footer className="footer-wrapper">
            <div className="footer">
                <div className="first-section">

                    <div className="item">
                        <img className="footer-brand-logo" src={brandLogo} alt="Brand Logo" />
                    </div>
                    <div className="media-links">
                        {socialMediaLinks.map((icon) => (
                            <a
                                href={icon.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit us on ${icon.alt}`}
                                key={icon.alt}
                            >
                                <img src={icon.src} alt={icon.alt} />
                            </a>
                        )
                        )}
                    </div>
                </div>
                <div className="item">
                    <FooterLinks />
                </div>
                <div className="item">
                    <FooterLinksSecond/>
                </div>
                <div className="item">
                    <FooterLinks />
                </div>
            </div>
            <div className="right-reserve-wrapper">
                <p className="right-reserve">Copyright ©2024 Surya Nursing Home.com. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
