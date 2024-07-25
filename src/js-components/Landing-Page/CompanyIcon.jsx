import ExelLogo from '../../assets/exel_Logo.png'
import PeaceLogo from '../../assets/peacemass_logo.png'
import GIGLogo from '../../assets/gig_motors_logo.png'
import GUOLogo from '../../assets/guo_logo.png'
import upsLogo from '../../assets/ups_Logo.png'
import FedExLogo from '../../assets/FedEx_Logo.png'

const CompanyIcon = () => {
    return (
        <div className='companyLogo'>
            <img src={ExelLogo} alt="company logo" />
            <img src={PeaceLogo} alt="company logo" />
            <img src={GIGLogo} alt="company logo" />
            <img src={GUOLogo} alt="company logo" />
            <img src={upsLogo} alt="company logo" />
            <img src={FedExLogo} alt="company logo" />
        </div>
    )
}

export default CompanyIcon