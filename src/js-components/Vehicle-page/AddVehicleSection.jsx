import { useState } from 'react';
import { Input, Select } from '../Other-component/FormProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";
import axios from 'axios';

const AddVehicleSection = ({ onClick }) => {
    const [formData, setFormData] = useState({
        VehicleName: '',
        Model: '',
        ChassisNumber: '',
        ProductType: '',
        PurchaseDate: '',
        PermitType: '',
        OwnersName: '',
        OwnersLicense: '',
        address: {
            AddressLine1: '',
            AddressLine2: '',
            State: '',
            Country: ''
        },
        insurance: '',
        InsuranceDueDate: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (['AddressLine1', 'AddressLine2', 'State', 'Country'].includes(name)) {
            setFormData(prevState => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [name]: value
                }
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8008/api/add-vehicle', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            alert('Vehicle added successfully!');
            onClick();  // Close the form
        } catch (error) {
            console.error('There was an error adding the vehicle!', error);
            alert('Error adding vehicle: ' + (error.response ? error.response.data.message : error.message));
        }
    };

    return (
        <section className='addVehicleSection'>
            <div className='addVehicleContainer'>
                <FontAwesomeIcon icon="fa-solid fa-x" className='x-icon' onClick={onClick} />
                <h1>Add a new vehicle</h1>
                <form className='add-vehicle-form' onSubmit={handleFormSubmit}>
                    <div className='add-vehicle-form-content form-1'>
                        <Input
                            label="Vehicle Name"
                            type="text"
                            name="VehicleName"
                            placeholder="00-231-2024"
                            value={formData.VehicleName}
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Model"
                            name="Model"
                            value={formData.Model}
                            type="text"
                            placeholder="Enter a model"
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Chassis Number"
                            type="text"
                            name="ChassisNumber"
                            placeholder="00-231-2024"
                            value={formData.ChassisNumber}
                            onChange={handleInputChange}
                        />
                        <Select
                            label="Product type"
                            name="ProductType"
                            value={formData.ProductType}
                            type="text"
                            options={["Sedan", "SUV", "Truck", "Van", "Coupe", "Coach"]}
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Purchase Date"
                            type="date"
                            name="PurchaseDate"
                            placeholder="Enter"
                            value={formData.PurchaseDate}
                            onChange={handleInputChange}
                        />
                        <Select
                            label="Permit type"
                            name="PermitType"
                            value={formData.PermitType}
                            options={["Commercial", "Personal", "Government", "Rental", "Emergency"]}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='add-vehicle-form-content form-2'>
                        <Input
                            label="Owner’s Name"
                            type="text"
                            name="OwnersName"
                            placeholder="e.g John tall"
                            value={formData.OwnersName}
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Owner’s License"
                            type="text"
                            name="OwnersLicense"
                            placeholder="e.g John tall"
                            value={formData.OwnersLicense}
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Address Line 1"
                            type="text"
                            name="AddressLine1"
                            placeholder="house no, street, city"
                            value={formData.address.AddressLine1}
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Address Line 2"
                            type="text"
                            name="AddressLine2"
                            placeholder="house no, street, city"
                            value={formData.address.AddressLine2}
                            onChange={handleInputChange}
                        />
                        <Input
                            label="State"
                            type="text"
                            name="State"
                            placeholder="e.g Lagos state"
                            value={formData.address.State}
                            onChange={handleInputChange}
                        />
                        <Input
                            label="Country"
                            type="text"
                            name="Country"
                            placeholder="e.g Nigeria"
                            value={formData.address.Country}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='add-vehicle-form-content form-2'>
                        <span className='insurance'>
                            <p>Insurance</p>
                            <span className='radio-input'>
                                <span>
                                    <input type="radio" name="insurance" id="insurance-yes" value="Yes" onChange={handleInputChange} />
                                    <label htmlFor="insurance-yes">Yes</label>
                                </span>
                                <span>
                                    <input type="radio" name="insurance" id="insurance-no" value="No" onChange={handleInputChange} />
                                    <label htmlFor="insurance-no">No</label>
                                </span>
                            </span>
                        </span>
                        <Input
                            label="Insurance Due Date (If yes)"
                            type="date"
                            name="InsuranceDueDate"
                            placeholder="Enter due date"
                            value={formData.InsuranceDueDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='add-vehicle-button'>
                        <button type="button" onClick={onClick}>Discard</button>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

AddVehicleSection.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default AddVehicleSection;
