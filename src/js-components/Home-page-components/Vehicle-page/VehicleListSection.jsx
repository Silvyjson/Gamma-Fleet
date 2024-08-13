import PropTypes from "prop-types";
import VehicleImage from "../components/VehicleImage";

const VehicleListSection = ({ vehicles, onSelectVehicle }) => {
    return (
        <section className="vehicle-list-section">
            <h3>Vehicles</h3>
            <div className="vehicle-list-container">
                {vehicles && vehicles.length > 0 ? (
                    vehicles.map((vehicle) => {
                        if (!vehicle) return null;
                        const vehicleImage = VehicleImage(vehicle.productType);

                        return (
                            <div
                                className="vehicle-list-content"
                                key={vehicle._id}
                                onClick={() => onSelectVehicle(vehicle)}
                            >
                                <div className="status">
                                    <p>{vehicle.status}</p>
                                </div>
                                <div className="details">
                                    <div className="details-content">
                                        <p>VEHICLE ID: <b>{vehicle.vehicleId}</b></p>
                                        <p>TYPE: <b>{vehicle.productType}</b></p>
                                        <p>DRIVER: <b>{vehicle.assignedDriver.driverName}</b></p>
                                    </div>
                                    <img src={vehicleImage} alt="image of a vehicle" className="image" />
                                </div>
                                <div className="active-trip">
                                    <div className="active-trip-details">
                                        <div className="date">
                                            <p>25th Jul</p>
                                            <p>28th Jul</p>
                                        </div>
                                        <div className="tripdot td1" />
                                        <div className="tripdot td2" />
                                        <div className="distance">
                                            <span className="distance-details dd1">
                                                <span>
                                                    <h3>12:25  Cms, Lagos Island</h3>
                                                    <p>12:55 loading</p>
                                                </span>
                                                <p className="time">1hrs 20mins</p>
                                            </span>
                                            <span className="distance-details dd2">
                                                <span>
                                                    <h3>15:56 Oregun, Lagos Island</h3>
                                                    <p>16:00 offloading</p>
                                                </span>
                                                <p className="time">24:46mins</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="none">No vehicle added yet</p>
                )}
            </div>
        </section>
    );
};

VehicleListSection.propTypes = {
    onSelectVehicle: PropTypes.func,
    vehicles: PropTypes.array
};

export default VehicleListSection;
