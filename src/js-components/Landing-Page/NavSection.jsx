import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Menubar from "../Other-component/Navigation";
import logo from '../../assets/GAMMA_LOGO.png'
import PropTypes from "prop-types";

const HeaderLinkList = (props) => {
    const { list, clasS } = props;

    const toggleGet = () => {
        const navScroll = document.querySelector(clasS);

        navScroll.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <li onClick={toggleGet}>{list}</li>
    );
}

HeaderLinkList.propTypes = {
    list: PropTypes.string,
    clasS: PropTypes.string
}

const NavSection = () => {
    const navigate = useNavigate();

    function toggleList() {

        const menuIcon = document.querySelector(`.headersection-menu-icon`)

        const navElements = document.querySelectorAll(`.navElement`);

        menuIcon.classList.toggle("open");

        navElements.forEach(navElement => {
            navElement.classList.toggle("open_nav");
        });

    }

    useEffect(() => {
        const closeMenuOnBodyClick = (event) => {
            const menuIcon = document.querySelector(`.headersection-menu-icon`);
            const navElements = document.querySelectorAll(`.navElement`);

            if (!menuIcon.contains(event.target) && !navElements[0].contains(event.target)) {
                menuIcon.classList.remove("open");

                navElements.forEach(navElement => {
                    navElement.classList.remove("open_nav");
                });
            }
        };

        document.body.addEventListener('click', closeMenuOnBodyClick);
        window.addEventListener('scroll', closeMenuOnBodyClick);

        return () => {
            document.body.removeEventListener('click', closeMenuOnBodyClick);
            window.removeEventListener('scroll', closeMenuOnBodyClick);
        };
    }, []);
    return (
        <nav className="header_nav-section">
            <div className="logo-menubar-container">
                <img src={logo} alt="logo" />
                <Menubar
                    onClick={toggleList}
                    className="headersection-menu-icon"
                />
            </div>

            <ul className="navElement">
                <HeaderLinkList
                    list="Home"
                    clasS=".header_section"
                />
                <HeaderLinkList
                    list="About Us"
                    clasS=".about-section"
                />
                <HeaderLinkList
                    list="Resources"
                    clasS=".faq-section"
                />
                <HeaderLinkList
                    list="Features"
                    clasS=".service-section"
                />
                <HeaderLinkList
                    list="Contact Us"
                    clasS=".footer_section"
                />
            </ul>

            <ul className="navElement navlist">
                <li onClick={() => navigate("/Gamma-Fleet/signIn-page")}>Login</li>
                <li onClick={() => navigate("/Gamma-Fleet/signUp-page")}>Create account</li>
            </ul>
        </nav>
    )
}

export default NavSection