import { useState } from "react"
import HomePageHeader from "../../Other-component/HomePageHeader"
import HomePageNav from "../../Other-component/HomePageNav"
import ViewVehiclesection from "../../Vehicle-page/ViewVehiclesection"
import LiveLocationSection from "../../Vehicle-page/LiveLocationSection"
import VehicleListSection from "../../Vehicle-page/VehicleListSection"
import AddVehicleSection from "../../Vehicle-page/AddVehicleSection"

const VehiclePage = () => {
    const [vehicleForm, SetVehicleForm] = useState(false)

    const handleGetVehicleForm = () => {
        SetVehicleForm(true)
    }

    const handleCancelForm = () => {
        SetVehicleForm(false)
    }

    return (
        <section className="homepages">
            <HomePageNav />
            <div className="homepage-dashboard-container">
                <HomePageHeader />
                <div className="homepage-pages">
                    <div className="vehicle-page-container">
                        <VehicleListSection />
                        <div className="vehicle-detail-container">
                            <ViewVehiclesection onClick={handleGetVehicleForm} />
                            <LiveLocationSection />
                        </div>
                    </div>
                </div>
            </div>
            {vehicleForm && <AddVehicleSection onClick={handleCancelForm} />}
        </section>
    )
}

export default VehiclePage