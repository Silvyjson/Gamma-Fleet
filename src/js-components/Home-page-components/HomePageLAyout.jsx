import HomePageNav from './components/HomePageNav'
import HomePageHeader from './components/HomePageHeader'
import { Outlet } from "react-router-dom";

const HomePageLAyout = () => {
    return (
        <section className="homepages">
            <HomePageNav />
            <div className="homepage-dashboard-container">
                <HomePageHeader />
                <main>
                    <Outlet />
                </main>
            </div>
        </section>
    )
}

export default HomePageLAyout