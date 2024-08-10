import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'react-cookies';
import { Button, Input } from "../Other-component/FormProps";
import logo from '../../assets/GAMMA_LOGO.png'
import LoginImage from '../../assets/login-image.png';
import gogleIcon from '../../assets/flat-color-icons_google.png'
import appleIcon from '../../assets/bi_apple.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignInPage = () => {
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://gamma-fleet-backend.onrender.com/api/login', {
                email: formData.email,
                password: formData.password,
            }, {
                withCredentials: true
            });
            Cookies.save('token', response.data.token, { path: '/Gamma-Fleet/' });
            navigate("/Gamma-Fleet/dashboard-page");
        } catch (error) {
            setLoading(false)
            if (error) {
                setMessage(error.response?.data?.message || error.message);
            } else {
                setMessage(null);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className='entry-form-section'>
            <div className='form-logo'>
                <img src={logo} alt="gamma fleet logo" onClick={() => navigate("/Gamma-Fleet/")} />
            </div>
            <div className="entry-form-sect">
                <h1>Login to your account</h1>
                {message && <div className='error'><FontAwesomeIcon icon="fa-solid fa-circle-exclamation" /><p>{message}</p></div>}
                <div className="entry-form-container">
                    <form className="entry-form-content" onSubmit={handleSubmit}>
                        <Input
                            label="Email Address"
                            type="email"
                            name="email"
                            placeholder="Enter"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Enter"
                            required
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <Button type="submit" label={loading ? <FontAwesomeIcon icon="fa-solid fa-spinner" size="1x" spin /> : <>Login<FontAwesomeIcon icon="fa-solid fa-arrow-right" /></>} />
                        <p className="fp">Forgot Password?</p>
                        <div className='signOption'>
                            <img src={gogleIcon} alt="gogle icon" />
                            <p>Sign in with Google</p>
                        </div>
                        <div className='signOption'>
                            <img src={appleIcon} alt="apple icon" />
                            <p>Sign in with Apple</p>
                        </div>
                        <p className="p-link">Don’t have an account? <b onClick={() => navigate("/Gamma-Fleet/signUp-page")}>Sign up</b></p>
                    </form>
                    <div className='entry-form-image'>
                        <img src={LoginImage} alt="image for creating account" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignInPage

// 59dferYSWR@#$