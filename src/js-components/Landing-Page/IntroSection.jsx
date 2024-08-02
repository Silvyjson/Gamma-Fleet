import { useNavigate } from 'react-router-dom'
import map from '../../assets/map.png'

const IntroSection = () => {
    const navigate = useNavigate();

    return (
        <section className='intro-section'>
            <div>
                <span>
                    <h1>Get started with Gamma Fleet today.</h1>
                    <p>Maximize your fleet&apos;s potential with our intuitive fleet management platform. Create a free account and get hands-on with features designed to enhance efficiency, reduce costs, and improve safety. Start your journey towards better fleet management now!</p>
                    <button onClick={() => navigate("/Gamma-Fleet/signUp-page")}>Get Started</button>
                </span>
                <img src={map} alt="map" />
            </div>
        </section>
    )
}

export default IntroSection