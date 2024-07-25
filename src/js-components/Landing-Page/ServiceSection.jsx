import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceSection() {

    const about_cards = [
        {
            icon: "fa-solid fa-wrench",
            title: "Maintenance Management",
            body: "Boost efficiency and maximize uptime by prioritizing issues in your fleet and customize maintenance schedules."
        },
        {
            icon: "fa-solid fa-location-dot",
            title: "Real-Time Vehicle Tracking",
            body: "An all-in-one service that helps you with real-time GPS tracking and display vehicle locations on a map."
        },
        {
            icon: "fa-solid fa-chart-simple",
            title: " Basic Reporting and Analytics",
            body: "Measure what matters with generated custom reports by selecting specific data points and timeframes."
        },
        {
            icon: "fa-solid fa-hourglass-start",
            title: "Fuel Management",
            body: "Automatically download fuel transactions and receive alerts for invalid odometer readings."
        },
        {
            icon: "fa-solid fa-person",
            title: "Driver Assignment",
            body: "See all of your driver assignments and manage them with ease."
        },
        {
            icon: "fa-solid fa-truck-fast",
            title: "Fleet Management",
            body: "Plan, schedule and track tasks and costs. View a complete service history for every vehicle in your fleet."
        }
    ];

    return (
        <section className="service-section">
            <h1>Cutting-edge features</h1>
            <p className="p-heading">Our unique features are tailored to unlock the full potential of your fleet operations. This is a cloud-based intuitive platform that simplifies fleet management, reduces operational costs, and offers flexibility to meet your diverse business needs.</p>
            <span className="service-container">
                {about_cards.map((item, index) => (
                    <div className="service_card" key={index}>
                        <div>
                            <span>
                                <p>
                                    <FontAwesomeIcon icon={item.icon} />
                                </p>
                            </span>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        <p className="learn-more">Learn more {""}<FontAwesomeIcon icon="fa-solid fa-arrow-right" /></p>
                    </div>
                ))}
            </span>
        </section>
    );
}

export default ServiceSection;