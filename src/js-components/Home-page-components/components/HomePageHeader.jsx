import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from 'react-cookies';
import axios from "axios";
import { Input } from "../../Other-component/FormProps";
import profileImag from "../../../assets/Mask Group.png";
import emoji from "../../../assets/Happy-Emoji-PNG 1.png";

const HomePageHeader = () => {
    const [client, setClient] = useState({});
    const [loading, setLoading] = useState(false);
    const token = Cookies.load('token');

    useEffect(() => {
        const fetchClient = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://gamma-fleet-backend.onrender.com/api/get-client', {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setClient(response.data.client);
            } catch (error) {
                console.error('There was an error fetching the Client!', error);
            } finally {
                setLoading(false);
            }
        };

        fetchClient();
    }, [token]);

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

    const displayRole = client.role === 'superAdmin' ? 'Fleet Manager' : client.role;
    const clientName = client.clientName || 'User';

    return (
        <header className="homepage-header">
            <div className="welcome-msg">
                <h1>Welcome, {loading ? <FontAwesomeIcon icon="fa-solid fa-circle-notch" spin size="1x" /> : clientName}
                    <img src={emoji} alt="emoji" />
                </h1>
                <p>Today is {date}</p>
            </div>
            <div className="search_icon-section">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="search-icon" />
                <Input type="search" placeholder="search" />
            </div>
            <div className="profile_name-section">
                <div className="h-icons">
                    <FontAwesomeIcon icon="fa-regular fa-envelope" className="envelop" />
                    <FontAwesomeIcon icon="fa-solid fa-bell" className="bell" />
                </div>
                <div className="profile-details">
                    <span>
                        <h2>{loading ? <FontAwesomeIcon icon="fa-solid fa-circle-notch" spin size="1x" /> : clientName}</h2>
                        <p>{displayRole}</p>
                    </span>
                    <img src={profileImag} alt="profile icon" />
                </div>
            </div>
        </header>
    );
};

export default HomePageHeader;
