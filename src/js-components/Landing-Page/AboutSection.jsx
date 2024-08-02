import image from '../../assets/GroupImage.png'

const AboutSection = () => {
    return (
        <div className='about-section'>
            <h1>Your complete solution for all fleet management & maintenance requirements.</h1>
            <img src={image} alt="image of a screen showing gamma fleet" />
        </div>
    )
}

export default AboutSection