import { useState, useEffect } from 'react';
import VehicleStatus from "../../Home-page-components/Dashboard-page/VehicleStatus"
import MonthlyBudget from '../../Home-page-components/Dashboard-page/MonthlyBudget';
import LiveLocationSection from "../../Home-page-components/LiveLocationSection";

const DashboardPage = () => {
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        setCurrentMonth(`${year}-${month}`);
    }, []);

    return (
        <section className="homepage-pages">
            <div className='dashboard-overview'>
                <h3>Overview</h3>
                <input type="month" value={currentMonth} onChange={(e) => setCurrentMonth(e.target.value)} />
            </div>
            <VehicleStatus />
            <div className='st-dashboard'>
                <MonthlyBudget />
                <LiveLocationSection />
            </div>
        </section>
    )
}

export default DashboardPage