import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'react-cookies';
import { Button, Input, Select } from "../Other-component/FormProps";
import logo from '../../assets/GAMMA_LOGO.png';
import createAccountImage from '../../assets/create-account-image.png';
import businessRegistrationImage from '../../assets/business-registration-image.png';
import verifyImage from '../../assets/verify-image.png';
import gogleIcon from '../../assets/flat-color-icons_google.png';
import appleIcon from '../../assets/bi_apple.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignUpPage = () => {
    const [step, setStep] = useState(1);
    const [countdown, setCountdown] = useState(5);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingOTP, setLoadingOTP] = useState(false);
    const [otpSent, setOTPSent] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        clientName: '',
        taxId: '',
        clientAddress: '',
        servicesOffered: '',
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const heading = document.getElementById('heading');
        if (step === 1) {
            heading.innerText = 'Create Account';
        } else if (step === 2) {
            heading.innerText = 'Register your business';
        } else {
            heading.innerText = 'Please check your email';
        }
    }, [step]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const isPasswordValid = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (!isPasswordValid(formData.password)) {
            setMessage(
                "Password must be at least 8 characters long and contain at least 1 letter, 1 number, and 1 special character."
            );
            return;
        } else {
            setMessage("");
        }

        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }
        setStep(prevStep => prevStep + 1);
        setMessage("");
    };

    const handlePrevious = (e) => {
        e.preventDefault();
        setStep(prevStep => prevStep - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://gamma-fleet-backend.onrender.com/api/register-client', {
                email: formData.email,
                password: formData.password,
                clientName: formData.clientName,
                clientAddress: formData.clientAddress,
                taxId: formData.taxId,
                servicesOffered: formData.servicesOffered
            }, {
                withCredentials: true
            });
            Cookies.save('token', response.data.token, { path: '/' });
            setStep(prevStep => prevStep + 1);
            setMessage("");
        } catch (error) {
            setLoading(false);
            if (error) {
                setMessage(error.response?.data?.message || error.message);
            } else {
                setMessage("");
            }
        } finally {
            setLoading(false);
        }
    };

    const token = Cookies.load('token');

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        const otp = formData.otp1 + formData.otp2 + formData.otp3 + formData.otp4;

        if (!token) {
            setMessage("Invalid token");
            setLoading(false);
            return;
        }

        try {
            await axios.post('https://gamma-fleet-backend.onrender.com/api/verify-client', {
                otp: otp
            }, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setLoading(false);
            navigate("/dashboard-page");
        } catch (error) {
            setLoading(false);
            if (error) {
                setMessage(error.response?.data?.message || error.message);
            } else {
                setMessage(null);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleOtpChange = (e, position) => {
        const { value } = e.target;
        if (/^\d$/.test(value) || value === '') {
            setFormData({
                ...formData,
                [`otp${position}`]: value
            });
            if (value !== '' && position < 4) {
                document.getElementById(`otp${position + 1}`).focus();
            }
        }
    };

    const handleGenerateOTP = async () => {

        setLoadingOTP(true);

        if (!token) {
            setMessage("Invalid token");
            setLoadingOTP(false);
            return;
        }

        try {
            await axios.patch('https://gamma-fleet-backend.onrender.com/api/generate-new-otp', {}, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setCountdown(5);
            setOTPSent(`OTP sent (${countdown}s)`);

            const countdownInterval = setInterval(() => {
                setCountdown(prevCountdown => {
                    if (prevCountdown <= 1) {
                        clearInterval(countdownInterval);
                        setOTPSent(null);
                        return 0;
                    }
                    setOTPSent(`OTP sent (${prevCountdown - 1}s)`);
                    return prevCountdown - 1;
                });
            }, 1000);
        } catch (error) {
            if (error) {
                setMessage(error.response?.data?.message || error.message);
            } else {
                setMessage(null);
            }
        } finally {
            setLoadingOTP(false);
        }
    }


    return (
        <section className='entry-form-section'>
            <div className='form-logo'>
                <img src={logo} alt="gamma fleet logo" onClick={() => navigate("/")} />
            </div>
            <form className='entry-form-sect' onSubmit={step === 1 ? handleNext : step === 2 ? handleSubmit : handleVerify}>
                <h1 id='heading'></h1>
                <div className='volume'>
                    <div>
                        <span className='volume-line'>
                            <span className={`${step >= 1 ? 'line-active' : 'lines'}`} />
                            <span className={`${step >= 1 ? 'circle-active' : 'circle'}`} />
                            <span className={`${step >= 2 ? 'line-active' : 'lines'}`} />
                        </span>
                        <p>Register</p>
                    </div>
                    <div>
                        <span className='volume-line'>
                            <span className={`${step >= 2 ? 'line-active' : 'lines'}`} />
                            <span className={`${step >= 2 ? 'circle-active' : 'circle'}`} />
                            <span className={`${step >= 3 ? 'line-active' : 'lines'}`} />
                        </span>
                        <p>Organization</p>
                    </div>
                    <div>
                        <span className='volume-line'>
                            <span className={`${step >= 3 ? 'line-active' : 'lines'}`} />
                            <span className={`${step >= 3 ? 'circle-active' : 'circle'}`} />
                            <span className={`${step >= 3 ? 'line-active' : 'lines'}`} />
                        </span>
                        <p>Verify</p>
                    </div>
                </div>
                {message && <div className='error'><FontAwesomeIcon icon="fa-solid fa-circle-exclamation" /><p>{message}</p></div>}
                {step === 1 && (
                    <div className='entry-form-container'>
                        <div className='entry-form-content'>
                            <Input
                                label="Email Address"
                                type="email"
                                name="email"
                                placeholder="Enter"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <Input
                                label="Create Password"
                                type="password"
                                name="password"
                                placeholder="Enter"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <Input
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                placeholder="Enter"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                            <span className='link'>
                                <input type="checkbox" required />
                                <p>I agree with the <b>Terms & Conditions</b> of Gamma Fleet</p>
                            </span>
                            <Button type="submit" label={<>Continue<FontAwesomeIcon icon="fa-solid fa-arrow-right" /></>} />
                            <div className='signOption'>
                                <img src={gogleIcon} alt="gogle icon" />
                                <p>Sign in with Google</p>
                            </div>
                            <div className='signOption'>
                                <img src={appleIcon} alt="apple icon" />
                                <p>Sign in with Apple</p>
                            </div>
                            <p className='p-link'>Already have an account? <b onClick={() => navigate("/signIn-page")}>Login</b></p>
                        </div>
                        <div className='entry-form-image'>
                            <img src={createAccountImage} alt="image for creating account" />
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className='entry-form-container'>
                        <div className='entry-form-content'>
                            <Input
                                label="Company Name"
                                type="text"
                                name="clientName"
                                placeholder="Enter"
                                value={formData.clientName}
                                onChange={handleInputChange}
                                required
                            />
                            <Input
                                label="Tax ID"
                                type="text"
                                name="taxId"
                                placeholder="Enter"
                                value={formData.taxId}
                                onChange={handleInputChange}
                                required
                            />
                            <Input
                                label="Company Address"
                                type="text"
                                name="clientAddress"
                                placeholder="Enter"
                                value={formData.clientAddress}
                                onChange={handleInputChange}
                                required
                            />
                            <Select
                                label="Services Offered"
                                name="servicesOffered"
                                value={formData.servicesOffered}
                                options={["Transportation", "Logistics"]}
                                onChange={handleInputChange}
                                required
                            />
                            <div className='entry-form-button'>
                                <Button type="button" label={<><FontAwesomeIcon icon="fa-solid fa-arrow-left" />Previous</>} onClick={handlePrevious} className="p-button" />
                                <Button type="submit" label={loading ? <FontAwesomeIcon icon="fa-solid fa-spinner" size="1x" spin /> : <>Submit<FontAwesomeIcon icon="fa-solid fa-arrow-right" /></>} />
                            </div>
                        </div>
                        <div className='entry-form-image' >
                            <img src={businessRegistrationImage} alt="image for creating account" />
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className='entry-form-container'>
                        <div className='entry-form-content'>
                            <div className='otp-form'>
                                {[1, 2, 3, 4].map((i) => (
                                    <input
                                        key={i}
                                        type="text"
                                        name={`otp${i}`}
                                        id={`otp${i}`}
                                        value={formData[`otp${i}`]}
                                        onChange={(e) => handleOtpChange(e, i)}
                                        maxLength="1"
                                        className='otp-number'
                                        required
                                    />
                                ))}
                            </div>
                            <Button type="submit" label={loading ? <FontAwesomeIcon icon="fa-solid fa-spinner" size="1x" spin /> : "Verify"} />
                            <p className='p-link'>Didn’t get the code? <b onClick={handleGenerateOTP}>{loadingOTP ? (<FontAwesomeIcon icon="fa-solid fa-circle-notch" spin size="1x" />) : (otpSent ? otpSent : "Click to resend")}</b></p>
                        </div>
                        <div className='entry-form-image'>
                            <img src={verifyImage} alt="image for creating account" />
                        </div>
                    </div>
                )}
            </form>
        </section>
    )
}

export default SignUpPage;
