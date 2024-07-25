import { useState, useRef } from 'react';
import Picture1 from '../../assets/Picture1.png'
import Picture2 from '../../assets/Picture2.png'
import Picture3 from '../../assets/Picture3.png'


const testimonials = [
    {
        message_title: 'Efficient Collaborating',
        message: "Using GammaFleet has been a game-changer for us. It’s simplified everything from route planning to easy collaboration. Plus, the customer support is top-notch!",
        image: Picture1,
        author: 'Debby Jane ',
        author_title: 'HR at SwiftRides '
    },
    {
        message_title: 'Intuitive Design',
        message: "For months now it's exceeded our expectations.The ease of use and comprehensive insights have optimized our operations and reduced costs significantly.",
        image: Picture2,
        author: 'Angela Jason',
        author_title: 'Manager at ABC Logistics'
    },
    {
        message_title: 'Mindblowing Service',
        message: "Impressed with how it has improved our fleet’s efficiency. The real-time tracking and reporting features are incredibly reliable. I highly recommend!",
        image: Picture3,
        author: 'Joseph Cooper',
        author_title: 'CEO at ABC Motors'
    }
];

const ReviewSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef(null);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        containerRef.current.scrollTo({
            left: containerRef.current.clientWidth * index,
            behavior: "smooth"
        });
    };

    return (
        <section className="reviewSection">
            <h1>Real Stories from Real Customers</h1>
            <p>We have been working with clients around the world</p>
            <div className="review-container" ref={containerRef}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="review-content">
                        <div className='review'>
                            <h3>{testimonial.message_title}</h3>
                            <p>{testimonial.message}</p>
                            <div className='arrow' />
                        </div>
                        <div className="review-image">
                            <img src={testimonial.image} alt="Customer" />
                            <h4>{testimonial.author}</h4>
                            <p>{testimonial.author_title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="review-dots">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default ReviewSection;
