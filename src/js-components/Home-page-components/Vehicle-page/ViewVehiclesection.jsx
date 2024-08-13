import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import VehicleImage from "../components/VehicleImage";

const ViewVehiclesection = ({ onClick, vehicle }) => {

    if (!vehicle) {
        return (
            <div className="view-vehicle-section">
                <h3>DRIVER: <b>Driver</b></h3>
                <div className="vehicle-buttons">
                    <button className="first-button">No Status</button>
                    <button className="second-button" onClick={onClick}>
                        <FontAwesomeIcon icon="fa-solid fa-plus" /> ADD VEHICLE
                    </button>
                </div>
                <div className="view-vehicle-details">
                    <p className="none">No vehicle added yet</p>
                </div>
            </div>
        );
    }

    const { vehicleId, vehicleName, status, assignedDriver } = vehicle;

    const vehicleImage = VehicleImage(vehicle.productType);

    return (
        <div className="view-vehicle-section">
            <h3>DRIVER: <b>{assignedDriver.driverName}</b></h3>
            <div className="vehicle-buttons">
                <button className="first-button">{status}</button>
                <button className="second-button" onClick={onClick}>
                    <FontAwesomeIcon icon="fa-solid fa-plus" /> ADD VEHICLE
                </button>
            </div>
            <div className="view-vehicle-details">
                <div className="vehicle-image">
                    <img src={vehicleImage} alt="image of a vehicle" />
                </div>
                <div className="vehicle-details-list">
                    <span>
                        <p>Vehicle ID</p>
                        <b>ID {vehicleId}</b>
                    </span>
                    <span>
                        <p>Vehicle Name</p>
                        <b>{vehicleName}</b>
                    </span>
                    <span>
                        <p>Mileage</p>
                        <b>110km</b>
                    </span>
                    <span>
                        <p>Fuel Consumption</p>
                        <b>50L</b>
                    </span>
                    <span>
                        <p>Total Trips</p>
                        <b>345</b>
                    </span>
                    <span>
                        <p>Total Downtime</p>
                        <b>12</b>
                    </span>
                </div>
            </div>
        </div>
    );
};

ViewVehiclesection.propTypes = {
    onClick: PropTypes.func,
    vehicle: PropTypes.object
};

export default ViewVehiclesection;
