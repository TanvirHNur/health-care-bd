import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
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
        const service= services.find( s => s.id == serviceId);
        const {img,title,description} =service || {};
    return (
        <div className="">
                 <Card  className="m-5 d-flex flex-row align-items-center row">
                     <Card.Img className="img-fluid col-sm-12 col-md-6" src={img} />
                    <Card.Body className=" col-sm-12 col-md-6">
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