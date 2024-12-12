import ServiceCardProps from "../interfaces/ServiceCardProps"

const ServiceCard: React.FC<ServiceCardProps> = ({ key, identifier, image, count, cardName }) => {
    console.log(typeof(identifier),"identifier");
    
    return (
        <div key={key} className={`service-card ${identifier}`}>
            <img className="service-img" src={image} alt={image} />
            <h1 className="service-count">{count}</h1>
            <p className="service-cardName">{cardName}</p>
        </div>
    )
}

export default ServiceCard