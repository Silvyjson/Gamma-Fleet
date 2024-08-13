import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'react-cookies';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VehicleStatus = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [statusCounts, setStatusCounts] = useState({
        Active: 0,
        Waiting: 0,
        Inactive: 0,
        Idle: 0,
    });

    const getStatusColor = (status) => {
        switch (status) {
            case "Active":
                return "green";
            case "Waiting":
                return "blue";
            case "Inactive":
                return "black";
            case "Idle":
                return "red";
            default:
                return "gray";
        }
    };

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const token = Cookies.load('token');
                const response = await axios.get('https://gamma-fleet-backend.onrender.com/api/get-vehicle', {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const fetchedVehicles = response.data.vehicles;

                // Calculate the status counts
                const counts = fetchedVehicles.reduce((acc, vehicle) => {
                    const status = vehicle.status;
                    if (acc[status] !== undefined) {
                        acc[status]++;
                    }
                    return acc;
                }, { Active: 0, Waiting: 0, Inactive: 0, Idle: 0 });

                setVehicles(fetchedVehicles);
                setStatusCounts(counts);
            } catch (error) {
                console.error('There was an error fetching the vehicles!', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);

    // Calculate the total number of vehicles
    const totalVehicles = vehicles.length;

    return (
        <section className="vehicle-status-section">
            {Object.keys(statusCounts).map((status, index) => {
                const percentage = totalVehicles > 0 ? (statusCounts[status] / totalVehicles) * 100 : 0;
                const dashArray = 2 * Math.PI * 40;
                const dashOffset = dashArray - (dashArray * percentage) / 100;

                const strokeColor = statusCounts[status] > 0 ? getStatusColor(status) : "gray";
                const strokeWidth = statusCounts[status] > 0 ? "10" : "2";

                return (
                    <div key={index} className="vehicle-status-container">
                        {loading ? (<p><FontAwesomeIcon icon="fa-solid fa-circle-notch" spin size="1x" /></p>) :
                            (<>
                                <div className="status-circle">
                                    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            stroke="gray"
                                            strokeWidth="1"
                                            fill="white"
                                        />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            stroke={strokeColor}
                                            strokeWidth={strokeWidth}
                                            fill="none"
                                            strokeDasharray={dashArray}
                                            strokeDashoffset={dashOffset}
                                        />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            stroke="gray"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeDasharray={dashArray}
                                            strokeDashoffset="0"
                                            style={{ visibility: statusCounts[status] > 0 ? "hidden" : "visible" }}
                                        />
                                    </svg>
                                    <div className="status-circle-inner">
                                        {statusCounts[status]}
                                    </div>
                                </div>
                                <div className="vehicle-status-details">
                                    <span
                                        className="status-color"
                                        style={{ backgroundColor: getStatusColor(status) }}
                                    />
                                    <h2 style={{ color: getStatusColor(status) }}>{status}</h2>
                                    <p>{statusCounts[status]} vehicles</p>
                                </div>
                            </>)}
                    </div>
                );
            })}
        </section>
    );
};

export default VehicleStatus;
