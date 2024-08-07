import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'react-cookies';

const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const token = Cookies.load('token');
            if (!token) {
                navigate('/Gamma-Fleet/signIn-page');
                return;
            }
        };

        checkAuth();
    }, [navigate]);
};

export default useAuth;
