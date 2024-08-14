import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'react-cookies';
import { Outlet } from "react-router-dom";
import HomePageNav from './HomePageNav';
import HomePageHeader from './HomePageHeader';

const HomePageLayout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const token = Cookies.load('token');
            if (!token) {
                navigate('/signIn-page');
                return;
            }

            try {
                const decodedToken = decodeJWT(token);
                const currentTime = Date.now() / 1000; // Current time in seconds

                if (decodedToken.exp < currentTime) {
                    navigate('/signIn-page');
                    return;
                }
            } catch (error) {
                console.error("Error decoding token:", error);
                navigate('/signIn-page');
            }
        };

        checkAuth();
    }, [navigate]);

    const decodeJWT = (token) => {
        const base64Url = token.split('.')[1]; // Get the payload part of the token
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    return (
        <section className="HP">
            <div className="homepages">
                <HomePageNav />
                <div className="homepage-dashboard-container">
                    <HomePageHeader />
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </section>
    )
}

export default HomePageLayout;
