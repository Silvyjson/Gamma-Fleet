import { useState, useEffect } from "react";
import Cookies from 'react-cookies';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DriversImage from "../../../assets/DriversImage.png";
import phonecall from "../../../assets/call.png";
import message from "../../../assets/message.png";
import camera from "../../../assets/camera.png";
import location from "../../../assets/carbon_location.png";
import ViewDriverSection from "./ViewDriverSection";
import AddDriversection from "./AddDriversection";
import VehicleImage from "../components/VehicleImage";

const DriverListSection = () => {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [loading, setLoading] = useState(false);
  const [driverForm, setDriverForm] = useState(false);

  const fetchDrivers = async () => {
    const token = Cookies.load('token');
    setLoading(true);
    try {
      const response = await axios.get('https://gamma-fleet-backend.onrender.com/api/get-driver', {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const fetchedDrivers = response.data.drivers;
      setDrivers(fetchedDrivers);
    } catch (error) {
      console.error('There was an error fetching the drivers!', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  const handleGetSelectedDriver = async (driverId) => {
    const token = Cookies.load('token');
    setLoading(true);
    try {
      const response = await axios.get(`https://gamma-fleet-backend.onrender.com/api/get-driver/${driverId}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const fetchedDriver = response.data.driver;
      setSelectedDriver(fetchedDriver);
    } catch (error) {
      console.error('There was an error fetching the driver details!', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading"><FontAwesomeIcon icon="fa-solid fa-spinner" size="2x" spin /></div>;
  }

  const handleReturn = () => {
    setSelectedDriver(null);
  };

  const handleGetDriverForm = () => {
    setDriverForm(true);
  }

  const handleRemoveDriverForm = () => {
    setDriverForm(false);
    fetchDrivers();
  }

  if (selectedDriver) {
    return (
      <ViewDriverSection driver={selectedDriver} onReturn={handleReturn} onGetForm={handleGetDriverForm} />
    );
  }

  return (
    <section className="driver-list-section">
      <div className="driver-section-top">
        <h3>Driver</h3>
        <button onClick={handleGetDriverForm}><FontAwesomeIcon icon="fa-solid fa-plus" /> Add New Driver</button>
      </div>
      <div className="driver-list-container">
        {drivers.length > 0 ? (
          drivers.map((driver) => {
            if (!driver) return null;
            const vehicleImage = VehicleImage(driver.assignedVehicle.productType);

            return (
              <div
                className="driver-list-content"
                key={driver._id}
                onClick={() => handleGetSelectedDriver(driver._id)}
              >
                <div className="driverProfile">
                  <img src={driver.profileImg || DriversImage} alt="image of the driver" />
                </div>
                <div className="driver-detail-section">
                  <p>Driver: <b>{driver.fullName}</b></p>
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
                      <b>ID{driver.driverId}</b>
                    </span>
                    <span>
                      <p>Driver’s License:</p>
                      <b>{driver.licenseNumber}</b>
                    </span>
                    <span>
                      <p>Performance:</p>
                      <b>{driver.performanceRate}</b>
                    </span>
                    <span>
                      <p>Currently assigned car:</p>
                      <b>{driver.assignedVehicle.vehicleName}</b>
                    </span>
                  </div>
                </div>
                <img src={vehicleImage} alt="image of a vehicle" className="vehi-image" />
              </div>
            )
          })
        ) : (
          <p className="none">No drivers added yet</p>
        )}
      </div>
      {driverForm && <AddDriversection onClick={handleRemoveDriverForm} setDriverForm={setDriverForm} fetchDrivers={fetchDrivers} />}
    </section>
  );
};

export default DriverListSection;
