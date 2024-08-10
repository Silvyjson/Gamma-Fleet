import { useState, useRef } from 'react';
import Cookies from 'react-cookies';
import axios from 'axios';
import { Input } from '../../Other-component/FormProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileImag from '../../../assets/Mask Group.png';
import PropTypes from 'prop-types';

const AddDriversection = ({ onClick, setDriverForm, fetchDrivers }) => {
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        profileImg: '',
        fullName: '',
        email: '',
        phoneNumber: '',
        licenseNumber: '',
        address: '',
        password: ''
    });
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    profileImg: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const token = Cookies.load('token');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        if (!formData.profileImg) {
            setMessage('Please upload a profile picture');
            setLoading(false)
            return;
        }

        try {
            await axios.post('https://gamma-fleet-backend.onrender.com/api/register-driver', formData, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setDriverForm(false);
            fetchDrivers();
        } catch (error) {
            setMessage(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='addVehicleSection'>
            <div className='addVehicleContainer'>
                <FontAwesomeIcon icon="fa-solid fa-x" className='x-icon' onClick={onClick} />
                <h1 className='addDriverTittle'>Add a new driver</h1>
                <form className='add-vehicle-form' onSubmit={handleFormSubmit}>
                    {message && <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}><FontAwesomeIcon icon="fa-solid fa-circle-exclamation" /><p>{message}</p></div>}
                    <div className="uploadImage-section">
                        <span className="uploadImage" onClick={handleUploadClick}>
                            <FontAwesomeIcon icon="fa-solid fa-upload" />
                            <span>
                                <b>Upload your picture</b>
                                <p>File format Max. 25MB</p>
                            </span>
                        </span>
                        <img src={formData.profileImg || profileImag} alt="Uploaded preview" />
                        <input
                            type="file"
                            id="profileImg"
                            name="profileImg"
                            accept="image/*"
                            style={{ display: "none" }}
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className='add-vehicle-form-content form-1'>
                        <Input
                            label="Full Name"
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            label="Email Address"
                            name="email"
                            type="text"
                            placeholder="Enter an Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            label="Phone Number"
                            type="text"
                            name="phoneNumber"
                            placeholder="00-231-2024"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            label="License Number"
                            type="text"
                            name="licenseNumber"
                            value={formData.licenseNumber}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            label="Address"
                            type="text"
                            name="address"
                            placeholder="Enter"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className='add-vehicle-button'>
                        <button type="button" onClick={onClick}>Discard</button>
                        <button type="submit">
                            {loading ? <FontAwesomeIcon icon="fa-solid fa-spinner" size="1x" spin /> : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

AddDriversection.propTypes = {
    onClick: PropTypes.func,
    setDriverForm: PropTypes.func,
    fetchDrivers: PropTypes.func
};

export default AddDriversection;
