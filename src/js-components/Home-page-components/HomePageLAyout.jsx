import HomePageNav from './components/HomePageNav'
import HomePageHeader from './components/HomePageHeader'
import { Outlet } from "react-router-dom";
import useAuth from '../../Api';

const HomePageLAyout = () => {

    useAuth();

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