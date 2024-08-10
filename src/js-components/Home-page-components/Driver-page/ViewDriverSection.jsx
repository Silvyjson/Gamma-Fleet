import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DriversImage from "../../../assets/DriversImage.png";
import phonecall from "../../../assets/call.png";
import message from "../../../assets/message.png";
import camera from "../../../assets/camera.png";
import location from "../../../assets/carbon_location.png";
import PropTypes from "prop-types";
import DriverTripTable from "./DriverTripTable";
import VehicleImage from "../components/VehicleImage";


const ViewDriverSection = ({ driver, onReturn }) => {

    const { fullName, driverId, licenseNumber, performanceRate, assignedVehicle } = driver;
    const vehicleImage = VehicleImage(driver.assignedVehicle.productType);

    return (
        <section>
            <div className="driver-section-top">
                <div className="arrow-return" onClick={onReturn}><FontAwesomeIcon icon="fa-solid fa-arrow-left" /></div>
                <button className="deletedriver"><FontAwesomeIcon icon="fa-solid fa-trash" /> Delete Driver</button>
            </div>
            <div className="driver-list-content">
                <div className="driverProfile">
                    <img src={driver.profileImg || DriversImage} alt="image of the driver" />
                </div>
                <div className="driver-detail-section">
                    <p>Driver: <b>{fullName}</b></p>
                    <div className="driver-icon">
                        <span>
                            <img src={phonecall} alt="call icon" />
                        </span>
                        <span>
                            <img src={message} alt="message icon" />
                        </span>
                        <span>
                            <img src={camera} alt="camera icon" />
                        </span>
                        <span>
                            <img src={location} alt="location icon" />
                        </span>
                    </div>
                    <div className="driver-details">
                        <span>
                            <p>ID Number:</p>
                            <b>ID{driverId}</b>
                        </span>
                        <span>
                            <p>Driver’s License:</p>
                            <b>{licenseNumber}</b>
                        </span>
                        <span>
                            <p>Performance:</p>
                            <b>{performanceRate}</b>
                        </span>
                        <span>
                            <p>Currently assigned car:</p>
                            <b>{assignedVehicle.vehicleName}</b>
                        </span>
                    </div>
                </div>
                <img src={vehicleImage} alt="image of a vehicle" className="vehi-image" />
            </div>
            <DriverTripTable />
        </section>
    )
}

ViewDriverSection.propTypes = {
    driver: PropTypes.object,
    onReturn: PropTypes.func,
};

export default ViewDriverSection