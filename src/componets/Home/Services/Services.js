import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const {services} =useServices();
    return (
        <div>
            <div className="m-4"  id="services"> 
                <h3 className="mb-5 ms-3 mt-5">With more than 2,000,000 digital encounters across 80+ services, we are reaching more New Yorkers every day</h3>
                <h1 className=" ms-3" >Digital Health Services</h1>
                <hr />
            </div>
            <Row xs={1} md={3} className="g-5 m-4">
            {
                services?.map( service=> <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </Row>
            
        </div>
    );
};

export default Services;