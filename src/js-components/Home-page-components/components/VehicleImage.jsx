import busImage from "../../../assets/Vehicles/bus-image.png";
import truckImage from "../../../assets/Vehicles/truck-image.png";
import vanImage from "../../../assets/Vehicles/van-image.png";
import suvImage from "../../../assets/Vehicles/suv-image.png";
import sedanImage from "../../../assets/Vehicles/sedan-image.png";

const VehicleImage = (productType) => {
  if (productType === 'Truck') {
    return truckImage;
  } else if (productType === 'Sedan') {
    return sedanImage;
  } else if (productType === 'Van') {
    return vanImage;
  } else if (productType === 'SUV') {
    return suvImage;
  } else if (productType === 'Coach') {
    return busImage;
  } else return busImage;
}

export default VehicleImage