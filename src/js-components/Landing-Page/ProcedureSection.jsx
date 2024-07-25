import icon1 from '../../assets/01.png'
import icon2 from '../../assets/03.png'
import icon3 from '../../assets/05.png'
import icon4 from '../../assets/07.png'
import line1 from '../../assets/Line_Indicator.png'
import line2 from '../../assets/Line_Indicator1.png'


const ProcedureSection = () => {
    return (
        <div className='procedureSection'>
            <h1>How it works</h1>
            <div className='procedure-content'>
                <span className='procedure'>
                    <span>
                        <img src={icon1} alt="icon" />
                    </span>
                    <b>Register to create account</b>
                </span>
                <img src={line1} alt="line" className='line' />
                <span className='procedure'>
                    <span>
                        <img src={icon2} alt="icon" />
                    </span>
                    <b>Add all your Vehicles</b>
                </span >
                <img src={line2} alt="line" className='line' />
                <span className='procedure'>
                    <span>
                        <img src={icon3} alt="icon" />
                    </span>
                    <b>Manage fleets on your dashboard</b>
                </span>
                <img src={line1} alt="line" className='line' />
                <span className='procedure'>
                    <span>
                        <img src={icon4} alt="icon" />
                    </span>
                    <b>Access real-time tracking </b>
                </span>
            </div>
        </div>
    )
}

export default ProcedureSection