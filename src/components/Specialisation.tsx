import drugstore from "/Drugstore.png"
import heartRate from "/HeartRate.png"
import stethoscope from "/stethoscope.png"
import capsule from "/capsule.png"
import heartRateMonitor from "/heartRateMonitor.png"
import q from "/q.png"
import Xray from "/X-Ray.png"
const Specialisation = () => {
    return (
        <div className='specialisation'>
            <h2 className='specialisation-heading'>Find by specialisation</h2>
            <div className="find-item-wrapper">
                <div className="items">
                    <div className="img-wrapper">

                        <img src={drugstore} className="item-img" alt="Drugstore image" />
                    </div>
                    <p className='details'>Dentistry</p>
                </div>
                <div className="items">
                    <div className="img-wrapper">

                        <img src={stethoscope} className="item-img" alt="Stethoscope image" />
                    </div>
                    <p className='details'>Primary Care</p>
                </div>
                <div className="items">
                    <div className="img-wrapper">
                        <img src={heartRate} className="item-img" alt="HeartRate image" />
                    </div>
                    <p className='details'>Cardiology</p>
                </div>
                <div className="items">
                    <div className="img-wrapper">
                        <img src={heartRateMonitor} className="item-img" alt="HeartRateMonitor image" />
                    </div>
                    <p className='details'>Dentistry</p>
                </div>
                <div className="items">
                    <div className="img-wrapper">
                        <img src={capsule} className="item-img" alt="capsule image" />
                    </div>
                    <p className='details'>Dentistry</p>
                </div>
                <div className="items">
                    <div className="img-wrapper">
                        <img src={q} className="item-img" alt="quality image" />
                    </div>
                    <p className='details'>Dentistry</p>
                </div>
                <div className="items">
                    <div className="img-wrapper">
                        <img src={drugstore} className="item-img" alt="Drugstore image" />
                    </div>
                    <p className='details'>Dentistry</p>
                </div>
                <div className="items">
                    <div className="img-wrapper">
                        <img src={Xray} className="item-img" alt="Xray image" />
                    </div>
                    <p className='details'>Dentistry</p>
                </div>

            </div>
            <div className="view-all-wrapper">

                <button className='view-all'>View All</button>
            </div>
        </div>
    )
}

export default Specialisation