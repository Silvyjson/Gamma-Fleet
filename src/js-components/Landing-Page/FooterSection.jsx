import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/GAMMA_LOGO.png'


function FooterSection() {
    return (
        <footer className="footer_section">
            <div className="footer-container">
                <div className="footer-logo" >
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer-links">
                    <h3>Product</h3>
                    <li>Overview</li>
                    <li>Features</li>
                    <li>Tutorials</li>
                    <li>Pricing</li>
                </div>
                <div className="footer-links">
                    <h3>Company</h3>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Contact us</li>
                </div>
                <div className="footer-links">
                    <h3>Support</h3>
                    <li>Help Center</li>
                    <li>Safety Center</li>
                    <li>Legal</li>
                </div>
                <div className="footer-links">
                    <h3>Legal</h3>
                    <li>Cookies Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Status</li>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2024 GammaFleet. All rights reserved.</p>
                <li className='social-media-icon'>
                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </li>
            </div>
        </footer>
    );
}

export default FooterSection;