import { useState } from "react";
import PropTypes from "prop-types";

const FAQ = (props) => {
    const { question, answer, isOpen, onClick } = props;

    return (
        <div className={isOpen ? "faqheight" : "faq-content"} onClick={onClick}>
            <h3 className={isOpen ? "qc" : ""}>{question}</h3>
            <article className={isOpen ? "open_article" : ""}>
                {answer}
            </article>
        </div>
    );
};

FAQ.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}


const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggleArticle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faq = [
        {
            question: "What is a fleet management system?",
            answer: "A fleet management system is a software solution designed to help businesses manage their vehicle fleets efficiently. It provides tools for real-time tracking, route optimization, maintenance scheduling, driver performance monitoring, and overall operational oversight."
        },
        {
            question: "How does real-time tracking work?",
            answer: "Real-time tracking uses GPS technology to monitor the location and status of vehicles in your fleet. This data is updated continuously, allowing fleet managers to see where each vehicle is at any given time and make informed decisions."
        },
        {
            question: "Can the system optimize routes for my drivers?",
            answer: "Yes, the system includes route optimization features that calculate the most efficient routes for your drivers based on various factors such as distance, traffic conditions, and delivery schedules."
        },
        {
            question: "How does the maintenance scheduling feature work?",
            answer: "The maintenance scheduling feature tracks each vehicle's usage and service history, and sends reminders when maintenance is due. This ensures that all vehicles are properly maintained, reducing the risk of breakdowns."
        },
        {
            question: "Can I monitor driver behavior and performance?",
            answer: "Yes, the system includes driver performance monitoring which tracks metrics such as speed, braking patterns, and adherence to routes. This helps in identifying areas for improvement and ensuring safe driving practices."
        },
        {
            question: "How secure is the fleet management system?",
            answer: "Our system employs robust security measures including data encryption, secure authentication, and role-based access control to ensure that all sensitive information is protected."
        },
        {
            question: "Can I access the fleet management system on mobile devices?",
            answer: "Yes, the system is designed to be accessible on various devices including desktops, tablets, and smartphones, ensuring you can manage your fleet from anywhere."
        },
        {
            question: "How do I handle emergencies or unexpected incidents?",
            answer: "The system includes alert and notification features that immediately inform you of any emergencies or unexpected incidents, allowing you to take prompt action."
        },
        {
            question: "What support is available if I encounter issues?",
            answer: "We offer comprehensive support including a knowledge base, tutorials, and a dedicated support team that can be contacted via phone, email, or live chat to assist with any issues."
        },
        {
            question: "What are the benefits of using a fleet management system?",
            answer: "Benefits include improved operational efficiency, reduced costs, enhanced safety, better compliance with regulations, and increased productivity. The system provides comprehensive tools to manage every aspect of your fleet effectively."
        }
    ];


    return (
        <section className="faq-section contact-section">
            <h1>FAQ ️</h1>
            <div className="faq-container">
                {faq.map((article, index) => (
                    <FAQ
                        key={index}
                        question={article.question}
                        answer={article.answer}
                        isOpen={index === openIndex}
                        onClick={() => handleToggleArticle(index)}
                    />
                ))}
            </div>
        </section>
    )
}

export default FAQSection