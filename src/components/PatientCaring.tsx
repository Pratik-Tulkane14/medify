import freecancelation from '/freecancelation.png';
const PatientCaring: React.FC = () => {
    return (
        <div className='patient-caring'>
            <div className="">
                <img src={freecancelation} alt="free cancelation img" />
            </div>
            <div className="patient-container">
                <p className='patient-heading'>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                <h1 className='patient-sub-heading'>
                    Patient
                    <span className='highlight'>Caring</span>
                </h1>
                <p className='goal'>
                    Our goal is to deliver quality of care in a courteous, respectful, and
                    compassionate manner. We hope you will allow us to care for you and
                    strive to be the first and best choice for healthcare.
                </p>
                <div className="">
                    <ul className='points'>
                        <li>Stay Updated About Your Health</li>
                        <li>Check Your Results Online</li>
                        <li>Manage Your Appointments</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PatientCaring;
