import HomePageHeader from "../../Other-component/HomePageHeader"
import HomePageNav from "../../Other-component/HomePageNav"

const MaintenancePage = () => {
    return (
        <section className="homepages">
            <HomePageNav />
            <div className="homepage-dashboard-container">
                <HomePageHeader />
            </div>
        </section>
    )
}

export default MaintenancePage