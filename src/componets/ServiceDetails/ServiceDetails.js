import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=>setServices(data))
    } , [])
    console.log(services)
        const service= services.find( s => s.id === serviceId)
        console.log(service)
    return (
        <div>
            this is details{serviceId}
            
        </div>
    );
};

export default ServiceDetails;