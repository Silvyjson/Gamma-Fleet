import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../assets/GAMMA_LOGO.png';
import id_card from '../../../assets/id_card.png';
import id_card_s from '../../../assets/id_card (1).png';
import car from '../../../assets/mingcute_car-line.png';
import car_s from '../../../assets/mingcute_car-line (1).png';
import officer from '../../../assets/mdi_officer.png';
import officer_s from '../../../assets/mdi_officer (1).png';
import funnel from '../../../assets/iconamoon_funnel.png';
import funnel_s from '../../../assets/iconamoon_funnel (1).png';
import tools from '../../../assets/codicon_tools.png';
import tools_s from '../../../assets/codicon_tools (1).png';
import user from '../../../assets/mdi_user-outline.png';
import user_s from '../../../assets/mdi_user-outline (1).png';
import money from '../../../assets/tdesign_money.png';
import money_s from '../../../assets/tdesign_money (1).png';
import train from '../../../assets/ph_train.png';
import train_s from '../../../assets/ph_train (1).png';
import setting from '../../../assets/carbon_settings.png';
import setting_s from '../../../assets/carbon_settings (1).png';
import guarantee from '../../../assets/Guarantee.png';

const HomePageNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);

    const [homepageNavItems] = useState([
        {
            title: "Dashboard",
            icon: id_card,
            selectedIcon: id_card_s,
            nav: "/Gamma-Fleet/dashboard-page"
        },
        {
            title: "Vehicle",
            icon: car,
            selectedIcon: car_s,
            nav: "/Gamma-Fleet/vehicle-page"
        },
        {
            title: "Driver",
            icon: officer,
            selectedIcon: officer_s,
            nav: "/Gamma-Fleet/driver-page"
        },
        {
            title: "Fill up",
            icon: funnel,
            selectedIcon: funnel_s,
            nav: "/Gamma-Fleet/fillUp-page"
        },
        {
            title: "Maintenance",
            icon: tools,
            selectedIcon: tools_s,
            nav: "/Gamma-Fleet/maintenance-page"
        },
        {
            title: "User Management",
            icon: user,
            selectedIcon: user_s,
            nav: "/Gamma-Fleet/user-management-page"
        },
        {
            title: "Report",
            icon: money,
            selectedIcon: money_s,
            nav: "/Gamma-Fleet/report-page"
        },
        {
            title: "Trips",
            icon: train,
            selectedIcon: train_s,
            nav: "/Gamma-Fleet/trips-page"
        },
        {
            title: "Settings",
            icon: setting,
            selectedIcon: setting_s,
            nav: "/Gamma-Fleet/settings-page"
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
                                    <img src={isSelected ? item.selectedIcon : item.icon} alt={`${item.title} icon`} />
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
                    <span className='logout' onClick={() => navigate("/Gamma-Fleet/signIn-page")}>
                        <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                        <p>Logout</p>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default HomePageNav;
