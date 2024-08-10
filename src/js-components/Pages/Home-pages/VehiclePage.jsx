import { useState, useEffect, useCallback } from "react";
import Cookies from 'react-cookies';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ViewVehiclesection from "../../Home-page-components/Vehicle-page/ViewVehiclesection";
import VehicleListSection from "../../Home-page-components/Vehicle-page/VehicleListSection";
import AddVehicleSection from "../../Home-page-components/Vehicle-page/AddVehicleSection";
import LiveLocationSection from "../../Home-page-components/LiveLocationSection";

const VehiclePage = () => {
    const [vehicleForm, setVehicleForm] = useState(false);
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchVehicles = useCallback(async () => {
        try {
            const token = Cookies.load('token');
            const response = await axios.get('https://gamma-fleet-backend.onrender.com/api/get-vehicle', {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const fetchedVehicles = response.data.vehicles;
            setVehicles(fetchedVehicles);

            if (fetchedVehicles.length > 0 && !selectedVehicle) {
                setSelectedVehicle(fetchedVehicles[0]);
            }
        } catch (error) {
            console.error('There was an error fetching the vehicles!', error);
        } finally {
            setLoading(false);
        }
    }, [selectedVehicle]);

    useEffect(() => {
        fetchVehicles();
    }, [fetchVehicles, selectedVehicle]);

    const handleGetVehicleForm = () => {
        setVehicleForm(true);
    };

    const handleCancelForm = () => {
        setVehicleForm(false);
        fetchVehicles(); // Refresh the vehicle list after closing the form
    };

    const handleVehicleSelect = (vehicle) => {
        setSelectedVehicle(vehicle);
    };

    if (loading) {
        return <div className="loading homepage-pages"><FontAwesomeIcon icon="fa-solid fa-spinner" size="2x" spin /></div>;
    }

    return (
        <section className="homepage-pages">
            <div className="vehicle-page-container">
                <VehicleListSection vehicles={vehicles} onSelectVehicle={handleVehicleSelect} />
                <div className="vehicle-detail-container">
                    <ViewVehiclesection
                        onClick={handleGetVehicleForm}
                        vehicle={selectedVehicle}
                    />
                    <LiveLocationSection />
                </div>
            </div>
            {vehicleForm && <AddVehicleSection setVehicleForm={setVehicleForm} onClick={handleCancelForm} fetchVehicles={fetchVehicles} />}
        </section>
    );
};

export default VehiclePage;
