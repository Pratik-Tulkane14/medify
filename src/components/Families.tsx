import serviceData from "../constants/serviceData"
import serviceData1 from "../constants/serviceData1";
import ServiceCard from "./ServiceCard"
type ServiceItem = {
    id:number,
    image: string;
    count: string;
    cardName: string;
};
const Families: React.FC = () => {
    return (
        <div className="families-wrapper">
            <div className="families-left">
                <p className="families-heading">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY</p>
                <h2 className="families-sub-heading">Our Families</h2>
                <p className="families-details">We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
            </div>
            <div className="families-right">
                <div className="inner-left">

                    {serviceData?.map((item: ServiceItem) => {
                        return (
                            <ServiceCard key={item.id} identifier={item.id===2? "first-part":""} image={item.image} count={item.count} cardName={item.cardName} />
                        )
                    })}
                </div>
                <div className="inner-right">

                    {serviceData1?.map((item: ServiceItem) => {
                        return (
                            <ServiceCard key={item.id} identifier={item.id ===2?"second-part":""} image={item.image} count={item.count} cardName={item.cardName} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Families