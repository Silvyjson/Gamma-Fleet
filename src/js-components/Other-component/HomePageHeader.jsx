import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Cookies from 'react-cookies';
import parseJwt from "../../../parseJwt";
import { Input } from "../Other-component/FormProps";
import profileImag from "../../assets/Mask Group.png";
import emoji from "../../assets/Happy-Emoji-PNG 1.png";

const HomePageHeader = () => {

    const token = Cookies.load('token');
    const tokenData = token ? parseJwt(token) : {};
    const { clientName = '', role = '' } = tokenData.user;

    const displayRole = role === 'superAdmin' ? 'Fleet Manager' : role;

    const getOrdinalSuffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    const year = currentDate.getFullYear();
    const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });

    const date = `${dayOfWeek}, ${day}${getOrdinalSuffix(day)} ${month} ${year}`;


    return (
        <header className="homepage-header">
            <div className="welcome-msg">
                <h1>Welcome,{clientName}
                    <img src={emoji} alt="emoji" />
                </h1>
                <p>Today is {date}</p>
            </div>
            <div className="search_icon-section">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="search-icon" />
                <Input type="search" name="" id="" placeholder="search" />
            </div>
            <div className="profile_name-section">
                <div className="h-icons">
                    <FontAwesomeIcon icon="fa-regular fa-envelope" className="envelop" />
                    <FontAwesomeIcon icon="fa-solid fa-bell" className="bell" />
                </div>
                <div className="profile-details">
                    <span>
                        <h2>{clientName}</h2>
                        <p>{displayRole}</p>
                    </span>
                    <img src={profileImag} alt="profileicon" />
                </div>
            </div>
        </header>
    )
}

export default HomePageHeader