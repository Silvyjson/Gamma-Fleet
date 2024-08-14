import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'react-cookies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../assets/GAMMA_LOGO.png';
import id_card from '../../../assets/svg-icon/id_card.svg';
import car from '../../../assets/svg-icon/mingcute_car-line.svg';
import driver from '../../../assets/svg-icon/healthicons_truck-driver-outline.svg';
import lTrack from '../../../assets/svg-icon/carbon_location.svg';
import funnel from '../../../assets/svg-icon/iconamoon_funnel.svg';
import tools from '../../../assets/svg-icon/codicon_tools.svg';
import user from '../../../assets/svg-icon/mdi_user-outline.svg';
import money from '../../../assets/svg-icon/tdesign_money.svg';
import train from '../../../assets/svg-icon/ph_train.svg';
import setting from '../../../assets/svg-icon/carbon_settings.svg';
import guarantee from '../../../assets/Guarantee.png';

const HomePageNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);

    const [homepageNavItems] = useState([
        {
            title: "Dashboard",
            icon: id_card,
            nav: "/dashboard-page"
        },
        {
            title: "Vehicle",
            icon: car,
            nav: "/vehicle-page"
        },
        {
            title: "Driver",
            icon: driver,
            nav: "/driver-page"
        },
        {
            title: "Live Track",
            icon: lTrack,
            nav: "/liveTrack-page"
        },
        {
            title: "Fill up",
            icon: funnel,
            nav: "/fillUp-page"
        },
        {
            title: "Maintenance",
            icon: tools,
            nav: "/maintenance-page"
        },
        {
            title: "User Management",
            icon: user,
            nav: "/user-management-page"
        },
        {
            title: "Report",
            icon: money,
            nav: "/report-page"
        },
        {
            title: "Trips",
            icon: train,
            nav: "/trips-page"
        },
        {
            title: "Settings",
            icon: setting,
            nav: "/settings-page"
        }
    ]);

    useEffect(() => {
        if (location.pathname === "/") {
            navigate(homepageNavItems[0].nav);
        }
    }, [location.pathname, navigate, homepageNavItems]);

    const handleGetDash = () => {
        setIsExpanded(prevState => !prevState);
    };

    useEffect(() => {
        const homePageMenu_section = document.querySelector('.homePageMenu_section');
        const homePageMenu_content = document.querySelectorAll('.homePageMenu_content');
        const p_names = document.querySelectorAll('.p-names');
        const guarantee = document.querySelector('.guarantee')

        if (isExpanded) {
            homePageMenu_section.style.width = '250px';
            guarantee.style.display = 'flex';
            homePageMenu_content.forEach(content => {
                content.style.paddingLeft = '25%';
            });
            p_names.forEach(p_name => {
                p_name.style.display = 'block';
            });
        } else {
            homePageMenu_section.style.width = '100px';
            guarantee.style.display = 'none';
            homePageMenu_content.forEach(content => {
                content.style.paddingLeft = '30%';
            });
            p_names.forEach(p_name => {
                p_name.style.display = 'none';
            });
        }
    }, [isExpanded]);

    const handleLogOut = () => {
        Cookies.remove('token', { path: '/' });
        Cookies.remove('token', { path: '/' });
        navigate("/signIn-page")
    };

    return (
        <section className="homePageMenu_section">
            <div className='homepage-logo'>
                <img src={logo} alt="gamma fleet logo" />
            </div>
            <div className="homePageMenu_container">
                <div>
                    {homepageNavItems.map((item, index) => {
                        const isSelected = location.pathname === item.nav;
                        return (
                            <div
                                key={index}
                                className={`homePageMenu_content ${isSelected ? "selected" : ""}`}
                                onClick={() => navigate(item.nav)}
                            >
                                <span>
                                    <img src={item.icon} alt={`${item.title} icon`} className={isSelected ? 'selectedIcon' : ''} />
                                    <p className={`p-names ${isSelected ? 'selected' : ''}`}>{item.title}</p>
                                </span>
                                <div className={isSelected ? 'drag' : ''} onClick={handleGetDash}>
                                    <div />
                                    <div />
                                    <div />
                                </div>
                            </div>
                        );
                    })}

                </div>
                <div className='homePageMenu-icon'>
                    <span className='guarantee'>
                        <img src={guarantee} alt="guarantee icon" />
                        <p>View plans</p>
                    </span>
                    <span className='logout' onClick={handleLogOut}>
                        <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                        <p>Logout</p>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default HomePageNav;
