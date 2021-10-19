import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('/services.json')
        .then(res=> res.json())
        .then(data=>setServices(data))
    } , [serviceId])
    // console.log(services)
        const service= services.find( s => s.id == serviceId);
        console.log(service)
        const {img,title,description} =service || {};
    return (
        <div className=" m-5">
                 <Card  className="d-flex flex-row align-items-center">
                     <Card.Img className="img-fluid" src={img} />
                    <Card.Body>
                     <Card.Title>{title}</Card.Title>
                     <Card.Text>
                         {description}
                     </Card.Text>
                     <Link className="learn-more-btn" to="/home">Home</Link>
                 </Card.Body>
                </Card>
        </div>
    );
};

export default ServiceDetails;