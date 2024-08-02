import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types";

const ViewVehiclesection = ({ onClick }) => {
    return (
        <div className="view-vehicle-section">
            <h3>DRIVER: <b>Micheal Abdul</b></h3>
            <div className="vehivle-buttons">
                <button className="first-button">ACTIVE</button>
                <button className="second-button" onClick={onClick}><FontAwesomeIcon icon="fa-solid fa-plus" />ADD VEHICLE</button>
            </div>

            <div className="view-vehicle-details">

            </div>
        </div>
    )
}

ViewVehiclesection.propTypes = {
    onClick: PropTypes.func
}

export default ViewVehiclesection